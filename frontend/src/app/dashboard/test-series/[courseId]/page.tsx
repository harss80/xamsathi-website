
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft, Clock, AlertCircle, CheckCircle2, XCircle,
    HelpCircle, ChevronRight, ChevronLeft, Flag, Award,
    BarChart2, Timer, RotateCcw, BookOpen, Brain, Zap, GraduationCap, Lock, Calendar, Coins
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
type TestItem = {
    _id: string;
    title: string;
    difficulty: string;
    duration_min: number;
    // locked: boolean; // Future: handle locking
};

function getBackendBase(): string {
    const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || process.env.NEXT_PUBLIC_API_URL || "").trim();
    if (envBase) return envBase;
    if (typeof window !== "undefined") {
        const host = window.location.hostname;
        if (host === "localhost" || host === "127.0.0.1") return "http://localhost:3001";
    }
    return "";
}

export default function CourseSeriesPage() {
    const params = useParams();
    const router = useRouter();
    const courseId = params.courseId as string;

    const apiBase = getBackendBase();

    // State
    const [tests, setTests] = useState<TestItem[]>([]);
    const [courseTitle, setCourseTitle] = useState<string>("Loading Course...");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hasPurchased, setHasPurchased] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const [classGrade, setClassGrade] = useState<number | null>(null);

    // Gamification State
    const [unlockedTests, setUnlockedTests] = useState<string[]>([]);
    const [coins, setCoins] = useState(0);
    const [unlockingId, setUnlockingId] = useState<string | null>(null);

    // Fetch Tests & User Status
    useEffect(() => {
        if (!courseId) return;

        const fetchData = async () => {
            try {
                if (!apiBase) {
                    throw new Error("NEXT_PUBLIC_API_URL is not set");
                }

                let localClass: number | null = null;
                try {
                    const userStr = localStorage.getItem("xamsathi_user");
                    if (userStr) {
                        const userObj = JSON.parse(userStr);
                        const cg = userObj?.class_grade;
                        if (typeof cg === "number" && cg >= 1 && cg <= 12) localClass = cg;
                        if (typeof cg === "string") {
                            const n = Number(String(cg).replace(/[^0-9]/g, ""));
                            if (!Number.isNaN(n) && n >= 1 && n <= 12) localClass = n;
                        }
                    }
                } catch {
                    // ignore
                }
                setClassGrade(localClass);

                // 1. Fetch Tests
                const resTests = await fetch(`${apiBase}/api/tests/courses/${courseId}/tests`, {
                    headers: localClass ? { "x-class-grade": String(localClass) } : undefined,
                });
                if (!resTests.ok) {
                    const errorData = await resTests.json().catch(() => ({}));
                    throw new Error(errorData.error || `Failed to load tests (Code: ${resTests.status})`);
                }
                const dataTests = await resTests.json();
                setTests(dataTests.items || []);

                // 1b. Try to find course title
                const resCourses = await fetch(`${apiBase}/api/tests/courses`, {
                    headers: localClass ? { "x-class-grade": String(localClass) } : undefined,
                });
                if (resCourses.ok) {
                    const dataCourses = await resCourses.json();
                    const course = dataCourses.items?.find((c: any) => c._id === courseId);
                    if (course) setCourseTitle(course.title);
                    else {
                        throw new Error("This course is not available for your class. Please update your class/grade in your profile.");
                    }
                }

                // 2. Fetch User Status
                const token = localStorage.getItem("xamsathi_token");
                if (token) {
                    const userStr = localStorage.getItem("xamsathi_user");
                    if (userStr) {
                        const userObj = JSON.parse(userStr);
                        const uId = userObj._id || userObj.id;
                        setUserId(uId);

                        // Fetch fresh user data
                        const resMe = await fetch(`${apiBase}/api/me`, {
                            headers: { 'x-user-id': uId }
                        });
                        if (resMe.ok) {
                            const meData = await resMe.json();
                            const user = meData.user;

                            // Free Access override
                            if (user?.free_access === true) {
                                setHasPurchased(true);
                            }

                            // Check Purchase
                            if (user?.purchased_courses?.includes(courseId)) {
                                setHasPurchased(true);
                            }

                            // Check Unlocks & Coins
                            if (user?.unlocked_tests) {
                                setUnlockedTests(user.unlocked_tests);
                            }
                            if (user?.coins) {
                                setCoins(user.coins);
                            }
                        }
                    }
                }

            } catch (err: any) {
                console.error(err);
                if (!apiBase) {
                    setError("Backend URL missing. Set NEXT_PUBLIC_API_URL (Vercel env) to your backend base URL (example: https://YOUR-RENDER-SERVICE.onrender.com). Then redeploy the frontend.");
                } else {
                    setError(err.message || "Could not load the test series. Please try again later.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [courseId, apiBase]);

    const handleStartTest = (testId: string) => {
        // Double check just in case, but UI should prevent this
        const isUnlocked = hasPurchased || unlockedTests.includes(testId);
        if (!isUnlocked) {
            alert("Please unlock the test first.");
            return;
        }
        router.push(`/dashboard/test-runner/${testId}`);
    };

    const handleBuyNow = async () => {
        if (!userId) {
            alert("Please login first.");
            return;
        }
        const { initiatePayment } = await import('@/lib/payment');
        initiatePayment(
            userId,
            courseId,
            (paymentId) => {
                alert("Payment Successful! Course Unlocked.");
                setHasPurchased(true);
                window.location.reload();
            },
            (err) => {
                alert("Payment Failed or Cancelled. Try again.");
                console.error(err);
            }
        );
    };

    const handleUnlockTest = async (testId: string) => {
        if (!userId) return;

        if (coins < 100) {
            alert(`Insufficient Coins! You need 100 coins. You have ${coins}.`);
            return;
        }

        if (!confirm("Unlock this test for 100 Coins?")) return;

        setUnlockingId(testId);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/gamification/unlock-test`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-id': userId
                },
                body: JSON.stringify({ testId })
            });

            const data = await res.json();
            if (res.ok) {
                setCoins(data.coins);
                setUnlockedTests(prev => [...prev, testId]);
                // alert("Test Unlocked!"); 
            } else {
                alert(data.error || "Unlock failed");
            }
        } catch (err) {
            console.error("Unlock error", err);
            alert("Failed to unlock");
        } finally {
            setUnlockingId(null);
        }
    };

    // Roadmap data for specified courses
    const roadmap = useMemo(() => {
        if (courseId === "698f8a866fadfeda52b1916a") { // 12th Board
            return [
                { week: 1, title: "Electromagnetism & Physical Chem", goals: ["Electric Fields & Potential", "Solutions & Electrochemistry", "Relations & Functions"] },
                { week: 2, title: "Current, Magnetism & Inorganic", goals: ["Current Electricity & Magnetism", "Chemical Kinetics", "Calculus - Continuity"] },
                { week: 3, title: "Optics, Organic & Integrals", goals: ["Ray & Wave Optics", "Organic - Haloalkanes to Amines", "Integrals & Diff Equations"] },
                { week: 4, title: "The Final Lap", goals: ["Full Board Pattern Mock Tests", "Final Revision", "Exam Strategy"] },
            ];
        }
        if (courseId === "698f8a866fadfeda52b19110") { // 10th Board
            return [
                { week: 1, title: "Foundation & High Weightage", goals: ["Real Numbers & Polynomials", "Light - Reflection", "Nationalism in India"] },
                { week: 2, title: "Core Concepts", goals: ["Quadratic Equations", "Acids, Bases & Salts", "Resources & Agriculture"] },
                { week: 3, title: "Complex Topics", goals: ["Trigonometry", "Life Processes", "Civics - Power Sharing"] },
                { week: 4, title: "Final Strike", goals: ["Maths Mock Test", "Science Mock Test", "Board Pattern Practice"] },
            ];
        }
        return null;
    }, [courseId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                    <p className="text-slate-400 text-sm animate-pulse font-bold tracking-widest uppercase">Initializing Series...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
                    <AlertCircle className="w-10 h-10 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Sync Error</h2>
                <p className="text-slate-400 max-w-md mb-8 leading-relaxed">
                    {error}
                </p>
                <Link href="/dashboard?tab=tests" className="px-8 py-3 bg-white text-black font-black rounded-2xl hover:bg-slate-200 transition-all active:scale-95">
                    Back to Dashboard
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020617] text-white pb-32">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[0%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10 px-6 pt-10">
                {/* Top Nav */}
                <div className="flex items-center justify-between mb-12">
                    <Link href="/dashboard?tab=tests" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all font-bold">
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                        <span>Back to Dashboard</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-6 py-2.5 bg-slate-900/80 backdrop-blur-xl rounded-full border border-slate-800 shadow-2xl">
                            <Coins className="w-4 h-4 text-yellow-500" />
                            <span className="font-black text-white">{coins}</span>
                            <span className="text-[10px] text-slate-500 uppercase font-black ml-1">Coins</span>
                        </div>
                    </div>
                </div>

                {/* Hero Header */}
                <div className="mb-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div className="flex-1 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3"
                            >
                                <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400">Premium Board Prep</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
                            >
                                {courseTitle}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed"
                            >
                                Master your board exams with our curated 1-month intensive plan. Subject-wise mocks, case studies, and full patterns.
                            </motion.p>
                        </div>

                        {!hasPurchased && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex-shrink-0"
                            >
                                <button
                                    onClick={handleBuyNow}
                                    className="relative group p-1 rounded-3xl overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 animate-gradient" />
                                    <div className="relative px-10 py-6 bg-slate-950 rounded-[1.4rem] group-hover:bg-slate-950/40 transition-colors flex flex-col items-center">
                                        <div className="flex items-center gap-2 text-white font-black text-xl mb-1">
                                            <Lock className="w-5 h-5" />
                                            Unlock Series
                                        </div>
                                        <div className="text-indigo-400 text-sm font-bold">Full Access @ ₹399 Only</div>
                                    </div>
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Course Roadmap / Plan */}
                {roadmap && (
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 whitespace-nowrap">4-WEEK MASTER PLAN</h2>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {roadmap.map((phase: { week: number; title: string; goals: string[] }) => (
                                <div key={phase.week} className="relative group">
                                    <div className="absolute inset-0 bg-indigo-600/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 h-full flex flex-col">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-indigo-400 font-black mb-4 shadow-xl">
                                            W{phase.week}
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">{phase.title}</h3>
                                        <div className="space-y-2 mt-auto">
                                            {phase.goals.map((goal: string, i: number) => (
                                                <div key={i} className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                                                    <CheckCircle2 className="w-3 h-3 text-indigo-500" />
                                                    {goal}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tests List */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-2xl font-black">Curated <span className="text-indigo-400">Tests</span></h2>
                        <div className="text-slate-500 text-sm font-bold">Total {tests.length} Modules</div>
                    </div>

                    <div className="grid gap-4">
                        {tests.map((test, index) => {
                            const isUnlocked = hasPurchased || unlockedTests.includes(test._id);

                            // Guess week based on index for board courses
                            let weekMarker = null;
                            if (courseId === "698f8a866fadfeda52b1916a" || courseId === "698f8a866fadfeda52b19110") {
                                if (index === 0) weekMarker = "Week 1: Phase One";
                                else if (index === 4) weekMarker = "Week 2: Phase Two";
                                else if (index === 8) weekMarker = "Week 3: Phase Three";
                                else if (index === 12) weekMarker = "Week 4: Final Assessment";
                            }

                            return (
                                <React.Fragment key={test._id}>
                                    {weekMarker && (
                                        <div className="pt-8 pb-4">
                                            <div className="flex items-center gap-4">
                                                <div className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-black uppercase tracking-widest text-indigo-400 ring-4 ring-indigo-500/5">
                                                    {weekMarker}
                                                </div>
                                                <div className="h-[1px] flex-1 bg-slate-800/50" />
                                            </div>
                                        </div>
                                    )}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`group relative overflow-hidden bg-slate-900/30 backdrop-blur-xl border ${!isUnlocked ? 'border-white/5' : 'border-white/5 hover:border-indigo-500/30'} rounded-[2rem] p-6 transition-all hover:translate-x-1`}
                                    >
                                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                            <div className="flex items-start gap-6">
                                                <div className={`hidden sm:flex w-16 h-16 rounded-[1.25rem] items-center justify-center text-2xl font-black ${!isUnlocked ? 'bg-slate-950 text-slate-800 border-slate-900' : 'bg-indigo-600/10 text-indigo-400 border-indigo-500/10'} border shadow-2xl`}>
                                                    {index + 1}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                                        <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider border ${test.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                            test.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                                                'bg-red-500/10 text-red-500 border-red-500/20'
                                                            }`}>
                                                            {test.difficulty || 'Medium'}
                                                        </span>
                                                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-black uppercase tracking-widest">
                                                            <Clock className="w-3 h-3" />
                                                            {test.duration_min} Mins
                                                        </div>
                                                    </div>
                                                    <h3 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors">
                                                        {test.title}
                                                    </h3>
                                                    <div className="mt-2 flex items-center gap-2">
                                                        {!isUnlocked ? (
                                                            <div className="flex items-center gap-1.5 text-[10px] text-slate-600 font-bold uppercase tracking-wider">
                                                                <Lock className="w-3 h-3" />
                                                                Requires Enrollment or Unlock
                                                            </div>
                                                        ) : (
                                                            <div className="flex items-center gap-1.5 text-[10px] text-indigo-400 font-bold uppercase tracking-wider">
                                                                <Zap className="w-3 h-3" />
                                                                Ready to challenge
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                {isUnlocked ? (
                                                    <button
                                                        onClick={() => handleStartTest(test._id)}
                                                        className="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black transition-all shadow-xl shadow-indigo-600/20 active:scale-95 flex items-center gap-3"
                                                    >
                                                        Challenge Now
                                                        <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                ) : (
                                                    <div className="flex flex-col sm:flex-row gap-2">
                                                        <button
                                                            onClick={() => handleUnlockTest(test._id)}
                                                            disabled={unlockingId === test._id}
                                                            className="px-5 py-3.5 rounded-2xl bg-slate-950 text-yellow-500 font-black border border-yellow-500/20 hover:border-yellow-500/50 transition-all flex items-center justify-center gap-2 shadow-xl"
                                                        >
                                                            {unlockingId === test._id ? (
                                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                            ) : (
                                                                <Coins className="w-4 h-4" />
                                                            )}
                                                            Unlock (100)
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </React.Fragment>
                            );
                        })}

                        {tests.length === 0 && (
                            <div className="text-center py-32 bg-slate-900/20 rounded-[3rem] border-2 border-slate-900 border-dashed">
                                <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center mx-auto mb-6">
                                    <BookOpen className="w-10 h-10 text-slate-700" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-2">Modules Coming Soon</h3>
                                <p className="text-slate-500 max-w-sm mx-auto">We are currently curating high-weightage content for this series. Check back in a few hours.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const Loader2 = ({ className }: { className?: string }) => (
    <div className={className}>
        <div className="w-full h-full border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
    </div>
);

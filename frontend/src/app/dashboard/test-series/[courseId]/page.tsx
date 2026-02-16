
"use client";

import React, { useState, useEffect } from "react";
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

export default function CourseSeriesPage() {
    const params = useParams();
    const router = useRouter();
    const courseId = params.courseId as string;

    const apiBase = process.env.NEXT_PUBLIC_API_URL;

    // State
    const [tests, setTests] = useState<TestItem[]>([]);
    const [courseTitle, setCourseTitle] = useState<string>("Loading Course...");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hasPurchased, setHasPurchased] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);

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
                // 1. Fetch Tests
                const resTests = await fetch(`${apiBase}/api/tests/courses/${courseId}/tests`);
                if (!resTests.ok) throw new Error("Failed to load tests");
                const dataTests = await resTests.json();
                setTests(dataTests.items || []);

                // 1b. Try to find course title
                const resCourses = await fetch(`${apiBase}/api/tests/courses`);
                if (resCourses.ok) {
                    const dataCourses = await resCourses.json();
                    const course = dataCourses.items?.find((c: any) => c._id === courseId);
                    if (course) setCourseTitle(course.title);
                    else setCourseTitle("Premium Test Series");
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

            } catch (err) {
                console.error(err);
                if (!apiBase) {
                    setError("Backend URL missing. Set NEXT_PUBLIC_API_URL (Vercel env) to your backend base URL (example: https://YOUR-RENDER-SERVICE.onrender.com). Then redeploy the frontend.");
                } else {
                    setError("Could not load the test series. Please try again later.");
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

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                    <p className="text-slate-400 text-sm animate-pulse">Loading Series...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-red-400">
                <p>{error}</p>
                <Link href="/dashboard" className="text-indigo-400 ml-4 hover:underline">Back to Dashboard</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0B1120] text-white p-6 pb-24">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <Link href="/dashboard?tab=tests" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Test Series
                    </Link>

                    {/* Coin Balance Display */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full border border-slate-800">
                        <Coins className="w-4 h-4 text-yellow-400" />
                        <span className="font-bold text-yellow-400">{coins} Coins</span>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Premium Series
                                </span>
                                {hasPurchased && <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Purchased</span>}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                {courseTitle}
                            </h1>
                            <p className="text-slate-400 text-lg max-w-2xl">
                                Access your premium tests and track your progress.
                            </p>
                        </div>

                        {!hasPurchased && (
                            <button
                                onClick={handleBuyNow}
                                className="hidden md:flex px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-bold text-white shadow-xl shadow-indigo-600/20 hover:scale-105 transition-transform items-center gap-2"
                            >
                                <Lock className="w-5 h-5" />
                                Unlock Full Access @ ₹399
                            </button>
                        )}
                    </div>
                </div>

                {!hasPurchased && (
                    <div className="md:hidden mb-8">
                        <button
                            onClick={handleBuyNow}
                            className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-bold text-white shadow-xl shadow-indigo-600/20 hover:scale-105 transition-transform flex items-center justify-center gap-2"
                        >
                            <Lock className="w-5 h-5" />
                            Unlock Full Access @ ₹399
                        </button>
                    </div>
                )}

                <div className="grid gap-4">
                    {tests.map((test, index) => {
                        const isUnlocked = hasPurchased || unlockedTests.includes(test._id);

                        return (
                            <div key={test._id} className={`group bg-slate-900/50 border ${!isUnlocked ? 'border-slate-800' : 'border-slate-800 hover:border-indigo-500/30'} rounded-2xl p-6 transition-all`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider border ${test.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                test.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                                    'bg-red-500/10 text-red-400 border-red-500/20'
                                                }`}>
                                                {test.difficulty || 'Medium'}
                                            </span>
                                            <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                                                <Clock className="w-3 h-3" />
                                                {test.duration_min} Mins
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                                            {test.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm flex items-center gap-2">
                                            {!isUnlocked && <Lock className="w-3 h-3 text-slate-500" />}
                                            {isUnlocked ? "Ready to attempt" : "Locked Content"}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        {isUnlocked ? (
                                            <button
                                                onClick={() => handleStartTest(test._id)}
                                                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-lg shadow-indigo-600/20 active:scale-95 flex items-center gap-2"
                                            >
                                                Start Test
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <button
                                                    onClick={() => handleUnlockTest(test._id)}
                                                    disabled={unlockingId === test._id}
                                                    className="px-4 py-3 rounded-xl bg-slate-800 text-yellow-400 font-bold transition-all border border-yellow-500/30 hover:bg-slate-700 hover:border-yellow-500/60 flex items-center gap-2"
                                                >
                                                    {unlockingId === test._id ? (
                                                        <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                                                    ) : (
                                                        <Coins className="w-4 h-4" />
                                                    )}
                                                    Unlock (100)
                                                </button>

                                                <button
                                                    onClick={handleBuyNow}
                                                    className="px-6 py-3 rounded-xl bg-slate-800 text-slate-400 font-bold transition-all border border-slate-700 hover:bg-slate-700 hover:text-white flex items-center gap-2"
                                                >
                                                    <Lock className="w-4 h-4" />
                                                    Full Course
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {tests.length === 0 && (
                        <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-slate-800 border-dashed">
                            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">No Tests Found</h3>
                            <p className="text-slate-400">Check back later for new content.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

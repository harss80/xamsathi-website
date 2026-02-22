"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    BadgeCheck,
    BookOpen,
    Clock,
    FileText,
    Lock,
    Zap,
} from "lucide-react";

const COURSE_ID = "79bf9a1b2c3d4e5f6a7b8c9d";

export default function PremiumNeetRankBoosterPage() {
    const router = useRouter();
    const [isPaying, setIsPaying] = useState(false);
    const [hasAccess, setHasAccess] = useState(false);

    const user = useMemo(() => {
        try {
            if (typeof window === "undefined") return null;
            const userStr = localStorage.getItem("xamsathi_user");
            if (!userStr) return null;
            return JSON.parse(userStr) as Record<string, unknown>;
        } catch {
            return null;
        }
    }, []);

    const userId = (user && (user._id || user.id)) ? String(user._id || user.id) : null;

    useEffect(() => {
        const checkAccess = async () => {
            try {
                if (!userId) return;

                const getBackendBase = () => {
                    const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
                    if (envBase) return envBase;
                    if (typeof window !== "undefined") {
                        const host = window.location.hostname;
                        if (host === "localhost" || host === "127.0.0.1") return "http://localhost:3001";
                    }
                    return "http://localhost:3001";
                };

                const base = getBackendBase();
                const resMe = await fetch(`${base}/api/me`, {
                    headers: { "x-user-id": String(userId) },
                });
                if (!resMe.ok) return;
                const meData = await resMe.json();
                const u = meData?.user;
                const purchased = Array.isArray(u?.purchased_courses) ? (u.purchased_courses as string[]) : [];
                const ok = u?.free_access === true || purchased.includes(COURSE_ID);
                setHasAccess(ok);
            } catch {
                // ignore
            }
        };

        checkAccess();
    }, [userId]);

    const classGrade = (() => {
        const cg = user?.class_grade;
        if (typeof cg === "number") return cg;
        if (typeof cg === "string") {
            const n = Number(String(cg).replace(/[^0-9]/g, ""));
            return Number.isNaN(n) ? null : n;
        }
        return null;
    })();

    const handleBuyNow = async () => {
        if (!userId) {
            alert("Please login first.");
            router.push("/login?next=/dashboard?tab=courses");
            return;
        }

        setIsPaying(true);
        try {
            const { initiatePayment } = await import("@/lib/payment");
            await new Promise<void>((resolve) => {
                initiatePayment(
                    userId,
                    COURSE_ID,
                    () => {
                        router.push(`/dashboard/test-series/${COURSE_ID}`);
                        resolve();
                    },
                    (err) => {
                        const msg = err instanceof Error ? err.message : String(err);
                        alert(`Payment Error: ${msg}. Try again.`);
                        resolve();
                    }
                );
            });
        } finally {
            setIsPaying(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-10">
                    <Link
                        href="/dashboard?tab=courses"
                        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Courses
                    </Link>
                </div>

                <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-slate-950 to-slate-950" />
                    <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/20 blur-[80px] rounded-full" />

                    <div className="relative p-8 md:p-12">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-300">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300">Premium Pack</div>
                                        <div className="text-[11px] text-slate-400 font-bold">NEET | Class 12</div>
                                    </div>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black tracking-tight">NEET Rank Booster Pack</h1>
                                <p className="text-slate-300 max-w-2xl">
                                    20 Part Tests for quick revision, accuracy, and speed. Perfect for daily practice.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-sm font-black">
                                        ₹199
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-slate-950/60 border border-slate-800 text-slate-200 text-sm font-bold inline-flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-slate-400" /> 20 Part Tests
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-slate-950/60 border border-slate-800 text-slate-200 text-sm font-bold inline-flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-slate-400" /> 60 mins each
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-slate-950/60 border border-slate-800 text-slate-200 text-sm font-bold inline-flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-slate-400" /> 45 Questions
                                    </div>
                                </div>
                            </div>

                            <div className="flex-shrink-0 w-full lg:w-[380px]">
                                <div className="bg-slate-950/50 border border-slate-800 rounded-3xl p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-black text-white">Unlock Access</div>
                                        <div className="text-xs font-black text-emerald-300 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                            Premium
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-3 text-sm text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <BadgeCheck className="w-4 h-4 text-emerald-400" /> 20 Tests Included
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BadgeCheck className="w-4 h-4 text-emerald-400" /> Instant Unlock after payment
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BadgeCheck className="w-4 h-4 text-emerald-400" /> Best for daily practice
                                        </div>
                                    </div>

                                    {classGrade !== null && classGrade !== 12 && (
                                        <div className="mt-4 p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-xs font-bold">
                                            This premium pack is visible for Class 12 only. Please update your profile class/grade.
                                        </div>
                                    )}

                                    <button
                                        onClick={() => {
                                            if (hasAccess) {
                                                router.push(`/dashboard/test-series/${COURSE_ID}`);
                                                return;
                                            }
                                            handleBuyNow();
                                        }}
                                        onMouseEnter={async () => {
                                            const { preloadRazorpay } = await import("@/lib/payment");
                                            preloadRazorpay();
                                        }}
                                        onFocus={async () => {
                                            const { preloadRazorpay } = await import("@/lib/payment");
                                            preloadRazorpay();
                                        }}
                                        disabled={isPaying}
                                        className="mt-6 w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
                                    >
                                        {hasAccess ? <BookOpen className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                                        {hasAccess ? "Open Series" : (isPaying ? "Processing..." : "Buy Now @ ₹199")}
                                        <ArrowRight className="w-5 h-5" />
                                    </button>

                                    <div className="mt-4 text-[11px] text-slate-500 font-bold">
                                        After payment, you will be redirected to the series and all tests will appear in your account.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                        <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Speed</div>
                        <div className="text-2xl font-black text-white mt-2">Daily Practice</div>
                        <div className="text-sm text-slate-400 mt-2">Build speed with timed part tests.</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                        <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Accuracy</div>
                        <div className="text-2xl font-black text-white mt-2">Better Score</div>
                        <div className="text-sm text-slate-400 mt-2">Reduce silly mistakes and improve rank.</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                        <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Focus</div>
                        <div className="text-2xl font-black text-white mt-2">Smart Revision</div>
                        <div className="text-sm text-slate-400 mt-2">Compact tests to revise quickly.</div>
                    </div>
                </div>

                {/* --- DETAILS SECTION --- */}
                <div className="mt-16 space-y-12 pb-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black text-white flex items-center gap-3">
                            <Zap className="w-6 h-6 text-emerald-400" />
                            What You'll Get in This Premium Series
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "20 Targeted Sectional & Part Tests to boost your confidence.",
                                "A focus strictly on high-yield and frequently asked NCERT topics.",
                                "Quick, crisp solutions explaining short-cuts and elimination techniques.",
                                "Visual analytics mapping your progress curve over time.",
                                "Exclusive access to top-tier rank-booster question formats (Assertion-Reason)."
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-colors">
                                    <div className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                        <BadgeCheck className="w-4 h-4" />
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-black text-white flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-emerald-400" />
                            Chapters Covered Inside
                        </h2>
                        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-8 relative overflow-hidden">
                            <p className="text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed">
                                Curated primarily for revision, this Rank Booster Pack highlights major scoring blocks across the 11th and 12th standard syllabus, letting you conquer high-weightage zones fast.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-4 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                                    <h3 className="text-lg font-black text-emerald-300 border-b border-emerald-500/20 pb-3">Physics</h3>
                                    <ul className="space-y-3 text-sm text-slate-300 font-medium tracking-wide">
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Modern Physics & Optics</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Magnetism & EMI</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Current Electricity Focus</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Thermal Physics</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Mechanics Problem Types</li>
                                    </ul>
                                </div>
                                <div className="space-y-4 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                                    <h3 className="text-lg font-black text-emerald-300 border-b border-emerald-500/20 pb-3">Chemistry</h3>
                                    <ul className="space-y-3 text-sm text-slate-300 font-medium tracking-wide">
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Block Chemistry (s,p,d,f)</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> GOC & Isomerism</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Chemical Bonding Exceptions</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Electrochemistry & Kinetics</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Named Reactions & Reagents</li>
                                    </ul>
                                </div>
                                <div className="space-y-4 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                                    <h3 className="text-lg font-black text-emerald-300 border-b border-emerald-500/20 pb-3">Biology</h3>
                                    <ul className="space-y-3 text-sm text-slate-300 font-medium tracking-wide">
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Genetics & Inheritance</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Physiology Highlights</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Biotechnology & Applications</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Plant Kingdom & Morphology</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Reproduction Strategies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

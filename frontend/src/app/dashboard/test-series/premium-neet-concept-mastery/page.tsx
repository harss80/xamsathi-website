"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    BadgeCheck,
    BookOpen,
    Brain,
    Clock,
    Lock,
    Sparkles,
} from "lucide-react";

const COURSE_ID = "89cf9a1b2c3d4e5f6a7b8c9d";

export default function PremiumNeetConceptMasteryPage() {
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
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-slate-950 to-slate-950" />
                    <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/20 blur-[80px] rounded-full" />

                    <div className="relative p-8 md:p-12">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-indigo-300">
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-[0.25em] text-indigo-300">Premium Series</div>
                                        <div className="text-[11px] text-slate-400 font-bold">NEET | Class 12</div>
                                    </div>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black tracking-tight">NEET Concept Mastery</h1>
                                <p className="text-slate-300 max-w-2xl">
                                    30 chapter-style tests to strengthen core concepts and accuracy.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    <div className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 text-sm font-black">
                                        ₹299
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-slate-950/60 border border-slate-800 text-slate-200 text-sm font-bold inline-flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-slate-400" /> 30 Chapter Tests
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-slate-950/60 border border-slate-800 text-slate-200 text-sm font-bold inline-flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-slate-400" /> 45 mins each
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-slate-950/60 border border-slate-800 text-slate-200 text-sm font-bold inline-flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-slate-400" /> Premium experience
                                    </div>
                                </div>
                            </div>

                            <div className="flex-shrink-0 w-full lg:w-[380px]">
                                <div className="bg-slate-950/50 border border-slate-800 rounded-3xl p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-black text-white">Unlock Access</div>
                                        <div className="text-xs font-black text-indigo-300 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                                            Premium
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-3 text-sm text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <BadgeCheck className="w-4 h-4 text-emerald-400" /> 30 Tests Included
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BadgeCheck className="w-4 h-4 text-emerald-400" /> Instant Unlock after payment
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BadgeCheck className="w-4 h-4 text-emerald-400" /> Improve concepts + accuracy
                                        </div>
                                    </div>

                                    {classGrade !== null && classGrade !== 12 && (
                                        <div className="mt-4 p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-xs font-bold">
                                            This premium series is visible for Class 12 only. Please update your profile class/grade.
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
                                        className="mt-6 w-full py-4 rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-black font-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
                                    >
                                        {hasAccess ? <BookOpen className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                                        {hasAccess ? "Open Series" : (isPaying ? "Processing..." : "Buy Now @ ₹299")}
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
                        <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Concepts</div>
                        <div className="text-2xl font-black text-white mt-2">Strong Base</div>
                        <div className="text-sm text-slate-400 mt-2">Chapter tests to build clarity and confidence.</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                        <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Accuracy</div>
                        <div className="text-2xl font-black text-white mt-2">Less Negative</div>
                        <div className="text-sm text-slate-400 mt-2">Focus on correctness with repeated practice.</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                        <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Premium</div>
                        <div className="text-2xl font-black text-white mt-2">Clean UI</div>
                        <div className="text-sm text-slate-400 mt-2">Smooth interface for focused preparation.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

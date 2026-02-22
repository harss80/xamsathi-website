"use client";

import { useMemo, useState } from "react";
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
    Sparkles,
} from "lucide-react";

const COURSE_ID_CLASS_11 = "a1ef9a1b2c3d4e5f6a7b8c9d";
const COURSE_ID_CLASS_12 = "b1ff9a1b2c3d4e5f6a7b8c9d";

export default function PremiumJeeMainCopyMocksPage() {
    const router = useRouter();
    const [isPaying, setIsPaying] = useState(false);

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

    const classGrade = (() => {
        const cg = user?.class_grade;
        if (typeof cg === "number") return cg;
        if (typeof cg === "string") {
            const n = Number(String(cg).replace(/[^0-9]/g, ""));
            return Number.isNaN(n) ? null : n;
        }
        return null;
    })();

    const courseId = classGrade === 11 ? COURSE_ID_CLASS_11 : COURSE_ID_CLASS_12;
    const isAllowedGrade = classGrade === 11 || classGrade === 12;

    const handleBuyNow = async () => {
        if (!userId) {
            alert("Please login first.");
            router.push("/login?next=/dashboard?tab=courses");
            return;
        }

        if (!isAllowedGrade) {
            alert("This premium series is available for Class 11 and Class 12 only.");
            return;
        }

        setIsPaying(true);
        try {
            const { initiatePayment } = await import("@/lib/payment");
            await new Promise<void>((resolve) => {
                initiatePayment(
                    userId,
                    courseId,
                    () => {
                        router.push(`/dashboard/test-series/${courseId}`);
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
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300">Premium Series</div>
                                        <div className="text-[11px] text-slate-400 font-bold">JEE Main | Class 11 & 12</div>
                                    </div>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black tracking-tight">JEE Main Copy Mocks</h1>
                                <p className="text-slate-300 max-w-2xl">
                                    25 Full-length JEE Main pattern mock papers to build speed, accuracy, and exam temperament.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-sm font-black">
                                        ₹1999
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-slate-950/60 border border-slate-800 text-slate-200 text-sm font-bold inline-flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-slate-400" /> 25 Full Mocks
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-slate-950/60 border border-slate-800 text-slate-200 text-sm font-bold inline-flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-slate-400" /> 180 mins each
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-slate-950/60 border border-slate-800 text-slate-200 text-sm font-bold inline-flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-slate-400" /> 90 Questions
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
                                            <BadgeCheck className="w-4 h-4 text-emerald-400" /> 25 Papers Included
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BadgeCheck className="w-4 h-4 text-emerald-400" /> Instant Unlock after payment
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <BadgeCheck className="w-4 h-4 text-emerald-400" /> Strict 180-minute simulation
                                        </div>
                                    </div>

                                    {classGrade !== null && !isAllowedGrade && (
                                        <div className="mt-4 p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-xs font-bold">
                                            This premium series is visible for Class 11 & 12 only. Please update your profile class/grade.
                                        </div>
                                    )}

                                    <button
                                        onClick={handleBuyNow}
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
                                        <Lock className="w-5 h-5" />
                                        {isPaying ? "Processing..." : "Buy Now @ ₹1999"}
                                        <ArrowRight className="w-5 h-5" />
                                    </button>

                                    <div className="mt-4 text-[11px] text-slate-500 font-bold">
                                        After payment, you will be redirected to the series and all mocks will appear in your account.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                        <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Paper Style</div>
                        <div className="text-2xl font-black text-white mt-2">JEE Main Pattern</div>
                        <div className="text-sm text-slate-400 mt-2">Multiple papers to build real-exam confidence.</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                        <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Time Control</div>
                        <div className="text-2xl font-black text-white mt-2">180 Minutes</div>
                        <div className="text-sm text-slate-400 mt-2">Improve speed, accuracy and decision making.</div>
                    </div>
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800">
                        <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Consistency</div>
                        <div className="text-2xl font-black text-white mt-2">25 Mocks</div>
                        <div className="text-sm text-slate-400 mt-2">Enough practice for strong score improvement.</div>
                    </div>
                </div>

                {/* --- DETAILS SECTION --- */}
                <div className="mt-16 space-y-12 pb-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black text-white flex items-center gap-3">
                            <Sparkles className="w-6 h-6 text-emerald-400" />
                            What You'll Get in This Premium Series
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "25 Full-Length Mock Tests exactly on the NTA JEE Main pattern.",
                                "Detailed step-by-step solutions for every question.",
                                "In-depth performance analytics (accuracy, time management, subject-wise strengths).",
                                "All India Ranking amongst thousands of serious aspirants.",
                                "Real exam-like PC interface to build strict exam temperament."
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
                                This series guarantees complete coverage of the official JEE Main syllabus for Class 11 and Class 12. Every chapter is meticulously balanced in weightage as per past year trends.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-4 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                                    <h3 className="text-lg font-black text-emerald-300 border-b border-emerald-500/20 pb-3">Physics</h3>
                                    <ul className="space-y-3 text-sm text-slate-300 font-medium tracking-wide">
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Mechanics & Kinematics</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Properties of Matter & Thermodynamics</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Electromagnetism & AC</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Optics & Modern Physics</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Oscillations & Waves</li>
                                    </ul>
                                </div>
                                <div className="space-y-4 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                                    <h3 className="text-lg font-black text-emerald-300 border-b border-emerald-500/20 pb-3">Chemistry</h3>
                                    <ul className="space-y-3 text-sm text-slate-300 font-medium tracking-wide">
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Physical Chemistry & Mole Concept</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Inorganic Chemistry (Blocks p,d,f)</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Organic Chemistry (Reaction Mech)</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Coordination Compounds</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Biomolecules & Practical Chem</li>
                                    </ul>
                                </div>
                                <div className="space-y-4 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                                    <h3 className="text-lg font-black text-emerald-300 border-b border-emerald-500/20 pb-3">Mathematics</h3>
                                    <ul className="space-y-3 text-sm text-slate-300 font-medium tracking-wide">
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Algebra, Progressions & Matrices</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Coordinate Geometry (Conics)</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Calculus (Diff. & Integration)</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Vectors & 3D Geometry</li>
                                        <li className="flex gap-2"><span className="text-emerald-500">&bull;</span> Statistics & Probability</li>
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

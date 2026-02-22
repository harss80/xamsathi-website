"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    FileText,
    Sparkles,
    Target,
} from "lucide-react";

export default function FreeSeriesPage() {
    const [classGrade] = useState<number | null>(() => {
        try {
            if (typeof window === "undefined") return null;
            const savedUser = localStorage.getItem("xamsathi_user");
            if (!savedUser) return null;
            const parsed = JSON.parse(savedUser) as Record<string, unknown>;
            const cg = parsed.class_grade;

            if (typeof cg === "number" && cg >= 1 && cg <= 12) {
                return cg;
            }

            if (typeof cg === "string") {
                const n = Number(String(cg).replace(/[^0-9]/g, ""));
                if (!Number.isNaN(n) && n >= 1 && n <= 12) return n;
            }

            return null;
        } catch {
            return null;
        }
    });

    const [targetExam] = useState<string | null>(() => {
        try {
            if (typeof window === "undefined") return null;
            const savedUser = localStorage.getItem("xamsathi_user");
            if (!savedUser) return null;
            const parsed = JSON.parse(savedUser) as Record<string, unknown>;
            const te = parsed.target_exam ?? parsed.stream ?? parsed.course;
            if (typeof te !== "string") return null;
            return te;
        } catch {
            return null;
        }
    });

    const stream = (targetExam || "").toUpperCase();
    const showJee = stream.includes("JEE") && !stream.includes("NEET");
    const showNeet = stream.includes("NEET") && !stream.includes("JEE");
    const showBoth = !showJee && !showNeet;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <Link
                        href="/dashboard?tab=tests"
                        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-white flex items-center gap-3 mb-2">
                            <Sparkles className="w-8 h-8 text-indigo-400" />
                            Free Series
                        </h1>
                        <p className="text-slate-400">All available test series in one place.</p>
                    </div>
                </div>

                {classGrade === null && (
                    <div className="p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 mb-8">
                        Please complete your profile (Class/Grade) to see class-wise series.
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(showJee || showBoth) && (
                        <Link
                            href="/dashboard/test-series/jee-mini-mock-1"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-emerald-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                                    JEE OFFICIAL
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                JEE Main Full Mock (MCQ)
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                JEE Main pattern mock paper (MCQ only).
                            </p>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="p-3 rounded-2xl bg-slate-950/40 border border-slate-800">
                                    <div className="text-sm font-black text-white">75</div>
                                    <div className="text-xs text-slate-500 font-bold">Questions</div>
                                </div>
                                <div className="p-3 rounded-2xl bg-slate-950/40 border border-slate-800">
                                    <div className="text-sm font-black text-white">180</div>
                                    <div className="text-xs text-slate-500 font-bold">Minutes</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Target className="w-4 h-4" /> Mock Paper
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                                    Start <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    {(showNeet || showBoth) && (
                        <Link
                            href="/dashboard/test-series/neet/mock-1"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-indigo-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-300 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold border border-indigo-500/20">
                                    NEET FREE
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                                NEET Full Mock - Set 1
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                Timed MCQ mock with +4 / -1 marking.
                            </p>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="p-3 rounded-2xl bg-slate-950/40 border border-slate-800">
                                    <div className="text-sm font-black text-white">15</div>
                                    <div className="text-xs text-slate-500 font-bold">Questions</div>
                                </div>
                                <div className="p-3 rounded-2xl bg-slate-950/40 border border-slate-800">
                                    <div className="text-sm font-black text-white">45</div>
                                    <div className="text-xs text-slate-500 font-bold">Minutes</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Target className="w-4 h-4" /> Mock Test
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-indigo-300 group-hover:translate-x-1 transition-transform">
                                    Start <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    {(showNeet || showBoth) && (
                        <Link
                            href="/dashboard/test-series/neet"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-pink-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-pink-500/10 text-pink-300 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 text-xs font-bold border border-pink-500/20">
                                    NEET PRACTICE
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                                NEET Mixed Practice
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                Subject-wise hard questions practice.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Target className="w-4 h-4" /> Practice
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-pink-300 group-hover:translate-x-1 transition-transform">
                                    Open <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

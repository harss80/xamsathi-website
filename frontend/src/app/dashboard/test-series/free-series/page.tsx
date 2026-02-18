"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    Calendar,
    FileText,
    Folder,
    GraduationCap,
    LineChart,
    Sparkles,
    Sprout,
    Target,
    Timer,
    Zap,
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
                    <Link
                        href="/dashboard/test-series/cbse"
                        className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-cyan-600 blur-[60px] rounded-full" />
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                <GraduationCap className="w-8 h-8" />
                            </div>
                            <div className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
                                COURSES
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {typeof classGrade === "number" ? `CBSE Class ${classGrade}` : "CBSE Courses"}
                        </h3>
                        <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                            Open your test-series courses and see the tests list.
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Calendar className="w-4 h-4" /> Courses & Tests
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                                See Tests <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>

                    {(classGrade === 12) && (
                        <Link
                            href="/dashboard/test-series/699f9a1b2c3d4e5f6a7b8c9d"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-yellow-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-yellow-500 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-yellow-500/10 text-yellow-300 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                                    <Sparkles className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-300 text-xs font-bold border border-yellow-500/20">
                                    ₹499
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors">
                                NEET Advanced Mock Pro
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                Premium full-length NEET mocks (180 minutes) with pro-level experience.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Timer className="w-4 h-4" /> 180 mins
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-yellow-300 group-hover:translate-x-1 transition-transform">
                                    View Series <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    {(typeof classGrade === "number" && classGrade >= 11) && (
                        <Link
                            href="/dashboard/test-series/neet"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-indigo-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                    <FileText className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">
                                    LIVE NOW
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                NEET UG Full Mock
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                Complete 180 Questions (Physics, Chemistry, Biology) with negative marking and detailed analysis.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Calendar className="w-4 h-4" /> 3 Hrs 20 Mins
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-indigo-400 group-hover:translate-x-1 transition-transform">
                                    Start Test <FileText className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    {(typeof classGrade === "number" && classGrade >= 11) && (
                        <Link
                            href="/dashboard/test-series/neet/mock-1"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-emerald-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                    <Timer className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 flex items-center gap-1">
                                    MOCK 1
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                NEET Full Mock Test 1
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                Physics (Very Hard) Q1–15 now • Full 180 coming next.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Timer className="w-4 h-4" /> 45 mins
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                                    Start Mock <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    {(typeof classGrade === "number" && classGrade >= 11) && (
                        <Link
                            href="/dashboard/test-series/ultra-hard"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-pink-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                    <Zap className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold border border-red-500/20 flex items-center gap-1">
                                    <Zap className="w-3 h-3" /> VERY HARD
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                                ULTRA HARD SPECIAL SET
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                40 High-Level Questions (Genetics + Ecology). Curated for Toppers.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Calendar className="w-4 h-4" /> 60 Mins
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-pink-400 group-hover:translate-x-1 transition-transform">
                                    Start Challenge <Zap className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    {(typeof classGrade === "number" && classGrade >= 11) && (
                        <Link
                            href="/dashboard/test-series/ecology-case-study"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-emerald-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                    <Sprout className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 flex items-center gap-1">
                                    NEW PATTERN
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                ECOLOGY CASE STUDIES
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                5 Comprehensive Case Studies (25 MCQs). Critical thinking focus.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Calendar className="w-4 h-4" /> 45 Mins
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                                    Start Cases <Sprout className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    {(typeof classGrade === "number" && classGrade >= 11) && (
                        <Link
                            href="/dashboard/test-series/ecology-graphs"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-blue-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <LineChart className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 flex items-center gap-1">
                                    DATA ANALYSIS
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                ECOLOGY GRAPH ANALYSIS
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                5 Graph-Based Cases (25 MCQs). Interpret population curves & data.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Calendar className="w-4 h-4" /> 40 Mins
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                                    Start Analysis <LineChart className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    {(typeof classGrade === "number" && classGrade >= 11) && (
                        <Link
                            href="/dashboard/test-series/intensive-ecology"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-orange-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <Target className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold border border-orange-500/20 flex items-center gap-1">
                                    680+ LEVEL
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                                INTENSIVE ECOLOGY SERIES
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                Part 1: 30 Ultra-Concept MCQs. High Density. Trap Based.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Calendar className="w-4 h-4" /> 45 Mins
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-orange-400 group-hover:translate-x-1 transition-transform">
                                    Start Intensive <Target className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    {(typeof classGrade === "number" && classGrade >= 11) && (
                        <Link
                            href="/dashboard/test-series/prakriti-series"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-emerald-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                    <Sprout className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 flex items-center gap-1">
                                    NEW SERIES
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                PRAKRITI SERIES
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                Comprehensive PCMB (40 MCQs). Physics, Chemistry, Botany, Zoology.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Calendar className="w-4 h-4" /> 45 Mins
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                                    Start Series <Sprout className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    {(classGrade === 9) && (
                        <Link
                            href="/dashboard/test-series/698f874c217f7f278986466d"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-purple-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20 flex items-center gap-1">
                                    CLASS 9 PREMIUM
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                Class 9 Monthly Series
                            </h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                                Maths, Science, English, SST. 20 New Tests/Month.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Calendar className="w-4 h-4" /> Weekly Tests
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-purple-400 group-hover:translate-x-1 transition-transform">
                                    View Series <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    {(classGrade === 11) && (
                        <Link
                            href="/dashboard/test-series/698f8a866fadfeda52b19140"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden md:col-span-2 lg:col-span-2"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-pink-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-bold border border-pink-500/20 flex items-center gap-1">
                                    CLASS 11 FINALS
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">Class 11 Science Prep</h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">PCMB Final Exams Revision. Full Syllabus Coverage.</p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500"><Calendar className="w-4 h-4" /> 4 Weeks</div>
                                <div className="flex items-center gap-2 text-sm font-bold text-pink-400 group-hover:translate-x-1 transition-transform">View Series <ArrowRight className="w-4 h-4" /></div>
                            </div>
                        </Link>
                    )}

                    {(classGrade === 10) && (
                        <Link
                            href="/dashboard/test-series/698f8a866fadfeda52b19110"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-yellow-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-yellow-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                                    <Target className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold border border-yellow-500/20 flex items-center gap-1">
                                    CLASS 10 BOARDS
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">Class 10 Ultimate</h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">Maths, Sci, SST, Eng. 95%+ Target.</p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500"><Calendar className="w-4 h-4" /> 4 Weeks</div>
                                <div className="flex items-center gap-2 text-sm font-bold text-yellow-400 group-hover:translate-x-1 transition-transform">View Series <ArrowRight className="w-4 h-4" /></div>
                            </div>
                        </Link>
                    )}

                    {(classGrade === 8) && (
                        <Link
                            href="/dashboard/test-series/698f89db6aaedcf04fa55612"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-blue-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 flex items-center gap-1">
                                    CLASS 8 PREMIUM
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Class 8 Series</h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">Maths, Science, English, SST.</p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500"><Calendar className="w-4 h-4" /> Weekly Tests</div>
                                <div className="flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:translate-x-1 transition-transform">View Series <ArrowRight className="w-4 h-4" /></div>
                            </div>
                        </Link>
                    )}

                    {(classGrade === 7) && (
                        <Link
                            href="/dashboard/test-series/698f89db6aaedcf04fa555f1"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-cyan-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 flex items-center gap-1">
                                    CLASS 7 PREMIUM
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Class 7 Series</h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">Maths, Science, English, SST.</p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500"><Calendar className="w-4 h-4" /> Weekly Tests</div>
                                <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">View Series <ArrowRight className="w-4 h-4" /></div>
                            </div>
                        </Link>
                    )}

                    {(classGrade === 6) && (
                        <Link
                            href="/dashboard/test-series/698f89db6aaedcf04fa555d0"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-teal-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-teal-500/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-bold border border-teal-500/20 flex items-center gap-1">
                                    CLASS 6 PREMIUM
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">Class 6 Series</h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">Maths, Science, English, SST.</p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500"><Calendar className="w-4 h-4" /> Weekly Tests</div>
                                <div className="flex items-center gap-2 text-sm font-bold text-teal-400 group-hover:translate-x-1 transition-transform">View Series <ArrowRight className="w-4 h-4" /></div>
                            </div>
                        </Link>
                    )}

                    {(classGrade === 5) && (
                        <Link
                            href="/dashboard/test-series/698f89db6aaedcf04fa5559d"
                            className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:opacity-20 transition-opacity bg-orange-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold border border-orange-500/20 flex items-center gap-1">
                                    CLASS 5 PREMIUM
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">Class 5 Series</h3>
                            <p className="text-slate-400 text-sm mb-6 line-clamp-2">Maths, Science, English.</p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500"><Calendar className="w-4 h-4" /> Weekly Tests</div>
                                <div className="flex items-center gap-2 text-sm font-bold text-orange-400 group-hover:translate-x-1 transition-transform">View Series <ArrowRight className="w-4 h-4" /></div>
                            </div>
                        </Link>
                    )}

                    {(classGrade === 5) && (
                        <Link
                            href="/dashboard/test-series/class5-mastery"
                            className="group relative p-6 rounded-3xl bg-indigo-900/20 border border-indigo-500/30 hover:border-indigo-500 transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-20 opacity-20 group-hover:opacity-30 transition-opacity bg-indigo-600 blur-[60px] rounded-full" />
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-4 rounded-2xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20">
                                    <Sparkles className="w-8 h-8" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-black tracking-widest border border-white/20 animate-pulse">
                                    7 DAY SPRINT
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                Class 5: 1-Week Mastery
                            </h3>
                            <p className="text-slate-300 text-sm font-medium mb-6">
                                Full Preparation Folder with Chapter Tests & Notes.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                                <div className="flex items-center gap-2 text-xs text-indigo-300">
                                    <Folder className="w-4 h-4" /> Folder View
                                </div>
                                <div className="flex items-center gap-2 text-sm font-black text-white group-hover:translate-x-1 transition-transform">
                                    Open Folder <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    )}

                    <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 border-dashed flex flex-col items-center justify-center text-center opacity-50 hover:opacity-100 transition-opacity">
                        <div className="p-4 rounded-full bg-slate-800 mb-4">
                            <BookOpen className="w-8 h-8 text-slate-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-300">More Tests Coming Soon</h3>
                        <p className="text-slate-500 text-sm">JEE Main, AIIMS, and more.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

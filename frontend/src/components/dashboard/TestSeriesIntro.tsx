"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Trophy, Clock, BookOpen, Target, ChevronRight,
    Medal, Crown, Users, Star, ArrowLeft,
    CheckCircle2, XCircle, GraduationCap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type LeaderboardEntry = {
    rank: number;
    name: string;
    score: number;
    avatar: string;
    accuracy: number;
};

type PaperDetail = {
    label: string;
    value: string | number;
    icon: React.ElementType;
    color: string;
};

interface TestSeriesIntroProps {
    title: string;
    description: string;
    testSeriesId: string;
    durationMins: number;
    questionsCount: number;
    totalMarks: number;
    subjects: string[];
    onStart: () => void;
}

export default function TestSeriesIntro({
    title,
    description,
    testSeriesId,
    durationMins,
    questionsCount,
    totalMarks,
    subjects,
    onStart
}: TestSeriesIntroProps) {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getBackendBase = () => {
        const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
        if (envBase) return envBase;
        if (typeof window !== "undefined") {
            const host = window.location.hostname;
            if (host === "localhost" || host === "127.0.0.1") return "http://localhost:3001";
        }
        return "http://localhost:3001";
    };

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const base = getBackendBase();
                const userStr = localStorage.getItem("xamsathi_user");
                let userId = "";
                if (userStr) {
                    try {
                        const parsed = JSON.parse(userStr);
                        userId = parsed.id || parsed._id || parsed.user_id;
                    } catch { }
                }

                const res = await fetch(`${base}/api/leaderboard/${testSeriesId}`, {
                    headers: { "x-user-id": userId || "" }
                });

                if (res.ok) {
                    const data = await res.json();
                    setLeaderboard(data.slice(0, 5));
                }
            } catch (error) {
                console.error("Failed to fetch leaderboard", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLeaderboard();
    }, [testSeriesId]);

    const paperDetails: PaperDetail[] = [
        { label: "Questions", value: questionsCount, icon: BookOpen, color: "text-blue-400" },
        { label: "Duration", value: `${durationMins} Mins`, icon: Clock, color: "text-purple-400" },
        { label: "Max Marks", value: totalMarks, icon: Target, color: "text-green-400" },
        { label: "Status", value: "Active", icon: Star, color: "text-yellow-400" },
    ];

    return (
        <div className="min-h-screen bg-[#0B1120] text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <Link href="/dashboard" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Dashboard
                </Link>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Leaderboard */}
                    <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
                        <section className="bg-slate-900/40 border border-slate-800/50 rounded-[2rem] p-6 lg:p-8 backdrop-blur-md relative overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                                        <Trophy className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">Hall of Fame</h2>
                                        <p className="text-slate-400 text-xs md:text-sm font-medium">Top performers this week</p>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center gap-2 text-xs font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20">
                                    <Users className="w-3.5 h-3.5" />
                                    <span>{leaderboard.length} Students</span>
                                </div>
                            </div>

                            {isLoading ? (
                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-20 bg-slate-800/50 rounded-2xl animate-pulse border border-white/5" />
                                    ))}
                                </div>
                            ) : leaderboard.length > 0 ? (
                                <div className="space-y-3">
                                    {leaderboard.map((student, idx) => {
                                        const isTop1 = idx === 0;
                                        const isTop2 = idx === 1;
                                        const isTop3 = idx === 2;

                                        return (
                                            <motion.div
                                                key={student.rank}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className={`relative group p-4 rounded-2xl border transition-all duration-300 ${isTop1
                                                    ? 'bg-gradient-to-r from-yellow-500/10 via-yellow-900/5 to-slate-900/40 border-yellow-500/30 shadow-lg shadow-yellow-900/20'
                                                    : isTop2
                                                        ? 'bg-slate-800/40 border-slate-700 hover:border-slate-500 hover:bg-slate-800/60'
                                                        : isTop3
                                                            ? 'bg-slate-800/40 border-slate-700 hover:border-orange-700/50 hover:bg-slate-800/60'
                                                            : 'bg-slate-900/30 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    {/* Rank Avatar */}
                                                    <div className="relative shrink-0">
                                                        <div className={`w-14 h-14 rounded-full p-1 ${isTop1 ? 'bg-gradient-to-b from-yellow-300 to-yellow-600' : isTop2 ? 'bg-gradient-to-b from-slate-300 to-slate-500' : isTop3 ? 'bg-gradient-to-b from-orange-300 to-orange-600' : 'bg-slate-700'}`}>
                                                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-900 relative bg-slate-800">
                                                                <Image
                                                                    src={student.avatar || "/default-avatar.png"}
                                                                    alt={student.name}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Rank Badge */}
                                                        <div className={`absolute -bottom-2 -right-1 px-2 py-0.5 rounded-full text-[10px] font-black border shadow-sm ${isTop1
                                                            ? 'bg-yellow-400 text-yellow-900 border-yellow-200'
                                                            : isTop2
                                                                ? 'bg-slate-200 text-slate-800 border-white'
                                                                : isTop3
                                                                    ? 'bg-orange-400 text-orange-900 border-orange-200'
                                                                    : 'bg-slate-700 text-slate-300 border-slate-600'
                                                            }`}>
                                                            #{student.rank}
                                                        </div>

                                                        {isTop1 && <Crown className="absolute -top-4 -left-2 w-6 h-6 text-yellow-400 -rotate-12 drop-shadow-md animate-bounce-slow" />}
                                                    </div>

                                                    {/* Student Info */}
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className={`font-bold text-base truncate ${isTop1 ? 'text-yellow-100' : 'text-slate-100'}`}>
                                                            {student.name}
                                                        </h4>
                                                        <div className="flex items-center gap-3 mt-1">
                                                            <div className="flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded-md border border-white/5">
                                                                <Target className="w-3 h-3 text-emerald-400" />
                                                                <span className="text-[10px] font-bold text-slate-400">{student.accuracy}% Acc</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Score */}
                                                    <div className="flex flex-col items-end">
                                                        <span className={`text-xl md:text-2xl font-black ${isTop1 ? 'text-yellow-400' : 'text-slate-200'}`}>
                                                            {student.score}
                                                        </span>
                                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Marks</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-16 px-6 relative">
                                    <div className="w-20 h-20 rounded-full bg-slate-800/50 mx-auto mb-4 flex items-center justify-center border border-dashed border-slate-700">
                                        <Trophy className="w-8 h-8 text-slate-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-300 text-lg">Be the First Champion!</h3>
                                    <p className="text-slate-500 text-sm mt-2 max-w-[200px] mx-auto">No one has taken this test yet. Set the benchmark now!</p>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Right Column: Paper Details */}
                    <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
                        <section className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden backdrop-blur-xl">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -mr-20 -mt-20" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 blur-[100px] rounded-full -ml-20 -mb-20" />

                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                        <span className="px-4 py-1.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] w-fit">
                                            Test Series Details
                                        </span>
                                        <div className="flex items-center gap-3 text-slate-500">
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                                                <GraduationCap className="w-3.5 h-3.5" />
                                                <span className="text-[10px] font-bold uppercase tracking-wider">Certified</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span className="text-[10px] font-bold uppercase tracking-wider">Timed</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
                                        {title}
                                    </h1>
                                    <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
                                        {description}
                                    </p>
                                </motion.div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
                                    {paperDetails.map((detail, idx) => (
                                        <motion.div
                                            key={detail.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * (idx + 1) }}
                                            className="bg-slate-800/40 border border-slate-700/50 p-4 md:p-5 rounded-2xl hover:bg-slate-800/60 hover:border-slate-600 transition-all group"
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${detail.color} bg-white/5 mb-3 group-hover:scale-110 transition-transform`}>
                                                <detail.icon className="w-4 h-4" />
                                            </div>
                                            <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">{detail.label}</div>
                                            <div className="text-lg md:text-xl font-black text-white">{detail.value}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="space-y-6 mb-8 md:mb-12">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                        Evaluation Criteria
                                        <div className="h-px flex-1 bg-slate-800" />
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                                        <div className="flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/10 p-3 md:p-4 rounded-xl">
                                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                                                <CheckCircle2 className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-emerald-400 font-bold text-sm md:text-base">+{4} Marks</div>
                                                <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">For Correct Answer</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 bg-red-500/5 border border-red-500/10 p-3 md:p-4 rounded-xl">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                                                <XCircle className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-red-400 font-bold text-sm md:text-base">-1 Mark</div>
                                                <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Negative Marking</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={onStart}
                                    className="hidden md:flex w-full py-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-indigo-600/20 transition-all active:scale-[0.98] items-center justify-center gap-3 hover:-translate-y-1"
                                >
                                    Start Final Assessment
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
                {/* Mobile Sticky Start Button */}
                <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#0B1120]/95 backdrop-blur-lg border-t border-white/10 z-50">
                    <button
                        onClick={onStart}
                        className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black text-base shadow-lg shadow-indigo-600/20 active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                        Start Assessment
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}

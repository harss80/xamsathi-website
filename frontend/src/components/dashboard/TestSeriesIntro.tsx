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
                <Link href="/dashboard/test-series" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Test Series
                </Link>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Leaderboard */}
                    <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-yellow-500/10 rounded-lg">
                                    <Trophy className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Hall of Fame</h2>
                                    <p className="text-slate-400 text-sm">Top performers for this series</p>
                                </div>
                            </div>

                            {isLoading ? (
                                <div className="space-y-4 animate-pulse">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="h-16 bg-slate-800/50 rounded-2xl" />
                                    ))}
                                </div>
                            ) : leaderboard.length > 0 ? (
                                <div className="space-y-4">
                                    {leaderboard.map((student, idx) => (
                                        <motion.div
                                            key={student.rank}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className={`relative group flex items-center gap-4 p-4 rounded-2xl border transition-all ${idx === 0
                                                ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/5 border-yellow-500/30'
                                                : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                                                }`}
                                        >
                                            <div className="relative shrink-0">
                                                <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${idx === 0 ? 'border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)]' :
                                                    idx === 1 ? 'border-slate-300' :
                                                        idx === 2 ? 'border-orange-600' :
                                                            'border-slate-700'
                                                    }`}>
                                                    <Image
                                                        src={student.avatar || "/default-avatar.png"}
                                                        alt={student.name}
                                                        width={48}
                                                        height={48}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                                {idx === 0 && (
                                                    <Crown className="w-5 h-5 text-yellow-500 absolute -top-3 -right-1 rotate-12 drop-shadow-lg" />
                                                )}
                                                <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${idx === 0 ? 'bg-yellow-500 text-black border-yellow-400' :
                                                    idx === 1 ? 'bg-slate-300 text-black border-slate-200' :
                                                        idx === 2 ? 'bg-orange-600 text-white border-orange-500' :
                                                            'bg-slate-800 text-slate-400 border-slate-700'
                                                    }`}>
                                                    #{student.rank}
                                                </div>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-bold text-white truncate">{student.name}</h4>
                                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                        <span>{student.accuracy}% Accuracy</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-right">
                                                <div className={`text-xl font-black ${idx === 0 ? 'text-yellow-400' : 'text-white'}`}>
                                                    {student.score}
                                                </div>
                                                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Marks</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 px-6 bg-slate-900/50 border border-dashed border-slate-800 rounded-3xl">
                                    <Users className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                                    <h3 className="font-bold text-slate-300">No Top Students Yet</h3>
                                    <p className="text-slate-500 text-sm mt-2">Be the first one to appear on the leaderboard!</p>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Right Column: Paper Details */}
                    <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
                        <section className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -mr-20 -mt-20" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 blur-[100px] rounded-full -ml-20 -mb-20" />

                            <div className="relative">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <span className="px-4 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 inline-block">
                                        Test Series Details
                                    </span>
                                    <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-white to-slate-500 bg-clip-text text-transparent leading-tight">
                                        {title}
                                    </h1>
                                    <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl">
                                        {description}
                                    </p>
                                </motion.div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                    {paperDetails.map((detail, idx) => (
                                        <motion.div
                                            key={detail.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * (idx + 1) }}
                                            className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-3xl hover:border-slate-600 transition-colors group"
                                        >
                                            <detail.icon className={`w-6 h-6 ${detail.color} mb-3 group-hover:scale-110 transition-transform`} />
                                            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{detail.label}</div>
                                            <div className="text-xl font-black text-white">{detail.value}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="space-y-6 mb-12">
                                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3">
                                        <div className="h-px w-8 bg-slate-800" />
                                        Assessment Guidelines
                                        <div className="h-px flex-1 bg-slate-800" />
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-4 bg-green-500/5 border border-green-500/10 p-4 rounded-2xl">
                                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                                <CheckCircle2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">+4 Marks</div>
                                                <div className="text-xs text-slate-400">Correct Response</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 bg-red-500/5 border border-red-500/10 p-4 rounded-2xl">
                                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                                                <XCircle className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">-1 Mark</div>
                                                <div className="text-xs text-slate-400">Incorrect Response</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={onStart}
                                    className="w-full py-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-3xl font-black text-xl hover:shadow-[0_0_40px_rgba(79,70,229,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-3 hover:-translate-y-1"
                                >
                                    Start Final Assessment
                                    <ChevronRight className="w-6 h-6" />
                                </button>

                                <div className="mt-8 flex items-center justify-center gap-8 text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Educator Certified</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Time Restricted</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import {
    Trophy,
    Medal,
    Crown,
    TrendingUp,
    Users,
    Search,
    Trash2,
    ChevronUp
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LeaderboardEntry = {
    _id?: string;
    rank: number;
    name: string;
    score: number;
    avatar: string;
    accuracy: number;
    change: string;
};

type TestSeries = {
    _id: string;
    title: string;
};

export default function Leaderboard({ isAdmin = false }: { isAdmin?: boolean }) {
    const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useState<string>("");

    const [tests, setTests] = useState<TestSeries[]>([]);
    const [selectedTestId, setSelectedTestId] = useState<string>("");

    const getBackendBase = () => {
        const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
        if (envBase) return envBase;
        if (typeof window !== "undefined") {
            const host = window.location.hostname;
            if (host === "localhost" || host === "127.0.0.1") return "http://localhost:3001";
        }
        return "http://localhost:3001";
    };

    // Fetch tests
    useEffect(() => {
        const fetchTests = async () => {
            try {
                const base = getBackendBase();
                const res = await fetch(`${base}/api/leaderboard/tests`);
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.length > 0) {
                        setTests(data);
                        setSelectedTestId(prev => prev ? prev : data[0]._id);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch tests", error);
            }
        };
        fetchTests();
    }, []);

    const fetchLeaderboard = async () => {
        setIsLoading(true);
        try {
            const base = getBackendBase();
            const userStr = localStorage.getItem("xamsathi_user");
            let userId = "";
            let token = "";
            if (userStr) {
                try {
                    const parsed = JSON.parse(userStr) as Record<string, any>;
                    userId = parsed.id || parsed._id || parsed.user_id || "";
                    if (parsed.name) setUserName(parsed.name);
                    token = parsed.token || "";
                } catch { }
            }
            if (isAdmin) {
                // If admin, we might need to grab token from somewhere else, e.g. cookie
                // but let's assume it's sent in authorization if needed, though leaderboard get is public
            }

            const res = await fetch(`${base}/api/leaderboard/${selectedTestId}`, {
                headers: {
                    "x-user-id": userId || "anonymous"
                }
            });
            if (res.ok) {
                const data = await res.json();
                setLeaderboardData(data);
            } else {
                setLeaderboardData([]);
            }
        } catch (error) {
            console.error("Failed to fetch leaderboard", error);
            setLeaderboardData([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (selectedTestId) {
            fetchLeaderboard();
        }
    }, [selectedTestId]);

    const removeEntry = async (entryId: string) => {
        if (!confirm("Are you sure you want to remove this student from the leaderboard?")) return;
        try {
            const base = getBackendBase();
            const token = localStorage.getItem('admin_token') || ""; // basic check for token
            const res = await fetch(`${base}/api/admin/leaderboard/${entryId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                // refresh leaderboard
                fetchLeaderboard();
            } else {
                alert("Failed to delete entry");
            }
        } catch (err) {
            console.error(err);
            alert("Error deleting entry");
        }
    };

    const rest = leaderboardData.slice(3);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Trophy className="w-8 h-8 text-yellow-500" />
                        Top Performers
                    </h2>
                    <p className="text-slate-400 text-sm">See where you stand among the best.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                    {tests.length > 0 && (
                        <select
                            className="bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 transition-all w-full sm:w-auto"
                            value={selectedTestId}
                            onChange={(e) => setSelectedTestId(e.target.value)}
                        >
                            {tests.map(t => (
                                <option key={t._id} value={t._id}>{t.title}</option>
                            ))}
                        </select>
                    )}
                    <div className="relative group w-full sm:w-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search student..."
                            className="bg-slate-900 border border-slate-700 text-slate-200 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full md:w-[280px] pl-10 p-2.5 placeholder-slate-500 transition-all hover:bg-slate-800 focus:bg-slate-900"
                        />
                    </div>
                </div>
            </div>
            {leaderboardData.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[300px] mb-12">
                    <div className="order-2 md:order-1 flex flex-col justify-end">
                        {leaderboardData.length >= 2 && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 flex flex-col items-center relative overflow-hidden group hover:border-slate-600 transition-all"
                            >
                                {isAdmin && leaderboardData[1]?._id && (
                                    <button
                                        onClick={() => removeEntry(leaderboardData[1]._id!)}
                                        className="absolute top-4 right-4 z-20 text-red-500 hover:text-red-400 p-2 hover:bg-red-500/10 rounded-full transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/10 blur-[50px] rounded-full" />
                                <div className="relative mb-4">
                                    <div className="w-20 h-20 rounded-full border-4 border-slate-300 p-1 bg-slate-800 overflow-hidden relative">
                                        <Image
                                            src={leaderboardData[1]?.avatar || "/default-avatar.png"}
                                            alt="Rank 2"
                                            fill
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-700 text-white text-xs font-bold px-2 py-0.5 rounded border border-slate-500 shadow-lg flex items-center gap-1">
                                        <Medal className="w-3 h-3 text-slate-300" /> 2nd
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{leaderboardData[1]?.name}</h3>
                                <div className="text-slate-400 font-mono text-sm mb-4">{leaderboardData[1]?.score} pts</div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-slate-400 w-[70%]" />
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="order-1 md:order-2 flex flex-col">
                        {leaderboardData.length >= 1 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex-1 bg-gradient-to-b from-yellow-900/20 to-slate-900 border border-yellow-500/30 rounded-3xl p-8 flex flex-col items-center relative overflow-hidden shadow-2xl shadow-yellow-900/10 z-10"
                            >
                                {isAdmin && leaderboardData[0]?._id && (
                                    <button
                                        onClick={() => removeEntry(leaderboardData[0]._id!)}
                                        className="absolute top-4 right-4 z-20 text-red-500 hover:text-red-400 p-2 hover:bg-red-500/10 rounded-full transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
                                <div className="relative mb-6">
                                    <Crown className="w-8 h-8 text-yellow-400 absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce" />
                                    <div className="w-28 h-28 rounded-full border-4 border-yellow-400 p-1 bg-yellow-900/20 shadow-[0_0_20px_rgba(250,204,21,0.3)] overflow-hidden relative">
                                        <Image
                                            src={leaderboardData[0]?.avatar || "/default-avatar.png"}
                                            alt="Rank 1"
                                            fill
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-900 text-sm font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                        <Trophy className="w-3 h-3" /> 1st Place
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-yellow-100 mb-1">{leaderboardData[0]?.name}</h3>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-yellow-500 font-black text-3xl">{leaderboardData[0]?.score}</span>
                                    <span className="text-slate-500 text-sm font-medium self-end mb-1">/ 720</span>
                                </div>

                                <div className="w-full grid grid-cols-2 gap-2 text-center">
                                    <div className="bg-slate-800/50 p-2 rounded-lg border border-yellow-500/10">
                                        <div className="text-slate-400 text-xs">Accuracy</div>
                                        <div className="text-white font-bold">{leaderboardData[0]?.accuracy}%</div>
                                    </div>
                                    <div className="bg-slate-800/50 p-2 rounded-lg border border-yellow-500/10">
                                        <div className="text-slate-400 text-xs">Trend</div>
                                        <div className="text-green-400 font-bold flex items-center justify-center gap-1">
                                            <TrendingUp className="w-3 h-3" /> +15
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="order-3 flex flex-col justify-end">
                        {leaderboardData.length >= 3 && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 flex flex-col items-center relative overflow-hidden group hover:border-orange-700/50 transition-all"
                            >
                                {isAdmin && leaderboardData[2]?._id && (
                                    <button
                                        onClick={() => removeEntry(leaderboardData[2]._id!)}
                                        className="absolute top-4 right-4 z-20 text-red-500 hover:text-red-400 p-2 hover:bg-red-500/10 rounded-full transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full" />
                                <div className="relative mb-4">
                                    <div className="w-20 h-20 rounded-full border-4 border-orange-700 p-1 bg-slate-800 overflow-hidden relative">
                                        <Image
                                            src={leaderboardData[2]?.avatar || "/default-avatar.png"}
                                            alt="Rank 3"
                                            fill
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-800 text-white text-xs font-bold px-2 py-0.5 rounded border border-orange-600 shadow-lg flex items-center gap-1">
                                        <Medal className="w-3 h-3 text-orange-200" /> 3rd
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{leaderboardData[2]?.name}</h3>
                                <div className="text-slate-400 font-mono text-sm mb-4">{leaderboardData[2]?.score} pts</div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-orange-700 w-[60%]" />
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            )}

            {rest.length > 0 && (
                <div className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                        <div className="text-lg font-bold text-white flex items-center gap-2">
                            <Users className="w-5 h-5 text-indigo-400" />
                            All Students
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-800 bg-slate-900/50">
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-16 text-center">Rank</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Student</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Score</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center hidden sm:table-cell">Accuracy</th>
                                    <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Trend</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {rest.map((student) => {
                                    const isMe = student.name === userName;
                                    return (
                                        <tr key={student.rank} className={cn(
                                            "hover:bg-slate-800/50 transition-colors group",
                                            isMe && "bg-indigo-500/10 border-l-4 border-l-indigo-500"
                                        )}>
                                            <td className="p-4 text-center">
                                                <div className={cn(
                                                    "inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-slate-400 font-bold font-mono text-sm border border-slate-700 transition-all",
                                                    isMe ? "bg-indigo-500 text-white border-indigo-400" : "group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400"
                                                )}>
                                                    {student.rank}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-slate-800 overflow-hidden relative border border-slate-700">
                                                        <Image
                                                            src={student.avatar || "/default-avatar.png"}
                                                            alt={student.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <span className={cn(
                                                            "font-semibold transition-colors",
                                                            isMe ? "text-indigo-400" : "text-slate-200 group-hover:text-white"
                                                        )}>
                                                            {student.name}
                                                        </span>
                                                        {isMe && <span className="ml-2 text-[10px] bg-indigo-500 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">You</span>}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-center font-bold text-white font-mono">{student.score}</td>
                                            <td className="p-4 text-center text-slate-400 hidden sm:table-cell">{student.accuracy}%</td>
                                            <td className="p-4 text-right">
                                                <div className="inline-flex items-center gap-2 text-sm text-slate-400">
                                                    {isAdmin && student._id && (
                                                        <button
                                                            onClick={() => removeEntry(student._id!)}
                                                            className="text-red-400 hover:text-red-300 p-1 hover:bg-red-500/10 rounded mr-2 transition-colors"
                                                            title="Remove from Leaderboard"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    )}
                                                    <ChevronUp className="w-4 h-4 text-green-400" />
                                                    {student.change || "0"}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {leaderboardData.length === 0 && !isLoading && (
                <div className="p-12 text-center border border-dashed border-slate-800 rounded-3xl bg-slate-900/50">
                    <Trophy className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                    <h3 className="text-white font-bold text-lg">No Results Yet</h3>
                    <p className="text-slate-500 mt-2">Be the first to take the test and top the leaderboard!</p>
                </div>
            )}
        </div>
    );
}

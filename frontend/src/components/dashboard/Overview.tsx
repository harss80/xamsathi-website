"use client";

import { motion } from "framer-motion";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from "recharts";
import {
    Target,
    Trophy,
    ChevronRight,
    PlayCircle,
} from "lucide-react";
import Image from "next/image"; // For teacher avatars or course images

const ACTIVITY_DATA = [
    { day: "Mon", score: 65, hours: 2 },
    { day: "Tue", score: 72, hours: 3.5 },
    { day: "Wed", score: 68, hours: 4 },
    { day: "Thu", score: 85, hours: 5 },
    { day: "Fri", score: 78, hours: 3 },
    { day: "Sat", score: 92, hours: 6 },
    { day: "Sun", score: 88, hours: 4.5 },
];

const TEST_SERIES_ID = "neet-ug-mock-180";

import { useEffect, useState } from "react";

type LeaderboardItem = {
    rank: number;
    name: string;
    avatar?: string;
    score: number;
};

type OverviewUser = {
    name: string;
};

export default function Overview({ user }: { user: OverviewUser }) {
    const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
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
                const userStr = localStorage.getItem("xamsathi_user");
                let userId = "";
                if (userStr) {
                    try {
                        const parsed = JSON.parse(userStr) as Record<string, any>;
                        userId = parsed.id || parsed._id || parsed.user_id || "";
                    } catch { }
                }

                // We fetch even if userId is empty to show the global leaderboard
                const res = await fetch(`${base}/api/leaderboard/${TEST_SERIES_ID}`, {
                    headers: { "x-user-id": userId }
                });
                if (res.ok) {
                    const data = await res.json();
                    setLeaderboard(data.slice(0, 5)); // Get top 5
                }
            } catch (err) {
                console.error("Failed to fetch leaderboard for overview", err);
            }
        };
        fetchLeaderboard();
    }, []);

    return (
        <div className="space-y-8">
            {/* Welcome & Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Welcome Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:col-span-2 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-indigo-900/30"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">Hello, {user.name.split(' ')[0]}! 👋</h2>
                            <p className="text-indigo-100 max-w-md text-lg">
                                You&apos;re doing great! You&apos;ve completed <span className="font-bold text-white">85%</span> of your weekly goals. keeps going!
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <button className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:bg-indigo-50 transition-all flex items-center gap-2">
                                    <PlayCircle className="w-5 h-5" /> Resume Learning
                                </button>
                                <button className="px-6 py-3 bg-indigo-800/50 text-white font-medium rounded-xl hover:bg-indigo-800 transition-all border border-indigo-400/30">
                                    View Study Plan
                                </button>
                            </div>
                        </div>
                        {/* Optional: Add a 3D illustration or graphic here */}
                    </div>
                </motion.div>

                {/* Quick Goal Stat */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-emerald-500/10 rounded-2xl">
                            <Target className="w-6 h-6 text-emerald-500" />
                        </div>
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">+12% vs last week</span>
                    </div>
                    <div>
                        <p className="text-slate-400 font-medium mb-1">Weekly Target</p>
                        <div className="flex items-end gap-2 mb-2">
                            <h3 className="text-4xl font-bold text-white">24<span className="text-xl text-slate-500">/30</span></h3>
                            <span className="text-sm text-slate-400 mb-1.5">hrs</span>
                        </div>
                        <progress
                            value={80}
                            max={100}
                            className="w-full h-2 rounded-full overflow-hidden bg-slate-800 accent-emerald-500"
                            aria-label="Weekly target progress"
                        />
                    </div>
                </motion.div>

                {/* Leaderboard Preview */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-yellow-500" />
                            <h3 className="text-white font-bold">Class Standings</h3>
                        </div>
                        <a href="/dashboard?tab=leaderboard" className="text-xs text-indigo-400 hover:text-indigo-300">View All</a>
                    </div>

                    <div className="space-y-3 flex-1">
                        {leaderboard.length > 0 ? (
                            leaderboard.map((student, idx) => (
                                <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50 border border-slate-700">
                                    <div className="flex items-center gap-3">
                                        <span className={`font-bold text-sm ${idx === 0 ? 'text-yellow-500' : idx === 1 ? 'text-slate-300' : idx === 2 ? 'text-orange-500' : 'text-slate-500'}`}>#{student.rank}</span>
                                        <div className="w-6 h-6 rounded-full bg-slate-700 overflow-hidden relative">
                                            <Image
                                                src={student.avatar || "/default-avatar.png"}
                                                alt={student.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="text-sm text-slate-200">{student.name}</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-400">{student.score} pts</span>
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center justify-center h-full text-slate-500 text-sm">
                                No rankings available yet.
                            </div>
                        )}

                        {/* Show current user if not in top list (mock/placeholder logic if desired) */}
                        {/* For now, just showing the top 5 fetched */}
                    </div>
                </motion.div>
            </div>

            {/* Analytics & Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-6"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-white">Learning Activity</h3>
                            <p className="text-sm text-slate-400">Your study hours over the last 7 days</p>
                        </div>
                        <select aria-label="Learning activity range" className="bg-slate-800 border-none text-slate-300 text-sm rounded-lg px-3 py-1 focus:ring-1 focus:ring-indigo-500">
                            <option>Last 7 Days</option>
                            <option>This Month</option>
                        </select>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={ACTIVITY_DATA}>
                                <defs>
                                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis dataKey="day" stroke="#64748b" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis stroke="#64748b" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                                    itemStyle={{ color: '#e2e8f0' }}
                                />
                                <Area type="monotone" dataKey="hours" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Upcoming Classes / Schedule */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6"
                >
                    <h3 className="text-xl font-bold text-white mb-6">Today&apos;s Schedule</h3>
                    <div className="space-y-4">
                        {[
                            { time: "10:00 AM", subject: "Physics", topic: "Rotational Dynamics", type: "Live", status: "now" },
                            { time: "02:00 PM", subject: "Chemistry", topic: "Organic Reactions", type: "Lecture", status: "upcoming" },
                            { time: "04:30 PM", subject: "Maths", topic: "Calculus Review", type: "Practice", status: "upcoming" },
                        ].map((item, i) => (
                            <div key={i} className={`p-4 rounded-xl border transition-all ${item.status === 'now' ? 'bg-indigo-900/20 border-indigo-500/50' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${item.status === 'now' ? 'bg-red-500/20 text-red-400 animate-pulse' : 'bg-slate-800 text-slate-400'}`}>
                                        {item.status === 'now' ? 'LIVE NOW' : item.time}
                                    </span>
                                    <span className="text-xs font-medium text-slate-500">{item.type}</span>
                                </div>
                                <h4 className="font-bold text-white text-lg leading-tight mb-1">{item.subject}</h4>
                                <p className="text-sm text-slate-400">{item.topic}</p>

                                {item.status === 'now' && (
                                    <button className="w-full mt-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-colors">
                                        Join Class
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Recent Courses / Continue Learning */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Continue Learning</h3>
                    <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300 flex items-center gap-1">
                        View All Courses <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
                            <div className="h-32 bg-slate-800 relative">
                                {/* Placeholder for course image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                                <div className="absolute bottom-3 left-4 right-4">
                                    <span className="text-xs font-bold text-indigo-300 bg-indigo-900/50 px-2 py-0.5 rounded border border-indigo-500/30 mb-1 inline-block">Chapter {i + 2}</span>
                                    <h4 className="text-white font-bold truncate">Advanced Physics: Mechanics</h4>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between text-xs text-slate-400 mb-2">
                                    <span>Progress</span>
                                    <span>{45 + i * 10}%</span>
                                </div>
                                <progress
                                    value={45 + i * 10}
                                    max={100}
                                    className="w-full h-1.5 rounded-full overflow-hidden bg-slate-800 accent-indigo-500 mb-4"
                                    aria-label="Course progress"
                                />
                                <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition-colors border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2">
                                    <PlayCircle className="w-4 h-4" /> Continue
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

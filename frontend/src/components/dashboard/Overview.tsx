"use client";

import { motion } from "framer-motion";
import {
    Trophy,
    ChevronRight,
    PlayCircle,
} from "lucide-react";
import Image from "next/image"; // For teacher avatars or course images

import { useEffect, useState } from "react";
import Link from "next/link";

type LeaderboardItem = {
    rank: number;
    name: string;
    avatar?: string;
    score: number;
};

type OverviewUser = {
    name: string;
    course?: string;
};

type CourseItem = {
    _id: string;
    title: string;
    description?: string;
    class_grade?: number;
};

type Stats = {
    coins: number;
    streak: { count: number; last_active_date: string } | null;
};

export default function Overview({ user }: { user: OverviewUser }) {
    const [leaderboard, setLeaderboard] = useState<LeaderboardItem[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [courses, setCourses] = useState<CourseItem[]>([]);

    useEffect(() => {
        const fetchOverviewData = async () => {
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

                // Fetch Leaderboard
                fetch(`${base}/api/leaderboard/neet-ug-mock-180`, { headers: { "x-user-id": userId } })
                    .then(res => res.ok ? res.json() : null)
                    .then(data => {
                        if (data) setLeaderboard(data.slice(0, 5));
                    })
                    .catch(console.error);

                if (userId) {
                    // Fetch Stats
                    fetch(`${base}/api/gamification/status`, { headers: { "x-user-id": userId } })
                        .then(res => res.ok ? res.json() : null)
                        .then(data => {
                            if (data) setStats({ coins: data.coins || 0, streak: data.streak });
                        })
                        .catch(console.error);
                }

                // Fetch Courses
                fetch(`${base}/api/tests/courses`)
                    .then(res => res.ok ? res.json() : null)
                    .then(data => {
                        if (data && data.items) setCourses(data.items.slice(0, 6));
                    })
                    .catch(console.error);

            } catch (err) {
                console.error("Failed to fetch overview data", err);
            }
        };
        fetchOverviewData();
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
                                <Link href="/dashboard?tab=courses" className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:bg-indigo-50 transition-all flex items-center gap-2">
                                    <PlayCircle className="w-5 h-5" /> Resume Learning
                                </Link>
                                <Link href="/dashboard?tab=tests" className="px-6 py-3 bg-indigo-800/50 text-white font-medium rounded-xl hover:bg-indigo-800 transition-all border border-indigo-400/30">
                                    View Tests
                                </Link>
                            </div>
                        </div>
                        {/* Optional: Add a 3D illustration or graphic here */}
                    </div>
                </motion.div>

                {/* Your Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between"
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-yellow-500/10 rounded-2xl">
                            <Trophy className="w-6 h-6 text-yellow-500" />
                        </div>
                        <span className="text-xs font-bold text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded-full">Your Stats</span>
                    </div>
                    <div>
                        <p className="text-slate-400 font-medium mb-1">Xam Coins</p>
                        <div className="flex items-end gap-2 mb-2">
                            <h3 className="text-4xl font-bold text-white">{stats?.coins || 0}</h3>
                            <span className="text-sm text-slate-400 mb-1.5">coins</span>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-800">
                        <p className="text-slate-400 font-medium mb-1">Login Streak</p>
                        <div className="flex items-end gap-2 text-indigo-400">
                            <span className="text-2xl font-bold">{stats?.streak?.count || 0}</span>
                            <span className="text-sm font-medium mb-1">Days</span>
                        </div>
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

            {/* Action Cards Instead of Fake Activity/Schedule */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Auto Generate CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-indigo-900/40 border border-indigo-500/30 rounded-3xl p-8 flex flex-col items-start"
                >
                    <h3 className="text-2xl font-bold text-white mb-2">Generate Custom Test</h3>
                    <p className="text-indigo-200 mb-6 max-w-sm">Use AI to generate a custom test for any subject based on your requirements and track your strength.</p>
                    <Link href="/dashboard?tab=autogenerate" className="mt-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-500/20">
                        Try Auto Generate
                    </Link>
                </motion.div>

                {/* Earn Rewards CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-emerald-900/30 border border-emerald-500/30 rounded-3xl p-8 flex flex-col items-start"
                >
                    <h3 className="text-2xl font-bold text-white mb-2">Earn Xam Coins</h3>
                    <p className="text-emerald-200 mb-6 max-w-sm">Refer a friend and both of you earn 500 coins. Use these coins to unlock premium tests!</p>
                    <Link href="/dashboard?tab=earn" className="mt-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/20">
                        Refer & Earn
                    </Link>
                </motion.div>
            </div>

            {/* Recent Courses / Continue Learning */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Available Courses</h3>
                    <Link href="/dashboard?tab=courses" className="text-indigo-400 text-sm font-medium hover:text-indigo-300 flex items-center gap-1">
                        View All Courses <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                {courses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course, i) => (
                            <div key={course._id} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
                                <div className="h-32 bg-slate-800 relative">
                                    {/* Placeholder for course image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                                    <div className="absolute bottom-3 left-4 right-4">
                                        <span className="text-xs font-bold text-indigo-300 bg-indigo-900/50 px-2 py-0.5 rounded border border-indigo-500/30 mb-1 inline-block">Class {course.class_grade || 12}</span>
                                        <h4 className="text-white font-bold truncate">{course.title}</h4>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-slate-400 mb-4 line-clamp-2">{course.description || "Learn and master concepts"}</p>
                                    <Link href="/dashboard?tab=courses" className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition-colors border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2">
                                        <PlayCircle className="w-4 h-4" /> View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-slate-500 text-sm py-8 text-center bg-slate-900/30 rounded-2xl border border-slate-800 border-dashed">
                        No courses available at the moment.
                    </div>
                )}
            </div>
        </div>
    );
}

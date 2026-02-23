"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Target, TrendingUp, AlertCircle, CheckCircle2, Trophy, Clock, BrainCircuit } from "lucide-react";
import AppFrame from "@/components/AppFrame";

const accuracyData = [
    { name: 'Mock 1', accuracy: 65, avg: 55 },
    { name: 'Mock 2', accuracy: 72, avg: 58 },
    { name: 'Mock 3', accuracy: 68, avg: 60 },
    { name: 'Mock 4', accuracy: 85, avg: 62 },
    { name: 'Mock 5', accuracy: 92, avg: 65 },
];

const rankData = [
    { name: 'Mock 1', rank: 15600 },
    { name: 'Mock 2', rank: 12400 },
    { name: 'Mock 3', rank: 14200 },
    { name: 'Mock 4', rank: 8500 },
    { name: 'Mock 5', rank: 4200 },
];

export default function SSCCGLDashboard() {
    return (
        <AppFrame>
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header Profile & Overall Stats */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-sm">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-slate-800 shadow-inner p-1 relative overflow-hidden border border-slate-700">
                            <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=student100" fill alt="Profile" className="object-cover" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-white mb-2">My SSC CGL Dashboard</h1>
                            <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-slate-400">
                                <span className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">Pro Plan Active</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 12 Tests Attempted</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overall Performance Widgets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 opacity-10"><Target className="w-24 h-24" /></div>
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
                            <Target className="w-6 h-6" />
                        </div>
                        <p className="text-slate-400 text-sm font-bold mb-1">Target Score</p>
                        <h3 className="text-3xl font-black text-white">165<span className="text-lg text-slate-500 font-bold">/200</span></h3>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 opacity-10"><Trophy className="w-24 h-24" /></div>
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/20">
                            <Trophy className="w-6 h-6" />
                        </div>
                        <p className="text-slate-400 text-sm font-bold mb-1">Current Best Rank</p>
                        <h3 className="text-3xl font-black text-white">4,200</h3>
                        <p className="text-xs text-emerald-400 font-bold mt-2">Top 5% 🚀</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 opacity-10"><TrendingUp className="w-24 h-24" /></div>
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <p className="text-slate-400 text-sm font-bold mb-1">Average Accuracy</p>
                        <h3 className="text-3xl font-black text-white">76%</h3>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 opacity-10"><Clock className="w-24 h-24" /></div>
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/20">
                            <Clock className="w-6 h-6" />
                        </div>
                        <p className="text-slate-400 text-sm font-bold mb-1">Avg Time / Question</p>
                        <h3 className="text-3xl font-black text-white">42s</h3>
                    </div>
                </div>

                {/* Graphs Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8">
                        <h3 className="text-xl font-bold text-white mb-6">Accuracy Progression</h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={accuracyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                    <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                    <YAxis stroke="#64748b" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontWeight: 'bold' }}
                                        itemStyle={{ color: '#fff' }}
                                    />
                                    <Bar dataKey="accuracy" name="My Accuracy" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
                                    <Bar dataKey="avg" name="Avg Accuracy" fill="#334155" radius={[6, 6, 0, 0]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-between">
                            Rank History
                            <span className="text-xs bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-400">Lower is better</span>
                        </h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={rankData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                    <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                    <YAxis reversed stroke="#64748b" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontWeight: 'bold' }}
                                    />
                                    <Line type="monotone" dataKey="rank" stroke="#10b981" strokeWidth={4} dot={{ r: 6, fill: '#10b981', strokeWidth: 0 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Weak Topics */}
                    <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <BrainCircuit className="w-5 h-5 text-red-400" /> Weak Topics To Revise
                        </h3>
                        <div className="space-y-4">
                            {[
                                { topic: "Geometry - Circles", accuracy: "42%" },
                                { topic: "Time & Work", accuracy: "55%" },
                                { topic: "Vocabulary - Synonyms", accuracy: "60%" },
                                { topic: "Current Affairs (Last 6M)", accuracy: "62%" }
                            ].map((w, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded-2xl">
                                    <span className="font-bold text-slate-300 text-sm">{w.topic}</span>
                                    <span className="font-black text-red-400">{w.accuracy}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Available Tests */}
                    <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-white">Available Tests</h3>
                            <button className="text-sm font-bold text-blue-400 hover:text-blue-300">View All</button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: "Full Mock Test 6 (TCS Pattern)", qs: 100, time: "60 Mins", type: "Full Length" },
                                { name: "Quant Sectional - Geometry", qs: 25, time: "20 Mins", type: "Sectional" },
                                { name: "SSC CGL 2023 Tier-1 (Shift 2)", qs: 100, time: "60 Mins", type: "PYQ" },
                            ].map((test, i) => (
                                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 bg-slate-950 border border-slate-800 rounded-2xl gap-4 hover:border-blue-500/50 transition-colors">
                                    <div>
                                        <div className="inline-block px-2.5 py-1 bg-slate-800 text-slate-400 rounded-md text-[10px] font-bold uppercase tracking-wider mb-2">
                                            {test.type}
                                        </div>
                                        <h4 className="font-bold text-slate-200 mb-1">{test.name}</h4>
                                        <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                                            <span>{test.qs} Questions</span> • <span>{test.time}</span>
                                        </div>
                                    </div>
                                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl whitespace-nowrap active:scale-95 transition-all text-sm w-full sm:w-auto">
                                        Attempt Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </AppFrame>
    );
}

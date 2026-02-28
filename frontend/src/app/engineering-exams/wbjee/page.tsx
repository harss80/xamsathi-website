"use client";
import React from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
    ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
    Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X,
    ZapOff, Timer, GraduationCap, ChevronRight, School, Laptop, Microscope,
    MapPin, Building2, FlaskConical, TrendingUp
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function WBJEEPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
            <Navbar />

            {/* 🔥 Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-black mb-8 uppercase tracking-widest shadow-sm">
                            <Building2 className="w-4 h-4" /> Gateway to Jadavpur University
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                            WBJEE 2026 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Prime Test Series</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-bold leading-relaxed">
                            Category-wise Marking Strategy | P-1 & P-2 Simulation | 155 Question OMR Drills | Jadavpur Benchmark Reports
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                            <Link href="/dashboard/test-series/wbjee-free" className="px-10 py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl shadow-lg shadow-cyan-500/40 active:scale-95 group">
                                <Zap className="w-6 h-6 fill-white" /> Attempt Free Test
                            </Link>
                            <Link href="/engineering-exams/wbjee/schedule" className="px-10 py-5 bg-slate-950 border-2 border-slate-800 hover:border-slate-600 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl active:scale-95 group">
                                <BookOpen className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" /> Exam Roadmap
                            </Link>
                        </div>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-slate-800/50">
                            {[
                                { t: "200+ Mocks", d: "Paper 1 & 2 Focused", i: CheckCircle2, c: "text-emerald-400" },
                                { t: "JU Focused", d: "Target Category Benchmarks", i: GraduationCap, c: "text-blue-400" },
                                { t: "Cat-3 Mastery", d: "Multiple Correct Experts", i: Target, c: "text-cyan-400" },
                                { t: "AI Ranker", d: "Predict Jadavpur Cutoffs", i: BarChart3, c: "text-amber-400" }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className={`w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-3 border border-slate-800 shadow-inner`}>
                                        <stat.i className={`w-6 h-6 ${stat.c}`} />
                                    </div>
                                    <div className="text-xl font-black text-white leading-none">{stat.t}</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">{stat.d}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 🎯 WBJEE Highlights */}
            <section className="py-24 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Why WBJEE is Different?</h2>
                        <p className="text-lg text-slate-400 font-bold max-w-2xl mx-auto italic">"200 Marks. 155 Questions. 3 Categories—A test of tactical decision making."</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-cyan-500/30 transition-all group relative overflow-hidden h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-8 border border-cyan-500/20 shadow-inner">
                                <Plus className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Category-3 Specialist</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6 flex-1">Master the 'Multiple Correct' questions where there's NO negative marking. Learn when to play safe and when to mark all.</p>
                            <div className="flex items-center gap-2 text-cyan-400 text-xs font-black uppercase tracking-widest">
                                <span>Zero Penalty Training</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-blue-500/30 transition-all group relative overflow-hidden h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20 shadow-inner">
                                <School className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Jadavpur Simulator</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6 flex-1">Target the premier engineering institute in the East. Our mocks mirror the exact difficulty levels required for a JU Gen seat.</p>
                            <div className="flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest">
                                <span>Top West Bengal Colleges</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-indigo-500/30 transition-all group relative overflow-hidden h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8 border border-indigo-500/20 shadow-inner">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Math Dominance</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6 flex-1">Math counts for 50% of your total rank. Paper 1 requires high-speed mathematical analysis. We give you 100+ Math-only drills.</p>
                            <div className="flex items-center gap-2 text-indigo-400 text-xs font-black uppercase tracking-widest">
                                <span>50% Rank Weightage</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📊 WBJEE Structure */}
            <section className="py-24 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-cyan-600 decoration-4 underline-offset-8">Dual Paper Interface</h2>
                            <div className="space-y-4">
                                {[
                                    { s: "Paper 1 (Mathematics)", q: "75 Questions", d: "100 Marks | 2 Hours", i: Calculator, c: "text-cyan-400" },
                                    { s: "Paper 2 (Physics)", q: "40 Questions", d: "50 Marks | 1 Hour", i: Atom, c: "text-blue-400" },
                                    { s: "Paper 2 (Chemistry)", q: "40 Questions", d: "50 Marks | 1 Hour", i: Microscope, c: "text-emerald-400" },
                                    { s: "Total Scale", q: "155 Questions", d: "200 Marks Total", i: Trophy, c: "text-amber-400" }
                                ].map((row, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 bg-slate-900 rounded-3xl border border-slate-800 hover:border-cyan-500/20 transition-all group">
                                        <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center ${row.c} border border-slate-800 shadow-sm`}>
                                            <row.i className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-black text-white tracking-tight leading-none mb-1">{row.s}</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{row.q} | {row.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="p-10 bg-gradient-to-br from-cyan-600 to-blue-800 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12 transition-transform group-hover:rotate-45"><ZapOff className="w-48 h-48" /></div>
                                <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter relative z-10">West Bengal Elite Pack</h3>
                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    <div>
                                        <div className="text-6xl font-black mb-1 tracking-tighter leading-none">200+</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none">Total Tests</div>
                                    </div>
                                    <div>
                                        <div className="text-6xl font-black mb-1 tracking-tighter leading-none">45k+</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none">Bengal Rankers</div>
                                    </div>
                                    <div className="col-span-2 pt-8 border-t border-white/20">
                                        <div className="text-3xl font-black mb-2 tracking-tighter uppercase leading-none">OMR Simulation Engine</div>
                                        <p className="text-sm font-bold text-cyan-100 opacity-80 leading-relaxed">Our OMR simulator mirrors the exact offline experience of WBJEE, including paper management and tactical bubbling strategy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 💰 Pricing Tiers */}
            <section className="py-24 bg-slate-900 border-b border-slate-800 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 underline decoration-cyan-600 decoration-4 underline-offset-[12px]">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Premium Access</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Only WBJEE */}
                        <div className="p-10 bg-slate-950 rounded-[3rem] border border-slate-800 flex flex-col hover:border-cyan-500 transition-all group scale-100 hover:scale-105 duration-300">
                            <h3 className="text-xl font-black text-cyan-400 mb-6 uppercase tracking-widest">Only WBJEE</h3>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-black text-white tracking-tighter leading-none">₹499</span>
                                <span className="text-slate-500 line-through font-bold">₹899</span>
                            </div>
                            <ul className="space-y-4 mb-12 flex-1">
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-cyan-400" /> 200+ Bengal Focused Mocks</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-cyan-400" /> Jadavpur Category Benchmarks</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-cyan-400" /> Paper 1 Math Speed Drills</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-cyan-400" /> Category-3 Specific Papers</li>
                            </ul>
                            <Link href="/checkout?plan=wbjee" className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl text-center transition-all text-xl shadow-xl shadow-cyan-900/40 active:scale-95">Enroll Now</Link>
                        </div>

                        {/* Engineering All-Access */}
                        <div className="p-1 rounded-[3rem] bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 shadow-2xl relative group scale-100 md:scale-110 z-10 transition-transform duration-500">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-slate-950 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">Best Value</div>
                            <div className="bg-slate-950 rounded-[2.9rem] p-10 h-full flex flex-col">
                                <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest">Engg. Platinum Pack</h3>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-5xl font-black text-white tracking-tighter leading-none">₹3499</span>
                                    <span className="text-slate-500 line-through font-bold">₹5999</span>
                                </div>
                                <ul className="space-y-4 mb-12 flex-1">
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> Full JEE + BITSAT + WBJEE</li>
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> Total 1000+ Premium Mocks</li>
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> High-End AI Performance Reports</li>
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-cyan-500" /> Full Mock Video Solutions</li>
                                </ul>
                                <Link href="/checkout?plan=eng-all-access" className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl text-center transition-all text-xl shadow-xl shadow-cyan-900/30 active:scale-95 leading-none px-4">Buy Gold Pass</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

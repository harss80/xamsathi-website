"use client";
import React from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
    ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
    Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X,
    ZapOff, Timer, GraduationCap, ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function BITSAT2026Page() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            <Navbar />

            {/* 🔥 Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-black mb-8 uppercase tracking-widest animate-fade-in shadow-sm">
                            <Trophy className="w-4 h-4" /> BITS Pilani Admission Test 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                            BITSAT 2026 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-400">Precision Test Series</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-bold leading-relaxed">
                            Logic & English Mastery | Speed-Accuracy Drills | Real BITS Interface | Bonus Question Simulations
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                            <Link href="/dashboard/test-series/bitsat-free" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl shadow-lg shadow-blue-500/40 active:scale-95 group">
                                <Zap className="w-6 h-6 fill-white" /> Attempt Free Mock
                            </Link>
                            <Link href="/engineering-exams/bitsat/schedule" className="px-10 py-5 bg-slate-950 border-2 border-slate-800 hover:border-slate-600 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl active:scale-95 group">
                                <BookOpen className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" /> Full Exam Guide
                            </Link>
                        </div>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-slate-800/50">
                            {[
                                { t: "85+ Tests", d: "Logic & English Incl.", i: CheckCircle2, c: "text-emerald-400" },
                                { t: "12 Bonus Qs", d: "Unique Simulation", i: Sparkles, c: "text-amber-400" },
                                { t: "Speed Pro", d: "Accuracy Driven Analysis", i: Timer, c: "text-blue-400" },
                                { t: "IIT-Level", d: "Highly Curated Quality", i: GraduationCap, c: "text-purple-400" }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className={`w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-3 border border-slate-800 shadow-inner`}>
                                        <stat.i className={`w-6 h-6 ${stat.c}`} />
                                    </div>
                                    <div className="text-xl font-black text-white">{stat.t}</div>
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.d}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 🎯 BITSAT Specific Sections */}
            <section className="py-24 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Why BITSAT is Different?</h2>
                        <p className="text-lg text-slate-400 font-bold max-w-2xl mx-auto">Unlike JEE, BITSAT tests your speed, English proficiency, and Logical Reasoning. We help you master all three.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-blue-500/30 transition-all group">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20 shadow-inner">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Logical & English</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6">30 crucial questions that decide your rank. Our series includes 20+ dedicated English & LR sectional tests.</p>
                            <div className="flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest">
                                <span>30 Marks Advantage</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-amber-500/30 transition-all group">
                            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-8 border border-amber-500/20 shadow-inner">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Bonus Question Mode</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6">Master the 12 Bonus Questions. Our simulator enables the bonus mode only after you solve the first 130 correctly.</p>
                            <div className="flex items-center gap-2 text-amber-500 text-xs font-black uppercase tracking-widest">
                                <span>Risk-Reward Simulation</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-emerald-500/30 transition-all group">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/20 shadow-inner">
                                <Timer className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">No Break, High Speed</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6">180 minutes, 130 questions. Our platform tracks your time-per-question to help you reach BITS Goa/Pilani benchmarks.</p>
                            <div className="flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-widest">
                                <span>Speedometer Analytics</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📊 BITSAT Structure */}
            <section className="py-24 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">Test Series Breakdown</h2>
                                <div className="space-y-6">
                                    {[
                                        { t: "Physics & Chemistry", c: "60 Questions (30 each)", i: Atom },
                                        { t: "Maths / Biology", c: "40 Questions", i: Calculator },
                                        { t: "English & Logical Reasoning", c: "30 Questions (10+20)", i: Brain },
                                        { t: "Bonus Questions", c: "12 Exclusive Bonus Qs", i: Zap }
                                    ].map((row, i) => (
                                        <div key={i} className="flex items-center gap-6 p-6 bg-slate-900 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all group">
                                            <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center text-blue-400 border border-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                <row.i className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-lg font-black text-white tracking-tight">{row.t}</div>
                                                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{row.c}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 bg-blue-600 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 p-10 opacity-10"><Trophy className="w-64 h-64" /></div>
                                <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter relative z-10">Total Recommended</h3>
                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    <div>
                                        <div className="text-6xl font-black mb-1 tracking-tighter">60+</div>
                                        <div className="text-xs font-black uppercase tracking-widest opacity-80">Chapter Tests</div>
                                    </div>
                                    <div>
                                        <div className="text-6xl font-black mb-1 tracking-tighter">25+</div>
                                        <div className="text-xs font-black uppercase tracking-widest opacity-80">Full Length Mocks</div>
                                    </div>
                                    <div className="col-span-2 pt-8 border-t border-white/20">
                                        <div className="text-4xl font-black mb-1 tracking-tighter">Bonus Series</div>
                                        <div className="text-xs font-black uppercase tracking-widest opacity-80">Included in all Full Mocks</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 💰 Pricing */}
            <section className="py-24 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase underline decoration-blue-600 decoration-4 underline-offset-[12px]">BITSAT Premium Plans</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Only BITSAT */}
                        <div className="bg-slate-950 border-2 border-slate-800 p-10 rounded-[3rem] flex flex-col hover:border-blue-500 transition-all group scale-100 hover:scale-105 duration-300">
                            <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase tracking-widest">Only BITSAT</h3>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-black text-white">₹799</span>
                                <span className="text-slate-500 line-through font-bold">₹1499</span>
                            </div>
                            <ul className="space-y-4 mb-12 flex-1">
                                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-blue-400" /> 85+ BITS Dedicated Tests</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-blue-400" /> Real BITSAT Interface</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-blue-400" /> English & Logic Sectionals</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-blue-400" /> All India BITS Ranking</li>
                            </ul>
                            <Link href="/checkout?plan=bitsat" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl text-center transition-all active:scale-95 text-xl shadow-xl shadow-blue-500/20">Enroll Now</Link>
                        </div>

                        {/* Engineering Combo */}
                        <div className="bg-gradient-to-br from-blue-600 to-amber-600 p-1 rounded-[3rem] shadow-2xl relative group scale-100 md:scale-110 z-10 transition-transform duration-500">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">Ultimate Prep</div>
                            <div className="bg-slate-950 rounded-[2.9rem] p-10 h-full flex flex-col">
                                <h3 className="text-2xl font-black text-amber-500 mb-6 uppercase tracking-widest">JEE + BITSAT</h3>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-5xl font-black text-white">₹2499</span>
                                    <span className="text-slate-500 line-through font-bold">₹3999</span>
                                </div>
                                <ul className="space-y-4 mb-12 flex-1">
                                    <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> 450+ Total Premium Tests</li>
                                    <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> JEE Main + Adv + BITSAT</li>
                                    <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> AI Rank Predictor</li>
                                    <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Video Solutions for All</li>
                                </ul>
                                <Link href="/checkout?plan=engineering-combo" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl text-center transition-all shadow-xl shadow-blue-500/30 active:scale-95 text-xl">Enroll Combo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

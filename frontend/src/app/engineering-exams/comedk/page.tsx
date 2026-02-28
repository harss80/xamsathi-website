"use client";
import React from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
    ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
    Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X,
    ZapOff, Timer, GraduationCap, ChevronRight, Building2, MapPin, FlaskConical
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function COMEDKPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-rose-500/30">
            <Navbar />

            {/* 🔥 Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-black mb-8 uppercase tracking-widest shadow-sm">
                            <Building2 className="w-4 h-4" /> Gateway to Top Bangalore Colleges
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                            COMEDK / UGET 2026 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400">Target Series</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-bold leading-relaxed">
                            Zero Negative Marking Strategy | Bangalore's Best College Simulation | 180-Question Stamina Drills | Last 10 Years PYQs
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                            <Link href="/dashboard/test-series/comedk-free" className="px-10 py-5 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl shadow-lg shadow-rose-500/40 active:scale-95 group">
                                <Zap className="w-6 h-6 fill-white" /> Start Free Test
                            </Link>
                            <Link href="/engineering-exams/comedk/schedule" className="px-10 py-5 bg-slate-950 border-2 border-slate-800 hover:border-slate-600 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl active:scale-95 group">
                                <BookOpen className="w-6 h-6 text-rose-400 group-hover:scale-110 transition-transform" /> Exam Roadmap
                            </Link>
                        </div>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-slate-800/50">
                            {[
                                { t: "150+ Mocks", d: "Chapter & Full Length", i: CheckCircle2, c: "text-emerald-400" },
                                { t: "180 Qs", d: "Standard Test Format", i: Target, c: "text-rose-400" },
                                { t: "RVCE Focus", d: "College Specific Cutoffs", i: GraduationCap, c: "text-blue-400" },
                                { t: "AI Analysis", d: "Score Maximizer Reports", i: BarChart3, c: "text-amber-400" }
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

            {/* 🎯 COMEDK Highlights */}
            <section className="py-24 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Why COMEDK is Unique?</h2>
                        <p className="text-lg text-slate-400 font-bold max-w-2xl mx-auto italic">"180 Questions. 180 Minutes. No Negative Marking—A test of sheer accuracy."</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-rose-500/30 transition-all group relative overflow-hidden h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-8 border border-rose-500/20 shadow-inner">
                                <ZapOff className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Zero Negative Marks</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6 flex-1">Maximize your score with zero penalty. Our platform teaches you the best elimination techniques to boost your total attempts to 180.</p>
                            <div className="flex items-center gap-2 text-rose-400 text-xs font-black uppercase tracking-widest">
                                <span>No Penalty Strategy</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-amber-500/30 transition-all group relative overflow-hidden h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-8 border border-amber-500/20 shadow-inner">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Bangalore's Finest</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6 flex-1">Target RVCE, MSRIT, and BMSCE. We provide campus-wise rank benchmarks so you know if your current score gets you CS at RVCE.</p>
                            <div className="flex items-center gap-2 text-amber-500 text-xs font-black uppercase tracking-widest">
                                <span>Top Karnataka Colleges</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-blue-500/30 transition-all group relative overflow-hidden h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20 shadow-inner">
                                <MapPin className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Karnataka P-C-M Only</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6 flex-1">Focus only on core subjects. No English or Aptitude required here. Master the Physics, Chemistry, and Mathematics trio.</p>
                            <div className="flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest">
                                <span>Core Subject Focus</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📊 COMEDK Structure */}
            <section className="py-24 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-rose-600 decoration-4 underline-offset-8">Exam Format</h2>
                            <div className="space-y-4">
                                {[
                                    { s: "Mathematics", q: "60 Questions", d: "One Hour Allotted", i: Calculator, c: "text-rose-400" },
                                    { s: "Physics", q: "60 Questions", d: "Focus on Calculation", i: Atom, c: "text-blue-400" },
                                    { s: "Chemistry", q: "60 Questions", d: "Memory Based & Speedy", i: FlaskConical, c: "text-emerald-400" },
                                    { s: "Total Scale", q: "180 Questions", d: "180 Marks Total", i: Trophy, c: "text-amber-400" }
                                ].map((row, i) => (
                                    <div key={i} className="flex items-center gap-6 p-6 bg-slate-900 rounded-3xl border border-slate-800 hover:border-rose-500/20 transition-all group">
                                        <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center ${row.c} border border-slate-800`}>
                                            <row.i className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-black text-white mb-1 leading-none">{row.s}</div>
                                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{row.q} | {row.d}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="p-10 bg-gradient-to-br from-rose-600 to-amber-600 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12 transition-transform group-hover:rotate-45"><CheckCircle2 className="w-48 h-48" /></div>
                                <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter relative z-10">UGET Master Pack</h3>
                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    <div>
                                        <div className="text-6xl font-black mb-1 tracking-tighter leading-none">150+</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Mock Tests</div>
                                    </div>
                                    <div>
                                        <div className="text-6xl font-black mb-1 tracking-tighter leading-none">40k+</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Practiced Users</div>
                                    </div>
                                    <div className="col-span-2 pt-8 border-t border-white/20">
                                        <div className="text-3xl font-black mb-2 tracking-tighter uppercase">Bangalore Top-10 Simulator</div>
                                        <p className="text-sm font-bold text-rose-100 opacity-80">Our simulator focuses on the 'Big 10' Karnataka colleges by mirroring their actual past year difficulty trends.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 💰 Pricing Section */}
            <section className="py-24 bg-slate-900 border-b border-slate-800 relative z-10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-16 tracking-tighter uppercase underline decoration-rose-600 decoration-4 underline-offset-[12px]">Enroll for COMEDK</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Only COMEDK */}
                        <div className="p-10 bg-slate-950 rounded-[3rem] border border-slate-800 flex flex-col hover:border-rose-500 transition-all group scale-100 hover:scale-105 duration-300">
                            <h3 className="text-xl font-black text-rose-400 mb-6 uppercase tracking-widest text-center">COMEDK Only</h3>
                            <div className="flex items-baseline justify-center gap-2 mb-8">
                                <span className="text-5xl font-black text-white tracking-tighter leading-none">₹599</span>
                                <span className="text-slate-500 line-through font-bold">₹999</span>
                            </div>
                            <ul className="space-y-4 mb-12 flex-1 text-left">
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-rose-400 shrink-0" /> 150+ Karnataka Specific Tests</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-rose-400 shrink-0" /> RVCE & MSRIT Rank Benchmarks</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-rose-400 shrink-0" /> Zero Neg. Strategy Mocks</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-rose-400 shrink-0" /> Performance Growth Reports</li>
                            </ul>
                            <Link href="/checkout?plan=comedk" className="w-full py-5 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-2xl text-center transition-all text-xl shadow-xl shadow-rose-900/40 active:scale-95 leading-none px-4">Get Started Now</Link>
                        </div>

                        {/* Engineering All-Access */}
                        <div className="p-1 rounded-[3rem] bg-gradient-to-br from-rose-600 via-pink-600 to-amber-600 shadow-2xl relative group scale-100 md:scale-110 z-10 transition-transform duration-500">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-slate-950 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">Best Value</div>
                            <div className="bg-slate-950 rounded-[2.9rem] p-10 h-full flex flex-col">
                                <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest text-center">Engg. Gold Pack</h3>
                                <div className="flex items-baseline justify-center gap-2 mb-8">
                                    <span className="text-5xl font-black text-white tracking-tighter leading-none">₹3499</span>
                                    <span className="text-slate-500 line-through font-bold">₹5499</span>
                                </div>
                                <ul className="space-y-4 mb-12 flex-1 text-left">
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" /> Full JEE + BITSAT + COMEDK</li>
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" /> Total 800+ Premium Mock Tests</li>
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" /> Full Mock Video Solutions</li>
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" /> Priority 24/7 AI Doubt Solving</li>
                                </ul>
                                <Link href="/checkout?plan=eng-all-access" className="w-full py-5 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-2xl text-center transition-all text-xl shadow-xl shadow-rose-900/30 active:scale-95 leading-none px-4">Buy Gold Pass</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

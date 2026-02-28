"use client";
import React from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
    ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
    Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X,
    ZapOff, Timer, GraduationCap, ChevronRight, School, Laptop, Microscope
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function VITEEEMasterPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-purple-500/30">
            <Navbar />

            {/* 🔥 Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-black mb-8 uppercase tracking-widest shadow-sm">
                            <Trophy className="w-4 h-4" /> VITEEE 2026 MASTER SERIES
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                            VITEEE 2026 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Campus Entry Protocol</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-bold leading-relaxed">
                            Aptitude + English Mastery | 125 Question Simulations | Detailed Ranking Analytics | Targeted for Vellore & Chennai
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                            <Link href="/dashboard/test-series/viteee-free" className="px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl shadow-lg shadow-purple-500/40 active:scale-95 group">
                                <Zap className="w-6 h-6 fill-white" /> Attempt Free Test
                            </Link>
                            <Link href="/engineering-exams/viteee/schedule" className="px-10 py-5 bg-slate-950 border-2 border-slate-800 hover:border-slate-600 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl active:scale-95 group">
                                <BookOpen className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" /> Complete Guide
                            </Link>
                        </div>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-slate-800/50 text-center">
                            {[
                                { t: "120+ Tests", d: "Aptitude Focused", i: CheckCircle2, c: "text-emerald-400" },
                                { t: "125 Qs/Mock", d: "Exact Exam Pattern", i: Laptop, c: "text-blue-400" },
                                { t: "Vellore Rank", d: "Benchmarked Scoring", i: Target, c: "text-purple-400" },
                                { t: "AI Solutions", d: "Instant Step-by-Step", i: Brain, c: "text-pink-400" }
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

            {/* 💎 VITEEE Highlights */}
            <section className="py-24 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Master the VIT Factor</h2>
                        <p className="text-lg text-slate-400 font-bold max-w-2xl mx-auto italic">"125 Questions in 150 Minutes — Speed is the ultimate differentiator."</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-purple-500/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 -mr-8 -mt-8 rotate-12 transition-transform group-hover:rotate-45"><Brain className="w-24 h-24" /></div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Aptitude & English</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6">15 Questions (10 LR + 5 English) that can boost your rank by thousands. We have 30+ dedicated sectional papers for these.</p>
                            <div className="flex items-center gap-2 text-purple-400 text-xs font-black uppercase tracking-widest">
                                <span>Core Scoring Zone</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-pink-500/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 -mr-8 -mt-8 rotate-12 transition-transform group-hover:rotate-45"><Timer className="w-24 h-24" /></div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Speed Simulation</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6">VITEEE demands high-speed solving. Our mocks track your 'Accuracy at Speed' to prepare you for the time crunch.</p>
                            <div className="flex items-center gap-2 text-pink-400 text-xs font-black uppercase tracking-widest">
                                <span>Tempo Tracking</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="bg-slate-950 p-10 rounded-[3rem] border border-slate-800 hover:border-blue-500/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 -mr-8 -mt-8 rotate-12 transition-transform group-hover:rotate-45"><School className="w-24 h-24" /></div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Campus Benchmarking</h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-6">Compare your mock scores with previous Vellore and Chennai cutoff trends to see where you stand.</p>
                            <div className="flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest">
                                <span>Real-time VIT Ranking</span> <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📊 Paper Structure */}
            <section className="py-24 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-purple-600 decoration-4 underline-offset-8">125 Question Matrix</h2>
                            <div className="space-y-4">
                                {[
                                    { s: "Maths / Biology", q: "40 Questions", d: "High Weightage Core", i: Calculator, c: "text-purple-400" },
                                    { s: "Physics", q: "35 Questions", d: "Conceptual & Formulae", i: Atom, c: "text-blue-400" },
                                    { s: "Chemistry", q: "35 Questions", d: "NCERT Level Memory", i: Microscope, c: "text-emerald-400" },
                                    { s: "Logical Reasoning", q: "10 Questions", d: "High Accuracy Area", i: Brain, c: "text-pink-400" },
                                    { s: "English", q: "5 Questions", d: "Critical Rank Booster", i: BookOpen, c: "text-amber-400" }
                                ].map((row, i) => (
                                    <div key={i} className="flex items-center gap-6 p-5 bg-slate-900 rounded-3xl border border-slate-800 hover:border-purple-500/20 transition-all group">
                                        <div className={`w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center ${row.c} border border-slate-800`}>
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
                            <div className="p-10 bg-gradient-to-br from-purple-600 to-blue-900 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12 transition-transform group-hover:rotate-45"><ZapOff className="w-48 h-48" /></div>
                                <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter relative z-10">VIT Master Suite</h3>
                                <div className="grid grid-cols-2 gap-8 relative z-10">
                                    <div>
                                        <div className="text-6xl font-black mb-1 tracking-tighter leading-none">120+</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Total Tests</div>
                                    </div>
                                    <div>
                                        <div className="text-6xl font-black mb-1 tracking-tighter leading-none">20+</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Full Mocks</div>
                                    </div>
                                    <div className="col-span-2 pt-8 border-t border-white/20">
                                        <div className="text-3xl font-black mb-2 tracking-tighter uppercase shadow-sm">AI Percentile Predictor</div>
                                        <p className="text-sm font-bold text-purple-100 opacity-80">Predicts your category eligibility at VIT Vellore/Chennai campus based on daily mock trending.</p>
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
                    <div className="max-w-4xl mx-auto text-center mb-16 underline decoration-purple-600 decoration-4 underline-offset-[12px]">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Premium Access</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Only VITEEE */}
                        <div className="p-10 bg-slate-950 rounded-[3rem] border border-slate-800 flex flex-col hover:border-purple-500 transition-all group scale-100 hover:scale-105 duration-300">
                            <h3 className="text-xl font-black text-purple-400 mb-6 uppercase tracking-widest">Only VITEEE</h3>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-black text-white tracking-tighter leading-none">₹699</span>
                                <span className="text-slate-500 line-through font-bold">₹1199</span>
                            </div>
                            <ul className="space-y-4 mb-12 flex-1">
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-purple-400" /> 120+ Specialized VIT Tests</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-purple-400" /> English & Aptitude Drills</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-purple-400" /> Previous Year Simulations</li>
                                <li className="flex items-center gap-3 text-slate-300 font-bold text-sm"><Check className="w-5 h-5 text-purple-400" /> VIT Category Rank Analyser</li>
                            </ul>
                            <Link href="/checkout?plan=viteee" className="w-full py-5 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-2xl text-center transition-all text-xl shadow-xl shadow-purple-500/20 active:scale-95">Select Plan</Link>
                        </div>

                        {/* Engineering All-Access */}
                        <div className="p-1 rounded-[3rem] bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 shadow-2xl relative group scale-100 md:scale-110 z-10 transition-transform duration-500">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-slate-950 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">Best Value</div>
                            <div className="bg-slate-950 rounded-[2.9rem] p-10 h-full flex flex-col">
                                <h3 className="text-xl font-black text-white/90 mb-6 uppercase tracking-widest">Engineering Master</h3>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-5xl font-black text-white tracking-tighter leading-none">₹2999</span>
                                    <span className="text-slate-500 line-through font-bold">₹4999</span>
                                </div>
                                <ul className="space-y-4 mb-12 flex-1">
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-pink-500" /> JEE + BITSAT + VITEEE</li>
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-pink-500" /> Total 600+ Mock Tests</li>
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-pink-500" /> 24/7 AI Doubt Solver</li>
                                    <li className="flex items-center gap-3 text-white font-black text-sm"><CheckCircle2 className="w-5 h-5 text-pink-500" /> Video Solutions for Mocks</li>
                                </ul>
                                <Link href="/checkout?plan=engineering-pro" className="w-full py-5 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-2xl text-center transition-all text-xl shadow-xl shadow-purple-500/30 active:scale-95">Enroll Combo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

"use client";
import React from "react";
import Link from "next/link";
import {
    Calendar, Clock, CheckCircle2, BookOpen, ShieldCheck, Trophy,
    Zap, Target, Brain, ArrowRight, Microscope, Atom, Calculator,
    Plus, HelpCircle, MonitorPlay, School, Info, Award, GraduationCap,
    Check, Sparkles, Timer
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function BITSATSchedulePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black mb-6 rounded-full uppercase tracking-widest">
                            <Trophy className="w-4 h-4" /> Gateway to BITS Pilani, Goa & Hyderabad
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            BITSAT 2026: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Complete Roadmap & Guide</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-bold leading-relaxed">
                            Master the exam of Speed & Accuracy. From bonus questions to English proficiency, we've broken down every BITS Pilani standard.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                                <School className="w-5 h-5 text-blue-400" />
                                <span className="text-sm font-bold text-slate-300">Body: BITS Pilani</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                                <MonitorPlay className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm font-bold text-slate-300">Mode: Online CBT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Info */}
            <section className="py-20 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative p-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden text-center">
                                <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>
                                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">BITSAT Eligibility 2026</h3>
                                <ul className="text-left space-y-4 text-sm font-bold text-slate-300 mb-8">
                                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-400 shrink-0" /> Aggregate 75% in PCM/B combined.</li>
                                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-400 shrink-0" /> At least 60% in each individual subject.</li>
                                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-400 shrink-0" /> Passed/Appearing class 12 in 2025/2026.</li>
                                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-400 shrink-0" /> Only 2 attempts (Consecutive years).</li>
                                </ul>
                                <div className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] border-t border-slate-800 pt-6">Source: Official BITS Admission Board</div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">Exam Pattern 2026</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Total Questions", value: "130 Questions", icon: BookOpen },
                                    { label: "Bonus Questions", value: "12 Exclusive Qs", icon: Sparkles },
                                    { label: "Duration", value: "180 Mins (No Break)", icon: Timer },
                                    { label: "Max Marks", value: "390 + 36 Marks", icon: Award },
                                ].map((item, i) => (
                                    <div key={i} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-colors group">
                                        <item.icon className="w-5 h-5 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</div>
                                        <div className="text-lg font-black text-white mt-1 tracking-tight">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marking Scheme */}
            <section className="py-20 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 underline decoration-blue-600 decoration-2 underline-offset-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Marking & Scoring</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="p-8 bg-slate-950 rounded-3xl border border-slate-800 text-center">
                            <div className="text-4xl font-black text-emerald-400 mb-2">+3</div>
                            <div className="text-xs font-black uppercase tracking-widest text-slate-500">Correct Answer</div>
                        </div>
                        <div className="p-8 bg-slate-950 rounded-3xl border border-slate-800 text-center">
                            <div className="text-4xl font-black text-rose-500 mb-2">-1</div>
                            <div className="text-xs font-black uppercase tracking-widest text-slate-500">Incorrect Answer</div>
                        </div>
                        <div className="p-8 bg-slate-950 rounded-3xl border border-slate-800 text-center">
                            <div className="text-4xl font-black text-slate-200 mb-2">0</div>
                            <div className="text-xs font-black uppercase tracking-widest text-slate-500">Unanswered</div>
                        </div>
                    </div>

                    <div className="mt-12 max-w-3xl mx-auto p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12 transition-transform group-hover:rotate-45"><Sparkles className="w-40 h-40" /></div>
                        <h4 className="text-xl font-black uppercase mb-4 tracking-widest">Bonus Logic</h4>
                        <p className="font-bold leading-relaxed mb-6">If you attempt all 130 questions correctly and have time remaining, you can opt for 12 bonus questions (3 Each from Phy, Chem, Math/Bio, LR). Once opted, you CANNOT go back to original answers.</p>
                        <div className="text-xs font-black uppercase tracking-[0.2em] border-t border-white/20 pt-4">Strategic Speed-Run Training Included</div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl group">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase relative z-10 leading-none underline decoration-amber-400 decoration-8 underline-offset-[12px]">Bits Pillani Awaits.</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-10">
                            <Link href="/engineering-exams/bitsat" className="px-12 py-5 bg-white text-blue-700 font-black rounded-2xl text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest">
                                View BITSAT Pack <ArrowRight className="w-6 h-6 inline-block ml-2" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 text-center text-slate-500 font-bold uppercase tracking-[0.5em] text-[10px] animate-pulse">Schedule Loading... (Awaiting Data)</div>
                </div>
            </section>
        </div>
    );
}

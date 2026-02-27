"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, Clock,
    Trophy, ShieldCheck, Check, ChevronDown, ChevronRight,
    Lock, Languages, MonitorPlay, FileText, Award, Calendar, Landmark, Zap, BookMarked, Shield, Target, TrendingUp, Calculator
} from "lucide-react";
import Navbar from "@/components/Navbar";

const testBreakdown = [
    {
        id: "prelims-clerk",
        title: "IBPS Clerk 2026 Prelims Full Mocks",
        desc: "Strictly based on the latest IBPS Clerk pattern. 100 Questions, 60 Minutes with sectional timing. Covers Numerical Ability, Reasoning, and English.",
        testCount: 30,
        freeCount: 2,
        tests: [
            { name: "IBPS Clerk Prelims Mock 1 (Free)", q: 100, m: 100, time: "60 Mins", isFree: true },
            { name: "IBPS Clerk Prelims Mock 2 (Free)", q: 100, m: 100, time: "60 Mins", isFree: true },
            { name: "IBPS Clerk Prelims Mock 3", q: 100, m: 100, time: "60 Mins", isFree: false },
        ]
    },
    {
        id: "mains-clerk",
        title: "IBPS Clerk 2026 Mains Full Mocks",
        desc: "Comprehensive mocks for Mains with the latest marking scheme. Focus on Financial Awareness and Reasoning.",
        testCount: 15,
        freeCount: 1,
        tests: [
            { name: "IBPS Clerk Mains Mock 1", q: 190, m: 200, time: "160 Mins", isFree: true },
            { name: "IBPS Clerk Mains Mock 2", q: 190, m: 200, time: "160 Mins", isFree: false },
        ]
    },
    {
        id: "topic-tests",
        title: "Clerk-Level Topic Tests",
        desc: "Chapter-wise tests for Simplification, Puzzles, Syllogism, and Error Detection with clerk-level difficulty.",
        testCount: 60,
        freeCount: 5,
        tests: [
            { name: "Simplification Practice Set", q: 25, m: 25, time: "15 Mins", isFree: true },
            { name: "Syllogism: Basic to Advance", q: 15, m: 15, time: "10 Mins", isFree: true },
        ]
    }
];

const faqs = [
    { q: "What is the difference between IBPS PO and IBPS Clerk mocks?", a: "The Clerk mocks focus more on speed and high accuracy as clerk cutoffs are generally very high. The difficulty level is 'Moderate'." },
    { q: "Is there an interview stage in IBPS Clerk?", a: "No, IBPS Clerk selection is based solely on the marks obtained in the Mains examination." },
    { q: "Is the interface the same as the real exam?", a: "Yes, our platform uses the exact same interface as the TCS-iON engine used in real IBPS exams." },
    { q: "Will I get All India Ranks?", a: "Yes, after every full mock, you'll receive your percentile and All India Rank." }
];

export default function IBPSClerkPage() {
    const [activeAccordion, setActiveAccordion] = useState<string>("prelims-clerk");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-indigo-400 font-bold transition-all">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams/banking" className="hover:text-indigo-400 font-bold transition-all">Banking</Link>
                    <span>›</span>
                    <span className="text-white font-bold">IBPS Clerk 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* Hero Info Section */}
                        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Zap className="w-4 h-4 fill-indigo-400" /> High Accuracy Focus
                                </div>

                                <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                    IBPS Clerk 2026 <br /> Speed-Building Mocks
                                </h1>

                                <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed max-w-xl">
                                    Perfect the art of clearing high cutoffs with 100% exam-ready content designed for the clerical grade.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-bold">
                                    <div className="flex items-center gap-2 text-slate-200">
                                        <Star className="w-5 h-5 text-indigo-400 fill-indigo-400" />
                                        4.8/5 <span className="text-slate-500 font-medium text-xs">(18.5k Reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-200">
                                        <Users className="w-5 h-5 text-indigo-400" />
                                        95,000+ Enrolled
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-center">
                                    {[
                                        { label: "Total Tests", val: "250+", icon: Target, color: "text-indigo-400" },
                                        { label: "Free Mocks", val: "20+", icon: Award, color: "text-emerald-400" },
                                        { label: "Bilingual", val: "HIN/ENG", icon: Languages, color: "text-purple-400" },
                                        { label: "Role focus", val: "CLERK", icon: Landmark, color: "text-blue-400" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 transition-colors hover:border-indigo-500/30">
                                            <stat.icon className={`w-7 h-7 ${stat.color} mx-auto mb-2`} />
                                            <div className="font-black text-white text-xl">{stat.val}</div>
                                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Link href="/dashboard/test-series/ibps-clerk" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg shadow-lg active:scale-95">
                                        <Play className="w-5 h-5 fill-white" /> Start Free Test
                                    </Link>
                                    <Link href="/government-exams/banking/ibps-clerk/schedule" className="px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                                        <Calendar className="w-5 h-5 text-slate-500" /> Exam Roadmap
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Test Breakdown */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-8 border-b border-slate-800 bg-slate-950/50">
                                <h2 className="text-2xl font-black text-white tracking-tight">Mock Test Inventory</h2>
                                <p className="text-slate-400 mt-1 font-medium">Specialized speed-building mocks for IBPS Clerk 2026.</p>
                            </div>

                            <div className="divide-y divide-slate-800/50">
                                {testBreakdown.map((category) => (
                                    <div key={category.id}>
                                        <button
                                            onClick={() => setActiveAccordion(activeAccordion === category.id ? "" : category.id)}
                                            className={`w-full text-left p-6 md:p-8 flex items-center justify-between transition-all ${activeAccordion === category.id ? 'bg-indigo-500/5' : 'hover:bg-slate-800/50'}`}
                                        >
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
                                                <div className="flex items-center gap-4 mt-3">
                                                    <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider bg-slate-950 px-2 py-1 rounded">
                                                        <BookOpen className="w-3.5 h-3.5" /> {category.testCount} Tests
                                                    </span>
                                                    {category.freeCount > 0 && (
                                                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded uppercase tracking-wider">
                                                            {category.freeCount} Free Trials
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`w-10 h-10 rounded-xl border border-slate-700 flex items-center justify-center transition-transform duration-300 ${activeAccordion === category.id ? 'rotate-180 bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-950 text-slate-500'}`}>
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </button>

                                        {activeAccordion === category.id && (
                                            <div className="p-6 md:p-8 bg-slate-950/20 border-t border-slate-800/50 animate-in fade-in duration-300">
                                                <p className="text-sm md:text-base text-slate-400 mb-8 font-medium leading-relaxed bg-slate-900/50 p-6 rounded-2xl border-l-4 border-indigo-600">
                                                    {category.desc}
                                                </p>

                                                <div className="space-y-4">
                                                    {category.tests.map((test, idx) => (
                                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/30 transition-all gap-6 group">
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-3">
                                                                    {test.isFree ? (
                                                                        <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded">FREE</span>
                                                                    ) : (
                                                                        <Lock className="w-3.5 h-3.5 text-slate-600" />
                                                                    )}
                                                                    <h4 className="font-bold text-white text-lg group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{test.name}</h4>
                                                                </div>
                                                                <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                                                    <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> {test.q} Qs</span>
                                                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> {test.m} Marks</span>
                                                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {test.time}</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {test.isFree ? (
                                                                    <Link href="/dashboard/test-series/ibps-clerk" className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all flex items-center justify-center text-sm shadow-md active:scale-95 uppercase tracking-widest">
                                                                        Launch <ChevronRight className="w-4 h-4 ml-1" />
                                                                    </Link>
                                                                ) : (
                                                                    <button className="w-full sm:w-auto px-6 py-3 bg-slate-950 border border-slate-800 text-slate-500 font-bold rounded-xl flex items-center justify-center text-sm uppercase tracking-widest cursor-default">
                                                                        Locked
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight">Engineered for Clerk Success</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { t: "High-Frequency Drill", d: "Bulk questions on Simplification & Approximation to build calculation speed.", i: Target, c: "text-indigo-400", bg: "bg-indigo-500/10" },
                                    { t: "Accuracy Guard AI", d: "Clerk exams demand 95%+ accuracy. Our AI module flags risky speed-based errors.", i: Zap, c: "text-amber-500", bg: "bg-amber-500/10" },
                                    { t: "State Rank Radar", d: "Compare scores against aspirants from your specific State/UT.", i: BookMarked, c: "text-purple-400", bg: "bg-purple-500/10" }
                                ].map((feat, i) => (
                                    <div key={i} className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all group">
                                        <div className={`w-14 h-14 rounded-xl ${feat.bg} flex items-center justify-center mb-5 border border-white/5 ${feat.c} group-hover:scale-110 transition-transform`}>
                                            <feat.i className="w-7 h-7" />
                                        </div>
                                        <h4 className="font-bold text-white mb-2 text-lg uppercase tracking-tight">{feat.t}</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed font-medium">{feat.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-indigo-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000"></div>

                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                    Trusted Bundle
                                </div>

                                <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight leading-tight uppercase">Banking Master Pass</h3>
                                <p className="text-indigo-100 mb-8 font-medium leading-relaxed opacity-90">One complete solution to unlock every Banking exam including IBPS Clerk 2026.</p>

                                <div className="space-y-4 mb-8">
                                    <div className="p-5 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm group/plan hover:bg-white/20 transition-all cursor-pointer">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">12 Months Pass</span>
                                            <span className="px-2 py-0.5 bg-amber-500 text-black text-[9px] font-black rounded uppercase">BEST VALUE</span>
                                        </div>
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-3xl font-black">₹799</span>
                                            <span className="text-sm font-bold opacity-50 line-through">₹1,499</span>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-slate-950/20 rounded-2xl border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">6 Months Pass</span>
                                        </div>
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-2xl font-black">₹499</span>
                                            <span className="text-sm font-bold opacity-50 line-through">₹999</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/checkout?plan=bank-pass" className="w-full py-4 bg-white text-indigo-600 font-black rounded-xl flex items-center justify-center gap-2 text-lg shadow-lg active:scale-95 transition-all text-center">
                                    Get Elite Access <ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-lg relative overflow-hidden group">
                                <Users className="w-10 h-10 text-indigo-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <div className="text-3xl font-black text-white tracking-tight">95,000+</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Aspirants Enrolled</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mt-20">
                    <h2 className="text-3xl font-black text-white mb-10 tracking-tight text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg transition-all hover:border-slate-700">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                                >
                                    <span className="font-bold text-white tracking-tight leading-snug">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-indigo-400' : ''}`} />
                                </button>
                                {activeFaq === idx && (
                                    <div className="px-6 pb-6 text-slate-400 font-medium leading-relaxed border-t border-slate-800/50 pt-4 animate-in slide-in-from-top-2">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
}

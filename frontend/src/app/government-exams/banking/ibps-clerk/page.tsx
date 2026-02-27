"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, Clock,
    Trophy, ShieldCheck, Check, ChevronDown, ChevronRight,
    Lock, Languages, MonitorPlay, FileText, Award, Calendar, Landmark, Zap, BookMarked
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
            { name: "IBPS Clerk Prelims Mock 4", q: 100, m: 100, time: "60 Mins", isFree: false },
            { name: "IBPS Clerk Prelims Mock 5", q: 100, m: 100, time: "60 Mins", isFree: false },
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
            { name: "Static Banking Awareness", q: 20, m: 20, time: "10 Mins", isFree: false },
        ]
    },
    {
        id: "pyq-clerk",
        title: "IBPS Clerk Previous Year Papers",
        desc: "Last 5 years memory-based official papers for the best practice under real exam pressure.",
        testCount: 10,
        freeCount: 1,
        tests: [
            { name: "IBPS Clerk Prelims 2025 Paper", q: 100, m: 100, time: "60 Mins", isFree: true },
            { name: "IBPS Clerk Prelims 2024 Paper", q: 100, m: 100, time: "60 Mins", isFree: false },
        ]
    }
];

const faqs = [
    { q: "What is the difference between IBPS PO and IBPS Clerk mocks?", a: "The Clerk mocks focus more on speed and high accuracy as clerk cutoffs are generally very high. The difficulty level is 'Moderate' compared to PO's 'Hard' level." },
    { q: "Is there an interview stage in IBPS Clerk?", a: "No, IBPS Clerk selection is based solely on the marks obtained in the Mains examination. There is no interview stage." },
    { q: "Is the interface the same as the real exam?", a: "Yes, our platform uses the exact same interface as the TCS-iON engine used in real IBPS exams." },
    { q: "Will I get All India Ranks?", a: "Yes, after every full mock, you'll receive your percentile and All India Rank among thousands of clerk aspirants." }
];

export default function IBPSClerkPage() {
    const [activeAccordion, setActiveAccordion] = useState<string>("prelims-clerk");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? "" : id);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-indigo-400 font-bold transition-colors">Home</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams" className="hover:text-indigo-400 font-bold transition-colors">Government Exams</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking" className="hover:text-indigo-400 font-bold transition-colors">Banking</Link>
                    <span>&rsaquo;</span>
                    <span className="text-white font-bold">IBPS Clerk Test Series</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-8 md:space-y-10">

                        {/* 1️⃣ Hero Info Section */}
                        <div className="bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] md:text-xs font-black mb-5 uppercase tracking-widest">
                                    <Zap className="w-4 h-4 fill-indigo-400" /> High Accuracy Focus
                                </div>

                                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter leading-tight lg:leading-[0.9] uppercase">
                                    IBPS Clerk Prelims & Mains 2026
                                </h1>

                                <p className="text-base md:text-lg text-slate-400 mb-6 md:mb-8 font-bold leading-relaxed max-w-2xl italic">
                                    Target high scores in IBPS Clerk with our specialized speed-building mock tests. Perfect the art of clearing high cutoffs with 100% exam-ready content.
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 mb-8 text-sm font-black uppercase tracking-tight">
                                    <div className="flex items-center gap-2 text-slate-200">
                                        <Star className="w-5 h-5 text-indigo-400 fill-indigo-400" />
                                        4.8 <span className="text-slate-500 text-xs">(18.5k Reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-200">
                                        <Users className="w-5 h-5 text-indigo-400" />
                                        95,000+ Enrolled
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-indigo-500/30 transition-colors group/card">
                                        <FileText className="w-6 h-6 md:w-8 md:h-8 text-indigo-400 mb-2 group-hover/card:scale-110 transition-transform" />
                                        <span className="font-black text-xl md:text-2xl text-white tracking-widest leading-none">250+</span>
                                        <span className="text-[9px] md:text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1.5">Total Tests</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-emerald-500/30 transition-colors group/card">
                                        <Award className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 mb-2 group-hover/card:scale-110 transition-transform" />
                                        <span className="font-black text-xl md:text-2xl text-white tracking-widest leading-none">20+</span>
                                        <span className="text-[9px] md:text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1.5">Free Mocks</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-purple-500/30 transition-colors group/card">
                                        <Languages className="w-6 h-6 md:w-8 md:h-8 text-purple-400 mb-2 group-hover/card:scale-110 transition-transform" />
                                        <span className="font-black text-base md:text-lg text-white tracking-[0.05em] leading-none">BILINGUAL</span>
                                        <span className="text-[9px] md:text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1.5">Support</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-blue-500/30 transition-colors group/card">
                                        <Landmark className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mb-2 group-hover/card:scale-110 transition-transform" />
                                        <span className="font-black text-xl md:text-2xl text-white tracking-widest leading-none">MAHA</span>
                                        <span className="text-[9px] md:text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1.5">Coverage</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Link href="/dashboard/test-series/ibps-clerk" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-[0_10px_30px_rgba(99,102,241,0.2)] active:scale-95 uppercase tracking-widest leading-none">
                                        <Play className="w-5 h-5 fill-white" /> Start Demo
                                    </Link>
                                    <Link href="/government-exams/banking/ibps-clerk/schedule" className="w-full sm:w-auto px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-black rounded-xl transition-all flex items-center justify-center gap-2 text-lg active:scale-95 shadow-sm uppercase tracking-widest leading-none">
                                        <Calendar className="w-5 h-5 text-slate-400" /> Roadmap
                                    </Link>
                                </div>
                                <div className="text-[11px] font-black text-slate-500 flex items-center justify-start gap-2 mt-6 uppercase tracking-widest opacity-80">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    No-Interview Selection Process
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Detailed Test Breakdown */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden" id="test-syllabus">
                            <div className="p-6 md:p-10 border-b border-slate-800 bg-slate-900/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <h2 className="text-2xl md:text-4xl font-black text-white relative z-10 leading-none uppercase tracking-tighter">Mock Test Inventory</h2>
                                <p className="text-slate-400 mt-2 font-black relative z-10 text-base md:text-lg">Specialized speed-building mocks for IBPS Clerk 2026.</p>
                            </div>

                            <div className="divide-y divide-slate-800/50">
                                {testBreakdown.map((category) => (
                                    <div key={category.id} className="bg-slate-900">
                                        <button
                                            onClick={() => toggleAccordion(category.id)}
                                            className="w-full text-left p-6 md:p-10 flex items-start md:items-center justify-between hover:bg-slate-800/50 transition-all group"
                                        >
                                            <div className="pr-4">
                                                <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-indigo-400 transition-all uppercase tracking-tight">
                                                    {category.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-3 mt-4">
                                                    <span className="text-[10px] font-black text-slate-500 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-2 uppercase tracking-widest">
                                                        <BookOpen className="w-4 h-4 text-indigo-400" /> {category.testCount} Tests Total
                                                    </span>
                                                    {category.freeCount > 0 && (
                                                        <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2 uppercase tracking-widest shadow-sm shadow-emerald-500/5">
                                                            <Star className="w-4 h-4 fill-emerald-400" /> {category.freeCount} Free Trials
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl border border-slate-800 flex items-center justify-center transition-all duration-500 ${activeAccordion === category.id ? 'rotate-180 bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20' : 'bg-slate-950/50 text-slate-500 hover:text-white'}`}>
                                                <ChevronDown className="w-6 h-6" />
                                            </div>
                                        </button>

                                        {/* Accordion Content */}
                                        {activeAccordion === category.id && (
                                            <div className="px-5 md:px-10 pb-8 md:pb-10 pt-4 bg-slate-950/30 border-t border-slate-800/50 shadow-inner">
                                                <p className="text-sm md:text-base text-slate-400 mb-6 md:mb-8 font-bold bg-slate-900 p-5 rounded-2xl border border-slate-800 leading-relaxed italic border-l-4 border-l-indigo-500">{category.desc}</p>

                                                <div className="grid grid-cols-1 gap-4">
                                                    {category.tests.map((test, idx) => (
                                                        <div key={idx} className="flex flex-col lg:flex-row lg:items-center justify-between p-5 md:p-8 bg-slate-900 border border-slate-800 rounded-2xl md:rounded-[2rem] hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.1)] transition-all gap-6 group">
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-4">
                                                                    {test.isFree ? (
                                                                        <span className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-md leading-none">Free Trial</span>
                                                                    ) : (
                                                                        <span className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-md flex items-center gap-1.5 leading-none shadow-inner">
                                                                            <Lock className="w-3.5 h-3.5" /> Locked
                                                                        </span>
                                                                    )}
                                                                    <h4 className="font-black text-white text-lg md:text-xl group-hover:text-indigo-200 transition-all uppercase tracking-tighter leading-tight italic underline underline-offset-4 decoration-slate-800 group-hover:decoration-indigo-500/50">{test.name}</h4>
                                                                </div>
                                                                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[10px] md:text-xs font-black text-slate-400 bg-slate-950/80 w-fit px-4 md:px-5 py-2 md:py-2.5 rounded-xl border border-slate-800 shadow-sm">
                                                                    <span className="flex items-center gap-2 uppercase tracking-wide"><FileText className="w-4 h-4 text-indigo-400" /> {test.q} Qs</span>
                                                                    <div className="hidden xs:block w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-slate-700"></div>
                                                                    <span className="flex items-center gap-2 uppercase tracking-wide"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {test.m} Marks</span>
                                                                    <div className="hidden xs:block w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-slate-700"></div>
                                                                    <span className="flex items-center gap-2 uppercase tracking-wide"><Clock className="w-4 h-4 text-purple-400" /> {test.time}</span>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0 w-full lg:w-auto">
                                                                {test.isFree ? (
                                                                    <Link href={`/dashboard/test-series/ibps-clerk`} className="w-full lg:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all flex items-center justify-center text-sm shadow-xl shadow-indigo-600/20 active:scale-95 uppercase tracking-widest leading-none">
                                                                        Start Trial <ChevronRight className="w-4 h-4 ml-1.5" />
                                                                    </Link>
                                                                ) : (
                                                                    <a href="#pricing" className="w-full lg:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-slate-950 text-slate-500 font-black rounded-xl flex items-center justify-center text-xs md:text-sm hover:text-slate-300 transition-all border border-slate-800 uppercase tracking-widest active:scale-95 leading-none">
                                                                        <Lock className="w-4 h-4 mr-2" /> Purchase Pack
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {category.tests.length < category.testCount && (
                                                    <div className="mt-10 text-center pb-2">
                                                        <a href="#pricing" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-800 border-2 border-slate-700 text-white font-black text-[10px] md:text-xs hover:bg-indigo-600 hover:border-indigo-500 transition-all group shadow-2xl uppercase tracking-[0.2em]">
                                                            Unlock all {category.testCount} mocks <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3️⃣ Features Grid */}
                        <div className="bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 md:mb-10 relative z-10 uppercase tracking-tighter">Engineered for Clerk Success</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
                                <div className="p-6 md:p-8 bg-slate-950/50 rounded-2xl md:rounded-[2rem] border border-slate-800 hover:border-indigo-500/50 transition-all group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 md:mb-8 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all text-indigo-400">
                                        <MonitorPlay className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h4 className="font-black text-white mb-3 text-lg md:text-xl uppercase tracking-tighter leading-none">High-Frequency Drill</h4>
                                    <p className="text-sm text-slate-500 font-bold leading-relaxed italic">Bulk questions on Simplification & Approximation to build the extreme calculation speed required for clerical grade.</p>
                                </div>
                                <div className="p-6 md:p-8 bg-slate-950/50 rounded-2xl md:rounded-[2rem] border border-slate-800 hover:border-amber-500/50 transition-all group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 md:mb-8 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-all text-amber-400">
                                        <Zap className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h4 className="font-black text-white mb-3 text-lg md:text-xl uppercase tracking-tighter leading-none">Accuracy Guard AI</h4>
                                    <p className="text-sm text-slate-500 font-bold leading-relaxed italic">Clerk exams demand 95%+ accuracy. Our AI module flags risky speed-based errors during your mock review.</p>
                                </div>
                                <div className="p-6 md:p-8 bg-slate-950/50 rounded-2xl md:rounded-[2rem] border border-slate-800 hover:border-purple-500/50 transition-all group">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 md:mb-8 border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all text-purple-400">
                                        <BookMarked className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <h4 className="font-black text-white mb-3 text-lg md:text-xl uppercase tracking-tighter leading-none">State Rank Radar</h4>
                                    <p className="text-sm text-slate-500 font-bold leading-relaxed italic">Compare scores against aspirants from your specific State/UT, precisely mimicking the IBPS state-wise selection model.</p>
                                </div>
                            </div>
                        </div>

                        {/* 4️⃣ FAQ */}
                        <div className="bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 md:mb-10 relative z-10 uppercase tracking-tighter">Aspirant FAQ</h2>
                            <div className="space-y-4 md:space-y-5 relative z-10">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="border border-slate-800 rounded-2xl md:rounded-3xl overflow-hidden bg-slate-950/50 hover:border-indigo-500/30 transition-all shadow-inner">
                                        <button
                                            onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                            className="w-full p-6 md:p-8 text-left flex items-start sm:items-center justify-between gap-4 group"
                                        >
                                            <span className="text-sm md:text-base font-black text-white uppercase tracking-tight leading-snug group-hover:text-indigo-200 transition-colors italic">{faq.q}</span>
                                            <div className={`p-2 rounded-xl border border-slate-800 shrink-0 transition-all duration-500 ${activeFaq === idx ? 'bg-indigo-600 border-indigo-500 rotate-180 shadow-lg text-white' : 'bg-slate-900 text-slate-500'}`}>
                                                <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>
                                        </button>
                                        {activeFaq === idx && (
                                            <div className="px-6 md:px-8 pb-6 md:pb-8 text-sm md:text-base text-slate-400 font-bold leading-relaxed border-t border-slate-800/50 pt-6 bg-slate-900/50 shadow-inner">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN - STICKY PRICING CARD */}
                    <div className="lg:col-span-4" id="pricing">
                        <div className="sticky top-24 bg-slate-900 border-[3px] border-indigo-600 rounded-[2.5rem] p-6 md:p-10 shadow-[0_0_60px_rgba(99,102,241,0.25)] relative overflow-hidden transition-all hover:scale-[1.01]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] px-4 md:px-5 py-2 rounded-full whitespace-nowrap shadow-2xl border-2 border-white/10">
                                Most Popular Bundle
                            </div>

                            <h3 className="text-3xl font-black text-white mb-3 md:mb-4 mt-4 relative z-10 leading-none tracking-tighter uppercase">Banking Master Pass</h3>
                            <p className="text-xs md:text-sm text-slate-400 font-bold mb-6 md:mb-10 relative z-10 leading-relaxed uppercase tracking-tight opacity-80">One complete solution to unlock every Banking exam including IBPS Clerk 2026.</p>

                            <div className="space-y-4 md:space-y-5 mb-10 relative z-10 font-black">
                                <div className="flex justify-between items-center p-5 md:p-6 rounded-2xl md:rounded-[2rem] border-2 border-indigo-500 bg-indigo-600/10 cursor-pointer relative overflow-hidden transition-all hover:bg-indigo-600/20 group shadow-xl">
                                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[8px] md:text-[9px] font-black px-4 py-1.5 rounded-bl-[1.2rem] md:rounded-bl-2xl uppercase tracking-widest leading-none">Best Value</div>
                                    <div>
                                        <div className="font-black text-white text-base md:text-xl uppercase tracking-tighter">1 Year Pass</div>
                                        <div className="text-[10px] md:text-xs font-bold text-slate-500 line-through mt-1 tracking-widest leading-none italic opacity-60">₹1499</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl md:text-4xl font-black text-indigo-400 tracking-widest group-hover:scale-110 transition-transform duration-500">₹799</div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-5 md:p-6 rounded-2xl md:rounded-[2rem] border border-slate-800 hover:border-indigo-500/50 bg-slate-950/50 cursor-pointer transition-all group shadow-md shadow-black/50">
                                    <div>
                                        <div className="font-extrabold text-slate-400 group-hover:text-white transition-all uppercase tracking-tighter text-base md:text-lg">6 Months</div>
                                        <div className="text-[10px] md:text-xs font-bold text-slate-600 line-through mt-1 tracking-widest italic opacity-40">₹999</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xl md:text-3xl font-black text-slate-400 group-hover:text-white transition-all tracking-widest">₹499</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 md:space-y-5 mb-10 p-6 md:p-8 bg-slate-950/80 rounded-2xl md:rounded-[2rem] border border-slate-800 relative z-10 font-black uppercase tracking-tight text-[10px] md:text-[11px] shadow-inner text-white/90">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 shrink-0 font-bold" /> Complete Mock Series for 12+ Exams
                                </div>
                                <div className="flex items-start gap-3 md:gap-4">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 shrink-0 font-bold" /> Personalized Speed Accuracy Radar
                                </div>
                                <div className="flex items-start gap-3 md:gap-4">
                                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 shrink-0 font-bold" /> Latest memory-based PYQs (2025)
                                </div>
                            </div>

                            <Link href="/checkout?plan=bank-pass" className="block w-full py-5 md:py-6 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl md:rounded-[1.5rem] text-center transition-all text-xl md:text-2xl shadow-2xl shadow-indigo-600/30 active:scale-95 relative z-10 uppercase tracking-widest border-b-4 border-indigo-800 leading-none">
                                Unlock Academy
                            </Link>

                        </div>

                        {/* Trust Badges */}
                        <div className="mt-8 p-10 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-xl text-center flex flex-col items-center justify-center">
                            <Star className="w-12 h-12 text-amber-500 fill-amber-500 mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]" />
                            <div className="text-4xl font-black text-white tracking-tighter mb-2 italic">4.8/5</div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest opacity-80 border-t border-slate-800 pt-4 w-full">Aspirant Satisfaction Rank</div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

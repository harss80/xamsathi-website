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
        id: "prelims-mocks",
        title: "IBPS PO 2026 Prelims Full Mocks",
        desc: "Strictly based on the latest IBPS interface and pattern. 100 Questions, 60 Minutes with sectional timing.",
        testCount: 25,
        freeCount: 1,
        tests: [
            { name: "IBPS PO Prelims Free Mock 1", q: 100, m: 100, time: "60 Mins", isFree: true },
            { name: "IBPS PO Prelims Mock 2", q: 100, m: 100, time: "60 Mins", isFree: false },
            { name: "IBPS PO Prelims Mock 3", q: 100, m: 100, time: "60 Mins", isFree: false },
            { name: "IBPS PO Prelims Mock 4", q: 100, m: 100, time: "60 Mins", isFree: false },
            { name: "IBPS PO Prelims Mock 5", q: 100, m: 100, time: "60 Mins", isFree: false },
        ]
    },
    {
        id: "mains-mocks",
        title: "IBPS PO 2026 Mains Full Mocks",
        desc: "Advanced level mocks for Mains, including Descriptive English test simulation.",
        testCount: 10,
        freeCount: 1,
        tests: [
            { name: "IBPS PO Mains Mock 1", q: 155, m: 200, time: "180 Mins", isFree: true },
            { name: "IBPS PO Mains Mock 2", q: 155, m: 200, time: "180 Mins", isFree: false },
        ]
    },
    {
        id: "sectional-tests",
        title: "Banking Sectional - Speed Boosters",
        desc: "High-intensity tests for Quantitative Aptitude, Logical Reasoning, and English Language.",
        testCount: 45,
        freeCount: 3,
        tests: [
            { name: "Quant: Profit & Loss Special", q: 20, m: 20, time: "15 Mins", isFree: true },
            { name: "Reasoning: Complex Puzzles", q: 20, m: 20, time: "15 Mins", isFree: true },
            { name: "English: Reading Comprehension", q: 20, m: 20, time: "15 Mins", isFree: false },
        ]
    },
    {
        id: "pyq-tests",
        title: "Previous Year Papers (2021-2025)",
        desc: "Official papers provided as timed mocks with detailed solutions and sectional analysis.",
        testCount: 12,
        freeCount: 1,
        tests: [
            { name: "IBPS PO Prelims 2025 (Memory Based)", q: 100, m: 100, time: "60 Mins", isFree: true },
            { name: "IBPS PO Prelims 2024 (Official)", q: 100, m: 100, time: "60 Mins", isFree: false },
        ]
    }
];

const faqs = [
    { q: "Is the interface similar to the real IBPS exam?", a: "Yes, our test engine is a 100% replica of the IBPS/TCS interface, including sectional timing and the calculator restricted logic." },
    { q: "Are the mocks bilingual?", a: "Absolutely. All banking mocks are available in both English and Hindi, including detailed solutions." },
    { q: "Do you provide analysis for calculation speed?", a: "Yes, our smart analytics track time spent per question and compare it with the topper's speed to help you identify areas for improvement." },
    { q: "What is included in the Pro Pass?", a: "The Pro Pass unlocks all Prelims and Mains mocks, 1000+ Topic Tests, and Current Affairs Monthly Capsules." }
];

export default function IBPSPOPage() {
    const [activeAccordion, setActiveAccordion] = useState<string>("prelims-mocks");
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
                    <Link href="/" className="hover:text-indigo-400 font-bold transition-all">Home</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams" className="hover:text-indigo-400 font-bold transition-all">Government Exams</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking" className="hover:text-indigo-400 font-bold transition-all">Banking</Link>
                    <span>&rsaquo;</span>
                    <span className="text-white font-black truncate uppercase tracking-tight">IBPS PO 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-8 md:space-y-12">

                        {/* 1️⃣ Hero Info Section */}
                        <div className="bg-slate-900 rounded-3xl p-6 md:p-10 border border-slate-800 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] md:text-xs font-black mb-6 uppercase tracking-[0.2em]">
                                    <Zap className="w-4 h-4 fill-indigo-400" /> High Performance Series
                                </div>

                                <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-tight lg:leading-[0.85] uppercase">
                                    IBPS PO Prelims & Mains 2026
                                </h1>

                                <p className="text-base md:text-xl text-slate-400 mb-8 font-bold leading-relaxed max-w-2xl italic">
                                    India's most sophisticated banking test platform. Master speed and accuracy with mocks designed by Ex-IBPS officers and elite banking mentors.
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-5 md:gap-8 mb-10 text-sm font-black uppercase tracking-widest">
                                    <div className="flex items-center gap-2 text-slate-200 group/stat">
                                        <Star className="w-5 h-5 text-indigo-500 fill-indigo-500 group-hover:animate-pulse" />
                                        4.9 <span className="text-slate-500 text-xs font-bold">(22k+ Students)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-200 group/stat">
                                        <Users className="w-5 h-5 text-indigo-500 group-hover:animate-pulse" />
                                        85,000+ Enrolled
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
                                    {[
                                        { label: "Total Tests", val: "200+", icon: FileText, color: "text-indigo-400" },
                                        { label: "Free Mocks", val: "15+", icon: Award, color: "text-emerald-400" },
                                        { label: "Bilingual", val: "HIN/ENG", icon: Languages, color: "text-purple-400" },
                                        { label: "Role focus", val: "OFFICER", icon: Landmark, color: "text-blue-400" }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex flex-col items-center justify-center p-4 md:p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all group/item shadow-inner">
                                            <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color} mb-2.5 group-hover/item:scale-110 transition-transform`} />
                                            <span className="font-black text-xl md:text-2xl text-white tracking-widest leading-none">{stat.val}</span>
                                            <span className="text-[9px] md:text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-2 whitespace-nowrap">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Link href="/dashboard/test-series/ibps-po" className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl md:rounded-2xl transition-all flex items-center justify-center gap-3 text-lg md:text-xl shadow-[0_10px_40px_rgba(99,102,241,0.25)] active:scale-95 uppercase tracking-widest border-b-4 border-indigo-800 leading-none">
                                        <Play className="w-5 h-5 fill-white" /> Start Demo
                                    </Link>
                                    <Link href="/government-exams/banking/ibps-po/schedule" className="w-full sm:w-auto px-10 py-5 bg-slate-950 border-2 border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-black rounded-xl md:rounded-2xl transition-all flex items-center justify-center gap-3 text-lg active:scale-95 shadow-lg uppercase tracking-widest leading-none">
                                        <Calendar className="w-5 h-5 text-slate-400" /> Exam Guide
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Detailed Test Breakdown */}
                        <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden" id="test-syllabus">
                            <div className="p-6 md:p-10 border-b border-slate-800 bg-slate-900/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <h2 className="text-2xl md:text-4xl font-black text-white relative z-10 leading-none uppercase tracking-tighter">Mock Test Inventory</h2>
                                <p className="text-slate-400 mt-2 font-black relative z-10 text-base md:text-lg italic underline decoration-indigo-500/20 underline-offset-4">Comprehensive officer-level test architecture for 2026.</p>
                            </div>

                            <div className="divide-y divide-slate-800/40">
                                {testBreakdown.map((category) => (
                                    <div key={category.id} className="bg-slate-900 transition-colors">
                                        <button
                                            onClick={() => toggleAccordion(category.id)}
                                            className="w-full text-left p-6 md:p-10 flex items-start md:items-center justify-between hover:bg-slate-800/50 transition-all group"
                                        >
                                            <div className="pr-4">
                                                <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-indigo-400 transition-all uppercase tracking-tight">
                                                    {category.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-3 mt-4">
                                                    <span className="text-[10px] font-black text-slate-500 bg-slate-950 border border-slate-800 px-3.5 py-1.5 rounded-lg flex items-center gap-2 uppercase tracking-widest shadow-sm">
                                                        <BookOpen className="w-4 h-4 text-indigo-500" /> {category.testCount} Tests Total
                                                    </span>
                                                    {category.freeCount > 0 && (
                                                        <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-lg flex items-center gap-2 uppercase tracking-widest shadow-lg shadow-emerald-500/5">
                                                            <Trophy className="w-4 h-4" /> {category.freeCount} Free Trials
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-slate-800 flex items-center justify-center transition-all duration-500 ${activeAccordion === category.id ? 'rotate-180 bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-600/30' : 'bg-slate-950/50 text-slate-500'}`}>
                                                <ChevronDown className="w-6 h-6" />
                                            </div>
                                        </button>

                                        {/* Accordion Content */}
                                        {activeAccordion === category.id && (
                                            <div className="px-5 md:px-10 pb-8 md:pb-12 pt-4 bg-slate-950/30 border-t border-slate-800/50 shadow-inner">
                                                <p className="text-sm md:text-base text-slate-500 mb-6 md:mb-10 font-bold bg-slate-900/50 p-5 md:p-8 rounded-2xl border-l-[6px] border border-slate-800 border-l-indigo-600 leading-relaxed italic">{category.desc}</p>

                                                <div className="grid grid-cols-1 gap-4 md:gap-5">
                                                    {category.tests.map((test, idx) => (
                                                        <div key={idx} className="flex flex-col lg:flex-row lg:items-center justify-between p-5 md:p-8 bg-slate-900 border border-slate-800 rounded-2xl md:rounded-[2.5rem] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all gap-6 group">
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-5">
                                                                    {test.isFree ? (
                                                                        <span className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-md leading-none">Free Access</span>
                                                                    ) : (
                                                                        <span className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] rounded-md flex items-center gap-1.5 leading-none shadow-inner">
                                                                            <Lock className="w-3.5 h-3.5" /> Officer Pass
                                                                        </span>
                                                                    )}
                                                                    <h4 className="font-black text-white text-lg md:text-xl group-hover:text-indigo-200 transition-all uppercase tracking-tighter leading-tight italic underline underline-offset-8 decoration-slate-800 group-hover:decoration-indigo-500/50">{test.name}</h4>
                                                                </div>
                                                                <div className="flex flex-wrap items-center gap-3 md:gap-5 text-[10px] md:text-xs font-black text-slate-400 bg-slate-950/80 w-fit px-4 md:px-6 py-2.5 md:py-3 rounded-2xl border border-slate-800 shadow-sm uppercase tracking-wider">
                                                                    <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-indigo-400" /> {test.q} Questions</span>
                                                                    <div className="hidden xs:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                                                                    <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {test.m} Marks</span>
                                                                    <div className="hidden xs:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                                                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-purple-400" /> {test.time}</span>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0 w-full lg:w-auto">
                                                                {test.isFree ? (
                                                                    <Link href={`/dashboard/test-series/ibps-po`} className="w-full lg:w-auto px-8 md:px-10 py-4 md:py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl md:rounded-2xl transition-all flex items-center justify-center text-sm md:text-base shadow-2xl shadow-indigo-600/30 active:scale-95 uppercase tracking-widest leading-none">
                                                                        Start Mock <ChevronRight className="w-5 h-5 ml-1.5" />
                                                                    </Link>
                                                                ) : (
                                                                    <a href="#pricing" className="w-full lg:w-auto px-8 md:px-10 py-4 md:py-5 bg-slate-950 text-slate-500 font-black rounded-xl md:rounded-2xl flex items-center justify-center text-xs md:text-sm hover:text-slate-300 transition-all border-2 border-slate-800 uppercase tracking-widest active:scale-95 leading-none">
                                                                        <Lock className="w-4 h-4 mr-2.5" /> Purchase Pass
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {category.tests.length < category.testCount && (
                                                    <div className="mt-12 text-center pb-2">
                                                        <a href="#pricing" className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-slate-800 border-2 border-slate-700 text-white font-black text-xs md:text-sm hover:bg-indigo-600 hover:border-indigo-500 transition-all group shadow-2xl uppercase tracking-[0.25em]">
                                                            Unlock all {category.testCount} Premium Mocks <ChevronRight className="w-5 h-5 ml-2.5 group-hover:translate-x-2 transition-transform" />
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
                        <div className="bg-slate-900 rounded-[2.5rem] p-6 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h2 className="text-2xl md:text-4xl font-black text-white mb-8 md:mb-12 relative z-10 uppercase tracking-tighter">Elite Preparation Tools</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 relative z-10 font-bold">
                                {[
                                    { t: "Officer Analytics", d: "Sophisticated AI that compares your section-wise attempt strategy with successful PO aspirants.", i: Trophy, c: "text-indigo-400", bg: "bg-indigo-500/10", b: "border-indigo-500/20", h: "hover:border-indigo-500/50" },
                                    { t: "Real Interface", d: "A 100% replica of the TCS-iON engine used in official IBPS exams, including sectional timing filters.", i: MonitorPlay, c: "text-amber-400", bg: "bg-amber-500/10", b: "border-amber-500/20", h: "hover:border-amber-500/50" },
                                    { t: "Monthly Digest", d: "Get premium Current Affairs Capsules and Banking Awareness PDFs focused on IBPS PO mains.", i: BookMarked, c: "text-purple-400", bg: "bg-purple-500/10", b: "border-purple-500/20", h: "hover:border-purple-500/50" }
                                ].map((feat, i) => (
                                    <div key={i} className={`p-8 bg-slate-950/50 rounded-[2rem] border ${feat.b} ${feat.h} transition-all group relative overflow-hidden`}>
                                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${feat.bg} flex items-center justify-center mb-8 border ${feat.b} group-hover:scale-110 transition-transform ${feat.c}`}>
                                            <feat.i className="w-8 h-8 md:w-10 md:h-10" />
                                        </div>
                                        <h4 className="font-black text-white mb-4 text-xl uppercase tracking-tighter leading-none">{feat.t}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed italic border-l-2 border-slate-800 pl-4">{feat.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN - STICKY PRICING CARD */}
                    <div className="lg:col-span-4" id="pricing">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-slate-900 border-[3px] border-indigo-600 rounded-[3rem] p-8 md:p-10 shadow-[0_0_60px_rgba(99,102,241,0.2)] relative overflow-hidden transition-all hover:scale-[1.01]">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/30 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] px-5 py-2.5 rounded-full whitespace-nowrap shadow-2xl border-2 border-white/10">
                                    Top Selection Rate
                                </div>

                                <h3 className="text-3xl font-black text-white mb-4 mt-6 relative z-10 leading-none tracking-tighter uppercase">Elite Banking Pass</h3>
                                <p className="text-xs md:text-sm text-slate-400 font-bold mb-8 md:mb-12 relative z-10 leading-relaxed uppercase tracking-tight opacity-80">Full administrative access to IBPS PO, Clerk, SBI & RRB Officer Series.</p>

                                <div className="space-y-4 md:space-y-5 mb-10 relative z-10 font-black">
                                    <div className="flex justify-between items-center p-6 md:p-7 rounded-[2rem] border-2 border-indigo-500 bg-indigo-600/10 cursor-pointer relative overflow-hidden transition-all hover:bg-indigo-600/20 group shadow-xl">
                                        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[8px] md:text-[9px] font-black px-4 py-1.5 rounded-bl-[1.2rem] md:rounded-bl-2xl uppercase tracking-widest leading-none">Value Pack</div>
                                        <div>
                                            <div className="font-black text-white text-lg md:text-xl uppercase tracking-tighter">1 Year Pass</div>
                                            <div className="text-[10px] md:text-xs font-bold text-slate-500 line-through mt-1 tracking-widest leading-none italic opacity-60 uppercase">₹1499</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl md:text-4xl font-black text-white tracking-widest group-hover:scale-110 transition-transform duration-500">₹799</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center p-6 md:p-7 rounded-[2rem] border border-slate-800 hover:border-indigo-500/50 bg-slate-950/50 cursor-pointer transition-all group shadow-lg">
                                        <div>
                                            <div className="font-extrabold text-slate-400 group-hover:text-white transition-all uppercase tracking-tighter text-lg md:text-xl">6 Months</div>
                                            <div className="text-[10px] md:text-xs font-bold text-slate-600 line-through mt-1 tracking-widest italic opacity-40 uppercase">₹999</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl md:text-3xl font-black text-slate-400 group-hover:text-white transition-all tracking-widest">₹499</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-5 mb-12 p-8 bg-slate-950/80 rounded-[2rem] border border-slate-800 relative z-10 font-black uppercase tracking-widest text-[10px] md:text-[11px] shadow-inner text-white/80">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 shrink-0" /> Unlock 300+ Officer Mocks
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 shrink-0" /> Sectional Accuracy AI Radar
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 shrink-0" /> Descriptive English Feedback
                                    </div>
                                </div>

                                <Link href="/checkout?plan=bank-pass" className="block w-full py-6 md:py-7 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-[1.5rem] md:rounded-[2rem] text-center transition-all text-xl md:text-2xl shadow-2xl shadow-indigo-600/30 active:scale-95 relative z-10 uppercase tracking-widest border-b-4 border-indigo-800 leading-none">
                                    Unlock Now
                                </Link>
                            </div>

                            {/* Social Trust */}
                            <div className="p-10 bg-slate-900 rounded-[3rem] border border-slate-800 text-center shadow-2xl group flex flex-col items-center">
                                <Users className="w-12 h-12 text-indigo-400 mb-6 drop-shadow-[0_0_10px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform" />
                                <div className="text-4xl font-black text-white tracking-tighter italic">85,000+</div>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-3 pt-4 border-t border-slate-800 w-full opacity-70">Active Candidates</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* FAQ Section Full Width Below */}
                <div className="mt-20 md:mt-32">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Aspirant Support</h2>
                        <div className="w-24 h-2 bg-indigo-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/30 transition-all group shadow-xl">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full p-8 md:p-10 text-left flex items-start justify-between gap-6"
                                >
                                    <span className="text-sm md:text-lg font-black text-white uppercase tracking-tight leading-snug group-hover:text-indigo-200 transition-colors italic">{faq.q}</span>
                                    <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${activeFaq === idx ? 'bg-indigo-600 text-white rotate-180 shadow-lg' : 'bg-slate-950 text-slate-600'}`}>
                                        <ChevronDown className="w-6 h-6" />
                                    </div>
                                </button>
                                {activeFaq === idx && (
                                    <div className="px-8 md:px-10 pb-10 pt-4 text-sm md:text-base text-slate-400 font-bold leading-relaxed border-t border-slate-800/50 bg-slate-950/30 animate-in fade-in slide-in-from-top-4">
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

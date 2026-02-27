"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, Clock,
    Trophy, ShieldCheck, Check, ChevronDown, ChevronRight,
    Lock, Languages, MonitorPlay, FileText, Award, Calendar, Landmark, Zap
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
                    <Link href="/" className="hover:text-indigo-400">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-indigo-400">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/banking" className="hover:text-indigo-400">Banking</Link>
                    <span>›</span>
                    <span className="text-white font-bold">IBPS PO Test Series</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ Hero Info Section */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Zap className="w-4 h-4 fill-indigo-400" /> High Performance
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
                                    IBPS PO Prelims & Mains 2026
                                </h1>

                                <p className="text-lg text-slate-400 mb-6 font-medium leading-relaxed max-w-2xl">
                                    India's most sophisticated banking test platform. Master speed and accuracy with mocks designed by Ex-IBPS officers and banking experts.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                                    <div className="flex items-center gap-2 font-bold text-slate-200">
                                        <Star className="w-5 h-5 text-indigo-400 fill-indigo-400" />
                                        4.9 <span className="text-slate-500 font-medium">(22,000+ Ratings)</span>
                                    </div>
                                    <div className="flex items-center gap-2 font-bold text-slate-200">
                                        <Users className="w-5 h-5 text-indigo-400" />
                                        85,000+ Students Enrolled
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <FileText className="w-7 h-7 text-indigo-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">200+</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Total Tests</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <Award className="w-7 h-7 text-emerald-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">15+</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Free Tests</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <Languages className="w-7 h-7 text-purple-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">Eng/Hin</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Bilingual</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <Landmark className="w-7 h-7 text-blue-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">Banking</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Special</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Link href="/dashboard/test-series/ibps-po" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-indigo-500/20 active:scale-95">
                                        <Play className="w-5 h-5 fill-white" /> Start Free Demo
                                    </Link>
                                    <Link href="/government-exams/banking/ibps-po/schedule" className="w-full sm:w-auto px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg active:scale-95 shadow-sm">
                                        <Calendar className="w-5 h-5 text-slate-400" /> View Schedule
                                    </Link>
                                </div>
                                <div className="text-sm font-semibold text-slate-400 flex items-center justify-start gap-2 mt-4 px-2">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                    TCS Pattern Exam Engine
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Detailed Test Breakdown */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden" id="test-syllabus">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <h2 className="text-3xl font-black text-white relative z-10">Test Series Breakdown</h2>
                                <p className="text-slate-400 mt-2 font-medium relative z-10">Select from our variety of tests tailored for IBPS PO 2026.</p>
                            </div>

                            <div className="divide-y divide-slate-800/50">
                                {testBreakdown.map((category) => (
                                    <div key={category.id} className="bg-slate-900">
                                        <button
                                            onClick={() => toggleAccordion(category.id)}
                                            className="w-full text-left p-6 md:px-8 flex items-start md:items-center justify-between hover:bg-slate-800/50 transition-colors group"
                                        >
                                            <div className="pr-4">
                                                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                                    {category.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 mt-3">
                                                    <span className="text-xs font-bold text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                                                        <BookOpen className="w-3.5 h-3.5 text-indigo-400" /> {category.testCount} Tests Total
                                                    </span>
                                                    {category.freeCount > 0 && (
                                                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                                                            <Star className="w-3.5 h-3.5 fill-emerald-400" /> {category.freeCount} Free Test{category.freeCount > 1 ? 's' : ''}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`p-2 rounded-full border border-slate-700 transition-all duration-300 ${activeAccordion === category.id ? 'rotate-180 bg-slate-800' : 'bg-slate-950/50'}`}>
                                                <ChevronDown className="w-5 h-5 text-slate-400" />
                                            </div>
                                        </button>

                                        {/* Accordion Content */}
                                        {activeAccordion === category.id && (
                                            <div className="px-6 md:px-8 pb-8 pt-4 bg-slate-950/30 border-t border-slate-800/50 shadow-inner">
                                                <p className="text-sm text-slate-400 mb-6 font-medium bg-slate-900 p-4 rounded-xl border border-slate-800">{category.desc}</p>

                                                <div className="space-y-4">
                                                    {category.tests.map((test, idx) => (
                                                        <div key={idx} className="flex flex-col lg:flex-row lg:items-center justify-between p-4 md:p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(79,70,229,0.1)] transition-all gap-5 group">
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-3">
                                                                    {test.isFree ? (
                                                                        <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider rounded-md">Free</span>
                                                                    ) : (
                                                                        <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-black uppercase tracking-wider rounded-md flex items-center gap-1">
                                                                            <Lock className="w-3 h-3" /> Pro
                                                                        </span>
                                                                    )}
                                                                    <h4 className="font-bold text-white text-base md:text-lg group-hover:text-indigo-100 transition-colors">{test.name}</h4>
                                                                </div>
                                                                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs font-bold text-slate-400 bg-slate-950 w-fit px-3 py-1.5 rounded-lg border border-slate-800/50">
                                                                    <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-indigo-400" /> {test.q} Qs</span>
                                                                    <div className="hidden xs:block w-1 h-1 rounded-full bg-slate-700"></div>
                                                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {test.m} Marks</span>
                                                                    <div className="hidden xs:block w-1 h-1 rounded-full bg-slate-700"></div>
                                                                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-purple-400" /> {test.time}</span>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0 w-full lg:w-auto">
                                                                {test.isFree ? (
                                                                    <Link href={`/dashboard/test-series/ibps-po`} className="w-full lg:w-auto px-6 py-3 bg-indigo-600/10 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white text-indigo-400 font-bold rounded-xl transition-colors flex items-center justify-center text-sm shadow-sm active:scale-95">
                                                                        Start Test <ChevronRight className="w-4 h-4 ml-1" />
                                                                    </Link>
                                                                ) : (
                                                                    <a href="#pricing" className="w-full lg:w-auto px-6 py-3 bg-slate-950 text-slate-500 font-bold rounded-xl flex items-center justify-center text-sm hover:text-slate-300 transition-colors border border-slate-800">
                                                                        <Lock className="w-4 h-4 mr-2" /> Unlock Now
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {category.tests.length < category.testCount && (
                                                    <div className="mt-8 text-center pb-2">
                                                        <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-bold text-sm hover:bg-slate-700 hover:border-slate-600 transition-all group shadow-sm">
                                                            Unlock all remaining {category.testCount - category.tests.length} tests <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 relative z-10">Exclusively for Bankers</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                                <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all text-indigo-400">
                                        <MonitorPlay className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">IBPS Pattern</h4>
                                    <p className="text-sm text-slate-500 font-medium">Authentic banking exam interface with sectional cut-off logic.</p>
                                </div>
                                <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-all text-amber-400">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">High-Speed Analytics</h4>
                                    <p className="text-sm text-slate-500 font-medium">Smart feedback on your time management for each subject.</p>
                                </div>
                                <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all text-purple-400">
                                        <BookMarked className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-white mb-2">Current Affairs</h4>
                                    <p className="text-sm text-slate-500 font-medium">Weekly specialized banking awareness & economy capsules.</p>
                                </div>
                            </div>
                        </div>

                        {/* 4️⃣ FAQ */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 relative z-10">Banking Exam Queries</h2>
                            <div className="space-y-4 relative z-10">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50 hover:border-slate-700 transition-colors">
                                        <button
                                            onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                            className="w-full p-6 text-left flex items-start sm:items-center justify-between font-bold text-white text-lg gap-4"
                                        >
                                            <span className="leading-snug pr-4">{faq.q}</span>
                                            <ChevronDown className={`w-6 h-6 shrink-0 text-slate-500 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-indigo-500' : ''}`} />
                                        </button>
                                        {activeFaq === idx && (
                                            <div className="px-6 pb-6 text-slate-400 font-medium leading-relaxed border-t border-slate-800/50 pt-5 bg-slate-900 shadow-inner">
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
                        <div className="sticky top-24 bg-slate-900 border-2 border-indigo-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(79,70,229,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                                Ultimate Banking Pass
                            </div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Bank Master Pass</h3>
                            <p className="text-sm text-slate-400 font-medium mb-8 relative z-10">One subscription to unlock all Banking & Insurance exams including IBPS, SBI, and RBI.</p>

                            <div className="space-y-4 mb-8 relative z-10">
                                <div className="flex justify-between items-center p-5 rounded-2xl border-2 border-indigo-500 bg-indigo-600/10 cursor-pointer relative overflow-hidden transition-all hover:bg-indigo-600/20 group">
                                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">Best Value</div>
                                    <div>
                                        <div className="font-black text-white text-lg">12 Months Pass</div>
                                        <div className="text-xs font-bold text-slate-400 line-through mt-0.5">₹1499</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-black text-indigo-400 tracking-tight">₹799</div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-5 rounded-2xl border border-slate-700 hover:border-slate-500 bg-slate-950/50 cursor-pointer transition-colors group">
                                    <div>
                                        <div className="font-bold text-slate-300 group-hover:text-white transition-colors">6 Months Pass</div>
                                        <div className="text-xs font-bold text-slate-500 line-through mt-0.5">₹999</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-slate-300 group-hover:text-white transition-colors">₹499</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 p-6 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> 2000+ Banking & Insurance Mocks
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> Real TCS Pattern Interface
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> Personal Speed Performance Reports
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> High AI Percentile Analysis
                                </div>
                            </div>

                            <Link href="/checkout?plan=bank-pass" className="block w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-indigo-500/30 active:scale-95 relative z-10">
                                Unlock All Banking Tests
                            </Link>

                        </div>

                        {/* Trust Badges */}
                        <div className="mt-6 p-6 sm:p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl">
                            <h4 className="font-black text-white mb-6 text-center text-lg">Why Bankers Trust Us?</h4>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shadow-sm text-sm font-black text-indigo-500">98%</div>
                                    <div className="text-sm font-bold text-slate-300 leading-snug">Students improved marks within 30 days</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-sm"><Star className="w-6 h-6 text-amber-500 fill-amber-500" /></div>
                                    <div className="text-sm font-bold text-slate-300 leading-snug">Voted #1 Platform for IBPS & SBI speed tests</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}

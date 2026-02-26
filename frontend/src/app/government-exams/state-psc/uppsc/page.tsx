"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, Clock,
    Trophy, ShieldCheck, Check, ChevronDown, ChevronUp, ChevronRight,
    Lock, Languages, MonitorPlay, FileText, Award, Calendar, Landmark
} from "lucide-react";
import Navbar from "@/components/Navbar";

const testBreakdown = [
    {
        id: "full-tests-gs1",
        title: "UPPSC PCS Prelims Full Mock Tests (GS Paper 1)",
        desc: "Strictly based on the latest UPPSC exam pattern. Includes 1/3rd negative marking and UP specific current affairs.",
        testCount: 20,
        freeCount: 1,
        tests: [
            { name: "UPPSC PCS Prelims Mock Test 1 (GS Paper 1)", q: 150, m: 200, time: "120 Mins", isFree: true },
            { name: "UPPSC PCS Prelims Mock Test 2 (GS Paper 1)", q: 150, m: 200, time: "120 Mins", isFree: false },
            { name: "UPPSC PCS Prelims Mock Test 3 (GS Paper 1)", q: 150, m: 200, time: "120 Mins", isFree: false },
            { name: "UPPSC PCS Prelims Mock Test 4 (GS Paper 1)", q: 150, m: 200, time: "120 Mins", isFree: false },
            { name: "UPPSC PCS Prelims Mock Test 5 (GS Paper 1)", q: 150, m: 200, time: "120 Mins", isFree: false },
        ]
    },
    {
        id: "full-tests-csat",
        title: "UPPSC PCS Prelims Full Mock Tests (CSAT Paper 2)",
        desc: "Qualifying paper tests including Interpersonal Skills, Reasoning, and Hindi.",
        testCount: 15,
        freeCount: 1,
        tests: [
            { name: "UPPSC PCS CSAT Mock Test 1 (Paper 2)", q: 100, m: 200, time: "120 Mins", isFree: true },
            { name: "UPPSC PCS CSAT Mock Test 2 (Paper 2)", q: 100, m: 200, time: "120 Mins", isFree: false },
            { name: "UPPSC PCS CSAT Mock Test 3 (Paper 2)", q: 100, m: 200, time: "120 Mins", isFree: false },
            { name: "UPPSC PCS CSAT Mock Test 4 (Paper 2)", q: 100, m: 200, time: "120 Mins", isFree: false },
        ]
    },
    {
        id: "pyq-tests",
        title: "UPPSC PCS Previous Year Papers",
        desc: "Official papers from UPPSC PCS exams, set as timed mocks to gauge your level.",
        testCount: 10,
        freeCount: 1,
        tests: [
            { name: "UPPSC PCS 2024 Prelims GS Paper 1", q: 150, m: 200, time: "120 Mins", isFree: true },
            { name: "UPPSC PCS 2023 Prelims GS Paper 1", q: 150, m: 200, time: "120 Mins", isFree: false },
            { name: "UPPSC PCS 2022 Prelims GS Paper 1", q: 150, m: 200, time: "120 Mins", isFree: false },
            { name: "UPPSC PCS 2021 Prelims GS Paper 1", q: 150, m: 200, time: "120 Mins", isFree: false },
        ]
    },
    {
        id: "up-gk-chapter",
        title: "Chapter Tests - UP Specific General Knowledge",
        desc: "Specialized chapter tests focusing on Uttar Pradesh History, Geography, and Economy.",
        testCount: 12,
        freeCount: 2,
        tests: [
            { name: "UP Geography & Natural Resources", q: 50, m: 50, time: "40 Mins", isFree: true },
            { name: "UP History & Architecture", q: 50, m: 50, time: "40 Mins", isFree: true },
            { name: "UP Economy & State Budget", q: 50, m: 50, time: "40 Mins", isFree: false },
            { name: "UP Demographics & Schemes", q: 50, m: 50, time: "40 Mins", isFree: false },
        ]
    }
];

const faqs = [
    { q: "Is this test series bilingual?", a: "Yes, all mock tests in the UPPSC PCS Test Series are available in both English and Hindi. You can seamlessly switch the language anytime during the test." },
    { q: "What is the validity of the plans?", a: "The 6 Months Pass is valid for half a year, while the 12 Months Pass grants full access to all new tests and updates for an entire year." },
    { q: "Does the test include Uttar Pradesh specific current affairs?", a: "Absolutely. A significant portion of the test questions features the latest Uttar Pradesh state-specific current affairs as strictly seen in recent UPPSC exams." },
    { q: "Are CSAT (Paper 2) mocks included?", a: "Yes, the test series contains comprehensive Mock Tests for Prelims Paper 2 (CSAT) covering Interpersonal Skills, Reasoning, and Hindi language as per the qualifying standard." }
];

export default function UPPSCExamPage() {
    const [activeAccordion, setActiveAccordion] = useState<string>("full-tests-gs1");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? "" : id);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-red-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-red-400">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-red-400">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/state-psc" className="hover:text-red-400">State PSC</Link>
                    <span>›</span>
                    <span className="text-white font-bold">UPPSC Mock Test Series</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ Hero Info Section */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Trophy className="w-4 h-4" /> Bestseller
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
                                    UPPSC PCS Mock Test Series 2026
                                </h1>

                                <p className="text-lg text-slate-400 mb-6 font-medium leading-relaxed max-w-2xl">
                                    Boost your UPPSC PCS Prelims preparation with India's most trusted mock tests strictly based on the latest UPPSC exam pattern. Get detailed solutions, All India Ranks, and deep performance analytics for GS 1 & CSAT.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                                    <div className="flex items-center gap-2 font-bold text-slate-200">
                                        <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                                        4.9 <span className="text-slate-500 font-medium">(18,500+ Ratings)</span>
                                    </div>
                                    <div className="flex items-center gap-2 font-bold text-slate-200">
                                        <Users className="w-5 h-5 text-red-400" />
                                        65,000+ Aspirants Enrolled
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <FileText className="w-7 h-7 text-red-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">100+</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Total Tests</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <Award className="w-7 h-7 text-emerald-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">14+</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Free Tests</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <Languages className="w-7 h-7 text-purple-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">Eng/Hin</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Bilingual</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <MonitorPlay className="w-7 h-7 text-blue-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">UPPSC</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Pattern</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Link href="/dashboard/test-series/uppsc" className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-red-500/20 active:scale-95">
                                        <Play className="w-5 h-5 fill-white" /> Start Free Demo
                                    </Link>
                                    <Link href="/government-exams/state-psc/uppsc/schedule" className="w-full sm:w-auto px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg active:scale-95 shadow-sm">
                                        <Calendar className="w-5 h-5 text-slate-400" /> View Schedule
                                    </Link>
                                </div>
                                <div className="text-sm font-semibold text-slate-400 flex items-center justify-start gap-2 mt-4 px-2">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                    Strictly per Latest Exam Pattern
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Detailed Test Breakdown */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden" id="test-syllabus">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <h2 className="text-3xl font-black text-white relative z-10">Test Series Breakdown</h2>
                                <p className="text-slate-400 mt-2 font-medium relative z-10">Explore everything included in the UPPSC PCS Test Series package.</p>
                            </div>

                            <div className="divide-y divide-slate-800/50">
                                {testBreakdown.map((category) => (
                                    <div key={category.id} className="bg-slate-900">
                                        <button
                                            onClick={() => toggleAccordion(category.id)}
                                            className="w-full text-left p-6 md:px-8 flex items-start md:items-center justify-between hover:bg-slate-800/50 transition-colors group"
                                        >
                                            <div className="pr-4">
                                                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                                                    {category.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 mt-3">
                                                    <span className="text-xs font-bold text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                                                        <BookOpen className="w-3.5 h-3.5 text-red-400" /> {category.testCount} Tests Total
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
                                                        <div key={idx} className="flex flex-col xl:flex-row xl:items-center justify-between p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all gap-5 group">
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-3">
                                                                    {test.isFree ? (
                                                                        <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider rounded-md">Free</span>
                                                                    ) : (
                                                                        <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-black uppercase tracking-wider rounded-md flex items-center gap-1">
                                                                            <Lock className="w-3 h-3" /> Pro
                                                                        </span>
                                                                    )}
                                                                    <h4 className="font-bold text-white text-base md:text-lg group-hover:text-red-100 transition-colors">{test.name}</h4>
                                                                </div>
                                                                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 bg-slate-950 w-fit px-3 py-1.5 rounded-lg border border-slate-800/50">
                                                                    <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-red-500" /> {test.q} Qs</span>
                                                                    <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                                                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {test.m} Marks</span>
                                                                    <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                                                                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> {test.time}</span>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0 w-full xl:w-auto">
                                                                {test.isFree ? (
                                                                    <Link href={`/dashboard/test-series/uppsc`} className="w-full xl:w-auto px-6 py-3 bg-red-600/10 border border-red-500/30 hover:bg-red-600 hover:text-white text-red-500 font-bold rounded-xl transition-colors flex items-center justify-center text-sm shadow-sm active:scale-95">
                                                                        Start Test <ChevronRight className="w-4 h-4 ml-1" />
                                                                    </Link>
                                                                ) : (
                                                                    <a href="#pricing" className="w-full xl:w-auto px-6 py-3 bg-slate-950 text-slate-500 font-bold rounded-xl flex items-center justify-center text-sm hover:text-slate-300 transition-colors border border-slate-800">
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

                        {/* 3️⃣ About the Exam Section */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 relative z-10">About UPPSC PCS 2026</h2>
                            <p className="text-slate-400 font-medium leading-relaxed mb-8 relative z-10 text-lg">
                                The Uttar Pradesh Public Service Commission (UPPSC) conducts the Provincial Civil Services (PCS) exam to recruit candidates for highest state-level administrative positions like Deputy Collector, DSP, and BDO. The exam happens in three phases: Prelims (Objective), Mains (Descriptive), and Interview.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
                                <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                                        <MonitorPlay className="w-3.5 h-3.5 text-red-400" /> Exam Mode (Prelims)
                                    </div>
                                    <div className="font-bold text-white text-lg">Offline (OMR Based)</div>
                                </div>
                                <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                                        <FileText className="w-3.5 h-3.5 text-emerald-400" /> Sections (Prelims)
                                    </div>
                                    <div className="font-bold text-white text-lg">GS Paper 1 & CSAT</div>
                                </div>
                                <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-amber-400" /> Negative Marking
                                    </div>
                                    <div className="font-bold text-white text-lg">0.33 Marks Penalty</div>
                                </div>
                            </div>
                        </div>

                        {/* 4️⃣ FAQ */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 relative z-10">Frequently Asked Questions</h2>
                            <div className="space-y-4 relative z-10">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50 hover:border-slate-700 transition-colors">
                                        <button
                                            onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                            className="w-full p-6 text-left flex items-start sm:items-center justify-between font-bold text-white text-lg gap-4"
                                        >
                                            <span className="leading-snug pr-4">{faq.q}</span>
                                            <ChevronDown className={`w-6 h-6 shrink-0 text-slate-500 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-red-500' : ''}`} />
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
                        <div className="sticky top-24 bg-slate-900 border-2 border-red-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(239,68,68,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                                Limited Time Offer
                            </div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Get UPPSC Pro Pass</h3>
                            <p className="text-sm text-slate-400 font-medium mb-8 relative z-10">Unlock all UPPSC mocks, GS papers, CSAT papers, PYQs, and detailed analytics to secure your rank.</p>

                            <div className="space-y-4 mb-8 relative z-10">
                                <div className="flex justify-between items-center p-5 rounded-2xl border-2 border-red-500 bg-red-600/10 cursor-pointer relative overflow-hidden transition-all hover:bg-red-600/20 group">
                                    <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
                                    <div>
                                        <div className="font-black text-white text-lg">12 Months Pass</div>
                                        <div className="text-xs font-bold text-slate-400 line-through mt-0.5">₹1999</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-black text-red-500 tracking-tight">₹999</div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-5 rounded-2xl border border-slate-700 hover:border-slate-500 bg-slate-950/50 cursor-pointer transition-colors group">
                                    <div>
                                        <div className="font-bold text-slate-300 group-hover:text-white transition-colors">6 Months Pass</div>
                                        <div className="text-xs font-bold text-slate-500 line-through mt-0.5">₹1199</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-slate-300 group-hover:text-white transition-colors">₹599</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 p-6 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> Full Access to 100+ Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> Special UP GK Current Affairs
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> UP State Ranking & Percentile
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> Detailed Solutions & PDF
                                </div>
                            </div>

                            <Link href="/checkout?plan=pro&exam=uppsc" className="block w-full py-5 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-red-500/30 active:scale-95 relative z-10">
                                Buy UPPSC Pro
                            </Link>
                            <div className="mt-5 text-center text-xs font-bold text-slate-500 flex items-center justify-center gap-2 relative z-10">
                                <ShieldCheck className="w-4 h-4 text-slate-400" /> Secure Payment Guaranteed
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-6 p-6 sm:p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl">
                            <h4 className="font-black text-white mb-6 text-center text-lg">Why thousands trust us?</h4>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shadow-sm text-sm font-black text-red-500">95%</div>
                                    <div className="text-sm font-bold text-slate-300 leading-snug">Questions accurately matched actual exam pattern</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-sm"><Star className="w-6 h-6 text-amber-500 fill-amber-500" /></div>
                                    <div className="text-sm font-bold text-slate-300 leading-snug">Highest rated mock test platform for State PSC</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}

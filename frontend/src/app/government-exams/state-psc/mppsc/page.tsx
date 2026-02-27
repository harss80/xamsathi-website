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
        id: "full-tests-gs",
        title: "MPPSC Prelims Full Mock Tests (General Studies)",
        desc: "Strictly based on the latest 2026 pattern with 3 marks per question and 1 mark negative marking. Covers all 10 units of the syllabus.",
        testCount: 15,
        freeCount: 1,
        tests: [
            { name: "MPPSC Prelims Mock Test 1 (GS Paper 1)", q: 150, m: 300, time: "120 Mins", isFree: true },
            { name: "MPPSC Prelims Mock Test 2 (GS Paper 1)", q: 150, m: 300, time: "120 Mins", isFree: false },
            { name: "MPPSC Prelims Mock Test 3 (GS Paper 1)", q: 150, m: 300, time: "120 Mins", isFree: false },
            { name: "MPPSC Prelims Mock Test 4 (GS Paper 1)", q: 150, m: 300, time: "120 Mins", isFree: false },
            { name: "MPPSC Prelims Mock Test 5 (GS Paper 1)", q: 150, m: 300, time: "120 Mins", isFree: false },
        ]
    },
    {
        id: "mp-special",
        title: "MP Special GK & Tribes Series",
        desc: "Specialized tests focusing on Unit 2, 4, 5, 8, and 10 of the MPPSC syllabus which covers MP History, Geography, Economy, and Tribes.",
        testCount: 20,
        freeCount: 2,
        tests: [
            { name: "Tribes of Madhya Pradesh - Detailed Test", q: 75, m: 150, time: "60 Mins", isFree: true },
            { name: "MP History & Culture - Unit 2", q: 75, m: 150, time: "60 Mins", isFree: true },
            { name: "MP Geography & Rivers - Unit 4", q: 75, m: 150, time: "60 Mins", isFree: false },
            { name: "MP Constitutional & Economic System", q: 75, m: 150, time: "60 Mins", isFree: false },
        ]
    },
    {
        id: "pyq-tests",
        title: "MPPSC Previous Year Papers",
        desc: "Official papers from 2025, 2024, and 2023 exams, updated to reflect the new scoring pattern where possible.",
        testCount: 10,
        freeCount: 1,
        tests: [
            { name: "MPPSC State Service Prelims 2024 (Paper 1)", q: 150, m: 300, time: "120 Mins", isFree: true },
            { name: "MPPSC State Service Prelims 2023 (Paper 1)", q: 150, m: 300, time: "120 Mins", isFree: false },
            { name: "MPPSC State Service Prelims 2022 (Paper 1)", q: 150, m: 300, time: "120 Mins", isFree: false },
        ]
    },
    {
        id: "aptitude-tests",
        title: "General Aptitude Test (Paper 2)",
        desc: "Qualifying paper practice for CSAT with focused sessions on Reasoning, Maths, and Hindi comprehension.",
        testCount: 12,
        freeCount: 1,
        tests: [
            { name: "MPPSC Aptitude Mock Test 1", q: 150, m: 300, time: "120 Mins", isFree: true },
            { name: "Aptitude Full Length Mock 2", q: 150, m: 300, time: "120 Mins", isFree: false },
        ]
    }
];

const faqs = [
    { q: "Is there any negative marking in MPPSC 2026?", a: "Yes, from 2026 onwards, MPPSC has introduced negative marking. 1 mark will be deducted for every incorrect answer." },
    { q: "What is the new marks weightage for Prelims?", a: "Each question now carries 3 marks (previously 2 marks). The total marks for Paper 1 is now 300." },
    { q: "Does the test series include MP Tribal culture?", a: "Yes, Unit 10 (Tribes of MP) is a significant part of the new syllabus, and we have dedicated sectional tests just for this unit." },
    { q: "Are the mocks available in Hindi?", a: "Absolutely. MPPSC is highly competitive in Hindi medium, and all our tests are provided in both English and Hindi with detailed bilingual solutions." }
];

export default function MPPSCExamPage() {
    const [activeAccordion, setActiveAccordion] = useState<string>("full-tests-gs");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? "" : id);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-indigo-400">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-indigo-400">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/state-psc" className="hover:text-indigo-400">State PSC</Link>
                    <span>›</span>
                    <span className="text-white font-bold">MPPSC Test Series</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ Hero Info Section */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Trophy className="w-4 h-4" /> Recommended for 2026
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
                                    MPPSC State Service Mock Test 2026
                                </h1>

                                <p className="text-lg text-slate-400 mb-6 font-medium leading-relaxed max-w-2xl">
                                    Master the new 2026 pattern with India's most updated MPPSC Prelims test series. Built with 3-marks-per-question logic and 1-mark negative marking strictly per latest MPPSC notification.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                                    <div className="flex items-center gap-2 font-bold text-slate-200">
                                        <Star className="w-5 h-5 text-indigo-400 fill-indigo-400" />
                                        4.7 <span className="text-slate-500 font-medium">(12,400+ Ratings)</span>
                                    </div>
                                    <div className="flex items-center gap-2 font-bold text-slate-200">
                                        <Users className="w-5 h-5 text-indigo-400" />
                                        48,000+ Aspirants Enrolled
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <FileText className="w-7 h-7 text-indigo-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">85+</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Total Tests</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <Award className="w-7 h-7 text-emerald-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">10+</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Free Tests</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <Languages className="w-7 h-7 text-purple-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">Eng/Hin</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Bilingual</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                                        <MonitorPlay className="w-7 h-7 text-blue-400 mb-2" />
                                        <span className="font-extrabold text-2xl text-white">Pattern</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">New 2026</span>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Link href="/dashboard/test-series/mppsc" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-indigo-500/20 active:scale-95">
                                        <Play className="w-5 h-5 fill-white" /> Start Free Mock
                                    </Link>
                                    <Link href="/government-exams/state-psc/mppsc/schedule" className="w-full sm:w-auto px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg active:scale-95 shadow-sm">
                                        <Calendar className="w-5 h-5" /> View Schedule
                                    </Link>
                                </div>
                                <div className="text-sm font-semibold text-slate-400 flex items-center justify-start gap-2 mt-4 px-2">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                    Updated for New Negative Marking (1 Mark)
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Detailed Test Breakdown */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden" id="test-syllabus">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                <h2 className="text-3xl font-black text-white relative z-10">Test Pack Breakdown</h2>
                                <p className="text-slate-400 mt-2 font-medium relative z-10">Comprehensive coverage for MPPSC State Service Prelims (SSE).</p>
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
                                                        <div key={idx} className="flex flex-col xl:flex-row xl:items-center justify-between p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(79,70,229,0.1)] transition-all gap-5 group">
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
                                                                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 bg-slate-950 w-fit px-3 py-1.5 rounded-lg border border-slate-800/50">
                                                                    <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-indigo-400" /> {test.q} Qs</span>
                                                                    <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                                                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {test.m} Marks</span>
                                                                    <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                                                                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-purple-400" /> {test.time}</span>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0 w-full xl:w-auto">
                                                                {test.isFree ? (
                                                                    <Link href={`/dashboard/test-series/mppsc`} className="w-full xl:w-auto px-6 py-3 bg-indigo-600/10 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white text-indigo-400 font-bold rounded-xl transition-colors flex items-center justify-center text-sm shadow-sm active:scale-95">
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
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-6 relative z-10">About MPPSC State Service 2026</h2>
                            <p className="text-slate-400 font-medium leading-relaxed mb-8 relative z-10 text-lg">
                                The Madhya Pradesh Public Service Commission (MPPSC) conducts the State Service Examination for positions like Deputy Collector and DSP. From 2026, the exam has adopted a new scoring scheme and introduced negative marking for the first time in Prelims.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
                                <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                                        <MonitorPlay className="w-3.5 h-3.5 text-indigo-400" /> Exam Mode
                                    </div>
                                    <div className="font-bold text-white text-lg">Offline (OMR Based)</div>
                                </div>
                                <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                                        <FileText className="w-3.5 h-3.5 text-emerald-400" /> Marking Scheme
                                    </div>
                                    <div className="font-bold text-white text-lg">3 Marks Per Q</div>
                                </div>
                                <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-red-500" /> Negative Marking
                                    </div>
                                    <div className="font-bold text-white text-lg">1 Mark Deduction</div>
                                </div>
                            </div>
                        </div>

                        {/* 4️⃣ FAQ */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 relative z-10">Frequently Asked Questions</h2>
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
                                Limited Time Launch Offer
                            </div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">MPPSC Pro Pass</h3>
                            <p className="text-sm text-slate-400 font-medium mb-8 relative z-10">Unlock all 85+ mocks, MP special series, tribes coverage, and new pattern PYQs.</p>

                            <div className="space-y-4 mb-8 relative z-10">
                                <div className="flex justify-between items-center p-5 rounded-2xl border-2 border-indigo-500 bg-indigo-600/10 cursor-pointer relative overflow-hidden transition-all hover:bg-indigo-600/20 group">
                                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
                                    <div>
                                        <div className="font-black text-white text-lg">12 Months Pass</div>
                                        <div className="text-xs font-bold text-slate-400 line-through mt-0.5">₹1999</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-black text-indigo-400 tracking-tight">₹899</div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-5 rounded-2xl border border-slate-700 hover:border-slate-500 bg-slate-950/50 cursor-pointer transition-colors group">
                                    <div>
                                        <div className="font-bold text-slate-300 group-hover:text-white transition-colors">6 Months Pass</div>
                                        <div className="text-xs font-bold text-slate-500 line-through mt-0.5">₹1299</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-black text-slate-300 group-hover:text-white transition-colors">₹649</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8 p-6 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> Full New Pattern Adaptation
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> Unit-wise Sectional Coverage
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> MP Tribal Culture Specialized Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> All India Ranking & Percentile
                                </div>
                            </div>

                            <Link href="/checkout?plan=pro&exam=mppsc" className="block w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-indigo-500/30 active:scale-95 relative z-10">
                                Enroll for MPPSC Pro
                            </Link>
                            <div className="mt-5 text-center text-xs font-bold text-slate-500 flex items-center justify-center gap-2 relative z-10">
                                <ShieldCheck className="w-4 h-4 text-slate-400" /> Secure Payment Guaranteed
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-6 p-6 sm:p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl text-center">
                            <h4 className="font-black text-white mb-6 text-center text-lg">Why choose Xamsathi?</h4>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-left">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shadow-sm text-sm font-black text-indigo-400">92%</div>
                                    <div className="text-sm font-bold text-slate-300 leading-snug">Students improved their score in MP Special GK within 1 month.</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}

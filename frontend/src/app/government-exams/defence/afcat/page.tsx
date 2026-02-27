"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, Clock,
    Trophy, ShieldCheck, Check, ChevronDown, ChevronRight,
    Lock, Languages, MonitorPlay, FileText, Award, Calendar, Landmark, Zap, BookMarked, Shield, Target, TrendingUp, Calculator, Crosshair, Medal, Plane
} from "lucide-react";
import Navbar from "@/components/Navbar";

const testBreakdown = [
    {
        id: "afcat-written",
        title: "AFCAT 2026 Written Master Series",
        desc: "Simulate the actual 300-mark online exam. Covers Verbal Ability, Numerical Ability, Reasoning, and General Awareness.",
        testCount: 50,
        freeCount: 2,
        tests: [
            { name: "AFCAT Full Length Mock 1", q: 100, m: 300, time: "120 Mins", isFree: true },
            { name: "Reasoning & Military Aptitude Special", q: 30, m: 90, time: "40 Mins", isFree: true },
            { name: "Numerical Ability Intensive", q: 20, m: 60, time: "30 Mins", isFree: false },
        ]
    },
    {
        id: "ekt-technical",
        title: "EKT (Engineering Knowledge Test)",
        desc: "Specialized mocks for Mechanical, Computer Science, and Electrical/Electronics technical branches.",
        testCount: 25,
        freeCount: 1,
        tests: [
            { name: "EKT Computer Science Mock", q: 50, m: 150, time: "45 Mins", isFree: true },
            { name: "EKT Mechanical Engineering Mock", q: 50, m: 150, time: "45 Mins", isFree: false },
        ]
    },
    {
        id: "afsb-prep",
        title: "AFSB Interview & OIR Simulation",
        desc: "Prepare for the Air Force Selection Board with OIR tests and psychological assessment modules.",
        testCount: 12,
        freeCount: 1,
        tests: [
            { name: "AFSB OIR - Verbal Reasoning", q: 50, m: 50, time: "30 Mins", isFree: true },
            { name: "IAF Psychological Module 1", q: 60, m: 100, time: "60 Mins", isFree: false },
        ]
    }
];

const faqs = [
    { q: "What is the marking scheme for AFCAT 2026?", a: "Each correct answer carries 3 marks, while 1 mark is deducted for every incorrect response. No marks are given for unattempted questions." },
    { q: "What are the eligibility criteria for the Flying Branch?", a: "Minimum 50% marks each in Maths and Physics at 10+2 level and Graduation with minimum 60% marks. The age limit is 20-24 years." },
    { q: "Is EKT mandatory for all AFCAT candidates?", a: "No, EKT (Engineering Knowledge Test) is only mandatory for candidates applying for Technical Ground Duty branches." },
    { q: "What is AFSB?", a: "AFSB stands for Air Force Selection Board. It is the second stage of the selection process involving intelligence and personality tests over 5-6 days." }
];

export default function AFCATPage() {
    const [activeAccordion, setActiveAccordion] = useState<string>("afcat-written");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-sky-400 font-bold transition-all">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams/defence" className="hover:text-sky-400 font-bold transition-all">Defence</Link>
                    <span>›</span>
                    <span className="text-white font-bold">AFCAT 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* Hero Info Section - Sky Blue Theme */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Plane className="w-4 h-4" /> Touch the Sky with Glory
                                </div>

                                <h1 className="text-4xl md:text-6xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                                    AFCAT 2026 <br /> <span className="text-sky-400 font-black">Air Force Elite Series</span>
                                </h1>

                                <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed max-w-xl">
                                    Join the Indian Air Force as a Group A Gazetted Officer. Master the online exam with AFCAT-specific numerical reasoning and verbal ability simulators.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-bold">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                                        4.9/5 <span className="text-slate-500 font-medium text-xs">(15k+ Reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Users className="w-5 h-5 text-sky-400" />
                                        90,000+ Enrolled Aspirants
                                    </div>
                                </div>

                                {/* Feature Boxes */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-center">
                                    {[
                                        { label: "Tests", val: "75+", icon: Target, color: "text-amber-400" },
                                        { label: "Branch", val: "FLYING/GD", icon: Plane, color: "text-sky-400" },
                                        { label: "Level", val: "OFFICER", icon: Award, color: "text-emerald-400" },
                                        { label: "Interview", val: "AFSB", icon: Medal, color: "text-rose-400" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 bg-slate-950/50 rounded-[2rem] border border-slate-800 transition-all hover:border-sky-500/30 hover:bg-slate-900 group/box shadow-inner">
                                            <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 transition-transform group-hover/box:scale-110`} />
                                            <div className="font-black text-white text-2xl tracking-tighter">{stat.val}</div>
                                            <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Link href="/dashboard/test-series/defence-afcat" className="px-10 py-5 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-xl shadow-lg shadow-sky-500/20 active:scale-95">
                                        <Play className="w-6 h-6 fill-white" /> Start Free Mock
                                    </Link>
                                    <Link href="/government-exams/defence/afcat/schedule" className="px-10 py-5 bg-transparent border-2 border-slate-700 hover:border-sky-500/50 hover:text-white text-slate-300 font-black rounded-2xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                                        <Calendar className="w-5 h-5 text-slate-500" /> Exam Guide
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Inventory Section */}
                        <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-10 border-b border-slate-800 bg-slate-950/50 text-white">
                                <h2 className="text-3xl font-black tracking-tight">IAF Entrance Inventory</h2>
                                <p className="text-slate-400 mt-2 font-medium">Curated for Flying, Technical, and Non-Technical branches.</p>
                            </div>

                            <div className="divide-y divide-slate-800/50">
                                {testBreakdown.map((category) => (
                                    <div key={category.id}>
                                        <button
                                            onClick={() => setActiveAccordion(activeAccordion === category.id ? "" : category.id)}
                                            className={`w-full text-left p-8 md:p-10 flex items-center justify-between transition-all ${activeAccordion === category.id ? 'bg-sky-500/5' : 'hover:bg-slate-800/50'}`}
                                        >
                                            <div className="flex-1 text-white">
                                                <h3 className="text-2xl font-black tracking-tight leading-none mb-4">{category.title}</h3>
                                                <div className="flex flex-wrap items-center gap-4 font-black">
                                                    <span className="text-[11px] text-slate-400 flex items-center gap-1.5 uppercase tracking-widest bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                                                        <BookOpen className="w-4 h-4 text-sky-400" /> {category.testCount} Tests
                                                    </span>
                                                    {category.freeCount > 0 && (
                                                        <span className="text-[11px] text-sky-400 bg-sky-500/10 px-3 py-1.5 rounded-lg border border-sky-500/20 uppercase tracking-widest">
                                                            {category.freeCount} Free Trials
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`w-12 h-12 rounded-2xl border border-slate-700 flex items-center justify-center transition-all duration-300 ${activeAccordion === category.id ? 'rotate-180 bg-sky-600 border-sky-500 text-white' : 'bg-slate-950 text-slate-500'}`}>
                                                <ChevronDown className="w-6 h-6" />
                                            </div>
                                        </button>

                                        {activeAccordion === category.id && (
                                            <div className="p-8 md:p-10 bg-slate-950/20 border-t border-slate-800/50 animate-in fade-in duration-300">
                                                <p className="text-base text-slate-400 mb-10 font-medium leading-relaxed bg-slate-900/50 p-8 rounded-[2rem] border-l-8 border-sky-600 shadow-inner">
                                                    {category.desc}
                                                </p>

                                                <div className="space-y-4">
                                                    {category.tests.map((test, idx) => (
                                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-[2rem] hover:border-sky-500/30 transition-all gap-8 group shadow-sm">
                                                            <div>
                                                                <div className="flex items-center gap-4 mb-4">
                                                                    {test.isFree ? (
                                                                        <span className="px-3 py-1 bg-sky-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-md shadow-lg shadow-sky-500/20">FREE</span>
                                                                    ) : (
                                                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                                                                            <Lock className="w-4 h-4 text-slate-600" />
                                                                        </div>
                                                                    )}
                                                                    <h4 className="font-black text-white text-xl group-hover:text-sky-400 transition-colors uppercase tracking-tight">{test.name}</h4>
                                                                </div>
                                                                <div className="flex flex-wrap items-center gap-6 text-[12px] font-black text-slate-500 uppercase tracking-[0.15em]">
                                                                    <span className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg"><FileText className="w-4 h-4 text-sky-400" /> {test.q} Qs</span>
                                                                    <span className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {test.m} Marks</span>
                                                                    <span className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg"><Clock className="w-4 h-4 text-amber-500" /> {test.time}</span>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0">
                                                                {test.isFree ? (
                                                                    <Link href="/dashboard/test-series/defence-afcat" className="w-full sm:w-auto px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-xl transition-all flex items-center justify-center text-sm shadow-xl active:scale-95 uppercase tracking-widest group-hover:translate-x-1">
                                                                        Launch <ChevronRight className="w-5 h-5 ml-1" />
                                                                    </Link>
                                                                ) : (
                                                                    <button className="w-full sm:w-auto px-8 py-4 bg-slate-950 border border-slate-800 text-slate-600 font-black rounded-xl flex items-center justify-center text-sm uppercase tracking-widest cursor-default">
                                                                        Air Force Pass
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

                    </div>

                    {/* RIGHT COLUMN - Sticky Pricing Card */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-8 text-black">

                            {/* The Sky Blue Pricing Card */}
                            <div className="bg-sky-400 rounded-[2.5rem] p-8 md:p-10 text-slate-950 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl -mr-24 -mt-24 group-hover:scale-125 transition-transform duration-1000"></div>

                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                    TOP OFFICER SELECTION
                                </div>

                                <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter leading-none uppercase text-slate-950">AFCAT 2026 ELITE PASS</h3>
                                <p className="text-slate-900 mb-10 font-bold leading-relaxed opacity-80 text-lg">One-stop simulation training for Flying, Technical, and Ground Duty entries.</p>

                                <div className="space-y-4 mb-10">
                                    <div className="p-6 bg-white/20 rounded-3xl border border-black/5 backdrop-blur-md group/plan hover:bg-white/30 transition-all cursor-pointer shadow-inner">
                                        <div className="flex justify-between items-start mb-2 uppercase">
                                            <span className="text-[11px] font-black tracking-widest text-slate-800">12 MONTH AIR FORCE ACCESS</span>
                                            <span className="px-3 py-1 bg-black text-white text-[9px] font-black rounded-full tracking-widest">BEST VALUE</span>
                                        </div>
                                        <div className="flex justify-between items-baseline text-slate-950">
                                            <span className="text-5xl font-black tracking-tighter">₹999</span>
                                            <span className="text-lg font-bold opacity-40 line-through">₹2,499</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/checkout?plan=afcat-elite" className="w-full py-6 bg-slate-950 text-white font-black rounded-2xl flex items-center justify-center gap-3 text-xl shadow-2xl active:scale-95 transition-all text-center">
                                    Fly High Now <ChevronRight className="w-6 h-6" />
                                </Link>
                            </div>

                            {/* Enrolled Stats Card */}
                            <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <Users className="w-12 h-12 text-sky-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                                <div className="text-5xl font-black text-white tracking-tighter mb-2">90,000+</div>
                                <div className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">Aspirants Enrolled</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mt-32">
                    <h2 className="text-4xl font-black text-white mb-12 tracking-tight text-center uppercase">Preparation FAQs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-xl transition-all hover:border-sky-500/30 group">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full p-8 text-left flex items-center justify-between gap-6"
                                >
                                    <span className="font-black text-white text-xl tracking-tight leading-snug uppercase">{faq.q}</span>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${activeFaq === idx ? 'bg-sky-600 text-white rotate-180' : 'bg-slate-950 text-slate-500'}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>
                                {activeFaq === idx && (
                                    <div className="px-8 pb-8 text-slate-400 font-medium leading-relaxed border-t border-slate-800/50 pt-6 animate-in slide-in-from-top-4">
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

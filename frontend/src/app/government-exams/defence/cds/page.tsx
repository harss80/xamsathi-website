"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, Clock,
    Trophy, ShieldCheck, Check, ChevronDown, ChevronRight,
    Lock, Languages, MonitorPlay, FileText, Award, Calendar, Landmark, Zap, BookMarked, Shield, Target, TrendingUp, Calculator, Crosshair, Medal
} from "lucide-react";
import Navbar from "@/components/Navbar";

const testBreakdown = [
    {
        id: "ima-afcat-ina",
        title: "CDS 2026 (IMA, INA, AFA) Gold Pass",
        desc: "Specialized for officer entries requiring Math. Comprehensive coverage of Advanced Arithmetic, English, and GS.",
        testCount: 65,
        freeCount: 2,
        tests: [
            { name: "CDS Full Length Mock - Math Focus", q: 100, m: 100, time: "120 Mins", isFree: true },
            { name: "English Comprehensive Mastery", q: 120, m: 100, time: "120 Mins", isFree: true },
            { name: "IMA/AFA Level Advanced Maths", q: 100, m: 100, time: "120 Mins", isFree: false },
        ]
    },
    {
        id: "ota-series",
        title: "CDS 2026 (OTA) Officer Suite",
        desc: "Designed for OTA aspirants (Men & Women). Focuses exclusively on English and General Knowledge as per UPSC standards.",
        testCount: 45,
        freeCount: 2,
        tests: [
            { name: "OTA Full Length Mock 1", q: 240, m: 200, time: "240 Mins", isFree: true },
            { name: "OTA General Studies Intensive", q: 120, m: 100, time: "120 Mins", isFree: false },
        ]
    },
    {
        id: "ssb-interview",
        title: "SSB Level-2 Psychology & GTO",
        desc: "Officer Intelligence Rating (OIR) tests and psychological module guidance specific to CDS entry level.",
        testCount: 15,
        freeCount: 1,
        tests: [
            { name: "OIR Practice Set - CDS Entry", q: 50, m: 50, time: "30 Mins", isFree: true },
            { name: "WAT/TAT Projection Module", q: 60, m: 100, time: "60 Mins", isFree: false },
        ]
    }
];

const faqs = [
    { q: "What is the difference between IMA and OTA in CDS?", a: "IMA (Indian Military Academy) is for a Permanent Commission and requires three papers (Maths, English, GS). OTA (Officers Training Academy) is for Short Service Commission and requires only two papers (English, GS)." },
    { q: "Can final year students apply for CDS 2026?", a: "Yes, final year students can apply provisionally, provided they can produce proof of graduation at the time of the SSB interview/joining." },
    { q: "Is there negative marking in the CDS exam?", a: "Yes, there is a penalty of 1/3rd (0.33) marks for every incorrect answer in the CDS written examination." },
    { q: "Are women eligible for CDS?", a: "Yes, women candidates are eligible to join the Indian Army through the Officers Training Academy (OTA) Chennai entry." }
];

export default function CDSPage() {
    const [activeAccordion, setActiveAccordion] = useState<string>("ima-afcat-ina");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-indigo-400 font-bold transition-all">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams/defence" className="hover:text-indigo-400 font-bold transition-all">Defence</Link>
                    <span>›</span>
                    <span className="text-white font-bold">CDS Exam 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* Hero Info Section - Indigo Academy Theme */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Shield className="w-4 h-4" /> Graduate Entry Series
                                </div>

                                <h1 className="text-4xl md:text-6xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                                    CDS Exam 2026 <br /> <span className="text-indigo-500">Officer Master Pack</span>
                                </h1>

                                <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed max-w-xl">
                                    Entry into IMA, INA, AFA, & OTA. Prepare with graduation-level simulation mocks designed to match the high difficulty of UPSC CDS papers.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-bold">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                                        4.8/5 <span className="text-slate-500 font-medium text-xs">(10k+ Reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Users className="w-5 h-5 text-indigo-400" />
                                        75,000+ Candidates Active
                                    </div>
                                </div>

                                {/* Feature Boxes */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-center">
                                    {[
                                        { label: "Mocks", val: "85+", icon: Target, color: "text-amber-400" },
                                        { label: "OTA Entry", val: "WOMEN/MEN", icon: Medal, color: "text-blue-400" },
                                        { label: "Graduate", val: "LEVEL", icon: Award, color: "text-emerald-400" },
                                        { label: "SSB", val: "PHASE-2", icon: Zap, color: "text-purple-400" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 bg-slate-950/50 rounded-[2rem] border border-slate-800 transition-all hover:border-indigo-500/30 hover:bg-slate-900 group/box shadow-inner">
                                            <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 transition-transform group-hover/box:scale-110`} />
                                            <div className="font-black text-white text-2xl tracking-tighter">{stat.val}</div>
                                            <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Link href="/dashboard/test-series/defence-cds" className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-xl shadow-lg shadow-indigo-500/20 active:scale-95">
                                        <Play className="w-6 h-6 fill-white" /> Start Free Test
                                    </Link>
                                    <Link href="/government-exams/defence/cds/schedule" className="px-10 py-5 bg-transparent border-2 border-slate-700 hover:border-indigo-500/50 hover:text-white text-slate-300 font-black rounded-2xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                                        <Calendar className="w-5 h-5 text-slate-500" /> Exam Roadmap
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Inventory Section */}
                        <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-10 border-b border-slate-800 bg-slate-950/50">
                                <h2 className="text-3xl font-black text-white tracking-tight">Academy Entrance Inventory</h2>
                                <p className="text-slate-400 mt-2 font-medium">Calibrated for IMA, INA, AFA, and OTA standards.</p>
                            </div>

                            <div className="divide-y divide-slate-800/50">
                                {testBreakdown.map((category) => (
                                    <div key={category.id}>
                                        <button
                                            onClick={() => setActiveAccordion(activeAccordion === category.id ? "" : category.id)}
                                            className={`w-full text-left p-8 md:p-10 flex items-center justify-between transition-all ${activeAccordion === category.id ? 'bg-indigo-500/5' : 'hover:bg-slate-800/50'}`}
                                        >
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-white tracking-tight leading-none mb-4">{category.title}</h3>
                                                <div className="flex flex-wrap items-center gap-4 font-black">
                                                    <span className="text-[11px] text-slate-400 flex items-center gap-1.5 uppercase tracking-widest bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                                                        <BookOpen className="w-4 h-4 text-blue-400" /> {category.testCount} Tests
                                                    </span>
                                                    {category.freeCount > 0 && (
                                                        <span className="text-[11px] text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20 uppercase tracking-widest">
                                                            {category.freeCount} Free Trials
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`w-12 h-12 rounded-2xl border border-slate-700 flex items-center justify-center transition-all duration-300 ${activeAccordion === category.id ? 'rotate-180 bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-950 text-slate-500'}`}>
                                                <ChevronDown className="w-6 h-6" />
                                            </div>
                                        </button>

                                        {activeAccordion === category.id && (
                                            <div className="p-8 md:p-10 bg-slate-950/20 border-t border-slate-800/50 animate-in fade-in duration-300">
                                                <p className="text-base text-slate-400 mb-10 font-medium leading-relaxed bg-slate-900/50 p-8 rounded-[2rem] border-l-8 border-indigo-600 shadow-inner">
                                                    {category.desc}
                                                </p>

                                                <div className="space-y-4">
                                                    {category.tests.map((test, idx) => (
                                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-[2rem] hover:border-indigo-500/30 transition-all gap-8 group shadow-sm">
                                                            <div>
                                                                <div className="flex items-center gap-4 mb-4">
                                                                    {test.isFree ? (
                                                                        <span className="px-3 py-1 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-md shadow-lg shadow-indigo-500/20">FREE</span>
                                                                    ) : (
                                                                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                                                                            <Lock className="w-4 h-4 text-slate-600" />
                                                                        </div>
                                                                    )}
                                                                    <h4 className="font-black text-white text-xl group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{test.name}</h4>
                                                                </div>
                                                                <div className="flex flex-wrap items-center gap-6 text-[12px] font-black text-slate-500 uppercase tracking-[0.15em]">
                                                                    <span className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg"><FileText className="w-4 h-4 text-blue-400" /> {test.q} Qs</span>
                                                                    <span className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {test.m} Marks</span>
                                                                    <span className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg"><Clock className="w-4 h-4 text-amber-500" /> {test.time}</span>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0">
                                                                {test.isFree ? (
                                                                    <Link href="/dashboard/test-series/defence-cds" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all flex items-center justify-center text-sm shadow-xl active:scale-95 uppercase tracking-widest group-hover:translate-x-1">
                                                                        Launch <ChevronRight className="w-5 h-5 ml-1" />
                                                                    </Link>
                                                                ) : (
                                                                    <button className="w-full sm:w-auto px-8 py-4 bg-slate-950 border border-slate-800 text-slate-600 font-black rounded-xl flex items-center justify-center text-sm uppercase tracking-widest cursor-default">
                                                                        Gold Pack
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
                        <div className="sticky top-24 space-y-8">

                            {/* The Amber Pricing Card */}
                            <div className="bg-amber-500 rounded-[2.5rem] p-8 md:p-10 text-slate-950 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl -mr-24 -mt-24 group-hover:scale-125 transition-transform duration-1000"></div>

                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                    APEX SELECTION RATE
                                </div>

                                <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter leading-none uppercase text-slate-950">CDS & OTA 2026 GOLD PASS</h3>
                                <p className="text-slate-900 mb-10 font-bold leading-relaxed opacity-80 text-lg">Comprehensive simulation training for permanent & short service commissions.</p>

                                <div className="space-y-4 mb-10">
                                    <div className="p-6 bg-white/20 rounded-3xl border border-black/5 backdrop-blur-md group/plan hover:bg-white/30 transition-all cursor-pointer shadow-inner">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[11px] font-black uppercase tracking-widest text-slate-800">12 MONTH GOLD ACCESS</span>
                                            <span className="px-3 py-1 bg-black text-white text-[9px] font-black rounded-full uppercase tracking-widest">POPULAR</span>
                                        </div>
                                        <div className="flex justify-between items-baseline text-slate-950">
                                            <span className="text-5xl font-black tracking-tighter">₹1299</span>
                                            <span className="text-lg font-bold opacity-40 line-through">₹2,999</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/checkout?plan=cds-gold" className="w-full py-6 bg-slate-950 text-white font-black rounded-2xl flex items-center justify-center gap-3 text-xl shadow-2xl active:scale-95 transition-all text-center">
                                    Get Gold Access <ChevronRight className="w-6 h-6" />
                                </Link>
                            </div>

                            {/* Enrolled Stats Card */}
                            <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <Users className="w-12 h-12 text-indigo-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                                <div className="text-5xl font-black text-white tracking-tighter mb-2">75,000+</div>
                                <div className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">Graduates Enrolled</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mt-32">
                    <h2 className="text-4xl font-black text-white mb-12 tracking-tight text-center uppercase">Preparation Queries</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-xl transition-all hover:border-indigo-500/30 group">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full p-8 text-left flex items-center justify-between gap-6"
                                >
                                    <span className="font-black text-white text-xl tracking-tight leading-snug uppercase">{faq.q}</span>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${activeFaq === idx ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-950 text-slate-500'}`}>
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

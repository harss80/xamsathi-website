"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, Clock,
    Trophy, ShieldCheck, Check, ChevronDown, ChevronRight,
    Lock, Languages, MonitorPlay, FileText, Award, Calendar, Landmark, Zap, BookMarked, Shield
} from "lucide-react";
import Navbar from "@/components/Navbar";

const testBreakdown = [
    {
        id: "phase1-rbi",
        title: "RBI Grade B Phase 1 Series",
        desc: "High-intensity mocks with strict sectional cuts. Focus on General Awareness (80 Qs) and tough Reasoning.",
        testCount: 15,
        freeCount: 1,
        tests: [
            { name: "RBI Grade B Phase 1 Free Mock 1", q: 200, m: 200, time: "120 Mins", isFree: true },
            { name: "RBI Grade B Phase 1 Mock 2", q: 200, m: 200, time: "120 Mins", isFree: false },
        ]
    },
    {
        id: "phase2-rbi",
        title: "RBI Grade B Phase 2 (ESI + FM)",
        desc: "Includes both Objective and Desktop-simulation Descriptive tests for Economy and Finance.",
        testCount: 10,
        freeCount: 1,
        tests: [
            { name: "ESI Objective+Desc Simulator 1", q: 30, m: 100, time: "120 Mins", isFree: true },
            { name: "F&M Objective+Desc Simulator 1", q: 30, m: 100, time: "120 Mins", isFree: false },
        ]
    }
];

const faqs = [
    { q: "Is the General Awareness section updated for RBI?", a: "Yes, our RBI GA module focuses heavily on RBI Circulars, Economic Survey, and Union Budget 2026." },
    { q: "Do you provide model answers for descriptive tests?", a: "Absolutely. For every ESI and Finance descriptive question, we provide a high-scoring model answer with keyword highlights." },
    { q: "What is the qualification required for RBI Grade B?", a: "Minimum 60% (50% for SC/ST/PwBD) in Graduation for the General Stream." }
];

export default function RBIGradeBPage() {
    const [activeAccordion, setActiveAccordion] = useState<string>("phase1-rbi");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-8 font-bold uppercase tracking-widest italic">
                    <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking" className="hover:text-amber-400 transition-colors">Banking</Link>
                    <span>&rsaquo;</span>
                    <span className="text-white font-black uppercase tracking-tighter">RBI Grade B Officer</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-10 md:space-y-16">

                        {/* Hero Section */}
                        <div className="bg-slate-900 rounded-[3rem] p-7 md:p-14 border border-amber-500/20 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.3em] shadow-lg">
                                    <Landmark className="w-4 h-4" /> Apex Bank Series
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight lg:leading-[0.8] uppercase italic">
                                    RBI Grade B <br /> Officer 2026
                                </h1>

                                <p className="text-lg md:text-2xl text-slate-400 mb-10 font-bold leading-relaxed max-w-2xl italic">
                                    The most prestigious post in the Indian banking system. Master Phase 1 and Phase 2 with our comprehensive simulated test engine.
                                </p>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12">
                                    {[
                                        { label: "Tests", val: "75+", icon: Target, color: "text-amber-400" },
                                        { label: "Phase 2", val: "INCLUDED", icon: Zap, color: "text-blue-400" },
                                        { label: "GA Focus", val: "80 Qs", icon: BookMarked, color: "text-emerald-400" },
                                        { label: "Rank", val: "GR-B", icon: Award, color: "text-purple-400" }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex flex-col items-center justify-center p-6 bg-slate-950/70 rounded-[2rem] border border-slate-800 hover:border-amber-500/40 transition-all shadow-2xl">
                                            <stat.icon className={`w-7 h-7 md:w-9 md:h-9 ${stat.color} mb-3`} />
                                            <span className="font-black text-xl md:text-2xl text-white tracking-widest leading-none">{stat.val}</span>
                                            <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest mt-2">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-5">
                                    <Link href="/dashboard/test-series/rbi-grade-b" className="w-full sm:w-auto px-12 py-6 bg-amber-600 hover:bg-amber-500 text-black font-black rounded-2xl md:rounded-[1.5rem] transition-all flex items-center justify-center gap-4 text-xl shadow-[0_15px_50px_rgba(245,158,11,0.3)] active:scale-95 uppercase tracking-[0.2em] border-b-4 border-amber-900 leading-none">
                                        <Play className="w-6 h-6 fill-black" /> Free Demo
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Test Breakdown */}
                        <div className="bg-slate-900 rounded-[3.5rem] border border-slate-800 shadow-2xl overflow-hidden">
                            <div className="p-8 md:p-14 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic">Phase Transition</h2>
                            </div>

                            <div className="divide-y divide-slate-800/40">
                                {testBreakdown.map((category) => (
                                    <div key={category.id} className="bg-slate-900">
                                        <button
                                            onClick={() => setActiveAccordion(activeAccordion === category.id ? "" : category.id)}
                                            className="w-full text-left p-8 md:p-14 flex items-start md:items-center justify-between hover:bg-amber-500/5 transition-all group"
                                        >
                                            <div className="pr-6">
                                                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight italic">
                                                    {category.title}
                                                </h3>
                                                <div className="flex items-center gap-5 mt-6">
                                                    <span className="text-[11px] font-black text-slate-500 bg-slate-950 border-2 border-slate-800 px-5 py-2 rounded-xl flex items-center gap-3 uppercase tracking-widest shadow-xl font-mono">
                                                        {category.testCount} TESTS
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-3xl border border-slate-800 flex items-center justify-center transition-all duration-700 ${activeAccordion === category.id ? 'rotate-180 bg-amber-600 border-amber-500 text-black' : 'bg-slate-950/50 text-slate-600'}`}>
                                                <ChevronDown className="w-8 h-8" />
                                            </div>
                                        </button>

                                        {activeAccordion === category.id && (
                                            <div className="px-6 md:px-14 pb-14 md:pb-20 pt-6 bg-slate-950/30 border-t border-slate-800/50">
                                                <div className="grid grid-cols-1 gap-6 md:gap-8">
                                                    {category.tests.map((test, idx) => (
                                                        <div key={idx} className="flex flex-col lg:flex-row lg:items-center justify-between p-8 md:p-12 bg-slate-900 border-2 border-slate-800 rounded-[3rem] hover:border-amber-500/50 transition-all gap-8 group/test shadow-2xl">
                                                            <div>
                                                                <h4 className="font-black text-white text-xl md:text-2xl uppercase tracking-tighter italic mb-4">{test.name}</h4>
                                                                <div className="flex flex-wrap items-center gap-4 text-[11px] font-black text-slate-500 bg-slate-950/80 w-fit px-6 py-3 rounded-2xl border border-slate-800 uppercase tracking-widest">
                                                                    <span>{test.q} Qs</span>
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                                                                    <span>{test.m} Marks</span>
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                                                                    <span>{test.time}</span>
                                                                </div>
                                                            </div>
                                                            <Link href="/dashboard/test-series/rbi-grade-b" className="w-full lg:w-auto px-10 py-5 bg-amber-600 hover:bg-amber-500 text-black font-black rounded-2xl flex items-center justify-center uppercase tracking-widest shadow-2xl active:scale-95 leading-none">
                                                                Start Now
                                                            </Link>
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

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-4" id="pricing">
                        <div className="sticky top-24 space-y-10">
                            <div className="bg-slate-900 border-[5px] border-amber-600 rounded-[4rem] p-10 md:p-14 shadow-[0_0_80px_rgba(245,158,11,0.2)] relative overflow-hidden group">
                                <h3 className="text-3xl font-black text-white mb-6 mt-8 relative z-10 leading-[0.8] uppercase tracking-tighter italic">Grade B <br /> Master Pass</h3>
                                <p className="text-sm text-slate-400 font-black mb-12 relative z-10 uppercase tracking-widest opacity-80 leading-relaxed italic">The definitive training for India's Banking Regulators.</p>

                                <div className="space-y-6 mb-12 relative z-10 font-black">
                                    <div className="flex justify-between items-center p-8 rounded-[3rem] border-4 border-amber-500 bg-amber-600/10 shadow-2xl">
                                        <div>
                                            <div className="font-black text-white text-xl uppercase tracking-tighter">Full Season</div>
                                            <div className="text-xs font-black text-slate-600 line-through mt-1 tracking-widest opacity-50 italic">₹2999</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-4xl font-black text-white tracking-widest italic">₹1299</div>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/checkout?plan=rbi-pass" className="block w-full py-7 bg-amber-600 hover:bg-amber-500 text-black font-black rounded-[2.5rem] text-center transition-all text-2xl shadow-2xl active:scale-95 relative z-10 uppercase tracking-widest border-b-8 border-amber-900 leading-none italic">
                                    Unlock Access
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}

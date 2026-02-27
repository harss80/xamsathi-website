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
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-amber-400 font-bold transition-all">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams/banking" className="hover:text-amber-400 font-bold transition-all">Banking</Link>
                    <span>›</span>
                    <span className="text-white font-bold">RBI Grade B 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* Hero Info Section */}
                        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Landmark className="w-4 h-4" /> Apex Bank Series
                                </div>

                                <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                    RBI Grade B 2026 <br /> Master Mock Series
                                </h1>

                                <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed max-w-xl">
                                    The most prestigious post in the Indian banking system. master Phase 1 and 2 with our comprehensive simulated test engine.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 mb-10 text-sm font-bold">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                                        4.9/5 <span className="text-slate-500 font-medium text-xs">(8k+ Students)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <Users className="w-5 h-5 text-amber-400" />
                                        45,000+ Enrolled
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-center">
                                    {[
                                        { label: "Tests", val: "75+", icon: Target, color: "text-amber-400" },
                                        { label: "Phase 2", val: "INCLUDED", icon: Zap, color: "text-blue-400" },
                                        { label: "GA Focus", val: "80 Qs", icon: BookMarked, color: "text-emerald-400" },
                                        { label: "Rank", val: "GR-B", icon: Award, color: "text-purple-400" }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 transition-colors hover:border-amber-500/30">
                                            <stat.icon className={`w-7 h-7 ${stat.color} mx-auto mb-2`} />
                                            <div className="font-black text-white text-xl">{stat.val}</div>
                                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Link href="/dashboard/test-series/rbi-grade-b" className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-black font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg shadow-lg active:scale-95">
                                        <Play className="w-5 h-5 fill-black" /> Start Free Test
                                    </Link>
                                    <Link href="/government-exams/banking/rbi-grade-b/schedule" className="px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                                        <Calendar className="w-5 h-5 text-slate-500" /> Exam Roadmap
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Test Breakdown */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-8 border-b border-slate-800 bg-slate-950/50">
                                <h2 className="text-2xl font-black text-white tracking-tight">Phase Transition</h2>
                                <p className="text-slate-400 mt-1 font-medium">Expertly crafted Phase 1 & 2 simulation training.</p>
                            </div>

                            <div className="divide-y divide-slate-800/50">
                                {testBreakdown.map((category) => (
                                    <div key={category.id}>
                                        <button
                                            onClick={() => setActiveAccordion(activeAccordion === category.id ? "" : category.id)}
                                            className={`w-full text-left p-6 md:p-8 flex items-center justify-between transition-all ${activeAccordion === category.id ? 'bg-amber-500/5' : 'hover:bg-slate-800/50'}`}
                                        >
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
                                                <div className="flex items-center gap-4 mt-3">
                                                    <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider bg-slate-950 px-2 py-1 rounded">
                                                        <BookOpen className="w-3.5 h-3.5" /> {category.testCount} Tests
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={`w-10 h-10 rounded-xl border border-slate-700 flex items-center justify-center transition-transform duration-300 ${activeAccordion === category.id ? 'rotate-180 bg-amber-600 border-amber-500 text-black' : 'bg-slate-950 text-slate-500'}`}>
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </button>

                                        {activeAccordion === category.id && (
                                            <div className="p-6 md:p-8 bg-slate-950/20 border-t border-slate-800/50 animate-in fade-in duration-300">
                                                <p className="text-sm md:text-base text-slate-400 mb-8 font-medium leading-relaxed bg-slate-900/50 p-6 rounded-2xl border-l-4 border-amber-600">
                                                    {category.desc}
                                                </p>

                                                <div className="space-y-4">
                                                    {category.tests.map((test, idx) => (
                                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-amber-500/30 transition-all gap-6 group">
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-3">
                                                                    {test.isFree ? (
                                                                        <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded">FREE</span>
                                                                    ) : (
                                                                        <Lock className="w-3.5 h-3.5 text-slate-600" />
                                                                    )}
                                                                    <h4 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors uppercase tracking-tight">{test.name}</h4>
                                                                </div>
                                                                <div className="flex items-center gap-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                                                    <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> {test.q} Qs</span>
                                                                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> {test.m} Marks</span>
                                                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {test.time}</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {test.isFree ? (
                                                                    <Link href="/dashboard/test-series/rbi-grade-b" className="w-full sm:w-auto px-6 py-3 bg-amber-600 hover:bg-amber-500 text-black font-black rounded-xl transition-all flex items-center justify-center text-sm shadow-md active:scale-95 uppercase tracking-widest">
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
                            <h2 className="text-2xl font-black text-white mb-8 tracking-tight">Precision Engineering</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { t: "Psychometric Radar", d: "RBI evaluates behavioral consistency. Our mock Review includes a psychological profile score.", i: ShieldCheck, c: "text-blue-400", bg: "bg-blue-500/10" },
                                    { t: "Predictive AI", d: "We utilize historical trends to predict the likely 'toughness' of upcoming exam slots.", i: TrendingUp, c: "text-amber-500", bg: "bg-amber-500/10" },
                                    { t: "Quant Mastery", d: "1000+ extreme level DI sets focusing on Economy and missing variables.", i: Calculator, c: "text-purple-400", bg: "bg-purple-500/10" }
                                ].map((feat, i) => (
                                    <div key={i} className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group">
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
                            <div className="bg-amber-600 rounded-3xl p-8 text-black shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000"></div>

                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                    Apex Selection Rate
                                </div>

                                <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight leading-tight uppercase">RBI Grade B Elite Pass</h3>
                                <p className="text-amber-950 mb-8 font-medium leading-relaxed opacity-90">The ultimate simulation training for serious Grade B Officer aspirants.</p>

                                <div className="space-y-4 mb-8">
                                    <div className="p-5 bg-black/10 rounded-2xl border border-black/10 backdrop-blur-sm group/plan hover:bg-black/20 transition-all cursor-pointer">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-xs font-bold uppercase tracking-widest text-black/60">Full Season Pass</span>
                                            <span className="px-2 py-0.5 bg-black text-white text-[9px] font-black rounded uppercase">POPULAR</span>
                                        </div>
                                        <div className="flex justify-between items-baseline">
                                            <span className="text-3xl font-black">₹1299</span>
                                            <span className="text-sm font-bold opacity-50 line-through">₹2,999</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/checkout?plan=rbi-pass" className="w-full py-4 bg-black text-white font-black rounded-xl flex items-center justify-center gap-2 text-lg shadow-lg active:scale-95 transition-all text-center">
                                    Get Elite Access <ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-lg relative overflow-hidden group">
                                <Users className="w-10 h-10 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <div className="text-3xl font-black text-white tracking-tight">45,000+</div>
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
                                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-amber-500' : ''}`} />
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

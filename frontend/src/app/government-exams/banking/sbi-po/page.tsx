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
        id: "prelims-sbi",
        title: "SBI PO 2026 Prelims Elite Mocks",
        desc: "Strictly adaptive mocks. When you score high, the next test gets tougher, matching SBI's historic unpredictability.",
        testCount: 30,
        freeCount: 2,
        tests: [
            { name: "SBI PO Prelims Free Mock 1", q: 100, m: 100, time: "60 Mins", isFree: true },
            { name: "SBI PO Prelims Free Mock 2", q: 100, m: 100, time: "60 Mins", isFree: true },
            { name: "SBI PO Prelims Elite Mock 3", q: 100, m: 100, time: "60 Mins", isFree: false },
        ]
    },
    {
        id: "mains-sbi",
        title: "SBI PO 2026 Mains Extreme Mocks",
        desc: "The toughest banking mocks in India. Includes 3-variable puzzles and economy-based data interpretation.",
        testCount: 15,
        freeCount: 1,
        tests: [
            { name: "SBI PO Mains Full Mock 1", q: 157, m: 250, time: "210 Mins", isFree: true },
            { name: "SBI PO Mains Full Mock 2", q: 157, m: 250, time: "210 Mins", isFree: false },
        ]
    },
    {
        id: "descriptive-sbi",
        title: "Descriptive AI Evaluation",
        desc: "Exclusive module for SBI PO Mains. Write essays & letters and get instant AI feedback on grammar, tone, and content.",
        testCount: 20,
        freeCount: 1,
        tests: [
            { name: "Letter Writing: Formal Banking", q: 1, m: 25, time: "15 Mins", isFree: true },
            { name: "Essay: Indian Economy 2026", q: 1, m: 25, time: "15 Mins", isFree: false },
        ]
    }
];

const faqs = [
    { q: "What makes SBI PO mocks different from IBPS PO?", a: "SBI PO mocks focus heavily on 'New Pattern' questions. We introduce unpredictable question formats that SBI is known for, ensuring you aren't surprised on exam day." },
    { q: "How does the Descriptive AI work?", a: "Our AI engine is trained on 10,000+ successful descriptive samples. It evaluates your writing for coherence, banking terminology, and vocabulary, providing a score out of 25." },
    { q: "Does this pack include Phase 3 (Interview) prep?", a: "Yes, our SBI PO Elite pack includes virtual Group Exercise (GE) modules and 1-on-1 mock interview sessions with ex-SBI GDMs." },
    { q: "Is there a refund if I don't like the quality?", a: "We provide 3 full free mocks (2 Prelims, 1 Mains) so you can experience the elite quality before purchasing. Hence, we typically don't offer refunds but ensure 100% satisfaction." }
];

export default function SBIPOPage() {
    const [activeAccordion, setActiveAccordion] = useState<string>("prelims-sbi");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-8 font-bold uppercase tracking-widest italic">
                    <Link href="/" className="hover:text-blue-400 transition-colors">Home</ Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams" className="hover:text-blue-400 transition-colors">Gov Exams</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking" className="hover:text-blue-400 transition-colors">Banking</Link>
                    <span>&rsaquo;</span>
                    <span className="text-white font-black truncate uppercase tracking-tighter italic">SBI PO 2026 Elite Series</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10 md:space-y-16">

                        {/* 1️⃣ Hero Info Section */}
                        <div className="bg-slate-900 rounded-[3rem] p-7 md:p-12 border border-blue-500/20 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.3em] shadow-lg">
                                    <Shield className="w-4 h-4" /> Elite Officer Series
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight lg:leading-[0.8] uppercase italic underline decoration-blue-500/20 decoration-8 underline-offset-4">
                                    SBI PO 2026 <br /> EXTREME MOCKS
                                </h1>

                                <p className="text-lg md:text-2xl text-slate-400 mb-10 font-bold leading-relaxed max-w-2xl italic">
                                    Prepare for the most difficult banking exam in India with simulation modules that are 20% tougher than the actual exam.
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-10 mb-12 text-sm font-black uppercase tracking-[0.2em] italic">
                                    <div className="flex items-center gap-3 text-slate-200 group/stat">
                                        <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                                        4.9/5 <span className="text-slate-600 font-black text-xs">(12k+ Elite Reviews)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-200 group/stat">
                                        <Users className="w-6 h-6 text-blue-500" />
                                        1.2L+ Enrolled
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12">
                                    {[
                                        { label: "Elite Mocks", val: "150+", icon: Target, color: "text-blue-400" },
                                        { label: "AI Review", val: "ENABLED", icon: Zap, color: "text-amber-400" },
                                        { label: "Bilingual", val: "YES", icon: Languages, color: "text-purple-400" },
                                        { label: "Scale-1", val: "OFFICER", icon: Landmark, color: "text-sky-400" }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex flex-col items-center justify-center p-6 bg-slate-950/70 rounded-[2rem] border border-slate-800 hover:border-blue-500/40 transition-all group/item shadow-2xl">
                                            <stat.icon className={`w-7 h-7 md:w-9 md:h-9 ${stat.color} mb-3 group-hover/item:scale-110 transition-transform`} />
                                            <span className="font-black text-xl md:text-2xl text-white tracking-widest">{stat.val}</span>
                                            <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest mt-2">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-5">
                                    <Link href="/dashboard/test-series/sbi-po" className="w-full sm:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl md:rounded-[1.5rem] transition-all flex items-center justify-center gap-4 text-xl md:text-2xl shadow-[0_15px_50px_rgba(37,99,235,0.3)] active:scale-95 uppercase tracking-[0.2em] border-b-4 border-blue-900 leading-none">
                                        <Play className="w-6 h-6 fill-white" /> Start Free
                                    </Link>
                                    <Link href="/government-exams/banking/sbi-po/schedule" className="w-full sm:w-auto px-12 py-6 bg-slate-950 border-2 border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-black rounded-2xl md:rounded-[1.5rem] transition-all flex items-center justify-center gap-4 text-lg active:scale-95 shadow-xl uppercase tracking-[0.2em] leading-none italic">
                                        <Calendar className="w-6 h-6 text-slate-500" /> Blueprint 2026
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Detailed Test Breakdown */}
                        <div className="bg-slate-900 rounded-[3.5rem] border border-slate-800 shadow-2xl overflow-hidden" id="test-syllabus">
                            <div className="p-8 md:p-14 border-b border-slate-800 bg-slate-900/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
                                <h2 className="text-3xl md:text-5xl font-black text-white relative z-10 leading-none uppercase tracking-tighter italic">Elite Mock Inventory</h2>
                                <p className="text-slate-500 mt-4 font-black relative z-10 text-lg md:text-2xl italic underline decoration-blue-500/20 underline-offset-8">Engineered for SBI's toughest question patterns.</p>
                            </div>

                            <div className="divide-y divide-slate-800/40">
                                {testBreakdown.map((category) => (
                                    <div key={category.id} className="bg-slate-900">
                                        <button
                                            onClick={() => setActiveAccordion(activeAccordion === category.id ? "" : category.id)}
                                            className="w-full text-left p-8 md:p-14 flex items-start md:items-center justify-between hover:bg-blue-500/5 transition-all group"
                                        >
                                            <div className="pr-6">
                                                <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-blue-400 transition-all uppercase tracking-tight italic">
                                                    {category.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-5 mt-6">
                                                    <span className="text-[11px] font-black text-slate-500 bg-slate-950 border-2 border-slate-800 px-5 py-2 rounded-xl flex items-center gap-3 uppercase tracking-widest shadow-xl">
                                                        <BookOpen className="w-5 h-5 text-blue-500" /> {category.testCount} Full Series
                                                    </span>
                                                    {category.freeCount > 0 && (
                                                        <span className="text-[11px] font-black text-emerald-400 bg-emerald-500/10 border-2 border-emerald-500/20 px-5 py-2 rounded-xl flex items-center gap-3 uppercase tracking-widest shadow-2xl shadow-emerald-500/10 italic">
                                                            <Trophy className="w-5 h-5" /> {category.freeCount} Free Trials
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl border border-slate-800 flex items-center justify-center transition-all duration-700 ${activeAccordion === category.id ? 'rotate-180 bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-600/40' : 'bg-slate-950/50 text-slate-600'}`}>
                                                <ChevronDown className="w-7 h-7" />
                                            </div>
                                        </button>

                                        {/* Content */}
                                        {activeAccordion === category.id && (
                                            <div className="px-6 md:px-14 pb-14 md:pb-20 pt-6 bg-slate-950/30 border-t border-slate-800/50 shadow-inner group">
                                                <p className="text-sm md:text-lg text-slate-500 mb-10 md:mb-14 font-black bg-slate-900/50 p-8 rounded-[2rem] border border-slate-800 leading-relaxed italic border-l-[8px] border-l-blue-600 shadow-2xl">{category.desc}</p>

                                                <div className="grid grid-cols-1 gap-6 md:gap-8">
                                                    {category.tests.map((test, idx) => (
                                                        <div key={idx} className="flex flex-col lg:flex-row lg:items-center justify-between p-8 md:p-12 bg-slate-900 border-2 border-slate-800 rounded-[3rem] hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(37,99,235,0.1)] transition-all gap-10 group/test">
                                                            <div>
                                                                <div className="flex items-center gap-5 mb-6">
                                                                    {test.isFree ? (
                                                                        <span className="px-5 py-2.5 bg-emerald-500/10 border-2 border-emerald-500/20 text-emerald-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] rounded-xl leading-none italic">Open Source</span>
                                                                    ) : (
                                                                        <span className="px-5 py-2.5 bg-slate-800 border-2 border-slate-700 text-slate-600 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] rounded-xl flex items-center gap-2.5 leading-none shadow-inner">
                                                                            <Lock className="w-4 h-4" /> Elite Access
                                                                        </span>
                                                                    )}
                                                                    <h4 className="font-black text-white text-xl md:text-3xl group-hover/test:text-blue-200 transition-all uppercase tracking-tighter leading-tight italic underline decoration-slate-800 group-hover/test:decoration-blue-500/50 underline-offset-8 decoration-2">{test.name}</h4>
                                                                </div>
                                                                <div className="flex flex-wrap items-center gap-4 md:gap-8 text-[11px] md:text-[13px] font-black text-slate-400 bg-slate-950/80 w-fit px-6 md:px-10 py-4 md:py-5 rounded-[2rem] border border-slate-800 shadow-2xl uppercase tracking-[0.15em]">
                                                                    <span className="flex items-center gap-3"><FileText className="w-5 h-5 text-blue-500" /> {test.q} Questions</span>
                                                                    <div className="hidden xs:block w-2 h-2 rounded-full bg-slate-800"></div>
                                                                    <span className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> {test.m} Marks</span>
                                                                    <div className="hidden xs:block w-2 h-2 rounded-full bg-slate-800"></div>
                                                                    <span className="flex items-center gap-3"><Clock className="w-5 h-5 text-purple-500" /> {test.time}</span>
                                                                </div>
                                                            </div>
                                                            <div className="shrink-0 w-full lg:w-auto">
                                                                {test.isFree ? (
                                                                    <Link href={`/dashboard/test-series/sbi-po`} className="w-full lg:w-auto px-10 md:px-14 py-5 md:py-7 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl md:rounded-3xl transition-all flex items-center justify-center text-lg md:text-xl shadow-2xl shadow-blue-600/40 active:scale-95 uppercase tracking-[0.25em] border-b-8 border-blue-900 leading-none italic">
                                                                        Launch Mock <ChevronRight className="w-7 h-7 ml-2" />
                                                                    </Link>
                                                                ) : (
                                                                    <a href="#pricing" className="w-full lg:w-auto px-10 md:px-14 py-5 md:py-7 bg-slate-950 text-slate-500 font-black rounded-2xl md:rounded-3xl flex items-center justify-center text-sm md:text-base hover:text-slate-200 transition-all border-4 border-slate-800 uppercase tracking-[0.25em] active:scale-95 leading-none italic">
                                                                        <Lock className="w-5 h-5 mr-3" /> Purchase Elite Pass
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {category.tests.length < category.testCount && (
                                                    <div className="mt-16 text-center pb-4">
                                                        <a href="#pricing" className="inline-flex items-center justify-center px-12 py-7 rounded-full bg-slate-800 border-4 border-slate-700 text-white font-black text-xs md:text-sm hover:bg-blue-600 hover:border-blue-500 transition-all group shadow-[0_30px_60px_rgba(0,0,0,0.5)] uppercase tracking-[0.3em]">
                                                            Unlock Elite {category.testCount} Series Core <ChevronRight className="w-6 h-6 ml-4 group-hover:translate-x-4 transition-transform shadow-sm" />
                                                        </a>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3️⃣ Extreme Features */}
                        <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-12 md:mb-16 relative z-10 uppercase tracking-tighter italic">Precision Engineering</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14 relative z-10 font-bold italic">
                                {[
                                    { t: "Psychometric Radar", d: "SBI evaluates your behavioral consistency. Our mock Review includes a psychological profile score.", i: ShieldCheck, c: "text-blue-500", bg: "bg-blue-500/10" },
                                    { t: "Predictive AI", d: "We utilize historical SBI trends to predict the likely 'toughness' of upcoming exam slots.", i: TrendingUp, c: "text-amber-500", bg: "bg-amber-500/10" },
                                    { t: "Quant Mastery", d: "1000+ extreme level DI sets focusing on Economy, missing variables, and complex probability.", i: Calculator, c: "text-purple-500", bg: "bg-purple-500/10" }
                                ].map((feat, i) => (
                                    <div key={i} className="p-10 bg-slate-950 rounded-[2.5rem] border-2 border-slate-800 hover:border-blue-500/50 transition-all group relative overflow-hidden shadow-2xl">
                                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl ${feat.bg} flex items-center justify-center mb-10 border border-white/5 group-hover:rotate-12 transition-transform ${feat.c}`}>
                                            <feat.i className="w-10 h-10 md:w-12 md:h-12 shadow-sm" />
                                        </div>
                                        <h4 className="font-black text-white mb-6 text-2xl uppercase tracking-tighter leading-[0.9]">{feat.t}</h4>
                                        <p className="text-sm md:text-base text-slate-500 leading-relaxed border-l-4 border-blue-600/30 pl-5">{feat.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN - PRICING */}
                    <div className="lg:col-span-4" id="pricing">
                        <div className="sticky top-24 space-y-10">
                            <div className="bg-slate-900 border-[5px] border-blue-600 rounded-[4rem] p-10 md:p-14 shadow-[0_0_100px_rgba(37,99,235,0.3)] relative overflow-hidden transition-all hover:scale-[1.01]">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/40 rounded-full blur-[100px] -mr-24 -mt-24 pointer-events-none transition-transform duration-1000 group-hover:scale-150"></div>

                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] px-8 py-3.5 rounded-full whitespace-nowrap shadow-[0_0_40px_rgba(37,99,235,0.5)] border-4 border-white/20 italic">
                                    ELITE CANDIDATES ONLY
                                </div>

                                <h3 className="text-4xl font-black text-white mb-6 mt-10 relative z-10 leading-[0.85] tracking-tighter uppercase italic">SBI ELITE <br /> MASTER PASS</h3>
                                <p className="text-sm md:text-base text-slate-400 font-black mb-12 relative z-10 leading-relaxed uppercase tracking-widest opacity-80 decoration-blue-500/40 underline underline-offset-8 decoration-4">The ultimate simulation training for Class-1 SBI PO aspirants.</p>

                                <div className="space-y-6 mb-14 relative z-10 font-black italic">
                                    <div className="flex justify-between items-center p-8 md:p-10 rounded-[3rem] border-4 border-blue-500 bg-blue-600/10 cursor-pointer relative overflow-hidden transition-all hover:bg-blue-600/20 group/plan shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] md:text-[10px] font-black px-6 py-2 rounded-bl-[2rem] uppercase tracking-[0.3em] leading-none italic shadow-xl">Master Pack</div>
                                        <div>
                                            <div className="font-black text-white text-xl md:text-2xl uppercase tracking-tighter">1 Year Pass</div>
                                            <div className="text-[11px] md:text-xs font-black text-slate-600 line-through mt-2 tracking-[0.4em] italic opacity-50 uppercase">₹1999</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-4xl md:text-5xl font-black text-white tracking-widest group-hover/plan:scale-110 transition-transform duration-700">₹999</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center p-8 md:p-10 rounded-[3rem] border-2 border-slate-800 hover:border-blue-500/50 bg-slate-950/70 cursor-pointer transition-all group/plan shadow-xl">
                                        <div>
                                            <div className="font-black text-slate-500 group-hover:text-white transition-all uppercase tracking-[0.25em] text-lg md:text-xl">6 Months</div>
                                            <div className="text-[11px] font-black text-slate-700 line-through mt-2 tracking-[0.4em] italic opacity-30 uppercase">₹1299</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl md:text-4xl font-black text-slate-500 group-hover:text-white transition-all tracking-[0.3em]">₹699</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6 mb-16 p-10 bg-slate-950/95 rounded-[3rem] border-2 border-slate-800 relative z-10 font-black uppercase tracking-[0.3em] text-[10px] md:text-[11px] shadow-[inset_0_30px_60px_rgba(0,0,0,0.5)] text-white/90 italic">
                                    <div className="flex items-start gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 shadow-lg" /> Descriptive AI Evaluator
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 shadow-lg" /> Group Exercise (GE) Training
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 shadow-lg" /> Career Mentorship by ex-SGM
                                    </div>
                                </div>

                                <Link href="/checkout?plan=sbi-elite" className="block w-full py-7 md:py-9 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-[2.5rem] md:rounded-[3rem] text-center transition-all text-2xl md:text-3xl shadow-[0_30px_80px_rgba(37,99,235,0.4)] active:scale-95 relative z-10 uppercase tracking-[0.3em] border-b-8 border-blue-900 leading-none italic">
                                    Go Elite
                                </Link>
                            </div>

                            {/* Trust Indicator */}
                            <div className="p-14 bg-slate-950 border-4 border-slate-900 rounded-[4rem] text-center shadow-2xl group flex flex-col items-center relative overflow-hidden">
                                <div className="absolute -bottom-10 -left-10 opacity-5 rotate-45 group-hover:rotate-0 transition-transform duration-1000"><Shield className="w-40 h-40 text-blue-600" /></div>
                                <Users className="w-16 h-16 text-blue-500 mb-8 drop-shadow-[0_0_20px_rgba(37,99,235,0.5)] group-hover:scale-125 transition-transform duration-500" />
                                <div className="text-5xl font-black text-white tracking-widest italic tabular-nums">1.25L+</div>
                                <div className="text-[11px] font-black text-slate-600 uppercase tracking-[0.4em] mt-6 pt-8 border-t border-slate-900/50 w-full italic">Elite Peer Network</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* FAQ Full Width */}
                <div className="mt-24 md:mt-40">
                    <div className="text-center mb-16 md:mb-24 relative">
                        <div className="absolute inset-0 bg-blue-600/10 blur-[150px] rounded-full marquee-blur"></div>
                        <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 relative italic">Command Center Support</h2>
                        <div className="w-32 h-3 bg-blue-600 mx-auto rounded-full relative"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-slate-900 border-4 border-slate-800 rounded-[3.5rem] overflow-hidden hover:border-blue-500/40 transition-all group shadow-2xl relative">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full p-10 md:p-14 text-left flex items-start justify-between gap-8 group/btn"
                                >
                                    <span className="text-base md:text-xl font-black text-white uppercase tracking-[0.1em] leading-snug group-hover/btn:text-blue-200 transition-colors italic border-l-4 border-blue-600 pl-6">{faq.q}</span>
                                    <div className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-700 shadow-2xl ${activeFaq === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-950 text-slate-700'}`}>
                                        <ChevronDown className="w-8 h-8" />
                                    </div>
                                </button>
                                {activeFaq === idx && (
                                    <div className="px-10 md:px-14 pb-14 md:pb-20 pt-8 text-sm md:text-lg text-slate-400 font-black leading-relaxed border-t border-slate-800/50 bg-slate-950/40 animate-in fade-in slide-in-from-top-10 italic">
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

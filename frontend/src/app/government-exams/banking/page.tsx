"use client";
import React from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, Clock,
    Trophy, ShieldCheck, Check, ChevronRight,
    Award, MonitorPlay, Languages, Building, Banknote, Shield, Landmark, Target, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function BankingExamsCategoryPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-blue-400 font-bold transition-all">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-blue-400 font-bold transition-all">Government Exams</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Banking & Insurance</span>
                </div>

                {/* Hero Section */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl mb-16 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                <Shield className="w-4 h-4" /> Trusted by 1.5L+ Aspirants
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                Complete Banking <br /> Mastery 2026
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed max-w-xl">
                                IBPS PO/Clerk, SBI & RBI – Strict sectional timings. Master speed and accuracy with the most authentic banking mocks on the web.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link href="#courses" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg shadow-lg shadow-blue-500/20 active:scale-95">
                                    Explore Packs
                                </Link>
                                <Link href="/dashboard/free-demo" className="px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-sm">
                                    Free Demo
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { t: "4.9/5", d: "Student Rating", i: Star, c: "text-amber-500", bg: "bg-amber-500/10", b: "hover:border-amber-500/50" },
                                    { t: "1.5L+", d: "Enrolled Aspirants", i: Users, c: "text-blue-400", bg: "bg-blue-500/10", b: "hover:border-blue-500/50" },
                                    { t: "400+", d: "Sectional Tests", i: Zap, c: "text-emerald-400", bg: "bg-emerald-500/10", b: "hover:border-emerald-500/50" },
                                    { t: "HIN/ENG", d: "Bilingual Support", i: Languages, c: "text-purple-400", bg: "bg-purple-500/10", b: "hover:border-purple-500/50" }
                                ].map((stat, i) => (
                                    <div key={i} className={`p-6 rounded-2xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors ${stat.b}`}>
                                        <div className={`w-14 h-14 rounded-xl ${stat.bg} ${stat.c} flex items-center justify-center mb-5 border border-white/5 shadow-lg`}>
                                            <stat.i className="w-7 h-7" />
                                        </div>
                                        <div className="text-3xl font-black text-white">{stat.t}</div>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 - Available Test Series */}
                <div id="courses" className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Available Banking Exams</h2>
                            <p className="text-lg text-slate-400 font-medium tracking-tight">Select your target cadre to access elite simulation modules.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                        {[
                            {
                                name: "IBPS PO 2026",
                                slug: "ibps-po",
                                tests: "110+ Tests",
                                desc: "Mock series tuned purely for speed and hard-level DIs/Puzzles.",
                                features: ["25 Prelims Mocks", "15 Mains Mocks", "40 Sectional Speed Tests"],
                                prices: { basic: "599", pro: "899", prem: "1199" },
                                primary: true
                            },
                            {
                                name: "IBPS Clerk 2026",
                                slug: "ibps-clerk",
                                tests: "95+ Tests",
                                desc: "Hyper-speed focused clerical exams demanding extreme accuracy.",
                                features: ["25 Prelims Mocks", "10 Mains Mocks", "40 English/Quant tests"],
                                prices: { basic: "499", pro: "699", prem: "999" },
                                primary: false
                            },
                            {
                                name: "SBI PO 2026",
                                slug: "sbi-po",
                                tests: "105+ Tests",
                                desc: "The toughest banking exam requires high-level data interpretation.",
                                features: ["20 Prelims Mocks", "15 Extreme Mains", "Descriptive Mocks"],
                                prices: { basic: "699", pro: "999", prem: "1299" },
                                primary: false
                            },
                            {
                                name: "RBI Grade B",
                                slug: "rbi-grade-b",
                                tests: "75+ Tests",
                                desc: "Central bank officer test with dedicated ESI and F&M descriptive practice.",
                                features: ["15 Phase 1 Mocks", "10 Objective+Desc.", "ESI Current News"],
                                prices: { basic: "899", pro: "1299", prem: "1699" },
                                primary: false
                            }
                        ].map((exam, i) => (
                            <div key={i} className={`bg-slate-900 border-2 ${exam.primary ? 'border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.1)]' : 'border-slate-800'} rounded-3xl p-6 lg:p-8 relative overflow-hidden group hover:border-blue-500/50 transition-all shadow-xl flex flex-col`}>
                                {exam.primary && (
                                    <div className="absolute top-0 right-6 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black rounded-b-xl uppercase tracking-widest shadow-lg">RECOMMENDED</div>
                                )}

                                <div className="flex justify-between items-start mb-4 mt-2">
                                    <h3 className="text-2xl font-black text-white tracking-tight uppercase leading-tight">{exam.name}</h3>
                                    <div className="px-2 py-1 bg-slate-950 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest">{exam.tests}</div>
                                </div>

                                <p className="text-slate-400 text-sm mb-6 font-medium tracking-tight h-10 line-clamp-2">{exam.desc}</p>

                                <div className="space-y-3 mb-8 flex-1">
                                    {exam.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-slate-300 text-xs font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex bg-slate-950/50 rounded-2xl border border-slate-800 p-3 mb-8 divide-x divide-slate-800 text-center">
                                    <div className="flex-1 px-1">
                                        <div className="text-[9px] font-bold uppercase text-slate-500 mb-1">Entry</div>
                                        <div className="text-base font-black text-white">₹{exam.prices.basic}</div>
                                    </div>
                                    <div className="flex-1 px-1 bg-blue-600/10 rounded-lg ring-1 ring-blue-500/30">
                                        <div className="text-[9px] font-black uppercase text-blue-400 mb-1">Pro</div>
                                        <div className="text-base font-black text-blue-400">₹{exam.prices.pro}</div>
                                    </div>
                                    <div className="flex-1 px-1">
                                        <div className="text-[9px] font-bold uppercase text-slate-500 mb-1">Ultra</div>
                                        <div className="text-base font-black text-white">₹{exam.prices.prem}</div>
                                    </div>
                                </div>

                                <Link href={`/government-exams/banking/${exam.slug}`} className={`w-full py-4 ${exam.primary ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300'} font-black text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg group`}>
                                    View Series <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}

                        {/* MAHA PACK CARD */}
                        <div className="md:col-span-2 lg:col-span-4 bg-gradient-to-br from-slate-900 to-blue-900/50 border-2 border-amber-500/50 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] transition-all shadow-xl flex flex-col font-sans">
                            <div className="absolute -bottom-20 -right-20 p-10 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                                <Landmark className="w-80 h-80 text-amber-500" />
                            </div>

                            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black mb-4 uppercase tracking-widest">
                                        Ultimate Vault
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">Bank Maha Pack <span className="text-amber-500">2026</span></h3>
                                    <p className="text-slate-300 text-lg mt-4 font-medium max-w-2xl leading-relaxed">Don't subscribe multiple times. Every IBPS, SBI, RBI & LIC mock is unlocked immediately for 12 months.</p>
                                </div>
                                <div className="shrink-0 flex items-center gap-4 bg-slate-950/80 p-6 rounded-2xl border border-amber-500/20 shadow-xl self-start lg:self-center">
                                    <div className="text-center">
                                        <div className="text-[10px] font-bold text-slate-500 line-through tracking-widest uppercase mb-1">Value</div>
                                        <div className="text-xl font-bold text-slate-500">₹8,999</div>
                                    </div>
                                    <div className="w-px h-10 bg-slate-800"></div>
                                    <div className="text-center">
                                        <div className="text-[10px] font-black text-emerald-400 tracking-widest uppercase mb-1">Limited Price</div>
                                        <div className="text-4xl font-black text-white tracking-tighter">₹2,499</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 relative z-10">
                                {["All IBPS Exams", "All SBI Exams", "All RBI Level", "All Insurance (LIC)"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-200 text-sm font-bold bg-slate-950/50 p-4 rounded-xl border border-white/5 shadow-sm">
                                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto relative z-10">
                                <Link href="/checkout?plan=bank-maha-pack" className="w-full py-5 bg-amber-600 hover:bg-amber-500 text-black font-black text-2xl rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-[0_15px_40px_rgba(245,158,11,0.3)] group/btn">
                                    Unlock Ultimate Banking Pack <ChevronRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 - Why Choose Xamsathi */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Why Choose Xamsathi for Banking?</h2>
                        <p className="text-lg text-slate-400 font-medium tracking-tight">Technology designed to boost your selection chances in high-pressure banking exams.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { t: "Exact IBPS Interface", d: "Experience the same sectional timing and calculator restrictions as the real exam.", i: MonitorPlay, c: "text-blue-400", bg: "bg-blue-500/10" },
                            { t: "Speed-Accuracy Radar", d: "AI-powered metrics to identify why you are losing marks under time pressure.", i: Zap, c: "text-amber-500", bg: "bg-amber-500/10" },
                            { t: "Officer Mentorship", d: "Ex-Bank Managers provide guidance on strategy and interview preparation.", i: Award, c: "text-emerald-400", bg: "bg-emerald-500/10" },
                            { t: "Sectional Analytics", d: "Detailed reports comparing your sectional scores with top-ranking aspirants.", i: Target, c: "text-purple-400", bg: "bg-purple-500/10" }
                        ].map((feat, i) => (
                            <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:border-slate-700 transition-all group">
                                <div className={`w-16 h-16 rounded-2xl ${feat.bg} border border-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                                    <feat.i className={`w-8 h-8 ${feat.c}`} />
                                </div>
                                <h4 className="text-lg font-black text-white mb-3 tracking-tight">{feat.t}</h4>
                                <p className="text-sm text-slate-400 font-medium tracking-tight leading-relaxed">{feat.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
}

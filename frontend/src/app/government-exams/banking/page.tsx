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
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">
                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-8 font-black uppercase tracking-widest italic">
                    <Link href="/" className="hover:text-indigo-400">Home</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams" className="hover:text-indigo-400">Gov Exams</Link>
                    <span>&rsaquo;</span>
                    <span className="text-white font-black">Banking & Insurance</span>
                </div>

                {/* Hero Section */}
                <div className="bg-slate-900 rounded-[3rem] p-7 md:p-14 border border-slate-800 shadow-2xl mb-16 md:mb-24 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.3em] shadow-lg">
                                <Shield className="w-4 h-4" /> Trusted by 1.5L+ Aspirants
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase italic underline decoration-indigo-600/20 decoration-8 underline-offset-8">
                                Complete Banking <br /> Mastery 2026
                            </h1>
                            <p className="text-lg md:text-2xl text-slate-400 mb-12 font-bold leading-relaxed max-w-2xl italic">
                                IBPS PO/Clerk, SBI & RBI – Strict sectional timings. Master speed and accuracy with the most authentic banking mocks on the web.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-5">
                                <Link href="#courses" className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 text-xl shadow-2xl shadow-indigo-600/30 active:scale-95 uppercase tracking-[0.2em] border-b-4 border-indigo-800 leading-none">
                                    Explore Packs
                                </Link>
                                <Link href="/dashboard/free-demo" className="w-full sm:w-auto px-10 py-5 bg-slate-950 border-2 border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-black rounded-2xl transition-all flex items-center justify-center gap-3 text-lg shadow-xl active:scale-95 leading-none italic uppercase tracking-widest">
                                    Free Demo
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                                {[
                                    { t: "4.9/5", d: "Student Rating", i: Star, c: "text-amber-500", bg: "bg-amber-500/10", b: "hover:border-amber-500/50" },
                                    { t: "1.5L+", d: "Enrolled Aspirants", i: Users, c: "text-indigo-400", bg: "bg-indigo-500/10", b: "hover:border-indigo-500/50" },
                                    { t: "400+", d: "Sectional Timing Tests", i: Zap, c: "text-emerald-400", bg: "bg-emerald-500/10", b: "hover:border-emerald-500/50" },
                                    { t: "HIN/ENG", d: "Bilingual Support", i: Languages, c: "text-purple-400", bg: "bg-purple-500/10", b: "hover:border-purple-500/50" }
                                ].map((stat, i) => (
                                    <div key={i} className={`p-8 rounded-[2.5rem] bg-slate-950/70 border border-slate-800 shadow-2xl flex flex-col items-center sm:items-start text-center sm:text-left transition-all ${stat.b} group/stat`}>
                                        <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.c} flex items-center justify-center mb-6 border border-white/5 shadow-lg group-hover/stat:scale-110 transition-transform`}>
                                            <stat.i className="w-8 h-8 md:w-9 md:h-9" />
                                        </div>
                                        <div className="text-3xl md:text-4xl font-black text-white tracking-tighter italic">{stat.t}</div>
                                        <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mt-2 group-hover/stat:text-slate-400 transition-colors uppercase italic">{stat.d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 - Available Test Series */}
                <div id="courses" className="mb-24 md:mb-32">
                    <div className="text-center md:text-left mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter italic">Command Selection 2026</h2>
                        <div className="w-24 h-2 bg-indigo-600 rounded-full md:ml-0 mx-auto"></div>
                        <p className="text-lg md:text-2xl text-slate-500 font-bold mt-6 italic">Select your targeted officer/clerical cadre to access elite simulation modules.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch font-black">

                        {[
                            {
                                name: "IBPS PO 2026",
                                slug: "ibps-po",
                                tests: "110+ Tests",
                                desc: "Probationary Officer mock series tuned purely for speed and hard-level DIs/Puzzles.",
                                features: ["25 Prelims Mocks", "15 Mains Mocks", "40 Sectional Speed Tests", "Strict 20m Timings"],
                                prices: { basic: "599", pro: "899", prem: "1199" },
                                primary: true
                            },
                            {
                                name: "IBPS Clerk 2026",
                                slug: "ibps-clerk",
                                tests: "95+ Tests",
                                desc: "Hyper-speed focused clerical exams demanding extreme accuracy on simplification / syllogs.",
                                features: ["25 Prelims Mocks", "10 Mains Mocks", "40 English/Quant tests", "State Cutoff Analytics"],
                                prices: { basic: "499", pro: "699", prem: "999" },
                                primary: false
                            },
                            {
                                name: "SBI PO 2026",
                                slug: "sbi-po",
                                tests: "105+ Tests",
                                desc: "The toughest banking exam requires high-level data interpretation and reasoning puzzles.",
                                features: ["20 Prelims Mocks", "15 Extremely Hard Mains", "Descriptive Mocks", "Current Affairs PDF"],
                                prices: { basic: "699", pro: "999", prem: "1299" },
                                primary: false
                            },
                            {
                                name: "RBI Grade B",
                                slug: "rbi-grade-b",
                                tests: "75+ Tests",
                                desc: "Crack the central bank officer test with dedicated ESI and F&M descriptive practice.",
                                features: ["15 Phase 1 Mocks", "10 Phase 2 Objective+Desc.", "ESI Current News", "Finance Mastery"],
                                prices: { basic: "899", pro: "1299", prem: "1699" },
                                primary: false
                            }
                        ].map((exam, i) => (
                            <div key={i} className={`bg-slate-900 border-2 ${exam.primary ? 'border-indigo-600 shadow-[0_0_50px_rgba(99,102,241,0.15)]' : 'border-slate-800'} rounded-[3rem] p-8 md:p-10 relative overflow-hidden group hover:border-indigo-500/50 transition-all shadow-2xl flex flex-col`}>
                                {exam.primary && (
                                    <div className="absolute top-0 right-10 px-5 py-2 bg-indigo-600 text-white text-[10px] font-black rounded-b-2xl uppercase tracking-[0.25em] shadow-xl italic">Recommended</div>
                                )}

                                <div className="flex justify-between items-start mb-6 mt-4">
                                    <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase">{exam.name}</h3>
                                    <div className="px-4 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest">{exam.tests}</div>
                                </div>

                                <p className="text-slate-500 text-sm md:text-base mb-10 leading-relaxed italic border-l-4 border-slate-800 pl-4">{exam.desc}</p>

                                <div className="grid grid-cols-1 gap-3 mb-12 flex-1">
                                    {exam.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-slate-300 text-xs md:text-sm font-black italic">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" /> {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex bg-slate-950/80 rounded-2xl border border-slate-800 p-4 mb-10 divide-x-2 divide-slate-800/50 text-center mt-auto shadow-inner group-hover:border-indigo-500/30 transition-all">
                                    <div className="flex-1 px-2">
                                        <div className="text-[10px] font-black uppercase text-slate-600 mb-1 tracking-widest">Basic</div>
                                        <div className="text-xl font-black text-white tabular-nums">₹{exam.prices.basic}</div>
                                    </div>
                                    <div className="flex-1 px-2 bg-indigo-600/5 rounded-xl">
                                        <div className="text-[10px] font-black uppercase text-indigo-400 mb-1 tracking-widest">Pro</div>
                                        <div className="text-xl font-black text-indigo-400 tabular-nums">₹{exam.prices.pro}</div>
                                    </div>
                                    <div className="flex-1 px-2">
                                        <div className="text-[10px] font-black uppercase text-slate-600 mb-1 tracking-widest">Ultra</div>
                                        <div className="text-xl font-black text-white tabular-nums">₹{exam.prices.prem}</div>
                                    </div>
                                </div>

                                <Link href={`/government-exams/banking/${exam.slug}`} className={`w-full py-5 ${exam.primary ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-950 border-2 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'} font-black text-lg rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl uppercase tracking-[0.2em] italic border-b-4 ${exam.primary ? 'border-indigo-800' : 'border-slate-900'} leading-none`}>
                                    View Series <ChevronRight className="w-6 h-6" />
                                </Link>
                            </div>
                        ))}

                        {/* MAHA PACK CARD - SPECIAL DESIGN */}
                        <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-indigo-950 border-[3px] border-indigo-600 rounded-[3.5rem] p-10 md:p-14 relative overflow-hidden group hover:shadow-[0_0_80px_rgba(99,102,241,0.25)] transition-all shadow-2xl flex flex-col font-black italic">
                            <div className="absolute -bottom-20 -right-20 p-10 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                                <Landmark className="w-80 h-80 text-indigo-400" />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                <div>
                                    <h3 className="text-3xl md:text-6xl font-black text-indigo-300 uppercase tracking-tighter leading-none">Bank Maha Pack <span className="text-xl px-4 py-2 bg-amber-500 text-black rounded-xl align-middle inline-block ml-4 shadow-xl">PRO 2026</span></h3>
                                    <p className="text-slate-400 text-lg md:text-2xl mt-6 font-bold max-w-2xl leading-relaxed">Don't subscribe multiple times. Every IBPS, SBI, RBI & LIC mock is unlocked immediately for 12 months.</p>
                                </div>
                                <div className="shrink-0 flex items-center gap-4 bg-slate-950/80 p-6 rounded-[2.5rem] border border-indigo-500/20 shadow-2xl">
                                    <div className="text-center">
                                        <div className="text-xs font-black text-slate-600 line-through tracking-widest uppercase mb-1">Total Value</div>
                                        <div className="text-2xl text-slate-500">₹8,999</div>
                                    </div>
                                    <div className="w-px h-10 bg-slate-800"></div>
                                    <div className="text-center">
                                        <div className="text-xs font-black text-emerald-400 tracking-widest uppercase mb-1">Maha Rate</div>
                                        <div className="text-4xl text-white">₹2,499</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14 relative z-10">
                                {["All IBPS Exams", "All SBI Exams", "All RBI Level", "All Insurance (LIC)"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4 text-white text-xs md:text-sm font-black bg-slate-950/60 p-5 rounded-2xl border border-indigo-500/30 hover:bg-indigo-600/10 transition-colors shadow-xl">
                                        <Trophy className="w-6 h-6 text-amber-500 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto relative z-10">
                                <Link href="/checkout?plan=bank-maha-pack" className="w-full py-7 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-2xl rounded-3xl flex items-center justify-center gap-4 transition-all active:scale-95 shadow-[0_20px_60px_rgba(99,102,241,0.4)] uppercase tracking-[0.3em] border-b-8 border-indigo-900 leading-none group/btn">
                                    Get Ultimate Access <ChevronRight className="w-8 h-8 group-hover:translate-x-4 transition-transform" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Section 3 - Comparison Table */}
                <div className="mb-24 md:mb-32">
                    <div className="text-center mb-16 px-4">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">Strategic Benchmarking</h2>
                        <p className="text-lg md:text-2xl text-slate-500 font-bold max-w-3xl mx-auto italic">Pick the intelligence tier that matches your banking ambition.</p>
                    </div>

                    <div className="bg-slate-900 border-[3px] border-slate-800 rounded-[3.5rem] overflow-hidden shadow-2xl max-w-5xl mx-auto font-black italic">
                        <div className="overflow-x-auto no-scrollbar">
                            <table className="w-full text-center border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="bg-slate-950 border-b-2 border-slate-800">
                                        <th className="p-8 text-left font-black text-slate-500 text-lg uppercase tracking-widest pl-12 italic">Intel Spec</th>
                                        <th className="p-8 font-black text-slate-500 text-lg uppercase tracking-widest">Entry</th>
                                        <th className="p-8 font-black text-indigo-400 text-lg uppercase tracking-widest bg-indigo-600/5 relative border-x-2 border-indigo-500/20">
                                            <div className="absolute top-0 inset-x-0 h-1.5 bg-indigo-500"></div>
                                            Officer Pro
                                        </th>
                                        <th className="p-8 font-black text-slate-500 text-lg uppercase tracking-widest">Legendary</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300 font-black text-sm md:text-base divide-y divide-slate-800/50">
                                    {[
                                        { f: "Full Length Mocks", b: "✓", p: "✓", u: "✓" },
                                        { f: "Sectional Speedsets", b: "✓", p: "✓", u: "✓" },
                                        { f: "Detailed AI Analysis", b: "Basic", p: "Advanced", u: "Real-time" },
                                        { f: "Video Solutions", b: "×", p: "✓", u: "✓" },
                                        { f: "Officer 1-on-1 Mentorship", b: "×", p: "×", u: "✓ (4/mo)" },
                                        { f: "Hard Copy PDFs", b: "×", p: "✓", u: "✓" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-800/30 transition-all transition-colors group">
                                            <td className="p-7 text-left pl-12 text-slate-400 font-black uppercase tracking-tight italic group-hover:text-white transition-colors">{row.f}</td>
                                            <td className="p-7 text-slate-500 uppercase">{row.b}</td>
                                            <td className="p-7 text-indigo-400 font-black uppercase bg-indigo-600/5 border-x-2 border-indigo-500/10 shadow-inner group-hover:bg-indigo-600/10 transition-all">{row.p}</td>
                                            <td className="p-7 text-slate-500 uppercase">{row.u}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

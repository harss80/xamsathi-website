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
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-black text-white mb-3">Target Your Banking Exam</h2>
                            <p className="text-lg text-slate-400 font-medium tracking-tight">Select your targeted bank exam to access elite simulation modules and latest pattern test series.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                id: "ibps-po",
                                title: "IBPS PO 2026",
                                desc: "Mock series tuned purely for speed and hard-level DIs/Puzzles.",
                                tests: 110,
                                users: "85k",
                                tag: "Recommended",
                                link: "/government-exams/banking/ibps-po"
                            },
                            {
                                id: "ibps-clerk",
                                title: "IBPS Clerk 2026",
                                desc: "Hyper-speed focused clerical exams demanding extreme accuracy.",
                                tests: 95,
                                users: "1.2 Lakh",
                                link: "/government-exams/banking/ibps-clerk"
                            },
                            {
                                id: "sbi-po",
                                title: "SBI PO 2026",
                                desc: "The toughest banking exam requires high-level data interpretation.",
                                tests: 105,
                                users: "75k",
                                tag: "Elite",
                                link: "/government-exams/banking/sbi-po"
                            },
                            {
                                id: "rbi-grade-b",
                                title: "RBI Grade B",
                                desc: "Central bank officer test with dedicated ESI and F&M descriptive practice.",
                                tests: 75,
                                users: "45k",
                                tag: "Prestige",
                                link: "/government-exams/banking/rbi-grade-b"
                            },
                        ].map((exam) => (
                            <Link href={exam.link} key={exam.id} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-800/30 transition-all duration-300 relative overflow-hidden">
                                {exam.tag && (
                                    <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-500">
                                        {exam.tag}
                                    </span>
                                )}
                                <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-slate-700">
                                    <Landmark className="w-7 h-7 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-500 transition-colors uppercase">{exam.title}</h3>
                                <p className="text-sm text-slate-400 font-medium mb-6 line-clamp-2">{exam.desc}</p>

                                <div className="mt-auto space-y-3">
                                    <div className="flex items-center gap-4 text-xs font-bold text-slate-300">
                                        <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                                            <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> {exam.tests} Tests
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                                            <Users className="w-3.5 h-3.5 text-blue-400" /> {exam.users}
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                                        <span className="text-sm font-bold text-slate-300">View Series</span>
                                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        ))}

                        {/* BANK MAHA PACK CARD - SPANS REMAINING COLS */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-blue-950/30 border border-amber-500/30 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] transition-all flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Landmark className="w-64 h-64 text-amber-500" />
                            </div>
                            <div className="max-w-xl relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black mb-4 uppercase tracking-widest">
                                    Ultimate Vault
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">Bank Maha Pack 2026</h3>
                                <p className="text-slate-300 font-medium leading-relaxed">Don't subscribe multiple times. Every IBPS, SBI, RBI & LIC mock is unlocked immediately for 12 months in one bundle.</p>
                            </div>
                            <div className="flex flex-col items-center gap-4 relative z-10 shrink-0">
                                <div className="flex flex-col items-center">
                                    <span className="text-slate-500 line-through text-sm font-bold tracking-widest uppercase">Value ₹8999</span>
                                    <span className="text-4xl font-black text-amber-400">₹2499</span>
                                </div>
                                <Link href="/checkout?plan=bank-maha-pack" className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-amber-500/30">
                                    Unlock Maha Pack <ChevronRight className="w-5 h-5" />
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

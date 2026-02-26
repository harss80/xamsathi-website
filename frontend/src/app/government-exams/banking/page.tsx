"use client";
import React from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock,
    Trophy, ShieldCheck, Check, X, ChevronRight,
    Award, MonitorPlay, Languages, Building, Banknote
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function BankingExamsCategoryPage() {
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
                    <span className="text-white font-bold">Banking & Insurance</span>
                </div>

                {/* Hero Section */}
                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl mb-16 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                <Banknote className="w-4 h-4" /> Top Ranked Test Series
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                Complete Banking Preparation 2026
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed max-w-xl">
                                IBPS PO/Clerk, SBI, RBI Grade B – Strict sectional timings. Master speed and accuracy with the most authentic banking mocks on the web.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link href="#courses" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg shadow-lg shadow-indigo-500/20 active:scale-95">
                                    Explore Bank Packs
                                </Link>
                                <Link href="#demo" className="px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-sm">
                                    Start Speed Prelims Try
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-amber-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5 border border-amber-500/20">
                                        <Star className="w-7 h-7 fill-amber-500" />
                                    </div>
                                    <div className="text-3xl font-black text-white">4.9/5</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Student Rating</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-indigo-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-5 border border-indigo-500/20">
                                        <Users className="w-7 h-7" />
                                    </div>
                                    <div className="text-3xl font-black text-white">1.5 Lakh+</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Enrolled Aspirants</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-emerald-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5 border border-emerald-500/20">
                                        <BookOpen className="w-7 h-7" />
                                    </div>
                                    <div className="text-3xl font-black text-white">400+ Tests</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Sectional Timing Support</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-purple-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-5 border border-purple-500/20">
                                        <Languages className="w-7 h-7" />
                                    </div>
                                    <div className="text-3xl font-black text-white">Eng/Hin</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Bilingual Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 - Available Test Series */}
                <div id="courses" className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-black text-white mb-2">Target Banking/Insurance</h2>
                            <p className="text-lg text-slate-400 font-medium">Select your targeted PO/Clerk exam to access specialized speed mocks.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

                        {/* IBPS PO CARD */}
                        <div className="bg-slate-900 border-2 border-indigo-500 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all shadow-xl flex flex-col">
                            <div className="absolute top-0 right-8 px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-black rounded-b-xl uppercase tracking-widest shadow-lg">HIGHLY RECOMMENDED</div>

                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">IBPS PO 2026</h3>
                                <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">110+ Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium">Probationary Officer mock series tuned purely for speed and hard-level DIs/Puzzles.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8 flex-1">
                                {["25 Prelims Mocks", "15 Mains Mocks", "40 Sectional Speed Tests", "Strict 20m Timings"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-950/50 rounded-2xl border border-slate-800 p-3 mb-8 divide-x divide-slate-800 text-center mt-auto">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Basic</div>
                                    <div className="text-lg font-black text-white">₹599</div>
                                </div>
                                <div className="flex-1 px-2 py-1 bg-indigo-600/10 rounded-lg ring-1 ring-indigo-500/30">
                                    <div className="text-[10px] font-black uppercase text-indigo-400 mb-1">Pro</div>
                                    <div className="text-lg font-black text-indigo-400">₹899</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Premium</div>
                                    <div className="text-lg font-black text-white">₹1199</div>
                                </div>
                            </div>

                            <Link href="/government-exams/banking/ibps-po" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-500/30">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* IBPS CLERK CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-xl hover:border-slate-700 transition-all shadow-xl flex flex-col">
                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">IBPS Clerk 2026</h3>
                                <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">95+ Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium">Hyper-speed focused clerical exams demanding extreme accuracy on simplification / syllogs.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8 flex-1">
                                {["25 Prelims Mocks", "10 Mains Mocks", "40 English/Quant tests", "State Cutoff Analytics"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-950/50 rounded-2xl border border-slate-800 p-3 mb-8 divide-x divide-slate-800 text-center mt-auto">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Basic</div>
                                    <div className="text-lg font-black text-slate-300">₹499</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Pro</div>
                                    <div className="text-lg font-black text-slate-300">₹699</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Premium</div>
                                    <div className="text-lg font-black text-slate-300">₹999</div>
                                </div>
                            </div>

                            <Link href="/government-exams/banking/ibps-clerk" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* SBI PO CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-xl hover:border-slate-700 transition-all shadow-xl flex flex-col">
                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">SBI PO 2026</h3>
                                <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">105+ Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium">The toughest banking exam requires high-level data interpretation and reasoning puzzles.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8 flex-1">
                                {["20 Prelims Mocks", "15 Extremely Hard Mains", "Descriptive Mocks", "Current Affairs PDF"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-950/50 rounded-2xl border border-slate-800 p-3 mb-8 divide-x divide-slate-800 text-center mt-auto">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Basic</div>
                                    <div className="text-lg font-black text-slate-300">₹699</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Pro</div>
                                    <div className="text-lg font-black text-slate-300">₹999</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Premium</div>
                                    <div className="text-lg font-black text-slate-300">₹1299</div>
                                </div>
                            </div>

                            <Link href="/government-exams/banking/sbi-po" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* RBI GRADE B CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-xl hover:border-slate-700 transition-all shadow-xl flex flex-col">
                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">RBI Grade B</h3>
                                <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">75+ Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium">Crack the central bank officer test with dedicated ESI and F&M descriptive practice.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8 flex-1">
                                {["15 Phase 1 Mocks", "10 Phase 2 Objective+Desc.", "ESI Current Affairs", "Finance Management Mocks"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-950/50 rounded-2xl border border-slate-800 p-3 mb-8 divide-x divide-slate-800 text-center mt-auto">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Basic</div>
                                    <div className="text-lg font-black text-slate-300">₹899</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Pro</div>
                                    <div className="text-lg font-black text-slate-300">₹1299</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Premium</div>
                                    <div className="text-lg font-black text-slate-300">₹1699</div>
                                </div>
                            </div>

                            <Link href="/government-exams/banking/rbi-grade-b" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* BANK MAHA PACK CARD */}
                        <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-500/30 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] transition-all shadow-xl flex flex-col">
                            <div className="absolute -bottom-10 -right-10 p-8 opacity-10">
                                <Building className="w-64 h-64 text-indigo-400" />
                            </div>

                            <div className="relative z-10 flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl lg:text-4xl font-black text-indigo-300">Bank Maha Pack <span className="text-xl px-3 py-1 bg-amber-500 text-black rounded-lg align-middle inline-block ml-2">PRO</span></h3>
                                <div className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-lg text-xs font-bold text-indigo-300">Unlimited DB</div>
                            </div>

                            <p className="text-slate-300 text-base mb-8 font-medium relative z-10 max-w-2xl">Don't buy separately! Every IBPS, SBI, RBI, and standard Insurance exam is fully open immediately inside the Bank Maha Pack for 12 months.</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 flex-1 relative z-10">
                                {["All IBPS Exams", "All SBI Exams", "All RBI Level", "All Insurance (LIC)"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-white text-xs md:text-sm font-bold bg-slate-950/40 p-3 rounded-xl border border-indigo-500/20">
                                        <Trophy className="w-5 h-5 text-amber-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-6 mt-auto relative z-10 bg-slate-950/60 backdrop-blur rounded-2xl border border-indigo-500/20 p-6">
                                <div className="flex-1 flex items-center justify-center md:justify-start gap-4">
                                    <div className="text-lg font-black text-slate-500 line-through">₹4999</div>
                                    <div className="text-4xl font-black text-indigo-400">₹2499</div>
                                    <span className="text-xs font-bold text-emerald-400 px-2 py-1 bg-emerald-500/10 rounded">50% OFF</span>
                                </div>

                                <Link href="/checkout?plan=combo&exam=bank-maha-pack" className="w-full md:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xl rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-500/30">
                                    Unlock Maha Pack <ChevronRight className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 - Comparison Table */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Compare Plan Features</h2>
                        <p className="text-lg text-slate-400 font-medium">See what is exactly included in our specific Bank mock tiers.</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-xl max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full text-center border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-slate-950 border-b border-slate-800">
                                        <th className="p-6 text-left font-bold text-slate-300 text-lg">Feature</th>
                                        <th className="p-6 font-bold text-slate-400 text-lg">Basic</th>
                                        <th className="p-6 font-black text-indigo-400 text-lg bg-indigo-500/5 relative border-x border-indigo-500/10">
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-600"></div>
                                            Pro
                                        </th>
                                        <th className="p-6 font-bold text-amber-500 text-lg">Premium</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300 font-medium tracking-wide">
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Prelims Speed Full Mocks</td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-indigo-500/5 border-x border-indigo-500/10"><Check className="w-5 h-5 text-indigo-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Mains Full Mocks (Hard Level)</td>
                                        <td className="p-6 text-slate-500 font-semibold text-sm">Limited</td>
                                        <td className="p-6 bg-indigo-500/5 text-indigo-400 font-bold border-x border-indigo-500/10">Full Access</td>
                                        <td className="p-6 text-emerald-400 font-bold">Full Access</td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Sectional 20-min Mocks</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-indigo-500/5 border-x border-indigo-500/10"><Check className="w-5 h-5 text-indigo-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Descriptive Writing Portal</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-indigo-500/5 border-x border-indigo-500/10"><Check className="w-5 h-5 text-indigo-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Bank Interview Guide PDFs</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-indigo-500/5 border-x border-indigo-500/10"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Section 4 - Why Choose Xamsathi */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-black text-white mb-4">Why Xamsathi For Banking?</h2>
                        <p className="text-lg text-slate-400 font-medium">Because banking means playing against the clock every single second.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">Strict Interface Timers</h4>
                            <p className="text-sm text-slate-400 font-medium">Auto-switching of sections at 20-minute bounds precisely mimicking IBPS/SBI interfaces.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mx-auto mb-6">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">Accuracy vs Speed Sync</h4>
                            <p className="text-sm text-slate-400 font-medium">Data modeling telling you exactly where speed forces your precision down.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6">
                                <Building className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">Extreme Level DIs</h4>
                            <p className="text-sm text-slate-400 font-medium">Mains tests carry very high-level data sufficiency checks standard for PO Mains.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">Percentile Rank</h4>
                            <p className="text-sm text-slate-400 font-medium">Focus entirely on percentile over raw score against fierce mock competition.</p>
                        </div>
                    </div>
                </div>

                {/* Section 5 - Free Demo */}
                <div id="demo">
                    <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-[0_20px_40px_rgba(79,70,229,0.2)] relative overflow-hidden max-w-5xl mx-auto border border-indigo-500/50">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-6 backdrop-blur-md shadow-sm">
                                <ShieldCheck className="w-4 h-4" /> Try It Completely Free
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                                Feel The Banking Pressure
                            </h2>
                            <p className="text-indigo-200 mb-10 font-medium leading-relaxed text-lg">
                                Take an insanely fast IBPS PO Prelims mock right now and see if you can solve standard simplification and pure arithmetic under extreme pressure.
                            </p>

                            <Link href="/dashboard/test-series/banking-ibps-po" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-indigo-700 hover:bg-slate-100 font-black rounded-xl transition-all duration-300 shadow-xl active:scale-95 text-xl">
                                <Play className="w-5 h-5 fill-indigo-700 text-indigo-700" />
                                Start Bank Mock
                            </Link>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

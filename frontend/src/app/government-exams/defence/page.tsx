"use client";
import React from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock,
    Trophy, ShieldCheck, Check, X, ChevronRight,
    Award, MonitorPlay, Languages, Shield, Crosshair
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function DefenceExamsCategoryPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-emerald-400">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-emerald-400">Government Exams</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Defence Exams</span>
                </div>

                {/* Hero Section */}
                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl mb-16 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                <Shield className="w-4 h-4" /> Armed Forces Standard
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                Defence Exam Preparation 2026
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed max-w-xl">
                                NDA, CDS, AFCAT – Rigorous testing for officer level entries. Specialized Mathematics and General Ability modules based exactly on UPSC/IAF patterns.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link href="#courses" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg shadow-lg shadow-emerald-500/20 active:scale-95">
                                    Browse Exam Options
                                </Link>
                                <Link href="#demo" className="px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-sm">
                                    Start Demo Assessment
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
                                    <div className="text-3xl font-black text-white">4.8/5</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Cadet Rating</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-emerald-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5 border border-emerald-500/20">
                                        <Users className="w-7 h-7" />
                                    </div>
                                    <div className="text-3xl font-black text-white">90k+</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Future Officers</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-blue-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-5 border border-blue-500/20">
                                        <BookOpen className="w-7 h-7" />
                                    </div>
                                    <div className="text-3xl font-black text-white">250+ Tests</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">UPSC Standards</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-purple-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-5 border border-purple-500/20">
                                        <Languages className="w-7 h-7" />
                                    </div>
                                    <div className="text-3xl font-black text-white">Eng/Hin</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Bilingual Interface</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 - Available Test Series */}
                <div id="courses" className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-black text-white mb-2">Target Defence Commissions</h2>
                            <p className="text-lg text-slate-400 font-medium">Choose your entry scheme to access hard-level UPSC and IAF mock simulators.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

                        {/* NDA CARD */}
                        <div className="bg-slate-900 border-2 border-emerald-500 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all shadow-xl flex flex-col">
                            <div className="absolute top-0 right-8 px-4 py-1.5 bg-emerald-600 text-white text-[10px] font-black rounded-b-xl uppercase tracking-widest shadow-lg">AFTER 10+2 ENTRY</div>

                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">NDA & NA 2026</h3>
                                <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">90+ Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium">Maths and GAT mocks calibrated explicitly for Class 11/12 level tough UPSC standards.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8 flex-1">
                                {["20 NDA Mathematics", "20 GAT Full Tests", "15 Previous 10-Yr Papers", "SSB Basic Guidence"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-950/50 rounded-2xl border border-slate-800 p-3 mb-8 divide-x divide-slate-800 text-center mt-auto">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Basic</div>
                                    <div className="text-lg font-black text-white">₹499</div>
                                </div>
                                <div className="flex-1 px-2 py-1 bg-emerald-600/10 rounded-lg ring-1 ring-emerald-500/30">
                                    <div className="text-[10px] font-black uppercase text-emerald-400 mb-1">Pro</div>
                                    <div className="text-lg font-black text-emerald-500">₹799</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Premium</div>
                                    <div className="text-lg font-black text-white">₹999</div>
                                </div>
                            </div>

                            <Link href="/government-exams/defence/nda" className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-500/30">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* CDS CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-xl hover:border-slate-700 transition-all shadow-xl flex flex-col">
                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">CDS Exam 2026</h3>
                                <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">85+ Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium">IMA, INA, AFA, & OTA prep covering English, GS, and tight graduation-level Mathematics.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8 flex-1">
                                {["15 Mock Sets (IMA)", "15 Mock Sets (OTA)", "IMA/OTA PYQs", "Current Affairs PDF"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-950/50 rounded-2xl border border-slate-800 p-3 mb-8 divide-x divide-slate-800 text-center mt-auto">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Basic</div>
                                    <div className="text-lg font-black text-slate-300">₹599</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Pro</div>
                                    <div className="text-lg font-black text-slate-300">₹899</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Premium</div>
                                    <div className="text-lg font-black text-slate-300">₹1099</div>
                                </div>
                            </div>

                            <Link href="/government-exams/defence/cds" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* AFCAT CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-xl hover:border-slate-700 transition-all shadow-xl flex flex-col">
                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">AFCAT 2026</h3>
                                <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">75+ Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium">Join the Air Force. Rapid speed mock suite matching CDAC testing interface perfectly.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8 flex-1">
                                {["20 Full Length Mocks", "30 Eng/Reasoning Tests", "Military Aptitude Mocks", "EKT Technical DB"].map((feature, i) => (
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
                                    <div className="text-lg font-black text-slate-300">₹899</div>
                                </div>
                            </div>

                            <Link href="/government-exams/defence/afcat" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* DEFENCE COMBO CARD */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all shadow-xl flex flex-col">
                            <div className="absolute -right-5 bottom-0 p-8 opacity-5">
                                <Crosshair className="w-48 h-48 text-emerald-500" />
                            </div>

                            <div className="relative z-10 flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">Defence Combo</h3>
                                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-xs font-bold text-emerald-400">All 250+ Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium relative z-10">Access all testing platforms for NDA, CDS, and AFCAT with common GS tracking tools included.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8 flex-1 relative z-10">
                                {["NDA Unlocked", "CDS Unlocked", "AFCAT Unlocked", "Save over ₹1200"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-white text-xs md:text-sm font-bold">
                                        <Trophy className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-950/80 rounded-2xl border border-slate-800 p-3 mb-8 text-center mt-auto relative z-10">
                                <div className="flex-1 px-2 py-1 flex flex-col items-center justify-center">
                                    <div className="text-lg font-black text-slate-500 line-through">₹2397</div>
                                    <div className="text-3xl font-black text-emerald-400">₹1199</div>
                                </div>
                            </div>

                            <Link href="/checkout?plan=combo&exam=defence-combo" className="relative z-10 w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                                Enroll Officers Package <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section 3 - Comparison Table */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Compare Assessment Tiers</h2>
                        <p className="text-lg text-slate-400 font-medium">Clear exact inclusions across our UPSC standard modules.</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-xl max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full text-center border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-slate-950 border-b border-slate-800">
                                        <th className="p-6 text-left font-bold text-slate-300 text-lg">Feature</th>
                                        <th className="p-6 font-bold text-slate-400 text-lg">Basic</th>
                                        <th className="p-6 font-black text-emerald-400 text-lg bg-emerald-500/5 relative border-x border-emerald-500/10">
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-600"></div>
                                            Pro
                                        </th>
                                        <th className="p-6 font-bold text-amber-500 text-lg">Premium</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300 font-medium tracking-wide">
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Standard Syllabus Mocks</td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-emerald-500/5 border-x border-emerald-500/10"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">UPSC Previous Year DB</td>
                                        <td className="p-6 text-slate-500 font-semibold text-sm">Limited</td>
                                        <td className="p-6 bg-emerald-500/5 text-emerald-400 font-bold border-x border-emerald-500/10">Full Access</td>
                                        <td className="p-6 text-emerald-400 font-bold">Full Access</td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Sectional Math/GS Target</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-emerald-500/5 border-x border-emerald-500/10"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">AFCAT Specific EKT Mocks</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-emerald-500/5 border-x border-emerald-500/10"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">SSB Basic Assessment PDF</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-emerald-500/5 border-x border-emerald-500/10"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
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
                        <h2 className="text-3xl font-black text-white mb-4">UPSC Grade Hardness Level</h2>
                        <p className="text-lg text-slate-400 font-medium">To clear physical and written logic tests for officers entry, our standard is high.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">UPSC Difficulty</h4>
                            <p className="text-sm text-slate-400 font-medium">Maths mocks use explicit statement-level difficulty as asked by UPSC exclusively.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-6">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">Military Aptitude</h4>
                            <p className="text-sm text-slate-400 font-medium">Practice OIR and specific spatial rotation / pattern identification blocks here.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">Time Simulation</h4>
                            <p className="text-sm text-slate-400 font-medium">Run full 2.5 hour marathons directly to build sit-stamina required for NDA/CDS.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">Merit Analysis</h4>
                            <p className="text-sm text-slate-400 font-medium">View whether your marks cross typical cutoffs to allow an SSB call letter possibility.</p>
                        </div>
                    </div>
                </div>

                {/* Section 5 - Free Demo */}
                <div id="demo">
                    <div className="bg-gradient-to-r from-emerald-700 to-green-900 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-[0_20px_40px_rgba(16,185,129,0.2)] relative overflow-hidden max-w-5xl mx-auto border border-emerald-500/50">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-6 backdrop-blur-md shadow-sm">
                                <ShieldCheck className="w-4 h-4" /> Try It Completely Free
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                                Assess Your Forces Readiness
                            </h2>
                            <p className="text-emerald-100 mb-10 font-medium leading-relaxed text-lg">
                                Take a strict NDA Math or AFCAT General mock test right now and discover if you meet the baseline officer cutoff marks today.
                            </p>

                            <Link href="/dashboard/test-series/defence-nda" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-emerald-800 hover:bg-slate-100 font-black rounded-xl transition-all duration-300 shadow-xl active:scale-95 text-xl">
                                <Play className="w-5 h-5 fill-emerald-800 text-emerald-800" />
                                Start Cadet Mock Test
                            </Link>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

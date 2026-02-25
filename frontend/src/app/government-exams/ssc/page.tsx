"use client";
import React from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock,
    Trophy, ShieldCheck, Check, X, FileText, ChevronRight, Settings,
    Award, MonitorPlay, Languages
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function SSCExamsCategoryPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-blue-400">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-blue-400">Government Exams</Link>
                    <span>›</span>
                    <span className="text-white font-bold">SSC Exams</span>
                </div>

                {/* Hero Section */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl mb-16 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                <Trophy className="w-4 h-4" /> Comprehensive Study Material
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                Complete SSC Test Series 2026
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed max-w-xl">
                                CGL, CHSL, MTS, CPO – One-stop preparation with the latest TCS pattern mock tests, previous year papers, and detailed solutions.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link href="#courses" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg shadow-lg shadow-blue-500/20 active:scale-95">
                                    Continue to Courses
                                </Link>
                                <Link href="#demo" className="px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-sm">
                                    Start Free Demo Test
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-amber-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5 border border-amber-500/20">
                                        <Star className="w-7 h-7 fill-amber-500" />
                                    </div>
                                    <div className="text-3xl font-black text-white">4.8/5</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Student Rating</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-blue-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-5 border border-blue-500/20">
                                        <Users className="w-7 h-7" />
                                    </div>
                                    <div className="text-3xl font-black text-white">1.2 Lakh+</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Enrolled Students</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-emerald-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5 border border-emerald-500/20">
                                        <BookOpen className="w-7 h-7" />
                                    </div>
                                    <div className="text-3xl font-black text-white">450+ Tests</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Latest Target Pattern</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-purple-500/50">
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

                {/* Section 2 - Available SSC Test Series */}
                <div id="courses" className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-black text-white mb-2">Available SSC Exams</h2>
                            <p className="text-lg text-slate-400 font-medium">Select your target exam to explore mock tests and chapter tests.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* SSC CGL CARD */}
                        <div className="bg-slate-900 border-2 border-blue-500 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all shadow-xl">
                            <div className="absolute top-0 right-8 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black rounded-b-xl uppercase tracking-widest shadow-lg">MOST POPULAR</div>

                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">SSC CGL 2026</h3>
                                <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">70 Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium">Tier-1 & Tier-2 complete preparation package for all SSC CGL posts.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {["20 Full Length Mocks", "35 Sectional Tests", "15 Previous Papers", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-950/50 rounded-2xl border border-slate-800 p-3 mb-8 divide-x divide-slate-800 text-center">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Basic</div>
                                    <div className="text-lg font-black text-white">₹499</div>
                                </div>
                                <div className="flex-1 px-2 py-1 bg-blue-600/10 rounded-lg ring-1 ring-blue-500/30">
                                    <div className="text-[10px] font-black uppercase text-blue-400 mb-1">Pro</div>
                                    <div className="text-lg font-black text-blue-400">₹799</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Premium</div>
                                    <div className="text-lg font-black text-white">₹999</div>
                                </div>
                            </div>

                            <Link href="/government-exams/ssc/ssc-cgl" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-500/30">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* SSC CHSL CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-xl hover:border-slate-700 transition-all shadow-xl">
                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">SSC CHSL 2026</h3>
                                <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">50 Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium">Complete mock series for LDC, JSA, PA, SA, and DEO posts.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {["15 Full Length Mocks", "25 Sectional Tests", "10 Previous Papers", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-950/50 rounded-2xl border border-slate-800 p-3 mb-8 divide-x divide-slate-800 text-center">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Basic</div>
                                    <div className="text-lg font-black text-slate-300">₹399</div>
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

                            <Link href="/government-exams/ssc/ssc-chsl" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* SSC MTS CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-xl hover:border-slate-700 transition-all shadow-xl">
                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">SSC MTS 2026</h3>
                                <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">38 Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium">Focused mock test pack designed specifically for MTS levels.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {["10 Full Length Mocks", "20 Sectional Tests", "8 Previous Papers", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-950/50 rounded-2xl border border-slate-800 p-3 mb-8 divide-x divide-slate-800 text-center">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Basic</div>
                                    <div className="text-lg font-black text-slate-300">₹299</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Pro</div>
                                    <div className="text-lg font-black text-slate-300">₹599</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Premium</div>
                                    <div className="text-lg font-black text-slate-300">₹799</div>
                                </div>
                            </div>

                            <Link href="/government-exams/ssc/ssc-mts" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* SSC CPO CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-xl hover:border-slate-700 transition-all shadow-xl">
                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-3xl font-black text-white">SSC CPO 2026</h3>
                                <div className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">52 Tests</div>
                            </div>

                            <p className="text-slate-400 text-sm mb-8 font-medium">Targeted tests for Sub-Inspector in Delhi Police & CAPFs.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {["15 Full Length Mocks", "25 Sectional Tests", "12 Previous Papers", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-950/50 rounded-2xl border border-slate-800 p-3 mb-8 divide-x divide-slate-800 text-center">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Basic</div>
                                    <div className="text-lg font-black text-slate-300">₹499</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Pro</div>
                                    <div className="text-lg font-black text-slate-300">₹799</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-1">Premium</div>
                                    <div className="text-lg font-black text-slate-300">₹999</div>
                                </div>
                            </div>

                            <Link href="/government-exams/ssc/ssc-cpo" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section 3 - Comparison Table */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Compare Plan Features</h2>
                        <p className="text-lg text-slate-400 font-medium">See what is included in Basic, Pro, and Premium tiers across all SSC exams.</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full text-center border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-slate-950 border-b border-slate-800">
                                        <th className="p-6 text-left font-bold text-slate-300 text-lg">Feature</th>
                                        <th className="p-6 font-bold text-slate-400 text-lg">Basic</th>
                                        <th className="p-6 font-black text-blue-400 text-lg bg-blue-500/10 relative border-x border-blue-500/20">
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>
                                            Pro
                                        </th>
                                        <th className="p-6 font-bold text-amber-500 text-lg">Premium</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300 font-medium tracking-wide">
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Full Length Mocks</td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-blue-500/5 border-x border-blue-500/10"><Check className="w-5 h-5 text-blue-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Sectional & Chapter Tests</td>
                                        <td className="p-6 text-slate-500 font-semibold text-sm">Limited</td>
                                        <td className="p-6 bg-blue-500/5 text-blue-400 font-bold border-x border-blue-500/10">Full Access</td>
                                        <td className="p-6 text-emerald-400 font-bold">Full Access</td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Previous Year Papers</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-blue-500/5 border-x border-blue-500/10"><Check className="w-5 h-5 text-blue-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">All India Rank & Percentile</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-blue-500/5 border-x border-blue-500/10"><Check className="w-5 h-5 text-blue-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">PDF Reports & Extended Validity</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-blue-500/5 border-x border-blue-500/10"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
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
                        <h2 className="text-3xl font-black text-white mb-4">Why Choose Xamsathi?</h2>
                        <p className="text-lg text-slate-400 font-medium">Technology designed to boost your selection chances.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-6">
                                <MonitorPlay className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">Real Exam Pattern</h4>
                            <p className="text-sm text-slate-400 font-medium">Exact replica of TCS interface for realistic practice.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-6">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">Smart Analysis</h4>
                            <p className="text-sm text-slate-400 font-medium">Deep performance metrics on every question.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">Instant Results</h4>
                            <p className="text-sm text-slate-400 font-medium">Know your score and detailed solutions right after submission.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">All India Rank</h4>
                            <p className="text-sm text-slate-400 font-medium">See where you stand among thousands of peers.</p>
                        </div>
                    </div>
                </div>

                {/* Section 5 - Free Demo */}
                <div id="demo">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-[0_20px_40px_rgba(37,99,235,0.2)] relative overflow-hidden max-w-5xl mx-auto border border-blue-500/50">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-6 backdrop-blur-md shadow-sm">
                                <ShieldCheck className="w-4 h-4" /> Zero Commitment Required
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                                Take a Free SSC Demo Test
                            </h2>
                            <p className="text-blue-100 mb-10 font-medium leading-relaxed text-lg">
                                Experience the exact exam interface, tricky TCS pattern questions, and detailed analytics entirely for free without adding a card.
                            </p>

                            <Link href="/dashboard/test-series/ssc-cgl" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-blue-700 hover:bg-slate-100 font-black rounded-xl transition-all duration-300 shadow-xl active:scale-95 text-xl">
                                <Play className="w-5 h-5 fill-blue-700 text-blue-700" />
                                Start Free Test Now
                            </Link>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

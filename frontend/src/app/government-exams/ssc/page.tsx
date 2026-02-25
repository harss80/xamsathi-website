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
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-blue-600">Government Exams</Link>
                    <span>›</span>
                    <span className="text-slate-900 font-bold">SSC Exams</span>
                </div>

                {/* Hero Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm mb-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/80 rounded-full blur-3xl -mr-20 -mt-20"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-5 uppercase tracking-wider">
                                <Trophy className="w-4 h-4" /> Comprehensive Study Material
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                                Complete SSC Test Series 2026
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed max-w-xl">
                                CGL, CHSL, MTS, CPO – One-stop preparation with the latest TCS pattern mock tests, previous year papers, and detailed solutions.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link href="#courses" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg shadow-[0_8px_20px_rgb(37,99,235,0.25)] active:scale-95">
                                    Continue to Courses
                                </Link>
                                <Link href="#demo" className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-sm">
                                    Start Free Demo Test
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-amber-200">
                                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mb-4 border border-amber-100">
                                        <Star className="w-6 h-6 fill-amber-500" />
                                    </div>
                                    <div className="text-2xl font-black text-slate-900">4.8/5</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Student Rating</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-blue-200">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4 border border-blue-100">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div className="text-2xl font-black text-slate-900">1.2 Lakh+</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Enrolled Students</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-emerald-200">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-100">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div className="text-2xl font-black text-slate-900">450+ Tests</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Latest Target Pattern</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-purple-200">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center mb-4 border border-purple-100">
                                        <Languages className="w-6 h-6" />
                                    </div>
                                    <div className="text-2xl font-black text-slate-900">Eng/Hin</div>
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
                            <h2 className="text-3xl font-black text-slate-900 mb-2">Available SSC Exams</h2>
                            <p className="text-lg text-slate-600 font-medium">Select your target exam to explore mock tests and chapter tests.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* SSC CGL CARD */}
                        <div className="bg-white border-2 border-blue-500 rounded-3xl p-8 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(37,99,235,0.1)] transition-all shadow-sm">
                            <div className="absolute top-0 right-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-black rounded-b-lg uppercase tracking-widest shadow-sm">MOST POPULAR</div>

                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-2xl font-black text-slate-900">SSC CGL 2026</h3>
                                <div className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">70 Tests</div>
                            </div>

                            <p className="text-slate-600 text-sm mb-6 font-medium">Tier-1 & Tier-2 complete preparation package for all SSC CGL posts.</p>

                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {["20 Full Length Mocks", "35 Sectional Tests", "15 Previous Papers", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-600 text-xs font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-50 rounded-xl border border-slate-200 p-2 mb-8 divide-x divide-slate-200 text-center">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Basic</div>
                                    <div className="text-base font-black text-slate-700">₹499</div>
                                </div>
                                <div className="flex-1 px-2 py-1 bg-blue-50/70 rounded-md ring-1 ring-blue-100">
                                    <div className="text-[10px] font-black uppercase text-blue-600 mb-0.5">Pro</div>
                                    <div className="text-base font-black text-blue-700">₹799</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Premium</div>
                                    <div className="text-base font-black text-slate-700">₹999</div>
                                </div>
                            </div>

                            <Link href="/government-exams/ssc/ssc-cgl" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md shadow-blue-500/20">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* SSC CHSL CARD */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl hover:border-slate-300 transition-all shadow-sm">
                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-2xl font-black text-slate-900">SSC CHSL 2026</h3>
                                <div className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">50 Tests</div>
                            </div>

                            <p className="text-slate-600 text-sm mb-6 font-medium">Complete mock series for LDC, JSA, PA, SA, and DEO posts.</p>

                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {["15 Full Length Mocks", "25 Sectional Tests", "10 Previous Papers", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-600 text-xs font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-50 rounded-xl border border-slate-200 p-2 mb-8 divide-x divide-slate-200 text-center">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Basic</div>
                                    <div className="text-base font-black text-slate-700">₹399</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Pro</div>
                                    <div className="text-base font-black text-slate-700">₹699</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Premium</div>
                                    <div className="text-base font-black text-slate-700">₹899</div>
                                </div>
                            </div>

                            <Link href="/government-exams/ssc/ssc-chsl" className="w-full py-4 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-700 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* SSC MTS CARD */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl hover:border-slate-300 transition-all shadow-sm">
                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-2xl font-black text-slate-900">SSC MTS 2026</h3>
                                <div className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">38 Tests</div>
                            </div>

                            <p className="text-slate-600 text-sm mb-6 font-medium">Focused mock test pack designed specifically for MTS levels.</p>

                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {["10 Full Length Mocks", "20 Sectional Tests", "8 Previous Papers", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-600 text-xs font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-50 rounded-xl border border-slate-200 p-2 mb-8 divide-x divide-slate-200 text-center">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Basic</div>
                                    <div className="text-base font-black text-slate-700">₹299</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Pro</div>
                                    <div className="text-base font-black text-slate-700">₹599</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Premium</div>
                                    <div className="text-base font-black text-slate-700">₹799</div>
                                </div>
                            </div>

                            <Link href="/government-exams/ssc/ssc-mts" className="w-full py-4 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-700 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* SSC CPO CARD */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl hover:border-slate-300 transition-all shadow-sm">
                            <div className="flex justify-between items-start mb-4 mt-2">
                                <h3 className="text-2xl font-black text-slate-900">SSC CPO 2026</h3>
                                <div className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">52 Tests</div>
                            </div>

                            <p className="text-slate-600 text-sm mb-6 font-medium">Targeted tests for Sub-Inspector in Delhi Police & CAPFs.</p>

                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {["15 Full Length Mocks", "25 Sectional Tests", "12 Previous Papers", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-600 text-xs font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex bg-slate-50 rounded-xl border border-slate-200 p-2 mb-8 divide-x divide-slate-200 text-center">
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Basic</div>
                                    <div className="text-base font-black text-slate-700">₹499</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Pro</div>
                                    <div className="text-base font-black text-slate-700">₹799</div>
                                </div>
                                <div className="flex-1 px-2 py-1">
                                    <div className="text-[10px] font-bold uppercase text-slate-500 mb-0.5">Premium</div>
                                    <div className="text-base font-black text-slate-700">₹999</div>
                                </div>
                            </div>

                            <Link href="/government-exams/ssc/ssc-cpo" className="w-full py-4 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-700 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm">
                                View Test Details <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section 3 - Comparison Table */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Compare Plan Features</h2>
                        <p className="text-lg text-slate-600 font-medium">See what is included in Basic, Pro, and Premium tiers across all SSC exams.</p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full text-center border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-6 text-left font-bold text-slate-800 text-lg">Feature</th>
                                        <th className="p-6 font-bold text-slate-600 text-lg">Basic</th>
                                        <th className="p-6 font-black text-blue-700 text-lg bg-blue-50/50 relative border-x border-blue-100">
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>
                                            Pro
                                        </th>
                                        <th className="p-6 font-bold text-amber-600 text-lg">Premium</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600 font-medium tracking-wide">
                                    <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                        <td className="p-6 text-left text-slate-800 font-bold">Full Length Mocks</td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-500 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-blue-50/20 border-x border-blue-50"><Check className="w-5 h-5 text-blue-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-500 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                        <td className="p-6 text-left text-slate-800 font-bold">Sectional & Chapter Tests</td>
                                        <td className="p-6 text-slate-400 font-semibold text-sm">Limited</td>
                                        <td className="p-6 bg-blue-50/20 text-blue-600 font-bold border-x border-blue-50">Full Access</td>
                                        <td className="p-6 text-emerald-600 font-bold">Full Access</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                        <td className="p-6 text-left text-slate-800 font-bold">Previous Year Papers</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-300 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-blue-50/20 border-x border-blue-50"><Check className="w-5 h-5 text-blue-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-500 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                        <td className="p-6 text-left text-slate-800 font-bold">All India Rank & Percentile</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-300 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-blue-50/20 border-x border-blue-50"><Check className="w-5 h-5 text-blue-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-500 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-6 text-left text-slate-800 font-bold">PDF Reports & Extended Validity</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-300 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-blue-50/20 border-x border-blue-50"><X className="w-5 h-5 text-slate-300 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-500 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Section 4 - Why Choose Xamsathi */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">Why Choose Xamsathi?</h2>
                        <p className="text-lg text-slate-600 font-medium">Technology designed to boost your selection chances.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border border-slate-200 p-8 rounded-3xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-5">
                                <MonitorPlay className="w-7 h-7" />
                            </div>
                            <h4 className="text-lg font-black text-slate-900 mb-2">Real Exam Pattern</h4>
                            <p className="text-sm text-slate-500 font-medium">Exact replica of TCS interface for realistic practice.</p>
                        </div>

                        <div className="bg-white border border-slate-200 p-8 rounded-3xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-5">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h4 className="text-lg font-black text-slate-900 mb-2">Smart Analysis</h4>
                            <p className="text-sm text-slate-500 font-medium">Deep performance metrics on every question.</p>
                        </div>

                        <div className="bg-white border border-slate-200 p-8 rounded-3xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-5">
                                <Clock className="w-7 h-7" />
                            </div>
                            <h4 className="text-lg font-black text-slate-900 mb-2">Instant Results</h4>
                            <p className="text-sm text-slate-500 font-medium">Know your score and detailed solutions right after submission.</p>
                        </div>

                        <div className="bg-white border border-slate-200 p-8 rounded-3xl text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                                <Award className="w-7 h-7" />
                            </div>
                            <h4 className="text-lg font-black text-slate-900 mb-2">All India Rank</h4>
                            <p className="text-sm text-slate-500 font-medium">See where you stand among thousands of peers.</p>
                        </div>
                    </div>
                </div>

                {/* Section 5 - Free Demo */}
                <div id="demo">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-[0_20px_40px_rgba(37,99,235,0.2)] relative overflow-hidden max-w-5xl mx-auto">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-bold mb-6 backdrop-blur-sm shadow-sm">
                                <ShieldCheck className="w-4 h-4" /> Zero Commitment Required
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                                Take a Free SSC Demo Test
                            </h2>
                            <p className="text-blue-100 mb-10 font-medium leading-relaxed text-lg">
                                Experience the exact exam interface, tricky TCS pattern questions, and detailed analytics entirely for free without adding a card.
                            </p>

                            <Link href="/dashboard/test-series/ssc-cgl" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-blue-700 hover:bg-slate-50 font-black rounded-xl transition-all duration-300 shadow-xl active:scale-95 text-xl">
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

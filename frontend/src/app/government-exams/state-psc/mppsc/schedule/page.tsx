"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, Landmark, AlertCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function MPPSCSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-orange-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-orange-400 transition-colors">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/state-psc" className="hover:text-orange-400 transition-colors">State PSC</Link>
                    <span>›</span>
                    <Link href="/government-exams/state-psc/mppsc" className="hover:text-orange-400 transition-colors">MPPSC</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Exam Schedule & Details</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ What We Cover (Our Offering Highlight) */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Landmark className="w-4 h-4" /> Comprehensive Coverage
                                </div>

                                <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                                    MPPSC 2026 Preparation Guide <br className="hidden md:block" /> Chapters, Pattern & Strategy
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    The <span className="text-white font-bold">Xamsathi MPPSC Pro Pass</span> is designed to cover the entire Madhya Pradesh Public Service Commission syllabus with a special focus on MP's history, culture, and geography.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                                            <Globe2 className="w-5 h-5 text-orange-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">MP General Knowledge</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Detailed tests on MP History, Tribes, Geography, Polity, and Forest resources which form 30%+ of the GS paper.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Calculator className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">CSAT (Paper II)</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Comprehension, Logical reasoning, and Numerical ability tests for the qualifying Paper 2.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <BookMarked className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Standard GS Topics</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">History, Geography, Polity, Economy, Science, and Environment covered through exhaustive mock sets.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <MonitorPlay className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">ICT & Static GK</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Information and Communication Technology (Unit 9) and Constitutional/Statutory Bodies (Unit 10) specialized tests.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete MPPSC Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">Complete Guide: MPPSC 2026</h2>
                                <p className="text-slate-400 mt-2 font-medium">Official dates, patterns, and eligibility criteria for Madhya Pradesh State Services.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'dates', label: 'Important Dates', icon: Calendar },
                                    { id: 'pattern', label: 'Exam Pattern', icon: FileText },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'salary', label: 'Salary & Posts', icon: Banknote },
                                    { id: 'tips', label: 'Preparation Strategy', icon: Target },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === tab.id
                                            ? "border-orange-500 text-orange-400 bg-slate-900"
                                            : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4" /> {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-6 md:p-8 space-y-12">

                                {/* Intro */}
                                <div className="prose prose-invert max-w-none">
                                    <div className="bg-orange-500/5 border border-orange-500/20 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-white mb-3">📍 What is MPPSC?</h3>
                                        <p className="text-slate-300 font-medium leading-relaxed">
                                            MPPSC (Madhya Pradesh Public Service Commission) conducts state-level competitive exams to recruit officers and professionals into various administrative and technical services under the Government of Madhya Pradesh. It’s the state equivalent of UPSC/PSC exams.
                                        </p>
                                    </div>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Calendar className="w-5 h-5 text-orange-400" /> MPPSC 2026 – Important Dates
                                    </h3>
                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                                        <p className="text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">(Official MPPSC calendar - Tentative)</p>

                                        <div className="space-y-3">
                                            {[
                                                { event: "Official Notification", date: "31 December 2025" },
                                                { event: "Application Start", date: "10 January 2026" },
                                                { event: "Application Last Date", date: "9 February 2026" },
                                                { event: "Correction Window", date: "10–16 February 2026" },
                                                { event: "Preliminary Exam", date: "26 April 2026", highlight: true },
                                                { event: "Main Examination", date: "7–12 September 2026", highlight: true },
                                                { event: "State Forest Service Main", date: "27 September 2026" },
                                            ].map((item, idx) => (
                                                <div key={idx} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border ${item.highlight ? 'bg-orange-600/10 border-orange-500/30' : 'bg-slate-900 border-slate-800'}`}>
                                                    <div className={`font-bold ${item.highlight ? 'text-orange-200' : 'text-slate-300'}`}>{item.event}</div>
                                                    <div className={`text-sm font-black mt-1 sm:mt-0 ${item.highlight ? 'text-orange-400' : 'text-white'}`}>{item.date}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-orange-400" /> Exam Pattern (Prelims)
                                    </h3>

                                    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                                        <table className="w-full text-left border-collapse min-w-[500px]">
                                            <thead>
                                                <tr className="bg-slate-900 border-b border-slate-800">
                                                    <th className="p-4 font-bold text-slate-300">Paper</th>
                                                    <th className="p-4 font-bold text-slate-300">Questions</th>
                                                    <th className="p-4 font-bold text-slate-300">Marks</th>
                                                    <th className="p-4 font-bold text-slate-300">Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-slate-400 font-medium font-semibold">
                                                <tr className="border-b border-slate-800">
                                                    <td className="p-4 text-white">General Studies (Paper 1)</td>
                                                    <td className="p-4">100</td>
                                                    <td className="p-4 text-orange-400">200 Marks</td>
                                                    <td className="p-4">2 Hours</td>
                                                </tr>
                                                <tr className="border-b border-slate-800">
                                                    <td className="p-4 text-white">General Aptitude (Paper 2)</td>
                                                    <td className="p-4">100</td>
                                                    <td className="p-4 text-orange-400">200 Marks</td>
                                                    <td className="p-4">2 Hours</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Qualifying Paper 2: 33% required</div>
                                        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-rose-500" /> No Negative Marking</div>
                                    </div>
                                </div>

                                {/* Eligibility */}
                                <div id="eligibility" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Users className="w-5 h-5 text-orange-400" /> Eligibility Criteria
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                                            <h4 className="font-bold text-white mb-2 underline underline-offset-4 decoration-orange-500/50">Educational Qualification</h4>
                                            <p className="text-sm text-slate-400 font-medium">Graduation from a recognized university in any stream.</p>
                                        </div>
                                        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                                            <h4 className="font-bold text-white mb-2 underline underline-offset-4 decoration-orange-500/50">Age Limit</h4>
                                            <p className="text-sm text-slate-400 font-medium">Minimum: 21 Years | Maximum: 40 Years (for general category non-uniform posts).</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary & Posts */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Banknote className="w-5 h-5 text-emerald-400" /> Post & Salary Structure
                                    </h3>
                                    <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-white font-bold mb-3">Group A Posts (SDM, DSP, etc.)</h4>
                                                <div className="text-2xl font-black text-orange-400">₹56,100 - ₹1,77,500</div>
                                                <p className="text-xs text-slate-500 mt-1 font-bold">Grade Pay: ₹5400</p>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-3">Group B Posts (Naib Tehsildar, etc.)</h4>
                                                <div className="text-2xl font-black text-white">₹36,200 - ₹1,14,800</div>
                                                <p className="text-xs text-slate-500 mt-1 font-bold">Grade Pay: ₹3600</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Strategy */}
                                <div id="tips" className="scroll-mt-24 p-8 bg-gradient-to-br from-orange-900/10 to-slate-900/30 border border-orange-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                                        <Target className="w-6 h-6 text-orange-400" /> MPPSC Preparation Strategy
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 font-black text-orange-400">01</div>
                                            <div>
                                                <h4 className="font-bold text-white">Focus on MP GK</h4>
                                                <p className="text-sm text-slate-400">Madhya Pradesh specific history, tribes (Unit 10 new syllabus), and geography are critical. Solve all MP GK mocks on Xamsathi.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 font-black text-orange-400">02</div>
                                            <div>
                                                <h4 className="font-bold text-white">Master ICT & Bodies</h4>
                                                <p className="text-sm text-slate-400">Information Technology (Unit 9) and Constitutional Commissions (Unit 10) are scoring units. Thoroughly practice chapter tests.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 font-black text-orange-400">03</div>
                                            <div>
                                                <h4 className="font-bold text-white">Current Affairs</h4>
                                                <p className="text-sm text-slate-400">1 year of national current affairs and specifically MP state news is necessary for at least 15-20 questions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN - STICKY ACTION CARD */}
                    <div className="lg:col-span-4 hidden md:block">
                        <div className="sticky top-24 bg-slate-900 border-2 border-orange-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Start MPPSC Journey</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">Enroll in Xamsathi Pro Pass to access premium high-yield mock tests and detailed MP analysis.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> 120+ MPSC Specific Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Unit-wise chapter coverage
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> High-yield MP GK notes integration
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/mppsc" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Try Free Mock Test
                                </Link>
                                <Link href="/government-exams/state-psc/mppsc#pricing" className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-orange-500/30 active:scale-95">
                                    Buy Pro Pass
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle,
    ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, Landmark, AlertCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function RPSCRASSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-rose-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-rose-400 transition-colors">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-rose-400 transition-colors">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/state-psc" className="hover:text-rose-400 transition-colors">State PSC</Link>
                    <span>›</span>
                    <Link href="/government-exams/state-psc/rpsc" className="hover:text-rose-400 transition-colors">RPSC RAS</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Exam Schedule & Details</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ What We Cover (Our Offering Highlight) */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-rose-500/30 shadow-[0_0_30px_rgba(225,29,72,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Target className="w-4 h-4" /> Comprehensive Coverage
                                </div>

                                <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                                    RPSC RAS 2026 Ultimate Guide <br className="hidden md:block" /> Every Topic & Pattern Explained
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    The <span className="text-white font-bold">Xamsathi RPSC Pro Pass</span> is the most detailed test series for Rajasthan's highest civil service, covering every nuance of the state's heritage and economy.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
                                            <Globe2 className="w-5 h-5 text-rose-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Rajasthan Art & Culture</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Deep dive tests on Rajasthan's forts, folk arts, literature, and festivals which are the backbone of RPSC exams.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Landmark className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Rajasthan Economy</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Specialized sets on the latest Rajasthan Economic Review, Budget, and Government Welfare Schemes.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <Calculator className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Science & Reasoning</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Comprehensive coverage of General Science, Technology, and Mental Ability as per latest RAS Prelims trends.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <BookMarked className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Indian GS & Current</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Complete coverage of Indian History, Polity, Geography and 1 year of Dynamic Current Affairs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete RPSC Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">Complete Guide: RPSC RAS 2026</h2>
                                <p className="text-slate-400 mt-2 font-medium">Important dates, exam pattern, and detailed syllabus for Rajasthan Administrative Services.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'dates', label: 'Important Dates', icon: Calendar },
                                    { id: 'pattern', label: 'Exam Pattern', icon: FileText },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'salary', label: 'Salary & Posts', icon: Banknote },
                                    { id: 'tips', label: 'Strategy', icon: Target },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === tab.id
                                            ? "border-rose-500 text-rose-400 bg-slate-900"
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
                                    <div className="bg-rose-500/5 border border-rose-500/20 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-white mb-3">📌 What is RPSC RAS?</h3>
                                        <p className="text-slate-300 font-medium leading-relaxed">
                                            RPSC RAS (Rajasthan Administrative Service) is the state civil service exam conducted by the Rajasthan Public Service Commission to recruit officers for Rajasthan Administrative Service (RAS), Rajasthan Police Service (RPS), and other subordinate services.
                                        </p>
                                    </div>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Calendar className="w-5 h-5 text-rose-400" /> RPSC RAS 2026 – Expected Dates
                                    </h3>
                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                                        <p className="text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">(Expected Dates - Final notification pending)</p>

                                        <div className="space-y-3">
                                            {[
                                                { event: "Notification Release", date: "Expected May–June 2026" },
                                                { event: "Application Window", date: "Soon after notification" },
                                                { event: "Prelims Exam Date", date: "Likely Jul–Aug 2026", highlight: true },
                                                { event: "Mains Exam Date", date: "Expected Nov–Dec 2026", highlight: true },
                                                { event: "Interview Phase", date: "Early 2027" },
                                            ].map((item, idx) => (
                                                <div key={idx} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border ${item.highlight ? 'bg-rose-600/10 border-rose-500/30' : 'bg-slate-900 border-slate-800'}`}>
                                                    <div className={`font-bold ${item.highlight ? 'text-rose-200' : 'text-slate-300'}`}>{item.event}</div>
                                                    <div className={`text-sm font-black mt-1 sm:mt-0 ${item.highlight ? 'text-rose-400' : 'text-white'}`}>{item.date}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-rose-400" /> Exam Pattern (Prelims)
                                    </h3>

                                    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                                        <table className="w-full text-left border-collapse min-w-[500px]">
                                            <thead>
                                                <tr className="bg-slate-900 border-b border-slate-800">
                                                    <th className="p-4 font-bold text-slate-300">Section</th>
                                                    <th className="p-4 font-bold text-slate-300">Questions</th>
                                                    <th className="p-4 font-bold text-slate-300">Max Marks</th>
                                                    <th className="p-4 font-bold text-slate-300">Duration</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-slate-400 font-medium font-semibold">
                                                <tr className="border-b border-slate-800">
                                                    <td className="p-4 text-white font-bold">General Knowledge & General Science</td>
                                                    <td className="p-4">150</td>
                                                    <td className="p-4 text-rose-400">200 Marks</td>
                                                    <td className="p-4">3 Hours</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2">
                                            <AlertCircle className="w-4 h-4 text-rose-500" /> 1/3 Negative Marking for wrong answers
                                        </div>
                                        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Screening test for Mains entry
                                        </div>
                                    </div>
                                </div>

                                {/* Eligibility */}
                                <div id="eligibility" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Users className="w-5 h-5 text-rose-400" /> Eligibility Criteria
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                                            <h4 className="font-bold text-white mb-2 underline underline-offset-4 decoration-rose-500/50">Educational</h4>
                                            <p className="text-sm text-slate-400 font-medium">Bachelors Degree in any stream from a recognized university. Final year students can also apply.</p>
                                        </div>
                                        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                                            <h4 className="font-bold text-white mb-2 underline underline-offset-4 decoration-rose-500/50">Age (As on notification)</h4>
                                            <p className="text-sm text-slate-400 font-medium">Min: 21 Years | Max: 40 Years. Relaxations for Reserved Categories as per State Govt rules.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary & Posts */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Banknote className="w-5 h-5 text-emerald-400" /> Post & Salary Details
                                    </h3>
                                    <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-white font-bold mb-3">State Service (RAS/RPS)</h4>
                                                <div className="text-2xl font-black text-rose-400">Pay Level 14</div>
                                                <p className="text-xs text-slate-500 mt-1 font-bold">Grade Pay: ₹5400</p>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-3">Subordinate Services</h4>
                                                <div className="text-2xl font-black text-white">Pay Level 11/12</div>
                                                <p className="text-xs text-slate-500 mt-1 font-bold">Grade Pay: ₹4200/4800</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Strategy */}
                                <div id="tips" className="scroll-mt-24 p-8 bg-gradient-to-br from-rose-900/10 to-slate-900/30 border border-rose-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                                        <Target className="w-6 h-6 text-rose-400" /> RAS Preparation Strategy
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 font-black text-rose-400">01</div>
                                            <div>
                                                <h4 className="font-bold text-white">Rajasthan Heritage & Culture</h4>
                                                <p className="text-sm text-slate-400">At least 30-40 questions come focus on Rajasthan's culture. Master this with Xamsathi's special chapter tests.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 font-black text-rose-400">02</div>
                                            <div>
                                                <h4 className="font-bold text-white">Economic Review & Current</h4>
                                                <p className="text-sm text-slate-400">The Rajasthan Economic Review is a must-read. We provide specialized factual tests covering the latest review and budget.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center shrink-0 font-black text-orange-400">03</div>
                                            <div>
                                                <h4 className="font-bold text-white">Mental Ability & Science</h4>
                                                <p className="text-sm text-slate-400">Don't ignore the 20-25 questions from Maths/Reasoning/Science. They are high scoring and help in crossing the cutoff easily.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN - STICKY ACTION CARD */}
                    <div className="lg:col-span-4 hidden md:block">
                        <div className="sticky top-24 bg-slate-900 border-2 border-rose-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(225,29,72,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Crack RPSC RAS 2026</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">Start your journey to becoming an administrative officer with Xamsathi's premium guidance.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> 150+ RPSC Specific Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Rajasthan Economic Review Mocks
                                    )</div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> State-wide real time ranks
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/rpsc-ras" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Try Free Mock Test
                                </Link>
                                <Link href="/government-exams/state-psc/rpsc#pricing" className="w-full py-4 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-rose-500/30 active:scale-95">
                                    Unlock RAS Pro Pass
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

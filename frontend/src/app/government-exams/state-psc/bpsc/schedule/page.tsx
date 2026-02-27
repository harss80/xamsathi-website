"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle,
    ChevronDown, ChevronRight,
    Globe2, BookMarked, MonitorPlay, Check, Landmark, AlertCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function BPSCSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-amber-400 transition-colors">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/state-psc" className="hover:text-amber-400 transition-colors">State PSC</Link>
                    <span>›</span>
                    <Link href="/government-exams/state-psc/bpsc" className="hover:text-amber-400 transition-colors">BPSC</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Exam Schedule & Details</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ What We Cover (Our Offering Highlight) */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Target className="w-4 h-4" /> Comprehensive Coverage
                                </div>

                                <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                                    BPSC 70th & 71st CCE Guide <br className="hidden md:block" /> Pattern, Dates & Preparation
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    The <span className="text-white font-bold">Xamsathi BPSC Pro Pass</span> delivers a complete preparation module for the Bihar Combined Competitive Examination, ensuring you're ready for the state's most prestigious services.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <Globe2 className="w-5 h-5 text-amber-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Bihar Special GK</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Special focus on Bihar History, Geography, Economy, Agriculture and Budget which accounts for a major chunk of questions.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Landmark className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">General Studies</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Exhaustive mocks on Indian History (focus on Bihar's role), Polity, Geography, and General Science.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <BookMarked className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Mental Ability</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Chapter tests on Logical Reasoning and Quantitative Aptitude for the 10-15 fixed questions in BPSC Prelims.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                                            <Target className="w-5 h-5 text-red-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Statement Questions</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Mocks strictly following the new pattern of multi-statement analytical questions introduced recently.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete BPSC Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">Complete Guide: BPSC 70th/71st</h2>
                                <p className="text-slate-400 mt-2 font-medium">Exam dates, pattern, and eligibility for Bihar Administrative Services.</p>
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
                                            ? "border-amber-500 text-amber-500 bg-slate-900"
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
                                    <div className="bg-amber-500/5 border border-amber-500/20 p-6 rounded-2xl">
                                        <h3 className="text-xl font-bold text-white mb-3">🏛️ What is BPSC CCE?</h3>
                                        <p className="text-slate-300 font-medium leading-relaxed">
                                            The BPSC Combined Competitive Examination (CCE) is the state civil services exam conducted by the Bihar Public Service Commission to recruit candidates to various Group-A and Group-B administrative and officer posts in the Bihar government, including the Bihar Administrative Service (BAS) and other civil services.
                                        </p>
                                    </div>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Calendar className="w-5 h-5 text-amber-500" /> BPSC 70th & 71st CCE Key Dates
                                    </h3>
                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 min-w-full">
                                        <div className="p-4 border-b border-slate-800 font-bold text-white bg-slate-900/50">📍 70th CCE Cycle</div>
                                        <div className="p-4 space-y-3">
                                            {[
                                                { event: "Prelims Result", date: "23 Jan 2025" },
                                                { event: "Mains Exam", date: "25–30 Apr 2025", highlight: true },
                                                { event: "Interview Phase", date: "Later in 2025" },
                                                { event: "Final Result", date: "Expected Apr–May 2026" },
                                            ].map((item, idx) => (
                                                <div key={idx} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border ${item.highlight ? 'bg-amber-600/10 border-amber-500/30' : 'bg-slate-950 border-slate-800'}`}>
                                                    <div className={`font-bold ${item.highlight ? 'text-amber-200' : 'text-slate-300'}`}>{item.event}</div>
                                                    <div className={`text-sm font-black mt-1 sm:mt-0 ${item.highlight ? 'text-amber-500' : 'text-white'}`}>{item.date}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-4 border-t border-b border-slate-800 font-bold text-white bg-slate-900/50">📍 71st CCE Cycle</div>
                                        <div className="p-4 space-y-3">
                                            {[
                                                { event: "Notification Release", date: "Expected 30 May 2025" },
                                                { event: "Prelims Exam Date", date: "Expected Sept 2025", highlight: true },
                                            ].map((item, idx) => (
                                                <div key={idx} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border ${item.highlight ? 'bg-amber-600/10 border-amber-500/30' : 'bg-slate-950 border-slate-800'}`}>
                                                    <div className={`font-bold ${item.highlight ? 'text-amber-200' : 'text-slate-300'}`}>{item.event}</div>
                                                    <div className={`text-sm font-black mt-1 sm:mt-0 ${item.highlight ? 'text-amber-500' : 'text-white'}`}>{item.date}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-amber-500" /> BPSC Prelims Exam Pattern
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
                                                    <td className="p-4 text-white font-bold">General Studies (GS)</td>
                                                    <td className="p-4">150</td>
                                                    <td className="p-4 text-amber-500">150 Marks</td>
                                                    <td className="p-4">2 Hours</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2">
                                            <AlertCircle className="w-4 h-4 text-red-500" /> Negative Marking: 0.33 Marks penalty per wrong answer
                                        </div>
                                        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Medium: Bilingual (English & Hindi)
                                        </div>
                                    </div>
                                </div>

                                {/* Eligibility */}
                                <div id="eligibility" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Users className="w-5 h-5 text-amber-500" /> Eligibility Criteria
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                                            <h4 className="font-bold text-white mb-2 underline underline-offset-4 decoration-amber-500/50">Educational</h4>
                                            <p className="text-sm text-slate-400 font-medium">Any University Degree (Graduation) in any discipline from a recognized university. No minimum percentage required.</p>
                                        </div>
                                        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                                            <h4 className="font-bold text-white mb-2 underline underline-offset-4 decoration-amber-500/50">Age (As on Aug 1st)</h4>
                                            <p className="text-sm text-slate-400 font-medium">Min: 20/21/22 Years (depending on post) | Max: 37 Years (male), 40 Years (female/OBC), 42 Years (SC/ST).</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary & Posts */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Banknote className="w-5 h-5 text-emerald-400" /> Posts & Vacancies
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800">
                                            <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
                                                <h4 className="text-white font-bold">70th CCE Total Vacancies</h4>
                                                <span className="text-2xl font-black text-amber-500">~2,035 Posts</span>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                                                <div className="p-3 bg-slate-900 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> SDM / Deputy Collector</div>
                                                <div className="p-3 bg-slate-900 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> DSP (Bihar Police Service)</div>
                                                <div className="p-3 bg-slate-900 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Block Development Officer</div>
                                                <div className="p-3 bg-slate-900 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><Check className="w-4 h-4 text-amber-500" /> Commercial Tax Officer</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Strategy */}
                                <div id="tips" className="scroll-mt-24 p-8 bg-gradient-to-br from-amber-900/10 to-slate-900/30 border border-amber-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                                        <Target className="w-6 h-6 text-amber-500" /> BPSC Preparation Strategy
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 font-black text-amber-500">01</div>
                                            <div>
                                                <h4 className="font-bold text-white">Bihar Special Dominance</h4>
                                                <p className="text-sm text-slate-400">Bihar specific History & Geography fetch around 25-30 marks. Use Xamsathi's localized chapter tests to master this.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 font-black text-amber-500">02</div>
                                            <div>
                                                <h4 className="font-bold text-white">General Science & Modern History</h4>
                                                <p className="text-sm text-slate-400">Science (30 Qs) and Modern History (25-30 Qs) are crucial. Our mocks cover NCERT and Standard reference book based questions thoroughly.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 font-black text-amber-500">03</div>
                                            <div>
                                                <h4 className="font-bold text-white">Analytical Pattern Practice</h4>
                                                <p className="text-sm text-slate-400">Since the 68th exam, BPSC has moved towards UPSC style analytical questions. Practice our Tier-2 oriented mocks for deeper conceptual clarity.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN - STICKY ACTION CARD */}
                    <div className="lg:col-span-4 hidden md:block">
                        <div className="sticky top-24 bg-slate-900 border-2 border-amber-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(245,158,11,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Secure Your BPSC Rank</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">Get the only test series built strictly for the evolving BPSC pattern with updated Bihar GK.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> 100+ BPSC Focused Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Deep Bihar GK Analytics
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Latest PYQs as mocks
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/bpsc" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Try Free Mock Test
                                </Link>
                                <Link href="/government-exams/state-psc/bpsc#pricing" className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-amber-950 font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-amber-500/30 active:scale-95">
                                    Get BPSC Pro Pass
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

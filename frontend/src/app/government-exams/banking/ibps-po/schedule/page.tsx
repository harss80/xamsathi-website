"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle,
    ChevronDown, ChevronRight, Calculator,
    ShieldCheck, Zap, MonitorPlay, Landmark, AlertCircle, BookMarked, Award, Layout, Briefcase, TrendingUp
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function IBPSPOSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    const syllabusData = [
        {
            subject: "Reasoning Ability",
            icon: BrainIcon,
            chapters: ["Puzzles (Floor, Box, Circular, Linear)", "Seating Arrangement", "Syllogism", "Coding-Decoding", "Blood Relations", "Direction & Distance", "Inequalities", "Input-Output", "Order & Ranking", "Alphanumeric Series", "Data Sufficiency", "Logical Reasoning", "Statement-Conclusion", "Cause & Effect", "Assumption", "Course of Action"]
        },
        {
            subject: "Quantitative Aptitude",
            icon: Calculator,
            chapters: ["Simplification & Approximation", "Number Series", "Quadratic Equation", "Data Interpretation (Table, Bar, Pie, Caselet)", "Profit & Loss", "Time & Work", "Time, Speed & Distance", "Simple & Compound Interest", "Ratio & Proportion", "Percentage", "Partnership", "Mixture & Alligation", "Probability", "Permutation & Combination", "Mensuration", "Average", "Boats & Streams"]
        },
        {
            subject: "English Language",
            icon: BookOpen,
            chapters: ["Reading Comprehension", "Cloze Test", "Error Detection", "Sentence Improvement", "Para Jumbles", "Fill in the Blanks", "Phrase Replacement", "Column Based Questions", "Word Swap", "Vocabulary", "Synonyms & Antonyms"]
        },
        {
            subject: "General & Banking Awareness",
            icon: Landmark,
            chapters: ["Banking Terms & RSI Functions", "Monetary Policy", "Inflation", "Union Budget", "Current Affairs (Last 6 months)", "Banking Schemes", "Financial Institutions", "Static Banking GK"]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 text-[15px]">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-indigo-400 transition-colors">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/banking" className="hover:text-indigo-400 transition-colors">Banking</Link>
                    <span>›</span>
                    <Link href="/government-exams/banking/ibps-po" className="hover:text-indigo-400 transition-colors">IBPS PO</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Complete Guide & Syllabus</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ Top Banner */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-indigo-500/30 shadow-[0_0_30px_rgba(79,70,229,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Target className="w-4 h-4" /> IBPS PO 2026 Master Guide
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                                    Everything You Need to Know <br className="hidden md:block" /> to Become a Bank PO
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    The <span className="text-white font-bold">Institute of Banking Personnel Selection</span> recruits probationary officers for 11+ participating public sector banks. This guide covers the complete ecosystem of the IBPS PO 2026 exam.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-indigo-400" />
                                        <span className="text-sm font-bold text-slate-300">Scale-1 Officer Post</span>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center gap-3">
                                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                                        <span className="text-sm font-bold text-slate-300">Fast-track Growth</span>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center gap-3">
                                        <Landmark className="w-5 h-5 text-blue-400" />
                                        <span className="text-sm font-bold text-slate-300">Participating Banks</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Detailed Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">

                            {/* Sticky Tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'dates', label: 'Exam Dates', icon: Calendar },
                                    { id: 'pattern', label: 'Pattern', icon: Layout },
                                    { id: 'syllabus', label: 'Syllabus', icon: BookMarked },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'salary', label: 'Salary', icon: Banknote },
                                    { id: 'strategy', label: 'Strategy', icon: Target },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === tab.id
                                            ? "border-indigo-500 text-indigo-400 bg-slate-900"
                                            : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4" /> {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-6 md:p-8 space-y-16">

                                {/* Section: Intro participating banks */}
                                <div id="intro" className="scroll-mt-24">
                                    <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-indigo-500 pl-4">🏦 Participating Public Sector Banks</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['PNB', 'Canara Bank', 'Bank of Baroda', 'Union Bank', 'Indian Bank', 'Bank of India', 'UCO Bank', 'IOB', 'Bank of Maharashtra', 'Central Bank', 'Punjab & Sind Bank'].map((bank) => (
                                            <span key={bank} className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-400">{bank}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Section: Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-2 mb-6">
                                        <Calendar className="w-6 h-6 text-indigo-400" /> Key Dates (Expected)
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 group hover:border-indigo-500/50 transition-all">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-slate-400 font-bold text-sm">Notification Release</span>
                                                <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-black rounded uppercase tracking-tighter">Expected</span>
                                            </div>
                                            <div className="text-xl font-black text-white">July–August 2026</div>
                                        </div>
                                        <div className="p-5 bg-indigo-600 rounded-2xl border border-indigo-500/50 shadow-[0_10px_20px_rgba(79,70,229,0.2)]">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-indigo-200 font-bold text-sm">Prelims Exam</span>
                                                <span className="px-2 py-0.5 bg-white text-indigo-600 text-[10px] font-black rounded uppercase tracking-tighter">Crucial</span>
                                            </div>
                                            <div className="text-xl font-black text-white">October 2026</div>
                                        </div>
                                        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                                            <div className="text-slate-400 font-bold text-sm mb-1">Mains Exam</div>
                                            <div className="text-xl font-black text-white">November 2026</div>
                                        </div>
                                        <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
                                            <div className="text-slate-400 font-bold text-sm mb-1">Interview Window</div>
                                            <div className="text-xl font-black text-white">Jan–Feb 2027</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Layout className="w-6 h-6 text-indigo-400" /> Exam Pattern
                                    </h3>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-lg font-bold text-indigo-400 mb-4 flex items-center gap-2">Phase 1: Prelims (Objective)</h4>
                                            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                                                <table className="w-full text-left border-collapse min-w-[500px]">
                                                    <thead>
                                                        <tr className="bg-slate-900 border-b border-slate-800 text-[13px]">
                                                            <th className="p-4 font-bold text-slate-300">Section</th>
                                                            <th className="p-4 font-bold text-slate-300">Questions</th>
                                                            <th className="p-4 font-bold text-slate-300">Marks</th>
                                                            <th className="p-4 font-bold text-slate-300">Duration</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-slate-400 font-semibold text-[14px]">
                                                        <tr className="border-b border-slate-800">
                                                            <td className="p-4 text-white">English Language</td>
                                                            <td className="p-4">30</td>
                                                            <td className="p-4">30</td>
                                                            <td className="p-4 text-indigo-400">20 Mins</td>
                                                        </tr>
                                                        <tr className="border-b border-slate-800">
                                                            <td className="p-4 text-white">Quantitative Aptitude</td>
                                                            <td className="p-4">35</td>
                                                            <td className="p-4">35</td>
                                                            <td className="p-4 text-indigo-400">20 Mins</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-4 text-white">Reasoning Ability</td>
                                                            <td className="p-4">35</td>
                                                            <td className="p-4">35</td>
                                                            <td className="p-4 text-indigo-400">20 Mins</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-indigo-400 mb-4 flex items-center gap-2">Phase 2: Mains (Obj + Desc)</h4>
                                            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                                                <table className="w-full text-left border-collapse min-w-[500px]">
                                                    <thead>
                                                        <tr className="bg-slate-900 border-b border-slate-800 text-[13px]">
                                                            <th className="p-4 font-bold text-slate-300">Section</th>
                                                            <th className="p-4 font-bold text-slate-300">Qs</th>
                                                            <th className="p-4 font-bold text-slate-300">Marks</th>
                                                            <th className="p-4 font-bold text-slate-300">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-slate-400 font-semibold text-[14px]">
                                                        <tr className="border-b border-slate-800">
                                                            <td className="p-4 text-white">Reasoning & Computer</td>
                                                            <td className="p-4">45</td>
                                                            <td className="p-4">60</td>
                                                            <td className="p-4">60 Min</td>
                                                        </tr>
                                                        <tr className="border-b border-slate-800">
                                                            <td className="p-4 text-white">Data Analysis (Quant)</td>
                                                            <td className="p-4">35</td>
                                                            <td className="p-4">60</td>
                                                            <td className="p-4">45 Min</td>
                                                        </tr>
                                                        <tr className="border-b border-slate-800">
                                                            <td className="p-4 text-white">General Economy/Banking</td>
                                                            <td className="p-4">40</td>
                                                            <td className="p-4">40</td>
                                                            <td className="p-4">35 Min</td>
                                                        </tr>
                                                        <tr className="border-b border-slate-800">
                                                            <td className="p-4 text-white">English (Obj)</td>
                                                            <td className="p-4">35</td>
                                                            <td className="p-4">40</td>
                                                            <td className="p-4">40 Min</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-4 text-white">Descriptive (Letter/Essay)</td>
                                                            <td className="p-4">2</td>
                                                            <td className="p-4 text-indigo-400">25</td>
                                                            <td className="p-4">30 Min</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-6">
                                        <div className="bg-slate-950 border border-red-500/20 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2">
                                            <AlertCircle className="w-4 h-4 text-red-500" /> Negative Marking: 0.25 on all objective papers
                                        </div>
                                        <div className="bg-slate-950 border border-indigo-500/20 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2">
                                            <MonitorPlay className="w-4 h-4 text-indigo-400" /> Sectional Cutoff applied separately
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Syllabus */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8">
                                        <BookMarked className="w-6 h-6 text-indigo-400" /> Detailed IBPS PO Syllabus
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {syllabusData.map((s, i) => (
                                            <div key={i} className="p-6 bg-slate-950 rounded-2xl border border-slate-800 group hover:border-indigo-500/30 transition-all">
                                                <div className="flex items-center gap-3 mb-5">
                                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500 transition-colors">
                                                        <s.icon className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                                                    </div>
                                                    <h4 className="font-bold text-white text-lg">{s.subject}</h4>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {s.chapters.map((chap, idx) => (
                                                        <span key={idx} className="px-2 py-1 bg-slate-900 border border-slate-800 rounded text-[11px] font-bold text-slate-400">
                                                            {chap}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Section: Eligibility */}
                                <div id="eligibility" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Users className="w-6 h-6 text-indigo-400" /> Eligibility Criteria
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-2">Academic</div>
                                            <h4 className="font-bold text-white mb-2">Educational Qualification</h4>
                                            <p className="text-sm text-slate-400 font-medium">Any Graduation degree from a recognized university. Final year students can apply if results are declared by certain date.</p>
                                        </div>
                                        <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-2">Age Window</div>
                                            <h4 className="font-bold text-white mb-2">20 – 30 Years</h4>
                                            <p className="text-sm text-slate-400 font-medium leading-relaxed">Relaxations for reserved categories: SC/ST (5Y), OBC (3Y), PwBD (10Y) as per standard norms.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Salary */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Banknote className="w-6 h-6 text-emerald-400" /> Salary Structure (Scale-1)
                                    </h3>
                                    <div className="p-8 bg-slate-950 rounded-2xl border-2 border-emerald-500/20 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-10"><Banknote className="w-24 h-24" /></div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center relative z-10">
                                            <div>
                                                <div className="text-slate-400 font-bold mb-1">In-Hand Salary</div>
                                                <div className="text-4xl font-black text-white">₹55,000 – ₹65,000</div>
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {['DA', 'HRA', 'Travel Allowance', 'Medical Benefits', 'LC Facility'].map(p => (
                                                        <span key={p} className="text-[10px] font-black uppercase px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded">{p}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
                                                    <span className="text-slate-500">Basic Pay</span>
                                                    <span className="font-bold text-white">₹36,000</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
                                                    <span className="text-slate-500">Service Group</span>
                                                    <span className="font-bold text-white">Group A (Officer)</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-500">Designation</span>
                                                    <span className="font-bold text-white">Probationary Officer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Strategy */}
                                <div id="strategy" className="scroll-mt-24 p-8 bg-gradient-to-br from-indigo-900/10 to-slate-900/30 border border-indigo-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8">
                                        <TrendingUp className="w-6 h-6 text-indigo-400" /> Winning Strategy for 2026
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            { t: "Speed & Accuracy First", d: "Prelims is all about solving 100 questions in 60 mins. Improve your calculation speed daily with speed math.", i: Zap },
                                            { t: "Data Interpretation Focus", d: "Mains Quant is heavily dependent on complex DI sets. Practice Caselets and Mixed Graphs daily.", i: Calculator },
                                            { t: "The 6-Month Current Rule", d: "IBPS focuses on the last 6 months of banking current affairs. Revise our monthly capsules specifically for this.", i: BookMarked },
                                            { t: "Mock Test Cycle", d: "Start with 1 mock every week now, increasing to 1 every 2 days once notification hits.", i: Award }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                                                    <item.i className="w-5 h-5 text-indigo-400" />
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-white mb-1">{item.t}</h5>
                                                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.d}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Action Card */}
                        <div className="sticky top-24 bg-slate-900 border-2 border-indigo-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(79,70,229,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10 leading-tight">Begin Your <br /> Bank PO Prep</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">Master the 799/- Bank Master Pass to unlock all IBPS exams + Sectional tests.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950/50 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-center gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Prelims & Mains Mocks
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Real Exam Interface
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> AI Growth Analysis
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/government-exams/banking/ibps-po" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Start Demo Mock
                                </Link>
                            </div>
                        </div>

                        {/* Promotion/Stats */}
                        <div className="p-8 bg-slate-950 border border-slate-800 rounded-3xl text-center">
                            <Users className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                            <div className="text-2xl font-black text-white">85,000+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase mt-1 tracking-widest">Aspirants Preparing Here</div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

// Sub-component for Brain icon since lucide-react Brain might not be preferred
function BrainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" />
        </svg>
    )
}

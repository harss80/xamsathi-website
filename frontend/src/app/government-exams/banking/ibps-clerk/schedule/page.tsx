"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle,
    ChevronDown, ChevronRight, Calculator,
    ShieldCheck, Zap, MonitorPlay, Landmark, AlertCircle, BookMarked, Award, Layout, Briefcase, TrendingUp, Brain, Shield, Laptop, Languages
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function IBPSClerkSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    const syllabusData = [
        {
            subject: "Reasoning Ability",
            icon: Brain,
            chapters: ["Puzzles (Floor, Box, Month)", "Seating Arrangement", "Syllogism", "Coding-Decoding", "Inequality", "Blood Relation", "Direction & Distance", "Order & Ranking", "Input-Output (Mains)", "Data Sufficiency (Mains)"]
        },
        {
            subject: "Numerical Ability",
            icon: Calculator,
            chapters: ["Simplification & Approximation", "Number Series", "Quadratic Equation", "Data Interpretation (Table, Pie, Line, Bar)", "Ratio & Proportion", "Profit & Loss", "Time & Work", "Speed, Time & Distance", "SI & CI", "Mixture & Allegation"]
        },
        {
            subject: "English Language",
            icon: BookOpen,
            chapters: ["Reading Comprehension", "Cloze Test", "Error Detection", "Para Jumbles", "Fill in the Blanks", "Sentence Improvement", "Vocabulary", "Column Matching (Mains)"]
        },
        {
            subject: "Financial Awareness",
            icon: Landmark,
            chapters: ["RBI Updates", "Banking Terms", "Monetary Policy", "Government Schemes", "Static Banking GK", "Budget 2026", "Economic Survey", "Current Affairs (6 Months)"]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-8 font-black uppercase tracking-widest italic">
                    <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking" className="hover:text-indigo-400 transition-colors">Banking</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking/ibps-clerk" className="hover:text-indigo-400 transition-colors">IBPS Clerk</Link>
                    <span>&rsaquo;</span>
                    <span className="text-white font-black truncate">Roadmap 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-12 md:space-y-20">

                        {/* Banner */}
                        <div className="bg-slate-900 rounded-[3rem] p-7 md:p-14 border border-indigo-500/20 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.3em] shadow-lg">
                                    <ShieldCheck className="w-4 h-4" /> IBPS Clerk 2026 Master Guide
                                </div>

                                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase italic underline decoration-indigo-500/30 decoration-8 underline-offset-[12px]">
                                    The Clerical <br /> Success Blueprint
                                </h1>

                                <p className="text-lg md:text-2xl text-slate-400 mb-12 font-bold leading-relaxed max-w-2xl italic">
                                    Recruiting Customer Service Associates for 11+ Public Sector Banks. The most stable gateway into a banking career for graduates.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-indigo-500/50 transition-all shadow-inner">
                                        <Briefcase className="w-6 h-6 text-indigo-400" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">Clerk Cadre</span>
                                    </div>
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-emerald-500/50 transition-all shadow-inner">
                                        <Target className="w-6 h-6 text-emerald-400" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">No Interview</span>
                                    </div>
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-blue-500/50 transition-all shadow-inner">
                                        <Landmark className="w-6 h-6 text-blue-400" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">11+ PS Banks</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Guide components */}
                        <div className="bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl overflow-hidden">

                            {/* Tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 no-scrollbar scroll-smooth p-1 sticky top-0 z-20 backdrop-blur-xl">
                                {[
                                    { id: 'dates', label: 'Timeline', icon: Calendar },
                                    { id: 'pattern', label: 'Pattern', icon: Layout },
                                    { id: 'syllabus', label: 'Syllabus', icon: BookMarked },
                                    { id: 'eligibility', label: 'Criteria', icon: Users },
                                    { id: 'salary', label: 'Pay', icon: Banknote },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-3 px-8 py-6 font-black text-[10px] md:text-[11px] uppercase tracking-[0.25em] transition-all border-b-[4px] shrink-0 ${activeTab === tab.id
                                            ? "border-indigo-500 text-indigo-400 bg-slate-900 shadow-inner"
                                            : "border-transparent text-slate-500 hover:text-slate-200"
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4" /> {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8 md:p-14 space-y-24 md:space-y-32">

                                {/* Section: Dates */}
                                <div id="dates" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Calendar className="w-9 h-9 text-indigo-400" /> Exam Timeline 2026 (Expected)
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 hover:border-indigo-500/30 transition-all font-black group shadow-inner relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-2 h-full bg-indigo-500/5 group-hover:w-full transition-all"></div>
                                            <div className="relative z-10">
                                                <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Notification</span>
                                                <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">July 2026</div>
                                            </div>
                                        </div>
                                        <div className="p-10 bg-indigo-600 rounded-[2.5rem] border border-indigo-400 shadow-[0_20px_50px_rgba(99,102,241,0.25)] relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-125 transition-transform"></div>
                                            <div className="relative z-10 font-black">
                                                <span className="text-indigo-100 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Phase 1: Prelims</span>
                                                <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">September 2026</div>
                                            </div>
                                        </div>
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 font-black group shadow-inner">
                                            <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Phase 2: Mains</span>
                                            <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">October 2026</div>
                                        </div>
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 font-black group shadow-inner">
                                            <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Final Allotment</span>
                                            <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">November 2026</div>
                                        </div>
                                    </div>
                                    <p className="mt-8 text-center text-slate-500 text-xs font-black uppercase tracking-widest italic">Official Website: <a href="https://ibps.in" className="text-indigo-400 hover:underline">ibps.in</a></p>
                                </div>

                                {/* Selection Summary */}
                                <div className="p-10 md:p-14 bg-slate-950 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden italic">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-6">Selection Protocol</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 font-black">01</div>
                                            <h5 className="font-black text-white uppercase tracking-tight">Phase 1: Prelims</h5>
                                            <p className="text-xs text-slate-600 font-black leading-relaxed">Qualifying Stage. 100 Marks. 1 Hour. Sectional & Overall cutoffs applied.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white flex items-center justify-center font-black shadow-lg shadow-indigo-500/20">02</div>
                                            <h5 className="font-black text-white uppercase tracking-tight">Phase 2: Mains</h5>
                                            <p className="text-xs text-indigo-100 font-black leading-relaxed">Final Merit Component. 200 Marks. Marks from this stage purely determine selection.</p>
                                        </div>
                                    </div>
                                    <div className="mt-12 pt-10 border-t border-slate-900 text-center">
                                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-[10px] font-black uppercase tracking-[0.1em]">
                                            <AlertCircle className="w-5 h-5" /> NO INTERVIEW STAGE FOR CLERICAL POSTS
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Pattern */}
                                <div id="pattern" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Layout className="w-9 h-9 text-indigo-400" /> Exam Schematic
                                    </h3>
                                    <div className="space-y-20">
                                        <div className="overflow-x-auto rounded-[2.5rem] border border-slate-800 bg-slate-950 p-2 shadow-2xl">
                                            <table className="w-full text-left border-collapse min-w-[500px]">
                                                <thead>
                                                    <tr className="bg-slate-900 border-b border-slate-800">
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Prelims Paper</th>
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Qs</th>
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Marks</th>
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-slate-300 font-black text-sm divide-y divide-slate-800/40 italic">
                                                    <tr className="hover:bg-indigo-500/5 transition-all">
                                                        <td className="p-7 text-white font-black uppercase">English Language</td>
                                                        <td className="p-7">30</td>
                                                        <td className="p-7">30</td>
                                                        <td className="p-7 text-indigo-400">20 Min</td>
                                                    </tr>
                                                    <tr className="hover:bg-indigo-500/5 transition-all">
                                                        <td className="p-7 text-white font-black uppercase">Quant Aptitude</td>
                                                        <td className="p-7">35</td>
                                                        <td className="p-7">35</td>
                                                        <td className="p-7 text-indigo-400">20 Min</td>
                                                    </tr>
                                                    <tr className="hover:bg-indigo-500/5 transition-all">
                                                        <td className="p-7 text-white font-black uppercase">Reasoning Skill</td>
                                                        <td className="p-7">35</td>
                                                        <td className="p-7">35</td>
                                                        <td className="p-7 text-indigo-400">20 Min</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="overflow-x-auto rounded-[2.5rem] border border-slate-800 bg-slate-950 p-2 shadow-2xl">
                                            <table className="w-full text-left border-collapse min-w-[500px]">
                                                <thead>
                                                    <tr className="bg-slate-900 border-b border-slate-800">
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Mains Paper</th>
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Qs</th>
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Marks</th>
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-slate-300 font-black text-sm divide-y divide-slate-800/40 italic">
                                                    <tr className="hover:bg-indigo-500/5 transition-all">
                                                        <td className="p-7 text-white font-black uppercase">Reasoning Able</td>
                                                        <td className="p-7">50</td>
                                                        <td className="p-7">60</td>
                                                        <td className="p-7 text-indigo-400">45 Min</td>
                                                    </tr>
                                                    <tr className="hover:bg-indigo-500/5 transition-all">
                                                        <td className="p-7 text-white font-black uppercase">Quant Aptitude</td>
                                                        <td className="p-7">50</td>
                                                        <td className="p-7">50</td>
                                                        <td className="p-7 text-indigo-400">45 Min</td>
                                                    </tr>
                                                    <tr className="hover:bg-indigo-500/5 transition-all">
                                                        <td className="p-7 text-white font-black uppercase">English Lang</td>
                                                        <td className="p-7">40</td>
                                                        <td className="p-7">40</td>
                                                        <td className="p-7 text-indigo-400">35 Min</td>
                                                    </tr>
                                                    <tr className="hover:bg-indigo-500/5 transition-all">
                                                        <td className="p-7 text-white font-black uppercase">Gen/Fin Aware</td>
                                                        <td className="p-7">50</td>
                                                        <td className="p-7">50</td>
                                                        <td className="p-7 text-indigo-400">35 Min</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="mt-12 flex flex-wrap gap-6 font-black uppercase tracking-[0.1em] text-xs">
                                        <div className="bg-red-500/10 border-2 border-red-500/20 px-8 py-5 rounded-3xl flex items-center gap-5 text-red-100 shadow-xl">
                                            <AlertCircle className="w-7 h-7 text-red-500" /> Negative Scoring: 0.25 Reduction per mistake.
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Syllabus */}
                                <div id="syllabus" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <BookMarked className="w-9 h-9 text-indigo-400" /> Curriculum Pillars
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                                        {syllabusData.map((s, i) => (
                                            <div key={i} className="p-10 bg-slate-950 rounded-[3rem] border border-slate-800 group hover:border-indigo-500/40 transition-all shadow-2xl relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><s.icon className="w-20 h-20" /></div>
                                                <div className="flex items-center gap-6 mb-10 relative z-10">
                                                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600 transition-all text-indigo-400 group-hover:text-white shadow-lg">
                                                        <s.icon className="w-7 h-7" />
                                                    </div>
                                                    <h4 className="font-black text-white text-xl md:text-2xl uppercase tracking-tighter italic">{s.subject}</h4>
                                                </div>
                                                <div className="flex flex-wrap gap-3 relative z-10 font-black italic">
                                                    {s.chapters.map((chap, idx) => (
                                                        <span key={idx} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-[10px] md:text-[11px] font-black text-slate-500 uppercase group-hover:border-slate-700 transition-all tracking-widest">
                                                            {chap}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Section: Eligibility */}
                                <div id="eligibility" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Users className="w-9 h-9 text-indigo-400" /> Qualification Status
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 font-black italic">
                                        <div className="p-10 md:p-12 bg-slate-950 rounded-[3rem] border border-slate-800 shadow-2xl group hover:border-indigo-500/30 transition-all">
                                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-5 opacity-60">Academic Benchmarks</div>
                                            <h4 className="font-black text-white text-xl md:text-2xl mb-5 uppercase tracking-tighter italic underline decoration-indigo-500/30 decoration-4 underline-offset-8">Degree Mandatory</h4>
                                            <div className="space-y-4 text-slate-500 font-black leading-relaxed text-sm md:text-base border-l-[6px] border-indigo-600/30 pl-5">
                                                <p className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Graduation in any discipline.</p>
                                                <p className="flex items-center gap-3"><Laptop className="w-4 h-4 text-indigo-400" /> Computer Literacy Requirement.</p>
                                                <p className="flex items-center gap-3"><Languages className="w-4 h-4 text-blue-400" /> State Official Language Proficiency.</p>
                                            </div>
                                        </div>
                                        <div className="p-10 md:p-12 bg-slate-950 rounded-[3rem] border border-slate-800 shadow-2xl group hover:border-indigo-500/30 transition-all">
                                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-5 opacity-60">Age Restrictions</div>
                                            <h4 className="font-black text-white text-xl md:text-2xl mb-5 uppercase tracking-tighter italic underline decoration-indigo-500/30 decoration-4 underline-offset-8">20 – 28 Years</h4>
                                            <p className="text-slate-500 font-black leading-relaxed text-sm md:text-base border-l-[6px] border-indigo-600/30 pl-5">Applicable relaxations for OBC (+3Y), SC/ST (+5Y), and PwBD (+10Y) as per official 2026 norms.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Salary */}
                                <div id="salary" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Banknote className="w-9 h-9 text-emerald-400" /> Pay & Benefits 2026
                                    </h3>
                                    <div className="p-10 md:p-16 bg-slate-950 rounded-[4rem] border-[4px] border-emerald-600/10 relative overflow-hidden shadow-2xl group">
                                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-125"><Landmark className="w-64 h-64 text-emerald-500" /></div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
                                            <div>
                                                <div className="text-slate-600 font-black text-[12px] uppercase tracking-[0.4em] mb-4 italic">Estimated Monthly Gross</div>
                                                <div className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-10 tabular-nums italic group-hover:text-emerald-400 transition-colors">₹30k – ₹35k<span className="text-xs md:text-sm align-top ml-2 opacity-50">+Perks</span></div>
                                                <div className="flex flex-wrap gap-3 font-black italic">
                                                    {['DA', 'HRA', 'Conveyance Allow', 'Medical Support', 'NPS Pension'].map(p => (
                                                        <span key={p} className="text-[10px] md:text-[11px] font-black uppercase px-5 py-2.5 bg-emerald-500/5 text-emerald-200 rounded-2xl border border-emerald-500/20 shadow-xl leading-none">{p}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-8 font-black uppercase tracking-tight text-sm md:text-base italic">
                                                <div className="flex justify-between items-center border-b border-slate-800 pb-5">
                                                    <span className="text-slate-600 tracking-[0.2em] text-[11px]">Basic Starting</span>
                                                    <span className="text-white text-lg md:text-xl">₹19,900+</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-slate-800 pb-5">
                                                    <span className="text-slate-600 tracking-[0.2em] text-[11px]">Rank Level</span>
                                                    <span className="text-white">Customer Service Associate</span>
                                                </div>
                                                <div className="flex justify-between items-center text-emerald-400">
                                                    <span className="text-[11px] tracking-[0.2em]">Promotion Gap</span>
                                                    <span>3-5 Years Potential</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Comparison Table */}
                                <div className="mt-20">
                                    <h3 className="text-xl md:text-2xl font-black text-white mb-10 text-center uppercase tracking-[0.3em] italic">Clerical vs Officer Comparison</h3>
                                    <div className="overflow-x-auto rounded-[3rem] border border-slate-800 bg-slate-900/50 shadow-2xl">
                                        <table className="w-full text-center border-collapse">
                                            <thead>
                                                <tr className="bg-slate-950 border-b-2 border-slate-800">
                                                    <th className="p-8 font-black text-slate-500 uppercase text-[10px] italic">Feature</th>
                                                    <th className="p-8 font-black text-indigo-400 uppercase text-[10px] italic border-x border-slate-800">IBPS Clerk</th>
                                                    <th className="p-8 font-black text-blue-400 uppercase text-[10px] italic">SBI PO</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-slate-400 font-black italic uppercase text-[11px] md:text-xs divide-y divide-slate-800/40">
                                                <tr className="hover:bg-indigo-500/5 transition-all">
                                                    <td className="p-8 text-left pl-12 font-black">Interview Required</td>
                                                    <td className="p-8 text-white font-black border-x border-slate-800/20">NO</td>
                                                    <td className="p-8">YES</td>
                                                </tr>
                                                <tr className="hover:bg-indigo-500/5 transition-all">
                                                    <td className="p-8 text-left pl-12 font-black">Average Salary</td>
                                                    <td className="p-8 text-white font-black border-x border-slate-800/20">₹32K</td>
                                                    <td className="p-8">₹70K</td>
                                                </tr>
                                                <tr className="hover:bg-indigo-500/5 transition-all">
                                                    <td className="p-8 text-left pl-12 font-black">Difficulty Level</td>
                                                    <td className="p-8 text-white font-black border-x border-slate-800/20">MODERATE</td>
                                                    <td className="p-8 text-red-500">HIGH</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="sticky top-24 space-y-12">
                            <div className="bg-slate-900 border-[4px] border-indigo-600 rounded-[3.5rem] p-10 md:p-12 shadow-[0_0_80px_rgba(99,102,241,0.25)] relative overflow-hidden group transition-all hover:scale-[1.01]">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/30 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>

                                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 mt-6 relative z-10 leading-[0.8] uppercase tracking-tighter italic">Join The <br /> Clerk Series</h3>
                                <p className="text-base text-slate-400 font-bold mb-12 relative z-10 uppercase tracking-tight leading-relaxed italic opacity-80 decoration-indigo-500/40 underline underline-offset-8 decoration-4">The definitive training for IBPS & State Bank Clerical Exams.</p>

                                <div className="space-y-6 mb-14 p-10 bg-slate-950/90 rounded-[2.5rem] border-2 border-slate-800 relative z-10 font-black uppercase text-[11px] tracking-[0.25em] shadow-2xl text-white italic">
                                    <div className="flex items-center gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> Speed-focused Mocks
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> Simplification Drills
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> State-cutoff Analytics
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 relative z-10 font-black uppercase tracking-[0.25em] text-xs">
                                    <Link href="/government-exams/banking/ibps-clerk" className="w-full py-7 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-3xl text-center transition-all active:scale-95 shadow-2xl shadow-indigo-600/40 border-b-4 border-indigo-900 leading-none text-base">
                                        Unlock Full Series
                                    </Link>
                                    <button className="w-full py-7 bg-slate-950 border-2 border-slate-700 text-slate-500 hover:text-white rounded-3xl transition-all font-black leading-none italic uppercase">
                                        Join Community
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle,
    ChevronDown, ChevronRight, Calculator,
    ShieldCheck, Zap, MonitorPlay, Landmark, AlertCircle, BookMarked, Award, Layout, Briefcase, TrendingUp, Brain, Shield, FileSearch, TrendingDown, ClipboardList
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function SBIPOSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    const syllabusData = [
        {
            subject: "Reasoning Ability",
            icon: Brain,
            chapters: ["Puzzles (Floor, Box, Month)", "Seating Arrangement (Circle, Line)", "Syllogism", "Inequality", "Coding-Decoding", "Blood Relation", "Input-Output", "Direction & Distance", "Order & Ranking", "Data Sufficiency", "Logical Reasoning (Assumption, Cause-Effect)"]
        },
        {
            subject: "Quantitative Aptitude",
            icon: Calculator,
            chapters: ["Simplification & Approximation", "Number Series", "Quadratic Equations", "Data Interpretation (Table, Bar, Pie, Caselet)", "Percentage", "Ratio & Proportion", "Profit & Loss", "Time & Work", "Speed, Time & Distance", "Partnership", "Probability", "P&C", "SI & CI", "Mixture & Allegation"]
        },
        {
            subject: "English Language",
            icon: BookOpen,
            chapters: ["Reading Comprehension", "Cloze Test", "Para Jumbles", "Error Detection", "Sentence Improvement", "Fill in the Blanks", "Vocabulary (Synonym/Antonym)", "Word Usage", "Column Matching"]
        },
        {
            subject: "General/Banking Awareness",
            icon: Landmark,
            chapters: ["RBI Functions", "Monetary Policy", "Banking Terms", "Types of Accounts", "Basel Norms", "Financial Institutions", "Budget & Economic Survey", "Static Banking GK", "Current Affairs (Last 6 Months)"]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-black uppercase tracking-widest italic">
                    <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking" className="hover:text-blue-400 transition-colors">Banking</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking/sbi-po" className="hover:text-blue-400 transition-colors">SBI PO</Link>
                    <span>&rsaquo;</span>
                    <span className="text-white font-black truncate">Roadmap 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-10 md:space-y-16">

                        {/* Banner */}
                        <div className="bg-slate-900 rounded-[3rem] p-6 md:p-12 border border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.1)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.25em] shadow-lg">
                                    <Shield className="w-4 h-4" /> SBI PO 2026 Complete Guide
                                </div>

                                <h1 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.9] uppercase italic">
                                    The Prestigious <br /> Officer Roadmap
                                </h1>

                                <p className="text-base md:text-2xl text-slate-400 mb-12 font-bold leading-relaxed max-w-2xl italic underline decoration-blue-500/30 decoration-2 underline-offset-8">
                                    SBI PO offers high salary, fast promotions, and extreme career growth. Master the most challenging banking exam in India.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-blue-500/50 transition-all group/item shadow-inner">
                                        <Briefcase className="w-6 h-6 text-blue-400 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">Management Cadre</span>
                                    </div>
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-emerald-500/50 transition-all group/item shadow-inner">
                                        <TrendingUp className="w-6 h-6 text-emerald-400 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">Fast Tenure</span>
                                    </div>
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-sky-500/50 transition-all group/item shadow-inner">
                                        <Landmark className="w-6 h-6 text-sky-400 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">Legacy of SBI</span>
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
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'salary', label: 'Pay & Perks', icon: Banknote },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-3 px-8 py-6 font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-all border-b-[3px] shrink-0 ${activeTab === tab.id
                                            ? "border-blue-500 text-blue-400 bg-slate-900 shadow-inner"
                                            : "border-transparent text-slate-500 hover:text-slate-200"
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4" /> {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-6 md:p-12 space-y-24 md:space-y-32">

                                {/* Section: Date */}
                                <div id="dates" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter">
                                        <Calendar className="w-9 h-9 text-blue-400" /> Crucial Dates 2026 (Expected)
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 hover:border-blue-500/30 transition-all font-black group relative overflow-hidden shadow-inner">
                                            <div className="absolute top-0 right-0 w-2 h-full bg-blue-500/10 transition-all group-hover:w-full"></div>
                                            <div className="relative z-10">
                                                <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Notification & App</span>
                                                <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">September 2026</div>
                                            </div>
                                        </div>
                                        <div className="p-10 bg-blue-600 rounded-[2.5rem] border border-blue-400 shadow-[0_25px_50px_rgba(37,99,235,0.25)] relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-125"></div>
                                            <div className="relative z-10 font-black">
                                                <span className="text-blue-100 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Phase 1: Prelims</span>
                                                <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">November 2026</div>
                                            </div>
                                        </div>
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 font-black group shadow-inner">
                                            <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Phase 2: Mains</span>
                                            <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">December 2026</div>
                                        </div>
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 font-black group shadow-inner">
                                            <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Final Results</span>
                                            <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">March/April 2027</div>
                                        </div>
                                    </div>
                                    <p className="mt-8 text-slate-500 text-sm font-black italic uppercase tracking-widest text-center">Official Website: <a href="https://sbi.co.in" className="text-blue-400 hover:underline">sbi.co.in</a></p>
                                </div>

                                {/* Selection Process Summary */}
                                <div className="p-10 bg-slate-950 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden">
                                    <h3 className="text-xl md:text-2xl font-black text-white mb-8 border-l-4 border-blue-500 pl-4 uppercase tracking-tighter italic">3-Stage Selection Protocol</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div className="space-y-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 font-black">1</div>
                                            <h4 className="font-black text-white uppercase">Prelims</h4>
                                            <p className="text-xs text-slate-500 font-bold italic uppercase">Qualifying Only. 100 Marks.</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center font-black shadow-lg">2</div>
                                            <h4 className="font-black text-white uppercase">Mains Paper</h4>
                                            <p className="text-xs text-blue-400 font-black italic uppercase">Marks Counted for Merit. 250 Marks.</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 font-black">3</div>
                                            <h4 className="font-black text-white uppercase">Interview + GE</h4>
                                            <p className="text-xs text-slate-500 font-bold italic uppercase">Final Check. Group Exercise Included.</p>
                                        </div>
                                    </div>
                                    <div className="mt-10 pt-8 border-t border-slate-800 flex items-center justify-center">
                                        <div className="px-6 py-3 bg-slate-900 border border-blue-500/30 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-blue-200">
                                            Final Merit = <span className="text-white underline underline-offset-4 decoration-blue-500 font-black">Mains (75%)</span> + <span className="text-white underline underline-offset-4 decoration-emerald-500 font-black">Interview (25%)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Pattern */}
                                <div id="pattern" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter">
                                        <Layout className="w-9 h-9 text-blue-400" /> Exam Pattern Details
                                    </h3>

                                    <div className="space-y-16 md:space-y-24">
                                        <div>
                                            <h4 className="text-xl md:text-2xl font-black text-blue-400 mb-8 uppercase tracking-tight border-b-[3px] border-blue-600/20 w-fit pb-2 italic">Phase 1: Prelims Exam</h4>
                                            <div className="overflow-x-auto rounded-[2.5rem] border border-slate-800 bg-slate-950 p-2 shadow-inner">
                                                <table className="w-full text-left border-collapse min-w-[500px]">
                                                    <thead>
                                                        <tr className="bg-slate-900 border-b border-slate-800">
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em]">Section</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em]">Qs</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em]">Marks</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em]">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-slate-300 font-black text-sm divide-y divide-slate-800/40">
                                                        <tr className="hover:bg-blue-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase italic">English Language</td>
                                                            <td className="p-7">30</td>
                                                            <td className="p-7">30</td>
                                                            <td className="p-7 text-blue-400">20 Min</td>
                                                        </tr>
                                                        <tr className="hover:bg-blue-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase italic">Quantitative Aptitude</td>
                                                            <td className="p-7">35</td>
                                                            <td className="p-7">35</td>
                                                            <td className="p-7 text-blue-400">20 Min</td>
                                                        </tr>
                                                        <tr className="hover:bg-blue-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase italic">Reasoning Ability</td>
                                                            <td className="p-7">35</td>
                                                            <td className="p-7">35</td>
                                                            <td className="p-7 text-blue-400">20 Min</td>
                                                        </tr>
                                                        <tr className="bg-slate-900">
                                                            <td className="p-7 text-blue-400 font-black uppercase tracking-widest">Total</td>
                                                            <td className="p-7 text-white">100</td>
                                                            <td className="p-7 text-white">100</td>
                                                            <td className="p-7 text-white">1 Hour</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xl md:text-2xl font-black text-blue-400 mb-8 uppercase tracking-tight border-b-[3px] border-blue-600/20 w-fit pb-2 italic">Phase 2: Mains Exam</h4>
                                            <div className="overflow-x-auto rounded-[2.5rem] border border-slate-800 bg-slate-950 p-2 shadow-inner text-white">
                                                <table className="w-full text-left border-collapse min-w-[600px]">
                                                    <thead>
                                                        <tr className="bg-slate-900 border-b border-slate-800">
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em]">Paper</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em]">Qs</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em]">Marks</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em]">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-slate-300 font-black text-sm divide-y divide-slate-800/40">
                                                        <tr className="hover:bg-blue-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase italic">Reasoning & Comp</td>
                                                            <td className="p-7">45</td>
                                                            <td className="p-7">60</td>
                                                            <td className="p-7">60 Min</td>
                                                        </tr>
                                                        <tr className="hover:bg-blue-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase italic">Data Analysis</td>
                                                            <td className="p-7">35</td>
                                                            <td className="p-7">60</td>
                                                            <td className="p-7">45 Min</td>
                                                        </tr>
                                                        <tr className="hover:bg-blue-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase italic">Gen/Economy/Banking</td>
                                                            <td className="p-7">40</td>
                                                            <td className="p-7">40</td>
                                                            <td className="p-7">35 Min</td>
                                                        </tr>
                                                        <tr className="hover:bg-blue-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase italic">English Lang</td>
                                                            <td className="p-7">35</td>
                                                            <td className="p-7">40</td>
                                                            <td className="p-7">40 Min</td>
                                                        </tr>
                                                        <tr className="bg-blue-600/10">
                                                            <td className="p-7 text-blue-400 font-black uppercase italic">Descriptive Writing</td>
                                                            <td className="p-7">2</td>
                                                            <td className="p-7">50</td>
                                                            <td className="p-7">30 Min</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12 flex flex-wrap gap-6 font-black uppercase tracking-[0.1em]">
                                        <div className="bg-red-500/10 border border-red-500/20 px-8 py-5 rounded-3xl flex items-center gap-5 text-xs md:text-sm text-red-100 shadow-2xl">
                                            <AlertCircle className="w-7 h-7 text-red-500" /> Negative Marking: 0.25 (1/4th) for objective wrong answers.
                                        </div>
                                        <div className="bg-emerald-500/10 border border-emerald-500/20 px-8 py-5 rounded-3xl flex items-center gap-5 text-xs md:text-sm text-emerald-100 shadow-2xl">
                                            <CheckCircle2 className="w-7 h-7 text-emerald-500" /> Sectional Cutoff: Usually NO sectional cutoffs in SBI PO.
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Syllabus */}
                                <div id="syllabus" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter">
                                        <BookMarked className="w-9 h-9 text-blue-400" /> Detailed Syllabus
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                                        {syllabusData.map((s, i) => (
                                            <div key={i} className="p-10 md:p-12 bg-slate-950 rounded-[3rem] border border-slate-800 group hover:border-blue-500/40 transition-all shadow-2xl relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><s.icon className="w-24 h-24" /></div>
                                                <div className="flex items-center gap-6 mb-10 relative z-10">
                                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 transition-all text-blue-400 group-hover:text-white shadow-xl">
                                                        <s.icon className="w-7 h-7 md:w-8 md:h-8" />
                                                    </div>
                                                    <h4 className="font-black text-white text-xl md:text-2xl uppercase tracking-tighter leading-[0.85] italic">{s.subject}</h4>
                                                </div>
                                                <div className="flex flex-wrap gap-3 relative z-10 font-black">
                                                    {s.chapters.map((chap, idx) => (
                                                        <span key={idx} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest group-hover:border-slate-700 group-hover:text-slate-200 transition-all italic">
                                                            {chap}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}

                                        {/* Descriptive Extra Card */}
                                        <div className="p-10 md:p-12 bg-slate-900 border border-blue-500/30 rounded-[3rem] group hover:border-blue-500/60 transition-all col-span-1 sm:col-span-2">
                                            <div className="flex items-center gap-6 mb-8">
                                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black">
                                                    <FileText className="w-7 h-7" />
                                                </div>
                                                <h4 className="font-black text-white text-xl md:text-3xl uppercase tracking-tighter italic">Phase 2: Descriptive Paper</h4>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-4">
                                                    <div className="text-white font-black uppercase text-sm italic">Essay Writing</div>
                                                    <p className="text-slate-500 text-sm font-bold leading-relaxed italic border-l-4 border-blue-500/40 pl-4">250–300 words. Key topics include Banking, Indian Economy, Social Issues & Financial Awareness.</p>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="text-white font-black uppercase text-sm italic">Letter Writing</div>
                                                    <p className="text-slate-500 text-sm font-bold leading-relaxed italic border-l-4 border-blue-500/40 pl-4">Formal/Informal formats. Focus on banking complaints, requests, or professional communication.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Eligibility */}
                                <div id="eligibility" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter">
                                        <Users className="w-9 h-9 text-blue-400" /> Eligibility Benchmarks
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 font-black italic">
                                        <div className="p-10 md:p-12 bg-slate-950 rounded-[3rem] border border-slate-800 shadow-2xl group hover:border-blue-500/30 transition-all">
                                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-5 opacity-60">Academic Prerequisite</div>
                                            <h4 className="font-black text-white text-xl md:text-2xl mb-5 uppercase tracking-tighter italic">Degree Holder</h4>
                                            <p className="text-slate-500 font-black leading-relaxed text-sm md:text-base border-l-[5px] border-blue-600/30 pl-5">Graduation in any discipline. <span className="text-blue-400">Final year students</span> can apply if the result is declared before the interview phase.</p>
                                        </div>
                                        <div className="p-10 md:p-12 bg-slate-950 rounded-[3rem] border border-slate-800 shadow-2xl group hover:border-blue-500/30 transition-all">
                                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-5 opacity-60">Age Protocol</div>
                                            <h4 className="font-black text-white text-xl md:text-2xl mb-5 uppercase tracking-tighter italic">21 – 30 Years</h4>
                                            <p className="text-slate-500 font-black leading-relaxed text-sm md:text-base border-l-[5px] border-blue-600/30 pl-5">OBC (3Y), SC/ST (5Y), PwBD (10–15Y) relaxations as per government guidelines for recruitment.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Salary */}
                                <div id="salary" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter">
                                        <Banknote className="w-9 h-9 text-emerald-400" /> PO Premium Pay Scale
                                    </h3>
                                    <div className="p-10 md:p-16 bg-slate-950 rounded-[4rem] border-[4px] border-emerald-600/10 relative overflow-hidden shadow-2xl">
                                        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none rotate-12 transition-transform duration-1000 group-hover:rotate-45"><Landmark className="w-80 h-80 text-emerald-500" /></div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
                                            <div>
                                                <div className="text-slate-600 font-black text-[12px] uppercase tracking-[0.4em] mb-4 italic">Gross Monthly Earnings</div>
                                                <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 tabular-nums italic underline decoration-emerald-500/30 decoration-8 underline-offset-8">₹65k – ₹75k<span className="text-xs md:text-sm text-emerald-400 align-top ml-2">+Bonuses</span></div>
                                                <div className="flex flex-wrap gap-3 font-black">
                                                    {['Best Lease', 'Medical Benefits', 'Travel Allow', 'NPS Pension', 'Book Grant'].map(p => (
                                                        <span key={p} className="text-[10px] md:text-[11px] font-black uppercase px-5 py-2.5 bg-emerald-500/5 text-emerald-200 rounded-2xl border border-emerald-500/20 shadow-xl leading-none italic">{p}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-8 font-black uppercase tracking-tight text-sm md:text-base italic">
                                                <div className="flex justify-between items-center border-b border-slate-800 pb-5">
                                                    <span className="text-slate-600 tracking-[0.2em] text-[11px]">Basic Starting</span>
                                                    <span className="text-white text-lg md:text-xl">₹41,960+</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-slate-800 pb-5">
                                                    <span className="text-slate-600 tracking-[0.2em] text-[11px]">Probation Term</span>
                                                    <span className="text-white">2 Years Training</span>
                                                </div>
                                                <div className="flex justify-between items-center text-emerald-400 pt-2">
                                                    <span className="tracking-[0.2em] text-[11px]">Career Cap</span>
                                                    <span className="font-black">PO to Chairman Rank</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-4 space-y-10">

                        {/* Sticky Card */}
                        <div className="sticky top-24 space-y-10">
                            <div className="bg-slate-900 border-[4px] border-blue-600 rounded-[3.5rem] p-10 md:p-12 shadow-[0_0_80px_rgba(37,99,235,0.25)] relative overflow-hidden group transition-all hover:scale-[1.01]">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/30 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>

                                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 mt-6 relative z-10 leading-[0.8] uppercase tracking-tighter italic">Unlock The <br /> SBI Elite Pass</h3>
                                <p className="text-base text-slate-400 font-bold mb-12 relative z-10 uppercase tracking-tight leading-relaxed italic opacity-80 decoration-blue-500/40 underline underline-offset-8 decoration-4">The ultimate simulation training for Class-1 Management Officers.</p>

                                <div className="space-y-6 mb-14 p-10 bg-slate-950/90 rounded-[2.5rem] border-2 border-slate-800 relative z-10 font-black uppercase text-[11px] tracking-[0.25em] shadow-2xl text-white italic">
                                    <div className="flex items-center gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> Extreme Difficulty Mocks
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> Descriptive Feedback AI
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> GE & Personality Drill
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 relative z-10 font-black uppercase tracking-[0.25em] text-xs">
                                    <Link href="/government-exams/banking/sbi-po" className="w-full py-7 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-3xl text-center transition-all active:scale-95 shadow-2xl shadow-blue-600/40 border-b-4 border-blue-900 leading-none text-base">
                                        Get Elite Access
                                    </Link>
                                    <button className="w-full py-7 bg-slate-950 border-2 border-slate-700 text-slate-500 hover:text-white rounded-3xl transition-all font-black leading-none italic uppercase">
                                        Request Callback
                                    </button>
                                </div>
                            </div>

                            {/* stats */}
                            <div className="p-12 bg-slate-950 border-2 border-slate-800 rounded-[3.5rem] text-center shadow-2xl font-black flex flex-col items-center justify-center relative overflow-hidden group">
                                <div className="absolute -top-10 -left-10 opacity-5 animate-pulse"><Shield className="w-32 h-32 text-blue-500" /></div>
                                <Users className="w-14 h-14 text-blue-500 mb-10 drop-shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-transform group-hover:scale-125 duration-500" />
                                <div className="text-6xl font-black text-white tracking-tighter mb-3 tabular-nums italic">12L+</div>
                                <div className="text-[11px] font-black text-slate-600 uppercase tracking-[0.4em] italic pt-6 border-t border-slate-900/50 w-full">Total Candidates</div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

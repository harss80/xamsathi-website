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
            chapters: ["Puzzles (Floor, Box, Month)", "Seating Arrangement", "Syllogism", "Inequality", "Coding-Decoding", "Blood Relation", "Input-Output", "Data Sufficiency", "Logical Reasoning"]
        },
        {
            subject: "Quantitative Aptitude",
            icon: Calculator,
            chapters: ["Simplification", "Number Series", "Quadratic Equations", "Data Interpretation", "Percentage", "Ratio & Proportion", "Profit & Loss", "Time & Work", "Speed, Time & Distance", "SI & CI"]
        },
        {
            subject: "English Language",
            icon: BookOpen,
            chapters: ["Reading Comprehension", "Cloze Test", "Para Jumbles", "Error Detection", "Sentence Improvement", "Fill in the Blanks", "Vocabulary", "Word Usage"]
        },
        {
            subject: "Banking Awareness",
            icon: Landmark,
            chapters: ["RBI Functions", "Monetary Policy", "Banking Terms", "Types of Accounts", "Basel Norms", "Financial Institutions", "Budget & Economic Survey", "Current Affairs"]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-blue-400 font-bold transition-all">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams/banking" className="hover:text-blue-400 font-bold transition-all">Banking</Link>
                    <span>›</span>
                    <Link href="/government-exams/banking/sbi-po" className="hover:text-blue-400 font-bold transition-all">SBI PO</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Roadmap 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* Banner */}
                        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Shield className="w-4 h-4" /> SBI PO 2026 Guide
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                    The Prestigious Officer <br /> Career Roadmap 2026
                                </h1>

                                <p className="text-lg text-slate-400 mb-10 font-medium leading-relaxed max-w-xl">
                                    SBI PO offers high salary, fast promotions, and extreme career growth. Master the most challenging banking exam in India.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center gap-3 transition-colors hover:border-blue-500/30">
                                        <Briefcase className="w-5 h-5 text-blue-400" />
                                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Management Cadre</span>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center gap-3 transition-colors hover:border-emerald-500/30">
                                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Fast Tenure</span>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center gap-3 transition-colors hover:border-sky-500/30">
                                        <Landmark className="w-5 h-5 text-sky-400" />
                                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Legacy of SBI</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Guide Content */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            {/* Tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 no-scrollbar p-1 sticky top-0 z-20 backdrop-blur-xl">
                                {[
                                    { id: 'dates', label: 'Timeline', icon: Calendar },
                                    { id: 'pattern', label: 'Pattern', icon: Layout },
                                    { id: 'syllabus', label: 'Syllabus', icon: BookMarked },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'salary', label: 'Salary', icon: Banknote },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-2 px-6 py-4 font-bold text-xs uppercase tracking-wider transition-all border-b-2 shrink-0 ${activeTab === tab.id
                                            ? "border-blue-500 text-blue-400 bg-slate-900"
                                            : "border-transparent text-slate-500 hover:text-slate-200"
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4" /> {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8 md:p-10 space-y-20">
                                {/* Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 tracking-tight uppercase">
                                        <Calendar className="w-6 h-6 text-blue-500" /> Crucial Dates 2026
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { label: "Notification", val: "September 2026", color: "border-slate-800" },
                                            { label: "Phase 1: Prelims", val: "November 2026", color: "border-blue-500/50 bg-blue-500/5" },
                                            { label: "Phase 2: Mains", val: "December 2026", color: "border-slate-800" },
                                            { label: "Final Result", val: "April 2027", color: "border-slate-800" }
                                        ].map((item, idx) => (
                                            <div key={idx} className={`p-6 rounded-2xl border ${item.color} shadow-sm group hover:border-blue-500/30 transition-colors`}>
                                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                                                <div className="text-xl font-black text-white">{item.val}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Selection Protocol */}
                                <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-6">Selection Protocol</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {[
                                            { num: "01", title: "Prelims", desc: "Qualifying Only. 100 Marks (1 Hour)." },
                                            { num: "02", title: "Mains", desc: "Merit Component. 250 Marks. Objective + Descriptive." },
                                            { num: "03", title: "Interview + GE", desc: "Final Check. Group Exercise (20M) + Interview (30M)." }
                                        ].map((step, i) => (
                                            <div key={i} className="space-y-3">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${i === 1 ? 'bg-blue-500 text-white' : 'bg-slate-900 text-slate-500'}`}>{step.num}</div>
                                                <h5 className="font-bold text-white uppercase tracking-tight">{step.title}</h5>
                                                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 tracking-tight uppercase">
                                        <Layout className="w-6 h-6 text-blue-500" /> Exam Pattern
                                    </h3>
                                    <div className="space-y-12">
                                        <div>
                                            <h4 className="text-sm font-bold text-blue-500 mb-6 uppercase tracking-widest flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Phase 1: Prelims
                                            </h4>
                                            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                                                <table className="w-full text-left">
                                                    <thead>
                                                        <tr className="bg-slate-900/50 border-b border-slate-800">
                                                            <th className="p-5 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Section</th>
                                                            <th className="p-5 font-bold text-slate-500 text-[10px] uppercase tracking-widest text-center">Qs</th>
                                                            <th className="p-5 font-bold text-slate-500 text-[10px] uppercase tracking-widest text-center">Marks</th>
                                                            <th className="p-5 font-bold text-slate-500 text-[10px] uppercase tracking-widest text-right">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm font-medium">
                                                        {[
                                                            { s: "English Language", q: 30, m: 30, t: "20 Min" },
                                                            { s: "Quantitative Aptitude", q: 35, m: 35, t: "20 Min" },
                                                            { s: "Reasoning Ability", q: 35, m: 35, t: "20 Min" }
                                                        ].map((row, i) => (
                                                            <tr key={i} className="border-b border-slate-800/50 hover:bg-white/[0.02] transition-colors">
                                                                <td className="p-5 text-white font-bold">{row.s}</td>
                                                                <td className="p-5 text-slate-400 text-center">{row.q}</td>
                                                                <td className="p-5 text-slate-400 text-center">{row.m}</td>
                                                                <td className="p-5 text-blue-400 font-bold text-right">{row.t}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-blue-500 mb-6 uppercase tracking-widest flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Phase 2: Mains
                                            </h4>
                                            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                                                <table className="w-full text-left">
                                                    <thead>
                                                        <tr className="bg-slate-900/50 border-b border-slate-800">
                                                            <th className="p-5 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Section</th>
                                                            <th className="p-5 font-bold text-slate-500 text-[10px] uppercase tracking-widest text-center">Qs</th>
                                                            <th className="p-5 font-bold text-slate-500 text-[10px] uppercase tracking-widest text-center">Marks</th>
                                                            <th className="p-5 font-bold text-slate-500 text-[10px] uppercase tracking-widest text-right">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm font-medium">
                                                        {[
                                                            { s: "Reasoning & Comp", q: 35, m: 45, t: "60 Min" },
                                                            { s: "Data Analysis", q: 35, m: 35, t: "45 Min" },
                                                            { s: "Gen/Banking Awareness", q: 40, m: 40, t: "35 Min" },
                                                            { s: "English Language", q: 30, m: 30, t: "40 Min" },
                                                            { s: "Descriptive (Essay/Letter)", q: 2, m: 50, t: "30 Min" }
                                                        ].map((row, i) => (
                                                            <tr key={i} className="border-b border-slate-800/50 hover:bg-white/[0.02] transition-colors">
                                                                <td className="p-5 text-white font-bold">{row.s}</td>
                                                                <td className="p-5 text-slate-400 text-center">{row.q}</td>
                                                                <td className="p-5 text-slate-400 text-center">{row.m}</td>
                                                                <td className="p-5 text-blue-400 font-bold text-right">{row.t}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-4">
                                        <div className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg flex items-center gap-2 text-[11px] font-bold text-red-100">
                                            <AlertCircle className="w-4 h-4 text-red-500" /> Negative Marking: 0.25 (1/4th)
                                        </div>
                                    </div>
                                </div>

                                {/* Syllabus */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 tracking-tight uppercase">
                                        <BookMarked className="w-6 h-6 text-blue-500" /> Detailed Syllabus
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {syllabusData.map((s, i) => (
                                            <div key={i} className="p-6 bg-slate-950 rounded-2xl border border-slate-800 group hover:border-blue-500/30 transition-all shadow-lg">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                                                        <s.icon className="w-5 h-5" />
                                                    </div>
                                                    <h4 className="font-bold text-white uppercase tracking-tight">{s.subject}</h4>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {s.chapters.map((chap, idx) => (
                                                        <span key={idx} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                                                            {chap}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Eligibility */}
                                <div id="eligibility" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 tracking-tight uppercase">
                                        <Users className="w-6 h-6 text-blue-500" /> Eligibility Criteria
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 transition-colors hover:border-blue-500/30">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2 opacity-60">Education</div>
                                            <h4 className="font-bold text-white text-lg mb-4 uppercase tracking-tight">Graduation Mandatory</h4>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed border-l-2 border-blue-600/30 pl-4">Degree in any discipline from a recognized University. Final year students can apply conditionally.</p>
                                        </div>
                                        <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 transition-colors hover:border-blue-500/30">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2 opacity-60">Age Limit</div>
                                            <h4 className="font-bold text-white text-lg mb-4 uppercase tracking-tight">21 – 30 Years</h4>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed border-l-2 border-blue-600/30 pl-4">Standard age relaxations apply for reserved categories as per bank guidelines.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 tracking-tight uppercase">
                                        <Banknote className="w-6 h-6 text-emerald-500" /> Salary Structure
                                    </h3>
                                    <div className="p-8 md:p-12 bg-slate-950 rounded-3xl border border-emerald-500/20 relative overflow-hidden shadow-xl group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:scale-150 transition-transform"></div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                                            <div>
                                                <div className="text-slate-500 font-bold text-[11px] uppercase tracking-widest mb-2">Estimated Monthly Gross</div>
                                                <div className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">₹65,000 – ₹75,000</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Best Lease Plan', 'LTC/LTA', 'Petrol Allowance', 'Medical Benefits', 'Smart Bonuses'].map(p => (
                                                        <span key={p} className="text-[10px] font-bold uppercase px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 whitespace-nowrap">{p}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-4 font-bold border-l border-slate-800 pl-8">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-500 uppercase tracking-widest text-[10px]">Basic Pay</span>
                                                    <span className="text-white">₹41,960+</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-500 uppercase tracking-widest text-[10px]">Promotion Path</span>
                                                    <span className="text-white">PO to Chairman Rank</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000"></div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">SBI PO Elite Pass</h3>
                                <p className="text-blue-100 mb-8 font-medium leading-relaxed opacity-90">Unlock all full duration mocks, extreme difficulty sets, and personality drill guidance.</p>
                                <Link href="/government-exams/banking/sbi-po" className="w-full py-4 bg-white text-blue-600 font-black rounded-xl flex items-center justify-center gap-2 text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider">
                                    View Test Series <ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="p-10 bg-slate-900 rounded-3xl border border-slate-800 text-center shadow-lg group">
                                <Users className="w-10 h-10 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <div className="text-4xl font-black text-white tracking-tight">12L+</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Total Aspirants</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

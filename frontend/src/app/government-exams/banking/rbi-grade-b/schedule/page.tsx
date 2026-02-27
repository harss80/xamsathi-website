"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle,
    ChevronDown, ChevronRight, Calculator,
    ShieldCheck, Zap, MonitorPlay, Landmark, AlertCircle, BookMarked, Award, Layout, Briefcase, TrendingUp, Brain, Shield, Rocket, GraduationCap, TrendingDown, ClipboardList
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function RBIGradeBSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    const syllabusData = {
        phase1: [
            {
                subject: "General Awareness",
                icon: BookMarked,
                chapters: ["RBI Circulars", "Monetary Policy", "Banking News", "Government Schemes", "Economic Survey", "Budget 2026", "IMF/World Bank"]
            },
            {
                subject: "Reasoning",
                icon: Brain,
                chapters: ["Complex Puzzles", "Seating Arrangement", "Syllogism", "Coding-Decoding", "Inequality", "Blood Relation", "Data Sufficiency"]
            },
            {
                subject: "Quantitative Aptitude",
                icon: Calculator,
                chapters: ["Data Interpretation", "Missing Number Series", "Quadratic Equations", "Arithmetic Word Problems", "Probability", "P&C", "SI & CI"]
            }
        ],
        phase2: [
            {
                subject: "Economic & Social Issues",
                icon: TrendingUp,
                chapters: ["National Income", "SDGs", "Inflation", "Fiscal Policy", "Globalization", "Social Justice", "Employment", "Financial Inclusion"]
            },
            {
                subject: "Finance & Management",
                icon: Landmark,
                chapters: ["Financial System", "Risk Management", "Basel Norms", "Money/Capital Markets", "Leadership Theories", "Motivation", "HRM", "Ethics"]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-amber-400 font-bold transition-all">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams/banking" className="hover:text-amber-400 font-bold transition-all">Banking</Link>
                    <span>›</span>
                    <Link href="/government-exams/banking/rbi-grade-b" className="hover:text-amber-400 font-bold transition-all">RBI Grade B</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Roadmap 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* Banner */}
                        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Award className="w-4 h-4" /> RBI Grade B 2026 Guide
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                    The Apex Policy <br /> Career Roadmap 2026
                                </h1>

                                <p className="text-lg text-slate-400 mb-10 font-medium leading-relaxed max-w-xl">
                                    RBI Grade B offers the highest salary, elite prestige, and significant policy-level exposure in the Indian banking system.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center gap-3 transition-colors hover:border-amber-500/30">
                                        <Landmark className="w-5 h-5 text-amber-400" />
                                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Central Bank</span>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center gap-3 transition-colors hover:border-emerald-500/30">
                                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Policy Exposure</span>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center gap-3 transition-colors hover:border-blue-500/30">
                                        <Rocket className="w-5 h-5 text-blue-400" />
                                        <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Fast Tenure</span>
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
                                    { id: 'eligibility', label: 'Criteria', icon: Users },
                                    { id: 'salary', label: 'Salary', icon: Banknote },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-2 px-6 py-4 font-bold text-xs uppercase tracking-wider transition-all border-b-2 shrink-0 ${activeTab === tab.id
                                            ? "border-amber-500 text-amber-500 bg-slate-900"
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
                                        <Calendar className="w-6 h-6 text-amber-500" /> Cycle Estimates 2026
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { label: "Notification", val: "May–June 2026", color: "border-slate-800" },
                                            { label: "Phase 1 Exam", val: "July 2026", color: "border-amber-500/50 bg-amber-500/5" },
                                            { label: "Phase 2 Exam", val: "August 2026", color: "border-slate-800" },
                                            { label: "Final Results", val: "Oct/Nov 2026", color: "border-slate-800" }
                                        ].map((item, idx) => (
                                            <div key={idx} className={`p-6 rounded-2xl border ${item.color} shadow-sm group hover:border-amber-500/30 transition-colors`}>
                                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                                                <div className="text-xl font-black text-white">{item.val}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Selection Summary */}
                                <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-6">Selection Protocol</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {[
                                            { num: "01", title: "Phase 1", desc: "Screening Only. Marks NOT counted in merit. Tough sectional cuts." },
                                            { num: "02", title: "Phase 2", desc: "Merit Component. 300 Marks. 50% Obj + 50% Desc." },
                                            { num: "03", title: "Interview", desc: "75 Marks. Final personality check by the RBI board." }
                                        ].map((step, i) => (
                                            <div key={i} className="space-y-3">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${i === 1 ? 'bg-amber-500 text-black' : 'bg-slate-900 text-slate-500'}`}>{step.num}</div>
                                                <h5 className="font-bold text-white uppercase tracking-tight">{step.title}</h5>
                                                <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 tracking-tight uppercase">
                                        <Layout className="w-6 h-6 text-amber-500" /> Structural Blueprint
                                    </h3>

                                    <div className="space-y-12">
                                        <div>
                                            <h4 className="text-sm font-bold text-amber-500 mb-6 uppercase tracking-widest flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Phase 1: Objectives (200 Marks)
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
                                                            { s: "General Awareness", q: 80, m: 80, t: "25 Min" },
                                                            { s: "Reasoning Skill", q: 60, m: 60, t: "45 Min" },
                                                            { s: "English Lang", q: 30, m: 30, t: "25 Min" },
                                                            { s: "Quantitative Apt.", q: 30, m: 30, t: "25 Min" }
                                                        ].map((row, i) => (
                                                            <tr key={i} className="border-b border-slate-800/50 hover:bg-white/[0.02] transition-colors">
                                                                <td className="p-5 text-white font-bold">{row.s}</td>
                                                                <td className="p-5 text-slate-400 text-center">{row.q}</td>
                                                                <td className="p-5 text-slate-400 text-center">{row.m}</td>
                                                                <td className="p-5 text-amber-400 font-bold text-right">{row.t}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-amber-500 mb-6 uppercase tracking-widest flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Phase 2: Description + Obj (300 Marks)
                                            </h4>
                                            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                                                <table className="w-full text-left">
                                                    <thead>
                                                        <tr className="bg-slate-900/50 border-b border-slate-800">
                                                            <th className="p-5 font-bold text-slate-500 text-[10px] uppercase tracking-widest">Paper</th>
                                                            <th className="p-5 font-bold text-slate-500 text-[10px] uppercase tracking-widest text-center">Marks</th>
                                                            <th className="p-5 font-bold text-slate-500 text-[10px] uppercase tracking-widest text-right">Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm font-medium">
                                                        {[
                                                            { s: "Economic & Social Issues", m: 100, t: "OBJ + DESC" },
                                                            { s: "English Writing Skills", m: 100, t: "DESC ONLY" },
                                                            { s: "Finance & Management", m: 100, t: "OBJ + DESC" }
                                                        ].map((row, i) => (
                                                            <tr key={i} className="border-b border-slate-800/50 hover:bg-white/[0.02] transition-colors">
                                                                <td className="p-5 text-white font-bold">{row.s}</td>
                                                                <td className="p-5 text-slate-400 text-center">{row.m}</td>
                                                                <td className="p-5 text-amber-400 font-bold text-right">{row.t}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-4">
                                        <div className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg flex items-center gap-2 text-[11px] font-bold text-red-100">
                                            <AlertCircle className="w-4 h-4 text-red-500" /> Phase 2 counts for MERIT. Phase 1 is SCREENING.
                                        </div>
                                    </div>
                                </div>

                                {/* Syllabus */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 tracking-tight uppercase">
                                        <BookMarked className="w-6 h-6 text-amber-500" /> Advanced Curriculum
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {syllabusData.phase1.map((s, i) => (
                                            <div key={i} className="p-6 bg-slate-950 rounded-2xl border border-slate-800 group hover:border-amber-500/30 transition-all shadow-lg">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
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

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                        {syllabusData.phase2.map((s, i) => (
                                            <div key={i} className="p-6 bg-slate-950 rounded-2xl border border-slate-800 group hover:border-emerald-500/30 transition-all shadow-lg">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
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
                                        <Users className="w-6 h-6 text-amber-500" /> Entry Benchmarks
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 transition-colors hover:border-amber-500/30">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2 opacity-60">Academic Status</div>
                                            <h4 className="font-bold text-white text-lg mb-4 uppercase tracking-tight">60% Marks Mandatory</h4>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed border-l-2 border-amber-600/30 pl-4">Graduation with 60% (50% for reserved) OR PG with 55%. RBI maintains strict audit of academic credentials.</p>
                                        </div>
                                        <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 transition-colors hover:border-amber-500/30">
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2 opacity-60">Age Limit</div>
                                            <h4 className="font-bold text-white text-lg mb-4 uppercase tracking-tight">21 – 30 Years</h4>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed border-l-2 border-amber-600/30 pl-4">Upper age limit relaxations apply for reserved categories as per govt norms.</p>
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
                                                <div className="text-slate-500 font-bold text-[11px] uppercase tracking-widest mb-2">Gross Monthly Remuneration</div>
                                                <div className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8">₹1.08L – ₹1.20L</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Best Lease Plan', 'Medical Cover', 'Grade Allowance', 'Higher NPS Share'].map(p => (
                                                        <span key={p} className="text-[10px] font-bold uppercase px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 whitespace-nowrap">{p}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-4 font-bold border-l border-slate-800 pl-8">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-500 uppercase tracking-widest text-[10px]">Basic Salary</span>
                                                    <span className="text-white">₹55,200+</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-500 uppercase tracking-widest text-[10px]">Rank Status</span>
                                                    <span className="text-white">Grade B (Manager)</span>
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
                            <div className="bg-amber-600 rounded-3xl p-8 text-black shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000"></div>
                                <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">RBI Grade B Apex Pack</h3>
                                <p className="text-amber-950 mb-8 font-medium leading-relaxed opacity-90">Access all detailed mocks, descriptive AI valuation, and interview guidance.</p>
                                <Link href="/government-exams/banking/rbi-grade-b" className="w-full py-4 bg-black text-white font-black rounded-xl flex items-center justify-center gap-2 text-lg shadow-lg active:scale-95 transition-all uppercase tracking-wider">
                                    View Test Series <ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className="p-10 bg-slate-900 rounded-3xl border border-slate-800 text-center shadow-lg group">
                                <Award className="w-10 h-10 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <div className="text-4xl font-black text-white tracking-tight">0.15%</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Success Ratio</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

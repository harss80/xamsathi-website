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
                chapters: ["RBI Circulars", "Monetary Policy", "Banking News", "Government Schemes", "Economic Survey", "Budget 2026", "IMF/World Bank", "Current Affairs (6-8 Months)"]
            },
            {
                subject: "Reasoning",
                icon: Brain,
                chapters: ["Complex Puzzles", "Seating Arrangement", "Syllogism", "Coding-Decoding", "Inequality", "Blood Relation", "Data Sufficiency", "Logical Reasoning"]
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
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-8 font-black uppercase tracking-widest italic">
                    <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking" className="hover:text-amber-400 transition-colors">Banking</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking/rbi-grade-b" className="hover:text-amber-400 transition-colors">RBI Grade B</Link>
                    <span>&rsaquo;</span>
                    <span className="text-white font-black truncate">Roadmap 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-12 md:space-y-20">

                        {/* Banner */}
                        <div className="bg-slate-900 rounded-[3rem] p-7 md:p-14 border border-amber-500/20 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.3em] shadow-lg">
                                    <Award className="w-4 h-4" /> RBI Grade B 2026 Master Guide
                                </div>

                                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase italic underline decoration-amber-500/30 decoration-8 underline-offset-[12px]">
                                    The Apex <br /> Policy Roadmap
                                </h1>

                                <p className="text-lg md:text-2xl text-slate-400 mb-12 font-bold leading-relaxed max-w-2xl italic">
                                    Regulate the Indian economy. RBI Grade B offers the highest salary, elite prestige, and significant policy-level exposure.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-amber-500/50 transition-all shadow-inner">
                                        <Landmark className="w-6 h-6 text-amber-400" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">Central Bank</span>
                                    </div>
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-emerald-500/50 transition-all shadow-inner">
                                        <TrendingUp className="w-6 h-6 text-emerald-400" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">Policy Exposure</span>
                                    </div>
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-blue-500/50 transition-all shadow-inner">
                                        <Rocket className="w-6 h-6 text-blue-400" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">Fast Tenure</span>
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
                                    { id: 'salary', label: 'Salary', icon: Banknote },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-3 px-8 py-6 font-black text-[10px] md:text-[11px] uppercase tracking-[0.25em] transition-all border-b-[4px] shrink-0 ${activeTab === tab.id
                                            ? "border-amber-500 text-amber-500 bg-slate-900 shadow-inner"
                                            : "border-transparent text-slate-500 hover:text-slate-200"
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4" /> {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8 md:p-14 space-y-24 md:space-y-32">

                                {/* Dates Section */}
                                <div id="dates" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Calendar className="w-9 h-9 text-amber-400" /> Exam Cycle 2026 (Expected)
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 hover:border-amber-500/30 transition-all font-black group shadow-inner relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-2 h-full bg-amber-500/5 group-hover:w-full transition-all duration-700"></div>
                                            <div className="relative z-10">
                                                <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Notification</span>
                                                <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">May–June 2026</div>
                                            </div>
                                        </div>
                                        <div className="p-10 bg-amber-600 rounded-[2.5rem] border border-amber-400 shadow-[0_20px_50px_rgba(245,158,11,0.25)] relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-1000"></div>
                                            <div className="relative z-10 font-black">
                                                <span className="text-amber-100 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Phase 1 Exam</span>
                                                <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">July 2026</div>
                                            </div>
                                        </div>
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 font-black group shadow-inner">
                                            <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Phase 2 Exam</span>
                                            <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">August 2026</div>
                                        </div>
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 font-black group shadow-inner">
                                            <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Final Results</span>
                                            <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">Oct/Nov 2026</div>
                                        </div>
                                    </div>
                                    <p className="mt-8 text-center text-slate-500 text-xs font-black uppercase tracking-widest italic">Official Website: <a href="https://rbi.org.in" className="text-amber-400 hover:underline">rbi.org.in</a></p>
                                </div>

                                {/* Selection Summary */}
                                <div className="p-10 md:p-14 bg-slate-950 rounded-[3.5rem] border border-slate-800 shadow-2xl relative overflow-hidden italic">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 mb-6">Selection Protocol</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                        <div className="space-y-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 font-black">01</div>
                                            <h5 className="font-black text-white uppercase tracking-tight">Phase 1</h5>
                                            <p className="text-xs text-slate-600 font-black leading-relaxed">Screening Only. Marks NOT counted in merit. Tough sectional cuts.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-black flex items-center justify-center font-black shadow-lg shadow-amber-500/20">02</div>
                                            <h5 className="font-black text-white uppercase tracking-tight">Phase 2</h5>
                                            <p className="text-xs text-amber-100 font-black leading-relaxed">Merit Component. 300 Marks. 50% Objective + 50% Descriptive.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 font-black">03</div>
                                            <h5 className="font-black text-white uppercase tracking-tight">Interview</h5>
                                            <p className="text-xs text-slate-600 font-black leading-relaxed">75 Marks. Final personality check by the RBI board.</p>
                                        </div>
                                    </div>
                                    <div className="mt-12 pt-10 border-t border-slate-900 text-center">
                                        <span className="px-8 py-3 bg-slate-900 border border-amber-500/30 rounded-full text-[10px] font-black uppercase tracking-widest text-amber-200">
                                            Total Merit = <span className="text-white">Phase 2 (300)</span> + <span className="text-white">Interview (75)</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Section: Pattern */}
                                <div id="pattern" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Layout className="w-9 h-9 text-amber-400" /> Structural Blueprint
                                    </h3>

                                    <div className="space-y-20">
                                        <div>
                                            <h4 className="text-xl font-black text-amber-400 mb-8 uppercase tracking-tight border-l-4 border-amber-600 pl-4 italic">Phase 1: Objectives (200 M)</h4>
                                            <div className="overflow-x-auto rounded-[2.5rem] border border-slate-800 bg-slate-950 p-2 shadow-2xl">
                                                <table className="w-full text-left border-collapse min-w-[500px]">
                                                    <thead>
                                                        <tr className="bg-slate-900 border-b border-slate-800">
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Section</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Qs</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Marks</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-slate-300 font-black text-sm divide-y divide-slate-800/40 italic">
                                                        <tr className="hover:bg-amber-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase tracking-tight">General Awareness</td>
                                                            <td className="p-7">80</td>
                                                            <td className="p-7">80</td>
                                                            <td className="p-7 text-amber-400">25 Min</td>
                                                        </tr>
                                                        <tr className="hover:bg-amber-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase tracking-tight">Reasoning Skill</td>
                                                            <td className="p-7">60</td>
                                                            <td className="p-7">60</td>
                                                            <td className="p-7 text-amber-400">45 Min</td>
                                                        </tr>
                                                        <tr className="hover:bg-amber-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase tracking-tight">English Lang</td>
                                                            <td className="p-7">30</td>
                                                            <td className="p-7">30</td>
                                                            <td className="p-7 text-amber-400">25 Min</td>
                                                        </tr>
                                                        <tr className="hover:bg-amber-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase tracking-tight">Quantitative Apt.</td>
                                                            <td className="p-7">30</td>
                                                            <td className="p-7">30</td>
                                                            <td className="p-7 text-amber-400">25 Min</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xl font-black text-amber-400 mb-8 uppercase tracking-tight border-l-4 border-amber-600 pl-4 italic">Phase 2: Descriptive + Obj (300 M)</h4>
                                            <div className="overflow-x-auto rounded-[2.5rem] border border-slate-800 bg-slate-950 p-2 shadow-2xl">
                                                <table className="w-full text-left border-collapse min-w-[500px]">
                                                    <thead>
                                                        <tr className="bg-slate-900 border-b border-slate-800">
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Paper Spec</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Comp</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Marks</th>
                                                            <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-slate-300 font-black text-sm divide-y divide-slate-800/40 italic">
                                                        <tr className="hover:bg-amber-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase tracking-tight">Economic & Social Issues</td>
                                                            <td className="p-7">Paper 1</td>
                                                            <td className="p-7">100</td>
                                                            <td className="p-7 text-amber-400">OBJ + DESC</td>
                                                        </tr>
                                                        <tr className="hover:bg-amber-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase tracking-tight">English Writing Skills</td>
                                                            <td className="p-7">Paper 2</td>
                                                            <td className="p-7">100</td>
                                                            <td className="p-7 text-amber-400">DESC Only</td>
                                                        </tr>
                                                        <tr className="hover:bg-amber-500/5 transition-all">
                                                            <td className="p-7 text-white font-black uppercase tracking-tight">Finance & Management</td>
                                                            <td className="p-7">Paper 3</td>
                                                            <td className="p-7">100</td>
                                                            <td className="p-7 text-amber-400">OBJ + DESC</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12 flex flex-wrap gap-6 font-black uppercase tracking-widest text-xs italic">
                                        <div className="bg-red-500/10 border border-red-500/20 px-8 py-5 rounded-3xl flex items-center gap-5 text-red-100 shadow-xl">
                                            <AlertCircle className="w-7 h-7 text-red-500" /> Phase 2 counts for MERIT. Phase 1 is SCREENING.
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Syllabus */}
                                <div id="syllabus" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <BookMarked className="w-9 h-9 text-amber-400" /> Advanced Curriculum
                                    </h3>

                                    <div className="space-y-20">
                                        <div>
                                            <h4 className="text-sm font-black text-slate-600 uppercase tracking-[0.4em] mb-10 text-center italic">Phase 1 Specifics</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {syllabusData.phase1.map((s, i) => (
                                                    <div key={i} className="p-8 bg-slate-950 rounded-[2.5rem] border border-slate-800 hover:border-amber-500/40 transition-all font-black shadow-inner group">
                                                        <div className="flex items-center gap-4 mb-8">
                                                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all font-black">
                                                                <s.icon className="w-5 h-5" />
                                                            </div>
                                                            <div className="text-white text-lg tracking-tighter uppercase italic">{s.subject}</div>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2 italic">
                                                            {s.chapters.map((c, idx) => (
                                                                <span key={idx} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] text-slate-500 uppercase tracking-widest leading-none">{c}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-black text-slate-600 uppercase tracking-[0.4em] mb-10 text-center italic">Phase 2 Core Pillars</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                {syllabusData.phase2.map((s, i) => (
                                                    <div key={i} className="p-10 md:p-14 bg-slate-950 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
                                                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><s.icon className="w-24 h-24" /></div>
                                                        <div className="flex items-center gap-6 mb-12">
                                                            <div className="w-16 h-16 rounded-[1.5rem] bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-600 group-hover:text-black shadow-xl transition-all">
                                                                <s.icon className="w-8 h-8" />
                                                            </div>
                                                            <div className="text-white text-2xl font-black uppercase tracking-tighter italic">{s.subject}</div>
                                                        </div>
                                                        <div className="flex flex-wrap gap-3 italic">
                                                            {s.chapters.map((c, idx) => (
                                                                <span key={idx} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-[11px] font-black text-slate-500 uppercase tracking-[0.1em] group-hover:border-slate-700 transition-all">{c}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Eligibility */}
                                <div id="eligibility" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Users className="w-9 h-9 text-amber-400" /> Entry Benchmarks
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 font-black italic">
                                        <div className="p-10 md:p-14 bg-slate-950 rounded-[3rem] border border-slate-800 shadow-2xl group hover:border-amber-500/30 transition-all">
                                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 mb-6 opacity-60">Academic Grade</div>
                                            <h4 className="font-black text-white text-xl md:text-3xl mb-6 uppercase tracking-tighter italic underline decoration-amber-500/30 decoration-6 underline-offset-[14px]">Min 60% Marks</h4>
                                            <p className="text-slate-500 font-black leading-relaxed text-sm md:text-base border-l-[8px] border-amber-600/30 pl-6">Graduation with 60% (50% for reserved) OR PG with 55%. RBI maintains strict audit of academic credentials during selection.</p>
                                        </div>
                                        <div className="p-10 md:p-14 bg-slate-950 rounded-[3rem] border border-slate-800 shadow-2xl group hover:border-amber-500/30 transition-all">
                                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500 mb-6 opacity-60">Age Restrictions</div>
                                            <h4 className="font-black text-white text-xl md:text-3xl mb-6 uppercase tracking-tighter italic underline decoration-amber-500/30 decoration-6 underline-offset-[14px]">21 – 30 Years</h4>
                                            <p className="text-slate-500 font-black leading-relaxed text-sm md:text-base border-l-[8px] border-amber-600/30 pl-6">Standard relaxations for OBC (3Y), SC/ST (5Y) apply. Ph.D holders enjoy extended limits up to 34 years in specific cases.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section: Salary */}
                                <div id="salary" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Banknote className="w-9 h-9 text-emerald-400" /> Highest Banking Pay Scale
                                    </h3>
                                    <div className="p-10 md:p-20 bg-slate-950 rounded-[4.5rem] border-[5px] border-emerald-600/10 relative overflow-hidden group shadow-2xl hover:border-emerald-500/20 transition-all">
                                        <div className="absolute top-0 right-0 p-14 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-[2s]"><Landmark className="w-[400px] h-[400px] text-emerald-500" /></div>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                                            <div>
                                                <div className="text-slate-600 font-black text-[14px] uppercase tracking-[0.4em] mb-6 italic">Gross Monthly Remuneration</div>
                                                <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12 tabular-nums italic group-hover:text-emerald-400 transition-colors">₹1.08L – ₹1.20L<span className="text-xs md:text-sm text-emerald-400 align-top ml-3">+Perks</span></div>
                                                <div className="flex flex-wrap gap-3 font-black italic">
                                                    {['Best Lease Plan', 'Medical Cover', 'LFC Benefits', 'Higher NPS', 'Book Grant', 'Grade Allow'].map(p => (
                                                        <span key={p} className="text-[10px] font-black uppercase px-6 py-3 bg-emerald-500/5 text-emerald-300 rounded-[1.5rem] border border-emerald-500/20 shadow-xl leading-none">{p}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-8 font-black uppercase tracking-tight text-sm md:text-lg italic pt-10 border-t border-slate-900 lg:border-t-0 lg:pt-0">
                                                <div className="flex justify-between items-center border-b border-slate-900 pb-6 group/row">
                                                    <span className="text-slate-600 tracking-[0.3em] text-[12px] group-hover/row:text-slate-400 transition-colors">Basic Salary</span>
                                                    <span className="text-white text-2xl group-hover/row:text-emerald-400 transition-colors">₹55,200+</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-slate-900 pb-6 group/row">
                                                    <span className="text-slate-600 tracking-[0.3em] text-[12px] group-hover/row:text-slate-400 transition-colors">Rank Status</span>
                                                    <span className="text-white text-2xl group-hover/row:text-emerald-400 transition-colors">Grade B (Manager)</span>
                                                </div>
                                                <div className="pt-6">
                                                    <div className="text-[10px] text-emerald-500 opacity-60 tracking-[0.5em] mb-4">Ultimate Trajectory</div>
                                                    <div className="text-white text-xl uppercase tracking-tighter">Deputy Governor / Governor</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Comparison Table */}
                                <div className="mt-32">
                                    <h3 className="text-xl md:text-2xl font-black text-white mb-12 text-center uppercase tracking-[0.3em] italic">RBI vs SBI PO Comparison</h3>
                                    <div className="overflow-x-auto rounded-[3rem] border border-slate-800 bg-slate-900/50 shadow-2xl">
                                        <table className="w-full text-center border-collapse">
                                            <thead>
                                                <tr className="bg-slate-950 border-b-2 border-slate-800">
                                                    <th className="p-8 font-black text-slate-500 uppercase text-xs italic">Feature</th>
                                                    <th className="p-8 font-black text-amber-500 uppercase text-xs italic border-x border-slate-800">RBI Grade B</th>
                                                    <th className="p-8 font-black text-blue-400 uppercase text-xs italic">SBI PO</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-slate-400 font-black italic uppercase text-[11px] md:text-sm divide-y divide-slate-800/40">
                                                <tr className="hover:bg-amber-500/5 transition-all">
                                                    <td className="p-8 text-left pl-12">Gross Salary</td>
                                                    <td className="p-8 text-white border-x border-slate-800/20">₹1.08L+</td>
                                                    <td className="p-8">₹75K+</td>
                                                </tr>
                                                <tr className="hover:bg-amber-500/5 transition-all">
                                                    <td className="p-8 text-left pl-12">Difficulty</td>
                                                    <td className="p-8 text-white border-x border-slate-800/20">EXTREME</td>
                                                    <td className="p-8">HIGH</td>
                                                </tr>
                                                <tr className="hover:bg-amber-500/5 transition-all">
                                                    <td className="p-8 text-left pl-12">Work Pressure</td>
                                                    <td className="p-8 text-white border-x border-slate-800/20">MODERATE</td>
                                                    <td className="p-8">HIGH</td>
                                                </tr>
                                                <tr className="hover:bg-amber-500/5 transition-all">
                                                    <td className="p-8 text-left pl-12">Vacancies</td>
                                                    <td className="p-8 text-white border-x border-slate-800/20">LOW (~250)</td>
                                                    <td className="p-8">HIGH (~2000)</td>
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
                            <div className="bg-slate-900 border-[5px] border-amber-600 rounded-[4rem] p-12 md:p-14 shadow-[0_0_80px_rgba(245,158,11,0.3)] relative overflow-hidden group transition-all hover:scale-[1.01]">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-600/30 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>

                                <h3 className="text-3xl md:text-4xl font-black text-white mb-8 mt-4 relative z-10 leading-[0.8] uppercase tracking-tighter italic">Join The <br /> Apex Series</h3>
                                <p className="text-base text-slate-400 font-bold mb-12 relative z-10 uppercase tracking-tight leading-relaxed italic opacity-80 decoration-amber-500/40 underline underline-offset-8 decoration-4">The definitive simulation training for India's Banking Regulators.</p>

                                <div className="space-y-6 mb-16 p-10 bg-slate-950/90 rounded-[2.5rem] border-2 border-slate-800 relative z-10 font-black uppercase text-[11px] tracking-[0.25em] shadow-2xl text-white italic">
                                    <div className="flex items-center gap-6">
                                        <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" /> Phase 1 Hyper Mocks
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" /> Phase 2 Descriptive AI
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <CheckCircle2 className="w-7 h-7 text-emerald-400 shrink-0" /> Elite Board Interview Prep
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 relative z-10 font-black uppercase tracking-[0.25em] text-xs">
                                    <Link href="/government-exams/banking/rbi-grade-b" className="w-full py-8 bg-amber-600 hover:bg-amber-500 text-black font-black rounded-[2.5rem] text-center transition-all active:scale-95 shadow-2xl shadow-amber-600/40 border-b-8 border-amber-900 leading-none text-xl italic">
                                        Unlock Ultimate
                                    </Link>
                                    <button className="w-full py-8 bg-slate-950 border-2 border-slate-700 text-slate-500 hover:text-white rounded-[2.5rem] transition-all font-black leading-none italic uppercase">
                                        Expert Counseling
                                    </button>
                                </div>
                            </div>

                            {/* stats */}
                            <div className="p-14 bg-slate-950 border-2 border-slate-800 rounded-[4rem] text-center shadow-2xl font-black flex flex-col items-center justify-center relative overflow-hidden group">
                                <div className="absolute -top-10 -left-10 opacity-5 animate-pulse transition-transform duration-[3s] group-hover:rotate-45"><Award className="w-40 h-40 text-amber-500" /></div>
                                <Target className="w-16 h-16 text-amber-500 mb-10 drop-shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-transform group-hover:scale-125 duration-500" />
                                <div className="text-[10px] text-slate-600 font-black uppercase tracking-[0.5em] mb-4 italic">Success Ratio</div>
                                <div className="text-6xl font-black text-white tracking-tighter mb-4 tabular-nums italic">~0.15%</div>
                                <div className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em] italic pt-6 border-t border-slate-900/80 w-full">Highly Selective</div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

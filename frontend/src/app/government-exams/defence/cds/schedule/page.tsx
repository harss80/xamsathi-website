"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, AlertCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, Shield, Landmark, Trophy, TrendingUp, Medal, Zap, ShieldCheck, Crosshair
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function CDSSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-indigo-400 transition-colors">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/defence" className="hover:text-indigo-400 transition-colors">Defence Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/defence/cds" className="hover:text-indigo-400 transition-colors">CDS Exam</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Comprehensive Guide & Schedule</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ What We Cover (Our Offering Highlight) */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-indigo-500/30 shadow-[0_0_40px_rgba(79,70,229,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Shield className="w-4 h-4" /> Graduate Officer Entry
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight uppercase">
                                    CDS & OTA 2026 <br className="hidden md:block" /> Master Training Blueprint
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    Xamsathi's <span className="text-white font-bold">Officer Gold Pass</span> is calibrated for Graduates aiming for the Indian Armed Forces. Written Mocks + Phase 2 SSB Intelligence tests.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-indigo-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20 shadow-inner">
                                            <BookMarked className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">Advanced English</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">UPSC Grade vocabulary, sentence ordering, and grammar usage for 100-mark English papers.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-indigo-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 shadow-inner">
                                            <Globe2 className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">Static & Current GK</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Systematic coverage of History, Polity, Geography and latest Defence Current Affairs.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-indigo-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20 shadow-inner">
                                            <Calculator className="w-6 h-6 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">10th Level Maths</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Intensive practice for Arithmetic, Trigonometry and Geometry (required for IMA/INA/AFA).</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-indigo-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 shadow-inner">
                                            <Crosshair className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">SSB Phase-2 Prep</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">OIR (Officers Intelligence Rating) tests and Psychological module practice sets.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs font-black text-slate-300 flex items-center gap-2 uppercase tracking-widest"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> 85+ Simulations</span>
                                    <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs font-black text-slate-300 flex items-center gap-2 uppercase tracking-widest"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> OTA Men/Women</span>
                                    <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs font-black text-slate-300 flex items-center gap-2 uppercase tracking-widest"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> PYQ Analysis</span>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete CDS Guide */}
                        <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-8 md:p-10 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">UPSC CDS 2026 Complete Academic Guide</h2>
                                <p className="text-slate-400 mt-2 font-medium">Entrance specifications for Indian Military, Naval, Air Force & OTA Academies.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth p-2 gap-2">
                                {[
                                    { id: 'dates', label: 'Expected Dates', icon: Calendar },
                                    { id: 'eligibility', label: 'Academy Specs', icon: Users },
                                    { id: 'pattern', label: 'Written Pattern', icon: FileText },
                                    { id: 'syllabus', label: 'Detailed Topics', icon: BookOpen },
                                    { id: 'ssb', label: 'SSB & Salary', icon: Medal },
                                    { id: 'strategy', label: 'Study Blueprint', icon: Target },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-2 px-6 py-4 font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all rounded-2xl ${activeTab === tab.id
                                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                                            : "text-slate-500 hover:text-slate-200 hover:bg-slate-800"
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4" /> {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8 md:p-10 space-y-16">

                                {/* Intro */}
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-slate-300 font-medium leading-relaxed bg-slate-800/30 p-6 rounded-[2rem] border border-slate-700 shadow-inner">
                                        <span className="text-white font-black uppercase text-lg">🎖️ Commissioned Rank after Graduation</span><br />
                                        The Combined Defence Services (CDS) Exam is conducted by <span className="text-indigo-400 font-bold underline decoration-indigo-500/30">UPSC</span> twice a year. It is the premier gateway for male and female graduates to join the Indian Armed Forces as officers via IMA, INA, AFA, or OTA.
                                    </p>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <Calendar className="w-6 h-6 text-indigo-400" /> CDS 2026 Important Timelines
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-xl relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-4 border-b border-indigo-500/10 pb-2">CDS I 2026 (Phase 1)</div>
                                            <div className="space-y-4 relative z-10">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Notification Release</span>
                                                    <span className="text-white font-black">December 2025</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Exam Execution</span>
                                                    <span className="text-indigo-400 font-black text-lg">April 2026</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-xl relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="text-amber-500 font-black text-xs uppercase tracking-widest mb-4 border-b border-amber-500/10 pb-2">CDS II 2026 (Phase 2)</div>
                                            <div className="space-y-4 relative z-10">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Notification Release</span>
                                                    <span className="text-white font-black">May 2026</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Exam Execution</span>
                                                    <span className="text-amber-500 font-black text-lg">September 2026</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 p-4 bg-slate-900/50 rounded-2xl border border-slate-800 text-center">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Authorized Source: <a href="https://upsc.gov.in" target="_blank" className="text-indigo-400 hover:underline">upsc.gov.in</a></p>
                                    </div>
                                </div>

                                {/* Eligibility Criteria */}
                                <div id="eligibility" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <Users className="w-6 h-6 text-indigo-400" /> Academy-Wise Eligibility
                                    </h3>

                                    <div className="overflow-x-auto mb-10">
                                        <table className="w-full text-left border-collapse bg-slate-950 rounded-[2rem] overflow-hidden border border-slate-800 shadow-xl">
                                            <thead>
                                                <tr className="bg-slate-900 border-b border-slate-800">
                                                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Academy</th>
                                                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Qualification Required</th>
                                                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 text-center">Age Limit</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-xs font-bold text-slate-300">
                                                <tr className="border-b border-slate-800/50 hover:bg-indigo-500/5 transition-colors">
                                                    <td className="p-6 text-white uppercase tracking-tighter">IMA (Indian Military)</td>
                                                    <td className="p-6 italic">Graduation in ANY Discipline</td>
                                                    <td className="p-6 text-center text-indigo-400">19 – 24 Years</td>
                                                </tr>
                                                <tr className="border-b border-slate-800/50 hover:bg-blue-500/5 transition-colors">
                                                    <td className="p-6 text-white uppercase tracking-tighter">INA (Indian Naval)</td>
                                                    <td className="p-6 italic">Engineering (B.Tech/B.E.) Degree</td>
                                                    <td className="p-6 text-center text-blue-400">19 – 24 Years</td>
                                                </tr>
                                                <tr className="border-b border-slate-800/50 hover:bg-purple-500/5 transition-colors">
                                                    <td className="p-6 text-white uppercase tracking-tighter">AFA (Air Force)</td>
                                                    <td className="p-6 italic">B.E. or B.Sc. with Physics & Maths (12th)</td>
                                                    <td className="p-6 text-center text-purple-400">20 – 24 Years</td>
                                                </tr>
                                                <tr className="hover:bg-emerald-500/5 transition-colors">
                                                    <td className="p-6 text-white uppercase tracking-tighter">OTA (Short Service)</td>
                                                    <td className="p-6 italic">Graduation in ANY Discipline</td>
                                                    <td className="p-6 text-center text-emerald-400 font-black">19 – 25 Years</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-[10px] text-slate-500 font-black text-center uppercase tracking-widest mt-4 flex items-center justify-center gap-2">
                                        <AlertCircle className="w-3 h-3 text-amber-500" /> Final year students can apply provisionally. Marital status must be unmarried for most entries.
                                    </p>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <FileText className="w-6 h-6 text-indigo-400" /> Written Examination Pattern
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                            <h4 className="font-black text-white text-xl mb-6 uppercase tracking-tight flex items-center gap-2">
                                                <Crosshair className="w-5 h-5 text-indigo-500" /> IMA / INA / AFA Entry
                                            </h4>
                                            <div className="space-y-4">
                                                {[
                                                    { s: "English", m: "100m", t: "2 hrs" },
                                                    { s: "General Knowledge", m: "100m", t: "2 hrs" },
                                                    { s: "Elementary Math", m: "100m", t: "2 hrs" }
                                                ].map((row, idx) => (
                                                    <div key={idx} className="flex justify-between items-center bg-slate-900/50 px-5 py-4 rounded-xl border border-slate-800">
                                                        <span className="text-xs font-black text-slate-300 uppercase tracking-widest">{row.s}</span>
                                                        <div className="flex items-center gap-4">
                                                            <span className="text-white font-black">{row.m}</span>
                                                            <span className="text-[10px] text-slate-600 uppercase font-bold">{row.t}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="pt-4 flex justify-between items-center">
                                                    <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">Total Composite</span>
                                                    <span className="text-3xl font-black text-white">300m</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                            <h4 className="font-black text-white text-xl mb-6 uppercase tracking-tight flex items-center gap-2">
                                                <Medal className="w-5 h-5 text-emerald-500" /> OTA Entry (Men/Women)
                                            </h4>
                                            <div className="space-y-4">
                                                {[
                                                    { s: "English", m: "100m", t: "2 hrs" },
                                                    { s: "General Knowledge", m: "100m", t: "2 hrs" }
                                                ].map((row, idx) => (
                                                    <div key={idx} className="flex justify-between items-center bg-slate-900/50 px-5 py-4 rounded-xl border border-slate-800">
                                                        <span className="text-xs font-black text-slate-300 uppercase tracking-widest">{row.s}</span>
                                                        <div className="flex items-center gap-4">
                                                            <span className="text-white font-black">{row.m}</span>
                                                            <span className="text-[10px] text-slate-600 uppercase font-bold">{row.t}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="flex items-center justify-between p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 mt-4">
                                                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest leading-none">Mathematics not required for OTA entry.</span>
                                                </div>
                                                <div className="pt-4 flex justify-between items-center">
                                                    <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">Total Composite</span>
                                                    <span className="text-3xl font-black text-white">200m</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                                        <div className="bg-rose-500/10 border border-rose-500/20 px-6 py-2 rounded-full text-[10px] font-black text-rose-400 uppercase tracking-[0.2em] shadow-lg shadow-rose-500/10">Negative Marking: 1/3rd (0.33) per error</div>
                                        <div className="bg-slate-800 border border-slate-700 px-6 py-2 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Objective MCQ Type Offline Exam</div>
                                    </div>
                                </div>

                                {/* Detailed Syllabus */}
                                <div id="syllabus" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <BookOpen className="w-6 h-6 text-indigo-400" /> Syllabus – The Academic Grind
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* English */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-[2rem] p-8 shadow-xl">
                                            <h4 className="font-black text-white flex items-center gap-2 mb-6 uppercase tracking-tight text-lg">
                                                <BookMarked className="w-5 h-5 text-indigo-500" /> 1. English Mastery (100m)
                                            </h4>
                                            <div className="space-y-3">
                                                {["Spotting Errors", "Sentence Improvement", "Synonyms & Antonyms", "Idioms & Phrases", "One Word Substitution", "Ordering of Sentences", "Comprehension"].map(t => (
                                                    <div key={t} className="flex items-center gap-3 text-xs font-bold text-slate-400"><Check className="w-4 h-4 text-indigo-400" /> {t}</div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* GK */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-[2rem] p-8 shadow-xl">
                                            <h4 className="font-black text-white flex items-center gap-2 mb-6 uppercase tracking-tight text-lg">
                                                <Globe2 className="w-5 h-5 text-blue-500" /> 2. General Knowledge (100m)
                                            </h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">History & Polity</div>
                                                    <div className="space-y-2 text-[11px] font-bold text-slate-300 uppercase tracking-tighter">
                                                        <p>Freedom Movement</p>
                                                        <p>Constitution</p>
                                                        <p>Parliamentary Logic</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Science & Current</div>
                                                    <div className="space-y-2 text-[11px] font-bold text-slate-300 uppercase tracking-tighter">
                                                        <p>Physics/Chem/Bio</p>
                                                        <p>Defence Updates</p>
                                                        <p>International Affairs</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Maths */}
                                        <div className="md:col-span-2 bg-gradient-to-br from-slate-950 to-amber-950/20 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
                                            <h4 className="font-black text-white flex items-center gap-2 mb-8 uppercase tracking-tight text-lg">
                                                <Calculator className="w-5 h-5 text-amber-500" /> 3. Elementary Mathematics (100m)
                                            </h4>

                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                                <div className="p-4 bg-slate-900 border border-slate-800 rounded-[1.5rem] hover:bg-slate-850 transition-colors">
                                                    <div className="text-[10px] font-black text-amber-500 uppercase mb-3">Arithmetic</div>
                                                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed lowercase italic">Number system, Percentage, P&L, Time & Work</p>
                                                </div>
                                                <div className="p-4 bg-slate-900 border border-slate-800 rounded-[1.5rem] hover:bg-slate-850 transition-colors">
                                                    <div className="text-[10px] font-black text-amber-500 uppercase mb-3">Geometry</div>
                                                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed lowercase italic">Lines, Angles, Triangles, Theorems</p>
                                                </div>
                                                <div className="p-4 bg-slate-900 border border-slate-800 rounded-[1.5rem] hover:bg-slate-850 transition-colors">
                                                    <div className="text-[10px] font-black text-amber-500 uppercase mb-3">Trig & Mens.</div>
                                                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed lowercase italic">Heights & Distances, Area, Volume</p>
                                                </div>
                                                <div className="p-4 bg-slate-900 border border-slate-800 rounded-[1.5rem] hover:bg-slate-850 transition-colors">
                                                    <div className="text-[10px] font-black text-amber-500 uppercase mb-3">Statistics</div>
                                                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed lowercase italic">Mean, Median, Mode, Data Logic</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SSB Interview & Salary */}
                                <div id="ssb" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <Zap className="w-6 h-6 text-indigo-400" /> SSB Phase 2 & Officer Benefits
                                    </h3>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                                        <div className="lg:col-span-2 bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 shadow-xl overflow-hidden relative group">
                                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                                <Medal className="w-32 h-32 text-indigo-500" />
                                            </div>
                                            <h4 className="font-black text-white text-lg mb-8 uppercase tracking-tight flex items-center gap-2">The SSB Intelligence Board (300 Marks IMA/INA/AFA)</h4>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                                                <div className="space-y-4">
                                                    <div className="bg-slate-900 p-5 rounded-3xl border border-slate-800">
                                                        <p className="text-xs font-black text-indigo-400 uppercase mb-1">Day 1: Screening</p>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">OIR Intelligence Tests & PPDT Simulation.</p>
                                                    </div>
                                                    <div className="bg-slate-900 p-5 rounded-3xl border border-slate-800">
                                                        <p className="text-xs font-black text-indigo-400 uppercase mb-1">Day 2: Psych</p>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">TAT, WAT, SRT & SD – Depth Analysis.</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="bg-slate-900 p-5 rounded-3xl border border-slate-800">
                                                        <p className="text-xs font-black text-indigo-400 uppercase mb-1">Day 3-4: GTO</p>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">GD, Command Tasks & Individual Obstacles.</p>
                                                    </div>
                                                    <div className="bg-slate-900 p-5 rounded-3xl border border-slate-800 font-black text-[11px] text-white flex items-center justify-center h-full border-dashed border-indigo-500/50">
                                                        Day 5: FINAL CONFERENCE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 p-10 rounded-[2.5rem] text-white shadow-2xl flex flex-col justify-center">
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">LT Rank Stipend</div>
                                            <div className="text-5xl font-black mb-1">₹56,100</div>
                                            <div className="text-[11px] font-black uppercase tracking-widest mb-8">Base Scale (+MSP & Allowances)</div>
                                            <div className="space-y-3">
                                                <div className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 flex items-center justify-between">Free Education <Check className="w-4 h-4" /></div>
                                                <div className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 flex items-center justify-between">Full Medical <Check className="w-4 h-4" /></div>
                                                <div className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 flex items-center justify-between">Canteen Access <Check className="w-4 h-4" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Strategy Blueprint 2026 */}
                                <div id="strategy" className="scroll-mt-32 p-10 bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                    <h3 className="text-3xl font-black text-white flex items-center gap-3 mb-10 uppercase tracking-tighter">
                                        <Target className="w-8 h-8 text-indigo-400" /> Officer Preparation Roadmap 2026
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                                        <div className="bg-slate-950/50 p-6 rounded-[2rem] border border-slate-800 group hover:bg-slate-900 transition-all">
                                            <h4 className="font-black text-white mb-3 uppercase tracking-tight text-sm flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-indigo-500 text-slate-950 flex items-center justify-center text-xs">A</div> The English Edge
                                            </h4>
                                            <p className="text-[11px] text-slate-400 font-bold leading-relaxed italic">CDS English is 100m highest-probability score. Focus on high-frequency synonyms and sentence ordering logic daily.</p>
                                        </div>
                                        <div className="bg-slate-950/50 p-6 rounded-[2rem] border border-slate-800 group hover:bg-slate-900 transition-all">
                                            <h4 className="font-black text-white mb-3 uppercase tracking-tight text-sm flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-indigo-500 text-slate-950 flex items-center justify-center text-xs">B</div> Systematic GK
                                            </h4>
                                            <p className="text-[11px] text-slate-400 font-bold leading-relaxed italic">Systematic coverage of freedom movement (History) and constitution (Polity). Keep current affairs defence-specific.</p>
                                        </div>
                                        <div className="bg-slate-950/50 p-6 rounded-[2rem] border border-slate-800 group hover:bg-slate-900 transition-all">
                                            <h4 className="font-black text-white mb-3 uppercase tracking-tight text-sm flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-indigo-500 text-slate-950 flex items-center justify-center text-xs">C</div> Maths Speed Work
                                            </h4>
                                            <p className="text-[11px] text-slate-400 font-bold leading-relaxed italic">IMA/AFA aspirants: Solve LCM/HCF, Trig ratios, and Geometry theorems every alternate day to build muscle memory.</p>
                                        </div>
                                        <div className="bg-slate-950/50 p-6 rounded-[2rem] border border-slate-800 group hover:bg-slate-900 transition-all">
                                            <h4 className="font-black text-white mb-3 uppercase tracking-tight text-sm flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-indigo-500 text-slate-950 flex items-center justify-center text-xs">D</div> SSB Personality
                                            </h4>
                                            <p className="text-[11px] text-slate-400 font-bold leading-relaxed italic">Start reading newspapers and expressing opinions clearly. Physical fitness (running/pull-ups) is mandatory for GTO.</p>
                                        </div>
                                    </div>

                                    <div className="mt-10 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                                        <div className="flex items-center gap-3">
                                            <TrendingUp className="w-6 h-6 text-indigo-400" />
                                            <span className="text-xs font-black text-white uppercase tracking-widest italic">Competition: 2.5 Lakh Applicants | ~400 Selections</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <ShieldCheck className="w-4 h-4 text-indigo-400" />
                                            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Rigorous 10-Year PYQ Coverage Included in Gold Pass</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Training Table */}
                                <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl max-w-2xl mx-auto">
                                    <div className="p-8 border-b border-slate-800">
                                        <h4 className="text-center font-black text-white uppercase tracking-widest text-sm">Post-Selection Training Cycles</h4>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-center border-collapse">
                                            <tbody className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                                                <tr className="border-b border-slate-800/50 hover:bg-slate-800/50">
                                                    <td className="p-4 text-left font-black text-slate-300">IMA Dehradun</td>
                                                    <td className="p-4 text-indigo-400 opacity-60">Permanent Commission</td>
                                                    <td className="p-4 text-indigo-400 font-black">18 Months</td>
                                                </tr>
                                                <tr className="border-b border-slate-800/50 hover:bg-slate-800/50">
                                                    <td className="p-4 text-left font-black text-slate-300">INA Ezhimala</td>
                                                    <td className="p-4 text-blue-400 opacity-60">Navy Officer Entry</td>
                                                    <td className="p-4 text-blue-400 font-black">18 Months</td>
                                                </tr>
                                                <tr className="border-b border-slate-800/50 hover:bg-slate-800/50">
                                                    <td className="p-4 text-left font-black text-slate-300">AFA Dundigal</td>
                                                    <td className="p-4 text-purple-400 opacity-60">Pilot/Ground Entry</td>
                                                    <td className="p-4 text-purple-400 font-black">74 Weeks</td>
                                                </tr>
                                                <tr className="hover:bg-slate-800/50">
                                                    <td className="p-4 text-left font-black text-slate-300">OTA Chennai</td>
                                                    <td className="p-4 text-emerald-400 opacity-60">Short Service (SSC)</td>
                                                    <td className="p-4 text-emerald-400 font-black">49 Weeks</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN - STICKY ACTION CARD */}
                    <div className="lg:col-span-4 hidden md:block">
                        <div className="sticky top-24 bg-slate-900 border-2 border-indigo-600 rounded-[2.5rem] p-10 shadow-[0_0_50px_rgba(79,70,229,0.15)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-6 shadow-lg shadow-indigo-500/20 relative z-10">
                                GOLD PASS ACCESS
                            </div>

                            <h3 className="text-2xl font-black text-white mb-4 relative z-10 leading-tight">Master the Graduation Level Entry</h3>
                            <p className="text-sm text-slate-400 font-medium mb-10 relative z-10 leading-relaxed uppercase tracking-tighter">Your officer career begins here. Comprehensive simulations for all 4 Academies.</p>

                            <div className="space-y-4 mb-10 p-8 bg-slate-950 rounded-[2.5rem] border border-slate-800 relative z-10 group-hover:border-indigo-500/30 transition-all">
                                <div className="flex items-start gap-4 text-[10px] text-white font-black uppercase tracking-[0.2em] leading-relaxed">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" strokeWidth={3} /> UPSC Full Simulation Mocks
                                </div>
                                <div className="flex items-start gap-4 text-[10px] text-white font-black uppercase tracking-[0.2em] leading-relaxed">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" strokeWidth={3} /> Chapter-Wise Analysis Tools
                                </div>
                                <div className="flex items-start gap-4 text-[10px] text-white font-black uppercase tracking-[0.2em] leading-relaxed">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" strokeWidth={3} /> SSB Phase 2 Intelligence Sets
                                </div>
                                <div className="flex items-start gap-4 text-[10px] text-white font-black uppercase tracking-[0.2em] leading-relaxed">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" strokeWidth={3} /> Daily Defence News Feed
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/defence-cds" className="w-full py-5 bg-slate-950 border-2 border-slate-700 hover:border-indigo-500 text-white font-black rounded-2xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2 shadow-inner">
                                    <MonitorPlay className="w-5 h-5 text-blue-400" /> Start Free Mock
                                </Link>
                                <Link href="/government-exams/defence/cds#pricing" className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl text-center transition-all text-2xl shadow-2xl shadow-indigo-600/30 active:scale-95 group-hover:scale-[1.02]">
                                    Claim Gold Pass
                                </Link>
                                <div className="flex items-center justify-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2 grayscale opacity-50">
                                    <ShieldCheck className="w-4 h-4" /> UPSC Graduate Standard
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

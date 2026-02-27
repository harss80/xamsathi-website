"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, AlertCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, Shield, Landmark, Trophy, TrendingUp, Medal, Zap, ShieldCheck, Plane, Crosshair, ZapIcon
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AFCATSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-sky-400 transition-colors">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/defence" className="hover:text-sky-400 transition-colors">Defence Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/defence/afcat" className="hover:text-sky-400 transition-colors">AFCAT</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Comprehensive Guide & Schedule</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ What We Cover (Our Offering Highlight) */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-sky-500/30 shadow-[0_0_40px_rgba(56,189,248,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Plane className="w-4 h-4" /> Touch the Sky with Glory
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight uppercase">
                                    AFCAT 2026 <br className="hidden md:block" /> Officer Admission Blueprint
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    Xamsathi's <span className="text-white font-bold">Air Force Elite Pass</span> is specifically engineered for the 100-question computer-based exam and AFSB selection board.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-sky-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center shrink-0 border border-sky-500/20 shadow-inner">
                                            <BookMarked className="w-6 h-6 text-sky-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">Verbal Ability</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">AFCAT level Cloze tests, Idioms, and Error detection simulation modules.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-sky-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20 shadow-inner">
                                            <Target className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">Spatial Reasoning</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Master the 32-question Reasoning & Military Aptitude section with pattern completion sets.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-sky-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20 shadow-inner">
                                            <Calculator className="w-6 h-6 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">Numerical Speed</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">AFCAT-specific arithmetic shortcuts for Time, Work, Speed & Distance sections.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-sky-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center shrink-0 border border-rose-500/20 shadow-inner">
                                            <Zap className="w-6 h-6 text-rose-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">EKT Technical Bank</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Specialized engineering knowledge test papers for Mechanical, CS and Electrical branches.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs font-black text-slate-300 flex items-center gap-2 uppercase tracking-widest"><CheckCircle2 className="w-4 h-4 text-sky-400" /> 75+ Simulation Sets</span>
                                    <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs font-black text-slate-300 flex items-center gap-2 uppercase tracking-widest"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Flying/GD Stats</span>
                                    <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs font-black text-slate-300 flex items-center gap-2 uppercase tracking-widest"><CheckCircle2 className="w-4 h-4 text-sky-400" /> AFSB Guidance</span>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete AFCAT Guide */}
                        <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-8 md:p-10 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">AFCAT 2026 Complete Academic Guide</h2>
                                <p className="text-slate-400 mt-2 font-medium">Entrance specifications for Flying and Ground Duty Branches of the IAF.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth p-2 gap-2">
                                {[
                                    { id: 'dates', label: 'Cycle Dates', icon: Calendar },
                                    { id: 'eligibility', label: 'Branch Specs', icon: Users },
                                    { id: 'pattern', label: 'Test Pattern', icon: FileText },
                                    { id: 'syllabus', label: 'Full Syllabus', icon: BookOpen },
                                    { id: 'afsb', label: 'AFSB & Salary', icon: Medal },
                                    { id: 'strategy', label: 'Study Blueprint', icon: Target },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-2 px-6 py-4 font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all rounded-2xl ${activeTab === tab.id
                                            ? "bg-sky-600 text-white shadow-lg shadow-sky-500/20"
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
                                        <span className="text-white font-black uppercase text-lg">✈️ Aim for the Sky</span><br />
                                        The Air Force Common Admission Test (AFCAT) is conducted by the Indian Air Force twice a year for recruitment of officers in Flying and Ground Duty branches. It is the leading entry for graduates into the gazetted officers rank of the IAF.
                                    </p>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <Calendar className="w-6 h-6 text-sky-400" /> AFCAT 2026 Expected Cycle
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-xl relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="text-sky-400 font-black text-xs uppercase tracking-widest mb-4 border-b border-sky-500/10 pb-2">AFCAT 1 2026 (Winter)</div>
                                            <div className="space-y-4 relative z-10">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Notification</span>
                                                    <span className="text-white font-black">Dec 2025</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Written Exam</span>
                                                    <span className="text-sky-400 font-black text-lg">Feb 2026</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-xl relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-4 border-b border-indigo-500/10 pb-2">AFCAT 2 2026 (Summer)</div>
                                            <div className="space-y-4 relative z-10">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Notification</span>
                                                    <span className="text-white font-black">June 2026</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Written Exam</span>
                                                    <span className="text-indigo-400 font-black text-lg">Aug 2026</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 p-4 bg-slate-900/50 rounded-2xl border border-slate-800 text-center">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Authorized Source: <a href="https://afcat.cdac.in" target="_blank" className="text-sky-400 hover:underline">afcat.cdac.in</a></p>
                                    </div>
                                </div>

                                {/* Eligibility Criteria */}
                                <div id="eligibility" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <Users className="w-6 h-6 text-sky-400" /> Branch Wise Eligibility
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                        <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl group hover:border-sky-500/30 transition-all">
                                            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-4 border border-sky-500/20">
                                                <Plane className="w-5 h-5 text-sky-400" />
                                            </div>
                                            <h4 className="font-black text-white text-sm uppercase mb-3 tracking-tight">Flying Branch</h4>
                                            <p className="text-[10px] text-slate-400 font-bold leading-relaxed mb-4 italic">60% in Graduation + Physics/Maths at 10+2 level. B.E/B.Tech also eligible.</p>
                                            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                                                <span className="text-[10px] font-black uppercase text-slate-500">Age Limit</span>
                                                <span className="text-xs font-black text-sky-400">20-24 Yrs</span>
                                            </div>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl group hover:border-indigo-500/30 transition-all">
                                            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-4 border border-indigo-500/20">
                                                <Shield className="w-5 h-5 text-indigo-400" />
                                            </div>
                                            <h4 className="font-black text-white text-sm uppercase mb-3 tracking-tight">GD Technical</h4>
                                            <p className="text-[10px] text-slate-400 font-bold leading-relaxed mb-4 italic">B.E/B.Tech with minimum 60% marks in relevant Engineering disciplines.</p>
                                            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                                                <span className="text-[10px] font-black uppercase text-slate-500">Age Limit</span>
                                                <span className="text-xs font-black text-indigo-400">20-26 Yrs</span>
                                            </div>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-[2rem] border border-slate-800 shadow-xl group hover:border-emerald-500/30 transition-all">
                                            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20">
                                                <Users className="w-5 h-5 text-emerald-400" />
                                            </div>
                                            <h4 className="font-black text-white text-sm uppercase mb-3 tracking-tight">GD Non-Technical</h4>
                                            <p className="text-[10px] text-slate-400 font-bold leading-relaxed mb-4 italic">Graduation with 60% in any discipline. Logistics, Admin & Accounts entries.</p>
                                            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                                                <span className="text-[10px] font-black uppercase text-slate-500">Age Limit</span>
                                                <span className="text-xs font-black text-emerald-400">20-26 Yrs</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Physical standards snippet */}
                                    <div className="bg-slate-900 rounded-[2rem] p-6 border border-slate-800 flex flex-wrap items-center justify-center gap-8 text-center shadow-inner">
                                        <div>
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Height (Male)</div>
                                            <div className="text-xl font-black text-white tracking-tighter">162.5 cm</div>
                                        </div>
                                        <div className="w-px h-10 bg-slate-800 hidden sm:block"></div>
                                        <div>
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Height (Female)</div>
                                            <div className="text-xl font-black text-white tracking-tighter">152 cm</div>
                                        </div>
                                        <div className="w-px h-10 bg-slate-800 hidden sm:block"></div>
                                        <div>
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Flying (Vision)</div>
                                            <div className="text-xl font-black text-white tracking-tighter">6/6 Correctable</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <FileText className="w-6 h-6 text-sky-400" /> Online Test Pattern
                                    </h3>

                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                        <div className="lg:col-span-12 bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                                                <div>
                                                    <h4 className="font-black text-white text-xl mb-6 uppercase tracking-tight flex items-center gap-2">
                                                        <MonitorPlay className="w-5 h-5 text-sky-500" /> AFCAT Online Test
                                                    </h4>
                                                    <div className="space-y-4">
                                                        {[
                                                            { s: "General Awareness", q: "25 Qs", m: "75m" },
                                                            { s: "Verbal Ability (English)", q: "25 Qs", m: "75m" },
                                                            { s: "Numerical Ability", q: "18 Qs", m: "54m" },
                                                            { s: "Reasoning & Aptitude", q: "32 Qs", m: "96m" }
                                                        ].map((row, idx) => (
                                                            <div key={idx} className="flex justify-between items-center bg-slate-900/50 px-5 py-4 rounded-xl border border-slate-800">
                                                                <span className="text-xs font-black text-slate-300 uppercase tracking-widest">{row.s}</span>
                                                                <div className="flex items-center gap-4">
                                                                    <span className="text-[10px] text-slate-500 font-bold uppercase">{row.q}</span>
                                                                    <span className="text-white font-black">{row.m}</span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <div className="pt-6 border-t border-slate-800 flex justify-between items-baseline">
                                                            <span className="text-lg font-black text-white uppercase tracking-tighter">Total Composite</span>
                                                            <span className="text-4xl font-black text-sky-400 tracking-tighter">300 Marks</span>
                                                        </div>
                                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center mt-2">120 Minutes Duration</div>
                                                    </div>
                                                </div>

                                                <div className="space-y-8">
                                                    <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800">
                                                        <h5 className="text-[11px] font-black text-sky-500 uppercase tracking-[0.3em] mb-4">Marking Policy</h5>
                                                        <div className="space-y-4">
                                                            <div className="flex items-center justify-between text-xs font-bold font-sans">
                                                                <span className="text-slate-400">Correct Answer</span>
                                                                <span className="text-emerald-400 font-black">+3 Marks</span>
                                                            </div>
                                                            <div className="flex items-center justify-between text-xs font-bold font-sans">
                                                                <span className="text-slate-400">Wrong Answer</span>
                                                                <span className="text-rose-400 font-black">-1 Mark</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="bg-indigo-600 p-8 rounded-[2rem] text-white relative overflow-hidden group/ekt">
                                                        <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 transition-transform group-hover/ekt:scale-110">
                                                            <Calculator className="w-24 h-24 text-white" />
                                                        </div>
                                                        <div className="relative z-10">
                                                            <h5 className="font-black text-sm uppercase mb-3 tracking-widest">EKT (Technical Entry)</h5>
                                                            <p className="text-[10px] font-bold opacity-80 leading-relaxed mb-6 uppercase tracking-tight italic">Only for Ground Duty (Technical) branch candidates. Computer based.</p>
                                                            <div className="flex justify-between border-t border-white/20 pt-4">
                                                                <div>
                                                                    <div className="text-lg font-black">50 Qs</div>
                                                                    <div className="text-[8px] font-black opacity-60 uppercase">Intensity</div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-lg font-black text-indigo-200">150m</div>
                                                                    <div className="text-[8px] font-black opacity-60 uppercase">Max Marks</div>
                                                                </div>
                                                                <div className="text-right">
                                                                    <div className="text-lg font-black">45m</div>
                                                                    <div className="text-[8px] font-black opacity-60 uppercase">Time cap</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Syllabus */}
                                <div id="syllabus" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <BookOpen className="w-6 h-6 text-sky-400" /> Syllabus – Academic Breakdown
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-slate-950 border border-slate-800 rounded-[2.5rem] p-8 shadow-xl">
                                            <h4 className="font-black text-sky-400 text-sm mb-6 uppercase tracking-[0.2em] flex items-center gap-2 italic underline decoration-sky-500/20 underline-offset-8">
                                                <BookMarked className="w-5 h-5" /> Verbal Ability
                                            </h4>
                                            <div className="flex flex-wrap gap-2 text-[11px] font-bold text-slate-400">
                                                {["Comprehension Mastery", "Error Detection logic", "Sentence Completion", "Synonyms & Antonyms", "Idioms & Phrases", "Cloze Test Strategy"].map(t => (
                                                    <span key={t} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg">{t}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-slate-950 border border-slate-800 rounded-[2.5rem] p-8 shadow-xl">
                                            <h4 className="font-black text-indigo-400 text-sm mb-6 uppercase tracking-[0.2em] flex items-center gap-2 italic underline decoration-indigo-500/20 underline-offset-8">
                                                <Target className="w-5 h-5" /> Reasoning & Aptitude
                                            </h4>
                                            <div className="flex flex-wrap gap-2 text-[11px] font-bold text-slate-400">
                                                {["Verbal/Non-Verbal Reasoning", "Logic Series", "Coding-Decoding", "Blood Relations", "Spatial Ability Simulation", "Pattern Completion"].map(t => (
                                                    <span key={t} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg">{t}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-slate-950 border border-slate-800 rounded-[2.5rem] p-8 shadow-xl">
                                            <h4 className="font-black text-amber-500 text-sm mb-6 uppercase tracking-[0.2em] flex items-center gap-2 italic underline decoration-amber-500/20 underline-offset-8">
                                                <Calculator className="w-5 h-5" /> Numerical Ability
                                            </h4>
                                            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[10px] font-black uppercase text-slate-500">
                                                <p>Percentage logic</p>
                                                <p>Ratio & Proportion</p>
                                                <p>Profit & Loss</p>
                                                <p>Time & Work Dynamics</p>
                                                <p>Average / Speed</p>
                                                <p>Compound Interest</p>
                                            </div>
                                        </div>

                                        <div className="bg-slate-950 border border-slate-800 rounded-[2.5rem] p-8 shadow-xl">
                                            <h4 className="font-black text-blue-500 text-sm mb-6 uppercase tracking-[0.2em] flex items-center gap-2 italic underline decoration-blue-500/20 underline-offset-8">
                                                <Globe2 className="w-5 h-5" /> General Awareness
                                            </h4>
                                            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[10px] font-black uppercase text-slate-500">
                                                <p>Freedom Movement</p>
                                                <p>Indian Geography</p>
                                                <p>Polity / Constitution</p>
                                                <p>Basic Science (Phys/Bio)</p>
                                                <p>Defence Specific news</p>
                                                <p>International Sports</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* AFSB Selection & Salary */}
                                <div id="afsb" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <Medal className="w-6 h-6 text-sky-400" /> AFSB Selection & Air Force Lifestyle
                                    </h3>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                                        <div className="lg:col-span-2 bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 shadow-xl overflow-hidden relative group">
                                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                                <Target className="w-32 h-32 text-sky-500" />
                                            </div>
                                            <h4 className="font-black text-white text-lg mb-8 uppercase tracking-tight flex items-center gap-2">AFSB – The 5-Day Integration</h4>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                                                <div className="space-y-4">
                                                    <div className="bg-slate-900 p-5 rounded-3xl border border-slate-800 flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center font-black text-xs shrink-0">1</div>
                                                        <p className="text-[10px] font-black text-white uppercase leading-relaxed tracking-widest"><span className="text-sky-400">Day 1:</span> Screening (OIR Tests & PPDT Screening).</p>
                                                    </div>
                                                    <div className="bg-slate-900 p-5 rounded-3xl border border-slate-800 flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center font-black text-xs shrink-0">2-4</div>
                                                        <p className="text-[10px] font-black text-white uppercase leading-relaxed tracking-widest"><span className="text-sky-400">Psychology & GTO:</span> TAT, WAT, Situation Reaction.</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="bg-sky-500/10 p-5 rounded-3xl border border-sky-500/20 flex flex-col justify-center text-center">
                                                        <p className="text-[10px] font-black text-sky-400 uppercase mb-1">CPSS Test</p>
                                                        <p className="text-[9px] text-slate-500 font-black leading-tight uppercase">(For Flying Branch Only – Once in Lifetime Opportunity)</p>
                                                    </div>
                                                    <div className="bg-slate-800 p-5 rounded-3xl border border-slate-700 flex items-center justify-center font-black text-xs text-slate-400 uppercase tracking-widest leading-none">
                                                        Day 5: FINAL CONFERENCE
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-sky-600 to-sky-900 p-10 rounded-[2.5rem] text-white shadow-2xl flex flex-col justify-center">
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70 italic underline decoration-white/20">Flying Officer Pay</div>
                                            <div className="text-5xl font-black mb-1">₹56,100</div>
                                            <div className="text-[11px] font-black uppercase tracking-widest mb-10">Level-10 Stipend in Training</div>
                                            <div className="space-y-2 border-t border-white/10 pt-6">
                                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                                    <span>Flying Allow.</span>
                                                    <span className="text-sky-200">₹25,000+</span>
                                                </div>
                                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                                    <span>Training (Fly)</span>
                                                    <span className="text-sky-200">74 Weeks</span>
                                                </div>
                                                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                                                    <span>Training (GD)</span>
                                                    <span className="text-sky-200">52 Weeks</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Study Blueprint 2026 */}
                                <div id="strategy" className="scroll-mt-32 p-10 bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                    <h3 className="text-3xl font-black text-white flex items-center gap-3 mb-10 uppercase tracking-tighter">
                                        <Target className="w-8 h-8 text-indigo-400" /> AFCAT Officer Blueprint 2026
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                                        <div className="bg-slate-950/50 p-8 rounded-[2rem] border border-slate-800 group hover:shadow-2xl hover:bg-slate-900 transition-all border-l-4 border-l-sky-500">
                                            <h4 className="font-black text-white mb-4 uppercase tracking-tight text-sm flex items-center justify-between">
                                                Reasoning Master <ZapIcon className="w-4 h-4 text-sky-500" />
                                            </h4>
                                            <p className="text-[11px] text-slate-400 font-bold leading-relaxed italic lowercase tracking-tight">Reasoning (32 Qs) is the core. Focus on spatial ability and military aptitude patterns for a 90+ score in this section.</p>
                                        </div>
                                        <div className="bg-slate-950/50 p-8 rounded-[2rem] border border-slate-800 group hover:shadow-2xl hover:bg-slate-900 transition-all border-l-4 border-l-indigo-500">
                                            <h4 className="font-black text-white mb-4 uppercase tracking-tight text-sm flex items-center justify-between">
                                                Numerical Logic <Calculator className="w-4 h-4 text-indigo-500" />
                                            </h4>
                                            <p className="text-[11px] text-slate-400 font-bold leading-relaxed italic lowercase tracking-tight">Level is Grade 10 but speed is key. Practice 18 math questions every day to finish them within 20 minutes under pressure.</p>
                                        </div>
                                        <div className="bg-slate-950/50 p-8 rounded-[2rem] border border-slate-800 group hover:shadow-2xl hover:bg-slate-900 transition-all border-l-4 border-l-emerald-500">
                                            <h4 className="font-black text-white mb-4 uppercase tracking-tight text-sm flex items-center justify-between">
                                                GA Systematic <Globe2 className="w-4 h-4 text-emerald-500" />
                                            </h4>
                                            <p className="text-[11px] text-slate-400 font-bold leading-relaxed italic lowercase tracking-tight">Track last 8 months of current affairs with a heavy focus on IAF aircraft, military exercises, and national awards.</p>
                                        </div>
                                        <div className="bg-slate-950/50 p-8 rounded-[2rem] border border-slate-800 group hover:shadow-2xl hover:bg-slate-900 transition-all border-l-4 border-l-amber-500">
                                            <h4 className="font-black text-white mb-4 uppercase tracking-tight text-sm flex items-center justify-between">
                                                English Vocab <BookMarked className="w-4 h-4 text-amber-500" />
                                            </h4>
                                            <p className="text-[11px] text-slate-400 font-bold leading-relaxed italic lowercase tracking-tight">Master 500 high-frequency AFCAT words. Sentence rearrangement and comprehension are easy marks if practiced daily.</p>
                                        </div>
                                    </div>

                                    <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-10 bg-slate-950/50 p-8 rounded-[2rem] border border-slate-800 relative z-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                                                <Trophy className="w-6 h-6 text-sky-400" />
                                            </div>
                                            <div>
                                                <div className="text-lg font-black text-white leading-none mb-1 uppercase tracking-tighter">Gold Standard Prep</div>
                                                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Designed for Air Force Selection Standards</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">10 Years PYQ Analysis Included in Elite Pass</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN - STICKY ACTION CARD */}
                    <div className="lg:col-span-4 hidden md:block">
                        <div className="sticky top-24 bg-slate-900 border-2 border-sky-600 rounded-[2.5rem] p-10 shadow-[0_0_50px_rgba(56,189,248,0.15)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest mb-8 shadow-lg shadow-sky-500/20 relative z-10">
                                ELITE PASS ACCESS
                            </div>

                            <h3 className="text-3xl font-black text-white mb-4 relative z-10 leading-tight uppercase tracking-tighter">Claim the <br /> Officer Rank</h3>
                            <p className="text-sm text-slate-400 font-medium mb-10 relative z-10 leading-relaxed uppercase tracking-widest italic">Prepare for Flying, GD Technical & Non-Technical with one single blueprint.</p>

                            <div className="space-y-4 mb-10 p-8 bg-slate-950 rounded-[2.5rem] border border-slate-800 relative z-10 group-hover:border-sky-500/30 transition-all shadow-inner">
                                <div className="flex items-start gap-4 text-[10px] text-white font-black uppercase tracking-[0.2em] leading-relaxed">
                                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" strokeWidth={3} /> AFCAT Online Test Simulators
                                </div>
                                <div className="flex items-start gap-4 text-[10px] text-white font-black uppercase tracking-[0.2em] leading-relaxed">
                                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" strokeWidth={3} /> EKT Branch Specific Papers
                                </div>
                                <div className="flex items-start gap-4 text-[10px] text-white font-black uppercase tracking-[0.2em] leading-relaxed">
                                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" strokeWidth={3} /> AFSB Stage-1 OIR Modules
                                </div>
                                <div className="flex items-start gap-4 text-[10px] text-white font-black uppercase tracking-[0.2em] leading-relaxed">
                                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" strokeWidth={3} /> Weekly Defence News Analysis
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/defence-afcat" className="w-full py-5 bg-slate-950 border-2 border-slate-700 hover:border-sky-500 text-white font-black rounded-2xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2 shadow-inner">
                                    <MonitorPlay className="w-5 h-5 text-indigo-400" /> Launch Simulation
                                </Link>
                                <Link href="/government-exams/defence/afcat#pricing" className="w-full py-5 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-2xl text-center transition-all text-2xl shadow-2xl shadow-sky-600/30 active:scale-95 group-hover:scale-[1.02]">
                                    Get Elite Pass
                                </Link>
                                <div className="flex items-center justify-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2 grayscale opacity-50">
                                    <ShieldCheck className="w-4 h-4" /> CDAC/IAF Selection Standard
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

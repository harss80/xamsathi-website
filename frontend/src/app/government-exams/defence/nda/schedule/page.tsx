"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, AlertCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, Shield, Landmark, Trophy, TrendingUp, Medal, Zap, ShieldCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function NDASchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-emerald-400 transition-colors">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/defence" className="hover:text-emerald-400 transition-colors">Defence Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/defence/nda" className="hover:text-emerald-400 transition-colors">NDA & NA</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Preparation Guide & Schedule</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ What We Cover (Our Offering Highlight) */}
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Target className="w-4 h-4" /> Comprehensive Coverage
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight uppercase">
                                    How We Prepare You <br className="hidden md:block" /> For NDA & NA 2026
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    Xamsathi's <span className="text-white font-bold">Officer Elite Pass</span> is engineered for students who want to clear the written + SSB stages in their first attempt.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-emerald-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 shadow-inner">
                                            <Calculator className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">Advanced Maths</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">UPSC Grade chapter tests for Calculus, Trigonometry, and Algebra with step-by-step logic.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-emerald-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 shadow-inner">
                                            <Globe2 className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">GAT Simulation</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">150-question 600-mark full simulators covering Physics, English, and National Events.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-emerald-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20 shadow-inner">
                                            <Shield className="w-6 h-6 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">SSB OIR Modules</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Prepare for Day 1 Screening with Officers Intelligence Rating (OIR) practice sets.</p>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-slate-950/50 rounded-3xl border border-slate-800 flex items-start gap-4 hover:border-emerald-500/30 transition-all">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 shadow-inner">
                                            <BookMarked className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white mb-1 uppercase tracking-tight">Daily Current Affairs</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Defence focused daily news, awards, and sports updates tailored for GAT section.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs font-black text-slate-300 flex items-center gap-2 uppercase tracking-widest"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 105+ Total Tests</span>
                                    <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs font-black text-slate-300 flex items-center gap-2 uppercase tracking-widest"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Hindi & English</span>
                                    <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-xs font-black text-slate-300 flex items-center gap-2 uppercase tracking-widest"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> AI SSB Profile</span>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete NDA Guide */}
                        <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-8 md:p-10 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">UPSC NDA & NA 2026 Complete Guide</h2>
                                <p className="text-slate-400 mt-2 font-medium">Official details, patterns, and preparation strategy for serious aspirants.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth p-2 gap-2">
                                {[
                                    { id: 'dates', label: 'Important Dates', icon: Calendar },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'pattern', label: 'Exam Pattern', icon: FileText },
                                    { id: 'syllabus', label: 'Detailed Syllabus', icon: BookOpen },
                                    { id: 'salary', label: 'Salary & SSB', icon: Medal },
                                    { id: 'tips', label: 'Strategy', icon: Target },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-2 px-6 py-4 font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all rounded-2xl ${activeTab === tab.id
                                            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20"
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
                                        <span className="text-white font-black uppercase text-lg">🏔️ Gateway to Officer Rank</span><br />
                                        NDA & NA exam is conducted by <span className="text-emerald-400 font-bold underline decoration-emerald-500/30">UPSC</span> for admission into the National Defence Academy (Army, Navy, Air Force) and Indian Naval Academy. It is conducted twice a year (NDA I & NDA II) for students aiming for direct officer commission at a young age.
                                    </p>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <Calendar className="w-6 h-6 text-emerald-400" /> NDA & NA 2026 Expected Dates
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-xl">
                                            <div className="text-emerald-400 font-black text-xs uppercase tracking-widest mb-4 border-b border-emerald-500/10 pb-2">NDA I 2026</div>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Notification</span>
                                                    <span className="text-white font-black">Dec 2025</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Exam Date</span>
                                                    <span className="text-emerald-400 font-black">April 2026</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 shadow-xl">
                                            <div className="text-blue-400 font-black text-xs uppercase tracking-widest mb-4 border-b border-blue-500/10 pb-2">NDA II 2026</div>
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Notification</span>
                                                    <span className="text-white font-black">May 2026</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-400 font-bold">Exam Date</span>
                                                    <span className="text-blue-400 font-black">Sept 2026</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 p-4 bg-slate-900/50 rounded-2xl border border-slate-800 text-center">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Official Website: <a href="https://upsc.gov.in" target="_blank" className="text-blue-400 hover:underline">upsc.gov.in</a></p>
                                    </div>
                                </div>

                                {/* Eligibility Criteria */}
                                <div id="eligibility" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <Users className="w-6 h-6 text-emerald-400" /> Eligibility Standards
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <Landmark className="w-24 h-24 text-white" />
                                            </div>
                                            <div className="flex items-center gap-2 text-white font-black text-lg mb-6 uppercase tracking-tight">
                                                <Medal className="w-5 h-5 text-amber-500" /> Academic Qualifications
                                            </div>
                                            <ul className="space-y-4 text-sm text-slate-400 font-bold">
                                                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span className="text-slate-200">Army Wing:</span> 12th Pass in any stream.</li>
                                                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span className="text-slate-200">Navy & Air Force:</span> 12th Pass with Physics & Maths.</li>
                                                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span className="text-slate-200">Appearing:</span> 12th appearing students can also apply.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <Clock className="w-24 h-24 text-white" />
                                            </div>
                                            <div className="flex items-center gap-2 text-white font-black text-lg mb-6 uppercase tracking-tight">
                                                <Calendar className="w-5 h-5 text-blue-400" /> Age & Status
                                            </div>
                                            <ul className="space-y-4 text-sm text-slate-400 font-bold">
                                                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Range: 16.5 to 19.5 years.</li>
                                                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Unmarried: Mandatory for both Male & Female.</li>
                                                <li className="flex items-start gap-3"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Nationality: Citizen of India / Nepal / Tibetan Refugee.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Physical Standards Banner */}
                                    <div className="mt-8 bg-gradient-to-br from-slate-900 to-emerald-950/20 p-8 rounded-[2rem] border border-emerald-500/20 shadow-xl">
                                        <h4 className="font-black text-white mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-emerald-500" /> Physical Standards
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                            <div className="text-center">
                                                <div className="text-xs font-black text-slate-500 mb-1 uppercase">Army Height</div>
                                                <div className="text-2xl font-black text-white">157 cm</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-xs font-black text-slate-500 mb-1 uppercase">Air Force Height</div>
                                                <div className="text-2xl font-black text-white">162.5 cm</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-xs font-black text-slate-500 mb-1 uppercase">Navy Height</div>
                                                <div className="text-2xl font-black text-white">157 cm</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-xs font-black text-slate-500 mb-1 uppercase">Weight</div>
                                                <div className="text-[10px] sm:text-xs font-black text-white uppercase mt-2">Proportionate to Height</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <FileText className="w-6 h-6 text-emerald-400" /> Exam Pattern (Written Stage)
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000"></div>
                                            <h4 className="font-black text-white text-xl mb-6 uppercase tracking-tight flex items-center gap-2">
                                                <Calculator className="w-5 h-5 text-emerald-500" /> Paper 1: Maths
                                            </h4>
                                            <div className="space-y-6">
                                                <div className="flex justify-between items-end border-b border-slate-800 pb-4">
                                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Total Marks</span>
                                                    <span className="text-3xl font-black text-white">300</span>
                                                </div>
                                                <div className="flex justify-between items-end border-b border-slate-800 pb-4">
                                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Questions</span>
                                                    <span className="text-xl font-black text-white">120</span>
                                                </div>
                                                <div className="flex justify-between items-end border-b border-slate-800 pb-4">
                                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Time Duration</span>
                                                    <span className="text-xl font-black text-white">150 Mins</span>
                                                </div>
                                                <div className="bg-rose-500/10 p-3 rounded-xl border border-rose-500/20 text-center">
                                                    <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Negative Marking: -0.83</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-2xl relative group overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-1000"></div>
                                            <h4 className="font-black text-white text-xl mb-6 uppercase tracking-tight flex items-center gap-2">
                                                <FileText className="w-5 h-5 text-blue-500" /> Paper 2: GAT
                                            </h4>
                                            <div className="space-y-6">
                                                <div className="flex justify-between items-end border-b border-slate-800 pb-4">
                                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Total Marks</span>
                                                    <span className="text-3xl font-black text-white">600</span>
                                                </div>
                                                <div className="flex flex-col gap-2 mt-4 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-xs font-bold text-slate-400">English</span>
                                                        <span className="font-black text-blue-400">200m</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-xs font-bold text-slate-400">General Knowledge</span>
                                                        <span className="font-black text-blue-400">400m</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-end border-b border-slate-800 pb-4">
                                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Time Duration</span>
                                                    <span className="text-xl font-black text-white">150 Mins</span>
                                                </div>
                                                <div className="bg-rose-500/10 p-3 rounded-xl border border-rose-500/20 text-center">
                                                    <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Negative Marking: -1.33</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-6 bg-slate-900 rounded-3xl border border-slate-800 text-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-14 font-black">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Written Total</span>
                                                <span className="text-4xl text-white">900m</span>
                                            </div>
                                            <div className="text-3xl text-slate-700 hidden md:block">+</div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-slate-500 uppercase tracking-widest">SSB Interview</span>
                                                <span className="text-4xl text-white">900m</span>
                                            </div>
                                            <div className="text-3xl text-emerald-500 hidden md:block">=</div>
                                            <div className="flex flex-col bg-emerald-500/10 px-6 py-3 rounded-2xl border border-emerald-500/20 shadow-lg">
                                                <span className="text-[10px] text-emerald-400 uppercase tracking-[0.2em]">Final Selection Merit</span>
                                                <span className="text-4xl text-emerald-400 tracking-tighter">1800m</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Syllabus */}
                                <div id="syllabus" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <BookOpen className="w-6 h-6 text-emerald-400" /> Detailed Chapter-Wise Syllabus
                                    </h3>

                                    <div className="space-y-6">
                                        {/* Mathematics */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-[2rem] overflow-hidden shadow-xl">
                                            <div className="bg-emerald-600 px-8 py-4 font-black text-white text-sm uppercase tracking-widest flex items-center justify-between">
                                                <span>1. Mathematics (300 Marks)</span>
                                                <Medal className="w-5 h-5 text-emerald-200" />
                                            </div>
                                            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                                                <div>
                                                    <h5 className="font-black text-white mb-3 text-xs uppercase tracking-widest text-emerald-400">Algebra</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {["Quadratic Equations", "Matrices", "Determinants", "Complex Numbers", "Logarithms", "Binomial Theorem"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-300">{t}</span>)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="font-black text-white mb-3 text-xs uppercase tracking-widest text-emerald-400">Trigonometry</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {["Trig Ratios", "Identities", "Heights & Distances", "Inverse Trig"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-300">{t}</span>)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="font-black text-white mb-3 text-xs uppercase tracking-widest text-emerald-400">Calculus</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {["Limits", "Differentiation", "Integration", "Diff Equations"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-300">{t}</span>)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="font-black text-white mb-3 text-xs uppercase tracking-widest text-emerald-400">Analytical Geometry</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {["Straight Lines", "Circle", "Parabola", "Ellipse", "Hyperbola"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-300">{t}</span>)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="font-black text-white mb-3 text-xs uppercase tracking-widest text-emerald-400">Statistics & Prob</h5>
                                                    <div className="flex flex-wrap gap-2">
                                                        {["Mean/Median", "Variance", "Std Deviation", "Probability"].map(t => <span key={t} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] font-bold text-slate-300">{t}</span>)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* English & Logic */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-[2rem] overflow-hidden shadow-xl">
                                            <div className="bg-blue-600 px-8 py-4 font-black text-white text-sm uppercase tracking-widest flex items-center justify-between">
                                                <span>2. English & Vocabulary (200 Marks)</span>
                                                <BookMarked className="w-5 h-5 text-blue-200" />
                                            </div>
                                            <div className="p-8 flex flex-wrap gap-3">
                                                {["Grammar Usage", "Spotting Errors", "Synonyms & Antonyms", "Idioms & Phrases", "Reading Comprehension", "Sentence Improvement", "Vocab Building"].map(t => <span key={t} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-black text-slate-300 transition-colors hover:border-blue-500/50">{t}</span>)}
                                            </div>
                                        </div>

                                        {/* General Knowledge */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-[2rem] overflow-hidden shadow-xl">
                                            <div className="bg-amber-600 px-8 py-4 font-black text-white text-sm uppercase tracking-widest flex items-center justify-between">
                                                <span>3. General Knowledge & Science (400 Marks)</span>
                                                <Globe2 className="w-5 h-5 text-amber-200" />
                                            </div>
                                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                                                <div className="space-y-6">
                                                    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                                                        <h5 className="font-black text-white mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-500">Science Module</h5>
                                                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-bold text-slate-400">
                                                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Physics (Optics, Energy)</div>
                                                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Chemistry (Acids, Metals)</div>
                                                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Biology (Diseases, Cells)</div>
                                                        </div>
                                                    </div>
                                                    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
                                                        <h5 className="font-black text-white mb-3 text-[10px] uppercase tracking-[0.3em] text-amber-500">Social Science</h5>
                                                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-bold text-slate-400">
                                                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> History (Freedom Movement)</div>
                                                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Geography (Soil, Climate)</div>
                                                            <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Polity (Constitution)</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-8 bg-amber-500/5 rounded-[2rem] border border-amber-500/20 shadow-inner flex flex-col justify-center">
                                                    <h5 className="font-black text-amber-400 text-sm mb-4 uppercase tracking-[0.2em] flex items-center gap-2"><Zap className="w-4 h-4 fill-amber-400" /> Current Affairs Special</h5>
                                                    <p className="text-sm text-slate-300 font-bold leading-relaxed mb-4">Focus on Defence news, latest missile tests, military exercises with foreign nations, Gallantry awards, and major International Events from the last 12 months.</p>
                                                    <div className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest"><ShieldCheck className="w-4 h-4" /> Updated Monthly in Pro Pass</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary & SSB Interview */}
                                <div id="salary" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <Medal className="w-6 h-6 text-emerald-400" /> SSB Interview & Rank Benefits
                                    </h3>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                                        <div className="lg:col-span-2 bg-slate-950 p-8 rounded-[2rem] border border-slate-800 shadow-xl overflow-hidden relative group">
                                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                                <Medal className="w-32 h-32 text-amber-500" />
                                            </div>
                                            <h4 className="font-black text-white text-lg mb-6 uppercase tracking-tight">The 5-Day SSB Process (900 Marks)</h4>
                                            <div className="space-y-4">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-xs shrink-0">1</div>
                                                    <div>
                                                        <p className="text-white font-black text-sm uppercase">Day 1: Screening</p>
                                                        <p className="text-[10px] text-slate-500 font-bold">OIR Test & PPDT (Picture Perception & Description Test).</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-xs shrink-0">2-4</div>
                                                    <div>
                                                        <p className="text-white font-black text-sm uppercase">Psychology & GTO Tests</p>
                                                        <p className="text-[10px] text-slate-500 font-bold">WAT, TAT, Command Task, Group Planning, and personal interview.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-xs shrink-0">5</div>
                                                    <div>
                                                        <p className="text-white font-black text-sm uppercase">The Conference</p>
                                                        <p className="text-[10px] text-slate-500 font-bold">Final recommendation by the board of officers.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                                            <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">Starting Salary</div>
                                            <div className="text-4xl font-black mb-1">₹56,100+</div>
                                            <div className="text-[11px] font-black uppercase tracking-widest leading-relaxed mb-6">Lieutenant's Basic Pay <br /> (Excluding Allowances)</div>
                                            <div className="bg-white/10 p-4 rounded-2xl border border-white/20 text-[10px] font-bold leading-relaxed">During Training Stippend: ₹56,100/mo. Military benefits provided.</div>
                                        </div>
                                    </div>
                                </div>

                                {/* How to Start Preparation */}
                                <div id="tips" className="scroll-mt-32 p-10 bg-gradient-to-br from-emerald-900/40 to-slate-900 border border-emerald-500/20 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                    <h3 className="text-3xl font-black text-white flex items-center gap-3 mb-8 uppercase tracking-tighter">
                                        <Target className="w-8 h-8 text-emerald-400" /> Preparation Blueprint 2026
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                        <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800 flex gap-4 transition-all hover:bg-slate-900">
                                            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center shrink-0 border border-emerald-500/10 shadow-sm">1</div>
                                            <div>
                                                <h4 className="font-black text-white mb-1 uppercase tracking-tight text-sm">Calculus & Trig Focus</h4>
                                                <p className="text-[11px] text-slate-400 font-bold leading-relaxed">NDA Maths depends 40% on Calculus. Master differentiation and integration first for a major score boost.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800 flex gap-4 transition-all hover:bg-slate-900">
                                            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center shrink-0 border border-emerald-500/10 shadow-sm">2</div>
                                            <div>
                                                <h4 className="font-black text-white mb-1 uppercase tracking-tight text-sm">Previous 10 Year PYQs</h4>
                                                <p className="text-[11px] text-slate-400 font-bold leading-relaxed">UPSC NDA logic repeats. Solving the last 20 sets will give you the baseline required to clear the sectional cutoff.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800 flex gap-4 transition-all hover:bg-slate-900">
                                            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center shrink-0 border border-emerald-500/10 shadow-sm">3</div>
                                            <div>
                                                <h4 className="font-black text-white mb-1 uppercase tracking-tight text-sm">English Vocab Daily</h4>
                                                <p className="text-[11px] text-slate-400 font-bold leading-relaxed">GAT English (200m) is the highest-scoring section. Learn 10 New Antonyms/Synonyms every day from our Elite Pass.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800 flex gap-4 transition-all hover:bg-slate-900">
                                            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center shrink-0 border border-emerald-500/10 shadow-sm">4</div>
                                            <div>
                                                <h4 className="font-black text-white mb-1 uppercase tracking-tight text-sm">Mental & Physical Routine</h4>
                                                <p className="text-[11px] text-slate-400 font-bold leading-relaxed">SSB is personality based. Improve your confidence through group speaking and running for physical stamina.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] italic">"The more you sweat in peace, the less you bleed in war."</p>
                                        <div className="flex items-center gap-1.5 font-black bg-emerald-500 px-6 py-2 rounded-full text-slate-950 uppercase text-[10px] tracking-widest shadow-xl shadow-emerald-500/20 cursor-default">
                                            <ShieldCheck className="w-4 h-4" /> Start Early for 2026
                                        </div>
                                    </div>
                                </div>

                                {/* NDA vs CDS Table */}
                                <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-xl max-w-2xl mx-auto">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-center border-collapse">
                                            <thead>
                                                <tr className="bg-slate-950 border-b border-slate-800">
                                                    <th className="p-4 text-left font-black text-slate-300 text-[10px] uppercase tracking-widest">NDA vs CDS Comparison</th>
                                                    <th className="p-4 font-black text-emerald-400 text-sm">NDA</th>
                                                    <th className="p-4 font-black text-blue-400 text-sm">CDS</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-[11px] font-bold text-slate-400">
                                                <tr className="border-b border-slate-800/50">
                                                    <td className="p-4 text-left text-white uppercase tracking-tighter">Qualification</td>
                                                    <td className="p-4">12th Pass</td>
                                                    <td className="p-4">Graduation</td>
                                                </tr>
                                                <tr className="border-b border-slate-800/50">
                                                    <td className="p-4 text-left text-white uppercase tracking-tighter">Age Limit</td>
                                                    <td className="p-4">16.5–19.5</td>
                                                    <td className="p-4">19–24/25</td>
                                                </tr>
                                                <tr className="border-b border-slate-800/50">
                                                    <td className="p-4 text-left text-white uppercase tracking-tighter">Training Duration</td>
                                                    <td className="p-4">3 + 1 Years</td>
                                                    <td className="p-4">1.5 Years</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 text-left text-white uppercase tracking-tighter">Selection Ratio</td>
                                                    <td className="p-4 text-rose-400">Very Competitive</td>
                                                    <td className="p-4 text-emerald-400 font-extrabold">Highly Selective</td>
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
                        <div className="sticky top-24 bg-slate-900 border-2 border-emerald-600 rounded-[2.5rem] p-8 shadow-[0_0_50px_rgba(16,185,129,0.15)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-600 text-slate-950 text-[10px] font-black rounded-full uppercase tracking-widest mb-6 shadow-lg shadow-emerald-500/20 relative z-10">
                                OFFICER DREAMS
                            </div>

                            <h3 className="text-2xl font-black text-white mb-3 relative z-10 leading-tight">Ready to Master the Academy?</h3>
                            <p className="text-sm text-slate-400 font-medium mb-8 relative z-10 leading-relaxed">You've seen the blueprint. Now start the rigorous training required for a commissioned rank.</p>

                            <div className="space-y-4 mb-10 p-6 bg-slate-950 rounded-[2rem] border border-slate-800 relative z-10 group-hover:border-emerald-500/30 transition-all">
                                <div className="flex items-start gap-3 text-[11px] text-white font-bold uppercase tracking-wider">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" strokeWidth={3} /> 300m Maths Elite Test Bank
                                </div>
                                <div className="flex items-start gap-3 text-[11px] text-white font-bold uppercase tracking-wider">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" strokeWidth={3} /> 600m GAT Full Simulators
                                </div>
                                <div className="flex items-start gap-3 text-[11px] text-white font-bold uppercase tracking-wider">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" strokeWidth={3} /> SSB OIR Intelligence Sets
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/defence-nda" className="w-full py-5 bg-slate-950 border-2 border-slate-700 hover:border-emerald-500 text-white font-black rounded-2xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2 shadow-inner">
                                    <MonitorPlay className="w-5 h-5 text-blue-400" /> Start Free Mock
                                </Link>
                                <Link href="/government-exams/defence/nda#pricing" className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl text-center transition-all text-xl shadow-2xl shadow-emerald-600/30 active:scale-95 group-hover:scale-[1.02]">
                                    Unleash Elite Pass
                                </Link>
                                <div className="flex items-center justify-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2 grayscale opacity-50">
                                    <ShieldCheck className="w-4 h-4" /> UPSC Standard Material
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, AlertCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, Landmark, GraduationCap, Award
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
                    <span className="text-white font-bold">Exam Schedule & Guide</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ Hero Highlights Section */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Landmark className="w-4 h-4" /> State Civil Services
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                                    BPSC 70th & 71st CCE <br className="hidden md:block" /> Complete Exam Schedule 2026
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-3xl text-lg">
                                    The BPSC Combined Competitive Examination (CCE) is Bihar's most prestigious civil services exam. This guide covers everything from the 70th Mains schedule to 71st & 72nd cycle updates.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <MonitorPlay className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Prelims Strategy</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Focus on Bihar-specific GS, History, and Current Affairs. Full-length mocks strictly on the latest negative marking pattern.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <BookOpen className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Mains Coverage</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Subjective answer writing practice for GS-I, GS-II and specialized feedback for optional subjects.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 2000+ Vacancies</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Bihar GK Specialized Mock</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Latest PYQ Analysis</span>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete BPSC CCE Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">BPSC CCE Master Guide</h2>
                                <p className="text-slate-400 mt-2 font-medium">Comprehensive details for 70th, 71st, and upcoming 72nd CCE cycles.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'dates', label: 'Important Dates', icon: Calendar },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'pattern', label: 'Exam Pattern', icon: FileText },
                                    { id: 'syllabus', label: 'Detailed Syllabus', icon: BookOpen },
                                    { id: 'updates', label: 'Latest Updates', icon: AlertCircle },
                                    { id: 'tips', label: 'Preparation Tips', icon: Target },
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
                                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 bg-amber-500 h-full"></div>
                                        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                            <Award className="w-5 h-5 text-amber-400" /> What is BPSC CCE?
                                        </h3>
                                        <p className="text-slate-300 font-medium leading-relaxed">
                                            The Combined Competitive Examination (CCE) is conducted by the <span className="text-white font-bold">Bihar Public Service Commission</span> to recruit administrative officers for various Group-A and Group-B posts, including the Bihar Administrative Service (BAS) and other state civil services. It is the Bihar equivalent of the UPSC CSE or UPPSC.
                                        </p>
                                    </div>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Calendar className="w-5 h-5 text-amber-400" /> BPSC 2024–26 Cycle Status
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* 70th CCE */}
                                        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="font-black text-amber-500 uppercase tracking-wider text-sm">📍 70th CCE (Ongoing)</h4>
                                                <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold rounded">Active cycle</span>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                    <span className="text-sm font-bold text-slate-400">Prelims Conducted</span>
                                                    <span className="text-sm font-black text-white whitespace-nowrap">13 Dec 24 & 04 Jan 25</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                    <span className="text-sm font-bold text-slate-400">Prelims Result</span>
                                                    <span className="text-sm font-black text-white">23 Jan 2025</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 bg-amber-500/5 rounded-lg border border-amber-500/20">
                                                    <span className="text-sm font-bold text-amber-200">Mains Dates</span>
                                                    <span className="text-sm font-black text-amber-400">25–30 Apr 2025</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                    <span className="text-sm font-bold text-slate-400">Final Result Exp.</span>
                                                    <span className="text-sm font-black text-white">Apr–May 2026</span>
                                                </div>
                                            </div>
                                            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-400">
                                                <Users className="w-4 h-4 text-amber-500" /> ~2,035 Vacancies Available
                                            </div>
                                        </div>

                                        {/* 71st CCE */}
                                        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="font-black text-emerald-500 uppercase tracking-wider text-sm">📍 71st CCE (Current)</h4>
                                                <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded">New Notification</span>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                    <span className="text-sm font-bold text-slate-400">Notification Released</span>
                                                    <span className="text-sm font-black text-white">30 May 2025</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                    <span className="text-sm font-bold text-slate-400">Appl. Last Date</span>
                                                    <span className="text-sm font-black text-white">30 June 2025</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                                                    <span className="text-sm font-bold text-emerald-200">Prelims Date</span>
                                                    <span className="text-sm font-black text-emerald-400">13 Sep 2025</span>
                                                </div>
                                                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                                                    <span className="text-sm font-bold text-slate-400">Mains Tentative</span>
                                                    <span className="text-sm font-black text-white">Apr 25–30 2026</span>
                                                </div>
                                            </div>
                                            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-400">
                                                <Users className="w-4 h-4 text-emerald-500" /> ~1,298 Vacancies Announced
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-5 bg-slate-950/50 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Calendar className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Upcoming 72nd CCE Update</h4>
                                            <p className="text-sm text-slate-400 font-medium">BPSC has tentatively scheduled the 72nd CCE Prelims for <span className="text-blue-400 font-bold">26 July 2026</span>. Aspirants should plan their long-term preparation accordingly.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Eligibility Criteria */}
                                <div id="eligibility" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Users className="w-5 h-5 text-amber-400" /> Eligibility Criteria
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <GraduationCap className="w-5 h-5 text-emerald-400" /> Education
                                            </div>
                                            <ul className="space-y-3 text-sm text-slate-400 font-medium">
                                                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Graduation Degree from a recognized university.</li>
                                                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" /> Final year students may apply if results are out before application closure.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <Clock className="w-5 h-5 text-amber-400" /> Age Limit
                                            </div>
                                            <ul className="space-y-3 text-sm text-slate-400 font-medium">
                                                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /> Minimum: ~21 years (post-specific).</li>
                                                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /> Maximum: ~37 years for General (higher for females & reserved).</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-slate-500 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" /> Domicile of Bihar is preferred for reservation benefits. Must be an Indian citizen.
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-amber-400" /> BPSC CCE Stages & Pattern
                                    </h3>

                                    <div className="space-y-6">
                                        {/* Prelims */}
                                        <div className="p-6 bg-slate-950 border border-slate-800 rounded-3xl group transition-all hover:border-amber-500/50">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                                <div>
                                                    <h4 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">Stage 1: Preliminary Examination</h4>
                                                    <p className="text-slate-400 text-sm font-medium mt-1">Qualifying nature — Screening for Mains entry.</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold text-slate-300">Objective (MCQ)</span>
                                                    <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold text-amber-400">150 Marks</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                                <div className="p-3 bg-slate-900 rounded-xl text-center">
                                                    <div className="text-[10px] text-slate-500 font-black uppercase mb-1">Duration</div>
                                                    <div className="text-white font-bold">2 Hours</div>
                                                </div>
                                                <div className="p-3 bg-slate-900 rounded-xl text-center">
                                                    <div className="text-[10px] text-slate-500 font-black uppercase mb-1">Total Qs</div>
                                                    <div className="text-white font-bold">150 MCQs</div>
                                                </div>
                                                <div className="p-3 bg-slate-900 rounded-xl text-center">
                                                    <div className="text-[10px] text-slate-500 font-black uppercase mb-1">Negative</div>
                                                    <div className="text-red-400 font-bold">1/3 Penalty</div>
                                                </div>
                                                <div className="p-3 bg-slate-900 rounded-xl text-center">
                                                    <div className="text-[10px] text-slate-500 font-black uppercase mb-1">Subject</div>
                                                    <div className="text-white font-bold">Gen. Studies</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mains */}
                                        <div className="p-6 bg-slate-950 border border-slate-800 rounded-3xl">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                                <div>
                                                    <h4 className="text-xl font-black text-white">Stage 2: Mains Examination</h4>
                                                    <p className="text-slate-400 text-sm font-medium mt-1">Written Descriptive (Marks counted for final merit).</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold text-slate-300">Descriptive</span>
                                                    <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold text-amber-400">1000 Total Marks</span>
                                                </div>
                                            </div>
                                            <div className="overflow-x-auto rounded-xl border border-slate-800">
                                                <table className="w-full text-left bg-slate-900">
                                                    <thead>
                                                        <tr className="border-b border-slate-800 text-[10px] uppercase font-black text-slate-500">
                                                            <th className="p-4">Paper</th>
                                                            <th className="p-4">Subject</th>
                                                            <th className="p-4">Marks</th>
                                                            <th className="p-4">Nature</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm font-semibold">
                                                        <tr className="border-b border-slate-800">
                                                            <td className="p-4 text-white">Paper 1</td>
                                                            <td className="p-4 text-slate-300">General Hindi</td>
                                                            <td className="p-4 text-slate-300">100</td>
                                                            <td className="p-4 text-emerald-400">Qualifying</td>
                                                        </tr>
                                                        <tr className="border-b border-slate-800">
                                                            <td className="p-4 text-white">Paper 2</td>
                                                            <td className="p-4 text-slate-300">General Studies – I</td>
                                                            <td className="p-4 text-amber-400">300</td>
                                                            <td className="p-4 text-slate-300">Main Selection</td>
                                                        </tr>
                                                        <tr className="border-b border-slate-800">
                                                            <td className="p-4 text-white">Paper 3</td>
                                                            <td className="p-4 text-slate-300">General Studies – II</td>
                                                            <td className="p-4 text-amber-400">300</td>
                                                            <td className="p-4 text-slate-300">Main Selection</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-4 text-white">Paper 4</td>
                                                            <td className="p-4 text-slate-300">Optional Subject</td>
                                                            <td className="p-4 text-amber-400">300</td>
                                                            <td className="p-4 text-slate-300">Descriptive/Obj.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* Interview */}
                                        <div className="p-6 bg-slate-950 border border-slate-800 rounded-3xl flex flex-col sm:flex-row items-center gap-6">
                                            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                                                <Users className="w-8 h-8 text-amber-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black text-white">Stage 3: Interview (Personality Test)</h4>
                                                <p className="text-slate-400 text-sm font-medium mt-1">Assessment of communication, confidence, and state/social awareness.</p>
                                                <div className="mt-2 flex items-center gap-2">
                                                    <span className="text-amber-500 font-black">120 Marks</span>
                                                    <span className="text-slate-600 font-bold">•</span>
                                                    <span className="text-slate-400 text-xs font-bold">Summoned after clearing Mains</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Syllabus */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <BookOpen className="w-5 h-5 text-amber-400" /> Detailed BPSC Syllabus
                                    </h3>

                                    <div className="space-y-8">
                                        {/* Prelims Syllabus */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
                                                <h4 className="font-bold text-white">🧠 Prelims (General Studies)</h4>
                                                <span className="text-xs font-black text-amber-500 bg-amber-500/10 px-2 py-1 rounded">Single Paper</span>
                                            </div>
                                            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                                {[
                                                    { title: "History", details: "Indian History + Bihar History, Freedom Movement" },
                                                    { title: "Geography", details: "Physical/Human Geography, Bihar Features" },
                                                    { title: "Polity", details: "Constitution, Panchayati Raj, Public Policy" },
                                                    { title: "Economy", details: "Indian Economy, Bihar Post-Independence Growth" },
                                                    { title: "Science", details: "Physics, Chemistry, Biology basics (Everyday science)" },
                                                    { title: "Current Affairs", details: "National & International Events, State Schemes" },
                                                    { title: "Mental Ability", details: "Logical Reasoning + Basic Numeracy" },
                                                ].map((topic, i) => (
                                                    <div key={i} className="flex gap-4">
                                                        <div className="mt-1"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
                                                        <div>
                                                            <div className="text-sm font-black text-white">{topic.title}</div>
                                                            <div className="text-[11px] text-slate-400 font-medium">{topic.details}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Mains Syllabus */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-6 py-4">
                                                <h4 className="font-bold text-white">📘 Mains Subject Details</h4>
                                            </div>
                                            <div className="p-6 space-y-6">
                                                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                                                    <h5 className="font-bold text-amber-400 mb-2">GS-I: History & Culture</h5>
                                                    <p className="text-xs text-slate-400 leading-relaxed font-medium">Modern History of India, Indian Culture, Statistical Analysis, and significant events of national importance.</p>
                                                </div>
                                                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                                                    <h5 className="font-bold text-amber-400 mb-2">GS-II: Polity, Economy & Science</h5>
                                                    <p className="text-xs text-slate-400 leading-relaxed font-medium">Indian Polity, Economy, Geography of India + Role of Science & Technology in the development of India & Bihar.</p>
                                                </div>
                                                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                                                    <h5 className="font-bold text-amber-400 mb-2">Essay & Optional</h5>
                                                    <p className="text-xs text-slate-400 leading-relaxed font-medium">3 sections of Essays (including Bihar-specific proverbs). Optional subject chosen by the candidate from the list provided by BPSC.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Latest Updates */}
                                <div id="updates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <AlertCircle className="w-5 h-5 text-amber-400" /> Latest BPSC News & Updates
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="p-5 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                                            <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
                                                <CheckCircle2 className="w-4 h-4" /> 71st Prelims Stats
                                            </div>
                                            <p className="text-sm text-slate-300 leading-relaxed">
                                                The 71st Prelims held on 13 Sep 2025 saw <span className="text-white font-bold">~3.16 lakh</span> candidates appear. More than <span className="text-white font-bold">14,000</span> qualified for the Mains examination. Final answer keys are now released for verification.
                                            </p>
                                        </div>
                                        <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                                            <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
                                                <Banknote className="w-4 h-4" /> Fee Subsidy Announced
                                            </div>
                                            <p className="text-sm text-slate-300 leading-relaxed">
                                                Bihar Govt announced a uniform <span className="text-white font-bold">₹100 Prelims fee</span> for all candidates and <span className="text-white font-bold">Free Mains</span> application as a subsidy measure to support rural aspirants.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Prep Tips */}
                                <div id="tips" className="scroll-mt-24 p-8 bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                                        <Target className="w-6 h-6 text-amber-400" /> Preparation Strategy
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-black flex items-center justify-center shrink-0">1</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">NCERT Foundation</h4>
                                                <p className="text-xs text-slate-400 font-medium">Read NCERT books (6th-12th) for History, Geography, and Science basics.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-black flex items-center justify-center shrink-0">2</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Bihar Special</h4>
                                                <p className="text-xs text-slate-400 font-medium">Dedicated focus on Bihar History & Economy. Use state-specific textbooks.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-black flex items-center justify-center shrink-0">3</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Answer Writing</h4>
                                                <p className="text-xs text-slate-400 font-medium">Build strong answer writing skills for Mains (GS papers) with point-wise structure.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-black flex items-center justify-center shrink-0">4</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Daily Revision</h4>
                                                <p className="text-xs text-slate-400 font-medium">Revise Daily Current Affairs and attempt at least one sectional mock per week.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* External Links */}
                                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl">
                                    <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">Official Resources</h4>
                                    <div className="flex flex-col gap-3">
                                        <a href="https://bpsc.bihar.gov.in" target="_blank" className="flex items-center justify-between p-4 bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors group">
                                            <span className="text-sm font-bold text-slate-200">Official BPSC Website</span>
                                            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors" />
                                        </a>
                                        <a href="https://bpsc.bihar.gov.in/Syllabus.php" target="_blank" className="flex items-center justify-between p-4 bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors group">
                                            <span className="text-sm font-bold text-slate-200">Official Syllabus PDF</span>
                                            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN - STICKY ACTION CARD */}
                    <div className="lg:col-span-4 hidden md:block">
                        <div className="sticky top-24 bg-slate-900 border-2 border-amber-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(245,158,11,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Start BPSC Practice</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">Boost your score with our specialized Bihar GK chapter tests and full mocks.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> 100+ Total Tests (GS + Bihar GK)
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> Latest 69th & 70th PYQs
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> All India Ranking Analytics
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/government-exams/state-psc/bpsc" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Try Free Mock Test
                                </Link>
                                <Link href="/government-exams/state-psc/bpsc#pricing" className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-amber-950 font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-amber-500/30 active:scale-95">
                                    Enroll in Pro Pass
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, AlertCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, Landmark, GraduationCap, Award,
    Star, ShieldCheck, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";

// Aliases for consistency with the rest of the component
const FileIcon = FileText;
const CalendarIcon = Calendar;
const BookIcon = BookOpen;
const ClockIcon = Clock;
const UsersIcon = Users;
const CheckIcon = CheckCircle2;
const TargetIcon = Target;
const HelpIcon = HelpCircle;
const AlertIcon = AlertCircle;
const RightIcon = ChevronRight;
const CalcIcon = Calculator;
const MonitorIcon = MonitorPlay;
const TrophyIcon = Award;
const GradIcon = GraduationCap;
const StateIcon = Landmark;
const PureCheck = Check;
const GlobeIcon = Globe2;
const MoneyIcon = Banknote;

export default function MPPSCSchedulePage() {
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
                    <Link href="/government-exams/state-psc" className="hover:text-indigo-400 transition-colors">State PSC</Link>
                    <span>›</span>
                    <Link href="/government-exams/state-psc/mppsc" className="hover:text-indigo-400 transition-colors">MPPSC</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Exam Schedule & Guide 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ Hero Highlights Section */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-indigo-500/30 shadow-[0_0_30px_rgba(79,70,229,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <StateIcon className="w-4 h-4" /> Madhya Pradesh Public Service Commission
                                </div>

                                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                                    MPPSC State Service Exam <br className="hidden md:block" /> 2026 Complete Guide
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-3xl text-lg">
                                    The 2026 cycle brings major changes to MPPSC! From a new negative marking scheme to updated weightage across 10 units. Get the complete schedule and preparation roadmap here.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Zap className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">New 2026 Pattern</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">1 mark negative marking introduced for every wrong answer. Each question now carries 3 marks instead of 2.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <BookIcon className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">MP Tribes Focus</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Special emphasis on Unit 10 (Tribes of MP). Detailed coverage required for tribal heritage and constitutional provisions.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> 155 Vacancies (SSE 2026)</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> Negative Marking Series</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> 3-Marks Logic</span>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete MPPSC Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">MPPSC Stage Service (Rajya Sewa) Master Guide</h2>
                                <p className="text-slate-400 mt-2 font-medium">Step-by-step roadmap for the 2026 Preliminary and Main examinations.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'dates', label: 'Important Dates', icon: CalendarIcon },
                                    { id: 'eligibility', label: 'Eligibility', icon: UsersIcon },
                                    { id: 'pattern', label: 'Exam Pattern', icon: FileIcon },
                                    { id: 'syllabus', label: 'Prelims Syllabus', icon: BookIcon },
                                    { id: 'mains', label: 'Mains Structure', icon: MonitorIcon },
                                    { id: 'tips', label: 'Preparation Tips', icon: TargetIcon },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            const element = document.getElementById(tab.id);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
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

                            <div className="p-6 md:p-8 space-y-12">

                                {/* Intro */}
                                <div className="prose prose-invert max-w-none">
                                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 bg-indigo-500 h-full"></div>
                                        <h3 className="text-white font-bold mb-3 flex items-center gap-2 text-lg">
                                            <TrophyIcon className="w-5 h-5 text-indigo-400" /> What is MPPSC?
                                        </h3>
                                        <p className="text-slate-300 font-medium leading-relaxed">
                                            MPPSC (Madhya Pradesh Public Service Commission) conducts state-level competitive exams to recruit officers and professionals into various administrative and technical services under the Government of Madhya Pradesh. It's the state equivalent of UPSC/PSC exams.
                                        </p>
                                    </div>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <CalendarIcon className="w-5 h-5 text-indigo-400" /> MPPSC 2026 Important Dates
                                    </h3>

                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <div>
                                                <h4 className="font-black text-indigo-400 uppercase tracking-widest text-xs">📍 State Service & Forest Service (SSE) 2026</h4>
                                                <p className="text-[10px] text-slate-500 font-bold mt-1">Official Exam Calendar Cycle</p>
                                            </div>
                                            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">Official Notification</span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { label: "Notification Date", date: "31 December 2025" },
                                                { label: "Application Start", date: "10 January 2026" },
                                                { label: "Application Last Date", date: "09 February 2026" },
                                                { label: "Correction Window", date: "10–16 February 2026" },
                                                { label: "Late Fee Window", date: "17 Feb – 01 Apr 2026" },
                                                { label: "Preliminary Exam", date: "26 April 2026", highlight: true },
                                                { label: "Main Examination", date: "07–12 Sept 2026", highlight: true },
                                                { label: "Forest Service Main", date: "27 September 2026" },
                                            ].map((item, i) => (
                                                <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${item.highlight ? 'bg-indigo-600/10 border-indigo-500/30 ring-1 ring-indigo-500/20' : 'bg-slate-900 border-slate-800'}`}>
                                                    <span className={`text-sm font-bold ${item.highlight ? 'text-indigo-200' : 'text-slate-200'}`}>{item.label}</span>
                                                    <span className={`text-sm font-black ${item.highlight ? 'text-indigo-400' : 'text-white'}`}>{item.date}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Eligibility Criteria */}
                                <div id="eligibility" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <UsersIcon className="w-5 h-5 text-indigo-400" /> Eligibility Criteria
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <GradIcon className="w-5 h-5 text-emerald-400" /> Qualification
                                            </div>
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed">Graduation from a recognized university in any discipline. Final year students can apply.</p>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <ClockIcon className="w-5 h-5 text-indigo-400" /> Age Limit
                                            </div>
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed flex flex-col gap-1">
                                                <span>Min: 21 Years</span>
                                                <span>Max: 33-40 Years (General)</span>
                                                <span className="text-[10px] text-slate-500 italic mt-1">Relaxation for SC/ST/OBC/MP Domicile.</span>
                                            </p>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <GlobeIcon className="w-5 h-5 text-blue-400" /> Nationality
                                            </div>
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed">Indian Citizen. Preference given to MP Domicile candidates where applicable.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileIcon className="w-5 h-5 text-indigo-400" /> MPPSC Prelims Exam Pattern (2026)
                                    </h3>

                                    <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden mb-8 shadow-2xl">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left">
                                                <thead className="bg-slate-900 border-b border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                                    <tr>
                                                        <th className="p-5">Paper</th>
                                                        <th className="p-5">Type</th>
                                                        <th className="p-5">Questions</th>
                                                        <th className="p-5">Marks</th>
                                                        <th className="p-5">Duration</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    <tr className="border-b border-slate-800/50">
                                                        <td className="p-5 text-white font-bold">Paper 1 — GS</td>
                                                        <td className="p-5 text-slate-400">MCQs</td>
                                                        <td className="p-5 text-white font-bold">150</td>
                                                        <td className="p-5 text-indigo-400 font-black">300</td>
                                                        <td className="p-5 text-slate-400 tracking-tight">2 hrs</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800/50">
                                                        <td className="p-5 text-white font-bold">Paper 2 — CSAT</td>
                                                        <td className="p-5 text-slate-400">MCQs</td>
                                                        <td className="p-5 text-white font-bold">150</td>
                                                        <td className="p-5 text-indigo-400 font-black">300</td>
                                                        <td className="p-5 text-slate-400 tracking-tight">2 hrs</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="p-6 bg-indigo-600/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex items-center gap-2 text-sm font-bold text-slate-300">
                                                <AlertIcon className="w-4 h-4 text-red-500" /> Negative marking: ⅓ for each wrong answer
                                            </div>
                                            <div className="flex items-center gap-2 text-sm font-bold text-emerald-400">
                                                <PureCheck className="w-4 h-4 text-emerald-400" /> CSAT is qualifying only (33% needed)
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Syllabus Breakdown */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <BookIcon className="w-5 h-5 text-indigo-400" /> Prelims 2026 Key Syllabus areas
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                            <h4 className="text-white font-bold mb-4 flex items-center gap-2"><MonitorIcon className="w-4 h-4 text-indigo-400" /> GS Paper-I Topics</h4>
                                            <div className="grid grid-cols-1 gap-2 text-xs font-medium text-slate-400">
                                                {["Indian History (Ancient to Modern)", "Geography (India & MP)", "Indian Polity & Governance", "Economy & Development", "Science & Technology", "Environment & Ecology", "Social Issues", "National/International Current Affairs", "MP History, Culture & Economics"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-2 py-1.5 border-b border-slate-800 last:border-0">
                                                        <PureCheck className="w-3.5 h-3.5 text-indigo-500" /> {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                            <h4 className="text-white font-bold mb-4 flex items-center gap-2"><CalcIcon className="w-4 h-4 text-emerald-400" /> CSAT Paper-II Topics</h4>
                                            <div className="grid grid-cols-1 gap-2 text-xs font-medium text-slate-400">
                                                {["Reading Comprehension", "Decision Making", "Basic Numeracy", "Logical & Analytical Reasoning"].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-2 py-1.5 border-b border-slate-800 last:border-0">
                                                        <PureCheck className="w-3.5 h-3.5 text-emerald-500" /> {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mains Pattern */}
                                <div id="mains" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <MonitorIcon className="w-5 h-5 text-indigo-400" /> MPPSC Mains Exam Pattern (2026)
                                    </h3>
                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-slate-900 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                                                    <th className="p-4">Paper</th>
                                                    <th className="p-4">Subject</th>
                                                    <th className="p-4">Marks</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                                {["Paper I — GS I", "Paper II — GS II", "Paper III — GS III", "Paper IV — GS IV", "Paper V — Optional I", "Paper VI — Optional II"].map((item, i) => (
                                                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-900 transition-colors">
                                                        <td className="p-4 font-bold text-white">{item.split(' — ')[0]}</td>
                                                        <td className="p-4 text-slate-400">{item.split(' — ')[1]}</td>
                                                        <td className="p-4 text-indigo-400 font-black">200 Marks</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className="p-5 bg-indigo-600/5 flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <UsersIcon className="w-5 h-5 text-indigo-400" />
                                                <span className="text-sm font-bold text-slate-200">Interview / Personality Test</span>
                                            </div>
                                            <span className="text-sm font-black text-indigo-400">100–150 Marks</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Prep Strategy */}
                                <div id="tips" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <TargetIcon className="w-5 h-5 text-indigo-400" /> Preparation Strategy & Salary
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800">
                                            <h4 className="text-lg font-black text-white mb-4 flex items-center gap-2"><TrophyIcon className="w-5 h-5 text-amber-500" /> Top Tips</h4>
                                            <ul className="space-y-3 text-sm text-slate-400 font-medium">
                                                <li className="flex gap-2"><span>1.</span> NCERTs for basics (History, Geography, Polity)</li>
                                                <li className="flex gap-2"><span>2.</span> Current affairs focus on both India & MP</li>
                                                <li className="flex gap-2"><span>3.</span> Solve past 5 years papers + regular mock tests</li>
                                                <li className="flex gap-2"><span>4.</span> Revision every 2-3 weeks is non-negotiable</li>
                                            </ul>
                                        </div>
                                        <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800">
                                            <h4 className="text-lg font-black text-white mb-4 flex items-center gap-2"><MoneyIcon className="w-5 h-5 text-emerald-500" /> Salary & Career</h4>
                                            <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                                Selected officers get Level 10+ Pay Matrix. In-hand salaries vary by post but include strong mid-career compensation with benefits like DA, HRA, TA, government housing, and pension schemes.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Latest News */}
                                <div className="p-8 bg-slate-950 border-2 border-slate-800 rounded-3xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <Zap className="w-24 h-24 text-indigo-500" />
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-6 uppercase tracking-wider flex items-center gap-2"><AlertIcon className="w-5 h-5 text-red-500" /> Latest Updates (2026 Cycle)</h4>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <p className="text-sm text-slate-300 font-medium flex items-start gap-3">
                                                <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                                                <span>MPPSC introduced a <span className="text-white font-bold">three-layer security system</span> (CCTV, biometric, QR scan) to reduce cheating.</span>
                                            </p>
                                        </div>
                                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <p className="text-sm text-slate-300 font-medium flex items-start gap-3">
                                                <span className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                                                <span>Prelims 2026 is scheduled for <span className="text-white font-bold">April 26</span>; mains follow in September. Approximately 155 vacancies announced.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Official Resources */}
                                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-center">
                                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Commission Links</h4>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <a href="https://mppsc.mp.gov.in" target="_blank" className="px-6 py-2 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-all text-xs font-bold text-slate-300">
                                            Official Site: mppsc.mp.gov.in
                                        </a>
                                        <a href="https://mppsc.mp.gov.in/Advertisement" target="_blank" className="px-6 py-2 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-all text-xs font-bold text-slate-300">
                                            Download 2026 Calendar PDF
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN - STICKY ACTION CARD */}
                    <div className="lg:col-span-4 hidden md:block">
                        <div className="sticky top-24 bg-slate-900 border-2 border-indigo-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(79,70,229,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Ready for MPPSC 2026?</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">Don't let the new negative marking catch you off guard. Start practicing with the new 3-marks logic.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> 85+ Specialized Mock Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> New Pattern Negative Marking
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> Tribal Culture Deep-Dive
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/mppsc" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorIcon className="w-4 h-4" /> Start Free Practice
                                </Link>
                                <Link href="/government-exams/state-psc/mppsc#pricing" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-indigo-500/30 active:scale-95">
                                    Unlock Pro Pass
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

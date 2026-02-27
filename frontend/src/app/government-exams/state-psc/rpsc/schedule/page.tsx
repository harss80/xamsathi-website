"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Calendar, Users, FileText, BookOpen, Clock,
    Target, Trophy, ShieldCheck, ChevronRight, Download,
    Check, AlertCircle, Bookmark, Landmark, GraduationCap, Globe2, Banknote, HelpCircle,
    MonitorPlay, Calculator, Award, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";

// Aliases for consistency with other schedule pages
const FileIcon = FileText;
const CalendarIcon = Calendar;
const BookIcon = BookOpen;
const ClockIcon = Clock;
const UsersIcon = Users;
const CheckIcon = ShieldCheck;
const TargetIcon = Target;
const HelpIcon = HelpCircle;
const AlertIcon = AlertCircle;
const RightIcon = ChevronRight;
const CalcIcon = Calculator;
const MonitorIcon = MonitorPlay;
const TrophyIcon = Trophy;
const GradIcon = GraduationCap;
const StateIcon = Landmark;
const PureCheck = Check;
const GlobeIcon = Globe2;
const MoneyIcon = Banknote;

export default function RPSCRASSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    const tabs = [
        { id: "dates", label: "Dates", icon: CalendarIcon },
        { id: "eligibility", label: "Eligibility", icon: UsersIcon },
        { id: "pattern", label: "Pattern", icon: FileIcon },
        { id: "syllabus", label: "Syllabus", icon: BookIcon },
        { id: "mains", label: "Mains", icon: MonitorIcon },
        { id: "tips", label: "Strategy", icon: TargetIcon },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-rose-500/30">
            <Navbar />

            {/* Hero Section */}
            <div className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-500/10 rounded-full blur-[120px] animate-pulse"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-black uppercase tracking-widest mb-6 animate-bounce">
                            <Zap className="w-4 h-4" /> Comprehensive Guide 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-none">
                            RPSC RAS 2026 <span className="text-rose-500">Exam Schedule</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-8">
                            Everything you need to know about Rajasthan Administrative Services 2026: Official dates, detailed syllabus, pattern changes, and preparation strategy.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-xl text-sm font-bold text-slate-300">
                                <UsersIcon className="w-4 h-4 text-rose-400" /> ~900+ Expected Vacancies
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-xl text-sm font-bold text-slate-300">
                                <Landmark className="w-4 h-4 text-rose-400" /> Rajasthan Govt Service
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content with Tabs */}
            <div className="container mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Sticky Sidebar Navigation */}
                    <div className="lg:col-span-3 sticky top-24 z-20">
                        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-3 shadow-2xl overflow-hidden">
                            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar p-1 gap-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }}
                                        className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all whitespace-nowrap lg:w-full ${activeTab === tab.id
                                            ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20 translate-x-1"
                                            : "text-slate-400 hover:text-slate-100 hover:bg-slate-800"
                                            }`}
                                    >
                                        <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "text-white" : "text-rose-400"}`} />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="lg:col-span-9">
                        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6 lg:p-12 shadow-2xl relative overflow-hidden">
                            <div className="space-y-24">

                                {/* Intro */}
                                <div className="prose prose-invert max-w-none">
                                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 bg-rose-500 h-full"></div>
                                        <h3 className="text-white font-bold mb-3 flex items-center gap-2 text-lg">
                                            <TrophyIcon className="w-5 h-5 text-rose-400" /> What is RPSC RAS 2026?
                                        </h3>
                                        <p className="text-slate-300 font-medium leading-relaxed">
                                            RPSC RAS (Rajasthan Administrative Service) is the state civil service exam conducted by RPSC to recruit officers into Rajasthan Administrative Service (RAS), Rajasthan Police Service (RPS), and other allied Group-A & B posts. It is one of the most competitive state PSC exams.
                                        </p>
                                    </div>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <CalendarIcon className="w-5 h-5 text-rose-400" /> RPSC RAS 2026 Important Dates
                                    </h3>

                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <div>
                                                <h4 className="font-black text-rose-400 uppercase tracking-widest text-xs">📍 RAS 2026 Official Cycle (Expected)</h4>
                                                <p className="text-[10px] text-slate-500 font-bold mt-1">Updates based on latest administrative notifications</p>
                                            </div>
                                            <span className="px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold rounded-full">Coming Soon</span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { label: "Notification Release", date: "May–June 2026" },
                                                { label: "Application Window", date: "Post Notification" },
                                                { label: "Prelims Exam Date", date: "Jul–Aug 2026", highlight: true },
                                                { label: "Mains Examination", date: "Nov–Dec 2026", highlight: true },
                                                { label: "Interview Phase", date: "Early 2027" },
                                                { label: "Final Result", date: "Mid 2027" },
                                            ].map((item, i) => (
                                                <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${item.highlight ? 'bg-rose-600/10 border-rose-500/30 ring-1 ring-rose-500/20' : 'bg-slate-900 border-slate-800'}`}>
                                                    <span className={`text-sm font-bold ${item.highlight ? 'text-rose-200' : 'text-slate-200'}`}>{item.label}</span>
                                                    <span className={`text-sm font-black ${item.highlight ? 'text-rose-400' : 'text-white'}`}>{item.date}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Eligibility Criteria */}
                                <div id="eligibility" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <UsersIcon className="w-5 h-5 text-rose-400" /> Eligibility Criteria
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4 border-b border-slate-800 pb-2">
                                                <GradIcon className="w-5 h-5 text-emerald-400" /> Education
                                            </div>
                                            <p className="text-[11px] text-slate-400 font-medium leading-relaxed">Bachelor's Degree in any stream from a recognized university. Specific technical posts may require allied qualifications.</p>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4 border-b border-slate-800 pb-2">
                                                <ClockIcon className="w-5 h-5 text-rose-400" /> Age Limit
                                            </div>
                                            <p className="text-[11px] text-slate-400 font-medium leading-relaxed flex flex-col gap-1">
                                                <span>Min: 21 Years | Max: ~40 Years</span>
                                                <span className="text-[10px] text-slate-500 italic mt-1 font-bold">Standard age relaxation for SC/ST/OBC/PwBD.</span>
                                            </p>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4 border-b border-slate-800 pb-2">
                                                <GlobeIcon className="w-5 h-5 text-blue-400" /> Nationality
                                            </div>
                                            <p className="text-[11px] text-slate-400 font-medium leading-relaxed italic">Must be an Indian Citizen.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-black text-white flex items-center gap-2 uppercase tracking-wide">
                                            <FileIcon className="w-5 h-5 text-rose-400" /> RPSC RAS Prelims Pattern
                                        </h3>
                                        <div className="bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-md text-[10px] font-black text-rose-400 uppercase tracking-widest">Target 2026</div>
                                    </div>

                                    <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden mb-8 shadow-2xl relative">
                                        <div className="absolute top-0 right-0 p-4">
                                            <div className="text-[10px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Screening Only</div>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left">
                                                <thead className="bg-slate-900 border-b border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                                    <tr>
                                                        <th className="p-5">Type</th>
                                                        <th className="p-5">Questions</th>
                                                        <th className="p-5">Marks</th>
                                                        <th className="p-5">Negative</th>
                                                        <th className="p-5">Duration</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    <tr className="border-b border-slate-800/50">
                                                        <td className="p-5 text-white font-bold">Objective (MCQ)</td>
                                                        <td className="p-5 text-white font-black">150</td>
                                                        <td className="p-5 text-rose-400 font-black">200</td>
                                                        <td className="p-5 text-red-500 font-bold">1/3rd Mark</td>
                                                        <td className="p-5 text-slate-400 tracking-tight font-bold">3 Hours</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Syllabus Breakdown */}
                                <div id="syllabus" className="scroll-mt-24 relative">
                                    <div className="absolute top-[-40px] right-0 bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm animate-pulse">
                                        25% Syllabus Changed for 2026 cycle
                                    </div>
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <BookIcon className="w-5 h-5 text-rose-400" /> Prelims Syllabus (Updated)
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "History & Culture of Rajasthan", "Indian History & Culture",
                                            "Geography (India & Rajasthan)", "Indian Polity & Governance",
                                            "Economy & Development", "Science & Technology",
                                            "Reasoning & Mental Ability", "Current Affairs",
                                            "Rajasthan Examination Act, 2022 (NEW)"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors">
                                                <PureCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                                                <span className="text-xs font-bold text-slate-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-[10px] font-black text-red-400 uppercase tracking-widest">
                                        <AlertCircle className="w-3.5 h-3.5" /> Note: Sports & Yoga module removed from Prelims.
                                    </div>
                                </div>

                                {/* Mains Pattern */}
                                <div id="mains" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <MonitorIcon className="w-5 h-5 text-rose-400" /> Revised RAS Mains Pattern (2026)
                                    </h3>

                                    <div className="mb-6 p-4 bg-rose-500/5 border-l-4 border-rose-500 rounded-r-xl">
                                        <p className="text-xs text-rose-200 font-bold leading-relaxed lowercase first-letter:uppercase">
                                            Mains pattern revised — Two-mark questions removed. Only 5 & 10-mark descriptive questions remain for better evaluation.
                                        </p>
                                    </div>

                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-slate-900 text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                                                    <th className="p-4">Paper</th>
                                                    <th className="p-4">Subject Focus</th>
                                                    <th className="p-4">Marks</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                                {[
                                                    { p: "Paper I", s: "GS-I: History, Economy & Sociology (India/RJ)", m: "200" },
                                                    { p: "Paper II", s: "GS-II: Ethics, Pub-Ad, IR & Rights", m: "200" },
                                                    { p: "Paper III", s: "GS-III: Science, Environment, Social Issues", m: "200" },
                                                    { p: "Paper IV", s: "Gen Hindi & Gen English (incl. Consolidated Essay)", m: "200" }
                                                ].map((item, i) => (
                                                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-900 transition-colors">
                                                        <td className="p-4 font-bold text-white">{item.p}</td>
                                                        <td className="p-4 text-slate-400 font-bold text-[11px]">{item.s}</td>
                                                        <td className="p-4 text-rose-400 font-black">{item.m} Marks</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className="p-5 bg-rose-600/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <UsersIcon className="w-5 h-5 text-rose-400" />
                                                <span className="text-sm font-bold text-slate-200 uppercase tracking-tight">Stage 3: Interview / Personality Test</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="text-[10px] text-slate-500 font-bold text-right hidden sm:block">Tests administrative awareness</div>
                                                <span className="text-sm font-black text-rose-400 px-3 py-1 bg-rose-500/10 rounded-lg border border-rose-500/20 shadow-sm">~100 Marks</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Final Rank = Mains (800) + Interview (100) = 900 Total</p>
                                    </div>
                                </div>

                                {/* Prep Strategy */}
                                <div id="tips" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <TargetIcon className="w-5 h-5 text-rose-400" /> Career, Salary & Strategy
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                        <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-lg group hover:border-rose-500/30 transition-all">
                                            <h4 className="text-lg font-black text-white mb-4 flex items-center gap-2 underline decoration-rose-500/20 underline-offset-4 decoration-2">
                                                <TrophyIcon className="w-5 h-5 text-amber-500" /> Preparation Edge
                                            </h4>
                                            <ul className="space-y-3 text-xs text-slate-400 font-bold">
                                                <li className="flex gap-2"><span>•</span> Master Rajasthan Static GK from NCERTs/RBSE.</li>
                                                <li className="flex gap-2"><span>•</span> New Syllabus Alert: Focus on Rajasthan Exam Act 2022.</li>
                                                <li className="flex gap-2"><span>•</span> Weekly Mock Essays for the consolidated Paper IV.</li>
                                                <li className="flex gap-2"><span>•</span> Analytical Practice for the 5 & 10 mark Mains questions.</li>
                                            </ul>
                                        </div>
                                        <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-lg group hover:border-rose-500/30 transition-all">
                                            <h4 className="text-lg font-black text-white mb-4 flex items-center gap-2 underline decoration-emerald-500/20 underline-offset-4 decoration-2">
                                                <MoneyIcon className="w-5 h-5 text-emerald-500" /> Career & Perks
                                            </h4>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between bg-slate-950 p-3 rounded-xl border border-slate-800">
                                                    <span className="text-[10px] text-slate-500 font-black uppercase">Start Salary</span>
                                                    <span className="text-white font-black text-sm">₹60,000+ In-hand</span>
                                                </div>
                                                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                                                    Joining as RAS/RPS Officer grants Pay Level 10+ status with DA, HRA, Medical, Housing, and high administrative authority across Rajasthan.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expected Vacancy Banner */}
                                    <div className="p-8 bg-gradient-to-br from-rose-900/40 via-slate-950 to-slate-950 border border-rose-500/20 rounded-[2rem] text-center relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-rose-600/20 transition-all"></div>
                                        <h4 className="text-xs font-black text-rose-500 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                                            <Landmark className="w-3 h-3" /> Rajasthan Govt Projection
                                        </h4>
                                        <div className="text-4xl font-black text-white mb-2 tracking-tighter">Around 500+ <span className="text-rose-400">Posts</span></div>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-tight">Recruitment for RAS, RPS & Allied Civil Services for 2026</p>
                                    </div>
                                </div>

                                {/* Latest News */}
                                <div className="p-8 bg-slate-950 border-2 border-slate-800 rounded-3xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
                                        <Zap className="w-24 h-24 text-rose-500" />
                                    </div>
                                    <h4 className="text-xl font-black text-white mb-6 uppercase tracking-wider flex items-center gap-2"><AlertIcon className="w-5 h-5 text-red-500" /> Important Updates (RAS 2026 Cycle)</h4>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <p className="text-sm text-slate-300 font-bold flex items-start gap-3">
                                                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0 animate-ping"></span>
                                                <span>Notification for RPSC RAS 2026 is expected to release in <span className="text-white font-black">March 2026</span> with approx 900+ vacancies.</span>
                                            </p>
                                        </div>
                                        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                            <p className="text-sm text-slate-300 font-bold flex items-start gap-3">
                                                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                                                <span>Revision of RAS Mains syllabus is rumored; candidates should focus on core Rajasthan concepts for now.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Official Resources */}
                                <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-center">
                                    <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Commission Official Links</h4>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <a href="https://rpsc.rajasthan.gov.in" target="_blank" className="px-6 py-2 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-all text-xs font-black text-slate-300 flex items-center gap-2">
                                            Commission Site: rpsc.rajasthan.gov.in <Download className="w-3 h-3" />
                                        </a>
                                        <a href="https://rpsc.rajasthan.gov.in/Advertisement" target="_blank" className="px-6 py-2 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-all text-xs font-black text-slate-300 flex items-center gap-2">
                                            Download Exam Calendar <Download className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Action Bar (Mobile only) */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-xl border-t border-slate-800 z-50">
                <Link href="/government-exams/state-psc/rpsc" className="block w-full py-4 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-2xl text-center transition-all text-lg shadow-lg active:scale-95">
                    Explore RPSC Test Series
                </Link>
            </div>
        </div>
    );
}

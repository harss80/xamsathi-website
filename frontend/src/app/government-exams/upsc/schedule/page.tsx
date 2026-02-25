"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, AlertCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, PenTool, Flame, Trophy
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function UPSCCSE_SchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-blue-400 transition-colors">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/upsc" className="hover:text-blue-400 transition-colors">UPSC Exams</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Preparation & Exam Details</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ What We Cover (Our Offering Highlight) */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Target className="w-4 h-4" /> Comprehensive Coverage
                                </div>

                                <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                                    What Chapters Do We Cover? <br className="hidden md:block" /> How Will We Prepare You?
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    Before diving into the exam details, here is a complete blueprint of what the <span className="text-white font-bold">Xamsathi UPSC Complete Pass</span> delivers. We cover every single topic from basic NCERTs to advanced Mains answer writing.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <BookOpen className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Prelims GS & CSAT</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">125+ Mock tests including full-length GS, CSAT, Chapter-wise NCERT tests, and 25 years PYQs.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <PenTool className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Mains Answer Writing</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">GS 1 to GS 4 full-length mocks, sectional tests, and detailed PDF model answers for immediate evaluation.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <Globe2 className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Current Affairs & Static</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Weekly CA tests, History, Polity, Geography, Economy, Environment & Science coverage.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <FileText className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Essay Preparation</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Dedicated Essay mock tests covering philosophical and factual topics with structure feedback.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 160+ Total Tests</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Detailed Model Answers</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> All India Rank Tracking</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Prelims + Mains + CSAT</span>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete UPSC Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">Complete Guide: UPSC CSE 2026</h2>
                                <p className="text-slate-400 mt-2 font-medium">Everything you need to know about the Civil Services Examination.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'dates', label: 'Important Dates', icon: Calendar },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'pattern', label: 'Exam Pattern', icon: FileText },
                                    { id: 'syllabus', label: 'Detailed Syllabus', icon: BookOpen },
                                    { id: 'questions', label: 'Questions Example', icon: HelpCircle },
                                    { id: 'salary', label: 'Salary & Posts', icon: Banknote },
                                    { id: 'tips', label: 'Tips & Difficulty', icon: Flame },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === tab.id
                                            ? "border-blue-500 text-blue-400 bg-slate-900"
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
                                    <p className="text-slate-300 font-medium leading-relaxed bg-slate-800/50 p-5 rounded-2xl border border-slate-700">
                                        <span className="text-white font-bold text-lg block mb-2">UPSC Civil Services Examination (CSE) is India’s most prestigious exam.</span>
                                        Through this exam, officers are selected for services like:<br /><br />
                                        • <strong className="text-white">Indian Administrative Service (IAS)</strong><br />
                                        • <strong className="text-white">Indian Police Service (IPS)</strong><br />
                                        • <strong className="text-white">Indian Foreign Service (IFS)</strong><br />
                                        • IRS, IAAS, and many other Group A & B services.
                                    </p>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Calendar className="w-5 h-5 text-blue-400" /> UPSC Civil Services 2026 – Expected Dates
                                    </h3>
                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                                        <p className="text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">(Based on previous UPSC calendar trends – final dates will come in official notification)</p>

                                        <div className="space-y-3">
                                            {[
                                                { event: "Notification Release", date: "February 2026" },
                                                { event: "Application Start", date: "February 2026" },
                                                { event: "Last Date to Apply", date: "March 2026" },
                                                { event: "Prelims Exam", date: "May/June 2026", highlight: true },
                                                { event: "Mains Exam", date: "September 2026", highlight: true },
                                                { event: "Interview (Personality Test)", date: "January–April 2027" },
                                                { event: "Final Result", date: "April/May 2027" },
                                            ].map((item, idx) => (
                                                <div key={idx} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border ${item.highlight ? 'bg-blue-600/10 border-blue-500/30' : 'bg-slate-900 border-slate-800'}`}>
                                                    <div className={`font-bold ${item.highlight ? 'text-blue-200' : 'text-slate-300'}`}>{item.event}</div>
                                                    <div className={`text-sm font-black mt-1 sm:mt-0 ${item.highlight ? 'text-blue-400' : 'text-white'}`}>{item.date}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-slate-800 text-sm font-bold text-slate-400 text-center">
                                            Official Website: <a href="https://upsc.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">upsc.gov.in</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Eligibility Criteria */}
                                <div id="eligibility" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Users className="w-5 h-5 text-blue-400" /> Eligibility Criteria
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 h-full">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Educational Qualification
                                            </div>
                                            <div className="text-sm text-slate-400 font-medium bg-slate-900/50 p-4 rounded-xl border border-slate-800/50">
                                                Bachelor’s Degree from a recognized university (any stream).
                                            </div>

                                            <div className="flex items-center gap-2 text-white font-bold mb-4 mt-6">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Number of Attempts
                                            </div>
                                            <ul className="space-y-3 text-sm text-slate-400 font-medium">
                                                <li className="flex justify-between items-center"><strong className="text-white">General:</strong> <span className="bg-slate-800 px-3 py-1 rounded-md text-white font-bold">6</span></li>
                                                <li className="flex justify-between items-center"><strong className="text-white">OBC:</strong> <span className="bg-slate-800 px-3 py-1 rounded-md text-white font-bold">9</span></li>
                                                <li className="flex justify-between items-center"><strong className="text-white">SC/ST:</strong> <span className="bg-slate-800 px-3 py-1 rounded-md text-white font-bold text-xs">Unlimited (till age limit)</span></li>
                                            </ul>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 h-full">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Age Limit (as per general pattern)
                                            </div>
                                            <div className="flex justify-between items-center bg-slate-900/50 p-4 rounded-xl border border-slate-800/50 mb-4">
                                                <div>
                                                    <div className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Minimum</div>
                                                    <div className="text-xl font-black text-white">21 years</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xs text-slate-500 font-black uppercase tracking-widest mb-1">Maximum</div>
                                                    <div className="text-xl font-black text-white">32 years <span className="text-xs text-slate-400 font-medium block">(General category)</span></div>
                                                </div>
                                            </div>
                                            <div className="text-sm text-slate-400 font-medium flex gap-2 items-start mt-4">
                                                <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                                Age relaxation available for OBC, SC/ST, and PwBD candidates.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-blue-400" /> UPSC CSE 2026 Exam Pattern
                                    </h3>
                                    <p className="text-slate-300 mb-6 font-bold text-lg">UPSC has 3 Stages:</p>
                                    <div className="flex gap-4 flex-wrap mb-8">
                                        <div className="bg-slate-800 px-4 py-2 rounded-lg font-bold text-sm text-white">1️⃣ Preliminary (Objective)</div>
                                        <div className="bg-slate-800 px-4 py-2 rounded-lg font-bold text-sm text-white">2️⃣ Main (Written)</div>
                                        <div className="bg-slate-800 px-4 py-2 rounded-lg font-bold text-sm text-white">3️⃣ Interview (Personality Test)</div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-blue-400 text-lg mb-4 inline-flex items-center gap-2">🔹 Stage 1: Preliminary Examination (Qualifying Stage)</h4>
                                        <p className="text-slate-400 mb-4 font-medium">Prelims has 2 Papers:</p>
                                        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 mb-4">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-slate-900 border-b border-slate-800">
                                                        <th className="p-4 font-bold text-slate-300">Paper</th>
                                                        <th className="p-4 font-bold text-slate-300">Subject</th>
                                                        <th className="p-4 font-bold text-slate-300">Marks</th>
                                                        <th className="p-4 font-bold text-slate-300">Type</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-slate-400 font-medium">
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4"><strong className="text-white">Paper I</strong></td>
                                                        <td className="p-4">General Studies (GS)</td>
                                                        <td className="p-4 text-white font-bold">200</td>
                                                        <td className="p-4">MCQ</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800 bg-slate-900/50">
                                                        <td className="p-4"><strong className="text-white">Paper II</strong></td>
                                                        <td className="p-4">CSAT (Aptitude) <span className="text-xs text-amber-500 font-bold block">(Qualifying - minimum 33% required)</span></td>
                                                        <td className="p-4 text-white font-bold">200</td>
                                                        <td className="p-4">MCQ</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400" /> Time: 2 hours each</div>
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-rose-500" /> Negative Marking: 1/3rd marks deducted for wrong answers</div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-blue-400 text-lg mb-4 inline-flex items-center gap-2">🔹 Stage 2: Mains Examination (Descriptive)</h4>
                                        <p className="text-sm text-slate-200 mb-4 font-bold bg-slate-800/50 inline-block px-4 py-2 rounded-lg border border-slate-700">Mains has 9 Papers (Total 1750 Marks counted for merit)</p>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="p-5 border border-slate-700 bg-slate-900 rounded-xl">
                                                <h5 className="font-bold text-amber-400 mb-3 flex items-center gap-2"><PenTool className="w-4 h-4" /> 📝 Qualifying Papers</h5>
                                                <ul className="text-sm text-slate-300 space-y-3 font-medium">
                                                    <li className="flex justify-between border-b border-slate-800 pb-2"><strong className="text-white">Paper A – Indian Language</strong> <span>(300 marks)</span></li>
                                                    <li className="flex justify-between"><strong className="text-white">Paper B – English</strong> <span>(300 marks)</span></li>
                                                </ul>
                                            </div>
                                            <div className="p-5 border border-slate-800 bg-slate-950 rounded-xl row-span-2">
                                                <h5 className="font-bold text-emerald-400 mb-3 flex items-center gap-2"><Trophy className="w-4 h-4" /> 🏆 Merit Papers</h5>
                                                <div className="space-y-2">
                                                    {[
                                                        { label: "Essay", marks: "250" },
                                                        { label: "GS Paper 1", marks: "250" },
                                                        { label: "GS Paper 2", marks: "250" },
                                                        { label: "GS Paper 3", marks: "250" },
                                                        { label: "GS Paper 4", marks: "250" },
                                                        { label: "Optional Paper 1", marks: "250" },
                                                        { label: "Optional Paper 2", marks: "250" }
                                                    ].map((item, idx) => (
                                                        <div key={idx} className="flex justify-between items-center text-sm border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                                                            <span className="text-slate-300">{item.label}</span>
                                                            <span className="text-white font-bold">{item.marks}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-blue-400 text-lg mb-4 inline-flex items-center gap-2">🔹 Stage 3: Interview (Personality Test)</h4>
                                        <div className="p-6 bg-indigo-900/20 border border-indigo-500/20 rounded-xl">
                                            <p className="text-lg text-white font-black mb-3">Marks: 275</p>
                                            <ul className="text-sm text-indigo-200 font-medium space-y-2 list-disc list-inside marker:text-indigo-500">
                                                <li>Panel tests personality, confidence, decision-making ability, leadership qualities, and awareness.</li>
                                                <li>No fixed syllabus — based on DAF (Detailed Application Form).</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Syllabus */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <BookOpen className="w-5 h-5 text-blue-400" /> Snapshot of UPSC Syllabus
                                    </h3>

                                    <div className="grid grid-cols-1 gap-6 mb-8">
                                        <h4 className="font-bold text-lg text-white mb-2">📚 Prelims Syllabus</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-emerald-400 text-sm flex items-center gap-2">
                                                    🔸 General Studies Paper I
                                                </div>
                                                <div className="p-5 flex flex-wrap gap-2">
                                                    {["History of India", "Indian Polity", "Geography (India + World)", "Economy", "Environment & Ecology", "Science & Technology", "Current Affairs"].map((topic, i) => (
                                                        <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700 font-medium">{topic}</span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-emerald-400 text-sm flex items-center gap-2">
                                                    🔸 CSAT Paper II
                                                </div>
                                                <div className="p-5 flex flex-wrap gap-2">
                                                    {["Comprehension", "Logical Reasoning", "Basic Numeracy", "Data Interpretation", "Decision Making"].map((topic, i) => (
                                                        <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700 font-medium">{topic}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6">
                                        <h4 className="font-bold text-lg text-white mb-2 mt-4">📚 Detailed Mains Syllabus</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* GS 1 */}
                                            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-blue-400 text-sm">
                                                    🔸 GS Paper 1
                                                </div>
                                                <div className="p-5 flex flex-wrap gap-2 flex-col text-sm text-slate-400 font-medium">
                                                    <span>• Indian Heritage & Culture</span>
                                                    <span>• Modern Indian History</span>
                                                    <span>• World History</span>
                                                    <span>• Society</span>
                                                    <span>• Geography</span>
                                                </div>
                                            </div>

                                            {/* GS 2 */}
                                            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-blue-400 text-sm">
                                                    🔸 GS Paper 2
                                                </div>
                                                <div className="p-5 flex flex-wrap gap-2 flex-col text-sm text-slate-400 font-medium">
                                                    <span>• Constitution</span>
                                                    <span>• Governance</span>
                                                    <span>• Parliament</span>
                                                    <span>• Judiciary</span>
                                                    <span>• International Relations</span>
                                                </div>
                                            </div>

                                            {/* GS 3 */}
                                            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-blue-400 text-sm">
                                                    🔸 GS Paper 3
                                                </div>
                                                <div className="p-5 flex flex-wrap gap-2 flex-col text-sm text-slate-400 font-medium">
                                                    <span>• Economy</span>
                                                    <span>• Agriculture</span>
                                                    <span>• Science & Tech</span>
                                                    <span>• Environment</span>
                                                    <span>• Disaster Management</span>
                                                    <span>• Internal Security</span>
                                                </div>
                                            </div>

                                            {/* GS 4 */}
                                            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-blue-400 text-sm">
                                                    🔸 GS Paper 4
                                                </div>
                                                <div className="p-5 flex flex-wrap gap-2 flex-col text-sm text-slate-400 font-medium">
                                                    <span>• Ethics</span>
                                                    <span>• Integrity</span>
                                                    <span>• Aptitude</span>
                                                    <span>• Case Studies</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Optionals */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 mt-4">
                                            <h4 className="font-bold text-white text-md mb-4 flex items-center gap-2">📘 Optional Subjects (Choose One)</h4>
                                            <p className="text-sm text-slate-400 mb-4 font-medium">Each optional has 2 papers (250 marks each). Examples include:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {["History", "Geography", "Political Science", "Sociology", "Public Administration", "Anthropology", "Mathematics", "Physics", "Commerce"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-indigo-500/10 text-indigo-300 text-sm rounded-lg border border-indigo-500/20 font-medium">{topic}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* What Type of Questions Are Asked? */}
                                <div id="questions" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <HelpCircle className="w-5 h-5 text-blue-400" /> What Type of Questions Are Asked?
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-6">
                                            <div className="inline-block bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded-md text-xs uppercase tracking-widest mb-4">Prelims Example (MCQ)</div>
                                            <ul className="space-y-4 text-sm text-slate-300 font-medium list-decimal list-inside marker:text-slate-500 marker:font-black">
                                                <li className="bg-slate-950/50 p-3 flex gap-2 rounded-lg border border-slate-800/50"><div className="shrink-0">Q.</div>Which Article of Indian Constitution deals with Fundamental Rights?</li>
                                                <li className="bg-slate-950/50 p-3 flex gap-2 rounded-lg border border-slate-800/50"><div className="shrink-0">Q.</div>GDP is calculated by which method?</li>
                                                <li className="bg-slate-950/50 p-3 flex gap-2 rounded-lg border border-slate-800/50"><div className="shrink-0">Q.</div>Identify the correct pair (National Park – State).</li>
                                            </ul>
                                        </div>

                                        <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-6">
                                            <div className="inline-block bg-blue-500/20 text-blue-400 font-bold px-3 py-1 rounded-md text-xs uppercase tracking-widest mb-4">Mains Example (Descriptive)</div>
                                            <ul className="space-y-4 text-sm text-slate-300 font-medium">
                                                <li className="bg-slate-950/50 p-3 rounded-lg border border-slate-800/50"><div className="flex gap-2"><div className="text-blue-500 font-black">Q.</div>Discuss the role of civil services in democracy.</div></li>
                                                <li className="bg-slate-950/50 p-3 rounded-lg border border-slate-800/50"><div className="flex gap-2"><div className="text-blue-500 font-black">Q.</div>Evaluate the impact of climate change on Indian agriculture.</div></li>
                                            </ul>
                                            <p className="text-xs text-amber-500/80 font-bold mt-4">Questions in Mains are descriptive (long answers).</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary & Posts */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Banknote className="w-5 h-5 text-emerald-400" /> Salary After Selection & Vacancies
                                    </h3>

                                    <div className="flex flex-col md:flex-row items-stretch gap-6 mb-6">
                                        <div className="w-full md:w-1/2 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                                            <div className="text-xs text-emerald-400 font-black uppercase tracking-widest mb-2">IAS Starting Salary</div>
                                            <div className="text-3xl font-black text-white mb-2">₹56,100 <span className="text-lg font-medium text-slate-400">/ month</span></div>
                                            <div className="text-xs text-emerald-500/80 font-bold mb-4">(Level 10 Pay Matrix)</div>
                                            <div className="text-sm font-semibold text-slate-300 space-y-1">
                                                <div>Plus DA, HRA, TA, official residence, vehicle, and many government benefits.</div>
                                                <div className="text-white mt-2">Higher ranks = higher salary + more responsibility.</div>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 p-6 bg-slate-900 border border-slate-800 rounded-2xl">
                                            <div className="text-xs text-blue-400 font-black uppercase tracking-widest mb-4 flex items-center gap-2"><Users className="w-4 h-4" /> Number of Vacancies (Recent Trend)</div>
                                            <div className="text-2xl font-black text-white mb-3">~900–1100 <span className="text-lg font-medium text-slate-400">per year</span></div>
                                            <p className="text-sm text-slate-400 font-medium">Selection rate is extremely competitive (lakhs apply, ~1000 selected).</p>
                                        </div>
                                    </div>
                                </div>

                                {/* How to Start Preparation & Difficulty */}
                                <div id="tips" className="scroll-mt-24 space-y-8">
                                    {/* Tips */}
                                    <div className="p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-3xl">
                                        <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                                            <Target className="w-6 h-6 text-blue-400" /> How to Start Preparation for UPSC 2026?
                                        </h3>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                { step: "1", title: "NCERT Basics", desc: "Start with NCERT (Class 6–12) for basics." },
                                                { step: "2", title: "Standard Books", desc: "Read standard books (Laxmikanth for Polity, Spectrum for History)." },
                                                { step: "3", title: "Daily News", desc: "Read daily newspaper (The Hindu / Indian Express)." },
                                                { step: "4", title: "Answer Writing practice", desc: "Focus on answer writing practice for Mains." },
                                                { step: "5", title: "PYQs", desc: "Practice previous 10 years’ question papers." },
                                            ].map((item, i) => (
                                                <div key={i} className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex items-start gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">{item.step}</div>
                                                    <div>
                                                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                                        <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Difficulty */}
                                    <div className="p-8 bg-rose-950/20 border border-rose-900/30 rounded-3xl">
                                        <h3 className="text-xl font-black text-rose-400 flex items-center gap-3 mb-4 uppercase tracking-wide">
                                            <Flame className="w-5 h-5" /> Difficulty Level
                                        </h3>
                                        <p className="text-white font-bold mb-4 bg-rose-950/50 inline-block px-3 py-1.5 rounded-lg border border-rose-900/50 text-sm">UPSC is considered India’s toughest exam because:</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-300">
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> Huge syllabus</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> Conceptual + analytical questions</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> Multi-stage elimination</li>
                                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> Very low selection ratio</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN - STICKY ACTION CARD */}
                    <div className="lg:col-span-4 hidden md:block">
                        <div className="sticky top-24 bg-slate-900 border-2 border-blue-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Conquer the UPSC CSE</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">You've seen the mammoth syllabus. Now it's time to test your foundational skills securely.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Full Access to 160+ Prelims & Mains Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Answer Writing Assessment Model
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> All-India Percentile Tracking
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/upsc" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Try Free Mock Test
                                </Link>
                                <Link href="/government-exams/upsc" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-blue-500/30 active:scale-95">
                                    Unlock Complete Pass
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

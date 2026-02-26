"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, Keyboard
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function SSCCHSLSchedulePage() {
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
                    <Link href="/government-exams/ssc" className="hover:text-blue-400 transition-colors">SSC Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/ssc/ssc-chsl" className="hover:text-blue-400 transition-colors">SSC CHSL</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Preparation Schedule & Details</span>
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
                                    What Topics Do We Cover? <br className="hidden md:block" /> How Will We Prepare You for CHSL?
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    Before diving into the exam details, here is a complete blueprint of what the <span className="text-white font-bold">Xamsathi SSC CHSL Pro Pass</span> delivers. We cover every single topic from foundational maths to the exact typing/skill test interface.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Calculator className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Quantitative Aptitude</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">100+ Chapter tests covering Arithmetic (Number System, DI) & Advance Maths (Algebra, Geometry) built for the 60-minute constraint.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <BookMarked className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">English Comprehension</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Core focus on Vocabulary, Error Spotting, Reading Comprehension, Cloze tests, and strict grammar rules that TCS loves.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <HelpCircle className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Reasoning & Intelligence</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Coding-decoding, Series, Blood Relations, and Non-Verbal reasoning mock sets to boost calculation and logic speed.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <Globe2 className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">General Awareness (GK)</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Current affairs tests (last 12 months), Static GK, History, Polity, Geography, Science, and specialized Tier-2 Computer Knowledge modules.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 400+ Total Tests</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Detailed Solutions</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Real TCS Interface</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Tier 1 & Tier 2</span>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete SSC CHSL Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">Complete Guide: SSC CHSL 2026</h2>
                                <p className="text-slate-400 mt-2 font-medium">Everything you need to know about the Combined Higher Secondary Level Examination.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'dates', label: 'Important Dates', icon: Calendar },
                                    { id: 'pattern', label: 'Exam Pattern', icon: FileText },
                                    { id: 'syllabus', label: 'Detailed Syllabus', icon: BookOpen },
                                    { id: 'salary', label: 'Salary & Posts', icon: Banknote },
                                    { id: 'tips', label: 'How to Start', icon: Target },
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
                                        <span className="text-white font-bold">SSC CHSL stands for Combined Higher Secondary Level Examination.</span><br />
                                        It is a national-level exam conducted by the Staff Selection Commission (SSC) to recruit <strong className="text-blue-400">12th pass</strong> candidates for various posts like Lower Divisional Clerk (LDC), Junior Secretariat Assistant (JSA), Postal Assistant (PA), Sorting Assistant (SA), and Data Entry Operator (DEO).
                                    </p>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Calendar className="w-5 h-5 text-blue-400" /> SSC CHSL 2026 – Expected Dates
                                    </h3>
                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                                        <p className="text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">(Based on previous SSC calendars – final dates will be confirmed in official notification)</p>

                                        <div className="space-y-3">
                                            {[
                                                { event: "Notification Release", date: "April–May 2026" },
                                                { event: "Application Start Date", date: "May 2026" },
                                                { event: "Tier 1 Exam (CBT)", date: "July–August 2026", highlight: true },
                                                { event: "Tier 2 Exam (Main + Skill Test)", date: "October–November 2026", highlight: true },
                                            ].map((item, idx) => (
                                                <div key={idx} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border ${item.highlight ? 'bg-blue-600/10 border-blue-500/30' : 'bg-slate-900 border-slate-800'}`}>
                                                    <div className={`font-bold ${item.highlight ? 'text-blue-200' : 'text-slate-300'}`}>{item.event}</div>
                                                    <div className={`text-sm font-black mt-1 sm:mt-0 ${item.highlight ? 'text-blue-400' : 'text-white'}`}>{item.date}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>


                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-blue-400" /> SSC CHSL 2026 Exam Pattern (What Mocks Follow)
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="bg-slate-950 p-6 rounded-2xl border w-full border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.05)] relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-4 -mt-4"></div>
                                            <h4 className="text-lg font-black text-white mb-2 relative z-10 flex items-center gap-2">Tier 1 Exam <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 uppercase tracking-wider">Online Objective</span></h4>
                                            <p className="text-slate-400 text-sm mb-4 font-medium">This is the preliminary stage. The marks scored here <strong className="text-blue-300">are used</strong> to shortlist candidates for Tier 2.</p>

                                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                                                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                                                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest block mb-1">Time</span>
                                                    <strong className="text-white">60 Minutes</strong>
                                                </div>
                                                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                                                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest block mb-1">Questions</span>
                                                    <strong className="text-white">100 Qs</strong>
                                                </div>
                                                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                                                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest block mb-1">Total Marks</span>
                                                    <strong className="text-white">200 Marks</strong>
                                                </div>
                                                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                                                    <span className="text-[10px] text-rose-500 uppercase font-black tracking-widest block mb-1">Negative Marking</span>
                                                    <strong className="text-rose-400">-0.50 per wrong</strong>
                                                </div>
                                            </div>

                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm text-left border-collapse min-w-[500px]">
                                                    <thead className="bg-slate-900/50 text-slate-300 border-b border-slate-800">
                                                        <tr>
                                                            <th className="p-3 font-bold rounded-tl-xl border-l border-t border-slate-800 pl-4 w-1/2">Subject</th>
                                                            <th className="p-3 font-bold border-t border-slate-800">Questions</th>
                                                            <th className="p-3 font-bold rounded-tr-xl border-r border-t border-slate-800 pr-4">Marks</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-800 border-l border-r border-b border-slate-800 rounded-b-xl text-slate-300 font-medium">
                                                        <tr className="hover:bg-slate-900/30 transition-colors">
                                                            <td className="p-3 pl-4">General Intelligence</td><td className="p-3 font-bold text-white">25</td><td className="p-3 font-bold text-amber-400">50</td>
                                                        </tr>
                                                        <tr className="hover:bg-slate-900/30 transition-colors">
                                                            <td className="p-3 pl-4">Quantitative Aptitude</td><td className="p-3 font-bold text-white">25</td><td className="p-3 font-bold text-amber-400">50</td>
                                                        </tr>
                                                        <tr className="hover:bg-slate-900/30 transition-colors">
                                                            <td className="p-3 pl-4">English Language</td><td className="p-3 font-bold text-white">25</td><td className="p-3 font-bold text-amber-400">50</td>
                                                        </tr>
                                                        <tr className="hover:bg-slate-900/30 transition-colors">
                                                            <td className="p-3 pl-4">General Awareness</td><td className="p-3 font-bold text-white">25</td><td className="p-3 font-bold text-amber-400">50</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 w-full relative overflow-hidden">
                                            <h4 className="text-lg font-black text-white mb-2 relative z-10 flex flex-wrap items-center gap-2">
                                                Tier 2 Exam
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 uppercase tracking-wider">Objective + Skill/Typing</span>
                                            </h4>
                                            <p className="text-slate-400 text-sm mb-4 font-medium">The comprehensive main stage that determines your final merit ranking.</p>

                                            <div className="space-y-3">
                                                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                                    <h5 className="font-bold text-white mb-2">Section I & II (Merit Determining)</h5>
                                                    <ul className="text-sm text-slate-300 space-y-2">
                                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></div> Mathematical Abilities</li>
                                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></div> Reasoning & General Intelligence</li>
                                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></div> English Language & Comprehension</li>
                                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></div> General Awareness</li>
                                                    </ul>
                                                </div>
                                                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                                    <h5 className="font-bold text-white mb-2 flex flex-wrap items-center gap-2">
                                                        Section III
                                                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 uppercase tracking-wider">Qualifying Only (Not Scored for Merit)</span>
                                                    </h5>
                                                    <ul className="text-sm text-slate-300 space-y-2">
                                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0"></div> Computer Knowledge Test</li>
                                                        <li className="flex flex-wrap items-center gap-2"><div className="w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0"></div> <Keyboard className="w-3.5 h-3.5" /> Skill/Typing Test (DEO / LDC / JSA)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Syllabus Breakdown */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <BookOpen className="w-5 h-5 text-blue-400" /> Syllabus Breakdown
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><HelpCircle className="w-20 h-20" /></div>
                                            <h4 className="text-lg font-black text-white mb-4 relative z-10 flex items-center gap-2"><span className="text-2xl">🧠</span> 1. General Intelligence & Reasoning</h4>
                                            <div className="flex flex-wrap gap-2 relative z-10">
                                                {['Analogies', 'Similarities & Differences', 'Coding-Decoding', 'Series (Number & Alphabet)', 'Blood Relations', 'Directions & Distance', 'Venn Diagrams', 'Non-verbal reasoning', 'Statements & Conclusions', 'Paper folding & cutting', 'Mirror & water images', 'Figure classification'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Calculator className="w-20 h-20" /></div>
                                            <h4 className="text-lg font-black text-white mb-2 relative z-10 flex items-center gap-2"><span className="text-2xl">➗</span> 2. Quantitative Aptitude (Maths)</h4>
                                            <p className="text-xs text-slate-400 font-medium mb-4 relative z-10 uppercase tracking-widest">Covers basic to moderate difficulty arithmetic & advance</p>
                                            <div className="flex flex-wrap gap-2 relative z-10">
                                                {['Number System', 'Simplification & Approximation', 'Percentage', 'Ratio & Proportion', 'Averages', 'Profit & Loss', 'Simple & Compound Interest', 'Time & Work', 'Time, Speed & Distance', 'Algebra (equations, identities)', 'Geometry & Mensuration', 'Trigonometry', 'Data Interpretation', 'LCM & HCF', 'Probability & Statistics'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><BookMarked className="w-20 h-20" /></div>
                                            <h4 className="text-lg font-black text-white mb-2 relative z-10 flex items-center gap-2"><span className="text-2xl">📄</span> 3. English Language</h4>
                                            <p className="text-xs text-slate-400 font-medium mb-4 relative z-10 uppercase tracking-widest">Grammar, comprehension and usage topics</p>
                                            <div className="flex flex-wrap gap-2 relative z-10">
                                                {['Spotting Errors', 'Fill in the Blanks', 'Synonyms & Antonyms', 'One-Word Substitution', 'Idioms & Phrases', 'Sentence Improvement', 'Active/Passive Voice', 'Direct/Indirect Speech', 'Sentence Arrangement', 'Cloze Test', 'Reading Comprehension'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Globe2 className="w-20 h-20" /></div>
                                            <h4 className="text-lg font-black text-white mb-2 relative z-10 flex items-center gap-2"><span className="text-2xl">🌍</span> 4. General Awareness (GK)</h4>
                                            <p className="text-xs text-slate-400 font-medium mb-4 relative z-10 uppercase tracking-widest">Important for current affairs + static sections</p>
                                            <div className="flex flex-wrap gap-2 relative z-10">
                                                {['Indian History', 'Geography (India & World)', 'Indian Polity & Constitution', 'Economy & Budget', 'Science & Technology', 'Environment & Ecology', 'Current Affairs (last 12–18 months)', 'Books & Authors', 'Awards & Sports', 'Important Days'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-8 p-6 bg-slate-900 rounded-3xl border border-slate-800/80">
                                            <h4 className="text-lg font-black text-white mb-3">Tier-2 Syllabus – What Mock Tests Add</h4>
                                            <p className="text-slate-400 text-sm mb-4 font-medium">Tier-2 tests slightly higher skills and introduces two specific qualifying sections:</p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 relative z-10">
                                                    <h5 className="font-bold text-white mb-2 text-sm uppercase tracking-wider text-slate-500"><MonitorPlay className="w-4 h-4 inline-block mr-1" /> 5. Computer Knowledge</h5>
                                                    <ul className="text-sm text-slate-300 space-y-2">
                                                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500" /> Basics of Computers & Operating System</li>
                                                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500" /> MS Office (Word, Excel, PowerPoint)</li>
                                                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500" /> Internet, Email, Networking & Security</li>
                                                    </ul>
                                                </div>
                                                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 relative z-10">
                                                    <h5 className="font-bold text-white mb-2 text-sm uppercase tracking-wider text-slate-500"><Keyboard className="w-4 h-4 inline-block mr-1" /> 6. Skill/Typing Test</h5>
                                                    <ul className="text-sm text-slate-300 space-y-2">
                                                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500" /> <strong>DEO:</strong> ~8,000 key depressions/hour</li>
                                                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-500" /> <strong>Typing (LDC/JSA):</strong> 35 wpm (English) / 30 wpm (Hindi)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                {/* Salary & Top Posts */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Banknote className="w-5 h-5 text-emerald-400" /> Salary After Selection
                                    </h3>

                                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                                        <div className="w-full sm:w-auto p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                                            <div className="text-xs text-emerald-400 font-black uppercase tracking-widest mb-2">Pay Scale Range</div>
                                            <div className="text-2xl font-black text-white">₹19,900 – ₹81,100+</div>
                                            <div className="text-xs text-emerald-500/70 font-bold mt-1">(Pay Level 2 & 4 dependent on Post)</div>
                                        </div>
                                        <ul className="text-sm font-semibold text-slate-400 space-y-2">
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Plus Dearness Allowance (DA)</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> House Rent Allowance (HRA)</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Transport Allowance (TA)</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* How to Start Preparation */}
                                <div id="tips" className="scroll-mt-24 p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                                        <Target className="w-6 h-6 text-blue-400" /> Best Strategy for Mock Practice CHSL 2026?
                                    </h3>

                                    <p className="text-slate-300 font-medium mb-6">Xamsathi mock test structre follows exact CHSL methodology giving you full length, sectional, subject-wise, and live topic tests. Here's how to use them:</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">1</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Start Sectional First</h4>
                                                <p className="text-xs text-slate-400 font-medium">Start with sectional mocks right after finishing basic topics.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">2</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Move to Full-Length Mocks</h4>
                                                <p className="text-xs text-slate-400 font-medium">Attempt the 60-minute Tier 1 mocks. Analyze weak areas after every test.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">3</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Revise Daily</h4>
                                                <p className="text-xs text-slate-400 font-medium">Revise GK & Current affairs updates daily from the portal.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">4</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Practice Typing</h4>
                                                <p className="text-xs text-slate-400 font-medium">Practice typing/skill tests daily once Tier-2 syllabus is strong.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN - STICKY ACTION CARD */}
                    <div className="lg:col-span-4 hidden md:block">
                        <div className="sticky top-24 bg-slate-900 border-2 border-blue-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Ready to crack SSC CHSL?</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">You've seen the syllabus and pattern. Now it's time to start attempting tests on the actual interface.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Full Access to 400+ Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Chapter-wise syllabus coverage
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Latest PYQs as tests
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/ssc-chsl" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Try Free Mock Test
                                </Link>
                                <Link href="/government-exams/ssc/ssc-chsl#pricing" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-blue-500/30 active:scale-95">
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

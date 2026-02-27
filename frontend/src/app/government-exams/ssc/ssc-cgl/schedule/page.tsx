"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, AlertCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function SSCCGLSchedulePage() {
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
                    <Link href="/government-exams/ssc/ssc-cgl" className="hover:text-blue-400 transition-colors">SSC CGL</Link>
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
                                    What Chapters Do We Cover? <br className="hidden md:block" /> How Will We Prepare You?
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    Before diving into the exam details, here is a complete blueprint of what the <span className="text-white font-bold">Xamsathi SSC CGL Pro Pass</span> delivers. We cover every single topic from basic to advanced level.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Calculator className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Quantitative Aptitude</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">100+ Chapter tests covering Arithmetic (Percentage, Profit/Loss, Time/Work) & Advance Maths (Algebra, Geometry, Mensuration).</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <BookMarked className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">English Comprehension</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Focus on Vocabulary, Error Spotting, Reading Comprehension, Cloze tests, and complete Grammar rules.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <HelpCircle className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Reasoning & Intelligence</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Syllogism, Number Series, Blood Relations, Puzzles, and Non-Verbal reasoning mock sets to boost speed.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <Globe2 className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">General Awareness (GK)</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Daily current affairs tests, Static GK, History, Polity, Geography, and Science (Physics, Chemistry, Bio).</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 450+ Total Tests</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Detailed Solutions</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Real TCS Interface</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Tier 1 & Tier 2</span>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete SSC CGL Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">Complete Guide: SSC CGL 2026</h2>
                                <p className="text-slate-400 mt-2 font-medium">Everything you need to know about the Combined Graduate Level Examination.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'dates', label: 'Important Dates', icon: Calendar },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
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
                                        <span className="text-white font-bold">SSC CGL stands for Combined Graduate Level Examination.</span><br />
                                        It is a national-level exam conducted to recruit graduates for Group B and Group C posts in various ministries, departments, and organizations under the Government of India.
                                    </p>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Calendar className="w-5 h-5 text-blue-400" /> SSC CGL 2026 – Expected Dates
                                    </h3>
                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                                        <p className="text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">(Based on previous SSC calendars – final dates will be confirmed in official notification)</p>

                                        <div className="space-y-3">
                                            {[
                                                { event: "Notification Release", date: "March–April 2026" },
                                                { event: "Application Start Date", date: "April 2026" },
                                                { event: "Last Date to Apply", date: "May 2026" },
                                                { event: "Tier 1 Exam (CBT)", date: "May–June 2026", highlight: true },
                                                { event: "Tier 2 Exam (Main)", date: "July–August 2026", highlight: true },
                                                { event: "Final Result", date: "October–November 2026" },
                                            ].map((item, idx) => (
                                                <div key={idx} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border ${item.highlight ? 'bg-blue-600/10 border-blue-500/30' : 'bg-slate-900 border-slate-800'}`}>
                                                    <div className={`font-bold ${item.highlight ? 'text-blue-200' : 'text-slate-300'}`}>{item.event}</div>
                                                    <div className={`text-sm font-black mt-1 sm:mt-0 ${item.highlight ? 'text-blue-400' : 'text-white'}`}>{item.date}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Eligibility Criteria */}
                                <div id="eligibility" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Users className="w-5 h-5 text-blue-400" /> Eligibility Criteria
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Educational Qualification
                                            </div>
                                            <ul className="space-y-3 text-sm text-slate-400 font-medium">
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Bachelor’s Degree from a recognized university.</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Specific posts (like Junior Statistical Officer / AAO) require specific subjects such as Statistics or Finance/Economics at degree level.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Age Limit
                                            </div>
                                            <ul className="space-y-3 text-sm text-slate-400 font-medium">
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Generally 18 to 32 years depending on the post.</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Age relaxation applicable for SC/ST/OBC/PwD candidates as per government rules.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-blue-400" /> SSC CGL 2026 Exam Pattern
                                    </h3>
                                    <p className="text-slate-400 mb-6 font-medium">SSC CGL typically features 2 main Tiers after recent pattern changes. Both are conducted as Computer Based Tests (CBT).</p>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Tier 1 (Qualifying Stage)</h4>
                                        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                                            <table className="w-full text-left border-collapse min-w-[500px]">
                                                <thead>
                                                    <tr className="bg-slate-900 border-b border-slate-800">
                                                        <th className="p-4 font-bold text-slate-300">Subject</th>
                                                        <th className="p-4 font-bold text-slate-300">Questions</th>
                                                        <th className="p-4 font-bold text-slate-300">Marks</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-slate-400 font-medium">
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">General Intelligence & Reasoning</td>
                                                        <td className="p-4">25</td>
                                                        <td className="p-4">50</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">General Awareness</td>
                                                        <td className="p-4">25</td>
                                                        <td className="p-4">50</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">Quantitative Aptitude</td>
                                                        <td className="p-4">25</td>
                                                        <td className="p-4">50</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">English Comprehension</td>
                                                        <td className="p-4">25</td>
                                                        <td className="p-4">50</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="bg-blue-600/10 text-white font-bold border-t border-blue-500/20">
                                                    <tr>
                                                        <td className="p-4">Total</td>
                                                        <td className="p-4 text-blue-400">100</td>
                                                        <td className="p-4 text-blue-400">200</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>

                                        <div className="flex flex-wrap gap-4 mt-4">
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" /> Time Duration: 1 Hour</div>
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-rose-500" /> Negative Marking: 0.50 per wrong answer</div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Tier 2 (Main Examination)</h4>
                                        <p className="text-sm text-slate-400 mb-4 font-bold">Tier 2 marks decide your final selection and merit list rating.</p>

                                        <div className="space-y-4">
                                            <div className="p-5 border border-slate-700 bg-slate-800/30 rounded-xl">
                                                <h5 className="font-bold text-blue-400 mb-2">Paper 1 (Compulsory for All Posts)</h5>
                                                <p className="text-sm text-slate-300 mb-2">Divided into multiple sessions covering:</p>
                                                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                                                    <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-slate-400">Mathematical Abilities</span>
                                                    <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-slate-400">Reasoning</span>
                                                    <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-slate-400">English Language</span>
                                                    <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-slate-400">General Awareness</span>
                                                    <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-slate-400">Computer Knowledge</span>
                                                    <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-slate-400">Data Entry Speed Test (DEST)</span>
                                                </div>
                                            </div>
                                            <div className="p-5 border border-slate-800 bg-slate-950 rounded-xl">
                                                <h5 className="font-bold text-slate-200 mb-2">Paper 2 & Paper 3 (Special Posts)</h5>
                                                <ul className="text-sm text-slate-400 space-y-2">
                                                    <li><span className="text-white font-semibold">Paper 2:</span> Statistics (Only for Junior Statistical Officer - JSO)</li>
                                                    <li><span className="text-white font-semibold">Paper 3:</span> Finance & Economics (Only for Assistant Audit/Accounts Officer - AAO)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Syllabus */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <BookOpen className="w-5 h-5 text-blue-400" /> Detailed SSC CGL 2026 Syllabus
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* General Intelligence */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                1. General Intelligence & Reasoning
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2">
                                                {["Analogies", "Coding-Decoding", "Number & Alphabet Series", "Blood Relations", "Direction Test", "Syllogism", "Puzzles", "Non-verbal reasoning", "Mirror & Water Images"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* General Awareness */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                2. General Awareness (GK)
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2">
                                                {["Indian History", "Indian Polity", "Geography", "Indian Economy", "Physics", "Chemistry", "Biology", "Static GK", "Current Affairs"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Quantitative Aptitude */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                3. Quantitative Aptitude
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2">
                                                {["Number System", "Percentage", "Profit & Loss", "Ratio & Proportion", "Time & Work", "Speed, Distance & Time", "Algebra", "Geometry", "Mensuration", "Trigonometry", "Data Interpretation"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* English Language */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                4. English Language & Comprehension
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2">
                                                {["Error Spotting", "Fill in the Blanks", "Synonyms & Antonyms", "One Word Substitution", "Idioms & Phrases", "Active/Passive Voice", "Direct/Indirect Speech", "Reading Comprehension"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Computer (Tier 2) */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden md:col-span-2">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                5. Computer Knowledge (Tier 2)
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2">
                                                {["Basics of Computer", "MS Office", "Internet & Email", "Operating System", "Hardware & Software", "Cyber Security basics"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Example Questions Formats */}
                                <div className="relative p-6 md:p-8 bg-blue-900/10 border border-blue-500/20 rounded-2xl overflow-hidden">
                                    <h3 className="text-lg font-black text-blue-400 flex items-center gap-2 mb-4">
                                        <HelpCircle className="w-5 h-5" /> What Type of Questions Are Asked?
                                    </h3>
                                    <div className="space-y-3 text-sm font-medium text-slate-300">
                                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                            <span className="text-slate-500 text-xs font-bold uppercase mb-1 block">Maths</span>
                                            If 5 men can complete a work in 10 days, how many days will 10 men take?
                                        </div>
                                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                            <span className="text-slate-500 text-xs font-bold uppercase mb-1 block">GK</span>
                                            Who is the author of the Indian National Anthem?
                                        </div>
                                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                            <span className="text-slate-500 text-xs font-bold uppercase mb-1 block">English</span>
                                            Find the synonym of "Abundant".
                                        </div>
                                    </div>
                                    <p className="mt-4 text-xs font-bold text-slate-500 text-center uppercase tracking-widest">All Questions are Objective Multiple Choice (MCQs)</p>
                                </div>

                                {/* Salary & Posts */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Banknote className="w-5 h-5 text-emerald-400" /> Salary After Selection & Top Posts
                                    </h3>

                                    <p className="text-slate-300 font-medium mb-4">
                                        Posts offer salaries grouped under <strong className="text-white">Level 4 to Level 8 Pay Matrix</strong>.
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                                        <div className="w-full sm:w-auto p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                                            <div className="text-xs text-emerald-400 font-black uppercase tracking-widest mb-2">Starting Salary Range</div>
                                            <div className="text-2xl md:text-3xl font-black text-white">₹44,900 – ₹75,000+</div>
                                            <div className="text-xs text-emerald-500/70 font-bold mt-1">(Depending on City & Post)</div>
                                        </div>
                                        <ul className="text-sm font-semibold text-slate-400 space-y-2">
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Plus Dearness Allowance (DA)</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> House Rent Allowance (HRA)</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Transport Allowance (TA)</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Excellent Government Benefits</li>
                                        </ul>
                                    </div>

                                    <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider text-slate-500">Popular Job Profiles</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Assistant Section Officer (ASO)</span>
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Inspector (Income Tax)</span>
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Excise Inspector</span>
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Auditor</span>
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Tax Assistant</span>
                                    </div>
                                </div>

                                {/* How to Start Preparation */}
                                <div id="tips" className="scroll-mt-24 p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                                        <Target className="w-6 h-6 text-blue-400" /> How to Start Preparation?
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">1</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Clear Basics</h4>
                                                <p className="text-xs text-slate-400 font-medium">Start with basic NCERT/Foundational books for Maths & Grammar Rules for English.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">2</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Previous Year Papers</h4>
                                                <p className="text-xs text-slate-400 font-medium">Practice PYQs extensively. TCS repeats similar patterns and logic across shifts.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">3</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Daily Targets</h4>
                                                <p className="text-xs text-slate-400 font-medium">Solve daily reasoning sets and read daily current affairs notes.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">4</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Weekly Mock Tests</h4>
                                                <p className="text-xs text-slate-400 font-medium">Attempt Xamsathi mock tests on a regular basis strictly under timed conditions.</p>
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

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Ready to crack SSC CGL?</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">You've seen the syllabus and pattern. Now it's time to start attempting tests on the actual interface.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Full Access to 450+ Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Chapter-wise syllabus coverage
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Latest PYQs as tests
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/ssc-cgl" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Try Free Mock Test
                                </Link>
                                <Link href="/government-exams/ssc/ssc-cgl#pricing" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-blue-500/30 active:scale-95">
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

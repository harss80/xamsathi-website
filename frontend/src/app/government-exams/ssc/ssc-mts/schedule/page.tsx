"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, Activity,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, Keyboard
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function SSCMTSSchedulePage() {
    const [activeTab, setActiveTab] = useState("pattern");

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
                    <Link href="/government-exams/ssc/ssc-mts" className="hover:text-blue-400 transition-colors">SSC MTS</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Detailed Syllabus & Schedule</span>
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
                                    What Chapters Do We Cover? <br className="hidden md:block" /> How Will We Prepare You for MTS?
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    Before diving into the exam details, here is a complete blueprint of what the <span className="text-white font-bold">Xamsathi SSC MTS Pro Pass</span> delivers. We cover all 95+ topics required to conquer Session I and Session II.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Calculator className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Session-I Maths</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">23 targeted chapters covering Arithmetic basics (10th standard), 2D/3D Mensuration, and Data Interpretation.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <HelpCircle className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Session-I Reasoning</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">21 chapters of Verbal and Non-Verbal reasoning designed to build your speed without negative marking worries.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <Globe2 className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Session-II General Awareness</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">29 sections of GK covering Static, History, Geography, and heavily integrated Current Affairs (Last 12-18 months).</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <BookMarked className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Session-II English</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">22 comprehensive English chapters covering Grammar Rules, massive Vocabulary, and Comprehension sets.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 250+ Total Tests</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Detailed Solutions</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Session I & II Interface</span>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete SSC MTS Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">Complete Guide: SSC MTS 2026</h2>
                                <p className="text-slate-400 mt-2 font-medium">Everything you need to know about the Multi-Tasking Staff & Havaldar Examination (10th Level).</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'pattern', label: 'Exam Pattern', icon: FileText },
                                    { id: 'syllabus', label: 'Detailed Syllabus', icon: BookOpen },
                                    { id: 'difficulty', label: 'Difficulty Level', icon: Activity },
                                    { id: 'physical', label: 'Havaldar Physical', icon: Users },
                                    { id: 'salary', label: 'Salary Structure', icon: Banknote },
                                    { id: 'strategy', label: 'Best Strategy', icon: Target },
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

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-blue-400" /> SSC MTS 2026 Exam Pattern
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="bg-slate-950 p-6 rounded-2xl border w-full border-slate-800 shadow-sm relative overflow-hidden">
                                            <h4 className="text-lg font-black text-white mb-2 relative z-10 flex items-center gap-2">Computer Based Test (CBT)</h4>
                                            <p className="text-slate-400 text-sm mb-4 font-medium">A single day test consisting of two sequential sessions.</p>

                                            <div className="grid grid-cols-3 lg:grid-cols-3 gap-3 mb-6">
                                                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-center">
                                                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest block mb-1">Total Time</span>
                                                    <strong className="text-white text-lg">90 Minutes</strong>
                                                </div>
                                                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-center">
                                                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest block mb-1">Total Questions</span>
                                                    <strong className="text-white text-lg">90 Qs</strong>
                                                </div>
                                                <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-center">
                                                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest block mb-1">Total Marks</span>
                                                    <strong className="text-white text-lg">270 Marks</strong>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500/10 text-emerald-400 font-bold text-xs rounded-bl-lg border-l border-b border-emerald-500/20">No Negative Marking</div>
                                                    <h5 className="font-bold text-white mb-3 text-lg text-emerald-300">Session-I</h5>
                                                    <ul className="text-sm text-slate-300 space-y-2 font-medium">
                                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> Numerical & Mathematical Ability</li>
                                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> Reasoning Ability & Problem Solving</li>
                                                    </ul>
                                                </div>
                                                <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl relative overflow-hidden">
                                                    <div className="absolute top-0 right-0 px-3 py-1 bg-rose-500/10 text-rose-400 font-bold text-xs rounded-bl-lg border-l border-b border-rose-500/20">-1 Mark Negative!</div>
                                                    <h5 className="font-bold text-white mb-3 text-lg text-rose-300">Session-II</h5>
                                                    <ul className="text-sm text-slate-300 space-y-2 font-medium">
                                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div> General Awareness</li>
                                                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div> English Language</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                {/* Syllabus Breakdown */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <BookOpen className="w-5 h-5 text-blue-400" /> Syllabus Breakdown (95+ Topics)
                                    </h3>

                                    <div className="space-y-6">
                                        {/* Maths */}
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Calculator className="w-20 h-20" /></div>

                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10 gap-3">
                                                <h4 className="text-lg font-black text-white flex items-center gap-2"><span className="text-2xl">➗</span> 1. Numerical Ability & Maths</h4>
                                                <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Class 10 Standard</span>
                                            </div>

                                            <p className="text-sm text-blue-300 font-bold mb-4 relative z-10">Total ≈ 23 Chapters</p>
                                            <div className="flex flex-wrap gap-2 relative z-10">
                                                {['Number System', 'LCM & HCF', 'Simplification / BODMAS', 'Percentage', 'Ratio & Proportion', 'Partnership', 'Average', 'Profit & Loss', 'Discount', 'Simple Interest', 'Compound Interest', 'Time & Work', 'Pipes & Cistern', 'Time, Speed & Distance', 'Boats & Streams', 'Train Problems', 'Mixture & Alligation', 'Mensuration (2D)', 'Mensuration (3D)', 'Algebra (Basic)', 'Trigonometry (Basic)', 'Data Interpretation', 'Basic Statistics'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs md:text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Reasoning */}
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><HelpCircle className="w-20 h-20" /></div>

                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10 gap-3">
                                                <h4 className="text-lg font-black text-white flex items-center gap-2"><span className="text-2xl">🧠</span> 2. Reasoning Ability & Problem Solving</h4>
                                            </div>

                                            <p className="text-sm text-emerald-300 font-bold mb-4 relative z-10">Total ≈ 21 Chapters</p>
                                            <div className="flex flex-wrap gap-2 relative z-10">
                                                <h5 className="w-full text-xs font-bold text-slate-500 uppercase tracking-widest mt-2 mb-1">Verbal</h5>
                                                {['Analogy', 'Classification', 'Series', 'Coding-Decoding', 'Blood Relations', 'Direction Test', 'Order & Ranking', 'Syllogism', 'Statement & Conclusion', 'Assertion & Reason', 'Venn Diagram', 'Basic Puzzle', 'Seating Arrangement', 'Missing Number', 'Logical Sequence'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs md:text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                                <h5 className="w-full text-xs font-bold text-slate-500 uppercase tracking-widest mt-4 mb-1">Non-Verbal</h5>
                                                {['Mirror Image', 'Water Image', 'Paper Folding', 'Embedded Figures', 'Figure Completion', 'Counting Figures'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs md:text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* General Awareness */}
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Globe2 className="w-20 h-20" /></div>

                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10 gap-3">
                                                <h4 className="text-lg font-black text-white flex items-center gap-2"><span className="text-2xl">🌍</span> 3. General Awareness (GK)</h4>
                                            </div>

                                            <p className="text-sm text-amber-300 font-bold mb-4 relative z-10">Total ≈ 29 Sections</p>
                                            <div className="flex flex-wrap gap-2 relative z-10">
                                                <h5 className="w-full text-xs font-bold text-slate-500 uppercase tracking-widest mt-2 mb-1">History, Geo & Polity</h5>
                                                {['Ancient History', 'Medieval History', 'Modern History', 'Freedom Movement', 'Physical Geography', 'Indian Geography', 'World Geography', 'Indian Constitution', 'Fundamental Rights', 'Parliament', 'Executive', 'Panchayati Raj'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs md:text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                                <h5 className="w-full text-xs font-bold text-slate-500 uppercase tracking-widest mt-4 mb-1">Economy, Science & Environment</h5>
                                                {['Basic Economics', 'Budget', 'Banking', 'Inflation', 'Physics', 'Chemistry', 'Biology', 'Ecology', 'Climate Change', 'National Parks'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs md:text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                                <h5 className="w-full text-xs font-bold text-slate-500 uppercase tracking-widest mt-4 mb-1">Current Affairs</h5>
                                                {['Last 12 Months CA', 'Sports', 'Awards', 'Books & Authors', 'Important Days', 'Govt Schemes'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs md:text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* English Language */}
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-sm relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><BookMarked className="w-20 h-20" /></div>

                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10 gap-3">
                                                <h4 className="text-lg font-black text-white flex items-center gap-2"><span className="text-2xl">📖</span> 4. English Language</h4>
                                            </div>

                                            <p className="text-sm text-indigo-300 font-bold mb-4 relative z-10">Total ≈ 22 Chapters</p>
                                            <div className="flex flex-wrap gap-2 relative z-10">
                                                <h5 className="w-full text-xs font-bold text-slate-500 uppercase tracking-widest mt-2 mb-1">Grammar</h5>
                                                {['Noun', 'Pronoun', 'Verb', 'Adjective', 'Adverb', 'Preposition', 'Conjunction', 'Articles', 'Tenses', 'Active & Passive Voice', 'Direct & Indirect Speech', 'Subject-Verb Agreement'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs md:text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                                <h5 className="w-full text-xs font-bold text-slate-500 uppercase tracking-widest mt-4 mb-1">Vocabulary</h5>
                                                {['Synonyms', 'Antonyms', 'One Word Substitution', 'Idioms & Phrases', 'Spelling Correction'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs md:text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                                <h5 className="w-full text-xs font-bold text-slate-500 uppercase tracking-widest mt-4 mb-1">Comprehension</h5>
                                                {['Error Spotting', 'Fill in the Blanks', 'Cloze Test', 'Sentence Rearrangement', 'Reading Comprehension'].map((topic, i) => (
                                                    <span key={i} className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs md:text-sm text-slate-300 font-medium">{topic}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Difficulty Level */}
                                <div id="difficulty" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Activity className="w-5 h-5 text-blue-400" /> Difficulty Level
                                    </h3>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Maths</div>
                                            <div className="text-base md:text-lg font-black text-amber-400">Easy - Mod</div>
                                        </div>
                                        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Reasoning</div>
                                            <div className="text-base md:text-lg font-black text-emerald-400">Easy</div>
                                        </div>
                                        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">English</div>
                                            <div className="text-base md:text-lg font-black text-amber-400">Easy - Mod</div>
                                        </div>
                                        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">General Awareness</div>
                                            <div className="text-base md:text-lg font-black text-rose-400">Moderate</div>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold text-slate-400 mt-3 text-center">Current Affairs plays a very crucial role in determining the General Awareness score.</p>
                                </div>


                                {/* Havaldar Physical */}
                                <div id="physical" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Users className="w-5 h-5 text-blue-400" /> Havaldar Physical Test
                                    </h3>
                                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                        <p className="text-sm text-slate-400 font-medium mb-4">Conducted <strong className="text-white">only for the Havaldar Post</strong> after the CBT.</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                                <h4 className="font-bold text-blue-400 mb-3 text-lg flex items-center gap-2">👨 Male</h4>
                                                <p className="font-medium text-white flex items-center gap-2 text-lg"><Check className="w-5 h-5 text-emerald-500" /> Walking: 1600m</p>
                                                <p className="text-sm text-slate-400 mt-1 font-bold">Time: 15 Minutes</p>
                                            </div>
                                            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                                                <h4 className="font-bold text-pink-400 mb-3 text-lg flex items-center gap-2">👩 Female</h4>
                                                <p className="font-medium text-white flex items-center gap-2 text-lg"><Check className="w-5 h-5 text-emerald-500" /> Walking: 1 km</p>
                                                <p className="text-sm text-slate-400 mt-1 font-bold">Time: 20 Minutes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary & Posts */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Banknote className="w-5 h-5 text-emerald-400" /> Salary Structure
                                    </h3>

                                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                                        <div className="w-full sm:w-auto p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                                            <div className="text-xs text-emerald-400 font-black uppercase tracking-widest mb-2">Pay Level - 1</div>
                                            <div className="text-xs font-bold text-slate-400 line-through">Basic: ₹18,000</div>
                                            <div className="text-2xl md:text-3xl font-black text-white mt-1">₹22,000 – ₹25,000</div>
                                            <div className="text-xs text-emerald-500/70 font-bold mt-1">(In-hand with allowances)</div>
                                        </div>
                                        <ul className="text-sm font-semibold text-slate-400 space-y-2">
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Dearness Allowance (DA)</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> House Rent Allowance (HRA)</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Transport Allowance (TA)</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Best Strategy */}
                                <div id="strategy" className="scroll-mt-24 p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                                        <Target className="w-6 h-6 text-blue-400" /> Best Strategy for MTS 2026
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">1</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Target Speed in Session-I</h4>
                                                <p className="text-xs text-slate-400 font-medium">Clear Maths + Reasoning in 2 months. You just need to pass without negative marking.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">2</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">General Awareness Focus</h4>
                                                <p className="text-xs text-slate-400 font-medium">Daily Current affairs revision. This directly impacts your final merit.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">3</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Previous Year Rules</h4>
                                                <p className="text-xs text-slate-400 font-medium">Solve the previous 5 years papers to understand TCS variations and patterns.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">4</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Weekly Targets & Mocks</h4>
                                                <p className="text-xs text-slate-400 font-medium">Revise formulas weekly. Attempt 15-20 full mocks on Xamsathi before the exam.</p>
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

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Ready to conquer MTS?</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">You've seen the 95+ topics required. It's time to start attempting accurate tests right now.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Access to all 250+ Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Exact Session I & II Interface
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Detailed Rank & Time Analytics
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/ssc-mts" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Try Free Mock Test
                                </Link>
                                <Link href="/government-exams/ssc/ssc-mts#pricing" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-blue-500/30 active:scale-95">
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

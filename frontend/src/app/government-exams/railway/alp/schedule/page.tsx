"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, AlertCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, HeartPulse, HardHat, Wrench
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function RRBALPSchedulePage() {
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
                    <Link href="/government-exams/railway" className="hover:text-blue-400 transition-colors">Railway Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/railway/alp" className="hover:text-blue-400 transition-colors">RRB ALP</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Preparation Schedule & Guide</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* What We Cover */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Target className="w-4 h-4" /> Comprehensive Coverage
                                </div>

                                <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                                    What Chapters Do We Cover? <br className="hidden md:block" /> How Will We Prepare You for ALP?
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    Before diving into the exam details, here is a complete blueprint of what the <span className="text-white font-bold">Xamsathi Railway Pro Pass</span> delivers. We cover technical and non-technical topics strictly per the latest RRB pattern.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Calculator className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Mathematics</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Number System, BODMAS, Algebra, Geometry, Trigonometry, SI & CI, Profit & Loss, Time & Work, Time & Distance.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <HelpCircle className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">General Intelligence & Reasoning</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Coding-Decoding, Analogies, Number/Alphabet Series, Venn Diagram, Data Sufficiency, Blood Relations, Syllogism.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <Wrench className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Basic Science & Engineering</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Technical focus explicitly on Electrical & Mechanical basics: Ohm's Law, Thermodynamics, Heat Engine, Machines, Circuits.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                                            <HeartPulse className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">General Science & Awareness</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Physics, Chemistry, and Biology (10th standard), plus recent 6-8 months Current Affairs, Sports, Awards, and Static GK.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 78+ Total Tests</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> CBT 1 & CBT 2 Matches</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Detailed Solutions</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Strict Time Management</span>
                                </div>
                            </div>
                        </div>

                        {/* Complete Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">Complete Guide: RRB ALP 2026</h2>
                                <p className="text-slate-400 mt-2 font-medium">Everything you need to know about the Assistant Loco Pilot Examination.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'dates', label: 'Expected Dates', icon: Calendar },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'pattern', label: 'Exam Pattern', icon: FileText },
                                    { id: 'syllabus', label: 'Detailed Syllabus', icon: BookOpen },
                                    { id: 'salary', label: 'Salary & Medical', icon: Banknote },
                                    { id: 'tips', label: 'Strategy', icon: Target },
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
                                        <span className="text-white font-bold">RRB ALP stands for Assistant Loco Pilot.</span><br />
                                        This exam is conducted to recruit technical personnel who work under the Loco Pilot (Train Driver) and assist in operating trains, checking engine systems, and ensuring passenger safety. It is a highly coveted technical railway job.
                                    </p>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Calendar className="w-5 h-5 text-blue-400" /> RRB ALP 2026 – Expected Dates
                                    </h3>
                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                                        <p className="text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">(Based on previous trends – official calendar awaited)</p>

                                        <div className="space-y-3">
                                            {[
                                                { event: "Notification Release", date: "Expected in 2026" },
                                                { event: "Application Start Date", date: "After Notification" },
                                                { event: "CBT 1 Exam", date: "3-4 Months Post Notification", highlight: true },
                                                { event: "CBT 2 Exam", date: "1-2 Months After CBT 1", highlight: true },
                                                { event: "CBAT (Aptitude Test)", date: "After CBT 2" },
                                                { event: "Document Verification & Med", date: "Same Year" },
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
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> <strong className="text-white">ITI in Relevant Trade</strong> (Electrician, Fitter, Mechanic, Electronics, Instrument Mechanic, etc.)</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> <strong className="text-white">OR Diploma in Engineering</strong> in mechanical, electrical, electronics, or automobile.</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> <strong className="text-white">OR BE/B.Tech</strong> in eligible engineering streams.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Age Limit
                                            </div>
                                            <ul className="space-y-3 text-sm text-slate-400 font-medium">
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> <strong className="text-white">Minimum Age:</strong> 18 years</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> <strong className="text-white">Maximum Age:</strong> 30 years</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Age relaxation available for reserved categories (SC/ST/OBC/PWD) depending on established government rules.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-blue-400" /> RRB ALP Exam Stages & Pattern
                                    </h3>
                                    <p className="text-slate-400 mb-6 font-medium">The recruitment generally comprises 5 stages: CBT 1, CBT 2 (Part A & Part B), CBAT, Document Verification, and Medical Exam.</p>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">1. CBT 1 Exam Pattern (Screening)</h4>
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
                                                        <td className="p-4">Mathematics</td>
                                                        <td className="p-4">20</td>
                                                        <td className="p-4">20</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">General Intelligence & Reasoning</td>
                                                        <td className="p-4">25</td>
                                                        <td className="p-4">25</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">General Science</td>
                                                        <td className="p-4">20</td>
                                                        <td className="p-4">20</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">General Awareness</td>
                                                        <td className="p-4">10</td>
                                                        <td className="p-4">10</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="bg-blue-600/10 text-white font-bold border-t border-blue-500/20">
                                                    <tr>
                                                        <td className="p-4">Total</td>
                                                        <td className="p-4 text-blue-400">75</td>
                                                        <td className="p-4 text-blue-400">75</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-4">
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" /> Time Duration: 60 Minutes</div>
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-rose-500" /> Negative Marking: 1/3 mark</div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">2. CBT 2 Exam Pattern (Part A)</h4>
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
                                                        <td className="p-4">Mathematics</td>
                                                        <td className="p-4">25</td>
                                                        <td className="p-4">25</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">General Intelligence & Reasoning</td>
                                                        <td className="p-4">25</td>
                                                        <td className="p-4">25</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">Basic Science & Engineering</td>
                                                        <td className="p-4">40</td>
                                                        <td className="p-4">40</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">General Awareness</td>
                                                        <td className="p-4">10</td>
                                                        <td className="p-4">10</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="bg-blue-600/10 text-white font-bold border-t border-blue-500/20">
                                                    <tr>
                                                        <td className="p-4">Total</td>
                                                        <td className="p-4 text-blue-400">100</td>
                                                        <td className="p-4 text-blue-400">100</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div className="flex flex-wrap gap-4 mt-4">
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" /> Time Duration: 90 Minutes</div>
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-rose-500" /> Negative Marking: 1/3 mark</div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="p-5 border border-slate-700 bg-slate-800/30 rounded-xl">
                                            <h5 className="font-bold text-amber-400 mb-2">3. CBT 2 (Part B) & CBAT</h5>
                                            <ul className="text-sm text-slate-300 space-y-2">
                                                <li><strong className="text-white">Part B (Trade Test):</strong> 75 questions in 60 minutes. It's qualifying in nature and depends upon standard ITI/Diploma trades.</li>
                                                <li><strong className="text-white">CBAT (Aptitude Test):</strong> Designed only for ALP posts. Tests Memory, Depth Perception, Concentration, Reaction Time, and Decision Making. No Negative Marking but requires minimum 42 marks per test battery.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Syllabus */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <BookOpen className="w-5 h-5 text-blue-400" /> Complete RRB ALP Syllabus (Chapter Wise)
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Mathematics */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                ➗ 1. Mathematics (20+ Topics)
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2">
                                                {["Number System", "Ratio & Proportion", "Profit & Loss", "SI & CI", "Time & Work", "Time & Distance", "Average", "LCM & HCF", "Algebra", "Geometry", "Trigonometry", "Mensuration", "Statistics"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Reasoning */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                🧠 2. General Intelligence & Reasoning
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2">
                                                {["Analogies", "Coding-Decoding", "Number Series", "Alphabet Series", "Blood Relations", "Direction Test", "Syllogism", "Venn Diagram", "Puzzle", "Seating Arrangement", "Statement-Conclusion"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Basic Science & Eng */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-amber-400 text-sm">
                                                ⚙ 3. Basic Science & Engineering
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2">
                                                {["Electrical (Ohm's Law, Circuits, Transformers)", "Electronics (Diodes, Transistors)", "Mechanical (Work, Power, Thermodynamics)", "Heat Engine", "Machines"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* General Science */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                🔬 4. General Science & Awareness
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2">
                                                {["Physics (Motion, Heat, Light)", "Chemistry (Reactions, Acids)", "Biology (Body, Diseases)", "Current Affairs (6-8 months)", "Indian Railways"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary & Medical */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Banknote className="w-5 h-5 text-emerald-400" /> Salary Structure & Medical Standards
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                        <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col items-center text-center">
                                            <div className="text-xs text-slate-500 font-black uppercase tracking-widest mb-2">Pay Level 2</div>
                                            <div className="text-3xl font-black text-emerald-400">₹19,900</div>
                                            <div className="text-xs text-slate-400 font-bold mt-1">(Basic Pay)</div>
                                            <div className="mt-4 text-sm font-semibold text-slate-300 break-words">Total In-hand: ₹30,000 – ₹35,000 approx (with DA, HRA, TA).</div>
                                        </div>
                                        <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col items-center text-center">
                                            <div className="text-xs text-amber-500 font-black uppercase tracking-widest mb-2">Medical Standards</div>
                                            <div className="text-3xl font-black text-white">A-1 Category</div>
                                            <ul className="mt-4 text-sm font-semibold text-slate-300 text-left space-y-1">
                                                <li>• Eyesight: 6/6 vision</li>
                                                <li>• No colour blindness</li>
                                                <li>• Strictly adheres to rigorous physical conditions.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Strategy */}
                                <div id="tips" className="scroll-mt-24 p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-4">
                                        <Target className="w-6 h-6 text-blue-400" /> Preparation Strategy
                                    </h3>

                                    <div className="mb-6">
                                        <h4 className="font-bold text-slate-300 text-sm mb-2">Difficulty Insights:</h4>
                                        <div className="flex flex-wrap gap-2 text-xs font-semibold">
                                            <span className="bg-slate-900/50 border border-slate-800 px-2 py-1 rounded">Maths: Moderate</span>
                                            <span className="bg-slate-900/50 border border-slate-800 px-2 py-1 rounded">Reasoning: Moderate</span>
                                            <span className="bg-amber-500/20 border border-amber-500/30 text-amber-300 px-2 py-1 rounded">Technical: Mod to Hard</span>
                                            <span className="bg-rose-500/20 border border-rose-500/30 text-rose-300 px-2 py-1 rounded">Competition: Very High</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">1</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Focus Technical Subjects</h4>
                                                <p className="text-xs text-slate-400 font-medium">Revise your core engineering and science basics daily. It comprises 40 marks in CBT 2.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">2</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">CBT 1 Speed Strategy</h4>
                                                <p className="text-xs text-slate-400 font-medium">Practice completing 75 questions under 60 minutes continuously since it is qualifying.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">3</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Practice 25+ Mocks</h4>
                                                <p className="text-xs text-slate-400 font-medium">Extensive Mock and PYQ solving is an absolute must.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">4</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">CBAT Preparation</h4>
                                                <p className="text-xs text-slate-400 font-medium">Dedicate active time strictly for practicing aptitude, memory, and spatial ability.</p>
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

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Ready to track Indian Railways?</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">You've seen the syllabus and pattern. Now it's time to test your limits.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Full Access to 78+ Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Accurate Exam CBT Interface
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Detailed solutions & rank
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/railway-alp" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Try Free Mock Test
                                </Link>
                                <Link href="/government-exams/railway/alp#pricing" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-blue-500/30 active:scale-95">
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

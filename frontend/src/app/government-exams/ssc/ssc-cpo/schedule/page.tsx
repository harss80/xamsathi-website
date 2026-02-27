"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, AlertCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, Activity
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function SSCCPOSchedulePage() {
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
                    <Link href="/government-exams/ssc/ssc-cpo" className="hover:text-blue-400 transition-colors">SSC CPO</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Preparation & Detailed Guide</span>
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
                                    SSC CPO 2026 Complete <br className="hidden md:block" /> Detailed Preparation Guide
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    Staff Selection Commission – Central Police Organization Exam. Through this exam, recruitment is done for Delhi Police (Sub-Inspector) and Central Armed Police Forces (BSF, CRPF, CISF, ITBP, SSB).
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Calculator className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Quantitative Aptitude</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">25+ Topics covering Arithmetic & Advance Maths.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <BookMarked className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">English Comprehension</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">20+ Topics: Grammar, Vocabulary, and pure Comprehension needed for Paper 1 & 2.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <HelpCircle className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">General Intelligence</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">20+ Topics including clear scoring areas like Analogies, Syllogism, and Figure Counting.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <Globe2 className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">General Awareness</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">30+ Areas covering History, Geography, Polity, Science, and 8-12 Months Current Affairs.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 350+ Total Tests</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Paper 1 & Paper 2</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Real TCS Interface</span>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete Guide Navigation */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">Complete Guide: SSC CPO 2026</h2>
                                <p className="text-slate-400 mt-2 font-medium">Everything you need to know about the Sub-Inspector recruitment exam.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'dates', label: 'Expected Dates', icon: Calendar },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'pattern', label: 'Exam Pattern', icon: FileText },
                                    { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
                                    { id: 'physical', label: 'Physical (PET/PST)', icon: Activity },
                                    { id: 'salary', label: 'Salary', icon: Banknote },
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

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Calendar className="w-5 h-5 text-blue-400" /> SSC CPO 2026 – Expected Dates
                                    </h3>
                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                                        <p className="text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">(Based on previous SSC calendar trends)</p>

                                        <div className="space-y-3">
                                            {[
                                                { event: "Notification Release", date: "July–August 2026" },
                                                { event: "Application Start Date", date: "Same month as notification" },
                                                { event: "Last Date to Apply", date: "1 month after notification" },
                                                { event: "Paper 1 Exam (CBT)", date: "October–November 2026", highlight: true },
                                                { event: "PET/PST Physical Test", date: "Early 2027", highlight: true },
                                                { event: "Paper 2 Exam (English CBT)", date: "Early/Mid 2027", highlight: true },
                                                { event: "Final Result", date: "Mid 2027" },
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
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> <strong className="text-white">For Delhi Police SI (Male):</strong> Valid Driving License is strictly required.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Age Limit
                                            </div>
                                            <ul className="space-y-3 text-sm text-slate-400 font-medium">
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> 20 to 25 years (General Category)</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Age relaxation: OBC - 3 years | SC/ST - 5 years</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Ex-Servicemen: As per government rules.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-blue-400" /> SSC CPO 2026 Selection Process
                                    </h3>
                                    <p className="text-slate-400 mb-6 font-medium">The SSC CPO consists of 4 main stages. Paper 1 & 2 are objective type CBT exams.</p>

                                    <div className="flex flex-wrap gap-3 mb-8">
                                        <span className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg text-sm shadow shadow-blue-500/20">1️⃣ Paper 1 (CBT)</span>
                                        <span className="bg-slate-800 text-white font-bold px-4 py-2 rounded-lg text-sm border border-slate-700">2️⃣ Physical (PET & PST)</span>
                                        <span className="bg-slate-800 text-white font-bold px-4 py-2 rounded-lg text-sm border border-slate-700">3️⃣ Paper 2 (CBT)</span>
                                        <span className="bg-slate-800 text-white font-bold px-4 py-2 rounded-lg text-sm border border-slate-700">4️⃣ Medical Exam</span>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Paper 1 (Objective Type)</h4>
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
                                                        <td className="p-4">50</td>
                                                        <td className="p-4">50</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">General Knowledge & Awareness</td>
                                                        <td className="p-4">50</td>
                                                        <td className="p-4">50</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">Quantitative Aptitude</td>
                                                        <td className="p-4">50</td>
                                                        <td className="p-4">50</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">English Comprehension</td>
                                                        <td className="p-4">50</td>
                                                        <td className="p-4">50</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="bg-blue-600/10 text-white font-bold border-t border-blue-500/20">
                                                    <tr>
                                                        <td className="p-4">Total</td>
                                                        <td className="p-4 text-blue-400">200</td>
                                                        <td className="p-4 text-blue-400">200</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>

                                        <div className="flex flex-wrap gap-4 mt-4">
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" /> Total Time: 2 Hours</div>
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-rose-500" /> Negative Marking: 0.25 per wrong answer</div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Paper 2 (English Only)</h4>
                                        <p className="text-sm text-slate-400 font-medium mb-3">Conducted only for candidates who clear Paper 1 and PET/PST phases.</p>
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-6 items-center">
                                            <div className="grow w-full space-y-2">
                                                <div className="flex justify-between p-3 bg-slate-900 rounded-lg">
                                                    <span className="text-slate-300 font-bold">Total Questions</span>
                                                    <span className="text-white font-black">200 (English Comprehension)</span>
                                                </div>
                                                <div className="flex justify-between p-3 bg-slate-900 rounded-lg">
                                                    <span className="text-slate-300 font-bold">Total Marks</span>
                                                    <span className="text-white font-black">200</span>
                                                </div>
                                                <div className="flex justify-between p-3 bg-slate-900 rounded-lg">
                                                    <span className="text-slate-300 font-bold">Time Duration</span>
                                                    <span className="text-white font-black">2 Hours</span>
                                                </div>
                                                <div className="flex justify-between p-3 bg-slate-900 rounded-lg border border-rose-500/20">
                                                    <span className="text-slate-300 font-bold">Negative Marking</span>
                                                    <span className="text-rose-400 font-black">0.25 marks</span>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/3 shrink-0 p-5 border border-blue-500/20 bg-blue-600/10 rounded-xl">
                                                <h5 className="font-bold text-blue-400 mb-2">Key Focus Areas:</h5>
                                                <ul className="text-xs font-semibold text-slate-300 space-y-1.5 list-disc pl-4">
                                                    <li>Grammar & Error Spotting</li>
                                                    <li>Advance Vocabulary</li>
                                                    <li>Complex Comprehension</li>
                                                    <li>Essay-level English understanding</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Syllabus */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <BookOpen className="w-5 h-5 text-blue-400" /> Complete Chapter-Wise Syllabus
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Quant */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                1. Quantitative Aptitude (25+ Topics)
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2 max-h-64 overflow-y-auto custom-scrollbar">
                                                {["Number System", "Simplification", "Percentage", "Ratio & Proportion", "Average", "Profit & Loss", "Simple Interest", "Compound Interest", "Time & Work", "Pipes & Cistern", "Time, Speed & Distance", "Boats & Streams", "Algebra (Linear Equations)", "Trigonometry", "Heights & Distances", "Geometry", "Circle", "Mensuration (2D & 3D)", "Data Interpretation", "Statistics", "Probability", "LCM & HCF", "Partnership", "Mixture & Alligation", "Train Problems"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Reasoning */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                2. General Intelligence & Reasoning (20+ Topics)
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2 max-h-64 overflow-y-auto custom-scrollbar">
                                                {["Analogies", "Series", "Coding-Decoding", "Blood Relations", "Directions", "Order & Ranking", "Venn Diagram", "Syllogism", "Statement & Conclusion", "Puzzle", "Seating Arrangement", "Mirror Image", "Water Image", "Paper Folding", "Embedded Figures", "Figure Counting", "Classification", "Logical Reasoning", "Missing Number", "Mathematical Operations"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* GK */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                3. General Knowledge & Awareness (30+ Areas)
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2 max-h-64 overflow-y-auto custom-scrollbar">
                                                {["Ancient History", "Medieval History", "Modern History", "Freedom Movement", "Physical Geography", "Indian Geography", "World Geography", "Constitution", "Parliament", "Fundamental Rights", "Judiciary", "Economy Basics", "Budget", "Banking", "Physics", "Chemistry", "Biology", "Current Affairs", "Sports", "Awards", "Books", "Important Days", "Defense Exercises", "Schemes"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* English */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                4. English Comprehension (20+ Topics)
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2 max-h-64 overflow-y-auto custom-scrollbar">
                                                {["Noun", "Pronoun", "Verb", "Tenses", "Articles", "Prepositions", "Conjunction", "Active/Passive Voice", "Direct/Indirect Speech", "Subject-Verb Agreement", "Synonyms", "Antonyms", "Idioms & Phrases", "One Word Substitution", "Cloze Test", "Error Spotting", "Fill in the Blanks", "Sentence Improvement", "Reading Comprehension", "Para Jumbles"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-slate-400 bg-slate-950 w-fit px-3 py-2 rounded-lg border border-slate-800">
                                        <span>✔ Maths – Moderate</span>
                                        <span>✔ Reasoning – Easy to Moderate</span>
                                        <span>✔ GK – Moderate</span>
                                        <span>✔ English – Moderate</span>
                                        <span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Competition Level: High</span>
                                    </div>
                                </div>

                                {/* Physical Test Requirements */}
                                <div id="physical" className="scroll-mt-24 p-8 bg-gradient-to-br from-indigo-900/10 to-slate-900 border border-slate-800 rounded-3xl">
                                    <h3 className="text-xl font-black text-white flex items-center gap-3 mb-6">
                                        <Activity className="w-6 h-6 text-indigo-400" /> Physical Tests (PET & PST)
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-bold text-white mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Physical Endurance Test (PET)</h4>

                                            <div className="space-y-4">
                                                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl relative">
                                                    <span className="absolute top-0 right-0 bg-blue-500 text-[10px] font-black uppercase px-2 py-1 rounded-bl-lg text-white">Male</span>
                                                    <ul className="text-sm font-medium text-slate-300 space-y-2 mt-2">
                                                        <li className="flex justify-between border-b border-slate-800 pb-1"><span>100m Race</span> <span className="text-white font-bold">16 seconds</span></li>
                                                        <li className="flex justify-between border-b border-slate-800 pb-1"><span>1.6 km Run</span> <span className="text-white font-bold">6.5 minutes</span></li>
                                                        <li className="flex justify-between border-b border-slate-800 pb-1"><span>Long Jump</span> <span className="text-white font-bold">3.65m</span></li>
                                                        <li className="flex justify-between"><span>High Jump</span> <span className="text-white font-bold">1.2m</span></li>
                                                    </ul>
                                                </div>

                                                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl relative">
                                                    <span className="absolute top-0 right-0 bg-pink-500 text-[10px] font-black uppercase px-2 py-1 rounded-bl-lg text-white">Female</span>
                                                    <ul className="text-sm font-medium text-slate-300 space-y-2 mt-2">
                                                        <li className="flex justify-between border-b border-slate-800 pb-1"><span>100m Race</span> <span className="text-white font-bold">18 seconds</span></li>
                                                        <li className="flex justify-between border-b border-slate-800 pb-1"><span>800m Run</span> <span className="text-white font-bold">4 minutes</span></li>
                                                        <li className="flex justify-between border-b border-slate-800 pb-1"><span>Long Jump</span> <span className="text-white font-bold">2.7m</span></li>
                                                        <li className="flex justify-between"><span>High Jump</span> <span className="text-white font-bold">0.9m</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-white mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Physical Standard Test (PST)</h4>

                                            <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl mb-4">
                                                <h5 className="font-bold text-slate-200 mb-3 border-b border-slate-800 pb-2">Male Standards</h5>
                                                <div className="flex justify-between text-sm text-slate-400 mb-2">
                                                    <span>Height</span> <span className="text-white font-bold">170 cm</span>
                                                </div>
                                                <div className="flex justify-between text-sm text-slate-400">
                                                    <span>Chest (Unexpanded-Expanded)</span> <span className="text-white font-bold">80–85 cm</span>
                                                </div>
                                                <p className="text-[10px] text-slate-500 mt-2">* Height relaxation applies for hill areas & ST candidates.</p>
                                            </div>

                                            <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl">
                                                <h5 className="font-bold text-slate-200 mb-3 border-b border-slate-800 pb-2">Female Standards</h5>
                                                <div className="flex justify-between text-sm text-slate-400">
                                                    <span>Height</span> <span className="text-white font-bold">157 cm</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs font-semibold text-emerald-400">
                                                <strong className="block mb-1 text-emerald-300">Medical Examination:</strong>
                                                Candidates must have perfect eyesight (6/6 and 6/9), good physical fitness, and no serious bodily deformities.
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
                                            <div className="text-xs text-emerald-400 font-black uppercase tracking-widest mb-2">In-hand Salary (Approx)</div>
                                            <div className="text-2xl md:text-3xl font-black text-white">₹45,000 – ₹55,000</div>
                                            <div className="text-xs text-emerald-500/70 font-bold mt-1">With all allowances</div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between p-3 bg-slate-950 border border-slate-800 rounded-lg min-w-[250px]">
                                                <span className="text-slate-400 font-bold text-sm">Pay Level</span>
                                                <span className="text-white font-black text-sm">Level-6</span>
                                            </div>
                                            <div className="flex justify-between p-3 bg-slate-950 border border-slate-800 rounded-lg min-w-[250px]">
                                                <span className="text-slate-400 font-bold text-sm">Basic Pay</span>
                                                <span className="text-white font-black text-sm">₹35,400</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* How to Start Preparation Strategy */}
                                <div id="tips" className="scroll-mt-24 p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                                        <Target className="w-6 h-6 text-blue-400" /> Exam Preparation Strategy
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 text-center">
                                            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center mx-auto mb-3">1</div>
                                            <h4 className="font-bold text-white mb-2">4-5 Months Target</h4>
                                            <p className="text-xs text-slate-400 font-medium">Complete the full syllabus coverage structured within 4 to 5 rigorous months.</p>
                                        </div>
                                        <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 text-center">
                                            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center mx-auto mb-3">2</div>
                                            <h4 className="font-bold text-white mb-2">Focus on Mocks</h4>
                                            <p className="text-xs text-slate-400 font-medium">Practice 25+ timed mock tests to build stamina for the 200 questions logic.</p>
                                        </div>
                                        <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 text-center">
                                            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center mx-auto mb-3">3</div>
                                            <h4 className="font-bold text-white mb-2">Solve PYQs</h4>
                                            <p className="text-xs text-slate-400 font-medium">Solve the previous 7–10 years of SSC CPO papers to understand TCS patterns inside out.</p>
                                        </div>
                                        <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 text-center hidden sm:block">
                                            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center mx-auto mb-3">4</div>
                                            <h4 className="font-bold text-white mb-2">Revise GK Weekly</h4>
                                            <p className="text-xs text-slate-400 font-medium">Stay updated with Current Affairs and static GK. Revision must be done every weekend.</p>
                                        </div>
                                        <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 text-center hidden sm:block lg:col-span-2">
                                            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center mx-auto mb-3">5</div>
                                            <h4 className="font-bold text-white mb-2">Physical Fitness Daily</h4>
                                            <p className="text-xs text-slate-400 font-medium">Unlike other exams, physical stamina is key. Standardize a low-intensity, daily running and basic workout habit alongside studies so you don't struggle after Paper 1.</p>
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

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Ready to crush SSC CPO?</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">You've seen the syllabus and pattern. Now it's time to start preparing effectively.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Full Access to 350+ Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Chapter-wise syllabus coverage
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Latest PYQs as tests
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/ssc-cpo" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Try Free Mock Test
                                </Link>
                                <Link href="/government-exams/ssc/ssc-cpo#pricing" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-blue-500/30 active:scale-95">
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

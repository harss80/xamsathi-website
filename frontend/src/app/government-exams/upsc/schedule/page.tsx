"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, AlertCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, PenTool
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
                                        <span className="text-white font-bold">UPSC CSE stands for Civil Services Examination.</span><br />
                                        It is a nationwide competitive examination in India conducted by the Union Public Service Commission for recruitment to various Civil Services of the Government of India, including IAS, IFS, and IPS.
                                    </p>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Calendar className="w-5 h-5 text-blue-400" /> UPSC CSE 2026 – Expected Dates
                                    </h3>
                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                                        <p className="text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">(Based on previous UPSC Annual Calendars – final dates to be confirmed in official notification)</p>

                                        <div className="space-y-3">
                                            {[
                                                { event: "Official Notification Release", date: "February 2026" },
                                                { event: "Last Date to Apply", date: "March 2026" },
                                                { event: "Preliminary Exam (Objective)", date: "Mid-to-Late May 2026", highlight: true },
                                                { event: "Mains Exam (Descriptive)", date: "September 2026", highlight: true },
                                                { event: "Personality Test (Interview)", date: "February – April 2027" },
                                                { event: "Final Result", date: "May 2027" },
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
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Candidates who have appeared or intend to appear for the final examination and await results are also eligible for Prelims.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Age Limit & Attempts
                                            </div>
                                            <ul className="space-y-3 text-sm text-slate-400 font-medium">
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> <strong className="text-white">General/EWS:</strong> 21 to 32 years (6 Attempts)</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> <strong className="text-white">OBC:</strong> 21 to 35 years (9 Attempts)</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> <strong className="text-white">SC/ST:</strong> 21 to 37 years (Unlimited Attempts)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-blue-400" /> UPSC CSE 2026 Exam Pattern
                                    </h3>
                                    <p className="text-slate-400 mb-6 font-medium">The exam is conducted in 3 rigid stages: Preliminary Exam, Mains Exam, and Personality Test (Interview).</p>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Stage 1: Preliminary Exam (Objective Mode)</h4>
                                        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 mb-4">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-slate-900 border-b border-slate-800">
                                                        <th className="p-4 font-bold text-slate-300">Paper</th>
                                                        <th className="p-4 font-bold text-slate-300">Questions</th>
                                                        <th className="p-4 font-bold text-slate-300">Marks</th>
                                                        <th className="p-4 font-bold text-slate-300">Duration</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-slate-400 font-medium">
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4">General Studies (GS) Paper 1</td>
                                                        <td className="p-4">100</td>
                                                        <td className="p-4">200</td>
                                                        <td className="p-4">2 Hours</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800 bg-slate-900/50">
                                                        <td className="p-4">CSAT (GS Paper 2) <span className="text-xs text-amber-500 font-bold block">(Qualifying - 33% required)</span></td>
                                                        <td className="p-4">80</td>
                                                        <td className="p-4">200</td>
                                                        <td className="p-4">2 Hours</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 inline-flex items-center gap-2"><AlertCircle className="w-4 h-4 text-rose-500" /> Negative Marking: 1/3rd penalty for each wrong answer</div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Stage 2: Mains Exam (Descriptive)</h4>
                                        <p className="text-sm text-slate-400 mb-4 font-bold">Mains marks (out of 1750) decide your fate. It consists of 9 papers.</p>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="p-5 border border-slate-700 bg-slate-800/30 rounded-xl">
                                                <h5 className="font-bold text-emerald-400 mb-2">Qualifying Papers (Not added to merit)</h5>
                                                <ul className="text-sm text-slate-300 space-y-2 font-medium">
                                                    <li><strong className="text-white">Paper A:</strong> Compulsory Indian Language (300 Marks)</li>
                                                    <li><strong className="text-white">Paper B:</strong> English (300 Marks)</li>
                                                    <li className="text-xs text-amber-500 mt-2">Requires 25% marks to qualify.</li>
                                                </ul>
                                            </div>
                                            <div className="p-5 border border-slate-800 bg-slate-950 rounded-xl">
                                                <h5 className="font-bold text-blue-400 mb-2">Merit Papers (250 Marks Each)</h5>
                                                <ul className="text-xs text-slate-400 space-y-1.5 font-medium">
                                                    <li>Paper I: Essay</li>
                                                    <li>Paper II: GS 1 (History, Geo, Society)</li>
                                                    <li>Paper III: GS 2 (Polity, Governance, IR)</li>
                                                    <li>Paper IV: GS 3 (Economy, Environment, Sci-tech)</li>
                                                    <li>Paper V: GS 4 (Ethics, Integrity & Aptitude)</li>
                                                    <li>Paper VI & VII: Optional Subject 1 & 2</li>
                                                </ul>
                                                <div className="mt-3 pt-3 border-t border-slate-800 font-black text-white">Total Mains Marks: 1750</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Stage 3: Personality Test (Interview)</h4>
                                        <div className="p-5 bg-indigo-900/20 border border-indigo-500/20 rounded-xl">
                                            <p className="text-sm text-indigo-200 font-bold mb-2">Maximum Marks: 275</p>
                                            <p className="text-sm text-slate-300 font-medium">The board assesses the personal suitability of the candidate for a career in public service. The interview covers general interest matters, mental caliber, social cohesion, and leadership traits.</p>
                                            <div className="mt-4 pt-4 border-t border-indigo-500/20 text-xl font-black text-white">
                                                Grand Total: 2025 Marks <span className="text-xs text-slate-400 font-medium block">(Used for final All-India Merit Ranking)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Syllabus */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <BookOpen className="w-5 h-5 text-blue-400" /> Snapshot of UPSC Syllabus
                                    </h3>

                                    <div className="grid grid-cols-1 gap-6">
                                        {/* Prelims GS */}
                                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                Prelims General Studies Paper 1
                                            </div>
                                            <div className="p-5 flex flex-wrap gap-2">
                                                {["Current Events (National & International)", "History of India & Indian National Movement", "Indian & World Geography", "Indian Polity & Governance", "Economic & Social Development", "Environmental Ecology & Biodiversity", "General Science"].map((topic, i) => (
                                                    <span key={i} className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded border border-slate-700">{topic}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* GS 1 */}
                                            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                    Mains GS Paper 1
                                                </div>
                                                <div className="p-5 flex flex-wrap gap-2 flex-col text-sm text-slate-400 font-medium">
                                                    <span>• Indian Heritage and Culture (Art, Architecture, Literature)</span>
                                                    <span>• Modern Indian History (mid-18th century until present)</span>
                                                    <span>• Post-independence consolidation & reorganization</span>
                                                    <span>• History of the World (Industrial rev., World Wars, Colonization)</span>
                                                    <span>• Salient features of Indian Society & Diversity</span>
                                                    <span>• Physical Geography of the World & India</span>
                                                </div>
                                            </div>

                                            {/* GS 2 */}
                                            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                    Mains GS Paper 2
                                                </div>
                                                <div className="p-5 flex flex-wrap gap-2 flex-col text-sm text-slate-400 font-medium">
                                                    <span>• Indian Constitution (features, amendments, basic structure)</span>
                                                    <span>• Functions and responsibilities of the Union and the States</span>
                                                    <span>• Parliament and State Legislatures</span>
                                                    <span>• Governance, Transparency & Accountability, e-governance</span>
                                                    <span>• Social Justice (Health, Education, Vulnerable sections)</span>
                                                    <span>• International Relations (India and its neighborhood)</span>
                                                </div>
                                            </div>

                                            {/* GS 3 */}
                                            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                    Mains GS Paper 3
                                                </div>
                                                <div className="p-5 flex flex-wrap gap-2 flex-col text-sm text-slate-400 font-medium">
                                                    <span>• Indian Economy (Planning, mobilization, growth, employment)</span>
                                                    <span>• Agriculture (Cropping patterns, MSP, PDS, Food security)</span>
                                                    <span>• Science and Technology (Developments & everyday applications)</span>
                                                    <span>• Environment, Biodiversity, Conservation, Pollution</span>
                                                    <span>• Disaster and Disaster Management</span>
                                                    <span>• Internal Security, Extremism, Border management, Cyber security</span>
                                                </div>
                                            </div>

                                            {/* GS 4 */}
                                            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                                                <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 font-bold text-white text-sm">
                                                    Mains GS Paper 4 (Ethics)
                                                </div>
                                                <div className="p-5 flex flex-wrap gap-2 flex-col text-sm text-slate-400 font-medium">
                                                    <span>• Ethics and Human Interface, human values</span>
                                                    <span>• Attitude (content, structure, function, influence)</span>
                                                    <span>• Emotional Intelligence</span>
                                                    <span>• Contributions of moral thinkers and philosophers</span>
                                                    <span>• Public/Civil service values and Ethics in Public admin</span>
                                                    <span>• Probity in Governance, Right to Information, Codes of Ethics</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary & Posts */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Banknote className="w-5 h-5 text-emerald-400" /> Pay Scale & Top Services
                                    </h3>

                                    <p className="text-slate-300 font-medium mb-4">
                                        Officers are recruited at <strong className="text-white">Level 10 of the Pay Matrix</strong>. The highest achievable rank is Cabinet Secretary.
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                                        <div className="w-full sm:w-auto p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                                            <div className="text-xs text-emerald-400 font-black uppercase tracking-widest mb-2">Starting Basic Pay</div>
                                            <div className="text-2xl md:text-3xl font-black text-white">₹56,100</div>
                                            <div className="text-xs text-emerald-500/70 font-bold mt-1">Gross Salary ~₹1 Lakh/month</div>
                                        </div>
                                        <ul className="text-sm font-semibold text-slate-400 space-y-2">
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> High Dearness Allowance (DA)</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Residence & Official Vehicle (IAS/IPS)</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Travel & Security Allowances</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Unmatched Social Prestige & Power</li>
                                        </ul>
                                    </div>

                                    <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider text-slate-500">Top 5 Prestigious Services</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> IAS - Indian Administrative Service</span>
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> IPS - Indian Police Service</span>
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> IFS - Indian Foreign Service</span>
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> IRS - Indian Revenue Service (IT & Customs)</span>
                                    </div>
                                </div>

                                {/* How to Start Preparation */}
                                <div id="tips" className="scroll-mt-24 p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                                        <Target className="w-6 h-6 text-blue-400" /> How to Kickstart the Journey?
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">1</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Foundational NCERTs</h4>
                                                <p className="text-xs text-slate-400 font-medium">Read Geography, History, Polity, and Economics NCERTs from Class 6 to 12. Build the base.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">2</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Standard Reference Books</h4>
                                                <p className="text-xs text-slate-400 font-medium">M. Laxmikanth for Polity, Spectrum for Modern History, GC Leong for Geography.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">3</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Daily The Hindu Editiorials</h4>
                                                <p className="text-xs text-slate-400 font-medium">Develop critical thinking and answer writing vocabulary by analyzing editorial opinions daily.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-black flex items-center justify-center shrink-0">4</div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Rigorous Mock Practicing</h4>
                                                <p className="text-xs text-slate-400 font-medium">Join Xamsathi’s All India Mock test series to see exactly where you stand against the top 1%.</p>
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
                                <Link href="/government-exams/upsc/complete" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-blue-500/30 active:scale-95">
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

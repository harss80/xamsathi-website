"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle, AlertCircle,
    Briefcase, ChevronDown, ChevronRight, Calculator,
    Globe2, BookMarked, MonitorPlay, Check, MapPin
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function UPPSCSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-red-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-red-400 transition-colors">Government Exams</Link>
                    <span>›</span>
                    <Link href="/government-exams/state-psc" className="hover:text-red-400 transition-colors">State PSC</Link>
                    <span>›</span>
                    <Link href="/government-exams/state-psc/uppsc" className="hover:text-red-400 transition-colors">UPPSC</Link>
                    <span>›</span>
                    <span className="text-white font-bold">Preparation & Guide</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* LEFT COLUMN - MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* 1️⃣ What We Cover (Our Offering Highlight) */}
                        <div className="bg-slate-900 rounded-3xl p-8 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                    <Target className="w-4 h-4" /> State Level Focus
                                </div>

                                <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                                    What Chapters Do We Cover? <br className="hidden md:block" /> How Will We Prepare You for PCS?
                                </h1>

                                <p className="text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl text-lg">
                                    Before diving into the detailed UPPSC guidelines, here is a complete blueprint of what the <span className="text-white font-bold">Xamsathi UPPSC Pro Pass</span> delivers. We focus deeply on UP GK, History, and full length standard mocks.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                                            <FileText className="w-5 h-5 text-red-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">GS Paper 1 Full Mocks</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">150 Questions standard mocks matching UPPSC difficulty, including current affairs and state schemes.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <Globe2 className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">UP Specific GK</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Specialized tests over Uttar Pradesh History, Geography, Demographics, and the State Budget.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <Calculator className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">CSAT (Qualifying Paper)</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Interpersonal skills, logical reasoning, and elementary math to ensure you cross the 33% barrier.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                                            <BookMarked className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Previous Year Papers</h4>
                                            <p className="text-xs text-slate-400 leading-relaxed font-semibold">Take official UPPSC PCS papers of the last 10 years as timed mock exams.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100+ Total Tests</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Detailed Solutions</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> State Level Ranks</span>
                                    <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Bilingual Support</span>
                                </div>
                            </div>
                        </div>

                        {/* 2️⃣ Complete UPPSC PCS Guide */}
                        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50">
                                <h2 className="text-2xl font-black text-white">Complete Guide: UPPSC PCS 2026</h2>
                                <p className="text-slate-400 mt-2 font-medium">Everything you need to know about the Provincial Civil Services Exam.</p>
                            </div>

                            {/* In-page navigation tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 hide-scrollbar no-scrollbar scroll-smooth">
                                {[
                                    { id: 'dates', label: 'Important Dates', icon: Calendar },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'pattern', label: 'Exam Pattern', icon: FileText },
                                    { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
                                    { id: 'salary', label: 'Salary & Posts', icon: Banknote },
                                    { id: 'prep', label: 'Preparation', icon: Target },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors border-b-2 ${activeTab === tab.id
                                            ? "border-red-500 text-red-400 bg-slate-900"
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
                                        <span className="text-white font-bold">Uttar Pradesh Public Service Commission (UPPSC)</span> conducts the Provincial Civil Services (PCS) exam for recruitment into various administrative posts in the Uttar Pradesh Government. <br /><br />
                                        This is the state-level equivalent of the UPSC Civil Services.
                                    </p>
                                </div>

                                {/* Important Dates */}
                                <div id="dates" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Calendar className="w-5 h-5 text-red-400" /> UPPSC 2026 – Expected Dates
                                    </h3>
                                    <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
                                        <p className="text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">(Based on previous trends – refer to official website uppsc.up.nic.in)</p>

                                        <div className="space-y-3">
                                            {[
                                                { event: "Notification Release", date: "January–March 2026", highlight: true },
                                                { event: "Application Start", date: "With Notification" },
                                                { event: "Prelims Exam", date: "Mid 2026", highlight: true },
                                                { event: "Mains Exam", date: "Late 2026", highlight: true },
                                                { event: "Interview", date: "2027" },
                                                { event: "Final Result", date: "2027" },
                                            ].map((item, idx) => (
                                                <div key={idx} className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border ${item.highlight ? 'bg-red-600/10 border-red-500/30' : 'bg-slate-900 border-slate-800'}`}>
                                                    <div className={`font-bold ${item.highlight ? 'text-red-200' : 'text-slate-300'}`}>{item.event}</div>
                                                    <div className={`text-sm font-black mt-1 sm:mt-0 ${item.highlight ? 'text-red-400' : 'text-white'}`}>{item.date}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Eligibility Criteria */}
                                <div id="eligibility" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Users className="w-5 h-5 text-red-400" /> Eligibility Criteria
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Educational Qualification
                                            </div>
                                            <ul className="space-y-3 text-sm text-slate-400 font-medium">
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Bachelor’s Degree in any stream from a recognized university.</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Some specific specialized posts might require specific qualifications.</li>
                                            </ul>
                                        </div>

                                        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                                            <div className="flex items-center gap-2 text-white font-bold mb-4">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Age Limit
                                            </div>
                                            <ul className="space-y-3 text-sm text-slate-400 font-medium">
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Minimum: 21 years</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Maximum: 40 years</li>
                                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div> Age relaxation available for SC/ST/OBC of UP.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Selection Process</h4>
                                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                            <div className="flex-1 bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
                                                <div className="text-red-400 font-black text-xl mb-1">1️⃣ Prelims</div>
                                                <div className="text-slate-400 text-sm font-medium">Objective (Screening)</div>
                                            </div>
                                            <div className="flex-1 bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
                                                <div className="text-red-400 font-black text-xl mb-1">2️⃣ Mains</div>
                                                <div className="text-slate-400 text-sm font-medium">Descriptive Written</div>
                                            </div>
                                            <div className="flex-1 bg-slate-900 border border-slate-800 p-4 rounded-xl text-center">
                                                <div className="text-red-400 font-black text-xl mb-1">3️⃣ Interview</div>
                                                <div className="text-slate-400 text-sm font-medium">Personality Test</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Exam Pattern */}
                                <div id="pattern" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <FileText className="w-5 h-5 text-red-400" /> UPPSC Prelims & Mains Exam Pattern
                                    </h3>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Prelims Exam Pattern</h4>
                                        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-slate-900 border-b border-slate-800">
                                                        <th className="p-4 font-bold text-slate-300">Paper Name</th>
                                                        <th className="p-4 font-bold text-slate-300">Questions</th>
                                                        <th className="p-4 font-bold text-slate-300">Marks</th>
                                                        <th className="p-4 font-bold text-slate-300">Remarks</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-slate-400 font-medium">
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4 text-white">Paper 1 – General Studies (GS)</td>
                                                        <td className="p-4">150</td>
                                                        <td className="p-4">200</td>
                                                        <td className="p-4">Determines Cutoff</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-800">
                                                        <td className="p-4 text-white">Paper 2 – CSAT</td>
                                                        <td className="p-4">100</td>
                                                        <td className="p-4">200</td>
                                                        <td className="p-4">Qualifying (Minimum 33%)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="flex flex-wrap gap-4 mt-4">
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" /> Time Duration: 2 Hours Each</div>
                                            <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-rose-500" /> Negative Marking: 1/3</div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Mains Exam Pattern (8 Papers - 1500 Marks)</h4>
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="p-5 border border-slate-800 bg-slate-950 rounded-xl">
                                                    <h5 className="font-bold text-red-400 mb-2">1️⃣ General Hindi</h5>
                                                    <p className="text-lg text-white font-black">150 Marks</p>
                                                </div>
                                                <div className="p-5 border border-slate-800 bg-slate-950 rounded-xl">
                                                    <h5 className="font-bold text-red-400 mb-2">2️⃣ Essay</h5>
                                                    <p className="text-lg text-white font-black">150 Marks</p>
                                                </div>
                                                <div className="p-5 border border-slate-800 bg-slate-950 rounded-xl">
                                                    <h5 className="font-bold text-amber-400 mb-2">3️⃣ GS Paper 1</h5>
                                                    <p className="text-lg text-white font-black">200 Marks</p>
                                                </div>
                                                <div className="p-5 border border-slate-800 bg-slate-950 rounded-xl">
                                                    <h5 className="font-bold text-amber-400 mb-2">4️⃣ GS Paper 2</h5>
                                                    <p className="text-lg text-white font-black">200 Marks</p>
                                                </div>
                                                <div className="p-5 border border-slate-800 bg-slate-950 rounded-xl">
                                                    <h5 className="font-bold text-amber-400 mb-2">5️⃣ GS Paper 3</h5>
                                                    <p className="text-lg text-white font-black">200 Marks</p>
                                                </div>
                                                <div className="p-5 border border-slate-800 bg-slate-950 rounded-xl">
                                                    <h5 className="font-bold text-amber-400 mb-2">6️⃣ GS Paper 4</h5>
                                                    <p className="text-lg text-white font-black">200 Marks</p>
                                                </div>
                                                <div className="p-5 border border-slate-800 bg-slate-950 rounded-xl">
                                                    <h5 className="font-bold text-blue-400 mb-2">7️⃣ Optional Subject Paper 1</h5>
                                                    <p className="text-lg text-white font-black">200 Marks</p>
                                                </div>
                                                <div className="p-5 border border-slate-800 bg-slate-950 rounded-xl">
                                                    <h5 className="font-bold text-blue-400 mb-2">8️⃣ Optional Subject Paper 2</h5>
                                                    <p className="text-lg text-white font-black">200 Marks</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Syllabus */}
                                <div id="syllabus" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <BookOpen className="w-5 h-5 text-red-400" /> Detailed UPPSC Syllabus
                                    </h3>

                                    <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Prelims Syllabus</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                            <div className="font-bold text-white mb-2">1️⃣ History</div>
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed">Ancient India, Medieval India, Modern India, Indian National Movement, History of Uttar Pradesh.</p>
                                        </div>
                                        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                            <div className="font-bold text-white mb-2">2️⃣ Geography</div>
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed">Physical Geography, Indian Geography, Uttar Pradesh Geography.</p>
                                        </div>
                                        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                            <div className="font-bold text-white mb-2">3️⃣ Polity</div>
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed">Indian Constitution, Panchayati Raj, Governance, Administrative System.</p>
                                        </div>
                                        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                            <div className="font-bold text-white mb-2">4️⃣ Economy & Science</div>
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed">Indian Economy, Budget, Agriculture, UP Economy, Physics, Chemistry, Biology.</p>
                                        </div>
                                        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl sm:col-span-2">
                                            <div className="font-bold text-white mb-2">5️⃣ Current Affairs</div>
                                            <p className="text-xs text-slate-400 font-medium leading-relaxed">National, International, and <span className="text-white font-bold">Uttar Pradesh specific</span> current events.</p>
                                        </div>
                                    </div>

                                    <h4 className="font-bold text-white text-lg mb-4 bg-slate-800 inline-block px-4 py-1.5 rounded-lg border border-slate-700">Mains Detailed Syllabus</h4>
                                    <div className="space-y-4">
                                        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                            <div className="font-bold text-white mb-2">📝 General Hindi & Essay Paper</div>
                                            <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                                <strong>Hindi:</strong> Essay writing, Precis writing, Letter writing, Grammar, Translation.<br />
                                                <strong>Essay:</strong> Candidates write essays from 3 sections (Literature & Culture, Social Issues, Political & Economic Issues).
                                            </p>
                                        </div>
                                        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                            <div className="font-bold text-amber-400 mb-2">🌍 GS Paper 1 & 2</div>
                                            <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                                <strong>GS 1:</strong> Indian Heritage & Culture, History, Geography, Society, Women issues, Population, Urbanization.<br />
                                                <strong>GS 2:</strong> Constitution, Governance, Social Justice, International Relations.
                                            </p>
                                        </div>
                                        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                            <div className="font-bold text-amber-400 mb-2">💰 GS Paper 3 & 4</div>
                                            <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                                <strong>GS 3:</strong> Indian Economy, Agriculture, Science & Technology, Environment, Disaster Management, Internal Security.<br />
                                                <strong>GS 4:</strong> Ethics, Integrity, Aptitude, Case Studies.
                                            </p>
                                        </div>
                                        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                                            <div className="font-bold text-blue-400 mb-3">📘 Popular Optional Subjects</div>
                                            <div className="flex flex-wrap gap-2 text-xs">
                                                <span className="bg-slate-800 px-3 py-1 rounded text-slate-300">Public Administration</span>
                                                <span className="bg-slate-800 px-3 py-1 rounded text-slate-300">Geography</span>
                                                <span className="bg-slate-800 px-3 py-1 rounded text-slate-300">History</span>
                                                <span className="bg-slate-800 px-3 py-1 rounded text-slate-300">Sociology</span>
                                                <span className="bg-slate-800 px-3 py-1 rounded text-slate-300">Political Science</span>
                                                <span className="bg-slate-800 px-3 py-1 rounded text-slate-300">Agriculture</span>
                                                <span className="bg-slate-800 px-3 py-1 rounded text-slate-300">Law</span>
                                                <span className="bg-slate-800 px-3 py-1 rounded text-slate-300">Hindi Literature</span>
                                            </div>
                                        </div>

                                        <div className="bg-slate-900 border border-indigo-500/30 p-5 rounded-2xl mt-4">
                                            <div className="font-bold text-indigo-400 mb-2 flex items-center gap-2"><Users className="w-5 h-5" /> Interview Phase</div>
                                            <p className="text-sm text-slate-300 font-medium leading-relaxed">
                                                <strong>100 Marks.</strong> A Personality Test covering UP specific issues, your graduation subject, current affairs, and situational questions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary & Posts */}
                                <div id="salary" className="scroll-mt-24">
                                    <h3 className="text-xl font-black text-white flex items-center gap-2 mb-6 uppercase tracking-wide">
                                        <Banknote className="w-5 h-5 text-emerald-400" /> Salary Structure & Posts
                                    </h3>

                                    <p className="text-slate-300 font-medium mb-4">
                                        UPPSC PCS recruits officers for top-tier posts in Uttar Pradesh.
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                                        <div className="w-full sm:w-auto p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center">
                                            <div className="text-xs text-emerald-400 font-black uppercase tracking-widest mb-2">SDM / PCS Officer Salary</div>
                                            <div className="text-2xl md:text-3xl font-black text-white">₹70,000 – ₹90,000</div>
                                            <div className="text-xs text-emerald-500/70 font-bold mt-1">(Basic Pay: ₹56,100 Level 10)</div>
                                        </div>
                                        <ul className="text-sm font-semibold text-slate-400 space-y-2">
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Includes Dearness Allowance (DA)</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> House Rent Allowance (HRA)</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Travel Allowance</li>
                                            <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Excellent Government Facilities & Perks</li>
                                        </ul>
                                    </div>

                                    <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider text-slate-500">Top Job Profiles</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Sub Divisional Magistrate (SDM)</span>
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Deputy Superintendent of Police (DSP)</span>
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Block Development Officer (BDO)</span>
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Tehsildar</span>
                                        <span className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-sm text-slate-300 font-medium flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Treasury Officer</span>
                                    </div>
                                </div>

                                {/* Difficulty & Prep */}
                                <div id="prep" className="scroll-mt-24 p-8 bg-gradient-to-br from-red-900/20 to-orange-900/10 border border-red-500/20 rounded-3xl">
                                    <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-6">
                                        <Target className="w-6 h-6 text-red-400" /> Preparation Strategy
                                    </h3>

                                    <div className="mb-6 flex flex-wrap gap-4">
                                        <div className="bg-slate-950/50 border border-slate-800 px-4 py-2 rounded">
                                            <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Prelims Difficulty</span>
                                            <span className="text-amber-400 font-bold">Moderate to Tough</span>
                                        </div>
                                        <div className="bg-slate-950/50 border border-slate-800 px-4 py-2 rounded">
                                            <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Mains Difficulty</span>
                                            <span className="text-red-400 font-bold">Tough</span>
                                        </div>
                                        <div className="bg-slate-950/50 border border-slate-800 px-4 py-2 rounded">
                                            <span className="text-slate-500 text-xs font-bold uppercase block mb-1">Competition</span>
                                            <span className="text-red-500 font-bold">Very High (Lakhs of applicants)</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 font-black flex items-center justify-center shrink-0"><Check className="w-4 h-4" /></div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Complete NCERTs</h4>
                                                <p className="text-xs text-slate-400 font-medium">Build a solid history and geography foundation using NCERT books first.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 font-black flex items-center justify-center shrink-0"><Check className="w-4 h-4" /></div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">UP Current Affairs</h4>
                                                <p className="text-xs text-slate-400 font-medium">Focus deeply on UP-specific current affairs and state schemes.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 font-black flex items-center justify-center shrink-0"><Check className="w-4 h-4" /></div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Daily Answer Writing</h4>
                                                <p className="text-xs text-slate-400 font-medium">Practice descriptive answer writing daily for Mains GS papers.</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 font-black flex items-center justify-center shrink-0"><Check className="w-4 h-4" /></div>
                                            <div>
                                                <h4 className="font-bold text-white mb-1">Solve PYQs & Mocks</h4>
                                                <p className="text-xs text-slate-400 font-medium">Revise regularly, solve previous year papers, and join a targeted UPPSC test series.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT COLUMN - STICKY ACTION CARD */}
                    <div className="lg:col-span-4 hidden md:block">
                        <div className="sticky top-24 bg-slate-900 border-2 border-red-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(239,68,68,0.15)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Ready to conquer UPPSC?</h3>
                            <p className="text-sm text-slate-400 font-medium mb-6 relative z-10">You've seen the syllabus and pattern. Secure your spot in the merit list with our UP mock tests.</p>

                            <div className="space-y-4 mb-8 p-5 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Full Access to 100+ Tests
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> State-level Current Affairs
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> UPPSC Actual PYQs
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/dashboard/test-series/uppsc" className="w-full py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 text-white font-black rounded-xl text-center transition-all text-sm active:scale-95 flex justify-center items-center gap-2">
                                    <MonitorPlay className="w-4 h-4" /> Try Free Mock Test
                                </Link>
                                <Link href="/government-exams/state-psc/uppsc#pricing" className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-red-500/30 active:scale-95">
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

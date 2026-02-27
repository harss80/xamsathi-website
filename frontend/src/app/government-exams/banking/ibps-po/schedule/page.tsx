"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    FileText, Calendar, BookOpen, Clock, Users,
    CheckCircle2, Target, Banknote, HelpCircle,
    ChevronDown, ChevronRight, Calculator,
    ShieldCheck, Zap, MonitorPlay, Landmark, AlertCircle, BookMarked, Award, Layout, Briefcase, TrendingUp, Brain
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function IBPSPOSchedulePage() {
    const [activeTab, setActiveTab] = useState("dates");

    const syllabusData = [
        {
            subject: "Reasoning Ability",
            icon: Brain,
            chapters: ["Puzzles (3-Variable)", "Seating Arrangement", "Syllogism", "Coding-Decoding", "Advanced Input-Output", "Blood Relations", "Data Sufficiency", "Logical Reasoning"]
        },
        {
            subject: "Quantitative Aptitude",
            icon: Calculator,
            chapters: ["Data Interpretation (Elite)", "Missing Number Series", "Quadratic Equations", "Arithmetic Word Problems", "Probability", "Permutations", "Mensuration"]
        },
        {
            subject: "English Language",
            icon: BookOpen,
            chapters: ["Reading Comprehension", "Cloze Test", "Error Detection", "Sentence Improvement", "Para Jumbles", "Column Based Matching"]
        },
        {
            subject: "Banking Awareness",
            icon: Landmark,
            chapters: ["RBI Notifications", "Monetary Policy", "Union Budget 2026", "Current Financial Affairs", "Static Banking GK", "Financial Institutions"]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-8 font-black uppercase tracking-widest italic">
                    <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking" className="hover:text-indigo-400 transition-colors">Banking</Link>
                    <span>&rsaquo;</span>
                    <Link href="/government-exams/banking/ibps-po" className="hover:text-indigo-400 transition-colors">IBPS PO</Link>
                    <span>&rsaquo;</span>
                    <span className="text-white font-black truncate">Roadmap 2026</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-8 space-y-12 md:space-y-20">

                        {/* Banner */}
                        <div className="bg-slate-900 rounded-[3rem] p-7 md:p-14 border border-indigo-500/20 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.3em] shadow-lg">
                                    <Target className="w-4 h-4" /> IBPS PO 2026 Master Guide
                                </div>

                                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[0.85] uppercase italic underline decoration-indigo-500/30 decoration-8 underline-offset-[12px]">
                                    The Ultimate <br /> Officer Roadmap
                                </h1>

                                <p className="text-lg md:text-2xl text-slate-400 mb-12 font-bold leading-relaxed max-w-2xl italic">
                                    From notification to final selection – every milestone you need to master for the 2026 probationary officer examination.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-indigo-500/50 transition-all shadow-inner">
                                        <Briefcase className="w-6 h-6 text-indigo-400" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">Officer Rank</span>
                                    </div>
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-emerald-500/50 transition-all shadow-inner">
                                        <TrendingUp className="w-6 h-6 text-emerald-400" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">Promotion Path</span>
                                    </div>
                                    <div className="p-6 bg-slate-950/80 rounded-[2rem] border border-slate-800 flex items-center gap-4 hover:border-blue-500/50 transition-all shadow-inner">
                                        <Landmark className="w-6 h-6 text-blue-400" />
                                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest leading-none">11+ PS Banks</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Guide components */}
                        <div className="bg-slate-900 rounded-[3rem] border border-slate-800 shadow-2xl overflow-hidden">

                            {/* Tabs */}
                            <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/50 no-scrollbar scroll-smooth p-1 sticky top-0 z-20 backdrop-blur-xl">
                                {[
                                    { id: 'dates', label: 'Timeline', icon: Calendar },
                                    { id: 'pattern', label: 'Pattern', icon: Layout },
                                    { id: 'syllabus', label: 'Syllabus', icon: BookMarked },
                                    { id: 'eligibility', label: 'Eligibility', icon: Users },
                                    { id: 'salary', label: 'Pay', icon: Banknote },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                        className={`flex items-center gap-3 px-8 py-6 font-black text-[10px] md:text-[11px] uppercase tracking-[0.25em] transition-all border-b-[4px] shrink-0 ${activeTab === tab.id
                                            ? "border-indigo-500 text-indigo-400 bg-slate-900 shadow-inner"
                                            : "border-transparent text-slate-500 hover:text-slate-200"
                                            }`}
                                    >
                                        <tab.icon className="w-4 h-4" /> {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="p-8 md:p-14 space-y-24 md:space-y-32">

                                {/* Dates */}
                                <div id="dates" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Calendar className="w-9 h-9 text-indigo-400" /> Cycle Estimates 2026
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 hover:border-indigo-500/30 transition-all font-black group shadow-inner">
                                            <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Notification</span>
                                            <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">August 2026</div>
                                        </div>
                                        <div className="p-10 bg-indigo-600 rounded-[2.5rem] border border-indigo-400 shadow-2xl relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:scale-125 transition-transform"></div>
                                            <div className="relative z-10 font-black">
                                                <span className="text-indigo-100 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Prelims Exam</span>
                                                <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">October 2026</div>
                                            </div>
                                        </div>
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 font-black group shadow-inner">
                                            <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Phase 2: Mains</span>
                                            <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">November 2026</div>
                                        </div>
                                        <div className="p-10 bg-slate-950 rounded-[2.5rem] border border-slate-800 font-black group shadow-inner">
                                            <span className="text-slate-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block italic">Final Allotment</span>
                                            <div className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">April 2027</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pattern */}
                                <div id="pattern" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Layout className="w-9 h-9 text-indigo-400" /> Structural Blueprint
                                    </h3>
                                    <div className="space-y-16">
                                        <div className="overflow-x-auto rounded-[2.5rem] border border-slate-800 bg-slate-950 p-2 shadow-2xl">
                                            <table className="w-full text-left border-collapse min-w-[500px]">
                                                <thead>
                                                    <tr className="bg-slate-900 border-b border-slate-800">
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Prelims Section</th>
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Qs</th>
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Marks</th>
                                                        <th className="p-7 font-black text-slate-500 uppercase text-[11px] tracking-[0.2em] italic">Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-slate-300 font-black text-sm divide-y divide-slate-800/40 italic">
                                                    <tr className="hover:bg-indigo-500/5 transition-all">
                                                        <td className="p-7 text-white font-black uppercase">English Language</td>
                                                        <td className="p-7">30</td>
                                                        <td className="p-7">30</td>
                                                        <td className="p-7 text-indigo-400">20 Min</td>
                                                    </tr>
                                                    <tr className="hover:bg-indigo-500/5 transition-all">
                                                        <td className="p-7 text-white font-black uppercase">Quant Aptitude</td>
                                                        <td className="p-7">35</td>
                                                        <td className="p-7">35</td>
                                                        <td className="p-7 text-indigo-400">20 Min</td>
                                                    </tr>
                                                    <tr className="hover:bg-indigo-500/5 transition-all">
                                                        <td className="p-7 text-white font-black uppercase">Reasoning Skill</td>
                                                        <td className="p-7">35</td>
                                                        <td className="p-7">35</td>
                                                        <td className="p-7 text-indigo-400">20 Min</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="mt-12 flex flex-wrap gap-6 font-black uppercase tracking-[0.15em] text-xs">
                                        <div className="bg-red-500/10 border-2 border-red-500/20 px-8 py-5 rounded-3xl flex items-center gap-5 text-red-100 shadow-xl">
                                            <AlertCircle className="w-7 h-7 text-red-500" /> Negative Scoring: 0.25 on all sections.
                                        </div>
                                        <div className="bg-indigo-500/10 border-2 border-indigo-500/20 px-8 py-5 rounded-3xl flex items-center gap-5 text-indigo-100 shadow-xl">
                                            <CheckCircle2 className="w-7 h-7 text-indigo-500" /> Sectional Cutoffs apply for qualifying.
                                        </div>
                                    </div>
                                </div>

                                {/* Syllabus */}
                                <div id="syllabus" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <BookMarked className="w-9 h-9 text-indigo-400" /> Advanced Curriculum
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                                        {syllabusData.map((s, i) => (
                                            <div key={i} className="p-10 bg-slate-950 rounded-[3rem] border border-slate-800 group hover:border-indigo-500/40 transition-all shadow-2xl relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity"><s.icon className="w-20 h-20" /></div>
                                                <div className="flex items-center gap-6 mb-10 relative z-10">
                                                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-600 transition-all text-indigo-400 group-hover:text-white shadow-lg">
                                                        <s.icon className="w-7 h-7" />
                                                    </div>
                                                    <h4 className="font-black text-white text-xl md:text-2xl uppercase tracking-tighter leading-none italic">{s.subject}</h4>
                                                </div>
                                                <div className="flex flex-wrap gap-3 relative z-10 font-black italic">
                                                    {s.chapters.map((chap, idx) => (
                                                        <span key={idx} className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-widest group-hover:border-slate-700 transition-all">
                                                            {chap}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Eligibility */}
                                <div id="eligibility" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Users className="w-9 h-9 text-indigo-400" /> Applicant Benchmarks
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 font-black italic">
                                        <div className="p-10 md:p-12 bg-slate-950 rounded-[3rem] border border-slate-800 shadow-2xl group hover:border-indigo-500/30 transition-all">
                                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-5 opacity-60">Academic Status</div>
                                            <h4 className="font-black text-white text-xl md:text-2xl mb-5 uppercase tracking-tighter italic underline decoration-indigo-500/30 decoration-4 underline-offset-8">Degree Mandatory</h4>
                                            <p className="text-slate-500 font-black leading-relaxed text-sm md:text-base border-l-[6px] border-indigo-600/30 pl-5">Graduation in any discipline from a recognized University. Computer literacy is highly preferred for the digital test interface.</p>
                                        </div>
                                        <div className="p-10 md:p-12 bg-slate-950 rounded-[3rem] border border-slate-800 shadow-2xl group hover:border-indigo-500/30 transition-all">
                                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-5 opacity-60">Age Restrictions</div>
                                            <h4 className="font-black text-white text-xl md:text-2xl mb-5 uppercase tracking-tighter italic underline decoration-indigo-500/30 decoration-4 underline-offset-8">20 – 30 Years</h4>
                                            <p className="text-slate-500 font-black leading-relaxed text-sm md:text-base border-l-[6px] border-indigo-600/30 pl-5">Applicable relaxations for OBC (3Y), SC/ST (5Y), PwBD (10Y+) following standard central government recruitment norms.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Salary */}
                                <div id="salary" className="scroll-mt-32">
                                    <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-5 mb-12 uppercase tracking-tighter italic">
                                        <Banknote className="w-9 h-9 text-emerald-400" /> Scale-1 High Pay Structure
                                    </h3>
                                    <div className="p-10 md:p-16 bg-slate-950 rounded-[4rem] border-[4px] border-emerald-600/10 relative overflow-hidden shadow-2xl group">
                                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-125"><Landmark className="w-64 h-64 text-emerald-500" /></div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
                                            <div>
                                                <div className="text-slate-600 font-black text-[12px] uppercase tracking-[0.4em] mb-4 italic">Estimated Gross CTC</div>
                                                <div className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-10 tabular-nums italic group-hover:text-emerald-400 transition-colors">₹56k – ₹68k<span className="text-xs md:text-sm align-top ml-2 opacity-50">+Perks</span></div>
                                                <div className="flex flex-wrap gap-3 font-black italic">
                                                    {['Bank Medical', 'LTC/LTA', 'Petrol Plan', 'Highest HRA', 'Entertainment'].map(p => (
                                                        <span key={p} className="text-[10px] md:text-[11px] font-black uppercase px-5 py-2.5 bg-emerald-500/5 text-emerald-200 rounded-2xl border border-emerald-500/20 shadow-xl leading-none">{p}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="space-y-8 font-black uppercase tracking-tight text-sm md:text-base italic">
                                                <div className="flex justify-between items-center border-b border-slate-800 pb-5">
                                                    <span className="text-slate-600 tracking-[0.2em] text-[11px]">Basic Starting</span>
                                                    <span className="text-white text-lg md:text-xl">₹36,000+</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-slate-800 pb-5">
                                                    <span className="text-slate-600 tracking-[0.2em] text-[11px]">Rank Status</span>
                                                    <span className="text-white">Officer Scale-1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="sticky top-24 space-y-12">
                            <div className="bg-slate-900 border-[4px] border-indigo-600 rounded-[3.5rem] p-10 md:p-12 shadow-[0_0_80px_rgba(99,102,241,0.25)] relative overflow-hidden group transition-all hover:scale-[1.01]">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/30 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>

                                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 mt-6 relative z-10 leading-[0.8] uppercase tracking-tighter italic">Join The <br /> Officer Series</h3>
                                <p className="text-base text-slate-400 font-bold mb-12 relative z-10 uppercase tracking-tight leading-relaxed italic opacity-80 decoration-indigo-500/40 underline underline-offset-8 decoration-4">The definitive training for IBPS PO, clerk & insurance exams.</p>

                                <div className="space-y-6 mb-14 p-10 bg-slate-950/90 rounded-[2.5rem] border-2 border-slate-800 relative z-10 font-black uppercase text-[11px] tracking-[0.25em] shadow-2xl text-white italic">
                                    <div className="flex items-center gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> Prelims Mastery Mocks
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> Mains Advanced Sets
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> Group interview prep
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6 relative z-10 font-black uppercase tracking-[0.25em] text-xs">
                                    <Link href="/government-exams/banking/ibps-po" className="w-full py-7 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-3xl text-center transition-all active:scale-95 shadow-2xl shadow-indigo-600/40 border-b-4 border-indigo-900 leading-none text-base">
                                        Unlock Full Series
                                    </Link>
                                    <button className="w-full py-7 bg-slate-950 border-2 border-slate-700 text-slate-500 hover:text-white rounded-3xl transition-all font-black leading-none italic uppercase">
                                        Join Community
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

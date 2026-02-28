"use client";
import React from "react";
import Link from "next/link";
import {
    Calendar, Clock, CheckCircle2, BookOpen, ShieldCheck, Trophy,
    Zap, Target, Brain, ArrowRight, Microscope, Atom, Calculator,
    Plus, HelpCircle, MonitorPlay, School, Info, Award, GraduationCap,
    Check, Sparkles, Timer, MapPin, CreditCard, ChevronRight, Building2,
    FlaskConical, ZapOff, TrendingUp, Lightbulb
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function WBJEESchedulePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
            <Navbar />

            {/* 🔥 Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black mb-6 rounded-full uppercase tracking-widest">
                            <Trophy className="w-4 h-4" /> WBJEE 2026: Official Aspirant Guide
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            WBJEE 2026: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Puri Detailed Information</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-bold leading-relaxed">
                            Complete roadmap for Engineering, Technology, Pharmacy, and Architecture admissions in West Bengal.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 shadow-sm">
                                <Building2 className="w-5 h-5 text-cyan-400" />
                                <span className="text-sm font-bold text-slate-300">Body: WBJEEB</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 shadow-sm">
                                <MonitorPlay className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm font-bold text-slate-300">Mode: Offline (OMR Based)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📝 Exam Pattern & Overview */}
            <section className="py-20 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-cyan-600 decoration-4 underline-offset-8">About the Exam</h2>
                            <p className="text-slate-300 font-medium leading-relaxed mb-6">
                                WBJEE is a state-level entrance exam for admission into undergraduate engineering, technology, pharmacy, and architecture courses in West Bengal.
                            </p>

                            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                                <div className="p-6 bg-slate-800/50 border-b border-slate-700">
                                    <h4 className="font-black text-white uppercase tracking-widest text-sm">Paper Structure</h4>
                                </div>
                                <div className="p-6">
                                    <table className="w-full text-left">
                                        <thead className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                                            <tr><th className="pb-4">Paper</th><th className="pb-4">Subject</th><th className="pb-4 text-right">Duration</th></tr>
                                        </thead>
                                        <tbody className="text-sm font-bold text-slate-300">
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Paper 1</td><td className="py-4 font-black text-cyan-400">Mathematics (75 Q)</td><td className="py-4 text-right text-slate-500 font-black uppercase text-xs">2 Hours</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Paper 2</td><td className="py-4 font-black text-blue-400">Physics (40 Q) + Chemistry (40 Q)</td><td className="py-4 text-right text-slate-500 font-black uppercase text-xs">2 Hours</td></tr>
                                            <tr className="bg-cyan-600/10 text-cyan-400 font-black"><td className="py-4 px-2 tracking-widest uppercase text-xs">Total Duration</td><td className="py-4 px-2">155 Questions</td><td className="py-4 px-2 text-right">4 Hours Total</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                                <Info className="w-4 h-4 shrink-0" /> Offline (OMR) Exam with 3 distinct marking categories.
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { t: "Marks", v: "~200 Total", i: Award, c: "text-emerald-400 shadow-sm" },
                                    { t: "Frequency", v: "Once a Year", i: Calendar, c: "text-blue-400 shadow-sm" },
                                    { t: "Level", v: "Class 11 & 12", i: GraduationCap, c: "text-cyan-400 shadow-sm" },
                                    { t: "Top Target", v: "Jadavpur Univ.", i: Target, c: "text-amber-400 shadow-sm" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-cyan-500/30 transition-all">
                                        <stat.i className={`w-6 h-6 ${stat.c} mb-3`} />
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{stat.t}</div>
                                        <div className="text-lg font-black text-white mt-1 leading-tight">{stat.v}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-cyan-600 to-indigo-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform"><Sparkles className="w-32 h-32" /></div>
                                <h4 className="text-xl font-black uppercase mb-4 tracking-tighter text-left">The Category 3 Edge</h4>
                                <p className="font-bold text-sm leading-relaxed mb-4">Category 3 questions have multiple correct answers and carry +2 marks each with NO negative marking. Mastering these is key for a Top-500 rank.</p>
                                <div className="text-[10px] font-black uppercase tracking-widest border-t border-white/20 pt-4 animate-pulse">Official Marking Rule 2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🎯 Marking Scheme Matrix */}
            <section className="py-20 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Category-wise Marking</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                cat: "Category 1",
                                correct: "+1 Mark",
                                wrong: "-0.25 Neg",
                                detail: "1 Correct Answer",
                                color: "border-emerald-500/20 text-emerald-400"
                            },
                            {
                                cat: "Category 2",
                                correct: "+2 Mark",
                                wrong: "-0.5 Neg",
                                detail: "1 Correct Answer",
                                color: "border-blue-500/20 text-blue-400"
                            },
                            {
                                cat: "Category 3",
                                correct: "+2 Mark",
                                wrong: "NO Negative",
                                detail: "Multiple Correct",
                                color: "border-cyan-500/20 text-cyan-400",
                                pulse: true
                            }
                        ].map((item, i) => (
                            <div key={i} className={`p-8 bg-slate-950 rounded-[2.5rem] border ${item.color} group hover:scale-105 transition-all`}>
                                <div className="text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-50">{item.cat}</div>
                                <div className="text-4xl font-black mb-1">{item.correct}</div>
                                <div className={`text-sm font-black mb-6 uppercase tracking-widest ${item.pulse ? 'animate-pulse text-cyan-400' : 'text-rose-500'}`}>{item.wrong}</div>
                                <div className="pt-4 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-500">{item.detail}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 📅 Important Dates (Expected) */}
            <section className="py-20 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 underline decoration-cyan-600 decoration-2 underline-offset-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">2026 Tentative Calendar</h2>
                    </div>

                    <div className="max-w-4xl mx-auto bg-slate-900/50 p-8 md:p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-10 opacity-5 -mr-16 -mt-16"><Calendar className="w-64 h-64" /></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 relative z-10">
                            {[
                                { l: "Application Release", v: "Jan / Feb 2026" },
                                { l: "Application Deadline", v: "March 2026" },
                                { l: "Correction Window", v: "February 2026" },
                                { l: "Admit Card Release", v: "April 2026" },
                                { l: "WBJEE 2026 Exam", v: "April 2026 (Tentative)", h: true },
                                { l: "Result Date", v: "May 2026" },
                                { l: "Counselling Starts", v: "August 2026" }
                            ].map((item, i) => (
                                <div key={i} className={`flex justify-between items-center group/item ${item.h ? 'p-4 bg-cyan-600/10 rounded-2xl border border-cyan-500/20 col-span-1 md:col-span-2' : ''}`}>
                                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest group-hover/item:text-cyan-400 transition-colors uppercase">{item.l}</span>
                                    <span className={`text-sm font-black ${item.h ? 'text-cyan-400 leading-none py-1' : 'text-slate-300'}`}>{item.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 🏫 Fees & Eligibility */}
            <section className="py-24 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                        <div className="bg-slate-950 p-10 rounded-[4rem] border border-slate-800 relative overflow-hidden">
                            <div className="absolute top-0 left-0 p-8 opacity-5 -scale-x-100 rotate-12"><CreditCard className="w-40 h-40" /></div>
                            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Budgeting & Fees</h3>
                            <div className="space-y-6 mb-10">
                                <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-between shadow-inner">
                                    <div>
                                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">General Candidates</div>
                                        <div className="text-3xl font-black text-white">₹500 <span className="text-slate-700 text-sm font-bold">(Approx)</span></div>
                                    </div>
                                    <div className="px-3 py-1 bg-cyan-600/20 text-cyan-400 text-[10px] font-black rounded-lg uppercase tracking-widest leading-none">OMR Exam</div>
                                </div>
                                <div className="p-6 bg-slate-900 rounded-3xl border border-cyan-500/10 flex items-center justify-between">
                                    <div>
                                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">SC / ST / OBC</div>
                                        <div className="text-3xl font-black text-white">₹400</div>
                                    </div>
                                    <CreditCard className="w-8 h-8 text-slate-800" />
                                </div>
                            </div>
                            <Link href="/engineering-exams/wbjee" className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-black rounded-2xl block text-center text-xl shadow-xl shadow-cyan-900/40 transition-all font-black uppercase leading-none px-4">See Prep Series</Link>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase underline decoration-cyan-600 decoration-4 underline-offset-8">Critical Notes</h2>
                            <div className="space-y-5">
                                {[
                                    { t: "Subject Choice", v: "Maths is compulsory for B.Tech admission." },
                                    { t: "B.Pharm Eligibility", v: "Only Physics + Chemistry paper also eligible for B.Pharm." },
                                    { t: "Counselling", v: "Conducted entirely online after result declaration." },
                                    { t: "Domicile Rule", v: "WB students get admission sub-quota advantages." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-slate-950 rounded-2xl border border-slate-800 group hover:border-cyan-500/20 transition-all">
                                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20 font-black group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-inner">{i + 1}</div>
                                        <div>
                                            <div className="text-xs font-black text-white uppercase tracking-widest mb-1 italic leading-none">{item.t}</div>
                                            <p className="text-xs text-slate-400 font-bold leading-relaxed">{item.v}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📚 Detailed Syllabus Matrix */}
            <section className="py-24 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none px-4 py-2 border-x-8 border-cyan-600 inline-block">Syllabus Matrix</h2>
                        <p className="text-slate-500 font-black uppercase text-xs tracking-[0.5em] mt-6 leading-none italic">Class 11 & 12 (WBCHSE / CBSE level)</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Mathematics */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-cyan-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-8 border border-cyan-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Calculator className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Maths <span className="text-slate-600 text-xs text-right">75 Qs</span></h3>
                            <div className="space-y-6 flex-1 text-left">
                                {[
                                    { t: "Algebra", d: "Quadratic, Complex Numbers, Sequence & Series, Matrices." },
                                    { t: "Calculus", d: "Limits, Differentiation, Integration (Heavy Weightage)." },
                                    { t: "Coordinate Geometry", d: "Straight Line, Circle, Conics (Parabola, Hyperbola)." },
                                    { t: "Trig & Vectors", d: "Trigonometry, 3D Geometry, Probability & Vectors." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-1 italic leading-none">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Level: Moderate to Tough</div>
                        </div>

                        {/* Physics */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-blue-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Atom className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Physics <span className="text-slate-600 text-xs text-right">40 Qs</span></h3>
                            <div className="space-y-6 flex-1 text-left">
                                {[
                                    { t: "Mechanics", d: "Laws of Motion, Work Energy Power, Rotational Motion." },
                                    { t: "Electricity & Magnet", d: "Current Electricity, Magnetic Effects, EMI, AC." },
                                    { t: "Optics & Waves", d: "Ray and Wave Optics, Wave Motion." },
                                    { t: "Modern Physics", d: "Atom, Nuclei, Semiconductors, Thermodynamics." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1 italic leading-none">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Focus: Numerical Mastery</div>
                        </div>

                        {/* Chemistry */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-indigo-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8 border border-indigo-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <FlaskConical className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Chemistry <span className="text-slate-600 text-xs text-right">40 Qs</span></h3>
                            <div className="space-y-6 flex-1 text-left">
                                {[
                                    { t: "Physical", d: "Mole Concept, Thermo, Equilibrium, Electrochemistry." },
                                    { t: "Inorganic", d: "Periodic Table, Bonding, Coordination, p-block." },
                                    { t: "Organic", d: "GOC, Hydrocarbons, Alcohol Phenol Ether, Biomolecules." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1 italic leading-none">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Success: Direct Organic Questions</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🏫 Colleges & Cutoffs */}
            <section className="py-24 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter uppercase underline decoration-cyan-600 decoration-4 underline-offset-8">Bengal's Elite Tier</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { c: "Jadavpur Univ (JU)", r: "Top 500 (CSE)", i: Trophy, cl: "text-amber-400" },
                                    { c: "MAKAUT Affiliated", r: "Under 5000", i: School, cl: "text-blue-400" },
                                    { c: "Heritage Institute", r: "Under 15000", i: CheckCircle2, cl: "text-cyan-400" },
                                    { c: "Haldia Institute", r: "Under 25000", i: CheckCircle2, cl: "text-emerald-400" }
                                ].map((col, i) => (
                                    <div key={i} className="bg-slate-950 border border-slate-800 p-6 rounded-3xl group hover:border-cyan-500/20 transition-all">
                                        <col.i className={`w-6 h-6 ${col.cl} mb-4`} />
                                        <div className="text-sm font-black text-white mb-1 leading-none">{col.c}</div>
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{col.r}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-slate-950 p-10 rounded-[4rem] border border-slate-800 relative z-10 group overflow-hidden">
                                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform"><Lightbulb className="w-48 h-48" /></div>
                                <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Strategic Prep Framework</h3>
                                <div className="space-y-6">
                                    {[
                                        { t: "Step 1: NCERT Base", d: "Revise Class 11 & 12 completely to build a solid theory foundation." },
                                        { t: "Step 2: PYQ Mastery", d: "Solve last 10 years of Papers to understand pattern trends." },
                                        { t: "Step 3: Stamina", d: "4 Hours of offline stamina is required for Paper 1 & 2." },
                                        { t: "Step 4: Mocks", d: "Weekly full mocks to master Category 3 zero negative zone." }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-cyan-600/20 text-cyan-400 flex items-center justify-center font-black text-[10px] shrink-0">{i + 1}</div>
                                            <p className="text-xs text-slate-400 font-bold leading-relaxed">{step.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto bg-gradient-to-br from-cyan-600 to-indigo-800 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl group border border-cyan-500/20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase relative z-10 leading-none underline decoration-amber-400 decoration-8 underline-offset-[16px]">Secure Your <br /> Jadavpur Seat.</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-10">
                            <Link href="/engineering-exams/wbjee" className="px-14 py-6 bg-white text-cyan-700 font-black rounded-3xl text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest leading-none">
                                Start Training <ArrowRight className="w-8 h-8 inline-block ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

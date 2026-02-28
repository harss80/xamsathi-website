"use client";
import React from "react";
import Link from "next/link";
import {
    Calendar, Clock, CheckCircle2, BookOpen, ShieldCheck, Trophy,
    Zap, Target, Brain, ArrowRight, Microscope, Atom, Calculator,
    Plus, HelpCircle, MonitorPlay, School, Info, Award, GraduationCap,
    Check, Sparkles, Timer, MapPin, CreditCard, ChevronRight, TrendingUp
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function BITSATSchedulePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            <Navbar />

            {/* 🔥 Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black mb-6 rounded-full uppercase tracking-widest">
                            <Trophy className="w-4 h-4" /> BITS PILANI ADMISSIONS 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            BITSAT 2026: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-400">The Ultimate Guide</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-bold leading-relaxed">
                            Complete breakdown of exam pattern, eligibility, fees, and the detailed NCERT-based syllabus for Pilani, Goa, and Hyderabad campuses.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                                <School className="w-5 h-5 text-blue-400" />
                                <span className="text-sm font-bold text-slate-300">Body: BITS Pilani</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                                <MonitorPlay className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm font-bold text-slate-300">Mode: Online CBT</span>
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
                            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-blue-600 decoration-4 underline-offset-8">What is BITSAT 2026?</h2>
                            <p className="text-slate-300 font-medium leading-relaxed mb-10">
                                BITSAT (Birla Institute of Technology and Science Admission Test) is a national-level computer-based entrance exam for admission into engineering and pharmacy programs at BITS Pilani, Goa, and Hyderabad campuses.
                            </p>

                            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                                <div className="p-6 bg-slate-800/50 border-b border-slate-700">
                                    <h4 className="font-black text-white uppercase tracking-widest text-sm">Exam Overview</h4>
                                </div>
                                <div className="p-6">
                                    <table className="w-full text-left">
                                        <thead className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                                            <tr><th className="pb-4">Section</th><th className="pb-4">Questions</th><th className="pb-4 text-right">Marks</th></tr>
                                        </thead>
                                        <tbody className="text-sm font-bold text-slate-300">
                                            <tr className="border-b border-slate-800/50"><td className="py-4">Physics</td><td className="py-4">30</td><td className="py-4 text-right">90</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4">Chemistry</td><td className="py-4">30</td><td className="py-4 text-right">90</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4">Maths / Biology</td><td className="py-4">40</td><td className="py-4 text-right">120</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4">English Prof.</td><td className="py-4">10</td><td className="py-4 text-right">30</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4">Logical Reasoning</td><td className="py-4">20</td><td className="py-4 text-right">60</td></tr>
                                            <tr className="bg-blue-600/10 text-blue-400"><td className="py-4 px-2">Total</td><td className="py-4 px-2 font-black">130</td><td className="py-4 px-2 text-right font-black">390</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { t: "Marking", v: "+3 Correct, -1 Wrong", i: Award, c: "text-emerald-400" },
                                    { t: "Duration", v: "3 Hours (180 Mins)", i: Clock, c: "text-blue-400" },
                                    { t: "Bonus Qs", v: "12 Extra Questions", i: Sparkles, c: "text-amber-400" },
                                    { t: "Frequency", v: "2 Sessions (April & May)", i: Calendar, c: "text-purple-400" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all">
                                        <stat.i className={`w-6 h-6 ${stat.c} mb-3`} />
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.t}</div>
                                        <div className="text-lg font-black text-white mt-1 leading-tight">{stat.v}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform"><Sparkles className="w-32 h-32" /></div>
                                <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">The Bonus Edge</h4>
                                <p className="font-bold text-sm leading-relaxed mb-4">If you finish all 130 questions correctly before time, you can attempt 12 extra bonus questions for additional rank boost. But beware—once opted, you cannot edit previous 130 answers.</p>
                                <div className="text-[10px] font-black uppercase tracking-widest border-t border-white/20 pt-4">Strategic Speed-Run Training Included in Xamsathi Series</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📅 Important Dates (Expected) */}
            <section className="py-20 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Important Dates 2026</h2>
                        <p className="text-slate-500 font-black uppercase text-xs tracking-[0.3em] mt-2 underline decoration-blue-500 underline-offset-4">Based on Trend & NTA Schedule</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-slate-950 p-8 rounded-[3rem] border border-slate-800 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 -mr-8 -mt-8"><Calendar className="w-32 h-32" /></div>
                            <h4 className="text-xl font-black text-blue-400 mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Session 1 (April)</h4>
                            <div className="space-y-6">
                                {[
                                    { l: "Application Starts", v: "Dec 15, 2025" },
                                    { l: "Application Deadline", v: "March 16, 2026" },
                                    { l: "Edit Window", v: "March 18–20, 2026" },
                                    { l: "Slot Booking", v: "March 27–31, 2026" },
                                    { l: "Hall Ticket", v: "April 05, 2026" },
                                    { l: "Session 1 Exam", v: "April 15–17, 2026", h: true }
                                ].map((item, i) => (
                                    <div key={i} className={`flex justify-between items-center ${item.h ? 'p-3 bg-blue-600/10 rounded-xl border border-blue-500/20' : ''}`}>
                                        <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{item.l}</span>
                                        <span className={`text-sm font-black ${item.h ? 'text-blue-400' : 'text-slate-300'}`}>{item.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-950 p-8 rounded-[3rem] border border-slate-800 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 -mr-8 -mt-8"><Target className="w-32 h-32" /></div>
                            <h4 className="text-xl font-black text-amber-500 mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Session 2 (May)</h4>
                            <div className="space-y-6">
                                {[
                                    { l: "Registration Window", v: "April 20 – May 02" },
                                    { l: "Correction Dates", v: "May 04–06, 2026" },
                                    { l: "Slot Booking", v: "May 13–15, 2026" },
                                    { l: "Session 2 Exam", v: "May 24–26, 2026", h: true },
                                    { l: "Result (Session 2)", v: "June 2026" },
                                    { l: "Counseling Start", v: "July 2026" }
                                ].map((item, i) => (
                                    <div key={i} className={`flex justify-between items-center ${item.h ? 'p-3 bg-amber-600/10 rounded-xl border border-amber-500/20' : ''}`}>
                                        <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{item.l}</span>
                                        <span className={`text-sm font-black ${item.h ? 'text-amber-500' : 'text-slate-300'}`}>{item.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 💰 Eligibility & Fees */}
            <section className="py-20 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                        <div>
                            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-emerald-500 decoration-4 underline-offset-8">Eligibility Criteria</h2>
                            <div className="space-y-6">
                                {[
                                    { t: "Academic Qualification", d: "Passed/Appearing 10+2 (PCM) in 2025 or 2026." },
                                    { t: "75% Rule", d: "Minimum 75% aggregate in PCM (or PCB for B.Pharm) combined." },
                                    { t: "Individual Marks", d: "Minimum 60% in each individual subject (P, C, and M/B)." },
                                    { t: "Language", d: "English must be a compulsory subject in Class 12." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-emerald-500/20 transition-all group">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <Check className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-white uppercase tracking-widest mb-1">{item.t}</div>
                                            <p className="text-sm text-slate-400 font-medium">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900 p-10 rounded-[4rem] border border-slate-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5"><CreditCard className="w-40 h-40" /></div>
                            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter text-center">Registration Fee (Indian Centers)</h3>
                            <div className="space-y-6 mb-10">
                                <div className="p-6 bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-between">
                                    <div>
                                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Session 1 ONLY</div>
                                        <div className="text-2xl font-black text-white">₹3,600 (M) <span className="text-slate-600">/</span> ₹3,100 (F)</div>
                                    </div>
                                    <CreditCard className="w-8 h-8 text-blue-400 opacity-20" />
                                </div>
                                <div className="p-6 bg-blue-600/10 rounded-3xl border border-blue-500/20 flex items-center justify-between">
                                    <div>
                                        <div className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">BOTH SESSIONS (1 & 2)</div>
                                        <div className="text-2xl font-black text-white">₹5,600 (M) <span className="text-slate-600">/</span> ₹4,600 (F)</div>
                                    </div>
                                    <Zap className="w-8 h-8 text-blue-400 animate-pulse" />
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-950/50 p-4 rounded-2xl border border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                <MapPin className="w-4 h-4 text-rose-500" /> Exam Centers in 72 Cities & Dubai/Kathmandu
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📚 Detailed Syllabus Section */}
            <section className="py-24 bg-slate-900 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none px-4 py-2 border-x-8 border-blue-600 inline-block">Chapter Mastery</h2>
                        <p className="text-slate-500 font-black uppercase text-xs tracking-[0.5em] mt-6">NCERT Class 11 & 12 Specialized</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Physics */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-blue-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Atom className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4 flex justify-between">Physics <span className="text-slate-600 text-sm">30 Qs</span></h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Mechanics & Motion", d: "Kinematics, Laws of Motion, Work Energy, Rotational Motion." },
                                    { t: "Waves & Oscillations", d: "SHM, Sound Wave Motion." },
                                    { t: "Thermal Physics", d: "Heat & Thermodynamics." },
                                    { t: "Electricity & Magnetism", d: "Electrostatics, Current, Magnetism, EMI & AC." },
                                    { t: "Optics", d: "Ray and Wave Optics." },
                                    { t: "Modern Physics", d: "Atomic Models, Nuclear Physics, Photoelectric Effect." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Chemistry */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-emerald-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Microscope className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4 flex justify-between">Chemistry <span className="text-slate-600 text-sm">30 Qs</span></h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Physical Chemistry", d: "Atomic Structure, Bonding, Thermodynamics, Equilibrium, Kinetics." },
                                    { t: "Inorganic Chemistry", d: "s, p, d, f Block Elements, Coordination Compounds, Periodic Trends." },
                                    { t: "Organic Chemistry", d: "GOC, Hydrocarbons, Functional Groups, Alcohols, Carbonyls." },
                                    { t: "Applied Chemistry", d: "Environmental & Industrial Chemistry, Polymers, Bio-molecules." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Maths / Bio */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-amber-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-8 border border-amber-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Calculator className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4 flex justify-between">Maths / Bio <span className="text-slate-600 text-sm">40 Qs</span></h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Algebra", d: "Complex Nos, Quadratic Eqns, Sequences & Series, Matrices." },
                                    { t: "Calculus", d: "Limits, Differential & Integral Calculus, Applications." },
                                    { t: "Geometry", d: "Coordinate (2D/3D), Vectors, Straight Lines, Circles." },
                                    { t: "Probability & Stats", d: "Complete Stats, Linear Programming & Modelling." },
                                    { t: "Biology (B.Pharm)", d: "Diversity, Cell Structure, Genetics, Biotech, Ecology." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Logic & English Split */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
                        <div className="p-8 bg-slate-900 rounded-[3rem] border border-slate-800 hover:border-indigo-500/30 transition-all group">
                            <div className="flex items-center gap-4 mb-6">
                                <Brain className="w-10 h-10 text-indigo-400" />
                                <h4 className="text-xl font-black text-white uppercase tracking-widest">Logical Reasoning (20 Qs)</h4>
                            </div>
                            <p className="text-sm font-bold text-slate-400 mb-6">Assesses analytical ability via analogies, series, syllogisms, and coding-decoding.</p>
                            <div className="flex flex-wrap gap-2">
                                {["Analogy", "Syllogism", "Blood Relations", "Puzzles", "Figure Series"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-950 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-widest border border-slate-800 group-hover:border-indigo-500/30 transition-all">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-8 bg-slate-900 rounded-[3rem] border border-slate-800 hover:border-purple-500/30 transition-all group">
                            <div className="flex items-center gap-4 mb-6">
                                <BookOpen className="w-10 h-10 text-purple-400" />
                                <h4 className="text-xl font-black text-white uppercase tracking-widest">English Proficiency (10 Qs)</h4>
                            </div>
                            <p className="text-sm font-bold text-slate-400 mb-6">Tests communication, grammar, vocabulary, and reading comprehension.</p>
                            <div className="flex flex-wrap gap-2">
                                {["Grammar", "Vocabulary", "Reading RC", "Para-jumbles"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-950 rounded-lg text-[10px] font-black text-slate-500 uppercase tracking-widest border border-slate-800 group-hover:border-purple-500/30 transition-all">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✍️ Preparation Strategy */}
            <section className="py-24 bg-slate-950 border-t border-slate-800 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">BITSAT Strategy Guide</h2>
                                <p className="text-slate-400 font-bold mb-8">Master the faster-than-light entrance with our proven 4-step framework.</p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { s: "Deep NCERT Drill", d: "Base your prep entirely on NCERT Class 11 & 12 textbooks. Theory is the foundation." },
                                    { s: "Timed Sectionals", d: "Solve previous papers & timed mocks. BITSAT is a race against time." },
                                    { s: "The English Advantage", d: "LR & English are scoring yet ignored. Practice reading daily." },
                                    { s: "Bonus Simulation", d: "Only attempt Full Mocks that include a functional Bonus Questions mode." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-black group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">{i + 1}</div>
                                        <div>
                                            <div className="text-lg font-black text-white uppercase tracking-tight mb-1">{step.s}</div>
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter relative z-10">Pilani, Goa, Hyd</h3>
                            <div className="space-y-6 mb-12 relative z-10">
                                <div className="flex items-start gap-4">
                                    <MonitorPlay className="w-6 h-6 shrink-0 mt-1" />
                                    <p className="font-bold">Real Interface: Exact BITSAT replicas for desktop testing.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <TrendingUp className="w-6 h-6 shrink-0 mt-1" />
                                    <p className="font-bold">Speed Analytics: Deep insights into time spent per section.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Award className="w-6 h-6 shrink-0 mt-1" />
                                    <p className="font-bold">IIT Alum Curated: Mocks designed by Top 1% BITSian minds.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/20 relative z-10">
                                <div>
                                    <div className="text-4xl font-black">75% PCM</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Eligibility Hub</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black">180 Mins</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Speed Master</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl group border border-slate-800">
                        <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase relative z-10 leading-none">
                            Ready to Claim <br /> Your BITSian Seat?
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                            <Link href="/engineering-exams/bitsat" className="px-12 py-5 bg-blue-600 text-white font-black rounded-2xl text-xl shadow-2xl hover:bg-blue-500 active:scale-95 transition-all uppercase tracking-widest">
                                Enroll Practice Pack <ArrowRight className="w-6 h-6 inline-block ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

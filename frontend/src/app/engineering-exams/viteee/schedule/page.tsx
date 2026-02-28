"use client";
import React from "react";
import Link from "next/link";
import {
    Calendar, Clock, CheckCircle2, BookOpen, ShieldCheck, Trophy,
    Zap, Target, Brain, ArrowRight, Microscope, Atom, Calculator,
    Plus, HelpCircle, MonitorPlay, School, Info, Award, GraduationCap,
    Check, Sparkles, Timer, MapPin, CreditCard, ChevronRight, Laptop,
    TrendingUp, Lightbulb
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function VITEEESchedulePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-purple-500/30">
            <Navbar />

            {/* 🔥 Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black mb-6 rounded-full uppercase tracking-widest">
                            <Trophy className="w-4 h-4" /> VITEEE 2026: Official Roadmap
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            VITEEE 2026: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Complete Master Guide</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-bold leading-relaxed">
                            VIT Engineering Entrance Examination (VITEEE) is your gateway to undergraduate engineering at Vellore, Chennai, Bhopal, and VIT-AP.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 shadow-sm">
                                <School className="w-5 h-5 text-purple-400" />
                                <span className="text-sm font-bold text-slate-300">Body: VIT University</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 shadow-sm">
                                <MonitorPlay className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm font-bold text-slate-300">Mode: 150 Mins | CBT</span>
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
                            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-purple-600 decoration-4 underline-offset-8">What is VITEEE?</h2>
                            <p className="text-slate-300 font-medium leading-relaxed mb-6">
                                VITEEE (VIT Engineering Entrance Examination) is the online computer-based test (CBT) used for admission into undergraduate engineering (B.Tech) programmes at VIT campuses like Vellore, Chennai, Bhopal and VIT-AP.
                            </p>
                            <p className="text-slate-400 text-sm font-bold mb-10 italic">"It’s one of the most popular engineering entry tests in India."</p>

                            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                                <div className="p-6 bg-slate-800/50 border-b border-slate-700">
                                    <h4 className="font-black text-white uppercase tracking-widest text-sm">Exam Weightage Matrix</h4>
                                </div>
                                <div className="p-6">
                                    <table className="w-full text-left">
                                        <thead className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                                            <tr><th className="pb-4">Section</th><th className="pb-4">Questions</th></tr>
                                        </thead>
                                        <tbody className="text-sm font-bold text-slate-300">
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Mathematics or Biology</td><td className="py-4 font-black text-purple-400">40</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Physics</td><td className="py-4 font-black text-blue-400">35</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Chemistry</td><td className="py-4 font-black text-emerald-400">35</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">English Proficiency</td><td className="py-4 font-black text-amber-400">05</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Aptitude</td><td className="py-4 font-black text-pink-400">10</td></tr>
                                            <tr className="bg-purple-600/10 text-purple-400 font-black"><td className="py-4 px-2 tracking-widest uppercase text-xs">Total MCQs</td><td className="py-4 px-2">125</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { t: "Marking Scheme", v: "+4 Correct, -1 Wrong", i: Award, c: "text-emerald-400 shadow-sm" },
                                    { t: "Duration", v: "150 Minutes (2.5h)", i: Clock, c: "text-blue-400 shadow-sm" },
                                    { t: "Total Marks", v: "500 Total Potential", i: Target, c: "text-purple-400 shadow-sm" },
                                    { t: "Level", v: "NCERT Class 11 & 12", i: GraduationCap, c: "text-pink-400 shadow-sm" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-purple-500/30 transition-all">
                                        <stat.i className={`w-6 h-6 ${stat.c} mb-3`} />
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{stat.t}</div>
                                        <div className="text-lg font-black text-white mt-1 leading-tight">{stat.v}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform"><Laptop className="w-32 h-32" /></div>
                                <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">Updated 2026 Marking</h4>
                                <p className="font-bold text-sm leading-relaxed mb-4">VITEEE 2026 has introduced a strict negative marking protocol (−1 for incorrect). Precision is now the differentiator. Total Marks: 500 (125 Qs × 4).</p>
                                <div className="text-[10px] font-black uppercase tracking-widest border-t border-white/20 pt-4 animate-pulse">Critical for Vellore Rank 1</div>
                            </div>

                            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                                <Info className="w-4 h-4" /> Candidates choose MPCEA or BPCEA streams depending on 12th subjects.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📅 Important Dates (2026) */}
            <section className="py-20 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 underline decoration-purple-600 decoration-2 underline-offset-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Important Dates (2026)</h2>
                    </div>

                    <div className="max-w-4xl mx-auto bg-slate-950 p-8 md:p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-10 opacity-5 -mr-16 -mt-16"><Calendar className="w-64 h-64" /></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 relative z-10">
                            {[
                                { l: "Application Start", v: "Oct 24, 2025 (Open)" },
                                { l: "Last Date to Apply", v: "March 31, 2026" },
                                { l: "Slot Booking", v: "April 2026" },
                                { l: "Admit Card Release", v: "~48 hrs Before Exam" },
                                { l: "Exam Dates", v: "April 28 – May 03, 2026", h: true },
                                { l: "Result Declaration", v: "2nd week of May 2026" },
                                { l: "Counselling", v: "May 2026" }
                            ].map((item, i) => (
                                <div key={i} className={`flex justify-between items-center group/item ${item.h ? 'p-4 bg-purple-600/10 rounded-2xl border border-purple-500/20 col-span-1 md:col-span-2' : ''}`}>
                                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest group-hover/item:text-purple-400 transition-colors">{item.l}</span>
                                    <span className={`text-sm font-black ${item.h ? 'text-purple-400 leading-none py-1' : 'text-slate-300'}`}>{item.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 🧠 Eligibility Criteria */}
            <section className="py-24 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16 underline decoration-blue-500 decoration-4 underline-offset-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Eligibility Criteria</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                title: "Nationality",
                                desc: "Indian resident, NRI, OCI or PIO is eligible.",
                                icon: ShieldCheck, color: "text-blue-400", bg: "bg-blue-500/10"
                            },
                            {
                                title: "Age Bar",
                                desc: "Must be born on or after 1st July 2004.",
                                icon: Calendar, color: "text-purple-400", bg: "bg-purple-500/10"
                            },
                            {
                                title: "Minimum Marks",
                                desc: "60% aggregate in PCM/B (Gen); 50% for SC/ST/Reserved.",
                                icon: Trophy, color: "text-amber-400", bg: "bg-amber-500/10"
                            },
                            {
                                title: "Indiv. Score",
                                desc: "At least 50% in Maths or Biology individually is required.",
                                icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-500/10"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col items-center text-center group">
                                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 border border-white/5`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tighter">{item.title}</h4>
                                <p className="text-xs text-slate-400 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-6 bg-slate-900 rounded-3xl border border-slate-800 max-w-2xl mx-auto text-center">
                        <p className="text-sm font-bold text-slate-300">Must have passed or be appearing in 10+2 (Class 12) or equivalent with regular schooling.</p>
                    </div>
                </div>
            </section>

            {/* 📚 Subject-wise Detailed Syllabus */}
            <section className="py-24 bg-slate-900 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none px-4 py-2 border-x-8 border-purple-600 inline-block">Chapter Mastery</h2>
                        <p className="text-slate-500 font-black uppercase text-xs tracking-[0.5em] mt-6 leading-none italic">"NCERT Class 11 & 12 Specialized"</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Physics */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-blue-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Atom className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4 flex justify-between">Physics <span className="text-slate-600 text-sm">35 Qs</span></h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Laws of Motion", d: "Statics, Dynamics, Work & Energy Matrix." },
                                    { t: "Properties of Matter", d: "Elasticity, Hydrodynamics, Surface Tension." },
                                    { t: "Electrostatics & Current", d: "Current Electricity, Magnetic Effects of Current." },
                                    { t: "Electromagnetic Induction", d: "EMI, AC, Waves & Optics Foundation." },
                                    { t: "Modern Physics", d: "Atoms & Nuclei, Dual Nature, Semiconductors." },
                                    { t: "Thermodynamics", d: "Heat laws and Thermal properties." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[11px] font-black text-blue-400 uppercase tracking-widest mb-1 italic">{item.t}</div>
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
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4 flex justify-between">Chemistry <span className="text-slate-600 text-sm">35 Qs</span></h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Physical Chemistry", d: "Thermodynamics, Equilibrium, Chemical Kinetics." },
                                    { t: "Inorganic Chemistry", d: "Periodic Table, p/d/f blocks, Coordination." },
                                    { t: "Organic Chemistry", d: "Isomerism, basic reactions, Carbonyls, Amines." },
                                    { t: "Biomolecules", d: "NCERT Class 12 Memory Based Chapters." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[11px] font-black text-emerald-400 uppercase tracking-widest mb-1 italic">{item.t}</div>
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
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4 flex justify-between text-left">Math / Bio <span className="text-slate-600 text-sm">40 Qs</span></h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Algebra", d: "Complex Numbers, Quadratic Equations, Logic." },
                                    { t: "Calculus", d: "Limits, Derivatives, Integrals, Diff Equations." },
                                    { t: "Coordinate Geometry", d: "Straight Lines, Circles, Conics (2D & 3D)." },
                                    { t: "Probability & Stats", d: "Vectors, Trig, and Discrete Mathematics." },
                                    { t: "Biology Focus", d: "Cell, Genetics, Plant & Human Physiology, Biotech." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[11px] font-black text-amber-400 uppercase tracking-widest mb-1 italic">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Reasoning & English Split */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 text-center md:text-left">
                        <div className="p-10 bg-slate-950 rounded-[3rem] border border-slate-800 hover:border-indigo-500/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5"><Brain className="w-24 h-24" /></div>
                            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <Brain className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-black text-white uppercase tracking-widest leading-none">Aptitude <span className="text-slate-600 text-xs">(10 Qs)</span></h4>
                            </div>
                            <p className="text-sm font-bold text-slate-500 mb-6">Assesses analytical ability via analogies, series, syllogisms, and coding-decoding.</p>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                {["Analogies", "Series", "Syllogism", "Data Interpretation"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-900 rounded-lg text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-800">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-10 bg-slate-950 rounded-[3rem] border border-slate-800 hover:border-purple-500/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5"><BookOpen className="w-24 h-24" /></div>
                            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 shadow-inner group-hover:bg-purple-600 group-hover:text-white transition-all">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-black text-white uppercase tracking-widest leading-none">English <span className="text-slate-600 text-xs">(5 Qs)</span></h4>
                            </div>
                            <p className="text-sm font-bold text-slate-500 mb-6">Tests communication, grammar, vocabulary, and reading comprehension passages.</p>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                                {["Grammar", "Vocabulary", "Comprehension"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-slate-900 rounded-lg text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-800">{tag}</span>
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
                                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Preparation Strategy</h2>
                                <p className="text-slate-400 font-bold mb-8 italic">"VITEEE values speed. Don't let negative marking slow your potential."</p>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { s: "NCERT Foundation", d: "Cover Class 11 & 12 basics first. This is the bedrock of VITEEE questions." },
                                    { s: "High Weightage Focus", d: "Master Mechanics (Phy) and Physical Chem first. These are high scoring." },
                                    { s: "Timed Mock Drills", d: "Practice previous year papers and mocks under strict 150-min timing." },
                                    { s: "The English Edge", d: "Aptitude and English are often scoring—don’t ignore these 15 marks." },
                                    { s: "Accuracy over Speed", d: "Focus on exact solving, especially now with (−1) negative marking introduced." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 font-black group-hover:bg-purple-600 group-hover:text-white transition-all shadow-inner">{i + 1}</div>
                                        <div>
                                            <div className="text-lg font-black text-white uppercase tracking-tight mb-1">{step.s}</div>
                                            <p className="text-xs text-slate-500 font-bold leading-relaxed">{step.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-600 to-blue-900 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter relative z-10">Top VIT Courses</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 mb-12">
                                {[
                                    { t: "CSE", d: "Comp. Science & Engg." },
                                    { t: "ECE", d: "Electronics & Comm." },
                                    { t: "ME", d: "Mechanical Engg." },
                                    { t: "EEE", d: "Electrical & Electronics" },
                                    { t: "Bio-Tech", d: "Bioengineering" },
                                    { t: "Civil", d: "Civil Engineering" }
                                ].map((course, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl border border-white/10 backdrop-blur-md">
                                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-black text-[10px]">{course.t}</div>
                                        <span className="text-[10px] font-black uppercase tracking-widest">{course.d}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/20 relative z-10">
                                <div>
                                    <div className="text-4xl font-black">60% PCM</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none">Eligibility Bar (Gen)</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black">500 Mks</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none">Total Matrix</div>
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
                        <div className="absolute top-0 left-0 w-full h-full bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase relative z-10 leading-none underline decoration-purple-600 decoration-8 underline-offset-[16px]">Secure Your <br /> Vellore Campus Seat.</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-10">
                            <Link href="/engineering-exams/viteee" className="px-12 py-5 bg-purple-600 text-white font-black rounded-2xl text-xl shadow-2xl hover:bg-purple-500 active:scale-95 transition-all uppercase tracking-widest">
                                Go to Performance Simulators <ArrowRight className="w-6 h-6 inline-block ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

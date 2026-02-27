"use client";
import React from "react";
import Link from "next/link";
import {
    Calendar, Clock, CheckCircle2, BookOpen, ShieldCheck, Trophy,
    Zap, Target, Brain, ArrowRight, Microscope, Atom, Calculator,
    Plus, HelpCircle, MonitorPlay, School, Info, Award, GraduationCap,
    Check
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function JEEAdvancedSchedulePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black mb-6 rounded-full uppercase tracking-widest">
                            <Trophy className="w-4 h-4" /> Gateway to IITs
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            JEE Advanced 2026: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Complete Roadmap & Guide</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-bold leading-relaxed">
                            Master the toughest engineering entrance with our detailed 2026 guide. From eligibility to syllabus, everything an IIT aspirant needs.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                                <School className="w-5 h-5 text-indigo-400" />
                                <span className="text-sm font-bold text-slate-300">Body: IITs Rotational</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                                <MonitorPlay className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm font-bold text-slate-300">Mode: CBT (Paper 1 & 2)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Info - What is JEE Advanced */}
            <section className="py-20 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative p-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
                                <div className="flex items-center gap-4 mb-6 text-indigo-400">
                                    <Info className="w-8 h-8" />
                                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter">What is JEE Advanced?</h2>
                                </div>
                                <p className="text-slate-300 font-medium leading-relaxed mb-6">
                                    JEE Advanced is the second stage of the JEE examination process. Only top candidates who qualify JEE Main are eligible to appear.
                                </p>
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest">Gateway for admission into:</h4>
                                    {[
                                        "23 Indian Institutes of Technology (IITs)",
                                        "Indian Institute of Science (IISc)",
                                        "Selected Programs in Premium Institutes",
                                        "IIT-based Integrated & Dual Degree"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">Exam Day Structure</h3>
                                <p className="text-slate-400 font-medium mb-8">JEE Advanced maintains a strict, rigorous protocol to ensure quality selection.</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Total Papers", value: "2 (Compulsory)", icon: BookOpen },
                                    { label: "Mode", value: "CBT (Both Papers)", icon: Zap },
                                    { label: "Duration", value: "3 Hours Each", icon: Clock },
                                    { label: "Timing", value: "Morning + Afternoon", icon: Calendar },
                                ].map((item, i) => (
                                    <div key={i} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-colors">
                                        <item.icon className="w-5 h-5 text-indigo-400 mb-3" />
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</div>
                                        <div className="text-lg font-black text-white mt-1 tracking-tight">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility Section */}
            <section className="py-20 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] -mr-40 pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 underline decoration-indigo-600 decoration-4 underline-offset-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Eligibility Criteria</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                title: "JEE Main Qual.",
                                desc: "Only Top 2.5 lakh candidates of JEE Main are eligible.",
                                icon: Trophy,
                                color: "text-blue-400", bg: "bg-blue-500/10"
                            },
                            {
                                title: "Age Limit",
                                desc: "General: Born on/after Oct 1, 2001 (5yr relax for SC/ST/PwD).",
                                icon: Calendar,
                                color: "text-purple-400", bg: "bg-purple-500/10"
                            },
                            {
                                title: "Attempts",
                                desc: "Maximum 2 attempts in 2 consecutive years.",
                                icon: Zap,
                                color: "text-amber-400", bg: "bg-amber-500/10"
                            },
                            {
                                title: "12th Criteria",
                                desc: "Appeared in Class 12 in 2025 or 2026. Must meet IIT criteria.",
                                icon: School,
                                color: "text-emerald-400", bg: "bg-emerald-500/10"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800 hover:border-indigo-500/30 transition-all flex flex-col group">
                                <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-6 border border-white/5 shadow-inner`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">{item.title}</h4>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exam Pattern Table */}
            <section className="py-20 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">Exam Pattern Trends</h2>
                            <p className="text-lg text-slate-400 font-bold mb-10 italic">"Pattern changes slightly every year – stay adaptable."</p>

                            <div className="space-y-6">
                                {[
                                    "Single Correct MCQ",
                                    "Multiple Correct MCQ",
                                    "Integer/Numerical Type",
                                    "Matrix Match",
                                    "Paragraph-Based Questions"
                                ].map((type, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-2xl border border-slate-800 hover:border-indigo-500/20 transition-all group">
                                        <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center text-xs font-black text-indigo-400 border border-slate-800 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all">0{i + 1}</div>
                                        <span className="text-sm font-bold text-slate-300">{type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="bg-slate-900 rounded-[3rem] p-4 border border-slate-800 shadow-2xl overflow-hidden relative group">
                                <div className="absolute top-0 right-0 p-8 opacity-5"><Brain className="w-40 h-40" /></div>
                                <div className="p-8 border-b border-slate-800 bg-slate-950/50">
                                    <h4 className="text-xl font-black text-white uppercase tracking-widest">Core Structure 2026</h4>
                                </div>
                                <div className="overflow-x-auto p-4 md:p-8">
                                    <table className="w-full text-left">
                                        <thead className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] border-b border-slate-800">
                                            <tr>
                                                <th className="pb-4 px-2">Feature</th>
                                                <th className="pb-4 px-2 text-right">Details</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm font-bold text-slate-300">
                                            <tr className="border-b border-slate-800/50 hover:bg-slate-950/30 transition-colors"><td className="py-4 px-2">Subjects</td><td className="py-4 px-2 text-right">Physics, Chem, Maths</td></tr>
                                            <tr className="border-b border-slate-800/50 hover:bg-slate-950/30 transition-colors"><td className="py-4 px-2">Total Papers</td><td className="py-4 px-2 text-right">2 (Compulsory)</td></tr>
                                            <tr className="border-b border-slate-800/50 hover:bg-slate-950/30 transition-colors"><td className="py-4 px-2">Questions</td><td className="py-4 px-2 text-right text-xs">MCQ, Multi-Correct, etc.</td></tr>
                                            <tr className="border-b border-slate-800/50 hover:bg-slate-950/30 transition-colors"><td className="py-4 px-2">Negative Marking</td><td className="py-4 px-2 text-right text-emerald-400">Yes (Varies)</td></tr>
                                            <tr className="hover:bg-slate-950/30 transition-colors"><td className="py-4 px-2">Calculator</td><td className="py-4 px-2 text-right text-rose-500 uppercase text-xs">Not Allowed</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Syllabus - Integrated Section */}
            <section className="py-24 bg-slate-900 relative">
                <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px] -ml-40 pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none px-4 py-2 border-x-8 border-indigo-600 inline-block">Complete Syllabus</h2>
                        <p className="text-slate-500 font-black uppercase text-xs tracking-[0.5em] mt-6 animate-pulse">Advanced Defined Standard</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Physics */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-blue-500/30 transition-all duration-500 group shadow-xl">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform">
                                <Atom className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest border-b border-slate-800 pb-4">Physics</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Mechanics", s: "Laws of Motion, Work, Rotational, Gravitation, Fluid" },
                                    { t: "Thermodynamics", s: "Heat, Kinetic Theory, 1st & 2nd Laws" },
                                    { t: "Waves & Oscillations", s: "SHM, Sound Waves" },
                                    { t: "Electromagnetism", s: "Electrostatics, Current, EMI & AC" },
                                    { t: "Optics", s: "Ray & Wave Optics" },
                                    { t: "Modern Physics", s: "Atomic, Nuclear, Photoelectric" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">{item.t}</div>
                                        <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.s}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Chemistry */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-emerald-500/30 transition-all duration-500 group shadow-xl">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                                <Microscope className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest border-b border-slate-800 pb-4">Chemistry</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Physical", s: "Mole Concept, Equilibrium, kinetics, Electrochemistry" },
                                    { t: "Organic", s: "GOC, Hydrocarbons, Alcohols, Carbonyls, Amines" },
                                    { t: "Inorganic", s: "Periodic Table, Bonding, Coordination, p-Block, Metallurgy" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">{item.t}</div>
                                        <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.s}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mathematics */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-amber-500/30 transition-all duration-500 group shadow-xl">
                            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-8 border border-amber-500/20 group-hover:scale-110 transition-transform">
                                <Calculator className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest border-b border-slate-800 pb-4">Mathematics</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Algebra", s: "Quadratic, Complex Nos, Matrices, Probability" },
                                    { t: "Calculus", s: "Limits, Diff & Integration, Diff Equations" },
                                    { t: "Geometry", s: "Straight Lines, Circles, Conics, 3D & Vectors" }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-xs font-black text-amber-400 uppercase tracking-widest mb-1">{item.t}</div>
                                        <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.s}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Process & Stats */}
            <section className="py-24 bg-slate-950 border-y border-slate-800 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Admission & Post-Exam</h2>
                            <div className="space-y-4">
                                {[
                                    "Result Declaration (CRL & Category Ranks)",
                                    "JoSAA Counselling Process",
                                    "Seat Allotment in 23 IITs",
                                    "Document Verification & Final Enrollment"
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:bg-slate-800 transition-colors group">
                                        <Award className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
                                        <span className="text-lg font-bold text-slate-300">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-indigo-600 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter">Why is it Tough?</h3>
                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <Zap className="w-6 h-6 shrink-0 mt-1" />
                                    <p className="font-bold">Deep conceptual clarity required – No rote learning possible.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Target className="w-6 h-6 shrink-0 mt-1" />
                                    <p className="font-bold">Multi-concept questions involving Physics + Maths together.</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 shrink-0 mt-1" />
                                    <p className="font-bold">High pressure: 360 marks approx but dynamic every year.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/20">
                                <div>
                                    <div className="text-4xl font-black">2.5 Lakh</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Eligible Candidates</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black">~17,000</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Total IIT Seats</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Participating Institutes */}
            <section className="py-24 bg-slate-900 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16 underline decoration-indigo-600 decoration-2 underline-offset-8">
                        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Top Participating IITs</h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6 max-w-5xl mx-auto">
                        {[
                            "IIT Bombay", "IIT Delhi", "IIT Madras", "IIT Kharagpur",
                            "IIT Kanpur", "IIT Roorkee", "IIT Guwahati", "IIT BHU"
                        ].map((iit, i) => (
                            <div key={i} className="px-8 py-4 bg-slate-950 border border-slate-800 rounded-2xl text-slate-300 font-black uppercase tracking-widest text-sm hover:border-indigo-500 hover:text-white transition-all shadow-xl">
                                {iit}
                            </div>
                        ))}
                        <div className="w-full text-center mt-8 text-slate-500 font-bold uppercase tracking-widest text-xs">...and 15 other Premium IITs</div>
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-600 to-blue-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_80px_rgba(79,70,229,0.3)] group">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase relative z-10 leading-none">
                            Ready for the <br /> Advanced Challenge?
                        </h2>
                        <p className="text-indigo-100 text-lg md:text-xl font-bold mb-12 max-w-2xl mx-auto relative z-10">
                            Our Elite Advanced Test Series is calibrated to match this exact toughness. Join the Top 1% league now.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                            <Link href="/engineering-exams/jee-advanced" className="px-12 py-5 bg-white text-indigo-700 font-black rounded-2xl text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest">
                                View Test Series <ArrowRight className="w-6 h-6 inline-block ml-2" />
                            </Link>
                            <Link href="/signup" className="px-12 py-5 bg-indigo-950 text-white border-2 border-indigo-400/30 font-black rounded-2xl text-xl hover:bg-indigo-900 transition-all uppercase tracking-widest">
                                Enroll Free Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

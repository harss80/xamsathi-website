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

export default function JEEMainSchedulePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black mb-6 rounded-full uppercase tracking-widest">
                            <Trophy className="w-4 h-4" /> Gateway to NITs, IIITs & GFTIs
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            JEE Main 2026: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Complete Roadmap & Guide</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-bold leading-relaxed">
                            Everything you need to know about India's biggest engineering entrance. From pattern to syllabus, stay ahead of the session.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                                <School className="w-5 h-5 text-blue-400" />
                                <span className="text-sm font-bold text-slate-300">Body: National Testing Agency (NTA)</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
                                <MonitorPlay className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm font-bold text-slate-300">Mode: Computer Based Test (CBT)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Info - What is JEE Main */}
            <section className="py-20 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative p-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                                <div className="flex items-center gap-4 mb-6 text-blue-400">
                                    <Info className="w-8 h-8" />
                                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter">What is JEE Main?</h2>
                                </div>
                                <p className="text-slate-300 font-medium leading-relaxed mb-6">
                                    JEE Main is the first stage for admission to IITs (via JEE Advanced) and the primary entrance for NITs, IIITs, and Centrally Funded Technical Institutes.
                                </p>
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest">Eligibility for:</h4>
                                    {[
                                        "National Institutes of Technology (NITs)",
                                        "Indian Institutes of Information Technology (IIITs)",
                                        "JEE Advanced (Top 2.5 Lakh candidates)",
                                        "State Government Funded Universities"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">Sessions & Timing</h3>
                                <p className="text-slate-400 font-medium mb-8">JEE Main is conducted twice a year to provide aspirants multiple opportunities.</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Attempts", value: "2 Sessions (Jan & April)", icon: Calendar },
                                    { label: "Duration", value: "3 Hours / 180 Mins", icon: Clock },
                                    { label: "Total Questions", value: "90 (75 to Attempt)", icon: BookOpen },
                                    { label: "Total Marks", value: "300 Marks", icon: Award },
                                ].map((item, i) => (
                                    <div key={i} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-colors">
                                        <item.icon className="w-5 h-5 text-blue-400 mb-3" />
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</div>
                                        <div className="text-lg font-black text-white mt-1 tracking-tight">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pattern & Marking Section */}
            <section className="py-20 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">NTA Marking Scheme</h2>
                            <p className="text-lg text-slate-400 font-bold mb-10 italic">Precision is key to clearing the high percentile cutoffs.</p>

                            <div className="space-y-4">
                                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between group hover:border-emerald-500/30 transition-all">
                                    <span className="text-lg font-bold text-white uppercase tracking-tight">Correct Answer</span>
                                    <span className="text-2xl font-black text-emerald-400">+4 Marks</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between group hover:border-rose-500/30 transition-all">
                                    <span className="text-lg font-bold text-white uppercase tracking-tight">Incorrect Answer</span>
                                    <span className="text-2xl font-black text-rose-500">-1 Mark</span>
                                </div>
                                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between group hover:border-slate-500">
                                    <span className="text-lg font-bold text-white uppercase tracking-tight">Unanswered</span>
                                    <span className="text-2xl font-black text-slate-500">0 Marks</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="bg-slate-950 rounded-[3rem] p-8 border border-slate-800 shadow-2xl relative">
                                <h4 className="text-xl font-black text-white uppercase tracking-widest mb-8 text-center">Section-wise Breakdown</h4>
                                <div className="space-y-6">
                                    {[
                                        { s: "Physics", mcq: 20, int: 10, target: 25 },
                                        { s: "Chemistry", mcq: 20, int: 10, target: 25 },
                                        { s: "Mathematics", mcq: 20, int: 10, target: 25 },
                                    ].map((sec, i) => (
                                        <div key={i} className="p-6 bg-slate-900 rounded-3xl border border-slate-800">
                                            <div className="flex justify-between items-center mb-4 text-blue-400">
                                                <span className="text-xl font-black">{sec.s}</span>
                                                <span className="px-3 py-1 bg-blue-500/10 rounded-lg text-xs font-black uppercase tracking-widest border border-blue-500/20">100 Marks</span>
                                            </div>
                                            <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
                                                <span>{sec.mcq} MCQs</span>
                                                <span>{sec.int} Integers (Any 5)</span>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="p-4 bg-emerald-600 rounded-2xl text-center text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-emerald-900/40">
                                        Total Questions to Answer: 75
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Syllabus Section */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] -mr-40 pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none px-4 py-2 border-x-8 border-blue-600 inline-block">Syllabus Overview</h2>
                        <p className="text-slate-500 font-black uppercase text-xs tracking-[0.5em] mt-6">Aligned with Latest 2026 Curriculum</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Physics */}
                        <div className="bg-slate-900/50 rounded-[2.5rem] border border-slate-800 p-8 hover:border-blue-500/30 transition-all group">
                            <Atom className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Physics</h3>
                            <div className="space-y-3 text-sm text-slate-400 font-medium">
                                <p>Kinematics & Dynamics</p>
                                <p>Rotational Motion</p>
                                <p>Thermodynamics & KTG</p>
                                <p>Electrostatics & Current</p>
                                <p>Magnetism & EMI</p>
                                <p>Optics & Modern Physics</p>
                            </div>
                        </div>

                        {/* Chemistry */}
                        <div className="bg-slate-900/50 rounded-[2.5rem] border border-slate-800 p-8 hover:border-emerald-500/30 transition-all group">
                            <Microscope className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Chemistry</h3>
                            <div className="space-y-3 text-sm text-slate-400 font-medium">
                                <p>Mole Concept & Bonding</p>
                                <p>Equilibrium & Kinetics</p>
                                <p>GOC & Hydrocarbons</p>
                                <p>S, P, D & F Block Elements</p>
                                <p>Alcohol, Phenol & Carbonyls</p>
                            </div>
                        </div>

                        {/* Maths */}
                        <div className="bg-slate-900/50 rounded-[2.5rem] border border-slate-800 p-8 hover:border-amber-500/30 transition-all group">
                            <Calculator className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Mathematics</h3>
                            <div className="space-y-3 text-sm text-slate-400 font-medium">
                                <p>Calculus (Diff & Integral)</p>
                                <p>Coordinate Geometry</p>
                                <p>Vectors & 3D Geometry</p>
                                <p>Algebra & Trig</p>
                                <p>Matrices & Determinants</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl group">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase relative z-10 leading-none">
                            Cracking JEE Main<br />Starts with Strategy.
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl font-bold mb-12 max-w-2xl mx-auto relative z-10">
                            Our Main Master Series is designed to boost your percentile by 30% through targeted analytics.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                            <Link href="/engineering-exams/jee-main" className="px-12 py-5 bg-white text-blue-700 font-black rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all uppercase tracking-widest">
                                Start Practice <ArrowRight className="w-6 h-6 inline-block ml-2" />
                            </Link>
                            <Link href="/signup" className="px-12 py-5 bg-slate-900 text-white border-2 border-slate-700/50 font-black rounded-2xl text-xl hover:bg-slate-800 transition-all uppercase tracking-widest">
                                Free Mock Test
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

"use client";
import React from "react";
import Link from "next/link";
import {
    Calendar, Clock, CheckCircle2, BookOpen, ShieldCheck, Trophy,
    Zap, Target, Brain, ArrowRight, Microscope, Atom, Calculator,
    Plus, HelpCircle, MonitorPlay, School, Info, Award, GraduationCap,
    Check, Sparkles, Timer, MapPin, CreditCard, ChevronRight, Laptop
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
                            <Trophy className="w-4 h-4" /> VIT VELLORE ADMISSIONS 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            VITEEE 2026: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Master Schedule & Guide</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-bold leading-relaxed">
                            Everything you need for VIT Vellore, Chennai, AP, and Bhopal. From the 125 Question pattern to the detailed 2026 roadmap.
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
                            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-purple-600 decoration-4 underline-offset-8">The VITEEE Protocol</h2>
                            <p className="text-slate-300 font-medium leading-relaxed mb-10">
                                VITEEE (Vellore Institute of Technology Engineering Entrance Examination) is for admission to various undergraduate programs at VIT Vellore, Chennai, AP, and Bhopal campuses.
                            </p>

                            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                                <div className="p-6 bg-slate-800/50 border-b border-slate-700">
                                    <h4 className="font-black text-white uppercase tracking-widest text-sm">Exam Weightage Matrix</h4>
                                </div>
                                <div className="p-6">
                                    <table className="w-full text-left">
                                        <thead className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                                            <tr><th className="pb-4">Section</th><th className="pb-4">Questions</th><th className="pb-4 text-right">Marks</th></tr>
                                        </thead>
                                        <tbody className="text-sm font-bold text-slate-300">
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Maths / Biology</td><td className="py-4">40</td><td className="py-4 text-right">160</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Physics</td><td className="py-4">35</td><td className="py-4 text-right">140</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Chemistry</td><td className="py-4">35</td><td className="py-4 text-right">140</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Aptitude</td><td className="py-4">10</td><td className="py-4 text-right">40</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">English</td><td className="py-4">05</td><td className="py-4 text-right">20</td></tr>
                                            <tr className="bg-purple-600/10 text-purple-400 font-black"><td className="py-4 px-2">Total</td><td className="py-4 px-2">125</td><td className="py-4 px-2 text-right">500</td></tr>
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
                                <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">Negative Marking Alert</h4>
                                <p className="font-bold text-sm leading-relaxed mb-4">VITEEE 2026 has introduced a strict negative marking protocol (-1 for incorrect). Precision is now more important than ever. Blind guessing and luck will no longer work.</p>
                                <div className="text-[10px] font-black uppercase tracking-widest border-t border-white/20 pt-4 animate-pulse">Updated for 2026 Standards</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📅 Important Dates */}
            <section className="py-20 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 underline decoration-purple-600 decoration-2 underline-offset-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Admissions Calendar 2026</h2>
                    </div>

                    <div className="max-w-4xl mx-auto bg-slate-950 p-8 md:p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-10 opacity-5 -mr-16 -mt-16"><Calendar className="w-64 h-64" /></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 relative z-10">
                            {[
                                { l: "Application Start", v: "Oct 24, 2025" },
                                { l: "Application Deadline", v: "March 31, 2026" },
                                { l: "Slot Booking (OTBS)", v: "April 2026" },
                                { l: "Hall Ticket Release", v: "April 2026" },
                                { l: "BITSAT Session 1 Exam", v: "April 28 – May 03, 2026", h: true },
                                { l: "Result Board", v: "May 2nd Week, 2026" },
                                { l: "Online Counselling", v: "May 2nd Week, 2026" }
                            ].map((item, i) => (
                                <div key={i} className={`flex justify-between items-center group/item ${item.h ? 'p-4 bg-purple-600/10 rounded-2xl border border-purple-500/20 col-span-1 md:col-span-2' : ''}`}>
                                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest group-hover/item:text-purple-400 transition-colors">{item.l}</span>
                                    <span className={`text-sm font-black ${item.h ? 'text-purple-400' : 'text-slate-300'}`}>{item.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 📚 Detailed Syllabus Section */}
            <section className="py-24 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none px-4 py-2 border-x-8 border-purple-600 inline-block">Syllabus Matrix</h2>
                        <p className="text-slate-500 font-black uppercase text-xs tracking-[0.5em] mt-6 leading-none">Vellore Approved Standard</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Physics */}
                        <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 p-8 hover:border-blue-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Atom className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Physics</h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Mechanics", d: "Statics, Kinematics, Dynamics, Gravitation." },
                                    { t: "Electricity", d: "Electrostatics, Current, EMI & AC." },
                                    { t: "Optics", d: "Ray and Wave Optics Master." },
                                    { t: "Modern Physics", d: "Nuclear, Atomic, Dual Nature, Semiconductors." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1 italic">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Chemistry */}
                        <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 p-8 hover:border-emerald-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Microscope className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Chemistry</h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Physical", d: "Atomic Structure, Bonding, Thermodynamics, Kinetics." },
                                    { t: "Inorganic", d: "p, d, f Block, Coordination Bio-elements." },
                                    { t: "Organic", d: "GOC, Hydrocarbons, Carbonyls, Bio-Polymers." },
                                    { t: "Industrial", d: "Applied environmental concepts." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1 italic">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Maths */}
                        <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 p-8 hover:border-purple-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-8 border border-purple-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Calculator className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Maths</h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Calculus", d: "Diff & Integral, Differential Equations." },
                                    { t: "Algebra", d: "Matrices, Complex Nos, Probability, Discrete." },
                                    { t: "Geometry", d: "Analytical Geometry 2D & 3D, Vector Algeb." },
                                    { t: "Trigonometry", d: "Trig and Applications." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-1 italic">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 💰 Registration & Eligibility */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                        <div className="bg-slate-950 p-10 rounded-[4rem] border border-slate-800 relative overflow-hidden">
                            <div className="absolute top-0 left-0 p-8 opacity-5 -scale-x-100"><CreditCard className="w-40 h-40" /></div>
                            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Registration Protocol</h3>
                            <div className="space-y-6 mb-10">
                                <div className="p-6 bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-between shadow-inner">
                                    <div>
                                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Standard Reg. Fee</div>
                                        <div className="text-3xl font-black text-white">INR 1,350</div>
                                    </div>
                                    <div className="px-3 py-1 bg-purple-600/20 text-purple-400 text-[10px] font-black rounded-lg uppercase tracking-widest">Fixed</div>
                                </div>
                                <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-between">
                                    <div>
                                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">NRI Candidates</div>
                                        <div className="text-3xl font-black text-white">USD 90</div>
                                    </div>
                                    <CreditCard className="w-8 h-8 text-slate-700" />
                                </div>
                            </div>
                            <Link href="/engineering-exams/viteee" className="w-full py-5 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-2xl block text-center text-xl shadow-xl shadow-purple-900/40 animate-pulse transition-all">Go back to VITEEE Series</Link>
                        </div>

                        <div>
                            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-blue-500 decoration-4 underline-offset-8">Eligibility Benchmarks</h2>
                            <div className="space-y-6">
                                {[
                                    { t: "PCM / PCB Aggregate", d: "Min. 60% for General; 50% for SC/ST, Jammu & Kashmir, and North-Eastern States." },
                                    { t: "Age Factor", d: "Must be born on or after July 1, 2004." },
                                    { t: "National Residency", d: "Indian nationals must appear for VITEEE for B.Tech admission." },
                                    { t: "Qualification Schooling", d: "10+2 Regular, Full-time schooling only. No distant learning." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-slate-950 rounded-2xl border border-slate-800 group hover:border-purple-500/20 transition-all">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20 font-black group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">{i + 1}</div>
                                        <div>
                                            <div className="text-xs font-black text-white uppercase tracking-widest mb-1 leading-none">{item.t}</div>
                                            <p className="text-xs text-slate-500 font-bold leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto bg-gradient-to-br from-purple-600 to-blue-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl group border border-purple-500/20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase relative z-10 leading-none underline decoration-blue-400 decoration-8 underline-offset-[12px]">Vellore is Calling.</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-10">
                            <Link href="/engineering-exams/viteee" className="px-12 py-5 bg-white text-purple-700 font-black rounded-2xl text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest">
                                View Master Pack <ArrowRight className="w-6 h-6 inline-block ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

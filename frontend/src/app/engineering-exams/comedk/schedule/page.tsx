"use client";
import React from "react";
import Link from "next/link";
import {
    Calendar, Clock, CheckCircle2, BookOpen, ShieldCheck, Trophy,
    Zap, Target, Brain, ArrowRight, Microscope, Atom, Calculator,
    Plus, HelpCircle, MonitorPlay, School, Info, Award, GraduationCap,
    Check, Sparkles, Timer, MapPin, CreditCard, ChevronRight, Building2,
    FlaskConical, ZapOff
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function COMEDKSchedulePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-rose-500/30">
            <Navbar />

            {/* 🔥 Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-black mb-6 rounded-full uppercase tracking-widest">
                            <Trophy className="w-4 h-4" /> COMEDK UGET 2026: Official Guide
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            COMEDK 2026: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400">Roadmap to Bangalore</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-bold leading-relaxed">
                            Entrance to 150+ Top Private Engineering Colleges in Karnataka including RVCE, MSRIT, and BMSCE.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 shadow-sm">
                                <Building2 className="w-5 h-5 text-rose-400" />
                                <span className="text-sm font-bold text-slate-300">Body: COMEDK Karnataka</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 shadow-sm">
                                <MonitorPlay className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm font-bold text-slate-300">Mode: 180 Mins | No Neg. Marking</span>
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
                            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-rose-600 decoration-4 underline-offset-8">The UGET 2026 Format</h2>
                            <p className="text-slate-300 font-medium leading-relaxed mb-6">
                                COMEDK (Consortium of Medical, Engineering, and Dental Colleges of Karnataka) conducts national-level entrance tests for undergraduate admissions.
                            </p>

                            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                                <div className="p-6 bg-slate-800/50 border-b border-slate-700">
                                    <h4 className="font-black text-white uppercase tracking-widest text-sm">Question Matrix</h4>
                                </div>
                                <div className="p-6">
                                    <table className="w-full text-left">
                                        <thead className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                                            <tr><th className="pb-4">Section</th><th className="pb-4">Questions</th><th className="pb-4 text-right">Duration</th></tr>
                                        </thead>
                                        <tbody className="text-sm font-bold text-slate-300">
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Mathematics</td><td className="py-4 font-black text-rose-400">60</td><td className="py-4 text-right text-slate-500 font-black uppercase text-xs">60 Mins</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Physics & Chemistry</td><td className="py-4 font-black text-blue-400">120</td><td className="py-4 text-right text-slate-500 font-black uppercase text-xs">120 Mins</td></tr>
                                            <tr className="bg-rose-600/10 text-rose-400 font-black"><td className="py-4 px-2 tracking-widest uppercase text-xs">Total Scale</td><td className="py-4 px-2">180</td><td className="py-4 px-2 text-right">180 Mks</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                                <Info className="w-4 h-4 shrink-0" /> One mark per correct answer. NO negative marking for wrong answers.
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { t: "Marking", v: "+1 Per Correct", i: Award, c: "text-emerald-400 shadow-sm" },
                                    { t: "Frequency", v: "Once a Year", i: Calendar, c: "text-blue-400 shadow-sm" },
                                    { t: "Penalty", v: "No Neg. Marking", i: ZapOff, c: "text-rose-400 shadow-sm" },
                                    { t: "Total Mks", v: "180 Marks Total", i: Target, c: "text-amber-400 shadow-sm" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-rose-500/30 transition-all">
                                        <stat.i className={`w-6 h-6 ${stat.c} mb-3`} />
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{stat.t}</div>
                                        <div className="text-lg font-black text-white mt-1 leading-tight">{stat.v}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-rose-600 to-amber-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform"><Sparkles className="w-32 h-32" /></div>
                                <h4 className="text-xl font-black uppercase mb-4 tracking-tighter text-left">The Tie-Breaker Edge</h4>
                                <p className="font-bold text-sm leading-relaxed mb-4">In case of equal scores, COMEDK follows the 'Least Negative Factor'—meaning the candidate with the fewest wrong attempts gets the higher rank. Even without negative marks, accuracy determines your RVCE selection.</p>
                                <div className="text-[10px] font-black uppercase tracking-widest border-t border-white/20 pt-4 animate-pulse">Official Tie-Breaking Rule 2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📅 Important Dates (2026) */}
            <section className="py-20 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 underline decoration-rose-600 decoration-2 underline-offset-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Official Calendar 2026</h2>
                    </div>

                    <div className="max-w-4xl mx-auto bg-slate-950 p-8 md:p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-10 opacity-5 -mr-16 -mt-16"><Calendar className="w-64 h-64" /></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 relative z-10">
                            {[
                                { l: "Application Start", v: "Feb 03, 2026" },
                                { l: "Official Mock Tests", v: "Feb 18, 2026" },
                                { l: "Application Deadline", v: "March 16, 2026" },
                                { l: "Admit Card Release", v: "April 29, 2026" },
                                { l: "UGET 2026 Exam", v: "Saturday, May 09, 2026", h: true },
                                { l: "Provisional Answer Key", v: "May 13, 2026" },
                                { l: "Result Declaration", v: "May 26, 2026" }
                            ].map((item, i) => (
                                <div key={i} className={`flex justify-between items-center group/item ${item.h ? 'p-4 bg-rose-600/10 rounded-2xl border border-rose-500/20 col-span-1 md:col-span-2' : ''}`}>
                                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest group-hover/item:text-rose-400 transition-colors uppercase">{item.l}</span>
                                    <span className={`text-sm font-black ${item.h ? 'text-rose-400 leading-none py-1' : 'text-slate-300'}`}>{item.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 🏫 Fees & Eligibility */}
            <section className="py-24 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                        <div className="bg-slate-900 p-10 rounded-[4rem] border border-slate-800 relative overflow-hidden">
                            <div className="absolute top-0 left-0 p-8 opacity-5 -scale-x-100 rotate-12"><CreditCard className="w-40 h-40" /></div>
                            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Budgeting & Fees</h3>
                            <div className="space-y-6 mb-10">
                                <div className="p-6 bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-between shadow-inner">
                                    <div>
                                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">COMEDK Individual</div>
                                        <div className="text-3xl font-black text-white">₹1,800 <span className="text-slate-700 text-sm font-bold">+ GST</span></div>
                                    </div>
                                    <div className="px-3 py-1 bg-rose-600/20 text-rose-400 text-[10px] font-black rounded-lg uppercase tracking-widest leading-none">CBT Exam</div>
                                </div>
                                <div className="p-6 bg-slate-900 rounded-3xl border border-rose-500/10 flex items-center justify-between">
                                    <div>
                                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">COMEDK + Uni-GAUGE</div>
                                        <div className="text-3xl font-black text-white">₹2,950</div>
                                    </div>
                                    <CreditCard className="w-8 h-8 text-slate-800" />
                                </div>
                            </div>
                            <Link href="/engineering-exams/comedk" className="w-full py-5 bg-rose-600 hover:bg-rose-500 text-white font-black rounded-2xl block text-center text-xl shadow-xl shadow-rose-900/40 transition-all font-black uppercase leading-none px-4">See Series Details</Link>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase underline decoration-rose-600 decoration-4 underline-offset-8">Eligibility Norms</h2>
                            <div className="space-y-5">
                                {[
                                    { t: "Min. Aggregate (Gen)", v: "45% in PCM from a recognized board." },
                                    { t: "Reserved Karnataka", v: "40% in PCM for SC/ST/OBC Karnataka students." },
                                    { t: "Compulsory Subjects", v: "Physics & Mathematics (English is Mandatory)." },
                                    { t: "Subject Substitutions", v: "Chemistry can be replaced by Computer Science/Electronics/Biology." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-slate-900 rounded-2xl border border-slate-800 group hover:border-rose-500/20 transition-all">
                                        <div className="w-10 h-10 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/20 font-black group-hover:bg-rose-600 group-hover:text-white transition-all shadow-inner">{i + 1}</div>
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
            <section className="py-24 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none px-4 py-2 border-x-8 border-rose-600 inline-block">Syllabus Matrix</h2>
                        <p className="text-slate-500 font-black uppercase text-xs tracking-[0.5em] mt-6 leading-none italic">33% Class 11 & 67% Class 12 weighting</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Physics */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-blue-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Atom className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Physics <span className="text-slate-600 text-xs">60 Qs</span></h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Mechanics", d: "Statics, Kinematics, Dynamics, Gravitation Fundamentals." },
                                    { t: "Electricity & Magn.", d: "Electrostatics, Current, EMI, Magnetic Effects." },
                                    { t: "Optics & Waves", d: "Ray and Wave Optics, Thermal Physics Laws." },
                                    { t: "Modern Physics", d: "Semiconductors, Atomic models, Nuclear concepts." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1 italic">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Chemistry */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-emerald-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <FlaskConical className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Chemistry <span className="text-slate-600 text-xs">60 Qs</span></h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Physical", d: "States of Matter, Atomic Struct, Thermodynamics, Kinetics." },
                                    { t: "Inorganic", d: "Class 12 Heavy Periodic Table, Coordination Compounds." },
                                    { t: "Organic", d: "Alcohols, Carbonyls, Amines, Basic GOC Drills." },
                                    { t: "Applied", d: "Polymers, Biomolecules, Chemistry in Every Day Life." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1 italic">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Maths */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-rose-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-8 border border-rose-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Calculator className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4">Maths <span className="text-slate-600 text-xs">60 Qs</span></h3>
                            <div className="space-y-6 flex-1">
                                {[
                                    { t: "Calculus", d: "Limits, Differential & Integral, Differential Eqns." },
                                    { t: "Algebra", d: "Complex Nos, Matrices, Probability, Seq & Series." },
                                    { t: "Geometry", d: "Analytical 2D & 3D, Vectors, Trigonometry." },
                                    { t: "Arithmetic", d: "Set Theory, Functions & Mathematical Logic." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1 italic">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🏫 Top Karnataka Colleges (Bangalore Elite) */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter underline decoration-rose-600 decoration-offset-8">Bangalore Elite-10</h2>
                        <p className="text-slate-500 font-black uppercase text-xs tracking-widest">Entry scores for these are strictly tracked in our mock series.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
                        {[
                            "RV College of Engg (RVCE)", "M.S. Ramaiah (MSRIT)", "BMS College (BMSCE)", "Dayananda Sagar (DSCE)", "BIT Bangalore",
                            "Nitte Meenakshi (NMIT)", "Sir MVIT", "SJB Institute", "Atria Institute", "PES University (EC)"
                        ].map((college, i) => (
                            <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col items-center text-center group hover:bg-slate-800 transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-white/5 text-slate-500 flex items-center justify-center mb-4 group-hover:text-rose-400 transition-colors font-black text-xs">{i + 1}</div>
                                <span className="text-xs font-black text-slate-300 uppercase tracking-tight">{college}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto bg-gradient-to-br from-rose-600 to-amber-700 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl group border border-rose-500/20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase relative z-10 leading-none underline decoration-amber-400 decoration-8 underline-offset-[16px]">Bangalore Entry Starts Here.</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-10">
                            <Link href="/engineering-exams/comedk" className="px-14 py-6 bg-white text-rose-700 font-black rounded-3xl text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest leading-none">
                                Start Training <ArrowRight className="w-8 h-8 inline-block ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

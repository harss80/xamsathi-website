"use client";
import React from "react";
import Link from "next/link";
import {
    Calendar, Clock, CheckCircle2, BookOpen, ShieldCheck, Trophy,
    Zap, Target, Brain, ArrowRight, Microscope, Atom, Calculator,
    Plus, HelpCircle, MonitorPlay, School, Info, Award, GraduationCap,
    Check, Sparkles, Timer, MapPin, CreditCard, ChevronRight, Building2,
    FlaskConical, ZapOff, TrendingUp, Lightbulb, Languages, Globe, Library
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function CUETSchedulePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
            <Navbar />

            {/* 🔥 Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-black mb-6 rounded-full uppercase tracking-widest">
                            <Library className="w-4 h-4" /> CUET UG 2026: Official Roadmap
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
                            NTA CUET 2026: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">Puri Detailed Information</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-bold leading-relaxed">
                            Comprehensive Roadmap for Undergraduate Admissions in Central, State, and Private Universities.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 shadow-sm">
                                <Building2 className="w-5 h-5 text-amber-400" />
                                <span className="text-sm font-bold text-slate-300">Body: NTA (National Testing Agency)</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 shadow-sm">
                                <MonitorPlay className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm font-bold text-slate-300">Mode: Online (CBT Based)</span>
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
                            <h2 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-amber-600 decoration-4 underline-offset-8">About the Exam</h2>
                            <p className="text-slate-300 font-medium leading-relaxed mb-6">
                                The Common University Entrance Test (CUET) is a national-level entrance exam for admission into undergraduate programs across numerous universities in India, including prestigious ones like DU, BHU, and JNU.
                            </p>

                            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                                <div className="p-6 bg-slate-800/50 border-b border-slate-700">
                                    <h4 className="font-black text-white uppercase tracking-widest text-sm text-left">NTA Paper Architecture</h4>
                                </div>
                                <div className="p-6">
                                    <table className="w-full text-left">
                                        <thead className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                                            <tr><th className="pb-4">Section</th><th className="pb-4">Coverage</th><th className="pb-4 text-right">Attempt</th></tr>
                                        </thead>
                                        <tbody className="text-sm font-bold text-slate-300">
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Section I</td><td className="py-4 font-black text-amber-400">Language Test</td><td className="py-4 text-right text-slate-500 font-black uppercase text-xs">40 / 50 Qs</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Section II</td><td className="py-4 font-black text-blue-400">Domain Specific</td><td className="py-4 text-right text-slate-500 font-black uppercase text-xs">40 / 50 Qs</td></tr>
                                            <tr className="border-b border-slate-800/50"><td className="py-4 font-black">Section III</td><td className="py-4 font-black text-emerald-400">General Test (GAT)</td><td className="py-4 text-right text-slate-500 font-black uppercase text-xs">50 / 60 Qs</td></tr>
                                            <tr className="bg-amber-600/10 text-amber-400 font-black"><td className="py-4 px-2 tracking-widest uppercase text-xs">Single Mark</td><td className="py-4 px-2">+5 per Correct</td><td className="py-4 px-2 text-right">MCQ Only</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                                <Info className="w-4 h-4 shrink-0" /> One mark (-1) is deducted for every incorrect response. Precision is absolute for high percentile.
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                {[
                                    { t: "Total Marks", v: "250 Per Sub.", i: Trophy, c: "text-emerald-400 shadow-sm" },
                                    { t: "Frequency", v: "Once a Year", i: Calendar, c: "text-blue-400 shadow-sm" },
                                    { t: "Level", v: "Class 12 NCERT", i: GraduationCap, c: "text-amber-400 shadow-sm" },
                                    { t: "Marking", v: "+5 Correct / -1 Wrong", i: Award, c: "text-amber-400 shadow-sm" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-amber-500/30 transition-all">
                                        <stat.i className={`w-6 h-6 ${stat.c} mb-3`} />
                                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{stat.t}</div>
                                        <div className="text-lg font-black text-white mt-1 leading-tight">{stat.v}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform"><Sparkles className="w-32 h-32" /></div>
                                <h4 className="text-xl font-black uppercase mb-4 tracking-tighter text-left">The NTA Advantage</h4>
                                <p className="font-bold text-sm leading-relaxed mb-4">CUET 2026 allows you to choose up to 5 subjects. This multidisciplinary flexibility allows you to apply for Humanities, Commerce, and Science programs simultaneously.</p>
                                <div className="text-[10px] font-black uppercase tracking-widest border-t border-white/20 pt-4 animate-pulse italic">Official Program Policy 2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 📅 Important Dates (2026 Calendar) */}
            <section className="py-20 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 underline decoration-amber-600 decoration-2 underline-offset-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Official Calendar 2026</h2>
                    </div>

                    <div className="max-w-4xl mx-auto bg-slate-950 p-8 md:p-12 rounded-[3.5rem] border border-slate-800 shadow-2xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-10 opacity-5 -mr-16 -mt-16"><Calendar className="w-64 h-64" /></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 relative z-10">
                            {[
                                { l: "Application Start", v: "January 03, 2026" },
                                { l: "Re-opened window", v: "Feb 23 - Feb 26, 2026" },
                                { l: "Admit Card Release", v: "Expected May 05, 2026" },
                                { l: "Examination Dates", v: "May 11 - May 31, 2026", h: true },
                                { l: "Provisional Keys", v: "June 1st Week 2026" },
                                { l: "Result Declaration", v: "June 2026" },
                                { l: "Counselling Starts", v: "July 2026 Across Units" }
                            ].map((item, i) => (
                                <div key={i} className={`flex justify-between items-center group/item ${item.h ? 'p-4 bg-amber-600/10 rounded-2xl border border-amber-500/20 col-span-1 md:col-span-2' : ''}`}>
                                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest group-hover/item:text-amber-400 transition-colors uppercase text-left">{item.l}</span>
                                    <span className={`text-sm font-black text-right ${item.h ? 'text-amber-400 leading-none py-1' : 'text-slate-300'}`}>{item.v}</span>
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
                            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter text-left">Budgeting & Fees</h3>
                            <div className="space-y-6 mb-10 text-left">
                                <div className="p-6 bg-slate-950 rounded-3xl border border-slate-800 flex items-center justify-between shadow-inner">
                                    <div>
                                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">General (Up to 3 Subs)</div>
                                        <div className="text-3xl font-black text-white">₹1,000 <span className="text-slate-700 text-sm font-bold">+ Extras</span></div>
                                    </div>
                                    <div className="px-3 py-1 bg-amber-600/20 text-amber-400 text-[10px] font-black rounded-lg uppercase tracking-widest leading-none">CBT Fee</div>
                                </div>
                                <div className="p-6 bg-slate-900 rounded-3xl border border-amber-500/10 flex items-center justify-between shadow-inner">
                                    <div>
                                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">SC / ST / OBC / Third Gender</div>
                                        <div className="text-3xl font-black text-white">₹800 - ₹900</div>
                                    </div>
                                    <CreditCard className="w-8 h-8 text-slate-800" />
                                </div>
                                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800/50">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Additional Subject Charge: ₹400 (Gen) | ₹350 (Resv) per subject.</p>
                                </div>
                            </div>
                            <Link href="/entrance-exams/cuet" className="w-full py-5 bg-amber-600 hover:bg-amber-500 text-white font-black rounded-2xl block text-center text-xl shadow-xl shadow-amber-900/40 transition-all font-black uppercase leading-none px-4">See Prep Series</Link>
                        </div>

                        <div className="space-y-8 text-left">
                            <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase underline decoration-amber-600 decoration-4 underline-offset-8">Critical Notes</h2>
                            <div className="space-y-5">
                                {[
                                    { t: "Eligibility Bar", v: "Class 12 Passed or Appearing. No Age Limit exists for CUET UG." },
                                    { t: "Language Choice", v: "At least one language paper is mandatory for most university programs." },
                                    { t: "Subject Mapping", v: "Ensure your selected CUET subjects align with the university's specific criteria." },
                                    { t: "Counselling Gate", v: "Each university (DU/BHU/JNU) conducts its own independent counselling process." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-slate-900 rounded-2xl border border-slate-800 group hover:border-amber-500/20 transition-all">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20 font-black group-hover:bg-amber-600 group-hover:text-white transition-all shadow-inner">{i + 1}</div>
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
            <section className="py-24 bg-slate-900 bg-opacity-50 border-b border-slate-800 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none px-4 py-2 border-x-8 border-amber-600 inline-block">Syllabus Matrix</h2>
                        <p className="text-slate-500 font-black uppercase text-xs tracking-[0.5em] mt-6 leading-none italic">"NCERT Class 12 Core Subject Mapping"</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Science Domains */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-blue-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Atom className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4 text-left">Science <span className="text-slate-600 text-xs">Phy / Che / Mat</span></h3>
                            <div className="space-y-6 flex-1 text-left">
                                {[
                                    { t: "Physics", d: "Electrostatics, Optics, Dual Nature, Semiconductors (NCERT 12)." },
                                    { t: "Chemistry", d: "Solutions, Kinetics, p/d/f-Blocks, Organic Name Reactions." },
                                    { t: "Biology", d: "Genetics, Ecology, Biotechnology, Human Health." },
                                    { t: "Engineering Graphics", d: "Isometric Projections, Machine Parts, CAD Basics." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1 italic leading-none">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Humanities & Commerce */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-emerald-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4 text-left">Commerce / Arts <span className="text-slate-600 text-xs">Core</span></h3>
                            <div className="space-y-6 flex-1 text-left">
                                {[
                                    { t: "Economics", d: "Macro & Micro-economics, Development Studies." },
                                    { t: "Accountancy", d: "Partnership, Depreciation, Cash Flow Analysis." },
                                    { t: "Pol Science", d: "Contemporary World & Indian Politics Patterns." },
                                    { t: "History", d: "Ancient, Mediaeval & Modern Themes in Indian History." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1 italic leading-none">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* General Test & Language */}
                        <div className="bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 hover:border-amber-500/30 transition-all group shadow-xl h-full flex flex-col">
                            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-8 border border-amber-500/20 group-hover:scale-110 transition-transform shadow-inner">
                                <Languages className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-800 pb-4 text-left">Logic / Lang <span className="text-slate-600 text-xs">General</span></h3>
                            <div className="space-y-6 flex-1 text-left">
                                {[
                                    { t: "Language Test", d: "Comprehension, Grammar, Synonym, Antonym Drills." },
                                    { t: "General Awareness", d: "Static GK, Awards, National Events, Sports Profile." },
                                    { t: "Reasoning", d: "Analytical, Logical & Mental Ability Patterns." },
                                    { t: "Numerical Ability", d: "Standard Aptitude up to Class 8-10 level Math." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1 italic leading-none">{item.t}</div>
                                        <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🏫 Universities Tiering */}
            <section className="py-24 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 text-left">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter uppercase underline decoration-amber-600 decoration-4 underline-offset-8 leading-none">The Ivy Tier</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { c: "University of Delhi (DU)", r: "St. Stephens, SRCC, Hindu", i: Globe, cl: "text-amber-400" },
                                    { c: "Banaras Hindu Univ. (BHU)", r: "Inst. of Science, Arts", i: School, cl: "text-blue-400" },
                                    { c: "JNU New Delhi", r: "Foreign Languages Experts", i: Languages, cl: "text-cyan-400" },
                                    { c: "Jamia Millia (JMI)", r: "Top Mass Comm & Science", i: Library, cl: "text-indigo-400" }
                                ].map((col, i) => (
                                    <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl group hover:border-amber-500/20 transition-all flex flex-col items-start shadow-xl">
                                        <col.i className={`w-6 h-6 ${col.cl} mb-4`} />
                                        <div className="text-sm font-black text-white mb-1 leading-none">{col.c}</div>
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">{col.r}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-slate-900 p-10 rounded-[4rem] border border-slate-800 relative z-10 group overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform"><TrendingUp className="w-48 h-48" /></div>
                                <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter text-left">Prep Strategy Framework</h3>
                                <div className="space-y-6 text-left">
                                    {[
                                        { t: "Step 1: NCERT 12", d: "CUET Domain Subject syllabus is exactly NCERT Class 12. Don't waste time on Class 11." },
                                        { t: "Step 2: GAT Stamina", d: "General Test requires speed. Practice 60 Qs in 60 mins drills on our simulator." },
                                        { t: "Step 3: Pattern Mastery", d: "Learn how NTA uses tricky multiple choice options in Language & Logical sections." },
                                        { t: "Step 4: Mocks", d: "Full mocks under exact CBT environment provided by Xamsathi Prime Elite." }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-amber-600/20 text-amber-400 border border-amber-500/20 flex items-center justify-center font-black text-[10px] shrink-0">{i + 1}</div>
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
                    <div className="max-w-6xl mx-auto bg-gradient-to-br from-amber-600 to-orange-800 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl group border border-amber-500/20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase relative z-10 leading-none underline decoration-white decoration-8 underline-offset-[16px]">Secure Your <br /> DU / BHU Admission.</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-10">
                            <Link href="/entrance-exams/cuet" className="px-14 py-6 bg-white text-orange-700 font-black rounded-3xl text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest leading-none">
                                Go to Test Series <ArrowRight className="w-8 h-8 inline-block ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

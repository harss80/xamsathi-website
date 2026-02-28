"use client";
import React from "react";
import Link from "next/link";
import {
    Building2, Search, Filter, BookOpen, Users, Star, ArrowRight,
    ShieldCheck, Microscope, HeartPulse, Dna, Trophy,
    CheckCircle2, MonitorPlay, Sparkles, Zap, Brain, Activity, Target
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function MedicalSeriesPage() {
    const series = [
        {
            id: "mock-ninja",
            title: "Mock Ninja Series",
            desc: "Classic set of 100+ high-fidelity mock papers. Focus only on testing and speed building.",
            tests: 100,
            users: "1.2 Lakh+",
            tag: "Most Popular",
            link: "/checkout?plan=medical-lite",
            color: "text-blue-400",
            price: "₹499"
        },
        {
            id: "autogen-matrix",
            title: "The Auto-Gen Matrix",
            desc: "Mocks + AI-Driven Question Auto-Generator. Unique papers generated for your weak areas every day.",
            tests: "Unlimited",
            users: "85k+",
            tag: "Recommended",
            link: "/checkout?plan=medical-pro",
            color: "text-emerald-400",
            price: "₹1499"
        },
        {
            id: "ranker-legend",
            title: "The Ranker's Legend",
            desc: "The ultimate best series. Mocks, Auto-Gen, Video Solutions, and 1-on-1 Medical Mentorship.",
            tests: "Elite Access",
            users: "40k+",
            tag: "Extreme",
            link: "/checkout?plan=medical-prime",
            color: "text-amber-400",
            price: "₹1999"
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
            <Navbar />

            <div className="pt-32 pb-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black mb-6 uppercase tracking-widest">
                            <Sparkles className="w-4 h-4" /> Three Elite Series Available
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                            Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 uppercase">Success Series</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
                            Choose the perfect tier for your preparation. From basic mocks to AI-driven auto-generated question matrices.
                        </p>

                        {/* Search & Filter Bar */}
                        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto shadow-2xl rounded-2xl overflow-hidden p-1 bg-slate-800/30 backdrop-blur-md border border-slate-700">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Search series by name..."
                                    className="w-full bg-transparent border-none py-4 pl-12 pr-4 text-slate-200 focus:ring-0 font-medium placeholder:text-slate-500"
                                />
                            </div>
                            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 uppercase text-sm tracking-widest">
                                Search Hub
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {series.map((item) => (
                            <Link href={item.link} key={item.id} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 hover:border-emerald-500/50 hover:bg-slate-800/40 transition-all duration-500 relative overflow-hidden shadow-2xl">

                                {item.tag && (
                                    <span className={`absolute top-6 right-8 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border bg-slate-950/50 ${item.id === 'autogen-matrix' ? 'border-emerald-500/20 text-emerald-400' : 'border-blue-500/20 text-blue-400'}`}>
                                        {item.tag}
                                    </span>
                                )}

                                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner border border-slate-700 group-hover:border-emerald-500/30">
                                    <Activity className={`w-8 h-8 ${item.color}`} />
                                </div>

                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors tracking-tight uppercase leading-none">{item.title}</h3>
                                </div>
                                <p className="text-slate-500 font-black uppercase text-[10px] tracking-[0.2em] mb-4 italic">{item.price} Pack</p>
                                <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-1 text-sm">{item.desc}</p>

                                <div className="mt-auto space-y-6">
                                    <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-300">
                                        <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 shadow-sm">
                                            <Target className="w-4 h-4 text-emerald-400" /> {item.tests} Tests
                                        </div>
                                        <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 shadow-sm">
                                            <Users className="w-4 h-4 text-blue-400" /> {item.users}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between group-hover:border-emerald-500/20 transition-colors">
                                        <span className="text-sm font-black uppercase tracking-widest text-slate-300 group-hover:text-emerald-400 transition-colors">Unlock Series</span>
                                        <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all shadow-xl">
                                            <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trust Section */}
            <section className="py-24 bg-slate-950 border-t border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto bg-gradient-to-tr from-emerald-600 to-teal-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <Zap className="w-48 h-48" />
                        </div>
                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Ready for AI-Powered Testing?</h2>
                            <p className="text-lg font-bold text-emerald-50 opacity-90 mb-10 leading-relaxed">
                                Join thousands of medical students who are already using the Auto-Gen Matrix to solve unique, daily-generated questions based on their exam patterns.
                            </p>
                            <Link href="/signup" className="px-12 py-6 bg-white text-emerald-800 font-black rounded-[2rem] text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest leading-none">
                                Get Your Elite Pass <ArrowRight className="w-6 h-6 inline-block ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

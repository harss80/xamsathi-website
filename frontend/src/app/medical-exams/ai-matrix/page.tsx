"use client";
import React from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
    ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
    Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X,
    ZapOff, Timer, GraduationCap, ChevronRight, School, Laptop, Microscope,
    MapPin, Building2, FlaskConical, TrendingUp, Search, Globe, Languages,
    Library, FileText, Award, CreditCard, Info, HeartPulse, Dna, Activity, ListCheck, Flame, Boxes
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AIMatrixProPage() {
    const aiCapabilities = [
        {
            title: "Dynamic Pattern Recognition",
            desc: "Hamara AI engine aapki solve karne ki speed aur accuracy pattern ko analyse karta hai real-time me.",
            icon: Brain,
            color: "text-emerald-400"
        },
        {
            title: "Weak-Area Prediction",
            desc: "Predictive analytics jo identify krti hai ki aapka 'Anatomy' block weak hai ya 'Organic Synthesis'.",
            icon: Target,
            color: "text-blue-400"
        },
        {
            title: "Unlimited Auto-Generated Tests",
            desc: "Har subah ek naya mock paper jo strictly un topics par focus karega jisme aapne kal galti ki thi.",
            icon: Zap,
            color: "text-amber-400"
        }
    ];

    const syllabusCoverage = [
        {
            subject: "Biology Matrix",
            blocks: ["Genetics AI Path", "Human Physiology Logic", "Cell Bio Optimization", "Plant Metabolism Matrix"]
        },
        {
            subject: "Physics Engine",
            blocks: ["Mechanics Simulation", "Electrodynamics Logic", "Optics Analysis", "Modern Physics Core"]
        },
        {
            subject: "Chemistry Synthesis",
            blocks: ["Organic Logic Flow", "Inorganic Memory Matrix", "Physical Chemistry Calculus"]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
            <Navbar />

            {/* 🤖 Professional AI Hero (Clean Design, No Glow Blobs) */}
            <section className="pt-32 pb-20 relative border-b border-slate-900 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
                                <Sparkles className="w-3.5 h-3.5" /> AI-Driven Learning System
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
                                AI-Matrix <br />
                                <span className="text-emerald-500">Pro Evolution</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 font-bold mb-10 leading-relaxed max-w-xl opacity-80">
                                Mere mocks nahi, ye ek evolving intelligence hai. Aapki galtiyon se sikhkar aapko prepare karata hai NTA ke tough level ke liye.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/checkout?plan=medical-pro" className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl transition-all shadow-xl text-xl active:scale-95 group uppercase tracking-widest flex items-center justify-center gap-3">
                                    Enrol ₹1,499 Pack <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">AI Agent Active</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {aiCapabilities.map((cap, i) => (
                                <div key={i} className={`p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-emerald-500/40 transition-all ${i === 2 ? 'md:col-span-2 bg-gradient-to-r from-slate-900 to-emerald-950/20' : ''}`}>
                                    <cap.icon className={`w-8 h-8 ${cap.color} mb-6`} />
                                    <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tight">{cap.title}</h4>
                                    <p className="text-sm text-slate-500 font-bold leading-relaxed">{cap.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 📊 Matrix Content Breakdown */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">The Intelligence Hub</h2>
                        <div className="h-1 w-24 bg-emerald-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {syllabusCoverage.map((item, i) => (
                            <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-[2rem] p-10 hover:bg-slate-900 transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 -mr-8 -mt-8"><Boxes className="w-32 h-32" /></div>
                                <h3 className="text-xl font-black text-white mb-8 uppercase tracking-tighter border-b border-white/5 pb-4 flex items-center justify-between">
                                    {item.subject} <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                </h3>
                                <ul className="space-y-4">
                                    {item.blocks.map((block, j) => (
                                        <li key={j} className="flex gap-3 text-sm font-bold text-slate-400 group-hover:text-slate-200 transition-colors">
                                            <div className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 text-center text-[10px] flex items-center justify-center border border-emerald-500/20 shrink-0 mt-0.5">{j + 1}</div>
                                            {block}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 📋 Responsive Testing Grid */}
            <section className="py-24 bg-slate-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { t: "Unlimited Mocks", v: "Hamara AI engine kabhi paper khatam nahi hone deta.", i: Infinity },
                                    { t: "Auto-Evaluation", v: "Sirf answer nahi, detailed micro-analytics reports.", i: BarChart3 },
                                    { t: "All India Benchmarking", v: "Compare yourself with 85k Pro users.", i: Users },
                                    { t: "Predictive Score", v: "Forecast your NEET 2026 score based on data.", i: Trophy }
                                ].map((box, i) => (
                                    <div key={i} className="p-8 bg-slate-950 border border-slate-800 rounded-3xl hover:border-emerald-500/30 transition-all shadow-xl group">
                                        <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-6 border border-slate-800 group-hover:bg-emerald-600 transition-all group-hover:text-white text-emerald-400">
                                            {typeof box.i === 'string' ? box.i : <box.i className="w-6 h-6" />}
                                        </div>
                                        <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tight italic">{box.t}</h4>
                                        <p className="text-xs font-bold text-slate-500 leading-relaxed">{box.v}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-[1.1]">Adaptive <br /> <span className="text-emerald-500">Auto-Gen</span> Feedback</h2>
                            <p className="text-lg text-slate-400 mb-8 font-bold leading-relaxed opacity-80">
                                Elite Pro users report a 40% faster improvement in weak chapters because our system doesn't let you ignore them.
                            </p>
                            <ul className="space-y-4">
                                {["Predictive Difficulty Level", "Dynamic Solution Generation", "AIIMS Focused Logic Block", "Rationalized Syllabus Only"].map((f, i) => (
                                    <li key={i} className="flex items-center gap-4 text-sm font-black text-slate-300 uppercase tracking-widest bg-slate-950/50 p-4 border border-slate-800 rounded-2xl">
                                        <ShieldCheck className="w-5 h-5 text-emerald-500" /> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🎯 Comparison Mini Section */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tighter">Ready for the Matrix?</h3>
                            <p className="text-slate-500 font-bold mb-0">Join 85,000+ serious medical students using elite AI testing.</p>
                        </div>
                        <Link href="/checkout?plan=medical-pro" className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl text-xl shadow-xl transition-all active:scale-95 uppercase tracking-widest shrink-0">
                            Enrol Now ₹1,499
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Dummy Icon mapping fix for some lucide issues if any or missing
function Infinity({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 12c-2-2.7-5.3-4.3-8.8-4C1.5 8.1 0 9.7 0 11.8s1.5 3.7 3.2 3.9c3.5.3 6.8-1.3 8.8-4 2 2.7 5.3 4.3 8.8 4 1.7-.2 3.2-1.8 3.2-3.9s-1.5-3.7-3.2-3.9c-3.5-.3-6.8 1.3-8.8 4Z" />
        </svg>
    );
}

"use client";
import React from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
    ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
    Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X,
    ZapOff, Timer, GraduationCap, ChevronRight, School, Laptop, Microscope,
    MapPin, Building2, FlaskConical, TrendingUp, Search, Globe, Languages,
    Library, FileText, Award, CreditCard, Info, HeartPulse, Dna, Activity, ListCheck, Flame,
    MessageSquare, Video, ShieldAlert
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function MedicalLegendUltraPage() {
    const eliteFeatures = [
        {
            title: "1-on-1 Medical Mentorship",
            desc: "Direct support from MBBS students and rankers. Personalized study plans and weekly goal setting.",
            icon: Users,
            color: "text-amber-400"
        },
        {
            title: "Clinical Level Video Solutions",
            desc: "Every single mock question explained with deep clinical context and short-trick logic by experts.",
            icon: Video,
            color: "text-blue-400"
        },
        {
            title: "Lifetime Series Access",
            desc: "Jab tak aapka NEET/AIIMS clear nahi hota, tab tak app aur dashboard ka full unlimited access.",
            icon: Lock,
            color: "text-emerald-400"
        },
        {
            title: "Priority Doubt Solving",
            desc: "Get your complex Physics or Org-Chem doubts solved within 2 hours by our dedicated expert pool.",
            icon: MessageSquare,
            color: "text-rose-400"
        }
    ];

    const packageComparison = [
        { label: "Foundation Series Mocks", legend: true, pro: true, lite: true },
        { label: "AI-Matrix Auto-Generated Tests", legend: true, pro: true, lite: false },
        { label: "Predictive Analytics Engine", legend: true, pro: true, lite: false },
        { label: "Video Solutions Hub", legend: true, pro: false, lite: false },
        { label: "1-on-1 Ranker Mentorship", legend: true, pro: false, lite: false },
        { label: "Exclusive Biology Formulas", legend: true, pro: true, lite: true }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
            <Navbar />

            {/* 🏆 Legend Hero (Clean, Premium, Elite) */}
            <section className="pt-32 pb-24 relative bg-slate-950 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black mb-8 uppercase tracking-[0.3em] shadow-xl">
                        <Trophy className="w-3.5 h-3.5" /> Elite Topper's Cockpit
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-none italic underline decoration-amber-600 decoration-offset-[16px] decoration-8">
                        Medical Legend <br />
                        <span className="text-amber-500">Ultra Elite</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 mb-12 font-bold leading-relaxed max-w-2xl mx-auto opacity-70">
                        The absolute pinnacle of preparation. Combining AI Intelligence with human mentorship for 100% GMC selection assurance.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/checkout?plan=medical-prime" className="px-14 py-6 bg-amber-600 hover:bg-amber-500 text-slate-950 font-black rounded-2xl transition-all shadow-2xl shadow-amber-900/40 text-2xl active:scale-95 group uppercase tracking-widest flex items-center gap-3">
                            Enrol Legend Hub ₹1,999 <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-3 px-8 py-5 bg-slate-900 border border-slate-800 rounded-2xl">
                            <span className="text-xl font-black text-amber-400 uppercase italic">Limited 500 Seats</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🚀 Elite Features Grid */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {eliteFeatures.map((feat, i) => (
                            <div key={i} className="bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-800 hover:border-amber-500/30 transition-all group overflow-hidden relative">
                                <feat.icon className={`w-12 h-12 ${feat.color} mb-8 mb-8 group-hover:scale-110 transition-transform`} />
                                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight italic">{feat.title}</h4>
                                <p className="text-sm text-slate-500 font-bold leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 📊 Comprehensive Comparison Table */}
            <section className="py-24 bg-slate-900 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16 underline decoration-slate-800 decoration-offset-[16px]">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">Strategic Feature Matrix</h2>
                    </div>

                    <div className="max-w-5xl mx-auto bg-slate-950 border border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-800 bg-slate-900/50">
                                    <th className="p-8 text-[10px] font-black text-slate-500 uppercase tracking-widest">Capabilities</th>
                                    <th className="p-8 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">Lite Pack</th>
                                    <th className="p-8 text-center text-[10px] font-black text-emerald-400 uppercase tracking-widest">Pro AI</th>
                                    <th className="p-8 text-center text-[10px] font-black text-amber-400 uppercase tracking-widest bg-amber-500/5 shadow-inner">Ultra Legend</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-900">
                                {packageComparison.map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                                        <td className="p-8 font-black text-slate-300 uppercase tracking-tight italic text-sm">{row.label}</td>
                                        <td className="p-8 text-center">{row.lite ? <CheckCircle2 className="w-5 h-5 text-slate-600 mx-auto" /> : <X className="w-5 h-5 text-rose-800 mx-auto opacity-30" />}</td>
                                        <td className="p-8 text-center">{row.pro ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto shadow-emerald-500/20" /> : <X className="w-5 h-5 text-rose-800 mx-auto opacity-30" />}</td>
                                        <td className="p-8 text-center bg-amber-500/5">{row.legend ? <Trophy className="w-6 h-6 text-amber-500 mx-auto fill-amber-500/10" /> : <X className="w-5 h-5 text-rose-800 mx-auto opacity-30" />}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 📋 Final Assurance Block */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-6xl mx-auto bg-gradient-to-br from-amber-600 to-orange-900 rounded-[4rem] p-12 md:p-24 text-center text-slate-950 relative overflow-hidden shadow-2xl group border-t-4 border-amber-300">
                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform"><Trophy className="w-64 h-64 text-white" /></div>
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase relative z-10 italic leading-none underline decoration-slate-950 decoration-offset-[16px] decoration-8">Secure Your GMC <br /> Selection Today.</h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-10">
                            <Link href="/checkout?plan=medical-prime" className="px-16 py-8 bg-slate-950 text-amber-500 font-black rounded-3xl text-3xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-[0.2em] leading-none outline outline-8 outline-slate-950/20">
                                Yes, Enrol Now <ArrowRight className="w-8 h-8 inline-block ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

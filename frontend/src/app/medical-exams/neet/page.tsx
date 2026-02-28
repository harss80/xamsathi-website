"use client";
import React from "react";
import Link from "next/link";
import {
  Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
  ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
  Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X,
  ZapOff, Timer, GraduationCap, ChevronRight, School, Laptop, Microscope,
  MapPin, Building2, FlaskConical, TrendingUp, Search, Globe, Languages,
  Library, FileText, Award, CreditCard, Info, HeartPulse, Dna, Activity
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function NEETExamPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 font-sans">
      <Navbar />

      {/* 🔥 Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 text-left">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-black mb-8 uppercase tracking-widest shadow-sm">
                <Trophy className="w-4 h-4" /> NTA NEET UG 2026 Core Simulator
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Score <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 uppercase">720/720</span> <br />
                with Xamsathi Elite
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl lg:mx-0 mx-auto font-bold leading-relaxed">
                Curated Mock Papers with AI-Driven Question Generation. Strictly aligned with NTA NEET UG 2026 Core Patterns.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
                <Link href="/dashboard/test-series/neet-free" className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl shadow-lg shadow-emerald-500/40 active:scale-95 group">
                  <Activity className="w-6 h-6 text-white group-hover:animate-pulse" /> Try Free Mock
                </Link>
                <Link href="#pricing" className="px-10 py-5 bg-slate-950 border-2 border-slate-800 hover:border-slate-600 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl active:scale-95 group">
                  <Sparkles className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" /> View Elite Packs
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 border-t border-slate-800/50 pt-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800">
                    <Users className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-black text-white leading-none">8 Lakh+</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Medical Aspirants</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-black text-white leading-none">99.9%ile</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Success Aim</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[3.5rem] p-8 shadow-2xl relative group">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
                <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tighter italic">
                  <HeartPulse className="w-6 h-6 text-emerald-400" /> NTA Quick Facts
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Conducting Body", val: "NTA (Medical Division)", i: Building2, c: "text-blue-400 shadow-sm" },
                    { label: "Exam Pattern", val: "Physics + Chemistry + Biology", i: Microscope, c: "text-emerald-400 shadow-sm" },
                    { label: "Marking Scheme", val: "+4 Correct | -1 Negative", i: Award, c: "text-amber-400 shadow-sm" },
                    { label: "Platform", val: "Xamsathi CBT Simulator", i: MonitorPlay, c: "text-rose-400 shadow-sm" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800/50 hover:bg-slate-900 transition-colors group/item shadow-inner">
                      <div className={`w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5 ${item.c}`}>
                        <item.i className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.15em] leading-none mb-1.5">{item.label}</p>
                        <p className="text-sm font-black text-slate-200">{item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🥈 Pricing & Series Section (The Core Request) */}
      <section id="pricing" className="py-24 bg-slate-900 border-b border-slate-800 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20 underline decoration-emerald-800 decoration-8 underline-offset-[16px]">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-none italic">Choose Your Victory Plan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">

            {/* Plan 1 - 499 (Mock Papers Only) */}
            <div className="bg-slate-950 border border-slate-800 rounded-[3rem] p-10 hover:border-slate-700 transition-all shadow-lg relative h-full flex flex-col group">
              <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-2 bg-slate-800 text-slate-400 text-[10px] font-black rounded-full uppercase tracking-[0.3em] border border-slate-700 shadow-xl">🥉 Starter</div>
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Pure Mock Lite</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white tracking-tighter">₹499</span>
                <span className="text-slate-600 font-bold text-sm uppercase">/ Annual</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                {[
                  "50+ Premium Mock Papers",
                  "Strict NTA NEET Pattern",
                  "Complete Solution PDFs",
                  "Basic All India Ranking",
                  "6 Months Full Validity"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400 text-sm font-bold">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 shadow-inner" /> {feature}
                  </div>
                ))}
                <div className="pt-4 flex items-center gap-3 text-slate-600 text-sm font-bold opacity-30 italic">
                  <X className="w-4 h-4 text-rose-500 shrink-0" /> AI Question Generator
                </div>
              </div>
              <Link href="/checkout?plan=neet-lite" className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl flex justify-center transition-all border border-slate-800 uppercase tracking-widest shadow-xl active:scale-95 leading-none px-4">Subscribe Lite</Link>
            </div>

            {/* Plan 2 - 1499 (Mock + AutoGen) */}
            <div className="bg-slate-950 border-2 border-emerald-600 rounded-[3.5rem] p-12 relative scale-100 lg:scale-110 z-10 shadow-[0_0_50px_rgba(16,185,129,0.15)] h-full flex flex-col group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-emerald-600 text-white text-[10px] font-black rounded-full uppercase tracking-[0.4em] flex items-center gap-2 shadow-2xl border border-white/20">
                <Sparkles className="w-4 h-4 fill-white" /> Recommended
              </div>
              <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight mt-4 italic">NEET Elite Pro</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl font-black text-white tracking-tighter shadow-sm">₹1,499</span>
                <span className="text-slate-600 line-through text-lg font-bold opacity-50">₹2,999</span>
              </div>
              <div className="space-y-5 mb-12 flex-1">
                {[
                  "200+ Full Subject Mocks",
                  "AI Question Auto-Generator",
                  "Customizable Practice Drills",
                  "NCERT Highlighter Solutions",
                  "Advanced Predictive AIR",
                  "1 Year Unlimited Access"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white text-sm font-bold">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 shadow-emerald-500/20 shadow-md" /> {feature}
                  </div>
                ))}
              </div>
              <Link href="/checkout?plan=neet-pro" className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-3xl flex justify-center transition-all shadow-2xl shadow-emerald-900/60 uppercase tracking-widest active:scale-95 leading-none px-4 text-xl group/btn overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/btn:animate-[shimmer_1s_infinite] transition-all"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enrol Elite <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Plan 3 - 1999 (The Ultimate Best Series) */}
            <div className="bg-slate-950 border border-slate-800 rounded-[3rem] p-10 hover:border-emerald-500/30 transition-all shadow-lg relative h-full flex flex-col group">
              <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-2 bg-emerald-500/10 text-emerald-400 text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-emerald-500/20 shadow-xl">🥇 Ultra-Prime</div>
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Prime Medical Pass</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white tracking-tighter shadow-sm">₹1,999</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                {[
                  "Everything in Elite Pro",
                  "Unlimited Auto-Gen Tests",
                  "Weekly Clinical Masterclasses",
                  "Priority Expert Doubt Solving",
                  "Hardcopy Mock Set Delivered",
                  "2 Years Full Validity"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400 text-sm font-bold">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 shadow-inner" /> {feature}
                  </div>
                ))}
              </div>
              <Link href="/checkout?plan=neet-prime" className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl flex justify-center transition-all border border-slate-800 uppercase tracking-widest shadow-xl active:scale-95 leading-none px-4">Buy Prime Pass</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 What You Get Details */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter underline decoration-emerald-800 decoration-offset-[16px]">Features built for Toppers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Audio-Video Solutions", desc: "Don't just read, watch and hear the logic behind every complex NEET question.", icon: MonitorPlay, color: "text-blue-400" },
              { title: "NCERT Biology Matrix", desc: "Detailed page numbers from NCERT for every Bio answer to verify your source.", icon: Microscope, color: "text-emerald-400" },
              { title: "AI-Weakness Mapper", desc: "Personalized question banks generated based on your weak physics chapters.", icon: Brain, color: "text-amber-400" },
              { title: "Sectional Stamina", desc: "Practice 200 minutes of continuous focus with our actual exam simulator.", icon: Timer, color: "text-rose-400" },
              { title: "Benchmarking Dashboard", desc: "See where you stand among 8 lakh aspirants in real-time.", icon: BarChart3, color: "text-indigo-400" },
              { title: "Previous Year Mastery", desc: "Every NEET/AIPMT paper from 1998 to 2025 included with detailed updates.", icon: Library, color: "text-cyan-400" },
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all flex flex-col gap-6 group shadow-xl">
                <div className={`w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center shrink-0 border border-white/5 ${feature.color} group-hover:scale-110 transition-transform shadow-inner shadow-black/40`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tighter italic">{feature.title}</h3>
                  <p className="text-sm text-slate-400 font-bold leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 CTA Banner */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl group border border-slate-800">
            <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase relative z-10 leading-none underline decoration-emerald-600 decoration-8 underline-offset-[16px]">Your Seat in AIIMS <br /> Starts with a Mock.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-10">
              <Link href="/dashboard/test-series/neet" className="px-14 py-6 bg-emerald-600 text-white font-black rounded-3xl text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest leading-none">
                Start Training Now <ArrowRight className="w-8 h-8 inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

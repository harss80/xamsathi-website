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

export default function MedicalExamsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <Navbar />

      {/* 🔥 Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-black mb-8 uppercase tracking-widest shadow-sm">
                <Microscope className="w-4 h-4" /> NCERT Intensive Medical Prep
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 uppercase">Top Medic</span> <br />
                with Xamsathi Elite
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl lg:mx-0 mx-auto font-bold leading-relaxed">
                Curated Mock Papers with AI-Driven Question Generation. Strictly aligned with NTA NEET UG 2026 Core Patterns.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
                <Link href="/dashboard/test-series/medical-free" className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl shadow-lg shadow-emerald-500/40 active:scale-95 group">
                  <Activity className="w-6 h-6 text-white group-hover:animate-pulse" /> Try Free Mock
                </Link>
                <Link href="#plans" className="px-10 py-5 bg-slate-950 border-2 border-slate-800 hover:border-slate-600 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl active:scale-95 group">
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
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Accuracy Aim</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[3rem] p-8 shadow-2xl relative group">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
                <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tighter italic">
                  <Dna className="w-6 h-6 text-emerald-400 hover:rotate-180 transition-transform duration-1000" /> Medical Hub Stats
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Exam Pattern", val: "NTA NCERT Core (Phy/Che/Bio)", i: BookOpen, c: "text-blue-400" },
                    { label: "Test Interface", val: "Exact NTA Simulation UI", i: MonitorPlay, c: "text-emerald-400" },
                    { label: "Solution Style", val: "Deep Step-by-Step Logic", i: Search, c: "text-amber-400" },
                    { label: "Benchmarking", val: "All India Ranker Pro", i: Trophy, c: "text-rose-400" }
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

      {/* 🥈 Pricing & Series Section */}
      <section id="plans" className="py-24 bg-slate-900 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter underline decoration-emerald-600 decoration-8 underline-offset-[12px]">Medical Series Packs</h2>
            <p className="text-lg text-slate-500 font-bold uppercase tracking-widest mt-8 italic leading-none">Choose Your Roadmap to GMC (Government Medical College)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">

            {/* Starter Pack - 499 */}
            <div className="bg-slate-950 border border-slate-800 rounded-[3rem] p-10 hover:border-emerald-500/30 transition-all shadow-lg relative h-full flex flex-col group">
              <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-2 bg-slate-800 text-slate-400 text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-slate-700">🥉 Lite</div>
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Medical Mock Lite</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white tracking-tighter">₹499</span>
                <span className="text-slate-600 font-bold text-sm uppercase">/ Annual</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                {[
                  "50+ Full Pattern Mocks",
                  "Standard NCERT Biology",
                  "Detailed Theory Solutions",
                  "Basic Rank Projection",
                  "6 Months Full Validity"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400 text-sm font-bold">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                  </div>
                ))}
                <div className="pt-4 flex items-center gap-3 text-slate-600 text-sm font-bold opacity-50 italic">
                  <X className="w-4 h-4 text-rose-500 shrink-0" /> Auto-Generated Tests
                </div>
              </div>
              <Link href="/checkout?plan=medical-lite" className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl flex justify-center transition-all border border-slate-800 uppercase tracking-widest shadow-xl active:scale-95 leading-none px-4">Enrol Starter</Link>
            </div>

            {/* Pro Pack - 1499 (Recommended) */}
            <div className="bg-slate-950 border-2 border-emerald-600 rounded-[3.5rem] p-12 relative scale-100 lg:scale-110 z-10 shadow-2xl h-full flex flex-col group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-emerald-600 text-white text-[10px] font-black rounded-full uppercase tracking-[0.3em] flex items-center gap-2 shadow-xl">
                <Sparkles className="w-3 h-3 fill-white animate-spin-slow" /> Most Popular
              </div>
              <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight mt-4 italic">Medical Elite Pro</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl font-black text-white tracking-tighter font-serif">₹1,499</span>
                <span className="text-slate-600 line-through text-lg font-bold">₹2,999</span>
              </div>
              <div className="space-y-5 mb-12 flex-1">
                {[
                  "150+ Full Subject Mocks",
                  "Auto-Generated Daily Tests",
                  "AI-Weak Area Questioner",
                  "NCERT Highlighter Solutions",
                  "Advanced Predictive AIR",
                  "1 Year Full Access"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white text-sm font-bold">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 shadow-sm" /> {feature}
                  </div>
                ))}
              </div>
              <Link href="/checkout?plan=medical-pro" className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-3xl flex justify-center transition-all shadow-xl shadow-emerald-900/40 uppercase tracking-widest active:scale-95 leading-none px-4 text-xl group/btn">
                Subscribe Elite <ArrowRight className="w-6 h-6 ml-2 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Prime Pack - 1999 */}
            <div className="bg-slate-950 border border-slate-800 rounded-[3rem] p-10 hover:border-emerald-500/30 transition-all shadow-lg relative h-full flex flex-col group">
              <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-2 bg-emerald-500/10 text-emerald-400 text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-emerald-500/20 shadow-sm">🥇 Prime</div>
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Prime Medical Ultra</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white tracking-tighter">₹1,999</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                {[
                  "Everything in Elite Pro",
                  "Unlimited Auto-Gen Tests",
                  "Video Solutions (Elite Qs)",
                  "Monthly Performance PDF",
                  "Priority Medical Mentorship",
                  "2 Years Multi-Access"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400 text-sm font-bold">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>
              <Link href="/checkout?plan=medical-prime" className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl flex justify-center transition-all border border-slate-800 uppercase tracking-widest shadow-xl active:scale-95 leading-none px-4">Get Prime Access</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🧬 Why Xamsathi Medical? */}
      <section className="py-24 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20 underline decoration-slate-800 decoration-offset-[16px]">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none italic">The Xamsathi Edge</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { t: "NCERT Biology Mastery", d: "Strictly follows the latest NTA Rationalized Syllabus with 360/360 Biology mocks.", i: Microscope, c: "text-emerald-400" },
              { t: "AI Auto-Generation", d: "Our algorithm creates unique mocks from 1 Lakh+ premium medical MCQ database.", i: Brain, c: "text-blue-400" },
              { t: "Clinical Logic Physicals", d: "Physics & Chemistry tests focused on formula application vs rote learning.", i: FlaskConical, c: "text-amber-400" },
              { t: "Topper Ranker Pro", d: "Compare your score with 2025 Top 100 rankers' mock data points.", i: Trophy, c: "text-rose-400" }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] hover:border-emerald-500/20 hover:bg-slate-800/50 transition-all flex flex-col items-start shadow-xl group">
                <div className={`w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center mb-8 border border-white/5 ${feature.c} group-hover:scale-110 transition-transform shadow-inner`}>
                  <feature.i className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter leading-tight italic">{feature.t}</h4>
                <p className="text-sm text-slate-400 font-bold leading-relaxed">{feature.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl group border border-slate-800">
            <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase relative z-10 leading-none underline decoration-emerald-600 decoration-8 underline-offset-[16px]">Your Seat in AIIMS <br /> Starts with a Mock.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-10">
              <Link href="/dashboard/test-series/medical" className="px-14 py-6 bg-emerald-600 text-white font-black rounded-3xl text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest leading-none">
                Start Your Journey <ArrowRight className="w-8 h-8 inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

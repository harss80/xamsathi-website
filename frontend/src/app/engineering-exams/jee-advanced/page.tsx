"use client";
import React from "react";
import Link from "next/link";
import {
  Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
  ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
  Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function JEEAdvanced2026Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      <Navbar />

      {/* 🔥 Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-black mb-8 uppercase tracking-widest animate-fade-in shadow-sm">
              <Trophy className="w-4 h-4" /> Elite Tier JEE Preparation
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
              JEE Advanced 2026 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">Elite Test Series</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-bold leading-relaxed">
              Dual-Paper Simulations | Concept Mastery Mocks | IIT-Level Solutions
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link href="/dashboard/test-series/jee-advanced-free" className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl shadow-lg shadow-indigo-500/40 active:scale-95 group">
                <Zap className="w-6 h-6 fill-white" /> Attempt Free Test
              </Link>
              <Link href="/engineering-exams/jee-advanced/schedule" className="px-10 py-5 bg-slate-950 border-2 border-slate-800 hover:border-slate-600 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl active:scale-95 group">
                <BookOpen className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" /> View Complete Guide
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-slate-800/50">
              {[
                { t: "55+ Elite Tests", d: "High Difficulty Drills", i: CheckCircle2, c: "text-purple-400" },
                { t: "Paper 1 & 2", d: "Same-Day Simulation", i: MonitorPlay, c: "text-blue-400" },
                { t: "PYQ Clones", d: "Last 10 Year Patterns", i: Clock, c: "text-indigo-400" },
                { t: "Concept AI", d: "Deep Weak Area Analysis", i: Brain, c: "text-amber-400" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-3 border border-slate-800 shadow-inner`}>
                    <stat.i className={`w-6 h-6 ${stat.c}`} />
                  </div>
                  <div className="text-xl font-black text-white">{stat.t}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 JEE Advanced Plan Structure */}
      <section id="plan-structure" className="py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Elite Advanced Structure</h2>
            <p className="text-lg text-slate-400 font-bold max-w-2xl mx-auto uppercase tracking-widest decoration-indigo-500 underline underline-offset-8">For Top 10,000 AIR Aspirants</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {[
              { t: "Subject-wise Depth", d: "10 Physics, 10 Chem, 10 Maths focused on multi-concept problems.", n: "30", c: "border-slate-800 bg-slate-950" },
              { t: "Paper 1 + Paper 2 Sets", d: "Full exam simulation with two 3-hour papers same day. Strictly IIT pattern.", n: "15", c: "border-indigo-500/50 bg-indigo-600/5 shadow-xl shadow-indigo-900/10" },
              { t: "Legacy PYQ Mocks", d: "IIT-JEE legacy papers from 2014-2024 reformatted into mocks.", n: "10", c: "border-slate-800 bg-slate-950" },
            ].map((box, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border relative overflow-hidden flex flex-col items-center text-center transition-all hover:-translate-y-2 group ${box.c}`}>
                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter leading-tight h-12">{box.t}</h4>
                <p className="text-sm text-slate-400 font-medium mb-8 leading-relaxed">{box.d}</p>
                <div className="mt-auto">
                  <div className="text-5xl font-black text-white mb-1">{box.n}</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Tests</div>
                </div>
                {i === 1 && (
                  <div className="absolute top-4 right-4"><Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" /></div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-[3rem] p-12 max-w-2xl mx-auto text-center shadow-2xl relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-4">Final Test Count</div>
            <div className="text-6xl font-black text-white mb-2 tracking-tighter">55+ Elite Tests</div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Exclusively calibrated by IIT alumni</p>
          </div>
        </div>
      </section>

      {/* 💰 Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase underline decoration-indigo-600 decoration-4 underline-offset-[12px]">Advanced Focused Plans</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Only Advanced */}
            <div className="bg-slate-900 border-2 border-slate-800 p-10 rounded-[2.5rem] flex flex-col hover:border-indigo-500 transition-all group scale-100 hover:scale-105 duration-300">
              <h3 className="text-2xl font-black text-indigo-400 mb-6 uppercase tracking-widest">Only Advanced</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">₹1499</span>
                <span className="text-slate-500 line-through font-bold">₹2499</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-indigo-400" /> 55+ Elite Advanced Suite</li>
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-indigo-400" /> Dual-Paper Simulations</li>
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-indigo-400" /> Concept-wise Deep Reports</li>
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-indigo-400" /> All India Advanced Rank</li>
              </ul>
              <Link href="/checkout?plan=jee-advanced" className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl text-center transition-all active:scale-95 text-lg shadow-xl shadow-indigo-500/20">Enroll Only Advanced</Link>
            </div>

            {/* Combo (Best Seller) */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-900 p-1 rounded-[2.5rem] shadow-2xl relative group scale-100 md:scale-110 z-10 transition-transform duration-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">Complete JEE Shield</div>
              <div className="bg-slate-950 rounded-[2.4rem] p-10 h-full flex flex-col">
                <h3 className="text-2xl font-black text-amber-500 mb-6 uppercase tracking-widest">Mains + Advanced</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black text-white">₹1999</span>
                  <span className="text-slate-500 line-through font-bold">₹2999</span>
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> 190+ Total Premium Tests</li>
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Full Main + Advanced Access</li>
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> AI Rank Predictor</li>
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> 2 Year Extended Access</li>
                </ul>
                <Link href="/checkout?plan=jee-combo" className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl text-center transition-all shadow-xl shadow-indigo-500/30 active:scale-95 text-lg">Enroll Combo Plan</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

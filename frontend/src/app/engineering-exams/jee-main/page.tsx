"use client";
import React from "react";
import Link from "next/link";
import {
  Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
  ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
  Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function JEEMains2026Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />

      {/* 🔥 Hero Section - Above the Fold */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-black mb-8 uppercase tracking-widest animate-fade-in shadow-sm">
              <MonitorPlay className="w-4 h-4" /> NTA Latest Pattern 2026
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              JEE Main 2026 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Complete Test Series</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-bold leading-relaxed">
              Chapter Tests | Full Length Mocks | All India Rank | AI Analytics
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link href="/dashboard/test-series/jee-main-free" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl shadow-lg shadow-blue-500/40 active:scale-95 group">
                <Zap className="w-6 h-6 fill-white" /> Attempt Free Test
              </Link>
              <Link href="#plan-structure" className="px-10 py-5 bg-slate-950 border-2 border-slate-800 hover:border-slate-600 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl active:scale-95">
                <BookOpen className="w-6 h-6 text-blue-400" /> View Main Plan
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-slate-800/50">
              {[
                { t: "135+ Tests", d: "Mains Dedicated Suite", i: CheckCircle2, c: "text-emerald-400" },
                { t: "8,000+ Qs", d: "Chapter-wise Practice", i: Target, c: "text-blue-400" },
                { t: "NTA UI", d: "Exact Exam Experience", i: MonitorPlay, c: "text-purple-400" },
                { t: "AI Ranking", d: "Real-time Percentile", i: BarChart3, c: "text-amber-400" }
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

      {/* 📚 JEE Main Structure */}
      <section id="plan-structure" className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Mains Pattern Structure</h2>
            <p className="text-lg text-slate-400 font-bold max-w-2xl mx-auto uppercase tracking-widest decoration-blue-500 underline underline-offset-8">Targeting 250+ Marks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20 shadow-lg shadow-blue-500/5">
                <Calculator className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Chapter-wise Mastery</h3>
              <p className="text-slate-400 font-medium mb-8 leading-relaxed">Dedicated tests for every single chapter in Physics, Chemistry, and Maths as per 2026 syllabus.</p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center justify-between text-sm font-bold text-slate-300 border-b border-slate-800 pb-3"><span>Physics (28 Chapters)</span> <span className="text-blue-400">28 Tests</span></li>
                <li className="flex items-center justify-between text-sm font-bold text-slate-300 border-b border-slate-800 pb-3"><span>Chemistry (30 Chapters)</span> <span className="text-blue-400">30 Tests</span></li>
                <li className="flex items-center justify-between text-sm font-bold text-slate-300 border-b border-slate-800 pb-3"><span>Maths (25 Chapters)</span> <span className="text-blue-400">25 Tests</span></li>
              </ul>
              <div className="p-4 bg-slate-900 rounded-2xl text-center border border-slate-800">
                <span className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] block mb-1">Total Chapter Drills</span>
                <span className="text-3xl font-black text-white">80–85 Tests</span>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 hover:border-emerald-500/30 transition-all">
                <h4 className="text-xl font-black text-white mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-emerald-400" /> Full Length Simulation
                </h4>
                <p className="text-sm text-slate-400 font-medium mb-6">Exactly 90 Questions (75 to attempt) with 3 hours duration. NTA simulated interface.</p>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400 font-black text-lg">25 Mocks</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">10 Jan + 10 April + 5 Pre-Season</div>
                </div>
              </div>
              <div className="bg-slate-950 p-8 rounded-[2.5rem] border border-slate-800 hover:border-amber-500/30 transition-all">
                <h4 className="text-xl font-black text-white mb-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-amber-500" /> PYQ Simulation
                </h4>
                <p className="text-sm text-slate-400 font-medium mb-6">Previous 10 year papers reformatted into real-time mock tests for actual exam feeling.</p>
                <div className="px-4 py-2 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-500 font-black text-lg inline-block">10 PYQ Mocks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💰 Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase underline decoration-blue-600 decoration-4 underline-offset-[12px]">Mains Focused Plans</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Only Mains */}
            <div className="bg-slate-900 border-2 border-slate-800 p-10 rounded-[2.5rem] flex flex-col hover:border-blue-500 transition-all group scale-100 hover:scale-105 duration-300">
              <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase tracking-widest">Only Mains</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">₹999</span>
                <span className="text-slate-500 line-through font-bold">₹1999</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-blue-400" /> 135+ Full Main Suite</li>
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-blue-400" /> NTA Desktop Simulator</li>
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-blue-400" /> Chapter-wise Reports</li>
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-blue-400" /> All India Ranking</li>
              </ul>
              <Link href="/checkout?plan=jee-mains" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl text-center transition-all active:scale-95 text-lg shadow-xl shadow-blue-500/20">Enroll Only Mains</Link>
            </div>

            {/* Combo (Best Seller) */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-900 p-1 rounded-[2.5rem] shadow-2xl relative group scale-100 md:scale-110 z-10 transition-transform duration-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">Complete Dominance</div>
              <div className="bg-slate-950 rounded-[2.4rem] p-10 h-full flex flex-col">
                <h3 className="text-2xl font-black text-amber-500 mb-6 uppercase tracking-widest">Mains + Advanced</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black text-white">₹1999</span>
                  <span className="text-slate-500 line-through font-bold">₹2999</span>
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> 190+ Total Premium Tests</li>
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Dedicated Advanced Mocks</li>
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> AI Rank Predictor</li>
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Elite Scholarship Entry</li>
                </ul>
                <Link href="/checkout?plan=jee-combo" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl text-center transition-all shadow-xl shadow-blue-500/30 active:scale-95 text-lg">Enroll Combo Plan</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <X className={className} strokeWidth={3} />
  );
}

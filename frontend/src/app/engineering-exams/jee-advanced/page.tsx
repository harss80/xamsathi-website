"use client";
import React from "react";
import Link from "next/link";
import {
  Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
  ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
  Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function JEEAdvancedCompletePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />

      {/* 🔥 Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-black mb-8 uppercase tracking-widest shadow-sm">
              <MonitorPlay className="w-4 h-4" /> IIT-Advanced High Fidelity Mocks
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              JEE 2026 Complete <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Test Series – Mains + Advanced</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-bold leading-relaxed">
              Real Exam Pattern | All India Rank | Detailed Solutions | Performance Analytics
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link href="/dashboard/test-series/jee-advanced-free" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl shadow-lg shadow-blue-500/40 active:scale-95 group">
                <Zap className="w-6 h-6 fill-white" /> Attempt Free Test
              </Link>
              <Link href="#plan-structure" className="px-10 py-5 bg-slate-950 border-2 border-slate-800 hover:border-slate-600 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl active:scale-95">
                <BookOpen className="w-6 h-6 text-blue-400" /> View Advanced Plan
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-10 border-t border-slate-800/50">
              {[
                { t: "150+ Tests", d: "Chapter to Full Mocks", i: CheckCircle2, c: "text-emerald-400" },
                { t: "10,000+ Qs", d: "Premium Practice Bank", i: Target, c: "text-blue-400" },
                { t: "AI Report", d: "Performance Analytics", i: Brain, c: "text-purple-400" },
                { t: "Latest NTA", d: "As per 2026 Standards", i: ShieldCheck, c: "text-amber-400" }
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

      {/* 🚀 JEE Advanced Test Series Structure */}
      <section id="plan-structure" className="py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] -ml-40 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-md">
              High Difficulty Suite
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              JEE Advanced <span className="text-blue-500">Elite Mocks</span>
            </h2>
            <p className="text-lg text-slate-400 font-bold max-w-2xl mx-auto">
              Advanced is tougher & concept-based. Our Elite Mocks follow the strict 2-Paper 1-Day pattern with complex IIT-level problem styling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {[
              { t: "Subject-wise Tests", d: "10 Physics, 10 Chem, 10 Maths Focused on depth.", n: "30", c: "border-slate-800 bg-slate-950" },
              { t: "Paper 1 + Paper 2 Sets", d: "Full exam simulation with two 3-hour papers same day.", n: "12–15", c: "border-blue-500/50 bg-blue-600/5 shadow-xl shadow-blue-900/10" },
              { t: "Simulated PYQ Mocks", d: "Last 10 year papers formatted as real mocks.", n: "10", c: "border-slate-800 bg-slate-950" },
            ].map((box, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border relative overflow-hidden flex flex-col items-center text-center transition-all hover:-translate-y-2 ${box.c}`}>
                <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter leading-tight h-12">{box.t}</h4>
                <p className="text-sm text-slate-400 font-medium mb-8 leading-relaxed">{box.d}</p>
                <div className="mt-auto">
                  <div className="text-5xl font-black text-white mb-1">{box.n}</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Tests</div>
                </div>
                {i === 1 && (
                  <div className="absolute top-4 right-4"><Sparkles className="w-5 h-5 text-blue-400 animate-pulse" /></div>
                )}
              </div>
            ))}
          </div>

          {/* Table View */}
          <div className="max-w-3xl mx-auto bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-slate-800 bg-slate-900/50">
              <h4 className="font-black text-white uppercase tracking-widest text-sm">Advanced Structure Breakdown</h4>
            </div>
            <div className="p-6">
              <table className="w-full text-left">
                <thead className="text-xs font-black text-slate-500 uppercase tracking-widest border-b border-slate-800">
                  <tr>
                    <th className="pb-4">Type</th>
                    <th className="pb-4 text-right">No. of Tests</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-bold text-slate-300">
                  <tr className="border-b border-slate-800/50"><td className="py-4">Subject Tests</td><td className="py-4 text-right">30</td></tr>
                  <tr className="border-b border-slate-800/50"><td className="py-4">Full Mock Sets (P1+P2)</td><td className="py-4 text-right">12–15</td></tr>
                  <tr className="border-b border-slate-800/50"><td className="py-4">PYQ Simulations</td><td className="py-4 text-right">10</td></tr>
                  <tr className="text-blue-400 font-black bg-blue-600/5">
                    <td className="py-4 px-2">Total Advanced Tests</td>
                    <td className="py-4 px-2 text-right">55+ Tests</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 📈 Dashboard Section */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase">Attempt Analysis</h2>
            <p className="text-slate-400 font-bold">What happens after you click Submit?</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {["Score & Percentile", "All India Rank", "Accuracy %", "Time Analysis", "Weak Chapters", "Topper Comparison", "Difficulty Levels", "AI Rank Predictor"].map((feat, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-500 transition-all group">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-black text-white uppercase tracking-tight">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💰 Pricing */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">Transparent Pricing</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard title="Only Mains" price="₹999" oldPrice="₹1999" color="blue" />
            <PricingCard title="Mains + Advanced" price="₹1999" oldPrice="₹2999" color="amber" bestSeller />
            <PricingCard title="Only Advanced" price="₹1499" oldPrice="₹2499" color="indigo" />
          </div>
        </div>
      </section>
    </div>
  );
}

function PricingCard({ title, price, oldPrice, color, bestSeller = false }: any) {
  const colorClasses = {
    blue: "border-blue-500/30 text-blue-400",
    amber: "border-amber-500 text-amber-500 shadow-amber-900/20 shadow-2xl scale-105",
    indigo: "border-indigo-500/30 text-indigo-400"
  }[color as "blue" | "amber" | "indigo"];

  return (
    <div className={`bg-slate-950 border-2 p-10 rounded-[2.5rem] flex flex-col relative ${colorClasses}`}>
      {bestSeller && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Best Seller</div>}
      <h3 className="text-xl font-black uppercase mb-6">{title}</h3>
      <div className="flex items-baseline gap-2 mb-8 text-white">
        <span className="text-5xl font-black">{price}</span>
        <span className="text-slate-500 line-through text-lg">{oldPrice}</span>
      </div>
      <ul className="space-y-4 mb-10 flex-1 text-slate-400 font-bold text-sm">
        <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Comprehensive Mocks</li>
        <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Detailed Analytics</li>
        <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Video Solutions</li>
      </ul>
      <button className="w-full py-4 bg-slate-900 border border-slate-700 hover:bg-white hover:text-slate-950 text-white font-black rounded-2xl transition-all uppercase tracking-widest text-xs">Choose Plan</button>
    </div>
  );
}

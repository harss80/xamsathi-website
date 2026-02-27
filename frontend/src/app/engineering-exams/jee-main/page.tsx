"use client";
import React from "react";
import Link from "next/link";
import {
  Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
  ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
  Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function JEE2026CompleteTestSeriesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />

      {/* 🔥 1️⃣ Hero Section - Above the Fold */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-black mb-8 uppercase tracking-widest animate-fade-in shadow-sm">
              <MonitorPlay className="w-4 h-4" /> Real Exam UI Experience
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              JEE 2026 Complete <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Test Series – Mains + Advanced</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-bold leading-relaxed">
              Real Exam Pattern | All India Rank | Detailed Solutions | Performance Analytics
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link href="/dashboard/test-series/jee-free-mock" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl shadow-lg shadow-blue-500/40 active:scale-95 group">
                <Zap className="w-6 h-6 fill-white" /> Attempt Free Test
              </Link>
              <Link href="#plan-structure" className="px-10 py-5 bg-slate-950 border-2 border-slate-800 hover:border-slate-600 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl active:scale-95">
                <BookOpen className="w-6 h-6 text-blue-400" /> View Full Test Plan
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
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1 tracking-tighter">{stat.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📚 2️⃣ JEE Main Test Series Structure */}
      <section id="plan-structure" className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-start gap-16 max-w-7xl mx-auto">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-md">
                Recommended Plan
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                JEE Main 2026 <br /> <span className="text-emerald-400">Preparation Strategy</span>
              </h2>
              <p className="text-lg text-slate-400 font-bold mb-10 leading-relaxed">
                A total of 120-135 tests designed to take you from a beginner to a top 1 percentile rank.
                Focused on the latest NTA marking scheme and difficulty gradients.
              </p>

              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:border-emerald-500/30 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black text-white">Chapter-wise Mastery</h4>
                  </div>
                  <p className="text-sm text-slate-400 font-medium mb-6">Physics (28), Chemistry (30), Maths (25). Each test has 15-25 Qs & detailed video solutions.</p>
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300">80–85 Tests</div>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300">60–90 Mins</div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:border-blue-500/30 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black text-white">Part & Mid-Term Tests</h4>
                  </div>
                  <p className="text-sm text-slate-400 font-medium mb-4">Combining 3-4 chapters per subject to test your retention and speed across multiple topics.</p>
                  <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 inline-block">12–15 Full Length Sets</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-slate-950 p-8 md:p-12 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                <LayoutDashboard className="w-8 h-8 text-emerald-400" /> Structure Summary
              </h3>

              <div className="space-y-4">
                {[
                  { label: "Chapter Tests", count: "80–85", sub: "Subject Mastery" },
                  { label: "Part Tests", count: "12–15", sub: "Sectional Drill" },
                  { label: "Full length Mocks", count: "20–25", sub: "Real Exam Simulation" },
                  { label: "PYQ Based Tests", count: "10", sub: "Previous Year Clones" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:bg-slate-900 transition-colors">
                    <div>
                      <div className="text-lg font-bold text-white uppercase tracking-tight">{row.label}</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{row.sub}</div>
                    </div>
                    <div className="text-2xl font-black text-emerald-400">{row.count}</div>
                  </div>
                ))}

                <div className="mt-8 p-6 rounded-2xl bg-emerald-600 shadow-xl shadow-emerald-900/20 text-center">
                  <div className="text-emerald-100 font-black uppercase tracking-widest text-xs mb-1">Total Main Tests</div>
                  <div className="text-4xl font-black text-white leading-none tracking-tighter">120–135 Tests</div>
                </div>
              </div>

              <p className="text-center text-slate-500 text-xs font-bold mt-6 italic">
                *10 Mocks before Jan Attempt | 10 Mocks before April Attempt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 3️⃣ JEE Advanced Test Series Structure */}
      <section className="py-24 bg-slate-950 border-b border-slate-800 relative">
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
              { t: "Subject-wise Tests", d: "10 Physics, 10 Chem, 10 Maths Focused on depth.", n: "30", c: "border-slate-800" },
              { t: "Paper 1 + Paper 2 Sets", d: "Full exam simulation with two 3-hour papers same day.", n: "12–15", c: "border-blue-500/50 bg-blue-600/5 shadow-xl shadow-blue-900/10" },
              { t: "Simulated PYQ Mocks", d: "Last 10 year papers formatted as real mocks.", n: "10", c: "border-slate-800" },
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

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-xl mx-auto text-center shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Advanced Grand Total</div>
            <div className="text-5xl font-black text-white mb-2 tracking-tighter">55+ Tests</div>
            <p className="text-blue-400 text-xs font-black uppercase tracking-[0.2em]">Exclusively For Serious IIT Aspirants</p>
          </div>
        </div>
      </section>

      {/* 📈 4️⃣ Student Dashboard Section */}
      <section className="py-24 bg-slate-900 relative border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[3rem] p-1 shadow-2xl overflow-hidden group">
                <div className="bg-slate-950 rounded-[2.8rem] p-8 md:p-12">
                  <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                    <BarChart3 className="w-8 h-8 text-blue-400" /> Post-Attempt Insights
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Percentile Analysis", "Accuracy Tracking", "Week Channels",
                      "All India Rank", "Time Per Question", "Topper Comparison",
                      "Difficulty Mapping", "AI Weak Area Check"
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300 font-bold bg-slate-900 p-4 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feat}
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 p-6 bg-blue-600/10 rounded-3xl border border-blue-500/20 text-center relative group">
                    <div className="text-blue-400 font-black uppercase tracking-widest text-xs mb-3">AI Score Predictor</div>
                    <div className="text-3xl font-black text-white tracking-widest animate-pulse">264 / 300</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                Data-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Preparation</span>
              </h2>
              <p className="text-lg text-slate-400 font-bold mb-10 leading-relaxed italic">
                Don't just practice. Analyze.
              </p>
              <p className="text-slate-400 font-medium mb-12">
                Every test you submit generates a detailed AI analytics report. Know exactly where you stand among 50,000+ competitors and which chapters are pulling your rank down.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <h5 className="text-white font-black text-lg mb-3 uppercase tracking-tighter">Mistake Notebook</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">Automatically bookmarks every wrong answer into a dedicated folder for revision.</p>
                </div>
                <div>
                  <h5 className="text-white font-black text-lg mb-3 uppercase tracking-tighter">Topper Delta</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">Visually see the "Gap" between your attempt strategy and the top 100 students.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💰 5️⃣ Pricing Structure */}
      <section id="pricing" className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">Transparent Pricing</h2>
            <p className="text-lg text-slate-400 font-bold underline decoration-blue-500 decoration-4 underline-offset-8 uppercase tracking-widest">Pick your target tier</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Only Mains */}
            <div className="bg-slate-900/50 border border-slate-800 p-10 rounded-[2.5rem] flex flex-col hover:border-slate-700 transition-all group">
              <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase tracking-widest">Only Mains</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">₹999</span>
                <span className="text-slate-500 line-through font-bold">₹1999</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-blue-400" /> 135+ JEE Main Tests</li>
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-blue-400" /> NTA Desktop UI</li>
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-blue-400" /> Topic-wise PYQs</li>
                <li className="flex items-center gap-3 text-slate-500 font-bold opacity-50"><X className="w-5 h-5" /> No Advanced Content</li>
              </ul>
              <Link href="/checkout?plan=jee-mains" className="w-full py-5 bg-slate-950 border border-slate-800 hover:border-blue-500 text-white font-black rounded-2xl text-center transition-all active:scale-95 text-lg">Choose Mains</Link>
            </div>

            {/* Combo (Best Seller) */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-900 p-1 rounded-[2.5rem] shadow-2xl relative scale-100 md:scale-105 z-10 group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-slate-950 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">Best Value Combo</div>
              <div className="bg-slate-950 rounded-[2.4rem] p-10 h-full flex flex-col">
                <h3 className="text-2xl font-black text-amber-500 mb-6 uppercase tracking-widest">Mains + Advanced</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-black text-white">₹1999</span>
                  <span className="text-slate-500 line-through font-bold">₹2999</span>
                </div>
                <ul className="space-y-5 mb-12 flex-1">
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> 190+ Total Tests</li>
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Both Mains & Advanced</li>
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> AI Rank Predictor</li>
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Elite Scholarship Entry</li>
                  <li className="flex items-center gap-3 text-white font-black"><CheckCircle2 className="w-5 h-5 text-amber-500" /> 2 Year Extended Access</li>
                </ul>
                <Link href="/checkout?plan=jee-combo" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl text-center transition-all shadow-xl shadow-blue-500/30 active:scale-95 text-lg">Upgrade To Combo</Link>
              </div>
            </div>

            {/* Only Advanced */}
            <div className="bg-slate-900/50 border border-slate-800 p-10 rounded-[2.5rem] flex flex-col hover:border-slate-700 transition-all group">
              <h3 className="text-2xl font-black text-indigo-400 mb-6 uppercase tracking-widest">Only Advanced</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white">₹1499</span>
                <span className="text-slate-500 line-through font-bold">₹2499</span>
              </div>
              <ul className="space-y-4 mb-12 flex-1">
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-indigo-400" /> 55+ Elite Advanced Mocks</li>
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-indigo-400" /> Dual-Paper Simulations</li>
                <li className="flex items-center gap-3 text-slate-300 font-bold"><Check className="w-5 h-5 text-indigo-400" /> IIT-Grad Level Solutions</li>
                <li className="flex items-center gap-3 text-slate-500 font-bold opacity-50"><X className="w-5 h-5" /> No Mains Series</li>
              </ul>
              <Link href="/checkout?plan=jee-advanced" className="w-full py-5 bg-slate-950 border border-slate-800 hover:border-indigo-500 text-white font-black rounded-2xl text-center transition-all active:scale-95 text-lg">Go Advanced</Link>
            </div>
          </div>

          <div className="mt-12 text-center text-slate-500 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-6">
            <span>Free 3 Tests Trial Included</span>
            <span className="w-2 h-2 rounded-full bg-slate-800"></span>
            <span>Next Scholarship Test: Sunday 2:00 PM</span>
          </div>
        </div>
      </section>

      {/* 🧠 6️⃣ Important Features Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-800 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Premium Simulator <span className="text-blue-500">Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { t: "NTA Real UI", i: MonitorPlay, d: "Exact Desktop Experience" },
              { t: "Pause / Resume", i: Clock, d: "Flexible Practice Hours" },
              { t: "Bookmark Qs", i: target, d: "Revise Hard Problems" },
              { t: "Video Solutions", i: Play, d: "Detailed Step Explanations" },
              { t: "Rank Predictor", i: Trophy, d: "AIR Estimation Analysis" },
              { t: "Mistake Vault", i: Brain, d: "Automatic Revision List" },
              { t: "Dark Mode", i: Sparkles, d: "Eye Comfort Learning" },
              { t: "Expert Help", i: HelpCircle, d: "Doubt Support Team" }
            ].map((feat, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-[2rem] text-center hover:border-blue-500 transition-all shadow-xl group">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  <feat.i className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tighter leading-none">{feat.t}</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{feat.d}</p>
              </div>
            ))}
          </div>

          {/* Final CTA Banner */}
          <div className="mt-24 max-w-4xl mx-auto bg-blue-600 rounded-[3rem] p-12 text-center text-white relative shadow-2xl overflow-hidden scale-100 md:scale-105">
            <div className="absolute top-0 left-0 w-full h-full bg-indigo-900/20 animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Total 180–190 Premium Tests</h2>
              <p className="text-blue-100 font-bold mb-10 text-lg">One subscription for complete JEE dominance. Join the league of IITians today.</p>
              <Link href="/signup" className="px-12 py-5 bg-white text-blue-700 font-black rounded-2xl text-xl shadow-xl hover:bg-slate-100 transition-all active:scale-95 uppercase tracking-widest">
                Get Started Free <ArrowRight className="w-6 h-6 inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

const target = Target; // alias

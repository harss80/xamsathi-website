"use client";
import React from "react";
import Link from "next/link";
import {
  Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
  ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
  Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X,
  ZapOff, Timer, GraduationCap, ChevronRight, School, Laptop, Microscope,
  MapPin, Building2, FlaskConical, TrendingUp, Search, Globe, Languages,
  Library, FileText, Award, CreditCard, Info, HeartPulse, Dna, Activity, Flame
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function TargetNCERTFoundationPage() {
  const syllabus = [
    {
      class: "Class 11th Foundation Hub",
      subjects: [
        {
          name: "Biology (Core Blocks)",
          chapters: ["Diversity in Organisms", "Structural Cell Organization", "Human Physiology Full", "Plant Metabolism Block", "Biomolecules Core"]
        },
        {
          name: "Physics (Foundational Logic)",
          chapters: ["Kinematics & Laws", "Work & Energy Pro", "Mechanical Properties", "Thermodynamics Core", "Wave Functionality"]
        },
        {
          name: "Chemistry (Basis & Groups)",
          chapters: ["Atomic Matrix", "Chemical Bonding", "Equilibrium Logic", "p-Block Elements", "Hydrocarbons Foundation"]
        }
      ]
    },
    {
      class: "Class 12th Advance Matrix",
      subjects: [
        {
          name: "Biology (Strategic Excellence)",
          chapters: ["Reproduction Mechanics", "Advanced Genetics", "Biotech Operations", "Human Welfare Biology", "Ecological Systems"]
        },
        {
          name: "Physics (Modern Electrics)",
          chapters: ["Electrostatic Matrix", "Magnetic Wave Dynamics", "Ray & Wave Optics", "Modern Nuclear Physics", "Electronic Devices"]
        },
        {
          name: "Chemistry (Process & Organic)",
          chapters: ["Solutions Dynamics", "d-f Block Synergy", "Coordination Logic", "Organic Functional Matrix", "Bio-Chemistry"]
        }
      ]
    }
  ];

  const stats = [
    { label: "NCERT Mapped", val: "100%", i: BookOpen },
    { label: "Questions Solved", val: "15K+", i: Target },
    { label: "Target Score", val: "680+", i: Trophy },
    { label: "NTA Simulation", val: "Active", i: Laptop }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 font-sans tracking-tight">
      <Navbar />

      {/* 💎 Immersive Detail Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[160px] -mr-64 -mt-64 pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] -ml-64 -mb-64 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black mb-10 uppercase tracking-[0.3em] shadow-2xl backdrop-blur-xl">
                <ShieldCheck className="w-4 h-4 shadow-blue-500/50" /> Pre-Purchase Detail Ledger
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase italic">
                NCERT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-500">Foundation</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-12 font-bold leading-relaxed max-w-2xl lg:mx-0 mx-auto opacity-70">
                Detailed roadmap to excellence. Har chapter, har topic, aur har question ki pehle se jankari. Nothing hidden, purely transparent prep.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6">
                <Link href="/checkout?plan=medical-lite" className="px-14 py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[2.5rem] transition-all shadow-2xl shadow-emerald-900/40 text-2xl active:scale-95 group uppercase tracking-widest relative overflow-hidden flex items-center gap-3">
                  <span className="relative z-10">Enrol for ₹499</span>
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Validity Period</p>
                  <p className="text-lg font-black text-white uppercase italic">Ends NEET 2026</p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 w-full grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-[3rem] hover:bg-slate-800/80 transition-all group shadow-2xl hover:border-blue-500/30">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 group-hover:scale-110 transition-transform">
                    <s.i className="w-6 h-6 text-blue-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div className="text-3xl font-black text-white mb-1 leading-none">{s.val}</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 📋 Advanced Syllabus Matrix */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none italic underline decoration-emerald-800 decoration-offset-[16px]">Curriculum Breakdown</h2>
            <p className="text-slate-500 font-extrabold uppercase text-xs tracking-[0.5em] mt-8 leading-none opacity-50">Precision Mapping for Medical Aspirants</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {syllabus.map((phase, i) => (
              <div key={i} className="relative group p-12 bg-slate-900/30 border border-slate-800/80 rounded-[4rem] shadow-2xl hover:border-emerald-500/20 transition-all duration-700 overflow-hidden">
                <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12 group-hover:scale-150 transition-transform"><BookOpen className="w-64 h-64" /></div>
                <h3 className="text-3xl font-black text-white mb-12 flex items-center gap-4 uppercase tracking-tighter italic">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 text-emerald-400 flex items-center justify-center font-black border border-emerald-500/20">{i + 1}</div>
                  {phase.class}
                </h3>

                <div className="space-y-12">
                  {phase.subjects.map((sub, j) => (
                    <div key={j} className="relative z-10 group/sub">
                      <h4 className="text-xs font-black text-blue-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                        <Dna className="w-4 h-4" /> {sub.name}
                        <div className="h-px bg-white/5 flex-1"></div>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {sub.chapters.map((chap, k) => (
                          <div key={k} className="flex items-center gap-3 p-3 bg-slate-950/50 border border-slate-800 rounded-2xl text-xs font-bold text-slate-400 hover:text-white hover:border-emerald-500/30 transition-all group-hover/sub:bg-slate-900/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-500 transition-colors"></div>
                            {chap}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧪 Detailed Test Structure Block */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase leading-none italic underline decoration-blue-700 decoration-[12px] underline-offset-[16px]">Testing <br /> Anatomy</h2>
              <p className="text-xl text-slate-400 font-bold mb-12 leading-relaxed opacity-80">
                Exact breakdown of what you get in your dashboard immediately after purchase.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { count: "97", label: "Full Chapters", desc: "Every single topic of Physics, Bio & Chemistry Class 11-12.", i: ListCheck },
                  { count: "25", label: "Unit Simulations", desc: "Complex multi-chapter unit tests for synergy building.", i: Activity },
                  { count: "20", label: "NTA Full Mocks", desc: "The ultimate 720 marks paper simulation with AIR.", i: Star },
                  { count: "10Yr", label: "Verified PYQs", desc: "NEET papers from 2016 to 2025 solved with logic.", i: Clock }
                ].map((t, i) => (
                  <div key={i} className="group flex items-center gap-8 p-6 bg-slate-950/40 border border-slate-800/50 rounded-[2.5rem] hover:bg-slate-950 hover:border-emerald-500/20 transition-all overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-20 h-20 rounded-[2rem] bg-slate-900 border border-slate-800 flex flex-col items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-all shadow-2xl relative z-10">
                      <span className="text-2xl font-black text-white leading-none tracking-tighter">{t.count}</span>
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-emerald-400 transition-colors uppercase italic">{t.label}</h4>
                      <p className="text-sm font-bold text-slate-500 leading-relaxed uppercase tracking-widest text-[10px] opacity-70">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-950 p-12 rounded-[4rem] border border-slate-800 relative z-10 shadow-2xl overflow-hidden group">
                <div className="absolute -top-20 -right-20 p-24 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-tighter italic">Pro Logic Advantage:</h3>
                <div className="space-y-8 relative z-10">
                  {[
                    { t: "Rationalized Core", v: "Hamare mocks 2026 ke strictly updated NCERT syllabus par based hain." },
                    { t: "Rational Analysis", v: "Sirf answer nahi, 'Why others are wrong' logic bhi fully explained hai." },
                    { t: "Global Leaderboard", v: "Real-time AI benchmarking among 1.2 Lakh+ active students." },
                    { t: "Cross-Platform Sync", v: "Mobile app for quick practice, Laptop for real exam experience." },
                    { t: "NCERT Mapping", v: "Biology answer ke nichay seedha NCERT page reference link milta hai." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group/item">
                      <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all shadow-sm">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="block text-sm font-black text-emerald-400 uppercase tracking-widest leading-none mb-2 italic">{item.t}</span>
                        <p className="text-xs text-slate-400 font-bold leading-relaxed opacity-70">{item.v}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-8 bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] relative overflow-hidden group/bonus">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover/bonus:scale-125 transition-transform"><Flame className="w-16 h-16 fill-blue-400" /></div>
                  <div className="text-amber-500 font-black uppercase text-[10px] tracking-[0.4em] mb-4 flex items-center gap-2">
                    <Sparkles className="w-3 h-3" /> Exclusive Bonus
                  </div>
                  <p className="text-sm font-black text-white italic leading-relaxed uppercase tracking-tighter">
                    Free: Chemistry Formula Matrix PDF + Bio-Mnemonics Guide Included with ₹499 Lite Pass.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏆 Strategic Comparison Mini-Hub */}
      <section className="py-24 bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Ecosystem Comparison</h2>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border-2 border-slate-800 rounded-[3.5rem] p-12 hover:border-blue-500/30 transition-all shadow-2xl relative group">
              <div className="flex flex-col h-full">
                <h4 className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs mb-8 flex items-center gap-3">
                  Foundation Phase <div className="h-px bg-blue-400/20 flex-1"></div>
                </h4>
                <div className="text-5xl font-black text-white mb-6 leading-none tracking-tighter">₹499 <span className="text-xs font-bold text-slate-500">Lite</span></div>
                <ul className="space-y-4 flex-1 mb-10">
                  {["Full Mock Collection", "NTA Simulator Pro", "Chapter Mastery Drills", "Detailed Solutions"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-400">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {feat}
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-sm font-bold text-slate-700 opacity-40 italic">
                    <X className="w-5 h-5 text-rose-500" /> AI-Generated Matrix
                  </li>
                </ul>
                <Link href="/checkout?plan=medical-lite" className="w-full py-5 bg-slate-950 border border-slate-800 hover:bg-slate-800 text-white font-black rounded-2xl text-center uppercase tracking-widest transition-all active:scale-95 shadow-xl">Get Foundation</Link>
              </div>
            </div>

            <div className="bg-slate-900 border-2 border-emerald-500/50 rounded-[3.5rem] p-12 hover:border-emerald-500 transition-all shadow-[0_0_80px_rgba(16,185,129,0.1)] relative group scale-105 z-10">
              <div className="absolute top-0 right-14 -translate-y-1/2 px-5 py-2 bg-emerald-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-2xl border border-white/20">Elite Tier</div>
              <div className="flex flex-col h-full">
                <h4 className="text-emerald-400 font-black uppercase tracking-[0.4em] text-xs mb-8 flex items-center gap-3">
                  AI Matrix Pro <div className="h-px bg-emerald-400/20 flex-1"></div>
                </h4>
                <div className="text-5xl font-black text-white mb-6 leading-none tracking-tighter">₹1,499 <span className="text-xs font-bold text-slate-500">Elite</span></div>
                <ul className="space-y-4 flex-1 mb-10">
                  {["Everything in Foundation", "AI-Generated Unique Tests", "Real-time Weakness Map", "Customizable Questions"].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-black text-white">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" /> {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/checkout?plan=medical-pro" className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-3xl text-center uppercase tracking-widest shadow-2xl transition-all active:scale-95 text-xl">Upgrade to Elite</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 Immersive CTA Banner */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-950 via-slate-900 to-emerald-950 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-[0_0_100px_rgba(30,58,138,0.2)] group border-2 border-white/5">
            <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-14 tracking-tighter uppercase relative z-10 leading-none italic underline decoration-emerald-600 decoration-[16px] underline-offset-[20px]">Master NCERT. <br /> Own NEET 2026.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 relative z-10 pt-10">
              <Link href="/checkout?plan=medical-lite" className="px-20 py-8 bg-white text-indigo-950 font-black rounded-[3rem] text-3xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest leading-none outline outline-[12px] outline-white/10 group/btn overflow-hidden relative">
                <span className="relative z-10">Begin Foundation</span>
                <div className="absolute inset-0 bg-emerald-50 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Dummy ListCheck as it was used in code but not imported (aliased)
function ListCheck({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 12H3" /><path d="M16 6H3" /><path d="M16 18H3" /><path d="m19 10-4 4 2 2 4-4-2-2Z" />
    </svg>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import {
  Building2, Search, Filter, BookOpen, Users, Star, ArrowRight,
  ShieldCheck, Microscope, HeartPulse, Dna, Trophy,
  CheckCircle2, MonitorPlay, Sparkles, Zap, Brain, Activity, Target,
  ChevronRight, Info, Award, GraduationCap, Laptop, Microscope as Micro, Flame
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function MedicalExamsCategoryPage() {
  const series = [
    {
      id: "target-ncert",
      title: "Target NCERT Foundation",
      desc: "Precision set of 120+ mocks. Strictly NCERT-aligned for core medical foundation.",
      tests: "120+ Tests",
      users: "1.2 Lakh+",
      tag: "Bestseller",
      link: "/medical-exams/neet",
      color: "from-blue-600/20 to-indigo-600/20",
      iconColor: "text-blue-400",
      price: "₹499",
      gradientBg: "hover:shadow-blue-500/10"
    },
    {
      id: "ai-matrix",
      title: "AI-Matrix Pro Evolution",
      desc: "AI-Driven test generation engine. Personalized mocks based on your weak anatomy and logic.",
      tests: "Unlimited",
      users: "85k+",
      tag: "Recommended",
      link: "/medical-exams/ai-matrix",
      color: "from-emerald-600/20 to-teal-600/20",
      iconColor: "text-emerald-400",
      price: "₹1499",
      gradientBg: "hover:shadow-emerald-500/10",
      featured: true
    },
    {
      id: "medical-legend",
      title: "Medical Legend Ultra",
      desc: "The ultimate cockpit for medical toppers. Mocks, Auto-Gen, and AIIMS standard mentorship.",
      tests: "Elite Access",
      users: "40k+",
      tag: "Legendary",
      link: "/medical-exams/medical-legend",
      color: "from-amber-600/20 to-orange-600/20",
      iconColor: "text-amber-400",
      price: "₹1999",
      gradientBg: "hover:shadow-amber-500/10"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 font-sans leading-relaxed">
      <Navbar />

      {/* 🧬 Advanced Hero Section */}
      <div className="pt-32 pb-24 relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] -mr-96 -mt-96 pointer-events-none animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -ml-96 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-emerald-400 text-xs font-black mb-8 uppercase tracking-[0.3em] shadow-2xl animate-fade-in-down">
              <Microscope className="w-4 h-4 animate-bounce" /> Medical Success Ecosystem
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              Choose Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 uppercase italic">Winning Series</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 mb-12 leading-relaxed font-bold max-w-3xl mx-auto opacity-80 decoration-emerald-500/20">
              Structured mock test series calibrated for <span className="text-white border-b-2 border-emerald-500">NTA NEET UG 2026</span> standards. From pure NCERT focus to AI-driven mastery.
            </p>

            {/* Premium Search Experience */}
            <div className="max-w-2xl mx-auto group">
              <div className="relative flex items-center p-2 bg-slate-900 border-2 border-slate-800 rounded-[2.5rem] focus-within:border-emerald-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-emerald-500/10">
                <Search className="absolute left-6 w-6 h-6 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Search for your exam (e.g. NEET 2026)..."
                  className="w-full bg-transparent border-none py-4 pl-14 pr-48 text-white focus:ring-0 font-bold placeholder:text-slate-600 text-lg"
                />
                <button className="absolute right-2 px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[2rem] transition-all flex items-center gap-2 shadow-xl active:scale-95 uppercase tracking-widest text-sm leading-none">
                  Explore <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {series.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className={`group relative flex flex-col bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-[3rem] p-10 transition-all duration-700 overflow-hidden shadow-2xl ${item.gradientBg} ${item.featured ? 'scale-105 ring-2 ring-emerald-500/20 z-10 bg-slate-900/60' : ''}`}
              >
                {/* Advanced Bio-metric Decor */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                {item.tag && (
                  <div className={`absolute top-8 right-10 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-2xl border backdrop-blur-xl z-20 shadow-sm ${item.featured ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-slate-950/80 border-slate-800 text-slate-400'}`}>
                    {item.featured && <Flame className="w-3 h-3 inline-block mr-1 fill-white" />} {item.tag}
                  </div>
                )}

                {/* Hero Icon */}
                <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${item.color} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700 shadow-xl border border-white/5 relative`}>
                  <div className="absolute inset-0 bg-white/10 rounded-[2rem] animate-ping opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <Activity className={`w-10 h-10 ${item.iconColor} group-hover:animate-pulse`} />
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors tracking-tighter uppercase italic leading-none">{item.title}</h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xl font-serif font-black text-emerald-400">{item.price}</span>
                    <div className="h-1 w-1 rounded-full bg-slate-700"></div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Curated Access</span>
                  </div>
                  <p className="text-slate-400 font-bold leading-relaxed mb-10 text-base opacity-80">{item.desc}</p>
                </div>

                <div className="mt-auto pt-10 border-t border-slate-800/50">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 bg-slate-950/50 px-4 py-2 rounded-2xl border border-slate-800 shadow-inner">
                      <Target className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-black uppercase tracking-widest text-slate-300">{item.tests}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-950/50 px-4 py-2 rounded-2xl border border-slate-800 shadow-inner">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-black uppercase tracking-widest text-slate-300">{item.users}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between group/btn">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-white opacity-40 group-hover:opacity-100 transition-opacity">Explore Intelligence</span>
                    <div className="w-14 h-14 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all shadow-2xl overflow-hidden relative">
                      <ArrowRight className="w-6 h-6 text-slate-500 group-hover:text-white group-hover:translate-x-10 transition-all duration-500 absolute" />
                      <ArrowRight className="w-6 h-6 text-white -translate-x-10 group-hover:translate-x-0 transition-all duration-500 absolute" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Metrics Section */}
          <div className="mt-32 max-w-7xl mx-auto flex flex-wrap justify-between gap-12 items-center px-10">
            {[
              { label: "NCERT Mapping", val: "100%", i: Micro },
              { label: "AI Prediction", val: "94.2%", i: Brain },
              { label: "Solved Papers", val: "PYQs Hub", i: ListCheck },
              { label: "Platform UI", val: "NTA UI", i: Laptop }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-emerald-500/30 transition-all">
                  <stat.i className="w-6 h-6 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1 leading-none">{stat.label}</div>
                  <div className="text-xl font-black text-white">{stat.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Dummy ListCheck as it was used in code but not imported (aliased)
function ListCheck({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 12H3" /><path d="M16 6H3" /><path d="M16 18H3" /><path d="m19 10-4 4 2 2 4-4-2-2Z" />
    </svg>
  );
}

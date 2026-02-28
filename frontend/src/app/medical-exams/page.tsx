"use client";
import React from "react";
import Link from "next/link";
import {
  Building2, Search, Filter, BookOpen, Users, Star, ArrowRight,
  ShieldCheck, Microscope, HeartPulse, Dna, Trophy,
  CheckCircle2, MonitorPlay, Sparkles, Zap, Brain, Activity, Target
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function MedicalExamsCategoryPage() {
  const series = [
    {
      id: "mock-ninja",
      title: "Mock Ninja Series",
      desc: "Strictly NCERT-based 100+ mocks. Focus on speed, accuracy and real exam pattern simulation.",
      tests: 100,
      users: "1.2 Lakh+",
      tag: "Most Popular",
      link: "/medical-exams/neet",
      color: "text-blue-400",
      price: "₹499"
    },
    {
      id: "autogen-matrix",
      title: "The Auto-Gen Matrix",
      desc: "Unique papers generated every day using AI. Tailored to the toughest NTA-level Medical questions.",
      tests: "Unlimited",
      users: "85k+",
      tag: "Recommended",
      link: "/medical-exams/neet",
      color: "text-emerald-400",
      price: "₹1499"
    },
    {
      id: "ranker-legend",
      title: "The Ranker's Legend",
      desc: "The absolute best series. Mocks, Auto-Gen, and 1-on-1 Guidance for AIIMS/NEET aspirants.",
      tests: "Elite Access",
      users: "40k+",
      tag: "Exclusive",
      link: "/medical-exams/neet",
      color: "text-amber-400",
      price: "₹1999"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <Navbar />

      <div className="pt-28 pb-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-sm font-bold mb-6">
              <Microscope className="w-4 h-4" /> Professional Medical Test Series
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Medical Exams</span></h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed font-medium">
              Structured mock tests, AI-powered question generators, and detailed analytics for all top medical entrance examinations.
            </p>

            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search series (e.g. NEET Pro)..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3.5 pl-12 pr-4 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium placeholder:text-slate-500 shadow-sm"
                />
              </div>
              <button className="px-6 py-3.5 bg-slate-800 border border-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors shadow-sm text-slate-300">
                <Filter className="w-4 h-4" /> Filters
              </button>
            </div>

            {/* Quick filter capsules */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {['All', 'NEET UG', 'Chemistry', 'Biology Block'].map((filter) => (
                <button key={filter} className={`px-4 py-1.5 rounded-full text-sm font-bold border ${filter === 'All' ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 shadow-sm'} transition-colors`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {series.map((item) => (
              <Link href={item.link} key={item.id} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-slate-800/30 transition-all duration-300 relative overflow-hidden">
                {item.tag && (
                  <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950 border ${item.id === 'autogen-matrix' ? 'border-emerald-500/20 text-emerald-400' : 'border-blue-500/20 text-blue-400'}`}>
                    {item.tag}
                  </span>
                )}
                <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-slate-700 group-hover:border-emerald-500/20">
                  <Activity className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-black text-white mb-1 group-hover:text-emerald-400 transition-colors uppercase tracking-tight italic">{item.title}</h3>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">{item.price} Pack</p>
                <p className="text-sm text-slate-400 font-medium mb-6 leading-relaxed">{item.desc}</p>

                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-300">
                    <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> {item.tests} Tests
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                      <Users className="w-3.5 h-3.5 text-blue-400" /> {item.users}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-300 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">Explore Course</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

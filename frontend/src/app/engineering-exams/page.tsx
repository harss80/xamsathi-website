"use client";
import React from "react";
import Link from "next/link";
import {
  Building2, Search, Filter, BookOpen, Users, Star, ArrowRight,
  ShieldCheck, TrendingUp, Calculator, FlaskConical, Atom, Trophy,
  CheckCircle2, MonitorPlay
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function EngineeringExamsCategory() {
  const exams = [
    {
      id: 'jee-main',
      title: 'JEE Main 2026',
      desc: 'Complete mock drills aligned with latest NTA pattern. Topic-wise & full length.',
      tests: 300,
      users: '5 Lakh+',
      tag: 'Top Choice',
      link: '/engineering-exams/jee-main'
    },
    {
      id: 'jee-advanced',
      title: 'JEE Advanced',
      desc: 'High-order thinking questions focused on conceptual depth and complex problem solving.',
      tests: 150,
      users: '2 Lakh+',
      tag: 'Premium',
      link: '/engineering-exams/jee-advanced'
    },
    {
      id: 'bitsat',
      title: 'BITSAT 2026',
      desc: 'Speed and accuracy focused test series with dedicated Logic and English sections.',
      tests: 85,
      users: '1 Lakh+',
      link: '/engineering-exams/bitsat'
    },
    {
      id: 'viteee',
      title: 'VITEEE Master',
      desc: 'Specialized mocks for VIT entrance exam including PCMB and Aptitude.',
      tests: 60,
      users: '80k+',
      link: '/engineering-exams/viteee'
    },
    {
      id: 'wbjee',
      title: 'WBJEE Series',
      desc: 'West Bengal Joint Entrance focused mocks with detailed mathematical analysis.',
      tests: 50,
      users: '60k+',
      link: '/engineering-exams/wbjee'
    },
    {
      id: 'comedk',
      title: 'COMEDK / UGET',
      desc: 'Bangalore engineering colleges entrance simulation with last 10 years PYQs.',
      tests: 45,
      users: '50k+',
      link: '/engineering-exams/comedk'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      <Navbar />

      {/* Header / Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 uppercase tracking-widest animate-fade-in">
              <Calculator className="w-4 h-4" /> IIT-JEE & Premium Engineering Prep
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Engineering Career</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Join 8 Lakh+ aspirants using Xamsathi's high-fidelity simulators for JEE Main, Advanced, and BITSAT. Precision analytics to help you cross the cutoff.
            </p>

            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto shadow-2xl rounded-2xl overflow-hidden p-1 bg-slate-800/30 backdrop-blur-md border border-slate-700">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search engineering exams (e.g. JEE Main)..."
                  className="w-full bg-transparent border-none py-4 pl-12 pr-4 text-slate-200 focus:ring-0 font-medium placeholder:text-slate-500"
                />
              </div>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 uppercase text-sm tracking-widest">
                Find Exam
              </button>
            </div>

            {/* Quick filter capsules */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
              {['All', 'JEE Mains', 'JEE Advanced', 'BITSAT', 'State CETs'].map((filter) => (
                <button key={filter} className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest border transition-all ${filter === 'All' ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'}`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {exams.map((exam) => (
              <Link href={exam.link} key={exam.id} className="group flex flex-col bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-blue-500/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors"></div>

                {exam.tag && (
                  <span className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-sm">
                    {exam.tag}
                  </span>
                )}

                <div className="w-16 h-16 rounded-[1.25rem] bg-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600/10 transition-all duration-500 shadow-inner border border-slate-700 group-hover:border-blue-500/30">
                  <Atom className="w-8 h-8 text-blue-400 group-hover:text-blue-500 transition-colors" />
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors tracking-tight uppercase">{exam.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-1 text-sm">{exam.desc}</p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 shadow-sm text-[11px] font-black uppercase tracking-widest text-slate-300">
                      <BookOpen className="w-4 h-4 text-emerald-400" /> {exam.tests} Mocks
                    </div>
                    <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 shadow-sm text-[11px] font-black uppercase tracking-widest text-slate-300">
                      <Users className="w-4 h-4 text-blue-400" /> {exam.users}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between group-hover:border-blue-500/20 transition-colors">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">Launch Module</span>
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                      <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats / Trust Banner */}
          <div className="mt-20 max-w-7xl mx-auto bg-gradient-to-br from-blue-600 to-blue-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/20 rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-64 h-64 border-8 border-white/10 rounded-full"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center items-center">
              <div>
                <div className="text-4xl font-black mb-1">98%</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Syllabus Match</div>
              </div>
              <div className="h-10 w-px bg-white/20 hidden md:block mx-auto"></div>
              <div>
                <div className="text-4xl font-black mb-1">2000+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Advanced Concept PYQs</div>
              </div>
              <div className="h-10 w-px bg-white/20 hidden md:block mx-auto"></div>
              <div className="md:col-span-2">
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Ready to enter IITs?</h4>
                <Link href="/signup" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-700 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-xl active:scale-95 text-sm uppercase tracking-widest">
                  Start Practice Now <CheckCircle2 className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

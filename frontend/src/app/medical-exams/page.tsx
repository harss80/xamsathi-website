"use client";
import React from "react";
import Link from "next/link";
import {
  Building2, Search, Filter, BookOpen, Users, Star, ArrowRight,
  ShieldCheck, Microscope, HeartPulse, Dna, Trophy,
  CheckCircle2, MonitorPlay, Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function MedicalExamsCategory() {
  const exams = [
    {
      id: 'neet',
      title: 'NEET UG 2026',
      desc: 'Strictly NCERT-based testing suite. Covers physics, chemistry, and detailed biology blocks.',
      tests: 400,
      users: '8 Lakh+',
      tag: 'Bestseller',
      link: '/medical-exams/neet'
    },
    {
      id: 'aiims-special',
      title: 'AIIMS Special',
      desc: 'Assertive reasoning and high-difficulty clinical mocks for top medical university entrants.',
      tests: 120,
      users: '1.5 Lakh+',
      tag: 'Elite',
      link: '/medical-exams/aiims'
    },
    {
      id: 'jipmer-pattern',
      title: 'JIPMER Pattern',
      desc: 'Fast-paced mocks covering the specific logical and quantitative patterns of JIPMER.',
      tests: 80,
      users: '90k+',
      link: '/medical-exams/jipmer'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <Navbar />

      {/* Header / Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 uppercase tracking-widest animate-fade-in">
              <Microscope className="w-4 h-4" /> NCERT Focused Medical Prep
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Medical Dreams</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Premium test series designed by top medical educators. 100% NCERT alignment for NEET UG with detailed audio-visual solutions.
            </p>

            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto shadow-2xl rounded-2xl overflow-hidden p-1 bg-slate-800/30 backdrop-blur-md border border-slate-700">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search medical categories..."
                  className="w-full bg-transparent border-none py-4 pl-12 pr-4 text-slate-200 focus:ring-0 font-medium placeholder:text-slate-500"
                />
              </div>
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 uppercase text-sm tracking-widest">
                Search Course
              </button>
            </div>

            {/* Quick filter capsules */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
              {['All', 'NEET UG', 'Biology Block', 'Physics Mastery', 'AIIMS'].map((filter) => (
                <button key={filter} className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest border transition-all ${filter === 'All' ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'}`}>
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
              <Link href={exam.link} key={exam.id} className="group flex flex-col bg-slate-900/50 border border-slate-800 rounded-[2.5rem] p-8 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-emerald-500/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors"></div>

                {exam.tag && (
                  <span className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-sm">
                    {exam.tag}
                  </span>
                )}

                <div className="w-16 h-16 rounded-[1.25rem] bg-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-600/10 transition-all duration-500 shadow-inner border border-slate-700 group-hover:border-emerald-500/30">
                  <HeartPulse className="w-8 h-8 text-emerald-400 group-hover:text-emerald-500 transition-colors" />
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors tracking-tight uppercase">{exam.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-1 text-sm">{exam.desc}</p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 shadow-sm text-[11px] font-black uppercase tracking-widest text-slate-300">
                      <Sparkles className="w-4 h-4 text-amber-400" /> {exam.tests} Tests
                    </div>
                    <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 shadow-sm text-[11px] font-black uppercase tracking-widest text-slate-300">
                      <Users className="w-4 h-4 text-emerald-400" /> {exam.users}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between group-hover:border-emerald-500/20 transition-colors">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">View Analysis</span>
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-emerald-600 transition-all">
                      <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Medical Professional Trust Banner */}
          <div className="mt-20 max-w-7xl mx-auto bg-gradient-to-tr from-emerald-600 to-teal-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Dna className="w-48 h-48" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h4 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">Prepare with National Toppers</h4>
                <p className="text-emerald-50 font-medium mb-8 max-w-xl text-lg opacity-90">
                  Our mock algorithms are calibrated to match the exact hardness of NTA Biology, including recent statement-based question trends.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-xs font-black uppercase tracking-widest">Sectional Timings</div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-xs font-black uppercase tracking-widest">Audio Solutions</div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-xs font-black uppercase tracking-widest">AIR Benchmarking</div>
                </div>
              </div>
              <div className="text-center bg-slate-950/20 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-inner">
                <div className="text-5xl font-black mb-2">₹1,499</div>
                <div className="text-xs font-black uppercase tracking-[0.2em] mb-8 opacity-70">NEET Elite Annual Pass</div>
                <Link href="/signup" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-800 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-xl active:scale-95 text-sm uppercase tracking-widest">
                  Subscribe Elite <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

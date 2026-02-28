"use client";
import React from "react";
import Link from "next/link";
import {
  Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
  ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
  Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X,
  ZapOff, Timer, GraduationCap, ChevronRight, School, Laptop, Microscope,
  MapPin, Building2, FlaskConical, TrendingUp, Search, Globe, Languages,
  Library, FileText, Award, CreditCard, Info, HeartPulse, Dna, Activity, ListCheck
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function TargetNCERTFoundationPage() {
  const syllabus = [
    {
      class: "Class 11th - NCERT Phase",
      subjects: [
        {
          name: "Biology (Core Foundation)",
          chapters: ["Diversity in Living World", "Structural Organization (Plants/Animals)", "Cell: The Unit of Life", "Plant Physiology", "Human Physiology (Full Block)"]
        },
        {
          name: "Physics (Concepts & Logic)",
          chapters: ["Physical World & Measurement", "Laws of Motion & Kinematics", "Work, Energy, Power", "Gravitation", "Thermodynamics & Kinetic Theory", "Oscillations & Waves"]
        },
        {
          name: "Chemistry (Structural Base)",
          chapters: ["Basic Concepts of Chemistry", "Structure of Atom", "Chemical Bonding", "Equilibrium & Redox", "s-Block & p-Block Elements", "General Organic Chemistry"]
        }
      ]
    },
    {
      class: "Class 12th - Board & NEET Sync",
      subjects: [
        {
          name: "Biology (Advanced Application)",
          chapters: ["Reproduction Concepts", "Genetics & Evolution (Crucial)", "Biotechnology & Its Applications", "Biology in Human Welfare", "Ecology & Environment"]
        },
        {
          name: "Physics (Electrodynamics & Optics)",
          chapters: ["Electrostatics & Current", "Magnetism & Magnetic Effects", "EMI & Alternating Current", "Ray & Wave Optics", "Modern Physics (Atoms/Nuclei)", "Semiconductors"]
        },
        {
          name: "Chemistry (Functional Group Focus)",
          chapters: ["Solid State & Solutions", "Chemical Kinetics & Surface Che", "d & f Block Elements", "Coordination Compounds", "Haloalkanes to Amines (Organic)", "Biomolecules & Polymers"]
        }
      ]
    }
  ];

  const testBreakdown = [
    { type: "Chapter-wise Tests", count: "97 Tests", desc: "Covers every single chapter of NCERT Class 11 & 12." },
    { type: "Unit-wise Mocks", count: "25 Tests", desc: "Combined tests for related units (e.g. Human Physio Unit)." },
    { type: "Full Length Mocks", count: "20 Tests", desc: "Exact NTA 720 marks pattern simulation." },
    { type: "PYQ Collections", count: "10 Years", desc: "Last 10 years papers solved with NCERT references." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      <Navbar />

      {/* 🔥 Hero Detail Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-black mb-8 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> Comprehensive Pre-Purchase Breakdown
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Target NCERT Foundation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 tracking-tighter uppercase">Series Details</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl font-bold leading-relaxed">
              Aapki GMC (Govt Medical College) ki raah yahan se shuru hoti hai. Har chota-bada detail check karein pehle kharidne se taaki aapko pata ho ki aap kya padh rahe hain.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-3xl">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-1">Target Score</span>
                <span className="text-2xl font-black text-emerald-400">650+ / 720</span>
              </div>
              <div className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-3xl">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-1">Total MCQs</span>
                <span className="text-2xl font-black text-blue-400">15,000+</span>
              </div>
              <div className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-3xl">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-1">Validity</span>
                <span className="text-2xl font-black text-amber-500">NEET 2026 Exam</span>
              </div>
            </div>

            <Link href="/checkout?plan=medical-lite" className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-3xl transition-all shadow-2xl shadow-emerald-900/40 text-2xl active:scale-95 group uppercase tracking-widest outline outline-8 outline-emerald-500/10">
              Get Access Now ₹499 <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 📊 Chapter-wise Matrix */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20 underline decoration-slate-800 decoration-offset-[16px]">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">NCERT Mastery Matrix</h2>
            <p className="text-slate-500 font-black uppercase text-xs tracking-[0.4em] leading-relaxed">Every Block | Every Subject | Every Chapter Covered</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {syllabus.map((phase, i) => (
              <div key={i} className="bg-slate-950 rounded-[3rem] p-10 border border-slate-800 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-5 -mr-12 -mt-12 group-hover:scale-110 transition-all"><BookOpen className="w-48 h-48" /></div>
                <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4 uppercase tracking-tight">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-black">{i + 1}</div>
                  {phase.class}
                </h3>

                <div className="space-y-10">
                  {phase.subjects.map((sub, j) => (
                    <div key={j} className="relative z-10">
                      <h4 className="text-sm font-black text-emerald-400 uppercase tracking-widest mb-4 border-b border-white/5 pb-2 flex items-center justify-between">
                        {sub.name} <Activity className="w-4 h-4 opacity-50" />
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {sub.chapters.map((chap, k) => (
                          <div key={k} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:border-emerald-500/30 transition-all shadow-sm">
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

      {/* 📋 Test Series Structure Details */}
      <section className="py-24 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase underline decoration-emerald-600 decoration-8 underline-offset-[12px]">Detailed Test Structure</h2>
              <p className="text-lg text-slate-400 mb-10 font-bold leading-relaxed">
                Series purchase karne par aapko ye sections milenge dashboard me:
              </p>

              <div className="space-y-4">
                {testBreakdown.map((test, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-slate-900/50 border border-slate-800 rounded-[2rem] hover:bg-slate-900 transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-black text-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner border border-white/5">{test.count}</div>
                    <div>
                      <h4 className="text-lg font-black text-white mb-1 uppercase tracking-tight">{test.type}</h4>
                      <p className="text-sm text-slate-500 font-bold leading-relaxed">{test.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900 to-slate-950 p-1 rounded-[3.5rem] shadow-2xl">
              <div className="bg-slate-950 rounded-[3.3rem] p-12 relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12"><Sparkles className="w-48 h-48" /></div>
                <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-tighter italic">Small Details That Matter:</h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    { t: "Rationalized Syllabus", v: "Hamare mocks 2026 ke updated rationalized NCERT syllabus par based hain." },
                    { t: "Rational Logic Solutions", v: "Sirf answer nahi, 'Kyu hai' aur 'Kyu nahi hai' dono logic explained hain." },
                    { t: "AIR Projection", v: "Real-time leaderboard among thousands of students." },
                    { t: "Desktop & Mobile", v: "Prepare on laptop like real NTA UI or on app for quick mcqs." },
                    { t: "NCERT Mapping", v: "Har Biology answer ke saath NCERT Page Number mentioned hai." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-sm font-black text-emerald-400 uppercase tracking-widest leading-none mb-1">{item.t}</span>
                        <p className="text-xs text-slate-400 font-bold leading-relaxed">{item.v}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-white/5">
                  <div className="text-amber-500 font-black uppercase text-[10px] tracking-widest mb-4 animate-pulse">Pre-Order Bonus:</div>
                  <p className="text-sm font-bold text-slate-300 italic leading-relaxed">Early users get 5 exclusive chemistry formula cheat sheets in PDF format.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Mini Section */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 underline decoration-slate-800 decoration-offset-[16px]">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">Why Foundation?</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-[3rem] p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-2 italic">Foundation (₹499) <Trophy className="w-4 h-4" /></h4>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-300"><Check className="w-4 h-4 text-emerald-400" /> Full Mock Papers</div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-300"><Check className="w-4 h-4 text-emerald-400" /> 11th & 12th Syllabus</div>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-300"><Check className="w-4 h-4 text-emerald-400" /> Topic-wise Strength</div>
              <div className="flex items-center gap-3 text-slate-600 font-bold opacity-30 italic"><X className="w-4 h-4 text-rose-500" /> AI Auto-Gen Matrix</div>
            </div>
            <div className="space-y-4 border-l border-white/5 pl-0 md:pl-12">
              <h4 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-2 italic">Matrix Pro (₹1499) <Zap className="w-4 h-4" /></h4>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-300"><Check className="w-4 h-4 text-emerald-400" /> Everything in Foundation</div>
              <div className="flex items-center gap-3 text-sm font-bold text-white"><Check className="w-5 h-5 text-blue-400" /> AI-Generated Unique Tests</div>
              <div className="flex items-center gap-3 text-sm font-bold text-white"><Check className="w-5 h-5 text-blue-400" /> Personalized Weakness Maps</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl group border border-slate-800">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform"><Trophy className="w-64 h-64 text-emerald-400" /></div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase relative z-10 leading-none underline decoration-emerald-600 decoration-8 underline-offset-[16px]">Ready to start your <br /> Foundation properly?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-10">
              <Link href="/checkout?plan=medical-lite" className="px-14 py-6 bg-white text-blue-900 font-black rounded-3xl text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest leading-none">
                Yes, Enrol Now <ArrowRight className="w-8 h-8 inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

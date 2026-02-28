"use client";
import React from "react";
import Link from "next/link";
import {
  Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy,
  ShieldCheck, Check, Atom, Plus, ArrowRight, Zap, Target, Brain,
  Lock, Sparkles, LayoutDashboard, Calculator, MonitorPlay, HelpCircle, X,
  ZapOff, Timer, GraduationCap, ChevronRight, School, Laptop, Microscope,
  MapPin, Building2, FlaskConical, TrendingUp, Search, Globe, Languages,
  Library, FileText, Award, CreditCard, Info
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function CUETPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
      <Navbar />

      {/* 🔥 Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-black mb-8 uppercase tracking-widest shadow-sm">
                <Trophy className="w-4 h-4" /> NTA CUET (UG) 2026: Master Guide
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                Crack CUET 2026 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 uppercase">Top 1% Series</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl lg:mx-0 mx-auto font-bold leading-relaxed">
                Gateway to DU, BHU, JNU & 250+ Universities. Domain-Specific Mastery | Language Proficiency | General Test Logic.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
                <Link href="/dashboard/test-series/cuet-free" className="px-10 py-5 bg-amber-600 hover:bg-amber-500 text-white font-black rounded-2xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl shadow-lg shadow-amber-500/40 active:scale-95 group">
                  <Zap className="w-6 h-6 fill-white" /> Attempt Free Mock
                </Link>
                <Link href="#exam-details" className="px-10 py-5 bg-slate-950 border-2 border-slate-800 hover:border-slate-600 text-white font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-xl active:scale-95 group">
                  <FileText className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" /> Full Guide
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 border-t border-slate-800/50 pt-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-black text-white leading-none">50k+</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">NTA Aspirants</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800">
                    <Library className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-black text-white leading-none">250+</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Uni. Targeted</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-black text-white leading-none">99.9%ile</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Success Aim</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[3rem] p-8 shadow-2xl relative group">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl animate-pulse"></div>
                <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                  <MonitorPlay className="w-6 h-6 text-amber-400" /> Exam Quick Facts
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Conducting Body", val: "NTA (National Testing Agency)", i: Building2, c: "text-blue-400" },
                    { label: "Exam Type", val: "National Level (CBT Mode)", i: Globe, c: "text-emerald-400" },
                    { label: "Marking Scheme", val: "+5 Correct | -1 Incorrect", i: Award, c: "text-amber-400" },
                    { label: "Exam Dates", val: "May 11 - May 31, 2026", i: Calendar, c: "text-rose-400" },
                    { label: "Application Fee", val: "₹1000 (Gen/3 Subjects)", i: CreditCard, c: "text-indigo-400" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800/50 hover:bg-slate-900 transition-colors group/item">
                      <div className={`w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5 ${item.c}`}>
                        <item.i className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.15em] leading-none mb-1.5">{item.label}</p>
                        <p className="text-sm font-black text-slate-200">{item.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📝 Exam Pattern Section */}
      <section id="exam-details" className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter underline decoration-amber-600 decoration-4 underline-offset-8">CUET 2026 Exam Pattern</h2>
            <p className="text-lg text-slate-400 font-bold max-w-2xl mx-auto italic">"A Hybrid Sectional Architecture to test Multidisciplinary Aptitude."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Section 1: Languages */}
            <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 hover:border-amber-500/30 transition-all flex flex-col relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform"><Languages className="w-24 h-24" /></div>
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-8 border border-amber-500/20 shadow-inner">
                <Languages className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Sec I: Languages</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-1">Choice of 13+20 languages. Tests Reading Comprehension, Literary Aptitude & Vocabulary.</p>
              <div className="space-y-3 pt-6 border-t border-slate-800 text-sm font-bold">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Questions to Attempt</span>
                  <span className="text-amber-400 font-black">40 / 50</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Duration</span>
                  <span className="text-slate-400">60 Minutes</span>
                </div>
              </div>
            </div>

            {/* Section 2: Domain Subjects */}
            <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 hover:border-blue-500/30 transition-all flex flex-col relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform"><BookOpen className="w-24 h-24" /></div>
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20 shadow-inner">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Sec II: Domain</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-1">27 Subjects based on NCERT Class 12 Syllabus. Critical for specific course eligibility (DU/BHU).</p>
              <div className="space-y-3 pt-6 border-t border-slate-800 text-sm font-bold">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Questions to Attempt</span>
                  <span className="text-blue-400 font-black">40 / 50</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Duration</span>
                  <span className="text-slate-400">60 Minutes</span>
                </div>
              </div>
            </div>

            {/* Section 3: General Test */}
            <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 hover:border-emerald-500/30 transition-all flex flex-col relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform"><Brain className="w-24 h-24" /></div>
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-8 border border-emerald-500/20 shadow-inner">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Sec III: General Test</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-1">GK, Current Affairs, Mental Ability, Numerical Ability, Logical & Analytical Reasoning.</p>
              <div className="space-y-3 pt-6 border-t border-slate-800 text-sm font-bold">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Questions to Attempt</span>
                  <span className="text-emerald-400 font-black">50 / 60</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Duration</span>
                  <span className="text-slate-400">60 Minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📚 Detailed Syllabus Matrix */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none px-4 py-2 border-x-8 border-amber-600 inline-block">Chapter Mastery Matrix</h2>
            <p className="text-slate-500 font-black uppercase text-xs tracking-[0.5em] mt-6 leading-none italic">"NCERT Class 12 Syllabus Alignment"</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-slate-950 p-8 rounded-[3rem] border border-slate-800 hover:border-amber-500/20 transition-all group shadow-xl">
                <h4 className="text-xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                  <Atom className="w-6 h-6 text-amber-400" /> Science Domain subjects
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    { s: "Chemistry", d: "Solutions, Electrochemistry, Kinetics, p-Block." },
                    { s: "Physics", d: "Electrostatics, Optics, Modern Physics." },
                    { s: "Maths", d: "Calculus, Vectors, Probability, Linear Prog." },
                    { s: "Biology", d: "Genetics, Biotechnology, Reproduction." }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-1 italic">{item.s}</div>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 p-8 rounded-[3rem] border border-slate-800 hover:border-blue-500/20 transition-all group shadow-xl">
                <h4 className="text-xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-blue-400" /> Commerce & Arts
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    { s: "Economics", d: "Macroeconomics, Indian Economic Development." },
                    { s: "Business Studies", d: "Management, Marketing, Financial Markets." },
                    { s: "History", d: "Harappan, Colonialism, Mughal Era." },
                    { s: "Pol Science", d: "Cold War Era, India's Foreign Policy." }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1 italic">{item.s}</div>
                      <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-600 to-orange-800 rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 transition-transform group-hover:scale-125"><Brain className="w-48 h-48" /></div>
                <h3 className="text-3xl font-black mb-8 uppercase tracking-tighter relative z-10">General Test Logic</h3>
                <div className="space-y-6 relative z-10 mb-10">
                  {[
                    { t: "Quantitative Reasoning", d: "Basic Mathematics up to Grade 8." },
                    { t: "Logical Reasoning", d: "Series, Analogy, Puzzles & Syllogism." },
                    { t: "General Awareness", d: "Static GK & National/Intl Current Affairs." },
                    { t: "Numerical Ability", d: "Arithmetic, Algebra & Geometry Drills." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-xs shrink-0">{i + 1}</div>
                      <div>
                        <div className="text-sm font-black uppercase tracking-tight mb-1">{item.t}</div>
                        <p className="text-xs font-bold text-amber-100 opacity-80 leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white text-orange-700 flex items-center justify-center font-black">250</div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-widest opacity-80">Total GAT Points</div>
                      <div className="text-lg font-black leading-none mt-1">50 Qs × 5 Marks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🥈 Top Universities Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter underline decoration-amber-600 decoration-offset-8">Target the Ivy League</h2>
            <p className="text-slate-500 font-black uppercase text-xs tracking-widest leading-relaxed">Admission for these Top institutions is Strictly through CUET-UG score.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { n: "University of Delhi", s: "Hindu, LSR, SRCC", i: School, c: "text-blue-400" },
              { n: "BHU Varanasi", s: "FMS, Inst. of Science", i: Building2, c: "text-amber-400" },
              { n: "JNU New Delhi", s: "Foreign Lang, Biotech", i: Globe, c: "text-emerald-400" },
              { n: "Jamia Millia", s: "Mass Comm, Engineering", i: Library, c: "text-indigo-400" },
              { n: "AMU Aligarh", s: "Law, Medical, Arts", i: FileText, c: "text-rose-400" },
              { n: "Univ. of Hyderabad", s: "Integrated Masters", i: Search, c: "text-cyan-400" },
              { n: "Visva Bharati", s: "Shantiniketan Heritage", i: Award, c: "text-yellow-400" },
              { n: "250+ More", s: "Private & Deemed Unis", i: Plus, c: "text-slate-500" }
            ].map((uni, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] flex flex-col items-center text-center group hover:bg-slate-800 transition-all hover:border-amber-500/20">
                <div className={`w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 border border-white/5 ${uni.c} group-hover:scale-110 transition-transform`}>
                  <uni.i className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-white mb-2 uppercase tracking-tighter leading-none">{uni.n}</h4>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{uni.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💰 Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900 border-t border-slate-800 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter underline decoration-amber-600 decoration-8 underline-offset-[12px]">Elite Access Packs</h2>
            <p className="text-lg text-slate-500 font-bold uppercase tracking-widest mt-8 italic leading-none">Choose Your Roadmap to 100%ile</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
            {/* Starter Pack */}
            <div className="bg-slate-950 border border-slate-800 rounded-[3rem] p-10 hover:border-slate-700 transition-all shadow-lg relative h-full flex flex-col">
              <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-2 bg-slate-800 text-slate-400 text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-slate-700">🥉 Basic</div>
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">CUET Starter</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white tracking-tighter">₹499</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                {[
                  "10 Full Pattern Mocks",
                  "20 Topic-wise Tests",
                  "Standard Performance Data",
                  "Language + 2 Domains Only",
                  "6 Months Validity"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400 text-sm font-bold">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>
              <Link href="/checkout?plan=cuet-basic" className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl flex justify-center transition-all border border-slate-800 uppercase tracking-widest shadow-xl active:scale-95 leading-none px-4">Enrol Basics</Link>
            </div>

            {/* Pro Pack - Recommended */}
            <div className="bg-slate-950 border-2 border-amber-600 rounded-[3.5rem] p-12 relative scale-100 lg:scale-110 z-10 shadow-2xl h-full flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-amber-600 text-white text-[10px] font-black rounded-full uppercase tracking-[0.3em] flex items-center gap-2 shadow-xl">
                <Sparkles className="w-3 h-3 fill-white" /> Recommended
              </div>
              <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight mt-4 italic">CUET Gold Pack</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl font-black text-white tracking-tighter">₹999</span>
                <span className="text-slate-600 line-through text-lg font-bold">₹1999</span>
              </div>
              <div className="space-y-5 mb-12 flex-1">
                {[
                  "30 Full Pattern Mocks",
                  "All 23 Domain Subject Tests",
                  "Full General Test Mastery",
                  "AI Ranker for Top 1%ile",
                  "PYQ Drills (2022-2025)",
                  "1 Year Full Validity"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white text-sm font-bold">
                    <Check className="w-5 h-5 text-amber-500 shrink-0" /> {feature}
                  </div>
                ))}
              </div>
              <Link href="/checkout?plan=cuet-pro" className="w-full py-6 bg-amber-600 hover:bg-amber-500 text-white font-black rounded-3xl flex justify-center transition-all shadow-xl shadow-amber-900/40 uppercase tracking-widest active:scale-95 leading-none px-4 text-xl">Get Gold Access</Link>
            </div>

            {/* Elite Pack */}
            <div className="bg-slate-950 border border-slate-800 rounded-[3rem] p-10 hover:border-slate-700 transition-all shadow-lg relative h-full flex flex-col">
              <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-2 bg-indigo-500/10 text-indigo-400 text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-indigo-500/20">🥇 Elite</div>
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">University All-Pass</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-black text-white tracking-tighter">₹1499</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                {[
                  "Everything in Gold Pack",
                  "2 Years Multi-Year Access",
                  "PG Entrance Prep included",
                  "University Specific Guide",
                  "Priority Expert Support"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400 text-sm font-bold">
                    <Check className="w-4 h-4 text-indigo-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>
              <Link href="/checkout?plan=cuet-elite" className="w-full py-5 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl flex justify-center transition-all border border-slate-800 uppercase tracking-widest shadow-xl active:scale-95 leading-none px-4">Buy Elite Pass</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 CTA Banner */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl group border border-slate-800">
            <div className="absolute top-0 left-0 w-full h-full bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase relative z-10 leading-none underline decoration-amber-600 decoration-8 underline-offset-[16px]">Your Dream University <br /> Is Just a Mock Away.</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pt-10">
              <Link href="/dashboard/test-series/cuet" className="px-14 py-6 bg-amber-600 text-white font-black rounded-3xl text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase tracking-widest leading-none">
                Start Training Free <ArrowRight className="w-8 h-8 inline-block ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

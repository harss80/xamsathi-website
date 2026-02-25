import Link from "next/link";
import { Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Trophy, ShieldCheck, Check, X, FileText, TrendingUp, Cpu, Award, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function UPSCExamsCategoryPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {/* Section 1 - Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-bold mb-6">
                <Trophy className="w-4 h-4" /> Top Ranked Test Series
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                UPSC Civil Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">2026</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Prelims + Mains + CSAT Complete Preparation with exact UPSC syllabus matching and all-India ranking.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link href="#courses" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-lg shadow-blue-500/20">
                  🚀 View Plans
                </Link>
                <Link href="#demo" className="px-8 py-4 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                  📘 Start Free Prelims Mock
                </Link>
                <Link href="/government-exams/upsc/schedule" className="px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-sm">
                  <Calendar className="w-5 h-5" /> View Schedule
                </Link>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

              <div className="space-y-8 relative z-10">
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Star className="w-8 h-8 fill-amber-400" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-black text-white">4.9/5 Rating</div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">From serious aspirants</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-black text-white">50,000+</div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Registered Aspirants</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-black text-white">200+ Tests</div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Available for practice</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2 - Available UPSC Test Series */}
      <section id="courses" className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Available UPSC Test Series</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Select the perfect plan for your Civil Services preparation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">

            {/* UPSC Prelims Test Series */}
            <div className="flex flex-col bg-slate-950 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-slate-700 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">UPSC Prelims Test Series</h3>
              <div className="flex items-center gap-2 mb-8">
                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total Tests: 125+</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {[
                  "40 Full Length Prelims Mocks",
                  "50 Chapter-wise Tests",
                  "25 PYQ Tests",
                  "CSAT Practice (10 tests)",
                  "Detailed Explanation",
                  "All India Rank"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 mb-6 flex justify-between items-center text-center">
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                  <div className="text-base font-bold text-white">₹999</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-blue-400 tracking-wider mb-1">Pro</div>
                  <div className="text-base font-bold text-blue-400">₹1499</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-amber-400 tracking-wider mb-1">Premium</div>
                  <div className="text-base font-bold text-amber-400">₹1999</div>
                </div>
              </div>

              <Link href="/government-exams/upsc/prelims" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95">
                View Details
              </Link>
            </div>

            {/* UPSC Complete Package (Most Popular) */}
            <div className="flex flex-col border-2 border-blue-600 rounded-3xl p-8 relative overflow-hidden group scale-100 md:scale-105 z-10 bg-slate-900">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 text-white text-xs font-black rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2 whitespace-nowrap">⭐ MOST POPULAR</div>
              <h3 className="text-3xl font-black text-white mb-2 mt-4 text-center">UPSC Complete Package</h3>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total Tests: 160+</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {[
                  "Prelims Full Mocks",
                  "Mains Full Mocks",
                  "CSAT Focus",
                  "Essay Tests",
                  "Performance Analytics",
                  "Rank Tracking"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-bold">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>

              {/* Highlighted pricing */}
              <div className="mb-6 text-center bg-slate-950 rounded-2xl border border-slate-800 p-5">
                <div className="text-xs font-black text-blue-400 uppercase tracking-widest mb-2">Pro Plan Highly Recommended</div>
                <div className="text-4xl font-black text-white mb-2">₹2499</div>
                <div className="flex justify-center gap-4 text-sm mt-3 border-t border-slate-800 pt-3">
                  <div className="text-slate-500">Basic <span className="font-bold text-slate-400">₹1999</span></div>
                  <div className="text-slate-500">Premium <span className="font-bold text-slate-400">₹2999</span></div>
                </div>
              </div>

              <Link href="/government-exams/upsc/complete" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-lg">
                View Details
              </Link>
            </div>

            {/* UPSC Mains Test Series */}
            <div className="flex flex-col bg-slate-950 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-slate-700 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">UPSC Mains Test Series</h3>
              <div className="flex items-center gap-2 mb-8">
                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total Tests: 43+</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {[
                  "20 GS Full Length Tests",
                  "8 Essay Tests",
                  "15 Sectional GS Tests",
                  "Model Answers Provided",
                  "PDF Evaluation Format"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 mb-6 flex justify-between items-center text-center">
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                  <div className="text-base font-bold text-white">₹1499</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-blue-400 tracking-wider mb-1">Pro</div>
                  <div className="text-base font-bold text-blue-400">₹1999</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-amber-400 tracking-wider mb-1">Premium</div>
                  <div className="text-base font-bold text-amber-400">₹2499</div>
                </div>
              </div>

              <Link href="/government-exams/upsc/mains" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95">
                View Details
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3 - Comparison Table */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Plan Comparison Table</h2>
              <p className="text-lg text-slate-400">Compare what is included in Basic, Pro, and Premium tiers.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-950 border-b border-slate-800">
                      <th className="p-6 text-left font-bold text-white text-lg">Feature</th>
                      <th className="p-6 font-bold text-slate-300 text-lg">Basic</th>
                      <th className="p-6 font-black text-blue-400 text-lg bg-blue-600/5 relative">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>
                        Pro
                      </th>
                      <th className="p-6 font-bold text-amber-400 text-lg">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-left font-medium">Prelims Complete</td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                      <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-left font-medium">Mains Mock Tests</td>
                      <td className="p-6 text-slate-400 font-semibold">Limited</td>
                      <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-left font-medium">Essay Practice</td>
                      <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                      <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-left font-medium">All India Ranking</td>
                      <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                      <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-left font-medium">PDF Performance Evaluation</td>
                      <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                      <td className="p-6 bg-blue-600/5"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-left font-medium">2 Year Access Validity</td>
                      <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                      <td className="p-6 bg-blue-600/5"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Free Demo */}
      <section id="demo" className="py-24 bg-slate-900 border-y border-slate-800 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-[2.5rem] p-12 md:p-16 text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-sm font-bold mb-8">
              <ShieldCheck className="w-4 h-4" /> Zero Commitment Required
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Test the Quality Yourself.
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4 text-slate-200 font-bold">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-blue-500" /> 1 Free Prelims Mock</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> 1 Free CSAT Mock</div>
            </div>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              No credit card required. Experience tricky GS conceptual questions matching the UPSC standard and evaluate your accuracy.
            </p>

            <Link href="/dashboard/test-series/upsc" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-950 hover:bg-slate-200 font-black rounded-2xl transition-all duration-300 active:scale-95 text-lg border border-slate-300">
              <Play className="w-5 h-5 fill-slate-950 text-slate-950" />
              Start Free Test
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 - Why Choose Xamsathi for UPSC */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Why Choose Xamsathi for UPSC</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Tackle the unpredictable nature of the civil services examination.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:border-slate-700 transition-colors flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-white mb-2">Real UPSC Pattern</h4>
              <p className="text-sm text-slate-400">Questions mirroring the exact difficulty and surprise elements of real exams.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:border-slate-700 transition-colors flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-white mb-2">Latest Current Affairs Based</h4>
              <p className="text-sm text-slate-400">Regularly updated CA integrated broadly with static subjects.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:border-slate-700 transition-colors flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-white mb-2">Affordable fees</h4>
              <p className="text-sm text-slate-400">High-quality content at minimum cost. Others charge 10k-20k.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:border-slate-700 transition-colors flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-white mb-2">Instant Evaluation</h4>
              <p className="text-sm text-slate-400">Immediate, pinpointed weakness identification via AI insights.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:border-slate-700 transition-colors flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-white mb-2">Detailed Explanation</h4>
              <p className="text-sm text-slate-400">Learn from extensive explanations to every option, not just the correct one.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

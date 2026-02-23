import Link from "next/link";
import { Star, Users, CheckCircle2, Play, BookOpen, Clock, Trophy, ShieldCheck, Check, X, Train } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function RailwayExamsCategoryPage() {
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
                Railway Recruitment <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">2026</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                NTPC • Group D • ALP Complete Preparation. Get the most authentic mock tests strictly based on RRB CBT patterns.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="#courses" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-lg shadow-blue-500/20">
                  🚀 View Plans
                </Link>
                <Link href="#demo" className="px-8 py-4 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                  📘 Start Free Mock
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
                    <div className="text-3xl font-black text-white">4.7/5 Rating</div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">From students nationwide</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-black text-white">2.1 Lakh+</div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Enrolled Aspirants</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl font-black text-white">350+ Tests</div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Available for practice</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2 - Available Railway Test Series */}
      <section id="courses" className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Available Railway Test Series</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Target exact RRB exams with customized test packages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">

            {/* RRB NTPC CARD */}
            <div className="flex flex-col bg-slate-900 border-2 border-blue-600 rounded-3xl p-8 relative overflow-hidden group scale-100 md:scale-105 z-10 shadow-xl">
              <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">Highlight</div>
              <h3 className="text-3xl font-black text-white mb-2 mt-2">RRB NTPC</h3>
              <div className="flex items-center gap-2 mb-8">
                <span className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total Tests: 85+</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {[
                  "25 Full Length Mocks",
                  "40 Sectional Tests",
                  "20 PYQ Papers",
                  "CBT-1 & CBT-2 Pattern",
                  "All India Rank",
                  "Detailed Solutions"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-200 text-sm font-bold">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 mb-6 flex justify-between items-center text-center">
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                  <div className="text-base font-bold text-slate-400">₹499</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-blue-400 tracking-wider mb-1">Pro</div>
                  <div className="text-xl font-bold text-blue-400">₹799</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-amber-400 tracking-wider mb-1">Premium</div>
                  <div className="text-base font-bold text-amber-400">₹999</div>
                </div>
              </div>

              <Link href="/government-exams/railway/ntpc" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                View Details
              </Link>
            </div>

            {/* RRB GROUP D CARD */}
            <div className="flex flex-col bg-slate-950 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-slate-700 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">RRB Group D</h3>
              <div className="flex items-center gap-2 mb-8">
                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total Tests: 65+</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {[
                  "20 Full Length Mocks",
                  "30 Sectional Tests",
                  "15 PYQ Papers",
                  "Physical Test Guidance PDF",
                  "Rank System"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 mb-6 flex justify-between items-center text-center">
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                  <div className="text-base font-bold text-slate-400">₹399</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-blue-400 tracking-wider mb-1">Pro</div>
                  <div className="text-xl font-bold text-blue-400">₹699</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-amber-400 tracking-wider mb-1">Premium</div>
                  <div className="text-base font-bold text-amber-400">₹899</div>
                </div>
              </div>

              <Link href="/government-exams/railway/group-d" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-lg">
                View Details
              </Link>
            </div>

            {/* RRB ALP CARD */}
            <div className="flex flex-col bg-slate-950 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-slate-700 transition-colors">
              <h3 className="text-2xl font-black text-white mb-2">RRB ALP</h3>
              <div className="flex items-center gap-2 mb-8">
                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total Tests: 78+</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {[
                  "25 Full Length Mocks",
                  "35 Sectional Tests",
                  "18 PYQ Papers",
                  "CBT-1 + CBT-2",
                  "Technical Paper Practice",
                  "Analytics"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 mb-6 flex justify-between items-center text-center">
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                  <div className="text-base font-bold text-slate-400">₹599</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-blue-400 tracking-wider mb-1">Pro</div>
                  <div className="text-xl font-bold text-blue-400">₹899</div>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                <div>
                  <div className="text-[10px] font-black uppercase text-amber-400 tracking-wider mb-1">Premium</div>
                  <div className="text-base font-bold text-amber-400">₹1099</div>
                </div>
              </div>

              <Link href="/government-exams/railway/alp" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-lg">
                View Details
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3 - Railway Combo Pack */}
      <section className="py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Railway Complete Combo</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">Get access to every single test for Railway Recruitment Board exams in a single discounted package.</p>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-10 rounded-[2.5rem] max-w-3xl mx-auto shadow-2xl relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Train className="w-32 h-32 text-blue-500" />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 text-amber-400 text-xs font-black rounded-full uppercase tracking-widest mb-6 border border-amber-500/30">
                  🔥 MOST POPULAR
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-3 text-white font-bold"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Includes RRB NTPC</li>
                  <li className="flex items-center gap-3 text-white font-bold"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Includes RRB Group D</li>
                  <li className="flex items-center gap-3 text-white font-bold"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Includes RRB ALP</li>
                  <li className="flex items-center gap-3 text-amber-400 font-bold"><Trophy className="w-5 h-5 text-amber-400" /> Total 220+ Tests Access</li>
                </ul>
              </div>
              <div className="text-center bg-slate-950 p-6 rounded-3xl border border-slate-800 flex flex-col justify-center">
                <div className="text-sm font-black text-slate-500 uppercase tracking-widest mb-2 line-through">Total value: ₹3000+</div>
                <div className="text-5xl font-black text-white mb-6">₹1499</div>
                <Link href="/checkout?plan=combo&exam=upsc-combo" className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl transition-all shadow-lg active:scale-95">Enroll Combo Plan</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Comparison Table */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Plan Comparison Table</h2>
              <p className="text-lg text-slate-400">Compare what is included in Basic, Pro, and Premium tiers.</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-900 border-b border-slate-800">
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
                      <td className="p-6 text-left font-medium">Full Mocks</td>
                      <td className="p-6 text-slate-400 font-semibold">Limited</td>
                      <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-left font-medium">Sectional Tests</td>
                      <td className="p-6 text-slate-400 font-semibold">Limited</td>
                      <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-left font-medium">PYQ Papers</td>
                      <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                      <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-left font-medium">Rank System</td>
                      <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                      <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-left font-medium">1 Year Access</td>
                      <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                      <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                      <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-left font-medium">2 Year Access</td>
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

      {/* Section 5 - Free Demo */}
      <section id="demo" className="py-24 bg-slate-950 border-y border-slate-800 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-[2.5rem] p-12 md:p-16 text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-bold mb-8">
              <ShieldCheck className="w-4 h-4" /> Zero Commitment Required
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Test Our Quality Yourself.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-slate-200 font-bold">
              <div className="flex items-center gap-2 px-6 py-3 bg-slate-950 border border-slate-800 rounded-xl"><CheckCircle2 className="w-5 h-5 text-blue-500" /> 1 NTPC Mock</div>
              <div className="flex items-center gap-2 px-6 py-3 bg-slate-950 border border-slate-800 rounded-xl"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> 1 Group D Mock</div>
            </div>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              No credit card required. Experience tricky Reasoning & Quant conceptual questions matching the RRB standard and evaluate your accuracy.
            </p>

            <Link href="/dashboard/test-series/railway" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-950 hover:bg-slate-200 font-black rounded-2xl transition-all duration-300 active:scale-95 text-lg border border-slate-300">
              <Play className="w-5 h-5 fill-slate-950 text-slate-950" />
              Start Free Tests
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

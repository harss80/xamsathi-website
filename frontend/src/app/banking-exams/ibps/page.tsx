import Link from "next/link";
import { Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy, ShieldCheck, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function IBPSExamPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      {/* Section 1 - Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6">
              <Trophy className="w-4 h-4" /> Bestseller Test Series 2026
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              IBPS PO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Test Series</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto font-medium">
              The ultimate practice material with real exam interface, latest TCS pattern questions, and all-India ranking.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden relative shadow-sm">
                      <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=SSC${i}`} fill alt="User" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-300 ml-2">50k+ Enrolled</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-black text-amber-400">4.8/5 Rating</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#pricing" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                🚀 Buy Test Series
              </Link>
              <Link href="/dashboard/test-series/ibps-po" className="px-8 py-4 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                📘 View Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - About The Exam */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-white mb-6">About IBPS PO Exam</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Details about IBPS PO will be described here.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Selection Process</h4>
                    <p className="text-sm text-slate-400 mt-1">Tier 1 (Qualifying) → Tier 2 (Merit Deciding) → Document Verification</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Important Dates</h4>
                    <p className="text-sm text-slate-400 mt-1">Notification: Expected April 2026 | Tier 1 Exam: Aug-Sep 2026</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><BookOpen className="w-5 h-5 text-blue-400" /> Exam Pattern (Tier 1)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-sm">
                      <th className="pb-3 font-semibold">Subject</th>
                      <th className="pb-3 font-semibold">Qs</th>
                      <th className="pb-3 font-semibold">Marks</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-slate-300">
                    <tr className="border-b border-slate-800/50">
                      <td className="py-4">Reasoning</td>
                      <td className="py-4">25</td>
                      <td className="py-4">50</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-4">General Awareness</td>
                      <td className="py-4">25</td>
                      <td className="py-4">50</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-4">Quantitative Aptitude</td>
                      <td className="py-4">25</td>
                      <td className="py-4">50</td>
                    </tr>
                    <tr className="border-b border-slate-800/50">
                      <td className="py-4">English Comprehension</td>
                      <td className="py-4">25</td>
                      <td className="py-4">50</td>
                    </tr>
                    <tr className="text-white font-bold bg-slate-900/50">
                      <td className="py-4 px-2 rounded-l-lg">Total Duration: 60 Mins</td>
                      <td className="py-4">100</td>
                      <td className="py-4 px-2 rounded-r-lg">200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - What You Get */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Why Choose This Test Series?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to crack SSC CGL in your first attempt, packed into one single platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Full Length Mocks", desc: "Based strictly on TCS pattern.", icon: Trophy },
              { title: "Chapter-wise Tests", desc: "Master individual topics.", icon: BookOpen },
              { title: "Previous Year Papers", desc: "From 2019 to 2024 included.", icon: Clock },
              { title: "Detailed Solutions", desc: "Step-by-step shortcuts provided.", icon: CheckCircle2 },
              { title: "Performance Analytics", desc: "Weak area identification.", icon: BarChart3 },
              { title: "All India Ranking", desc: "Compete with 50k+ aspirants.", icon: Users },
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400 font-medium">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Test Series Structure */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-8 border-b border-slate-800 bg-slate-900/50">
                <h2 className="text-2xl md:text-3xl font-black text-white">Test Series Structure</h2>
                <p className="text-slate-400 mt-2">A total of 70 high-quality tests to prepare you.</p>
              </div>
              <div className="p-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="pb-4 font-bold text-lg">Test Type</th>
                      <th className="pb-4 font-bold text-lg text-right">No. of Tests</th>
                    </tr>
                  </thead>
                  <tbody className="text-lg text-slate-200">
                    <tr className="border-b border-slate-800/50 hover:bg-slate-900/50 transition-colors">
                      <td className="py-5 font-semibold flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Full Length Mock</td>
                      <td className="py-5 text-right font-bold text-white">20</td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-slate-900/50 transition-colors">
                      <td className="py-5 font-semibold flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Sectional Tests</td>
                      <td className="py-5 text-right font-bold text-white">35</td>
                    </tr>
                    <tr className="border-b border-slate-800/50 hover:bg-slate-900/50 transition-colors">
                      <td className="py-5 font-semibold flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Previous Year</td>
                      <td className="py-5 text-right font-bold text-white">15</td>
                    </tr>
                    <tr className="text-xl font-black text-white bg-blue-600/10">
                      <td className="py-5 px-4 rounded-l-xl text-blue-400">Total Premium Tests</td>
                      <td className="py-5 px-4 rounded-r-xl text-right text-blue-400">70</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Demo Test */}
      <section className="py-24 bg-slate-900 border-y border-slate-800 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-[2.5rem] p-12 md:p-16 text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-sm font-bold mb-8">
              <ShieldCheck className="w-4 h-4" /> Zero Commitment Required
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Experience the Quality First.
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Take 1 Full-Length Mock Test entirely for FREE. No credit card required. Experience the exact exam interface, tricky TCS pattern questions, and detailed analytics.
            </p>

            <Link href="/dashboard/test-series/ibps-po" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-950 hover:bg-slate-200 font-black rounded-2xl transition-all duration-300 active:scale-95 text-lg group border border-slate-300">
              <Play className="w-5 h-5 fill-slate-950 text-slate-950 group-hover:scale-110 transition-transform" />
              Start Free Test Now
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 - Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">Choose the plan that suits your preparation strategy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">

            {/* Basic Plan */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors shadow-lg relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 bg-slate-800 text-slate-300 text-xs font-bold rounded-full uppercase tracking-wider">🥉 Basic</div>
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white">₹499</span>
              </div>
              <div className="space-y-4 mb-8">
                {[
                  "20 Full Length Mocks",
                  "10 Sectional Tests",
                  "6 Months Access",
                  "Standard Analytics"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>
              <Link href="/checkout?plan=basic" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex justify-center transition-colors">
                Get Started
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-slate-900 border-2 border-blue-600 rounded-3xl p-8 relative scale-100 md:scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 text-white text-sm font-black rounded-full uppercase tracking-wider flex items-center gap-2">
                🥈 Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 mt-4">Pro Plan</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-black text-white">₹999</span>
                <span className="text-slate-400 line-through">₹1999</span>
              </div>
              <div className="space-y-4 mb-8">
                {[
                  "20 Full Length Mocks",
                  "35 Sectional Tests",
                  "15 Previous Year Papers",
                  "1 Year Access",
                  "Advanced Rank & Analytics"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white text-sm font-bold">
                    <Check className="w-5 h-5 text-blue-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>
              <Link href="/checkout?plan=pro" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl flex justify-center transition-colors">
                Get Pro Plan
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors shadow-lg relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold rounded-full uppercase tracking-wider">🥇 Premium</div>
              <h3 className="text-2xl font-bold text-white mb-2">Elite</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white">₹1499</span>
              </div>
              <div className="space-y-4 mb-8">
                {[
                  "Everything in Pro",
                  "2 Years Access",
                  "Priority Email Support",
                  "Performance Report PDF",
                  "Live Doubt Sessions"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <Check className="w-5 h-5 text-amber-400 shrink-0" /> {feature}
                  </div>
                ))}
              </div>
              <Link href="/checkout?plan=premium" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex justify-center transition-colors">
                Get Premium
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');
const sscDir = path.join(srcDir, 'government-exams', 'ssc');

const examsData = {
    'ssc-cgl': {
        name: 'SSC CGL',
        students: '45,000+',
        rating: '4.8',
        totalTests: 70,
        fullLength: 20,
        sectional: 35,
        pyq: 15,
        prices: { basic: 499, pro: 799, premium: 999 },
    },
    'ssc-chsl': {
        name: 'SSC CHSL',
        students: '35,000+',
        rating: '4.7',
        totalTests: 50,
        fullLength: 15,
        sectional: 25,
        pyq: 10,
        prices: { basic: 399, pro: 699, premium: 899 },
    },
    'ssc-mts': {
        name: 'SSC MTS',
        students: '25,000+',
        rating: '4.6',
        totalTests: 38,
        fullLength: 10,
        sectional: 20,
        pyq: 8,
        prices: { basic: 299, pro: 599, premium: 799 },
    },
    'ssc-cpo': {
        name: 'SSC CPO',
        students: '20,000+',
        rating: '4.8',
        totalTests: 52,
        fullLength: 15,
        sectional: 25,
        pyq: 12,
        prices: { basic: 499, pro: 799, premium: 999 },
    }
};

const template = (examId, data) => `
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy, ShieldCheck, Check, ChevronDown, Quote, X } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ${examId.replace('-', '').toUpperCase()}ExamPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  // Faq toggle
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />

      {/* Plan Selection Modal */}
      {isPlanModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsPlanModalOpen(false)}
              className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8 md:p-10">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-black text-white mb-3">Choose Your Preparation Plan</h3>
                <p className="text-slate-400">Select the plan that best fits your goal for ${data.name}.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Basic */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors relative flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-2">Basic</h4>
                  <div className="text-3xl font-black text-white mb-6">₹${data.prices.basic}</div>
                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-start gap-3 text-sm text-slate-300"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"/> Limited Sectional Tests</div>
                    <div className="flex items-start gap-3 text-sm text-slate-500"><X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5"/> No All India Rank</div>
                  </div>
                  <Link href="/checkout?plan=basic&exam=${examId}" className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-center transition-colors">Select Basic</Link>
                </div>

                {/* Pro */}
                <div className="bg-slate-900 border-2 border-blue-600 rounded-2xl p-6 relative flex flex-col shadow-[0_0_30px_rgba(59,130,246,0.15)] md:-translate-y-4">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">Most Popular</div>
                  <h4 className="text-xl font-bold text-white mb-2">Pro</h4>
                  <div className="text-4xl font-black text-blue-400 mb-6">₹${data.prices.pro}</div>
                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-start gap-3 text-sm text-white font-medium"><Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"/> Full Access to all Tests</div>
                    <div className="flex items-start gap-3 text-sm text-white font-medium"><Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"/> All India Rank</div>
                    <div className="flex items-start gap-3 text-sm text-white font-medium"><Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5"/> Detailed Analytics</div>
                  </div>
                  <Link href="/checkout?plan=pro&exam=${examId}" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center transition-colors">Select Pro</Link>
                </div>

                {/* Premium */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors relative flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-2">Premium</h4>
                  <div className="text-3xl font-black text-amber-400 mb-6">₹${data.prices.premium}</div>
                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-start gap-3 text-sm text-slate-300"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"/> Everything in Pro</div>
                    <div className="flex items-start gap-3 text-sm text-slate-300"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"/> PDF Performance Report</div>
                    <div className="flex items-start gap-3 text-sm text-slate-300"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5"/> 1 Year Extra Access</div>
                  </div>
                  <Link href="/checkout?plan=premium&exam=${examId}" className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold rounded-xl text-center transition-colors">Select Premium</Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}

      {/* 1️⃣ Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6">
                <Trophy className="w-4 h-4" /> Trusted by ${data.students}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                ${data.name} 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Test Series</span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-lg">${data.rating} Rating</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="font-bold text-lg">${data.students} Students</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-lg">${data.totalTests} Total Tests</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button onClick={() => setIsPlanModalOpen(true)} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-lg shadow-blue-500/20">
                  🚀 Buy Now
                </button>
                <Link href="#demo" className="px-8 py-4 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                  📘 Start Free Mock
                </Link>
              </div>
            </div>

            {/* Right Content - Pricing Highlight */}
            <div className="lg:col-span-5 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 text-center flex flex-col items-center">
                <div className="px-4 py-1.5 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-black rounded-full uppercase tracking-widest mb-6">
                  🔥 Most Popular Plan
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2">Pro Plan</h3>
                <div className="text-6xl font-black text-white mb-6 tracking-tighter">
                  ₹${data.prices.pro}
                </div>
                
                <div className="w-full space-y-3 mb-8 text-left">
                  <div className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Full Access to All ${data.totalTests} Tests
                  </div>
                  <div className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Accurate All India Ranking
                  </div>
                  <div className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> In-depth Performance Analytics
                  </div>
                </div>

                <button onClick={() => setIsPlanModalOpen(true)} className="w-full py-4 bg-white hover:bg-slate-200 text-slate-950 font-black rounded-xl transition-colors text-lg">
                  Select Pro Plan
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2️⃣ What's Included */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Detailed Test Breakdown</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Everything you get inside the ${data.name} preparation package.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Full Length */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen className="w-24 h-24 text-blue-500" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="text-5xl font-black text-blue-400">${data.fullLength}</div>
                <h3 className="text-2xl font-black text-white">Full Length Mocks</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> Tier 1 exact pattern</li>
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> Real exam difficulty</li>
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> Negative marking included</li>
                </ul>
              </div>
            </div>

            {/* Sectional */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <BarChart3 className="w-24 h-24 text-emerald-500" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="text-5xl font-black text-emerald-400">${data.sectional}</div>
                <h3 className="text-2xl font-black text-white">Sectional Tests</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> Quantitative Aptitude</li>
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> Logical Reasoning</li>
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> English & GA Topics</li>
                </ul>
              </div>
            </div>

            {/* PYQ */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Clock className="w-24 h-24 text-amber-500" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="text-5xl font-black text-amber-400">${data.pyq}</div>
                <h3 className="text-2xl font-black text-white">Previous Year</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> 2023 Papers</li>
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> 2022 Papers</li>
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> 2021 Papers</li>
                </ul>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-24 h-24 text-purple-500" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="text-5xl font-black text-purple-400">AI</div>
                <h3 className="text-2xl font-black text-white">Smart Analytics</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> Accuracy % Tracking</li>
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> Time Analysis per Q</li>
                  <li className="flex items-center gap-2 text-slate-400 font-medium text-sm"><Check className="w-4 h-4 text-slate-600"/> Weak Topic Detection</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3️⃣ Test Structure Table */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Test Structure</h2>
              <p className="text-lg text-slate-400">Total ${data.totalTests} tests structured for maximum improvement.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-800">
                    <th className="p-6 font-bold text-white text-lg">Test Type</th>
                    <th className="p-6 font-bold text-white text-lg text-center">Number</th>
                    <th className="p-6 font-bold text-white text-lg text-right">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                    <td className="p-6 font-medium flex items-center gap-3"><BookOpen className="w-5 h-5 text-blue-400"/> Full Mock</td>
                    <td className="p-6 text-center font-bold text-white">${data.fullLength}</td>
                    <td className="p-6 text-right font-medium">60 min</td>
                  </tr>
                  <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                    <td className="p-6 font-medium flex items-center gap-3"><BarChart3 className="w-5 h-5 text-emerald-400"/> Sectional</td>
                    <td className="p-6 text-center font-bold text-white">${data.sectional}</td>
                    <td className="p-6 text-right font-medium">20–30 min</td>
                  </tr>
                  <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                    <td className="p-6 font-medium flex items-center gap-3"><Clock className="w-5 h-5 text-amber-400"/> PYQ</td>
                    <td className="p-6 text-center font-bold text-white">${data.pyq}</td>
                    <td className="p-6 text-right font-medium">60 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Plan Selection Section */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Select Your Plan</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Start practicing immediately.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Basic */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col hover:border-slate-700 transition-colors relative">
              <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
              <div className="text-4xl font-black text-white mb-8">₹${data.prices.basic}</div>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Limited Sectional
                </div>
                <div className="flex items-center gap-3 text-slate-500 font-medium">
                  <X className="w-5 h-5 text-slate-600" /> No Rank
                </div>
              </div>
              <button onClick={() => setIsPlanModalOpen(true)} className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors">
                Choose Basic
              </button>
            </div>

            {/* Pro */}
            <div className="bg-slate-900 border-2 border-blue-600 rounded-3xl p-8 flex flex-col relative scale-100 md:scale-105 z-10 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-black rounded-full uppercase tracking-widest whitespace-nowrap">
                High Priority
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 mt-2">Pro Plan</h3>
              <div className="text-5xl font-black text-blue-400 mb-8">₹${data.prices.pro}</div>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-center gap-3 text-white font-bold">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" /> Full Access
                </div>
                <div className="flex items-center gap-3 text-white font-bold">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" /> All India Rank
                </div>
                <div className="flex items-center gap-3 text-white font-bold">
                  <CheckCircle2 className="w-5 h-5 text-blue-400" /> Deep Analytics
                </div>
              </div>
              <button onClick={() => setIsPlanModalOpen(true)} className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-colors text-lg shadow-lg shadow-blue-500/20">
                Choose Pro
              </button>
            </div>

            {/* Premium */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 flex flex-col hover:border-slate-700 transition-colors relative">
              <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
              <div className="text-4xl font-black text-white mb-8">₹${data.prices.premium}</div>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> PDF Performance Report
                </div>
                <div className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 1 Year Extra Access
                </div>
              </div>
              <button onClick={() => setIsPlanModalOpen(true)} className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors">
                Choose Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Free Demo Section */}
      <section id="demo" className="py-24 bg-slate-950 border-b border-slate-800 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-[2.5rem] p-12 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-bold mb-8">
              <ShieldCheck className="w-4 h-4" /> Try Before You Buy
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              1 Free ${data.name} Mock
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Experience the TCS interface, try real questions, and see your analytics entirely for free.
            </p>
            
            <Link href="/dashboard/test-series/${examId}" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-950 hover:bg-slate-200 font-black rounded-2xl transition-all duration-300 active:scale-95 text-xl group border border-slate-300">
              <Play className="w-6 h-6 fill-slate-950 text-slate-950 group-hover:scale-110 transition-transform" /> 
              Start Free Test
            </Link>
          </div>
        </div>
      </section>

      {/* 6️⃣ FAQ Section */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Validity kitni hai?", a: "Basic and Pro plans come with 6-month validity. The Premium plan includes 1 Year Extra Access (1.5 Years total)." },
              { q: "Refund policy kya hai?", a: "We offer a 3-day no-questions-asked refund policy if you are not satisfied with the course structure." },
              { q: "Mobile me chalega kya?", a: "Yes! Our platform is fully responsive. You can attempt tests smoothly on both desktop and mobile browsers." },
              { q: "Solutions milenge?", a: "Yes, every test comes with detailed step-by-step solutions and shortcut methods immediately after submission." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-white text-lg"
                >
                  {faq.q}
                  <ChevronDown className={\`w-6 h-6 text-slate-500 transition-transform \${activeFaq === i ? 'rotate-180' : ''}\`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ Student Reviews */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Student Reviews</h2>
            <p className="text-lg text-slate-400">See what past successful candidates are saying.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Review 1 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-slate-300 font-medium mb-8 text-lg leading-relaxed">"Mocks bilkul real exam jaisa tha. Quant part specially TCS level ke hi questions the. Highly recommend."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center font-black">AM</div>
                <div>
                  <div className="font-bold text-white">Amit Mishra</div>
                  <div className="text-sm text-slate-500">Selected in 2023</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-slate-300 font-medium mb-8 text-lg leading-relaxed">"UI is so clean and analytics helped me find my weak topics easily in Reasoning. Ranked under top 500."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600/20 text-emerald-400 rounded-full flex items-center justify-center font-black">PK</div>
                <div>
                  <div className="font-bold text-white">Pooja Kumari</div>
                  <div className="text-sm text-slate-500">Selected in 2023</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-slate-300 font-medium mb-8 text-lg leading-relaxed">"Best PYQ section format. Solutions are very detailed and shortcut methods provided are gold."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600/20 text-purple-400 rounded-full flex items-center justify-center font-black">RS</div>
                <div>
                  <div className="font-bold text-white">Ravi Sharma</div>
                  <div className="text-sm text-slate-500">Tier 2 Candidate</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
`;

Object.keys(examsData).forEach(exam => {
    const dir = path.join(sscDir, exam);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(path.join(dir, 'page.tsx'), template(exam, examsData[exam]));
});

console.log("SSC detail pages generated.");

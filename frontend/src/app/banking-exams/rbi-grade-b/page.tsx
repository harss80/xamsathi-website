
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Star, CheckCircle2, Play, BookOpen, Clock, Trophy, ShieldCheck, Check, X, Building2, BarChart3, ChevronDown, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Banking_RBIGRADE-BPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleBuyClick = () => {
    setShowUpsell(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />

      {/* Upsell Modal */}
      {showUpsell && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-b from-blue-900 to-slate-900 border-2 border-blue-500 rounded-3xl w-full max-w-2xl relative animate-in zoom-in-95 duration-300 shadow-2xl overflow-hidden p-8 md:p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            
            <button onClick={() => setShowUpsell(false)} className="absolute top-6 right-6 p-2 bg-slate-800/50 hover:bg-slate-700 rounded-full text-slate-300 transition-colors z-10">
              <X className="w-5 h-5" />
            </button>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-400 text-xs font-black rounded-full uppercase tracking-widest mb-6 border border-amber-500/30">
              🔥 Wait! Best Value Bundle
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Get Banking <span className="text-blue-400">Combo Pack</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">
              Get IBPS PO, IBPS Clerk, and SBI PO (Total 250+ Tests) all together at just ₹1999. One pass for top Banking Exams!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => { setShowUpsell(false); setIsPlanModalOpen(true); }}
                className="py-4 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-700 transition-colors"
              >
                No, Continue with RBI Grade B
              </button>
              <Link href="/checkout?plan=combo&exam=banking-combo" className="py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2">
                Buy Combo @ ₹1999
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Plan Selection Modal */}
      {isPlanModalOpen && !showUpsell && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsPlanModalOpen(false)}
              className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8 md:p-10">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-black text-white mb-3">Choose Your Plan</h3>
                <p className="text-slate-400">Select the plan for RBI Grade B.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Basic */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-2">Basic</h4>
                  <div className="text-3xl font-black text-white mb-6">₹999</div>
                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-start gap-3 text-sm text-slate-300"><Check className="w-4 h-4 text-emerald-400 shrink-0"/> Limited Access</div>
                    <div className="flex items-start gap-3 text-sm text-slate-500"><X className="w-4 h-4 text-slate-600 shrink-0"/> No Ranking</div>
                  </div>
                  <Link href="/checkout?plan=basic&exam=rbi-grade-b" className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-center transition-colors">Select Basic</Link>
                </div>

                {/* Pro */}
                <div className="bg-slate-900 border-2 border-blue-600 rounded-2xl p-6 relative flex flex-col md:-translate-y-4 shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">Pro Recommend</div>
                  <h4 className="text-xl font-bold text-white mb-2">Pro</h4>
                  <div className="text-4xl font-black text-blue-400 mb-6">₹1499</div>
                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-start gap-3 text-sm text-white font-medium"><Check className="w-4 h-4 text-blue-400 shrink-0"/> Full Access to all Tests</div>
                    <div className="flex items-start gap-3 text-sm text-white font-medium"><Check className="w-4 h-4 text-blue-400 shrink-0"/> All India Rank</div>
                  </div>
                  <Link href="/checkout?plan=pro&exam=rbi-grade-b" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center transition-colors">Select Pro</Link>
                </div>

                {/* Premium */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-2">Premium</h4>
                  <div className="text-3xl font-black text-amber-400 mb-6">₹1799</div>
                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-start gap-3 text-sm text-slate-300"><Check className="w-4 h-4 text-amber-500 shrink-0"/> Everything in Pro</div>
                    <div className="flex items-start gap-3 text-sm text-slate-300"><Check className="w-4 h-4 text-amber-500 shrink-0"/> 1 Year Extra Access</div>
                  </div>
                  <Link href="/checkout?plan=premium&exam=rbi-grade-b" className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold rounded-xl text-center transition-colors">Select Premium</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6">
                <Building2 className="w-4 h-4" /> Comprehensive Mock Tests
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                RBI Grade B 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Test Series</span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2"><Trophy className="w-5 h-5 text-amber-400" /><span className="font-bold text-lg">70+ Tests</span></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-emerald-400" /><span className="font-bold text-lg">20 Prelims / 15 Mains</span></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-blue-400" /><span className="font-bold text-lg">AI Analytics</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button onClick={handleBuyClick} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all shadow-lg shadow-blue-500/20 text-lg flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5"/> Buy Plan
                </button>
                <Link href="#demo" className="px-8 py-4 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl transition-all text-lg text-center">
                  Start Free Demo
                </Link>
              </div>
            </div>

            {/* Right Content - Pricing Highlight */}
            <div className="lg:col-span-5 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
              
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 text-center flex flex-col items-center">
                <div className="px-4 py-1.5 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-black rounded-full uppercase tracking-widest mb-6">
                  🔥 Pro Recommended
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2">Pro Plan</h3>
                <div className="text-6xl font-black text-white mb-6">
                  ₹1499
                </div>
                
                <div className="w-full space-y-3 mb-8 text-left">
                  <div className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Full Access to 70+ Tests
                  </div>
                  <div className="flex items-start gap-3 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> Accurate Rank Tracking
                  </div>
                </div>

                <button onClick={handleBuyClick} className="w-full py-4 bg-white hover:bg-slate-200 text-slate-950 font-black rounded-xl transition-colors text-lg">
                  Select Pro Plan
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Breakdown */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-white mb-4">Detailed Test Breakdown</h2>
             <p className="text-slate-400 text-lg">Everything you will receive upon RBI Grade B enrollment.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-colors">
              <div className="text-blue-400 mb-6"><BookOpen className="w-12 h-12"/></div>
              <div className="text-4xl font-black text-blue-400 mb-2">20</div>
              <h3 className="text-xl font-bold text-white mb-4">Prelims / Phase 1</h3>
              <p className="text-slate-400 text-sm">Strictly aligned to speed tests.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-colors">
              <div className="text-indigo-400 mb-6"><Building2 className="w-12 h-12"/></div>
              <div className="text-4xl font-black text-indigo-400 mb-2">15</div>
              <h3 className="text-xl font-bold text-white mb-4">Mains / Phase 2</h3>
              <p className="text-slate-400 text-sm">High difficulty puzzle matching.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-colors">
              <div className="text-emerald-400 mb-6"><BarChart3 className="w-12 h-12"/></div>
              <div className="text-4xl font-black text-emerald-400 mb-2">25</div>
              <h3 className="text-xl font-bold text-white mb-4">Sectional Tests</h3>
              <p className="text-slate-400 text-sm">Quant, Reasoning & English focus.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-colors">
              <div className="text-amber-400 mb-6"><Clock className="w-12 h-12"/></div>
              <div className="text-4xl font-black text-amber-400 mb-2">10</div>
              <h3 className="text-xl font-bold text-white mb-4">PYQ Tests</h3>
              <p className="text-slate-400 text-sm">Previous year accurate tests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Explanation Accordion */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-white mb-12">Know the Pattern</h2>
          <div className="space-y-4">
            {['Prelims vs Mains Strategy', 'Section-wise Syllabus Coverage', 'Special Focus Features'].map((title, i) => (
               <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700">
                <button onClick={() => toggleFaq(i)} className="w-full p-6 text-left flex justify-between font-bold text-white text-lg">
                  {title} <ChevronDown className={`w-6 h-6 transition-transform ${activeFaq===i ? 'rotate-180':''}`}/>
                </button>
                {activeFaq === i && <div className="px-6 pb-6 text-slate-400 text-sm">Comprehensive breakdown available covering exactly high speed calculation, puzzle tracking, and analytical reasoning required.</div>}
               </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Test Structure table */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
         <div className="container mx-auto px-4 max-w-4xl">
             <h2 className="text-4xl font-black mb-12 text-center text-white">Test Structure Breakdown</h2>
             <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                <table className="w-full text-center">
                  <thead className="bg-slate-900 border-b border-slate-800">
                    <tr><th className="p-6">Type</th><th className="p-6 text-white font-bold">Number</th><th className="p-6 text-slate-400 font-bold">Duration</th></tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800/50"><td className="p-6 font-bold">Prelims Mock</td><td className="p-6 font-black text-white">20</td><td className="p-6 font-bold text-slate-500">60 min</td></tr>
                    <tr className="border-b border-slate-800/50"><td className="p-6 font-bold">Mains Mock</td><td className="p-6 font-black text-white">15</td><td className="p-6 font-bold text-slate-500">120 - 180 min</td></tr>
                    <tr className="border-b border-slate-800/50"><td className="p-6 font-bold">Sectional Tests</td><td className="p-6 font-black text-white">25</td><td className="p-6 font-bold text-slate-500">20 min</td></tr>
                    <tr className="border-b border-slate-800/50"><td className="p-6 font-bold">PYQ</td><td className="p-6 font-black text-white">10</td><td className="p-6 font-bold text-slate-500">Varies</td></tr>
                  </tbody>
                </table>
             </div>
         </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 bg-slate-950 border-b border-slate-800 text-center relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-12 shadow-2xl">
             <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Try Before You Commit</h2>
             <p className="text-slate-400 mb-8 max-w-md mx-auto">1 Free Full-Length RBI Grade B Mock. Experience the precise exam interface.</p>
             <Link href="/dashboard/test-series/banking" className="inline-flex py-4 px-10 bg-white text-slate-950 hover:bg-slate-200 transition-colors font-black rounded-xl text-lg"><Play className="w-5 h-5 mr-2 fill-slate-950 text-slate-950"/>Start Free Demo</Link>
          </div>
        </div>
      </section>

    </div>
  );
}

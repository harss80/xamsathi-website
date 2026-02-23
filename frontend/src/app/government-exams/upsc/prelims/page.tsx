
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Star, FileText, CheckCircle2, Play, BookOpen, Clock, Trophy, ShieldCheck, Check, ChevronDown, X, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function UPSC_PrelimsPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);
  
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
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
              <Sparkles className="w-4 h-4" /> Wait! Special Offer
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Upgrade to <span className="text-blue-400">Complete Package</span> 
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">
              Get Prelims + Mains Full Syllabus + CSAT + Essay Tests all together at just ₹2499. Save more and prepare comprehensively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => { setShowUpsell(false); setIsPlanModalOpen(true); }}
                className="py-4 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-700 transition-colors"
              >
                No, Continue with Prelims
              </button>
              <Link href="/government-exams/upsc/complete" className="py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                Yes, Upgrade Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Plan Selection Modal */}
      {isPlanModalOpen && !showUpsell && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-8 md:p-10">
            <button onClick={() => setIsPlanModalOpen(false)} className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 transition-colors z-10">
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-10">
              <h3 className="text-3xl font-black text-white mb-3">Choose Your Prelims Plan</h3>
              <p className="text-slate-400">Select the plan that fits your preparation stage.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">Basic</h4>
                <div className="text-3xl font-black text-white mb-6">₹999</div>
                <div className="space-y-4 flex-1 mb-8">
                  <div className="flex items-start gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-emerald-400"/> Limited Chapter Tests</div>
                </div>
                <Link href="/checkout?plan=basic&exam=upsc-prelims" className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-center">Select Basic</Link>
              </div>

              <div className="bg-slate-900 border-2 border-blue-600 rounded-2xl p-6 flex flex-col md:-translate-y-4 shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-full whitespace-nowrap">Pro Recommend</div>
                <h4 className="text-xl font-bold text-white mb-2">Pro</h4>
                <div className="text-4xl font-black text-blue-400 mb-6">₹1499</div>
                <div className="space-y-4 flex-1 mb-8">
                  <div className="flex items-start gap-2 text-sm text-white"><Check className="w-4 h-4 text-blue-400"/> Full 125+ Tests</div>
                  <div className="flex items-start gap-2 text-sm text-white"><Check className="w-4 h-4 text-blue-400"/> All India Rank</div>
                </div>
                <Link href="/checkout?plan=pro&exam=upsc-prelims" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center">Select Pro</Link>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">Premium</h4>
                <div className="text-3xl font-black text-amber-400 mb-6">₹1999</div>
                <div className="space-y-4 flex-1 mb-8">
                  <div className="flex items-start gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-amber-500"/> PDF Performance Report</div>
                  <div className="flex items-start gap-2 text-sm text-slate-300"><Check className="w-4 h-4 text-amber-500"/> 2 Year Access</div>
                </div>
                <Link href="/checkout?plan=premium&exam=upsc-prelims" className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold rounded-xl text-center">Select Premium</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                UPSC Prelims 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Test Series</span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8 text-slate-300">
                <div className="flex items-center gap-2"><Trophy className="w-5 h-5 text-amber-400" /><span className="font-bold">125+ Tests</span></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-emerald-400" /><span className="font-bold">40 Full Mocks</span></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-blue-400" /><span className="font-bold">50 Chapter Tests</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button onClick={handleBuyClick} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all shadow-lg text-lg">
                  🚀 Buy Plan
                </button>
                <Link href="#demo" className="px-8 py-4 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl text-lg">
                  📘 Start Free Prelims Mock
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 text-center">
                <div className="px-4 py-1.5 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-black rounded-full uppercase mb-6 inline-block">🔥 Pro Highlight</div>
                <h3 className="text-2xl font-black text-white mb-2">Pro Plan</h3>
                <div className="text-6xl font-black text-white mb-6">₹1499</div>
                <button onClick={handleBuyClick} className="w-full py-4 bg-white text-slate-950 font-black rounded-xl text-lg">Select Pro</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-black text-center text-white mb-12">Detailed Test Breakdown</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl"><h3 className="text-xl font-bold text-white mb-4">📘 Full Length (40)</h3><p className="text-slate-400 text-sm">GS Paper 1<br/>Real difficulty<br/>Negative marking</p></div>
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl"><h3 className="text-xl font-bold text-white mb-4">📚 Chapter Tests (50)</h3><p className="text-slate-400 text-sm">Polity, History, Economy, Geography, Env, Science</p></div>
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl"><h3 className="text-xl font-bold text-white mb-4">📂 PYQ Tests (25)</h3><p className="text-slate-400 text-sm">2023 - 2011 strict exam format</p></div>
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl"><h3 className="text-xl font-bold text-white mb-4">🧠 CSAT Focus</h3><p className="text-slate-400 text-sm">10 specific CSAT real mocks</p></div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-white mb-12">Syllabus Coverage Accordion</h2>
          <div className="space-y-4">
            {['Polity Topics', 'Economy Topics', 'Current Affairs', 'Environment'].map((title, i) => (
               <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700">
                <button onClick={() => toggleAccordion(i)} className="w-full p-6 text-left flex justify-between font-bold text-white text-lg">
                  {title} <ChevronDown className={`w-6 h-6 transition-transform ${activeAccordion===i ? 'rotate-180':''}`}/>
                </button>
                {activeAccordion === i && <div className="px-6 pb-6 text-slate-400 text-sm">Detailed topic breakdown for {title} exactly matching the UPSC official notification.</div>}
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo View */}
      <section id="demo" className="py-24 bg-slate-900 border-b border-slate-800 text-center">
        <h2 className="text-4xl font-black text-white mb-6">1 GS Prelims Free Mock</h2>
        <Link href="/dashboard/test-series/upsc" className="inline-flex py-4 px-10 bg-white text-slate-950 font-black rounded-xl">Start Free Test</Link>
      </section>

    </div>
  );
}

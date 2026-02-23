
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Star, FileText, CheckCircle2, Play, BookOpen, Clock, Trophy, ShieldCheck, Check, ChevronDown, X, Sparkles, PenTool } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function UPSC_MainsPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);

  const handleBuyClick = () => {
    setShowUpsell(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <Navbar />

      {/* Upsell Modal */}
      {showUpsell && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-tr from-slate-900 to-indigo-950 border-2 border-indigo-500 rounded-3xl w-full max-w-2xl relative animate-in zoom-in-95 duration-300 p-8 md:p-12 text-center overflow-hidden">
            <button onClick={() => setShowUpsell(false)} className="absolute top-6 right-6 p-2 bg-slate-800/50 hover:bg-slate-700 rounded-full text-slate-300 transition-colors z-10"><X className="w-5 h-5" /></button>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 text-indigo-400 text-xs font-black rounded-full uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" /> Recommended Step
            </div>
            <h2 className="text-3xl font-black text-white mb-4 leading-tight">Combine Mains with <span className="text-indigo-400">Complete Package</span></h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">Get Prelims, CSAT, Mains and Essay evaluations in one comprehensive bundle at ₹2499.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button onClick={() => { setShowUpsell(false); setIsPlanModalOpen(true); }} className="py-4 bg-slate-950 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-700">No, Continue Mains Array</button>
              <Link href="/government-exams/upsc/complete" className="py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-xl">Upgrade to Complete</Link>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Modal */}
      {isPlanModalOpen && !showUpsell && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-10">
            <button onClick={() => setIsPlanModalOpen(false)} className="absolute top-6 right-6 text-slate-400"><X /></button>
            <h3 className="text-3xl font-black text-center text-white mb-8">Choose Mains Plan</h3>
            <div className="grid md:grid-cols-3 gap-6">
               <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                 <h4 className="text-xl font-bold mb-2">Basic</h4><div className="text-3xl font-black mb-6">₹1499</div>
                 <Link href="/checkout?plan=basic&exam=upsc-mains" className="w-full py-3 bg-slate-800 text-white rounded-xl text-center block font-bold">Select</Link>
               </div>
               <div className="bg-slate-900 p-6 rounded-2xl border-2 border-blue-600 shadow-xl">
                 <h4 className="text-xl font-bold mb-2 text-blue-400">Pro</h4><div className="text-4xl font-black text-blue-400 mb-6">₹1999</div>
                 <Link href="/checkout?plan=pro&exam=upsc-mains" className="w-full py-3 bg-blue-600 text-white rounded-xl text-center block font-bold">Select</Link>
               </div>
               <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                 <h4 className="text-xl font-bold mb-2">Premium</h4><div className="text-3xl font-black text-amber-400 mb-6">₹2499</div>
                 <div className="text-sm text-amber-500 mb-4">Includes 2 Year Access, Extra Essays, PDF Eval</div>
                 <Link href="/checkout?plan=premium&exam=upsc-mains" className="w-full py-3 bg-amber-600 text-slate-950 rounded-xl text-center block font-bold">Select</Link>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-950">
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">UPSC Mains 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Test Series</span></h1>
          <p className="text-xl text-slate-400 mb-8 font-medium">Answer writing focus. 43+ Tests covering GS and Essay with exact evaluation rubrics.</p>
          <div className="inline-flex px-6 py-2 bg-blue-900/30 text-blue-400 rounded-full font-black text-lg mb-8 border border-blue-500/30 shadow-lg">Highlight: Pro ₹1999</div>
          <div className="flex justify-center gap-4">
             <button onClick={handleBuyClick} className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-lg">🚀 Select Plan</button>
          </div>
        </div>
      </section>

      {/* Detailed Structure */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
         <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-black mb-12 text-center text-white">Detailed Structure</h2>
            <div className="grid md:grid-cols-4 gap-6">
               <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800"><FileText className="w-10 h-10 text-blue-500 mb-4"/><h3 className="font-bold text-lg mb-2">GS Full Length (20)</h3><p className="text-sm text-slate-400">Full GS1, GS2, GS3, GS4 Mocks</p></div>
               <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800"><PenTool className="w-10 h-10 text-emerald-500 mb-4"/><h3 className="font-bold text-lg mb-2">Essay Tests (8)</h3><p className="text-sm text-slate-400">Philosophical & Current Topics</p></div>
               <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800"><BookOpen className="w-10 h-10 text-amber-500 mb-4"/><h3 className="font-bold text-lg mb-2">Sectional GS (15)</h3><p className="text-sm text-slate-400">Targeted topic deep dives</p></div>
               <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800"><CheckCircle2 className="w-10 h-10 text-purple-500 mb-4"/><h3 className="font-bold text-lg mb-2">Model Answers</h3><p className="text-sm text-slate-400">PDF standard answers format</p></div>
            </div>
         </div>
      </section>

      {/* Strategy */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <h2 className="text-4xl font-black mb-8 text-white">Answer Writing Strategy</h2>
           <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-8">
              <div><div className="text-xl font-bold text-blue-400 mb-2">Structure</div><div className="text-slate-400 text-sm">Clear layout framing</div></div>
              <div><div className="text-xl font-bold text-emerald-400 mb-2">Intro-Body-Conclusion</div><div className="text-slate-400 text-sm">Follow exact UPSC rubrics</div></div>
              <div><div className="text-xl font-bold text-amber-400 mb-2">Word Limits</div><div className="text-slate-400 text-sm">Guidance on 150/250 limits</div></div>
           </div>
        </div>
      </section>

    </div>
  )
}

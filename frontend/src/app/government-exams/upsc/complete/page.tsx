
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Star, CheckCircle2, ChevronRight, Check, X, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function UPSC_CompletePage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <Navbar />

      {/* Plan Modal */}
      {isPlanModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg p-10 relative text-center">
             <button onClick={() => setIsPlanModalOpen(false)} className="absolute top-6 right-6 text-slate-400"><X /></button>
             <h3 className="text-3xl font-black text-white mb-2">Pro Complete Plan</h3>
             <div className="text-5xl font-black text-blue-400 mb-8">₹2499</div>
             <Link href="/checkout?plan=pro&exam=upsc-complete" className="w-full py-4 bg-blue-600 text-white rounded-xl text-center block font-black text-lg shadow-lg shadow-blue-500/30">Checkout securely</Link>
          </div>
        </div>
      )}

      {/* Premium Hero */}
      <section className="pt-32 pb-24 relative bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
           <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-black tracking-widest uppercase mb-8">
             <Star className="w-4 h-4 fill-amber-400"/> The Ultimate Preparation
           </div>
           <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">UPSC Complete Preparation <span className="text-amber-400">2026</span></h1>
           <p className="text-2xl text-slate-400 mb-10">Prelims + Mains + CSAT — 160+ Tests mapped to clear the exam.</p>
           
           <div className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl max-w-md mx-auto shadow-2xl">
             <div className="text-[10px] font-black uppercase text-blue-400 tracking-widest mb-2">Pro Edition Recommended</div>
             <div className="text-6xl font-black text-white mb-6">₹2499</div>
             <button onClick={() => setIsPlanModalOpen(true)} className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-lg transition-all active:scale-95">Enroll Now</button>
           </div>
        </div>
      </section>

      {/* Everything Included */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 max-w-5xl">
           <h2 className="text-4xl font-black mb-12 text-center text-white">Everything Included</h2>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {['Prelims Full Series', 'Mains Full Series', 'Essay Writing Tests', 'CSAT High Level', 'Deep Analytics Dashboard', 'All India Rank Tracking'].map((item,i) =>(
                <div key={i} className="flex items-center gap-3 bg-slate-950 p-6 rounded-2xl border border-slate-800">
                   <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0"/> <span className="font-bold text-slate-200">{item}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Complete Roadmap Timeline */}
      <section className="py-24 bg-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-4xl font-black mb-12 text-center text-white">Complete Roadmap Timeline</h2>
           <div className="space-y-6 relative before:content-[''] before:absolute before:left-[2.5rem] before:top-4 before:bottom-4 before:w-1 before:bg-slate-800">
              <div className="flex gap-8 relative z-10">
                <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-blue-500 flex items-center justify-center shrink-0 font-bold text-sm">Jan-Mar</div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex-1"><h4 className="text-xl font-bold text-white mb-2">Prelims Foundation</h4><p className="text-slate-400">Focus on chapter level grips.</p></div>
              </div>
              <div className="flex gap-8 relative z-10">
                <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-emerald-500 flex items-center justify-center shrink-0 font-bold text-sm">Apr-Jun</div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex-1"><h4 className="text-xl font-bold text-white mb-2">Full Mocks</h4><p className="text-slate-400">Transition into CSAT and GS Full tests under time blocks.</p></div>
              </div>
              <div className="flex gap-8 relative z-10">
                <div className="w-20 h-20 rounded-full bg-slate-900 border-4 border-amber-500 flex items-center justify-center shrink-0 font-bold text-sm text-center">Post<br/>Prelims</div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex-1"><h4 className="text-xl font-bold text-white mb-2">Mains Focus</h4><p className="text-slate-400">GS1-4 and Essay strict writing practice sessions.</p></div>
              </div>
           </div>
        </div>
      </section>

      {/* Compare vs Others */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
         <div className="container mx-auto px-4 max-w-4xl">
             <h2 className="text-4xl font-black mb-12 text-center text-white">Comparison vs Others</h2>
             <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden">
                <table className="w-full text-center">
                  <thead className="bg-slate-900 border-b border-slate-800">
                    <tr><th className="p-6">Feature</th><th className="p-6 text-blue-400 font-bold">Xamsathi</th><th className="p-6 text-slate-500 font-bold">Others</th></tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-800"><td className="p-6 font-bold">Price</td><td className="p-6 font-black text-white">₹2499</td><td className="p-6 font-bold text-slate-500">₹15000+</td></tr>
                    <tr className="border-b border-slate-800"><td className="p-6 font-bold">All India Rank</td><td className="p-6"><Check className="w-6 h-6 text-emerald-400 mx-auto"/></td><td className="p-6"><X className="w-6 h-6 text-red-500 mx-auto"/></td></tr>
                    <tr className="border-b border-slate-800"><td className="p-6 font-bold">Analytics</td><td className="p-6 font-bold text-blue-400">Deep AI</td><td className="p-6 text-slate-500">Limited</td></tr>
                  </tbody>
                </table>
             </div>
         </div>
      </section>

      {/* Serious Testimonials */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto max-w-5xl px-4 text-center">
           <h2 className="text-4xl font-black mb-12 text-white">Serious Results</h2>
           <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900 p-8 rounded-3xl text-left border border-slate-800">
                 <p className="italic text-slate-300 mb-6 text-lg">"The complete roadmap kept my chaotic preparation perfectly aligned. The mains testing evaluation is extremely to the point."</p>
                 <div className="font-bold text-white block">- Sneha Reddy, Interview Appeared 2024</div>
              </div>
              <div className="bg-slate-900 p-8 rounded-3xl text-left border border-slate-800">
                 <p className="italic text-slate-300 mb-6 text-lg">"I was paying 18k for test series offline that took days to evaluate. Here I got immediate CSAT and Prelims feedback."</p>
                 <div className="font-bold text-white block">- Raghav Kumar, Cleared Prelims 2024</div>
              </div>
           </div>
        </div>
      </section>
    </div>
  )
}

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'app');
const upscDir = path.join(srcDir, 'government-exams', 'upsc');

const prelimsPage = `
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
                  {title} <ChevronDown className={\`w-6 h-6 transition-transform \${activeAccordion===i ? 'rotate-180':''}\`}/>
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
`;


const mainsPage = `
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
`;


const completePage = `
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
`;

function writeFiles() {
    const prelimsDir = path.join(upscDir, 'prelims');
    const mainsDir = path.join(upscDir, 'mains');
    const completeDir = path.join(upscDir, 'complete');

    [prelimsDir, mainsDir, completeDir].forEach(p => {
        if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
    });

    fs.writeFileSync(path.join(prelimsDir, 'page.tsx'), prelimsPage);
    fs.writeFileSync(path.join(mainsDir, 'page.tsx'), mainsPage);
    fs.writeFileSync(path.join(completeDir, 'page.tsx'), completePage);
}

writeFiles();
console.log('UPSC specific pages generated');

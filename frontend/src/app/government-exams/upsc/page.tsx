"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Star, Users, CheckCircle2, Play, BookOpen, Clock,
  Trophy, ShieldCheck, Check, ChevronDown, ChevronUp, ChevronRight,
  Lock, Languages, MonitorPlay, FileText, Award, Calendar, TrendingUp
} from "lucide-react";
import Navbar from "@/components/Navbar";

const testBreakdown = [
  {
    id: "prelims-gs",
    title: "UPSC Prelims GS Paper 1 Full Mocks",
    desc: "Strictly based on UPSC's unpredictable pattern. Covers core static & current affairs.",
    testCount: 30,
    freeCount: 1,
    tests: [
      { name: "Prelims GS Full Mock Test 1", q: 100, m: 200, time: "120 Mins", isFree: true },
      { name: "Prelims GS Full Mock Test 2", q: 100, m: 200, time: "120 Mins", isFree: false },
      { name: "Prelims GS Full Mock Test 3", q: 100, m: 200, time: "120 Mins", isFree: false },
      { name: "Prelims GS Full Mock Test 4", q: 100, m: 200, time: "120 Mins", isFree: false },
      { name: "Prelims GS Full Mock Test 5", q: 100, m: 200, time: "120 Mins", isFree: false },
    ]
  },
  {
    id: "prelims-csat",
    title: "UPSC Prelims CSAT Paper 2 Full Mocks",
    desc: "Tackle the high-difficulty Maths, Reasoning & Reading Comprehension questions.",
    testCount: 15,
    freeCount: 1,
    tests: [
      { name: "CSAT Full Mock Test 1", q: 80, m: 200, time: "120 Mins", isFree: true },
      { name: "CSAT Full Mock Test 2", q: 80, m: 200, time: "120 Mins", isFree: false },
      { name: "CSAT Full Mock Test 3", q: 80, m: 200, time: "120 Mins", isFree: false },
      { name: "CSAT Full Mock Test 4", q: 80, m: 200, time: "120 Mins", isFree: false },
    ]
  },
  {
    id: "prelims-chapter",
    title: "Prelims Subject & Chapter Tests",
    desc: "Topic-wise NCERT foundations and standard book revisions (Polity, History, Geo, Economy).",
    testCount: 80,
    freeCount: 4,
    tests: [
      { name: "Indian Polity: Fundamental Rights", q: 50, m: 100, time: "60 Mins", isFree: true },
      { name: "Modern History: 1857 to 1905", q: 50, m: 100, time: "60 Mins", isFree: true },
      { name: "Economy: Banking & Inflation", q: 50, m: 100, time: "60 Mins", isFree: false },
      { name: "Geo: Physical Geo & Climatology", q: 50, m: 100, time: "60 Mins", isFree: false },
    ]
  },
  {
    id: "mains-gs",
    title: "Mains GS Full Length Tests (GS 1 to GS 4)",
    desc: "Descriptive tests with exact UPSC-standard booklets. Expert evaluation within 48 hours.",
    testCount: 20,
    freeCount: 0,
    tests: [
      { name: "GS Paper 1 Full Mock", q: 20, m: 250, time: "180 Mins", isFree: false },
      { name: "GS Paper 2 Full Mock", q: 20, m: 250, time: "180 Mins", isFree: false },
      { name: "GS Paper 3 Full Mock", q: 20, m: 250, time: "180 Mins", isFree: false },
      { name: "GS Paper 4 (Ethics) Full Mock", q: 19, m: 250, time: "180 Mins", isFree: false },
    ]
  },
  {
    id: "mains-essay",
    title: "Mains Essay Writing Tests",
    desc: "Philosophical & issue-based essay mocks with detailed structure drafting feedback.",
    testCount: 8,
    freeCount: 0,
    tests: [
      { name: "Essay Mock Test 1", q: 2, m: 250, time: "180 Mins", isFree: false },
      { name: "Essay Mock Test 2", q: 2, m: 250, time: "180 Mins", isFree: false },
      { name: "Essay Mock Test 3", q: 2, m: 250, time: "180 Mins", isFree: false },
    ]
  }
];

const faqs = [
  { q: "Is the test series available in multiple languages?", a: "Yes. Our UPSC CSE mock tests (Prelims & Mains) are fully bilingual, available in both English and Hindi." },
  { q: "How does Mains Answer Evaluation work?", a: "After attempting a Mains mock test, you can scan and upload your answers in PDF format. Our expert evaluators provide detailed feedback, model answers, and a graded score within 48 to 72 hours." },
  { q: "Is CSAT included in this package?", a: "Absolutely. We provide 15 Full-length CSAT mock tests matching the recent high-difficulty trend of UPSC CSE." },
  { q: "What is the validity of the Complete package?", a: "The typical Pro package comes with a 12 to 15-month validity (covering till your Mains exam of that cycle). You can attempt tests at your convenience before validity expires." }
];

export default function UPSCCompleteTestSeriesPage() {
  const [activeAccordion, setActiveAccordion] = useState<string>("prelims-gs");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span>›</span>
          <Link href="/government-exams" className="hover:text-blue-400">Government Exams</Link>
          <span>›</span>
          <span className="text-white font-bold">UPSC Civil Services</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT COLUMN - MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-10">

            {/* 1️⃣ Hero Info Section */}
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-5 uppercase tracking-wider">
                  <Star className="w-4 h-4 fill-amber-400" /> Premium Complete Package
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight leading-tight">
                  UPSC CSE Complete Test Series 2026
                </h1>

                <p className="text-lg text-slate-400 mb-6 font-medium leading-relaxed max-w-2xl">
                  The ultimate UPSC Civil Services test series featuring Prelims GS, rigorous CSAT mocks, and complete Mains (GS + Essay) evaluation with exact UPSC standard paper mapping.
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-200">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    4.9 <span className="text-slate-500 font-medium">(25,400+ Ratings)</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-slate-200">
                    <Users className="w-5 h-5 text-blue-400" />
                    50,000+ Aspirants Enrolled
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                    <FileText className="w-7 h-7 text-blue-400 mb-2" />
                    <span className="font-extrabold text-2xl text-white">160+</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Total Tests</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                    <TrendingUp className="w-7 h-7 text-emerald-400 mb-2" />
                    <span className="font-extrabold text-2xl text-white">Mains</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Evaluation</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                    <Languages className="w-7 h-7 text-purple-400 mb-2" />
                    <span className="font-extrabold text-2xl text-white">Eng/Hin</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Bilingual</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-slate-950/50 rounded-2xl border border-slate-800/50 text-center hover:border-slate-700 transition-colors">
                    <CheckCircle2 className="w-7 h-7 text-rose-400 mb-2" />
                    <span className="font-extrabold text-2xl text-white">UPSC</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Pattern</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/dashboard/test-series/upsc" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-blue-500/20 active:scale-95">
                    <Play className="w-5 h-5 fill-white" /> Start Free Demo
                  </Link>
                  <Link href="/government-exams/upsc/schedule" className="w-full sm:w-auto px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg active:scale-95 shadow-sm">
                    <Calendar className="w-5 h-5" /> View Schedule
                  </Link>
                </div>
                <div className="text-sm font-semibold text-slate-400 flex items-center justify-start gap-2 mt-4 px-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  Strictly per Latest Exam Pattern
                </div>
              </div>
            </div>

            {/* 2️⃣ Detailed Test Breakdown (Testbook Style Accordion, Dark Mode) */}
            <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden" id="test-syllabus">
              <div className="p-6 md:p-8 border-b border-slate-800 bg-slate-900/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <h2 className="text-3xl font-black text-white relative z-10">Test Series Breakdown</h2>
                <p className="text-slate-400 mt-2 font-medium relative z-10">Explore everything included in the Complete UPSC CSE Test Package.</p>
              </div>

              <div className="divide-y divide-slate-800/50">
                {testBreakdown.map((category) => (
                  <div key={category.id} className="bg-slate-900">
                    <button
                      onClick={() => toggleAccordion(category.id)}
                      className="w-full text-left p-6 md:px-8 flex items-start md:items-center justify-between hover:bg-slate-800/50 transition-colors group"
                    >
                      <div className="pr-4">
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {category.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-3">
                          <span className="text-xs font-bold text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-blue-400" /> {category.testCount} Tests Total
                          </span>
                          {category.freeCount > 0 && (
                            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                              <Star className="w-3.5 h-3.5 fill-emerald-400" /> {category.freeCount} Free Test{category.freeCount > 1 ? 's' : ''}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className={`p-2 rounded-full border border-slate-700 transition-all duration-300 ${activeAccordion === category.id ? 'rotate-180 bg-slate-800' : 'bg-slate-950/50'}`}>
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      </div>
                    </button>

                    {/* Accordion Content */}
                    {activeAccordion === category.id && (
                      <div className="px-6 md:px-8 pb-8 pt-4 bg-slate-950/30 border-t border-slate-800/50 shadow-inner">
                        <p className="text-sm text-slate-400 mb-6 font-medium bg-slate-900 p-4 rounded-xl border border-slate-800">{category.desc}</p>

                        <div className="space-y-4">
                          {category.tests.map((test, idx) => (
                            <div key={idx} className="flex flex-col xl:flex-row xl:items-center justify-between p-5 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all gap-5 group">
                              <div>
                                <div className="flex items-center gap-3 mb-3">
                                  {test.isFree ? (
                                    <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider rounded-md">Free</span>
                                  ) : (
                                    <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-black uppercase tracking-wider rounded-md flex items-center gap-1">
                                      <Lock className="w-3 h-3" /> Pro
                                    </span>
                                  )}
                                  <h4 className="font-bold text-white text-base md:text-lg group-hover:text-blue-100 transition-colors">{test.name}</h4>
                                </div>
                                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-400 bg-slate-950 w-fit px-3 py-1.5 rounded-lg border border-slate-800/50">
                                  <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-blue-400" /> {test.q} Qs</span>
                                  <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> {test.m} Marks</span>
                                  <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> {test.time}</span>
                                </div>
                              </div>
                              <div className="shrink-0 w-full xl:w-auto">
                                {test.isFree ? (
                                  <Link href={`/dashboard/test-series/upsc`} className="w-full xl:w-auto px-6 py-3 bg-blue-600/10 border border-blue-500/30 hover:bg-blue-600 hover:text-white text-blue-400 font-bold rounded-xl transition-colors flex items-center justify-center text-sm shadow-sm active:scale-95">
                                    Start Test <ChevronRight className="w-4 h-4 ml-1" />
                                  </Link>
                                ) : (
                                  <a href="#pricing" className="w-full xl:w-auto px-6 py-3 bg-slate-950 text-slate-500 font-bold rounded-xl flex items-center justify-center text-sm hover:text-slate-300 transition-colors border border-slate-800">
                                    <Lock className="w-4 h-4 mr-2" /> Unlock Now
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {category.tests.length < category.testCount && (
                          <div className="mt-8 text-center pb-2">
                            <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-bold text-sm hover:bg-slate-700 hover:border-slate-600 transition-all group shadow-sm">
                              Unlock all remaining {category.testCount - category.tests.length} tests <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 3️⃣ About the Exam Section */}
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6 relative z-10">About UPSC CSE 2026</h2>
              <p className="text-slate-400 font-medium leading-relaxed mb-8 relative z-10 text-lg">
                The Civil Services Examination (CSE) is a nationwide competitive examination conducted by the UPSC for recruitment to higher Civil Services of the Government of India, including IAS, IFS, and IPS.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <MonitorPlay className="w-3.5 h-3.5 text-blue-400" /> Exam Mode
                  </div>
                  <div className="font-bold text-white text-lg">Offline Pen-Paper</div>
                </div>
                <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Prelims
                  </div>
                  <div className="font-bold text-white text-lg">Objective (MCQs)</div>
                </div>
                <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-rose-400" /> Mains
                  </div>
                  <div className="font-bold text-white text-lg">Descriptive</div>
                </div>
              </div>
            </div>

            {/* 4️⃣ FAQ */}
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-8 relative z-10">Frequently Asked Questions</h2>
              <div className="space-y-4 relative z-10">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/50 hover:border-slate-700 transition-colors">
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full p-6 text-left flex items-start sm:items-center justify-between font-bold text-white text-lg gap-4"
                    >
                      <span className="leading-snug pr-4">{faq.q}</span>
                      <ChevronDown className={`w-6 h-6 shrink-0 text-slate-500 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-blue-400' : ''}`} />
                    </button>
                    {activeFaq === idx && (
                      <div className="px-6 pb-6 text-slate-400 font-medium leading-relaxed border-t border-slate-800/50 pt-5 bg-slate-900 shadow-inner">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - STICKY PRICING CARD */}
          <div className="lg:col-span-4" id="pricing">
            <div className="sticky top-24 bg-slate-900 border-2 border-blue-600 rounded-3xl p-8 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl -mr-10 -mt-10"></div>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                Exclusive UPSC Package
              </div>

              <h3 className="text-2xl font-black text-white mb-3 mt-3 relative z-10">Get Xamsathi Pro Pass</h3>
              <p className="text-sm text-slate-400 font-medium mb-8 relative z-10">Unlock all UPSC Prelims, CSAT, chapter mocks, and Mains Evaluation packages.</p>

              <div className="space-y-4 mb-8 relative z-10">
                <div className="flex justify-between items-center p-5 rounded-2xl border-2 border-blue-500 bg-blue-600/10 cursor-pointer relative overflow-hidden transition-all hover:bg-blue-600/20 group">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">Most Popular</div>
                  <div>
                    <div className="font-black text-white text-lg">15 Months Pass</div>
                    <div className="text-xs font-bold text-slate-400 line-through mt-0.5">₹4999</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-blue-400 tracking-tight">₹2499</div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-5 rounded-2xl border border-slate-700 hover:border-slate-500 bg-slate-950/50 cursor-pointer transition-colors group">
                  <div>
                    <div className="font-bold text-slate-300 group-hover:text-white transition-colors">8 Months Pass</div>
                    <div className="text-xs font-bold text-slate-500 line-through mt-0.5">₹2999</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-slate-300 group-hover:text-white transition-colors">₹1899</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8 p-6 bg-slate-950 rounded-2xl border border-slate-800 relative z-10">
                <div className="flex items-start gap-3 text-sm text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> 160+ Prelims & CSAT Tests
                </div>
                <div className="flex items-start gap-3 text-sm text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> Mains PDF Answer Evaluation
                </div>
                <div className="flex items-start gap-3 text-sm text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> All India Peer Ranking
                </div>
                <div className="flex items-start gap-3 text-sm text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> Daily Current Affairs Modules
                </div>
              </div>

              <Link href="/checkout?plan=pro&exam=upsc-complete" className="block w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-blue-500/30 active:scale-95 relative z-10">
                Buy Complete Pass
              </Link>
              <div className="mt-5 text-center text-xs font-bold text-slate-500 flex items-center justify-center gap-2 relative z-10">
                <ShieldCheck className="w-4 h-4 text-slate-400" /> Secure Payment Guaranteed
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 p-6 sm:p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-xl">
              <h4 className="font-black text-white mb-6 text-center text-lg">Why serious aspirants trust us</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shadow-sm text-sm font-black text-indigo-400">92%</div>
                  <div className="text-sm font-bold text-slate-300 leading-snug">Questions accurately matched actual Prelims toughness</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shadow-sm"><Star className="w-6 h-6 text-amber-500 fill-amber-500" /></div>
                  <div className="text-sm font-bold text-slate-300 leading-snug">Top rated mock test evaluation platform for Mains</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

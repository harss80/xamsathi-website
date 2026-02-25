"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Star, Users, CheckCircle2, Play, BookOpen, Clock,
  Trophy, ShieldCheck, Check, ChevronDown, ChevronUp,
  Lock, Languages, MonitorPlay, FileText, Award
} from "lucide-react";
import Navbar from "@/components/Navbar";

const testBreakdown = [
  {
    id: "full-tests",
    title: "SSC CGL Tier 1 Full Mock Tests",
    desc: "Strictly based on the latest TCS pattern. Includes negative marking.",
    testCount: 20,
    freeCount: 1,
    tests: [
      { name: "SSC CGL Tier 1 Full Mock Test 1", q: 100, m: 200, time: "60 Mins", isFree: true },
      { name: "SSC CGL Tier 1 Full Mock Test 2", q: 100, m: 200, time: "60 Mins", isFree: false },
      { name: "SSC CGL Tier 1 Full Mock Test 3", q: 100, m: 200, time: "60 Mins", isFree: false },
      { name: "SSC CGL Tier 1 Full Mock Test 4", q: 100, m: 200, time: "60 Mins", isFree: false },
      { name: "SSC CGL Tier 1 Full Mock Test 5", q: 100, m: 200, time: "60 Mins", isFree: false },
    ]
  },
  {
    id: "pyq-2023",
    title: "SSC CGL Tier 1 Previous Year Papers (2023)",
    desc: "Official papers from SSC CGL 2023 exam, set as timed mocks.",
    testCount: 39,
    freeCount: 1,
    tests: [
      { name: "SSC CGL Tier 1 (14th July 2023 - Shift 1)", q: 100, m: 200, time: "60 Mins", isFree: true },
      { name: "SSC CGL Tier 1 (14th July 2023 - Shift 2)", q: 100, m: 200, time: "60 Mins", isFree: false },
      { name: "SSC CGL Tier 1 (14th July 2023 - Shift 3)", q: 100, m: 200, time: "60 Mins", isFree: false },
      { name: "SSC CGL Tier 1 (17th July 2023 - Shift 1)", q: 100, m: 200, time: "60 Mins", isFree: false },
    ]
  },
  {
    id: "quant-chapter",
    title: "Chapter Tests - Quantitative Aptitude",
    desc: "Topic-wise tests to strengthen your mathematical foundation.",
    testCount: 24,
    freeCount: 2,
    tests: [
      { name: "Percentage - Conceptual", q: 20, m: 40, time: "20 Mins", isFree: true },
      { name: "Ratio and Proportion", q: 20, m: 40, time: "20 Mins", isFree: true },
      { name: "Number System - Level 1", q: 20, m: 40, time: "20 Mins", isFree: false },
      { name: "Time and Work - Advanced", q: 20, m: 40, time: "20 Mins", isFree: false },
    ]
  },
  {
    id: "reasoning-chapter",
    title: "Chapter Tests - Logical Reasoning",
    desc: "Topic-wise reasoning tests to improve logic and speed.",
    testCount: 18,
    freeCount: 1,
    tests: [
      { name: "Blood Relations", q: 20, m: 40, time: "15 Mins", isFree: true },
      { name: "Coding Decoding", q: 25, m: 50, time: "20 Mins", isFree: false },
      { name: "Syllogism", q: 20, m: 40, time: "15 Mins", isFree: false },
    ]
  }
];

const faqs = [
  { q: "Is this test series bilingual?", a: "Yes, all tests in the SSC CGL Mock Test Series are available in both English and Hindi. You can switch the language anytime during the test." },
  { q: "What is the validity of the plans?", a: "The Basic plan has a validity of 6 months. Pro plan comes with an All-India Rank and 6-month validity. Premium plan gives you 1 Year extra (total 1.5 Years)." },
  { q: "Are the questions based on the latest TCS pattern?", a: "Absolutely. All mock tests and sectional tests are updated strictly according to the latest SSC CGL pattern conducted by TCS." },
  { q: "Can I access this test series on my mobile phone?", a: "Yes, the platform is fully responsive. You can flawlessly attempt tests, review solutions, and check analytics on your mobile or tablet." }
];

export default function SSCCGLExamPage() {
  const [activeAccordion, setActiveAccordion] = useState<string>("full-tests");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? "" : id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>›</span>
          <Link href="/government-exams" className="hover:text-blue-600">Government Exams</Link>
          <span>›</span>
          <span className="text-slate-900 font-bold">SSC CGL Test Series</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT COLUMN - MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-10">

            {/* 1️⃣ Hero Info Section */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-5 uppercase tracking-wider">
                <Trophy className="w-4 h-4" /> Bestseller
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                SSC CGL Mock Test Series 2026
              </h1>

              <p className="text-lg text-slate-600 mb-6 font-medium leading-relaxed">
                Boost your SSC CGL Tier 1 & Tier 2 preparation with India's most trusted mock tests based on the latest TCS exam pattern. Get detailed solutions, All India Ranks, and performance analytics.
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 font-bold text-slate-700">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  4.8 <span className="text-slate-500 font-medium">(14,200+ Ratings)</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-700">
                  <Users className="w-5 h-5 text-blue-500" />
                  45,000+ Students Enrolled
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <FileText className="w-7 h-7 text-blue-600 mb-2" />
                  <span className="font-extrabold text-xl text-slate-900">450+</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wide mt-1">Total Tests</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <Award className="w-7 h-7 text-emerald-600 mb-2" />
                  <span className="font-extrabold text-xl text-slate-900">45+</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wide mt-1">Free Tests</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <Languages className="w-7 h-7 text-purple-600 mb-2" />
                  <span className="font-extrabold text-xl text-slate-900">Eng/Hin</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wide mt-1">Bilingual</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <MonitorPlay className="w-7 h-7 text-rose-600 mb-2" />
                  <span className="font-extrabold text-xl text-slate-900">TCS</span>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wide mt-1">Pattern</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/dashboard/test-series/ssc-cgl" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-blue-500/30">
                  <Play className="w-5 h-5 fill-white" /> Start Free Demo Test
                </Link>
                <div className="text-sm font-semibold text-slate-500 flex items-center justify-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  Strictly per Latest Exam Pattern
                </div>
              </div>
            </div>

            {/* 2️⃣ Detailed Test Breakdown (Testbook Style Accordion) */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden" id="test-syllabus">
              <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-2xl font-black text-slate-900">Test Series Breakdown</h2>
                <p className="text-slate-500 mt-2 font-medium">Explore everything included in the SSC CGL Test Series package.</p>
              </div>

              <div className="divide-y divide-slate-100">
                {testBreakdown.map((category) => (
                  <div key={category.id} className="bg-white">
                    <button
                      onClick={() => toggleAccordion(category.id)}
                      className="w-full text-left p-6 md:px-8 flex items-start md:items-center justify-between hover:bg-slate-50 transition-colors group"
                    >
                      <div className="pr-4">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {category.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className="text-sm font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                            {category.testCount} Tests Total
                          </span>
                          {category.freeCount > 0 && (
                            <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                              {category.freeCount} Free Test{category.freeCount > 1 ? 's' : ''}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className={`p-2 rounded-full border border-slate-200 transition-transform ${activeAccordion === category.id ? 'rotate-180 bg-slate-100' : 'bg-white'}`}>
                        <ChevronDown className="w-5 h-5 text-slate-500" />
                      </div>
                    </button>

                    {/* Accordion Content */}
                    {activeAccordion === category.id && (
                      <div className="px-6 md:px-8 pb-6 bg-slate-50/50 border-t border-slate-50">
                        <p className="text-sm text-slate-600 mb-4 pt-4 font-medium">{category.desc}</p>

                        <div className="space-y-3">
                          {category.tests.map((test, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-colors gap-4 shadow-sm">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  {test.isFree ? (
                                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded">Free</span>
                                  ) : (
                                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-black uppercase rounded flex items-center gap-1">
                                      <Lock className="w-3 h-3" /> Pro
                                    </span>
                                  )}
                                  <h4 className="font-bold text-slate-800 text-base">{test.name}</h4>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                                  <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> {test.q} Questions</span>
                                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> {test.m} Marks</span>
                                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {test.time}</span>
                                </div>
                              </div>
                              <div>
                                {test.isFree ? (
                                  <Link href={`/dashboard/test-series/ssc-cgl`} className="w-full md:w-auto px-5 py-2.5 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 font-bold rounded-lg transition-colors flex items-center justify-center text-sm shadow-sm active:scale-95">
                                    Start Test
                                  </Link>
                                ) : (
                                  <a href="#pricing" className="w-full md:w-auto px-5 py-2.5 bg-slate-100 text-slate-500 font-bold rounded-lg flex items-center justify-center text-sm cursor-not-allowed border border-slate-200">
                                    <Lock className="w-4 h-4 mr-1.5" /> Unlock
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {category.tests.length < category.testCount && (
                          <div className="mt-4 text-center">
                            <a href="#pricing" className="text-blue-600 hover:text-blue-700 font-bold text-sm hover:underline">
                              Unlock all {category.testCount} tests »
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
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-6">About SSC CGL 2026</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">
                The Staff Selection Commission Combined Graduate Level (SSC CGL) is one of the most prestigious exams in India, recruiting candidates for various Group B & Group C posts in ministries and departments of the Government of India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">Exam Mode</div>
                  <div className="font-bold text-slate-900">Online CBT</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">Sections (Tier 1)</div>
                  <div className="font-bold text-slate-900">4 Sections (100 Qs)</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">Negative Marking</div>
                  <div className="font-bold text-slate-900">0.50 Marks (Tier 1)</div>
                </div>
              </div>
            </div>

            {/* 4️⃣ FAQ */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50">
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-800"
                    >
                      {faq.q}
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {activeFaq === idx && (
                      <div className="px-5 pb-5 text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4 bg-white">
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
            <div className="sticky top-24 bg-white border-2 border-blue-600 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                Limited Time Offer
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 mt-2">Get Xamsathi Pro Pass</h3>
              <p className="text-sm text-slate-500 font-medium mb-6">Unlock all SSC CGL mocks, chapter tests, PYQs, and detailed analytics.</p>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 rounded-xl border-2 border-blue-100 bg-blue-50/50 cursor-pointer relative overflow-hidden transition-all hover:border-blue-300 group">
                  <div className="absolute top-0 right-0 bg-amber-400 text-slate-900 text-[9px] font-black px-2 py-0.5 rounded-bl-lg uppercase tracking-wider">Popular</div>
                  <div>
                    <div className="font-bold text-slate-900">12 Months Pass</div>
                    <div className="text-xs font-medium text-slate-500 line-through">₹1999</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-blue-700">₹799</div>
                  </div>
                  <div className="absolute inset-0 border-2 border-blue-500 rounded-xl opacity-100"></div>
                </div>

                <div className="flex justify-between items-center p-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-white cursor-pointer transition-colors group">
                  <div>
                    <div className="font-bold text-slate-700">6 Months Pass</div>
                    <div className="text-xs font-medium text-slate-400 line-through">₹999</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-slate-700">₹499</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-sm text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Access to all 450+ Tests
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Real TCS Interface
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> All India Ranking & Percentile
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Detailed Solutions & PDF
                </div>
              </div>

              <Link href="/checkout?plan=pro&exam=ssc-cgl" className="block w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl text-center transition-all text-lg shadow-lg shadow-blue-500/30 active:scale-95">
                Buy Xamsathi Pro
              </Link>
              <div className="mt-4 text-center text-xs font-bold text-slate-500 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Secure Payment & 100% Guaranteed
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 p-6 bg-slate-100 rounded-3xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-4 text-center">Why thousands trust us?</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-xs font-black text-slate-600">95%</div>
                  <div className="text-sm font-semibold text-slate-600 leading-tight">Questions matched with actual exam</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><Star className="w-5 h-5 text-amber-500 fill-amber-500" /></div>
                  <div className="text-sm font-semibold text-slate-600 leading-tight">Top rated mock tests across internet</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

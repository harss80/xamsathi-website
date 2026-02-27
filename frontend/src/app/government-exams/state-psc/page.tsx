"use client";
import React from "react";
import Link from "next/link";
import {
    Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock,
    Trophy, ShieldCheck, Check, X, ChevronRight,
    Award, MonitorPlay, Languages, Landmark
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function StatePSCExamsCategoryPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
            <Navbar />

            <main className="container mx-auto px-4 md:px-6 pt-24 pb-20">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Link href="/" className="hover:text-blue-400">Home</Link>
                    <span>›</span>
                    <Link href="/government-exams" className="hover:text-blue-400">Government Exams</Link>
                    <span>›</span>
                    <span className="text-white font-bold">State PSC</span>
                </div>

                {/* Hero Section */}
                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-800 shadow-2xl mb-16 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110 pointer-events-none"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold mb-5 uppercase tracking-wider">
                                <Landmark className="w-4 h-4" /> Comprehensive Local Setup
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                                State PSC Exam Test Series 2026
                            </h1>
                            <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed max-w-xl">
                                UPPSC, BPSC, MPPSC and more. A targeted preparation strategy with state-specific General Knowledge and latest syllabus mocks.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link href="#courses" className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg shadow-lg shadow-red-500/20 active:scale-95">
                                    Browse State Exams
                                </Link>
                                <Link href="#demo" className="px-8 py-4 bg-slate-950 border border-slate-700 hover:border-slate-500 hover:text-white text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-sm">
                                    Start Free Prelims Mock
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-amber-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5 border border-amber-500/20">
                                        <Star className="w-7 h-7 fill-amber-500" />
                                    </div>
                                    <div className="text-3xl font-black text-white">4.8/5</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Student Rating</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-blue-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-5 border border-blue-500/20">
                                        <Users className="w-7 h-7" />
                                    </div>
                                    <div className="text-3xl font-black text-white">1.8 Lakh+</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Active Aspirants</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-emerald-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5 border border-emerald-500/20">
                                        <BookOpen className="w-7 h-7" />
                                    </div>
                                    <div className="text-3xl font-black text-white">280+ Tests</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">State Level CBT</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-slate-950/50 border border-slate-800 shadow-sm flex flex-col items-center sm:items-start text-center sm:text-left transition-colors hover:border-purple-500/50">
                                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-5 border border-purple-500/20">
                                        <Languages className="w-7 h-7" />
                                    </div>
                                    <div className="text-3xl font-black text-white">Eng/Hin</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Bilingual Interface</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 - Available Test Series */}
                <div id="courses" className="mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-black text-white mb-3">Target Your State PSC</h2>
                            <p className="text-lg text-slate-400 font-medium tracking-tight">Select your targeted State PSC exam to access specialized mock packs and state-specific GK content.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            {
                                id: "uppsc",
                                title: "UPPSC 2026",
                                desc: "Complete mock series strictly focused on Uttar Pradesh PCS Prelims & CSAT.",
                                tests: 320,
                                users: "1.2 Lakh",
                                tag: "Bestseller",
                                link: "/government-exams/state-psc/uppsc"
                            },
                            {
                                id: "bpsc",
                                title: "BPSC 70th/71st",
                                desc: "Detailed mock test suite targeting Bihar Public Service Commission exams.",
                                tests: 280,
                                users: "85k",
                                tag: "Strategic",
                                link: "/government-exams/state-psc/bpsc"
                            },
                            {
                                id: "mppsc",
                                title: "MPPSC 2026",
                                desc: "Madhya Pradesh State Civil Services comprehensive Prelims test suite.",
                                tests: 250,
                                users: "65k",
                                link: "/government-exams/state-psc/mppsc"
                            },
                            {
                                id: "rpsc",
                                title: "RPSC RAS 2026",
                                desc: "Rajasthan Administrative Services Prelims detailed preparation.",
                                tests: 240,
                                users: "45k",
                                link: "/government-exams/state-psc/rpsc"
                            },
                        ].map((exam) => (
                            <Link href={exam.link} key={exam.id} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-red-500/50 hover:bg-slate-800/30 transition-all duration-300 relative overflow-hidden">
                                {exam.tag && (
                                    <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-500">
                                        {exam.tag}
                                    </span>
                                )}
                                <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-slate-700">
                                    <ShieldCheck className="w-7 h-7 text-red-500" />
                                </div>
                                <h3 className="text-xl font-black text-white mb-2 group-hover:text-red-500 transition-colors uppercase">{exam.title}</h3>
                                <p className="text-sm text-slate-400 font-medium mb-6 line-clamp-2">{exam.desc}</p>

                                <div className="mt-auto space-y-3">
                                    <div className="flex items-center gap-4 text-xs font-bold text-slate-300">
                                        <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                                            <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> {exam.tests} Tests
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                                            <Users className="w-3.5 h-3.5 text-blue-400" /> {exam.users}
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                                        <span className="text-sm font-bold text-slate-300">View Series</span>
                                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        ))}

                        {/* MAHA PACK CARD - SPANS REMAINING COLS */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-red-950/30 border border-amber-500/30 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(245,158,11,0.1)] transition-all flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Landmark className="w-64 h-64 text-amber-500" />
                            </div>
                            <div className="max-w-xl relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black mb-4 uppercase tracking-widest">
                                    All-In-One Access
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">State PSC Maha Pack</h3>
                                <p className="text-slate-300 font-medium leading-relaxed">Preparing for multiple states? Get 12 months unlimited access to UPPSC, BPSC, MPPSC and RPSC tests in one single discounted bundle.</p>
                            </div>
                            <div className="flex flex-col items-center gap-4 relative z-10 shrink-0">
                                <div className="flex flex-col items-center">
                                    <span className="text-slate-500 line-through text-sm font-bold tracking-widest uppercase">Value ₹3996</span>
                                    <span className="text-4xl font-black text-amber-400">₹1999</span>
                                </div>
                                <Link href="/checkout?plan=combo&exam=state-psc-combo" className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-amber-500/30">
                                    Enroll Maha Pack <ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Section 3 - Comparison Table */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Compare Plan Features</h2>
                        <p className="text-lg text-slate-400 font-medium">See what is exactly included in our State PSC specific packages.</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-xl max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full text-center border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-slate-950 border-b border-slate-800">
                                        <th className="p-6 text-left font-bold text-slate-300 text-lg">Feature</th>
                                        <th className="p-6 font-bold text-slate-400 text-lg">Basic</th>
                                        <th className="p-6 font-black text-red-500 text-lg bg-red-500/5 relative border-x border-red-500/10">
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
                                            Pro
                                        </th>
                                        <th className="p-6 font-bold text-amber-500 text-lg">Premium</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300 font-medium tracking-wide">
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Prelims Full Mocks</td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-red-500/5 border-x border-red-500/10"><Check className="w-5 h-5 text-red-500 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">State Specific GK Mocks</td>
                                        <td className="p-6 text-slate-500 font-semibold text-sm">Limited</td>
                                        <td className="p-6 bg-red-500/5 text-red-500 font-bold border-x border-red-500/10">Full Access</td>
                                        <td className="p-6 text-emerald-400 font-bold">Full Access</td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">PYQ Papers</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-red-500/5 border-x border-red-500/10"><Check className="w-5 h-5 text-red-500 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">CSAT Mock Series</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-red-500/5 border-x border-red-500/10"><Check className="w-5 h-5 text-red-500 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/50 transition-colors">
                                        <td className="p-6 text-left text-white font-bold">Current Affairs Monthly PDF</td>
                                        <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6 bg-red-500/5 border-x border-red-500/10"><X className="w-5 h-5 text-slate-600 mx-auto" strokeWidth={3} /></td>
                                        <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" strokeWidth={3} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Section 4 - Why Choose Xamsathi */}
                <div className="mb-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-black text-white mb-4">Why Xamsathi For State PCS?</h2>
                        <p className="text-lg text-slate-400 font-medium">Built strategically for high-competition state level syllabus.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center mx-auto mb-6">
                                <Landmark className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">State Focused GK</h4>
                            <p className="text-sm text-slate-400 font-medium">Mocks contain up to 20% strictly local state-level history & geography content.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-6">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">Topic Weakness Tracker</h4>
                            <p className="text-sm text-slate-400 font-medium">Pinpoint whether you are losing marks in Polity, Economy or Science.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">CSAT Special</h4>
                            <p className="text-sm text-slate-400 font-medium">Aptitude tests that mirror UPPSC/BPSC Paper II exactly.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl hover:border-slate-700 hover:-translate-y-1 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-black text-white mb-3">State Rank Predictor</h4>
                            <p className="text-sm text-slate-400 font-medium">See your percentiles mapped against students purely from your own state.</p>
                        </div>
                    </div>
                </div>

                {/* Section 5 - Free Demo */}
                <div id="demo">
                    <div className="bg-gradient-to-r from-red-600 to-rose-700 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-[0_20px_40px_rgba(225,29,72,0.2)] relative overflow-hidden max-w-5xl mx-auto border border-red-500/50">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-6 backdrop-blur-md shadow-sm">
                                <ShieldCheck className="w-4 h-4" /> Try It Completely Free
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                                Test Your Officers Level Start
                            </h2>
                            <p className="text-red-100 mb-10 font-medium leading-relaxed text-lg">
                                Attempt a highly targeted UPPSC or BPSC Mock today completely free and get a detailed breakdown of your weak points instantly.
                            </p>

                            <Link href="/dashboard/test-series/state-psc-uppsc" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-red-700 hover:bg-slate-100 font-black rounded-xl transition-all duration-300 shadow-xl active:scale-95 text-xl">
                                <Play className="w-5 h-5 fill-red-700 text-red-700" />
                                Start State Mock
                            </Link>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

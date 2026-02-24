import Link from "next/link";
import { Star, Users, CheckCircle2, BookOpen, Trophy, ShieldCheck, Check, X, Landmark, Flag, MapPin, Target, Globe2 } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function StatePSCCategoryPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <Navbar />

            {/* Section 1 - Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-purple-400 text-sm font-bold mb-6">
                                <Flag className="w-4 h-4" /> State Civil Services Preparation
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                                State PSC Test Series <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">2026</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                UPPSC • BPSC • MPPSC • RPSC • And More. Real pattern-based tests designed for your state's administrative exams.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link href="#plans" className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-lg shadow-purple-500/20">
                                    🚀 View State Plans
                                </Link>
                                <Link href="#demo" className="px-8 py-4 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                                    📘 Start Free Demo
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="space-y-8 relative z-10">
                                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                                        <Star className="w-8 h-8 fill-amber-400" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <div className="text-3xl font-black text-white">4.8 Rating</div>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">From Aspirants</div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <div className="text-3xl font-black text-white">80,000+ Students</div>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Enrolled Nationwide</div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                                        <BookOpen className="w-8 h-8" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <div className="text-3xl font-black text-white">180+ Tests</div>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Across various states</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 2 - Available State PSC Series */}
            <section id="plans" className="py-24 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Targeted State PSC Series</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Master the exam with syllabus crafted specifically for your state's administrative civil services.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">

                        {/* UPPSC CARD */}
                        <div className="flex flex-col bg-slate-950 border-2 border-purple-600/50 hover:border-purple-500 rounded-3xl p-6 relative overflow-hidden group transition-colors shadow-xl">
                            <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 bg-purple-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
                            <h3 className="text-2xl font-black text-white mb-2 mt-2">UPPSC 2026</h3>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total: 113+ Tests</span>
                            </div>

                            <div className="space-y-3 mb-8 flex-1">
                                {[
                                    "30 Prelims Mocks",
                                    "20 Mains GS Tests",
                                    "8 Essay Tests",
                                    "40 Sectional Tests",
                                    "15 PYQ Papers",
                                    "Rank + Analytics"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-2 bg-slate-900 rounded-xl border border-slate-800 p-2 mb-6 text-center">
                                <div className="p-2">
                                    <div className="text-[9px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                                    <div className="text-sm font-bold text-slate-400">₹899</div>
                                </div>
                                <div className="p-2 bg-purple-600/10 border border-purple-500/30 rounded-lg">
                                    <div className="text-[9px] font-black uppercase text-purple-400 tracking-wider mb-1">Pro</div>
                                    <div className="text-lg font-bold text-purple-400">₹1399</div>
                                </div>
                                <div className="p-2">
                                    <div className="text-[9px] font-black uppercase text-amber-400 tracking-wider mb-1">Prem</div>
                                    <div className="text-sm font-bold text-amber-400">₹1699</div>
                                </div>
                            </div>

                            <Link href="/exams/state-psc/uppsc-2026" className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-base shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                                View Details
                            </Link>
                        </div>

                        {/* BPSC CARD */}
                        <div className="flex flex-col bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 relative overflow-hidden group transition-colors">
                            <h3 className="text-2xl font-black text-white mb-2">BPSC 2026</h3>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total: 88+ Tests</span>
                            </div>

                            <div className="space-y-3 mb-8 flex-1">
                                {[
                                    "25 Prelims",
                                    "15 Mains GS",
                                    "6 Essay",
                                    "30 Sectional",
                                    "12 PYQ",
                                    "Rank + Analytics"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-2 bg-slate-900 rounded-xl border border-slate-800 p-2 mb-6 text-center">
                                <div className="p-2">
                                    <div className="text-[9px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                                    <div className="text-sm font-bold text-slate-400">₹799</div>
                                </div>
                                <div className="p-2 border border-slate-700 rounded-lg">
                                    <div className="text-[9px] font-black uppercase text-slate-300 tracking-wider mb-1">Pro</div>
                                    <div className="text-lg font-bold text-white">₹1299</div>
                                </div>
                                <div className="p-2">
                                    <div className="text-[9px] font-black uppercase text-amber-400 tracking-wider mb-1">Prem</div>
                                    <div className="text-sm font-bold text-amber-400">₹1599</div>
                                </div>
                            </div>

                            <Link href="/exams/state-psc/bpsc-2026" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-base">
                                View Details
                            </Link>
                        </div>

                        {/* MPPSC CARD */}
                        <div className="flex flex-col bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 relative overflow-hidden group transition-colors">
                            <h3 className="text-2xl font-black text-white mb-2">MPPSC 2026</h3>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total: 100+ Tests</span>
                            </div>

                            <div className="space-y-3 mb-8 flex-1">
                                {[
                                    "25 Prelims",
                                    "18 Mains",
                                    "35 Sectional",
                                    "10 Essay",
                                    "12 PYQ",
                                    "Rank + Analytics"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-2 bg-slate-900 rounded-xl border border-slate-800 p-2 mb-6 text-center">
                                <div className="p-2">
                                    <div className="text-[9px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                                    <div className="text-sm font-bold text-slate-400">₹799</div>
                                </div>
                                <div className="p-2 border border-slate-700 rounded-lg">
                                    <div className="text-[9px] font-black uppercase text-slate-300 tracking-wider mb-1">Pro</div>
                                    <div className="text-lg font-bold text-white">₹1299</div>
                                </div>
                                <div className="p-2">
                                    <div className="text-[9px] font-black uppercase text-amber-400 tracking-wider mb-1">Prem</div>
                                    <div className="text-sm font-bold text-amber-400">₹1599</div>
                                </div>
                            </div>

                            <Link href="/exams/state-psc/mppsc-2026" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-base">
                                View Details
                            </Link>
                        </div>

                        {/* RPSC CARD */}
                        <div className="flex flex-col bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 relative overflow-hidden group transition-colors">
                            <h3 className="text-2xl font-black text-white mb-2">RPSC 2026</h3>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total: 75+ Tests</span>
                            </div>

                            <div className="space-y-3 mb-8 flex-1">
                                {[
                                    "20 Prelims",
                                    "15 Mains",
                                    "30 Sectional",
                                    "10 PYQ",
                                    "Detailed Solutions",
                                    "Rank + Analytics"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-2 bg-slate-900 rounded-xl border border-slate-800 p-2 mb-6 text-center">
                                <div className="p-2">
                                    <div className="text-[9px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                                    <div className="text-sm font-bold text-slate-400">₹699</div>
                                </div>
                                <div className="p-2 border border-slate-700 rounded-lg">
                                    <div className="text-[9px] font-black uppercase text-slate-300 tracking-wider mb-1">Pro</div>
                                    <div className="text-lg font-bold text-white">₹1199</div>
                                </div>
                                <div className="p-2">
                                    <div className="text-[9px] font-black uppercase text-amber-400 tracking-wider mb-1">Prem</div>
                                    <div className="text-sm font-bold text-amber-400">₹1499</div>
                                </div>
                            </div>

                            <Link href="/exams/state-psc/rpsc-2026" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-base">
                                View Details
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 3 - Combo Pack */}
            <section className="py-24 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">State PSC Combo Packs 💰</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Prepare for multiple state exams. Best for aspirants targeting neighboring states.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Any 2 States */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col text-center shadow-xl">
                            <h3 className="text-2xl font-black text-white mb-2">Any 2 States</h3>
                            <p className="text-slate-400 mb-6 text-sm">Choose any 2 State PSC series to build your perfect pair.</p>
                            <div className="text-4xl font-black text-white mb-8 border-b border-slate-800 pb-8">
                                ₹1999
                            </div>
                            <ul className="space-y-4 mb-8 text-left flex-1">
                                <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Full access to 2 states</li>
                                <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> All features included</li>
                                <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Save up to ₹500</li>
                            </ul>
                            <Link href="/checkout?plan=combo-2" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all active:scale-95">Select States</Link>
                        </div>

                        {/* Any 3 States */}
                        <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-purple-500 rounded-3xl p-8 flex flex-col text-center shadow-2xl relative transform md:-translate-y-4">
                            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-purple-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">Value Pack</div>
                            <h3 className="text-2xl font-black text-white mb-2 mt-2">Any 3 States</h3>
                            <p className="text-slate-400 mb-6 text-sm">Target three neighboring states and drastically increase selection chances.</p>
                            <div className="text-5xl font-black text-purple-400 mb-8 border-b border-slate-800 pb-8">
                                ₹2499
                            </div>
                            <ul className="space-y-4 mb-8 text-left flex-1">
                                <li className="flex items-center gap-3 text-white font-bold"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Full access to 3 states</li>
                                <li className="flex items-center gap-3 text-white font-bold"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Premium tiers included</li>
                                <li className="flex items-center gap-3 text-white font-bold"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Save up to ₹1000</li>
                            </ul>
                            <Link href="/checkout?plan=combo-3" className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-xl transition-all shadow-lg shadow-purple-500/20 active:scale-95">Select States</Link>
                        </div>

                        {/* All States Access */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col text-center shadow-xl">
                            <h3 className="text-2xl font-black text-white mb-2">All States Access</h3>
                            <p className="text-slate-400 mb-6 text-sm">Unlimited access to every State PSC series on our platform.</p>
                            <div className="text-4xl font-black text-white mb-8 border-b border-slate-800 pb-8">
                                ₹3499
                            </div>
                            <ul className="space-y-4 mb-8 text-left flex-1">
                                <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> UPPSC, BPSC, MPPSC, RPSC...</li>
                                <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Future state additions</li>
                                <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Unmatched flexibility</li>
                            </ul>
                            <Link href="/checkout?plan=combo-all" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all active:scale-95">Get All States</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 - Comparison Table */}
            <section className="py-24 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Plan Comparison Table</h2>
                            <p className="text-lg text-slate-400">Compare features included in Basic, Pro, and Premium tiers.</p>
                        </div>

                        <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-center border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-slate-900 border-b border-slate-800">
                                            <th className="p-6 text-left font-bold text-white text-lg">Feature</th>
                                            <th className="p-6 font-bold text-slate-300 text-lg">Basic</th>
                                            <th className="p-6 font-black text-purple-400 text-lg bg-purple-600/5 relative">
                                                <div className="absolute top-0 left-0 right-0 h-1 bg-purple-600"></div>
                                                Pro
                                            </th>
                                            <th className="p-6 font-bold text-amber-400 text-lg">Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-300">
                                        <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">Prelims Mocks</td>
                                            <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                            <td className="p-6 bg-purple-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">Mains Tests</td>
                                            <td className="p-6 text-slate-400 font-semibold">Limited</td>
                                            <td className="p-6 bg-purple-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">Essay</td>
                                            <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6 bg-purple-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">Rank + Analytics</td>
                                            <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6 bg-purple-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">2 Year Access Ext.</td>
                                            <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6 bg-purple-600/5"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 - Why Choose Xamsathi */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Why Choose Xamsathi for State PSC?</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Providing realistic, affordable, and highly effective practice for regional exams.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">State-Specific Syllabus</h3>
                            <p className="text-slate-400 text-sm">Every test series is specifically aligned to the latest syllabus of respective state commissions.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                <Globe2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Hindi + English Medium</h3>
                            <p className="text-slate-400 text-sm">Bilingual tests and solutions carefully crafted to assist students from diverse backgrounds.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Real Pattern Based</h3>
                            <p className="text-slate-400 text-sm">Experience exact simulation of the prelims and mains exams to conquer exam phobia.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-pink-500/10 text-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                <Landmark className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Highly Affordable</h3>
                            <p className="text-slate-400 text-sm">Get premium quality preparation for ₹799 when offline coaching charges ₹10k+.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

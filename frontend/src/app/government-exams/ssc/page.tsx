import Link from "next/link";
import { Star, Users, CheckCircle2, Play, BookOpen, BarChart3, Clock, Trophy, ShieldCheck, Check, Cross, X } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function SSCExamsCategoryPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <Navbar />

            {/* Section 1 - Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-bold mb-6">
                                <Trophy className="w-4 h-4" /> Comprehensive Study Material
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                                SSC Test Series <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">2026</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                CGL, CHSL, MTS, CPO – Complete Mock Test Package with latest TCS pattern questions and detailed solutions.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link href="#courses" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-lg shadow-blue-500/20">
                                    View All Courses
                                </Link>
                                <Link href="#demo" className="px-8 py-4 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                                    Start Free Demo
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="space-y-8 relative z-10">
                                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                                        <Star className="w-8 h-8 fill-amber-400" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <div className="text-3xl font-black text-white">4.8/5 Rating</div>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">From students nationwide</div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <div className="text-3xl font-black text-white">1.2 Lakh+</div>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Enrolled Students</div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-950 border border-slate-800">
                                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                                        <BookOpen className="w-8 h-8" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <div className="text-3xl font-black text-white">450+ Tests</div>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Available across Exams</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 2 - Available SSC Test Series */}
            <section id="courses" className="py-24 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Available SSC Test Series</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Choose the exam you are targeting to see full details.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                        {/* SSC CGL CARD */}
                        <div className="bg-slate-950 border-2 border-blue-600 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-blue-500 transition-colors">
                            <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white text-xs font-black rounded-full uppercase tracking-widest shadow-lg">MOST POPULAR</div>
                            <h3 className="text-3xl font-black text-white mb-2">SSC CGL 2026<span className="text-slate-500 text-xl font-bold ml-2">Test Series</span></h3>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total Tests: 70</span>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {["20 Full Length Mocks", "35 Sectional Tests", "15 Previous Year Papers", "All India Ranking", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 mb-8 grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                                    <div className="text-lg font-bold text-white">₹499</div>
                                </div>
                                <div className="border-l border-slate-800">
                                    <div className="text-[10px] font-black uppercase text-blue-400 tracking-wider mb-1">Pro</div>
                                    <div className="text-lg font-bold text-blue-400">₹799</div>
                                </div>
                                <div className="border-l border-slate-800">
                                    <div className="text-[10px] font-black uppercase text-amber-400 tracking-wider mb-1">Premium</div>
                                    <div className="text-lg font-bold text-amber-400">₹999</div>
                                </div>
                            </div>

                            <Link href="/government-exams/ssc/ssc-cgl" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-lg">
                                🚀 View Details
                            </Link>
                        </div>

                        {/* SSC CHSL CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-slate-700 transition-colors">
                            <h3 className="text-3xl font-black text-white mb-2">SSC CHSL 2026<span className="text-slate-500 text-xl font-bold ml-2">Test Series</span></h3>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total Tests: 50</span>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {["15 Full Length Mocks", "25 Sectional Tests", "10 Previous Year Papers", "All India Ranking", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 mb-8 grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                                    <div className="text-lg font-bold text-white">₹399</div>
                                </div>
                                <div className="border-l border-slate-800">
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Pro</div>
                                    <div className="text-lg font-bold text-white">₹699</div>
                                </div>
                                <div className="border-l border-slate-800">
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Premium</div>
                                    <div className="text-lg font-bold text-white">₹899</div>
                                </div>
                            </div>

                            <Link href="/government-exams/ssc/ssc-chsl" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-lg">
                                View Details
                            </Link>
                        </div>

                        {/* SSC MTS CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-slate-700 transition-colors">
                            <h3 className="text-3xl font-black text-white mb-2">SSC MTS 2026<span className="text-slate-500 text-xl font-bold ml-2">Test Series</span></h3>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total Tests: 38</span>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {["10 Full Length Mocks", "20 Sectional Tests", "8 Previous Year Papers", "All India Ranking", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 mb-8 grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                                    <div className="text-lg font-bold text-white">₹299</div>
                                </div>
                                <div className="border-l border-slate-800">
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Pro</div>
                                    <div className="text-lg font-bold text-white">₹599</div>
                                </div>
                                <div className="border-l border-slate-800">
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Premium</div>
                                    <div className="text-lg font-bold text-white">₹799</div>
                                </div>
                            </div>

                            <Link href="/government-exams/ssc/ssc-mts" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-lg">
                                View Details
                            </Link>
                        </div>

                        {/* SSC CPO CARD */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden group hover:border-slate-700 transition-colors">
                            <h3 className="text-3xl font-black text-white mb-2">SSC CPO 2026<span className="text-slate-500 text-xl font-bold ml-2">Test Series</span></h3>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-bold text-slate-300">Total Tests: 52</span>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {["15 Full Length Mocks", "25 Sectional Tests", "12 Previous Year Papers", "All India Ranking", "Detailed Solutions"].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 mb-8 grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                                    <div className="text-lg font-bold text-white">₹499</div>
                                </div>
                                <div className="border-l border-slate-800">
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Pro</div>
                                    <div className="text-lg font-bold text-white">₹799</div>
                                </div>
                                <div className="border-l border-slate-800">
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Premium</div>
                                    <div className="text-lg font-bold text-white">₹999</div>
                                </div>
                            </div>

                            <Link href="/government-exams/ssc/ssc-cpo" className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-lg">
                                View Details
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 3 - Comparison Table */}
            <section className="py-24 bg-slate-950 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Compare Plan Features</h2>
                            <p className="text-lg text-slate-400">See what is included in Basic, Pro, and Premium tiers across all SSC exams.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-center border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-slate-950 border-b border-slate-800">
                                            <th className="p-6 text-left font-bold text-white text-lg">Feature</th>
                                            <th className="p-6 font-bold text-slate-300 text-lg">Basic</th>
                                            <th className="p-6 font-black text-blue-400 text-lg bg-blue-600/5 relative">
                                                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>
                                                Pro
                                            </th>
                                            <th className="p-6 font-bold text-amber-400 text-lg">Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-300">
                                        <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">Full Mocks</td>
                                            <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                            <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">Sectional Tests</td>
                                            <td className="p-6 text-slate-400 font-semibold">Limited</td>
                                            <td className="p-6 bg-blue-600/5 text-emerald-400 font-bold">Full</td>
                                            <td className="p-6 text-emerald-400 font-bold">Full</td>
                                        </tr>
                                        <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">Previous Year Papers (PYQ)</td>
                                            <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">All India Rank</td>
                                            <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6 bg-blue-600/5"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-slate-800/50 hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">PDF Performance Report</td>
                                            <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6 bg-blue-600/5"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-emerald-400 mx-auto" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 - Free Demo */}
            <section id="demo" className="py-24 bg-slate-900 border-y border-slate-800 relative z-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-[2.5rem] p-12 md:p-16 text-center">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-sm font-bold mb-8">
                            <ShieldCheck className="w-4 h-4" /> Zero Commitment Required
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                            1 Free SSC CGL Mock Test
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                            No credit card required. Experience the exact exam interface, tricky TCS pattern questions, and detailed analytics before you buy.
                        </p>

                        <Link href="/dashboard/test-series/ssc-cgl" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-slate-950 hover:bg-slate-200 font-black rounded-2xl transition-all duration-300 active:scale-95 text-lg border border-slate-300">
                            <Play className="w-5 h-5 fill-slate-950 text-slate-950" />
                            Start Free Test
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 5 - Why Choose Xamsathi */}
            <section className="py-24 bg-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Why Choose Xamsathi</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">We use advanced technology to pinpoint your exact weaknesses.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {/* Features layout */}
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:border-slate-700 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-6">
                                <BarChart3 className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-white mb-2">AI Based Analysis</h4>
                            <p className="text-sm text-slate-400">Deep performance metrics on every question.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:border-slate-700 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Affordable Pricing</h4>
                            <p className="text-sm text-slate-400">High-quality content at minimum cost.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:border-slate-700 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-6">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Real Exam Pattern</h4>
                            <p className="text-sm text-slate-400">Exact replica of TCS interface.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:border-slate-700 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-white mb-2">Instant Results</h4>
                            <p className="text-sm text-slate-400">Know your score right after submission.</p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center group hover:border-slate-700 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-6">
                                <Trophy className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-white mb-2">All India Rank</h4>
                            <p className="text-sm text-slate-400">See where you stand among peers.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

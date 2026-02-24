import Link from "next/link";
import { Star, Users, CheckCircle2, BookOpen, Shield, Sword, Navigation, Trophy, Check, X, Medal, HeartPulse, Crosshair, Map } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function DefenceExamsPage() {
    return (
        <div className="min-h-screen bg-[#0a1128] text-slate-200 font-sans selection:bg-[#2d5a27] selection:text-white">
            <Navbar />

            {/* Section 1 - Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden border-b border-[#1e293b]">
                {/* Camouflage/Army Green ambient glow */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2d5a27]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e293b] border border-[#334155] text-[#4ade80] text-sm font-bold mb-6 shadow-sm">
                                <Shield className="w-4 h-4" /> National Defence Forces
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                                Defence Exam Test Series <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#22c55e]">2026</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                NDA • CDS • AFCAT Complete Preparation. Precision-crafted mock tests for India's most prestigious defence academies.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link href="#plans" className="px-8 py-4 bg-[#166534] hover:bg-[#15522b] text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95 shadow-lg shadow-[#166534]/30 border border-[#22c55e]/30">
                                    🚀 View Plans
                                </Link>
                                <Link href="#demo" className="px-8 py-4 bg-[#0f172a] border border-[#334155] hover:bg-[#1e293b] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg active:scale-95">
                                    📘 Start Free Mock
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Stats */}
                        <div className="bg-[#0f172a]/80 backdrop-blur-md border border-[#1e293b] rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ade80]/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <div className="space-y-8 relative z-10">
                                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-[#0a1128] border border-[#1e293b]">
                                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                                        <Star className="w-8 h-8 fill-amber-400" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <div className="text-3xl font-black text-white">4.7 Rating</div>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">From Defence Aspirants</div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-[#0a1128] border border-[#1e293b]">
                                    <div className="w-14 h-14 rounded-xl bg-[#4ade80]/10 border border-[#4ade80]/20 text-[#4ade80] flex items-center justify-center shrink-0">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <div className="text-3xl font-black text-white">90,000+ Aspirants</div>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Preparing Nationwide</div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-[#0a1128] border border-[#1e293b]">
                                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                        <BookOpen className="w-8 h-8" />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <div className="text-3xl font-black text-white">250+ Tests</div>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Extensive Mock Library</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Hero Conversion Strategy - Emotional Connect */}
            <section className="py-12 bg-[#0f172a] border-b border-[#1e293b]">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#166534]/20 border border-[#22c55e]/30 text-[#4ade80] mb-6">
                        <Medal className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-4">🇮🇳 Start Your Journey to Serve the Nation</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-medium mb-8">
                        The uniform demands sweat, discipline, and the right preparation strategy. Trusted by future officers making their way to the academies.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Trust badges placeholders */}
                        <div className="flex items-center gap-2 font-bold text-xl"><Shield className="w-6 h-6 text-[#22c55e]" /> Authentic Pattern</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><Crosshair className="w-6 h-6 text-[#22c55e]" /> Exam Focused</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><Sword className="w-6 h-6 text-[#22c55e]" /> Tough Competition</div>
                    </div>
                </div>
            </section>

            {/* Section 2 - Available Defence Test Series */}
            <section id="plans" className="py-24 bg-[#0a1128] border-b border-[#1e293b]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Defence Commission Exams</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Select your target academy. Each series perfectly replicates real exam difficulties.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">

                        {/* NDA CARD */}
                        <div className="flex flex-col bg-[#0f172a] border-2 border-[#166534] hover:border-[#22c55e] rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 shadow-xl shadow-[#166534]/10">
                            <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 bg-[#166534] border border-[#22c55e]/50 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">Most Popular</div>
                            <h3 className="text-3xl font-black text-white mb-2 mt-2">NDA 2026</h3>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="px-3 py-1 bg-[#0a1128] border border-[#1e293b] rounded-lg text-xs font-bold text-[#4ade80]">Total Tests: 80+</span>
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                {[
                                    "25 Full Length Mocks",
                                    "40 Sectional Tests",
                                    "15 PYQ Papers",
                                    "Maths + GAT Separate",
                                    "Rank + Analytics"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-[#22c55e] shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-2 bg-[#0a1128] rounded-2xl border border-[#1e293b] p-3 mb-6 text-center">
                                <div className="p-2">
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                                    <div className="text-base font-bold text-slate-400">₹499</div>
                                </div>
                                <div className="p-2 bg-[#166534]/20 border border-[#22c55e]/30 rounded-xl relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#22c55e] text-[#0a1128] text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">Best</div>
                                    <div className="text-[10px] font-black uppercase text-[#4ade80] tracking-wider mb-1">Pro</div>
                                    <div className="text-xl font-black text-white">₹799</div>
                                </div>
                                <div className="p-2">
                                    <div className="text-[10px] font-black uppercase text-amber-400 tracking-wider mb-1">Prem</div>
                                    <div className="text-base font-bold text-amber-400">₹999</div>
                                </div>
                            </div>

                            <Link href="/exams/defence/nda-2026" className="w-full py-4 bg-[#166534] hover:bg-[#15522b] text-white font-black rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-lg shadow-[0_0_20px_rgba(22,101,52,0.4)]">
                                View Details
                            </Link>
                        </div>

                        {/* CDS CARD */}
                        <div className="flex flex-col bg-[#0f172a] border border-[#1e293b] hover:border-[#334155] rounded-3xl p-8 relative overflow-hidden group transition-all duration-300">
                            <h3 className="text-2xl font-black text-white mb-2">CDS 2026</h3>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="px-3 py-1 bg-[#0a1128] border border-[#1e293b] rounded-lg text-xs font-bold text-slate-300">Total Tests: 62+</span>
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                {[
                                    "20 Full Length",
                                    "30 Sectional",
                                    "12 PYQ Papers",
                                    "OTA / IMA / INA Pattern",
                                    "English Special Practice"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-2 bg-[#0a1128] rounded-2xl border border-[#1e293b] p-3 mb-6 text-center">
                                <div className="p-2">
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                                    <div className="text-base font-bold text-slate-400">₹599</div>
                                </div>
                                <div className="p-2 border border-[#334155] rounded-xl">
                                    <div className="text-[10px] font-black uppercase text-slate-300 tracking-wider mb-1">Pro</div>
                                    <div className="text-xl font-bold text-white">₹899</div>
                                </div>
                                <div className="p-2">
                                    <div className="text-[10px] font-black uppercase text-amber-400 tracking-wider mb-1">Prem</div>
                                    <div className="text-base font-bold text-amber-400">₹1099</div>
                                </div>
                            </div>

                            <Link href="/exams/defence/cds-2026" className="w-full py-4 bg-[#1e293b] hover:bg-[#334155] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-lg">
                                View Details
                            </Link>
                        </div>

                        {/* AFCAT CARD */}
                        <div className="flex flex-col bg-[#0f172a] border border-[#1e293b] hover:border-[#334155] rounded-3xl p-8 relative overflow-hidden group transition-all duration-300">
                            <h3 className="text-2xl font-black text-white mb-2">AFCAT 2026</h3>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="px-3 py-1 bg-[#0a1128] border border-[#1e293b] rounded-lg text-xs font-bold text-slate-300">Total Tests: 55+</span>
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                {[
                                    "20 Full Length",
                                    "25 Sectional",
                                    "10 PYQ Papers",
                                    "Technical + Non-Tech",
                                    "Detailed Solutions"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-2 bg-[#0a1128] rounded-2xl border border-[#1e293b] p-3 mb-6 text-center">
                                <div className="p-2">
                                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Basic</div>
                                    <div className="text-base font-bold text-slate-400">₹499</div>
                                </div>
                                <div className="p-2 border border-[#334155] rounded-xl">
                                    <div className="text-[10px] font-black uppercase text-slate-300 tracking-wider mb-1">Pro</div>
                                    <div className="text-xl font-bold text-white">₹799</div>
                                </div>
                                <div className="p-2">
                                    <div className="text-[10px] font-black uppercase text-amber-400 tracking-wider mb-1">Prem</div>
                                    <div className="text-base font-bold text-amber-400">₹999</div>
                                </div>
                            </div>

                            <Link href="/exams/defence/afcat-2026" className="w-full py-4 bg-[#1e293b] hover:bg-[#334155] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 text-lg">
                                View Details
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 3 - Combo Pack */}
            <section className="py-24 bg-[#0a1128] border-b border-[#1e293b] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22c55e]/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0f172a] to-[#0a1128] border border-[#22c55e]/30 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10"><Shield className="w-32 h-32 text-[#22c55e]" /></div>

                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10 text-center md:text-left">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#166534]/20 border border-[#22c55e]/30 text-[#4ade80] text-xs font-black rounded-full uppercase tracking-widest mb-6">
                                    ⭐ Highest Value
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Defence Combo Pack</h2>
                                <p className="text-slate-400 font-medium mb-6">Gain absolute coverage for every major Defence examination in India.</p>
                                <ul className="space-y-4 mb-6 text-left inline-block md:block mx-auto">
                                    <li className="flex items-center gap-3 text-white font-bold"><CheckCircle2 className="w-5 h-5 text-[#22c55e]" /> NDA + CDS + AFCAT Access</li>
                                    <li className="flex items-center gap-3 text-white font-bold"><CheckCircle2 className="w-5 h-5 text-[#22c55e]" /> Total 190+ Tests Included</li>
                                    <li className="flex items-center gap-3 text-[#4ade80] font-bold"><Trophy className="w-5 h-5 text-[#22c55e]" /> SSB Interview Tips included</li>
                                </ul>
                            </div>

                            <div className="bg-[#0a1128] border border-[#1e293b] p-8 rounded-3xl text-center flex flex-col justify-center shadow-inner">
                                <div className="text-sm font-black text-slate-500 uppercase tracking-widest mb-2 line-through">Total value: ₹3500+</div>
                                <div className="text-5xl font-black text-white mb-6 text-shadow-sm">₹1499</div>
                                <Link href="/checkout?plan=combo&exam=defence-combo" className="w-full py-4 bg-[#166534] hover:bg-[#15522b] text-white font-black rounded-xl transition-all shadow-lg shadow-[#166534]/30 border border-[#22c55e]/30 active:scale-95 text-lg">
                                    Enroll Combo Plan
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 - Comparison Table */}
            <section className="py-24 bg-[#0a1128] border-b border-[#1e293b]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Plan Comparison Table</h2>
                            <p className="text-lg text-slate-400">Unlock your true potential with the perfect plan for you.</p>
                        </div>

                        <div className="bg-[#0f172a] border border-[#1e293b] rounded-3xl overflow-hidden shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-center border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-[#0a1128] border-b border-[#1e293b]">
                                            <th className="p-6 text-left font-bold text-white text-lg">Feature</th>
                                            <th className="p-6 font-bold text-slate-400 text-lg">Basic</th>
                                            <th className="p-6 font-black text-[#4ade80] text-lg bg-[#166534]/10 relative">
                                                <div className="absolute top-0 left-0 right-0 h-1 bg-[#22c55e]"></div>
                                                Pro
                                            </th>
                                            <th className="p-6 font-bold text-amber-400 text-lg">Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-300">
                                        <tr className="border-b border-[#1e293b] hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">Full Mocks</td>
                                            <td className="p-6 text-slate-500 font-semibold">Limited</td>
                                            <td className="p-6 bg-[#166534]/5 text-white font-semibold">Full</td>
                                            <td className="p-6 text-white font-semibold">Full</td>
                                        </tr>
                                        <tr className="border-b border-[#1e293b] hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">Sectional Tests</td>
                                            <td className="p-6 text-slate-500 font-semibold">Limited</td>
                                            <td className="p-6 bg-[#166534]/5 text-white font-semibold">Full</td>
                                            <td className="p-6 text-white font-semibold">Full</td>
                                        </tr>
                                        <tr className="border-b border-[#1e293b] hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">PYQ Papers</td>
                                            <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6 bg-[#166534]/5"><Check className="w-5 h-5 text-[#22c55e] mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-[#22c55e] mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-[#1e293b] hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">Rank + Analytics</td>
                                            <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6 bg-[#166534]/5"><Check className="w-5 h-5 text-[#22c55e] mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-[#22c55e] mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-[#1e293b] hover:bg-white/5 transition-colors">
                                            <td className="p-6 text-left font-medium">2 Year Access Ext.</td>
                                            <td className="p-6"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6 bg-[#166534]/5"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                                            <td className="p-6"><Check className="w-5 h-5 text-[#22c55e] mx-auto" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 - Physical & SSB Guidance Section */}
            <section className="py-24 bg-[#0f172a] border-b border-[#1e293b]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">SSB & Physical Preparation</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Clearing written is just phase one. We guide you through the complete selection process. <span className="text-[#4ade80] font-bold">Included exclusively in Premium Plans.</span></p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#0a1128] border border-[#1e293b] p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                                <Navigation className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">SSB Interview Tips</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Detailed PDF guides mapping day-by-day SSB procedures, OIR test patterns, and psychological test strategies.</p>
                        </div>

                        <div className="bg-[#0a1128] border border-[#1e293b] p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-[#4ade80]/10 border border-[#22c55e]/20 text-[#4ade80] rounded-2xl flex items-center justify-center mb-6">
                                <Map className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Physical Fitness Guide</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Expert routines designed to help you meet running metrics, pushups, sit-ups, and overall endurance requirements seamlessly.</p>
                        </div>

                        <div className="bg-[#0a1128] border border-[#1e293b] p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-6">
                                <HeartPulse className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Medical Guidelines</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">Comprehensive checklist covering vision standards, core medical restrictions, and tips to ensure you stay medically fit for service.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6 - Free Demo */}
            <section id="demo" className="py-24 bg-[#0a1128]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-[#0f172a] border border-[#1e293b] rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">

                        {/* Background graphics */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px]"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#22c55e]/5 rounded-full blur-[80px]"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Experience The Real Test</h2>
                            <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">Take a free mock test to understand our platform, difficulty levels, and the detailed analytics we provide post-completion.</p>

                            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                                <Link href="/tests/free?exam=nda-demo" className="py-4 bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                                    <BookOpen className="w-5 h-5 text-[#4ade80]" /> 1 NDA Demo Mock
                                </Link>
                                <Link href="/tests/free?exam=cds-demo" className="py-4 bg-[#1e293b] hover:bg-[#334155] border border-[#334155] text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                                    <BookOpen className="w-5 h-5 text-blue-400" /> 1 CDS Eng Demo
                                </Link>
                            </div>
                            <div className="mt-8 text-sm text-slate-500 font-medium">No credit card required. Instant access.</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

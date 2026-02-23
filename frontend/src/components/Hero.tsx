"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, Trophy, Users } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 bg-slate-950 border-b border-slate-800 overflow-hidden">
            {/* Subtle atmospheric gradient without glowing noise */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top, #2563eb 0%, transparent 60%)" }} />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

                    {/* Left Content - Centered on Mobile, Left on Desktop */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">



                        <h1 className="text-[2.75rem] md:text-6xl lg:text-[4.5rem] font-black text-white tracking-tighter leading-[1.05] mb-8">
                            Prepare for <span className="inline-block px-3 py-1 transform -skew-x-6 bg-blue-600 text-white rounded-lg shadow-lg rotate-1 my-2">50+ Exams</span> <br className="hidden md:block" />
                            On <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">One Platform.</span>
                        </h1>

                        <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            <strong>SSC • Banking • Railway • UPSC • JEE • NEET • Defence</strong><br className="mb-2" />
                            Practice with real exam simulation, state-wise toppers compared, and detailed conceptual analytics.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-16">
                            <Link href="/dashboard/test-series/free-series" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group active:scale-95 text-base">
                                Start Free Mock Test
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/tests" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-sm border border-slate-700 transition-all flex items-center justify-center gap-2 active:scale-95 text-base">
                                <Play className="w-5 h-5 fill-current opacity-80" />
                                Browse Test Series
                            </Link>
                        </div>

                        {/* Social Proof & Trust Factors */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-10 border-t border-slate-800/60">
                            <div className="flex items-center -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden relative shadow-sm">
                                        <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 10}`} alt="User" fill className="object-cover" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden relative flex items-center justify-center text-xs font-bold text-slate-300 z-10">
                                    +5k
                                </div>
                            </div>
                            <div className="flex flex-col items-center sm:items-start text-left">
                                <div className="flex gap-1.5 text-white font-black items-center text-lg">
                                    500,000+ Enrolled
                                </div>
                                <p className="text-sm text-slate-400 font-medium tracking-wide">Join top scorers nationwide</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full relative">
                        <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-[4/3] xl:aspect-square group cursor-pointer lg:scale-105">
                            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10" />
                            <Image
                                src="/hero-students.png"
                                alt="Students learning"
                                fill
                                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />

                            {/* Clean Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6, type: "spring" }}
                                className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-auto bg-slate-950/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700 flex items-center gap-4 z-20"
                            >
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center shrink-0 border border-emerald-500/20">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div className="pr-4">
                                    <p className="text-white font-bold text-sm">Target Achieved!</p>
                                    <p className="text-slate-400 text-xs mt-0.5">Cleared SSC CGL Tier 1</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 border-b border-slate-800">
            <div className="absolute inset-0 z-0 bg-slate-950" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content - Centered on Mobile, Left on Desktop */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold">
                                Serving Aspirants Across India
                            </div>
                            <div className="inline-flex items-center gap-2 bg-slate-800 text-slate-200 px-4 py-1.5 rounded-full text-sm font-bold">
                                National Level Test Series
                            </div>
                        </div>


                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
                            Prepare for 50+ Government &amp; Private Exams <br className="hidden md:block" />
                            on <span className="text-blue-600">One Platform</span>
                        </h1>

                        <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                            SSC • Banking • Railway • UPSC • JEE • NEET • CUET • Defence &amp; More.
                            <br className="hidden md:block" /> Practice with real exam simulation, state-wise toppers, and detailed analytics.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
                            <Link href="/government-exams" className="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-800 text-slate-300 text-sm font-bold hover:bg-slate-200 transition-colors">
                                Explore Government Exams
                            </Link>
                            <Link href="/engineering-exams" className="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-800 text-slate-300 text-sm font-bold hover:bg-slate-200 transition-colors">
                                Explore Engineering Exams
                            </Link>
                            <Link href="/medical-exams" className="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-800 text-slate-300 text-sm font-bold hover:bg-slate-200 transition-colors">
                                Explore Medical Exams
                            </Link>
                            <Link href="/banking-exams" className="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-800 text-slate-300 text-sm font-bold hover:bg-slate-200 transition-colors">
                                Explore Banking Exams
                            </Link>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                            <Link href="/dashboard/test-series/free-series" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2">
                                Start Free Mock Test Now
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/tests" className="w-full sm:w-auto px-8 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-bold rounded-lg shadow-sm border border-slate-800 transition-all flex items-center justify-center gap-2">
                                <Play className="w-4 h-4 fill-current" />
                                Browse Test Series
                            </Link>
                        </div>

                        {/* Social Proof & Trust Factors */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8 border-t border-slate-800">
                            <div className="flex items-center -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-800 overflow-hidden relative">
                                        <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 10}`} alt="User" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-center sm:items-start">
                                <div className="flex gap-1 text-white font-bold items-center">
                                    <span className="text-xl">500,000+</span> Enrolled
                                </div>
                                <p className="text-sm text-slate-400 font-medium">Join top scorers from across India</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full relative">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 aspect-[4/3]">
                            <Image
                                src="/hero-students.png"
                                alt="Students learning"
                                fill
                                className="object-cover"
                            />

                            {/* Clean Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-6 left-6 right-6 bg-slate-950 rounded-xl p-4 shadow-lg border border-slate-100 flex items-center gap-4 max-w-md mx-auto"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
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

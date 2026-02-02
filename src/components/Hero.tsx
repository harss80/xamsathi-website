"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 border-b border-slate-900">
            {/* Simple Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-950" />
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">


                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6">
                            Master Your Exams with <br />
                            <span className="text-blue-500">Structured Learning</span>
                        </h1>

                        <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Get access to India's best educators, comprehensive study material, and real-time performance analytics. Start your journey today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                            <Link href="/register" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                                Start Free Trial
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-lg transition-colors border border-slate-200 flex items-center justify-center gap-2">
                                <Play className="w-4 h-4 fill-current" />
                                View Demo
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-8 border-t border-slate-900">
                            <div className="flex items-center -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden relative">
                                        <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" fill className="object-cover" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs font-bold text-white relative">
                                    +2k
                                </div>
                            </div>
                            <div className="flex flex-col items-center sm:items-start">
                                <div className="flex gap-0.5 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-sm text-slate-400 mt-1">4.9/5 Rating from students</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full relative">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-[4/3]">
                            <Image
                                src="/hero-students.png"
                                alt="Students learning"
                                fill
                                className="object-cover"
                            />
                            {/* Simple Overlay Gradient for text readability if needed, kept minimal */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

                            {/* Clean Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg flex items-center gap-4 max-w-md mx-auto"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-bold text-sm">Course Completed!</p>
                                    <p className="text-slate-600 text-xs mt-0.5">You have mastered Physics: Mechanics</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Subtle decoration behind image */}
                        <div className="absolute -inset-2 bg-slate-800/50 rounded-[1.2rem] -z-10 translate-x-2 translate-y-2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

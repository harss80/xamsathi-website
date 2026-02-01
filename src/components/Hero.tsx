"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle, MonitorPlay, Users } from "lucide-react";
import { MouseEvent } from "react";

const Hero = () => {
    // Mouse Tilt Logic for Hero Image
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseY, [0, 1], [5, -5]);
    const rotateY = useTransform(mouseX, [0, 1], [-5, 5]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width;
        const yPct = mouseYVal / height;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-24 overflow-hidden bg-slate-950 isolate">
            {/* Advanced Animated Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Ambient Spotlight (Subtle) */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl"
                    >


                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
                        >
                            India's Most Trusted <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                Learning Platform
                            </span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                            Prepare for competitive exams with top educators, comprehensive study material, and AI-driven performance analysis.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link
                                href="/register"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/20 hover:-translate-y-0.5 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Shine Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
                            </Link>
                            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 transition-all duration-200 bg-slate-900/50 border border-slate-700 rounded-xl hover:bg-slate-900 hover:border-slate-500 hover:text-white backdrop-blur-sm">
                                <Play className="w-5 h-5 mr-3 text-blue-500 fill-current" />
                                View Demo Class
                            </button>
                        </motion.div>

                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/60">
                            <div>
                                <h4 className="text-3xl font-bold text-white">5M+</h4>
                                <p className="text-sm text-slate-500 font-medium mt-1">Happy Students</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">10k+</h4>
                                <p className="text-sm text-slate-500 font-medium mt-1">Video Lectures</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white">200+</h4>
                                <p className="text-sm text-slate-500 font-medium mt-1">Expert Faculty</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Visuals - Advanced 3D Tilt Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="relative hidden lg:block perspective-1000"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                            className="relative z-10 w-full rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                <img
                                    src="/hero-students.png"
                                    alt="Students studying"
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Floating Badge 1 (Selections) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-8 left-8 z-20"
                                style={{ transform: "translateZ(50px)" }} // Pop out in 3D
                            >
                                <div className="bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-700/50 flex items-center gap-4 max-w-[240px]">
                                    <div className="bg-green-500/10 p-2.5 rounded-xl">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-base font-bold text-white">10k+ Selections</p>
                                        <p className="text-xs text-slate-400 font-medium">In Top Govt. Colleges</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2 (Video Lectures) */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }} // Opposite phase
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-8 right-8 z-20"
                                style={{ transform: "translateZ(30px)" }}
                            >
                                <div className="bg-slate-900/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-slate-700/50 flex items-center gap-3">
                                    <div className="bg-blue-500/10 p-2 rounded-lg">
                                        <MonitorPlay className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white">Daily Live Classes</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Decorative background blur behind the card */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[2.5rem] blur-2xl -z-10 opacity-70" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

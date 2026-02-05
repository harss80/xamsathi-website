"use client";

import { motion } from "framer-motion";
import { Play, Calendar, User, MessageCircle, BarChart, Check, Video, Mic, Shield, Clock } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function LiveClassesPage() {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500/30">

            {/* 1. HERO SECTION - STREAMING LIVE */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Background Effect */}
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold mb-6 uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                Live Now
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
                                Classroom at <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
                                    Your Fingertips
                                </span>
                            </h1>
                            <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                                Experience the energy of a real classroom from the comfort of your home. Interact with top educators in real-time.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-900/20 hover:-translate-y-1 flex items-center justify-center gap-2">
                                    <Play className="w-5 h-5 fill-current" /> Join Demo Class
                                </button>
                                <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                                    <Calendar className="w-5 h-5" /> View Schedule
                                </button>
                            </div>
                        </motion.div>

                        {/* Video Player Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 relative aspect-video group cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?q=80&w=2600&auto=format&fit=crop" alt="Live Class" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />

                                {/* UI Overlays */}
                                <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-md text-xs font-bold text-white flex items-center gap-2">
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" /> LIVE
                                </div>
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-bold text-white">
                                    {currentTime}
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white border-2 border-slate-900">JS</div>
                                        <div className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl text-white text-sm">
                                            <span className="text-purple-400 font-bold">John Smith:</span> Sir, can you explain the last concept again?
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/50">
                                        <Play className="w-6 h-6 text-white fill-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Decor */}
                            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full border-2 border-slate-800 rounded-2xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. LIVE SCHEDULE */}
            <section className="py-24 bg-slate-900/50 border-y border-slate-800/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Upcoming Classes</h2>
                            <p className="text-slate-400">Join a session starting soon.</p>
                        </div>
                        <button className="text-blue-400 font-bold hover:text-blue-300 transition-colors">View Weekly Calendar &rarr;</button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { subject: "Physics", topic: "Rotational Motion", time: "Starts in 10 mins", faculty: "Dr. H. Verma", color: "blue" },
                            { subject: "Chemistry", topic: "Organic Reactions", time: "Today, 4:00 PM", faculty: "Prof. Sarah", color: "green" },
                            { subject: "Mathematics", topic: "Calculus III", time: "Today, 6:00 PM", faculty: "Mr. Raman", color: "purple" }
                        ].map((cls, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 left-0 w-1 h-full bg-${cls.color}-500`} />
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`text-xs font-bold px-2 py-1 rounded bg-${cls.color}-500/10 text-${cls.color}-400 uppercase`}>{cls.subject}</span>
                                    <span className="text-slate-400 text-sm flex items-center gap-1"><Clock className="w-3 h-3" /> {cls.time}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{cls.topic}</h3>
                                <div className="flex items-center gap-3 mt-6">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold">{cls.faculty.charAt(0)}</div>
                                    <span className="text-sm text-slate-300">{cls.faculty}</span>
                                </div>
                                <button className="w-full mt-6 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-slate-600 transition-all font-medium text-sm">
                                    Set Reminder
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. FEATURES */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Not just a video call.</h2>
                        <p className="text-slate-400">Our platform is designed specifically for learning.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: MessageCircle, title: "Live Chat", desc: "Ask doubts instantly without interrupting the flow." },
                            { icon: BarChart, title: "Live Polls", desc: "Participate in quizzes and see where you stand." },
                            { icon: Mic, title: "Raise Hand", desc: "Talk directly to the teacher via audio." },
                            { icon: Video, title: "HD Playback", desc: "Crystal clear video optimized for low bandwidth." }
                        ].map((feat, idx) => (
                            <div key={idx} className="bg-slate-900/30 p-8 rounded-3xl border border-slate-800/50 text-center hover:bg-slate-900 transition-colors">
                                <div className="w-14 h-14 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-6 text-purple-400">
                                    <feat.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                                <p className="text-sm text-slate-400">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. EDUCATORS CAROUSEL */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-bold mb-6">Learn from <br /> India's Best.</h2>
                            <p className="text-slate-400 mb-8">Our educators are not just teachers; they are mentors who have produced top ranks consistently.</p>
                            <ul className="space-y-4">
                                {["15+ Years Average Experience", "IIT/NIT Alumni", "Mentored AIR 1 Rankers"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <Check className="w-5 h-5 text-green-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
                            {[1, 2].map((_, i) => (
                                <div key={i} className="relative group overflow-hidden rounded-2xl aspect-[3/4]">
                                    <img src={`https://images.unsplash.com/photo-${i === 0 ? '1573496359142-b8d87734a5a2' : '1544717297-fa95b6ee9643'}?q=80&w=1000&auto=format&fit=crop`} alt="Educator" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-xl font-bold">{i === 0 ? "Dr. Anjali Gupta" : "Prof. Rajesh Kumar"}</h3>
                                        <p className="text-sm text-slate-300">{i === 0 ? "Physics Expert" : "Mathematics Wizard"}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. LIVE VS RECORDED */}
            <section className="py-24 bg-slate-900/20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Why choose Live?</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800">
                            <h3 className="text-xl font-bold mb-6 text-slate-400">Regular Recorded Course</h3>
                            <ul className="space-y-4 text-slate-500">
                                <li className="flex gap-3"><span className="text-red-500">✕</span> Passive learning</li>
                                <li className="flex gap-3"><span className="text-red-500">✕</span> Doubts pile up</li>
                                <li className="flex gap-3"><span className="text-red-500">✕</span> No schedule discipline</li>
                                <li className="flex gap-3"><span className="text-red-500">✕</span> Isolated feeling</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-b from-blue-900/20 to-slate-900 p-8 rounded-3xl border border-blue-500/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Shield className="w-24 h-24 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-6 text-white">XamSathi Live Course</h3>
                            <ul className="space-y-4 text-slate-200">
                                <li className="flex gap-3"><Check className="text-blue-500" /> Active participation</li>
                                <li className="flex gap-3"><Check className="text-blue-500" /> Instant doubt resolution</li>
                                <li className="flex gap-3"><Check className="text-blue-500" /> Disciplined routine</li>
                                <li className="flex gap-3"><Check className="text-blue-500" /> Competitive peer group</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TECHNOLOGY / STREAMING QUALITY */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">Built for low bandwidth.</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Adaptive Bitrate", val: "Yes" },
                            { label: "Data Usage", val: "Low" },
                            { label: "Offline Download", val: "Available" },
                            { label: "Device Support", val: "All w/ Browser" }
                        ].map((stat, s) => (
                            <div key={s} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                                <div className="text-3xl font-bold text-white mb-2">{stat.val}</div>
                                <div className="text-sm text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to start learning live?</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Join thousands of students achieving their dreams with our live interactive classes.</p>
                    <button className="px-12 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-2xl">
                        Book a Free Demo Class
                    </button>
                </div>
            </section>

        </div>
    );
}

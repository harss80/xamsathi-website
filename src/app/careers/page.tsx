"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Heart, Rocket, Globe, Zap, Coffee, Code, Users } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function CareerPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-bold mb-6 uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            We are hiring
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white">
                            Shape the Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Education Technology
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join a team of visionaries, creators, and educators passionate about democratizing education. do well, by doing good.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="#positions"
                                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-1 flex items-center gap-2"
                            >
                                View Open Positions <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/about"
                                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-700 transition-all hover:-translate-y-1"
                            >
                                Learn About Us
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. VALUES SECTION */}
            <section className="py-24 bg-slate-900/50 relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Our culture is built on a foundation of trust, innovation, and an unshakeable commitment to our students.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Rocket, title: "Innovation First", desc: "We challenge the status quo to build tools that truly transform learning." },
                            { icon: Heart, title: "Student Obsessed", desc: "Every decision we make starts with 'How does this help the student?'" },
                            { icon: Zap, title: "Move Fast", desc: "We believe in rapid iteration and learning from feedback to improve constantly." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 group-hover:scale-110 transition-all duration-300">
                                    <item.icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PERKS SECTION */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Perks that nourish <br /> your mind & body.</h2>
                            <p className="text-slate-400 text-lg mb-8">We take care of our people so they can focus on doing their best work.</p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Globe, label: "Remote First" },
                                    { icon: Heart, label: "Comprehensive Health" },
                                    { icon: Coffee, label: "Unlimited Coffee/Snacks" },
                                    { icon: Briefcase, label: "Competitive Salary" },
                                    { icon: Rocket, label: "Stock Options" },
                                    { icon: Zap, label: "Learning Budget" },
                                ].map((perk, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                            <perk.icon className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span className="font-medium text-slate-200">{perk.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-800 relative z-10 group">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" alt="Team working" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <p className="font-bold text-xl mb-1">Annual Retreats</p>
                                    <p className="text-sm text-slate-300">We meet twice a year in exotic locations to bond and strategize.</p>
                                </div>
                            </div>
                            {/* Decor Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. OPEN POSITIONS - ACCORDION STYLE */}
            <section id="positions" className="py-24 bg-slate-900/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
                        <p className="text-slate-400">Join our growing team and help us build the future.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { role: "Senior Frontend Engineer", dept: "Engineering", loc: "Remote", type: "Full-time" },
                            { role: "Product Designer UI/UX", dept: "Design", loc: "New York", type: "Full-time" },
                            { role: "Chemistry Faculty (JEE)", dept: "Education", loc: "Mumbai", type: "Contract" },
                            { role: "Marketing Manager", dept: "Marketing", loc: "Remote", type: "Full-time" },
                            { role: "Customer Success Lead", dept: "Operations", loc: "Bangalore", type: "Full-time" },
                        ].map((job, j) => (
                            <motion.div
                                key={j}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: j * 0.05 }}
                                className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-950 border border-slate-800 rounded-2xl hover:border-blue-500/50 hover:bg-slate-900/80 transition-all cursor-pointer"
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{job.role}</h3>
                                    <div className="flex items-center gap-4 text-sm text-slate-400 mt-2">
                                        <span className="flex items-center gap-1"><Code className="w-3 h-3" /> {job.dept}</span>
                                        <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> {job.loc}</span>
                                        <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.type}</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-800 text-sm font-medium text-white group-hover:bg-blue-600 transition-colors">
                                        Apply Now
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CULTURE / GALLERY SECTION */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Life at EduMan</h2>
                        <p className="text-slate-400 max-w-2xl">We work hard, play hard, and celebrate every win together. Here's a glimpse into our world.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group"
                        >
                            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Culture 1" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Culture 2" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Culture 3" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group">
                            <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Culture 4" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. GROWTH PATH */}
            <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Growth Matters</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">We invest in your professional development.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Mentorship", desc: "Get paired with industry veterans to guide your career path." },
                            { title: "Conferences", desc: "Full sponsorship for major tech and education conferences worldwide." },
                            { title: "Open Source", desc: "We encourage and sponsor contributions to open source projects." }
                        ].map((item, k) => (
                            <div key={k} className="bg-slate-900 p-8 rounded-2xl border-l-4 border-blue-500 shadow-xl">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CTA / APPLY */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 z-0" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-12 rounded-3xl border border-blue-500/20 backdrop-blur-sm"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Don't see a role for you?</h2>
                        <p className="text-slate-300 text-lg mb-8">
                            We are always looking for exceptional talent. If you think you'd be a great fit, drop us a line.
                        </p>
                        <button className="px-10 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-lg">
                            Submit General Application
                        </button>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

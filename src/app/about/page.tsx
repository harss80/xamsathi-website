"use client";

import { motion } from "framer-motion";
import Stats from "@/components/Stats";
import Faculty from "@/components/Faculty";
import { Target, Users, Zap, Award, BookOpen, ArrowRight, Heart } from "lucide-react";

// Section 1: About Hero
const AboutHero = () => (
    <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-semibold mb-6 uppercase tracking-widest">
                    About XamSathi
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Next Generation</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    At XamSathi, we believe that education is the most powerful weapon which you can use to change the world.
                    We are building the future of learning, one student at a time.
                </p>
            </motion.div>
        </div>
    </section>
);

// Section 2: Our Story (Timeline)
const OurStory = () => (
    <section className="py-24 bg-slate-950 border-t border-slate-900 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-6">From a Classroom to a <br /><span className="text-blue-500">Digital Revolution</span></h2>
                    <div className="space-y-8 border-l-2 border-slate-800 pl-8 ml-2 mt-8">
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-blue-600 shadow-[0_0_0_4px_rgba(30,58,138,0.2)]"></span>
                            <h3 className="text-xl font-bold text-white">2015</h3>
                            <p className="text-slate-400 mt-2">Founded by IIT alumni as a small offline coaching center in Kota with just 40 students.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-slate-700"></span>
                            <h3 className="text-xl font-bold text-white">2018</h3>
                            <p className="text-slate-400 mt-2">Expanded to 5 cities and launched our first hybrid learning app.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 bg-slate-700"></span>
                            <h3 className="text-xl font-bold text-white">2024</h3>
                            <p className="text-slate-400 mt-2">Crossed 5 Million+ active learners and 10,000+ top-tier selections.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="aspect-square bg-slate-900 rounded-2xl border border-slate-800 p-2 rotated-3d transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="w-full h-full bg-slate-800 rounded-xl overflow-hidden relative">
                            {/* Placeholder for real story image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-medium bg-slate-900/50">
                                [Our Journey Image]
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

// Section 3: Core Values
const CoreValues = () => (
    <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">Our Core <span className="text-blue-500">Values</span></h2>
                <p className="text-slate-400 mt-4">The principles that drive every decision we make.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: Heart, title: "Student First", desc: "Every feature, every class, every decision is made with the student's success in mind." },
                    { icon: Zap, title: "Innovation", desc: "We constantly push boundaries to make learning more engaging and effective." },
                    { icon: Award, title: "Excellence", desc: "We strive for perfection in our content quality and teaching methodologies." }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-colors text-slate-400">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

// Section 4: Start Reusing Component (Stats)
// Stats component is already dark-mode ready

// Section 5: Team/Leadership (Reusing Faculty component as Leadership placeholder for now, or building custom)
// We will reuse Faculty for consistency but typically "Leadership" might be different. 
// For this request, we'll keep the Faculty component as it represents the "Team".

// Section 6: Join CTA
const JoinCTA = () => (
    <section className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to shape the future?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                Join our mission to democratize education. Whether you are an educator, developer, or creative,
                there is a place for you at EduMan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-600/25 flex items-center justify-center gap-2">
                    View Careers <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl border border-slate-800 hover:bg-slate-800 transition-colors">
                    Become an Educator
                </button>
            </div>
        </div>
    </section>
);

export default function AboutPage() {
    return (
        <main className="bg-slate-950 min-h-screen">
            <AboutHero />
            <Stats />
            <OurStory />
            <CoreValues />
            {/* Reusing Faculty as "Our Experts" section */}
            <div className="bg-slate-950">
                <Faculty />
            </div>
            <JoinCTA />
        </main>
    );
}

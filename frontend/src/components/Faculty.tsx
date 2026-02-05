"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// ... imports ...

const faculty = [
    {
        name: "Dr. R.K. Verma",
        subject: "Physics",
        exp: "20+ Years Exp",
        education: "PhD, IIT Delhi",
        image: "/fac-1.png"
    },
    {
        name: "Mrs. Anjali Gupta",
        subject: "Mathematics",
        exp: "15+ Years Exp",
        education: "M.Sc, Gold Medalist",
        image: "/fac-2.png"
    },
    {
        name: "Mr. Suresh Kumar",
        subject: "Chemistry",
        exp: "18+ Years Exp",
        education: "B.Tech, IIT Bombay",
        image: "/fac-1.png"
    },
    {
        name: "Dr. Neha Singh",
        subject: "Biology",
        exp: "12+ Years Exp",
        education: "MBBS, AIIMS",
        image: "/fac-2.png"
    }
];

const Faculty = () => {
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white"
                    >
                        Learn from the Masters
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 mt-4 text-lg"
                    >
                        Top educators from IITs, NITs, and AIIMS with decades of teaching experience.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {faculty.map((tutor, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-700 transition-all text-center group"
                        >
                            <div className="h-64 w-full relative overflow-hidden bg-slate-800">
                                <img
                                    src={tutor.image}
                                    alt={tutor.name}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 pt-16 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="text-white font-semibold flex items-center justify-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> 4.9/5 Rated
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-1">{tutor.name}</h3>
                                <p className="text-blue-400 font-medium mb-2">{tutor.subject}</p>
                                <div className="text-sm text-slate-400 mb-1">{tutor.education}</div>
                                <div className="text-sm text-slate-500">{tutor.exp}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faculty;

"use client";

import { motion } from "framer-motion";
import {
    LineChart,
    Target,
    Smartphone,
    Award,
    Users,
    Zap,
} from "lucide-react";

const features = [
    {
        icon: LineChart,
        title: "Granular Analytics",
        description: "Track performance at micro-topic level. Identify strong and weak areas with precision."
    },
    {
        icon: Target,
        title: "Adaptive Learning",
        description: "Our algorithm adjusts question difficulty based on your performance in real-time."
    },
    {
        icon: Smartphone,
        title: "Cross-Platform",
        description: "Seamless synchronization between app and web. Learn on the go, practice at home."
    },
    {
        icon: Award,
        title: "National Benchmarking",
        description: "Know exactly where you stand among lakhs of serious aspirants across India."
    },
    {
        icon: Users,
        title: "Live Doubt Resolution",
        description: "Get stuck? Connect with subject matter experts instantly during practice sessions."
    },
    {
        icon: Zap,
        title: "Exam Simulation",
        description: "Interface identical to NTA/TCS ion centers to eliminate exam-day anxiety."
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-blue-500 font-bold tracking-wider text-sm uppercase">Why XamSathi?</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
                        Engineered for <span className="text-blue-500">Rankers</span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        We don&apos;t just provide questions; we provide a scientific ecosystem to maximize your scoring potential.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shadow-sm">
                                <feature.icon className="w-7 h-7 text-slate-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

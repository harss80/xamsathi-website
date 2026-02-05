"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, FileCheck, Users, Star } from "lucide-react";

const tests = [
    {
        id: 1,
        title: "JEE Advanced 2026",
        tag: "Bestseller",
        description: "Aligns with new pattern. Deep conceptual questions.",
        rating: 4.9,
        students: "15k+",
        tests: "20 Full Tests",
        price: "₹1,499",
        oldPrice: "₹2,999"
    },
    {
        id: 2,
        title: "NEET UG 2026 Elite",
        tag: "Trending",
        description: "NCERT-based rigorous practice for medical aspirants.",
        rating: 4.8,
        students: "22k+",
        tests: "30 Full Tests",
        price: "₹999",
        oldPrice: "₹1,999"
    },
    {
        id: 3,
        title: "UPSC CSE Prelims",
        tag: "Comprehensive",
        description: "Covering GS Paper 1 & CSAT with detailed solutions.",
        rating: 4.7,
        students: "8k+",
        tests: "40 Sets",
        price: "₹1,999",
        oldPrice: "₹4,999"
    },
    {
        id: 4,
        title: "SSC CGL Tier I & II",
        tag: "Popular",
        description: "Speed enhancement and accuracy building series.",
        rating: 4.6,
        students: "12k+",
        tests: "50 Tests",
        price: "₹499",
        oldPrice: "₹999"
    },
];

const TestSeries = () => {
    return (
        <section id="test-series" className="py-20 bg-slate-900 border-y border-slate-800/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-500 font-bold tracking-wider text-sm">PRACTICE PERFECTION</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                        Test Series for Every Goal
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Simulate real exam environment with our AI-powered test platform. Get instant analysis and All India Rank.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tests.map((test, index) => (
                        <motion.div
                            key={test.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col"
                        >
                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-slate-900 text-slate-400 border border-slate-800 rounded-full text-xs font-semibold group-hover:bg-blue-900/30 group-hover:text-blue-400 group-hover:border-blue-800 transition-all">
                                        {test.tag}
                                    </span>
                                    <div className="flex items-center gap-1 bg-yellow-900/20 border border-yellow-900/30 px-2 py-0.5 rounded text-yellow-500 text-xs font-bold">
                                        <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" /> {test.rating}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                                    {test.title}
                                </h3>
                                <p className="text-sm text-slate-500 mb-6 line-clamp-2">
                                    {test.description}
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-sm text-slate-400 gap-3">
                                        <FileCheck className="w-4 h-4 text-blue-500" />
                                        <span>{test.tests}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-slate-400 gap-3">
                                        <Users className="w-4 h-4 text-blue-500" />
                                        <span>{test.students} Enrolled</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-slate-900/50 border-t border-slate-800 flex items-center justify-between">
                                <div>
                                    <span className="text-xs text-slate-500 line-through mr-2">{test.oldPrice}</span>
                                    <span className="text-lg font-bold text-white">{test.price}</span>
                                </div>
                                <button className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all shadow-sm">
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors shadow-lg shadow-white/5">
                        Explore All Test Series
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestSeries;

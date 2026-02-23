"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900"
                    >
                        What Students Say
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative hover:border-slate-300 transition-all"
                        >
                            <Quote className="w-10 h-10 text-slate-800 absolute top-6 right-6" fill="currentColor" />
                            <p className="text-slate-600 mb-6 relative z-10 leading-relaxed italic">
                                "The test series is exceptionally good. The level of questions matches exactly with the real exam. The analysis report helped me identify my weak areas in Physics."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300"></div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Student Name</h4>
                                    <p className="text-sm text-slate-600">JEE Aspirant</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

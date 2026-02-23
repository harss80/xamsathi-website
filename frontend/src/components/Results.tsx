"use client";

const results = [
    { rank: "AIR 1", exam: "JEE Adv 2025", name: "Aarav Patel", score: "360/360" },
    { rank: "AIR 3", exam: "NEET 2025", name: "Ishita Sharma", score: "720/720" },
    { rank: "AIR 5", exam: "UPSC 2024", name: "Rohan Das", score: "" },
    { rank: "AIR 12", exam: "JEE Main", name: "Vihaan Kumar", score: "300/300" },
];

import { motion } from "framer-motion";

const Results = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="results" className="py-20 bg-white text-slate-900 border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold"
                        >
                            Consistently Producing <span className="text-blue-500">Toppers</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 mt-4 text-lg"
                        >
                            Our systematic approach delivers results year after year.
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-6"
                >
                    {results.map((res, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-500/50 hover:shadow-lg transition-all text-center relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:h-1.5 transition-all" />
                            <div className="w-24 h-24 rounded-full bg-slate-100 mx-auto mb-4 border-4 border-slate-300 group-hover:border-blue-500 transition-colors flex items-center justify-center text-xs text-slate-600">
                                [Photo]
                            </div>
                            <h3 className="text-2xl font-bold mb-1 text-slate-900">{res.rank}</h3>
                            <p className="text-blue-400 font-medium mb-1">{res.exam}</p>
                            <p className="text-lg font-semibold text-slate-800">{res.name}</p>
                            {res.score && <p className="text-slate-600 text-sm mt-1">Score: {res.score}</p>}
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 flex justify-center">
                    <div className="inline-flex flex-wrap justify-center gap-8 text-slate-600 text-sm font-medium">
                        <span>• 1000+ Selections in JEE</span>
                        <span>• 500+ in NEET Govt Colleges</span>
                        <span>• 50+ UPSC Officers</span>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Results;

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Book, Calculator, FlaskConical, Globe, Microscope, Palette, Briefcase, GraduationCap } from "lucide-react";

const courses = [
    { name: "Engineering (JEE)", icon: Calculator, courses: "120+ Courses", color: "bg-blue-900/20 text-blue-400 border-blue-800/50" },
    { name: "Medical (NEET)", icon: Microscope, courses: "90+ Courses", color: "bg-green-900/20 text-green-400 border-green-800/50" },
    { name: "UPSC/Civil Services", icon: Globe, courses: "150+ Courses", color: "bg-orange-900/20 text-orange-400 border-orange-800/50" },
    { name: "Foundation (9th-10th)", icon: Book, courses: "80+ Courses", color: "bg-purple-900/20 text-purple-400 border-purple-800/50" },
    { name: "Management (CAT)", icon: Briefcase, courses: "60+ Courses", color: "bg-indigo-900/20 text-indigo-400 border-indigo-800/50" },
    { name: "Science", icon: FlaskConical, courses: "45+ Courses", color: "bg-teal-900/20 text-teal-400 border-teal-800/50" },
    { name: "Research", icon: GraduationCap, courses: "30+ Courses", color: "bg-rose-900/20 text-rose-400 border-rose-800/50" },
    { name: "Arts & Design", icon: Palette, courses: "50+ Courses", color: "bg-pink-900/20 text-pink-400 border-pink-800/50" },
];

const Courses = () => {
    return (
        <section id="courses" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Explore</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Browse Top Categories</h2>
                        <p className="text-slate-400 mt-4">
                            Select a category to see all available courses, test series, and study materials tailored for your goal.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all hover:text-blue-300">
                        View All Categories <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {courses.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300 cursor-pointer group"
                        >
                            <div className={`w-14 h-14 rounded-lg ${cat.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <cat.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{cat.name}</h3>
                            <p className="text-sm text-slate-500 mt-1 mb-4">{cat.courses}</p>

                            <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-blue-400 transition-colors">
                                Explore <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="flex items-center justify-center gap-2 text-blue-400 font-semibold w-full py-3 border border-slate-800 rounded-lg bg-slate-900 hover:bg-slate-800">
                        View All Categories <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Book, Calculator, FlaskConical, Globe, Microscope, Palette, Briefcase, GraduationCap } from "lucide-react";

const courses = [
    { name: "Engineering (JEE)", icon: Calculator, courses: "120+ Courses", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { name: "Medical (NEET)", icon: Microscope, courses: "90+ Courses", color: "bg-green-500/10 text-green-400 border-green-500/20" },
    { name: "UPSC/Civil Services", icon: Globe, courses: "150+ Courses", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
    { name: "Foundation (9th-10th)", icon: Book, courses: "80+ Courses", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    { name: "Management (CAT)", icon: Briefcase, courses: "60+ Courses", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
    { name: "Science", icon: FlaskConical, courses: "45+ Courses", color: "bg-teal-500/10 text-teal-400 border-teal-500/20" },
    { name: "Research", icon: GraduationCap, courses: "30+ Courses", color: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
    { name: "Arts & Design", icon: Palette, courses: "50+ Courses", color: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
];

const Courses = () => {
    return (
        <section id="courses" className="py-20 bg-slate-900 border-y border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Explore Courses</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white mt-2">Browse Top Categories</h2>
                        <p className="text-slate-400 mt-4 font-medium text-lg">
                            Select a category to see all available courses, test series, and study materials tailored for your goal.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-blue-500 font-bold hover:gap-3 transition-all hover:text-blue-400">
                        View All Categories <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {courses.map((cat, index) => (
                        <div
                            key={cat.name}
                            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform shadow-sm`}>
                                <cat.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-lg font-black text-white group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                            <p className="text-sm font-semibold text-slate-500 mt-2 mb-4">{cat.courses}</p>

                            <div className="flex items-center text-sm font-bold text-blue-600 transition-colors">
                                Explore <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="flex items-center justify-center gap-2 text-blue-600 font-bold w-full py-4 border border-slate-800 rounded-xl bg-slate-950 hover:bg-slate-900 shadow-sm">
                        View All Categories <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;

"use client";

import React, { useState } from "react";
import {
    ArrowLeft, Folder, BookOpen, FileText, ChevronRight,
    GraduationCap, Star, Clock, Trophy, Play,
    CheckCircle2, Lock, MousePointer2, Layout,
    Layers, Search, Grid, List as ListIcon,
    MoreHorizontal, Sparkles, Zap
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
type Material = {
    id: string;
    title: string;
    type: "note" | "test" | "video";
    duration?: string;
    isLocked?: boolean;
};

type Chapter = {
    id: string;
    title: string;
    subtitle: string;
    color: string;
    icon: any;
    materials: Material[];
    description: string;
};

// --- Mock Data ---
const CHAPTERS: Chapter[] = [
    {
        id: "ch1",
        title: "The Magic of Numbers",
        subtitle: "Mathematics • Day 1",
        color: "bg-blue-500",
        icon: GraduationCap,
        description: "Explore the world of large numbers, fractions, and decimals with fun puzzles.",
        materials: [
            { id: "m1", title: "Introduction to Large Numbers", type: "note" },
            { id: "m2", title: "Math Part Test 1: Arithmetic", type: "test", duration: "20 Mins" },
            { id: "m3", title: "Video: Fractions Made Easy", type: "video", duration: "10:00" },
        ]
    },
    {
        id: "ch2",
        title: "Nature's Secret Code",
        subtitle: "Science/EVS • Day 2",
        color: "bg-green-500",
        icon: Sparkles,
        description: "How seeds travel, how animals talk, and the importance of forest life.",
        materials: [
            { id: "m4", title: "Seeds and Their Travels", type: "note" },
            { id: "m5", title: "Science Part Test: Ecosystem", type: "test", duration: "15 Mins" },
            { id: "m6", title: "Animal Adaptations PDF", type: "note" },
        ]
    },
    {
        id: "ch3",
        title: "Grammar Wizards",
        subtitle: "English • Day 3",
        color: "bg-purple-500",
        icon: BookOpen,
        description: "Master tenses, prepositions, and learn how to write amazing stories.",
        materials: [
            { id: "m7", title: "The Tense Timeline", type: "note" },
            { id: "m8", title: "English Grammar Test 1", type: "test", duration: "25 Mins" },
            { id: "m9", title: "Video: Preposition Scavenger Hunt", type: "video", duration: "08:30" },
        ]
    },
    {
        id: "ch4",
        title: "हिंदी संगम",
        subtitle: "Hindi • Day 4",
        color: "bg-orange-500",
        icon: FileText,
        description: "संज्ञा, सर्वनाम और मजेदार मुहावरों की दुनिया में गोता लगाएँ।",
        materials: [
            { id: "m10", title: "विशेषण और क्रिया", type: "note" },
            { id: "m11", title: "हिंदी अभ्यास परीक्षा - १", type: "test", duration: "20 Mins" },
        ]
    },
    {
        id: "ch5",
        title: "Geometry Explorers",
        subtitle: "Mathematics • Day 5",
        color: "bg-cyan-500",
        icon: Layout,
        description: "Shapes, Perimeter, and Area. Learn logic through geometry.",
        materials: [
            { id: "m12", title: "Understanding 3D Shapes", type: "note" },
            { id: "m13", title: "Math Part Test 2: Geometry", type: "test", duration: "30 Mins" },
            { id: "m14", title: "Formula Cheat Sheet", type: "note", isLocked: true },
        ]
    },
    {
        id: "ch6",
        title: "Voyage into History",
        subtitle: "Social Studies • Day 6",
        color: "bg-rose-500",
        icon: Layers,
        description: "Our Earth, Maps, and the stories of people who changed the world.",
        materials: [
            { id: "m15", title: "Maps and Directions", type: "note" },
            { id: "m16", title: "Social Science Quiz", type: "test", duration: "15 Mins" },
        ]
    },
    {
        id: "ch7",
        title: "The Ultimate Finish",
        subtitle: "Final Sprint • Day 7",
        color: "bg-amber-500",
        icon: Trophy,
        description: "Put all your knowledge to the test with our full 5th-grade mock exam.",
        materials: [
            { id: "m17", title: "Full Mock Test: Class 5 Finals", type: "test", duration: "60 Mins" },
            { id: "m18", title: "Final Board Revision Notes", type: "note" },
        ]
    }
];

const OTHER_COURSES = [
    { title: "Young Scientist Club", price: "Free", color: "from-blue-600 to-cyan-500" },
    { title: "English Vocabulary Pro", price: "Premium", color: "from-purple-600 to-pink-500" },
    { title: "Kid's Coding 101", price: "Popular", color: "from-green-600 to-emerald-500" }
];

export default function Class5MasteryPage() {
    const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    return (
        <div className="min-h-screen bg-[#0F172A] text-slate-100 p-4 md:p-8 font-sans selection:bg-indigo-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Upper Metrics / Progress */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    <div className="lg:col-span-2 flex flex-col md:flex-row items-center gap-8 p-8 rounded-[2.5rem] bg-indigo-600/10 border border-indigo-500/20 backdrop-blur-md">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="64" cy="64" r="50" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-800" />
                                <circle cx="64" cy="64" r="50" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="314" strokeDashoffset="220" className="text-indigo-500" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-black text-white">30%</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Week 1</span>
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-black text-white mb-2">Keep it up, Champ! 🏆</h2>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                You have completed 2 out of 7 chapters. Finish today's task to unlock the "Focus Wizard" badge!
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/50 border border-slate-700">
                                    <Clock className="w-4 h-4 text-emerald-400" />
                                    <span className="text-xs font-bold text-slate-200">120m Studied</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/50 border border-slate-700">
                                    <Trophy className="w-4 h-4 text-amber-400" />
                                    <span className="text-xs font-bold text-slate-200">2500 XP Earned</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 flex flex-col justify-center">
                        <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-6">Badges Earned</h3>
                        <div className="flex justify-between items-center px-2">
                            <div className="group relative">
                                <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500/40 group-hover:scale-110 transition-transform cursor-help">
                                    <Star className="w-7 h-7 text-emerald-400 fill-emerald-400" />
                                </div>
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                                    Day 1 Complete
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="w-14 h-14 rounded-full bg-slate-800/50 flex items-center justify-center border-2 border-slate-700 opacity-40 grayscale">
                                    <GraduationCap className="w-7 h-7 text-slate-500" />
                                </div>
                            </div>
                            <div className="group relative">
                                <div className="w-14 h-14 rounded-full bg-slate-800/50 flex items-center justify-center border-2 border-slate-700 opacity-40 grayscale">
                                    <Trophy className="w-7 h-7 text-slate-500" />
                                </div>
                            </div>
                            <button className="w-12 h-12 rounded-full bg-indigo-600/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 hover:bg-indigo-600 hover:text-white transition-all">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                    <div>
                        <Link href="/dashboard?tab=tests" className="inline-flex items-center text-slate-400 hover:text-white mb-4 transition-colors group">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Dashboard
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Class 5: 1-Week Mastery
                        </h1>
                        <p className="text-slate-400 text-lg flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-amber-400" />
                            Complete preparation in just 7 days.
                        </p>
                    </div>

                    <div className="flex bg-slate-800/50 p-1 rounded-xl border border-slate-700">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-slate-700 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-slate-700 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                        >
                            <ListIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Main Grid: Chapters as Folders */}
                <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"}`}>
                    {CHAPTERS.map((chapter, index) => (
                        <motion.div
                            key={chapter.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedChapter(chapter)}
                            className={`cursor-pointer group relative overflow-hidden rounded-[2rem] border transition-all duration-300 ${viewMode === "grid"
                                ? "aspect-square p-8 flex flex-col justify-between"
                                : "p-6 flex items-center gap-6"
                                } ${selectedChapter?.id === chapter.id
                                    ? "bg-white text-slate-950 border-white shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                                }`}
                        >
                            {/* Icon & Background Accent */}
                            <div className={`${viewMode === "grid" ? "mb-4" : ""}`}>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6 ${selectedChapter?.id === chapter.id ? "bg-slate-950 text-white" : `${chapter.color} text-white`
                                    }`}>
                                    <chapter.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold leading-tight">{chapter.title}</h3>
                                    <p className={`text-sm font-medium opacity-60 ${selectedChapter?.id === chapter.id ? "text-slate-950" : "text-slate-400"}`}>
                                        {chapter.subtitle}
                                    </p>
                                </div>
                            </div>

                            {viewMode === "grid" && (
                                <div className="flex items-center justify-between pt-4 border-t border-current border-opacity-10 mt-auto">
                                    <span className="text-xs font-bold uppercase tracking-widest opacity-40">Folder</span>
                                    <Folder className={`w-6 h-6 transition-transform group-hover:scale-110 ${selectedChapter?.id === chapter.id ? "text-slate-950" : "text-slate-600"}`} />
                                </div>
                            )}

                            {viewMode === "list" && (
                                <div className="ml-auto flex items-center gap-4">
                                    <div className="text-right hidden sm:block">
                                        <div className="text-xs uppercase tracking-widest font-bold opacity-40 mb-1">Materials</div>
                                        <div className="text-sm font-bold">{chapter.materials.length} Items</div>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-slate-600" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Chapter Content Details (Expand Area) */}
                <AnimatePresence mode="wait">
                    {selectedChapter && (
                        <motion.div
                            layoutId={selectedChapter.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            className="mt-12 p-8 md:p-12 rounded-[3rem] bg-slate-900/50 border border-slate-800 relative overflow-hidden"
                        >
                            {/* Decorative Blur */}
                            <div className={`absolute -top-24 -right-24 w-96 h-96 ${selectedChapter.color} opacity-10 blur-[100px] rounded-full pointer-events-none`} />

                            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                                {/* Details Left */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] text-white ${selectedChapter.color}`}>
                                            Day {(CHAPTERS.indexOf(selectedChapter) + 1)}
                                        </span>
                                        <span className="text-slate-500 font-bold">•</span>
                                        <span className="text-slate-400 font-bold uppercase text-xs tracking-wider">
                                            Class 5 Special Prep
                                        </span>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                        {selectedChapter.title}
                                    </h2>
                                    <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                                        {selectedChapter.description}
                                    </p>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
                                        <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50">
                                            <div className="text-slate-500 text-xs font-bold uppercase mb-1">Duration</div>
                                            <div className="text-lg font-bold text-white">~45 Mins</div>
                                        </div>
                                        <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50">
                                            <div className="text-slate-500 text-xs font-bold uppercase mb-1">Difficulty</div>
                                            <div className="text-lg font-bold text-white">Beginner</div>
                                        </div>
                                        <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50 flex flex-col justify-center">
                                            <div className="flex -space-x-3">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center overflow-hidden">
                                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Kid${i}`} alt="user" />
                                                    </div>
                                                ))}
                                                <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">
                                                    +2k
                                                </div>
                                            </div>
                                            <div className="text-[10px] text-slate-500 mt-1 font-bold uppercase tracking-wider">Active Kids</div>
                                        </div>
                                    </div>

                                    <button className={`w-full sm:w-auto px-10 py-4 rounded-2xl font-black text-lg text-white shadow-2xl transition-all active:scale-[0.98] ${selectedChapter.color} hover:brightness-110 flex items-center justify-center gap-3`}>
                                        <Play className="fill-white w-5 h-5" />
                                        Start Learning Now
                                    </button>
                                </div>

                                {/* Materials Right */}
                                <div className="lg:w-[400px] space-y-4">
                                    <h4 className="text-xl font-black mb-6 flex items-center gap-3">
                                        <Layers className="w-6 h-6 text-indigo-400" />
                                        Chapter Materials
                                    </h4>

                                    {selectedChapter.materials.map((m) => (
                                        <div
                                            key={m.id}
                                            className={`p-4 rounded-2xl border flex items-center gap-4 group transition-all cursor-pointer ${m.isLocked
                                                ? "bg-slate-900/20 border-slate-800/40 opacity-50 grayscale select-none"
                                                : "bg-slate-800/30 border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/5 shadow-sm"
                                                }`}
                                        >
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${m.type === "test" ? "bg-rose-500/10 text-rose-400" :
                                                m.type === "video" ? "bg-amber-500/10 text-amber-400" :
                                                    "bg-cyan-500/10 text-cyan-400"
                                                }`}>
                                                {m.isLocked ? <Lock className="w-5 h-5" /> : (
                                                    m.type === "test" ? <MousePointer2 className="w-5 h-5" /> :
                                                        m.type === "video" ? <Play className="w-5 h-5" /> :
                                                            <FileText className="w-5 h-5" />
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-black text-slate-100 group-hover:text-white transition-colors">
                                                    {m.title}
                                                </div>
                                                <div className="text-[10px] uppercase font-black tracking-widest text-slate-500 mt-1 flex items-center gap-2">
                                                    <span className={m.type === "test" ? "text-rose-400" : ""}>{m.type}</span>
                                                    {m.duration && (
                                                        <>
                                                            <span>•</span>
                                                            <span className="flex items-center gap-1">
                                                                <Clock className="w-3 h-3" /> {m.duration}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            {!m.isLocked && <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Close Button Top Right */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedChapter(null);
                                }}
                                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                            >
                                <ArrowLeft className="w-5 h-5 rotate-90" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Fun Learning Tools Section */}
                <div className="mt-20 p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[3rem]">
                    <div className="bg-slate-900 rounded-[2.9rem] p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-3xl font-black text-white mb-4">
                                    Extra Fun for Explorers! 🚀
                                </h3>
                                <p className="text-slate-400 text-lg mb-8">
                                    Learning isn't just about tests. Check out these daily mental exercises to keep your brain sharp!
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-colors cursor-pointer group">
                                        <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                                            <Sparkles className="w-6 h-6 animate-pulse" />
                                        </div>
                                        <div>
                                            <div className="font-black text-white">Daily Wisdom</div>
                                            <div className="text-xs text-slate-500">New fact every day!</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500 transition-colors cursor-pointer group">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-black text-white">Speed Math</div>
                                            <div className="text-xs text-slate-500">60-second challenge</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 aspect-square relative">
                                <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full" />
                                <img
                                    src="https://api.dicebear.com/7.x/bottts/svg?seed=LearnBot&backgroundColor=b6e3f4"
                                    alt="Learning Bot"
                                    className="relative z-10 w-full h-full object-contain animate-bounce transition-all duration-1000"
                                    style={{ animationDuration: '3s' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Related Courses Section */}
                <div className="mt-20">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-3xl font-black text-white px-2 border-l-4 border-indigo-500">
                                Explore More Courses
                            </h3>
                            <p className="text-slate-500 mt-2">Personalized recommendations for you.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {OTHER_COURSES.map((course, idx) => (
                            <div key={idx} className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-slate-600 transition-all cursor-pointer">
                                <div className={`absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${course.color} blur-[50px] rounded-full`} />

                                <div className="relative z-10">
                                    <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-black tracking-widest uppercase text-slate-400 mb-4 inline-block">
                                        {course.price}
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-4 group-hover:text-indigo-300 transition-colors">
                                        {course.title}
                                    </h4>
                                    <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800">
                                        <div className="flex items-center gap-2 text-sm font-bold text-indigo-400">
                                            Enroll Now <ChevronRight className="w-4 h-4" />
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-slate-500">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" /> Certificate
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Info */}
                <div className="mt-20 text-center py-12 border-t border-slate-800/50">
                    <p className="text-slate-500 text-sm font-medium">
                        © 2026 Eduman Class 5 mastery Series. Designed for the toppers of tomorrow.
                    </p>
                </div>
            </div>
        </div>
    );
}

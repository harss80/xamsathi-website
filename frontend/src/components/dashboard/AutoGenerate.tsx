"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap, BookOpen, Layers, Target, ChevronRight, Calculator, Sliders,
    Check, ArrowLeft, PlayCircle, Sparkles, Clock, Beaker, BrainCircuit
} from "lucide-react";
import TestSeriesPlayer from "@/components/dashboard/TestSeriesPlayer";
import { trackLead } from "@/lib/trackLead";

type Subject = "Physics" | "Chemistry" | "Mathematics" | "Biology";

const SUBJECT_CHAPTERS: Record<Subject, string[]> = {
    Physics: [
        "Kinematics", "Laws of Motion", "Work, Energy and Power",
        "System of Particles", "Gravitation", "Thermodynamics",
        "Oscillations and Waves", "Electrostatics", "Current Electricity",
        "Magnetic Effects of Current", "Electromagnetic Induction",
        "Optics", "Dual Nature of Radiation", "Atoms and Nuclei"
    ],
    Chemistry: [
        "Some Basic Concepts of Chemistry", "Structure of Atom",
        "Classification of Elements", "Chemical Bonding", "Thermodynamics",
        "Equilibrium", "Redox Reactions", "Organic Chemistry - Some Basic Principles",
        "Hydrocarbons", "Solutions", "Electrochemistry", "Chemical Kinetics",
        "Coordination Compounds", "Haloalkanes and Haloarenes", "Alcohols, Phenols and Ethers"
    ],
    Mathematics: [
        "Sets, Relations and Functions", "Complex Numbers", "Matrices and Determinants",
        "Permutations and Combinations", "Binomial Theorem", "Sequence and Series",
        "Limit, Continuity and Differentiability", "Integral Calculus",
        "Differential Equations", "Coordinate Geometry", "Three Dimensional Geometry",
        "Vector Algebra", "Statistics and Probability", "Trigonometry"
    ],
    Biology: [
        "The Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom",
        "Morphology of Flowering Plants", "Anatomy of Flowering Plants", "Structural Organisation in Animals",
        "Cell: The Unit of Life", "Biomolecules", "Cell Cycle and Cell Division",
        "Transport in Plants", "Mineral Nutrition", "Photosynthesis in Higher Plants",
        "Respiration in Plants", "Plant Growth and Development", "Digestion and Absorption",
        "Breathing and Exchange of Gases", "Body Fluids and Circulation"
    ]
};

const generateMockQuestions = (subject: string, chapters: string[], numQuestions: number) => {
    return Array.from({ length: numQuestions }).map((_, i) => {
        const randomChapter = chapters[Math.floor(Math.random() * chapters.length)];
        return {
            text: `Q${i + 1}. A conceptual question based on ${randomChapter} from ${subject}. Which of the following is correct?`,
            options: [
                `Option A derived from ${randomChapter} concept`,
                `Option B explaining another property of ${randomChapter}`,
                `Option C relating to an exception in ${randomChapter}`,
                `Option D which is incorrect in the context of ${randomChapter}`
            ],
            correctAnswer: Math.floor(Math.random() * 4),
            explanation: `Detailed explanation: This question tests your knowledge of ${randomChapter}. The correct principle states that...`,
        };
    });
};

const getBackendBase = () => {
    const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
    if (envBase) return envBase;
    if (typeof window !== "undefined") {
        const host = window.location.hostname;
        if (host === "localhost" || host === "127.0.0.1") return "http://localhost:3001";
    }
    return "http://localhost:3001";
};

const fadeUpText = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function AutoGenerate() {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [selectedSubject, setSelectedSubject] = useState<Subject | "">("");
    const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
    const [numQuestions, setNumQuestions] = useState<number>(10);
    const [isGenerating, setIsGenerating] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [testQuestions, setTestQuestions] = useState<any[] | null>(null);

    const handleSubjectSelect = (sub: Subject) => {
        setSelectedSubject(sub);
        setSelectedChapters([]);
        setStep(2);
    };

    const toggleChapter = (chap: string) => {
        if (selectedChapters.includes(chap)) {
            setSelectedChapters(selectedChapters.filter(c => c !== chap));
        } else {
            setSelectedChapters([...selectedChapters, chap]);
        }
    };

    const handleSelectAll = () => {
        if (!selectedSubject) return;
        if (selectedChapters.length === SUBJECT_CHAPTERS[selectedSubject].length) {
            setSelectedChapters([]);
        } else {
            setSelectedChapters([...SUBJECT_CHAPTERS[selectedSubject]]);
        }
    };

    const handleGenerate = async () => {
        if (!selectedSubject || selectedChapters.length === 0) return;
        setIsGenerating(true);
        trackLead({ action: "autogenerate_test_started", entity_type: "custom_test", entity_id: `${selectedSubject}-${selectedChapters.length}-${numQuestions}` });

        if (selectedSubject === "Physics") {
            try {
                const base = getBackendBase();
                const res = await fetch(`${base}/api/tests/auto-generate`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        subject: selectedSubject,
                        chapters: selectedChapters,
                        numQuestions: numQuestions
                    })
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data.questions && data.questions.length > 0) {
                        setTestQuestions(data.questions);
                        setIsGenerating(false);
                        return;
                    }
                }
            } catch (err) {
                console.error("Failed to generate test", err);
            }
        }

        setTimeout(() => {
            const qs = generateMockQuestions(selectedSubject, selectedChapters, numQuestions);
            setTestQuestions(qs);
            setIsGenerating(false);
        }, 2500);
    };

    if (testQuestions) {
        return (
            <div className="absolute inset-0 z-50 bg-[#0A0A0B] overflow-y-auto w-full h-full">
                <div className="p-4 flex items-center justify-between border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-xl sticky top-0 z-50">
                    <button
                        onClick={() => setTestQuestions(null)}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-5 h-5" /> Back to Customizer
                    </button>
                    <div className="text-white font-bold tracking-wide flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-indigo-400" />
                        AI Generated Test: <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{selectedSubject}</span>
                    </div>
                    <div className="w-32"></div>
                </div>
                <div className="min-h-[calc(100vh-64px)] relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
                    <TestSeriesPlayer
                        title={`Custom ${selectedSubject} Test`}
                        description={`Generated based on ${selectedChapters.length} selected chapters. Powered by AI.`}
                        testSeriesId={`custom-gen-${Date.now()}`}
                        questions={testQuestions}
                        durationMins={Math.max(5, Math.ceil(numQuestions * 1.5))}
                        totalMarks={numQuestions * 4}
                        positiveMarking={4}
                        negativeMarking={1}
                        subjects={[selectedSubject]}
                        onFinish={() => { }}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 relative min-h-[85vh]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-4 mb-10 text-center relative z-10"
            >
                <motion.div variants={fadeUpText} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-xl backdrop-blur-md mb-2">
                    <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
                    <span className="text-sm font-semibold tracking-wide text-slate-300">AI Powered Practice</span>
                </motion.div>
                <motion.h1 variants={fadeUpText} className="text-4xl md:text-6xl font-black text-white tracking-tight">
                    Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-300% animate-gradient">Perfect Test</span>
                </motion.h1>
                <motion.p variants={fadeUpText} className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                    Select your weak areas and let our AI assemble a highly targeted mock test to accelerate your learning.
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#0f1016]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden"
            >
                <div className="px-4 sm:px-8 py-6 border-b border-white/5 bg-white/[0.02] overflow-x-auto no-scrollbar">
                    <div className="flex items-center justify-between relative min-w-[320px] max-w-3xl mx-auto">
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2" />
                        <motion.div
                            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 -translate-y-1/2 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${(step - 1) * 50}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />

                        {[
                            { num: 1, label: "Subject", icon: BookOpen },
                            { num: 2, label: "Chapters", icon: Layers },
                            { num: 3, label: "Configure", icon: Sliders }
                        ].map((s) => (
                            <button
                                key={s.num}
                                onClick={() => s.num < step ? setStep(s.num as 1 | 2 | 3) : null}
                                className={`relative flex flex-col items-center gap-2 sm:gap-3 focus:outline-none group z-10 ${s.num <= step ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                            >
                                <motion.div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${step === s.num
                                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_0_30px_rgba(99,102,241,0.4)] text-white scale-110'
                                        : s.num < step
                                            ? 'bg-[#1a1b23] border border-indigo-500/30 text-indigo-400'
                                            : 'bg-[#13141a] border border-white/5 text-slate-500'
                                        }`}
                                >
                                    {s.num < step ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : <s.icon className="w-4 h-4 sm:w-5 sm:h-5" />}
                                </motion.div>
                                <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-colors ${step === s.num ? 'text-white' : s.num < step ? 'text-indigo-300' : 'text-slate-600'
                                    }`}>
                                    {s.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-6 md:p-12 min-h-[480px]">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8 h-full flex flex-col justify-center"
                            >
                                <div className="text-center mb-4">
                                    <h3 className="text-2xl font-bold text-white mb-2">Choose Your Subject</h3>
                                    <p className="text-slate-400">Select a core subject to view its chapters.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
                                    {(["Physics", "Chemistry", "Mathematics", "Biology"] as Subject[]).map((sub) => (
                                        <motion.button
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            key={sub}
                                            onClick={() => handleSubjectSelect(sub)}
                                            className="relative p-6 rounded-[2rem] bg-[#13141a] border border-white/5 hover:border-indigo-500/50 text-left transition-all group overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative z-10 flex items-center gap-6">
                                                <div className="w-16 h-16 rounded-2xl bg-[#1a1b23] border border-white/5 flex items-center justify-center text-slate-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                                    {sub === "Physics" && <Target className="w-8 h-8" />}
                                                    {sub === "Chemistry" && <Beaker className="w-8 h-8" />}
                                                    {sub === "Mathematics" && <Calculator className="w-8 h-8" />}
                                                    {sub === "Biology" && <BrainCircuit className="w-8 h-8" />}
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{sub}</h4>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className="text-sm font-medium px-2.5 py-1 rounded-md bg-[#1a1b23] text-slate-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
                                                            {SUBJECT_CHAPTERS[sub].length} Chapters
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && selectedSubject && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col h-full"
                            >
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                            {selectedSubject} Chapters
                                            <span className="text-sm font-bold bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/20">
                                                {selectedChapters.length} Selected
                                            </span>
                                        </h3>
                                        <p className="text-slate-400 text-sm mt-1">Select the chapters you want to include in the generated test.</p>
                                    </div>
                                    <button
                                        onClick={handleSelectAll}
                                        className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 px-4 py-2 rounded-xl transition-colors border border-indigo-500/20"
                                    >
                                        {selectedChapters.length === SUBJECT_CHAPTERS[selectedSubject].length ? 'Deselect All' : 'Select All'}
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto custom-scrollbar pr-2 pb-6 max-h-[50vh] min-h-[300px] content-start">
                                    {SUBJECT_CHAPTERS[selectedSubject].map((chap, i) => {
                                        const isSelected = selectedChapters.includes(chap);
                                        return (
                                            <motion.button
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.02 }}
                                                key={chap}
                                                whileHover={{ scale: 1.01 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => toggleChapter(chap)}
                                                className={`group flex items-start gap-4 p-4 rounded-2xl border text-left transition-all duration-300 ${isSelected
                                                    ? "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/40 shadow-[0_4px_20px_-5px_rgba(79,70,229,0.2)]"
                                                    : "bg-[#13141a] border-white/5 hover:border-white/10 hover:bg-white/[0.02]"
                                                    }`}
                                            >
                                                <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center border-2 transition-all duration-300 shrink-0 ${isSelected
                                                    ? "bg-indigo-500 border-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                                    : "border-slate-700 bg-[#1a1b23] group-hover:border-slate-500"
                                                    }`}>
                                                    <Check className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? "scale-100" : "scale-0"}`} />
                                                </div>
                                                <span className={`text-sm font-semibold leading-tight pt-0.5 transition-colors ${isSelected ? "text-indigo-100" : "text-slate-300 group-hover:text-white"}`}>
                                                    {chap}
                                                </span>
                                            </motion.button>
                                        )
                                    })}
                                </div>
                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="px-6 py-3 rounded-xl font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2"
                                    >
                                        <ArrowLeft className="w-4 h-4" /> Back
                                    </button>
                                    <button
                                        disabled={selectedChapters.length === 0}
                                        onClick={() => setStep(3)}
                                        className="flex items-center gap-2 px-8 py-3.5 bg-white text-black hover:bg-indigo-50 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                                    >
                                        Next configuration <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-10 flex flex-col h-full"
                            >
                                <div className="text-center max-w-2xl mx-auto">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                                        <Sliders className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-3">Final Configuration</h3>
                                    <p className="text-slate-400">Set the properties of your AI generated test to begin.</p>
                                </div>

                                <div className="bg-[#13141a] border border-white/5 rounded-3xl p-8 max-w-2xl mx-auto w-full">
                                    <label className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-300 mb-6 gap-2">
                                        <span className="text-lg">Number of Questions</span>
                                        <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-base border border-indigo-500/20 w-fit">{numQuestions} Questions</span>
                                    </label>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                                        {[10, 20, 30, 50].map((num) => (
                                            <button
                                                key={num}
                                                onClick={() => setNumQuestions(num)}
                                                className={`py-4 rounded-2xl border-2 font-black text-xl transition-all duration-300 ${numQuestions === num
                                                    ? "bg-indigo-500/10 border-indigo-500 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)] transform scale-[1.02]"
                                                    : "bg-[#1a1b23] border-transparent text-slate-400 hover:bg-[#20212b] hover:text-white"
                                                    }`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="rounded-2xl bg-indigo-500/5 border border-indigo-500/10 p-5 grid grid-cols-1 sm:flex sm:items-center gap-6 sm:gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                                <Clock className="w-6 h-6 text-indigo-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-400">Duration</div>
                                                <div className="text-xl font-black text-white whitespace-nowrap">{Math.ceil(numQuestions * 1.5)} Mins</div>
                                            </div>
                                        </div>

                                        <div className="hidden sm:block w-[1px] h-10 bg-white/10 mx-2"></div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                                                <Target className="w-6 h-6 text-purple-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-400">Total Marks</div>
                                                <div className="text-xl font-black text-white whitespace-nowrap">{numQuestions * 4} Marks</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto w-full">
                                    <button
                                        onClick={() => setStep(2)}
                                        className="px-6 py-4 rounded-xl font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                                    >
                                        <ArrowLeft className="w-5 h-5" /> Back to Chapters
                                    </button>

                                    <button
                                        onClick={handleGenerate}
                                        disabled={isGenerating}
                                        className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black hover:bg-slate-200 rounded-xl font-black text-lg transition-all overflow-hidden group disabled:opacity-80 disabled:cursor-wait shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {isGenerating ? (
                                            <>
                                                <div className="w-6 h-6 border-[3px] border-black/20 border-t-black rounded-full animate-spin" />
                                                Generating Test...
                                            </>
                                        ) : (
                                            <>
                                                <Zap className="w-5 h-5 fill-black" />
                                                Generate AI Test
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div >
        </div >
    );
}

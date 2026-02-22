"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, BookOpen, Layers, Target, ChevronRight, Calculator, Sliders, Check, ArrowLeft, PlayCircle } from "lucide-react";
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

// Dummy question generator
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

export default function AutoGenerate() {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [selectedSubject, setSelectedSubject] = useState<Subject | "">("");
    const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
    const [numQuestions, setNumQuestions] = useState<number>(10);
    const [isGenerating, setIsGenerating] = useState(false);

    // Test Player State
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

    const handleGenerate = () => {
        if (!selectedSubject || selectedChapters.length === 0) return;
        setIsGenerating(true);
        trackLead({ action: "autogenerate_test_started", entity_type: "custom_test", entity_id: `${selectedSubject}-${selectedChapters.length}-${numQuestions}` });

        // Simulate AI generation time
        setTimeout(() => {
            const qs = generateMockQuestions(selectedSubject, selectedChapters, numQuestions);
            setTestQuestions(qs);
            setIsGenerating(false);
        }, 2000);
    };

    if (testQuestions) {
        return (
            <div className="fixed inset-0 z-50 bg-slate-950 overflow-y-auto">
                <div className="p-4 flex items-center justify-between border-b border-slate-800 bg-slate-900 sticky top-0 z-50">
                    <button
                        onClick={() => setTestQuestions(null)}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold"
                    >
                        <ArrowLeft className="w-5 h-5" /> Back to Generator
                    </button>
                    <div className="text-white font-black text-lg">Custom Test: {selectedSubject}</div>
                    <div className="w-24"></div>
                </div>
                <div className="min-h-[calc(100vh-64px)]">
                    <TestSeriesPlayer
                        title={`Custom ${selectedSubject} Test`}
                        description={`Generated test based on ${selectedChapters.length} selected chapters.`}
                        testSeriesId={`custom-gen-${Date.now()}`}
                        questions={testQuestions}
                        durationMins={Math.max(5, Math.ceil(numQuestions * 1.5))} // 1.5 mins per question
                        totalMarks={numQuestions * 4}
                        positiveMarking={4}
                        negativeMarking={1}
                        subjects={[selectedSubject]}
                        onFinish={() => {
                            // Can stay on result screen
                        }}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold mb-4 border border-indigo-500/20">
                    <Zap className="w-4 h-4" /> AI Powered
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">Auto Generate Tests</h1>
                <p className="text-slate-400 mt-2 text-lg">Create custom practice tests tailored to your weak chapters in seconds.</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden p-6 md:p-10 relative">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative">
                    {/* Stepper */}
                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-800 relative">
                        <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-800 -z-10" />

                        {[
                            { num: 1, label: "Subject", icon: BookOpen },
                            { num: 2, label: "Chapters", icon: Layers },
                            { num: 3, label: "Customize", icon: Sliders }
                        ].map((s) => (
                            <button
                                key={s.num}
                                onClick={() => s.num < step ? setStep(s.num as any) : null}
                                className={`flex flex-col items-center gap-2 focus:outline-none ${s.num <= step ? 'text-white' : 'text-slate-500 cursor-not-allowed'}`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step === s.num ? 'bg-indigo-600 border border-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.5)]' :
                                        s.num < step ? 'bg-emerald-500 text-black border border-emerald-400' : 'bg-slate-800 border border-slate-700'
                                    }`}>
                                    {s.num < step ? <Check className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-wider ${step === s.num ? 'text-indigo-300' : ''}`}>{s.label}</span>
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-xl font-bold text-white mb-4">Select Target Subject</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {(["Physics", "Chemistry", "Mathematics", "Biology"] as Subject[]).map((sub) => (
                                        <button
                                            key={sub}
                                            onClick={() => handleSubjectSelect(sub)}
                                            className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-indigo-500/50 hover:bg-indigo-500/5 text-left transition-all group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-indigo-500 group-hover:text-white transition-colors mb-4">
                                                {sub === "Physics" && <Target className="w-6 h-6" />}
                                                {sub === "Chemistry" && <Layers className="w-6 h-6" />}
                                                {sub === "Mathematics" && <Calculator className="w-6 h-6" />}
                                                {sub === "Biology" && <Zap className="w-6 h-6" />}
                                            </div>
                                            <h4 className="text-lg font-bold text-white">{sub}</h4>
                                            <p className="text-sm text-slate-400 mt-1">Select chapters from {sub}</p>
                                        </button>
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
                                className="space-y-6"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-white">Select Chapters ({selectedSubject})</h3>
                                    <div className="text-sm text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                                        {selectedChapters.length} Selected
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                                    {SUBJECT_CHAPTERS[selectedSubject].map((chap) => {
                                        const isSelected = selectedChapters.includes(chap);
                                        return (
                                            <button
                                                key={chap}
                                                onClick={() => toggleChapter(chap)}
                                                className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all ${isSelected
                                                        ? "bg-indigo-600 border-indigo-500 shadow-[0_4px_20px_-5px_rgba(79,70,229,0.3)]"
                                                        : "bg-slate-950/50 border-slate-800 hover:border-slate-600"
                                                    }`}
                                            >
                                                <div className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border transition-colors shrink-0 ${isSelected ? "bg-white/20 border-white/50" : "border-slate-600 bg-slate-900"
                                                    }`}>
                                                    {isSelected && <Check className="w-3 h-3 text-white" />}
                                                </div>
                                                <span className={`text-sm font-medium leading-snug ${isSelected ? "text-white" : "text-slate-300"}`}>
                                                    {chap}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </div>
                                <div className="flex justify-end pt-4 border-t border-slate-800">
                                    <button
                                        disabled={selectedChapters.length === 0}
                                        onClick={() => setStep(3)}
                                        className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-slate-200 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next Step <ChevronRight className="w-5 h-5" />
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
                                className="space-y-8"
                            >
                                <h3 className="text-xl font-bold text-white">Final Customizations</h3>

                                <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6">
                                    <label className="block text-sm font-bold text-slate-300 mb-4">Number of Questions</label>
                                    <div className="grid grid-cols-4 gap-3">
                                        {[10, 20, 30, 50].map((num) => (
                                            <button
                                                key={num}
                                                onClick={() => setNumQuestions(num)}
                                                className={`py-3 rounded-xl border font-bold text-lg transition-all ${numQuestions === num
                                                        ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                                                        : "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white"
                                                    }`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="mt-4 text-sm text-slate-500 flex items-center gap-2">
                                        <Clock className="w-4 h-4" /> Estimated time: <span className="text-white font-bold">{Math.ceil(numQuestions * 1.5)} mins</span>
                                    </div>
                                </div>

                                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                                        <Zap className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg mb-1">Ready to Generate</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Our AI will instantly create a high-quality test featuring <strong>{numQuestions} questions</strong> randomly picked and matched across your <strong>{selectedChapters.length} selected {selectedSubject} chapters</strong>.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                                    <button
                                        onClick={() => setStep(2)}
                                        className="text-slate-400 hover:text-white font-bold text-sm px-4 py-2"
                                    >
                                        Go Back
                                    </button>

                                    <button
                                        onClick={handleGenerate}
                                        disabled={isGenerating}
                                        className="relative inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-black text-lg transition-all overflow-hidden group disabled:opacity-80 disabled:cursor-wait"
                                    >
                                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
                                        {isGenerating ? (
                                            <>
                                                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                                Generating...
                                            </>
                                        ) : (
                                            <>
                                                <PlayCircle className="w-6 h-6" /> Generate & Start Test
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

// Just add this icon missing above
function Clock(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}

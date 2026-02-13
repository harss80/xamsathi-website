"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
    ArrowLeft, Clock, AlertCircle, CheckCircle2, XCircle,
    HelpCircle, ChevronRight, ChevronLeft, Flag, Award,
    BarChart2, Timer, RotateCcw, BookOpen, Brain, Zap, GraduationCap
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
type QuestionType = "physics" | "chemistry" | "botany" | "zoology";
type Question = {
    id: number;
    type: QuestionType;
    text: string;
    options: string[];
    correctAnswer: number; // 0-3
    explanation: string;
};

// --- Prakriti Series Questions ---

// Q1-Q10 Physics
const PHYSICS_QUESTIONS: Question[] = [
    {
        id: 1,
        type: "physics",
        text: "If P = Work / Pressure. Dimensional formula of P is:",
        options: ["L³", "ML²T⁻²", "ML⁻¹T⁻²", "M⁰L²T⁰"],
        correctAnswer: 0, // A
        explanation: "Dimensions of Work = [ML²T⁻²]. Dimensions of Pressure = [ML⁻¹T⁻²]. P = Work/Pressure = [ML²T⁻²] / [ML⁻¹T⁻²] = [L³]."
    },
    {
        id: 2,
        type: "physics",
        text: "The equation v = at + bt². Dimensions of b are:",
        options: ["LT⁻²", "LT⁻³", "T⁻²", "L"],
        correctAnswer: 1, // B
        explanation: "By principle of homogeneity, dimensions of each term must be same. [v] = [bt²] => [LT⁻¹] = [b][T²] => [b] = [LT⁻³]."
    },
    {
        id: 3,
        type: "physics",
        text: "If force varies as F = kx^(3/2). Dimensions of k are:",
        options: ["ML^(1/2)T⁻²", "ML^(−1/2)T⁻²", "ML²T⁻²", "ML^(3/2)T⁻²"],
        correctAnswer: 1, // B
        explanation: "k = F / x^(3/2) = [MLT⁻²] / [L^(3/2)] = [ML^(1-1.5)T⁻²] = [ML⁻¹/²T⁻²]."
    },
    {
        id: 4,
        type: "physics",
        text: "Maximum percentage error in A²B³. If error in A = 2%, B = 1%.",
        options: ["7%", "5%", "4%", "8%"],
        correctAnswer: 0, // A
        explanation: "% Error = 2(% Error in A) + 3(% Error in B) = 2(2) + 3(1) = 4 + 3 = 7%."
    },
    {
        id: 5,
        type: "physics",
        text: "A particle starts from rest. Acceleration = 5 m/s² for 4 s. Final velocity:",
        options: ["10", "15", "20", "25"],
        correctAnswer: 2, // C
        explanation: "v = u + at = 0 + 5(4) = 20 m/s."
    },
    {
        id: 6,
        type: "physics",
        text: "Position: x = t³ − 6t² + 9t. Number of times velocity becomes zero:",
        options: ["1", "2", "3", "0"],
        correctAnswer: 1, // B
        explanation: "v = dx/dt = 3t² - 12t + 9. For v=0, 3(t²-4t+3)=0 => (t-3)(t-1)=0. Velocity becomes zero at t=1s and t=3s (twice)."
    },
    {
        id: 7,
        type: "physics",
        text: "Velocity-time graph is triangular with base 6 s and height 12 m/s. Displacement:",
        options: ["36", "24", "18", "72"],
        correctAnswer: 0, // A
        explanation: "Displacement = Area under v-t graph = 1/2 * base * height = 1/2 * 6 * 12 = 36 m."
    },
    {
        id: 8,
        type: "physics",
        text: "A body thrown upward at 30 m/s. Time to reach maximum height (g = 10):",
        options: ["2 s", "3 s", "4 s", "5 s"],
        correctAnswer: 1, // B
        explanation: "At max height v=0. v = u - gt => 0 = 30 - 10t => t = 3s."
    },
    {
        id: 9,
        type: "physics",
        text: "If v = kt². Displacement in time t:",
        options: ["kt³", "kt³/3", "2kt³", "kt²"],
        correctAnswer: 1, // B
        explanation: "v = dx/dt = kt². dx = kt² dt. Integrating from 0 to t, x = k[t³/3]."
    },
    {
        id: 10,
        type: "physics",
        text: "Area under acceleration-time graph represents:",
        options: ["Displacement", "Velocity", "Change in velocity", "Force"],
        correctAnswer: 2, // C
        explanation: "Area under a-t graph = ∫a dt = ∫(dv/dt) dt = ∫dv = Change in velocity."
    }
];

// Q11-Q18 Chemistry
const CHEMISTRY_QUESTIONS: Question[] = [
    {
        id: 11,
        type: "chemistry",
        text: "1 mole of electrons carries charge:",
        options: ["96500 C", "1 C", "6.023×10²³ C", "10 C"],
        correctAnswer: 0, // A
        explanation: "Charge of 1 mole electrons = 1 Faraday ≈ 96500 Coulombs."
    },
    {
        id: 12,
        type: "chemistry",
        text: "Number of moles in 44 g CO₂:",
        options: ["1", "2", "0.5", "44"],
        correctAnswer: 0, // A
        explanation: "Molar mass of CO₂ = 12 + 2(16) = 44 g/mol. Moles = Given Mass / Molar Mass = 44/44 = 1."
    },
    {
        id: 13,
        type: "chemistry",
        text: "Empirical formula of compound with: C = 40%, H = 6.67%, O = 53.33%",
        options: ["CH₂O", "C₂H₄O₂", "C₆H₁₂O₆", "CHO"],
        correctAnswer: 0, // A
        explanation: "C: 40/12=3.33, H: 6.67/1=6.67, O: 53.33/16=3.33. Simple ratio 1:2:1. Formula CH₂O."
    },
    {
        id: 14,
        type: "chemistry",
        text: "Molecular mass = 180, empirical formula mass = 30. Molecular formula is:",
        options: ["3 × empirical", "6 × empirical", "2 × empirical", "4 × empirical"],
        correctAnswer: 1, // B
        explanation: "n = Molecular Mass / Empirical Mass = 180/30 = 6. Molecular Formula = 6 × Empirical Formula."
    },
    {
        id: 15,
        type: "chemistry",
        text: "Significant figures in 0.004560:",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1, // B
        explanation: "Leading zeros are not significant. Trailing zero after decimal is significant. Digits: 4, 5, 6, 0. Total 4."
    },
    {
        id: 16,
        type: "chemistry",
        text: "2A + 3B → C. If 4 moles A and 3 moles B react, limiting reagent:",
        options: ["A", "B", "Both", "None"],
        correctAnswer: 1, // B
        explanation: "Ratio required A:B = 2:3. Given A=4, B=3. For 4A we need 6B. We have only 3B. So B is limiting."
    },
    {
        id: 17,
        type: "chemistry",
        text: "Percentage composition is based on:",
        options: ["Mass ratio", "Mole ratio", "Volume ratio", "Atomic number"],
        correctAnswer: 0, // A
        explanation: "Percentage composition expresses the mass of each element as a percentage of the total mass of the compound."
    },
    {
        id: 18,
        type: "chemistry",
        text: "Avogadro number represents:",
        options: ["Mass of 1 mole", "Volume of gas", "Number of entities in 1 mole", "Charge on electron"],
        correctAnswer: 2, // C
        explanation: "Avogadro's number (6.022 × 10²³) is the number of atoms, molecules, or ions in one mole of a substance."
    }
];

// Q19-Q25 Botany
const BOTANY_QUESTIONS: Question[] = [
    {
        id: 19,
        type: "botany",
        text: "Fluid mosaic model proposed by:",
        options: ["Watson & Crick", "Singer & Nicolson", "Schleiden & Schwann", "Meselson & Stahl"],
        correctAnswer: 1, // B
        explanation: "The Fluid Mosaic Model of cell membrane structure was proposed by Singer and Nicolson in 1972."
    },
    {
        id: 20,
        type: "botany",
        text: "Cell wall of plants made of:",
        options: ["Protein", "Lipid", "Cellulose", "Glycogen"],
        correctAnswer: 2, // C
        explanation: "Plant cell walls are primarily composed of cellulose, a polysaccharide."
    },
    {
        id: 21,
        type: "botany",
        text: "Powerhouse of cell:",
        options: ["Golgi", "Lysosome", "Mitochondria", "Ribosome"],
        correctAnswer: 2, // C
        explanation: "Mitochondria are called the powerhouse of the cell because they generate most of the cell's supply of ATP."
    },
    {
        id: 22,
        type: "botany",
        text: "Rough ER differs from Smooth ER due to:",
        options: ["Size", "Ribosomes", "Shape", "Enzymes"],
        correctAnswer: 1, // B
        explanation: "Rough Endoplasmic Reticulum (RER) has ribosomes attached to its surface, giving it a 'rough' appearance."
    },
    {
        id: 23,
        type: "botany",
        text: "Osmosis is movement of:",
        options: ["Solute", "Solvernt", "Both", "Ions"],
        correctAnswer: 1, // B
        explanation: "Osmosis is the movement of solvent molecules through a semi-permeable membrane from a region of lower solute concentration to higher solute concentration."
    },
    {
        id: 24,
        type: "botany",
        text: "Plasmolysis occurs in:",
        options: ["Hypotonic solution", "Hypertonic solution", "Isotonic", "Distilled water"],
        correctAnswer: 1, // B
        explanation: "Plasmolysis (shrinkage of protoplast) occurs when a plant cell is placed in a hypertonic solution."
    },
    {
        id: 25,
        type: "botany",
        text: "Protein synthesis occurs in:",
        options: ["Nucleus", "Ribosome", "Golgi", "Lysosome"],
        correctAnswer: 1, // B
        explanation: "Ribosomes are the sites of protein synthesis (translation) in the cell."
    }
];

// Q26-Q35 Zoology
const ZOOLOGY_QUESTIONS: Question[] = [
    {
        id: 26,
        type: "zoology",
        text: "Primary structure of protein is stabilized by:",
        options: ["Hydrogen bonds", "Peptide bonds", "Disulfide bonds", "Ionic bonds"],
        correctAnswer: 1, // B
        explanation: "The primary structure consists of the linear sequence of amino acids held together by peptide bonds."
    },
    {
        id: 27,
        type: "zoology",
        text: "Secondary structure stabilized by:",
        options: ["Peptide", "Hydrogen", "Ionic", "Phosphodiester"],
        correctAnswer: 1, // B
        explanation: "Secondary structures like alpha-helices and beta-sheets are stabilized by hydrogen bonds between the backbone atoms."
    },
    {
        id: 28,
        type: "zoology",
        text: "Monomer of carbohydrate:",
        options: ["Amino acid", "Nucleotide", "Monosaccharide", "Fatty acid"],
        correctAnswer: 2, // C
        explanation: "Monosaccharides (simple sugars) are the building blocks (monomers) of carbohydrates."
    },
    {
        id: 29,
        type: "zoology",
        text: "Glycogen stored in:",
        options: ["Plant cell", "Liver", "Mitochondria", "Nucleus"],
        correctAnswer: 1, // B
        explanation: "Glycogen is the primary storage form of glucose in animals, stored mainly in the liver and skeletal muscles."
    },
    {
        id: 30,
        type: "zoology",
        text: "Intercalated discs found in:",
        options: ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Nervous tissue"],
        correctAnswer: 2, // C
        explanation: "Intercalated discs are unique structural formations found between the myocardial cells of the heart (Cardiac muscle)."
    },
    {
        id: 31,
        type: "zoology",
        text: "Unit of nervous tissue:",
        options: ["Nephron", "Neuron", "Myofibril", "Axon"],
        correctAnswer: 1, // B
        explanation: "The neuron is the fundamental structural and functional unit of the nervous system."
    },
    {
        id: 32,
        type: "zoology",
        text: "Collagen is found in:",
        options: ["Blood", "Connective tissue", "Nervous tissue", "Muscle"],
        correctAnswer: 1, // B
        explanation: "Collagen is the main structural protein in the extracellular matrix of various connective tissues in the body."
    },
    {
        id: 33,
        type: "zoology",
        text: "DNA monomer:",
        options: ["Amino acid", "Fatty acid", "Nucleotide", "Monosaccharide"],
        correctAnswer: 2, // C
        explanation: "DNA is a polymer made up of repeating units called nucleotides."
    },
    {
        id: 34,
        type: "zoology",
        text: "Enzyme specificity depends on:",
        options: ["pH", "Temperature", "Active site structure", "Substrate mass"],
        correctAnswer: 2, // C
        explanation: "The specificity of an enzyme corresponds to the unique structure of its active site, which fits only specific substrates."
    },
    {
        id: 35,
        type: "zoology",
        text: "Lipids are:",
        options: ["Hydrophilic", "Hydrophobic", "Polar", "Ionic"],
        correctAnswer: 1, // B
        explanation: "Lipids are non-polar molecules and are typically hydrophobic (water-insoluble)."
    }
];

// Q36-Q40 Mixed Harder Questions
const MIXED_QUESTIONS: Question[] = [
    {
        id: 36,
        type: "physics",
        text: "If velocity becomes zero twice, motion is:",
        options: ["Uniform", "Projectile", "Oscillatory", "Circular"],
        correctAnswer: 2, // C
        explanation: "In oscillatory motion (like a pendulum or spring), velocity becomes zero at the two extreme positions in every cycle."
    },
    {
        id: 37,
        type: "chemistry",
        text: "If empirical formula = CH₂O, molecular mass = 180. Molecular formula:",
        options: ["C₂H₄O₂", "C₃H₆O₃", "C₆H₁₂O₆", "CH₂O"],
        correctAnswer: 2, // C
        explanation: "Empirical mass = 12+2+16 = 30. n = 180/30 = 6. Molecular formula = (CH₂O)₆ = C₆H₁₂O₆."
    },
    {
        id: 38,
        type: "physics",
        text: "Acceleration at highest point in vertical motion:",
        options: ["0", "g upward", "g downward", "Infinite"],
        correctAnswer: 2, // C
        explanation: "At the highest point, velocity is zero, but the body is still under the influence of gravity, so acceleration is g downwards."
    },
    {
        id: 39,
        type: "botany",
        text: "Fluidity of membrane due to:",
        options: ["Proteins", "Phospholipid bilayer", "Carbohydrates", "DNA"],
        correctAnswer: 1, // B
        explanation: "The fluidity of the cell membrane is primarily due to the lateral movement of lipids within the phospholipid bilayer."
    },
    {
        id: 40,
        type: "chemistry",
        text: "1 mole of any gas at STP occupies:",
        options: ["11.2 L", "22.4 L", "44.8 L", "1 L"],
        correctAnswer: 1, // B
        explanation: "At Standard Temperature and Pressure (STP), the molar volume of any ideal gas is 22.4 liters."
    }
];

// Combine all questions
const QUESTIONS: Question[] = [
    ...PHYSICS_QUESTIONS,
    ...CHEMISTRY_QUESTIONS,
    ...BOTANY_QUESTIONS,
    ...ZOOLOGY_QUESTIONS,
    ...MIXED_QUESTIONS
];

export default function PrakritiSeriesPage() {
    const [started, setStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes

    // Timer Logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (started && !showResult && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        setShowResult(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [started, showResult, timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleAnswer = (optionIndex: number) => {
        setAnswers(prev => ({
            ...prev,
            [QUESTIONS[currentQuestion].id]: optionIndex
        }));
    };

    const calculateScore = () => {
        let score = 0;
        let correct = 0;
        let incorrect = 0;
        let skipped = 0;

        QUESTIONS.forEach(q => {
            if (answers[q.id] === undefined) {
                skipped++;
            } else if (answers[q.id] === q.correctAnswer) {
                score += 4;
                correct++;
            } else {
                score -= 1;
                incorrect++;
            }
        });

        return { score, correct, incorrect, skipped };
    };

    const stats = calculateScore();

    if (!started) {
        return (
            <div className="min-h-screen bg-[#0B1120] text-white p-6 flex items-center justify-center">
                <div className="max-w-2xl w-full">
                    <Link href="/dashboard/test-series" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Test Series
                    </Link>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
                        <div className="flex items-center justify-between mb-8">
                            <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                                New Series
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                            Prakriti Series
                        </h1>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            A comprehensive test series covering Physics, Chemistry, Botany, and Zoology.
                            Test your knowledge with 40 curated questions designed to challenge your understanding.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Questions</div>
                                <div className="text-xl font-bold text-white">40</div>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Duration</div>
                                <div className="text-xl font-bold text-white">45 Mins</div>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Marks</div>
                                <div className="text-xl font-bold text-white">160</div>
                            </div>
                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Subjects</div>
                                <div className="text-xl font-bold text-white">PCMB</div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>+4 marks for correct answer</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <XCircle className="w-5 h-5 text-red-500" />
                                <span>-1 mark for incorrect answer</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setStarted(true)}
                            className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-green-500/20 transition-all active:scale-[0.98]"
                        >
                            Start Test Now
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0B1120] text-white p-4 md:p-6 pb-24">
            {/* Header */}
            <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 max-w-5xl mx-auto">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                        <span className="text-green-400">Prakriti Series</span>
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">
                        Question {currentQuestion + 1} of {QUESTIONS.length}
                    </p>
                </div>

                {!showResult && (
                    <div className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${timeLeft < 300 ? 'bg-red-500/10 border-red-500/20 text-red-400 animate-pulse' :
                        'bg-slate-800 border-slate-700 text-slate-300'
                        }`}>
                        <Timer className="w-5 h-5" />
                        <span className="font-mono font-bold text-lg">{formatTime(timeLeft)}</span>
                    </div>
                )}
            </header>

            {!showResult ? (
                <div className="max-w-4xl mx-auto">
                    {/* Question Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 min-h-[400px] flex flex-col"
                        >
                            <div className="flex items-start justify-between gap-4 mb-6">
                                <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border ${QUESTIONS[currentQuestion].type === 'physics' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                    QUESTIONS[currentQuestion].type === 'chemistry' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                                        QUESTIONS[currentQuestion].type === 'botany' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                            'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                    }`}>
                                    {QUESTIONS[currentQuestion].type}
                                </span>
                            </div>

                            <h2 className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                                {QUESTIONS[currentQuestion].text}
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                {QUESTIONS[currentQuestion].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(idx)}
                                        className={`p-4 rounded-xl border text-left transition-all active:scale-[0.98] flex items-center gap-3 group ${answers[QUESTIONS[currentQuestion].id] === idx
                                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                                            : 'bg-slate-800/30 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                                            }`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${answers[QUESTIONS[currentQuestion].id] === idx
                                            ? 'bg-white text-indigo-600'
                                            : 'bg-slate-700 text-slate-400 group-hover:bg-slate-600 group-hover:text-white'
                                            }`}>
                                            {String.fromCharCode(65 + idx)}
                                        </div>
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        <button
                            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                            disabled={currentQuestion === 0}
                            className="px-6 py-3 rounded-xl bg-slate-800 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors flex items-center gap-2"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            Previous
                        </button>

                        <div className="flex gap-2">
                            {/* Mobile: Simple Indicator */}
                            <span className="md:hidden text-slate-400 text-sm font-medium">
                                {currentQuestion + 1} / {QUESTIONS.length}
                            </span>
                        </div>

                        {currentQuestion === QUESTIONS.length - 1 ? (
                            <button
                                onClick={() => setShowResult(true)}
                                className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:shadow-lg hover:shadow-green-500/20 transition-all flex items-center gap-2"
                            >
                                Submit Test
                                <CheckCircle2 className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                onClick={() => setCurrentQuestion(prev => Math.min(QUESTIONS.length - 1, prev + 1))}
                                className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors flex items-center gap-2"
                            >
                                Next
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl md:col-span-1">
                            <h3 className="text-slate-400 text-sm uppercase tracking-wider font-bold mb-4">Your Score</h3>
                            <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                {stats.score}<span className="text-2xl text-slate-500 font-medium">/160</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <span className={stats.score > 80 ? "text-green-400" : "text-yellow-400"}>
                                    {stats.score > 80 ? "Excellent" : "Keep Improving"}
                                </span>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl md:col-span-3 grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-green-500/10 rounded-2xl border border-green-500/20">
                                <div className="text-2xl font-bold text-green-400 mb-1">{stats.correct}</div>
                                <div className="text-xs text-green-300/70 uppercase tracking-wider font-bold">Correct</div>
                            </div>
                            <div className="text-center p-4 bg-red-500/10 rounded-2xl border border-red-500/20">
                                <div className="text-2xl font-bold text-red-400 mb-1">{stats.incorrect}</div>
                                <div className="text-xs text-red-300/70 uppercase tracking-wider font-bold">Wrong</div>
                            </div>
                            <div className="text-center p-4 bg-slate-700/30 rounded-2xl border border-slate-700/50">
                                <div className="text-2xl font-bold text-slate-300 mb-1">{stats.skipped}</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Skipped</div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-indigo-500" />
                        Deep Analysis & Solutions
                    </h2>

                    <div className="space-y-8">
                        {QUESTIONS.map((q) => {
                            const userAnsIdx = answers[q.id];
                            const isCorrect = userAnsIdx === q.correctAnswer;
                            const isSkipped = userAnsIdx === undefined;
                            const statusColor = isCorrect ? 'text-green-400' : isSkipped ? 'text-yellow-400' : 'text-red-400';
                            const StatusIcon = isCorrect ? CheckCircle2 : isSkipped ? HelpCircle : XCircle;

                            return (
                                <div key={q.id} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8 hover:bg-slate-800/30 transition-colors">
                                    <div className="flex items-start justify-between gap-4 mb-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wider border ${q.type === 'physics' ? 'bg-blue-400/10 text-blue-400 border-blue-500/20' :
                                                    q.type === 'chemistry' ? 'bg-yellow-400/10 text-yellow-400 border-yellow-500/20' :
                                                        q.type === 'botany' ? 'bg-green-400/10 text-green-400 border-green-500/20' :
                                                            'bg-purple-400/10 text-purple-400 border-purple-500/20'
                                                    }`}>
                                                    {q.type}
                                                </span>
                                                <span className={`text-sm font-bold flex items-center gap-1 ${statusColor}`}>
                                                    <StatusIcon className="w-4 h-4" />
                                                    {isCorrect ? 'Correct' : isSkipped ? 'Not Attempted' : 'Incorrect'}
                                                </span>
                                            </div>
                                            <h4 className="text-lg md:text-xl font-medium text-white">
                                                <span className="text-slate-500 font-mono mr-3">Q{q.id}.</span>
                                                {q.text}
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                                        {q.options.map((option, optIdx) => {
                                            const isSelected = userAnsIdx === optIdx;
                                            const isAnswer = q.correctAnswer === optIdx;

                                            let borderClass = 'border-slate-800 bg-slate-900/50';
                                            let textClass = 'text-slate-400';

                                            if (isAnswer) {
                                                borderClass = 'border-green-500/50 bg-green-500/10';
                                                textClass = 'text-white font-medium';
                                            } else if (isSelected) {
                                                borderClass = 'border-red-500/50 bg-red-500/10';
                                                textClass = 'text-white font-medium';
                                            }

                                            return (
                                                <div
                                                    key={optIdx}
                                                    className={`p-4 rounded-xl border ${borderClass} flex items-center gap-3 transition-colors`}
                                                >
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${isAnswer ? 'bg-green-500 text-white' :
                                                        isSelected ? 'bg-red-500 text-white' :
                                                            'bg-slate-800 text-slate-500'
                                                        }`}>
                                                        {String.fromCharCode(65 + optIdx)}
                                                    </div>
                                                    <span className={textClass}>{option}</span>
                                                    {isAnswer && <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto" />}
                                                    {isSelected && !isAnswer && <XCircle className="w-5 h-5 text-red-500 ml-auto" />}
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className="bg-indigo-950/20 border border-indigo-900/30 p-6 rounded-2xl relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                                        <div className="flex gap-4">
                                            <div className="shrink-0 pt-1">
                                                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                                                    <GraduationCap className="w-6 h-6" />
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="text-indigo-400 font-bold text-sm uppercase tracking-wider mb-2">Teacher's Explanation</h5>
                                                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                                    {q.explanation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

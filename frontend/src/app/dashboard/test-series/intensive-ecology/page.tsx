"use client";

import React, { useState, useEffect } from "react";
import {
    ArrowLeft, Clock, AlertCircle, ChevronRight, ChevronLeft, Flag,
    RotateCcw, Brain, Zap, Target, Layers, Calculator,
    BookOpen, CheckCircle2, HelpCircle, XCircle, GraduationCap
} from "lucide-react";
import Link from "next/link";

// --- Types ---
type Question = {
    id: number;
    section: string;
    text: string;
    options: string[];
    correctAnswer: number; // 0-3
    explanation: string;
};

// --- DATA: Intensive Ecology Series ---
const QUESTIONS: Question[] = [
    // SECTION A: Concept Fusion MCQs
    {
        id: 1,
        section: "Concept Fusion",
        text: "In logistic growth, when the population size (N) equals half the carrying capacity (K/2), the growth rate (dN/dt) is:",
        options: ["Zero", "Maximum", "Minimum", "Equal to intrinsic rate (r)"],
        correctAnswer: 1, // B
        explanation: "Population growth rate dN/dt is maximum at the inflection point where N = K/2."
    },
    {
        id: 2,
        section: "Concept Fusion",
        text: "If a population is at carrying capacity (K), which of the following is TRUE?",
        options: ["Natality = Mortality", "Intrinsic rate of increase (r) = 0", "Growth rate (dN/dt) = 0", "All of the above"],
        correctAnswer: 3, // D (User Key D) - Wait, r is constant for species. dN/dt becomes 0. Natality approx Mortality. User says D. Let's trace logic: At K, birth=death -> dN/dt=0. Realized r (actual growth) is 0. Intrinsic r is potential. Options are tricky. Let's stick to User Key D implies 'Realized' context for r."
        explanation: "At carrying capacity, the population stabilizes because birth rate equals death rate, leading to zero net growth."
    },
    {
        id: 3,
        section: "Concept Fusion",
        text: "Which of the following ecological pyramids can be inverted?\n1. Pyramid of Energy\n2. Pyramid of Biomass (aquatic)\n3. Pyramid of Number (tree ecosystem)",
        options: ["1 only", "2 & 3", "1 & 2", "1, 2 & 3"],
        correctAnswer: 1, // B
        explanation: "Pyramid of Energy is ALWAYS upright. Aquatic biomass can be inverted (phytoplankton < zooplankton). Tree number pyramid is inverted (single tree, many insects)."
    },
    {
        id: 4,
        section: "Concept Fusion",
        text: "Match the following correctly:\n1. GPP (Gross Primary Productivity)\n2. NPP (Net Primary Productivity)\n3. Secondary productivity\n\na. Energy available to herbivores\nb. Total photosynthesis\nc. Biomass formed by consumers",
        options: ["1–b, 2–a, 3–c", "1–a, 2–b, 3–c", "1–c, 2–b, 3–a", "1–b, 2–c, 3–a"],
        correctAnswer: 0, // A
        explanation: "GPP is total photosynthesis. NPP (GPP-R) is available to herbivores. Secondary productivity is new biomass at consumer level."
    },
    {
        id: 5,
        section: "Concept Fusion",
        text: "If 1,000 J of energy is available at the producer level, the energy available to the tertiary consumer will be:",
        options: ["10 J", "1 J", "100 J", "0.1 J"],
        correctAnswer: 1, // B (User Key B). Let's calc: Prod(1000) -> Pri(100) -> Sec(10) -> Ter(1). Yes, B. Wait user says B: 1J. Correct.
        explanation: "Apply 10% law: Producers (1000) -> Primary (100) -> Secondary (10) -> Tertiary (1)."
    },
    {
        id: 6,
        section: "Concept Fusion",
        text: "Which of these are density-dependent factors regulating population?\n1. Predation\n2. Competition\n3. Flood\n4. Disease",
        options: ["1, 2, 4", "1, 2, 3", "2, 3, 4", "All"],
        correctAnswer: 0, // A
        explanation: "Predation, Competition, and Disease spread depend on population density. Floods are density-independent (abiotic)."
    },
    {
        id: 7,
        section: "Concept Fusion",
        text: "If immigration > emigration and natality = mortality, the population size will:",
        options: ["Decrease", "Remain Stable", "Increase", "Go Extinct"],
        correctAnswer: 2, // C
        explanation: "Population Change = (Natality + Immigration) - (Mortality + Emigration). If N=M, change depends on I - E. Since I > E, population increases."
    },
    {
        id: 8,
        section: "Concept Fusion",
        text: "Which nutrient cycle lacks a significant gaseous phase?",
        options: ["Nitrogen cycle", "Carbon cycle", "Phosphorus cycle", "Oxygen cycle"],
        correctAnswer: 2, // C
        explanation: "The Phosphorus cycle is a sedimentary cycle with no significant atmospheric component."
    },

    // SECTION B: Data + Numerical Intensive
    {
        id: 9,
        section: "Data & Numerical",
        text: "In a forest ecosystem:\nGPP = 25,000 kcal/m²/yr\nRespiration loss (R) = 10,000 kcal/m²/yr\nWhat does NPP equal?",
        options: ["15,000", "10,000", "35,000", "5,000"],
        correctAnswer: 0, // A
        explanation: "NPP = GPP - R. 25,000 - 10,000 = 15,000 kcal/m²/yr."
    },
    {
        id: 10,
        section: "Data & Numerical",
        text: "If the ecological efficiency of energy transfer becomes 5% instead of the usual 10%, the potential length of the food chain will:",
        options: ["Increase", "Decrease", "Remain same", "Double"],
        correctAnswer: 1, // B
        explanation: "Lower efficiency means less energy reaches higher levels, supporting fewer trophic levels, thus shortening the food chain."
    },
    {
        id: 11,
        section: "Data & Numerical",
        text: "If the Z-value (slope) in a species-area relationship increases (steepens), it indicates:",
        options: ["Lower slope/less diversity change", "Higher endemism / Richness increases faster with area", "Weak relationship", "No change"],
        correctAnswer: 1, // B
        explanation: "A steeper slope (higher Z) means species richness increases more rapidly as area increases, often seen in regions with high endemism (e.g., tropical forests)."
    },
    {
        id: 12,
        section: "Data & Numerical",
        text: "In exponential growth, if the intrinsic rate r = 0.3 and population N = 100, what is the growth rate dN/dt?",
        options: ["30", "100", "0.3", "300"],
        correctAnswer: 0, // A
        explanation: "Exponential growth equation: dN/dt = rN. 0.3 * 100 = 30."
    },
    {
        id: 13,
        section: "Data & Numerical",
        text: "If a population doubles every 5 years regardless of its size, the growth pattern is:",
        options: ["Logistic", "Exponential", "Linear", "Stable"],
        correctAnswer: 1, // B
        explanation: "Constant doubling time is a hallmark of unregulated exponential growth."
    },

    // SECTION C: Multi-Statement Trap
    {
        id: 14,
        section: "Multi-Statement",
        text: "Which statements are correct?\n1. Energy flow is unidirectional\n2. Nutrient cycle is cyclic\n3. Energy pyramid is always upright\n4. Biomass pyramid is always upright",
        options: ["1, 2, 3", "1, 2", "1, 2, 3, 4", "2, 3, 4"],
        correctAnswer: 0, // A
        explanation: "Statements 1, 2, and 3 are correct. Statement 4 is incorrect because aquatic biomass pyramids can be inverted."
    },
    {
        id: 15,
        section: "Multi-Statement",
        text: "The 'Edge Effect' in ecology generally leads to:\n1. Increased biodiversity at the boundary\n2. Increased predation risk\n3. Habitat fragmentation stress",
        options: ["1 only", "1 & 2", "1, 2, & 3", "2 only"],
        correctAnswer: 2, // C
        explanation: "Edge effect increases diversity (ecotone species) but also exposes interior species to predation and fragmentation stress."
    },
    {
        id: 16,
        section: "Multi-Statement",
        text: "During eutrophication of a water body:\n1. Biochemical Oxygen Demand (BOD) increases\n2. Dissolved Oxygen (DO) decreases\n3. Fish mortality increases",
        options: ["1 & 2", "2 & 3", "1, 2, & 3", "1 only"],
        correctAnswer: 2, // C
        explanation: "All consequences are linked: Algal bloom -> Death -> Decomposition (High BOD) -> Oxygen depletion (Low DO) -> Fish death."
    },
    {
        id: 17,
        section: "Multi-Statement",
        text: "To be designated as a Biodiversity Hotspot, a region must have:\n1. High endemism\n2. High threat level\n3. At least 1500 endemic vascular plants",
        options: ["1 & 2", "1 & 3", "1, 2, & 3", "2 & 3"],
        correctAnswer: 2, // C
        explanation: "Myers' criteria include strictly: >1500 endemic vascular plants (Endemism) and >70% habitat loss (Threat)."
    },

    // SECTION D: Case Intensive
    {
        id: 18,
        section: "Case Intensive",
        text: "In an experiment, when a top predator was removed, the prey population initially exploded and then crashed spectacularly. The crash was most likely due to:",
        options: ["Resource depletion / Starvation", "Spontaneous mutation", "Carrying capacity increase", "Migration"],
        correctAnswer: 0, // A
        explanation: "Unchecked growth leads to overshooting carrying capacity, exhausting resources, followed by a population crash."
    },
    {
        id: 19,
        section: "Case Intensive",
        text: "If secondary succession is occurring on abandoned farmland, the pioneer species are most likely:",
        options: ["Lichens", "Mosses", "Grasses/Weeds", "Phytoplankton"],
        correctAnswer: 2, // C
        explanation: "Secondary succession starts where soil exists (e.g., burnt forest, farm). Fast-growing grasses/weeds are typical pioneers here, unlike Lichens (Primary)."
    },
    {
        id: 20,
        section: "Case Intensive",
        text: "Which scenario demonstrates the Principle of Competitive Exclusion being active?",
        options: ["Two species competing for identical niche cannot coexist", "Resource partitioning allowing coexistence", "Mutualism", "Predation controlling prey"],
        correctAnswer: 0, // A
        explanation: "Gause's principle states that complete competitors cannot coexist; one will eventually exclude the other."
    },
    {
        id: 21,
        section: "Case Intensive",
        text: "As the population size N approaches the carrying capacity K, which term in the logistic equation approaches zero?",
        options: ["Intrinsic rate r", "Environmental resistance term (K − N)/K", "Population N", "Growth rate dN/dt"],
        correctAnswer: 1, // B (User Key: B, wait. If N->K, K-N -> 0. so (K-N)/K -> 0. Correct. Resulting in dN/dt -> 0. Option B refers to the term itself.)
        explanation: "The term (K-N)/K represents the unutilized opportunity for growth. As N -> K, this term approaches zero, slowing growth."
    },
    {
        id: 22,
        section: "Case Intensive",
        text: "In a deep ocean ecosystem (hydrothermal vents) where sunlight is absent, the primary producers are:",
        options: ["Algae", "Phytoplankton", "Chemosynthetic bacteria", "Moss"],
        correctAnswer: 2, // C
        explanation: "Without light, photosynthesis is impossible. Producers use chemical energy (chemosynthesis) from vents."
    },

    // SECTION E: Ultra Concept Trap
    {
        id: 23,
        section: "Ultra Concept Trap",
        text: "Biomagnification is strongest (most dangerous) in ecosystems with:",
        options: ["Short food chains", "Long food chains", "Single trophic level", "Producers only"],
        correctAnswer: 1, // B
        explanation: "The concentration of toxins increases at each level. Longer chains mean higher concentration in top predators."
    },
    {
        id: 24,
        section: "Ultra Concept Trap",
        text: "Which ONE factor is the most significant cause of driving animals and plants to extinction ('The Evil Quartet')?",
        options: ["Alien species invasion", "Habitat loss and fragmentation", "Overexploitation", "Coextinction"],
        correctAnswer: 1, // B
        explanation: "Habitat loss and fragmentation is considered the primary driver of biodiversity loss globally."
    },
    {
        id: 25,
        section: "Ultra Concept Trap",
        text: "If global temperatures increase, which ecosystem is ecologically most vulnerable to collapse?",
        options: ["Tropical rainforest", "Coral reefs", "Grassland", "Desert"],
        correctAnswer: 1, // B
        explanation: "Coral reefs are extremely sensitive to temperature changes (bleaching), making them highly vulnerable to warming."
    },
    {
        id: 26,
        section: "Ultra Concept Trap",
        text: "Ecological succession stops when the community reaches:",
        options: ["Pioneer stage", "Climax community", "Secondary stage", "Shrub stage"],
        correctAnswer: 1, // B
        explanation: "Succession proceeds until a stable, equilibrium state called the Climax Community is reached."
    },
    {
        id: 27,
        section: "Ultra Concept Trap",
        text: "Net Ecosystem Productivity (NEP) is positive when:",
        options: ["Respiration > GPP", "GPP > Total ecosystem respiration", "NPP = 0", "Consumers > Producers"],
        correctAnswer: 1, // B
        explanation: "NEP = GPP - (Total Respiration of Producers + Consumers + Decomposers). It's positive if the system is a carbon sink."
    },
    {
        id: 28,
        section: "Ultra Concept Trap",
        text: "Which is a characteristic trait of K-selected species?",
        options: ["High fecundity", "Small body size", "Parental care", "Early maturity"],
        correctAnswer: 2, // C
        explanation: "K-selected species (like humans, elephants) invest in quality over quantity: few offspring, late maturity, high parental care."
    },
    {
        id: 29,
        section: "Ultra Concept Trap",
        text: "The concept of 'Maximum Sustainable Yield' is most closely related to which population growth model?",
        options: ["Carrying capacity (K)", "Logistic growth (at K/2)", "Biodiversity hotspots", "Biomagnification"],
        correctAnswer: 1, // B
        explanation: "Maximum Sustainable Yield occurs where growth rate is highest, which is at N = K/2 in the logistic model."
    },
    {
        id: 30,
        section: "Ultra Concept Trap",
        text: "If allele frequencies fluctuate randomly in a small population simply by chance, this evolutionary force is:",
        options: ["Migration", "Mutation", "Genetic Drift", "Environmental Resistance"],
        correctAnswer: 2, // C
        explanation: "Genetic Drift refers to random fluctuations in allele frequencies, which is most pronounced in small populations."
    }
];

const DURATION_SECONDS = 45 * 60; // 45 Minutes

export default function IntensiveEcologyPage() {
    // --- State ---
    const [status, setStatus] = useState<"intro" | "active" | "result">("intro");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set());
    const [timeLeft, setTimeLeft] = useState(DURATION_SECONDS);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

    // Stats
    const [score, setScore] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    // --- Timer ---
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (status === "active" && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        handleSubmit();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [status, timeLeft]);

    // --- Handlers ---
    const startTest = () => {
        setStatus("active");
        setTimeLeft(DURATION_SECONDS);
        setAnswers({});
        setMarkedForReview(new Set());
        setCurrentQuestionIndex(0);
    };

    const handleAnswer = (optionIdx: number) => {
        setAnswers((prev) => ({
            ...prev,
            [QUESTIONS[currentQuestionIndex].id]: optionIdx,
        }));
    };

    const toggleMarkForReview = () => {
        const qId = QUESTIONS[currentQuestionIndex].id;
        setMarkedForReview((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(qId)) newSet.delete(qId);
            else newSet.add(qId);
            return newSet;
        });
    };

    const handleSubmit = () => {
        let calculatedScore = 0;
        let correctCount = 0;
        let wrongCount = 0;

        QUESTIONS.forEach((q) => {
            const selected = answers[q.id];
            if (selected !== undefined) {
                if (selected === q.correctAnswer) {
                    calculatedScore += 4;
                    correctCount++;
                } else {
                    calculatedScore -= 1;
                    wrongCount++;
                }
            }
        });

        setScore(calculatedScore);
        const attempted = correctCount + wrongCount;
        setAccuracy(attempted > 0 ? Math.round((correctCount / attempted) * 100) : 0);
        setStatus("result");
        setIsSubmitModalOpen(false);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const currentQ = QUESTIONS[currentQuestionIndex];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500/30">
            {/* --- Intro View --- */}
            {status === "intro" && (
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </Link>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10 bg-orange-600 blur-3xl rounded-bl-full w-64 h-64" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-orange-500/10 rounded-2xl text-orange-400">
                                    <Target className="w-10 h-10" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-white">INTENSIVE ECOLOGY SERIES</h1>
                                    <p className="text-slate-400">Concept Fusion • Multi-Statement • Trap Based</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <Clock className="w-6 h-6 text-blue-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">45 Minutes</h3>
                                    <p className="text-sm text-slate-400">Intensive Focus</p>
                                </div>
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <Layers className="w-6 h-6 text-purple-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">30 Questions</h3>
                                    <p className="text-sm text-slate-400">5 High-Density Sections</p>
                                </div>
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <Brain className="w-6 h-6 text-red-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">680+ Level</h3>
                                    <p className="text-sm text-slate-400">Conceptual Elimination Required</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={startTest}
                                    className="flex-1 bg-orange-600 hover:bg-orange-500 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-orange-900/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    Start Intensive Series <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- Active Test View --- */}
            {status === "active" && (
                <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col">
                    <header className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="font-bold text-xl text-white">Intensive Ecology</div>
                            <div className="text-sm text-slate-400 hidden sm:block">Part 1: Ultra Concept</div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className={`flex items-center gap-2 font-mono text-xl font-bold ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-slate-200'}`}>
                                <Clock className="w-5 h-5" />
                                {formatTime(timeLeft)}
                            </div>
                            <button
                                onClick={() => setIsSubmitModalOpen(true)}
                                className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/50 px-6 py-2 rounded-lg font-semibold transition-colors"
                            >
                                Submit
                            </button>
                        </div>
                    </header>

                    <div className="flex-1 flex overflow-hidden">
                        <main className="flex-1 flex flex-col p-4 md:p-6 overflow-y-auto">
                            <div className="max-w-4xl w-full mx-auto">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                                        {currentQ.section}
                                    </span>
                                    <span className="text-slate-500 text-sm">Question {currentQuestionIndex + 1} of {QUESTIONS.length}</span>
                                </div>

                                <h2 className="text-xl md:text-2xl font-medium text-white mb-8 border-l-4 border-orange-500 pl-4 py-1 leading-relaxed">
                                    {currentQ.text.split('\n').map((line, i) => (
                                        <span key={i} className="block mb-2">{line}</span>
                                    ))}
                                </h2>

                                <div className="grid gap-4 mb-8">
                                    {currentQ.options.map((option, idx) => {
                                        const isSelected = answers[currentQ.id] === idx;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => handleAnswer(idx)}
                                                className={`text-left p-4 md:p-6 rounded-xl border-2 transition-all flex items-center gap-4 group ${isSelected
                                                    ? 'border-orange-500 bg-orange-500/10'
                                                    : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-800'
                                                    }`}
                                            >
                                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold border ${isSelected ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-600 text-slate-400 group-hover:border-slate-500'
                                                    }`}>
                                                    {String.fromCharCode(65 + idx)}
                                                </div>
                                                <span className={`text-base md:text-lg ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                                                    {option}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-slate-800 mt-auto">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                                            disabled={currentQuestionIndex === 0}
                                            className="px-6 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-50 flex items-center gap-2"
                                        >
                                            <ChevronLeft className="w-4 h-4" /> <span className="hidden sm:inline">Prev</span>
                                        </button>
                                        <button
                                            onClick={toggleMarkForReview}
                                            className={`px-6 py-2.5 rounded-lg border flex items-center gap-2 transition-colors ${markedForReview.has(currentQ.id)
                                                ? 'border-yellow-500 bg-yellow-500/10 text-yellow-400'
                                                : 'border-slate-700 text-slate-400 hover:bg-slate-800'
                                                }`}
                                        >
                                            <Flag className="w-4 h-4" /> <span className="hidden sm:inline">Review</span>
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setCurrentQuestionIndex(prev => Math.min(QUESTIONS.length - 1, prev + 1))}
                                        disabled={currentQuestionIndex === QUESTIONS.length - 1}
                                        className="px-8 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-lg shadow-orange-900/20 disabled:opacity-50 flex items-center gap-2"
                                    >
                                        <span className="hidden sm:inline">Next</span> <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </main>
                    </div>

                    {isSubmitModalOpen && (
                        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full">
                                <h3 className="text-2xl font-bold text-white mb-4">Submit Intensive Test?</h3>
                                <div className="flex gap-4">
                                    <button onClick={() => setIsSubmitModalOpen(false)} className="flex-1 py-3 rounded-xl border border-slate-600 text-slate-300">Continue</button>
                                    <button onClick={handleSubmit} className="flex-1 py-3 rounded-xl bg-orange-600 text-white font-bold">Submit</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* --- Result View --- */}
            {status === "result" && (
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white">
                            <ArrowLeft className="w-4 h-4" /> Dashboard
                        </Link>
                        <button onClick={startTest} className="px-6 py-2 bg-orange-600 text-white rounded-lg font-medium flex items-center gap-2">
                            <RotateCcw className="w-4 h-4" /> Retake
                        </button>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Test Complete</h2>
                        <p className="text-slate-400 mb-8">Part 1: Ultra Concept + Trap Based</p>

                        <div className="text-5xl font-bold text-white mb-2">{score} <span className="text-2xl text-slate-500">/ 120</span></div>
                        <div className="text-orange-400 font-bold text-xl mb-6">{accuracy}% Accuracy</div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-orange-500" />
                        Deep Analysis & Solutions
                    </h2>

                    <div className="space-y-8">
                        {QUESTIONS.map((q, qIdx) => {
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
                                                <span className="px-2 py-1 rounded bg-slate-800 text-xs font-mono text-slate-400 border border-slate-700">
                                                    {q.section}
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

                                    <div className="bg-orange-950/20 border border-orange-900/30 p-6 rounded-2xl relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
                                        <div className="flex gap-4">
                                            <div className="shrink-0 pt-1">
                                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/20">
                                                    <GraduationCap className="w-6 h-6" />
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-2">Teacher's Explanation</h5>
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

"use client";

import React, { useState, useEffect } from "react";
import {
    ArrowLeft, Clock, AlertCircle, ChevronRight, ChevronLeft, Flag,
    BarChart2, RotateCcw, Brain, Zap, Dna, Leaf
} from "lucide-react";
import Link from "next/link";

// --- Types ---
type QuestionType = "genetics" | "ecology";
type Question = {
    id: number;
    type: QuestionType;
    text: string;
    options: string[];
    correctAnswer: number; // 0-3
    explanation: string;
};

// --- ULTRA HARD SPECIAL SET QUESTIONS ---
const QUESTIONS: Question[] = [
    // SECTION A – GENETICS (Q1–20)
    {
        id: 1,
        type: "genetics",
        text: "In a cross AaBbCc × AaBbCc, probability of getting genotype AABBcc is:",
        options: ["1/64", "1/32", "1/16", "1/8"],
        correctAnswer: 0, // A
        explanation: "Probability of AA = 1/4, BB = 1/4, cc = 1/4. Total = 1/4 * 1/4 * 1/4 = 1/64."
    },
    {
        id: 2,
        type: "genetics",
        text: "If recombination frequency is 20%, genes are:",
        options: ["Completely linked", "20 map units apart", "80 map units apart", "Unlinked"],
        correctAnswer: 1, // B
        explanation: "1% Recombination Frequency = 1 Map Unit (Centimorgan). 20% = 20 MU."
    },
    {
        id: 3,
        type: "genetics",
        text: "A colour blind father and normal mother (carrier) produce daughters. Probability daughter is colour blind?",
        options: ["0%", "25%", "50%", "75%"],
        correctAnswer: 2, // C
        explanation: "Father (XcY), Mother (XcX). Daughters: XcX (Carrier), XcXc (Colour blind). Probability = 1/2 = 50%."
    },
    {
        id: 4,
        type: "genetics",
        text: "In ABO system, number of possible genotypes:",
        options: ["3", "4", "6", "8"],
        correctAnswer: 2, // C
        explanation: "Formula: n(n+1)/2 where n=3 alleles (IA, IB, i). 3(4)/2 = 6."
    },
    {
        id: 5,
        type: "genetics",
        text: "If frequency of recessive phenotype = 0.09, frequency of heterozygotes?",
        options: ["0.18", "0.42", "0.21", "0.49"],
        correctAnswer: 1, // B
        explanation: "q² = 0.09 => q = 0.3. p = 1 - 0.3 = 0.7. Heterozygotes 2pq = 2 * 0.7 * 0.3 = 0.42."
    },
    {
        id: 6,
        type: "genetics",
        text: "Which shows pleiotropy?",
        options: ["Polygenic trait", "Sickle cell anemia", "Incomplete dominance", "Codominance"],
        correctAnswer: 1, // B
        explanation: "Sickle cell anemia gene affects hemoglobin structure, shape of RBC, and susceptibility to malaria (multiple effects)."
    },
    {
        id: 7,
        type: "genetics",
        text: "In test cross, deviation from 1:1:1:1 indicates:",
        options: ["Mutation", "Linkage", "Polyploidy", "Epistasis"],
        correctAnswer: 1, // B
        explanation: "Independent assortment gives 1:1:1:1. Deviation suggests Linkage (parental combinations > recombinants)."
    },
    {
        id: 8,
        type: "genetics",
        text: "Genetic drift strongest in:",
        options: ["Large population", "Small population", "Equal population", "Migrating population"],
        correctAnswer: 1, // B
        explanation: "Genetic drift (random change in allele frequency) is most significant in small populations."
    },
    {
        id: 9,
        type: "genetics",
        text: "Number of gametes from genotype AaBbCCDdEe:",
        options: ["8", "16", "32", "64"],
        correctAnswer: 1, // B
        explanation: "Heterozygous loci: Aa, Bb, Dd, Ee (4). Homozygous: CC. Number of gametes = 2ⁿ = 2⁴ = 16."
    },
    {
        id: 10,
        type: "genetics",
        text: "DNA replication occurs in which phase?",
        options: ["G1", "S", "G2", "M"],
        correctAnswer: 1, // B
        explanation: "DNA replication (Synthesis) occurs exclusively in the S phase of the cell cycle."
    },
    {
        id: 11,
        type: "genetics",
        text: "Which enzyme joins Okazaki fragments?",
        options: ["Ligase", "Helicase", "Polymerase I", "Primase"],
        correctAnswer: 0, // A
        explanation: "DNA Ligase joins the discontinuous Okazaki fragments on the lagging strand."
    },
    {
        id: 12,
        type: "genetics",
        text: "If a gene has 4 alleles in population, max genotypes possible?",
        options: ["4", "10", "8", "16"],
        correctAnswer: 1, // B
        explanation: "Formula n(n+1)/2. 4(5)/2 = 10 genotypes."
    },
    {
        id: 13,
        type: "genetics",
        text: "Which violates Hardy–Weinberg?",
        options: ["Random mating", "No mutation", "Gene flow", "Large population"],
        correctAnswer: 2, // C
        explanation: "Gene flow (migration) introduces/removes alleles, changing frequencies and disturbing equilibrium."
    },
    {
        id: 14,
        type: "genetics",
        text: "Operon is example of:",
        options: ["Negative regulation", "Positive regulation", "Structural gene", "Translation control"],
        correctAnswer: 0, // A
        explanation: "The lac operon is primarily an example of negative regulation (repressor prevents transcription)."
    },
    {
        id: 15,
        type: "genetics",
        text: "Transversion mutation is:",
        options: ["Purine → Purine", "Pyrimidine → Pyrimidine", "Purine → Pyrimidine", "Deletion"],
        correctAnswer: 2, // C
        explanation: "Transversion is the substitution of a Purine by a Pyrimidine or vice versa. (Transition is Purine-Purine)."
    },
    {
        id: 16,
        type: "genetics",
        text: "Number of chromosomes in human secondary oocyte:",
        options: ["46", "23", "23 pairs", "92"],
        correctAnswer: 1, // B
        explanation: "Secondary oocyte is haploid (product of Meiosis I), containing 23 chromosomes (each with 2 chromatids)."
    },
    {
        id: 17,
        type: "genetics",
        text: "In meiosis, crossing over occurs in:",
        options: ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
        correctAnswer: 2, // C
        explanation: "Crossing over (recombination) occurs during the Pachytene stage of Prophase I."
    },
    {
        id: 18,
        type: "genetics",
        text: "Codon AUG codes for:",
        options: ["Stop", "Methionine", "Tryptophan", "Alanine"],
        correctAnswer: 1, // B
        explanation: "AUG is the Start codon and codes for Methionine."
    },
    {
        id: 19,
        type: "genetics",
        text: "Which shows multiple allelism?",
        options: ["Eye colour in Drosophila", "ABO", "Height", "Skin colour"],
        correctAnswer: 1, // B
        explanation: "ABO blood group system is controlled by gene I with 3 alleles: IA, IB, and i."
    },
    {
        id: 20,
        type: "genetics",
        text: "Mutation in germ cells leads to:",
        options: ["Somatic variation", "Heritable variation", "Cancer only", "None"],
        correctAnswer: 1, // B
        explanation: "Germline mutations are passed to the next generation, causing heritable variation."
    },
    // SECTION B – ECOLOGY (Q21–40)
    {
        id: 21,
        type: "ecology",
        text: "Pyramid of energy is always:",
        options: ["Inverted", "Upright", "Spindle", "Diamond"],
        correctAnswer: 1, // B
        explanation: "According to the 10% law, energy decreases at each trophic level, so the pyramid is always upright."
    },
    {
        id: 22,
        type: "ecology",
        text: "10% law given by:",
        options: ["Odum", "Lindeman", "Elton", "Darwin"],
        correctAnswer: 1, // B
        explanation: "Raymond Lindeman (1942) proposed the 10% law of energy transfer."
    },
    {
        id: 23,
        type: "ecology",
        text: "Primary productivity highest in:",
        options: ["Desert", "Tropical rainforest", "Tundra", "Ocean"],
        correctAnswer: 1, // B
        explanation: "Tropical Rainforests have the highest rate of primary productivity due to optimal sunlight and moisture."
    },
    {
        id: 24,
        type: "ecology",
        text: "Species richness highest in:",
        options: ["Poles", "Equator", "Temperate", "Desert"],
        correctAnswer: 1, // B
        explanation: "Biodiversity latitudinal gradient: Species richness increases from Poles towards the Equator."
    },
    {
        id: 25,
        type: "ecology",
        text: "Edge effect refers to:",
        options: ["Increase biodiversity at boundary", "Decrease biodiversity", "Extinction", "Pollution"],
        correctAnswer: 0, // A
        explanation: "Edge effect is the phenomenon of increased variety and density of species at the boundary (ecotone) between two ecosystems."
    },
    {
        id: 26,
        type: "ecology",
        text: "Gause’s principle states:",
        options: ["Coexistence", "Competitive exclusion", "Mutualism", "Predation"],
        correctAnswer: 1, // B
        explanation: "Gause's Competitive Exclusion Principle states that two species competing for the same limiting resources cannot coexist indefinitely."
    },
    {
        id: 27,
        type: "ecology",
        text: "r-selected species show:",
        options: ["Late maturity", "Fewer offspring", "High reproductive rate", "Long lifespan"],
        correctAnswer: 2, // C
        explanation: "r-selected species respond to unstable environments with rapid reproduction (high growth rate r)."
    },
    {
        id: 28,
        type: "ecology",
        text: "Biomagnification mainly affects:",
        options: ["Producers", "Herbivores", "Top carnivores", "Decomposers"],
        correctAnswer: 2, // C
        explanation: "Toxins concentrate at each trophic level, reaching highest concentrations in top carnivores."
    },
    {
        id: 29,
        type: "ecology",
        text: "BOD increases due to:",
        options: ["Clean water", "Organic waste", "Oxygenation", "Less microbes"],
        correctAnswer: 1, // B
        explanation: "High Organic waste supports more decomposers, which consume oxygen, increasing Biological Oxygen Demand."
    },
    {
        id: 30,
        type: "ecology",
        text: "Ozone depletion due to:",
        options: ["CO2", "SO2", "CFC", "CO"],
        correctAnswer: 2, // C
        explanation: "Chlorofluorocarbons (CFCs) release Chlorine atoms in stratosphere which catalyze the breakdown of Ozone."
    },
    {
        id: 31,
        type: "ecology",
        text: "Which is keystone species?",
        options: ["Tiger", "Elephant", "Sea star", "All"],
        correctAnswer: 3, // D
        explanation: "All listed (Tiger, Elephant, Pisaster Sea Star) act as keystone species in their respective ecosystems."
    },
    {
        id: 32,
        type: "ecology",
        text: "Ecotone means:",
        options: ["Desert", "Transition zone", "Grassland", "Tundra"],
        correctAnswer: 1, // B
        explanation: "Ecotone is the transition area between two biological communities (e.g., forest and grassland)."
    },
    {
        id: 33,
        type: "ecology",
        text: "Population density depends on:",
        options: ["Natality", "Mortality", "Immigration", "All"],
        correctAnswer: 3, // D
        explanation: "Population density is affected by Births (Natality), Deaths (Mortality), Immigration, and Emigration."
    },
    {
        id: 34,
        type: "ecology",
        text: "Which curve is logistic growth?",
        options: ["J-shaped", "S-shaped", "Linear", "Exponential"],
        correctAnswer: 1, // B
        explanation: "Logistic growth (Verhulst-Pearl) produces a sigmoid (S-shaped) curve due to limited resources."
    },
    {
        id: 35,
        type: "ecology",
        text: "Carrying capacity denoted by:",
        options: ["r", "K", "N", "B"],
        correctAnswer: 1, // B
        explanation: "K represents Carrying Capacity (maximum population size environment can sustain)."
    },
    {
        id: 36,
        type: "ecology",
        text: "Mutualism example:",
        options: ["Mycorrhiza", "Tapeworm", "Cuscuta", "Tiger-deer"],
        correctAnswer: 0, // A
        explanation: "Mycorrhiza is a mutualistic association between fungi and roots of higher plants. (Others are Parasitism/Predation)."
    },
    {
        id: 37,
        type: "ecology",
        text: "Which cycle has no atmospheric phase?",
        options: ["Carbon", "Nitrogen", "Phosphorus", "Oxygen"],
        correctAnswer: 2, // C
        explanation: "Phosphorus cycle is a sedimentary cycle; it does not have a significant gaseous/atmospheric phase."
    },
    {
        id: 38,
        type: "ecology",
        text: "Hotspots have:",
        options: ["Low diversity", "High endemism", "Low threat", "Arctic species"],
        correctAnswer: 1, // B
        explanation: "Biodiversity Hotspots are characterized by high species richness and high endemism (species found nowhere else)."
    },
    {
        id: 39,
        type: "ecology",
        text: "Secondary succession begins on:",
        options: ["Bare rock", "Lava", "Previously inhabited area", "Water"],
        correctAnswer: 2, // C
        explanation: "Secondary succession occurs in areas where a community previously existed but was destroyed (e.g., burned forest)."
    },
    {
        id: 40,
        type: "ecology",
        text: "NPP equals:",
        options: ["GPP", "GPP – Respiration", "Respiration", "Biomass only"],
        correctAnswer: 1, // B
        explanation: "Net Primary Productivity (NPP) = Gross Primary Productivity (GPP) - Respiration Loss (R)."
    }
];

const DURATION_SECONDS = 60 * 60; // 1 hour

export default function UltraHardTestPage() {
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
    const [subjectAnalysis, setSubjectAnalysis] = useState<any>({});

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
        // Calculate Score
        let calculatedScore = 0;
        let correctCount = 0;
        let wrongCount = 0;

        // Subject-wise breakdown
        const subjectStats: Record<string, { total: number; attempted: number; correct: number; wrong: number; score: number }> = {
            genetics: { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0 },
            ecology: { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0 },
        };

        QUESTIONS.forEach((q) => {
            const selected = answers[q.id];
            const subj = q.type;
            subjectStats[subj].total++;

            if (selected !== undefined) {
                subjectStats[subj].attempted++;
                if (selected === q.correctAnswer) {
                    calculatedScore += 4;
                    correctCount++;
                    subjectStats[subj].correct++;
                    subjectStats[subj].score += 4;
                } else {
                    calculatedScore -= 1;
                    wrongCount++;
                    subjectStats[subj].wrong++;
                    subjectStats[subj].score -= 1;
                }
            }
        });

        setScore(calculatedScore);
        const attempted = correctCount + wrongCount;
        setAccuracy(attempted > 0 ? Math.round((correctCount / attempted) * 100) : 0);
        setSubjectAnalysis(subjectStats);
        setStatus("result");
        setIsSubmitModalOpen(false);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-pink-500/30">
            {/* --- Intro View --- */}
            {status === "intro" && (
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </Link>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10 bg-pink-500 blur-3xl rounded-bl-full w-64 h-64" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-pink-500/10 rounded-2xl text-pink-400">
                                    <Dna className="w-10 h-10" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-white">ULTRA HARD SPECIAL SET</h1>
                                    <p className="text-slate-400">Genetics & Ecology • Topper's Selection</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <Clock className="w-6 h-6 text-blue-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">60 Minutes</h3>
                                    <p className="text-sm text-slate-400">High Speed Accuracy</p>
                                </div>
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <Brain className="w-6 h-6 text-purple-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">40 Questions</h3>
                                    <p className="text-sm text-slate-400">20 Genetics + 20 Ecology</p>
                                </div>
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <AlertCircle className="w-6 h-6 text-red-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">Negative Marking</h3>
                                    <p className="text-sm text-slate-400">+4 Correct, -1 Wrong</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={startTest}
                                    className="flex-1 bg-pink-600 hover:bg-pink-500 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-pink-900/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    Start Challenge <ChevronRight className="w-5 h-5" />
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
                            <div className="font-bold text-xl text-white">Ultra Hard Set</div>
                            <div className="text-sm text-slate-400 hidden sm:block">Q1-20: Genetics | Q21-40: Ecology</div>
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
                                    <span className={`text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full ${QUESTIONS[currentQuestionIndex].type === 'genetics' ? 'bg-purple-400/10 text-purple-400' : 'bg-green-400/10 text-green-400'
                                        }`}>
                                        {QUESTIONS[currentQuestionIndex].type === 'genetics' ? <span className="flex items-center gap-2"><Dna className="w-4 h-4" /> GENETICS</span> : <span className="flex items-center gap-2"><Leaf className="w-4 h-4" /> ECOLOGY</span>}
                                    </span>
                                </div>

                                <h2 className="text-xl md:text-2xl font-medium text-white mb-8 border-l-4 border-pink-500 pl-4 py-1 leading-relaxed">
                                    <span className="text-slate-500 mr-2">Q{QUESTIONS[currentQuestionIndex].id}.</span>
                                    {QUESTIONS[currentQuestionIndex].text}
                                </h2>

                                <div className="grid gap-4 mb-8">
                                    {QUESTIONS[currentQuestionIndex].options.map((option, idx) => {
                                        const isSelected = answers[QUESTIONS[currentQuestionIndex].id] === idx;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => handleAnswer(idx)}
                                                className={`text-left p-4 md:p-6 rounded-xl border-2 transition-all flex items-center gap-4 group ${isSelected
                                                    ? 'border-pink-500 bg-pink-500/10'
                                                    : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-800'
                                                    }`}
                                            >
                                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold border ${isSelected ? 'bg-pink-500 border-pink-500 text-white' : 'border-slate-600 text-slate-400 group-hover:border-slate-500'
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
                                            className={`px-6 py-2.5 rounded-lg border flex items-center gap-2 transition-colors ${markedForReview.has(QUESTIONS[currentQuestionIndex].id)
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
                                        className="px-8 py-2.5 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-lg shadow-lg shadow-pink-900/20 disabled:opacity-50 flex items-center gap-2"
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
                                <h3 className="text-2xl font-bold text-white mb-4">Submit Test?</h3>
                                <div className="flex gap-4">
                                    <button onClick={() => setIsSubmitModalOpen(false)} className="flex-1 py-3 rounded-xl border border-slate-600 text-slate-300">Continue</button>
                                    <button onClick={handleSubmit} className="flex-1 py-3 rounded-xl bg-pink-600 text-white font-bold">Submit</button>
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
                        <button onClick={startTest} className="px-6 py-2 bg-pink-600 text-white rounded-lg font-medium flex items-center gap-2">
                            <RotateCcw className="w-4 h-4" /> Retake
                        </button>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center mb-8">
                        <div className="text-5xl font-bold text-white mb-2">{score} <span className="text-2xl text-slate-400">/ 160</span></div>
                        <div className="text-green-400 font-bold text-xl mb-6">{accuracy}% Accuracy</div>

                        <div className="grid grid-cols-2 gap-4 text-left">
                            {Object.entries(subjectAnalysis).map(([subject, stats]: [string, any]) => (
                                <div key={subject} className="bg-slate-800 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2 uppercase text-xs font-bold text-slate-400">
                                        {subject === 'genetics' ? <Dna className="w-4 h-4" /> : <Leaf className="w-4 h-4" />} {subject}
                                    </div>
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <div className="text-2xl font-bold text-white">{stats.score}</div>
                                            <div className="text-xs text-slate-500">Marks</div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-green-400 text-sm">{stats.correct} Correct</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

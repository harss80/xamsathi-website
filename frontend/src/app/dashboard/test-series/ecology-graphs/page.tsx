"use client";

import React, { useState, useEffect } from "react";
import {
    ArrowLeft, Clock, AlertCircle, ChevronRight, ChevronLeft, Flag,
    RotateCcw, BarChart2, TrendingUp, Activity, PieChart, LineChart,
    CheckCircle2, XCircle, HelpCircle, BookOpen, GraduationCap, Target
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- Types ---
type GraphCase = {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    questions: Question[];
    graphType: "line" | "bar" | "area" | "scatter";
    imagePath: string;
};

type Question = {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number; // 0-3
    explanation: string;
};

// --- DATA: Graph Cases ---
const GRAPH_CASES: GraphCase[] = [
    {
        id: 1,
        title: "Logistic vs Exponential Growth",
        description: "The graph displays two distinct population growth curves over time. Curve A shows a J-shaped trajectory where population size increases rapidly without limit. Curve B shows an S-shaped (Sigmoid) trajectory where the population initially grows, then slows down, and finally reaches a plateau at 500 individuals.",
        icon: TrendingUp,
        graphType: "line",
        imagePath: "/assets/graphs/logistic_exponential.svg",
        questions: [
            {
                id: 1,
                text: "Curve A (J-shaped) represents which type of growth?",
                options: ["Logistic growth", "Exponential growth", "Decline phase", "Zero growth"],
                correctAnswer: 1, // B
                explanation: "A J-shaped curve is characteristic of exponential growth, occurring when resources are unlimited."
            },
            {
                id: 2,
                text: "The plateau reached by Curve B at 500 individuals represents:",
                options: ["Natality rate", "Carrying capacity (K)", "Mutation rate", "Immigration rate"],
                correctAnswer: 1, // B
                explanation: "The plateau in a logistic curve represents the Carrying Capacity (K), the maximum stable population size the environment can support."
            },
            {
                id: 3,
                text: "If K = 500 and current population N = 100, the growth rate (dN/dt) is conceptually:",
                options: ["Minimum", "Maximum/High", "Zero", "Negative"],
                correctAnswer: 1, // B
                explanation: "Growth is fastest when N is far below K (specifically at K/2). At N=100 (which is < K/2=250), growth is accelerating."
            },
            {
                id: 4,
                text: "Environmental resistance (represented by (K-N)/K) increases significantly when:",
                options: ["N is very small", "N approaches K", "N is zero", "K increases"],
                correctAnswer: 1, // B
                explanation: "As N gets closer to K, the term (K-N)/K becomes smaller, effectively slowing down growth due to increased resistance (competition/resources)."
            },
            {
                id: 5,
                text: "The equation representing logistic growth (Curve B) is:",
                options: ["dN/dt = rN", "dN/dt = rN((K-N)/K)", "N = rN", "K = rN"], // Corrected option B to include bracket
                correctAnswer: 1, // B
                explanation: "The Verhulst-Pearl Logistic Growth equation is dN/dt = rN((K-N)/K)."
            }
        ]
    },
    {
        id: 2,
        title: "Species–Area Relationship (Log Scale)",
        description: "A graph is plotted with Log Area on the X-axis and Log Species Richness on the Y-axis. The resulting plot is a straight line with a slope (Z-value) of 0.15.",
        icon: BarChart2,
        graphType: "scatter",
        imagePath: "/assets/graphs/species_area.svg",
        questions: [
            {
                id: 6,
                text: "The relationship described by the straight line on a logarithmic scale is:",
                options: ["Linear on normal scale", "Rectangular hyperbola on normal scale", "Logarithmic on normal scale", "Exponential on normal scale"],
                correctAnswer: 2, // C (Though straight line on log-log is power law S=CA^z. User key says C 'Logarithmic'. Let's stick to key/interpretation of log plot.)
                // Correction: Log-Log plot linear implies Power Law S=CA^z. 
                // User Answer Key: C. Let's provide explanation aligning with log-log linear plot concept.
                explanation: "On a log-log scale, the relationship log S = log C + Z log A is linear. (The original relationship S=CA^Z is a rectangular hyperbola)."
            },
            {
                id: 7,
                text: "The value of Z = 0.15 typically indicates:",
                options: ["Very steep slope (continents)", "Shallow slope typical of small areas", "No relationship", "Rapid extinction"],
                correctAnswer: 1, // B
                explanation: "Z values generally lie between 0.1 to 0.2 for changing species richness across small to medium regions."
            },
            {
                id: 8,
                text: "According to the relationship (Z < 1), if area doubles, species richness will:",
                options: ["Double exactly", "Increase but not double", "Decrease", "Remain same"],
                correctAnswer: 1, // B
                explanation: "Since Z is usually < 1 (0.15 here), the relationship is non-linear. Doubling area increases species, but less than double."
            },
            {
                id: 9,
                text: "In very large areas like entire continents, the Z value typically steepens to:",
                options: ["0.1 – 0.2", "0.6 – 1.2", "0.01", "2.0"],
                correctAnswer: 1, // B
                explanation: "For very large areas (continents), the slope (Z) is steeper, typically ranging from 0.6 to 1.2."
            },
            {
                id: 10,
                text: "The equation for the Species-Area relationship is:",
                options: ["S = CA^Z", "S = rN", "dN/dt", "GPP – R"],
                correctAnswer: 0, // A
                explanation: "The standard equation is S = CA^Z, where S is species richness, A is area, Z is slope, C is Y-intercept."
            }
        ]
    },
    {
        id: 3,
        title: "Pyramid of Energy Flow",
        description: "A bar graph (pyramid) displays the energy content at successive trophic levels: Producers (10,000 kcal), Primary Consumers (1,000 kcal), Secondary Consumers (100 kcal), and Tertiary Consumers (10 kcal).",
        icon: Activity,
        graphType: "bar",
        imagePath: "/assets/graphs/energy_pyramid.svg",
        questions: [
            {
                id: 11,
                text: "This graph directly depicts which ecological law?",
                options: ["Competitive exclusion", "Lindeman's 10% Law", "Hardy–Weinberg Principle", "Logistic growth model"],
                correctAnswer: 1, // B
                explanation: "Trace the energy: 10000 -> 1000 -> 100 -> 10. Exactly 10% is transferred to each subsequent level."
            },
            {
                id: 12,
                text: "The 90% energy loss at each step mainly occurs as:",
                options: ["Biomass accumulation", "Heat (Respiration/Metabolism)", "Nitrogen waste", "Genetic mutation"],
                correctAnswer: 1, // B
                explanation: "Most energy is lost to the environment as heat due to respiration and metabolic activities."
            },
            {
                id: 13,
                text: "If Producers increase their energy capture to 20,000 kcal, Primary Consumers would theoretically have:",
                options: ["2,000 kcal", "5,000 kcal", "10,000 kcal", "1,000 kcal"],
                correctAnswer: 0, // A
                explanation: "Applying the 10% law: 10% of 20,000 kcal = 2,000 kcal."
            },
            {
                id: 14,
                text: "Unlike biomass or number pyramids, the Pyramid of Energy is ALWAYS:",
                options: ["Inverted", "Upright", "Spindle-shaped", "Variable"],
                correctAnswer: 1, // B
                explanation: "Energy flow is unidirectional and loss occurs at every step, so the pyramid is always upright."
            },
            {
                id: 15,
                text: "Net Primary Productivity (NPP), available to the next level, is defined as:",
                options: ["Total solar energy", "GPP – Respiration", "Respiration only", "Energy lost as heat"],
                correctAnswer: 1, // B
                explanation: "NPP = Gross Primary Productivity (GPP) minus Respiration loss (R)."
            }
        ]
    },
    {
        id: 4,
        title: "Dissolved Oxygen (DO) vs Pollution",
        description: "A line graph plots two variables downstream from a sewage discharge point. As the concentration of organic waste increases, the Dissolved Oxygen (DO) curve drops sharply, while the Biochemical Oxygen Demand (BOD) curve rises to a peak.",
        icon: LineChart,
        graphType: "line",
        imagePath: "/assets/graphs/do_bod.svg",
        questions: [
            {
                id: 16,
                text: "A high peak in the BOD curve indicates:",
                options: ["Very clean water", "High dissolved oxygen", "High microbial decomposition activity", "Low nutrient content"],
                correctAnswer: 2, // C
                explanation: "High BOD means microorganisms are consuming vast amounts of oxygen to break down organic matter."
            },
            {
                id: 17,
                text: "The point of minimum Dissolved Oxygen (DO) usually coincides with:",
                options: ["Rapid fish growth", "Fish mortality", "Algal death only", "Clear water"],
                correctAnswer: 1, // B
                explanation: "When DO drops below critical levels (hypoxia), aquatic organisms like fish asphyxiate and die."
            },
            {
                id: 18,
                text: "This condition (high nutrient/waste load) typically results in:",
                options: ["Oligotrophic lake", "Eutrophic lake", "Desertification", "Glacial formation"],
                correctAnswer: 1, // B
                explanation: "Nutrient enrichment leading to high biological productivity (and potential hypoxia) defines Eutrophication."
            },
            {
                id: 19,
                text: "The primary cause of the sharp drop in Dissolved Oxygen is:",
                options: ["Increased photosynthesis", "Microbial Decomposition consuming O2", "Nitrogen fixation", "Decreased respiration"],
                correctAnswer: 1, // B
                explanation: "Aerobic bacteria decompose the organic waste, using up the dissolved oxygen in the process."
            },
            {
                id: 20,
                text: "If sewage treatment is improved (reducing organic load), the BOD of the discharge will:",
                options: ["Increase", "Decrease", "Remain same", "Double"],
                correctAnswer: 1, // B
                explanation: "Effective treatment removes organic matter, thereby lowering the oxygen demand (BOD) of the effluent."
            }
        ]
    },
    {
        id: 5,
        title: "Predator–Prey Oscillation Cycles",
        description: "A temporal graph shows cyclic fluctuations in the populations of Hare (Prey) and Lynx (Predator). The Prey population peak is consistently followed by a Predator population peak after a lag period.",
        icon: Activity,
        graphType: "line",
        imagePath: "/assets/graphs/predator_prey.svg",
        questions: [
            {
                id: 21,
                text: "This classic interaction graph represents:",
                options: ["Mutualism", "Parasitism", "Predation", "Commensalism"],
                correctAnswer: 2, // C
                explanation: "The coupled oscillation with a lag phase is the hallmark of Predator-Prey dynamics (Lotka-Volterra)."
            },
            {
                id: 22,
                text: "Why does the Predator peak typically follow the Prey peak?",
                options: ["Predator eats plants", "Abundant prey increases predator survival/reproduction", "Random mutation", "Migration patterns"],
                correctAnswer: 1, // B
                explanation: "More prey (food) allows the predator population to grow; this takes time (gestation/maturation), causing the lag."
            },
            {
                id: 23,
                text: "If the Prey population drastically decreases (e.g., disease), the Predator population will subsequently:",
                options: ["Increase", "Remain same", "Decrease", "Switch to being producers"],
                correctAnswer: 2, // C
                explanation: "With food scarcity, the predator population will decline due to starvation and reduced reproduction."
            },
            {
                id: 24,
                text: "This population control pattern is an example of:",
                options: ["Density-independent factor", "Density-dependent regulation", "Genetic drift", "Hardy–Weinberg equilibrium"],
                correctAnswer: 1, // B
                explanation: "Available food (prey) and predation pressure are density-dependent factors regulating population size."
            },
            {
                id: 25,
                text: "If the Predator is completely removed, the Prey population will initially:",
                options: ["Decrease", "Stabilise immediately", "Increase rapidly (explode)", "Go extinct"],
                correctAnswer: 2, // C
                explanation: "Released from predation pressure, the prey population will grow rapidly (exponentially) until another factor limits it."
            }
        ]
    }
];

const DURATION_SECONDS = 40 * 60; // 40 Minutes

export default function GraphInterpretationTestPage() {
    // --- State ---
    const [status, setStatus] = useState<"intro" | "active" | "result">("intro");
    const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
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
        setCurrentCaseIndex(0);
    };

    const handleAnswer = (qId: number, optionIdx: number) => {
        setAnswers((prev) => {
            const current = prev[qId];
            if (current === optionIdx) {
                const next = { ...prev };
                delete next[qId];
                return next;
            }
            return {
                ...prev,
                [qId]: optionIdx,
            };
        });
    };

    const toggleMarkForReview = (qId: number) => {
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

        GRAPH_CASES.forEach(cs => {
            cs.questions.forEach(q => {
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
        });

        setScore(calculatedScore);
        const totalAttempted = correctCount + wrongCount;
        setAccuracy(totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0);
        setStatus("result");
        setIsSubmitModalOpen(false);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const currentCase = GRAPH_CASES[currentCaseIndex];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
            {/* --- Intro View --- */}
            {status === "intro" && (
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </Link>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10 bg-blue-500 blur-3xl rounded-bl-full w-64 h-64" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400">
                                    <BarChart2 className="w-10 h-10" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-white">DATA INTERPRETATION - GRAPHS</h1>
                                    <p className="text-slate-400">New NEET Pattern • Graph Based Ecology</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <Clock className="w-6 h-6 text-blue-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">40 Minutes</h3>
                                    <p className="text-sm text-slate-400">~8m per Graph Case</p>
                                </div>
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <PieChart className="w-6 h-6 text-purple-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">5 Graph Cases</h3>
                                    <p className="text-sm text-slate-400">5 Questions Each (Total 25)</p>
                                </div>
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <Activity className="w-6 h-6 text-green-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">Analysis Focus</h3>
                                    <p className="text-sm text-slate-400">Interpret, Analyze, Eliminate</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={startTest}
                                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    Start Graph Test <ChevronRight className="w-5 h-5" />
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
                            <div className="font-bold text-xl text-white">Ecology Graphs</div>
                            <div className="hidden md:flex gap-2">
                                {GRAPH_CASES.map((_, idx) => (
                                    <div key={idx} className={`h-2 w-8 rounded-full ${idx === currentCaseIndex ? 'bg-blue-500' : (idx < currentCaseIndex ? 'bg-blue-900' : 'bg-slate-800')}`} />
                                ))}
                            </div>
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
                        {/* Left: Graph Case Description (simulated) */}
                        <div className="hidden lg:flex w-1/3 bg-slate-900/50 border-r border-slate-800 overflow-y-auto p-8 flex-col">
                            <div className="flex items-center gap-3 text-blue-400 mb-6">
                                <currentCase.icon className="w-8 h-8" />
                                <h2 className="text-xl font-bold">Graph Case {currentCase.id}</h2>
                            </div>
                            <h3 className="text-2xl text-white font-bold mb-4">{currentCase.title}</h3>

                            {/* Simulated Graph Placeholder */}
                            {/* Actual Graph Image */}
                            <div className="w-full aspect-video bg-white rounded-xl mb-6 border border-slate-700 relative overflow-hidden group">
                                <Image
                                    src={currentCase.imagePath}
                                    alt={currentCase.title}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>

                            <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed font-serif">
                                <p className="border-l-4 border-blue-500 pl-4">{currentCase.description}</p>
                            </div>
                        </div>

                        {/* Right: Questions */}
                        <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar">
                            {/* Mobile Graph Case (Collapsible/Fixed) */}
                            <div className="lg:hidden p-4 bg-slate-900 border-b border-slate-800">
                                <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                                    <BarChart2 className="w-4 h-4" /> Graph {currentCase.id}: {currentCase.title}
                                </h3>
                                <div className="w-full aspect-video bg-white rounded-lg mb-4 relative overflow-hidden border border-slate-700">
                                    <Image
                                        src={currentCase.imagePath}
                                        alt={currentCase.title}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-blue-500 pl-3">{currentCase.description}</p>
                            </div>

                            <div className="p-4 md:p-8 max-w-4xl mx-auto w-full">
                                {currentCase.questions.map((q, idx) => (
                                    <div key={q.id} className="mb-12 last:mb-0">
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="text-lg md:text-xl font-medium text-white flex gap-3">
                                                <span className="text-slate-500 font-mono">Q{q.id}.</span>
                                                {q.text}
                                            </h4>
                                            <button
                                                onClick={() => toggleMarkForReview(q.id)}
                                                className={`shrink-0 ml-4 p-2 rounded-lg transition-colors ${markedForReview.has(q.id) ? 'text-yellow-400 bg-yellow-400/10' : 'text-slate-600 hover:bg-slate-800'}`}
                                            >
                                                <Flag className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="grid gap-3 pl-0 md:pl-8">
                                            {q.options.map((option, optIdx) => {
                                                const isSelected = answers[q.id] === optIdx;
                                                return (
                                                    <button
                                                        key={optIdx}
                                                        onClick={() => handleAnswer(q.id, optIdx)}
                                                        className={`text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${isSelected
                                                            ? 'border-blue-500 bg-blue-500/10 text-white'
                                                            : 'border-slate-800 bg-slate-900/30 text-slate-400 hover:bg-slate-800'
                                                            }`}
                                                    >
                                                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-600'}`}>
                                                            {String.fromCharCode(65 + optIdx)}
                                                        </div>
                                                        <span>{option}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}

                                <div className="flex justify-between mt-12 pt-8 border-t border-slate-800">
                                    <button
                                        onClick={() => setCurrentCaseIndex(prev => Math.max(0, prev - 1))}
                                        disabled={currentCaseIndex === 0}
                                        className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-50 flex items-center gap-2"
                                    >
                                        <ChevronLeft className="w-5 h-5" /> <span className="hidden sm:inline">Previous Graph</span>
                                    </button>

                                    {currentCaseIndex < GRAPH_CASES.length - 1 ? (
                                        <button
                                            onClick={() => {
                                                setCurrentCaseIndex(prev => prev + 1);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 flex items-center gap-2"
                                        >
                                            <span className="hidden sm:inline">Next Graph</span> <ChevronRight className="w-5 h-5" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => setIsSubmitModalOpen(true)}
                                            className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-lg shadow-red-900/20 flex items-center gap-2"
                                        >
                                            Finish Test <Flag className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </main>
                    </div>

                    {isSubmitModalOpen && (
                        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full">
                                <h3 className="text-2xl font-bold text-white mb-4">Submit Graph Test?</h3>
                                <div className="space-y-4 mb-6">
                                    <p className="text-slate-400">You have attempted <span className="text-white font-bold">{Object.keys(answers).length}</span> out of <span className="text-white font-bold">25</span> questions.</p>
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => setIsSubmitModalOpen(false)} className="flex-1 py-3 rounded-xl border border-slate-600 text-slate-300">Continue</button>
                                    <button onClick={handleSubmit} className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-bold">Submit</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* --- Result View --- */}
            {status === "result" && (
                <div className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in duration-500">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                        </Link>
                        <button
                            onClick={startTest}
                            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium flex items-center gap-2 border border-slate-700 transition-all"
                        >
                            <RotateCcw className="w-4 h-4" /> Retake Test
                        </button>
                    </div>

                    {/* Score Summary Card */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 bg-blue-500 blur-3xl rounded-full w-48 h-48 group-hover:opacity-20 transition-opacity" />
                            <h2 className="text-slate-400 font-medium mb-1">Your Performance</h2>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-5xl font-bold text-white">{score}</span>
                                <span className="text-xl text-slate-500">/ 100</span>
                            </div>
                            <div className="flex gap-2 mb-6">
                                <span className={`px-3 py-1 rounded-full text-sm font-bold border ${score >= 80 ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : score >= 50 ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                                    {score >= 80 ? 'Excellent' : score >= 50 ? 'Good Effort' : 'Needs Improvement'}
                                </span>
                            </div>
                            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full ${score >= 50 ? 'bg-blue-500' : 'bg-red-500'} transition-all duration-1000`}
                                    style={{ width: `${Math.max(5, score)}%` }}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-center items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-bold text-white">{accuracy}%</div>
                                <div className="text-sm text-slate-400">Accuracy</div>
                            </div>
                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col justify-center items-center">
                                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-2">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-bold text-white">
                                    {Object.keys(answers).filter(qId => {
                                        let isCorrect = false;
                                        GRAPH_CASES.forEach(cs => cs.questions.forEach(q => { if (q.id === Number(qId) && answers[Number(qId)] === q.correctAnswer) isCorrect = true; }));
                                        return isCorrect;
                                    }).length}
                                    <span className="text-lg text-slate-500">/25</span>
                                </div>
                                <div className="text-sm text-slate-400">Correct Answers</div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-blue-500" />
                        Deep Analysis & Solutions
                    </h2>

                    <div className="space-y-12">
                        {GRAPH_CASES.map((caseStudy) => (
                            <div key={caseStudy.id} className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden">
                                <div className="p-6 md:p-8 bg-slate-900 border-b border-slate-800">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-slate-800 rounded-lg text-blue-400">
                                            <caseStudy.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Graph Case {caseStudy.id}: {caseStudy.title}</h3>
                                    </div>

                                    {/* Graph Image Display for Review */}
                                    <div className="mb-6 bg-white rounded-xl p-4 w-full max-w-2xl mx-auto border border-slate-700">
                                        <div className="relative aspect-video w-full overflow-hidden">
                                            <Image
                                                src={caseStudy.imagePath}
                                                alt={caseStudy.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="prose prose-invert prose-sm max-w-none text-slate-400 bg-slate-950/50 p-6 rounded-xl border border-slate-800/50">
                                        <p>{caseStudy.description}</p>
                                    </div>
                                </div>

                                <div className="divide-y divide-slate-800">
                                    {caseStudy.questions.map((q, qIdx) => {
                                        const userAnsIdx = answers[q.id];
                                        const isCorrect = userAnsIdx === q.correctAnswer;
                                        const isSkipped = userAnsIdx === undefined;
                                        const statusColor = isCorrect ? 'text-green-400' : isSkipped ? 'text-yellow-400' : 'text-red-400';
                                        const StatusIcon = isCorrect ? CheckCircle2 : isSkipped ? HelpCircle : XCircle;

                                        return (
                                            <div key={q.id} className="p-6 md:p-8 hover:bg-slate-800/30 transition-colors">
                                                <div className="flex items-start justify-between gap-4 mb-6">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <span className="px-2 py-1 rounded bg-slate-800 text-xs font-mono text-slate-400 border border-slate-700">Q{qIdx + 1}</span>
                                                            <span className={`text-sm font-bold flex items-center gap-1 ${statusColor}`}>
                                                                <StatusIcon className="w-4 h-4" />
                                                                {isCorrect ? 'Correct' : isSkipped ? 'Not Attempted' : 'Incorrect'}
                                                            </span>
                                                        </div>
                                                        <h4 className="text-lg font-medium text-white">{q.text}</h4>
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

                                                <div className="bg-blue-950/20 border border-blue-900/30 p-6 rounded-2xl relative overflow-hidden">
                                                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                                                    <div className="flex gap-4">
                                                        <div className="shrink-0 pt-1">
                                                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                                                                <GraduationCap className="w-6 h-6" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h5 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">Teacher's Explanation</h5>
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
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

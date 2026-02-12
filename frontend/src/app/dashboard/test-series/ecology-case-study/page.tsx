"use client";

import React, { useState, useEffect } from "react";
import {
    ArrowLeft, Clock, AlertCircle, ChevronRight, ChevronLeft, Flag,
    BarChart2, RotateCcw, Microscope, Leaf, FileText, Droplets
} from "lucide-react";
import Link from "next/link";

// --- Types ---
type CaseStudy = {
    id: number;
    title: string;
    scenario: string;
    icon: React.ElementType;
    questions: Question[];
};

type Question = {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number; // 0-3
    explanation: string;
};

// --- DATA: Case Studies ---
const CASE_STUDIES: CaseStudy[] = [
    {
        id: 1,
        title: "Eutrophication & Lake Ecosystem",
        scenario: "A freshwater lake near an urban settlement began receiving untreated sewage effluent. Over a period of five years, residents noticed significant changes: water clarity decreased due to massive algal blooms, foul odors emerged during summers, and mass fish mortality events became frequent. Analysis of the lake sediment revealed a shift towards dominance by anaerobic bacteria.",
        icon: Droplets,
        questions: [
            {
                id: 1,
                text: "The primary driver for the excessive algal growth described is an increase in:",
                options: ["Heavy metal accumulation", "Thermal pollution", "Nutrient enrichment (N & P)", "Ozone depletion"],
                correctAnswer: 2, // C
                explanation: "Nutrient enrichment (Nitrates and Phosphates) from sewage stimulates rapid algal growth, a process known as cultural eutrophication."
            },
            {
                id: 2,
                text: "The specific biological process leading to the lake's degradation is termed:",
                options: ["Biomagnification", "Eutrophication", "Hydrarch Succession", "Desertification"],
                correctAnswer: 1, // B
                explanation: "Eutrophication refers to the natural or artificial enrichment of a water body with nutrients, leading to algal blooms and subsequent oxygen depletion."
            },
            {
                id: 3,
                text: "The sharp decrease in dissolved oxygen (DO) responsible for fish mortality is primarily caused by:",
                options: ["Cessation of photosynthesis", "Microbial decomposition of dead algae", "Excessive oxygen consumption by fish", "Drop in water temperature"],
                correctAnswer: 1, // B
                explanation: "When the massive algal blooms die, decomposers (bacteria) consume vast amounts of oxygen to break down the organic matter, creating hypoxic conditions."
            },
            {
                id: 4,
                text: "The dominance of anaerobic bacteria in the sediment indicates which condition?",
                options: ["Oligotrophic state", "Mesotrophic state", "Severe Hypoxic/Anoxic condition", "High primary productivity"],
                correctAnswer: 2, // C
                explanation: "Anaerobe dominance signals a lack of oxygen (hypoxia/anoxia) in the benthic zone due to high BOD."
            },
            {
                id: 5,
                text: "The Biochemical Oxygen Demand (BOD) of this lake water would be:",
                options: ["Extremely Low", "Zero", "Significantly High", "Constant"],
                correctAnswer: 2, // C
                explanation: " polluted water with high organic matter load has a very high BOD, as microbes need more oxygen to degrade the waste."
            }
        ]
    },
    {
        id: 2,
        title: "Island Biogeography",
        scenario: "A newly formed volcanic island, initially devoid of life, was gradually colonised by wind-blown seeds, rafting insects, and migratory birds. Ecologists monitored the island for decades. They observed that species richness increased rapidly at first but eventually stabilised at a dynamic equilibrium.",
        icon: Leaf,
        questions: [
            {
                id: 6,
                text: "According to the Theory of Island Biogeography, the stabilisation of species number represents a balance between:",
                options: ["Natality & Mortality", "Immigration & Extinction rates", "Mutation & Genetic Drift", "Photosynthesis & Respiration"],
                correctAnswer: 1, // B
                explanation: "MacArthur and Wilson proposed that species richness equilibrium is reached when the rate of immigration of new species equals the rate of extinction of existing ones."
            },
            {
                id: 7,
                text: "Based on this theory, species richness would be predicted to be HIGHEST on an island that is:",
                options: ["Small and Distant from mainland", "Large and Near the mainland", "Small and Near the mainland", "Large and Distant from mainland"],
                correctAnswer: 1, // B
                explanation: "Large islands support more species (lower extinction, more niches) and being near the mainland allows higher immigration rates."
            },
            {
                id: 8,
                text: "This foundational ecological concept was proposed by:",
                options: ["Charles Darwin", "Charles Elton", "MacArthur & Wilson", "Eugene Odum"],
                correctAnswer: 2, // C
                explanation: "Robert MacArthur and E.O. Wilson proposed the Equilibrium Theory of Island Biogeography."
            },
            {
                id: 9,
                text: "If a geological event reduced the island's size significantly, the extinction rate would likely:",
                options: ["Decrease", "Increase", "Remain constant", "Stop completely"],
                correctAnswer: 1, // B
                explanation: "Smaller areas support smaller populations, which are more vulnerable to stochastic events, thus increasing extinction rates."
            },
            {
                id: 10,
                text: "The initial colonisation of the bare volcanic rock is a classic example of:",
                options: ["Secondary Succession", "Primary Succession", "Tertiary Succession", "Ecological Retrogression"],
                correctAnswer: 1, // B
                explanation: "Primary succession occurs on surfaces where no soil exists, such as bare volcanic rock."
            }
        ]
    },
    {
        id: 3,
        title: "Population Growth Models",
        scenario: "Ecologists tracked a deer population introduced into a protected forest reserve. Initially, with abundant resources and no immediate predators, the population exploded. However, as numbers rose, food became scarce and predator encounters increased, causing the growth rate to slow and eventually plateau.",
        icon: BarChart2,
        questions: [
            {
                id: 11,
                text: "The initial rapid growth phase of the deer population best resembles which curve?",
                options: ["Logistic", "S-shaped", "J-shaped (Exponential)", "Linear"],
                correctAnswer: 2, // C
                explanation: "With unlimited resources initially, the population exhibits exponential growth (J-shaped curve) before resistance sets in."
            },
            {
                id: 12,
                text: "The plateau phase where the population stabilizes represents the:",
                options: ["Intrinsic rate of increase (r)", "Carrying Capacity (K)", "Biotic Potential", "Gross Primary Productivity"],
                correctAnswer: 1, // B
                explanation: "Carrying Capacity (K) is the maximum population size the environment can sustain indefinitely."
            },
            {
                id: 13,
                text: "The equation dN/dt = rN describes growth during which phase?",
                options: ["Lag phase", "Exponential/Log phase", "Deceleration phase", "Stationary phase"],
                correctAnswer: 1, // B
                explanation: "dN/dt = rN represents exponential growth, occurring when resources are unlimited (early phase)."
            },
            {
                id: 14,
                text: "In the logistic growth equation dN/dt = rN((K-N)/K), the term ((K-N)/K) represents:",
                options: ["Biotic Potential", "Environmental Resistance", "Immigration Rate", "Mutation Pressure"],
                correctAnswer: 1, // B
                explanation: "This term represents the environmental resistance that slows growth as N approaches K."
            },
            {
                id: 15,
                text: "If a new predator is introduced, significantly increasing predation pressure, the Carrying Capacity (K) for deer will effectively:",
                options: ["Increase", "Decrease", "Remain exactly same", "Double"],
                correctAnswer: 1, // B
                explanation: "Increased predation acts as an environmental resistance, effectively lowering the maximum population size (K) the environment supports."
            }
        ]
    },
    {
        id: 4,
        title: "Biomagnification in Food Chains",
        scenario: "Farmers used a persistent pesticide (DDT) to control pests in agricultural fields. Runoff carried the chemical into a nearby wetland. Tests showed the pesticide concentration was 0.003 ppb in water, but found to be 25 ppm in the tissues of fish-eating birds inhabiting the wetland.",
        icon: Microscope,
        questions: [
            {
                id: 16,
                text: "The phenomenon describing the increasing concentration of the toxicant at successive trophic levels is:",
                options: ["Bioaccumulation", "Biomagnification", "Eutrophication", "Ecological Succession"],
                correctAnswer: 1, // B
                explanation: "Biomagnification is the increase in concentration of a toxic substance at successively higher trophic levels."
            },
            {
                id: 17,
                text: "Which trophic level usually accumulates the highest concentration of such toxins?",
                options: ["Primary Producers (Phytoplankton)", "Primary Consumers (Zooplankton)", "Secondary Consumers (Small Fish)", "Top Carnivores (Birds)"],
                correctAnswer: 3, // D
                explanation: "Top carnivores are at the end of the food chain and accumulate the highest accumulated dose."
            },
            {
                id: 18,
                text: "Chemicals prone to biomagnification typically possess which property?",
                options: ["Biodegradable & unstable", "Water soluble & excreted easily", "Non-biodegradable & lipid soluble", "Volatile & gaseous"],
                correctAnswer: 2, // C
                explanation: "They must be persistent (non-biodegradable) and fat-soluble (lipophilic) so they are stored in tissues rather than excreted."
            },
            {
                id: 19,
                text: "A classic and historically significant example of such a pesticide is:",
                options: ["Urea", "DDT (Dichloro-diphenyl-trichloroethane)", "NPK Fertilizer", "Bt Toxin"],
                correctAnswer: 1, // B
                explanation: "DDT is the textbook example of biomagnification, leading to decline in bird populations."
            },
            {
                id: 20,
                text: "The high concentration of DDT in birds specifically caused:",
                options: ["Increased reproductive fertility", "Thickening of eggshells", "Thinning of eggshells & premature breaking", "Enhanced immune response"],
                correctAnswer: 2, // C
                explanation: "DDT interferes with calcium metabolism in birds, causing eggshell thinning and reproductive failure."
            }
        ]
    },
    {
        id: 5,
        title: "Biodiversity Conservation Strategies",
        scenario: "The Western Ghats of India is a region known for its exceptional biodiversity and high degree of endemism. However, it faces severe threats from habitat loss. To protect it, it has been designated as a 'Biodiversity Hotspot', and various conservation measures have been implemented.",
        icon: Leaf,
        questions: [
            {
                id: 21,
                text: "Which of the following is a strict criterion for declaring a region a Biodiversity Hotspot?",
                options: ["At least 1500 endemic vascular plant species", "Presence of 500 endemic animal species", "At least 1000 mammal species", "Presence of 200 bird species"],
                correctAnswer: 0, // A
                explanation: "Norman Myers defined hotspots as having at least 1500 vascular plants as endemics (>0.5% of world's total) and >70% habitat loss."
            },
            {
                id: 22,
                text: "Establishing a National Park in the Western Ghats is an example of which conservation strategy?",
                options: ["Ex-situ conservation", "In-situ conservation", "Gene Bank preservation", "Cryopreservation"],
                correctAnswer: 1, // B
                explanation: "In-situ (on-site) conservation preserves species in their natural habitat (e.g., National Parks, Sanctuaries)."
            },
            {
                id: 23,
                text: "Sacred Groves, protected by local communities due to religious beliefs, are a form of:",
                options: ["Ex-situ conservation", "In-situ conservation", "In-vitro fertilization", "Cryopreservation"],
                correctAnswer: 1, // B
                explanation: "Sacred groves protect patches of forest in their natural state, hence are in-situ conservation."
            },
            {
                id: 24,
                text: "Globally, species diversity generally follows a latitudinal gradient, increasing as we move:",
                options: ["From Equator towards Poles", "From Poles towards Equator", "From Plains to Mountain peaks", "From Forests to Deserts"],
                correctAnswer: 1, // B
                explanation: "Biodiversity is generally highest at the Equator (tropics) and decreases towards the Poles."
            },
            {
                id: 25,
                text: "For a wide variety of taxa, the Species-Area relationship on a logarithmic scale is:",
                options: ["A Linear straight line", "A Rectangular Hyperbola", "A Sigmoid Curve", "A Bell-shaped curve"],
                correctAnswer: 0, // A
                explanation: "On a logarithmic scale (log S = log C + Z log A), the relationship is a straight line."
            }
        ]
    }
];

const DURATION_SECONDS = 45 * 60; // 45 Minutes

export default function CaseStudyTestPage() {
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
        setAnswers((prev) => ({
            ...prev,
            [qId]: optionIdx,
        }));
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

        CASE_STUDIES.forEach(cs => {
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

    const currentCase = CASE_STUDIES[currentCaseIndex];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30">
            {/* --- Intro View --- */}
            {status === "intro" && (
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </Link>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10 bg-emerald-500 blur-3xl rounded-bl-full w-64 h-64" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400">
                                    <FileText className="w-10 h-10" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-white">CASE-STUDY ECOLOGY SET</h1>
                                    <p className="text-slate-400">New NEET Pattern • Concept Application</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <Clock className="w-6 h-6 text-blue-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">45 Minutes</h3>
                                    <p className="text-sm text-slate-400">Time per Case Study ~9m</p>
                                </div>
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <Microscope className="w-6 h-6 text-purple-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">5 Case Studies</h3>
                                    <p className="text-sm text-slate-400">5 Questions Each (Total 25)</p>
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
                                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-emerald-900/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    Start Case Studies <ChevronRight className="w-5 h-5" />
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
                            <div className="font-bold text-xl text-white">Ecology Case Studies</div>
                            <div className="hidden md:flex gap-2">
                                {CASE_STUDIES.map((_, idx) => (
                                    <div key={idx} className={`h-2 w-8 rounded-full ${idx === currentCaseIndex ? 'bg-emerald-500' : (idx < currentCaseIndex ? 'bg-emerald-900' : 'bg-slate-800')}`} />
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
                        {/* Left: Case Study Text */}
                        <div className="hidden lg:flex w-1/3 bg-slate-900/50 border-r border-slate-800 overflow-y-auto p-8 flex-col">
                            <div className="flex items-center gap-3 text-emerald-400 mb-6">
                                <currentCase.icon className="w-8 h-8" />
                                <h2 className="text-xl font-bold">Case Study {currentCase.id}</h2>
                            </div>
                            <h3 className="text-2xl text-white font-bold mb-4">{currentCase.title}</h3>
                            <div className="prose prose-invert prose-lg text-slate-300 leading-relaxed font-serif">
                                <p>{currentCase.scenario}</p>
                            </div>
                        </div>

                        {/* Right: Questions */}
                        <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar">
                            {/* Mobile Case Study (Collapsible/Fixed) */}
                            <div className="lg:hidden p-4 bg-slate-900 border-b border-slate-800">
                                <h3 className="text-emerald-400 font-bold mb-2">Case Study {currentCase.id}: {currentCase.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{currentCase.scenario}</p>
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
                                                                ? 'border-emerald-500 bg-emerald-500/10 text-white'
                                                                : 'border-slate-800 bg-slate-900/30 text-slate-400 hover:bg-slate-800'
                                                            }`}
                                                    >
                                                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs ${isSelected ? 'border-emerald-500 bg-emerald-500' : 'border-slate-600'}`}>
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
                                        <ChevronLeft className="w-5 h-5" /> Previous Case
                                    </button>

                                    {currentCaseIndex < CASE_STUDIES.length - 1 ? (
                                        <button
                                            onClick={() => {
                                                setCurrentCaseIndex(prev => prev + 1);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20 flex items-center gap-2"
                                        >
                                            Next Case Study <ChevronRight className="w-5 h-5" />
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
                                <h3 className="text-2xl font-bold text-white mb-4">Submit Ecology Test?</h3>
                                <div className="space-y-4 mb-6">
                                    <p className="text-slate-400">You have attempted <span className="text-white font-bold">{Object.keys(answers).length}</span> out of <span className="text-white font-bold">25</span> questions.</p>
                                </div>
                                <div className="flex gap-4">
                                    <button onClick={() => setIsSubmitModalOpen(false)} className="flex-1 py-3 rounded-xl border border-slate-600 text-slate-300">Continue</button>
                                    <button onClick={handleSubmit} className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-bold">Submit</button>
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
                        <button onClick={startTest} className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium flex items-center gap-2">
                            <RotateCcw className="w-4 h-4" /> Retake
                        </button>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center mb-8">
                        <div className="text-sm text-emerald-400 uppercase tracking-widest font-bold mb-2">Final Score</div>
                        <div className="text-6xl font-bold text-white mb-2">{score} <span className="text-2xl text-slate-500">/ 100</span></div>
                        <div className="inline-block px-4 py-1 rounded-full bg-slate-800 text-slate-300 mb-8 border border-slate-700">
                            Accuracy: <span className={accuracy > 80 ? "text-green-400" : "text-yellow-400"}>{accuracy}%</span>
                        </div>

                        <div className="text-left bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Leaf className="w-5 h-5 text-emerald-500" /> Case Study Performance</h3>
                            <div className="space-y-4">
                                {CASE_STUDIES.map(cs => {
                                    let csScore = 0;
                                    cs.questions.forEach(q => {
                                        if (answers[q.id] === q.correctAnswer) csScore += 4;
                                        else if (answers[q.id] !== undefined) csScore -= 1;
                                    });
                                    return (
                                        <div key={cs.id} className="flex items-center justify-between p-3 bg-slate-900 rounded-lg">
                                            <span className="text-slate-300 text-sm">Case {cs.id}: {cs.title}</span>
                                            <span className={`font-mono font-bold ${csScore > 15 ? "text-green-400" : (csScore > 10 ? "text-yellow-400" : "text-red-400")}`}>
                                                {csScore}/20
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

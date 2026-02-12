"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
    ArrowLeft, Clock, AlertCircle, CheckCircle2, XCircle,
    HelpCircle, ChevronRight, ChevronLeft, Flag, Award,
    BarChart2, Timer, RotateCcw, BookOpen, Brain, Zap
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

// --- Mock Data Generator (180 Questions) ---
const generateQuestions = (): Question[] => {
    const subjects: { type: QuestionType; count: number; startIdx: number }[] = [
        { type: "physics", count: 45, startIdx: 1 },
        { type: "chemistry", count: 45, startIdx: 46 },
        { type: "botany", count: 45, startIdx: 91 },
        { type: "zoology", count: 45, startIdx: 136 },
    ];

    let questions: Question[] = [];

    subjects.forEach((subj) => {
        for (let i = 0; i < subj.count; i++) {
            questions.push({
                id: subj.startIdx + i,
                type: subj.type,
                text: `Sample Question ${subj.startIdx + i} for ${subj.type.toUpperCase()}: This is a representative question text to simulate the NEET exam interface.`,
                options: [
                    `Option A for Q${subj.startIdx + i}`,
                    `Option B for Q${subj.startIdx + i}`,
                    `Option C for Q${subj.startIdx + i}`,
                    `Option D for Q${subj.startIdx + i}`,
                ],
                correctAnswer: Math.floor(Math.random() * 4),
                explanation: `Detailed explanation for question ${subj.startIdx + i}. The concept involves core principles of ${subj.type}.`,
            });
        }
    });

    return questions;
};

const QUESTIONS = generateQuestions();
const DURATION_SECONDS = 3 * 60 * 60 + 20 * 60; // 3 hours 20 minutes

export default function NEETTestSeriesPage() {
    // --- State ---
    const [status, setStatus] = useState<"intro" | "active" | "result">("intro");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({}); // qId -> optionIndex
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

    const clearResponse = () => {
        const qId = QUESTIONS[currentQuestionIndex].id;
        setAnswers((prev) => {
            const newAnswers = { ...prev };
            delete newAnswers[qId];
            return newAnswers;
        });
    };

    const handleSubmit = () => {
        // Calculate Score
        let calculatedScore = 0;
        let correctCount = 0;
        let wrongCount = 0;
        let unattemptedCount = 0;

        // Subject-wise breakdown
        const subjectStats: Record<string, { total: number; attempted: number; correct: number; wrong: number; score: number }> = {
            physics: { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0 },
            chemistry: { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0 },
            botany: { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0 },
            zoology: { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0 },
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
            } else {
                unattemptedCount++;
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
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
            {/* --- Intro View --- */}
            {status === "intro" && (
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </Link>

                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10 bg-green-500 blur-3xl rounded-bl-full w-64 h-64" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-green-500/10 rounded-2xl text-green-400">
                                    <Brain className="w-10 h-10" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-white">NEET UG Full Mock Test</h1>
                                    <p className="text-slate-400">National Eligibility cum Entrance Test (Undergraduate)</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-10">
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <Clock className="w-6 h-6 text-blue-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">3 Hours 20 Mins</h3>
                                    <p className="text-sm text-slate-400">Strict time limit</p>
                                </div>
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <HelpCircle className="w-6 h-6 text-purple-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">180 Questions</h3>
                                    <p className="text-sm text-slate-400">Physics, Chem, Bio</p>
                                </div>
                                <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <AlertCircle className="w-6 h-6 text-red-400 mb-3" />
                                    <h3 className="text-lg font-semibold text-white">Negative Marking</h3>
                                    <p className="text-sm text-slate-400">+4 for Correct, -1 for Wrong</p>
                                </div>
                            </div>

                            <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-2xl p-6 mb-10">
                                <h3 className="text-lg font-semibold text-indigo-300 mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5" /> Syllabus Coverage
                                </h3>
                                <ul className="grid md:grid-cols-2 gap-3 text-slate-300 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Physics: Class 11 & 12 Complete Syllabus</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Chemistry: Organic, Inorganic & Physical</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Botany: Genetics, Ecology, Plant Physiology</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Zoology: Human Physiology, Reproduction, Evolution</li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={startTest}
                                    className="flex-1 bg-green-600 hover:bg-green-500 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-green-900/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    Start Test Now <ChevronRight className="w-5 h-5" />
                                </button>
                                <Link
                                    href="/dashboard"
                                    className="px-8 py-4 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium transition-colors text-center"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* --- Active Test View --- */}
            {status === "active" && (
                <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col">
                    {/* Header */}
                    <header className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="font-bold text-xl text-white">NEET Mock Test 01</div>
                            <div className="hidden md:flex gap-2 text-xs">
                                <span className="px-2 py-1 rounded bg-slate-800 text-slate-400">Physics: 1-45</span>
                                <span className="px-2 py-1 rounded bg-slate-800 text-slate-400">Chem: 46-90</span>
                                <span className="px-2 py-1 rounded bg-slate-800 text-slate-400">Bio: 91-180</span>
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
                                Submit Test
                            </button>
                        </div>
                    </header>

                    <div className="flex-1 flex overflow-hidden">
                        {/* Left/Main Panel: Question Area */}
                        <main className="flex-1 flex flex-col p-6 overflow-y-auto">
                            <div className="max-w-4xl w-full mx-auto">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-sm font-bold uppercase tracking-wider text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full">
                                        {QUESTIONS[currentQuestionIndex].type}
                                    </span>
                                    <div className="flex gap-2 text-sm text-slate-500">
                                        <span>+4 Marks</span>
                                        <span className="text-red-400">-1 Negative</span>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-medium text-white mb-8 border-l-4 border-indigo-500 pl-4 py-1">
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
                                                className={`text-left p-6 rounded-xl border-2 transition-all flex items-center gap-4 group ${isSelected
                                                        ? 'border-indigo-500 bg-indigo-500/10'
                                                        : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-800'
                                                    }`}
                                            >
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border ${isSelected ? 'bg-indigo-500 border-indigo-500 text-white' : 'border-slate-600 text-slate-400 group-hover:border-slate-500'
                                                    }`}>
                                                    {String.fromCharCode(65 + idx)}
                                                </div>
                                                <span className={`text-lg ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                                                    {option}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-slate-800 mt-auto">
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                                            disabled={currentQuestionIndex === 0}
                                            className="px-6 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                        >
                                            <ChevronLeft className="w-4 h-4" /> Previous
                                        </button>
                                        <button
                                            onClick={toggleMarkForReview}
                                            className={`px-6 py-2.5 rounded-lg border flex items-center gap-2 transition-colors ${markedForReview.has(QUESTIONS[currentQuestionIndex].id)
                                                    ? 'border-purple-500 bg-purple-500/10 text-purple-400'
                                                    : 'border-slate-700 text-slate-400 hover:bg-slate-800'
                                                }`}
                                        >
                                            <Flag className="w-4 h-4" />
                                            {markedForReview.has(QUESTIONS[currentQuestionIndex].id) ? 'Marked' : 'Mark for Review'}
                                        </button>
                                        <button
                                            onClick={clearResponse}
                                            className="px-6 py-2.5 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-slate-900 transition-colors"
                                        >
                                            Clear
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setCurrentQuestionIndex(prev => Math.min(QUESTIONS.length - 1, prev + 1))}
                                        disabled={currentQuestionIndex === QUESTIONS.length - 1}
                                        className="px-8 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-indigo-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        Save & Next <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </main>

                        {/* Right Panel: Question Palette */}
                        <aside className="w-80 bg-slate-900/50 border-l border-slate-800 flex flex-col hidden lg:flex">
                            <div className="p-4 border-b border-slate-800 font-semibold text-slate-300 flex justify-between items-center">
                                <span>Question Palette</span>
                                <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">
                                    {Object.keys(answers).length}/{QUESTIONS.length} Attempted
                                </span>
                            </div>

                            <div className="p-4 grid grid-cols-2 gap-2 text-xs text-slate-400 mb-2 border-b border-slate-800 pb-4">
                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500"></div> Answered</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-500"></div> Marked</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-700"></div> Not Visited</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div> Skipped</div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                                <div className="grid grid-cols-5 gap-2">
                                    {QUESTIONS.map((q, idx) => {
                                        const isAnswered = answers[q.id] !== undefined;
                                        const isMarked = markedForReview.has(q.id);
                                        const isCurrent = idx === currentQuestionIndex;

                                        let bgClass = "bg-slate-800 text-slate-400 border-slate-700";
                                        if (isCurrent) bgClass = "ring-2 ring-white bg-slate-700 text-white";
                                        else if (isMarked) bgClass = "bg-purple-900/50 border-purple-500 text-purple-300";
                                        else if (isAnswered) bgClass = "bg-green-600 text-white border-green-500";

                                        return (
                                            <button
                                                key={q.id}
                                                onClick={() => setCurrentQuestionIndex(idx)}
                                                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium border transition-all ${bgClass}`}
                                            >
                                                {q.id}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* Submit Modal */}
                    {isSubmitModalOpen && (
                        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-4">Submit Test?</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between p-4 bg-slate-800 rounded-xl">
                                        <span className="text-slate-400">Answered</span>
                                        <span className="text-green-400 font-bold">{Object.keys(answers).length}</span>
                                    </div>
                                    <div className="flex justify-between p-4 bg-slate-800 rounded-xl">
                                        <span className="text-slate-400">Marked for Review</span>
                                        <span className="text-purple-400 font-bold">{markedForReview.size}</span>
                                    </div>
                                    <div className="flex justify-between p-4 bg-slate-800 rounded-xl">
                                        <span className="text-slate-400">Unanswered</span>
                                        <span className="text-slate-300 font-bold">{QUESTIONS.length - Object.keys(answers).length}</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setIsSubmitModalOpen(false)}
                                        className="flex-1 py-3 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors"
                                    >
                                        Continue Test
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors"
                                    >
                                        Submit & Finish
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* --- Result View --- */}
            {status === "result" && (
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Return to Dashboard
                        </Link>
                        <button
                            onClick={startTest}
                            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium flex items-center gap-2"
                        >
                            <RotateCcw className="w-4 h-4" /> Retake Test
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Main Score Card */}
                        <div className="md:col-span-1 bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl">
                            <div className="relative mb-6">
                                <div className="w-40 h-40 rounded-full border-8 border-indigo-500/20 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-white">{score}</div>
                                        <div className="text-slate-400 text-sm font-medium uppercase tracking-wide">out of 720</div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    {score > 600 ? 'EXCELLENT' : score > 400 ? 'GOOD' : 'NEEDS WORK'}
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Overall Score</h2>
                            <p className="text-slate-400 text-sm mb-6">You've completed the full mock test.</p>

                            <div className="w-full grid grid-cols-2 gap-4">
                                <div className="bg-slate-900/50 p-3 rounded-xl">
                                    <div className="text-green-400 font-bold text-xl">{accuracy}%</div>
                                    <div className="text-xs text-slate-500">Accuracy</div>
                                </div>
                                <div className="bg-slate-900/50 p-3 rounded-xl">
                                    <div className="text-blue-400 font-bold text-xl">
                                        {Math.floor(score / 4) + Math.floor(Math.random() * 1000)}
                                    </div>
                                    <div className="text-xs text-slate-500">Est. Rank</div>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Analysis */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <BarChart2 className="w-5 h-5 text-indigo-400" /> Subject-wise Performance
                                </h3>

                                <div className="space-y-6">
                                    {Object.entries(subjectAnalysis).map(([subject, stats]: [string, any]) => (
                                        <div key={subject}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="capitalize text-slate-300 font-medium">{subject}</span>
                                                <div className="flex gap-4 text-sm">
                                                    <span className="text-green-400">{stats.correct} Correct</span>
                                                    <span className="text-red-400">{stats.wrong} Wrong</span>
                                                    <span className="text-white font-bold">{stats.score} Marks</span>
                                                </div>
                                            </div>
                                            <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                                                <div
                                                    className="h-full bg-green-500"
                                                    style={{ width: `${(stats.correct / stats.total) * 100}%` }}
                                                />
                                                <div
                                                    className="h-full bg-red-500"
                                                    style={{ width: `${(stats.wrong / stats.total) * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Suggestions */}
                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-yellow-400" /> Analysis & Suggestions
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                                        <h4 className="font-bold text-yellow-200 mb-2">Time Management</h4>
                                        <p className="text-sm text-yellow-100/70">
                                            You spent an average of {Math.round((DURATION_SECONDS - timeLeft) / 180)}s per question. Try to speed up in Biology to save time for Physics.
                                        </p>
                                    </div>
                                    <div className="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-xl">
                                        <h4 className="font-bold text-indigo-200 mb-2">Strong Subject</h4>
                                        <p className="text-sm text-indigo-100/70">
                                            Biology seems to be your strength. Focus on minimizing negative marks in Physics to boost your overall rank.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

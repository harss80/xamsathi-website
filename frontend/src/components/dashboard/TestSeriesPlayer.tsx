"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
    ArrowLeft, Clock, AlertCircle, CheckCircle2, XCircle,
    HelpCircle, ChevronRight, ChevronLeft, Flag, Award,
    BarChart2, Timer, RotateCcw, BookOpen, Brain, Zap, GraduationCap,
    Menu, X, Trophy, FileText
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TestSeriesIntro from "@/components/dashboard/TestSeriesIntro";
import confetti from "canvas-confetti";

// --- Types ---
export type QuestionType = "physics" | "chemistry" | "botany" | "zoology" | "math" | "biology" | "general" | string;

export type Question = {
    id: number;
    type: QuestionType;
    text: string;
    context?: string; // For case studies
    image?: string;
    options: string[];
    correctAnswer: number; // 0-3
    explanation: string;
};

export type SubjectStat = {
    total: number;
    attempted: number;
    correct: number;
    wrong: number;
    score: number;
};

interface TestSeriesPlayerProps {
    title: string;
    description: string;
    testSeriesId: string;
    questions: Question[];
    durationMins: number;
    totalMarks: number;
    negativeMarking?: number;
    positiveMarking?: number;
    subjects: string[];
    onFinish?: (results: any) => void;
}

interface QuestionPaletteProps {
    questions: Question[];
    currentQuestionIndex: number;
    answers: Record<number, number>;
    markedForReview: Set<number>;
    setCurrentQuestionIndex: (index: number) => void;
    setShowPalette: (show: boolean) => void;
}

const QuestionPalette = ({
    questions,
    currentQuestionIndex,
    answers,
    markedForReview,
    setCurrentQuestionIndex,
    setShowPalette
}: QuestionPaletteProps) => (
    <div className="flex flex-col h-full bg-slate-900/80 backdrop-blur-xl border-l border-white/10">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="font-bold text-white flex items-center gap-2">
                <Menu className="w-5 h-5 text-indigo-400" />
                Question Palette
            </h3>
            <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-500/30">
                {Object.keys(answers).length}/{questions.length} Done
            </span>
        </div>

        <div className="p-6 grid grid-cols-2 gap-4 text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2 border-b border-white/5">
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/20"></div> Answered</div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500/20"></div> Marked</div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-slate-700 shadow-sm shadow-slate-700/20"></div> Unvisited</div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full border border-red-500/50 bg-red-500/10"></div> Skipped</div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            <div className="grid grid-cols-5 gap-3">
                {questions.map((q, idx) => {
                    const isAnswered = answers[q.id] !== undefined;
                    const isMarked = markedForReview.has(q.id);
                    const isCurrent = idx === currentQuestionIndex;

                    let style = "bg-slate-800/50 text-slate-400 border-white/5 hover:border-white/20";
                    if (isCurrent) style = "ring-2 ring-indigo-500 bg-indigo-500/20 text-white border-indigo-500/50 shadow-lg shadow-indigo-500/10";
                    else if (isMarked) style = "bg-indigo-600/80 text-white border-indigo-400 shadow-md";
                    else if (isAnswered) style = "bg-emerald-600/80 text-white border-emerald-400 shadow-md";

                    return (
                        <button
                            key={q.id}
                            onClick={() => {
                                setCurrentQuestionIndex(idx);
                                if (window.innerWidth < 1280) setShowPalette(false);
                            }}
                            className={`w-full aspect-square rounded-xl border text-[13px] font-bold transition-all transform active:scale-90 flex items-center justify-center ${style}`}
                        >
                            {idx + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    </div>
);

export default function TestSeriesPlayer({
    title,
    description,
    testSeriesId,
    questions,
    durationMins,
    totalMarks,
    negativeMarking = 1,
    positiveMarking = 4,
    subjects,
    onFinish
}: TestSeriesPlayerProps) {
    // --- State ---
    const [status, setStatus] = useState<"intro" | "active" | "result">("intro");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [activeSubject, setActiveSubject] = useState<string>(subjects[0]?.toLowerCase() || "general");
    const [answers, setAnswers] = useState<Record<number, number>>({}); // qId -> optionIndex
    const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set());
    const [timeLeft, setTimeLeft] = useState(durationMins * 60);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [showPalette, setShowPalette] = useState(false);

    // Results State
    const [resultData, setResultData] = useState<{
        score: number;
        accuracy: number;
        subjectAnalysis: Record<string, SubjectStat>;
    } | null>(null);

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
        setTimeLeft(durationMins * 60);
        setAnswers({});
        setMarkedForReview(new Set());
        setCurrentQuestionIndex(0);
        setActiveSubject(questions[0]?.type.toLowerCase() || "general");
    };

    const visibleQuestionIndices = useMemo(() => {
        // If it's a multi-subject test, we might want to filter, but usually we show all and highlight
        // For now, let's keep all questions accessible but track subject view
        return questions.map((_, i) => i);
    }, [questions]);

    const canGoPrev = currentQuestionIndex > 0;
    const canGoNext = currentQuestionIndex < questions.length - 1;

    const goPrev = () => {
        if (!canGoPrev) return;
        setCurrentQuestionIndex(prev => prev - 1);
    };

    const goNext = () => {
        if (!canGoNext) return;
        setCurrentQuestionIndex(prev => prev + 1);
    };

    const currentQ = questions[currentQuestionIndex];

    // Update active subject when question changes
    useEffect(() => {
        if (currentQ) {
            setActiveSubject(currentQ.type.toLowerCase());
        }
    }, [currentQuestionIndex, currentQ]);

    const handleAnswer = (optionIdx: number) => {
        const qId = currentQ.id;
        setAnswers((prev) => {
            if (prev[qId] === optionIdx) {
                const next = { ...prev };
                delete next[qId];
                return next;
            }
            return { ...prev, [qId]: optionIdx };
        });
    };

    const toggleMarkForReview = () => {
        const qId = currentQ.id;
        setMarkedForReview((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(qId)) newSet.delete(qId);
            else newSet.add(qId);
            return newSet;
        });
    };

    const handleSubmit = async () => {
        let calculatedScore = 0;
        let correctCount = 0;
        let wrongCount = 0;
        const subjectStats: Record<string, SubjectStat> = {};

        subjects.forEach(s => {
            subjectStats[s.toLowerCase()] = { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0 };
        });

        questions.forEach((q) => {
            const selected = answers[q.id];
            const subj = q.type.toLowerCase();

            if (!subjectStats[subj]) {
                subjectStats[subj] = { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0 };
            }

            subjectStats[subj].total++;

            if (selected !== undefined) {
                subjectStats[subj].attempted++;
                if (selected === q.correctAnswer) {
                    calculatedScore += positiveMarking;
                    correctCount++;
                    subjectStats[subj].correct++;
                    subjectStats[subj].score += positiveMarking;
                } else {
                    calculatedScore -= negativeMarking;
                    wrongCount++;
                    subjectStats[subj].wrong++;
                    subjectStats[subj].score -= negativeMarking;
                }
            }
        });

        const attempted = correctCount + wrongCount;
        const calcAccuracy = attempted > 0 ? Math.round((correctCount / attempted) * 100) : 0;

        setResultData({
            score: calculatedScore,
            accuracy: calcAccuracy,
            subjectAnalysis: subjectStats
        });
        setStatus("result");
        setIsSubmitModalOpen(false);

        // Celebration!
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#6366f1', '#a855f7', '#ec4899']
        });

        // Backend submission
        try {
            const userStr = localStorage.getItem("xamsathi_user");
            let userId = "";
            if (userStr) {
                try {
                    const parsed = JSON.parse(userStr);
                    userId = parsed._id || parsed.id || parsed.user_id;
                } catch { }
            }

            if (userId) {
                const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
                const base = envBase || (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? "http://localhost:3001" : "http://localhost:3001");

                await fetch(`${base}/api/leaderboard/submit`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-user-id": userId
                    },
                    body: JSON.stringify({
                        testSeriesId,
                        score: calculatedScore,
                        accuracy: calcAccuracy
                    })
                });
            }
        } catch (err) {
            console.error("Leaderboard submission failed", err);
        }

        if (onFinish) onFinish({ score: calculatedScore, accuracy: calcAccuracy, subjectStats });
    };

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return hrs > 0
            ? `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
            : `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className={`h-[100dvh] bg-[#0B1120] text-slate-100 selection:bg-indigo-500/30 flex flex-col ${status === 'active' ? 'overflow-hidden' : 'overflow-y-auto'}`}>
            <AnimatePresence mode="wait">
                {/* --- Intro View --- */}
                {status === "intro" && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <TestSeriesIntro
                            title={title}
                            description={description}
                            testSeriesId={testSeriesId}
                            durationMins={durationMins}
                            questionsCount={questions.length}
                            totalMarks={totalMarks}
                            subjects={subjects.map(s => s.charAt(0).toUpperCase() + s.slice(1))}
                            onStart={startTest}
                        />
                    </motion.div>
                )}

                {/* --- Active Test View --- */}
                {status === "active" && (
                    <motion.div
                        key="active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-[#020617] flex flex-col"
                    >
                        {/* Mobile Optimized Header */}
                        <header className="bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/5 h-16 md:h-20 shrink-0 z-40 relative">
                            <div className="h-full px-4 md:px-8 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="lg:hidden">
                                        <button onClick={() => setShowPalette(!showPalette)} className="p-2 -ml-2 rounded-full hover:bg-white/5 text-slate-300">
                                            <Menu className="w-6 h-6" />
                                        </button>
                                    </div>
                                    <h1 className="font-bold text-white truncate max-w-[150px] md:max-w-md text-sm md:text-lg">{title}</h1>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${timeLeft < 300 ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-white/5 border-white/5 text-slate-300'}`}>
                                        <Timer className="w-4 h-4" />
                                        <span className="font-mono text-sm md:text-base font-bold tabular-nums">{formatTime(timeLeft)}</span>
                                    </div>
                                    <button
                                        onClick={() => setIsSubmitModalOpen(true)}
                                        className="hidden md:flex bg-white/5 hover:bg-white/10 border border-white/5 text-white px-5 py-2 rounded-xl font-bold text-sm transition-all"
                                    >
                                        Submit Test
                                    </button>
                                    {/* Mobile Submit Icon */}
                                    <button
                                        onClick={() => setIsSubmitModalOpen(true)}
                                        className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                                    >
                                        <CheckCircle2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </header>

                        {/* Clean Subject Bar */}
                        <div className="bg-[#0B1120] border-b border-white/5 shrink-0 z-30">
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2 mask-linear-fade">
                                    {subjects.map((subj) => (
                                        <button
                                            key={subj}
                                            onClick={() => {
                                                const firstIdx = questions.findIndex(q => q.type.toLowerCase() === subj.toLowerCase());
                                                if (firstIdx >= 0) {
                                                    setCurrentQuestionIndex(firstIdx);
                                                    setActiveSubject(subj.toLowerCase());
                                                }
                                            }}
                                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all whitespace-nowrap ${activeSubject === subj.toLowerCase()
                                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/40"
                                                : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                                                }`}
                                        >
                                            {subj}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex overflow-hidden relative">
                            {/* Main Question Area */}
                            <main className="flex-1 overflow-y-auto bg-[#0B1120] p-4 md:p-6 pb-32 custom-scrollbar">
                                <div className="max-w-5xl mx-auto h-full flex flex-col">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentQuestionIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.2 }}
                                            className="space-y-6"
                                        >
                                            {/* Question Header Meta */}
                                            <div className="flex items-center justify-between bg-slate-800/40 p-3 rounded-xl border border-white/5">
                                                <div className="flex items-center gap-2">
                                                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-lg text-xs font-bold uppercase tracking-wider">
                                                        {currentQ.type}
                                                    </span>
                                                    {currentQ.context && (
                                                        <span className="p-1.5 text-slate-400 bg-white/5 rounded-lg" title="Case Study">
                                                            <FileText className="w-3.5 h-3.5" />
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-3 text-xs font-bold font-mono">
                                                    <span className="text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">+{positiveMarking}</span>
                                                    <span className="text-red-400 bg-red-500/10 px-2 py-1 rounded">-{negativeMarking}</span>
                                                </div>
                                            </div>

                                            {/* Question Text */}
                                            <div className="mb-6">
                                                <div className="flex items-start gap-4">
                                                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-black border border-indigo-500/20 mt-1">
                                                        Q{currentQ.id}
                                                    </span>
                                                    <h2 className="text-base md:text-xl font-medium text-slate-200 leading-relaxed">
                                                        {currentQ.text}
                                                    </h2>
                                                </div>
                                            </div>

                                            {/* Question Image */}
                                            {currentQ.image && (
                                                <div className="w-full max-w-2xl mx-auto bg-black/20 rounded-xl overflow-hidden border border-white/5">
                                                    <div className="relative aspect-video">
                                                        <Image
                                                            src={currentQ.image}
                                                            alt="Question Figure"
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Options */}
                                            <div className="grid gap-3 pt-2">
                                                {currentQ.options.map((option, idx) => {
                                                    const isSelected = answers[currentQ.id] === idx;
                                                    return (
                                                        <button
                                                            key={idx}
                                                            onClick={() => handleAnswer(idx)}
                                                            className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 group active:scale-[0.99] ${isSelected
                                                                ? 'bg-indigo-500/10 border-indigo-500 ring-1 ring-indigo-500/50'
                                                                : 'bg-slate-800/30 border-white/5 hover:bg-slate-800/60'
                                                                }`}
                                                        >
                                                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-colors ${isSelected
                                                                ? 'bg-indigo-500 border-indigo-500 text-white'
                                                                : 'border-slate-600/50 text-slate-400 bg-slate-800/50 group-hover:border-slate-500'
                                                                }`}>
                                                                {String.fromCharCode(65 + idx)}
                                                            </div>
                                                            <span className={`text-sm md:text-base leading-snug ${isSelected ? 'text-white font-medium' : 'text-slate-300'}`}>
                                                                {option}
                                                            </span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </main>

                            {/* Refined Fixed Footer */}
                            <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B1120] border-t border-white/5 px-4 py-3 md:py-4 safe-area-bottom">
                                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={goPrev}
                                            disabled={!canGoPrev}
                                            className="w-11 h-11 rounded-full bg-slate-800/50 border border-white/5 text-slate-400 flex items-center justify-center hover:bg-slate-800 disabled:opacity-30 transition-all active:scale-95"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={toggleMarkForReview}
                                            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all active:scale-95 ${markedForReview.has(currentQ.id)
                                                ? 'bg-purple-500/10 border-purple-500/50 text-purple-400'
                                                : 'bg-slate-800/50 border-white/5 text-slate-400'
                                                }`}
                                        >
                                            <Flag className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={goNext}
                                        disabled={!canGoNext}
                                        className="flex-1 max-w-sm h-11 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
                                        style={{ boxShadow: '0 4px 20px -5px rgba(79, 70, 229, 0.4)' }}
                                    >
                                        Save & Next
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Desktop Sidebar Palette */}
                            <aside className="w-[350px] hidden xl:block h-full overflow-hidden">
                                <QuestionPalette
                                    questions={questions}
                                    currentQuestionIndex={currentQuestionIndex}
                                    answers={answers}
                                    markedForReview={markedForReview}
                                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                                    setShowPalette={setShowPalette}
                                />
                            </aside>

                            {/* Mobile Palette Overlay */}
                            <AnimatePresence>
                                {showPalette && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onClick={() => setShowPalette(false)}
                                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] xl:hidden"
                                        />
                                        <motion.div
                                            initial={{ x: '100%' }}
                                            animate={{ x: 0 }}
                                            exit={{ x: '100%' }}
                                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-slate-900 z-[60] xl:hidden"
                                        >
                                            <QuestionPalette
                                                questions={questions}
                                                currentQuestionIndex={currentQuestionIndex}
                                                answers={answers}
                                                markedForReview={markedForReview}
                                                setCurrentQuestionIndex={setCurrentQuestionIndex}
                                                setShowPalette={setShowPalette}
                                            />
                                            <button
                                                onClick={() => setShowPalette(false)}
                                                className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
                                            >
                                                <X className="w-6 h-6" />
                                            </button>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Submit Confirmation Modal */}
                        <AnimatePresence>
                            {isSubmitModalOpen && (
                                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onClick={() => setIsSubmitModalOpen(false)}
                                        className="fixed inset-0 bg-black/80 backdrop-blur-md"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                        className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden"
                                    >
                                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-gradient-x"></div>

                                        <div className="w-20 h-20 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-8 mx-auto">
                                            <AlertCircle className="w-10 h-10 text-red-400" />
                                        </div>

                                        <h3 className="text-3xl font-black text-white text-center mb-4 italic tracking-tighter">FINISH EXAM?</h3>
                                        <p className="text-slate-400 text-center mb-8 font-medium">Please review your performance summary before final submission. This action cannot be undone.</p>

                                        <div className="grid grid-cols-2 gap-3 mb-10">
                                            <div className="p-5 bg-white/5 rounded-3xl border border-white/5 text-center">
                                                <div className="text-3xl font-black text-emerald-400 mb-1">{Object.keys(answers).length}</div>
                                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Answered</div>
                                            </div>
                                            <div className="p-5 bg-white/5 rounded-3xl border border-white/5 text-center">
                                                <div className="text-3xl font-black text-indigo-400 mb-1">{markedForReview.size}</div>
                                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">In Review</div>
                                            </div>
                                            <div className="p-5 bg-white/5 rounded-3xl border border-white/5 text-center col-span-2">
                                                <div className="text-3xl font-black text-slate-300 mb-1">{questions.length - Object.keys(answers).length}</div>
                                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Left Blank</div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <button
                                                onClick={handleSubmit}
                                                className="w-full py-5 rounded-3xl bg-red-500 hover:bg-red-600 text-white font-black shadow-xl shadow-red-500/20 active:scale-95 transition-all text-sm tracking-widest"
                                            >
                                                SUBMIT NOW
                                            </button>
                                            <button
                                                onClick={() => setIsSubmitModalOpen(false)}
                                                className="w-full py-5 rounded-3xl bg-white/5 border border-white/10 text-slate-300 font-bold hover:bg-white/10 active:scale-95 transition-all text-sm tracking-widest"
                                            >
                                                BACK TO EXAM
                                            </button>
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>
                    </motion.div >
                )
                }

                {/* --- Result View --- */}
                {
                    status === "result" && resultData && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20"
                        >
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                                <div>
                                    <h1 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-4">EXAM COMPLETE</h1>
                                    <p className="text-slate-500 font-bold uppercase tracking-[0.3em] flex items-center gap-3 italic">
                                        <div className="w-12 h-0.5 bg-indigo-500"></div> Results Analysis
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Link href="/dashboard" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black text-sm hover:bg-white/10 transition-all flex items-center gap-3 active:scale-95">
                                        <ArrowLeft className="w-5 h-5" /> DASHBOARD
                                    </Link>
                                    <button
                                        onClick={startTest}
                                        className="px-8 py-4 bg-indigo-600 rounded-2xl text-white font-black text-sm hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 flex items-center gap-3 active:scale-95"
                                    >
                                        <RotateCcw className="w-5 h-5" /> RETAKE
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                                {/* Score Stats Section */}
                                <div className="lg:col-span-4 space-y-8">
                                    <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                                        <div className="relative z-10">
                                            <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-8 shadow-xl">
                                                <Trophy className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="text-sm font-black text-indigo-100 uppercase tracking-widest mb-2 italic">Your Total Score</h3>
                                            <div className="text-8xl font-black text-white italic leading-none mb-4">{resultData.score}</div>
                                            <div className="px-6 py-2 bg-black/20 rounded-2xl inline-block text-[10px] font-black text-indigo-100 uppercase tracking-[0.2em] border border-white/10">
                                                out of {totalMarks}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 text-center bg-gradient-to-b from-white/[0.02] to-transparent">
                                            <div className="text-4xl font-black text-emerald-400 mb-1 italic">{resultData.accuracy}%</div>
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Accuracy</div>
                                        </div>
                                        <div className="bg-slate-900/50 border border-white/5 rounded-[2rem] p-8 text-center bg-gradient-to-b from-white/[0.02] to-transparent">
                                            <div className="text-4xl font-black text-indigo-400 mb-1 italic">
                                                {Math.floor(questions.length - (Object.keys(answers).length)) + Math.floor(Math.random() * 50)}
                                            </div>
                                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Est. Rank</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Performance Breakdown Section */}
                                <div className="lg:col-span-8 bg-slate-900/30 border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
                                    <h3 className="text-2xl font-black text-white italic tracking-tighter mb-10 flex items-center gap-4">
                                        <BarChart2 className="w-8 h-8 text-indigo-500" /> SUBJECT ANALYSIS
                                    </h3>

                                    <div className="space-y-12">
                                        {Object.entries(resultData.subjectAnalysis).map(([subj, stats]) => (
                                            <div key={subj} className="relative">
                                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-white italic uppercase">{subj.substring(0, 2)}</div>
                                                        <div>
                                                            <h4 className="font-black text-white uppercase tracking-tighter italic text-xl">{subj}</h4>
                                                            <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase">{stats.total} Total Questions</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="text-center group">
                                                            <div className="text-2xl font-black text-emerald-400 italic group-hover:scale-110 transition-transform">{stats.correct}</div>
                                                            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Right</div>
                                                        </div>
                                                        <div className="text-center group">
                                                            <div className="text-2xl font-black text-red-400 italic group-hover:scale-110 transition-transform">{stats.wrong}</div>
                                                            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Wrong</div>
                                                        </div>
                                                        <div className="text-center group px-6 py-2 bg-white/5 rounded-2xl border border-white/5">
                                                            <div className="text-2xl font-black text-white italic group-hover:scale-110 transition-transform">{stats.score}</div>
                                                            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest underline decoration-indigo-500 underline-offset-4">Score</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-4 w-full bg-black/20 rounded-full overflow-hidden flex shadow-inner border border-white/5">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${stats.total > 0 ? (stats.correct / stats.total) * 100 : 0}%` }}
                                                        transition={{ duration: 1, delay: 0.5 }}
                                                        className="h-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                                                    />
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${stats.total > 0 ? (stats.wrong / stats.total) * 100 : 0}%` }}
                                                        transition={{ duration: 1, delay: 0.7 }}
                                                        className="h-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Solutions Section Header */}
                            <div className="flex items-center gap-6 mb-12">
                                <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">SOLUTIONS</h2>
                                <div className="h-px flex-1 bg-white/10"></div>
                                <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                            </div>

                            <div className="space-y-12">
                                {questions.map((q, idx) => {
                                    const userAnsIdx = answers[q.id];
                                    const isCorrect = userAnsIdx === q.correctAnswer;
                                    const isSkipped = userAnsIdx === undefined;
                                    const statusColor = isCorrect ? 'text-emerald-400' : isSkipped ? 'text-yellow-400' : 'text-red-400';
                                    const StatusIcon = isCorrect ? CheckCircle2 : isSkipped ? HelpCircle : XCircle;

                                    return (
                                        <div key={q.id} className="relative group/sol">
                                            <div className={`absolute -inset-1 bg-gradient-to-r ${isCorrect ? 'from-emerald-500/20 to-transparent' : isSkipped ? 'from-yellow-500/10 to-transparent' : 'from-red-500/20 to-transparent'} rounded-[3rem] blur-xl opacity-0 group-hover/sol:opacity-100 transition duration-500`}></div>
                                            <div className="relative bg-slate-900/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-white/20 transition-all duration-300">
                                                <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-10">
                                                    <div className="flex-1">
                                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                                            <span className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-slate-400 italic">{idx + 1}</span>
                                                            <span className="px-5 py-2 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black tracking-widest uppercase">
                                                                {q.type}
                                                            </span>
                                                            <div className={`flex items-center gap-2 px-5 py-2 rounded-2xl bg-white/5 border border-white/10 font-black text-[10px] tracking-widest uppercase ${statusColor}`}>
                                                                <StatusIcon className="w-4 h-4" />
                                                                {isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Incorrect'}
                                                            </div>
                                                        </div>
                                                        {q.context && (
                                                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mb-8">
                                                                <div className="flex items-center gap-2 text-indigo-400 mb-2 text-sm font-bold uppercase tracking-wider">
                                                                    <FileText className="w-4 h-4" /> Case Study / Context
                                                                </div>
                                                                <p className="text-slate-400 italic font-serif leading-relaxed">
                                                                    {q.context}
                                                                </p>
                                                            </div>
                                                        )}

                                                        <h4 className="text-xl md:text-3xl font-bold text-white leading-tight">
                                                            {q.text}
                                                        </h4>

                                                        {q.image && (
                                                            <div className="mt-8 relative w-full aspect-video bg-white rounded-3xl overflow-hidden border border-white/10">
                                                                <Image
                                                                    src={q.image}
                                                                    alt="Question illustration"
                                                                    fill
                                                                    className="object-contain p-4"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-4 mb-10">
                                                    {q.options.map((option, optIdx) => {
                                                        const isSelected = userAnsIdx === optIdx;
                                                        const isAnswer = q.correctAnswer === optIdx;

                                                        let borderClass = 'border-white/5 bg-white/5';
                                                        let textClass = 'text-slate-500';

                                                        if (isAnswer) {
                                                            borderClass = 'border-emerald-500/50 bg-emerald-500/10 ring-1 ring-emerald-500/30';
                                                            textClass = 'text-white font-black';
                                                        } else if (isSelected) {
                                                            borderClass = 'border-red-500/50 bg-red-500/10 ring-1 ring-red-500/30';
                                                            textClass = 'text-white font-black';
                                                        }

                                                        return (
                                                            <div
                                                                key={optIdx}
                                                                className={`p-6 rounded-[2rem] border-2 ${borderClass} flex items-center gap-4 transition-all group/opt`}
                                                            >
                                                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${isAnswer ? 'bg-emerald-500 text-white' :
                                                                    isSelected ? 'bg-red-500 text-white' :
                                                                        'bg-white/10 text-slate-500 group-hover/opt:text-white'
                                                                    }`}>
                                                                    {String.fromCharCode(65 + optIdx)}
                                                                </div>
                                                                <span className={`text-lg transition-colors ${textClass}`}>{option}</span>
                                                                {isAnswer && <div className="ml-auto w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-emerald-500" /></div>}
                                                            </div>
                                                        )
                                                    })}
                                                </div>

                                                {/* Explanation Card */}
                                                <div className="group/exp relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-indigo-500/5 backdrop-blur-3xl rounded-[2rem]"></div>
                                                    <div className="relative p-8 md:p-10 border border-white/5 rounded-[2rem] flex flex-col md:flex-row gap-8">
                                                        <div className="shrink-0">
                                                            <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-500 shadow-xl shadow-indigo-500/30 flex items-center justify-center text-white transform group-hover/exp:rotate-12 transition-transform">
                                                                <GraduationCap className="w-8 h-8" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h5 className="text-indigo-400 font-black text-xs uppercase tracking-[0.2em] mb-4">TEACHER'S EXPLANATION</h5>
                                                            <p className="text-slate-300 leading-relaxed text-lg font-medium italic">
                                                                "{q.explanation}"
                                                            </p>
                                                        </div>
                                                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </div >
    );
}

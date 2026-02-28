"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
    ArrowLeft, AlertCircle, CheckCircle2, XCircle,
    HelpCircle, ChevronRight, ChevronLeft, Flag,
    BarChart2, Timer, RotateCcw, BookOpen, GraduationCap,
    Menu, X, Trophy, FileText, MessageCircle, ThumbsUp, Send, Reply,
    Grid, Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TestSeriesIntro from "@/components/dashboard/TestSeriesIntro";
import confetti from "canvas-confetti";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// --- Types ---
export type QuestionType = "physics" | "chemistry" | "botany" | "zoology" | "math" | "biology" | "general" | string;

export type QuestionFormat = "mcq" | "integer";

export type Question = {
    id: number;
    type: QuestionType;
    format?: QuestionFormat;
    text: string;
    context?: string; // For case studies
    image?: string;
    options: string[];
    correctAnswer: number; // 0-3
    correctInteger?: number;
    explanation: string;
};

export type SubjectStat = {
    total: number;
    attempted: number;
    correct: number;
    wrong: number;
    score: number;
};

type DiscussionComment = {
    _id: string;
    question_id: string;
    user_id: string;
    user_name: string;
    body: string;
    parent_id?: string | null;
    upvotes: number;
    created_at?: string;
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
    onFinish?: (results: { score: number; accuracy: number; subjectStats: Record<string, SubjectStat> }) => void;
    onClose?: () => void;
}

interface QuestionPaletteProps {
    questions: Question[];
    currentQuestionIndex: number;
    answers: Record<number, number | string>;
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
    <div className="flex flex-col h-full bg-[#0B1120]/95 backdrop-blur-3xl border-l border-white/5 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]">
        <div className="p-6 border-b border-white/5 flex justify-between items-center shrink-0">
            <div>
                <h3 className="font-black text-white text-sm uppercase tracking-widest flex items-center gap-2">
                    <Grid className="w-4 h-4 text-indigo-400" /> Palette
                </h3>
            </div>
            <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-300 uppercase tracking-widest">
                {Object.keys(answers).length} / {questions.length}
            </div>
        </div>

        <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.15em] font-black text-slate-500 border-b border-white/5 shrink-0 bg-white/[0.01]">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div> Answered</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.3)]"></div> Marked</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-700"></div> Unvisited</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full border border-red-500/50 bg-red-500/10"></div> Skipped</div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar scroll-smooth">
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {questions.map((q, idx) => {
                    const ans = answers[q.id];
                    const isAnswered = ans !== undefined && String(ans).trim() !== "";
                    const isMarked = markedForReview.has(q.id);
                    const isCurrent = idx === currentQuestionIndex;

                    let style = "bg-slate-800/30 text-slate-500 border-white/5 hover:bg-slate-800/50 hover:border-slate-700 hover:text-slate-300";
                    if (isCurrent) style = "bg-indigo-600 text-white border-indigo-500 ring-4 ring-indigo-500/20 shadow-xl shadow-indigo-600/20 z-10 scale-110";
                    else if (isMarked) style = "bg-indigo-500/20 text-indigo-300 border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.15)]";
                    else if (isAnswered) style = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]";

                    return (
                        <button
                            key={q.id}
                            onClick={() => {
                                setCurrentQuestionIndex(idx);
                                if (window.innerWidth < 1280) setShowPalette(false);
                            }}
                            className={`w-full aspect-square rounded-xl border text-[13px] font-black transition-all duration-300 transform active:scale-95 flex items-center justify-center ${style}`}
                        >
                            {idx + 1}
                        </button>
                    );
                })}
            </div>
        </div>

        <div className="p-6 border-t border-white/5 bg-white/[0.01] shrink-0">
            <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2 text-center">Summary Statistics</div>
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-emerald-500/5 rounded-xl p-2.5 border border-emerald-500/10 text-center">
                    <div className="text-sm font-black text-emerald-400">{Object.keys(answers).length}</div>
                    <div className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">Answered</div>
                </div>
                <div className="bg-indigo-500/5 rounded-xl p-2.5 border border-indigo-500/10 text-center">
                    <div className="text-sm font-black text-indigo-400">{markedForReview.size}</div>
                    <div className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">Marked</div>
                </div>
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
    onFinish,
    onClose
}: TestSeriesPlayerProps) {
    const router = useRouter();

    const getErrorMessage = (err: unknown): string => {
        if (err instanceof Error) return err.message;
        if (typeof err === "string") return err;
        if (!err || typeof err !== "object") return String(err);
        const maybe = err as { message?: unknown };
        if (maybe.message) return String(maybe.message);
        try {
            return JSON.stringify(err);
        } catch {
            return String(err);
        }
    };

    // --- State ---
    const [status, setStatus] = useState<"intro" | "active" | "result" | "review">("intro");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [activeSubject, setActiveSubject] = useState<string>(subjects[0]?.toLowerCase() || "general");
    const [answers, setAnswers] = useState<Record<number, number | string>>({}); // qId -> optionIndex
    const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set());
    const [timeLeft, setTimeLeft] = useState(durationMins * 60);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [showPalette, setShowPalette] = useState(false);

    const handleSubmitRef = useRef<() => void>(() => { });

    const [bottomTab, setBottomTab] = useState<"discussion" | "solution">("discussion");
    const [discussionItems, setDiscussionItems] = useState<DiscussionComment[]>([]);
    const [discussionLoading, setDiscussionLoading] = useState(false);
    const [discussionError, setDiscussionError] = useState<string | null>(null);
    const [commentText, setCommentText] = useState("");
    const [replyToId, setReplyToId] = useState<string | null>(null);
    const [posting, setPosting] = useState(false);

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
                        handleSubmitRef.current();
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
        setActiveSubject(questions[0]?.type?.toLowerCase() || "general");
        setBottomTab("discussion");
    };

    const startReview = () => {
        setStatus("review");
        setCurrentQuestionIndex(0);
        setActiveSubject(questions[0]?.type?.toLowerCase() || "general");
        setBottomTab("solution");
    };

    const handleCancelExam = () => {
        const ok = window.confirm("Close this exam? Your progress will not be submitted.");
        if (!ok) return;
        setIsSubmitModalOpen(false);
        setStatus("intro");
        if (onClose) {
            onClose();
        } else {
            router.push("/dashboard");
        }
    };

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

    const getBackendBase = () => {
        const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
        if (envBase) return envBase;
        if (typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
            return "http://localhost:3001";
        }
        return "http://localhost:3001";
    };

    const getLocalUserId = () => {
        try {
            const userStr = localStorage.getItem("xamsathi_user");
            if (!userStr) return "";
            const parsed = JSON.parse(userStr);
            return parsed._id || parsed.id || parsed.user_id || "";
        } catch {
            return "";
        }
    };

    const questionKey = `${testSeriesId}:${currentQ?.id ?? ""}`;

    useEffect(() => {
        if (status !== "active" && status !== "result" && status !== "review") return;
        if (!currentQ) return;

        let cancelled = false;
        const load = async () => {
            setDiscussionLoading(true);
            setDiscussionError(null);
            try {
                const base = getBackendBase();
                const res = await fetch(`${base}/api/discussions/question/${encodeURIComponent(questionKey)}`);
                if (!res.ok) {
                    const data = await res.json().catch(() => ({}));
                    throw new Error(data.error || `Failed to load discussions (Code: ${res.status})`);
                }
                const data = await res.json();
                if (cancelled) return;
                setDiscussionItems(Array.isArray(data.items) ? data.items : []);
            } catch (e: unknown) {
                if (cancelled) return;
                setDiscussionError(getErrorMessage(e) || "Could not load discussions");
            } finally {
                if (!cancelled) setDiscussionLoading(false);
            }
        };

        load();
        return () => {
            cancelled = true;
        };
    }, [questionKey, status, currentQ]);

    const postComment = async () => {
        const text = commentText.trim();
        if (!text) return;

        const userId = getLocalUserId();
        if (!userId) {
            alert("Please login again to post a comment.");
            return;
        }

        setPosting(true);
        try {
            const base = getBackendBase();
            const res = await fetch(`${base}/api/discussions/question/${encodeURIComponent(questionKey)}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-user-id": userId,
                    },
                    body: JSON.stringify({ body: text, parentId: replyToId || undefined }),
                }
            );
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.details || data.detail || data.error || `Failed to post (Code: ${res.status})`);
            }
            setCommentText("");
            setReplyToId(null);

            const refresh = await fetch(`${base}/api/discussions/question/${encodeURIComponent(questionKey)}`);
            if (refresh.ok) {
                const data = await refresh.json();
                setDiscussionItems(Array.isArray(data.items) ? data.items : []);
            }
        } catch (e: unknown) {
            alert(getErrorMessage(e) || "Failed to post comment");
        } finally {
            setPosting(false);
        }
    };

    const toggleUpvote = async (commentId: string) => {
        const userId = getLocalUserId();
        if (!userId) {
            alert("Please login again to upvote.");
            return;
        }

        try {
            const base = getBackendBase();
            const res = await fetch(`${base}/api/discussions/comment/${commentId}/upvote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-user-id": userId,
                },
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.details || data.detail || data.error || `Failed to upvote (Code: ${res.status})`);
            }
            const data = await res.json();
            setDiscussionItems((prev) => prev.map((c) => c._id === commentId ? { ...c, upvotes: typeof data.upvotes === "number" ? data.upvotes : c.upvotes } : c));
        } catch (e: unknown) {
            alert(getErrorMessage(e) || "Failed to upvote");
        }
    };

    // Update active subject when question changes
    useEffect(() => {
        if (currentQ) {
            setActiveSubject(currentQ.type?.toLowerCase() || "general");
        }
    }, [currentQuestionIndex, currentQ]);

    const handleAnswer = (optionIdx: number) => {
        if (status !== "active") return;
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

    const handleIntegerAnswerChange = (value: string) => {
        if (status !== "active") return;
        const qId = currentQ.id;
        setAnswers((prev) => {
            const next = { ...prev };
            const v = value.trim();
            if (v === "") {
                delete next[qId];
                return next;
            }
            return { ...prev, [qId]: v };
        });
    };

    const toggleMarkForReview = () => {
        if (status !== "active") return;
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
            subjectStats[(s || "general").toLowerCase()] = { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0 };
        });

        questions.forEach((q) => {
            const selected = answers[q.id];
            const subj = (q.type || "general").toLowerCase();
            const format = q.format || "mcq";

            if (!subjectStats[subj]) {
                subjectStats[subj] = { total: 0, attempted: 0, correct: 0, wrong: 0, score: 0 };
            }

            subjectStats[subj].total++;

            if (selected !== undefined && String(selected).trim() !== "") {
                subjectStats[subj].attempted++;
                if (format === "integer") {
                    const asNum = Number(String(selected).trim());
                    const isCorrect = Number.isFinite(asNum) && typeof q.correctInteger === "number" && asNum === q.correctInteger;
                    if (isCorrect) {
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
                } else {
                    const selectedIdx = typeof selected === "number" ? selected : Number.NaN;
                    if (selectedIdx === q.correctAnswer) {
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

    handleSubmitRef.current = () => {
        void handleSubmit();
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
        <div className={`min-h-[100dvh] bg-[#0B1120] text-slate-100 selection:bg-indigo-500/30 flex flex-col overflow-x-hidden ${status === 'active' ? 'overflow-hidden' : ''}`}>
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
                            onClose={handleCancelExam}
                            positiveMarking={positiveMarking}
                            negativeMarking={negativeMarking}
                        />
                    </motion.div>
                )}

                {/* --- Active Test View --- */}
                {(status === "active" || status === "review") && (
                    <motion.div
                        key="active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-50 bg-[#020617] flex flex-col w-full h-full"
                    >
                        {/* Mobile Optimized Header */}
                        <header className="bg-[#0B1120] border-b border-white/5 h-16 md:h-20 shrink-0 z-40 relative">
                            <div className="h-full px-4 md:px-8 space-x-4 flex items-center justify-between max-w-[100vw]">
                                <div className="flex items-center gap-3 overflow-hidden min-w-0">
                                    <div className="xl:hidden shrink-0">
                                        <button
                                            onClick={() => setShowPalette(!showPalette)}
                                            className="p-2.5 rounded-xl bg-white/5 text-slate-300 active:scale-90 transition-all"
                                        >
                                            <Menu className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                        <h1 className="font-black text-white truncate text-xs md:text-sm uppercase tracking-widest">{title}</h1>
                                        <div className="hidden md:flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                                            <Sparkles className="w-3 h-3 text-indigo-500" /> AI Practice Session
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 md:gap-6 shrink-0">
                                    <div className={`flex items-center gap-2.5 px-4 md:px-5 py-2 md:py-2.5 rounded-2xl border-2 transition-all duration-500 ${timeLeft < 300 ? 'bg-red-500/10 border-red-500/30 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.15)] animate-pulse' : 'bg-white/5 border-white/5 text-slate-300'}`}>
                                        <Timer className={`w-4 h-4 md:w-5 md:h-5 ${timeLeft < 300 ? 'text-red-500' : 'text-indigo-400'}`} />
                                        <span className="font-mono text-sm md:text-xl font-black tabular-nums tracking-tighter">{formatTime(timeLeft)}</span>
                                    </div>

                                    {status === "active" && (
                                        <button
                                            onClick={() => setIsSubmitModalOpen(true)}
                                            className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-2xl font-black text-sm transition-all hover:bg-indigo-50 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                        >
                                            <CheckCircle2 className="w-4 h-4" /> SUBMIT TEST
                                        </button>
                                    )}

                                    <button
                                        onClick={handleCancelExam}
                                        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 text-slate-400 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 transition-all active:scale-90"
                                    >
                                        <X className="w-5 h-5 md:w-6 md:h-6" />
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
                                                const firstIdx = questions.findIndex(q => (q.type || "general").toLowerCase() === subj.toLowerCase());
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
                            <main className="flex-1 overflow-y-auto bg-[#0B1120] p-4 md:p-6 pb-40 md:pb-32 custom-scrollbar relative">
                                <div className="max-w-5xl mx-auto min-h-full flex flex-col">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentQuestionIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.2 }}
                                            className="space-y-6 pb-12 md:pb-24"
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

                                            {/* Answer */}
                                            {(currentQ.format || "mcq") === "integer" ? (
                                                <div className="pt-2">
                                                    <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 md:p-12 text-center">
                                                        <div className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-6 font-sans">Numerical Integer Entry</div>
                                                        <input
                                                            type="number"
                                                            inputMode="numeric"
                                                            value={typeof answers[currentQ.id] === "string" ? String(answers[currentQ.id]) : ""}
                                                            onChange={(e) => handleIntegerAnswerChange(e.target.value)}
                                                            disabled={status !== "active"}
                                                            className="w-full max-w-sm mx-auto px-8 py-6 rounded-3xl bg-[#020617] border-2 border-white/5 text-center text-4xl font-black text-white outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-800"
                                                            placeholder="00"
                                                        />
                                                        <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
                                                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Whole Number</div>
                                                            <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                                                            <div className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> No Decimals</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                                    {currentQ.options.map((option, idx) => {
                                                        const isSelected = answers[currentQ.id] === idx;
                                                        return (
                                                            <button
                                                                key={idx}
                                                                onClick={() => handleAnswer(idx)}
                                                                className={`w-full text-left p-5 md:p-6 rounded-[1.5rem] border-2 transition-all duration-300 flex items-center gap-5 group active:scale-[0.98] ${isSelected
                                                                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-600/20'
                                                                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                                                                    }`}
                                                            >
                                                                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-sm md:text-lg font-black border-2 transition-all duration-300 ${isSelected
                                                                    ? 'bg-white text-indigo-600 border-white'
                                                                    : 'border-white/10 text-slate-500 bg-[#020617] group-hover:border-white/20 group-hover:text-slate-300'
                                                                    }`}>
                                                                    {String.fromCharCode(65 + idx)}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <span className={`text-sm md:text-lg leading-snug font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                                                                        {option}
                                                                    </span>
                                                                </div>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            )}

                                            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/40 overflow-hidden">
                                                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => setBottomTab("discussion")}
                                                            className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider border transition-colors ${bottomTab === "discussion" ? "bg-indigo-600 text-white border-indigo-500/40" : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"}`}
                                                        >
                                                            <span className="inline-flex items-center gap-2">
                                                                <MessageCircle className="w-4 h-4" /> Discussion
                                                            </span>
                                                        </button>
                                                        <button
                                                            onClick={() => setBottomTab("solution")}
                                                            className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider border transition-colors ${bottomTab === "solution" ? "bg-emerald-600 text-white border-emerald-500/40" : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"}`}
                                                        >
                                                            <span className="inline-flex items-center gap-2">
                                                                <BookOpen className="w-4 h-4" /> Solution
                                                            </span>
                                                        </button>
                                                    </div>

                                                    {replyToId && (
                                                        <button
                                                            onClick={() => setReplyToId(null)}
                                                            className="text-xs font-bold text-slate-300 hover:text-white"
                                                        >
                                                            Cancel Reply
                                                        </button>
                                                    )}
                                                </div>

                                                {bottomTab === "solution" ? (
                                                    <div className="p-4">
                                                        {status === "active" ? (
                                                            <div className="p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 text-sm font-semibold">
                                                                Submit test to unlock solutions.
                                                            </div>
                                                        ) : (
                                                            <div className="space-y-3">
                                                                <div className="flex items-center justify-between">
                                                                    <div className="text-sm font-black text-white">Correct Answer</div>
                                                                    <div className="text-sm font-black text-emerald-300">
                                                                        {(currentQ.format || "mcq") === "integer"
                                                                            ? String(currentQ.correctInteger ?? "-")
                                                                            : String.fromCharCode(65 + currentQ.correctAnswer)}
                                                                    </div>
                                                                </div>
                                                                <div className="text-sm text-slate-300 leading-relaxed">
                                                                    {currentQ.explanation}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="p-4">
                                                        {discussionLoading ? (
                                                            <div className="text-slate-400 text-sm font-semibold">Loading discussion...</div>
                                                        ) : discussionError ? (
                                                            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-semibold">
                                                                {discussionError}
                                                            </div>
                                                        ) : (
                                                            <div className="space-y-3">
                                                                {(discussionItems.length === 0) && (
                                                                    <div className="text-slate-400 text-sm font-semibold">Be the first to ask a doubt on this question.</div>
                                                                )}

                                                                {discussionItems
                                                                    .filter((c) => !c.parent_id)
                                                                    .map((c) => (
                                                                        <div key={c._id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                                                            <div className="flex items-start justify-between gap-3">
                                                                                <div className="min-w-0">
                                                                                    <div className="text-xs font-black uppercase tracking-wider text-slate-400">{c.user_name || "Student"}</div>
                                                                                    <div className="text-sm text-slate-200 mt-1 whitespace-pre-wrap break-words">{c.body}</div>
                                                                                </div>
                                                                                <button
                                                                                    onClick={() => toggleUpvote(c._id)}
                                                                                    className="shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-200 hover:bg-slate-900"
                                                                                    title="Upvote"
                                                                                >
                                                                                    <ThumbsUp className="w-4 h-4" />
                                                                                    <span className="text-xs font-black tabular-nums">{c.upvotes || 0}</span>
                                                                                </button>
                                                                            </div>

                                                                            <div className="mt-3 flex items-center gap-2">
                                                                                <button
                                                                                    onClick={() => setReplyToId(c._id)}
                                                                                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-300 hover:text-indigo-200"
                                                                                >
                                                                                    <Reply className="w-4 h-4" /> Reply
                                                                                </button>
                                                                            </div>

                                                                            <div className="mt-3 space-y-2">
                                                                                {discussionItems
                                                                                    .filter((r) => r.parent_id === c._id)
                                                                                    .map((r) => (
                                                                                        <div key={r._id} className="ml-4 rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                                                                                            <div className="flex items-start justify-between gap-3">
                                                                                                <div className="min-w-0">
                                                                                                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">{r.user_name || "Student"}</div>
                                                                                                    <div className="text-sm text-slate-200 mt-1 whitespace-pre-wrap break-words">{r.body}</div>
                                                                                                </div>
                                                                                                <button
                                                                                                    onClick={() => toggleUpvote(r._id)}
                                                                                                    className="shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-200 hover:bg-slate-900"
                                                                                                    title="Upvote"
                                                                                                >
                                                                                                    <ThumbsUp className="w-4 h-4" />
                                                                                                    <span className="text-xs font-black tabular-nums">{r.upvotes || 0}</span>
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    ))}
                                                                            </div>
                                                                        </div>
                                                                    ))}

                                                                <div className="pt-2">
                                                                    <div className="flex items-start gap-3">
                                                                        <textarea
                                                                            value={commentText}
                                                                            onChange={(e) => setCommentText(e.target.value)}
                                                                            placeholder={replyToId ? "Write a reply..." : "Ask a doubt or share your approach..."}
                                                                            className="flex-1 min-h-[44px] max-h-40 resize-y rounded-2xl bg-slate-950/50 border border-white/10 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-indigo-500/60"
                                                                        />
                                                                        <button
                                                                            onClick={postComment}
                                                                            disabled={posting || !commentText.trim()}
                                                                            className="h-11 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-black text-sm inline-flex items-center gap-2"
                                                                        >
                                                                            <Send className="w-4 h-4" />
                                                                            {posting ? "Posting" : "Post"}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
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
                                            title="Previous question"
                                            aria-label="Previous question"
                                            className="w-11 h-11 rounded-full bg-slate-800/50 border border-white/5 text-slate-400 flex items-center justify-center hover:bg-slate-800 disabled:opacity-30 transition-all active:scale-95"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={toggleMarkForReview}
                                            title="Mark for review"
                                            aria-label="Mark for review"
                                            className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all active:scale-95 ${markedForReview.has(currentQ.id)
                                                ? 'bg-purple-500/10 border-purple-500/50 text-purple-400'
                                                : 'bg-slate-800/50 border-white/5 text-slate-400'
                                                }`}
                                        >
                                            <Flag className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={goNext}
                                            disabled={!canGoNext}
                                            title="Next question"
                                            aria-label="Next question"
                                            className="w-11 h-11 rounded-full bg-slate-800/50 border border-white/5 text-slate-400 flex items-center justify-center hover:bg-slate-800 disabled:opacity-30 transition-all active:scale-95"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {status === "active" ? (
                                            <>
                                                <button
                                                    onClick={handleCancelExam}
                                                    title="Cancel exam"
                                                    aria-label="Cancel exam"
                                                    className="w-11 h-11 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition-all active:scale-95"
                                                >
                                                    <X className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={goNext}
                                                    disabled={!canGoNext}
                                                    className="h-11 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
                                                    style={{ boxShadow: '0 4px 20px -5px rgba(79, 70, 229, 0.4)' }}
                                                >
                                                    Save & Next
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </>
                                        ) : (
                                            <Link
                                                href="/dashboard"
                                                className="h-11 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
                                                style={{ boxShadow: '0 4px 20px -5px rgba(79, 70, 229, 0.4)' }}
                                            >
                                                Back to Dashboard
                                                <ArrowLeft className="w-4 h-4" />
                                            </Link>
                                        )}
                                    </div>
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
                                                title="Close question palette"
                                                aria-label="Close question palette"
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
                                    {onClose ? (
                                        <button
                                            onClick={onClose}
                                            className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black text-sm hover:bg-white/10 transition-all flex items-center gap-3 active:scale-95"
                                        >
                                            <ArrowLeft className="w-5 h-5" /> DASHBOARD
                                        </button>
                                    ) : (
                                        <Link href="/dashboard" className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black text-sm hover:bg-white/10 transition-all flex items-center gap-3 active:scale-95">
                                            <ArrowLeft className="w-5 h-5" /> DASHBOARD
                                        </Link>
                                    )}
                                    <button
                                        onClick={startReview}
                                        className="px-8 py-4 bg-emerald-600 rounded-2xl text-white font-black text-sm hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-600/20 flex items-center gap-3 active:scale-95"
                                    >
                                        <BookOpen className="w-5 h-5" /> REVIEW
                                    </button>
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
                                        <div className="col-span-2 bg-slate-900/50 border border-white/5 rounded-[2rem] p-6 text-center">
                                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Performance Graph</h3>
                                            <div className="h-[150px] w-full flex items-center justify-center">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <PieChart>
                                                        <Pie
                                                            data={[
                                                                { name: 'Correct', value: Object.values(resultData.subjectAnalysis).reduce((acc, curr) => acc + curr.correct, 0), color: '#10b981' },
                                                                { name: 'Wrong', value: Object.values(resultData.subjectAnalysis).reduce((acc, curr) => acc + curr.wrong, 0), color: '#ef4444' },
                                                                { name: 'Left', value: questions.length - Object.keys(answers).length, color: '#64748b' }
                                                            ]}
                                                            cx="50%" cy="50%" innerRadius={40} outerRadius={60}
                                                            dataKey="value" stroke="none"
                                                        >
                                                            {
                                                                [
                                                                    { name: 'Correct', value: Object.values(resultData.subjectAnalysis).reduce((acc, curr) => acc + curr.correct, 0), color: '#10b981' },
                                                                    { name: 'Wrong', value: Object.values(resultData.subjectAnalysis).reduce((acc, curr) => acc + curr.wrong, 0), color: '#ef4444' },
                                                                    { name: 'Left', value: questions.length - Object.keys(answers).length, color: '#64748b' }
                                                                ].map((entry, index) => (
                                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                                ))
                                                            }
                                                        </Pie>
                                                    </PieChart>
                                                </ResponsiveContainer>
                                            </div>
                                            <div className="flex justify-center gap-4 text-xs font-bold mt-2">
                                                <div className="flex items-center gap-1 text-emerald-400"><div className="w-2 h-2 rounded-full bg-emerald-400"></div> Correct</div>
                                                <div className="flex items-center gap-1 text-red-400"><div className="w-2 h-2 rounded-full bg-red-400"></div> Wrong</div>
                                                <div className="flex items-center gap-1 text-slate-400"><div className="w-2 h-2 rounded-full bg-slate-400"></div> Left Blank</div>
                                            </div>
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
                                    const userAns = answers[q.id];
                                    const format = q.format || "mcq";
                                    const isSkipped = userAns === undefined || String(userAns).trim() === "";
                                    const isCorrect = format === "integer"
                                        ? (!isSkipped && Number(String(userAns).trim()) === q.correctInteger)
                                        : (userAns === q.correctAnswer);
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

                                                {format === "integer" ? (
                                                    <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 mb-10">
                                                        <div className="grid md:grid-cols-2 gap-6">
                                                            <div>
                                                                <div className="text-xs font-black tracking-widest uppercase text-slate-500 mb-2">Your Answer</div>
                                                                <div className={`text-2xl font-black ${isSkipped ? 'text-yellow-300' : isCorrect ? 'text-emerald-300' : 'text-red-300'}`}>
                                                                    {isSkipped ? "Skipped" : String(userAns)}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="text-xs font-black tracking-widest uppercase text-slate-500 mb-2">Correct Answer</div>
                                                                <div className="text-2xl font-black text-emerald-300">{String(q.correctInteger ?? "-")}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="grid md:grid-cols-2 gap-4 mb-10">
                                                        {q.options.map((option, optIdx) => {
                                                            const userAnsIdx = typeof userAns === "number" ? userAns : undefined;
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
                                                )}

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
                                                            <h5 className="text-indigo-400 font-black text-xs uppercase tracking-[0.2em] mb-4">TEACHER&apos;S EXPLANATION</h5>
                                                            <p className="text-slate-300 leading-relaxed text-lg font-medium italic">
                                                                &quot;{q.explanation}&quot;
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

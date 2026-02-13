"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  HelpCircle,
  RotateCcw,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { trackLead } from "@/lib/trackLead";

type Question = {
  id: number;
  text: string;
  options: [string, string, string, string];
  correctAnswer: 0 | 1 | 2 | 3;
  explanation: string;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "A particle moves such that its position vector is r = (3t² î + 4t ĵ). The magnitude of acceleration at t = 2 s is:",
    options: ["6 m/s²", "8 m/s²", "10 m/s²", "12 m/s²"],
    correctAnswer: 2,
    explanation: "r = (3t^2, 4t). v = (6t, 4). a = (6, 0). |a| = 6 m/s² (independent of t).",
  },
  {
    id: 2,
    text: "A block of mass m slides down a rough incline of angle θ. If μ = tanθ, acceleration is:",
    options: ["g", "g/2", "0", "g cosθ"],
    correctAnswer: 2,
    explanation:
      "a = g(sinθ − μcosθ). With μ = tanθ => μcosθ = sinθ, so a = 0.",
  },
  {
    id: 3,
    text: "Escape velocity from a planet is 5 km/s. If radius becomes double (mass constant), new escape velocity:",
    options: ["5 km/s", "2.5 km/s", "5√2 km/s", "10 km/s"],
    correctAnswer: 1,
    explanation: "ve = √(2GM/R). If R doubles, ve becomes 1/√2 times.",
  },
  {
    id: 4,
    text: "A solid sphere and hollow sphere roll without slipping. Which reaches bottom first?",
    options: ["Solid sphere", "Hollow sphere", "Both same", "Depends on mass"],
    correctAnswer: 0,
    explanation:
      "For rolling: a = g sinθ / (1 + I/(mR²)). Solid sphere has smaller I/(mR²) than hollow, so it accelerates more.",
  },
  {
    id: 5,
    text: "In SHM, if total energy is E, potential energy at displacement A/2 is:",
    options: ["E/4", "E/2", "3E/4", "E"],
    correctAnswer: 0,
    explanation: "PE = (1/2)k x², total E = (1/2)kA². At x=A/2 => PE = E/4.",
  },
  {
    id: 6,
    text: "A Carnot engine works between 500K and 300K. Efficiency:",
    options: ["20%", "30%", "40%", "50%"],
    correctAnswer: 2,
    explanation: "η = 1 − Tc/Th = 1 − 300/500 = 0.4 = 40%.",
  },
  {
    id: 7,
    text: "Two capacitors 2μF and 3μF in series. Equivalent capacitance:",
    options: ["1.2 μF", "2.5 μF", "5 μF", "6 μF"],
    correctAnswer: 0,
    explanation: "Ceq = (C1C2)/(C1+C2) = (2×3)/5 = 1.2 μF.",
  },
  {
    id: 8,
    text: "Magnetic field at center of circular loop (radius R) carrying current I:",
    options: ["μ₀I/2R", "μ₀I/R", "μ₀I/4R", "μ₀I/πR"],
    correctAnswer: 0,
    explanation: "B = μ0 I / (2R) for a single-turn circular loop at center.",
  },
  {
    id: 9,
    text: "Work function is 4 eV. Threshold wavelength approx:",
    options: ["310 nm", "400 nm", "500 nm", "620 nm"],
    correctAnswer: 0,
    explanation: "λ0(nm) ≈ 1240/φ(eV) = 1240/4 ≈ 310 nm.",
  },
  {
    id: 10,
    text: "Ratio of de Broglie wavelength of electron and proton accelerated through same potential:",
    options: ["1", "√(mp/me)", "√(me/mp)", "mp/me"],
    correctAnswer: 1,
    explanation:
      "λ = h/√(2mqV) => λ ∝ 1/√m. So λe/λp = √(mp/me).",
  },
  {
    id: 11,
    text: "Two resistors R and 2R in parallel. Equivalent:",
    options: ["2R", "R", "2R/3", "R/3"],
    correctAnswer: 2,
    explanation: "Req = (R×2R)/(R+2R) = 2R/3.",
  },
  {
    id: 12,
    text: "Induced emf is maximum when flux change is:",
    options: ["Zero", "Constant", "Maximum", "Minimum"],
    correctAnswer: 2,
    explanation: "|e| = |dΦ/dt|. It is maximum when rate of change of flux is maximum.",
  },
  {
    id: 13,
    text: "Critical angle for medium (μ = 1.5):",
    options: ["30°", "41.8°", "60°", "48°"],
    correctAnswer: 1,
    explanation: "sin c = 1/μ = 2/3 => c ≈ 41.8°.",
  },
  {
    id: 14,
    text: "Half-life relation with decay constant λ:",
    options: ["T½ = 0.693/λ", "T½ = λ/0.693", "T½ = 1/λ", "T½ = 2/λ"],
    correctAnswer: 0,
    explanation: "T1/2 = ln(2)/λ ≈ 0.693/λ.",
  },
  {
    id: 15,
    text: "Dimensional formula of Planck’s constant:",
    options: ["ML²T⁻¹", "ML²T⁻²", "MLT⁻¹", "ML²T"],
    correctAnswer: 0,
    explanation: "h has dimensions of action: Energy×Time = (ML²T⁻²)×T = ML²T⁻¹.",
  },
];

const DURATION_SECONDS = 45 * 60;

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export default function NeetMockTest1Page() {
  const [status, setStatus] = useState<"intro" | "active" | "result">("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 0 | 1 | 2 | 3>>({});
  const [marked, setMarked] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(DURATION_SECONDS);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

  const currentQ = QUESTIONS[currentIndex];

  useEffect(() => {
    if (status !== "active") return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsSubmitOpen(false);
          setStatus("result");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [status]);

  const stats = useMemo(() => {
    let correct = 0;
    let wrong = 0;

    for (const q of QUESTIONS) {
      const selected = answers[q.id];
      if (selected === undefined) continue;
      if (selected === q.correctAnswer) correct++;
      else wrong++;
    }

    const attempted = correct + wrong;
    const skipped = QUESTIONS.length - attempted;
    const score = correct * 4 - wrong * 1;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    return { correct, wrong, attempted, skipped, score, accuracy };
  }, [answers]);

  const start = () => {
    trackLead({ action: "neet_mock1_start", entity_type: "test", entity_id: "neet-mock-1" });
    setStatus("active");
    setCurrentIndex(0);
    setAnswers({});
    setMarked(new Set());
    setTimeLeft(DURATION_SECONDS);
  };

  const submit = () => {
    trackLead({
      action: "neet_mock1_submit",
      entity_type: "test",
      entity_id: "neet-mock-1",
      meta: { score: stats.score, accuracy: stats.accuracy, attempted: stats.attempted },
    });
    setIsSubmitOpen(false);
    setStatus("result");
  };

  const toggleMark = () => {
    const qId = currentQ.id;
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {status === "intro" && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>

          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-16 opacity-10 bg-emerald-600 blur-[70px] rounded-full" />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white">NEET 2026 – Full Mock Test 1</h1>
                  <p className="text-slate-400 mt-2">Physics (Very Hard) • Q1 to Q15 • MCQ (4 options)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-2 rounded-2xl bg-slate-950/60 border border-white/10">
                    <div className="text-xs text-slate-500 font-bold uppercase">Duration</div>
                    <div className="text-white font-black">45 mins</div>
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-slate-950/60 border border-white/10">
                    <div className="text-xs text-slate-500 font-bold uppercase">Questions</div>
                    <div className="text-white font-black">15</div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-2xl p-5 sm:p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-indigo-300 mt-0.5" />
                  <div className="text-sm text-slate-300 leading-relaxed">
                    <div className="font-bold text-indigo-200 mb-1">Marking Scheme</div>
                    <div>
                      Correct: <span className="text-green-400 font-bold">+4</span>, Wrong: <span className="text-red-400 font-bold">-1</span>, Unattempted: 0
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={start}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-2xl shadow-lg shadow-emerald-900/20 transition-all active:scale-[0.99]"
                >
                  Start Test
                </button>
                <Link
                  href="/dashboard"
                  className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/5 text-slate-300 font-bold text-center"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {status === "active" && (
        <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col">
          <header className="bg-slate-900/70 backdrop-blur border-b border-white/10 px-4 py-3 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-white font-black truncate">NEET Mock Test 1</div>
              <div className="text-xs text-slate-400">Physics • Very Hard</div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className={`flex items-center gap-2 font-mono font-black ${timeLeft < 5 * 60 ? "text-red-400" : "text-slate-200"}`}>
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
              </div>
              <button
                onClick={() => setIsSubmitOpen(true)}
                className="px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 font-bold"
              >
                Submit
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto">
            <div className="max-w-5xl mx-auto px-4 py-6">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
                <main className="bg-slate-900/50 border border-white/10 rounded-3xl p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="text-sm text-slate-400">
                      Question <span className="text-white font-black">{currentIndex + 1}</span> / {QUESTIONS.length}
                    </div>
                    <button
                      onClick={toggleMark}
                      className={`px-3 py-2 rounded-xl border text-sm font-bold flex items-center gap-2 transition-colors ${marked.has(currentQ.id)
                        ? "bg-purple-500/10 border-purple-500/30 text-purple-200"
                        : "bg-slate-950/40 border-white/10 text-slate-300 hover:bg-white/5"
                        }`}
                    >
                      <Flag className="w-4 h-4" />
                      <span className="hidden sm:inline">{marked.has(currentQ.id) ? "Marked" : "Mark"}</span>
                    </button>
                  </div>

                  <div className="text-lg sm:text-xl font-semibold text-white leading-relaxed">
                    <span className="text-slate-500 font-mono mr-2">Q{currentQ.id}.</span>
                    {currentQ.text}
                  </div>

                  <div className="mt-6 grid gap-3">
                    {currentQ.options.map((opt, idx) => {
                      const selected = answers[currentQ.id] === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setAnswers((prev) => ({ ...prev, [currentQ.id]: idx as 0 | 1 | 2 | 3 }))}
                          className={`text-left p-4 rounded-2xl border transition-colors flex items-start gap-3 ${selected
                            ? "bg-indigo-600/10 border-indigo-500/40"
                            : "bg-slate-950/30 border-white/10 hover:bg-white/5"
                            }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 border ${selected
                              ? "bg-indigo-600 border-indigo-500 text-white"
                              : "border-white/10 text-slate-300"
                              }`}
                          >
                            {String.fromCharCode(65 + idx)}
                          </div>
                          <div className={`${selected ? "text-white" : "text-slate-200"}`}>{opt}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))}
                      disabled={currentIndex === 0}
                      className="flex-1 px-4 py-3 rounded-2xl bg-slate-950/40 border border-white/10 text-slate-200 font-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/5 flex items-center justify-center gap-2"
                    >
                      <ChevronLeft className="w-4 h-4" /> Prev
                    </button>
                    <button
                      onClick={() => setCurrentIndex((p) => Math.min(QUESTIONS.length - 1, p + 1))}
                      disabled={currentIndex === QUESTIONS.length - 1}
                      className="flex-1 px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </main>

                <aside className="bg-slate-900/50 border border-white/10 rounded-3xl p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white font-black">Palette</div>
                    <div className="text-xs text-slate-400">
                      {Object.keys(answers).length}/{QUESTIONS.length}
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {QUESTIONS.map((q, idx) => {
                      const isAnswered = answers[q.id] !== undefined;
                      const isMarked = marked.has(q.id);
                      const isCurrent = idx === currentIndex;

                      let cls = "bg-slate-950/30 border-white/10 text-slate-300";
                      if (isAnswered) cls = "bg-emerald-600/20 border-emerald-500/30 text-emerald-200";
                      if (isMarked) cls = "bg-purple-600/20 border-purple-500/30 text-purple-200";
                      if (isCurrent) cls = "ring-2 ring-white bg-slate-700/60 border-white/10 text-white";

                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentIndex(idx)}
                          className={`w-10 h-10 rounded-xl border text-sm font-black transition-all ${cls}`}
                          aria-label={`Go to question ${q.id}`}
                        >
                          {q.id}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-5 text-xs text-slate-400 space-y-2">
                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-emerald-600/20 border border-emerald-500/30" /> Answered</div>
                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-purple-600/20 border border-purple-500/30" /> Marked</div>
                  </div>
                </aside>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isSubmitOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center"
                onClick={() => setIsSubmitOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="text-white font-black text-xl">Submit Test?</div>
                  <div className="text-slate-400 text-sm mt-2">You can still come back later, but score will be calculated now.</div>

                  <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                    <div className="bg-slate-950/40 border border-white/10 rounded-2xl p-3">
                      <div className="text-emerald-300 font-black text-xl">{stats.attempted}</div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Attempted</div>
                    </div>
                    <div className="bg-slate-950/40 border border-white/10 rounded-2xl p-3">
                      <div className="text-purple-300 font-black text-xl">{marked.size}</div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Marked</div>
                    </div>
                    <div className="bg-slate-950/40 border border-white/10 rounded-2xl p-3">
                      <div className="text-slate-200 font-black text-xl">{stats.skipped}</div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Unanswered</div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setIsSubmitOpen(false)}
                      className="flex-1 px-4 py-3 rounded-2xl border border-white/10 text-slate-200 font-black hover:bg-white/5"
                    >
                      Continue
                    </button>
                    <button
                      onClick={submit}
                      className="flex-1 px-4 py-3 rounded-2xl bg-red-500 hover:bg-red-400 text-white font-black"
                    >
                      Submit
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {status === "result" && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <Link href="/dashboard" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </Link>
            <button
              onClick={start}
              className="px-4 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black inline-flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Retake
            </button>
          </div>

          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-950/40 border border-white/10 rounded-2xl p-5">
                <div className="text-xs text-slate-500 font-bold uppercase">Score</div>
                <div className="text-4xl font-black text-white mt-1">{stats.score}</div>
              </div>
              <div className="bg-slate-950/40 border border-white/10 rounded-2xl p-5">
                <div className="text-xs text-slate-500 font-bold uppercase">Accuracy</div>
                <div className="text-4xl font-black text-white mt-1">{stats.accuracy}%</div>
              </div>
              <div className="bg-slate-950/40 border border-white/10 rounded-2xl p-5">
                <div className="text-xs text-slate-500 font-bold uppercase">Attempted</div>
                <div className="text-4xl font-black text-white mt-1">{stats.attempted}/15</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 text-center">
                <div className="text-2xl font-black text-emerald-300">{stats.correct}</div>
                <div className="text-xs text-emerald-200/70 font-bold uppercase">Correct</div>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-center">
                <div className="text-2xl font-black text-red-300">{stats.wrong}</div>
                <div className="text-xs text-red-200/70 font-bold uppercase">Wrong</div>
              </div>
              <div className="bg-slate-700/20 border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-black text-slate-200">{stats.skipped}</div>
                <div className="text-xs text-slate-400 font-bold uppercase">Unanswered</div>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-4 text-center">
                <div className="text-2xl font-black text-purple-200">{marked.size}</div>
                <div className="text-xs text-purple-200/70 font-bold uppercase">Marked</div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="text-white font-black text-2xl mb-4">Answer Key & Review</div>
            <div className="space-y-4">
              {QUESTIONS.map((q) => {
                const selected = answers[q.id];
                const isSkipped = selected === undefined;
                const isCorrect = !isSkipped && selected === q.correctAnswer;
                const StatusIcon = isCorrect ? CheckCircle2 : isSkipped ? HelpCircle : XCircle;
                const statusColor = isCorrect ? "text-emerald-300" : isSkipped ? "text-yellow-300" : "text-red-300";

                return (
                  <div key={q.id} className="bg-slate-900/50 border border-white/10 rounded-3xl p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="text-white font-bold">
                          <span className="text-slate-500 font-mono mr-2">Q{q.id}.</span>
                          {q.text}
                        </div>
                        <div className={`mt-2 text-sm font-bold inline-flex items-center gap-2 ${statusColor}`}>
                          <StatusIcon className="w-4 h-4" />
                          {isCorrect ? "Correct" : isSkipped ? "Not Attempted" : "Incorrect"}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-2">
                      {q.options.map((opt, idx) => {
                        const isAnswer = idx === q.correctAnswer;
                        const isSelected = idx === selected;

                        let cls = "bg-slate-950/30 border-white/10 text-slate-300";
                        if (isAnswer) cls = "bg-emerald-500/10 border-emerald-500/30 text-white";
                        else if (isSelected) cls = "bg-red-500/10 border-red-500/30 text-white";

                        return (
                          <div key={idx} className={`p-3 rounded-2xl border ${cls} flex items-start gap-3`}>
                            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black bg-slate-900/60 border border-white/10 shrink-0">
                              {String.fromCharCode(65 + idx)}
                            </div>
                            <div className="flex-1">{opt}</div>
                            {isAnswer && <CheckCircle2 className="w-5 h-5 text-emerald-300" />}
                            {isSelected && !isAnswer && <XCircle className="w-5 h-5 text-red-300" />}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 bg-indigo-900/20 border border-indigo-500/20 rounded-2xl p-4 text-sm text-slate-300">
                      <div className="text-indigo-200 font-black mb-1">Explanation</div>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

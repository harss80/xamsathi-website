"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

type TargetExam = "neet" | "jee" | "cbse" | "other";
type Stream = "pcm" | "pcb" | "commerce" | "arts" | "na";
type Medium = "english" | "hindi" | "other";

function getBackendBase(): string {
  const envBase = (process.env.NEXT_PUBLIC_BACKEND_URL || "").trim();
  if (envBase) return envBase;
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") return "http://localhost:3001";
  }
  throw new Error("Missing NEXT_PUBLIC_BACKEND_URL");
}

function readCookie(name: string): string | null {
  try {
    const m = document.cookie.match(
      new RegExp(`(?:^|; )${name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}=([^;]*)`)
    );
    return m ? decodeURIComponent(m[1]) : null;
  } catch {
    return null;
  }
}

import { motion, AnimatePresence } from "framer-motion";
import {
  User, BookOpen, GraduationCap, MapPin, Phone,
  Upload, Camera, CheckCircle2, ChevronRight,
  Sparkles, ShieldCheck, Heart, ArrowRight, Loader2,
  School, Target, MessageCircle
} from "lucide-react";

function AdmissionPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); // Optional multi-step feel

  const [form, setForm] = useState({
    name: "",
    class_grade: 10,
    target_exam: "cbse" as TargetExam,
    stream: "na" as Stream,
    medium: "english" as Medium,
    school: "",
    city: "",
    guardian_phone: "",
    student_photo: "" as string,
  });

  const [photoPreview, setPhotoPreview] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("xamsathi_user");
    if (saved) {
      try {
        const u = JSON.parse(saved) as Record<string, unknown>;
        const onboarding = !!u.onboarding_completed;
        if (onboarding) {
          const next = searchParams?.get("next");
          const safeNext = next && next.startsWith("/") ? next : "/dashboard";
          router.replace(safeNext);
          return;
        }

        setForm((prev) => {
          const next = { ...prev };
          if (typeof u.name === "string") next.name = u.name;
          const cg = u.class_grade;
          if (typeof cg === "number" && cg >= 1 && cg <= 12) next.class_grade = cg;
          return next;
        });
      } catch {
        // ignore
      }
    }
  }, [router, searchParams]);

  const userId = useMemo(() => {
    try {
      const saved = localStorage.getItem("xamsathi_user");
      if (!saved) return "";
      const u = JSON.parse(saved) as Record<string, unknown>;
      const id = u.id || u._id || u.user_id;
      return typeof id === "string" ? id : "";
    } catch {
      return "";
    }
  }, []);

  const token = useMemo(() => {
    try {
      return localStorage.getItem("xamsathi_token") || readCookie("xamsathi_token") || "";
    } catch {
      return "";
    }
  }, []);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      if (!result) return;

      if (result.length > 5 * 1024 * 1024) {
        setError("Photo too large (max 5MB)");
        return;
      }

      setError("");
      setPhotoPreview(result);
      setForm((p) => ({ ...p, student_photo: result }));
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".png", ".jpg", ".webp"] },
    maxFiles: 1,
  });

  const submit = async () => {
    if (!form.student_photo) {
      setError("Please upload your student photo to proceed.");
      return;
    }

    setIsLoading(true);
    setError("");
    try {
      const base = getBackendBase();
      const url = new URL("/api/me/admission", base).toString();
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "x-user-id": userId,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          ...form,
          class_grade: Number(form.class_grade),
        }),
      });

      const data = (await res.json()) as { user?: unknown; error?: string };
      if (!res.ok) {
        setError(data?.error || "Submission failed. Please try again.");
        return;
      }

      if (data.user) {
        localStorage.setItem("xamsathi_user", JSON.stringify(data.user));
      }

      const next = searchParams?.get("next");
      const safeNext = next && next.startsWith("/") ? next : "/dashboard";
      router.replace(safeNext);
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (step === 1) {
      if (!form.name || !form.guardian_phone || !form.city) {
        setError("Please fill all personal details.");
        return;
      }
    }
    if (step === 2) {
      if (!form.school) {
        setError("Please enter your school name.");
        return;
      }
    }
    setError("");
    setStep(s => s + 1);
  };

  const prevStep = () => {
    setError("");
    setStep(s => s - 1);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col items-center p-4 py-12 md:p-8">
      {/* Top Header / Progress */}
      <div className="w-full max-w-2xl mb-12">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 rounded-[2rem] bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center mb-6 shadow-sm">
            <GraduationCap className="w-8 h-8 text-indigo-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">Academic Registration</h1>
          <p className="text-slate-400 font-medium">Step {step} of 3: {step === 1 ? 'Personal Profile' : step === 2 ? 'Academic Details' : 'Verify Identity'}</p>
        </div>

        <div className="flex items-center gap-2 px-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 h-1.5 rounded-full bg-slate-800 relative overflow-hidden">
              <motion.div
                initial={false}
                animate={{ width: step >= s ? "100%" : "0%" }}
                className={`absolute inset-0 ${step === s ? "bg-indigo-500" : "bg-indigo-600/40"}`}
              />
            </div>
          ))}
        </div>
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="w-full max-w-2xl bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-6 md:p-10 shadow-xl"
      >
        <AnimatePresence mode="wait">
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdmissionInput
                  label="Student Full Name"
                  icon={User}
                  value={form.name}
                  onChange={(v) => setForm(p => ({ ...p, name: v }))}
                  placeholder="e.g. Rahul Sharma"
                />
                <AdmissionInput
                  label="Guardian Contact"
                  icon={Phone}
                  value={form.guardian_phone}
                  onChange={(v) => setForm(p => ({ ...p, guardian_phone: v }))}
                  placeholder="Parent mobile number"
                />
                <AdmissionInput
                  label="Current City"
                  icon={MapPin}
                  value={form.city}
                  onChange={(v) => setForm(p => ({ ...p, city: v }))}
                  placeholder="Your city"
                />
                <AdmissionSelect
                  label="Instruction Medium"
                  icon={MessageCircle}
                  value={form.medium}
                  options={[{ v: 'english', l: 'English' }, { v: 'hindi', l: 'Hindi' }, { v: 'other', l: 'Other' }]}
                  onChange={(v) => setForm(p => ({ ...p, medium: v as Medium }))}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdmissionSelect
                  label="Class / Grade"
                  icon={GraduationCap}
                  value={String(form.class_grade)}
                  options={Array.from({ length: 12 }).map((_, i) => ({ v: i + 1, l: `Class ${i + 1}` }))}
                  onChange={(v) => setForm(p => ({ ...p, class_grade: Number(v) }))}
                />
                <AdmissionSelect
                  label="Target Exam"
                  icon={Target}
                  value={form.target_exam}
                  options={[{ v: 'cbse', l: 'Board Exams' }, { v: 'neet', l: 'NEET' }, { v: 'jee', l: 'JEE' }, { v: 'other', l: 'Other' }]}
                  onChange={(v) => setForm(p => ({ ...p, target_exam: v as TargetExam }))}
                />
                <AdmissionSelect
                  label="Academic Stream"
                  icon={BookOpen}
                  value={form.stream}
                  options={[{ v: 'na', l: 'N/A' }, { v: 'pcm', l: 'PCM' }, { v: 'pcb', l: 'PCB' }, { v: 'commerce', l: 'Commerce' }, { v: 'arts', l: 'Arts' }]}
                  onChange={(v) => setForm(p => ({ ...p, stream: v as Stream }))}
                />
                <AdmissionInput
                  label="School Name"
                  icon={School}
                  value={form.school}
                  onChange={(v) => setForm(p => ({ ...p, school: v }))}
                  placeholder="Full school name"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Student Identity</h3>
                <p className="text-slate-400 text-sm">Upload a passport-size photo for your digital identity.</p>
              </div>

              <div
                {...getRootProps()}
                className={`relative border-2 border-dashed rounded-[2.5rem] p-10 text-center transition-all group cursor-pointer ${isDragActive ? "border-indigo-500 bg-indigo-500/5 shadow-inner" : "border-white/10 hover:border-indigo-500/30 hover:bg-white/5"}`}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center gap-6">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] bg-[#020617] border-4 border-slate-800 shadow-2xl overflow-hidden">
                    {photoPreview ? (
                      <Image src={photoPreview} alt="Preview" fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-700 bg-slate-900/40">
                        <Camera className="w-12 h-12 mb-2 opacity-30" />
                        <span className="text-[10px] uppercase font-black tracking-widest">Click to Upload</span>
                      </div>
                    )}
                  </div>
                  <div className="max-w-xs">
                    <h4 className="text-white font-bold mb-1">Passport Size Photo</h4>
                    <p className="text-slate-500 text-[11px] font-medium leading-relaxed">
                      Make sure your face is clearly visible. Supported types: JPG, PNG (Max 5MB).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

        {error && (
          <div className="mt-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 shrink-0" /> {error}
          </div>
        )}

        <div className="flex items-center justify-between mt-10">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={step === 3 ? submit : nextStep}
            disabled={isLoading}
            className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm transition-all shadow-lg active:scale-95 disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                {step === 3 ? 'Final Submit' : 'Next Step'}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </motion.div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-500">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure Data
        </div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
          <Heart className="w-4 h-4 text-pink-500" /> Academic Care
        </div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
          <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Instant Access
        </div>
      </div>
    </div>
  );
}

interface AdmissionInputProps {
  label: string;
  icon: any;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

function AdmissionInput({ label, icon: Icon, value, onChange, placeholder }: AdmissionInputProps) {
  return (
    <div className="space-y-2.5">
      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-lg bg-slate-800 border border-white/5 transition-colors group-focus-within:bg-indigo-600 group-focus-within:border-indigo-400">
          <Icon className="w-3 h-3 text-slate-400 group-focus-within:text-white" />
        </div>
        <input
          type="text"
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#020617] border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white text-sm font-bold placeholder:text-slate-600 focus:bg-white/[0.02] focus:border-indigo-500/50 transition-all outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

interface AdmissionSelectProps {
  label: string;
  icon: any;
  value: string;
  options: Array<{ v: string | number; l: string }>;
  onChange: (v: string) => void;
}

function AdmissionSelect({ label, icon: Icon, value, options, onChange }: AdmissionSelectProps) {
  return (
    <div className="space-y-2.5">
      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative group text-white">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-lg bg-slate-800 border border-white/5 transition-colors group-focus-within:bg-indigo-600 group-focus-within:border-indigo-400">
          <Icon className="w-3 h-3 text-slate-400 group-focus-within:text-white" />
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#020617] border border-white/5 rounded-2xl py-4 pl-14 pr-12 text-white text-sm font-bold focus:bg-white/[0.02] focus:border-indigo-500/50 transition-all appearance-none outline-none cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt.v} value={opt.v} className="bg-slate-900">{opt.l}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
    </div>
  );
}

export default function AdmissionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">Loading...</div>}>
      <AdmissionPageInner />
    </Suspense>
  );
}

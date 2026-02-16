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

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
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

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-4xl relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">

          {/* Sidebar / Info */}
          <div className="lg:col-span-4 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full" />
              <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-white/50 rotate-45" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20">
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </div>
              <h1 className="text-3xl font-black leading-tight mb-4">
                Welcome to the <span className="text-yellow-200">Elite</span> Circle
              </h1>
              <p className="text-indigo-100/80 font-medium text-sm leading-relaxed">
                Complete your admission process to unlock personalized tests, expert guidance, and global leaderboards.
              </p>
            </div>

            <div className="relative z-10 mt-12 space-y-6">
              {[
                { icon: ShieldCheck, text: "Verified Profile" },
                { icon: Heart, text: "Academic Support" },
                { icon: CheckCircle2, text: "Course Unlocked" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-indigo-200" />
                  </div>
                  <span className="text-sm font-bold opacity-90">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-8 p-6 md:p-12">
            <form onSubmit={submit} className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white">Admission Form</h2>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mt-1">Academic Onboarding</p>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-black text-indigo-400">
                  Step 1 of 1
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" /> {error}
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AdmissionInput
                  label="Student Full Name"
                  icon={User}
                  value={form.name}
                  onChange={(v) => setForm(p => ({ ...p, name: v }))}
                  placeholder="e.g. Rahul Sharma"
                />
                <AdmissionSelect
                  label="Class / Grade"
                  icon={GraduationCap}
                  value={String(form.class_grade)}
                  options={Array.from({ length: 12 }).map((_, i) => ({ v: i + 1, l: `Class ${i + 1}` }))}
                  onChange={(v) => setForm(p => ({ ...p, class_grade: Number(v) }))}
                />
                <AdmissionSelect
                  label="Target Board / Exam"
                  icon={Target}
                  value={form.target_exam}
                  options={[{ v: 'cbse', l: 'CBSE' }, { v: 'neet', l: 'NEET' }, { v: 'jee', l: 'JEE' }, { v: 'other', l: 'Other' }]}
                  onChange={(v) => setForm(p => ({ ...p, target_exam: v as TargetExam }))}
                />
                <AdmissionSelect
                  label="Academic Stream"
                  icon={BookOpen}
                  value={form.stream}
                  options={[{ v: 'na', l: 'N/A' }, { v: 'pcm', l: 'PCM' }, { v: 'pcb', l: 'PCB' }, { v: 'commerce', l: 'Commerce' }, { v: 'arts', l: 'Arts' }]}
                  onChange={(v) => setForm(p => ({ ...p, stream: v as Stream }))}
                />
                <AdmissionSelect
                  label="Instruction Medium"
                  icon={MessageCircle}
                  value={form.medium}
                  options={[{ v: 'english', l: 'English' }, { v: 'hindi', l: 'Hindi' }, { v: 'other', l: 'Other' }]}
                  onChange={(v) => setForm(p => ({ ...p, medium: v as Medium }))}
                />
                <AdmissionInput
                  label="Guardian Mobile No."
                  icon={Phone}
                  value={form.guardian_phone}
                  onChange={(v) => setForm(p => ({ ...p, guardian_phone: v }))}
                  placeholder="Parent's contact"
                />
                <AdmissionInput
                  label="School Name"
                  icon={School}
                  value={form.school}
                  onChange={(v) => setForm(p => ({ ...p, school: v }))}
                  placeholder="Enter school name"
                />
                <AdmissionInput
                  label="Current City"
                  icon={MapPin}
                  value={form.city}
                  onChange={(v) => setForm(p => ({ ...p, city: v }))}
                  placeholder="Your city"
                />
              </div>

              {/* Photo Upload */}
              <div className="space-y-4 pt-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Camera className="w-3 h-3" /> Student Passport Photo
                </label>
                <div
                  {...getRootProps()}
                  className={`relative border-2 border-dashed rounded-[2rem] p-8 text-center transition-all group cursor-pointer ${isDragActive ? "border-indigo-500 bg-indigo-500/5 shadow-inner" : "border-white/10 hover:border-indigo-500/30 hover:bg-white/5"
                    }`}
                >
                  <input {...getInputProps()} />
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-28 h-28 rounded-3xl bg-slate-950 border-4 border-slate-900 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform">
                      {photoPreview ? (
                        <Image src={photoPreview} alt="Preview" fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-600 bg-slate-900/50">
                          <User className="w-10 h-10 opacity-20" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-white font-bold mb-1">Upload Clearance Photo</h4>
                      <p className="text-slate-400 text-xs font-medium max-w-xs">
                        JPG/PNG supported (Max 5MB). Photo will be used for your official student identity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative flex items-center gap-3 px-10 py-4 rounded-[1.5rem] bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm transition-all shadow-xl shadow-indigo-600/20 active:scale-95 disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Go to Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
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
    <div className="space-y-3">
      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative group">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500/50 group-focus-within:text-indigo-400 transition-colors" />
        <input
          type="text"
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white text-sm font-bold placeholder:text-slate-600 focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/40 transition-all outline-none"
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
    <div className="space-y-3 font-bold font-sans">
      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative group text-white">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500/50 group-focus-within:text-indigo-400 transition-colors" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-slate-900 border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white text-sm font-bold focus:bg-white/10 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/40 transition-all appearance-none outline-none"
        >
          {options.map((opt) => (
            <option key={opt.v} value={opt.v} className="bg-slate-900">{opt.l}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
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

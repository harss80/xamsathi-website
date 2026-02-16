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

function AdmissionPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

      // Keep it conservative to avoid 413 / big mongo docs (MVP)
      if (result.length > 5.2 * 1024 * 1024) {
        setError("Photo too large. Please upload a smaller image.");
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
    setError("");

    if (!userId) {
      setError("Missing user session. Please login again.");
      return;
    }

    if (!form.student_photo) {
      setError("Student photo is required.");
      return;
    }

    setIsLoading(true);
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
          name: form.name,
          class_grade: Number(form.class_grade),
          target_exam: form.target_exam,
          stream: form.stream,
          medium: form.medium,
          school: form.school,
          city: form.city,
          guardian_phone: form.guardian_phone,
          student_photo: form.student_photo,
        }),
      });

      const data = (await res.json()) as { user?: unknown; error?: string };
      if (!res.ok) {
        setError(data?.error || "Admission form submission failed");
        return;
      }

      if (data.user) {
        localStorage.setItem("xamsathi_user", JSON.stringify(data.user));
      }

      const next = searchParams?.get("next");
      const safeNext = next && next.startsWith("/") ? next : "/dashboard";
      router.replace(safeNext);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("NEXT_PUBLIC_BACKEND_URL")) {
        setError("Backend configuration missing. Please try again after deployment update.");
      } else {
        setError("Network error. Try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Admission Form</h1>
              <p className="text-slate-400 text-sm mt-1">Complete your profile to continue.</p>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="p-6 sm:p-8 space-y-6">
          {error ? (
            <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-2xl text-sm">
              {error}
            </div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="admission-name" className="text-sm font-semibold text-slate-200">Student Name</label>
              <input
                id="admission-name"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                required
                className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                placeholder="Enter student name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="admission-class" className="text-sm font-semibold text-slate-200">Class / Grade</label>
              <select
                id="admission-class"
                value={String(form.class_grade)}
                onChange={(e) => setForm((p) => ({ ...p, class_grade: Number(e.target.value) }))}
                className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <option key={i + 1} value={i + 1} className="bg-slate-900">
                    Class {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="admission-target" className="text-sm font-semibold text-slate-200">Target</label>
              <select
                id="admission-target"
                value={form.target_exam}
                onChange={(e) => setForm((p) => ({ ...p, target_exam: e.target.value as TargetExam }))}
                className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              >
                <option value="cbse" className="bg-slate-900">CBSE</option>
                <option value="neet" className="bg-slate-900">NEET</option>
                <option value="jee" className="bg-slate-900">JEE</option>
                <option value="other" className="bg-slate-900">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="admission-stream" className="text-sm font-semibold text-slate-200">Stream (11/12)</label>
              <select
                id="admission-stream"
                value={form.stream}
                onChange={(e) => setForm((p) => ({ ...p, stream: e.target.value as Stream }))}
                className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              >
                <option value="na" className="bg-slate-900">Not Applicable</option>
                <option value="pcm" className="bg-slate-900">PCM</option>
                <option value="pcb" className="bg-slate-900">PCB</option>
                <option value="commerce" className="bg-slate-900">Commerce</option>
                <option value="arts" className="bg-slate-900">Arts</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="admission-medium" className="text-sm font-semibold text-slate-200">Medium</label>
              <select
                id="admission-medium"
                value={form.medium}
                onChange={(e) => setForm((p) => ({ ...p, medium: e.target.value as Medium }))}
                className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
              >
                <option value="english" className="bg-slate-900">English</option>
                <option value="hindi" className="bg-slate-900">Hindi</option>
                <option value="other" className="bg-slate-900">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="admission-guardian-phone" className="text-sm font-semibold text-slate-200">Guardian Phone</label>
              <input
                id="admission-guardian-phone"
                value={form.guardian_phone}
                onChange={(e) => setForm((p) => ({ ...p, guardian_phone: e.target.value }))}
                className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                placeholder="Optional"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="admission-school" className="text-sm font-semibold text-slate-200">School</label>
              <input
                id="admission-school"
                value={form.school}
                onChange={(e) => setForm((p) => ({ ...p, school: e.target.value }))}
                className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                placeholder="Optional"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="admission-city" className="text-sm font-semibold text-slate-200">City</label>
              <input
                id="admission-city"
                value={form.city}
                onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                placeholder="Optional"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-200">Student Photo (Required)</label>
            <div
              {...getRootProps()}
              className={`border border-dashed rounded-3xl p-6 sm:p-8 bg-slate-950/30 cursor-pointer transition-colors ${
                isDragActive ? "border-indigo-400" : "border-slate-700"
              }`}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-32 h-32 rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden relative">
                  {photoPreview ? (
                    <Image src={photoPreview} alt="Student photo" fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs text-center px-3">
                      Click or drop an image
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold">Upload a clear photo</div>
                  <div className="text-slate-400 text-sm mt-1">
                    JPG/PNG/WebP. Keep it small for fast upload.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold disabled:opacity-70"
            >
              {isLoading ? "Submitting..." : "Submit & Continue"}
            </button>
          </div>
        </form>
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

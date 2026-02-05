"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, CheckSquare, Square, Trash2, X, Rocket, FileText, BookOpen, BarChart3, Megaphone, Calendar, User, Target, GraduationCap } from "lucide-react";

export default function DashboardUtilities() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const defaultTodos = [
    { id: "t1", text: "Finish today’s practice", done: false },
    { id: "t2", text: "Review mistakes from last mock test", done: false },
  ];
  const [todos, setTodos] = useState<{ id: string; text: string; done: boolean }[]>(() => {
    if (typeof window === "undefined") return defaultTodos;
    try {
      let raw = localStorage.getItem("xamsathi_todos");
      if (!raw) raw = localStorage.getItem("eduman_todos");
      if (raw) {
        const parsed = JSON.parse(raw) as { id: string; text: string; done: boolean }[];
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {}
    return defaultTodos;
  });
  const [newTodo, setNewTodo] = useState("");
  const awaitingSecondKey = useRef(false);
  const gTimer = useRef<number | null>(null);

  // Profile completion (persisted)
  const [profile, setProfile] = useState<{ photo: boolean; bio: boolean; goals: boolean; subjects: boolean }>(() => {
    if (typeof window === "undefined") return { photo: false, bio: false, goals: false, subjects: false };
    try {
      let raw = localStorage.getItem("xamsathi_profile");
      if (!raw) raw = localStorage.getItem("eduman_profile");
      if (raw) return JSON.parse(raw);
    } catch {}
    return { photo: false, bio: false, goals: false, subjects: false };
  });
  useEffect(() => {
    try {
      const val = JSON.stringify(profile);
      localStorage.setItem("xamsathi_profile", val);
      localStorage.setItem("eduman_profile", val);
    } catch {}
  }, [profile]);

  const completedCount = (profile.photo ? 1 : 0) + (profile.bio ? 1 : 0) + (profile.goals ? 1 : 0) + (profile.subjects ? 1 : 0);
  const profilePercent = Math.round((completedCount / 4) * 100);

  // Announcements + Upcoming classes
  const [announcements, setAnnouncements] = useState<{ id: number; title: string; time: string; tag?: string }[]>([
    { id: 1, title: "Weekly mock test results are live", time: "2h ago", tag: "Tests" },
    { id: 2, title: "New Chemistry notes uploaded", time: "Yesterday", tag: "Notes" },
    { id: 3, title: "Live doubt-solving session at 6 PM", time: "Today", tag: "Live" },
  ]);
  const [miniSchedule, setMiniSchedule] = useState([
    { id: 1, day: "Today", time: "10:00 AM", subject: "Physics", topic: "Rotational Motion - Lec 4", instructor: "Dr. H.C. Verma", live: true },
    { id: 2, day: "Today", time: "02:00 PM", subject: "Mathematics", topic: "Complex Numbers", instructor: "Prof. R.K. Gupta", live: false },
    { id: 3, day: "Tomorrow", time: "04:30 PM", subject: "Chemistry", topic: "Organic Reaction Mechanisms", instructor: "Mrs. S. Sharma", live: false },
  ]);

  // Reports snapshot
  const [reportAvg, setReportAvg] = useState<number>(76);
  const [reportTrend, setReportTrend] = useState<number[]>([50, 60, 55, 70, 65, 80, 72, 78]);
  const [reportSubjects, setReportSubjects] = useState<{ name: string; value: number; color?: string }[]>([
    { name: 'Physics', value: 78, color: 'bg-emerald-500' },
    { name: 'Chemistry', value: 72, color: 'bg-blue-500' },
    { name: 'Mathematics', value: 81, color: 'bg-violet-500' },
  ]);

  const trendPoints = useMemo(() => {
    const n = reportTrend.length;
    if (n === 0) return "";
    return reportTrend.map((v, i) => {
      const x = (i / (n - 1)) * 200;
      const y = 60 - (Math.max(0, Math.min(100, v)) / 100) * 50;
      return `${x},${y}`;
    }).join(' ');
  }, [reportTrend]);


  useEffect(() => {
    try {
      const val = JSON.stringify(todos);
      localStorage.setItem("xamsathi_todos", val);
      localStorage.setItem("eduman_todos", val);
    } catch {}
  }, [todos]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      const k = e.key.toLowerCase();
      if (!awaitingSecondKey.current) {
        if (k === "g") {
          awaitingSecondKey.current = true;
          if (gTimer.current) window.clearTimeout(gTimer.current);
          gTimer.current = window.setTimeout(() => { awaitingSecondKey.current = false; }, 1000);
        }
        return;
      } else {
        if (k === "o") router.push("/dashboard");
        else if (k === "t") router.push("/dashboard?tab=tests");
        else if (k === "c") router.push("/dashboard?tab=courses");
        else if (k === "r") router.push("/dashboard?tab=reports");
        else if (k === "s") router.push("/dashboard?tab=schedule");
        else if (k === "n") router.push("/news");
        else if (k === "p") router.push("/profile");
        else if (k === "u") setOpen(true);
        awaitingSecondKey.current = false;
        if (gTimer.current) window.clearTimeout(gTimer.current);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  // Fetch announcements and schedule
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const [aRes, sRes, rRes] = await Promise.all([
          fetch('/api/announcements'),
          fetch('/api/schedule'),
          fetch('/api/reports')
        ]);
        if (!cancelled) {
          if (aRes.ok) {
            const a = await aRes.json();
            if (Array.isArray(a)) setAnnouncements(a);
          }
          if (sRes.ok) {
            const s = await sRes.json();
            if (Array.isArray(s)) setMiniSchedule(s);
          }
          if (rRes.ok) {
            const r = await rRes.json();
            if (r?.summary?.overallAvg != null) setReportAvg(Number(r.summary.overallAvg));
            if (Array.isArray(r?.trend)) setReportTrend(r.trend as number[]);
            if (Array.isArray(r?.subjects)) {
              const mapped = (r.subjects as { name: string; value: number }[]).map((s: { name: string; value: number }, i: number) => ({
                name: s.name,
                value: s.value,
                color: ["bg-emerald-500","bg-blue-500","bg-violet-500","bg-amber-500"][i % 4]
              }));
              setReportSubjects(mapped);
            }
          }
        }
      } catch {}
    };
    run();
    return () => { cancelled = true; };
  }, []);

  // Close utilities with Escape when open
  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  const addTodo = () => {
    const text = newTodo.trim();
    if (!text) return;
    const id = Math.random().toString(36).slice(2);
    setTodos((t) => [{ id, text, done: false }, ...t]);
    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodos((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));
  };

  const deleteTodo = (id: string) => {
    setTodos((t) => t.filter((x) => x.id !== id));
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-xl shadow-blue-900/30"
        aria-label="Open dashboard utilities"
      >
        <Rocket className="w-5 h-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-xl bg-slate-950 border-l border-slate-800 p-6 overflow-y-auto z-50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Dashboard Utilities</h3>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white" aria-label="Close utilities">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Performance Snapshot */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Performance Snapshot</h4>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400">Last 8 mock tests</span>
                    <span className="text-xs font-bold text-white">Avg {reportAvg}%</span>
                  </div>
                  <svg viewBox="0 0 200 60" className="w-full h-16">
                    <polyline fill="none" stroke="#1d4ed8" strokeWidth="3" points={trendPoints} />
                    <polyline fill="rgba(37,99,235,0.1)" stroke="none" points={`0,60 ${trendPoints} 200,60`} />
                  </svg>
                </div>
                <div className="space-y-2">
                  {reportSubjects.map(s => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-400">{s.name}</span>
                        <span className="text-xs text-slate-400">{s.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                        <div className={`h-full ${s.color ?? 'bg-blue-500'}`} style={{ width: `${s.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end">
                  <button onClick={() => router.push('/profile')} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700">Manage Profile</button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-300 mb-3">Quick Links</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button onClick={() => router.push('/dashboard?tab=courses')} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition">
                  <BookOpen className="w-4 h-4" /> Continue Course
                </button>
                <button onClick={() => router.push('/dashboard?tab=tests')} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition">
                  <FileText className="w-4 h-4" /> Start Test
                </button>
                <button onClick={() => router.push('/dashboard?tab=reports')} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition">
                  <BarChart3 className="w-4 h-4" /> View Reports
                </button>
              </div>
            </div>

            {/* Announcements */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-300 flex items-center gap-2"><Megaphone className="w-4 h-4" /> Announcements</h4>
                <button onClick={() => router.push('/news')} className="text-xs text-blue-400 hover:text-blue-300">View All</button>
              </div>
              <div className="space-y-3">
                {announcements.slice(0,3).map(item => (
                  <div key={item.id} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-200">{item.title}</p>
                      <span className="text-xs text-slate-500">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile completion */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2"><User className="w-4 h-4" /> Profile Completion</h4>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-slate-400">Complete your profile to get better recommendations</div>
                  <div className="text-sm font-bold text-white">{profilePercent}%</div>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 mb-4">
                  <div className="h-full rounded-full bg-linear-to-r from-blue-500 to-emerald-400" style={{ width: `${profilePercent}%` }} />
                </div>
                <div className="space-y-2">
                  {[
                    { key: 'photo', label: 'Add profile photo', icon: <GraduationCap className="w-4 h-4" /> },
                    { key: 'bio', label: 'Write a short bio', icon: <User className="w-4 h-4" /> },
                    { key: 'goals', label: 'Set learning goals', icon: <Target className="w-4 h-4" /> },
                    { key: 'subjects', label: 'Choose subjects', icon: <BookOpen className="w-4 h-4" /> },
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setProfile(p => ({ ...p, [item.key]: !p[item.key as keyof typeof p] }))}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-left"
                    >
                      <span className="inline-flex items-center gap-3 text-sm text-slate-200">{item.icon}{item.label}</span>
                      {profile[item.key as keyof typeof profile] ? <CheckSquare className="w-5 h-5 text-emerald-500" /> : <Square className="w-5 h-5 text-slate-500" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini Calendar */
            }
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-300 mb-3 flex items-center gap-2"><Calendar className="w-4 h-4" /> Mini Calendar</h4>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
                {miniSchedule.map(cls => (
                  <div key={cls.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">{cls.day}</span>
                      <div>
                        <div className="text-sm font-semibold text-white">{cls.subject} • {cls.time}</div>
                        <div className="text-xs text-slate-500">{cls.topic} — {cls.instructor}</div>
                      </div>
                    </div>
                    <button onClick={() => router.push('/live-classes')} className={"px-3 py-1.5 rounded-lg text-xs font-bold transition " + (cls.live ? "bg-red-500 hover:bg-red-600 text-white" : "bg-slate-900 text-slate-300 hover:bg-white hover:text-slate-950 border border-slate-800") }>
                      {cls.live ? 'Join' : 'Remind Me'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div>
              <h4 className="text-sm font-bold text-slate-300 mb-3">My Tasks</h4>
              <div className="flex gap-2 mb-3">
                <input
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') addTodo(); }}
                  placeholder="Add a task"
                  className="flex-1 bg-slate-900 border border-slate-800 text-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                />
                <button onClick={addTodo} className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold" aria-label="Add task">
                  <Plus className="w-4 h-4" /> Add
                </button>
              </div>
              <div className="space-y-2">
                {todos.length === 0 && (
                  <div className="text-sm text-slate-500">No tasks yet</div>
                )}
                {todos.map(t => (
                  <div key={t.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <button onClick={() => toggleTodo(t.id)} className="inline-flex items-center gap-3 text-left">
                      {t.done ? <CheckSquare className="w-5 h-5 text-emerald-500" /> : <Square className="w-5 h-5 text-slate-500" />}
                      <span className={"text-sm " + (t.done ? "line-through text-slate-500" : "text-slate-200")}>{t.text}</span>
                    </button>
                    <button onClick={() => deleteTodo(t.id)} aria-label="Delete task" className="text-slate-500 hover:text-red-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

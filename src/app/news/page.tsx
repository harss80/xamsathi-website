"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Megaphone, Search, ArrowLeft } from "lucide-react";

type Ann = { id: number; title: string; time: string; tag?: string };

export default function NewsPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [items, setItems] = useState<Ann[]>([
    { id: 1, title: "Weekly mock test results are live", time: "2h ago", tag: "Tests" },
    { id: 2, title: "New Chemistry notes uploaded", time: "Yesterday", tag: "Notes" },
    { id: 3, title: "Live doubt-solving session at 6 PM", time: "Today", tag: "Live" },
    { id: 4, title: "Maths assignment due tomorrow", time: "Today", tag: "Assignments" },
    { id: 5, title: "New course module unlocked: Optics", time: "3d ago", tag: "Courses" },
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/announcements');
        if (!cancelled && res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) setItems(data);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    const lower = q.toLowerCase();
    return items.filter(a =>
      (!tag || a.tag === tag) &&
      (a.title.toLowerCase().includes(lower) || a.time.toLowerCase().includes(lower))
    );
  }, [q, tag, items]);

  const tags = ["All", ...Array.from(new Set(items.map(a => a.tag).filter(Boolean) as string[]))];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Megaphone className="w-6 h-6" /> Announcements
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr,280px] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search announcements..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                />
              </div>
            </div>

            <div className="space-y-3">
              {loading && (
                <div className="text-sm text-slate-500">Loading announcements...</div>
              )}
              {filtered.map(item => (
                <div key={item.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <span className="text-xs text-slate-500">{item.time}</span>
                  </div>
                  {item.tag && (
                    <span className="inline-flex text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">{item.tag}</span>
                  )}
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="text-sm text-slate-500">No announcements match your search.</div>
              )}
            </div>
          </div>

          <aside>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
              <h4 className="text-sm font-bold text-slate-300 mb-3">Filters</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <button
                    key={t}
                    onClick={() => setTag(t === "All" ? null : t)}
                    className={"px-3 py-1.5 rounded-lg text-xs font-bold border transition " + (tag === t || (t === "All" && tag === null) ? "bg-blue-600 border-blue-600 text-white" : "bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800")}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

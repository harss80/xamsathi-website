"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";
import { coursesData } from "@/lib/coursesData";

export default function SearchPage() {
  const params = useSearchParams();
  const q = (params.get("q") || "").trim();

  const results = useMemo(() => {
    if (!q) return [] as { href: string; title: string; type: string }[];
    const lower = q.toLowerCase();
    const courseHits = coursesData
      .filter(
        (c) =>
          c.title.toLowerCase().includes(lower) ||
          c.tags.some((t) => t.toLowerCase().includes(lower))
      )
      .slice(0, 10)
      .map((c) => ({ href: `/courses#${c.id}`, title: c.title, type: "Course" }));

    const staticHits = [
      { href: "/news", title: "Announcements & Updates", type: "Page" },
      { href: "/courses", title: "Courses", type: "Page" },
      { href: "/tests", title: "Test Series", type: "Page" },
    ].filter((i) => i.title.toLowerCase().includes(lower));

    return [...courseHits, ...staticHits];
  }, [q]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <form action="/search" className="flex items-center gap-2 mb-6">
          <div className="relative flex-1">
            <SearchIcon className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              name="q"
              defaultValue={q}
              placeholder="Search XamSathi..."
              className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold">Search</button>
        </form>

        {q && (
          <p className="text-sm text-slate-600 mb-3">Showing results for: <strong>{q}</strong></p>
        )}

        <div className="space-y-3">
          {results.map((r, i) => (
            <Link key={i} href={r.href} className="block p-4 border border-slate-200 rounded-xl hover:bg-slate-50">
              <div className="text-xs text-slate-500">{r.type}</div>
              <div className="font-semibold text-slate-900">{r.title}</div>
              <div className="text-slate-500 text-sm">{new URL(`https://www.xamsathi.in${r.href}`).toString()}</div>
            </Link>
          ))}
          {q && results.length === 0 && (
            <div className="text-slate-600">No results found.</div>
          )}
        </div>
      </div>
    </main>
  );
}

"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

type ExamOption = {
  label: string;
  keywords: string[];
  href: string;
};

const EXAM_OPTIONS: ExamOption[] = [
  {
    label: "SSC",
    keywords: ["ssc", "cgl", "chsl", "mts"],
    href: "/government-exams/ssc",
  },
  {
    label: "Railway",
    keywords: ["railway", "railways", "rrb", "ntpc", "group d"],
    href: "/government-exams/railway",
  },
  {
    label: "UPSC",
    keywords: ["upsc", "cse", "prelims", "mains"],
    href: "/government-exams/upsc",
  },
  {
    label: "JEE Main",
    keywords: ["jee", "jee main", "mains"],
    href: "/engineering-exams/jee-main",
  },
  {
    label: "JEE Advanced",
    keywords: ["jee advanced", "advanced"],
    href: "/engineering-exams/jee-advanced",
  },
  {
    label: "NEET",
    keywords: ["neet", "neet ug"],
    href: "/medical-exams/neet",
  },
  {
    label: "IBPS",
    keywords: ["ibps", "ibps po", "ibps clerk"],
    href: "/banking-exams/ibps",
  },
  {
    label: "SBI PO",
    keywords: ["sbi", "sbi po"],
    href: "/banking-exams/sbi-po",
  },
  {
    label: "NDA",
    keywords: ["nda"],
    href: "/defence-exams/nda",
  },
  {
    label: "CUET",
    keywords: ["cuet"],
    href: "/entrance-exams/cuet",
  },
  {
    label: "Government Exams",
    keywords: ["government", "govt"],
    href: "/government-exams",
  },
  {
    label: "Engineering Exams",
    keywords: ["engineering"],
    href: "/engineering-exams",
  },
  {
    label: "Medical Exams",
    keywords: ["medical"],
    href: "/medical-exams",
  },
  {
    label: "Banking Exams",
    keywords: ["banking"],
    href: "/banking-exams",
  },
  {
    label: "Defence Exams",
    keywords: ["defence", "defense"],
    href: "/defence-exams",
  },
  {
    label: "Entrance Exams",
    keywords: ["entrance", "private"],
    href: "/entrance-exams",
  },
];

export default function ExamSearch({
  placeholder = "Search your exam (SSC, NEET, JEE, UPSC...)",
  className = "",
}: {
  placeholder?: string;
  className?: string;
}) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  const suggestions = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return EXAM_OPTIONS.slice(0, 6);

    const scored = EXAM_OPTIONS.map((opt) => {
      const hay = [opt.label, ...opt.keywords].join(" ").toLowerCase();
      const label = opt.label.toLowerCase();
      const score =
        label === query ? 100 :
        label.startsWith(query) ? 80 :
        hay.includes(query) ? 60 :
        0;
      return { opt, score };
    })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((x) => x.opt);

    return scored.length ? scored : EXAM_OPTIONS.slice(0, 6);
  }, [q]);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim().toLowerCase();
    if (!query) return;

    const best = suggestions[0];
    if (best) go(best.href);
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={onSubmit} className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => {
            window.setTimeout(() => setOpen(false), 120);
          }}
          placeholder={placeholder}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-11 pr-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
        />
      </form>

      {open && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {suggestions.map((s) => (
            <button
              key={s.href}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => go(s.href)}
              className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors flex items-center justify-between"
            >
              <span className="font-semibold text-slate-800">{s.label}</span>
              <span className="text-xs text-slate-600">Open</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

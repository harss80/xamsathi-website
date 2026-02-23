"use client";

import { useEffect, useState } from "react";
import { Keyboard, X } from "lucide-react";

export default function ShortcutHelp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      const isQuestionMark = e.key === "?" || (e.key === "/" && e.shiftKey);
      if (isQuestionMark) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
      <div className="absolute inset-x-0 top-16 mx-auto max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-lg inline-flex items-center gap-2"><Keyboard className="w-5 h-5" /> Keyboard Shortcuts</h3>
          <button onClick={() => setOpen(false)} className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <span className="text-slate-300">Open Utilities</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">g</kbd>
            <span className="text-slate-400">then</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">u</kbd>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <span className="text-slate-300">Overview</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">g</kbd>
            <span className="text-slate-400">then</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">o</kbd>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <span className="text-slate-300">Tests</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">g</kbd>
            <span className="text-slate-400">then</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">t</kbd>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <span className="text-slate-300">Courses</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">g</kbd>
            <span className="text-slate-400">then</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">c</kbd>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <span className="text-slate-300">Reports</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">g</kbd>
            <span className="text-slate-400">then</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">r</kbd>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <span className="text-slate-300">News</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">g</kbd>
            <span className="text-slate-400">then</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">n</kbd>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <span className="text-slate-300">Open Shortcuts</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">?</kbd>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between">
            <span className="text-slate-300">Close panels</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200">Esc</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}

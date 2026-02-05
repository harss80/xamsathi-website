"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function applyTheme(theme: "light" | "dark") {
  if (typeof document === "undefined") return;
  const body = document.body;
  const lightClasses = ["text-gray-900", "bg-white"];
  const darkClasses = ["text-slate-200", "bg-slate-950"];

  // Remove both sets to avoid accumulation
  body.classList.remove(...lightClasses, ...darkClasses);
  if (theme === "dark") body.classList.add(...darkClasses);
  else body.classList.add(...lightClasses);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    try {
      let saved = localStorage.getItem("xamsathi_theme") as "light" | "dark" | null;
      if (saved !== "dark" && saved !== "light") {
        saved = localStorage.getItem("eduman_theme") as "light" | "dark" | null;
      }
      if (saved === "dark" || saved === "light") return saved;
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    } catch {}
    return "light";
  });

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem("xamsathi_theme", theme);
      localStorage.setItem("eduman_theme", theme);
    } catch {}
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      aria-label="Toggle theme"
      className="fixed bottom-6 left-6 z-40 rounded-full px-3 py-2 bg-slate-900 border border-slate-800 text-slate-100 hover:bg-slate-800 shadow-lg"
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

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
  const [mounted] = useState(() => typeof window !== "undefined");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    let next: "light" | "dark" = "light";
    try {
      let saved = localStorage.getItem("xamsathi_theme") as "light" | "dark" | null;
      if (saved !== "dark" && saved !== "light") {
        saved = localStorage.getItem("eduman_theme") as "light" | "dark" | null;
      }
      if (saved === "dark" || saved === "light") {
        next = saved;
      }
    } catch {}
    try {
      if (next === "light" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        next = "dark";
      }
    } catch {}

    applyTheme(next);
    window.setTimeout(() => setTheme(next), 0);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem("xamsathi_theme", theme);
      localStorage.setItem("eduman_theme", theme);
    } catch {}
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      className="fixed bottom-6 left-6 z-50 rounded-full p-3 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 shadow-xl"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

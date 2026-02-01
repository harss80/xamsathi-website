"use client";

import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function TestsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="w-6 h-6" /> Tests
          </h1>
        </div>
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-sm text-slate-400">
          Test library and mock schedule coming soon. Use Quick Links in the Utilities panel to start a test.
        </div>
      </div>
    </div>
  );
}

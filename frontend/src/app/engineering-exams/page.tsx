import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function EngineeringExamsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-300">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white">Engineering Exams</h1>
        </div>

        <p className="text-slate-400 max-w-3xl">
          JEE Main & JEE Advanced aligned test series with strict timers, analysis and detailed solutions.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/engineering-exams/jee-main" className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all">
            <div className="text-xl font-black text-white">JEE Main</div>
            <div className="text-sm text-slate-400 mt-2">Mocks, PYQs, practice</div>
          </Link>
          <Link href="/engineering-exams/jee-advanced" className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all">
            <div className="text-xl font-black text-white">JEE Advanced</div>
            <div className="text-sm text-slate-400 mt-2">Conceptual test series</div>
          </Link>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/tests" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-950 font-black">
            Explore Test Series <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/dashboard/test-series/free-series" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black transition-colors">
            Start Free Mock Test <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

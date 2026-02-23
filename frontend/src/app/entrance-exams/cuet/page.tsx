import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CuetPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-black text-white">CUET</h1>
        <p className="text-slate-400 mt-4">Practice sets for CUET with timed attempts.</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/tests" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white text-slate-950 font-black">Explore Test Series <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/dashboard/test-series/free-series" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black transition-colors">Start Free Mock <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </div>
  );
}

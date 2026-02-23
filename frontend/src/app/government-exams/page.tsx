import Link from "next/link";
import { Building2, Search, Filter, BookOpen, Users, Star, ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function GovernmentExamsCategory() {
  const exams = [
    { id: "ssc", title: "SSC Exams", desc: "CGL, CHSL, MTS, CPO", tests: 450, users: "1.2 Lakh", tag: "Most Popular", link: "/government-exams/ssc" },
    { id: "upsc", title: "UPSC Civil Services", desc: "Prelims, Mains, CSAT", tests: 200, users: "50k", tag: "Premium", link: "/government-exams/upsc" },
    { id: "railway", title: "Railway Exams", desc: "NTPC, Group D, ALP", tests: 350, users: "2.1 Lakh", tag: "Trending", link: "/government-exams/railway" },
    { id: "state-psc", title: "State PSC Exams", desc: "UPPSC, BPSC, MPPSC", tests: 180, users: "80k", link: "/government-exams/state-psc" },
    { id: "banking", title: "Banking & Insurance", desc: "IBPS, SBI, RBI", tests: 400, users: "1.5 Lakh", link: "/banking-exams" },
    { id: "defence", title: "Defence Exams", desc: "NDA, CDS, AFCAT", tests: 250, users: "90k", link: "/defence-exams" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      <div className="pt-28 pb-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-sm font-bold mb-6">
              <Building2 className="w-4 h-4" /> Comprehensive Test Series
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Government Exams</span></h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Structured mock tests, previous year papers, and detailed analytics for all major central and state government exams.
            </p>

            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search exams (e.g. SSC CGL)..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3.5 pl-12 pr-4 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium placeholder:text-slate-500 shadow-sm"
                />
              </div>
              <button className="px-6 py-3.5 bg-slate-800 border border-slate-700 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors shadow-sm text-slate-300">
                <Filter className="w-4 h-4" /> Filters
              </button>
            </div>

            {/* Quick filter capsules */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {['All', 'SSC', 'UPSC', 'Railway', 'State PSC'].map((filter) => (
                <button key={filter} className={`px-4 py-1.5 rounded-full text-sm font-bold border ${filter === 'All' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 shadow-sm'} transition-colors`}>
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {exams.map((exam) => (
              <Link href={exam.link} key={exam.id} className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 relative overflow-hidden">
                {exam.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    {exam.tag}
                  </span>
                )}
                <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner border border-slate-700">
                  <ShieldCheck className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{exam.title}</h3>
                <p className="text-sm text-slate-400 font-medium mb-6">{exam.desc}</p>

                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-300">
                    <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> {exam.tests} Tests
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800">
                      <Users className="w-3.5 h-3.5 text-blue-400" /> {exam.users}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-300">Explore Course</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

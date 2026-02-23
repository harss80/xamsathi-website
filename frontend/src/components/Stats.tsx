"use client";

const Stats = () => {
    return (
        <section className="bg-slate-900 py-12 border-y border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
                    <div className="p-4">
                        <div className="text-2xl lg:text-3xl font-bold text-white mb-2">Real Exam Pattern</div>
                        <div className="text-slate-400 font-medium">JEE & NEET aligned tests</div>
                    </div>
                    <div className="p-4">
                        <div className="text-2xl lg:text-3xl font-bold text-white mb-2">Strict Timer</div>
                        <div className="text-slate-400 font-medium">Build speed + stamina</div>
                    </div>
                    <div className="p-4">
                        <div className="text-2xl lg:text-3xl font-bold text-white mb-2">Detailed Solutions</div>
                        <div className="text-slate-400 font-medium">Learn from every test</div>
                    </div>
                    <div className="p-4 border-r-0">
                        <div className="text-2xl lg:text-3xl font-bold text-white mb-2">Clean Mobile UX</div>
                        <div className="text-slate-400 font-medium">Fast & distraction-free</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;

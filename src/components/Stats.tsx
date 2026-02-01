"use client";

const Stats = () => {
    return (
        <section className="bg-slate-900 py-12 border-y border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
                    <div className="p-4">
                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">10M+</div>
                        <div className="text-slate-400 font-medium">Questions Practiced</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500k+</div>
                        <div className="text-slate-400 font-medium">Registered Students</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
                        <div className="text-slate-400 font-medium">Exam Categories</div>
                    </div>
                    <div className="p-4 border-r-0">
                        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">4.8</div>
                        <div className="text-slate-400 font-medium">Average App Rating</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;

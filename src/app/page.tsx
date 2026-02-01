import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import TestSeries from "@/components/TestSeries";
import Results from "@/components/Results";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import AppCTA from "@/components/AppCTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Hero />
        <Stats />
        <Features />
        <Courses />
        <TestSeries />
        <Results />
        <Faculty />
        <Testimonials />
        <AppCTA />
        <FAQ />
      </main>
    </div>
  );
}

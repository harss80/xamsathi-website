import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Online Mock Tests in India for JEE & NEET | XamSathi",
  description: "Join XamSathi to get the best exam test series. Practice with online mock tests for India's toughest exams - JEE and NEET.",
};

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SocialProof from "@/components/SocialProof";
import ExamCategories from "@/components/ExamCategories";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import TestSeries from "@/components/TestSeries";
import PricingComparison from "@/components/PricingComparison";
import Results from "@/components/Results";
import Faculty from "@/components/Faculty";
import Resources from "@/components/Resources";
import Testimonials from "@/components/Testimonials";
import AppCTA from "@/components/AppCTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Hero />
        <Stats />
        <SocialProof />
        <ExamCategories />
        <Features />
        <Courses />
        <TestSeries />
        <PricingComparison />
        <Results />
        <Faculty />
        <Resources />
        <Testimonials />
        <AppCTA />
        <FAQ />
      </main>
    </div>
  );
}

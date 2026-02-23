import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Online Mock Tests India | JEE Practice Test Online & NEET",
    description: "Access the best exam test series at XamSathi. Over 10,000+ JEE and NEET practice questions, full mock tests, and detailed analytics to boost your score.",
    alternates: { canonical: "/tests" },
    openGraph: {
        title: "Best Online Mock Tests | XamSathi",
        description: "Access the best exam test series at XamSathi. Over 10,000+ JEE and NEET practice questions, full mock tests.",
        url: "https://www.xamsathi.in/tests",
    },
};

export default function TestsLayout({ children }: { children: React.ReactNode }) {
    return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NEET Practice Mock Tests | Best Exam Test Series | XamSathi",
    description: "Boost your score with our advanced NEET practice questions and comprehensive mock tests. Get detailed solutions and all-India rankings online.",
    alternates: { canonical: "/dashboard/test-series/neet" },
    openGraph: {
        title: "NEET Practice Mock Tests | XamSathi",
        description: "Boost your score with our advanced NEET practice questions and comprehensive mock tests. Get detailed solutions and all-India rankings.",
        url: "https://www.xamsathi.in/dashboard/test-series/neet",
    },
};

export default function NEETLayout({ children }: { children: React.ReactNode }) {
    return children;
}

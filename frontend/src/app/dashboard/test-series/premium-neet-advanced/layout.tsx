import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Premium NEET Practice Questions & Mock Tests | XamSathi",
    description: "Enroll in our advanced NEET test series to practice top-tier NEET practice questions, boost your accuracy, and outrank the competition with the best exam test series.",
    alternates: { canonical: "/dashboard/test-series/premium-neet-advanced" },
    openGraph: {
        title: "Premium NEET Practice Questions | XamSathi",
        description: "Enroll in our advanced NEET test series to practice top-tier NEET practice questions and boost your accuracy.",
        url: "https://www.xamsathi.in/dashboard/test-series/premium-neet-advanced",
    },
};

export default function PremiumNEETLayout({ children }: { children: React.ReactNode }) {
    return children;
}

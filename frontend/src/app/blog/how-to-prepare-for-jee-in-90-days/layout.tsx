import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How to Prepare for JEE Main in 90 Days | XamSathi Blog",
    description: "A comprehensive day-by-day study guide to master high-weightage topics and guarantee a 99+ percentile in JEE Main with the best exam test series.",
    alternates: { canonical: "/blog/how-to-prepare-for-jee-in-90-days" },
    openGraph: {
        title: "How to Prepare for JEE Main in 90 Days | XamSathi Blog",
        description: "A comprehensive day-by-day study guide to master high-weightage topics and guarantee a 99+ percentile in JEE Main with the best exam test series.",
        url: "https://www.xamsathi.in/blog/how-to-prepare-for-jee-in-90-days",
    },
};

export default function JEEDaysLayout({ children }: { children: React.ReactNode }) {
    return children;
}

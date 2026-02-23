import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "JEE Practice Test Online | Premium Mocks | XamSathi",
    description: "Experience the rigorous and accurate premium JEE practice test online. Test yourself with exact exam patterns, realistic CBT mode, and the best exam test series.",
    alternates: { canonical: "/dashboard/test-series/premium-jee-main-copy-mocks" },
    openGraph: {
        title: "JEE Practice Test Online | Premium Mocks | XamSathi",
        description: "Experience the rigorous and accurate premium JEE practice test online.",
        url: "https://www.xamsathi.in/dashboard/test-series/premium-jee-main-copy-mocks",
    },
};

export default function JEEMockLayout({ children }: { children: React.ReactNode }) {
    return children;
}

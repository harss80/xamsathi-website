import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ultimate Guide to NEET Biology | XamSathi",
    description: "Learn how to score 360/360 in NEET Biology using NCERT lines, our best exam test series, and high-yield NEET practice questions.",
    alternates: { canonical: "/blog/neet-biology-study-guide" },
};

export default function BiologyLayout({ children }: { children: React.ReactNode }) {
    return children;
}

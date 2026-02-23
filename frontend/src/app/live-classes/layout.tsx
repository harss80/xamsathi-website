import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Live Classes for JEE & NEET | Best Online Mock Tests India",
    description: "Attend interactive live classes and access the best exam test series inside XamSathi. Start solving complex NEET practice questions and JEE mock tests.",
    alternates: { canonical: "/live-classes" },
    openGraph: {
        title: "Live Classes for JEE & NEET | XamSathi",
        description: "Attend interactive live classes and access the best exam test series inside XamSathi.",
        url: "https://www.xamsathi.in/live-classes",
    },
};

export default function LiveClassesLayout({ children }: { children: React.ReactNode }) {
    return children;
}

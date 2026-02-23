import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Best Online Mock Tests in India | XamSathi",
    description: "Learn about XamSathi, India's leading platform for the best exam test series. Discover our mission to provide affordable, high-quality NEET and JEE practice tests online.",
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About Us | XamSathi",
        description: "Learn about XamSathi, India's leading platform for the best exam test series.",
        url: "https://www.xamsathi.in/about",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}

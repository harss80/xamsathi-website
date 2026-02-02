import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Announcements & Updates",
  description: "Latest updates, news, and announcements from XamSathi.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "Announcements | XamSathi",
    url: "https://www.xamsathi.in/news",
    images: [
      {
        url: "/hero-students.png",
        width: 1200,
        height: 630,
        alt: "XamSathi Announcements",
      },
    ],
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

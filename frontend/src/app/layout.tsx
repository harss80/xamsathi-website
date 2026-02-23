import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keep Geist, it's good
import "./globals.css";
import AppFrame from "@/components/AppFrame";
import TrackPageView from "@/components/TrackPageView";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.xamsathi.in"),
  title: {
    default: "Best Online Mock Tests in India for JEE & NEET | XamSathi",
    template: "%s | XamSathi",
  },
  description:
    "Practice with quality NEET and JEE mock tests, detailed solutions, and advanced analytics. Improve your score with XamSathi’s online exam preparation and best exam test series.",
  applicationName: "XamSathi",
  category: "education",
  referrer: "origin-when-cross-origin",
  keywords: [
    "online mock tests India",
    "JEE practice test online",
    "NEET practice questions",
    "best exam test series",
    "online test series",
    "JEE mock test",
    "NEET mock test",
    "foundation courses",
    "XamSathi"
  ],
  openGraph: {
    type: "website",
    url: "https://www.xamsathi.in/",
    siteName: "XamSathi",
    title: "Best Online Mock Tests in India for JEE & NEET | XamSathi",
    description:
      "Practice with quality NEET and JEE mock tests, detailed solutions, and advanced analytics. Improve your score with XamSathi.",
    images: [
      {
        url: "/hero-students.png",
        width: 1200,
        height: 630,
        alt: "XamSathi - Best Online Mock Tests",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Mock Tests in India for JEE & NEET | XamSathi",
    description:
      "Practice with quality NEET and JEE mock tests, detailed solutions, and advanced analytics. Improve your score with XamSathi.",
    images: ["/hero-students.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "dvOIwKxrdUHK5Uc0GtB611GyuzfQNQEEdGqTJQpaByo",
    other: {
      "msvalidate.01": "1B1F7E8200B0077FA2B334238618CF1F",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "XamSathi",
                url: "https://www.xamsathi.in/",
                logo: "https://www.xamsathi.in/favicon.ico",
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "XamSathi",
                url: "https://www.xamsathi.in/",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://www.xamsathi.in/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 bg-white`}
      >
        <TrackPageView />
        <AppFrame>{children}</AppFrame>
      </body>
    </html>
  );
}

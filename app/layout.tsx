import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/app/components/SmoothScroll";
import ScrollProgress from "@/app/components/ScrollProgress";
import BackgroundParticles from "@/app/components/BackgroundParticles";
import CustomCursor from "@/app/components/CustomCursor";
import SiteNav from "@/app/components/SiteNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yunus | DevHQ",
  description:
    "Personal Portfolio of Yunus Said Khaidum, a Final-Year Computer Science Undergraduate at Xiamen University Malaysia. Explore my projects, experience, and skills.",
  metadataBase: new URL("https://yunus.software"),
  openGraph: {
    title: "Yunus | DevHQ",
    description:
      "Explore my projects, work experience, and technical skills.",
    url: "https://yunus.software",
    siteName: "Yunus Said Khaidum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yunus | DevHQ",
    description:
      "Explore my projects, work experience, and technical skills.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* Devicon CDN for authentic official colored tech logos */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="bg-[#0b0b0b] text-white antialiased relative">
        <ScrollProgress />
        <CustomCursor />
        <BackgroundParticles />
        <SiteNav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

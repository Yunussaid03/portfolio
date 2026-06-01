import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/app/components/SmoothScroll";
import MobileNav from "@/app/components/MobileNav";
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
  title: "Yunus Said Khaidum | Software Developer",
  description:
    "Full-stack software developer building clean interfaces, reliable systems, and practical products. React, Next.js, Java, C++, and more.",
  metadataBase: new URL("https://yunus.software"),
  openGraph: {
    title: "Yunus Said Khaidum | Software Developer",
    description:
      "Full-stack software developer building clean interfaces, reliable systems, and practical products.",
    url: "https://yunus.software",
    siteName: "Yunus Said Khaidum",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yunus Said Khaidum | Software Developer",
    description:
      "Full-stack software developer building clean interfaces, reliable systems, and practical products.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white antialiased">
        <MobileNav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

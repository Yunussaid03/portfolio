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
  title: "Yunus Said Khaidum | Portfolio",
  description:
    "Brutalist portfolio for Yunus Said Khaidum, a third-year Computer Science and Technology student at Xiamen University Malaysia targeting IT internships.",
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

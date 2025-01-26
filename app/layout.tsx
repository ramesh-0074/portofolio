import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import { headers } from "next/headers";
import CustomCursor from "@/shared/CustomCursor";
import CurtainDropAnimation from "@/shared/Curtain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramesh P R - Full stack Developer Portfolio",
  description: "Ramesh P R - Full stack Developer Portfolio",
  openGraph: {
    title: "Ramesh P R - Full stack Developer Portfolio",
    description: "Ramesh P R - Full stack Developer Portfolio",
    url: "",
    siteName: "Ramesh P R - Full stack Developer Portfolio",
  },
  keywords: [
    "Full stack Developer",
    "Frontend Developer",
    "MERN Stack",
    "Portfolio",
    "Ramesh P R",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const useAgent = headerList.get("User-Agent");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden h-screen bg-[#C1E8FF] dark:bg-[#021024] text-[#212529] md:text-[#EDEDED]`}
      >
        <CurtainDropAnimation />
        <CustomCursor />
        <Header userAgent={useAgent || ""} />
        {children}
        <Footer userAgent={useAgent || ""} />
      </body>
    </html>
  );
}

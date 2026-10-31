import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { profile } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.specialty}`,
  description: `Portfolio of ${profile.name}, ${profile.role} & ${profile.specialty} based in ${profile.location}. ${profile.tagline}`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

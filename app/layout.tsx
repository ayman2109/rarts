import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/Navigation";
import { Footer2 } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACP Cladding & Sign Boards in Hyderabad | Raichuri Arts",
  description: "ACP Cladding, Sign Boards, LED Signage, and Hoardings in Hyderabad by Raichuri Arts. Transform your business facade with our expert solutions. Contact us for quality craftsmanship and innovative designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>ACP Cladding & Sign Boards in Hyderabad | Raichuri Arts</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
        <Footer2 />
      </body>
    </html>
  );
}

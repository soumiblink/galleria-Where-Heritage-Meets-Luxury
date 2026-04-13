import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galleria Vittorio Emanuele II — The World's Most Iconic Destination",
  description:
    "Milan's legendary Galleria Vittorio Emanuele II. A global platform for luxury retail, world-class events, and unmatched brand partnerships since 1877.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-black">{children}</body>
    </html>
  );
}

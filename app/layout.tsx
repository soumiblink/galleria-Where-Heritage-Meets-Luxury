import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Galleria Vittorio Emanuele II — The World's Most Iconic Address",
  description:
    "Milan's legendary Galleria Vittorio Emanuele II. A global platform for luxury retail, world-class events, and unmatched brand partnerships since 1877.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full`}>
      <body
        className="min-h-full antialiased"
        style={{
          background: "var(--c-void)",
          fontFamily: "var(--font-sans, 'Helvetica Neue', Arial, sans-serif)",
        }}
      >
        {children}
      </body>
    </html>
  );
}

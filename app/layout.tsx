import type { Metadata } from "next";
import { DM_Mono, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono-custom" });

export const metadata: Metadata = {
  title: "Nidhi B. — Software Engineer",
  description: "Product-minded software engineer building clear, durable digital experiences.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${display.variable} ${mono.variable} antialiased`}>{children}</body>
    </html>
  );
}

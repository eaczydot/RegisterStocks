import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RegisterStocks | Registry for Private Markets",
  description:
    "RegisterStocks Registry delivers verified data provenance, structured registries, and liquidity readiness for private markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="bg-night-sky text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

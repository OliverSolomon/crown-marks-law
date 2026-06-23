import type { Metadata } from "next";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { firm } from "@/content/firm";

// High-contrast display serif — regal, editorial, with an expressive italic.
const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

// Clean, professional grotesk for body and UI.
const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crownmarkslaw.co.ke"),
  title: {
    default: `${firm.name} - Commercial, Corporate and Dispute Resolution Lawyers in Nairobi`,
    template: `%s · ${firm.name}`,
  },
  description: firm.description,
  keywords: [
    "Nairobi law firm",
    "Kenya commercial law",
    "corporate advisory Kenya",
    "dispute resolution",
    "arbitration",
    "family law Nairobi",
    "Islamic law Kenya",
  ],
  openGraph: {
    title: firm.name,
    description: firm.description,
    type: "website",
    locale: "en_KE",
    siteName: firm.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${hanken.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

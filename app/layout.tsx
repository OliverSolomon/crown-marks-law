import type { Metadata } from "next";
import { Playfair_Display, Hanken_Grotesk } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteJsonLd } from "@/components/SiteJsonLd";
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

const SITE_URL = "https://crownmarkslaw.co.ke";
const SHARE_DESCRIPTION =
  "Crownmarks Law LLP is a Nairobi law firm for commercial law, corporate advisory and dispute resolution, advising individuals, families and corporates across Kenya and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${firm.name} - Commercial, Corporate and Dispute Resolution Lawyers in Nairobi`,
    template: `%s · ${firm.name}`,
  },
  description: SHARE_DESCRIPTION,
  applicationName: firm.name,
  authors: [{ name: firm.name, url: SITE_URL }],
  creator: firm.name,
  publisher: firm.name,
  category: "Legal Services",
  keywords: [
    "Crownmarks Law",
    "Nairobi law firm",
    "Kenya commercial law",
    "corporate advisory Kenya",
    "dispute resolution Kenya",
    "arbitration Nairobi",
    "family law Nairobi",
    "Islamic law Kenya",
    "intellectual property lawyers Kenya",
    "foreign investment Kenya",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: firm.name,
    title: `${firm.name} - Counsel of Consequence`,
    description: SHARE_DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${firm.name} - ${firm.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${firm.name} - Counsel of Consequence`,
    description: SHARE_DESCRIPTION,
    images: ["/og.png"],
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
        <SiteJsonLd />
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zarmina — Grace woven in every thread",
    template: "%s — Zarmina",
  },
  description:
    "Zarmina curates handcrafted South Asian luxury — Kashmiri phirans, chikankari, and heirloom formals. Grace woven in every thread.",
  authors: [{ name: "Zarmina" }],
  openGraph: {
    title: "Zarmina — Grace woven in every thread",
    description:
      "A curated house of handcrafted South Asian luxury. Timeless artistry for the modern wardrobe.",
    type: "website",
    siteName: "Zarmina",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

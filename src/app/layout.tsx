import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eloisen | Luxury Scented Candles",
  description: "Eloisen creates luxury scented candles crafted to elevate your living space with refined fragrance and timeless design.",
  metadataBase: new URL("https://eloisen.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eloisen | Luxury Scented Candles",
    description: "Eloisen creates luxury scented candles crafted to elevate your living space with refined fragrance and timeless design.",
    url: "https://eloisen.com",
    siteName: "Eloisen",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Eloisen Luxury Scented Candles preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eloisen | Luxury Scented Candles",
    description: "Eloisen creates luxury scented candles crafted to elevate your living space with refined fragrance and timeless design.",
    images: ["/preview.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-eloisen-cream text-eloisen-green`}
      >
        {children}
      </body>
    </html>
  );
}

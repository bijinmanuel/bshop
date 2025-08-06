import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: 'BShop - Premium Products at Best Prices',
    template: '%s | BShop',
  },
  description: 'Shop the latest and most popular products at BShop. Discover unbeatable deals on electronics, fashion, home, and more.',
  keywords: ['bshop', 'ecommerce', 'online shopping', 'buy online', 'electronics', 'fashion', 'deals', 'discounts', 'shop online'],
  authors: [{ name: 'BShop Team', url: 'https://bshop.com' }],
  creator: 'BShop',
  publisher: 'BShop',
  metadataBase: new URL('https://bshop.com'),
  openGraph: {
    title: 'BShop - Premium Products at Best Prices',
    description: 'Shop the latest and most popular products at BShop. Discover unbeatable deals on electronics, fashion, home, and more.',
    url: 'https://bshop.com',
    siteName: 'BShop',
    images: [
      {
        url: 'https://bshop.com/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'BShop - Your trusted online store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BShop - Premium Products at Best Prices',
    description: 'Shop top-rated products with exclusive deals at BShop.',
    site: '@bshop', 
    creator: '@bshop',
    images: ['https://bshop.com/og-image.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://bshop.com',
  },
  category: 'ecommerce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

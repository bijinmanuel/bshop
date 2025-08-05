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
  title: "E-Commerce App",
  description: "An E-Commerce application built with Next.js",
  keywords: ["e-commerce", "online Shopping ", "electronics", "furniture", "clothing"],
  authors: [{ name: "Shop ECom",}],
  creator: "Shop ECom",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  metadataBase: new URL("https://ecommerce-app.com"),
  openGraph: {
    title: "E-Commerce App",
    description: "An E-Commerce application built with Next.js",
    url: "https://ecommerce-app.com",
    siteName: "E-Commerce App",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce App",
    description: "An E-Commerce application built with Next.js",
    creator: "@shop_ecom",
  },
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

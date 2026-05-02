import { Geist, Geist_Mono, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LayoutWrapper from "./LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://grovevista.example"),
  title: {
    default: "Grove Vista Properties",
    template: "%s | Grove Vista Properties",
  },
  description:
    "Grove Vista Properties is a modern, SEO-first real estate platform for discovering premium homes, projects and investment opportunities across India.",
  openGraph: {
    title: "Grove Vista Properties",
    description: "Premium real estate discovery and advisory services across India.",
    url: "/",
    siteName: "Grove Vista Properties",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grove Vista Properties",
    description: "Premium real estate discovery and advisory services across India.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

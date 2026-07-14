import type { Metadata } from "next";
import { Manrope, Nunito_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://discoveryourswing.com"),
  title: "Discover Your Swing! - Golf Lessons in Palm Springs, Palm Desert & San Diego",
  description:
    "Personalized golf instruction and player development from Christie Quinn, LPGA Class A Professional and LPGA Vice President.",
  openGraph: {
    title: "Discover Your Swing!",
    description: "Professional golf lessons and performance coaching with Christie Quinn.",
    type: "website",
    images: ["/images/hero-christie.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${nunito.variable}`}>
      <body>
        <Preloader />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

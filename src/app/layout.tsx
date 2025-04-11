import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavbarInfo from "@/components/NavbarInfo";
import ParallaxBackground from "@/components/ParallaxBackground";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Island Market - Logan's Historic Grocery Store",
  description: "A historic grocery store serving Logan, Utah since 1919. Specializing in local craft products, fresh produce, and community service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('RootLayout rendering, path:', process.env.NEXT_PUBLIC_VERCEL_URL);
  
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <NavbarInfo />
        <div className="pt-6 relative">
          <Navbar />
          <ParallaxBackground />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

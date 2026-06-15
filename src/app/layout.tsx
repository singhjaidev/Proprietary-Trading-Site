import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import { Sora } from "next/font/google";

import LenisProvider from "@/components/providers/LenisProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import NoiseTexture from "@/components/background/NoiseTexture";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`
          min-h-full flex flex-col bg-[var(--color-background)]
          ${sora.variable}
        `}
      >
        <LenisProvider>
          <ScrollProgress />
          <ScrollToTop />

          <Header />
          {children}
          <Footer />

        </LenisProvider>
      </body>
    </html>
  );
}
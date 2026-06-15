import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import {
  Manrope,
  Space_Grotesk,
  Plus_Jakarta_Sans,
  Sora,
  Inter,
} from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

import { Archivo } from "next/font/google";
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
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
          min-h-full flex flex-col
          ${manrope.variable}
          ${spaceGrotesk.variable}
          ${plusJakarta.variable}
          ${sora.variable}
          ${syne.variable}
          ${archivo.variable}
          ${inter.variable}
        `}
      >
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
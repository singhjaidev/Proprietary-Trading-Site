"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

let lenis: Lenis | null = null;

export function getLenis() {
  return lenis;
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
    });

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return <>{children}</>;
}
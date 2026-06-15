"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

import { getLenis } from "@/components/providers/LenisProvider";
import { cn } from "@/lib/cn";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    getLenis()?.scrollTo(0, {
      duration: 1.5,
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-10 right-8 z-50",
        "flex h-14 w-14 items-center justify-center rounded-full",

        "border border-white/20",
        "bg-[rgba(227,6,19,.9)]",
        "backdrop-blur-md",

        "text-white",

        "transition-all duration-300",
        "hover:-translate-y-0.5",
        "active:scale-95"
      )}
    >
      <ChevronUp size={22} strokeWidth={3} />
    </button>
  );
}
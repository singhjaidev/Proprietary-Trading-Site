"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 bg-red-600 origin-left"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}
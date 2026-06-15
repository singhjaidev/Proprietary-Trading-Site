"use client";

import { motion } from "motion/react";

export default function Stagger({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
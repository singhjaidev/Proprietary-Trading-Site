"use client";

import { motion } from "motion/react";

export default function StaggerItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";
import type { FadeRevealProps } from "@/types";

const ease = [0.16, 1, 0.3, 1] as const;

export function FadeReveal({
  children,
  className,
  delay = 0,
  yOffset = 14,
}: FadeRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(centered && "text-center", "mb-12 md:mb-16", className)}
    >
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold mb-4",
          light ? "text-white" : "text-[var(--navy-950)]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg md:text-xl max-w-3xl mx-auto",
            light ? "text-gray-300" : "text-[var(--gray-600)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

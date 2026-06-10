"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-600)] text-[var(--navy-800)] shadow-lg hover:shadow-xl hover:shadow-[var(--gold-500)]/30 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-[var(--navy-800)] text-white hover:bg-[var(--navy-700)] shadow-md hover:shadow-lg",
    outline:
      "border-2 border-[var(--gold-500)] text-[var(--gold-400)] hover:bg-[var(--gold-500)] hover:text-[var(--navy-800)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

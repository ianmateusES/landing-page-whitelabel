import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "muted";
}

export function Badge({ variant = "primary", className = "", children, ...props }: BadgeProps) {
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]",
    muted:
      "bg-[var(--color-muted)] text-[var(--color-muted-foreground)]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

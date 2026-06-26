import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  featured?: boolean;
}

export function Card({ featured, className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl border p-6
        ${featured
          ? "bg-[var(--color-card)] border-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/10"
          : "bg-[var(--color-card)] border-[var(--color-border)]"
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

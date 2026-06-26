import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth, className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:opacity-90 focus-visible:outline-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/20",
      secondary:
        "bg-[var(--color-muted)] text-[var(--color-foreground)] hover:bg-[var(--color-border)] focus-visible:outline-[var(--color-muted)]",
      outline:
        "border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline-[var(--color-primary)]",
      ghost:
        "text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-muted)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

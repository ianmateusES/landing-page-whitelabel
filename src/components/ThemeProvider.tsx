"use client";

import { useEffect } from "react";
import type { BrandColors } from "@/types";

interface Props {
  colors: BrandColors;
}

export function ThemeProvider({ colors }: Props) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", colors.primary);
    root.style.setProperty("--color-primary-foreground", colors.primaryForeground);
    root.style.setProperty("--color-accent", colors.accent);
    root.style.setProperty("--color-background", colors.background);
    root.style.setProperty("--color-foreground", colors.foreground);
    root.style.setProperty("--color-muted", colors.muted);
    root.style.setProperty("--color-muted-foreground", colors.mutedForeground);
    root.style.setProperty("--color-border", colors.border);
    root.style.setProperty("--color-card", colors.card);
    root.style.setProperty("--color-card-foreground", colors.cardForeground);
  }, [colors]);

  return null;
}

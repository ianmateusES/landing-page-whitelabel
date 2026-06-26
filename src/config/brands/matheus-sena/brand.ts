import type { BrandConfig } from "@/types";

export const brand: BrandConfig = {
  slug: "matheus-sena",
  name: "MS Workout",
  professionalName: "Matheus Sena",
  tagline: "",
  logo: {
    src: "/brands/matheus-sena/logo.png",
    alt: "Matheus Sena — Workout Office",
    width: 220,
    height: 61,
  },
  colors: {
    primary: "#a3e635",
    primaryForeground: "#0a0a0a",
    accent: "#84cc16",
    background: "#0a0a0a",
    foreground: "#fafafa",
    muted: "#1a1a1a",
    mutedForeground: "#a1a1aa",
    border: "#27272a",
    card: "#111111",
    cardForeground: "#fafafa",
  },
  contact: {
    // BLOCKER B-01: número real pendente — substituir antes do deploy
    whatsapp: "5511999999999",
  },
  social: {
    instagram: "matheussenames",
  },
  images: {
    hero: "/brands/matheus-sena/hero.svg",
    profile: "/brands/matheus-sena/profile.jpeg",
    og: "/brands/matheus-sena/og.svg",
  },
};

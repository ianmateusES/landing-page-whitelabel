import type { BrandConfig } from "@/types";

export const brand: BrandConfig = {
  slug: "matheus-sena",
  name: "MS Workout",
  professionalName: "Matheus Sena",
  tagline: "A mudança de hábito pelo treino",
  logo: {
    src: "/brands/matheus-sena/logo.svg",
    alt: "MS Workout",
    width: 140,
    height: 40,
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
    // BLOCKER B-02..04: substituir .svg pelos assets reais do cliente (T27)
    hero: "/brands/matheus-sena/hero.svg",
    profile: "/brands/matheus-sena/profile.svg",
    og: "/brands/matheus-sena/og.svg",
    results: [
      {
        id: "lucas-muniz",
        name: "Lucas Muniz",
        src: "/brands/matheus-sena/results/lucas-muniz.svg",
        alt: "Transformação do Lucas Muniz",
      },
      {
        id: "matheus-aluno",
        name: "Matheus",
        src: "/brands/matheus-sena/results/matheus.svg",
        alt: "Transformação do Matheus",
      },
      {
        id: "haissa",
        name: "Haissa",
        src: "/brands/matheus-sena/results/haissa.svg",
        alt: "Transformação da Haissa",
      },
    ],
    testimonials: [
      { id: "lucas-muniz" },
      { id: "matheus-aluno" },
      { id: "haissa" },
    ],
  },
};

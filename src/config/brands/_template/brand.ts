import type { BrandConfig } from "@/types";

/**
 * WHITELABEL TEMPLATE — Preencha todos os campos com as informações do novo cliente.
 * Depois de preenchido, registre o novo slug em src/config/index.ts.
 */
export const brand: BrandConfig = {
  // Slug único — use letras minúsculas e hífens (ex: "joao-silva")
  slug: "seu-slug-aqui",

  // Nome da marca/academia
  name: "Nome da Marca",

  // Nome completo do profissional
  professionalName: "Nome do Personal",

  // Frase de impacto (opcional — se vazio, a aba do navegador mostra só o name)
  tagline: "Sua tagline aqui",

  logo: {
    // Caminho relativo a /public — coloque o arquivo em public/brands/{slug}/logo.svg
    src: "/brands/_template/logo.svg",
    alt: "Nome da Marca",
    width: 140,
    height: 40,
  },

  colors: {
    // Cor primária (botões, destaques) — use hex
    primary: "#a3e635",
    primaryForeground: "#0a0a0a",
    accent: "#84cc16",
    // Fundo principal da página
    background: "#0a0a0a",
    foreground: "#fafafa",
    muted: "#1a1a1a",
    mutedForeground: "#a1a1aa",
    border: "#27272a",
    card: "#111111",
    cardForeground: "#fafafa",
  },

  contact: {
    // Número WhatsApp no formato E.164 sem + (ex: "5511999999999")
    whatsapp: "5511999999999",
  },

  social: {
    // Instagram sem @ (ex: "nomedousuario")
    instagram: "seuperfil",
  },

  images: {
    hero: "/brands/_template/hero.webp",
    profile: "/brands/_template/profile.webp",
    og: "/brands/_template/og.png",
    // Resultados: adicione pares imagem + .txt em public/brands/{slug}/results/
  },
};

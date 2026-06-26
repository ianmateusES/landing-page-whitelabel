import type { BrandConfig, ContentConfig } from "@/types";

import { brand as matheusSenaBrand } from "./brands/matheus-sena/brand";
import { content as matheusSenaContent } from "./brands/matheus-sena/content";

type BrandEntry = { brand: BrandConfig; content: ContentConfig };

const brands: Record<string, BrandEntry> = {
  "matheus-sena": {
    brand: matheusSenaBrand,
    content: matheusSenaContent,
  },
  // Para adicionar um novo personal:
  // 1. Copie src/config/brands/_template/ para src/config/brands/{slug}/
  // 2. Preencha brand.ts e content.ts com os dados do cliente
  // 3. Adicione os assets em public/brands/{slug}/
  // 4. Descomente e adicione a entrada abaixo:
  //
  // "novo-slug": {
  //   brand: novoSlugBrand,
  //   content: novoSlugContent,
  // },
};

const activeSlug = process.env.BRAND_SLUG ?? "matheus-sena";

const activeBrandEntry = brands[activeSlug];

if (!activeBrandEntry) {
  throw new Error(
    `Brand "${activeSlug}" not found. Register it in src/config/index.ts. Available brands: ${Object.keys(brands).join(", ")}`
  );
}

export const { brand, content } = activeBrandEntry;
export { brands };

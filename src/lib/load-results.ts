import fs from "fs";
import path from "path";
import type { ResultImage } from "@/types";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/**
 * Carrega resultados de public/brands/{slug}/results/
 *
 * Convenção por aluno:
 *   lucas-muniz.jpeg  → imagem
 *   lucas-muniz.txt   → nome exibido (ex: "Lucas Muniz")
 *
 * Sem .txt, exibe somente a imagem (sem legenda).
 */
export function loadBrandResults(brandSlug: string): ResultImage[] {
  const dir = path.join(process.cwd(), "public", "brands", brandSlug, "results");

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .map((file) => {
      const id = path.parse(file).name;
      const txtPath = path.join(dir, `${id}.txt`);
      const hasCaption = fs.existsSync(txtPath);
      const name = hasCaption ? fs.readFileSync(txtPath, "utf-8").trim() : undefined;

      return {
        id,
        name,
        src: `/brands/${brandSlug}/results/${file}`,
        alt: name ? `Transformação de ${name}` : "Resultado de transformação",
      };
    })
    .sort((a, b) => a.id.localeCompare(b.id, "pt-BR"));
}

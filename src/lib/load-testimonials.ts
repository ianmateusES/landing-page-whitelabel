import fs from "fs";
import path from "path";
import type { TestimonialImage } from "@/types";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/**
 * Carrega depoimentos de public/brands/{slug}/testimonials/
 *
 * Convenção:
 *   lucas-muniz.png  → print do feedback
 *   lucas-muniz.txt  → nome do aluno (opcional, para legenda e alt)
 */
export function loadBrandTestimonials(brandSlug: string): TestimonialImage[] {
  const dir = path.join(process.cwd(), "public", "brands", brandSlug, "testimonials");

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .map((file) => {
      const id = path.parse(file).name;
      const txtPath = path.join(dir, `${id}.txt`);
      const name = fs.existsSync(txtPath) ? fs.readFileSync(txtPath, "utf-8").trim() : undefined;

      return {
        id,
        name,
        src: `/brands/${brandSlug}/testimonials/${file}`,
        alt: name ? `Feedback de ${name}` : "Feedback de aluno",
      };
    })
    .sort((a, b) => a.id.localeCompare(b.id, "pt-BR"));
}

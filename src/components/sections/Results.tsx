"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BrandConfig, ContentConfig } from "@/types";

interface Props {
  brand: BrandConfig;
  content: ContentConfig["results"];
}

export function Results({ brand, content }: Props) {
  return (
    <section id="resultados" className="py-20 md:py-28 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={content.sectionLabel}
          heading={content.heading}
          subheading={content.subheading}
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.images.results.map((result, i) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-card)] group"
            >
              <div className="relative aspect-[3/4] bg-[var(--color-muted)]">
                <Image
                  src={result.src}
                  alt={result.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-[var(--color-card-foreground)]">{result.name}</p>
                <p className="text-sm text-[var(--color-muted-foreground)]">Aluno MS Workout</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

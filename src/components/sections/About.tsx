"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BrandConfig, ContentConfig } from "@/types";

interface Props {
  brand: BrandConfig;
  content: ContentConfig["about"];
}

export function About({ brand, content }: Props) {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto md:max-w-none rounded-2xl overflow-hidden bg-[var(--color-muted)]">
              <Image
                src={brand.images.profile}
                alt={`${brand.professionalName} — personal trainer`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Accent border */}
              <div className="absolute inset-0 ring-1 ring-inset ring-[var(--color-primary)]/20 rounded-2xl pointer-events-none" />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-0 right-0 sm:-bottom-4 sm:-right-4 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded-xl px-4 py-3 shadow-lg">
              <p className="text-2xl font-bold">6+</p>
              <p className="text-xs font-semibold">anos de exp.</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              label={content.sectionLabel}
              heading={content.heading}
              centered={false}
              className="mb-6"
            />

            <div className="space-y-4 mb-8">
              {content.bio.map((paragraph, i) => (
                <p key={i} className="text-[var(--color-muted-foreground)] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <p className="text-sm font-semibold text-[var(--color-foreground)] uppercase tracking-wider mb-4">
                Todo trabalho é voltado para você que busca:
              </p>
              <ul className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-3">
                {content.objectives.map((obj) => (
                  <li key={obj} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0" />
                    <span className="text-[var(--color-foreground)] font-medium">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

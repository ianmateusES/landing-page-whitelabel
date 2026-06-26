"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BrandConfig, ContentConfig } from "@/types";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  brand: BrandConfig;
  content: ContentConfig["comparison"];
}

export function Comparison({ brand, content }: Props) {
  const whatsappUrl = buildWhatsAppUrl(brand.contact.whatsapp, {
    message: `Olá! Quero saber mais sobre a consultoria ${brand.name}.`,
  });

  return (
    <section className="w-full py-20 md:py-28 bg-[var(--color-muted)]">
      <Container size="lg">
        <SectionHeading
          label={content.sectionLabel}
          heading={content.heading}
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Negative column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
          >
            <h3 className="text-[var(--color-muted-foreground)] font-semibold mb-5 pb-4 border-b border-[var(--color-border)]">
              {content.negativeTitle}
            </h3>
            <ul className="space-y-3">
              {content.negativeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-muted-foreground)] text-sm line-through">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Positive column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[var(--color-primary)] bg-[var(--color-card)] p-6 shadow-lg shadow-[var(--color-primary)]/10"
          >
            <h3 className="text-[var(--color-primary)] font-semibold mb-5 pb-4 border-b border-[var(--color-primary)]/30">
              {content.positiveTitle}
            </h3>
            <ul className="space-y-3">
              {content.positiveItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-foreground)] text-sm">{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="text-center">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-sm sm:w-auto sm:max-w-none">
            <Button size="lg" className="w-full sm:w-auto">{content.ctaLabel}</Button>
          </a>
        </div>
      </Container>
    </section>
  );
}

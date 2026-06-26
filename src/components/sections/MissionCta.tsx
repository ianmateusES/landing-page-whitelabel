"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { BrandConfig, ContentConfig } from "@/types";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  brand: BrandConfig;
  content: ContentConfig["mission"];
}

export function MissionCta({ brand, content }: Props) {
  const whatsappUrl = buildWhatsAppUrl(brand.contact.whatsapp, {
    message: `Olá! Quero saber mais sobre a consultoria ${brand.name}.`,
  });

  return (
    <section
      className="py-20 md:py-28"
      style={{
        background: `radial-gradient(ellipse at 50% 50%, var(--color-primary)10 0%, transparent 70%), var(--color-muted)`,
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl md:text-3xl font-medium text-[var(--color-foreground)] leading-relaxed mb-6">
            &ldquo;{content.quote}&rdquo;
          </p>
          <footer className="text-[var(--color-primary)] font-semibold mb-10">
            {content.attribution}
          </footer>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg">{content.ctaLabel}</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

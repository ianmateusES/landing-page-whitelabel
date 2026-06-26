"use client";

import { motion } from "framer-motion";
import { ArrowDown, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { BrandConfig, ContentConfig } from "@/types";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  brand: BrandConfig;
  content: ContentConfig["hero"];
}

export function Hero({ brand, content }: Props) {
  const whatsappUrl = buildWhatsAppUrl(brand.contact.whatsapp, {
    message: `Olá! Quero saber mais sobre a consultoria ${brand.name}.`,
  });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: `radial-gradient(ellipse at 50% 0%, var(--color-primary)15 0%, transparent 60%), var(--color-background)`,
      }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Social proof badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[var(--color-muted)] border border-[var(--color-border)] rounded-full px-4 py-2 mb-8"
        >
          <Users size={14} className="text-[var(--color-primary)]" />
          <span className="text-sm text-[var(--color-muted-foreground)]">
            {content.socialProof}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-foreground)] leading-tight mb-6"
        >
          {content.headline.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="text-[var(--color-primary)]">
            {content.headline.split(" ").slice(-2).join(" ")}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto mb-10"
        >
          {content.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg">{content.primaryCta}</Button>
          </a>
          <a href="#resultados">
            <Button size="lg" variant="outline">
              {content.secondaryCta}
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Rolar para próxima seção">
          <ArrowDown
            size={24}
            className="text-[var(--color-muted-foreground)] animate-bounce"
          />
        </a>
      </motion.div>
    </section>
  );
}

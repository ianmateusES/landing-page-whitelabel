"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { ContentConfig } from "@/types";
import { contactHref } from "@/lib/contact";

interface Props {
  content: ContentConfig["mission"];
}

export function MissionCta({ content }: Props) {
  return (
    <section
      className="w-full py-20 md:py-28"
      style={{
        background: `radial-gradient(ellipse at 50% 50%, var(--color-primary)10 0%, transparent 70%), var(--color-muted)`,
      }}
    >
      <Container size="md" className="text-center">
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
          <a href={contactHref()} className="inline-block w-full max-w-sm sm:w-auto sm:max-w-none">
            <Button size="lg" className="w-full sm:w-auto">
              {content.ctaLabel}
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

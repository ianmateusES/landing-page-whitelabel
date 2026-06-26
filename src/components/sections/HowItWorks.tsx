"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContentConfig } from "@/types";

interface Props {
  content: ContentConfig["howItWorks"];
}

export function HowItWorks({ content }: Props) {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[var(--color-muted)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={content.sectionLabel}
          heading={content.heading}
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-[var(--color-border)]"
          />

          {content.steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              {/* Step number */}
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)] flex items-center justify-center text-lg font-bold mb-5 relative z-10">
                0{step.step}
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">
                {step.title}
              </h3>
              <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

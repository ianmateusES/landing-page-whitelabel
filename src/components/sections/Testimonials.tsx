"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContentConfig, Testimonial } from "@/types";

interface Props {
  content: ContentConfig["testimonials"];
}

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col">
        <Quote size={24} className="text-[var(--color-primary)] mb-4 opacity-60" />
        <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed flex-1 mb-5">
          {item.text}
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
          <div className="w-9 h-9 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] font-bold text-sm flex-shrink-0">
            {item.name[0]}
          </div>
          <p className="font-semibold text-[var(--color-card-foreground)] text-sm">{item.name}</p>
        </div>
      </Card>
    </motion.div>
  );
}

export function Testimonials({ content }: Props) {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-muted)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={content.sectionLabel}
          heading={content.heading}
          className="mb-14"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {content.items.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

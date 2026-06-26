"use client";

import { motion } from "framer-motion";
import { ClipboardList, Dumbbell, Flame, Heart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContentConfig, TrainingType } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  ClipboardList,
  Dumbbell,
  Flame,
  Heart,
};

interface Props {
  content: ContentConfig["trainingTypes"];
}

function TrainingCard({ item, index }: { item: TrainingType; index: number }) {
  const Icon = iconMap[item.icon] ?? Dumbbell;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:border-[var(--color-primary)]/40 transition-colors duration-300">
        <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
          <Icon size={24} className="text-[var(--color-primary)]" />
        </div>
        <h3 className="text-lg font-semibold text-[var(--color-card-foreground)] mb-2">
          {item.title}
        </h3>
        <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
          {item.description}
        </p>
      </Card>
    </motion.div>
  );
}

export function TrainingTypes({ content }: Props) {
  return (
    <section id="planejamento" className="py-20 md:py-28 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={content.sectionLabel}
          heading={content.heading}
          subheading={content.subheading}
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.items.map((item, i) => (
            <TrainingCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MessageCircle, Video, BarChart2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContentConfig, SupportItem } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  Video,
  BarChart2,
};

interface Props {
  content: ContentConfig["support"];
}

export function Support({ content }: Props) {
  return (
    <section className="w-full py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <SectionHeading
          label={content.sectionLabel}
          heading={content.heading}
          className="mb-14"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {content.items.map((item: SupportItem, i) => {
            const Icon = iconMap[item.icon] ?? MessageCircle;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={28} className="text-[var(--color-primary)]" />
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
          })}
        </div>
      </Container>
    </section>
  );
}

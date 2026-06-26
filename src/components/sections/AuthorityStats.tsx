"use client";

import { motion } from "framer-motion";
import type { ContentConfig } from "@/types";

interface Props {
  content: ContentConfig["stats"];
}

export function AuthorityStats({ content }: Props) {
  return (
    <section className="py-14 bg-[var(--color-muted)] border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {content.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[var(--color-muted-foreground)]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

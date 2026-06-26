"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BrandConfig, ContentConfig, Plan } from "@/types";
import { buildPlanWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  brand: BrandConfig;
  content: ContentConfig["plans"];
}

function PlanCard({
  plan,
  brand,
  index,
}: {
  plan: Plan;
  brand: BrandConfig;
  index: number;
}) {
  const whatsappUrl = buildPlanWhatsAppUrl(
    brand.contact.whatsapp,
    brand.name,
    plan.name,
    plan.price
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={plan.featured ? "md:-mt-4 md:mb-4" : ""}
    >
      <Card featured={plan.featured} className="h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-[var(--color-muted-foreground)] mb-1">{plan.period}</p>
            <h3 className="text-lg font-semibold text-[var(--color-card-foreground)]">
              {plan.name}
            </h3>
          </div>
          {plan.badge && (
            <Badge variant={plan.featured ? "primary" : "muted"}>{plan.badge}</Badge>
          )}
        </div>

        <p className="text-3xl font-bold text-[var(--color-card-foreground)] mb-6">
          {plan.price}
        </p>

        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <Check
                size={16}
                className="text-[var(--color-primary)] mt-0.5 flex-shrink-0"
              />
              <span className="text-[var(--color-muted-foreground)]">{feature}</span>
            </li>
          ))}
        </ul>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant={plan.featured ? "primary" : "outline"}
            fullWidth
            aria-label={`Contratar ${plan.name} — ${plan.price}`}
          >
            {plan.ctaLabel}
          </Button>
        </a>
      </Card>
    </motion.div>
  );
}

export function Pricing({ brand, content }: Props) {
  return (
    <section id="planos" className="py-20 md:py-28 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={content.sectionLabel}
          heading={content.heading}
          subheading={content.subheading}
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {content.items.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

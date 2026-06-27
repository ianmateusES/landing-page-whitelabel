"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContentConfig, Plan } from "@/types";
import { contactHref, selectContactPlan } from "@/lib/contact";

interface Props {
  content: ContentConfig["plans"];
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card featured={plan.featured} className="h-full flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-4 min-h-[3.25rem]">
          <div>
            <p className="text-sm text-[var(--color-muted-foreground)] mb-1">{plan.period}</p>
            <h3 className="text-lg font-semibold text-[var(--color-card-foreground)]">
              {plan.name}
            </h3>
          </div>
          {plan.badge ? (
            <Badge variant={plan.featured ? "primary" : "muted"} className="shrink-0">
              {plan.badge}
            </Badge>
          ) : (
            <span className="invisible shrink-0" aria-hidden>
              <Badge variant="muted">—</Badge>
            </span>
          )}
        </div>

        <p className="text-3xl font-bold text-[var(--color-card-foreground)] mb-6">
          {plan.price}
        </p>

        <ul className="space-y-3 mb-8 flex-1 min-h-0">
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

        <a
          href={contactHref(plan.id)}
          onClick={(event) => {
            event.preventDefault();
            selectContactPlan(plan.id);
          }}
          className="mt-auto"
        >
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

export function Pricing({ content }: Props) {
  return (
    <section id="planos" className="w-full py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <SectionHeading
          label={content.sectionLabel}
          heading={content.heading}
          subheading={content.subheading}
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {content.items.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

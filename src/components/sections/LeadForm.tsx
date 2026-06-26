"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { BrandConfig, ContentConfig, Plan } from "@/types";
import { buildLeadWhatsAppUrl } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string(),
  age: z.string().refine(
    (value) => {
      if (!value.trim()) return true;
      const n = parseInt(value, 10);
      return !isNaN(n) && n >= 10 && n <= 99;
    },
    { message: "Idade deve ser entre 10 e 99" }
  ),
  city: z.string(),
  planId: z.string(),
});

type FormData = z.infer<typeof schema>;

const inputClassName =
  "w-full rounded-xl bg-[var(--color-muted)] border border-[var(--color-border)] px-4 py-3 text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:border-[var(--color-primary)] transition-colors";

interface Props {
  brand: BrandConfig;
  content: ContentConfig["form"];
  plans: Plan[];
}

export function LeadForm({ brand, content, plans }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", age: "", city: "", planId: "" },
  });

  const onSubmit = (data: FormData) => {
    const selectedPlan = plans.find((plan) => plan.id === data.planId);
    const url = buildLeadWhatsAppUrl(brand.contact.whatsapp, brand.name, {
      name: data.name,
      age: data.age,
      city: data.city,
      plan: selectedPlan
        ? { name: selectedPlan.name, price: selectedPlan.price }
        : undefined,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="w-full py-20 md:py-28 bg-[var(--color-background)]">
      <Container size="sm">
        <SectionHeading
          label={content.sectionLabel}
          heading={content.heading}
          subheading={content.subheading}
          className="mb-10"
        />

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5"
            >
              {content.fields.name.label}
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder={content.fields.name.placeholder}
              {...register("name")}
              className={inputClassName}
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5"
            >
              {content.fields.age.label}
            </label>
            <input
              id="age"
              type="number"
              inputMode="numeric"
              min="10"
              max="99"
              placeholder={content.fields.age.placeholder}
              {...register("age")}
              className={`${inputClassName} ${errors.age ? "border-red-500" : ""}`}
            />
            {errors.age && (
              <p className="mt-1.5 text-sm text-red-400">{errors.age.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5"
            >
              {content.fields.city.label}
            </label>
            <input
              id="city"
              type="text"
              autoComplete="address-level2"
              placeholder={content.fields.city.placeholder}
              {...register("city")}
              className={inputClassName}
            />
          </div>

          <div>
            <label
              htmlFor="planId"
              className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5"
            >
              {content.fields.plan.label}
            </label>
            <select
              id="planId"
              {...register("planId")}
              className={`${inputClassName} appearance-none cursor-pointer`}
              defaultValue=""
            >
              <option value="">{content.fields.plan.placeholder}</option>
              {plans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name} — {plan.price}
                </option>
              ))}
            </select>
          </div>

          <Button type="submit" fullWidth size="lg" className="mt-2 gap-3">
            <MessageCircle size={20} />
            {content.submitLabel}
          </Button>

          <p className="text-xs text-[var(--color-muted-foreground)] text-center leading-relaxed">
            {content.privacyNotice}
          </p>
        </form>
      </Container>
    </section>
  );
}

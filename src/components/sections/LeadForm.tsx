"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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

const labelClassName = "block text-sm font-medium text-[var(--color-foreground)] mb-2";
const inputClassName =
  "w-full rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] px-4 py-3.5 text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:border-[var(--color-primary)] transition-colors";

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
    <section id="contato" className="w-full py-16 sm:py-20 md:py-28 bg-[var(--color-muted)]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <Card featured className="p-5 sm:p-8 md:p-10 lg:p-12 shadow-lg shadow-[var(--color-primary)]/5">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <p className="text-[var(--color-primary)] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3">
                {content.sectionLabel}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-foreground)] leading-tight">
                {content.heading}
                {content.headingHighlight ? (
                  <>
                    {" "}
                    <span className="text-[var(--color-primary)]">{content.headingHighlight}</span>
                  </>
                ) : null}
              </h2>
              <p className="mt-3 sm:mt-4 text-[var(--color-muted-foreground)] text-sm sm:text-base md:text-lg leading-relaxed max-w-prose mx-auto">
                {content.subheading}
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 sm:space-y-5">
            <div>
              <label htmlFor="name" className={labelClassName}>
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

            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="age" className={labelClassName}>
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
                <label htmlFor="city" className={labelClassName}>
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
            </div>

            <div>
              <label htmlFor="planId" className={labelClassName}>
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

            <Button
              type="submit"
              fullWidth
              size="lg"
              className="mt-1 sm:mt-2 gap-3 uppercase tracking-wide font-bold text-sm sm:text-base"
            >
              <MessageCircle size={20} />
              {content.submitLabel}
            </Button>

            <p className="text-xs text-[var(--color-muted-foreground)] text-center leading-relaxed pt-1">
              {content.privacyNotice}
            </p>
          </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

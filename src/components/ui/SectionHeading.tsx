interface SectionHeadingProps {
  label?: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  heading,
  subheading,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-foreground)] leading-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-[var(--color-muted-foreground)] text-lg max-w-2xl mx-auto">
          {subheading}
        </p>
      )}
    </div>
  );
}

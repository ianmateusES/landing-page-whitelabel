import type { BrandSocial } from "@/types";
import { getSocialLinks } from "@/lib/social";
import { cn } from "@/lib/utils";
import { SocialIcon } from "@/components/ui/SocialIcon";

interface Props {
  social: BrandSocial;
  className?: string;
}

const buttonClass =
  "flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)]/50 text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors";

export function SocialLinks({ social, className }: Props) {
  const links = getSocialLinks(social);
  if (links.length === 0) return null;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={buttonClass}
        >
          <SocialIcon platform={link.id} />
        </a>
      ))}
    </div>
  );
}

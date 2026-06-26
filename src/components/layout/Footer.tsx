import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { BrandConfig, ContentConfig } from "@/types";

interface Props {
  brand: BrandConfig;
  content: ContentConfig["footer"];
}

export function Footer({ brand, content }: Props) {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={brand.logo.width ?? 120}
            height={brand.logo.height ?? 36}
            className="h-8 w-auto opacity-80"
          />
          <p className="text-[var(--color-muted-foreground)] text-sm">{content.tagline}</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <a
            href={`https://instagram.com/${brand.social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors text-sm"
            aria-label={`Instagram @${brand.social.instagram}`}
          >
            <ExternalLink size={14} />
            @{brand.social.instagram}
          </a>
          <p className="text-[var(--color-muted-foreground)] text-xs">{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

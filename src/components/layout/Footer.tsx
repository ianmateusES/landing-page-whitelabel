import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import type { BrandConfig, ContentConfig } from "@/types";

interface Props {
  brand: BrandConfig;
  content: ContentConfig["footer"];
}

export function Footer({ brand, content }: Props) {
  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-background)] py-10">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
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
          <SocialLinks social={brand.social} />
          <p className="text-[var(--color-muted-foreground)] text-xs">{content.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}

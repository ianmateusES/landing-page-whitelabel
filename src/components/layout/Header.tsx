"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { BrandConfig, ContentConfig } from "@/types";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface Props {
  brand: BrandConfig;
  content: ContentConfig["nav"];
}

export function Header({ brand, content }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(brand.contact.whatsapp, {
    message: `Olá! Quero saber mais sobre a consultoria ${brand.name}.`,
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-background)]/95 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label={`${brand.name} — início`}>
            <Image
              src={brand.logo.src}
              alt={brand.logo.alt}
              width={brand.logo.width ?? 140}
              height={brand.logo.height ?? 40}
              priority
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {content.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button size="sm">{content.ctaLabel}</Button>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[var(--color-foreground)] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-background)]/98 backdrop-blur-md border-b border-[var(--color-border)] px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-4 mb-4">
            {content.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[var(--color-foreground)] font-medium py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button fullWidth>{content.ctaLabel}</Button>
          </a>
        </div>
      )}
    </header>
  );
}

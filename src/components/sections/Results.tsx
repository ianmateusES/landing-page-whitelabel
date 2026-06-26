"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContentConfig, ResultImage } from "@/types";

const INTERVAL_MS = 3000;
const GAP_PX = 16;

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setCount(3);
      else if (w >= 640) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

function ResultCard({
  result,
  brandName,
  onOpen,
}: {
  result: ResultImage;
  brandName: string;
  onOpen: () => void;
}) {
  return (
    <article className="shrink-0 border border-[var(--color-border)] bg-[var(--color-card)] rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={onOpen}
        className="relative aspect-[3/4] w-full bg-[var(--color-muted)] cursor-zoom-in group"
        aria-label={`Ver transformação${result.name ? ` de ${result.name}` : ""} em tela cheia`}
      >
        <Image
          src={result.src}
          alt={result.alt}
          fill
          className="object-cover transition-opacity group-hover:opacity-90"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </button>
      {result.name && (
        <div className="p-4 text-center">
          <p className="font-semibold text-[var(--color-card-foreground)]">{result.name}</p>
          <p className="text-sm text-[var(--color-muted-foreground)]">Aluno {brandName}</p>
        </div>
      )}
    </article>
  );
}

interface Props {
  results: ResultImage[];
  brandName: string;
  content: ContentConfig["results"];
}

export function Results({ results, brandName, content }: Props) {
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, results.length - visibleCount);

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const activeIndex = Math.min(current, maxIndex);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const width = (containerWidth - GAP_PX * (visibleCount - 1)) / visibleCount;
      setCardWidth(width);
    };
    update();
    const observer = new ResizeObserver(update);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [visibleCount]);

  const goNext = useCallback(() => {
    setCurrent((prev) => {
      const safe = Math.min(prev, maxIndex);
      return safe >= maxIndex ? 0 : safe + 1;
    });
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => {
      const safe = Math.min(prev, maxIndex);
      return safe <= 0 ? maxIndex : safe - 1;
    });
  }, [maxIndex]);

  useEffect(() => {
    if (paused || lightboxIndex !== null || results.length <= visibleCount) return;
    const timer = setInterval(goNext, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, lightboxIndex, goNext, results.length, visibleCount]);

  const openLightbox = (index: number) => {
    setPaused(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setPaused(false);
  };

  const lightboxItems = results.map((result) => ({
    src: result.src,
    alt: result.alt,
    caption: result.name,
    subcaption: result.name ? `Aluno ${brandName}` : undefined,
  }));

  const offset = cardWidth > 0 ? activeIndex * (cardWidth + GAP_PX) : 0;
  const slideCount = maxIndex + 1;

  if (results.length === 0) return null;

  return (
    <section id="resultados" className="w-full py-20 md:py-28 bg-[var(--color-background)]">
      <Container>
        <SectionHeading
          label={content.sectionLabel}
          heading={content.heading}
          subheading={content.subheading}
          className="mb-14"
        />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {results.length > visibleCount && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Resultado anterior"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-background)]/90 text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Próximo resultado"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-background)]/90 text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div ref={containerRef} className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ gap: GAP_PX }}
              animate={{ x: -offset }}
              transition={{
                duration: prefersReducedMotion ? 0.15 : 0.5,
                ease: "easeInOut",
              }}
            >
              {results.map((result, index) => (
                <div key={result.id} style={{ width: cardWidth || undefined, flexShrink: 0 }}>
                  <ResultCard
                    result={result}
                    brandName={brandName}
                    onOpen={() => openLightbox(index)}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {slideCount > 1 && (
            <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Resultados">
              {Array.from({ length: slideCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 bg-[var(--color-primary)]"
                      : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-muted-foreground)]"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {lightboxIndex !== null && (
          <ImageLightbox
            items={lightboxItems}
            index={lightboxIndex}
            onIndexChange={setLightboxIndex}
            onClose={closeLightbox}
          />
        )}
      </Container>
    </section>
  );
}

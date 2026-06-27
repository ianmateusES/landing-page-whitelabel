"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CarouselTrack } from "@/components/ui/CarouselTrack";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContentConfig, TestimonialImage } from "@/types";
import { useCarouselAutoplay } from "@/hooks/useCarouselAutoplay";

const INTERVAL_MS = 4000;
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

function TestimonialCard({
  item,
  onOpen,
}: {
  item: TestimonialImage;
  onOpen: () => void;
}) {
  return (
    <article className="shrink-0 h-full border border-[var(--color-border)] bg-[var(--color-card)] rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={onOpen}
        className="relative w-full aspect-[9/16] max-h-[520px] bg-[var(--color-muted)] cursor-zoom-in group"
        aria-label={item.alt}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-contain object-top transition-opacity group-hover:opacity-90"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </button>
      {item.name && (
        <p className="px-4 py-3 text-center text-sm font-medium text-[var(--color-card-foreground)] border-t border-[var(--color-border)]">
          {item.name}
        </p>
      )}
    </article>
  );
}

interface Props {
  testimonials: TestimonialImage[];
  content: ContentConfig["testimonials"];
}

export function Testimonials({ testimonials, content }: Props) {
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

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

  const resetAutoplay = useCarouselAutoplay(
    !paused && lightboxIndex === null && testimonials.length > visibleCount,
    INTERVAL_MS,
    goNext
  );

  const openLightbox = (index: number) => {
    setPaused(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setPaused(false);
  };

  const lightboxItems = testimonials.map((item) => ({
    src: item.src,
    alt: item.alt,
    caption: item.name,
  }));

  const offset = cardWidth > 0 ? activeIndex * (cardWidth + GAP_PX) : 0;
  const slideCount = maxIndex + 1;

  if (testimonials.length === 0) return null;

  return (
    <section className="w-full py-20 md:py-28 bg-[var(--color-muted)]">
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
          {testimonials.length > visibleCount && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Feedback anterior"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-muted)]/95 text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Próximo feedback"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-muted)]/95 text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <div ref={containerRef} className="overflow-hidden touch-pan-y">
            <CarouselTrack
              offset={offset}
              gap={GAP_PX}
              canSwipe={slideCount > 1}
              onPrev={goPrev}
              onNext={goNext}
              onDrag={resetAutoplay}
              prefersReducedMotion={!!prefersReducedMotion}
              className="flex items-start"
            >
              {testimonials.map((item, index) => (
                <div key={item.id} style={{ width: cardWidth || undefined, flexShrink: 0 }}>
                  <TestimonialCard item={item} onOpen={() => openLightbox(index)} />
                </div>
              ))}
            </CarouselTrack>
          </div>

          {slideCount > 1 && (
            <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Feedbacks">
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

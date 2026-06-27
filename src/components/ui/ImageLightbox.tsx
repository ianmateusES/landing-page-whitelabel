"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
  subcaption?: string;
}

interface ImageLightboxProps {
  items: LightboxItem[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

const SWIPE_OFFSET = 60;
const SWIPE_VELOCITY = 400;

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? "-100%" : "100%", opacity: 0 }),
};

export function ImageLightbox({ items, index, onIndexChange, onClose }: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState(0);

  const item = items[index];
  const hasMultiple = items.length > 1;

  const goPrev = useCallback(() => {
    if (!hasMultiple) return;
    setDirection(-1);
    onIndexChange(index <= 0 ? items.length - 1 : index - 1);
  }, [hasMultiple, index, items.length, onIndexChange]);

  const goNext = useCallback(() => {
    if (!hasMultiple) return;
    setDirection(1);
    onIndexChange(index >= items.length - 1 ? 0 : index + 1);
  }, [hasMultiple, index, items.length, onIndexChange]);

  const handleDragEnd = useCallback(
    (_: unknown, { offset, velocity }: PanInfo) => {
      if (!hasMultiple) return;
      const swiped =
        Math.abs(offset.x) > SWIPE_OFFSET || Math.abs(velocity.x) > SWIPE_VELOCITY;
      if (!swiped) return;

      if (offset.x < 0 || velocity.x < -SWIPE_VELOCITY) goNext();
      else if (offset.x > 0 || velocity.x > SWIPE_VELOCITY) goPrev();
    },
    [hasMultiple, goNext, goPrev]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [onClose, goPrev, goNext]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!mounted || !item) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
    >
      <button
        type="button"
        className="absolute inset-0 z-0 cursor-default"
        onClick={onClose}
        aria-label="Fechar visualização"
        tabIndex={-1}
      />

      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Fechar"
      >
        <X size={22} />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <div className="relative z-10 flex flex-1 flex-col items-center min-h-0 pt-14 pb-4 pointer-events-none">
        <div className="flex-1 min-h-4 w-full" aria-hidden />

        <div className="relative w-full max-w-3xl h-[min(70vh,calc(100vw-2rem))] shrink-0 overflow-hidden touch-pan-y pointer-events-auto">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={item.src}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              drag={hasMultiple ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain select-none"
                  sizes="100vw"
                  priority
                  draggable={false}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {(item.caption || item.subcaption) && (
          <div className="shrink-0 px-4 pt-3 text-center max-w-lg pointer-events-auto">
            {item.caption && (
              <p className="text-white font-semibold text-base sm:text-lg">{item.caption}</p>
            )}
            {item.subcaption && (
              <p className="text-white/70 text-sm mt-1">{item.subcaption}</p>
            )}
          </div>
        )}

        {hasMultiple && (
          <div className="shrink-0 flex justify-center gap-2 pt-4 pb-2 pointer-events-auto">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Imagem ${i + 1}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  onIndexChange(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-[var(--color-primary)]"
                    : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        )}

        <div className="flex-1 min-h-4 w-full" aria-hidden />
      </div>
    </motion.div>,
    document.body
  );
}

"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const SWIPE_OFFSET = 50;
const SWIPE_VELOCITY = 0.4;
const DRAG_THRESHOLD = 8;

interface CarouselTrackProps {
  offset: number;
  gap: number;
  canSwipe: boolean;
  onPrev: () => void;
  onNext: () => void;
  prefersReducedMotion: boolean;
  onDrag?: () => void;
  children: ReactNode;
  className?: string;
}

export function CarouselTrack({
  offset,
  gap,
  canSwipe,
  onPrev,
  onNext,
  prefersReducedMotion,
  onDrag,
  children,
  className = "flex",
}: CarouselTrackProps) {
  const x = useMotionValue(-offset);
  const offsetRef = useRef(offset);
  const dragging = useRef(false);
  const pending = useRef(false);
  const pointerId = useRef<number | null>(null);
  const dragStart = useRef({ pointerX: 0, positionX: 0 });
  const lastMove = useRef({ pointerX: 0, time: 0 });
  const autoplayReset = useRef(false);

  offsetRef.current = offset;

  useEffect(() => {
    if (dragging.current) return;

    const controls = animate(x, -offset, {
      duration: prefersReducedMotion ? 0.15 : 0.5,
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [offset, prefersReducedMotion, x]);

  const finishDrag = (clientX: number) => {
    const wasDragging = dragging.current;
    dragging.current = false;
    pending.current = false;
    pointerId.current = null;
    autoplayReset.current = false;

    if (!wasDragging) return;

    const delta = clientX - dragStart.current.pointerX;
    const elapsed = Math.max(Date.now() - lastMove.current.time, 1);
    const velocity = (clientX - lastMove.current.pointerX) / elapsed;

    const swiped =
      Math.abs(delta) > SWIPE_OFFSET || Math.abs(velocity) > SWIPE_VELOCITY;

    if (!swiped) {
      animate(x, -offsetRef.current, { duration: 0.25, ease: "easeOut" });
      return;
    }

    if (delta < 0 || velocity < -SWIPE_VELOCITY) onNext();
    else if (delta > 0 || velocity > SWIPE_VELOCITY) onPrev();
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!canSwipe || event.button !== 0) return;

    pending.current = true;
    pointerId.current = event.pointerId;
    dragStart.current = { pointerX: event.clientX, positionX: x.get() };
    lastMove.current = { pointerX: event.clientX, time: Date.now() };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerId.current !== event.pointerId) return;

    if (pending.current && !dragging.current) {
      const delta = event.clientX - dragStart.current.pointerX;
      if (Math.abs(delta) < DRAG_THRESHOLD) return;

      dragging.current = true;
      pending.current = false;
      event.currentTarget.setPointerCapture(event.pointerId);

      if (!autoplayReset.current) {
        autoplayReset.current = true;
        onDrag?.();
      }
    }

    if (!dragging.current) return;

    const delta = event.clientX - dragStart.current.pointerX;
    x.set(dragStart.current.positionX + delta);
    lastMove.current = { pointerX: event.clientX, time: Date.now() };
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerId.current !== event.pointerId) return;

    if (dragging.current) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    finishDrag(event.clientX);
  };

  const handlePointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerId.current !== event.pointerId) return;
    finishDrag(event.clientX);
  };

  return (
    <motion.div
      className={`${className}${canSwipe ? " cursor-grab active:cursor-grabbing select-none" : ""}`}
      style={{ x, gap, touchAction: canSwipe ? "pan-y" : undefined }}
      onPointerDown={canSwipe ? handlePointerDown : undefined}
      onPointerMove={canSwipe ? handlePointerMove : undefined}
      onPointerUp={canSwipe ? handlePointerUp : undefined}
      onPointerCancel={canSwipe ? handlePointerCancel : undefined}
    >
      {children}
    </motion.div>
  );
}

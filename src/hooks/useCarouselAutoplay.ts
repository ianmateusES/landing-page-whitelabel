"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useCarouselAutoplay(
  enabled: boolean,
  intervalMs: number,
  onTick: () => void
) {
  const onTickRef = useRef(onTick);
  onTickRef.current = onTick;

  const [epoch, setEpoch] = useState(0);

  const reset = useCallback(() => {
    setEpoch((value) => value + 1);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const timer = setInterval(() => onTickRef.current(), intervalMs);
    return () => clearInterval(timer);
  }, [enabled, intervalMs, epoch]);

  return reset;
}

"use client";

import { useCallback, useSyncExternalStore } from "react";

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}

// Tracks whether the viewport is desktop-sized — used to gate effects that
// should be disabled on mobile (mouse parallax, the 3D hero scene).
export function useIsDesktop(breakpoint = 768) {
  return useMediaQuery(`(min-width: ${breakpoint}px)`);
}

// True when the device has a precise pointer (mouse/trackpad) — used to gate
// hover-only effects like magnetic buttons away from touch devices.
export function useHasFinePointer() {
  return useMediaQuery("(pointer: fine)");
}

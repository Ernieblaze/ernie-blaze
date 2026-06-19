"use client";

import { createContext, useContext, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { useIsDesktop, useHasFinePointer } from "@/lib/motion";

const ParallaxContext = createContext<{ mx: MotionValue<number>; my: MotionValue<number> } | null>(null);

// One shared mousemove listener (normalized against the viewport) — children
// read depth-scaled offsets from context instead of each attaching their own
// listener. Renders no DOM node of its own, so it never affects layout.
export function MouseParallaxProvider({ children }: { children: React.ReactNode }) {
  const isDesktop = useIsDesktop();
  const hasFinePointer = useHasFinePointer();
  const reduceMotion = useReducedMotion();
  const enabled = isDesktop && hasFinePointer && !reduceMotion;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    if (!enabled) {
      mx.set(0);
      my.set(0);
      return;
    }
    function handleMove(e: MouseEvent) {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled, mx, my]);

  return <ParallaxContext.Provider value={{ mx, my }}>{children}</ParallaxContext.Provider>;
}

// depth: how many px the layer drifts at the extremes of mouse travel.
export function useParallax(depth: number) {
  const ctx = useContext(ParallaxContext);
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);
  const x = useTransform(ctx?.mx ?? fallbackX, (v) => v * depth * -2);
  const y = useTransform(ctx?.my ?? fallbackY, (v) => v * depth * -2);
  const sx = useSpring(x, { stiffness: 60, damping: 18 });
  const sy = useSpring(y, { stiffness: 60, damping: 18 });
  return { x: sx, y: sy };
}

export function ParallaxLayer({
  depth,
  className = "",
  children,
}: {
  depth: number;
  className?: string;
  children: React.ReactNode;
}) {
  const { x, y } = useParallax(depth);
  return (
    <motion.div style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}

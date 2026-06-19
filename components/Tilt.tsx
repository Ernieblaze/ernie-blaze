"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function Tilt({
  children,
  className = "",
  max = 8,
  lift = 0,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  lift?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const y = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 220, damping: 22 });
  const sry = useSpring(ry, { stiffness: 220, damping: 22 });
  const sy = useSpring(y, { stiffness: 220, damping: 22 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
    if (lift) y.set(lift);
  }

  function handleMouseLeave() {
    rx.set(0);
    ry.set(0);
    y.set(0);
  }

  useEffect(() => {
    if (reduceMotion) return;

    function handleOrientation(e: DeviceOrientationEvent) {
      if (window.innerWidth >= 768) return;
      const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
      const gamma = e.gamma ?? 0;
      const beta = e.beta ?? 45;
      ry.set(clamp(gamma / 4, max));
      rx.set(clamp(-(beta - 45) / 6, max));
    }

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [reduceMotion, max, rx, ry]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: srx, rotateY: sry, y: sy, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

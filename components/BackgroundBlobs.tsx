"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useParallax } from "./MouseParallax";

export default function BackgroundBlobs() {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const range = reduceMotion ? [0, 0] : undefined;
  const y1 = useTransform(scrollY, [0, 700], range ?? [0, 50]);
  const y2 = useTransform(scrollY, [0, 700], range ?? [0, -35]);
  const y3 = useTransform(scrollY, [0, 700], range ?? [0, 30]);

  const p1 = useParallax(18);
  const p2 = useParallax(26);
  const p3 = useParallax(14);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1, x: p1.x }}
        className="animate-blob absolute -top-12 -left-12 h-44 w-44 sm:-top-24 sm:-left-24 sm:h-72 sm:w-72 rounded-full bg-emerald/15 blur-[55px] sm:blur-[90px]"
      />
      <motion.div
        style={{ y: y2, x: p2.x, animationDelay: "4s" }}
        className="animate-blob absolute top-6 right-[-30px] h-48 w-48 sm:top-10 sm:right-[-60px] sm:h-80 sm:w-80 rounded-full bg-indigo-300/20 blur-[60px] sm:blur-[100px]"
      />
      <motion.div
        style={{ y: y3, x: p3.x, animationDelay: "8s" }}
        className="animate-blob absolute bottom-[-50px] left-1/3 h-40 w-40 sm:bottom-[-80px] sm:h-64 sm:w-64 rounded-full bg-mint blur-[55px] sm:blur-[90px]"
      />
    </div>
  );
}

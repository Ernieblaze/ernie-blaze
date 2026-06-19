"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.2 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: progress }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-emerald"
    />
  );
}

"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { useIsDesktop } from "@/lib/motion";

// Only fetched when actually rendered (desktop + motion allowed) — keeps the
// three.js bundle out of the initial page load entirely.
const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function HeroOrb() {
  const reduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const show3D = isDesktop && !reduceMotion;

  return (
    <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
      {show3D ? (
        <Hero3D />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-gradient-to-br from-emerald/40 via-emerald/15 to-transparent blur-2xl" />
        </div>
      )}
    </div>
  );
}

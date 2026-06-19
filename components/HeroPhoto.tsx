"use client";

import { useState } from "react";
import Image from "next/image";

const bottomFadeMask = "linear-gradient(to bottom, #000 80%, transparent 100%)";

export default function HeroPhoto({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.4),transparent_70%)] blur-2xl scale-110"
      />
      {/* Rises behind the lower portion of the subject so the fade reads as intentional, not cut off */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-2/5 rounded-b-[3rem] bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgba(16,185,129,0.45),transparent_75%)] blur-xl"
      />
      {errored ? (
        <div className="flex h-full w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-emerald to-emerald-deep">
          <span className="font-heading text-6xl sm:text-7xl font-extrabold text-white/90">
            EB
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 90vw, 400px"
          className="object-contain object-bottom"
          style={{
            maskImage: bottomFadeMask,
            WebkitMaskImage: bottomFadeMask,
          }}
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}

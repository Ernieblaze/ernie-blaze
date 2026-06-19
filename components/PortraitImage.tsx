"use client";

import { useState } from "react";
import { User } from "lucide-react";

export default function PortraitImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-mint via-mist to-emerald/20 text-emerald-deep/40">
        <User className="h-24 w-24 sm:h-32 sm:w-32" strokeWidth={1} />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className="h-full w-full object-cover"
    />
  );
}

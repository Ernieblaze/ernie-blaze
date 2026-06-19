"use client";

import { useState } from "react";
import Image from "next/image";
import { QrCode } from "lucide-react";

export default function QrImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-xl border border-ink/10 bg-mist text-ink/25 mb-2">
        {errored ? (
          <QrCode className="h-16 w-16" />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={144}
            height={144}
            className="h-full w-full object-contain"
            onError={() => setErrored(true)}
          />
        )}
      </div>
      <p className="text-xs text-ink/40">
        {errored ? "QR code placeholder" : "Scan to copy address"}
      </p>
    </div>
  );
}

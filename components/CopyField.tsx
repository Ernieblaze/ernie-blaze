"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyField({
  label,
  value,
  mono = false,
}: {
  label?: string;
  value: string;
  mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      {label && <p className="text-sm text-ink/50 mb-2">{label}</p>}
      <div className="flex items-center gap-2 rounded-full border border-ink/12 bg-mist px-4 py-2.5">
        <span className={`flex-1 truncate text-xs sm:text-sm text-ink/80 ${mono ? "font-mono" : ""}`}>
          {value}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={label ? `Copy ${label}` : "Copy"}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald/15 text-emerald-deep transition-colors hover:bg-emerald/25"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      {copied && <p className="text-emerald-deep text-xs mt-1.5">Copied!</p>}
    </div>
  );
}

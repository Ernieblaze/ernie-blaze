"use client";

import { useState } from "react";
import { ChevronDown, TriangleAlert } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import CopyField from "./CopyField";
import QrImage from "./QrImage";
import { siteConfig } from "@/lib/config";

export default function Payment() {
  const [showBank, setShowBank] = useState(false);
  const { usdtAddress, usdtNetwork, qrImage, bank } = siteConfig.payment;

  return (
    <section className="px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Send a Gift" title="Support With USDT or Bank Transfer" />
      </Reveal>
      <Reveal className="max-w-lg mx-auto">
        <div className="rounded-3xl border border-ink/8 bg-white p-8 sm:p-10 shadow-[0_20px_50px_-20px_rgba(22,19,31,0.15)]">
          <QrImage src={qrImage} alt="USDT address QR code" />

          <p className="mt-8 mb-2 text-center">
            <span className="font-mono-label text-[11px] text-emerald-deep">
              USDT — {usdtNetwork} only
            </span>
          </p>
          <CopyField value={usdtAddress} mono />

          <div className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-200/60 px-4 py-3">
            <TriangleAlert className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700 leading-relaxed">
              Double-check the address before sending — crypto transfers can&apos;t be reversed.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowBank((v) => !v)}
            className="mt-8 flex w-full items-center justify-between rounded-full border border-ink/10 px-5 py-3 text-sm text-ink/70 transition-colors hover:border-ink/25"
          >
            Show bank details
            <ChevronDown
              className={`h-4 w-4 transition-transform ${showBank ? "rotate-180" : ""}`}
            />
          </button>

          {showBank && (
            <div className="mt-4 space-y-4 rounded-xl border border-ink/10 bg-mist p-5">
              <p className="font-mono-label text-[11px] text-ink/40">
                {bank.name}
              </p>
              <CopyField label="Account Holder" value={bank.holder} />
              <CopyField label="Account Number" value={bank.account} mono />
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Copy, Check, ChevronDown, QrCode } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/config";

export default function Payment() {
  const [copied, setCopied] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const { btcAddress, bank } = siteConfig.payment;

  async function handleCopy() {
    await navigator.clipboard.writeText(btcAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Payment" title="Send Support Directly" />
      </Reveal>
      <Reveal className="max-w-lg mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex h-36 w-36 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/30 mb-2">
              {/* TODO: replace with a generated QR code image for the BTC address */}
              <QrCode className="h-16 w-16" />
            </div>
            <p className="text-xs text-white/40">QR code placeholder</p>
          </div>

          <p className="text-sm text-white/50 mb-2 text-center">
            Bitcoin (BTC) Address
          </p>
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-3">
            <code className="flex-1 truncate text-xs sm:text-sm text-white/80">
              {btcAddress}
            </code>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy BTC address"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors hover:bg-accent/25"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
          {copied && (
            <p className="text-accent text-xs mt-2 text-center">Copied!</p>
          )}

          <button
            type="button"
            onClick={() => setShowBank((v) => !v)}
            className="mt-8 flex w-full items-center justify-between rounded-full border border-white/10 px-5 py-3 text-sm text-white/70 transition-colors hover:border-white/25"
          >
            Show bank details
            <ChevronDown
              className={`h-4 w-4 transition-transform ${showBank ? "rotate-180" : ""}`}
            />
          </button>

          {showBank && (
            <div className="mt-4 space-y-2 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/70">
              <p>
                <span className="text-white/40">Account Name: </span>
                {bank.accountName}
              </p>
              <p>
                <span className="text-white/40">Bank: </span>
                {bank.bankName}
              </p>
              <p>
                <span className="text-white/40">Account Number: </span>
                {bank.accountNumber}
              </p>
              <p>
                <span className="text-white/40">SWIFT: </span>
                {bank.swift}
              </p>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}

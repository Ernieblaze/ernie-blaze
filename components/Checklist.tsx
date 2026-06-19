"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/config";
import { isPlaceholder } from "@/lib/links";

type Status = "idle" | "submitting" | "success" | "error";

export default function Checklist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const { formspreeEndpoint } = siteConfig.checklist;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isPlaceholder(formspreeEndpoint)) {
      // TODO: paste a real Formspree endpoint in lib/config.ts to send these for real.
      console.log("Checklist signup email:", email);
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="checklist" className="px-6 py-20 sm:py-28">
      <Reveal className="max-w-xl mx-auto text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-emerald-deep">
          <Mail className="h-5 w-5" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          {siteConfig.checklist.headline}
        </h2>
        <p className="text-ink/60 mb-8 leading-relaxed">
          {siteConfig.checklist.description}
        </p>

        {status === "success" ? (
          <p className="text-emerald-deep font-medium">
            You&apos;re in! Check your inbox soon.
          </p>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-full border border-ink/12 bg-white px-5 py-3.5 text-sm sm:text-base placeholder:text-ink/30 outline-none transition-colors focus:border-emerald"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center rounded-full bg-emerald px-7 py-3.5 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:bg-emerald-deep hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "submitting" ? "Sending..." : "Get It Free"}
              </button>
            </form>
            {status === "error" && (
              <p className="text-red-500 text-sm mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </>
        )}
      </Reveal>
    </section>
  );
}

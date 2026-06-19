"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/config";

export default function Checklist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect to Formspree/Mailchimp instead of console.log
    console.log("Checklist signup email:", email);
    setSubmitted(true);
  }

  return (
    <section id="checklist" className="px-6 py-20 sm:py-28">
      <Reveal className="max-w-xl mx-auto text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <Mail className="h-5 w-5" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-4">
          {siteConfig.checklist.headline}
        </h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          {siteConfig.checklist.description}
        </p>

        {submitted ? (
          <p className="text-accent font-medium">
            You&apos;re in! Check your inbox soon.
          </p>
        ) : (
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
              className="flex-1 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3.5 text-sm sm:text-base placeholder:text-white/30 outline-none transition-colors focus:border-accent"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm sm:text-base font-medium text-[#0E0E12] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] hover:-translate-y-0.5"
            >
              Get It Free
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}

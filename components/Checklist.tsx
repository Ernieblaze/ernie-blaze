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
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-emerald-deep">
          <Mail className="h-5 w-5" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          {siteConfig.checklist.headline}
        </h2>
        <p className="text-ink/60 mb-8 leading-relaxed">
          {siteConfig.checklist.description}
        </p>

        {submitted ? (
          <p className="text-emerald-deep font-medium">
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
              className="flex-1 rounded-full border border-ink/12 bg-white px-5 py-3.5 text-sm sm:text-base placeholder:text-ink/30 outline-none transition-colors focus:border-emerald"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-emerald px-7 py-3.5 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:bg-emerald-deep hover:scale-[1.03]"
            >
              Get It Free
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}

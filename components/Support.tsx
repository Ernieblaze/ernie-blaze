import { HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";
import { siteConfig } from "@/lib/config";

export default function Support() {
  return (
    <section id="support" className="px-6 py-20 sm:py-28">
      <Reveal className="max-w-xl mx-auto">
        <div className="rounded-3xl border border-amber-200/60 bg-gradient-to-br from-amber-50 via-mint to-mist p-8 sm:p-12 text-center">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 text-emerald-deep">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Support the Mission
          </h2>
          <p className="text-ink/60 mb-8 leading-relaxed">
            {siteConfig.support.description}
          </p>
          <Button href={siteConfig.support.tipUrl} variant="secondary">
            Tip / Support Me
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

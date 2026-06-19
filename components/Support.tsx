import { HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";
import Button from "./Button";
import { siteConfig } from "@/lib/config";

export default function Support() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <Reveal className="max-w-xl mx-auto text-center">
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <HeartHandshake className="h-5 w-5" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-4">
          Support the Mission
        </h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          {siteConfig.support.description}
        </p>
        <Button href={siteConfig.support.tipUrl} variant="secondary">
          Tip / Support Me
        </Button>
      </Reveal>
    </section>
  );
}

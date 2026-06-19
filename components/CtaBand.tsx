import Reveal from "./Reveal";
import Button from "./Button";
import { siteConfig } from "@/lib/config";

export default function CtaBand() {
  return (
    <section className="px-6 py-16 sm:py-20 bg-emerald">
      <Reveal className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
          Ready to build wealth on your own terms?
        </h2>
        <Button
          href={siteConfig.ctas.joinFree}
          variant="secondary"
          className="!bg-white !text-emerald-deep !border-transparent hover:!bg-white/90"
        >
          Join Free Today
        </Button>
      </Reveal>
    </section>
  );
}

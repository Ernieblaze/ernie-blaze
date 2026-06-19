import Button from "./Button";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div
        aria-hidden
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[140px] pointer-events-none"
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-accent text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-6">
          {siteConfig.tagline}
        </p>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
          ERNIE BLAZE
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          I help young entrepreneurs master the crypto &amp; forex markets,
          build real income online, and create a life they own.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href={siteConfig.ctas.startHere} variant="primary">
            Start Here
          </Button>
          <Button href={siteConfig.ctas.watchContent} variant="secondary">
            Watch My Content
          </Button>
        </div>
      </div>
    </section>
  );
}

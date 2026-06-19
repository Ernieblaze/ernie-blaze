"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import BackgroundBlobs from "./BackgroundBlobs";
import HeroOrb from "./HeroOrb";
import PortraitImage from "./PortraitImage";
import HeroPhoto from "./HeroPhoto";
import HeadlineReveal from "./HeadlineReveal";
import StatCard from "./StatCard";
import Tilt from "./Tilt";
import { MouseParallaxProvider, ParallaxLayer } from "./MouseParallax";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      <MouseParallaxProvider>
        <BackgroundBlobs />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <p className="font-mono-label text-xs text-emerald-deep mb-5">
              Content Creator · Nigeria · Global
            </p>
            <HeadlineReveal
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]"
              words={[
                { text: "Build" },
                { text: "wealth." },
                { text: "Build", emerald: true },
                { text: "yourself." },
              ]}
            />
            <p className="mt-6 text-base sm:text-lg text-ink/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I help young entrepreneurs master the crypto &amp; forex markets,
              build real income online, and create a life they own.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href={siteConfig.ctas.startHere} variant="primary">
                Start Here
              </Button>
              <Button href={siteConfig.ctas.watchContent} variant="secondary">
                Watch My Content
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-3">
                {siteConfig.hero.socialProofAvatars.map((src, i) => (
                  <div
                    key={src}
                    className="h-9 w-9 rounded-full border-2 border-paper bg-gradient-to-br from-emerald/30 to-indigo-200 overflow-hidden"
                    style={{ zIndex: 10 - i }}
                  >
                    <PortraitImage src={src} alt="Community member" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-ink/60">
                {siteConfig.hero.socialProofLabel}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <HeroOrb />

            <ParallaxLayer depth={10}>
              <Tilt max={6}>
                <HeroPhoto src={siteConfig.heroImage} alt="Ernie Blaze" />
              </Tilt>
            </ParallaxLayer>

            <ParallaxLayer
              depth={16}
              className="absolute left-1 top-4 sm:-left-6 sm:top-8"
            >
              <StatCard
                label={siteConfig.hero.stats[0].label}
                value={siteConfig.hero.stats[0].value}
                floatDelay="0s"
              />
            </ParallaxLayer>
            <ParallaxLayer
              depth={20}
              className="absolute right-1 top-1/2 -translate-y-1/2 sm:-right-6"
            >
              <StatCard
                label={siteConfig.hero.stats[1].label}
                value={siteConfig.hero.stats[1].value}
                floatDelay="1.5s"
              />
            </ParallaxLayer>
            <ParallaxLayer
              depth={14}
              className="absolute left-1 bottom-4 sm:-left-4 sm:bottom-8"
            >
              <StatCard
                label={siteConfig.hero.stats[2].label}
                value={siteConfig.hero.stats[2].value}
                floatDelay="3s"
              />
            </ParallaxLayer>
          </motion.div>
        </div>
      </MouseParallaxProvider>
    </section>
  );
}

import { LineChart, Laptop, Rocket, Brain, HeartPulse } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const topics = [
  {
    title: "Crypto & Forex",
    description: "Learn to read the markets and trade with discipline, not gambling.",
    Icon: LineChart,
  },
  {
    title: "Making Money Online",
    description: "Real, repeatable strategies to build income from anywhere.",
    Icon: Laptop,
  },
  {
    title: "Entrepreneurship",
    description: "Build, launch, and grow your own thing — step by step.",
    Icon: Rocket,
  },
  {
    title: "Money & Mindset",
    description: "The inner game that determines whether wealth sticks.",
    Icon: Brain,
  },
  {
    title: "Health & Energy",
    description: "Train your body and mind to sustain the hustle long-term.",
    Icon: HeartPulse,
  },
];

export default function WhatITeach() {
  return (
    <section id="teach" className="px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="What I Teach"
          title="Everything you need to build a self-made life"
        />
      </Reveal>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {topics.map(({ title, description, Icon }, i) => (
          <Reveal key={title} delay={i * 80}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7 transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.05] hover:-translate-y-1">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2">
                {title}
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

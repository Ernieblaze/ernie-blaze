import { LineChart, Laptop, Rocket, Brain, HeartPulse } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Tilt from "./Tilt";

const topics = [
  {
    title: "Crypto & Forex",
    description: "Learn to read the markets and trade with discipline, not gambling.",
    Icon: LineChart,
    bg: "bg-mint",
  },
  {
    title: "Making Money Online",
    description: "Real, repeatable strategies to build income from anywhere.",
    Icon: Laptop,
    bg: "bg-mist",
  },
  {
    title: "Entrepreneurship",
    description: "Build, launch, and grow your own thing — step by step.",
    Icon: Rocket,
    bg: "bg-mint",
  },
  {
    title: "Money & Mindset",
    description: "The inner game that determines whether wealth sticks.",
    Icon: Brain,
    bg: "bg-mist",
  },
  {
    title: "Health & Energy",
    description: "Train your body and mind to sustain the hustle long-term.",
    Icon: HeartPulse,
    bg: "bg-mint",
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
        {topics.map(({ title, description, Icon, bg }, i) => (
          <Reveal key={title} delay={i * 80}>
            <Tilt max={6} lift={-4} className="h-full">
              <div className="h-full rounded-2xl border border-ink/8 bg-white p-6 sm:p-7 transition-colors duration-300 hover:shadow-[0_20px_40px_-16px_rgba(16,185,129,0.25)] hover:border-emerald/30">
                <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${bg} text-emerald-deep`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-ink/55 text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

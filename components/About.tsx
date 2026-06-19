import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 sm:py-28">
      <Reveal className="max-w-3xl mx-auto text-center">
        <p className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          About
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
          I&apos;m Ernie Blaze
        </h2>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
          I&apos;m a content creator from Nigeria on a mission to help young
          entrepreneurs stand on their own. I teach crypto &amp; forex
          trading, how to make money online, entrepreneurship, money mindset,
          and health — because real wealth starts with a strong mind and a
          strong body. My goal is simple: give people the tools to build
          their own income, their own freedom, and a life they fully own — no
          matter where they start from.
        </p>
      </Reveal>
    </section>
  );
}

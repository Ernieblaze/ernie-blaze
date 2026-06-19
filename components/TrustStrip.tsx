const platforms = ["TikTok", "YouTube", "Instagram", "Facebook", "X", "Telegram"];
const items = [...platforms, ...platforms];

export default function TrustStrip() {
  return (
    <section className="relative py-10 sm:py-14 border-y border-ink/8 bg-white/40">
      <p className="font-mono-label text-center text-xs text-ink/40 mb-6">
        As seen across
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max gap-16 animate-marquee">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-heading text-2xl sm:text-3xl font-bold text-ink/15 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

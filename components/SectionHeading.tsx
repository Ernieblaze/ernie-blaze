export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
      {eyebrow && (
        <p className="font-mono-label text-xs text-emerald mb-3">{eyebrow}</p>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? "text-white/60" : "text-ink/55"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

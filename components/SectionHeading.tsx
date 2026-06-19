export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
      {eyebrow && (
        <p className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-white/60 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

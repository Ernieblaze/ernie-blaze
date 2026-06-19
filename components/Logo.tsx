// Swap this component's contents for a real <Image> logo whenever one is ready —
// every other component just renders <Logo />, so the change happens in one place.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex items-baseline font-heading font-bold text-base sm:text-lg tracking-tight ${className}`}
    >
      <span className="text-ink">ERNIE&nbsp;</span>
      <span className="relative">
        <span className="blaze-text bg-clip-text text-transparent">BLAZE</span>
        <span
          aria-hidden
          className="ember-spark absolute -top-1.5 right-[-6px] h-1 w-1 rounded-full bg-[#FF7A1A]"
        />
        <span
          aria-hidden
          className="ember-spark absolute -top-2.5 right-[2px] h-[3px] w-[3px] rounded-full bg-emerald"
          style={{ animationDelay: "1.2s" }}
        />
      </span>
    </span>
  );
}

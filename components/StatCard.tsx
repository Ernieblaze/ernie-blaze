import CountUp from "./CountUp";

export default function StatCard({
  label,
  value,
  className = "",
}: {
  label: string;
  value: number;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-ink/8 bg-white/90 backdrop-blur-xl px-4 sm:px-5 py-3 sm:py-4 shadow-[0_12px_32px_-12px_rgba(22,19,31,0.18)] ${className}`}
    >
      <p className="font-heading text-xl sm:text-2xl font-bold text-emerald-deep">
        <CountUp value={value} suffix="+" />
      </p>
      <p className="font-mono-label text-[10px] sm:text-xs text-ink/50 mt-0.5">
        {label}
      </p>
    </div>
  );
}

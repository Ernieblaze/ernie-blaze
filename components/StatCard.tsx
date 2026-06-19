import CountUp from "./CountUp";
import Tilt from "./Tilt";

export default function StatCard({
  label,
  value,
  floatDelay = "0s",
}: {
  label: string;
  value: number;
  floatDelay?: string;
}) {
  return (
    <div className="animate-card-float" style={{ animationDelay: floatDelay }}>
      <Tilt max={6}>
        <div className="rounded-2xl border border-ink/10 bg-white/75 backdrop-blur-2xl ring-1 ring-inset ring-white/40 px-3.5 sm:px-5 py-2.5 sm:py-4 shadow-[0_12px_32px_-12px_rgba(22,19,31,0.18)]">
          <p className="font-heading text-xl sm:text-2xl font-bold text-emerald-deep">
            <CountUp value={value} suffix="+" />
          </p>
          <p className="font-mono-label text-[10px] sm:text-xs text-ink/50 mt-0.5">
            {label}
          </p>
        </div>
      </Tilt>
    </div>
  );
}

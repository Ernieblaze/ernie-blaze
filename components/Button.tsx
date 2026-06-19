import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { isPlaceholder } from "@/lib/links";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  showArrow?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium transition-all duration-300 text-sm sm:text-base hover:scale-[1.03] active:scale-[0.98]";

  const variants = {
    primary:
      "bg-emerald text-white shadow-[0_8px_24px_-8px_rgba(16,185,129,0.55)] hover:bg-emerald-deep hover:shadow-[0_12px_32px_-8px_rgba(16,185,129,0.65)]",
    secondary:
      "border border-ink/15 text-ink bg-white/60 hover:border-emerald hover:text-emerald-deep",
    dark:
      "border border-white/15 text-white bg-white/5 hover:border-emerald hover:text-emerald",
  };

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (isPlaceholder(href)) {
    return (
      <span
        aria-disabled="true"
        title="Coming soon"
        className={`${base} ${variants[variant]} ${className} relative cursor-not-allowed opacity-50 hover:scale-100`}
      >
        {content}
        <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
          Coming soon
        </span>
      </span>
    );
  }

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </Link>
  );
}

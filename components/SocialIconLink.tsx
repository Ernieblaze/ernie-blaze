import type { ComponentType } from "react";
import { isPlaceholder } from "@/lib/links";

type SocialIconLinkProps = {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  className?: string;
  iconClassName?: string;
};

export default function SocialIconLink({
  href,
  label,
  Icon,
  className = "",
  iconClassName = "h-5 w-5",
}: SocialIconLinkProps) {
  if (isPlaceholder(href)) {
    return (
      <span
        aria-disabled="true"
        title={`${label} — coming soon`}
        className={`group relative cursor-not-allowed opacity-40 ${className}`}
      >
        <Icon className={iconClassName} />
        <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
          Coming soon
        </span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      <Icon className={iconClassName} />
    </a>
  );
}

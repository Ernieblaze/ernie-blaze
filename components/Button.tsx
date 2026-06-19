import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 font-medium transition-all duration-300 text-sm sm:text-base";

  const variants = {
    primary:
      "bg-accent text-[#0E0E12] hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] hover:-translate-y-0.5",
    secondary:
      "border border-white/20 text-white hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(255,107,53,0.25)] hover:-translate-y-0.5",
  };

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

import { FaWhatsapp } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { isPlaceholder, whatsappUrl } from "@/lib/links";

export default function Footer() {
  const whatsappHref = whatsappUrl(siteConfig.whatsapp);

  return (
    <footer className="px-6 py-12 border-t border-ink/8 bg-paper">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-11 py-2 text-sm text-ink/70 transition-colors hover:text-emerald-deep"
            >
              <FaWhatsapp className="h-4 w-4" />
              Chat with me on WhatsApp
            </a>
          ) : (
            <span
              aria-disabled="true"
              title="Coming soon"
              className="group relative inline-flex items-center gap-2 min-h-11 py-2 text-sm text-ink/40 cursor-not-allowed"
            >
              <FaWhatsapp className="h-4 w-4" />
              Chat with me on WhatsApp
              <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                Coming soon
              </span>
            </span>
          )}

          {!isPlaceholder(siteConfig.email) && (
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 min-h-11 py-2 text-sm text-ink/70 transition-colors hover:text-emerald-deep"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
          )}
        </div>

        <p className="text-xs text-ink/40 leading-relaxed max-w-md">
          {siteConfig.footer.disclaimer}
        </p>

        <p className="text-xs text-ink/30">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

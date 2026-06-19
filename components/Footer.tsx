import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-ink/8 bg-paper">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
        <a
          href={siteConfig.footer.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-emerald-deep"
        >
          <FaWhatsapp className="h-4 w-4" />
          Chat with me on WhatsApp
        </a>

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

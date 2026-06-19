import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaTelegram,
  FaXTwitter,
  FaThreads,
} from "react-icons/fa6";
import { siteConfig } from "@/lib/config";

const links = [
  { label: "Facebook", href: siteConfig.socials.facebook, Icon: FaFacebookF },
  { label: "Instagram", href: siteConfig.socials.instagram, Icon: FaInstagram },
  { label: "YouTube", href: siteConfig.socials.youtube, Icon: FaYoutube },
  { label: "TikTok", href: siteConfig.socials.tiktok, Icon: FaTiktok },
  { label: "WhatsApp", href: siteConfig.socials.whatsapp, Icon: FaWhatsapp },
  { label: "Telegram", href: siteConfig.socials.telegram, Icon: FaTelegram },
  { label: "X", href: siteConfig.socials.x, Icon: FaXTwitter },
  { label: "Threads", href: siteConfig.socials.threads, Icon: FaThreads },
];

export default function SocialLinks() {
  return (
    <section className="px-6 pb-16 sm:pb-20">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(255,107,53,0.35)] hover:-translate-y-0.5"
          >
            <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </a>
        ))}
      </div>
    </section>
  );
}

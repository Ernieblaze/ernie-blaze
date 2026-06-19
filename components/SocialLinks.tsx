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
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/lib/config";

const links = [
  { label: "Facebook", href: siteConfig.socials.facebook, Icon: FaFacebookF, bg: "bg-[#1877F2]" },
  { label: "Instagram", href: siteConfig.socials.instagram, Icon: FaInstagram, bg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
  { label: "YouTube", href: siteConfig.socials.youtube, Icon: FaYoutube, bg: "bg-[#FF0000]" },
  { label: "TikTok", href: siteConfig.socials.tiktok, Icon: FaTiktok, bg: "bg-ink" },
  { label: "WhatsApp", href: siteConfig.socials.whatsapp, Icon: FaWhatsapp, bg: "bg-[#25D366]" },
  { label: "Telegram", href: siteConfig.socials.telegram, Icon: FaTelegram, bg: "bg-[#26A5E4]" },
  { label: "X", href: siteConfig.socials.x, Icon: FaXTwitter, bg: "bg-ink" },
  { label: "Threads", href: siteConfig.socials.threads, Icon: FaThreads, bg: "bg-ink" },
];

export default function SocialLinks() {
  return (
    <section id="connect" className="px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Connect Everywhere" title="Find me on your favorite platform" />
      </Reveal>
      <div className="max-w-3xl mx-auto grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4">
        {links.map(({ label, href, Icon, bg }, i) => (
          <Reveal key={label} delay={i * 50}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`group flex aspect-square w-full flex-col items-center justify-center gap-1.5 rounded-2xl text-white shadow-[0_8px_20px_-8px_rgba(22,19,31,0.25)] transition-transform duration-300 hover:scale-105 hover:-translate-y-1 ${bg}`}
            >
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

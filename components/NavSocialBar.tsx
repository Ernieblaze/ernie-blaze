import { FaXTwitter, FaInstagram, FaTiktok, FaYoutube, FaFacebookF, FaTelegram } from "react-icons/fa6";
import SocialIconLink from "./SocialIconLink";
import { siteConfig } from "@/lib/config";

const links = [
  { label: "X", href: siteConfig.socials.twitter, Icon: FaXTwitter },
  { label: "Instagram", href: siteConfig.socials.instagram, Icon: FaInstagram },
  { label: "TikTok", href: siteConfig.socials.tiktok, Icon: FaTiktok },
  { label: "YouTube", href: siteConfig.socials.youtubeChannel, Icon: FaYoutube },
  { label: "Facebook", href: siteConfig.socials.facebook, Icon: FaFacebookF },
  { label: "Telegram", href: siteConfig.socials.telegram, Icon: FaTelegram },
];

export default function NavSocialBar({
  className = "",
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  const itemSize = size === "lg" ? "h-11 w-11" : "h-6 w-6";
  const iconSize = size === "lg" ? "h-5 w-5" : "h-3.5 w-3.5";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <SocialIconLink
          key={label}
          href={href}
          label={label}
          Icon={Icon}
          className={`flex ${itemSize} items-center justify-center text-ink/45 transition-colors hover:text-emerald-deep`}
          iconClassName={iconSize}
        />
      ))}
    </div>
  );
}

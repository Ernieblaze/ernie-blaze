// =============================================================
// SITE CONFIG — edit everything here. No need to touch components.
// Swap placeholder links, prices, and payment details below.
// =============================================================

export const siteConfig = {
  name: "Ernie Blaze",
  tagline: "Build wealth. Build yourself.",

  // Sticky nav links — section ids on this page.
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#world" },
    { label: "Content", href: "#world" },
    { label: "Support", href: "#support" },
  ],

  // Buttons in the hero section — point these at your real funnels.
  ctas: {
    startHere: "#checklist",
    watchContent: "https://www.youtube.com/@ernieblaze",
    joinFree: "#checklist",
  },

  // WhatsApp number (digits only, e.g. "2348012345678") — used to build wa.me
  // links wherever a WhatsApp button appears. While this stays a "TODO_" value,
  // every WhatsApp button renders disabled/"coming soon" instead of linking out.
  whatsapp: "TODO_WHATSAPP_NUMBER",

  // Contact email — shown in the footer.
  email: "ernieblazze@gmail.com",

  // Hero portrait photo — used with next/image. Falls back to an "EB" placeholder if missing.
  heroImage: "/ernie.png", // TODO: replace with a real portrait photo of Ernie Blaze

  // Hero floating stat cards + social-proof row — numbers are illustrative until replaced.
  hero: {
    socialProofAvatars: [
      "/avatar-1.jpg", // TODO: replace with real follower/student avatar photos
      "/avatar-2.jpg",
      "/avatar-3.jpg",
      "/avatar-4.jpg",
    ],
    socialProofLabel: "Join 10,000+ young entrepreneurs", // TODO: update with real community size
    stats: [
      { label: "Followers", value: 120000 }, // TODO: replace with real follower count
      { label: "Students", value: 3500 }, // TODO: replace with real student count
      { label: "Countries", value: 42 }, // TODO: replace with real country count
    ],
  },

  // Social links — WhatsApp lives at the top-level `whatsapp` field above
  // (shared with the footer) so there's one source of truth for that number.
  // The Facebook icon always links to `facebook` (the main account), not the page.
  socials: {
    twitter: "https://x.com/ernieblazze",
    instagram: "https://www.instagram.com/ernieblazze",
    tiktok: "https://www.tiktok.com/@ernieblazze",
    facebook: "https://www.facebook.com/share/1HmrXLKDbL/",
    facebookPage: "https://www.facebook.com/share/17o5SvK71z/", // kept for later use, not linked yet
    telegram: "https://t.me/BlazeWealthUpdates",
    youtubeChannel: "https://www.youtube.com/@ernieblaze",
    threads: "https://www.threads.net/@ernieblaze",
  },

  // Courses section
  courses: [
    {
      title: "Entrepreneurship Foundations",
      description:
        "The exact mindset, systems, and first steps I used to go from zero to building real income online.",
      price: "$49", // TODO: replace with real price
      enrollUrl: "https://example.com/enroll/entrepreneurship-foundations", // TODO: replace with real checkout link
      thumbnail: "/course-foundations.jpg", // TODO: replace with a real course thumbnail image
    },
  ],

  // "Watch My Latest" — YouTube video IDs, shown as click-to-play cards.
  youtubeVideos: ["b0mzsVJdP7A", "mNI51kfiZW4", "25TrQ-bDdw0"],

  // Featured content/videos shown in the dark "Inside My World" band.
  // videoId pulls the real YouTube thumbnail and powers click-to-play.
  content: {
    categories: ["All", "Crypto & Forex", "Mindset", "Online Income"], // TODO: adjust categories to match real content
    videos: [
      {
        title: "How I Read Forex Charts Like a Pro",
        category: "Crypto & Forex",
        videoId: "b0mzsVJdP7A",
      },
      {
        title: "From Zero to First $1,000 Online",
        category: "Online Income",
        videoId: "mNI51kfiZW4",
      },
      {
        title: "The Mindset Shift That Changed Everything",
        category: "Mindset",
        videoId: "25TrQ-bDdw0",
      },
    ],
  },

  // Free checklist email capture — swap in a real form action when ready.
  checklist: {
    headline: "Get the Free Wealth-Building Checklist",
    description:
      "10 steps to start building income online — straight to your inbox.",
    formspreeEndpoint: "TODO_FORMSPREE_ENDPOINT", // TODO: paste your Formspree form endpoint (e.g. https://formspree.io/f/xxxxxxx)
  },

  // Support / tip me
  support: {
    description:
      "If my content has helped you, you can support the mission and help me keep creating free content for young entrepreneurs everywhere.",
    tipUrl: "https://example.com/tip", // TODO: replace with real tipping link (e.g. Buy Me a Coffee, Ko-fi)
  },

  // Payment details — USDT only, BEP20 (BSC) network.
  payment: {
    usdtAddress: "0x1853f9d44fe3d6fbad8f88c0b63cef6f8b86882e",
    usdtNetwork: "BEP20 (BSC)",
    qrImage: "/usdt-qr.jpg", // TODO: add a generated QR code image for the USDT address
    bank: {
      name: "OPay (Business)",
      account: "6115592347",
      holder: "FAVOUR GODMERCY ERNEST",
    },
  },

  // Footer
  footer: {
    disclaimer:
      "Educational purposes only. Not financial advice. Trading involves risk.",
  },
};

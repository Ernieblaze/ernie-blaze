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
    watchContent: "https://www.youtube.com/@ernieblaze", // TODO: replace with real channel
    joinFree: "#checklist",
  },

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

  // Social links bar — leave a handle as "#" to hide that icon... (not auto-hidden, just edit url)
  socials: {
    facebook: "https://facebook.com/ernieblaze",
    instagram: "https://instagram.com/ernieblaze",
    youtube: "https://youtube.com/@ernieblaze",
    tiktok: "https://tiktok.com/@ernieblaze",
    whatsapp: "https://wa.me/2340000000000", // TODO: replace with real WhatsApp number
    telegram: "https://t.me/ernieblaze",
    x: "https://x.com/ernieblaze",
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

  // Featured content/videos shown in the dark "Inside My World" band.
  content: {
    categories: ["All", "Crypto & Forex", "Mindset", "Online Income"], // TODO: adjust categories to match real content
    videos: [
      {
        title: "How I Read Forex Charts Like a Pro",
        category: "Crypto & Forex",
        thumbnail: "/video-1.jpg", // TODO: replace with real video thumbnail
        url: "https://www.youtube.com/@ernieblaze", // TODO: replace with real video link
      },
      {
        title: "From Zero to First $1,000 Online",
        category: "Online Income",
        thumbnail: "/video-2.jpg", // TODO: replace with real video thumbnail
        url: "https://www.youtube.com/@ernieblaze", // TODO: replace with real video link
      },
      {
        title: "The Mindset Shift That Changed Everything",
        category: "Mindset",
        thumbnail: "/video-3.jpg", // TODO: replace with real video thumbnail
        url: "https://www.youtube.com/@ernieblaze", // TODO: replace with real video link
      },
    ],
  },

  // Free checklist email capture — swap in a real form action when ready.
  checklist: {
    headline: "Get the Free Wealth-Building Checklist",
    description:
      "10 steps to start building income online — straight to your inbox.",
    // TODO: connect this form to Formspree, Mailchimp, or another email provider.
    formAction: "#",
  },

  // Support / tip me
  support: {
    description:
      "If my content has helped you, you can support the mission and help me keep creating free content for young entrepreneurs everywhere.",
    tipUrl: "https://example.com/tip", // TODO: replace with real tipping link (e.g. Buy Me a Coffee, Ko-fi)
  },

  // Payment details
  payment: {
    btcAddress: "bc1qxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // TODO: replace with real BTC address
    qrPlaceholder: "/btc-qr-placeholder.svg", // TODO: replace with a generated QR code image
    bank: {
      accountName: "Ernie Blaze",
      bankName: "Example Bank Nigeria",
      accountNumber: "0000000000",
      swift: "EXAMPLENGXXX",
    },
  },

  // Footer
  footer: {
    whatsapp: "https://wa.me/2340000000000", // TODO: replace with real WhatsApp number
    disclaimer:
      "Educational purposes only. Not financial advice. Trading involves risk.",
  },
};

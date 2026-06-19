// =============================================================
// SITE CONFIG — edit everything here. No need to touch components.
// Swap placeholder links, prices, and payment details below.
// =============================================================

export const siteConfig = {
  name: "Ernie Blaze",
  tagline: "Build wealth. Build yourself.",

  // Buttons in the hero section — point these at your real funnels.
  ctas: {
    startHere: "#checklist",
    watchContent: "https://www.youtube.com/@ernieblaze", // TODO: replace with real channel
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
    },
  ],

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

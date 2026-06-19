import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Mono, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ernie Blaze | Build Wealth. Build Yourself.",
  description:
    "I help young entrepreneurs master the crypto & forex markets, build real income online, and create a life they own.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${spaceMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <MotionConfig reducedMotion="user">
          <div className="relative z-10 flex flex-col flex-1">{children}</div>
        </MotionConfig>
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Logo from "./Logo";
import { siteConfig } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-4">
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-ink/10 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(22,19,31,0.15)] px-5 py-2.5"
            : "border-transparent bg-white/40 backdrop-blur-md px-6 py-3.5"
        }`}
      >
        <a href="#home">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {siteConfig.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-emerald-deep"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={siteConfig.ctas.joinFree} variant="primary" showArrow={false} className="px-5 py-2.5 text-sm">
            Join Free
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-ink"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[72px] left-4 right-4 sm:left-6 sm:right-6 rounded-2xl border border-ink/10 bg-white/95 backdrop-blur-xl p-5 shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-ink/80"
                >
                  {item.label}
                </a>
              ))}
              <Button
                href={siteConfig.ctas.joinFree}
                variant="primary"
                showArrow={false}
                className="mt-2 w-full"
              >
                Join Free
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

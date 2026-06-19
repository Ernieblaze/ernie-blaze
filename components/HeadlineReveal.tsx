"use client";

import { motion } from "framer-motion";

type Word = { text: string; emerald?: boolean };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function HeadlineReveal({ words, className = "" }: { words: Word[]; className?: string }) {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={container}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word.text}-${i}`}
          variants={wordVariant}
          className={`inline-block ${word.emerald ? "text-emerald" : ""}`}
        >
          {word.text}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.h1>
  );
}

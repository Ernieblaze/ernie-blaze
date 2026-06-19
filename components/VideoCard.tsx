"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type VideoCardProps = {
  videoId: string;
  variant?: "light" | "dark";
  bordered?: boolean;
  hoverLift?: boolean;
  className?: string;
};

export default function VideoCard({
  videoId,
  variant = "light",
  bordered = true,
  hoverLift = true,
  className = "",
}: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const border = variant === "dark" ? "border-white/10" : "border-ink/8";
  const frame = `relative aspect-video w-full overflow-hidden ${bordered ? `rounded-xl border ${border}` : ""} ${className}`;

  if (playing) {
    return (
      <div className={frame}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Play video"
      className={`group ${frame} transition-all duration-300 ${hoverLift ? "hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(16,185,129,0.3)]" : ""}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt="Video thumbnail"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors group-hover:bg-ink/30">
        <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/90 text-emerald-deep shadow-lg transition-transform group-hover:scale-110">
          <Play className="h-5 w-5 sm:h-6 sm:w-6 fill-current" />
        </span>
      </div>
    </button>
  );
}

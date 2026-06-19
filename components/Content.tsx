"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Reveal from "./Reveal";
import VideoCard from "./VideoCard";
import { siteConfig } from "@/lib/config";

export default function Content() {
  const { categories, videos } = siteConfig.content;
  const [category, setCategory] = useState(categories[0]);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return videos.filter((video) => {
      const matchesCategory = category === "All" || video.category === category;
      const matchesQuery = video.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [videos, category, query]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors min-h-11 ${
                category === cat
                  ? "bg-emerald text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-56">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search videos"
            className="w-full rounded-full border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-emerald"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {filtered.map((video, i) => (
          <Reveal key={video.title} delay={i * 80}>
            <div className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-[0_20px_40px_-16px_rgba(16,185,129,0.3)]">
              <VideoCard videoId={video.videoId} variant="dark" bordered={false} hoverLift={false} />
              <div className="p-4">
                <p className="font-mono-label text-[10px] text-emerald mb-1.5">
                  {video.category}
                </p>
                <h4 className="text-sm font-medium text-white/85 leading-snug">
                  {video.title}
                </h4>
              </div>
            </div>
          </Reveal>
        ))}
        {filtered.length === 0 && (
          <p className="text-white/40 text-sm col-span-full text-center py-8">
            No videos match your search.
          </p>
        )}
      </div>
    </div>
  );
}

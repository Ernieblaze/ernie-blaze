"use client";

import { useMemo, useState } from "react";
import { Search, PlayCircle } from "lucide-react";
import Reveal from "./Reveal";
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
              className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
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
            className="w-full rounded-full border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-emerald"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {filtered.map((video, i) => (
          <Reveal key={video.title} delay={i * 80}>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40"
            >
              <div className="flex h-36 items-center justify-center bg-white/[0.04] text-white/20">
                {/* TODO: replace with real thumbnail at video.thumbnail */}
                <PlayCircle className="h-10 w-10 transition-colors group-hover:text-emerald" strokeWidth={1.25} />
              </div>
              <div className="p-4">
                <p className="font-mono-label text-[10px] text-emerald mb-1.5">
                  {video.category}
                </p>
                <h4 className="text-sm font-medium text-white/85 leading-snug">
                  {video.title}
                </h4>
              </div>
            </a>
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

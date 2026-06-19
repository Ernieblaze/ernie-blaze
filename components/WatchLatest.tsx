import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import VideoCard from "./VideoCard";
import { siteConfig } from "@/lib/config";

export default function WatchLatest() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Watch My Latest" title="Fresh from the channel" />
      </Reveal>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.youtubeVideos.map((videoId, i) => (
          <Reveal key={videoId} delay={i * 80}>
            <VideoCard videoId={videoId} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

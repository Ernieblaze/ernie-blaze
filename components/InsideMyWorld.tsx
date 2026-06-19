import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Courses from "./Courses";
import Content from "./Content";

export default function InsideMyWorld() {
  return (
    <section id="world" className="relative bg-dark px-6 py-20 sm:py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-emerald/10 blur-[120px] pointer-events-none"
      />
      <div className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Inside My World"
            title="Courses & Content"
            description="The course that gets you started, plus the videos teaching it in real time."
            dark
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          <Courses />
          <Content />
        </div>
      </div>
    </section>
  );
}

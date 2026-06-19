import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { siteConfig } from "@/lib/config";

const includes = [
  "Mindset & money fundamentals",
  "Step-by-step launch framework",
  "Lifetime access to updates",
];

export default function Courses() {
  const course = siteConfig.courses[0];

  return (
    <section id="courses" className="px-6 py-20 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="Courses" title="Learn the system, not just the theory" />
      </Reveal>
      <Reveal className="max-w-lg mx-auto">
        <div className="rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/[0.08] to-transparent p-8 sm:p-10">
          <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-2">
            {course.title}
          </h3>
          <p className="text-white/60 leading-relaxed mb-6">
            {course.description}
          </p>
          <ul className="space-y-3 mb-8">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-white/80">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between gap-4">
            <span className="font-heading text-3xl font-semibold">
              {course.price}
            </span>
            <Button href={course.enrollUrl} variant="primary">
              Enroll
            </Button>
          </div>
        </div>
        <p className="text-center text-white/40 text-sm mt-6">
          More courses coming soon.
        </p>
      </Reveal>
    </section>
  );
}

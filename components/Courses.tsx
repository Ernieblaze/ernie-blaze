import { CheckCircle2, PlayCircle } from "lucide-react";
import Reveal from "./Reveal";
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
    <Reveal className="max-w-lg mx-auto">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
        <div className="mb-6 flex h-40 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/20">
          {/* TODO: replace with a real course thumbnail image at siteConfig.courses[0].thumbnail */}
          <PlayCircle className="h-12 w-12" strokeWidth={1.25} />
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
          {course.title}
        </h3>
        <p className="text-white/50 leading-relaxed mb-6">
          {course.description}
        </p>
        <ul className="space-y-3 mb-8">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-white/75">
              <CheckCircle2 className="h-5 w-5 text-emerald shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-4">
          <span className="font-heading text-3xl font-bold text-white">
            {course.price}
          </span>
          <Button href={course.enrollUrl} variant="primary">
            Enroll
          </Button>
        </div>
      </div>
      <p className="text-center text-white/35 text-sm mt-6">
        More courses coming soon.
      </p>
    </Reveal>
  );
}

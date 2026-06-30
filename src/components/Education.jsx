import { GraduationCap, Check, Award } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { education } from "../data/content.js";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <SectionHeading num="04">Education</SectionHeading>

      <Reveal>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 sm:p-9">
          <div className="flex items-start gap-4">
            <span className="hidden shrink-0 rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-teal-400 sm:inline-flex">
              <GraduationCap size={26} strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-slate-100">
                {education.school}
              </h3>
              <p className="mt-1 font-mono text-sm text-teal-400">
                {education.degree}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-mono text-sm text-slate-300">
              GPA: <span className="text-teal-400">{education.gpa}</span>
            </span>
            {education.honors.map((h) => (
              <span
                key={h}
                className="flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 font-mono text-xs text-teal-300"
              >
                <Award size={12} />
                {h}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Relevant coursework
            </p>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {education.coursework.map((course) => (
                <li
                  key={course}
                  className="flex items-center gap-2.5 text-sm text-slate-300"
                >
                  <Check size={15} className="shrink-0 text-teal-400" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

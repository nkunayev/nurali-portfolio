import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { skills } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <SectionHeading num="05">Skills</SectionHeading>

      <div className="grid gap-5 md:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 100}>
            <div className="h-full rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <span className="font-mono text-teal-400">{`0${i + 1}`}</span>
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-slate-800 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-teal-400/40 hover:text-teal-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

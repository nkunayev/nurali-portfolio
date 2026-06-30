import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { about } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <SectionHeading num="01">About</SectionHeading>

      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="space-y-5 text-base leading-relaxed text-slate-400">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {about.cards.map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition-colors hover:border-teal-400/40"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-teal-400">
                  {card.label}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-200">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

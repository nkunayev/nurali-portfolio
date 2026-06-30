import {
  Layers,
  Sparkles,
  Gamepad2,
  BarChart3,
  Database,
  Network,
} from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { technicalFocus } from "../data/content.js";

// Map data icon names to components so content.js stays free of imports.
const icons = { Layers, Sparkles, Gamepad2, BarChart3, Database, Network };

export default function TechnicalFocus() {
  return (
    <section id="focus" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <SectionHeading num="03">What I Build</SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {technicalFocus.map((item, i) => {
          const Icon = icons[item.icon] ?? Layers;
          return (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <div className="group h-full rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:bg-slate-900/70">
                <span className="inline-flex rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-teal-400 transition-colors group-hover:border-teal-400/40">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

import Reveal from "./Reveal.jsx";

/** Numbered section heading: "01. About" with a fading hairline rule. */
export default function SectionHeading({ num, children }) {
  return (
    <Reveal>
      <div className="mb-10 flex items-center gap-4 sm:mb-14">
        <h2 className="flex shrink-0 items-baseline gap-3 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
          <span className="font-mono text-base font-medium text-teal-400 sm:text-lg">
            {num}.
          </span>
          {children}
        </h2>
        <span className="h-px w-full max-w-xs bg-gradient-to-r from-slate-700 to-transparent" />
      </div>
    </Reveal>
  );
}

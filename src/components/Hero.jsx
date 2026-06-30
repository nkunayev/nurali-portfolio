import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";
import { profile } from "../data/content.js";

const PHRASES = [
  "software that ships.",
  "AI-powered tools.",
  "games people want to play.",
  "data into insight.",
  "ideas into products.",
];

function useTypewriter(phrases, { typeSpeed = 65, deleteSpeed = 38, pauseMs = 2000 } = {}) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    let delay;

    if (!deleting) {
      if (displayed.length < current.length) {
        delay = typeSpeed;
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), delay);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), pauseMs);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        delay = deleteSpeed;
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), delay);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }
    }
  }, [displayed, deleting, index, phrases, typeSpeed, deleteSpeed, pauseMs]);

  return displayed;
}

function Stagger({ children, step }) {
  return (
    <div
      className="animate-fade-up opacity-0"
      style={{ animationDelay: `${step * 120}ms` }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  const buttons = [
    { label: "Resume", href: profile.resumeUrl, icon: FileText, external: true },
    { label: "GitHub", href: profile.github, icon: Github, external: true },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin, external: true },
    { label: "Contact", href: "#contact", icon: Mail, external: false },
  ];

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24 lg:px-10"
    >
      <Stagger step={0}>
        <p className="mb-5 font-mono text-sm text-teal-400 sm:text-base">
          Hi, my name is
        </p>
      </Stagger>

      <Stagger step={1}>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
          {profile.name}.
        </h1>
      </Stagger>

      <Stagger step={2}>
        <h2 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight text-slate-500 sm:text-4xl lg:text-5xl">
          I build{" "}
          <span className="text-slate-200">{typed}</span>
          <span className="inline-block w-[3px] translate-y-[2px] animate-blink bg-teal-400 align-middle sm:h-9 h-6 lg:h-11 ml-1" />
        </h2>
      </Stagger>

      <Stagger step={3}>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {profile.tagline}
        </p>
      </Stagger>

      <Stagger step={4}>
        <div className="mt-10 flex flex-wrap gap-3">
          {buttons.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/40 px-5 py-3 text-sm font-medium text-slate-200 transition-all hover:border-teal-400/70 hover:bg-teal-400/10 hover:text-teal-200"
            >
              <Icon
                size={16}
                className="text-teal-400 transition-transform group-hover:scale-110"
              />
              {label}
            </a>
          ))}
        </div>
      </Stagger>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-600 transition-colors hover:text-teal-300 sm:block"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}

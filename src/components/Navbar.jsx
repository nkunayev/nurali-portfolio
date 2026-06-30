import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { sections, profile } from "../data/content.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="font-mono text-lg font-semibold text-teal-400 transition-colors hover:text-teal-300"
          aria-label="Back to top"
        >
          NK<span className="text-slate-100">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`group flex items-center gap-1.5 text-sm transition-colors ${
                  active === s.id
                    ? "text-teal-300"
                    : "text-slate-400 hover:text-teal-300"
                }`}
              >
                <span className="font-mono text-xs text-teal-400">{s.num}.</span>
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-teal-400/60 px-4 py-2 font-mono text-xs text-teal-300 transition-colors hover:bg-teal-400/10"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-slate-300 transition-colors hover:text-teal-300 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-800/80 bg-slate-950/95 px-6 py-4 backdrop-blur-md md:hidden">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-2 py-3 text-sm text-slate-300 transition-colors hover:bg-slate-900 hover:text-teal-300"
              >
                <span className="font-mono text-xs text-teal-400">{s.num}.</span>
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md border border-teal-400/60 px-3 py-3 text-center font-mono text-xs text-teal-300"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

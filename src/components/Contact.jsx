import { Github, Linkedin, Mail, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/content.js";

export default function Contact() {
  const links = [
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail, external: false },
    { label: "GitHub", href: profile.github, icon: Github, external: true },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin, external: true },
    { label: "Resume", href: profile.resumeUrl, icon: FileText, external: true },
  ];

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10">
      <SectionHeading num="06">Let&apos;s Connect</SectionHeading>

      <Reveal>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-400">
          I&apos;m open to software engineering, full-stack, AI, data science, and
          game development opportunities. If you have a role, a project, or just
          want to talk shop, my inbox is open.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {links.map(({ label, href, icon: Icon, external }) => (
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
      </Reveal>
    </section>
  );
}

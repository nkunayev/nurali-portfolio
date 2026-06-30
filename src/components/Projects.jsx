import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import { projects } from "../data/content.js";

function ProjectCard({ project }) {
  return (
    <div className="group relative flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400/50 hover:bg-slate-900/70 hover:shadow-2xl hover:shadow-teal-500/5">
      <div className="mb-5 flex items-start justify-between">
        <span className="text-teal-400">
          <FolderGit2 size={30} strokeWidth={1.5} />
        </span>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="text-slate-400 transition-colors hover:text-teal-300"
            >
              <Github size={19} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-slate-400 transition-colors hover:text-teal-300"
            >
              <ExternalLink size={19} />
            </a>
          )}
        </div>
      </div>

      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-teal-300">
          {project.title}
        </h3>
        <span className="shrink-0 font-mono text-xs text-slate-500">
          {project.date}
        </span>
      </div>

      <p className="font-mono text-xs uppercase tracking-wide text-teal-400/80">
        {project.subtitle}
      </p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-slate-800 bg-slate-950/60 px-2.5 py-1 font-mono text-[11px] text-slate-400"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <SectionHeading num="02">Featured Projects</SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 3) * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content.js";

/**
 * Fixed vertical rails on large screens: social links anchored bottom-left,
 * email anchored bottom-right. Both sit above a thin line to the floor.
 * Hidden on small screens (links live in the contact section instead).
 */
export default function SideRails() {
  return (
    <>
      {/* Left rail: social icons */}
      <div className="fixed bottom-0 left-6 z-40 hidden flex-col items-center gap-5 lg:flex">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-slate-400 transition-all hover:-translate-y-1 hover:text-teal-300"
        >
          <Github size={20} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-slate-400 transition-all hover:-translate-y-1 hover:text-teal-300"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="text-slate-400 transition-all hover:-translate-y-1 hover:text-teal-300"
        >
          <Mail size={20} />
        </a>
        <span className="mt-2 h-24 w-px bg-slate-700" />
      </div>

      {/* Right rail: vertical email */}
      <div className="fixed bottom-0 right-6 z-40 hidden flex-col items-center gap-6 lg:flex">
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs tracking-widest text-slate-400 transition-all hover:-translate-y-1 hover:text-teal-300"
          style={{ writingMode: "vertical-rl" }}
        >
          {profile.email}
        </a>
        <span className="h-24 w-px bg-slate-700" />
      </div>
    </>
  );
}

import { profile } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 py-8 text-center">
      <p className="font-mono text-xs text-slate-500">
        Designed &amp; built by {profile.name}
      </p>
      <p className="mt-1 font-mono text-xs text-slate-600">
        &copy; {new Date().getFullYear()} &middot; Built with React, Vite &amp; Tailwind CSS
      </p>
    </footer>
  );
}

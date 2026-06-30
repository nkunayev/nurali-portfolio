import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you deploy to GitHub Pages at https://<user>.github.io/<repo>/,
  // set base to "/<repo>/" (e.g. "/portfolio/").
  // For a user/org page (https://<user>.github.io/) or Vercel/Netlify, leave it as "/".
  base: "/nurali-portfolio/",
});

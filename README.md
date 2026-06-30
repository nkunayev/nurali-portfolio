# Nurali Kunayev — Portfolio

A clean, dark, single-page developer portfolio built with **React + Vite** and
**Tailwind CSS**. Numbered sections, smooth scrolling, scroll-reveal animations,
a sticky navbar with active-section tracking, and fixed social/email side rails.

## Quick start

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build locally
```

## Editing content

**All copy, projects, skills, education, and links live in one file:**

```
src/data/content.js
```

Update that file and everything on the page updates with it. Search the file
for `TODO` to find placeholder links you should replace:

- `profile.email` — your real email address
- `profile.linkedin` — your LinkedIn URL
- `profile.resumeUrl` — points to `/resume.pdf` (see below)
- A few project `github` URLs are best guesses — confirm or replace them

### Add your resume

Drop your resume into the `public/` folder named exactly `resume.pdf`. The
Resume buttons link to `/resume.pdf`, so it will be served automatically. You
can delete the placeholder `public/resume.txt`.

### Change the accent color

The site uses Tailwind's `teal` scale as the accent. To re-theme, find/replace
`teal-400` / `teal-300` (and the matching `teal-...` utilities) in `src/`, or
adjust the `accent` tokens in `tailwind.config.js`.

## Project structure

```
src/
├── data/content.js        # ← edit your content here
├── components/
│   ├── Navbar.jsx          # sticky nav + active section + mobile menu
│   ├── SideRails.jsx       # fixed social/email rails (desktop)
│   ├── Hero.jsx            # intro + CTA buttons
│   ├── About.jsx
│   ├── Projects.jsx        # project cards
│   ├── TechnicalFocus.jsx  # "What I Build"
│   ├── Education.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── SectionHeading.jsx  # reusable "01. Title" heading
│   └── Reveal.jsx          # scroll-reveal wrapper
├── App.jsx
├── main.jsx
└── index.css
```

## Deploy

### Vercel (easiest)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). Vercel auto-detects
   Vite — no configuration needed. Leave `base` as `"/"` in `vite.config.js`.

### GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`.

- **User/org page** (`https://<you>.github.io`): keep `base: "/"` in
  `vite.config.js`.
- **Project page** (`https://<you>.github.io/<repo>/`): set
  `base: "/<repo>/"` in `vite.config.js` (e.g. `base: "/portfolio/"`).

Then push to `main` and enable Pages under **Settings → Pages → Source:
GitHub Actions**. The site builds and deploys automatically.

Prefer the manual route? `npm run deploy` uses the bundled `gh-pages` package
to publish `/dist` to a `gh-pages` branch.

## License

Personal project — use and adapt freely.

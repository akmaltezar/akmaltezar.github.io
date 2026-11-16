# Akmal Tezar — portfolio

A single-page portfolio built as a horizontal, scroll-driven terminal: six
full-screen panels, mono accents, terminal-green highlights, and slow-drifting
geometric shapes in the background.

Live at **https://akmaltezar.github.io**

## Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Framer Motion (`useScroll`, `useTransform`, `useSpring`)
- Geist Sans + Geist Mono

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To check the production build exactly as GitHub Pages will serve it:

```bash
npm run build
npx serve out
```

## Deploying to GitHub Pages

1. Create a **public** repository named `akmaltezar.github.io` on GitHub.
2. Push this project to the `main` branch.
3. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
4. Every push to `main` runs `.github/workflows/deploy.yml`, builds the static
   site into `out/`, and deploys it.

Because this is a user site, there is no `basePath` in `next.config.mjs`. If you
ever move the site into a project repo (`akmaltezar.github.io/portfolio`), add
`basePath: "/portfolio"` and `assetPrefix: "/portfolio/"` there.

## Editing content

Almost all copy lives in **`src/lib/content.ts`**:

- `site` — name, role, email, social URLs, location
- `intro` — hero pitch
- `experience` — timeline entries (jobs and education)
- `skills` — the `package.json` style groups
- `experience` — jobs and education only; project detail lives below
- `works` — featured project cards
- `projects` — the full apps/web project catalog

Design tokens (colors, borders, accent) are CSS variables at the top of
**`src/app/globals.css`**.

## Known TODOs

- **Resume link** — the contact panel shows `resume.pdf [ todo ]`. Add the URL to
  `site` in `src/lib/content.ts` and turn the row into an `<a>` when it is ready.
- **Custom domain** — if you add one, drop a `CNAME` file in `public/` and
  update `site.url` in `src/lib/content.ts`.

The social preview is `public/og.png` (1200×630) and is already wired into
`src/app/layout.tsx`.

## Structure

```
src/
  app/
    layout.tsx        metadata, fonts, pre-paint theme script
    page.tsx          page shell + Person JSON-LD
    globals.css       design tokens, layout, motion styles
  components/
    scroll-journey.tsx  sticky horizontal scroll engine + progress
    shapes.tsx          drifting/parallax background glyphs
    site-header.tsx     fixed brand + theme toggle
    theme-toggle.tsx    light/dark toggle (localStorage)
    panels/             the six panels
  lib/
    content.ts        all portfolio copy
```

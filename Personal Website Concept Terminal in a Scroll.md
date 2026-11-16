# Personal Website Concept: Terminal in a Scroll

Prepared for Ekmel

## Recommended approach

**Next.js + Framer Motion** (confidence: high)

You already work in React and Next.js, and Framer Motion's `useScroll` + `useTransform` covers both the horizontal carousel and the parallax shapes with one scroll value. GSAP would add a second animation system for no gain here. Pure CSS scroll-driven animations would be the lightest option, but support is still uneven, so skip it for a portfolio.

## Concept

A minimal, developer-flavored site laid out as a horizontal carousel. Scrolling down moves the panels from right to left. Mono typography, terminal-style content, subtle parallax shapes in the background, and a dark/light toggle.

## Structure

Five panels, each 100vw:

| # | Panel | Content | Terminal flavor |
| --- | --- | --- | --- |
| 1 | Intro | Name, role, one-line pitch | `~/ekmel $ whoami` with a blinking cursor |
| 2 | Experience | 4 years as a timeline, with the CIMB Niaga mobile banking work as the highlight | `git log`-style entries: date, company, role |
| 3 | Skills | JS/TS, React, React Native, Next.js | Grouped like a `package.json` dependencies block |
| 4 | Works | 3-4 project cards | `ls projects/`; hover reveals a short description and stack |
| 5 | Contact | Email, GitHub, LinkedIn | `$ contact --open` |

## Scroll mechanic

Confidence: high

- The wrapper is tall (about `500vh`), with a `sticky` full-screen viewport inside it.
- Inside is a flex track `500vw` wide.
- `scrollYProgress` maps to `translateX` from `0%` to `-80%`, so scrolling down moves the panels right to left.
- A thin progress line at the bottom, plus `01/05` in mono, shows where you are.
- Wrap the track in `useSpring` for smooth motion.

## Parallax shapes

Confidence: high

- 6-10 minimal outlined shapes (`{ }`, `</>`, `[]`, circles, plus signs, thin squares) in the background.
- Each one gets its own `useTransform` multiplier (for example `-0.3x`, `-0.6x`, `-1.2x` of the track movement), so they drift at different speeds and create depth.
- Keep them low opacity (about 8-15%) and stroke-only so they never fight the content.
- Respect `prefers-reduced-motion` by freezing them.

## Dark/light mode

Confidence: high

- CSS variables: `--bg`, `--fg`, `--muted`, `--accent`, `--border`.
- Dark is near-black with a single green or amber accent, like a classic terminal. Light is warm off-white with a dark ink accent.
- A `[ dark | light ]` toggle in the top-right corner, defaulting to `prefers-color-scheme` and saved in localStorage.
- Add a tiny inline script in `<head>` to set the theme before paint, which avoids a flash on load.

## Typography and spacing

- One mono font for everything (JetBrains Mono or Geist Mono), with two or three sizes only.
- Wide margins, 1px borders, no shadows, no gradients.

## Mobile fallback

Confidence: medium

Horizontal scroll-jacking feels bad on small screens, so below roughly 768px switch to a normal vertical layout and keep the theme toggle and shapes.

## Build order

1. Theme variables, toggle and the mono typography.
2. Sticky scroll carousel with 5 empty panels.
3. Fill in content, starting with Experience and Works.
4. Parallax shapes.
5. Mobile fallback and reduced-motion handling.

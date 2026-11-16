import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a
        className="brand mono"
        href="#"
        aria-label="Akmal Tezar — back to the first panel"
      >
        <span className="brand-dot" aria-hidden="true" />
        ~/akmal
      </a>
      <ThemeToggle />
    </header>
  );
}

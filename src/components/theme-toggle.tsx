"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable in private mode — the theme still works.
    }
  }

  return (
    <button
      className="theme-toggle mono"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      <span className="theme-light">[ dark ]</span>
      <span className="theme-dark">[ light ]</span>
    </button>
  );
}

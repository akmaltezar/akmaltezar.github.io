import { Cursor } from "@/components/cursor";
import { intro, site } from "@/lib/content";

export function IntroPanel({
  id,
  onNavigate,
}: {
  id: string;
  onNavigate: (target: "works" | "contact") => void;
}) {
  return (
    <section id={id} className="panel panel-intro" aria-labelledby="intro-title">
      <div className="panel-head">
        <p className="prompt mono">
          <span className="prompt-path">~/akmal</span> ${" "}
          <span>{intro.prompt}</span>
          <Cursor />
        </p>
      </div>

      <div className="intro-main">
        <h1 id="intro-title" className="intro-name">
          Akmal<span>Tezar</span>
        </h1>
        <p className="intro-role mono">{site.role}</p>
        <p className="intro-pitch">{intro.pitch}</p>
        <p className="intro-sub">{intro.pitchSecondary}</p>

        <div className="intro-actions">
          <button
            className="btn btn--primary"
            type="button"
            onClick={() => onNavigate("works")}
          >
            ./works{" "}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </button>
          <button className="btn" type="button" onClick={() => onNavigate("contact")}>
            ./contact
          </button>
        </div>

        <p className="scroll-hint mono">scroll ↓</p>
      </div>

      <div className="intro-meta mono">
        <span>
          <span className="status-dot" aria-hidden="true" />
          {intro.currently}
        </span>
        <span>
          {site.location} · {site.timezone}
        </span>
      </div>
    </section>
  );
}

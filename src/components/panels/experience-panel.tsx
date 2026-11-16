import { experience } from "@/lib/content";

export function ExperiencePanel({ id }: { id: string }) {
  const educationCount = experience.filter((item) => item.education).length;
  const roleCount = experience.length - educationCount;

  return (
    <section
      id={id}
      className="panel panel-experience"
      aria-labelledby="experience-title"
    >
      <div className="panel-head">
        <p className="prompt mono">
          <span className="prompt-path">~/akmal</span> $ git log --oneline
        </p>
        <div className="panel-head-row">
          <h2 id="experience-title" className="panel-title">
            Experience
          </h2>
          <a className="panel-link mono" href="#projects">
            see projects <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="panel-kicker mono">
          {String(roleCount).padStart(2, "0")} roles
          {educationCount > 0
            ? ` · ${String(educationCount).padStart(2, "0")} degree${
                educationCount === 1 ? "" : "s"
              }`
            : ""}
        </p>
      </div>

      <ol className="experience-list">
        {experience.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className={`exp-item${item.current ? " is-current" : ""}`}
          >
            <div className="exp-date mono">{item.period}</div>

            <div className="exp-main">
              <h3 className="exp-role">
                {item.role}
                {item.education && (
                  <span className="exp-badge mono">education</span>
                )}
              </h3>
              <p className="exp-company mono">
                {item.company} · {item.place}
              </p>
              <p className="exp-summary">{item.summary}</p>
            </div>

            {item.stack.length > 0 && (
              <ul className="exp-stack" aria-label={`${item.company} stack`}>
                {item.stack.map((tech) => (
                  <li className="tag" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

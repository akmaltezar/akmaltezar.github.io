import { works } from "@/lib/content";

export function WorksPanel({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="panel panel-works"
      aria-labelledby="works-title"
    >
      <div className="panel-head">
        <p className="prompt mono">
          <span className="prompt-path">~/akmal</span> $ ls projects/ --featured
        </p>
        <div className="panel-head-row">
          <h2 id="works-title" className="panel-title">
            Works
          </h2>
          <a className="panel-link mono" href="#projects">
            all 09 projects <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="panel-kicker mono">featured · 04 of 09</p>
      </div>

      <div className="works-grid">
        {works.map((work) => (
          <article
            key={work.index}
            className="work-card"
            tabIndex={0}
            aria-labelledby={`work-${work.index}`}
          >
            <div className="work-top">
              <span className="work-index mono">{work.index}</span>
              <span className={`work-status mono is-${work.status}`}>
                {work.status}
              </span>
            </div>

            <div>
              <h3 className="work-name" id={`work-${work.index}`}>
                {work.name}
              </h3>
              <p className="work-client mono">
                {work.client} · {work.period}
              </p>
              <p className="work-summary">{work.summary}</p>
            </div>

            <div className="work-reveal">
              <ul className="work-stack" aria-label={`${work.name} stack`}>
                {work.stack.map((tech) => (
                  <li className="tag" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
              {work.href && (
                <a
                  className="work-link mono"
                  href={work.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  visit site <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

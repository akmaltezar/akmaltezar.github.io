"use client";

import { useState } from "react";
import { projects } from "@/lib/content";

const PAGE_SIZE = 3;

export function ProjectsPanel({ id }: { id: string }) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(projects.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visible = projects.slice(start, start + PAGE_SIZE);

  function goToPage(next: number) {
    setPage(Math.min(Math.max(next, 0), pageCount - 1));
  }

  return (
    <section
      id={id}
      className="panel panel-projects"
      aria-labelledby="projects-title"
    >
      <div className="panel-head">
        <p className="prompt mono">
          <span className="prompt-path">~/akmal</span> $ ls -la projects/
        </p>
        <div className="panel-head-row">
          <h2 id="projects-title" className="panel-title">
            Projects
          </h2>
          <a className="panel-link mono" href="#works">
            featured <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="panel-kicker mono">09 projects · 03 per page</p>
      </div>

      <div className="project-page" key={page} aria-live="polite">
        <ul className="project-list">
          {visible.map((project) => (
            <li className="project-row" key={project.name}>
              <div className="project-row-top">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-row-meta mono">
                  <span className="project-kind">{project.category}</span>
                  <span
                    className={`project-period${
                      project.status !== "shipped" ? " is-live" : ""
                    }`}
                  >
                    {project.period}
                  </span>
                </div>
              </div>

              <p className="project-meta mono">{project.client}</p>
              <p className="project-summary">{project.summary}</p>

              <div className="project-row-footer">
                <ul
                  className="project-stack"
                  aria-label={`${project.name} stack`}
                >
                  {project.stack.map((tech) => (
                    <li className="tag" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.href && (
                  <a
                    className="project-link mono"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    visit site <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-pagination mono">
        <span className="project-pagination-info">
          page {String(page + 1).padStart(2, "0")} /{" "}
          {String(pageCount).padStart(2, "0")}
        </span>

        <div className="project-pagination-controls">
          <button
            className="project-page-btn"
            type="button"
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            aria-label="Previous projects page"
          >
            ← prev
          </button>

          <div className="project-page-numbers">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                className={`project-page-number${
                  index === page ? " is-active" : ""
                }`}
                type="button"
                onClick={() => goToPage(index)}
                aria-label={`Go to projects page ${index + 1}`}
                aria-current={index === page ? "page" : undefined}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          <button
            className="project-page-btn"
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === pageCount - 1}
            aria-label="Next projects page"
          >
            next →
          </button>
        </div>
      </div>
    </section>
  );
}

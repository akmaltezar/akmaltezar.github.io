import { site } from "@/lib/content";

export function ContactPanel({ id }: { id: string }) {
  const year = new Date().getFullYear();
  const resume_url = "https://drive.google.com/file/d/14ziw4cNWe4uFUIdz6sBB4a4P_vr-zWYr/view?usp=sharing"

  return (
    <section
      id={id}
      className="panel panel-contact"
      aria-labelledby="contact-title"
    >
      <div className="panel-head">
        <p className="prompt mono">
          <span className="prompt-path">~/akmal</span> $ contact --open
        </p>
        <h2 id="contact-title" className="panel-title">
          Contact
        </h2>
      </div>

      <div className="contact-body">
        <div>
          <p className="contact-lead">Let&apos;s build something.</p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
            <span aria-hidden="true">↗</span>
          </a>
          <p className="contact-note">
            Have a project, a role, or a half-formed idea? Email is the fastest
            way to reach me.
          </p>
        </div>

        <div className="contact-links">
          <div className="contact-row">
            <span className="label">github</span>
            <a href={site.github} target="_blank" rel="noreferrer">
              github.com/akmaltezar <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-row">
            <span className="label">linkedin</span>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/akmaltezar <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-row">
            <span className="label">location</span>
            <span>
              {site.location} · {site.timezone}
            </span>
          </div>
          <div className="contact-row">
            <span className="label">resume</span>
            <a href={resume_url} target="_blank" rel="noreferrer">
              resume.pdf <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-foot mono">
        <span>© {year} {site.name}</span>
        <span>Build with React · Made with Love</span>
      </div>
    </section>
  );
}

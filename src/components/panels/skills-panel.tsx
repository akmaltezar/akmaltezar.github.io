import { Fragment } from "react";
import { skills } from "@/lib/content";

export function SkillsPanel({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="panel panel-skills"
      aria-labelledby="skills-title"
    >
      <div className="panel-head">
        <p className="prompt mono">
          <span className="prompt-path">~/akmal</span> $ cat package.json
        </p>
        <h2 id="skills-title" className="panel-title">
          Skills
        </h2>
        <p className="panel-kicker mono">dependencies I reach for</p>
      </div>

      <div className="skills-body">
        <div className="code-block" role="group" aria-label="Skill groups">
          <div className="code-line">
            <span className="line-no" aria-hidden="true">
              1
            </span>
            <span className="json-punct">{"{"}</span>
          </div>

          {skills.map((group, groupIndex) => (
            <div className="code-line" key={group.group}>
              <span className="line-no" aria-hidden="true">
                {groupIndex + 2}
              </span>
              <span>
                <span className="json-key">&quot;{group.group}&quot;</span>
                <span className="json-punct">: [</span>
                {group.items.map((item, itemIndex) => (
                  <Fragment key={item}>
                    <span className="json-str">&quot;{item}&quot;</span>
                    {itemIndex < group.items.length - 1 && (
                      <span className="json-punct">, </span>
                    )}
                  </Fragment>
                ))}
                <span className="json-punct">]</span>
                {groupIndex < skills.length - 1 && (
                  <span className="json-punct">,</span>
                )}
              </span>
            </div>
          ))}

          <div className="code-line">
            <span className="line-no" aria-hidden="true">
              {skills.length + 2}
            </span>
            <span className="json-punct">{"}"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

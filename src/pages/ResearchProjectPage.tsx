import { ArrowUpRight } from "lucide-react";

import { DetailNavigation } from "@/src/components/portfolio/DetailNavigation";
import type { researchProjects } from "@/src/content/portfolio";

type ResearchProject = (typeof researchProjects)[number];

type ResearchProjectPageProps = {
  project: ResearchProject;
  onBack: () => void;
};

export function ResearchProjectPage({ project, onBack }: ResearchProjectPageProps) {
  return (
    <main className="detail-page research-project-page">
      <DetailNavigation backLabel="Research" onBack={onBack} ariaLabel="Portfolio">
        <a href="/#about">About</a>
        <a href="/#work">Work</a>
        <a href="/#daily-digest">Projects</a>
        <a href="/#contact">Contact</a>
      </DetailNavigation>

      <article>
        <header className="detail-hero research-project-hero">
          <p className="section-label">{project.context}</p>
          <h1>{project.title}</h1>
          <p className="detail-dek">{project.summary}</p>
          <dl className="detail-meta">
            <div>
              <dt>Area</dt>
              <dd>{project.area}</dd>
            </div>
            <div>
              <dt>Mentor{project.mentor.includes("·") ? "s" : ""}</dt>
              <dd>{project.mentor}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>{project.period}</dd>
            </div>
          </dl>
        </header>

        <section className="detail-section split-detail">
          <div>
            <p className="section-label">Research question</p>
            <h2>{project.question}</h2>
          </div>
          <div className="prose">
            <p>{project.summary}</p>
            <p>
              This page stays deliberately narrow where the current public record does not
              establish methods, findings, or individual ownership in enough detail.
            </p>
          </div>
        </section>

        {project.methods.length > 0 && (
          <section className="detail-section two-up-detail">
            <div>
              <p className="section-label">Confirmed methods</p>
              <h2>{project.methods.join(" · ")}</h2>
            </div>
            <div>
              <p className="section-label">Confirmed tools</p>
              <h2>{project.tools.length > 0 ? project.tools.join(" · ") : "Not yet documented"}</h2>
            </div>
          </section>
        )}

        <section className="detail-section two-up-detail">
          <div className="evidence-boundary">
            <p className="section-label">Evidence boundary</p>
            <h2>What this public note does not claim</h2>
            <ul>
              {project.evidenceBoundary.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="source-panel">
            <p className="section-label">Public source</p>
            <h2>Verified research record</h2>
            <p>
              The title, topic, and mentor attribution above are grounded in the linked public
              record.
            </p>
            <a href={project.source} target="_blank" rel="noreferrer">
              Open source <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}

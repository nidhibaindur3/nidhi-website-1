import { ArrowRight, ArrowUpRight } from "lucide-react";

import { DetailNavigation } from "@/src/components/portfolio/DetailNavigation";
import { researchProjects } from "@/src/content/portfolio";

type ResearchDeepDivePageProps = {
  onBack: () => void;
};

export function ResearchDeepDivePage({ onBack }: ResearchDeepDivePageProps) {
  return (
    <main className="detail-page research-overview-page">
      <DetailNavigation backLabel="Portfolio" onBack={onBack} ariaLabel="Portfolio">
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </DetailNavigation>

      <article>
        <header className="detail-hero research-overview-hero">
          <p className="section-label">Research</p>
          <h1>Four mathematical research projects.</h1>
          <p className="detail-dek">
            Work across climate networks, mathematical biology, financial mathematics, and
            mathematics education.
          </p>
        </header>

        <div className="research-overview-list">
          {researchProjects.map((project) => (
            <article key={project.slug}>
              <div className="research-overview-title">
                <span>{project.context}</span>
                <h2>{project.title}</h2>
              </div>
              <div>
                <p>{project.summary}</p>
                <small>{project.area}</small>
              </div>
              <div className="research-overview-links">
                <a href={`/research/${project.slug}`}>
                  Read more <ArrowRight aria-hidden="true" />
                </a>
                <a href={project.source} target="_blank" rel="noreferrer">
                  Source <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </article>
    </main>
  );
}

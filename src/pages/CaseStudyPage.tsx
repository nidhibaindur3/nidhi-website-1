import { ArrowUpRight, Code, Mail } from "lucide-react";

import { DetailNavigation } from "@/src/components/portfolio/DetailNavigation";
import type { CaseStudy } from "@/src/content/portfolio";
import { links } from "@/src/content/portfolio";

type CaseStudyPageProps = {
  study: CaseStudy;
  onBack: () => void;
};

export function CaseStudyPage({ study, onBack }: CaseStudyPageProps) {
  return (
    <main className="detail-page project-detail-page">
      <DetailNavigation backLabel="Work" onBack={onBack} ariaLabel={`${study.title} links`}>
        {study.repository && (
          <a href={study.repository} target="_blank" rel="noreferrer">
            <Code aria-hidden="true" /> Source
          </a>
        )}
        {study.demo && (
          <a href={study.demo} target="_blank" rel="noreferrer">
            Live product <ArrowUpRight aria-hidden="true" />
          </a>
        )}
      </DetailNavigation>

      <article>
        <header className="detail-hero project-detail-hero">
          <p className="section-label">{study.eyebrow}</p>
          <h1>{study.title}</h1>
          <p className="detail-dek">{study.dek}</p>
          <dl className="detail-meta">
            <div>
              <dt>Role</dt>
              <dd>{study.role}</dd>
            </div>
            <div>
              <dt>System</dt>
              <dd>{study.stack.join(" · ")}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{study.demo ? "Live prototype" : "Working prototype"}</dd>
            </div>
          </dl>
        </header>

        <figure className="project-detail-image">
          <img src={study.image} alt={study.imageAlt} />
          <figcaption>Current product interface.</figcaption>
        </figure>

        <div className="engineering-walkthrough">
          {study.sections.map((section) => (
            <section key={section.label}>
              <p className="section-label">{section.label}</p>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>

        <section className="detail-section build-record">
          <div>
            <p className="section-label">Implemented now</p>
            <ul>
              {study.shipped.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-label">Deliberately next</p>
            <ul>
              {study.next.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="detail-footer">
          <div>
            <p className="section-label">Open to opportunities</p>
            <h2>Building an intelligent product or reliable platform?</h2>
          </div>
          <a href={links.email}>
            <Mail aria-hidden="true" /> Email Nidhi
          </a>
        </footer>
      </article>
    </main>
  );
}

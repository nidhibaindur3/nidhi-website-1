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
      <DetailNavigation backLabel="Projects" onBack={onBack} ariaLabel={`${study.title} links`}>
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
              <dd>{study.status}</dd>
            </div>
          </dl>
          <div className="mobile-project-actions" aria-label={`${study.title} project links`}>
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
          </div>
        </header>

        <section className="detail-section split-detail project-problem">
          <div>
            <p className="section-label">Engineering problem</p>
            <h2>{study.sections[0].title}</h2>
          </div>
          <div className="prose">
            <p>{study.summary}</p>
            <p>{study.sections[0].body}</p>
          </div>
        </section>

        <figure className="project-detail-image">
          <div className="project-detail-media">
            <img src={study.image} alt={study.imageAlt} />
          </div>
          <figcaption>Current product interface.</figcaption>
        </figure>

        <section className="engineering-walkthrough" aria-labelledby="decision-record-title">
          <div className="decision-record-intro">
            <p className="section-label">Decision record</p>
            <h2 id="decision-record-title">How the system holds together</h2>
            <p>
              Follow the architecture, ownership boundary, and reliability choices behind the
              current product.
            </p>
            <nav className="decision-index" aria-label={`${study.title} engineering decisions`}>
              {study.sections.slice(1).map((section, index) => (
                <a href={`#${study.slug}-decision-${index + 1}`} key={section.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="decision-list">
            {study.sections.slice(1).map((section, index) => (
              <article id={`${study.slug}-decision-${index + 1}`} key={section.label}>
                <div className="walkthrough-marker" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="section-label">{section.label}</p>
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-section build-record">
          <div>
            <p className="section-label">Shipped now</p>
            <h2>What the current system does</h2>
            <ul>
              {study.shipped.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-label">Next engineering work</p>
            <h2>Known production gaps</h2>
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

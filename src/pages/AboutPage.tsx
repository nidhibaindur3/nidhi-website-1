import { ArrowRight, Download, Mail } from "lucide-react";

import { DetailNavigation } from "@/src/components/portfolio/DetailNavigation";
import { links } from "@/src/content/portfolio";

type AboutPageProps = {
  onBack: () => void;
};

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <main className="detail-page about-detail-page">
      <DetailNavigation backLabel="Portfolio" onBack={onBack} ariaLabel="Portfolio">
        <a href="/#work">Work</a>
        <a href="/#research-enso">Research</a>
        <a href="/#contact">Contact</a>
      </DetailNavigation>
      <article>
        <header className="detail-hero about-detail-hero">
          <p className="section-label">About</p>
          <h1>Hi, I’m Nidhi.</h1>
          <p className="detail-dek">
            A software engineer with a background in computational mathematics and a habit of
            making complex reasoning easier to follow.
          </p>
        </header>

        <section className="detail-section split-detail">
          <div>
            <p className="section-label">Background</p>
            <h2>Mathematics, software, and clear communication.</h2>
          </div>
          <div className="prose">
            <p>
              I studied Computational Mathematics at Rochester Institute of Technology, with a
              Computer Science minor and a Creative Writing immersion. That combination still
              shapes how I approach engineering: understand the structure of a problem, build the
              system carefully, and explain the decisions clearly.
            </p>
            <p>
              Today I’m a Software Engineer at Ecolab, working across cloud services, data
              pipelines, APIs, mobile software, and enterprise printing. Outside work, I build AI
              applications designed around evidence, validation, and understandable failure
              boundaries.
            </p>
          </div>
        </section>

        <section className="detail-section about-record">
          <div>
            <span>Current role</span>
            <strong>Software Engineer, Ecolab</strong>
            <p>July 2024—present</p>
          </div>
          <div>
            <span>Degree</span>
            <strong>B.S. Computational Mathematics, Cum Laude</strong>
            <p>Rochester Institute of Technology, 2024</p>
          </div>
          <div>
            <span>Additional study</span>
            <strong>Computer Science minor</strong>
            <p>Creative Writing immersion</p>
          </div>
          <div>
            <span>Location</span>
            <strong>Dallas, Texas</strong>
            <p>Open to GenAI and software engineering roles</p>
          </div>
        </section>

        <section className="detail-section next-page-link">
          <div>
            <p className="section-label">Next</p>
            <h2>How I work</h2>
            <p>
              Three engineering principles, grounded in the systems already shown in this
              portfolio.
            </p>
          </div>
          <a href="/about/how-i-work">
            Engineering principles <ArrowRight aria-hidden="true" />
          </a>
        </section>

        <footer className="detail-footer about-footer">
          <a href={links.resume} target="_blank" rel="noreferrer">
            <Download aria-hidden="true" /> Download résumé
          </a>
          <a href={links.email}>
            <Mail aria-hidden="true" /> Email Nidhi
          </a>
        </footer>
      </article>
    </main>
  );
}

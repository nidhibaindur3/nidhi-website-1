import { ArrowRight } from "lucide-react";

import { DetailNavigation } from "@/src/components/portfolio/DetailNavigation";

type PrinciplesPageProps = {
  onBack: () => void;
};

export function PrinciplesPage({ onBack }: PrinciplesPageProps) {
  return (
    <main className="detail-page principles-detail-page">
      <DetailNavigation backLabel="About" onBack={onBack} ariaLabel="Portfolio">
        <a href="/#work">Work</a>
        <a href="/#research-enso">Research</a>
        <a href="/#contact">Contact</a>
      </DetailNavigation>
      <article>
        <header className="detail-hero principles-detail-hero">
          <p className="section-label">How I work</p>
          <h1>Model the system. Make the reasoning legible.</h1>
          <p className="detail-dek">
            The patterns below come from my current work and independent projects; they are not a
            generic engineering manifesto.
          </p>
        </header>

        <div className="principles-detail-list">
          <section>
            <div>
              <span>Understand the boundary</span>
              <h2>Decide what each part of the system is allowed to own.</h2>
            </div>
            <p>
              In Daily Digest, the model proposes structured research output, while the application
              owns schemas, provenance, unsupported-claim checks, retries, and durable jobs. That
              boundary makes the system easier to inspect and test.
            </p>
          </section>
          <section>
            <div>
              <span>Design for imperfect dependencies</span>
              <h2>Failure behavior is part of the product.</h2>
            </div>
            <p>
              Study Buddy persists learning evidence and can fall back to deterministic rubric
              behavior when an AI request is unavailable. A useful experience should not disappear
              because one dependency is imperfect.
            </p>
          </section>
          <section>
            <div>
              <span>Trace the whole path</span>
              <h2>Debug across boundaries, not only inside one layer.</h2>
            </div>
            <p>
              Prep N Print work spans Azure services, data, APIs, React Native rendering, Skia, and
              physical printers. Understanding the full path matters when the visible failure may
              begin somewhere else.
            </p>
          </section>
          <section>
            <div>
              <span>Leave a readable system</span>
              <h2>Clarity is an engineering outcome.</h2>
            </div>
            <p>
              Documentation, release notes, explicit data models, and well-named boundaries help
              the next engineer understand what changed and why. My mathematics and writing
              background both reinforce that habit.
            </p>
          </section>
        </div>

        <section className="detail-section next-page-link">
          <div>
            <p className="section-label">Return</p>
            <h2>Selected work</h2>
          </div>
          <a href="/#work">
            View projects <ArrowRight aria-hidden="true" />
          </a>
        </section>
      </article>
    </main>
  );
}

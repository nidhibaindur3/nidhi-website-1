import { ArrowRight, Download, Mail } from "lucide-react";

import { DetailNavigation } from "@/src/components/portfolio/DetailNavigation";
import { links } from "@/src/content/portfolio";

type AboutPageProps = {
  onBack: () => void;
};

const engineeringStack = [
  "TypeScript",
  "React",
  "React Native",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "SQL",
  "Kusto",
  "Azure",
  "Docker",
  "OpenAI",
];

const personalNotes = [
  {
    number: "01",
    title: "The math thread",
    body:
      "Computational mathematics taught me to look for structure before reaching for a solution. My undergraduate research moved across climate networks, mathematical biology, financial mathematics, and mathematics education.",
  },
  {
    number: "02",
    title: "The writing thread",
    body:
      "I completed a Creative Writing immersion alongside my mathematics degree. It still shows up in how I name concepts, document decisions, and turn a complicated technical path into an explanation another person can actually follow.",
  },
  {
    number: "03",
    title: "Current coordinates",
    body:
      "I’m currently based in Dallas, Texas, after studying at Rochester Institute of Technology in Rochester, New York. I’m interested in software and GenAI work where the system is technically demanding and the reasoning matters.",
  },
];

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <main className="detail-page about-detail-page">
      <DetailNavigation backLabel="Portfolio" onBack={onBack} ariaLabel="Portfolio">
        <a href="/#work">Work</a>
        <a href="/#research-enso">Research</a>
        <a href="/#daily-digest">Projects</a>
        <a href="/#contact">Contact</a>
      </DetailNavigation>

      <article>
        <header className="about-profile-hero">
          <div className="about-profile-topline">
            <p className="section-label">About Nidhi</p>
            <a className="principles-top-link" href="/about/how-i-work">
              Read my engineering principles <ArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="about-profile-intro">
            <h1>
              I build by understanding <em>the whole system.</em>
            </h1>
            <div>
              <p>
                I’m a software engineer whose path runs through computational mathematics,
                creative writing, cloud systems, and AI products.
              </p>
              <p>
                I care about difficult systems becoming easier to inspect, explain, and trust—not
                by hiding their complexity, but by giving every part a clear role.
              </p>
            </div>
          </div>

          <dl className="about-profile-coordinates">
            <div>
              <dt>Now</dt>
              <dd>Software Engineer · Ecolab</dd>
            </div>
            <div>
              <dt>Based</dt>
              <dd>Dallas, Texas</dd>
            </div>
            <div>
              <dt>Foundation</dt>
              <dd>Computational Mathematics · RIT</dd>
            </div>
          </dl>
        </header>

        <section className="about-origin" aria-labelledby="about-origin-title">
          <p className="section-label">The through line</p>
          <h2 id="about-origin-title">
            Mathematics taught me to find the structure. Writing taught me to make it legible.
          </h2>
          <div className="about-origin-story">
            <p>
              I studied Computational Mathematics at Rochester Institute of Technology, with a
              Computer Science minor and a Creative Writing immersion. That combination shaped a
              way of working I still use: understand the model, trace the dependencies, and explain
              why the system behaves the way it does.
            </p>
            <p>
              Today, my work crosses Azure services, data pipelines, APIs, React Native rendering,
              and physical printer hardware. In my own projects, I focus on GenAI systems where
              provenance, validation, and failure behavior are part of the product—not an
              afterthought.
            </p>
          </div>
        </section>

        <section className="about-engineering-lens" aria-labelledby="engineering-lens-title">
          <div className="about-lens-heading">
            <p className="section-label">Engineering lens</p>
            <h2 id="engineering-lens-title">The principles underneath the implementation.</h2>
          </div>

          <ol className="about-beliefs">
            <li>
              <span>01</span>
              <h3>Trace the whole path.</h3>
              <p>A visible failure may begin several services, queues, or interfaces away.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Give every dependency a boundary.</h3>
              <p>Models can propose. Application code still owns state, rules, and recovery.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Make decisions legible.</h3>
              <p>Clear names, explicit tradeoffs, and useful documentation are engineering work.</p>
            </li>
          </ol>

          <div className="about-stack" aria-label="Technologies Nidhi works with">
            <p>Working stack</p>
            <ul>
              {engineeringStack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="field-notes" className="about-field-notes" aria-labelledby="field-notes-title">
          <div className="field-notes-intro">
            <p className="section-label">Field notes</p>
            <h2 id="field-notes-title">A few things that explain how I got here.</h2>
            <p>
              The less résumé-shaped version: the disciplines and places that keep showing up in
              how I think.
            </p>
          </div>

          <div className="personal-accordion">
            {personalNotes.map((note, index) => (
              <details key={note.title} name="about-notes" open={index === 0}>
                <summary>
                  <span>{note.number}</span>
                  <strong>{note.title}</strong>
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{note.body}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className="detail-footer about-footer">
          <div>
            <p className="section-label">Keep going</p>
            <h2>See the systems behind the story.</h2>
          </div>
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

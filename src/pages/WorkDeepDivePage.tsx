import { Mail } from "lucide-react";

import { DetailNavigation } from "@/src/components/portfolio/DetailNavigation";
import { links } from "@/src/content/portfolio";

type WorkDeepDivePageProps = {
  onBack: () => void;
};

export function WorkDeepDivePage({ onBack }: WorkDeepDivePageProps) {
  return (
    <main className="detail-page work-detail-page">
      <DetailNavigation backLabel="Work" onBack={onBack} ariaLabel="Portfolio">
        <a href="/#research-enso">Research</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </DetailNavigation>

      <article>
        <header className="detail-hero">
          <p className="section-label">Ecolab · Software Engineer · July 2024—present</p>
          <h1>Prep N Print</h1>
          <p className="detail-dek">
            Enterprise software spanning Azure services, data pipelines, APIs, a React Native
            application, and label output across printer hardware.
          </p>
          <dl className="detail-meta">
            <div>
              <dt>Role</dt>
              <dd>Software Engineer</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>Backend, data, mobile, and printing</dd>
            </div>
            <div>
              <dt>Verified reach</dt>
              <dd>Cross-device reprint recovery across 64,000 locations</dd>
            </div>
          </dl>
        </header>

        <section className="detail-section split-detail">
          <div>
            <p className="section-label">Context</p>
            <h2>Software that connects cloud state to physical output.</h2>
          </div>
          <div className="prose">
            <p>
              Prep N Print supports food-label printing workflows in enterprise restaurant
              environments. My work crosses the boundaries between deployment infrastructure,
              data movement, application services, mobile rendering, and printer behavior.
            </p>
            <p>
              The public description intentionally stays at the system-surface level and omits
              internal architecture, customer data, and operational details.
            </p>
          </div>
        </section>

        <section className="detail-section">
          <div className="section-heading">
            <p className="section-label">System span</p>
            <h2>The parts of the system I worked across</h2>
            <p>This is a responsibility map, not a representation of Ecolab’s internal architecture.</p>
          </div>
          <div className="system-span" aria-label="Prep N Print engineering responsibility map">
            <div>
              <span>Cloud and data</span>
              <strong>Azure · Data Factory · SQL · Kusto</strong>
              <p>
                Deployment infrastructure, data pipelines, stored procedures, tables, and
                configuration.
              </p>
            </div>
            <div>
              <span>Application services</span>
              <strong>APIs · Service Bus · queues</strong>
              <p>Backend support for reprint sharing and restoration across devices.</p>
            </div>
            <div>
              <span>Mobile rendering</span>
              <strong>React Native · Skia</strong>
              <p>Label layout, scaling, and the application’s label-to-print path.</p>
            </div>
            <div>
              <span>Physical output</span>
              <strong>Enterprise printers</strong>
              <p>Output behavior across supported printer hardware.</p>
            </div>
          </div>
        </section>

        <section className="detail-section contribution-section">
          <div className="section-heading">
            <p className="section-label">My contribution</p>
            <h2>Implementation work, not a job-description list.</h2>
          </div>
          <ol className="contribution-list">
            <li>
              <span>Backend</span>
              <p>
                Built capabilities for Reprint Sharing and Restoration so label information could
                be recovered across devices at 64,000 locations.
              </p>
            </li>
            <li>
              <span>Data and services</span>
              <p>
                Worked with Azure Data Factory pipelines and APIs using SQL, Kusto, Azure Service
                Bus, and queue-based messaging.
              </p>
            </li>
            <li>
              <span>Database work</span>
              <p>
                Implemented and optimized stored procedures, tables, and configuration used by the
                system.
              </p>
            </li>
            <li>
              <span>Mobile printing</span>
              <p>
                Worked on a React Native and Skia print pipeline covering label layout, scaling,
                and output across enterprise printer hardware.
              </p>
            </li>
            <li>
              <span>Delivery</span>
              <p>
                Contributed to CI/CD, technical documentation, and release notes supporting
                changes across the product.
              </p>
            </li>
          </ol>
        </section>

        <section className="detail-section two-up-detail">
          <div>
            <p className="section-label">Engineering considerations</p>
            <h2>Reliability across several boundaries.</h2>
            <p>
              The work required coordinating persistent data, asynchronous messaging, mobile
              rendering, and physical devices. The verified public record names those technologies
              and responsibilities, but not internal SLOs, incident data, or test metrics.
            </p>
          </div>
          <div className="input-needed">
            <p className="section-label">Details needed from Nidhi</p>
            <h2>What would make this account stronger</h2>
            <ul>
              <li>A difficult production bug and how you isolated it</li>
              <li>A concrete trade-off or alternative you considered</li>
              <li>Approved testing, observability, or performance details</li>
              <li>A lesson or improvement you would make next</li>
            </ul>
          </div>
        </section>

        <footer className="detail-footer">
          <div>
            <p className="section-label">Open to opportunities</p>
            <h2>Looking for an engineer who works across the whole system?</h2>
          </div>
          <a href={links.email}>
            <Mail aria-hidden="true" /> Email Nidhi
          </a>
        </footer>
      </article>
    </main>
  );
}

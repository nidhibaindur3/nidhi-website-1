import { ArrowUpRight } from "lucide-react";

import { DetailNavigation } from "@/src/components/portfolio/DetailNavigation";
import { links } from "@/src/content/portfolio";

type EnsoDeepDivePageProps = {
  onBack: () => void;
};

export function EnsoDeepDivePage({ onBack }: EnsoDeepDivePageProps) {
  return (
    <main className="detail-page enso-detail-page">
      <DetailNavigation backLabel="Research" onBack={onBack} ariaLabel="Portfolio">
        <a href="/#work">Work</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </DetailNavigation>

      <article>
        <header className="detail-hero research-project-hero">
          <p className="section-label">Applied machine learning research · 2022—2024</p>
          <h1>Climate networks and ENSO prediction</h1>
          <p className="detail-dek">
            A complex-network machine-learning approach to 12-month El Niño–Southern Oscillation
            forecasting across 75 years of climate observations.
          </p>
          <dl className="detail-meta">
            <div>
              <dt>Data</dt>
              <dd>500,000+ sea-surface-temperature observations</dd>
            </div>
            <div>
              <dt>Time span</dt>
              <dd>75 years of historical data</dd>
            </div>
            <div>
              <dt>Forecast horizon</dt>
              <dd>12 months</dd>
            </div>
          </dl>
        </header>

        <section className="detail-section split-detail">
          <div>
            <p className="section-label">Research question</p>
            <h2>Can network structure extend the useful forecast horizon?</h2>
          </div>
          <div className="prose">
            <p>
              ENSO is a coupled ocean–atmosphere pattern with global effects and limited long-range
              predictability. I explored whether relationships within sea-surface-temperature
              observations could provide useful structure for forecasting.
            </p>
            <p>
              The project reframed the climate record as a connected system rather than treating
              each observation in isolation.
            </p>
          </div>
        </section>

        <section className="detail-section methodology-section">
          <div className="section-heading">
            <p className="section-label">Methodology</p>
            <h2>From climate observations to a forecast model</h2>
          </div>
          <ol>
            <li>
              <span>Historical observations</span>
              <p>
                Process more than 500,000 sea-surface-temperature observations spanning 75 years.
              </p>
            </li>
            <li>
              <span>Network representation</span>
              <p>
                Use complex-network metrics to describe relationships within the time-dependent
                climate system.
              </p>
            </li>
            <li>
              <span>Forecasting</span>
              <p>
                Combine time-series analysis, probabilistic methods, and Random Forests for
                12-month forecasting.
              </p>
            </li>
            <li>
              <span>Evaluation</span>
              <p>
                Evaluate the forecasting approach; the exact split, baseline, and definition of
                the reported accuracy still need to be documented here.
              </p>
            </li>
          </ol>
        </section>

        <section className="detail-section two-up-detail">
          <div>
            <p className="section-label">My contribution</p>
            <h2>Model design and evaluation</h2>
            <p>
              I designed and evaluated a machine-learning approach that combined climate-network
              features with long-range forecasting, then presented the research at the 2024 NSBE
              Conference and RIT Research Symposia from 2022 through 2024.
            </p>
          </div>
          <div className="input-needed">
            <p className="section-label">Details needed from Nidhi</p>
            <h2>Complete the evaluation story</h2>
            <ul>
              <li>The exact validation split and baseline</li>
              <li>What the reported 95% accuracy measures</li>
              <li>Findings and conclusions approved for public use</li>
              <li>Any additional Python libraries or reproducibility details</li>
            </ul>
          </div>
        </section>

        <section className="detail-section source-panel-wide">
          <div>
            <p className="section-label">Public record</p>
            <h2>Research sources and recognition</h2>
          </div>
          <div className="source-links">
            <a href={links.ensoConferenceRecord} target="_blank" rel="noreferrer">
              RIT conference record <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={links.ensoAdvisorRecord} target="_blank" rel="noreferrer">
              Advisor research record <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={links.researchLinkedInPost} target="_blank" rel="noreferrer">
              Undergraduate research record <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={links.ritResearchRecognition} target="_blank" rel="noreferrer">
              RIT Research Scholar recognition <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}

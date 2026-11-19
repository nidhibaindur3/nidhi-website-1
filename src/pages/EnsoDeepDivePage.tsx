import { ArrowUpRight } from "lucide-react";

import { DetailNavigation } from "@/src/components/portfolio/DetailNavigation";
import { links } from "@/src/content/portfolio";

type EnsoDeepDivePageProps = {
  onBack: () => void;
};

type ResearchFigureProps = {
  src: string;
  alt: string;
  label: string;
  caption: string;
  width: number;
  height: number;
  className?: string;
};

const networkMetrics = [
  {
    name: "Degree",
    plain: "How many direct connections does this location have?",
    technical: "The proportion of all possible connections that touch this node.",
    formula: "Cᴅ(v) = (1 / n) Σᵤ Aᵥᵤ",
    symbols: "Aᵥᵤ is 1 when nodes v and u are connected, and n is the number of nodes.",
  },
  {
    name: "Betweenness centrality",
    plain: "How often does this location act as a bridge between other locations?",
    technical: "The share of shortest paths between other node pairs that pass through this node.",
    formula: "Cʙ(v) = Σₛ≠ᵥ≠ₜ [σₛₜ(v) / σₛₜ]",
    symbols: "σₛₜ is the number of shortest paths from s to t; σₛₜ(v) counts the paths that pass through v.",
  },
  {
    name: "Closeness centrality",
    plain: "How quickly can this location reach the rest of the network?",
    technical: "The inverse of the sum of shortest-path distances from one node to all others.",
    formula: "Cᴄ(v) = 1 / Σᵤ≠ᵥ d(v,u)",
    symbols: "d(v,u) is the length of the shortest path between nodes v and u.",
  },
  {
    name: "Eigenvector centrality",
    plain: "Is this location connected to other influential locations?",
    technical: "A recursive measure that gives more weight to connections with highly connected nodes.",
    formula: "xᵥ = (1 / λ) Σₜ∈N(v) xₜ",
    symbols: "N(v) is the set of nodes connected to v, and λ is a scaling constant.",
  },
  {
    name: "Local clustering coefficient",
    plain: "How often are this location’s neighbors also connected to one another?",
    technical: "The proportion of possible triangles among a node and its neighbors that actually exist.",
    formula: "C(v) = 2T(v) / [kᵥ(kᵥ − 1)]",
    symbols: "T(v) is the number of triangles through v, and kᵥ is the number of its neighbors.",
  },
];

const trainingWindows = [
  {
    period: "1 year",
    testPeriod: "Jan–Apr 2021",
    meanAbsoluteError: "0.455460",
    rootMeanSquaredError: "0.504526",
    efficiency: "−0.076910",
    correlation: "0.744231",
  },
  {
    period: "5 years",
    testPeriod: "Jan–Apr 2020",
    meanAbsoluteError: "0.24068",
    rootMeanSquaredError: "0.3109",
    efficiency: "0.59087",
    correlation: "0.8043",
  },
  {
    period: "10 years",
    testPeriod: "Jan–Apr 2020",
    meanAbsoluteError: "0.35961",
    rootMeanSquaredError: "0.4373",
    efficiency: "0.1908",
    correlation: "0.4038",
  },
  {
    period: "20 years",
    testPeriod: "Jan–Apr 2020",
    meanAbsoluteError: "0.60858",
    rootMeanSquaredError: "0.769083",
    efficiency: "−1.5024",
    correlation: "−0.5720",
  },
];

const windowForecastFigures = [
  {
    src: "/research/enso/window-1-year.png",
    alt: "Observed and predicted values over the four-month 2021 test. The prediction begins well above the observations and gradually moves closer.",
    label: "One year of training · 2021",
    caption: "The estimate begins high and approaches the observed values near the end of this test.",
    width: 810,
    height: 380,
  },
  {
    src: "/research/enso/window-5-years.png",
    alt: "Observed and predicted values over the four-month 2020 test. The prediction follows the rise but stays below the observations through most of the period.",
    label: "Five years of training · 2020",
    caption: "The model follows the upward movement most closely, though it underestimates most of the rise.",
    width: 830,
    height: 380,
  },
  {
    src: "/research/enso/window-10-years.png",
    alt: "Observed values rise and remain high while the prediction stays flat, dips, and then rises later.",
    label: "Ten years of training · 2020",
    caption: "The estimate misses the rise in the middle of the forecast, then recovers toward the observed series.",
    width: 830,
    height: 380,
  },
  {
    src: "/research/enso/window-20-years.png",
    alt: "After an initial near match, the predicted series drops while observed values stay high.",
    label: "Twenty years of training · 2020",
    caption: "The prediction turns sharply downward as the observed values remain high.",
    width: 900,
    height: 380,
  },
];

function ResearchFigure({
  src,
  alt,
  label,
  caption,
  width,
  height,
  className = "",
}: ResearchFigureProps) {
  return (
    <figure className={`enso-source-figure ${className}`.trim()}>
      <div className="enso-source-media">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption>
        <span>{label}</span>
        <p>{caption}</p>
      </figcaption>
    </figure>
  );
}

function StoryHeading({
  number,
  label,
  title,
  introduction,
}: {
  number: string;
  label: string;
  title: string;
  introduction?: string;
}) {
  return (
    <header className="enso-story-heading">
      <p className="section-label">
        {number} / {label}
      </p>
      <h2>{title}</h2>
      {introduction ? <p>{introduction}</p> : null}
    </header>
  );
}

export function EnsoDeepDivePage({ onBack }: EnsoDeepDivePageProps) {
  return (
    <main className="detail-page enso-detail-page">
      <a className="skip-link" href="#research-content">Skip to research</a>
      <DetailNavigation backLabel="Home" onBack={onBack} ariaLabel="Portfolio">
        <a href="/#about">About</a>
        <a href="/#work">Work</a>
        <a href="/#daily-digest">Projects</a>
        <a href="/#contact">Contact</a>
      </DetailNavigation>

      <article id="research-content" tabIndex={-1}>
        <header className="enso-story-hero">
          <p className="section-label">Network science and machine learning research · 2022 to 2024</p>
          <h1>
            Predicting El Niño-Southern Oscillation through <em>climate networks</em>
          </h1>
          <p className="enso-hero-dek">
            Forecasting El Niño-Southern Oscillation (ENSO) intensity and frequency remains
            challenging because climate processes interact across the globe. This study tests a new
            route: represent global temperature relationships as a climate network, then use its
            structure to predict ENSO values using machine learning.
          </p>
          <dl className="enso-story-meta">
            <div>
              <dt>Researcher</dt>
              <dd>Nidhi Baindur</dd>
            </div>
            <div>
              <dt>Advisor</dt>
              <dd>Dr. Nishant Malik</dd>
            </div>
            <div>
              <dt>Tech Stack</dt>
              <dd>Python</dd>
            </div>
            <div>
              <dt>Institution</dt>
              <dd>Rochester Institute of Technology</dd>
            </div>
          </dl>
        </header>

        <nav className="enso-contents" aria-label="Research paper sections">
          <p className="section-label">Read the research</p>
          <ol>
            <li><a href="#abstract"><span aria-hidden="true">00</span>Abstract</a></li>
            <li><a href="#phenomenon"><span aria-hidden="true">01</span>The phenomenon</a></li>
            <li><a href="#data"><span aria-hidden="true">02</span>Data and representation</a></li>
            <li><a href="#network"><span aria-hidden="true">03</span>Climate-network construction</a></li>
            <li><a href="#model"><span aria-hidden="true">04</span>Model design</a></li>
            <li><a href="#year-2022"><span aria-hidden="true">05</span>2022 · Baseline</a></li>
            <li><a href="#year-2023"><span aria-hidden="true">06</span>2023 · Feature analysis</a></li>
            <li><a href="#year-2024"><span aria-hidden="true">07</span>2024 · Validation</a></li>
            <li><a href="#conclusion"><span aria-hidden="true">08</span>Conclusion</a></li>
          </ol>
        </nav>

        <section id="abstract" className="enso-paper-section enso-abstract" data-reveal>
          <StoryHeading
            number="00"
            label="Abstract"
            title="I tested whether climate networks could help predict ENSO."
          />
          <div className="enso-abstract-grid">
            <div className="enso-prose">
              <p>
                From summer 2022 through spring 2024, I tested whether representing global temperature
                relationships as a climate network could provide a useful signal for predicting
                El Niño-Southern Oscillation values. I used 74 years of daily global surface air
                temperatures. Geographic locations became nodes, and the correlation between two
                location's temperature histories determined whether they were connected. Five
                measures of network structure eventually became inputs to a random forest focused on
                values associated with Niño 3.4.
              </p>
              <p>
                The first model followed many low values but missed the peaks. The most important
                result came from asking what the model had learned: local clustering, a measure of how
                strongly a location’s neighbors connect to one another, ranked first in both 2023 and
                2024. Among the three training windows tested on the same four months of 2020, five
                years performed best. Cross-validation then exposed the work still ahead: validation
                error was more than twice training error.
              </p>
            </div>
            <div className="enso-abstract-finding">
              <p className="section-label">The research arc</p>
              <blockquote>
                The model did more than produce forecasts. Its feature rankings pointed to which
                network structures carried the strongest predictive signal.
              </blockquote>
              <dl>
                <div>
                  <dt>Input</dt>
                  <dd>Global surface air temperatures</dd>
                </div>
                <div>
                  <dt>Representation</dt>
                  <dd>Thresholded correlation networks</dd>
                </div>
                <div>
                  <dt>Prediction target</dt>
                  <dd>Climate-value series associated with Niño 3.4</dd>
                </div>
                <div>
                  <dt>Strongest feature</dt>
                  <dd>Local clustering coefficient</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="phenomenon" className="enso-paper-section enso-phenomenon" data-reveal>
          <StoryHeading
            number="01"
            label="The phenomenon"
            title="What, exactly, was the model trying to predict?"
            introduction="The project joins two different climate measurements. Understanding that distinction is essential to understanding the model."
          />
          <div className="enso-section-narrative">
            <p>
                A conventional climate map describes conditions at individual locations. A complex
                network links places when their temperature histories are correlated. The unit of
                analysis shifts from a place on the map to a relationship between places.
            </p>
            <p>
                El Niño-Southern Oscillation provided the test. During El Niño, the central and eastern
                tropical Pacific becomes warmer than average. That shift can bring flooding to parts
                of western South America and drought to Australia and Indonesia. La Niña often shifts
                rainfall patterns in the opposite direction. The question was whether relationships
                among global surface air temperatures could help estimate the climate values associated
                with this Pacific cycle.
            </p>
          </div>
          <div className="enso-figure-split">
            <ResearchFigure
              src="/research/enso/nino-34-region.png"
              alt="World map highlighting the Niño 3.4 region across the equatorial Pacific Ocean."
              width={1500}
              height={1040}
              label="Niño 3.4 · Prediction region"
              caption="The Niño 3.4 region spans approximately 5 degrees south to 5 degrees north and 170 degrees west to 120 degrees west. The project predicted climate values associated with this region."
            />
            <div className="enso-explainer">
              <p className="section-label">Two signals, two roles</p>
              <div>
                <span>Model input</span>
                <h3>Surface air temperature</h3>
                <p>
                  Daily measurements of air temperature near Earth’s surface. A time series at each
                  location supplied the observations used to build the climate networks.
                </p>
              </div>
              <div>
                <span>Prediction target</span>
                <h3>El Niño-Southern Oscillation value series</h3>
                <p>
                  The target was an El Niño-Southern Oscillation value series associated with Niño
                  3.4, also known as the Oceanic Niño Index.
                </p>
              </div>
              <p className="enso-reading-note">
                In plain language, the model used patterns in global air temperature to estimate
                whether the tropical Pacific was warmer or cooler than its seasonal average.
              </p>
            </div>
          </div>
        </section>

        <section id="data" className="enso-paper-section enso-data" data-reveal>
          <StoryHeading
            number="02"
            label="Data and representation"
            title="Before building a network, the geometry of the data had to change."
            introduction="A latitude-longitude grid is convenient for storing climate data, but it does not distribute points evenly across a sphere."
          />
          <ResearchFigure
            src="/research/enso/icosahedral-regridding.png"
              alt="Two globe visualizations showing temperature observations before and after conversion from a rectangular latitude-longitude grid to an icosahedral grid."
            width={1500}
            height={780}
            label="Global temperature · Regridding"
            caption="Regridding reduces the concentration of points near the poles and creates a more uniform set of geographic nodes. The transformation changes the sampling geometry, not the underlying temperature observations."
          />
          <div className="enso-data-grid">
            <div>
              <p className="section-label">Climate dataset</p>
              <h3>Reanalysis 1 global climate record</h3>
              <p>
                The project used 74 years of daily global surface air temperature data, from 1948
                through 2022. The record comes from Reanalysis 1, produced by the National Centers for
                Environmental Prediction and the National Center for Atmospheric Research and
                distributed by the National Oceanic and Atmospheric Administration. It is stored on
                an approximately 2.5-degree latitude and longitude grid.
              </p>
            </div>
            <div>
              <p className="section-label">Why regrid?</p>
              <h3>Network measurements should not inherit polar crowding.</h3>
              <p>
                Longitude lines converge at the poles. Without regridding, polar regions receive more
                nodes per unit area than equatorial regions, which can distort connection counts and
                other graph measurements.
              </p>
            </div>
            <div>
              <p className="section-label">New representation</p>
              <h3>Each node represents one geographic location.</h3>
              <p>
                The icosahedral grid approximates the globe with more evenly spaced triangular cells.
                Every node then carries a surface air temperature time series for its location.
              </p>
            </div>
          </div>
        </section>

        <section id="network" className="enso-paper-section enso-network-method" data-reveal>
          <StoryHeading
            number="03"
            label="Climate-network construction"
            title="Each network summarized a year of climate history."
            introduction="The network captures which locations changed together during a given period. It does not claim that one location caused the other to change."
          />
          <ol className="enso-method-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Assemble one year of observations</h3>
                <p>
                  Each geographic node carries a one-year air-temperature series sampled monthly.
                  I used that history to build a network, then advanced the start by 30 days to build
                  the next one.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Compare every pair of locations</h3>
                <p>
                  Calculate the Pearson correlation coefficient between the two time series. It
                  measures linear co-movement: positive values indicate that temperatures tend to
                  rise and fall together; negative values indicate opposite movement.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Apply the connection rule</h3>
                <p>
                  Connect two different nodes when the absolute correlation is greater than 0.05.
                  The absolute value means strong positive and strong negative relationships both
                  form edges.
                </p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Measure the resulting graph</h3>
                <p>
                  Convert the network’s topology into numerical features that a regression model can
                  use.
                </p>
              </div>
            </li>
          </ol>

          <div className="enso-equations">
            <div>
              <p className="section-label">Correlation</p>
              <p className="enso-equation">
                ρ<sub>i,j</sub> = Cov(X<sub>i</sub>, X<sub>j</sub>) /
                (σ<sub>i</sub> σ<sub>j</sub>)
              </p>
              <p>
                The covariance of two node time series, divided by the product of their standard
                deviations.
              </p>
            </div>
            <div>
              <p className="section-label">Adjacency rule</p>
              <p className="enso-equation">
                A<sub>i,j</sub> = 1 when |ρ<sub>i,j</sub>| &gt; 0.05 and i ≠ j; 0 otherwise
              </p>
              <p>
                A value of one means an edge exists. The diagonal stays zero, so a location is never
                connected to itself.
              </p>
            </div>
          </div>

          <div className="enso-network-bridge">
            <p className="section-label">From field to evolving system</p>
            <p>
              One window produces one graph. Advancing the window by one month produces the next graph.
              The method therefore converts a continuous climate record into a time-ordered sequence
              of complex networks whose topology can be compared from one period to the next.
            </p>
          </div>
        </section>

        <section className="enso-paper-section enso-measures" data-reveal>
          <StoryHeading
            number="03.1"
            label="Graph measurements"
            title="The model did not see a map. It saw the structure of a graph."
            introduction="Each measurement answers a different question about the role of a geographic node within the climate network."
          />
          <div className="enso-section-narrative enso-section-narrative--compact">
            <p>
              The correlation rule creates thousands of pairwise relationships, but a regression
              model needs a smaller numerical description. Five graph measurements summarize how
              each place is positioned within the network.
            </p>
            <p>
              Degree, betweenness, closeness, and eigenvector centrality describe connection and
              influence. Local clustering describes how strongly a place’s immediate neighbors form
              a group. The first model began with degree centrality; later phases added the other
              measurements to test whether more of the network’s structure could improve prediction.
            </p>
          </div>
          <div className="enso-metric-list">
            {networkMetrics.map((metric) => (
              <article key={metric.name}>
                <div>
                  <h3>{metric.name}</h3>
                  <p>{metric.plain}</p>
                </div>
                <details className="enso-metric-detail">
                  <summary>Technical definition and formula</summary>
                  <p>{metric.technical}</p>
                  <p className="enso-metric-formula">{metric.formula}</p>
                  <p>{metric.symbols}</p>
                </details>
              </article>
            ))}
          </div>
          <div className="enso-metric-map-context">
            <p className="section-label">Put the graph back on the map</p>
            <p>
              The measurements describe individual nodes, so they can be plotted at their
              geographic locations. This view shows the network structure within the Niño 3.4 region
              selected for the regional forecasts.
            </p>
          </div>
          <ResearchFigure
            src="/research/enso/nino-34-network-metrics.png"
            alt="Five world maps show colored network-measure values inside the outlined equatorial Pacific region. The panel labels are degree, eigenvector centrality, degree centrality, local clustering coefficient, and closeness centrality."
            width={2840}
            height={1402}
            label="Network measurements in the Niño 3.4 region"
            caption="The panels are labelled Degree, Eigenvector Centrality, Degree Centrality, Local Clustering Coefficient, and Closeness Centrality. The figure maps these values inside the red Niño 3.4 box; each panel has its own color scale. Betweenness, another measure defined above, is not shown here."
          />
          <div className="enso-local-clustering">
            <div>
              <p className="section-label">Reading a neighborhood measure</p>
              <h3>Local clustering coefficient</h3>
            </div>
            <div>
              <p className="enso-equation">
                C(v) = 2T(v) / [k<sub>v</sub>(k<sub>v</sub> − 1)]
              </p>
              <p>
                Here, T(v) is the number of triangles passing through node v, and k<sub>v</sub> is
                its number of neighbors. A high value means the node sits inside a tightly connected
                local neighborhood. It measures how strongly a location’s neighbors form a group.
              </p>
            </div>
          </div>
        </section>

        <section id="model" className="enso-paper-section enso-model-story" data-reveal>
          <StoryHeading
            number="04"
            label="Model design"
            title="A random forest estimated climate values associated with Niño 3.4."
            introduction="The first model used degree centrality. Later versions added four more graph measurements. The random forest learned how those network features corresponded to climate values associated with Niño 3.4."
          />
          <ol className="enso-model-flow" aria-label="Steps from climate observations to a climate-value estimate">
            <li><div><span>Input</span><strong>Global surface air temperature windows</strong></div><i aria-hidden="true">→</i></li>
            <li><div><span>Representation</span><strong>Correlation network</strong></div><i aria-hidden="true">→</i></li>
            <li><div><span>Features</span><strong>Graph measurements</strong></div><i aria-hidden="true">→</i></li>
            <li><div><span>Model</span><strong>Random forest regression</strong></div><i aria-hidden="true">→</i></li>
            <li><div><span>Target</span><strong>Climate-value series</strong></div><i className="enso-model-flow-spacer" aria-hidden="true">→</i></li>
          </ol>
          <div className="enso-model-explanation">
            <div className="enso-prose">
              <h3>Why a random forest?</h3>
              <p>
                A random forest combines many decision trees. Each tree learns a different set of
                decision rules from a random subset of the training data and features. The regression
                output averages their predictions.
              </p>
              <p>
                That made it a useful baseline for a feature set with many possible nonlinear
                interactions. It also exposed feature importance, which helped identify which graph
                measurements carried the most signal.
              </p>
              <div className="enso-forest-equation">
                <p className="enso-equation">
                  ŷ(x) = (1 / B) Σ<sub>b=1</sub><sup>B</sup> T<sub>b</sub>(x)
                </p>
                <p>
                  The prediction is the average output of B decision trees. Each tree T receives the
                  same feature vector x but learns from a different random view of the data.
                </p>
              </div>
            </div>
            <div className="enso-model-roles">
              <p className="section-label">Keep the data roles distinct</p>
              <dl className="enso-split-roles">
                <div><dt>Training</dt><dd>Examples used to fit the forest’s decision trees.</dd></div>
                <div><dt>Validation</dt><dd>Examples used to compare model settings during development.</dd></div>
                <div><dt>Test</dt><dd>Held-out examples used for a final performance check.</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="results" className="enso-paper-section enso-research-timeline">
          <StoryHeading
            number="05"
            label="Three years of research"
            title="Each year moved the question forward."
            introduction="The 2022 baseline used degree centrality and missed the largest peaks. In 2023, I tested the other network measures, focused on Niño 3.4, and separated El Niño from La Niña forecasts. That led to a close six-month forecast for 2002, then a harder 2024 test of generalization and training-window length."
          />

          <article id="year-2022" className="enso-year-chapter enso-year-2022" data-reveal>
            <header className="enso-year-heading">
              <p className="section-label">Summer 2022 · Year one</p>
              <h3>Build the first model. Find the part it cannot see.</h3>
            </header>
            <div className="enso-year-lead">
              <p>
                I began in summer 2022 as a sophomore with little background in computer science or
                machine learning. First I learned to build a climate network. Then I gave a preliminary
                random forest one measure, degree centrality, which counts each location’s direct
                connections. Could those global relationships help estimate the climate target?
              </p>
              <p>
                The first map was difficult to read. Many nodes blended together, and the spatial
                pattern was not clear. The 120-month test gave a more useful answer: the model tracked
                many lower values, but repeatedly fell short of the largest peaks. Degree centrality
                gave the first model a useful baseline, but counting connections alone did not
                describe the full climate pattern.
              </p>
            </div>
            <ResearchFigure
              src="/research/enso/baseline-prediction.png"
              alt="Line chart comparing actual and predicted climate-index values over 120 testing months. The predicted line follows broad movement but misses several high peaks."
              width={1250}
              height={840}
              label="Observed and predicted index · 120 test months"
              caption="The solid blue line is the observed value; the dashed red line is the model estimate. Their broad movement sometimes agrees, while the red line repeatedly underestimates the larger blue peaks. The vertical axis is the target scale used in this experiment."
            />
            <div className="enso-year-result">
              <div className="enso-year-stat">
                <span>Nash-Sutcliffe model efficiency</span>
                <strong>0.9215</strong>
              </div>
              <div className="enso-year-stat">
                <span>Mean absolute error</span>
                <strong>0.923</strong>
              </div>
              <div className="enso-year-result-copy">
                <p>
                  The efficiency score compares the model with predicting the observed average every
                  time. It ranges from negative infinity to 1, with 1 as a perfect prediction. Values
                  above 0.5 are commonly treated as acceptable in environmental modeling. A score of
                  0.9215 therefore looked excellent for a first model. Mean absolute error was 0.923,
                  meaning the estimate differed from the observed value by 0.923 on average. The
                  curve adds what neither score can: the model followed much of the
                  sequence but missed its strongest peaks.
                </p>
                <p className="enso-year-turn">
                  The next step was clear. <strong>Measure more than how many connections a place
                  has, then test whether the shape of its neighborhood can recover the peaks.</strong>
                </p>
              </div>
            </div>
          </article>

          <article id="year-2023" className="enso-year-chapter enso-year-2023" data-reveal>
            <header className="enso-year-heading">
              <p className="section-label">Summer 2023 · Year two</p>
              <h3>Look inside the network. Find the signal in its neighborhoods.</h3>
            </header>
            <div className="enso-year-lead">
              <p>
                I returned to the baseline model with a new question. It could follow many low values,
                but why did it miss the peaks? I compared the graph measurements to see which
                properties mattered most to the random forest.
              </p>
              <p>
                Feature importance measures how much a variable helped the fitted forest make its
                estimates. It points to a useful predictor, not a physical cause. One feature stood
                above the rest: local clustering. It asks whether the places connected to a location
                are also connected to each other. In other words, the forest assigned more
                importance to neighborhood structure than to a simple count of links.
              </p>
            </div>
            <ResearchFigure
              src="/research/enso/feature-importance.png"
              alt="Bar chart ranking the 25 most important model inputs. The two tallest bars are local-clustering measurements for individual grid locations."
              width={1320}
              height={790}
              label="How strongly each network feature contributed"
              caption="Each bar is one input to the forest. Its label combines a network measurement with the index of a grid location. The highest-ranked inputs are local-clustering values. This ranking shows which inputs the fitted model used most; it does not show that they cause the climate cycle."
              className="enso-feature-figure"
            />
            <div className="enso-year-bridge">
              <p className="section-label">Focus the model on the forecast region</p>
              <p>
                The feature analysis identified local neighborhood structure as the strongest
                signal. I next recalculated the network measurements within the Niño 3.4 region,
                then trained separate models for El Niño and La Niña. The phase-specific forecasts
                showed how well each model retained the strongest peaks and troughs over a longer
                horizon.
              </p>
            </div>
            <ResearchFigure
              src="/research/enso/phase-forecasts.png"
              alt="Two line charts compare observed and predicted El Niño and La Niña values. Both predictions smooth over sharper observed changes."
              width={850}
              height={380}
              label="Separate forecasts for El Niño and La Niña"
              caption="Solid blue lines show observed values; dashed red lines show predictions. In both phases, the estimates smooth the sharpest rises and falls."
            />
            <div className="enso-year-result enso-year-result--event">
              <div className="enso-event-errors">
                <h4 className="section-label">Forecast performance across ENSO phases</h4>
                <div><span>El Niño</span><strong>0.35</strong><small>Root mean squared error</small></div>
                <div><span>La Niña</span><strong>0.83</strong><small>Root mean squared error</small></div>
              </div>
              <div className="enso-year-result-copy">
                <p>
                  Root mean squared error gives extra weight to large misses. The El Niño score of
                  0.35 indicates a closer fit than the La Niña score of 0.83. Both estimates smooth
                  the sharpest changes: the El Niño model misses several warm peaks, while the La
                  Niña model misses the deepest cool excursions.
                </p>
                <p>
                  I then shortened the horizon. Training on observations from 1948 through 2001, the
                  model estimated the first six months of 2002 with a root mean squared error of
                  0.05. The estimate followed the observed series closely. That result led to the
                  next question: <strong>does the signal hold up across repeated tests on unseen
                  data?</strong>
                </p>
              </div>
            </div>
            <ResearchFigure
              src="/research/enso/six-month-forecast.png"
              alt="A six-month forecast for 2002, with the predicted line closely following the observed line."
              width={850}
              height={348}
              label="A close six-month forecast for 2002"
              caption="Blue shows the observed series and red the estimate for the first six months of 2002. The two lines track closely."
            />
          </article>

          <article id="year-2024" className="enso-year-chapter enso-year-2024" data-reveal>
            <header className="enso-year-heading">
              <p className="section-label">Spring 2024 · Year three</p>
              <h3>Keep the discovery. Put it through a harder test.</h3>
            </header>
            <div className="enso-year-lead">
              <p>
                The close 2002 forecast raised the next question: was the random forest learning a
                repeatable climate pattern, or overfitting its training examples? In spring 2024, I
                used six-fold cross-validation to check generalization. The data was divided into six
                groups. The model trained on five and validated on the sixth; then each group took a
                turn as the validation set.
              </p>
              <p>
                Validation error was higher than training error in all six folds. This repeated gap
                showed that the forest fit its training examples more closely than data held aside
                during each round.
              </p>
            </div>
            <ResearchFigure
              src="/research/enso/cross-validation.png"
              alt="Grouped bar chart showing training mean squared error and higher validation mean squared error in each of six folds."
              width={1320}
              height={650}
              label="Training and validation error across six folds"
              caption="Blue bars show mean squared error on training examples; red bars show error on validation examples. The forest used a minimum-samples-to-split setting of 100, requiring at least 100 examples before dividing a decision-tree branch."
            />
            <div className="enso-error-explanation">
              <div>
                <p className="section-label">How to read the error</p>
                <p className="enso-equation">Mean squared error = (1 / n) Σ (yᵢ − ŷᵢ)²</p>
              </div>
              <p>
                Mean squared error averages the squared difference between an observed value y and
                the model’s estimate ŷ across n examples. Squaring makes large misses count more.
                Average training error was <strong>0.342</strong>; average validation error was
                 <strong> 0.803</strong>, 2.35 times as high. The gap showed that the model needed a
                stronger test of generalization and informed the next revision.
              </p>
            </div>

            <div className="enso-year-bridge">
              <p className="section-label">Expand the study area and strengthen the test</p>
              <div>
                <p>
                  I widened the study area from the standard Niño 3.4 box to a tropical Pacific
                  region spanning 15 degrees south to 15 degrees north and 165 degrees east to 70
                  degrees west. The larger area supplied more locations for the five network
                  measurements. Recalculating them took several weeks.
                </p>
              </div>
            </div>
            <ResearchFigure
              src="/research/enso/expanded-region.png"
              alt="Map of the expanded tropical Pacific study region, spanning 15 degrees south to 15 degrees north and 165 degrees east to 70 degrees west."
              width={590}
              height={390}
              label="Expanded tropical Pacific study region"
              caption="The revised analysis extends beyond Niño 3.4 into a wider tropical Pacific region."
              className="enso-expanded-area-figure"
            />
            <p className="enso-expanded-followup">
              I recalculated all five measures, then split the examples into 60 percent for training,
              20 percent for validation, and 20 percent for a held-out test. I retrained the forest
              and checked feature importance again. Local clustering remained the strongest feature,
              followed by betweenness centrality and degree centrality.
            </p>
            <ResearchFigure
              src="/research/enso/mean-feature-importance.png"
              alt="Bar chart comparing average importance across five network measurements. Local clustering is highest, betweenness is next, followed by degree and two lower-ranked measurements."
              width={700}
              height={480}
              label="Mean feature importance after the 2024 model revision"
              caption="The bars rank the five network measurements by mean importance in the revised model."
              className="enso-mean-feature-figure"
            />

            <div className="enso-window-study">
              <header className="enso-window-intro">
                <p className="section-label">A second 2024 question · How much history?</p>
                <h4>How much climate history should the model remember?</h4>
                <p>
                  I compared one, five, ten, and twenty years of training data. Mean absolute error
                  gives the average size of a miss. Root mean squared error gives extra weight to
                  large misses. Nash-Sutcliffe efficiency compares the model with always predicting
                  the observed average. A score of 1 is perfect, 0 matches that simple baseline, and
                  a negative score is worse than it. Correlation shows whether predicted and
                  observed values rise and fall together.
                </p>
                <p className="enso-window-period-note">
                  Every model predicts four months. The one-year run tests January through April
                  2021; the five-, ten-, and twenty-year runs test January through April 2020. The
                  test period is shown beside each result.
                </p>
              </header>
              <div
                className="enso-window-figure-grid"
                role="group"
                aria-label="Observed and predicted values for four training-window experiments"
              >
                {windowForecastFigures.map((figure) => (
                  <ResearchFigure key={figure.label} {...figure} />
                ))}
              </div>
              <dl className="enso-window-formulas" aria-label="Formulas for the training-window evaluation measures">
                <div>
                  <dt>Mean absolute error</dt>
                  <dd>(1 / n) Σ |yᵢ − ŷᵢ|</dd>
                </div>
                <div>
                  <dt>Root mean squared error</dt>
                  <dd>√[(1 / n) Σ (yᵢ − ŷᵢ)²]</dd>
                </div>
                <div>
                  <dt>Nash-Sutcliffe efficiency</dt>
                  <dd>1 − [Σ(yᵢ − ŷᵢ)² / Σ(yᵢ − ȳ)²]</dd>
                </div>
                <div>
                  <dt>Correlation coefficient</dt>
                  <dd>r = Cov(y, ŷ) / (σᵧ σᵧ̂)</dd>
                </div>
              </dl>
              <p className="enso-equation-key">
                In these formulas, y is the observed value, ŷ is the model prediction, n is the
                number of forecast months, ȳ is the observed average, Cov is covariance, and σ is
                standard deviation.
              </p>
              <div className="enso-window-results">
                <p className="enso-table-scroll-note">Scroll horizontally to compare every measure.</p>
                <div className="enso-window-table-scroll" role="region" aria-label="Training-window results. Scroll horizontally to read all columns." tabIndex={0}>
                  <table className="enso-window-table">
                    <caption>Forecast accuracy by training-window length</caption>
                    <thead>
                      <tr>
                        <th scope="col">Training history</th>
                        <th scope="col">Test period</th>
                        <th scope="col">Mean absolute error</th>
                        <th scope="col">Root mean squared error</th>
                        <th scope="col">Nash-Sutcliffe efficiency</th>
                        <th scope="col">Correlation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trainingWindows.map((run) => (
                        <tr key={run.period}>
                          <th scope="row">{run.period}</th>
                          <td>{run.testPeriod}</td>
                          <td>{run.meanAbsoluteError}</td>
                          <td>{run.rootMeanSquaredError}</td>
                          <td>{run.efficiency}</td>
                          <td>{run.correlation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="enso-window-interpretation">
                  Among the three models tested on the same four months of 2020, five years of
                  training history performed best by every measure shown: it had the lowest mean
                  absolute and root mean squared errors, and the highest efficiency and correlation.
                  The twenty-year model’s negative efficiency means it did worse than predicting the
                  test-period average, while its negative correlation means its estimates tended to
                  move opposite to the observed values. For this test period, more historical data
                  did not produce a better forecast.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section id="conclusion" className="enso-paper-section enso-conclusion" data-reveal>
          <StoryHeading
            number="08"
            label="Conclusion"
            title="The network’s neighborhoods carried the clearest signal."
          />
          <div className="enso-conclusion-grid">
            <div className="enso-prose">
              <p>
                Local clustering ranked first in both 2023 and 2024. The random forest repeatedly
                drew its strongest signal from how each location’s neighbors connected to one
                another. This made neighborhood structure the project’s clearest recurring result.
              </p>
              <p>
                Among the five, ten, and twenty year models tested on the same four months of 2020,
                the five-year model had the lowest errors and the strongest correlation and
                efficiency scores. Adding more history did not improve these predictions; the
                twenty-year model performed worse than predicting the observed average. The
                five-year window was the strongest choice for this four-month test.
              </p>
              <p>
                Across three years, this work established a practical route from global temperature
                records to ENSO forecasts, identified a network feature that repeatedly mattered, and
                found a promising training window. The validation gap sets the next task: refine the
                random forest and add features that improve performance on held-out data.
              </p>
            </div>
            <div>
              <p className="section-label">The next tests</p>
              <ol>
                <li>Fine-tune the random forest parameters to improve performance on held-out data.</li>
                <li>Test additional predictive features and measure whether they improve accuracy and reliability.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="enso-paper-section source-panel-wide enso-sources" data-reveal>
          <div>
            <p className="section-label">Acknowledgements</p>
            <h2>People and support behind the research</h2>
            <p>
              I am grateful to Dr. Nishant Malik for his guidance throughout the project, and to Dr.
              Kamal Rana and Dr. Adam Giammarese for their assistance during summer 2022.
              The research was supported by the Emerson Summer Undergraduate Research Fellowship,
              RIT's College of Science, and the Honors Program.
            </p>
          </div>
            <nav className="source-links" aria-label="Research links">
            <a href={links.ensoConferenceRecord} target="_blank" rel="noreferrer">
                Research presentation at a national conference
                <span className="enso-visually-hidden"> (opens in a new tab)</span>
                <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={links.ensoAdvisorRecord} target="_blank" rel="noreferrer">
                Advisor’s research profile and publications
                <span className="enso-visually-hidden"> (opens in a new tab)</span>
                <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={links.ritResearchRecognition} target="_blank" rel="noreferrer">
                Undergraduate Research Scholar program
                <span className="enso-visually-hidden"> (opens in a new tab)</span>
                <ArrowUpRight aria-hidden="true" />
            </a>
            </nav>
        </section>

      </article>
    </main>
  );
}

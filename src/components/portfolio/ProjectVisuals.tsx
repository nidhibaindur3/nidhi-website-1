export function PrintPathVisual() {
  return (
    <figure className="system-visual print-path-visual">
      <svg viewBox="0 0 820 520" role="img" aria-labelledby="print-title print-desc">
        <title id="print-title">Prep N Print reprint restoration responsibility path</title>
        <desc id="print-desc">
          A conceptual path connecting stored label state, restoration services, label rendering,
          and physical print output. It is not Ecolab's internal architecture.
        </desc>
        <path
          className="path-line"
          d="M84 120 C220 120 200 248 340 248 S470 392 608 392 690 286 742 286"
        />
        <g className="system-node cloud-node">
          <circle cx="84" cy="120" r="58" />
          <text x="84" y="115">CLOUD</text>
          <text x="84" y="139">+ DATA</text>
        </g>
        <g className="system-node service-node">
          <rect x="280" y="188" width="120" height="120" />
          <text x="340" y="243">RESTORE +</text>
          <text x="340" y="267">QUEUES</text>
        </g>
        <g className="system-node mobile-node">
          <rect x="550" y="318" width="116" height="150" rx="30" />
          <line x1="582" y1="438" x2="634" y2="438" />
          <text x="608" y="375">LABEL</text>
          <text x="608" y="399">RENDER</text>
        </g>
        <g className="printer">
          <path d="M684 224h116v102H684z" />
          <path d="M702 190h80v58h-80zM706 326h72v82h-72z" />
          <path d="M718 350h48M718 368h36M718 386h42" />
        </g>
      </svg>
      <figcaption>Reprint restoration responsibility path — not internal architecture.</figcaption>
    </figure>
  );
}

export function EnsoVisual() {
  return (
    <figure className="system-visual enso-visual">
      <svg viewBox="0 0 820 470" role="img" aria-labelledby="enso-title enso-desc">
        <title id="enso-title">ENSO climate-network prediction pipeline</title>
        <desc id="enso-desc">
          Global surface-air temperature anomalies are regridded, converted into a correlation
          network, summarized with graph metrics, and supplied to a Random Forest that predicts the
          Oceanic Niño Index.
        </desc>
        <g className="enso-flow-lines">
          <path d="M250 190H326M503 190H584" />
          <path d="M308 176l18 14-18 14M566 176l18 14-18 14" />
        </g>
        <g className="enso-globe">
          <circle cx="145" cy="190" r="103" />
          <ellipse cx="145" cy="190" rx="48" ry="103" />
          <path d="M42 190h206M61 138h168M61 242h168M145 87v206" />
          <g className="enso-grid-nodes">
            <circle cx="74" cy="138" r="6" />
            <circle cx="117" cy="106" r="6" />
            <circle cx="171" cy="116" r="6" />
            <circle cx="216" cy="151" r="6" />
            <circle cx="93" cy="205" r="6" />
            <circle cx="151" cy="184" r="6" />
            <circle cx="205" cy="224" r="6" />
            <circle cx="122" cy="261" r="6" />
          </g>
        </g>
        <g className="enso-network">
          <path d="M355 128L407 92 468 122 485 190 453 252 383 264 338 216zM355 128L453 252M407 92L383 264M468 122L338 216M485 190L355 128M338 216L468 122M407 92L485 190" />
          <circle cx="355" cy="128" r="10" />
          <circle cx="407" cy="92" r="10" />
          <circle cx="468" cy="122" r="10" />
          <circle cx="485" cy="190" r="10" />
          <circle cx="453" cy="252" r="10" />
          <circle cx="383" cy="264" r="10" />
          <circle cx="338" cy="216" r="10" />
          <circle className="enso-feature-node" cx="423" cy="184" r="18" />
        </g>
        <g className="enso-model">
          <path d="M611 120h150v140H611z" />
          <path d="M636 225l22-28 21 13 26-53 29 36" />
          <circle cx="636" cy="225" r="5" />
          <circle cx="658" cy="197" r="5" />
          <circle cx="679" cy="210" r="5" />
          <circle cx="705" cy="157" r="5" />
          <circle cx="734" cy="193" r="5" />
        </g>
        <g className="enso-step-labels">
          <text x="42" y="345">01 / REGRID</text>
          <text x="42" y="371">GLOBAL SATA</text>
          <text x="326" y="345">02 / CONNECT</text>
          <text x="326" y="371">|CORRELATION| &gt; 0.05</text>
          <text x="584" y="345">03 / PREDICT</text>
          <text x="584" y="371">GRAPH METRICS → ONI</text>
        </g>
        <path className="enso-rule" d="M42 407H761" />
        <text className="enso-finding" x="42" y="439">LOCAL CLUSTERING EMERGED AS THE STRONGEST FEATURE</text>
      </svg>
      <figcaption>Method reconstructed from the 2023 symposium poster and 2024 project report.</figcaption>
    </figure>
  );
}

export function JasmonicVisual() {
  return (
    <figure className="system-visual jasmonic-visual">
      <svg viewBox="0 0 760 520" role="img" aria-labelledby="jas-title jas-desc">
        <title id="jas-title">Conceptual spatial biological model</title>
        <desc id="jas-desc">
          A field of cells with a changing concentration pattern, representing the research question
          of how spatial dependence affects jasmonic acid production.
        </desc>
        <defs>
          <pattern id="cells" width="72" height="62" patternUnits="userSpaceOnUse">
            <path d="M18 2h36l18 29-18 29H18L0 31z" />
          </pattern>
        </defs>
        <rect className="cell-field" x="44" y="38" width="672" height="372" fill="url(#cells)" />
        <circle className="concentration c1" cx="214" cy="214" r="112" />
        <circle className="concentration c2" cx="450" cy="172" r="82" />
        <circle className="concentration c3" cx="550" cy="314" r="122" />
        <path className="bio-arrow" d="M92 458H646M622 440l24 18-24 18" />
        <text x="92" y="446">SPATIAL DEPENDENCE</text>
      </svg>
      <figcaption>
        Conceptual model visual — not a reproduction of the unpublished equations or results.
      </figcaption>
    </figure>
  );
}

export function InflationVisual() {
  return (
    <figure className="system-visual inflation-visual">
      <svg viewBox="0 0 760 500" role="img" aria-labelledby="inflation-title inflation-desc">
        <title id="inflation-title">Conceptual relationship plot</title>
        <desc id="inflation-desc">
          Two changing series and a field of observations represent a study of relationships between
          cryptocurrency markets and forward inflation rates. The graphic does not show research
          results.
        </desc>
        <path className="axis" d="M92 52V414H704" />
        <path className="series series-a" d="M96 344C176 326 164 166 252 224s116-84 194-30 112-68 244-94" />
        <path className="series series-b" d="M96 132c92 18 112 142 202 112s112 116 198 72 112 12 194 54" />
        <g className="plot-points">
          <circle cx="170" cy="294" r="8" />
          <circle cx="236" cy="178" r="8" />
          <circle cx="318" cy="260" r="8" />
          <circle cx="398" cy="178" r="8" />
          <circle cx="474" cy="310" r="8" />
          <circle cx="552" cy="214" r="8" />
          <circle cx="636" cy="144" r="8" />
        </g>
        <text x="96" y="458">CRYPTOCURRENCY MARKETS</text>
        <text x="472" y="458">FORWARD INFLATION</text>
      </svg>
      <figcaption>Research-question visual — no outcome or correlation is implied.</figcaption>
    </figure>
  );
}

export function GraduationVisual() {
  return (
    <figure className="system-visual graduation-visual">
      <svg viewBox="0 0 760 500" role="img" aria-labelledby="grad-title grad-desc">
        <title id="grad-title">Conceptual cohort comparison</title>
        <desc id="grad-desc">
          Rows of dots diverge into uneven paths, representing a research question about graduation
          gaps. This is not a chart of actual study data.
        </desc>
        {[0, 1, 2, 3, 4].map((row) => (
          <g key={row} transform={`translate(0 ${row * 72})`}>
            {[0, 1, 2, 3, 4, 5].map((column) => (
              <circle key={column} cx={88 + column * 54} cy="78" r="13" />
            ))}
            <path d={`M420 78H${540 + row * 24}`} />
            <circle className="end-dot" cx={564 + row * 24} cy="78" r="13" />
          </g>
        ))}
        <text x="74" y="462">COHORTS</text>
        <text x="552" y="462">OUTCOMES</text>
      </svg>
      <figcaption>Research-question visual — not a chart of study data or findings.</figcaption>
    </figure>
  );
}

export function PrintPathVisual() {
  return (
    <figure className="system-visual print-path-visual">
      <svg viewBox="0 0 820 520" role="img" aria-labelledby="print-title print-desc">
        <title id="print-title">Prep N Print engineering responsibility map</title>
        <desc id="print-desc">
          A conceptual path connecting cloud and data, application services, mobile rendering, and
          physical print output. It is not Ecolab's internal architecture.
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
          <text x="340" y="243">APIs +</text>
          <text x="340" y="267">QUEUES</text>
        </g>
        <g className="system-node mobile-node">
          <rect x="550" y="318" width="116" height="150" rx="30" />
          <line x1="582" y1="438" x2="634" y2="438" />
          <text x="608" y="375">MOBILE</text>
          <text x="608" y="399">RENDER</text>
        </g>
        <g className="printer">
          <path d="M684 224h116v102H684z" />
          <path d="M702 190h80v58h-80zM706 326h72v82h-72z" />
          <path d="M718 350h48M718 368h36M718 386h42" />
        </g>
      </svg>
      <figcaption>Responsibility map — not internal architecture.</figcaption>
    </figure>
  );
}

export function EnsoVisual() {
  const nodes = [
    [80, 170],
    [155, 88],
    [210, 210],
    [292, 118],
    [360, 238],
    [442, 78],
    [498, 184],
    [590, 112],
    [650, 226],
    [725, 142],
  ];

  return (
    <figure className="system-visual enso-visual">
      <svg viewBox="0 0 820 470" role="img" aria-labelledby="enso-title enso-desc">
        <title id="enso-title">Conceptual climate network and time series</title>
        <desc id="enso-desc">
          Connected observation points sit above a climate signal, illustrating the combination of
          complex-network structure and time-series analysis.
        </desc>
        <g className="network-links">
          <path d="M80 170L155 88 210 210 292 118 360 238 442 78 498 184 590 112 650 226 725 142" />
          <path d="M80 170L210 210 360 238 498 184 650 226M155 88L292 118 442 78 590 112 725 142M210 210L292 118M442 78L498 184M590 112L650 226" />
        </g>
        <g className="network-nodes">
          {nodes.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="9" />
          ))}
        </g>
        <path
          className="signal"
          d="M58 356C94 356 96 306 132 306s37 79 73 79 37-52 73-52 37-92 73-92 37 139 73 139 37-50 73-50 37 29 73 29 37-97 73-97 37 75 73 75 37-26 73-26"
        />
        <text x="58" y="430">75 YEARS OF OBSERVATIONS</text>
        <text x="612" y="430">12-MONTH HORIZON</text>
      </svg>
      <figcaption>
        Conceptual method visual: connected climate observations + time-dependent signal.
      </figcaption>
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

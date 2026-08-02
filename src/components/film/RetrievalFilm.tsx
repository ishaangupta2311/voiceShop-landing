"use client";

import { FilmFrame } from "./FilmFrame";
import { ProductTile, catalog } from "./parts";
import { useFilm } from "./useFilm";
import styles from "./film.module.css";

const STEPS = [1400, 1200, 1200, 1200, 1400, 1600, 2200, 2600] as const;

const CAPTIONS = [
  "A shopper asks for a benefit, not a product name.",
  "Retrieval starts from a canonical projection of your catalog — published products only.",
  "Exact catalog identities are matched first, so a real product name always outranks a guess.",
  "Dense vector candidates are over-retrieved, then merged with the lexical hits.",
  "Hard constraints are applied as filters — excluded before anything is shown.",
  "Survivors are re-fetched from Shopify: current variants, prices, currency, availability.",
  "Eight verified matches. Nothing draft, archived, unpublished, or stale can appear.",
  "And when there is no real match, it says so instead of showing something unrelated.",
];

const PIPELINE = [
  ["Canonical projection", "Published-only ingest, versioned index namespace"],
  ["Exact + fuzzy identity", "Catalog names outrank semantic alternatives"],
  ["Dense candidates", "Over-retrieved, then merged and reranked"],
  ["Structured filters", "Price, type, vendor, tag, availability"],
  ["Live hydration", "Re-fetched from Shopify before render"],
] as const;

const REJECTED = [
  "draft product",
  "archived",
  "out of price range",
  "stale generation",
];

export function RetrievalFilm({ accent }: { accent?: string }) {
  const { ref, step, still } = useFilm<HTMLDivElement>(STEPS, { restStep: 6 });

  return (
    <div ref={ref}>
      <FilmFrame
        chrome="panel"
        captions={CAPTIONS}
        step={step}
        still={still}
        accent={accent}
      >
        <div className={styles.retrieval}>
          <div className={styles.retrievalQuery}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="6.4" stroke="currentColor" strokeWidth="1.9" />
              <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
            </svg>
            <em>“something for focus, nothing over $20”</em>
          </div>

          <div className={styles.pipeline}>
            <div className={styles.pipeSteps}>
              {PIPELINE.map(([title, detail], index) => (
                <div
                  key={title}
                  className={styles.pipeStep}
                  data-on={step >= index + 1 ? "true" : undefined}
                >
                  <i>✓</i>
                  <span>
                    <b>{title}</b>
                    <span>{detail}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.pipeOut}>
              <div className={styles.pipeOutHead}>
                <strong>
                  {step >= 6 ? "8 verified catalog matches" : "Candidates"}
                </strong>
                <span>
                  {step >= 5 ? "hydrated from Shopify" : "ranked, not yet shown"}
                </span>
              </div>

              <div className={styles.rejected}>
                {REJECTED.map((label, index) => (
                  <span
                    key={label}
                    className={styles.rejectedChip}
                    data-in={step >= 4 ? "true" : undefined}
                    style={{ transitionDelay: `${index * 70}ms` }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className={styles.grid}>
                {catalog.map((product, index) => (
                  <ProductTile
                    key={product.name}
                    {...product}
                    index={index}
                    shown={step >= 5}
                    hydrating={step === 5}
                  />
                ))}
              </div>

              <div className={styles.honest} data-in={step >= 7 ? "true" : undefined}>
                <strong>No exact catalog match for “saffron gummies.”</strong>
                Here are 3 related products you can explore — a search failure
                degrades to an honest empty state, never to unrelated products.
              </div>
            </div>
          </div>
        </div>
      </FilmFrame>
    </div>
  );
}

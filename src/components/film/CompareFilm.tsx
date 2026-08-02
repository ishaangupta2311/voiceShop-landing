"use client";

import { FilmFrame, ToolStatus } from "./FilmFrame";
import { Bottle } from "./parts";
import { useFilm } from "./useFilm";
import styles from "./film.module.css";

const STEPS = [1600, 1300, 1700, 2600, 2600, 2400] as const;

const CAPTIONS = [
  "“What's the difference between…” is one question, not three page visits.",
  "One tool call — no navigating through each product page to collect facts.",
  "Two to eight products line up side by side, verified from the catalog.",
  "Differences first: only the rows where the products actually disagree.",
  "All details is one tap away when the shopper wants the full table.",
  "It ends on the thing that decides it, not on a shrug.",
];

const PRODUCTS = [
  { name: "Calm Powder", price: "$13.00" },
  { name: "Uplift Capsules", price: "$12.00" },
  { name: "Focus Blend", price: "$16.00" },
];

/** `diff: true` rows are the ones surfaced by the Differences view. */
const ROWS = [
  { label: "Price", values: ["$13.00", "$12.00", "$16.00"], diff: true },
  { label: "Format", values: ["Loose powder", "Capsules", "Loose powder"], diff: true },
  { label: "Onset", values: ["15–20 min", "35–45 min", "20–25 min"], diff: true },
  { label: "Caffeine", values: ["None", "None", "None"], diff: false },
  { label: "Availability", values: ["In stock", "In stock", "In stock"], diff: false },
  { label: "Serving", values: ["2.5g scoop", "2 capsules", "3g scoop"], diff: true },
];

const DIFF_COUNT = ROWS.filter((row) => row.diff).length;

export function CompareFilm({ accent }: { accent?: string }) {
  const { ref, step, still } = useFilm<HTMLDivElement>(STEPS, { restStep: 3 });

  const showAll = step >= 4;
  const rowsVisible = step >= 3;

  return (
    <div ref={ref}>
      <FilmFrame
        chrome="panel"
        captions={CAPTIONS}
        step={step}
        still={still}
        accent={accent}
      >
        <div className={styles.compare}>
          <div className={styles.compareHead}>
            <div>
              <div className={styles.stageKicker}>
                Side-by-side, verified from the catalog
              </div>
              <h4 className={styles.stageTitle}>Compare your options</h4>
            </div>
            <div className={styles.compareToggles}>
              <span className={styles.compareToggle} data-on={!showAll ? "true" : undefined}>
                Differences ({DIFF_COUNT})
              </span>
              <span className={styles.compareToggle} data-on={showAll ? "true" : undefined}>
                All details
              </span>
            </div>
          </div>

          {step === 1 && <ToolStatus label="Lining up the differences…" />}

          <div className={styles.compareGrid}>
            <div className={styles.compareCorner} />
            {PRODUCTS.map((product, index) => (
              <div
                key={product.name}
                className={styles.compareCard}
                data-in={step >= 2 ? "true" : undefined}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <i>
                  <Bottle />
                </i>
                <div>
                  <strong>{product.name}</strong>
                  <em>{product.price} · In stock</em>
                </div>
              </div>
            ))}

            {ROWS.map((row) => (
              <div
                key={row.label}
                className={styles.compareRow}
                data-hidden={
                  !rowsVisible || (!showAll && !row.diff) ? "true" : undefined
                }
              >
                <div className={styles.compareLabel}>{row.label}</div>
                {row.values.map((value, index) => (
                  <div
                    key={`${row.label}-${index}`}
                    className={styles.compareValue}
                    data-diff={row.diff ? "true" : undefined}
                  >
                    {value}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className={styles.compareTakeaway}>
            {step >= 5 ? (
              <>
                <strong>If onset speed is what matters,</strong> Calm Powder is
                the fastest of the three and the cheapest per serving. Uplift
                Capsules trade 20 minutes for not having to measure anything.
              </>
            ) : (
              <>
                Three verified products lined up by the details that can
                actually change the decision.
              </>
            )}
          </p>
        </div>
      </FilmFrame>
    </div>
  );
}

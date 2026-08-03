"use client";

import { FilmFrame, ToolStatus } from "./FilmFrame";
import { Bottle, Composer, Msg, Panel } from "./parts";
import { useFilm } from "./useFilm";
import styles from "./film.module.css";

const STEPS = [1900, 1400, 1700, 3400, 2800, 2600] as const;

const CAPTIONS = [
  "“What's the difference between…” is the question that stalls the most carts.",
  "Answered in one move — no navigating through each product page to collect facts.",
  "Two to eight products line up side by side, verified from the catalog.",
  "It says what actually differs, and shows only the rows where they disagree.",
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

/** What the model says back, in the order it says it. */
const SPOKEN_DIFFS = [
  ["Onset", "15–20 min vs 35–45 vs 20–25."],
  ["Format", "Powder, capsules, powder."],
  ["Price", "$12–$16; the capsules are cheapest."],
  ["Serving", "2.5g, 2 capsules, 3g."],
];

export function CompareFilm({ accent }: { accent?: string }) {
  const { ref, step, still } = useFilm<HTMLDivElement>(STEPS, { restStep: 3 });

  const showAll = step >= 4;
  const rowsVisible = step >= 3;

  return (
    <div ref={ref}>
      <FilmFrame
        chrome="browser"
        url="northwind.myshopify.com/collections/all"
        captions={CAPTIONS}
        step={step}
        still={still}
        accent={accent}
        tall
      >
        <div className={styles.compareSplit}>
          <div className={styles.compare}>
            <div className={styles.compareHead}>
              <div>
                <div className={styles.stageKicker}>
                  Side-by-side, verified from the catalog
                </div>
                <h4 className={styles.stageTitle}>Compare your options</h4>
              </div>
              <div className={styles.compareToggles}>
                <span
                  className={styles.compareToggle}
                  data-on={!showAll ? "true" : undefined}
                >
                  Differences ({DIFF_COUNT})
                </span>
                <span
                  className={styles.compareToggle}
                  data-on={showAll ? "true" : undefined}
                >
                  All details
                </span>
              </div>
            </div>

            <div className={styles.compareScroll}>
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

          <Panel
            status="Voice"
            footer={<Composer state={step >= 1 ? "listening" : "idle"} />}
          >
            <Msg from="agent" shown>
              Those three are the closest matches for focus.
            </Msg>
            <Msg from="shopper" shown={step >= 0} voice>
              what&apos;s the difference between these three?
            </Msg>

            {step === 1 && <ToolStatus label="Lining up the differences…" />}

            <Msg from="agent" shown={step >= 3} wide>
              Four things actually differ:
              <ul className={styles.diffList}>
                {SPOKEN_DIFFS.map(([label, detail], index) => (
                  <li
                    key={label}
                    data-in={step >= 3 ? "true" : undefined}
                    style={{ transitionDelay: `${200 + index * 160}ms` }}
                  >
                    <b>{label}</b>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Msg>

            <Msg from="agent" shown={step >= 5}>
              Caffeine and stock are identical.
            </Msg>
          </Panel>
        </div>
      </FilmFrame>
    </div>
  );
}

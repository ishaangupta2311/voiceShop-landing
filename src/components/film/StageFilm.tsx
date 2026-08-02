"use client";

import { useState } from "react";
import { FilmFrame, ToolStatus } from "./FilmFrame";
import { Bottle, Msg, Panel, ProductTile, StoreNav, catalog } from "./parts";
import { useFilm } from "./useFilm";
import styles from "./film.module.css";

const STEPS = [1500, 1400, 1400, 2400, 1400, 1900, 1700, 1600, 2800] as const;

const CAPTIONS = [
  "The shopper is on an ordinary collection page in your own theme.",
  "They ask a broad question. Broad intent never yanks anyone onto a product page.",
  "The widget names the tool it is running while it runs it.",
  "The assistant takes the main content area — app-owned, so it needs nothing from your theme's markup.",
  "The filters it applied are visible and real, not decoration.",
  "Narrowing the result set happens in place. The conversation continues underneath.",
  "Now the intent is one identifiable product — that is the bar for committing to a page.",
  "It soft-navigates to the real product page. No reload, no lost conversation.",
  "And it opens the section that was actually asked about, using the theme's own accordion.",
];

const THEMES = [
  { name: "Violet", accent: "#6a3fd4" },
  { name: "Forest", accent: "#1d7a54" },
  { name: "Cherry", accent: "#cf2549" },
  { name: "Navy", accent: "#1f4f9c" },
] as const;

const FILTERS = ["Under $20", "Powder", "In stock", "Focus"];

const SECTIONS = [
  ["Description", "A daytime blend built around L-theanine and lion's mane."],
  ["Ingredients", "Lion's mane 500mg, L-theanine 200mg, rhodiola 100mg. No added caffeine — nothing in it acts as an evening stimulant."],
  ["Shipping", "Ships in 1–2 business days. Free over $45."],
] as const;

export function StageFilm() {
  const [themeIndex, setThemeIndex] = useState(0);
  const { ref, step, still } = useFilm<HTMLDivElement>(STEPS, { restStep: 3 });
  const theme = THEMES[themeIndex];

  const stageIn = step >= 2;
  const pdpIn = step >= 7;
  const narrowed = step >= 5;
  const shown = narrowed ? catalog.slice(0, 4) : catalog;

  return (
    <div ref={ref}>
      <div className={styles.themeRow}>
        <span className={styles.themeLabel}>
          It repaints itself to match the store — try it:
        </span>
        <span className={styles.swatches} role="group" aria-label="Demo store theme">
          {THEMES.map((candidate, index) => (
            <button
              key={candidate.name}
              type="button"
              className={styles.swatch}
              aria-pressed={index === themeIndex}
              aria-label={`${candidate.name} store theme`}
              onClick={() => setThemeIndex(index)}
            >
              <span style={{ background: candidate.accent }} />
            </button>
          ))}
        </span>
      </div>

      <FilmFrame
        chrome="browser"
        url={
          pdpIn
            ? "northwind.myshopify.com/products/focus-blend"
            : "northwind.myshopify.com/collections/all"
        }
        captions={CAPTIONS}
        step={step}
        still={still}
        accent={theme.accent}
        tall
      >
        <div className={styles.stageWrap}>
          {/* The merchant's own theme, underneath everything */}
          <div className={styles.store}>
            <StoreNav cart={1} />
            <div className={styles.storeScroll}>
              <div className={styles.grid}>
                {catalog.slice(0, 8).map((product, index) => (
                  <ProductTile key={product.name} {...product} index={index} shown />
                ))}
              </div>
            </div>
          </div>

          {/* The app-owned storefront stage, mounted over the theme */}
          <div className={styles.stageOverlay} data-in={stageIn ? "true" : undefined}>
            <div className={styles.stageToolbar}>
              <div>
                <div className={styles.stageKicker}>
                  Curated live by your shopping assistant
                </div>
                <h4 className={styles.stageTitle}>something for focus</h4>
                <p className={styles.stageSummary}>
                  {shown.length} verified catalog matches — select one and I&apos;ll
                  take you there.
                </p>
              </div>
              <span className={styles.stageClose}>Back to store</span>
            </div>

            <div className={styles.stageFilters}>
              {FILTERS.map((label, index) => (
                <span
                  key={label}
                  className={styles.stageFilter}
                  data-in={step >= 4 ? "true" : undefined}
                  data-on={narrowed && index < 2 ? "true" : undefined}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className={styles.grid}>
              {shown.map((product, index) => (
                <ProductTile
                  key={product.name}
                  {...product}
                  index={index}
                  shown={step >= 3}
                  focus={step === 6 && index === 0}
                />
              ))}
            </div>
          </div>

          {/* The real product page, reached by soft navigation */}
          <div className={styles.pdp} data-in={pdpIn ? "true" : undefined}>
            <div className={styles.pdpArt}>
              <Bottle />
            </div>
            <div className={styles.pdpBody}>
              <h4>Focus Blend</h4>
              <p className={styles.pdpPrice}>$16.00 · In stock</p>
              <div className={styles.accordion}>
                {SECTIONS.map(([title, body], index) => (
                  <div
                    key={title}
                    className={styles.accRow}
                    data-open={step >= 8 && index === 1 ? "true" : undefined}
                  >
                    <div className={styles.accHead}>
                      {title}
                      <span>⌄</span>
                    </div>
                    <div className={styles.accBody}>
                      <div>
                        <p>{body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Panel>
            <Msg from="agent" shown>
              Hi! How can I help you today?
            </Msg>
            <Msg from="shopper" shown={step >= 1} voice>
              what do you have for focus?
            </Msg>
            {step === 2 && <ToolStatus label="Finding the best matches…" />}
            <Msg from="agent" shown={step >= 3}>
              Showing them on the page now — eight matches, all in stock unless
              marked.
            </Msg>
            <Msg from="shopper" shown={step >= 6} voice>
              open the focus one — what&apos;s in it?
            </Msg>
            {step === 6 && <ToolStatus label="Opening the product page…" />}
            <Msg from="agent" shown={step >= 8}>
              Opened its ingredients: lion&apos;s mane, L-theanine and rhodiola.
              No added caffeine.
            </Msg>
          </Panel>
        </div>
      </FilmFrame>
    </div>
  );
}

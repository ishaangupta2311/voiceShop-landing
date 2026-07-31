"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./store-demo.module.css";

export type StoreTheme = {
  name: string;
  accent: string;
  soft: string;
  bar: string;
};

export const storeThemes: StoreTheme[] = [
  { name: "Violet", accent: "#6a3fd4", soft: "#f0eafd", bar: "#5b32c4" },
  { name: "Forest", accent: "#1d7a54", soft: "#e4f2ec", bar: "#166046" },
  { name: "Cherry", accent: "#cf2549", soft: "#fce7ec", bar: "#b01d3d" },
  { name: "Navy", accent: "#1f4f9c", soft: "#e6edf8", bar: "#173d7d" },
];

const products = [
  { name: "Uplift Powder", price: "$13.00–$120.00", tone: "a", sold: false },
  { name: "Calm Capsules", price: "$12.00–$160.00", tone: "b", sold: true },
  { name: "Calm Powder", price: "$13.00–$120.00", tone: "c", sold: true },
  { name: "Uplift Capsules", price: "$12.00–$160.00", tone: "d", sold: false },
  { name: "Euphoria Powder", price: "$14.00–$130.00", tone: "e", sold: false },
  { name: "Euphoria Capsules", price: "$12.00–$160.00", tone: "f", sold: false },
  { name: "Train Wreck Powder", price: "$13.00–$120.00", tone: "g", sold: false },
  { name: "Extract Seltzer", price: "$6.00", tone: "h", sold: false },
];

function ProductPopArt({ tone }: { tone: string }) {
  const clipId = `product-pop-${tone}`;

  return (
    <svg
      className={styles.productPop}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <path
            className={styles.svgClip}
            d="M9 53C8 36 21 17 40 14c14-3 23 4 34 12 11 8 20 19 17 35-3 17-18 28-35 29-18 2-36-3-43-18-3-6-4-12-4-19Z"
          />
        </clipPath>
      </defs>

      <g className={styles.popLayer} clipPath={`url(#${clipId})`}>
        <rect className={styles.svgField} width="100" height="100" />
        <circle className={styles.svgHalo} cx="50" cy="48" r="31" />
        <g className={styles.svgProduct}>
          <rect x="40" y="24" width="20" height="10" rx="3" />
          <path d="M37 39c0-4 3-7 7-7h12c4 0 7 3 7 7v37c0 5-4 8-8 8H45c-4 0-8-3-8-8V39Z" />
          <path className={styles.svgLabel} d="M41 51h18v20H41z" />
          <path className={styles.svgWave} d="M43 62c5-6 9 6 15 0" />
        </g>
        <path className={styles.svgOrbit} d="M12 57c14-18 28-28 47-29 12-1 23 3 31 12" />
      </g>

      <path className={styles.svgSpark} d="M17 28v8M13 32h8M81 67v10M76 72h10" />
      <circle className={styles.svgDot} cx="78" cy="25" r="2" />
    </svg>
  );
}

/**
 * High-fidelity recreation of the VoiceShop widget running on a live Shopify
 * storefront: the assistant has taken over the collection page and is holding
 * a conversation in the docked panel. `showThemes` exposes the theme-adaptation
 * story as an interactive control.
 */
export function StoreDemo({
  showThemes = true,
  compact = false,
  className = "",
}: {
  showThemes?: boolean;
  compact?: boolean;
  className?: string;
}) {
  const [themeIndex, setThemeIndex] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const theme = storeThemes[themeIndex];

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    if (typeof IntersectionObserver === "undefined") {
      grid.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          grid.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.wrap} ${className}`}>
      {showThemes && (
        <div className={styles.themeRow}>
          <span className={styles.themeLabel}>
            It repaints itself to match the store:
          </span>
          <span
            className={styles.swatches}
            role="group"
            aria-label="Demo store theme"
          >
            {storeThemes.map((candidate, index) => (
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
      )}

      <div
        className={`${styles.browser} ${compact ? styles.compact : ""}`}
        style={
          {
            "--accent": theme.accent,
            "--soft": theme.soft,
            "--bar": theme.bar,
          } as CSSProperties
        }
      >
        <div className={styles.chrome} aria-hidden="true">
          <span className={styles.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.omnibox}>
            your-store.myshopify.com/collections/all
          </span>
        </div>

        <div className={styles.split}>
          <div className={styles.store} aria-label="Storefront curated by VoiceShop">
            <div className={styles.announce}>30-day satisfaction guarantee</div>

            <div className={styles.storeNav}>
              <span className={styles.storeLogo}>northwind</span>
              <span className={styles.storeLinks}>
                <em className={styles.navPill}>Shop All</em>
                <em>Home</em>
                <em>Catalog</em>
                <em>Contact</em>
              </span>
              <span className={styles.storeCart}>
                <i className={styles.cartCount}>11</i>
              </span>
            </div>

            <div className={styles.collectionHead}>
              <div>
                <p className={styles.curatedBy}>
                  Curated live by your shopping assistant
                </p>
                <h3 className={styles.collectionTitle}>kratom</h3>
                <p className={styles.collectionSub}>
                  8 verified catalog matches — select one and I&apos;ll take you
                  there.
                </p>
              </div>
              <span className={styles.backToStore}>Back to store</span>
            </div>

            <div
              ref={gridRef}
              className={styles.grid}
            >
              {products.slice(0, compact ? 4 : 8).map((product, index) => (
                <div
                  className={styles.card}
                  key={product.name}
                  style={{ "--product-index": index } as CSSProperties}
                >
                  <span
                    className={styles.cardArt}
                    data-tone={product.tone}
                    aria-hidden="true"
                  >
                    <ProductPopArt tone={product.tone} />
                    <i className={styles.openIcon}>↗</i>
                  </span>
                  <div className={styles.cardFoot}>
                    <strong>{product.name}</strong>
                    <span className={styles.cardMeta}>
                      <em>{product.price}</em>
                      {product.sold ? (
                        <b className={styles.soldOut}>Sold out</b>
                      ) : (
                        <b className={styles.addToCart}>Add to cart</b>
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.panel} aria-label="VoiceShop conversation panel">
            <div className={styles.panelHead}>
              <span className={styles.panelName}>
                <i className={styles.online} />
                VoiceShop
              </span>
              <span className={styles.panelIcons} aria-hidden="true">
                <i>✎</i>
                <i>✕</i>
              </span>
            </div>

            <div className={styles.thread}>
              <p className={`${styles.msg} ${styles.fromAgent}`}>
                Hi! How can I help you today?
              </p>
              <p className={`${styles.msg} ${styles.fromShopper}`}>hi</p>
              <p className={`${styles.msg} ${styles.fromAgent}`}>
                Welcome back! How can I help you today?
              </p>
              <p className={`${styles.msg} ${styles.fromShopper}`}>
                show me kratom products
              </p>

              <p className={styles.shownLabel}>
                2 of 8 shown here <em>for “kratom”</em>
              </p>
              <div className={styles.panelCards}>
                <span className={styles.panelCard}>
                  <i data-tone="a" />
                  <b>Uplift Powder</b>
                  <em className={styles.panelAdd}>Add</em>
                </span>
                <span className={styles.panelCard}>
                  <i data-tone="b" />
                  <b>Calm Capsules</b>
                  <em className={styles.panelSold}>Sold out</em>
                </span>
              </div>

              <p className={`${styles.msg} ${styles.fromAgent}`}>
                Here are our available kratom products, including powders,
                capsules, and seltzers — showing them now so you can browse.
              </p>
              <p className={`${styles.msg} ${styles.fromShopper}`}>
                what&apos;s this one for?
              </p>
              <p className={`${styles.msg} ${styles.fromAgent}`}>
                The Uplift Powder you&apos;re looking at is the energizing white
                vein blend. And with the seltzer already in your cart, code{" "}
                <strong>BUNDLE10</strong> applies.
              </p>
            </div>

            <div className={styles.composer} aria-hidden="true">
              <span className={styles.composerField}>Type a message…</span>
              <span className={styles.mic}>
                <i />
              </span>
              <span className={styles.send}>➤</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

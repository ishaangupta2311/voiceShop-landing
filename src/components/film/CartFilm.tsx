"use client";

import { FilmFrame, ToolStatus } from "./FilmFrame";
import { Composer, Msg, Panel, StoreNav } from "./parts";
import { useFilm } from "./useFilm";
import styles from "./film.module.css";

const STEPS = [1500, 1400, 1400, 1300, 1900, 2600, 2400] as const;

const CAPTIONS = [
  "One seltzer is already in the cart from an earlier visit.",
  "“Add two” mid-sentence — no clicking back to the product page.",
  "Live availability is checked against the verified variant before anything is added.",
  "The cart is updated through the store's own cart, not a copy of it.",
  "The badge moves. It is the merchant's real cart, so checkout is unchanged.",
  "It surfaces the discount that pairs with what is already in there.",
  "Remove, change quantity, or view the cart — all the same tool, all by voice.",
];

const LINES = [
  ["Extract Seltzer", "1 × $6.00"],
  ["Focus Blend", "2 × $16.00"],
];

export function CartFilm({ accent }: { accent?: string }) {
  const { ref, step, still } = useFilm<HTMLDivElement>(STEPS, { restStep: 5 });

  const buttonState = step === 2 ? "adding" : step >= 3 ? "added" : "idle";
  const cartCount = step >= 3 ? 3 : 1;

  return (
    <div ref={ref}>
      <FilmFrame
        chrome="browser"
        url="northwind.myshopify.com/products/focus-blend"
        captions={CAPTIONS}
        step={step}
        still={still}
        accent={accent}
      >
        <div className={styles.cartSplit}>
          <div className={styles.store}>
            <StoreNav cart={cartCount} bump={step === 3} />
            <div className={styles.cartMain}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  <h4 className={styles.stageTitle} style={{ margin: 0 }}>
                    Focus Blend
                  </h4>
                  <p className={styles.stageSummary}>
                    $16.00 ·{" "}
                    <span className={`${styles.tag} ${styles.tagStock}`}>
                      {step >= 2 ? "In stock — 12 left" : "In stock"}
                    </span>
                  </p>
                </div>
                <span className={styles.cartBtn} data-state={buttonState}>
                  {buttonState === "adding"
                    ? "Adding…"
                    : buttonState === "added"
                      ? "Added"
                      : "Add to cart"}
                </span>
              </div>

              {step === 2 && <ToolStatus label="Checking live availability…" />}

              <div className={styles.drawer}>
                {LINES.map(([name, qty], index) => (
                  <div
                    key={name}
                    className={styles.drawerLine}
                    data-in={
                      (index === 0 ? step >= 0 : step >= 4) ? "true" : undefined
                    }
                    style={{ transitionDelay: `${index * 90}ms` }}
                  >
                    <i />
                    <b>{name}</b>
                    <span>{qty}</span>
                  </div>
                ))}
                <div className={styles.drawerTotal}>
                  <span>Subtotal</span>
                  <span>{step >= 4 ? "$38.00" : "$6.00"}</span>
                </div>
              </div>

              <div
                className={styles.discount}
                data-in={step >= 5 ? "true" : undefined}
              >
                <code>BUNDLE10</code>
                Applies because a seltzer is already in the cart — 10% off the
                whole order.
              </div>
            </div>
          </div>

          <Panel
            status="Voice"
            footer={<Composer state={step >= 1 ? "listening" : "idle"} />}
          >
            <Msg from="agent" shown>
              That&apos;s the daytime blend — no evening stimulant.
            </Msg>
            <Msg from="shopper" shown={step >= 1} voice>
              add two of those
            </Msg>
            {step === 3 && <ToolStatus label="Updating your cart…" />}
            <Msg from="agent" shown={step >= 4}>
              Added two. Your subtotal is $38.00.
            </Msg>
            <Msg from="agent" shown={step >= 5}>
              Since you already have a seltzer in there, code{" "}
              <strong>BUNDLE10</strong> applies — want me to note it?
            </Msg>
            <Msg from="shopper" shown={step >= 6} voice>
              actually make it one
            </Msg>
          </Panel>
        </div>
      </FilmFrame>
    </div>
  );
}

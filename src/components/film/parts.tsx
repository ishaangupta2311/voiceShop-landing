import type { CSSProperties, ReactNode } from "react";
import styles from "./film.module.css";

/** The demo catalog. Kept deliberately mundane — it is a stand-in for a real
 *  store's products, not a showcase of invented brands. */
export const catalog = [
  { name: "Uplift Powder", price: "$13.00", stock: "In stock" },
  { name: "Calm Capsules", price: "$12.00", stock: "Sold out" },
  { name: "Calm Powder", price: "$13.00", stock: "In stock" },
  { name: "Uplift Capsules", price: "$12.00", stock: "In stock" },
  { name: "Euphoria Powder", price: "$14.00", stock: "In stock" },
  { name: "Focus Blend", price: "$16.00", stock: "In stock" },
  { name: "Night Tincture", price: "$21.00", stock: "In stock" },
  { name: "Extract Seltzer", price: "$6.00", stock: "In stock" },
] as const;

export function Bottle() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="15" y="4" width="10" height="6" rx="2" fill="currentColor" opacity=".55" />
      <path
        d="M12 15c0-3 2.4-5 5.4-5h5.2c3 0 5.4 2 5.4 5v16c0 3-2.4 5-5.4 5h-5.2c-3 0-5.4-2-5.4-5V15Z"
        fill="currentColor"
        opacity=".2"
      />
      <path
        d="M12 15c0-3 2.4-5 5.4-5h5.2c3 0 5.4 2 5.4 5v16c0 3-2.4 5-5.4 5h-5.2c-3 0-5.4-2-5.4-5V15Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect x="16" y="19" width="8" height="9" rx="1.5" fill="currentColor" opacity=".5" />
      <path d="M17 24.5c2-2.6 4-.4 6-2.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" />
      <path
        d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Storefront top bar: announcement, nav, and the cart badge that bumps when
 *  the agent adds something. */
export function StoreNav({ cart, bump }: { cart: number; bump?: boolean }) {
  return (
    <>
      <div className={styles.storeBar}>30-day satisfaction guarantee</div>
      <div className={styles.storeNav}>
        <span className={styles.storeLogo}>northwind</span>
        <span className={styles.storeLinks}>
          <span>Shop all</span>
          <span>Catalog</span>
          <span>About</span>
          <span>Contact</span>
        </span>
        <span className={styles.storeCart}>
          Cart <b data-bump={bump ? "true" : undefined}>{cart}</b>
        </span>
      </div>
    </>
  );
}

export function ProductTile({
  name,
  price,
  stock,
  index,
  shown,
  hydrating,
  focus,
}: {
  name: string;
  price: string;
  stock: string;
  index: number;
  shown: boolean;
  hydrating?: boolean;
  focus?: boolean;
}) {
  const sold = stock === "Sold out";
  return (
    <div
      className={styles.tile}
      data-in={shown ? "true" : undefined}
      data-focus={focus ? "true" : undefined}
      style={{ transitionDelay: `${index * 55}ms` } as CSSProperties}
    >
      <span className={styles.tileArt}>
        <Bottle />
      </span>
      <span className={styles.tileFoot}>
        <strong>{name}</strong>
        <span className={styles.tileMeta}>
          <span
            className={styles.tilePrice}
            data-hydrating={hydrating ? "true" : undefined}
          >
            {hydrating ? "$00.00" : price}
          </span>
          <span className={`${styles.tag} ${sold ? styles.tagSold : styles.tagAdd}`}>
            {sold ? "Sold out" : "Add"}
          </span>
        </span>
      </span>
    </div>
  );
}

export function Panel({
  children,
  status,
  footer,
}: {
  children: ReactNode;
  status?: string;
  /** Rendered below the thread, where the widget's composer actually sits. */
  footer?: ReactNode;
}) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <span>VoiceShop</span>
        <em>
          <span className={styles.online} />
          {status ?? "Live"}
        </em>
      </div>
      <div className={styles.thread}>{children}</div>
      {footer}
    </div>
  );
}

export function Msg({
  from,
  shown,
  voice,
  children,
}: {
  from: "agent" | "shopper";
  shown: boolean;
  voice?: boolean;
  children: ReactNode;
}) {
  return (
    <p
      className={`${styles.msg} ${
        from === "agent" ? styles.fromAgent : styles.fromShopper
      } ${voice ? styles.msgVoice : ""}`}
      data-in={shown ? "true" : undefined}
    >
      {children}
    </p>
  );
}

export function Composer({ state }: { state: string }) {
  return (
    <div className={styles.composer}>
      <span className={styles.composerField}>Type a message…</span>
      <span className={styles.mic} data-state={state}>
        <MicIcon />
      </span>
    </div>
  );
}

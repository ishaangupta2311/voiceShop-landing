import { Reveal, VoiceGlyph, WaitlistForm } from "@/components/shared";
import styles from "./ripple.module.css";

const system = [
  {
    number: "01",
    title: "Page context",
    body: "It knows what's on screen before it answers — product, variant, price.",
  },
  {
    number: "02",
    title: "Catalog search",
    body: "Every match comes from the published catalog. Broad browsing or one exact item.",
  },
  {
    number: "03",
    title: "Storefront response",
    body: "The main surface changes to show the answer. No links to chase.",
  },
  {
    number: "04",
    title: "Cart actions",
    body: "Validated add and remove, grounded in the latest cart context.",
  },
];

export default function Ripple() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>
          <VoiceGlyph className={styles.brandGlyph} />
          VoiceShop
        </span>
        <a className={styles.headerCta} href="#ripple-waitlist">
          Join the waitlist
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="ripple-title">
          <div className={styles.ripples} aria-hidden="true">
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.center}>
              <VoiceGlyph className={styles.centerGlyph} />
            </span>
            <span className={`${styles.chip} ${styles.chipOne}`}>
              Runner · in stock
            </span>
            <span className={`${styles.chip} ${styles.chipTwo}`}>
              Tote · two colors
            </span>
            <span className={`${styles.chip} ${styles.chipThree}`}>
              Cart · updated ✓
            </span>
          </div>

          <h1 id="ripple-title">
            One voice moves
            <br />
            the whole store.
          </h1>
          <p className={styles.lede}>
            VoiceShop is a voice-first AI sales agent for Shopify. A shopper
            speaks once — and the ripple reaches the page, the catalog, and
            the cart.
          </p>
          <a className={styles.primaryCta} href="#ripple-waitlist">
            Join the waitlist
          </a>
        </section>

        <section
          className={styles.proof}
          aria-labelledby="ripple-proof-title"
        >
          <Reveal>
            <h2 id="ripple-proof-title">Say it. See it.</h2>
          </Reveal>
          <div className={styles.proofPanel}>
            <Reveal className={styles.said} delay={80}>
              <span className={styles.saidLabel}>Spoken</span>
              <p>“Minimal white sneakers, size 10, under $120.”</p>
            </Reveal>
            <span className={styles.proofFlow} aria-hidden="true" />
            <Reveal className={styles.shelf} delay={200}>
              <span className={styles.shelfLabel}>
                The storefront, one moment later
              </span>
              <div className={styles.tiles}>
                <div className={styles.tile}>
                  <span className={styles.tileArt} />
                  <strong>Court Low</strong>
                  <small>from the live catalog</small>
                </div>
                <div className={styles.tile}>
                  <span className={`${styles.tileArt} ${styles.tileArtAlt}`} />
                  <strong>Daily Runner</strong>
                  <small>size 10 · available</small>
                </div>
                <div className={styles.tile}>
                  <span className={`${styles.tileArt} ${styles.tileArtThird}`} />
                  <strong>Studio Trainer</strong>
                  <small>within budget</small>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.system} aria-labelledby="ripple-system-title">
          <Reveal>
            <h2 id="ripple-system-title">The system underneath</h2>
          </Reveal>
          <div className={styles.systemList}>
            {system.map((row, index) => (
              <Reveal
                key={row.number}
                className={styles.systemRow}
                delay={index * 70}
              >
                <span className={styles.systemNumber}>{row.number}</span>
                <h3>{row.title}</h3>
                <p>{row.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <p className={styles.systemNote}>
              Grounded by design — current catalog, price, inventory, variant,
              and cart context. Never an invented product.
            </p>
          </Reveal>
        </section>

        <section
          className={styles.waitlist}
          id="ripple-waitlist"
          aria-labelledby="ripple-waitlist-title"
        >
          <Reveal className={styles.waitlistInner}>
            <h2 id="ripple-waitlist-title">Start the ripple.</h2>
            <p>Early access is coming to Shopify storefronts.</p>
            <WaitlistForm id="ripple-email" />
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>VoiceShop</span>
        <span>Speak · See · Shop</span>
      </footer>
    </div>
  );
}

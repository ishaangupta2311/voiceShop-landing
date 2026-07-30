import styles from "./console.module.css";

const pipeline = [
  { id: "01", name: "VOICE_IN", desc: "Shopper speaks. Speech becomes intent in real time." },
  { id: "02", name: "PAGE_CTX", desc: "Reads the product, variant, and price on screen." },
  { id: "03", name: "CATALOG", desc: "Queries live Shopify inventory. No stale answers." },
  { id: "04", name: "CART_OPS", desc: "Adds, updates, and moves the cart to checkout." },
];

const logLines = [
  { t: "00:00.41", msg: 'voice_in  › "something for focus, not too sweet"' },
  { t: "00:00.62", msg: "page_ctx  › viewing /collections/daily-essentials" },
  { t: "00:00.89", msg: "catalog   › match: focus-blend (stock: 47, $32.00)" },
  { t: "00:01.12", msg: 'respond   › "The Focus Blend — citrus, no sugar."' },
  { t: "00:04.73", msg: "cart_ops  › add focus-blend x1 ✓ checkout ready" },
];

export default function Console() {
  return (
    <div className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.scanline} aria-hidden="true" />

      <header className={styles.header}>
        <span className={styles.brand}>
          <span className={styles.brandDot} aria-hidden="true" />
          DIGITAL_SALESMAN
        </span>
        <span className={styles.headerMeta}>SALES SYSTEM // FOR SHOPIFY</span>
        <a href="#deploy" className={styles.headerCta}>
          [ DEPLOY ]
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <p className={styles.bootline}>
            <span className={styles.ok}>OK</span> voice engine online — listening
          </p>
          <h1 className={styles.headline}>
            A SALES MACHINE
            <br />
            ON EVERY PAGE<span className={styles.cursor} aria-hidden="true" />
          </h1>
          <p className={styles.sub}>
            Voice in. Context read. Catalog searched. Cart closed.
            <br />
            An AI salesperson wired directly into your Shopify storefront.
          </p>
          <div className={styles.heroActions} id="deploy">
            <a className={styles.primaryCta} href="#deploy">
              &gt; INSTALL ON SHOPIFY
            </a>
            <span className={styles.uptime}>UPTIME 24/7/365 — NO BREAKS TAKEN</span>
          </div>
        </section>

        <section className={styles.pipeline} aria-label="How it works">
          <p className={styles.sectionLabel}>{"// PIPELINE"}</p>
          <div className={styles.stages}>
            {pipeline.map((stage, i) => (
              <div key={stage.id} className={styles.stageWrap}>
                <article className={styles.stage}>
                  <span className={styles.stageId}>{stage.id}</span>
                  <h2>{stage.name}</h2>
                  <p>{stage.desc}</p>
                </article>
                {i < pipeline.length - 1 && (
                  <span className={styles.stageArrow} aria-hidden="true">
                    ››
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.logs} aria-label="Example session log">
          <div className={styles.logHeader}>
            <span>session.log — live storefront</span>
            <span className={styles.rec}>
              <span aria-hidden="true" /> REC
            </span>
          </div>
          <div className={styles.logBody}>
            {logLines.map((line, i) => (
              <p
                key={line.t}
                className={styles.logLine}
                style={{ animationDelay: `${900 + i * 450}ms` }}
              >
                <span className={styles.logTime}>{line.t}</span>
                {line.msg}
              </p>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>DIGITAL_SALESMAN v1.0</span>
        <span>ANSWERS // SHOWS // SELLS</span>
      </footer>
    </div>
  );
}

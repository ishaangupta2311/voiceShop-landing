import styles from "./broadsheet.module.css";

const columns = [
  {
    heading: "Sees the page, not just the prompt",
    body: "Unlike the chat widgets of years past, this salesman knows precisely what the shopper is viewing — the product, the variant, the price on screen — and answers accordingly. No more “can you send me a link?”",
  },
  {
    heading: "The catalog, committed to memory",
    body: "Mid-sentence, it searches the store’s live inventory and produces the goods: in stock, correctly priced, and matched to what the customer actually asked for. Sold-out items are never offered.",
  },
  {
    heading: "From small talk to checkout",
    body: "Where conversation ends, commerce begins. The salesman adds items to the cart, amends quantities, and ushers the shopper toward checkout — politely, and without ever taking a lunch break.",
  },
];

export default function Broadsheet() {
  return (
    <div className={styles.page}>
      <header className={styles.masthead}>
        <div className={styles.mastheadTop}>
          <span>Vol. I — No. 1</span>
          <span className={styles.mastheadCenter}>
            Published wherever Shopify is sold
          </span>
          <span>Price: one conversation</span>
        </div>
        <h1 className={styles.masthead_title}>The Digital Salesman</h1>
        <div className={styles.mastheadRule} aria-hidden="true" />
        <div className={styles.mastheadSub}>
          <span>COMMERCE EDITION</span>
          <span>“Answers. Shows. Sells.”</span>
          <span>EST. TODAY</span>
        </div>
      </header>

      <main className={styles.body}>
        <section className={styles.lead}>
          <div className={styles.leadCopy}>
            <p className={styles.overline}>Storefronts transformed overnight</p>
            <h2 className={styles.headline}>
              SALES FLOOR HIRES VOICE;
              <br />
              SHOPPERS SIMPLY <em>ASK</em>.
            </h2>
            <p className={styles.standfirst}>
              A voice-first AI salesperson now walks the aisles of Shopify
              storefronts — hearing questions aloud, reading the very page the
              shopper is on, and closing carts with unsettling courtesy.
            </p>
            <div className={styles.byline}>
              <span>By OUR COMMERCE DESK</span>
              <a href="#classified" className={styles.leadCta}>
                Read the classified ad →
              </a>
            </div>
          </div>

          <figure className={styles.leadFigure}>
            <div className={styles.figureCard} aria-label="Illustration of the salesman at work">
              <div className={styles.figureBar}>
                <span />
                <span />
                <span />
              </div>
              <p className={styles.figureQuestion}>
                “Do these boots run small?”
              </p>
              <p className={styles.figureAnswer}>
                They run a half-size small — most customers size up. You&apos;re
                on the Chelsea in tan; shall I put a 9 in your cart?
              </p>
              <div className={styles.figureWave} aria-hidden="true">
                {[14, 22, 9, 26, 17, 12, 24, 10, 19, 15].map((h, i) => (
                  <span key={i} style={{ height: `${h}px` }} />
                ))}
              </div>
            </div>
            <figcaption>
              Fig. 1 — The salesman, mid-answer, cart at the ready.
            </figcaption>
          </figure>
        </section>

        <div className={styles.sectionRule} aria-hidden="true" />

        <section className={styles.columns} aria-label="Capabilities">
          {columns.map((col) => (
            <article key={col.heading} className={styles.column}>
              <h3>{col.heading}</h3>
              <p>{col.body}</p>
            </article>
          ))}
        </section>

        <section className={styles.classified} id="classified">
          <div className={styles.classifiedInner}>
            <p className={styles.classifiedLabel}>CLASSIFIED — SITUATIONS FILLED</p>
            <p className={styles.classifiedBody}>
              <strong>SALESMAN WANTED:</strong> must work nights, weekends, and
              flash sales. Never sleeps, never upsells the wrong size, speaks
              every shopper&apos;s language. <em>Position filled — by software.</em>
            </p>
            <a className={styles.classifiedCta} href="#classified">
              Install on your Shopify store
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>The Digital Salesman</span>
        <span>All the commerce fit to speak</span>
      </footer>
    </div>
  );
}

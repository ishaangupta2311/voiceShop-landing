import styles from "./poster.module.css";

const blocks = [
  {
    stat: "01",
    title: "READS THE PAGE",
    body: "Knows the product, variant, and price your shopper is staring at. Context is not optional.",
  },
  {
    stat: "02",
    title: "SEARCHES THE CATALOG",
    body: "Live Shopify inventory, queried mid-sentence. Real stock. Real prices. No hallucinated SKUs.",
  },
  {
    stat: "03",
    title: "WORKS THE CART",
    body: "Adds items. Fixes quantities. Points at checkout. The conversation ends in a transaction.",
  },
];

const marquee = "VOICE-FIRST SALES ★ BUILT FOR SHOPIFY ★ ALWAYS ON ★ ";

export default function Poster() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>DIGITAL SALESMAN®</span>
        <span className={styles.headerNote}>A SALES DEPT. IN A SCRIPT TAG</span>
        <a href="#install" className={styles.headerCta}>
          INSTALL
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <h1 className={styles.stack} aria-label="Answers. Shows. Sells.">
            <span className={styles.stackLine}>
              <span className={styles.stackWord}>ANSWERS.</span>
            </span>
            <span className={`${styles.stackLine} ${styles.stackLineAlt}`}>
              <span className={styles.stackWord}>SHOWS.</span>
              <span className={styles.stackTag}>OUT LOUD →</span>
            </span>
            <span className={styles.stackLine}>
              <span className={`${styles.stackWord} ${styles.stackWordOutline}`}>
                SELLS.
              </span>
            </span>
          </h1>

          <div className={styles.heroFoot}>
            <p className={styles.manifesto}>
              An AI salesperson that talks to your shoppers, sees the page
              they&apos;re on, pulls real products from your Shopify catalog,
              and drives the cart to checkout. No scripts. No forms. Just
              selling.
            </p>
            <a className={styles.primaryCta} href="#install" id="install">
              PUT IT ON MY STORE ↗
            </a>
          </div>
        </section>

        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            <span>{marquee.repeat(4)}</span>
            <span>{marquee.repeat(4)}</span>
          </div>
        </div>

        <section className={styles.blocks} aria-label="Capabilities">
          {blocks.map((block) => (
            <article key={block.stat} className={styles.block}>
              <span className={styles.blockStat}>{block.stat}</span>
              <h2>{block.title}</h2>
              <p>{block.body}</p>
            </article>
          ))}
        </section>

        <section className={styles.transcript} aria-label="Sample exchange">
          <div className={styles.transcriptRow}>
            <span className={styles.transcriptWho}>SHOPPER</span>
            <p>&quot;WHICH ONE OF THESE IS FOR OILY SKIN?&quot;</p>
          </div>
          <div className={styles.transcriptRow}>
            <span className={`${styles.transcriptWho} ${styles.transcriptBot}`}>
              SALESMAN
            </span>
            <p>
              &quot;THE CLAY WASH — IT&apos;S ON YOUR SCREEN, SECOND FROM LEFT.
              $19, IN STOCK. IN THE CART?&quot;
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>DIGITAL SALESMAN — EST. NOW</span>
        <span>MADE TO CLOSE</span>
      </footer>
    </div>
  );
}

import styles from "./showroom.module.css";

const services = [
  {
    numeral: "I",
    title: "Reads the room",
    body: "It knows exactly which page, product, and variant your shopper is looking at — and answers in that context.",
  },
  {
    numeral: "II",
    title: "Private showings",
    body: "It searches your live catalog mid-conversation and brings the right pieces into view, unprompted.",
  },
  {
    numeral: "III",
    title: "Closes with grace",
    body: "Adds to cart, adjusts quantities, and walks the shopper to checkout without a single click of friction.",
  },
];

export default function Showroom() {
  return (
    <div className={styles.page}>
      <div className={styles.vignette} aria-hidden="true" />

      <header className={styles.header}>
        <span className={styles.wordmark}>Digital Salesman</span>
        <nav className={styles.nav} aria-label="Site">
          <a href="#services">Services</a>
          <a href="#consult">The consult</a>
        </nav>
        <a className={styles.headerCta} href="#consult">
          Request an appointment
        </a>
      </header>

      <main>
        <section className={styles.hero}>
          <p className={styles.kicker}>
            <span className={styles.kickerRule} aria-hidden="true" />
            At your service, on every page
            <span className={styles.kickerRule} aria-hidden="true" />
          </p>

          <h1 className={styles.headline}>
            Every shopper deserves
            <br />
            <em>a private salesman.</em>
          </h1>

          <p className={styles.lede}>
            A voice-first concierge for your Shopify storefront. It listens,
            understands what the shopper is browsing, and presents the right
            product at the right moment — quietly, impeccably.
          </p>

          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href="#consult">
              Install on Shopify
            </a>
            <span className={styles.ctaNote}>Fitted to your storefront</span>
          </div>
        </section>

        <section className={styles.consult} id="consult" aria-label="Example consultation">
          <div className={styles.consultCard}>
            <div className={styles.consultHeader}>
              <span>Consultation · Live</span>
              <span className={styles.consultDot} aria-hidden="true" />
            </div>
            <p className={styles.consultShopper}>
              “I need a gift for someone who has everything.”
            </p>
            <div className={styles.consultDivider} aria-hidden="true" />
            <p className={styles.consultReply}>
              Then we give them something they didn&apos;t know they wanted.
              The <strong>Meridian Carafe</strong> — hand-blown, just restocked,
              and it pairs beautifully with the tumbler set already in your cart.
            </p>
            <div className={styles.consultProduct}>
              <span className={styles.productMark} aria-hidden="true" />
              <span className={styles.productName}>Meridian Carafe</span>
              <span className={styles.productPrice}>$86</span>
              <a href="#consult" className={styles.productAction}>
                Add to cart
              </a>
            </div>
          </div>
          <p className={styles.consultCaption}>
            Spoken, heard, and handled — while the shopper never leaves the page.
          </p>
        </section>

        <section className={styles.services} id="services" aria-label="What it does">
          {services.map((service) => (
            <article key={service.numeral} className={styles.service}>
              <span className={styles.serviceNumeral}>{service.numeral}</span>
              <h2>{service.title}</h2>
              <p>{service.body}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Digital Salesman</span>
        <span className={styles.footerRule} aria-hidden="true" />
        <span>Built for Shopify storefronts</span>
      </footer>
    </div>
  );
}

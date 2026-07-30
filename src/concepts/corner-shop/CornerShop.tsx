import { Reveal, VoiceGlyph, WaitlistForm } from "@/components/shared";
import styles from "./corner-shop.module.css";

const shelves = [
  {
    label: "Aisle 1",
    title: "Knows what you're holding",
    body: "It reads the page the shopper is on — product, variant, price — like a shopkeeper who saw you walk in.",
  },
  {
    label: "Aisle 2",
    title: "Knows the stockroom",
    body: "It searches the published catalog while you talk, and only offers what's really on the shelf.",
  },
  {
    label: "Counter",
    title: "Rings you up",
    body: "It opens products and runs validated cart actions — add, remove, and on toward checkout.",
  },
];

export default function CornerShop() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>
          <VoiceGlyph className={styles.brandGlyph} />
          VoiceShop
        </span>
        <a className={styles.headerCta} href="#corner-waitlist">
          Reserve your spot
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="corner-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Voice-first selling for Shopify</p>
            <h1 id="corner-title">
              A <em>shopkeeper</em>
              <br />
              for every screen.
            </h1>
            <p className={styles.lede}>
              The corner-shop feeling, online: someone who greets your
              shoppers, knows every shelf, and rings up the sale — by voice,
              on your Shopify storefront.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryCta} href="#corner-waitlist">
                Join the waitlist
              </a>
              <span className={styles.openSign}>
                <span className={styles.openDot} aria-hidden="true" />
                Always open
              </span>
            </div>
          </div>

          <div className={styles.storefront} aria-hidden="true">
            <div className={styles.awning}>
              <div className={styles.awningStripes} />
              <div className={styles.awningTrim} />
            </div>
            <div className={styles.shopSign}>VoiceShop</div>
            <div className={styles.shopFace}>
              <div className={styles.shopWindow}>
                <span className={styles.windowShelf}>
                  <i />
                  <i />
                  <i />
                </span>
                <span className={styles.windowShelf}>
                  <i />
                  <i />
                </span>
              </div>
              <div className={styles.shopDoor}>
                <span />
              </div>
            </div>
            <p className={styles.shopBubble}>“Come in — ask me anything.”</p>
          </div>
        </section>

        <section
          className={styles.counter}
          id="corner-counter"
          aria-labelledby="corner-counter-title"
        >
          <Reveal>
            <p className={styles.kicker}>Over the counter</p>
            <h2 id="corner-counter-title">How a sale sounds</h2>
          </Reveal>
          <Reveal className={styles.counterCard} delay={100}>
            <dl className={styles.exchange}>
              <div className={styles.turn}>
                <dt>Shopper</dt>
                <dd>“Do these boots run small? I&apos;m usually a 9.”</dd>
              </div>
              <div className={`${styles.turn} ${styles.turnAgent}`}>
                <dt>VoiceShop</dt>
                <dd>
                  They fit true to size — and the 9 in tan is in stock right
                  now. Shall I put it in your basket?
                </dd>
              </div>
              <div className={styles.turn}>
                <dt>Shopper</dt>
                <dd>“Go on then.”</dd>
              </div>
            </dl>
            <p className={styles.receipt}>
              <span>Basket updated</span>
              <span>Chelsea Boot · Tan · 9 — added ✓</span>
            </p>
          </Reveal>
        </section>

        <section className={styles.aisles} aria-labelledby="corner-aisles-title">
          <Reveal>
            <p className={styles.kicker}>Stocked with the truth</p>
            <h2 id="corner-aisles-title">What&apos;s on the shelves</h2>
          </Reveal>
          <div className={styles.shelfList}>
            {shelves.map((shelf, index) => (
              <Reveal
                key={shelf.title}
                className={styles.shelfRow}
                delay={index * 90}
              >
                <span className={styles.shelfLabel}>{shelf.label}</span>
                <div>
                  <h3>{shelf.title}</h3>
                  <p>{shelf.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className={styles.waitlist}
          id="corner-waitlist"
          aria-labelledby="corner-waitlist-title"
        >
          <Reveal className={styles.waitlistCard}>
            <h2 id="corner-waitlist-title">
              Put a shopkeeper in your storefront.
            </h2>
            <p>
              VoiceShop is opening soon on Shopify. Join the waitlist and
              we&apos;ll hold the door for you.
            </p>
            <WaitlistForm id="corner-email" />
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>VoiceShop</span>
        <span>Open all hours · No lunch breaks taken</span>
      </footer>
    </div>
  );
}

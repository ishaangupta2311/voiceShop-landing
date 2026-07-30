import Image from "next/image";
import { Reveal, WaitlistForm } from "@/components/shared";
import styles from "./say-the-word.module.css";

const heroTiles = [
  {
    src: "/images/high-intent.webp",
    pos: "20% 40%",
    tag: "“add to cart”",
    state: "✓ added",
    style: { top: "16%", left: "3%", rotate: "-4deg" },
  },
  {
    src: "/images/open-shop.webp",
    pos: "30% 30%",
    tag: "“under $60?”",
    state: "5 matches",
    style: { top: "8%", right: "5%", rotate: "3deg" },
  },
  {
    src: "/images/signal-garden.webp",
    pos: "70% 50%",
    tag: "“what's this for?”",
    state: "answered",
    style: { bottom: "12%", left: "6%", rotate: "3deg" },
  },
  {
    src: "/images/guided-sale.webp",
    pos: "40% 45%",
    tag: "“take me there”",
    state: "→ /collections",
    style: { bottom: "6%", right: "3%", rotate: "-3deg" },
  },
];

const yeses = [
  {
    tone: "lilac",
    say: "“I need a gift under $50.”",
    does: "Sold when they ask",
    detail:
      "It searches your live catalog, applies the filters they said out loud, and curates the page to real matches.",
  },
  {
    tone: "butter",
    say: "“What's the difference?”",
    does: "Sold when they hesitate",
    detail:
      "It sees the exact product on their screen, so comparisons and “what is this for?” get straight answers.",
  },
  {
    tone: "mint",
    say: "“Okay, I'll take it.”",
    does: "Sold when they decide",
    detail:
      "Cart updated mid-sentence — plus the discount that pairs with what's already in there.",
  },
];

const gamePlan = [
  {
    title: "Session replays",
    body: "Every conversation is captured. Watch the ones that didn't convert and see exactly why they left.",
  },
  {
    title: "Intent prediction",
    body: "Buying, browsing, confused, exiting — every session scored and reported in your dashboard.",
  },
  {
    title: "Self-updating catalog",
    body: "New products, orders, and reviews re-index automatically. Answers never go stale.",
  },
];

const soon = [
  "Reviews & video demos in-chat",
  "Restock alerts on out-of-stock triggers",
  "Order-aware support for returning customers",
  "A model that learns from every conversation",
];

export default function SayTheWord() {
  return (
    <div className={styles.page}>
      <section className={styles.heroBand}>
        <header className={styles.header}>
          <span className={styles.logo}>VoiceShop</span>
          <nav className={styles.nav} aria-label="Sections">
            <a href="#word-product">Product</a>
            <a href="#word-analytics">Analytics</a>
          </nav>
          <a className={styles.pillCta} href="#word-waitlist">
            Join the waitlist
          </a>
        </header>

        <div className={styles.hero}>
          <div className={styles.tileField} aria-hidden="true">
            {heroTiles.map((tile) => (
              <figure
                key={tile.tag}
                className={styles.tile}
                style={tile.style as React.CSSProperties}
              >
                <Image
                  src={tile.src}
                  alt=""
                  fill
                  sizes="220px"
                  style={{ objectFit: "cover", objectPosition: tile.pos }}
                />
                <figcaption className={styles.tileTag}>
                  <span>{tile.tag}</span>
                  <em>{tile.state}</em>
                </figcaption>
              </figure>
            ))}
          </div>

          <h1 className={styles.headline}>
            A store that does
            <br />
            what you <span className={styles.sayWord}>say</span>
            <span className={styles.wave} aria-hidden="true">
              {[8, 16, 24, 14, 20, 10].map((h, i) => (
                <i key={i} style={{ height: `${h}px`, animationDelay: `${i * 90}ms` }} />
              ))}
            </span>
          </h1>
          <p className={styles.heroSub}>
            VoiceShop is the voice-first AI sales agent for Shopify. Shoppers
            talk; it finds, explains, filters, navigates — and carts.
          </p>
          <a className={`${styles.pillCta} ${styles.heroCta}`} href="#word-product">
            Hear it in action
          </a>
          <p className={styles.heroNote}>
            Blends into your store&apos;s theme · built for big catalogs
          </p>
        </div>
      </section>

      <section className={styles.productBand} id="word-product">
        <Reveal>
          <p className={styles.eyebrow}>Our product</p>
          <h2 className={styles.bandTitle}>
            Selling, designed for
            <br />
            how people <em>actually talk</em>
          </h2>
          <p className={styles.bandSub}>Easy to ask. Quick to cart.</p>
        </Reveal>

        <Reveal className={styles.productCard} delay={120}>
          <div className={styles.productCopy}>
            <h3>The conversation</h3>
            <p>Everything below is live product behavior — nothing staged.</p>
            <ul className={styles.checks}>
              <li>Sees the page — “what is this for?” gets the right answer</li>
              <li>Searches the real catalog, never invents a product</li>
              <li>Applies filters and navigates the store by voice</li>
              <li>Adds to cart and pairs discounts with what&apos;s in it</li>
            </ul>
            <a className={styles.pillCtaDark} href="#word-waitlist">
              Join the waitlist
            </a>
          </div>
          <div className={styles.productDemo}>
            <div className={styles.widget} aria-label="VoiceShop widget demo">
              <div className={styles.widgetHead}>
                <span className={styles.widgetDot} aria-hidden="true" />
                VoiceShop
                <em>listening</em>
              </div>
              <p className={styles.uShopper}>
                “running shoes, wide fit, under $120”
              </p>
              <div className={styles.widgetProducts}>
                <div>
                  <Image
                    src="/images/high-intent.webp"
                    alt=""
                    fill
                    sizes="150px"
                    style={{ objectFit: "cover", objectPosition: "18% 55%" }}
                  />
                  <span>
                    Daily Runner · $110 <i>Add</i>
                  </span>
                </div>
                <div>
                  <Image
                    src="/images/high-intent.webp"
                    alt=""
                    fill
                    sizes="150px"
                    style={{ objectFit: "cover", objectPosition: "30% 70%" }}
                  />
                  <span>
                    Court Low · $95 <i>Add</i>
                  </span>
                </div>
              </div>
              <p className={styles.uAgent}>
                Two wide-fit picks under $120 — the rest are on your screen
                now. The Daily Runner runs true to size.
              </p>
              <p className={styles.uAction}>page curated · 6 verified matches</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className={styles.yesBand}>
        <Reveal>
          <p className={styles.eyebrowLight}>Our approach</p>
          <h2 className={styles.bandTitleLight}>
            Always listening for
            <br />
            ways to say <em>sold</em>
          </h2>
        </Reveal>
        <div className={styles.yesRow}>
          {yeses.map((yes, index) => (
            <Reveal
              key={yes.does}
              className={`${styles.yesCard} ${styles[yes.tone]}`}
              delay={index * 100}
            >
              <p className={styles.yesSay}>{yes.say}</p>
              <h3>
                <em>Sold</em>
                {yes.does.replace("Sold", "")}
              </h3>
              <p className={styles.yesDetail}>{yes.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.planBand} id="word-analytics">
        <Reveal>
          <h2 className={styles.bandTitle}>
            Your <em>store</em>,
            <br />
            your game film
          </h2>
          <p className={styles.bandSub}>
            While it sells out front, it takes notes for you in the back.
          </p>
        </Reveal>
        <div className={styles.planRow}>
          {gamePlan.map((item, index) => (
            <Reveal key={item.title} className={styles.planCard} delay={index * 90}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <p className={styles.soonLine}>
            <strong>Next up:</strong> {soon.join(" · ")}
          </p>
        </Reveal>
      </section>

      <section className={styles.posterBand} id="word-waitlist">
        <div className={styles.posterImage}>
          <Image
            src="/images/open-shop.webp"
            alt="A shopper browsing a boutique as a voice wave moves through the store"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <h2 className={styles.posterType} aria-label="Say the word">
            <span>Say</span>
            <span className={styles.posterItalic}>the</span>
            <span>word.</span>
          </h2>
        </div>
        <Reveal className={styles.posterForm}>
          <p>
            VoiceShop is coming to Shopify storefronts. Join the waitlist —
            your store gets a voice.
          </p>
          <WaitlistForm id="word-email" />
        </Reveal>
      </section>

      <footer className={styles.footer}>
        <span className={styles.footerLogo}>VoiceShop</span>
        <div className={styles.footerCols}>
          <span>Answers. Shows. Sells.</span>
          <span>Built for Shopify</span>
        </div>
      </footer>
    </div>
  );
}

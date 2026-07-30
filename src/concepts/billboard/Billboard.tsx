import {
  Reveal,
  ThemedDemo,
  VoiceGlyph,
  WaitlistForm,
  WordCycler,
} from "@/components/shared";
import styles from "./billboard.module.css";

const verbs = ["finds it.", "explains it.", "filters it.", "carts it.", "sells it."];

const demoThemes = [
  { name: "Cherry", accent: "#d81e45", soft: "#ffe4ea" },
  { name: "Cocoa", accent: "#7a4a2b", soft: "#f3e6db" },
  { name: "Pine", accent: "#1c6e51", soft: "#def0e7" },
  { name: "Indigo", accent: "#3f3fbf", soft: "#e6e6fa" },
];

const acts = [
  {
    n: "Act I",
    title: "The question",
    body: "A shopper asks in their own words — even “what is this for?” on the page they're viewing. VoiceShop has the context, so the answer is exact.",
  },
  {
    n: "Act II",
    title: "The show",
    body: "It searches the live catalog, curates the storefront, applies filters, and walks the shopper wherever the conversation leads.",
  },
  {
    n: "Act III",
    title: "The sale",
    body: "Products land in the cart, matching discounts surface on cue, and the shopper heads to checkout still mid-conversation.",
  },
];

const marquee =
  "SEES THE PAGE ✦ KNOWS THE CATALOG ✦ APPLIES FILTERS ✦ WORKS THE CART ✦ PAIRS DISCOUNTS ✦ PREDICTS INTENT ✦ CAPTURES SESSIONS ✦ AUTO-INDEXES ✦ ";

const backstage = [
  ["Session replays", "Watch any conversation back and see exactly why a customer left."],
  ["Intent forecast", "Buying, browsing, confused, exiting — read per session, reported nightly."],
  ["The owner's box", "Every metric and insight in one analytics dashboard."],
  ["Fresh programme", "Products, orders, and reviews re-indexed the moment they change."],
];

const encore = [
  "Reviews, social proof & video demos on stage in-chat",
  "Restock alerts & newsletter capture on smart triggers",
  "Order-aware support for returning customers",
  "A model that rehearses on every conversation",
];

export default function Billboard() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>
          <VoiceGlyph className={styles.brandGlyph} />
          VoiceShop
        </span>
        <a className={styles.headerCta} href="#billboard-waitlist">
          Join the waitlist
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="billboard-title">
          <p className={styles.kicker}>The voice-first AI sales agent for Shopify</p>
          <h1 id="billboard-title" className={styles.headline}>
            <span className={styles.staticLine}>They ask.</span>
            <span className={styles.cycleLine}>
              It{" "}
              <WordCycler words={verbs} className={styles.cycled} />
            </span>
          </h1>
          <p className={styles.lede}>
            Every shopper gets a salesperson who sees their screen, knows your
            whole catalog, and closes at the cart — in your store&apos;s own
            colors.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href="#billboard-waitlist">
              Join the waitlist
            </a>
            <a className={styles.secondaryCta} href="#billboard-demo">
              See the show ↓
            </a>
          </div>
        </section>

        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            <span>{marquee.repeat(3)}</span>
            <span>{marquee.repeat(3)}</span>
          </div>
        </div>

        <section
          className={styles.demoSection}
          id="billboard-demo"
          aria-labelledby="billboard-demo-title"
        >
          <Reveal>
            <h2 id="billboard-demo-title">Tonight&apos;s performance</h2>
            <p className={styles.demoIntro}>
              A real storefront, mid-sale. VoiceShop dresses for the venue —
              try a different house color.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ThemedDemo
              themes={demoThemes}
              label="House colors:"
              className={styles.demoStage}
            >
              <div className={styles.demo}>
                <div
                  className={styles.store}
                  aria-label="Demo storefront curated by VoiceShop"
                >
                  <div className={styles.storeBar}>
                    <strong>MAISON LUME</strong>
                    <span>
                      Candles · Home · Archive · <em>Cart (2)</em>
                    </span>
                  </div>
                  <p className={styles.curated}>
                    Curated live by your shopping assistant
                  </p>
                  <h3>gifts under $60</h3>
                  <p className={styles.matchNote}>
                    5 verified catalog matches — say the word and I&apos;ll
                    take you to one.
                  </p>
                  <div className={styles.grid}>
                    {[
                      ["Fig & Smoke Candle", "$38", "add"],
                      ["Match Cloche", "$24", "add"],
                      ["Brass Snuffer", "$19", "sold"],
                    ].map(([name, price, state]) => (
                      <div className={styles.tile} key={name}>
                        <span className={styles.tileArt} />
                        <strong>{name}</strong>
                        <span className={styles.tileMeta}>
                          {price}
                          <em className={state === "add" ? styles.add : styles.sold}>
                            {state === "add" ? "Add to cart" : "Sold out"}
                          </em>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={styles.script}
                  aria-label="Demo conversation with VoiceShop"
                >
                  <div className={styles.scriptHead}>
                    <span>
                      <VoiceGlyph className={styles.scriptGlyph} />
                      VoiceShop
                    </span>
                    <em>intent: gift-buying</em>
                  </div>
                  <p className={styles.cueShopper}>
                    “need a gift for a friend who loves candles, under $60”
                  </p>
                  <p className={styles.cueAgent}>
                    Curtain up — I&apos;ve set the page to five gift-ready
                    picks under $60. The Fig &amp; Smoke is the house
                    favourite.
                  </p>
                  <p className={styles.cueShopper}>
                    “what does it smell like?”
                  </p>
                  <p className={styles.cueAgent}>
                    The one on your screen: ripe fig, cedar, a little smoke.
                    Burns ~50 hours. With the cloche in your cart, code{" "}
                    <strong>PAIR10</strong> applies. Add it?
                  </p>
                  <p className={styles.cueAction}>
                    Fig &amp; Smoke Candle — added to cart ✓
                  </p>
                </div>
              </div>
            </ThemedDemo>
          </Reveal>
        </section>

        <section className={styles.acts} aria-labelledby="billboard-acts-title">
          <Reveal>
            <h2 id="billboard-acts-title">The whole show, in three acts</h2>
          </Reveal>
          <div className={styles.actRow}>
            {acts.map((act, index) => (
              <Reveal key={act.n} className={styles.act} delay={index * 100}>
                <span className={styles.actN}>{act.n}</span>
                <h3>{act.title}</h3>
                <p>{act.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className={styles.backstage}
          aria-labelledby="billboard-backstage-title"
        >
          <Reveal>
            <h2 id="billboard-backstage-title">
              Backstage, the owner sees everything
            </h2>
          </Reveal>
          <div className={styles.backstageGrid}>
            {backstage.map(([title, body], index) => (
              <Reveal
                key={title}
                className={styles.backstageCard}
                delay={index * 80}
              >
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.encore} aria-labelledby="billboard-encore-title">
          <Reveal>
            <h2 id="billboard-encore-title">
              The encore <span>(coming soon)</span>
            </h2>
          </Reveal>
          <ul className={styles.encoreList}>
            {encore.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <li>{item}</li>
              </Reveal>
            ))}
          </ul>
        </section>

        <section
          className={styles.waitlist}
          id="billboard-waitlist"
          aria-labelledby="billboard-waitlist-title"
        >
          <Reveal className={styles.waitlistCard}>
            <h2 id="billboard-waitlist-title">Get front-row seats.</h2>
            <p>VoiceShop opens on Shopify storefronts soon.</p>
            <WaitlistForm id="billboard-email" />
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>VoiceShop</span>
        <span>They ask. It sells.</span>
      </footer>
    </div>
  );
}

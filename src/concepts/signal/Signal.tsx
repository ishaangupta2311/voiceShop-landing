import Image from "next/image";
import { Reveal, ThemedDemo, WaitlistForm } from "@/components/shared";
import styles from "./signal.module.css";

const dotHeights = [
  3, 5, 8, 6, 10, 14, 9, 6, 11, 16, 12, 7, 5, 9, 13, 18, 13, 8, 6, 10, 15, 11,
  7, 4, 8, 12, 16, 10, 6, 9, 13, 8, 5, 7, 4, 3,
];

const demoThemes = [
  { name: "Purple", accent: "#6d3fc4", soft: "#efe8fb" },
  { name: "Forest", accent: "#1e6b4a", soft: "#e2f1e9" },
  { name: "Navy", accent: "#1d4f91", soft: "#e3ecf8" },
  { name: "Rust", accent: "#b8501f", soft: "#fae8dd" },
];

const pair = [
  {
    label: "Show",
    title: "It puts products in front of them",
    lines: [
      "“show me kratom products” → 2 of 8 shown in-chat",
      "collection page curated: 8 verified catalog matches",
      "filters applied: capsules · in stock",
    ],
  },
  {
    label: "Close",
    title: "It walks them to the finish",
    lines: [
      "Kratom Uplift Powder → added to cart ✓",
      "discount BUNDLE10 pairs with your cart",
      "intent: ready to buy → checkout suggested",
    ],
  },
];

const facts = [
  ["Every", "session captured & replayable"],
  ["5", "intent states read live"],
  ["Auto", "re-index on product, order & review changes"],
];

const soon = [
  "Reviews & video demos in-chat",
  "Triggered restock & newsletter capture",
  "Order-aware support for returning customers",
  "A model that learns from every conversation",
];

export default function Signal() {
  return (
    <div className={styles.page}>
      <section className={styles.skyBand}>
        <header className={styles.header}>
          <span className={styles.brand}>◆ VoiceShop</span>
          <nav className={styles.nav} aria-label="Sections">
            <a href="#signal-demo">Product</a>
            <a href="#signal-close">How it sells</a>
          </nav>
          <a className={styles.headerCta} href="#signal-waitlist">
            Join the waitlist
          </a>
        </header>

        <div className={styles.heroCopy}>
          <p className={styles.announce}>New · voice-first selling for Shopify</p>
          <h1>
            Handle everything
            <br />
            that happens after “hi.”
          </h1>
          <p className={styles.sub}>
            VoiceShop answers, shows, filters, navigates, and carts — grounded
            in your live catalog, dressed in your theme.
          </p>
          <a className={styles.primaryCta} href="#signal-demo">
            See it selling
          </a>
        </div>

        <div className={styles.dotWave} aria-hidden="true">
          {dotHeights.map((height, index) => (
            <span
              key={index}
              style={{
                height: `${height * 7}px`,
                animationDelay: `${index * 55}ms`,
              }}
            />
          ))}
        </div>
      </section>

      <section className={styles.demoSection} id="signal-demo">
        <Reveal>
          <h2>Talk more. Lose less.</h2>
          <p className={styles.sectionSub}>
            The widget below is the real thing, rebuilt pixel-close — including
            how it recolors itself to match any store&apos;s theme.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ThemedDemo
            themes={demoThemes}
            label="Store theme:"
            className={styles.demoWrap}
          >
            <div className={styles.appFrame}>
              <div className={styles.appBar}>
                <span className={styles.appDots}>
                  <i />
                  <i />
                  <i />
                </span>
                <span className={styles.appUrl}>
                  your-store.myshopify.com/collections/all
                </span>
              </div>
              <div className={styles.appSplit}>
                <div className={styles.appStore} aria-label="Storefront curated by VoiceShop">
                  <div className={styles.appBanner}>
                    30-day satisfaction guarantee
                  </div>
                  <div className={styles.appNav}>
                    <strong>your-store</strong>
                    <span>Home · Catalog · Contact</span>
                    <em>🛒 2</em>
                  </div>
                  <p className={styles.appKicker}>
                    Curated live by your shopping assistant
                  </p>
                  <h3>calm blends</h3>
                  <p className={styles.appMatches}>
                    8 verified catalog matches — select one and I&apos;ll take
                    you there.
                  </p>
                  <div className={styles.appGrid}>
                    {[
                      ["Calm Capsules", "$24", "Add to cart"],
                      ["Uplift Powder", "$13–120", "Add to cart"],
                      ["Calm Powder", "$18", "Sold out"],
                      ["Extract Seltzer", "$6", "Add to cart"],
                    ].map(([name, price, action]) => (
                      <div className={styles.appTile} key={name}>
                        <span className={styles.appArt} />
                        <strong>{name}</strong>
                        <span className={styles.appMeta}>
                          {price}
                          <em
                            className={
                              action === "Sold out" ? styles.soldOut : undefined
                            }
                          >
                            {action}
                          </em>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.appChat} aria-label="VoiceShop chat panel">
                  <div className={styles.appChatHead}>
                    <span>
                      <i className={styles.liveDot} /> VoiceShop
                    </span>
                    <em>✕</em>
                  </div>
                  <p className={styles.aAgent}>Hi! How can I help you today?</p>
                  <p className={styles.aShopper}>show me your calm stuff</p>
                  <div className={styles.aCards}>
                    <span className={styles.aCardsNote}>
                      2 of 8 shown here · “calm”
                    </span>
                    <div>
                      <span className={styles.aCard}>
                        <i />
                        Calm Capsules
                        <em>Add</em>
                      </span>
                      <span className={styles.aCard}>
                        <i />
                        Calm Powder
                        <em className={styles.aCardSold}>Sold out</em>
                      </span>
                    </div>
                  </div>
                  <p className={styles.aAgent}>
                    Here&apos;s everything calming — powders, capsules, and the
                    seltzer. Showing them on the page so you can browse.
                  </p>
                  <div className={styles.aInput}>
                    <span className={styles.typing}>what&apos;s in the capsules?</span>
                    <i>🎙️</i>
                  </div>
                </div>
              </div>
            </div>
          </ThemedDemo>
        </Reveal>
      </section>

      <section className={styles.pairSection} id="signal-close">
        <div className={styles.pairGrid}>
          {pair.map((card, index) => (
            <Reveal key={card.label} className={styles.pairCard} delay={index * 110}>
              <span className={styles.pairLabel}>
                {index === 0 ? "⚡" : "◎"} {card.label}
              </span>
              <h3>{card.title}</h3>
              <div className={styles.pairLines}>
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <p className={styles.pairFoot}>
            It also sees the exact page a shopper is on — so “what is this
            for?” gets the answer about <em>that</em> product, not a random
            one.
          </p>
        </Reveal>
      </section>

      <section className={styles.facts}>
        <div className={styles.factRow}>
          {facts.map(([big, small], index) => (
            <Reveal key={small} className={styles.fact} delay={index * 90}>
              <strong>{big}</strong>
              <span>{small}</span>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <p className={styles.factNote}>
            Owners get all of it in one analytics dashboard — session replays,
            intent breakdowns, and the moments customers walk away.
          </p>
        </Reveal>
      </section>

      <section className={styles.soonSection}>
        <Reveal>
          <p className={styles.soonKicker}>Roadmap</p>
          <h2>Launching next</h2>
        </Reveal>
        <div className={styles.soonGrid}>
          {soon.map((item, index) => (
            <Reveal key={item} className={styles.soonItem} delay={index * 70}>
              {item}
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.deepBand} id="signal-waitlist">
        <Reveal className={styles.deepInner}>
          <h2>
            Be ready for whatever
            <br />
            they ask next.
          </h2>
          <WaitlistForm id="signal-email" />
        </Reveal>
        <div className={styles.ghostMark} aria-hidden="true">
          <Image
            src="/images/living-storefront.webp"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <span>◆ VoiceShop</span>
        <span>All systems listening</span>
      </footer>
    </div>
  );
}

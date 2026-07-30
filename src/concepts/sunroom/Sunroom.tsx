import {
  Reveal,
  ThemedDemo,
  VoiceGlyph,
  WaitlistForm,
} from "@/components/shared";
import styles from "./sunroom.module.css";

const demoThemes = [
  { name: "Coral", accent: "#ff7e67", soft: "#ffe9e4" },
  { name: "Matcha", accent: "#4f9d69", soft: "#e3f2e7" },
  { name: "Grape", accent: "#7c5cd6", soft: "#ece5fb" },
  { name: "Ocean", accent: "#2f7fd3", soft: "#e1eefb" },
];

const shopperPerks = [
  {
    emoji: "👀",
    title: "It sees the page",
    body: "Ask “what is this for?” on any product and it knows exactly what you mean — it has the page, variant, and price in view.",
  },
  {
    emoji: "🔎",
    title: "It knows the shelves",
    body: "Built for big catalogs: it matches what shoppers describe to the right products, even when they don't know the name.",
  },
  {
    emoji: "🛒",
    title: "It fills the cart",
    body: "Adds items straight to the cart mid-conversation and keeps track of what's already in there.",
  },
  {
    emoji: "🧭",
    title: "It walks you there",
    body: "“Take me to the gift sets” — it navigates shoppers across the store as the conversation flows.",
  },
  {
    emoji: "🎚️",
    title: "It sorts things out",
    body: "Applies filters on request — price, type, availability — so shoppers see only what fits.",
  },
  {
    emoji: "🎁",
    title: "It knows the deals",
    body: "Tells shoppers which discounts pair with what's already in their cart, right when it matters.",
  },
];

const ownerPerks = [
  {
    title: "Every session, captured",
    body: "Replay any conversation to see exactly what went wrong and why a customer left — no more guessing.",
  },
  {
    title: "Intent, predicted",
    body: "Buying, browsing, confused, about to leave — VoiceShop reads the signals and reports them per session.",
  },
  {
    title: "An analytics home",
    body: "Every metric and conversation insight lands in one dashboard made for store owners.",
  },
  {
    title: "Always up to date",
    body: "New products, order info, and reviews are re-indexed automatically the moment they change.",
  },
];

const comingSoon = [
  "Reviews, social proof & video demos, right in the conversation",
  "Restock alerts & newsletter sign-ups on smart triggers (like out-of-stock)",
  "A support agent for returning customers, powered by their order history",
  "A dashboard where the model learns from every conversation",
];

export default function Sunroom() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>
          <VoiceGlyph className={styles.brandGlyph} />
          VoiceShop
        </span>
        <a className={styles.headerCta} href="#sunroom-waitlist">
          Join the waitlist
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="sunroom-title">
          <div className={styles.sun} aria-hidden="true">
            <span className={styles.sunRays} />
            <span className={styles.sunCore}>
              <span className={styles.sunWave}>
                {[10, 18, 26, 16, 22, 12].map((height, index) => (
                  <span
                    key={index}
                    style={{
                      height: `${height}px`,
                      animationDelay: `${index * 110}ms`,
                    }}
                  />
                ))}
              </span>
            </span>
          </div>

          <p className={styles.badge}>Your store&apos;s new best friend</p>
          <h1 id="sunroom-title">
            Shopping is better with
            <br />
            someone to <span className={styles.talkTo}>talk to</span>.
          </h1>
          <p className={styles.lede}>
            VoiceShop is an AI sales agent that lives inside your Shopify
            store. It chats with every visitor, finds the right product in even
            the biggest catalog, and carries the cart to checkout — dressed in
            your store&apos;s own colors.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href="#sunroom-waitlist">
              Join the waitlist
            </a>
            <a className={styles.secondaryCta} href="#sunroom-demo">
              See it on a real store ↓
            </a>
          </div>
        </section>

        <section
          className={styles.demo}
          id="sunroom-demo"
          aria-labelledby="sunroom-demo-title"
        >
          <Reveal>
            <h2 id="sunroom-demo-title">Right at home in your storefront</h2>
            <p className={styles.demoIntro}>
              VoiceShop blends into the shop it serves. Try on a few store
              colors — the assistant tailors itself to match.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ThemedDemo
              themes={demoThemes}
              label="Dress it in your store's color:"
              className={styles.demoStage}
            >
              <div className={styles.browser}>
                <div className={styles.browserBar} aria-hidden="true">
                  <span className={styles.browserDots}>
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className={styles.browserUrl}>
                    sipclub.com/collections/matcha
                  </span>
                </div>
                <div className={styles.demoSplit}>
                  <div
                    className={styles.storefront}
                    aria-label="Demo storefront curated by VoiceShop"
                  >
                    <div className={styles.storeNav}>
                      <strong>SIP CLUB</strong>
                      <span>Shop · Brew Guides · About</span>
                      <span className={styles.cartBadge}>
                        Cart <i>2</i>
                      </span>
                    </div>
                    <p className={styles.curatedTag}>
                      Curated live by your shopping assistant
                    </p>
                    <h3>matcha</h3>
                    <p className={styles.matches}>
                      8 verified catalog matches — pick one and I&apos;ll take
                      you there.
                    </p>
                    <div className={styles.productGrid}>
                      <div className={styles.product}>
                        <span className={styles.productArt} data-tone="a" />
                        <strong>Ceremonial Matcha</strong>
                        <span className={styles.productMeta}>
                          $28 <em className={styles.addPill}>Add to cart</em>
                        </span>
                      </div>
                      <div className={styles.product}>
                        <span className={styles.productArt} data-tone="b" />
                        <strong>Daily Blend</strong>
                        <span className={styles.productMeta}>
                          $18 <em className={styles.soldPill}>Sold out</em>
                        </span>
                      </div>
                      <div className={styles.product}>
                        <span className={styles.productArt} data-tone="c" />
                        <strong>Whisk &amp; Bowl Set</strong>
                        <span className={styles.productMeta}>
                          $24 <em className={styles.addPill}>Add to cart</em>
                        </span>
                      </div>
                      <div className={styles.product}>
                        <span className={styles.productArt} data-tone="d" />
                        <strong>Cold Brew Bottle</strong>
                        <span className={styles.productMeta}>
                          $22 <em className={styles.addPill}>Add to cart</em>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={styles.chatPanel}
                    aria-label="Demo conversation with VoiceShop"
                  >
                    <div className={styles.chatTop}>
                      <span className={styles.chatBrand}>
                        <VoiceGlyph className={styles.chatGlyph} />
                        VoiceShop
                      </span>
                      <span className={styles.intentChip}>
                        intent: ready to buy
                      </span>
                    </div>
                    <div className={styles.chatScroll}>
                      <p className={`${styles.msg} ${styles.msgAgent}`}>
                        Welcome back! What are we sipping this week?
                      </p>
                      <p className={`${styles.msg} ${styles.msgShopper}`}>
                        show me your matcha
                      </p>
                      <div className={styles.chatCards}>
                        <span className={styles.chatCardsLabel}>
                          2 of 8 shown here · full list on the page
                        </span>
                        <div className={styles.chatCardRow}>
                          <span className={styles.chatCard}>
                            <i data-tone="a" />
                            Ceremonial Matcha
                            <em>Add</em>
                          </span>
                          <span className={styles.chatCard}>
                            <i data-tone="b" />
                            Daily Blend
                            <em className={styles.chatCardSold}>Sold out</em>
                          </span>
                        </div>
                      </div>
                      <p className={`${styles.msg} ${styles.msgShopper}`}>
                        what&apos;s the whisk set for?
                      </p>
                      <p className={`${styles.msg} ${styles.msgAgent}`}>
                        That&apos;s for the Ceremonial Matcha you&apos;re
                        looking at — it whisks it into a smooth froth. And
                        heads up: with the bottle already in your cart, code{" "}
                        <strong>SIP10</strong> applies. 🎉
                      </p>
                    </div>
                    <div className={styles.chatInput} aria-hidden="true">
                      <span>Type or talk…</span>
                      <i>🎙️</i>
                    </div>
                  </div>
                </div>
              </div>
            </ThemedDemo>
          </Reveal>
          <Reveal delay={200}>
            <p className={styles.demoCaption}>
              One conversation: found the product, explained the one on screen,
              curated the page, and surfaced the right discount.
            </p>
          </Reveal>
        </section>

        <section
          className={styles.buddies}
          aria-labelledby="sunroom-buddies-title"
        >
          <Reveal>
            <h2 id="sunroom-buddies-title">What your buddy does all day</h2>
          </Reveal>
          <div className={styles.buddyGrid}>
            {shopperPerks.map((perk, index) => (
              <Reveal
                key={perk.title}
                className={styles.buddyCard}
                delay={(index % 3) * 90}
              >
                <span className={styles.buddyEmoji} aria-hidden="true">
                  {perk.emoji}
                </span>
                <h3>{perk.title}</h3>
                <p>{perk.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.owners} aria-labelledby="sunroom-owners-title">
          <Reveal>
            <p className={styles.ownersKicker}>And for you, the owner</p>
            <h2 id="sunroom-owners-title">
              It sells out front, and takes notes in the back
            </h2>
          </Reveal>
          <div className={styles.ownersLayout}>
            <Reveal className={styles.dashboard} delay={100}>
              <div className={styles.dashboardTop}>
                <strong>VoiceShop Analytics</strong>
                <span>this week · demo data</span>
              </div>
              <div className={styles.intentBars}>
                {[
                  ["Ready to buy", 72],
                  ["Browsing", 88],
                  ["Exploring", 54],
                  ["Confused", 26],
                  ["About to leave", 18],
                ].map(([label, width]) => (
                  <div className={styles.intentRow} key={label}>
                    <span>{label}</span>
                    <span className={styles.intentTrack}>
                      <i style={{ width: `${width}%` }} />
                    </span>
                  </div>
                ))}
              </div>
              <div className={styles.sessionRow}>
                <span className={styles.sessionDot} aria-hidden="true" />
                Session replay: shopper asked for “something calming”, left at
                shipping question — full transcript saved.
              </div>
            </Reveal>
            <div className={styles.ownerCards}>
              {ownerPerks.map((perk, index) => (
                <Reveal
                  key={perk.title}
                  className={styles.ownerCard}
                  delay={index * 80}
                >
                  <h3>{perk.title}</h3>
                  <p>{perk.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.soon}
          aria-labelledby="sunroom-soon-title"
        >
          <Reveal>
            <h2 id="sunroom-soon-title">Warming up in the sunroom 🌱</h2>
          </Reveal>
          <div className={styles.soonList}>
            {comingSoon.map((item, index) => (
              <Reveal key={item} className={styles.soonItem} delay={index * 80}>
                <span aria-hidden="true">soon</span>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className={styles.waitlist}
          id="sunroom-waitlist"
          aria-labelledby="sunroom-waitlist-title"
        >
          <Reveal className={styles.waitlistCard}>
            <h2 id="sunroom-waitlist-title">
              Give every shopper a shopping buddy
            </h2>
            <p>
              VoiceShop is on its way to Shopify storefronts. Leave your email
              and be first through the door.
            </p>
            <WaitlistForm id="sunroom-email" />
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        VoiceShop · answers, shows &amp; sells with a smile
      </footer>
    </div>
  );
}

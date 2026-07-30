import {
  Reveal,
  ThemedDemo,
  TiltCard,
  VoiceGlyph,
  WaitlistForm,
} from "@/components/shared";
import styles from "./showfloor.module.css";

const demoThemes = [
  { name: "Electric", accent: "#2450ff", soft: "#e4eaff" },
  { name: "Violet", accent: "#7a3bff", soft: "#eee5ff" },
  { name: "Emerald", accent: "#0d9463", soft: "#dff3ea" },
  { name: "Crimson", accent: "#e02b4e", soft: "#ffe3e9" },
];

const abilities = [
  {
    tag: "context",
    title: "Sees what they see",
    body: "Ask “what is this for?” on any product page — VoiceShop has the page in view, so the answer is never random.",
  },
  {
    tag: "catalog",
    title: "Masters huge catalogs",
    body: "Matches vague human asks to the right SKU across thousands of products, and re-indexes automatically as your catalog changes.",
  },
  {
    tag: "navigate",
    title: "Drives the store",
    body: "Curates collection pages, takes shoppers to the right aisle, and applies filters — all steered by conversation.",
  },
  {
    tag: "cart",
    title: "Closes at the counter",
    body: "Adds to cart mid-sentence and surfaces the discounts that pair with what's already in there.",
  },
  {
    tag: "insight",
    title: "Reads intent live",
    body: "Buying, browsing, confused, about to bounce — every session is scored and reported to your dashboard.",
  },
  {
    tag: "replay",
    title: "Remembers everything",
    body: "Every session is captured, so you can replay exactly what went wrong and why a customer left.",
  },
];

const roadmap = [
  ["Social proof in-chat", "Reviews, ratings, and video demos served inside the conversation."],
  ["Triggered capture", "Restock alerts, newsletters, and waitlists fired on the right trigger — like out-of-stock."],
  ["Support mode", "Order-aware customer support for logged-in and returning shoppers."],
  ["Self-improving", "A dashboard where the model learns from every conversation it has."],
];

export default function Showfloor() {
  return (
    <div className={styles.page}>
      <div className={styles.floorGrid} aria-hidden="true" />

      <header className={styles.header}>
        <span className={styles.brand}>
          <VoiceGlyph className={styles.brandGlyph} />
          VoiceShop
        </span>
        <span className={styles.headerNote}>The AI sales agent for Shopify</span>
        <a className={styles.headerCta} href="#showfloor-waitlist">
          Join the waitlist
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="showfloor-title">
          <h1 id="showfloor-title">
            Your store,
            <br />
            <span>now on the showfloor.</span>
          </h1>
          <p className={styles.lede}>
            VoiceShop puts a salesperson inside your Shopify storefront — one
            that sees the page, knows the whole catalog, applies filters,
            surfaces discounts, and works the cart. Below: a real storefront,
            mid-conversation. Move your cursor over it.
          </p>

          <ThemedDemo
            themes={demoThemes}
            label="It adapts to your store's theme:"
            className={styles.demoWrap}
          >
            <TiltCard className={styles.tilt} maxTilt={5}>
              <div className={styles.demo}>
                <div
                  className={styles.store}
                  aria-label="Demo storefront curated by VoiceShop"
                >
                  <div className={styles.storeBar}>
                    <strong>ATELIER/9</strong>
                    <span>Home · Catalog · Journal</span>
                    <span className={styles.cart}>
                      Cart <i>3</i>
                    </span>
                  </div>
                  <p className={styles.curated}>
                    Curated live by your shopping assistant
                  </p>
                  <h2>desk setup</h2>
                  <p className={styles.matchNote}>
                    6 verified catalog matches — filtered to “under $150,
                    in stock”.
                  </p>
                  <div className={styles.grid}>
                    {[
                      ["Task Lamp v2", "$89", "add"],
                      ["Walnut Riser", "$65", "add"],
                      ["Felt Desk Mat", "$39", "sold"],
                      ["Cable Trio", "$25", "add"],
                    ].map(([name, price, state]) => (
                      <div className={styles.tile} key={name}>
                        <span className={styles.tileArt} />
                        <strong>{name}</strong>
                        <span className={styles.tileMeta}>
                          {price}
                          <em
                            className={
                              state === "add" ? styles.add : styles.sold
                            }
                          >
                            {state === "add" ? "Add to cart" : "Sold out"}
                          </em>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={styles.chat}
                  aria-label="Demo conversation with VoiceShop"
                >
                  <div className={styles.chatHead}>
                    <span>
                      <VoiceGlyph className={styles.chatGlyph} />
                      VoiceShop
                    </span>
                    <em>intent: ready to buy</em>
                  </div>
                  <p className={`${styles.msg} ${styles.fromShopper}`}>
                    setting up a desk. calm colors, under $150 total-ish
                  </p>
                  <p className={`${styles.msg} ${styles.fromAgent}`}>
                    Filtered the page to calm, in-stock picks under $150. The
                    lamp and riser pair well — want both in the cart?
                  </p>
                  <p className={`${styles.msg} ${styles.fromShopper}`}>
                    what&apos;s the riser actually for?
                  </p>
                  <p className={`${styles.msg} ${styles.fromAgent}`}>
                    The one on your screen lifts your monitor to eye height —
                    it&apos;s walnut, matches the lamp. Also: code{" "}
                    <strong>DESK10</strong> works with the mat already in your
                    cart.
                  </p>
                  <div className={styles.chatField} aria-hidden="true">
                    <span>Type or talk…</span>
                    <i>🎙️</i>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ThemedDemo>
        </section>

        <section
          className={styles.abilities}
          aria-labelledby="showfloor-abilities-title"
        >
          <Reveal>
            <h2 id="showfloor-abilities-title">Everything it does on the floor</h2>
          </Reveal>
          <div className={styles.abilityGrid}>
            {abilities.map((ability, index) => (
              <Reveal
                key={ability.title}
                className={styles.ability}
                delay={(index % 3) * 90}
              >
                <span className={styles.abilityTag}>{ability.tag}</span>
                <h3>{ability.title}</h3>
                <p>{ability.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className={styles.backstage}
          aria-labelledby="showfloor-backstage-title"
        >
          <Reveal className={styles.backstageIntro}>
            <h2 id="showfloor-backstage-title">Backstage, for the owner</h2>
            <p>
              Every conversation feeds an analytics dashboard built for store
              owners: session replays, per-session intent, and the moments
              where customers stall or leave. Products, orders, and reviews
              re-index themselves the moment they change.
            </p>
          </Reveal>
          <Reveal className={styles.console} delay={120}>
            <div className={styles.consoleHead}>
              <strong>Analytics · this week</strong>
              <span>demo data</span>
            </div>
            <div className={styles.consoleBody}>
              {[
                ["Sessions captured", "every one", "replayable end-to-end"],
                ["Intent detected", "5 states", "buy · browse · explore · confused · exit"],
                ["Catalog freshness", "auto", "re-indexed on every change"],
              ].map(([label, value, note]) => (
                <div className={styles.stat} key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <small>{note}</small>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className={styles.soon} aria-labelledby="showfloor-soon-title">
          <Reveal>
            <h2 id="showfloor-soon-title">Rolling onto the floor next</h2>
          </Reveal>
          <div className={styles.soonGrid}>
            {roadmap.map(([title, body], index) => (
              <Reveal key={title} className={styles.soonCard} delay={index * 80}>
                <span>coming soon</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className={styles.waitlist}
          id="showfloor-waitlist"
          aria-labelledby="showfloor-waitlist-title"
        >
          <Reveal className={styles.waitlistInner}>
            <h2 id="showfloor-waitlist-title">Reserve your spot on the floor.</h2>
            <p>VoiceShop is coming to Shopify storefronts.</p>
            <WaitlistForm id="showfloor-email" />
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>VoiceShop</span>
        <span>Answers · Shows · Sells</span>
      </footer>
    </div>
  );
}

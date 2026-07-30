import {
  Reveal,
  ThemedDemo,
  VoiceGlyph,
  WaitlistForm,
} from "@/components/shared";
import styles from "./conveyor.module.css";

const beltItems = [
  ["Trail Shell", "$120"],
  ["Alpine Sock", "$14"],
  ["Ridge Bottle", "$28"],
  ["Summit Pack", "$95"],
  ["Basecamp Mug", "$18"],
  ["Scree Gaiter", "$32"],
  ["Cirque Beanie", "$22"],
  ["Col Headlamp", "$44"],
];

const demoThemes = [
  { name: "Signal", accent: "#e8a400", soft: "#fff3d1" },
  { name: "Moss", accent: "#4e7d3a", soft: "#e8f2e0" },
  { name: "Flame", accent: "#e05206", soft: "#ffe6d8" },
  { name: "Slate", accent: "#3a6ea5", soft: "#e1ecf7" },
];

const manifest = [
  ["CTX-01", "Page context", "Sees the product the shopper is viewing — “what is this for?” always lands."],
  ["CAT-02", "Catalog mastery", "Matches loose human asks to the right SKU in catalogs of any size."],
  ["NAV-03", "Store navigation", "Moves shoppers to the right collection or product as the conversation flows."],
  ["FLT-04", "Live filters", "Applies price, availability, and type filters on request."],
  ["CRT-05", "Cart operations", "Adds to cart mid-conversation and tracks what's already in it."],
  ["DSC-06", "Discount pairing", "Surfaces the codes that work with the shopper's current cart."],
];

const tower = [
  ["Session capture", "Every conversation recorded and replayable — see exactly why a customer left."],
  ["Intent radar", "Each session scored: buying, browsing, exploring, confused, or about to exit."],
  ["Owner dashboard", "All metrics and conversation analysis in one place."],
  ["Auto re-index", "Products, orders, and reviews refresh in the index the moment they change."],
];

const incoming = [
  "Reviews, social proof & video demos in-conversation",
  "Restock alerts & newsletter capture on smart triggers",
  "Order-aware support mode for returning customers",
  "A model that learns from every conversation",
];

export default function Conveyor() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>
          <VoiceGlyph className={styles.brandGlyph} />
          VoiceShop
        </span>
        <span className={styles.headerNote}>
          [ ai sales agent · shopify ]
        </span>
        <a className={styles.headerCta} href="#conveyor-waitlist">
          Join the waitlist
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="conveyor-title">
          <h1 id="conveyor-title">
            A thousand products.
            <br />
            <span>One voice picks the right one.</span>
          </h1>
          <p className={styles.lede}>
            VoiceShop is built for stores with big, busy catalogs. Shoppers say
            what they need — it scans the belt, picks the match, and sends it
            down the line to the cart.
          </p>

          <div className={styles.beltWrap} aria-hidden="true">
            <div className={styles.scanner}>
              <span>voice match</span>
            </div>
            <div className={styles.belt}>
              {[0, 1].map((copy) => (
                <div className={styles.beltRun} key={copy}>
                  {beltItems.map(([name, price], index) => (
                    <div
                      className={styles.crate}
                      key={`${copy}-${name}`}
                      data-tone={index % 4}
                    >
                      <span className={styles.crateArt} />
                      <strong>{name}</strong>
                      <em>{price}</em>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className={styles.beltEdge} />
          </div>

          <a className={styles.primaryCta} href="#conveyor-demo">
            Watch a pick happen ↓
          </a>
        </section>

        <section
          className={styles.demoSection}
          id="conveyor-demo"
          aria-labelledby="conveyor-demo-title"
        >
          <Reveal>
            <p className={styles.stamp}>live floor demo</p>
            <h2 id="conveyor-demo-title">From “I need…” to in-the-cart</h2>
          </Reveal>
          <Reveal delay={120}>
            <ThemedDemo
              themes={demoThemes}
              label="Paint it in your store's color:"
              className={styles.demoStage}
            >
              <div className={styles.demo}>
                <div
                  className={styles.store}
                  aria-label="Demo storefront curated by VoiceShop"
                >
                  <div className={styles.storeBar}>
                    <strong>NORTHLINE SUPPLY</strong>
                    <span className={styles.cart}>
                      cart <i>2</i>
                    </span>
                  </div>
                  <p className={styles.curated}>
                    curated live by your shopping assistant
                  </p>
                  <h3>day hikes</h3>
                  <p className={styles.filterRow}>
                    filters applied: <em>waterproof</em> <em>under $130</em>{" "}
                    <em>in stock</em>
                  </p>
                  <div className={styles.grid}>
                    {[
                      ["Trail Shell", "$120", "add"],
                      ["Ridge Bottle", "$28", "add"],
                      ["Summit Pack", "$95", "sold"],
                      ["Col Headlamp", "$44", "add"],
                    ].map(([name, price, state]) => (
                      <div className={styles.tile} key={name}>
                        <span className={styles.tileArt} />
                        <strong>{name}</strong>
                        <span className={styles.tileMeta}>
                          {price}
                          <em className={state === "add" ? styles.add : styles.sold}>
                            {state === "add" ? "add" : "sold out"}
                          </em>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={styles.ticket}
                  aria-label="Demo conversation with VoiceShop"
                >
                  <div className={styles.ticketHead}>
                    <span>
                      <VoiceGlyph className={styles.ticketGlyph} />
                      VoiceShop
                    </span>
                    <em>intent: buying</em>
                  </div>
                  <p className={`${styles.line} ${styles.shopper}`}>
                    “rain jacket for day hikes, under $130”
                  </p>
                  <p className={`${styles.line} ${styles.agent}`}>
                    Found it — the Trail Shell, waterproof and $120. I filtered
                    the page to everything that matches. Add it?
                  </p>
                  <p className={`${styles.line} ${styles.shopper}`}>
                    “what makes it different from the cheaper one?”
                  </p>
                  <p className={`${styles.line} ${styles.agent}`}>
                    The one on your screen is fully seam-taped; the cheaper one
                    is only coated. And code <strong>TRAIL10</strong> pairs
                    with the bottle in your cart.
                  </p>
                  <p className={`${styles.line} ${styles.action}`}>
                    → trail shell · added to cart ✓
                  </p>
                </div>
              </div>
            </ThemedDemo>
          </Reveal>
        </section>

        <section
          className={styles.manifest}
          aria-labelledby="conveyor-manifest-title"
        >
          <Reveal>
            <p className={styles.stamp}>the manifest</p>
            <h2 id="conveyor-manifest-title">Everything on board today</h2>
          </Reveal>
          <div className={styles.manifestList}>
            {manifest.map(([code, title, body], index) => (
              <Reveal
                key={code}
                className={styles.manifestRow}
                delay={index * 60}
              >
                <span className={styles.manifestCode}>{code}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.tower} aria-labelledby="conveyor-tower-title">
          <Reveal>
            <p className={styles.stamp}>control tower</p>
            <h2 id="conveyor-tower-title">The owner sees the whole line</h2>
          </Reveal>
          <div className={styles.towerGrid}>
            {tower.map(([title, body], index) => (
              <Reveal key={title} className={styles.towerCard} delay={index * 80}>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.incoming} aria-labelledby="conveyor-incoming-title">
          <Reveal>
            <p className={styles.stamp}>incoming shipments</p>
            <h2 id="conveyor-incoming-title">On the next truck</h2>
          </Reveal>
          <div className={styles.incomingList}>
            {incoming.map((item, index) => (
              <Reveal key={item} className={styles.incomingRow} delay={index * 70}>
                <span>ETA soon</span>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className={styles.waitlist}
          id="conveyor-waitlist"
          aria-labelledby="conveyor-waitlist-title"
        >
          <Reveal className={styles.waitlistPanel}>
            <h2 id="conveyor-waitlist-title">Get on the line.</h2>
            <p>
              VoiceShop ships to Shopify storefronts soon. Join the waitlist
              and we&apos;ll flag your crate.
            </p>
            <WaitlistForm id="conveyor-email" />
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>voiceshop</span>
        <span>answers → shows → sells</span>
      </footer>
    </div>
  );
}

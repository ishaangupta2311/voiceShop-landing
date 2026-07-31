import Image from "next/image";
import { StoreDemo } from "@/components/StoreDemo";
import { Reveal, WaitlistForm } from "@/components/shared";
import styles from "./say-the-word.module.css";

const saidTiles = [
  {
    src: "/images/store-aisle.webp",
    pos: "42% 55%",
    said: "“something for a gift, under $60”",
    did: "Page curated · 5 matches",
  },
  {
    src: "/images/shelf-detail.webp",
    pos: "55% 50%",
    said: "“what is this one for?”",
    did: "Answered — about the product on screen",
  },
  {
    src: "/images/dense-catalog.webp",
    pos: "40% 50%",
    said: "“only show me what's in stock”",
    did: "Filters applied",
  },
  {
    src: "/images/counter-moment.webp",
    pos: "35% 50%",
    said: "“add two of those”",
    did: "Cart updated ✓ · BUNDLE10 applied",
  },
];

const deepDives = [
  {
    tag: "Context",
    title: "It sees the page they’re on.",
    body: "Ask “what is this for?” on any product and the answer is about that product — the variant, the price, the thing actually on screen. No more “can you send me a link?” No more replies about the wrong item.",
    points: [
      "Reads the live product, variant and price in view",
      "Follows “that one”, “the blue”, “the cheaper one”",
      "Never answers about a product they aren’t looking at",
    ],
    image: "/images/phone-in-store.webp",
    pos: "58% 50%",
  },
  {
    tag: "Catalog",
    title: "It knows every shelf you have.",
    body: "Built for stores with a lot to sell. VoiceShop searches your published catalog mid-sentence and matches loose, human descriptions to the right SKU — then rewrites the storefront around the answer.",
    points: [
      "Real products, real prices, real stock — nothing invented",
      "Takes over the collection page with verified matches",
      "Re-indexes automatically as products, orders and reviews change",
    ],
    image: "/images/dense-catalog.webp",
    pos: "50% 50%",
    flip: true,
  },
  {
    tag: "Action",
    title: "It works the store, not just the chat.",
    body: "Filters, navigation, cart. The conversation moves the actual storefront, so a shopper who says what they want ends up looking at it — and buying it — without touching a menu.",
    points: [
      "Applies filters by voice: price, availability, type",
      "Navigates shoppers to any collection or product",
      "Adds to cart and surfaces the discounts that pair with it",
    ],
    image: "/images/counter-moment.webp",
    pos: "40% 55%",
  },
];

const dashboardRows = [
  ["Ready to buy", 74, "#c9f24a"],
  ["Browsing", 88, "#f2e29b"],
  ["Exploring", 52, "#d8c9f2"],
  ["Confused", 24, "#f2b9a0"],
  ["About to leave", 16, "#f29b9b"],
];

const faqs = [
  [
    "Does it work with my theme?",
    "Yes — VoiceShop reads your storefront’s styling and repaints itself to match, so it looks like part of the shop rather than a bolted-on widget. Try the colour swatches on the demo above.",
  ],
  [
    "Will it make up products or prices?",
    "No. Every answer is grounded in your published catalog, current prices, live inventory and the shopper’s actual cart. If it isn’t in your store, it won’t be offered.",
  ],
  [
    "What if I have thousands of SKUs?",
    "That’s the case it’s built for. The bigger and more varied your catalog, the more value there is in a shopper being able to describe what they want instead of hunting through filters.",
  ],
  [
    "Can shoppers type instead of talking?",
    "Yes. Voice is the fast path, but the panel takes typed messages too — same capabilities either way.",
  ],
  [
    "What do I get out of it as the owner?",
    "Every session is captured and replayable, each one scored by intent, with the metrics collected in an analytics dashboard — so you can see where sales stall instead of guessing.",
  ],
];

export default function SayTheWord() {
  return (
    <div className={styles.page}>
      {/* ================= HERO ================= */}
      <section className={styles.heroBand}>
        <header className={styles.nav}>
          <a className={styles.logo} href="#top">
            VoiceShop
          </a>
          <nav className={styles.navLinks} aria-label="Sections">
            <a href="#product">Product</a>
            <a href="#how">How it works</a>
            <a href="#owner">For owners</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className={styles.navCta} href="#waitlist">
            Join the waitlist
          </a>
        </header>

        <div className={styles.hero} id="top">
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Voice-first AI sales agent for Shopify
          </p>

          <h1 className={styles.headline}>
            A store that does
            <br />
            what you <em>say</em>
          </h1>

          <p className={styles.heroSub}>
            Your shoppers already know what they want. VoiceShop lets them just
            say it — then finds it, explains it, filters for it, and puts it in
            the cart.
          </p>

          <div className={styles.heroActions}>
            <a className={styles.ctaPrimary} href="#waitlist">
              Join the waitlist
            </a>
            <a className={styles.ctaGhost} href="#product">
              See it running ↓
            </a>
          </div>

          <p className={styles.heroNote}>
            Matches your theme · built for big catalogs · no shopper setup
          </p>
        </div>

        <div className={styles.heroDemo} id="product">
          <StoreDemo />
          <p className={styles.demoCaption}>
            One conversation: found the products, took over the collection page,
            answered about the item on screen, and paired the discount.
          </p>
        </div>
      </section>

      {/* ================= SAID / DID ================= */}
      <section className={styles.saidBand}>
        <Reveal>
          <p className={styles.sectionEyebrow}>What shoppers actually say</p>
          <h2 className={styles.sectionTitle}>
            Real sentences.
            <br />
            <em>Real</em> store actions.
          </h2>
        </Reveal>

        <div className={styles.saidGrid}>
          {saidTiles.map((tile, index) => (
            <Reveal key={tile.said} className={styles.saidCard} delay={index * 80}>
              <figure className={styles.saidFigure}>
                <Image
                  src={tile.src}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 45vw, 22vw"
                  style={{ objectFit: "cover", objectPosition: tile.pos }}
                />
              </figure>
              <p className={styles.saidQuote}>{tile.said}</p>
              <p className={styles.saidResult}>{tile.did}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= DEEP DIVES ================= */}
      <section className={styles.diveBand} id="how">
        <Reveal>
          <p className={styles.sectionEyebrow}>How it works</p>
          <h2 className={styles.sectionTitle}>
            Not a chatbot.
            <br />A <em>salesperson</em>.
          </h2>
        </Reveal>

        {deepDives.map((dive, index) => (
          <Reveal
            key={dive.title}
            className={`${styles.dive} ${dive.flip ? styles.diveFlip : ""}`}
            delay={60}
          >
            <div className={styles.diveCopy}>
              <span className={styles.diveTag}>{dive.tag}</span>
              <h3>{dive.title}</h3>
              <p>{dive.body}</p>
              <ul className={styles.diveList}>
                {dive.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <figure className={styles.diveFigure}>
              <Image
                src={dive.image}
                alt=""
                fill
                sizes="(max-width: 900px) 90vw, 46vw"
                style={{ objectFit: "cover", objectPosition: dive.pos }}
              />
              <figcaption className={styles.diveIndex}>
                0{index + 1}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </section>

      {/* ================= OWNER ================= */}
      <section className={styles.ownerBand} id="owner">
        <Reveal>
          <p className={styles.eyebrowLight}>For the owner</p>
          <h2 className={styles.sectionTitleLight}>
            It sells out front and takes
            <br />
            <em>notes</em> in the back.
          </h2>
        </Reveal>

        <div className={styles.ownerGrid}>
          <Reveal className={styles.dashboard} delay={80}>
            <div className={styles.dashHead}>
              <strong>Session intent — this week</strong>
              <span>illustrative dashboard</span>
            </div>
            <div className={styles.dashRows}>
              {dashboardRows.map(([label, width, color]) => (
                <div className={styles.dashRow} key={label as string}>
                  <span>{label}</span>
                  <span className={styles.dashTrack}>
                    <i
                      style={{
                        width: `${width}%`,
                        background: color as string,
                      }}
                    />
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.dashReplay}>
              <span className={styles.replayDot} aria-hidden="true" />
              <p>
                <strong>Session #4,183 · replay saved.</strong> Asked for
                something calming, compared two blends, dropped at the shipping
                question.
              </p>
            </div>
          </Reveal>

          <div className={styles.ownerCards}>
            {[
              [
                "Every session captured",
                "Replay any conversation end to end — see exactly where a sale stalled and why the customer left.",
              ],
              [
                "Intent predicted live",
                "Buying, browsing, exploring, confused, about to leave — scored per session, not guessed after the fact.",
              ],
              [
                "One analytics home",
                "All the metrics and conversation analysis in a dashboard built for store owners, not data teams.",
              ],
              [
                "Never out of date",
                "Products, orders and reviews re-index the moment they change, so answers stay true.",
              ],
            ].map(([title, body], index) => (
              <Reveal key={title} className={styles.ownerCard} delay={index * 70}>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ROADMAP ================= */}
      <section className={styles.soonBand}>
        <Reveal>
          <p className={styles.sectionEyebrow}>On the way</p>
          <h2 className={styles.sectionTitle}>
            Already in the <em>works</em>
          </h2>
        </Reveal>
        <div className={styles.soonGrid}>
          {[
            ["Social proof, in the conversation", "Reviews, ratings and video demos served right where the shopper is deciding."],
            ["Capture on the right trigger", "Restock alerts, newsletters and waitlists offered exactly when they matter — like when something’s out of stock."],
            ["Support for returning customers", "Order-aware help for logged-in shoppers, using their real order history."],
            ["A model that keeps learning", "Every conversation feeds back, so the agent gets better at selling your catalog specifically."],
          ].map(([title, body], index) => (
            <Reveal key={title} className={styles.soonCard} delay={index * 70}>
              <span>Coming soon</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className={styles.faqBand} id="faq">
        <Reveal>
          <p className={styles.sectionEyebrow}>Questions</p>
          <h2 className={styles.sectionTitle}>
            The <em>obvious</em> ones
          </h2>
        </Reveal>
        <div className={styles.faqList}>
          {faqs.map(([q, a], index) => (
            <Reveal key={q} delay={index * 50}>
              <details className={styles.faqItem}>
                <summary>
                  {q}
                  <span aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= POSTER CTA ================= */}
      <section className={styles.posterBand} id="waitlist">
        <div className={styles.poster}>
          <Image
            src="/images/store-aisle.webp"
            alt="A shopper browsing a rail of clothing in a minimal boutique"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "50% 58%" }}
          />
          <div className={styles.posterType} aria-hidden="true">
            <span>Say</span>
            <span className={styles.posterItalic}>the</span>
            <span>word.</span>
          </div>
        </div>
        <Reveal className={styles.posterForm}>
          <h2>Give your store a voice.</h2>
          <p>
            VoiceShop is coming to Shopify storefronts. Join the waitlist and
            we&apos;ll get you in early.
          </p>
          <WaitlistForm id="word-email" />
        </Reveal>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>VoiceShop</span>
            <p>The voice-first AI sales agent for Shopify storefronts.</p>
          </div>
          <div className={styles.footerCols}>
            <div>
              <h4>Product</h4>
              <a href="#product">Live demo</a>
              <a href="#how">How it works</a>
              <a href="#owner">Analytics</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#top">About</a>
              <a href="#waitlist">Waitlist</a>
              <a href="#top">Contact</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#top">Privacy</a>
              <a href="#top">Terms</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBase}>
          <span>© {new Date().getFullYear()} VoiceShop</span>
          <span>Answers. Shows. Sells.</span>
        </div>
      </footer>
    </div>
  );
}

import Image from "next/image";
import { StoreDemo } from "@/components/StoreDemo";
import { Reveal, WaitlistForm } from "@/components/shared";
import WaveMotion from "./WaveMotion";
import styles from "./the-wave.module.css";

const capabilities = [
  {
    n: "01",
    title: "Hears what they mean",
    body: "Shoppers describe things the way people actually talk. VoiceShop turns that into a real catalog query — no keywords, no filter menus.",
  },
  {
    n: "02",
    title: "Sees what they’re seeing",
    body: "It knows the product, variant and price on screen, so “what is this for?” is answered about that item — never a random one.",
  },
  {
    n: "03",
    title: "Moves the storefront",
    body: "Curates the collection page, applies filters, and walks shoppers to any part of the store as the conversation goes.",
  },
  {
    n: "04",
    title: "Closes the sale",
    body: "Adds to cart mid-sentence and surfaces the discount that pairs with what’s already in there.",
  },
];

const intentStates = [
  ["Ready to buy", "Gets a clean run: answer, product, cart, checkout."],
  ["Browsing", "Gets a curated page instead of an endless scroll."],
  ["Exploring", "Gets options framed by what they actually said."],
  ["Confused", "Gets a straight answer about the thing on their screen."],
  ["About to leave", "Gets one relevant, honest reason to stay."],
];

const faqs = [
  [
    "How does it fit my store’s look?",
    "It reads your storefront styling and repaints itself to match — the panel, the buttons, the accents. Use the swatches on the demo to see it change.",
  ],
  [
    "Can it invent a product that doesn’t exist?",
    "No. Answers are grounded in your published catalog, live prices, current inventory and the shopper’s real cart.",
  ],
  [
    "Does it handle a very large catalog?",
    "That’s the point. The more you sell, the harder your store is to browse — and the more a shopper gains from just describing what they want.",
  ],
  [
    "What do I see as the merchant?",
    "Every session is captured and replayable, scored by intent, with the numbers collected in an analytics dashboard.",
  ],
];

export default function TheWave() {
  return (
    <div className={styles.page} data-wave-page>
      <WaveMotion />
      {/* ============== HERO ============== */}
      <section
        className={styles.hero}
        id="top"
        data-wave-hero
        data-wave-section
      >
        <Image
          className={styles.heroImage}
          src="/images/store-aisle.webp"
          alt="A shopper browsing a rail of clothing in a sunlit minimal boutique"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} aria-hidden="true" />

        <header className={styles.nav} data-wave-nav>
          <a className={styles.logo} href="#top">
            VoiceShop
          </a>
          <nav className={styles.navLinks} aria-label="Sections">
            <a href="#demo">Product</a>
            <a href="#how">How it works</a>
            <a href="#owner">Analytics</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className={styles.navCta} href="#waitlist">
            Join the waitlist
          </a>
        </header>

        <div className={styles.heroCopy}>
          <p className={styles.heroEyebrow}>
            <span aria-hidden="true" />
            Voice-first AI sales agent for Shopify
          </p>
          <h1>
            Your store can
            <br />
            <em>hear</em> now.
          </h1>
          <p className={styles.heroSub}>
            Shoppers speak. The storefront answers, rearranges itself around
            what they asked for, and moves the cart — all inside your own theme.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.ctaPrimary} href="#waitlist">
              Join the waitlist
            </a>
            <a className={styles.ctaGhost} href="#demo">
              Listen in ↓
            </a>
          </div>
        </div>

        <div className={styles.heroFade} aria-hidden="true" />
      </section>

      {/* ============== DEMO ============== */}
      <section
        className={styles.demoSection}
        id="demo"
        data-wave-demo
        data-wave-section
      >
        <Reveal className={styles.demoIntro}>
          <p className={styles.eyebrow}>One real conversation</p>
          <h2>
            It doesn&apos;t chat.
            <br />
            <em>It sells.</em>
          </h2>
          <p className={styles.sectionSub}>
            The shopper never touched a filter or a search box. Everything below
            happened by voice — and the widget dressed itself in the store&apos;s
            colours on the way in.
          </p>
        </Reveal>
        <Reveal className={styles.demoHolder} delay={100}>
          <StoreDemo />
        </Reveal>
      </section>

      {/* ============== CAPABILITIES ============== */}
      <section
        className={styles.capSection}
        id="how"
        data-wave-section
      >
        <Reveal>
          <p className={styles.eyebrow}>How it works</p>
          <h2 className={styles.capTitle}>
            Four things a good salesperson does.
            <br />
            <em>All of them, on every visit.</em>
          </h2>
        </Reveal>
        <div className={styles.capList} data-scroll-cards>
          {capabilities.map((cap) => (
            <article
              key={cap.n}
              className={styles.capRow}
              data-scroll-card
            >
              <span className={styles.capNum}>{cap.n}</span>
              <h3>{cap.title}</h3>
              <p>{cap.body}</p>
              <span className={styles.capArrow} aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ============== OWNER / INTENT ============== */}
      <section
        className={styles.ownerSection}
        id="owner"
        data-wave-section
      >
        <div className={styles.ownerGrid}>
          <Reveal className={styles.ownerCopy}>
            <p className={styles.eyebrow}>For the merchant</p>
            <h2>
              It reads the room —<br />
              <em>every room.</em>
            </h2>
            <p className={styles.sectionSub}>
              VoiceShop scores each visitor&apos;s intent live and adapts. Every
              session is captured and replayable, so you can finally see where
              sales stall instead of guessing. Products, orders and reviews
              re-index themselves the moment they change.
            </p>
            <ul className={styles.intentList}>
              {intentStates.map(([state, response]) => (
                <li key={state}>
                  <strong>{state}</strong>
                  <span>{response}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.ownerVisual} delay={120}>
            <div className={styles.ownerPhoto}>
              <Image
                src="/images/shelf-detail.webp"
                alt="A shelf of unbranded amber bottles and ceramic jars in soft light"
                fill
                sizes="(max-width: 940px) 92vw, 44vw"
                style={{ objectFit: "cover", objectPosition: "55% 50%" }}
              />
            </div>
            <div className={styles.sessionCard}>
              <div className={styles.sessionTop}>
                <span className={styles.sessionDot} aria-hidden="true" />
                Session #4,183
                <em>replay saved</em>
              </div>
              <p className={styles.sessionLine}>
                Asked for “something calming”, compared two blends, dropped at
                the shipping question.
              </p>
              <div className={styles.sessionTags}>
                <span>intent: browsing → confused</span>
                <span>4m 12s</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== ROADMAP ============== */}
      <section className={styles.soonSection}>
        <Reveal>
          <p className={styles.eyebrow}>On the way</p>
          <h2 className={styles.soonTitle}>
            Still <em>tuning</em>
          </h2>
        </Reveal>
        <div className={styles.soonList}>
          {[
            ["Social proof in-conversation", "Reviews, ratings and video demos where the decision happens."],
            ["Triggered capture", "Restock alerts and newsletter sign-ups fired at the right moment."],
            ["Order-aware support", "Help for logged-in, returning customers using their order history."],
            ["A model that learns", "Every conversation feeds back into a better sales agent."],
          ].map(([title, body], index) => (
            <Reveal key={title} className={styles.soonRow} delay={index * 60}>
              <span className={styles.soonBadge}>Coming soon</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section
        className={styles.faqSection}
        id="faq"
        data-wave-section
      >
        <Reveal>
          <p className={styles.eyebrow}>Questions</p>
          <h2 className={styles.faqTitle}>Before you ask</h2>
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

      {/* ============== WAITLIST ============== */}
      <section
        className={styles.waitlistSection}
        id="waitlist"
        data-wave-section
      >
        <Image
          className={styles.waitlistImage}
          src="/images/soft-texture.webp"
          alt=""
          fill
          sizes="100vw"
        />
        <div className={styles.waitlistShade} aria-hidden="true" />
        <Reveal className={styles.waitlistInner}>
          <h2>
            Give your store a <em>voice.</em>
          </h2>
          <p>
            VoiceShop is coming to Shopify storefronts. Join the waitlist for
            early access.
          </p>
          <WaitlistForm id="wave-email" />
        </Reveal>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>VoiceShop</span>
            <p>The voice-first AI sales agent for Shopify storefronts.</p>
          </div>
          <div className={styles.footerCols}>
            <div>
              <h4>Product</h4>
              <a href="#demo">Live demo</a>
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
          <span>The store that listens</span>
        </div>
      </footer>
    </div>
  );
}

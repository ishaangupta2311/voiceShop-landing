import Image from "next/image";
import { StoreDemo } from "@/components/StoreDemo";
import { FeatureChapters } from "@/components/FeatureChapters";
import { Reveal, WaitlistForm } from "@/components/shared";
import WaveMotion from "./WaveMotion";
import styles from "./the-wave.module.css";

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
            <a href="#features">Features</a>
            <a href="#everything">Everything</a>
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

      {/* ============== FEATURE CHAPTERS (films) ============== */}
      <div id="how">
        <FeatureChapters />
      </div>

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
              A shop floor tells you everything. A website tells you a bounce
              rate. VoiceShop closes that gap: every conversation is captured
              and replayable, scored by what the shopper was actually trying to
              do — so &ldquo;why did they leave?&rdquo; finally has an answer
              instead of a theory.
            </p>
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
              <a href="#features">Features</a>
              <a href="#everything">Every capability</a>
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

import Image from "next/image";
import { Reveal, WaitlistForm } from "@/components/shared";
import styles from "./the-wave.module.css";

const senses = [
  ["👁", "Sees the page", "Knows the product on screen — “what is this for?” lands."],
  ["🗂", "Knows the catalog", "Searches live products, prices, stock. Never invents."],
  ["🧭", "Navigates", "Walks shoppers across the store as the talk flows."],
  ["🎚", "Filters", "“Under $100, in stock” — applied on the page, instantly."],
  ["🛒", "Carts", "Validated add-to-cart, mid-sentence."],
  ["🏷", "Pairs deals", "Surfaces the discount that fits their cart."],
];

const intents = [
  ["Ready to buy", "Gets a clear path: product, answer, cart, checkout."],
  ["Browsing", "Gets curated pages instead of endless scrolling."],
  ["Confused", "Gets a straight answer about the thing on their screen."],
  ["About to leave", "Gets one honest, relevant reason to stay."],
];

const soon = [
  "Reviews, social proof & video demos in the conversation",
  "Restock alerts & newsletter capture on smart triggers",
  "Order-aware support for returning customers",
  "A model that learns from every conversation",
];

export default function TheWave() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Image
          className={styles.heroImage}
          src="/images/open-shop.webp"
          alt="A shopper in a boutique as a blue voice wave moves through the store"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroShade} aria-hidden="true" />

        <header className={styles.header}>
          <span className={styles.brand}>VoiceShop</span>
          <span className={styles.brandNote}>for Shopify</span>
          <a className={styles.headerCta} href="#wave-waitlist">
            Join the waitlist
          </a>
        </header>

        <div className={styles.heroCopy}>
          <h1>
            Your store can <em>hear</em> now.
          </h1>
          <p>
            VoiceShop is a voice-first AI sales agent that lives in your
            storefront. Shoppers speak — and the store answers, rearranges,
            and sells.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href="#wave-waitlist">
              Join the waitlist
            </a>
            <a className={styles.ghostCta} href="#wave-listen">
              Listen in ↓
            </a>
          </div>
        </div>

        <div className={styles.heroWidget} aria-hidden="true">
          <div className={styles.widgetHead}>
            <span />
            VoiceShop <em>listening</em>
          </div>
          <p className={styles.wShopper}>“that blue dress — do you have a medium?”</p>
          <p className={styles.wAgent}>
            The one you&apos;re looking at? Yes — two mediums left. Want it in
            your cart?
          </p>
          <div className={styles.wWave}>
            {[6, 12, 20, 10, 16, 8, 14, 6].map((h, i) => (
              <i key={i} style={{ height: `${h}px`, animationDelay: `${i * 80}ms` }} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.senses} id="wave-listen">
        <Reveal>
          <h2>
            It doesn&apos;t chat. <em>It sells.</em>
          </h2>
          <p className={styles.sectionSub}>
            Six senses, all grounded in your live store — theme-matched so it
            feels native, built for catalogs of any size.
          </p>
        </Reveal>
        <div className={styles.senseRow}>
          {senses.map(([icon, title, body], index) => (
            <Reveal key={title} className={styles.sense} delay={index * 60}>
              <span aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.intent}>
        <div className={styles.intentGrid}>
          <Reveal className={styles.intentCopy}>
            <h2>
              It reads the room —<em> every room.</em>
            </h2>
            <p>
              VoiceShop predicts each visitor&apos;s intent live and adapts the
              sale to it. Every session lands in your dashboard, scored and
              replayable, so you finally know why customers leave.
            </p>
            <ul className={styles.intentList}>
              {intents.map(([state, response]) => (
                <li key={state}>
                  <strong>{state}</strong>
                  <span>{response}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className={styles.intentVisual} delay={140}>
            <Image
              src="/images/guided-sale.webp"
              alt="A calm living room with a glowing thread connecting products"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
            <div className={styles.intentBadge}>
              <em>session #4,183</em>
              intent: ready to buy · replay saved
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className={styles.shopifyStrip}>
        <p>
          Already on Shopify? VoiceShop drops in, reads your theme, and
          auto-indexes your products, orders, and reviews — and keeps them
          fresh on every change.
        </p>
        <a href="#wave-waitlist">Get early access</a>
      </Reveal>

      <section className={styles.soon}>
        <Reveal>
          <h2>
            Still <em>tuning</em>
          </h2>
        </Reveal>
        <ul className={styles.soonList}>
          {soon.map((item, index) => (
            <Reveal key={item} delay={index * 70}>
              <li>{item}</li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className={styles.waitlist} id="wave-waitlist">
        <Image
          className={styles.waitlistImage}
          src="/images/signal-garden.webp"
          alt=""
          fill
          sizes="100vw"
        />
        <div className={styles.waitlistShade} aria-hidden="true" />
        <Reveal className={styles.waitlistInner}>
          <h2>
            Give your store a <em>voice.</em>
          </h2>
          <p>Early access is coming to Shopify storefronts.</p>
          <WaitlistForm id="wave-email" />
        </Reveal>
      </section>

      <footer className={styles.footer}>
        <span>VoiceShop</span>
        <span>The store that listens</span>
      </footer>
    </div>
  );
}

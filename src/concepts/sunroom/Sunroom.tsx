import { Reveal, VoiceGlyph, WaitlistForm } from "@/components/shared";
import styles from "./sunroom.module.css";

const buddies = [
  {
    emoji: "👀",
    title: "It sees the page",
    body: "VoiceShop knows the exact product, variant, and price your shopper is looking at — so every answer fits the moment.",
  },
  {
    emoji: "🔎",
    title: "It knows the shelves",
    body: "It searches your published Shopify catalog mid-chat. Real products, current prices, actual stock — never made up.",
  },
  {
    emoji: "🛒",
    title: "It fills the cart",
    body: "It opens products and runs validated add-to-cart and remove-from-cart actions, then walks the shopper toward checkout.",
  },
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
            VoiceShop is a voice-first AI sales agent for Shopify. Shoppers
            speak, it answers from your real catalog — and the storefront
            changes to show exactly what they meant.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href="#sunroom-waitlist">
              Join the waitlist
            </a>
            <a className={styles.secondaryCta} href="#sunroom-chat">
              Watch it chat ↓
            </a>
          </div>
        </section>

        <section
          className={styles.chat}
          id="sunroom-chat"
          aria-labelledby="sunroom-chat-title"
        >
          <h2 id="sunroom-chat-title" className="sr-only">
            Example conversation
          </h2>
          <Reveal className={styles.chatWindow}>
            <div className={`${styles.bubble} ${styles.bubbleShopper}`}>
              Hi! Do you have anything for sensitive skin? 🥺
            </div>
            <div className={`${styles.bubble} ${styles.bubbleAgent}`}>
              We do! The <strong>Cloud Cream</strong> is fragrance-free and our
              gentlest one — it&apos;s on your screen now. Want it in your cart?
            </div>
            <div className={`${styles.bubble} ${styles.bubbleShopper}`}>
              Yes please!
            </div>
            <div className={`${styles.bubble} ${styles.bubbleCart}`}>
              🛒 Cloud Cream added — checkout&apos;s one tap away
            </div>
            <div className={styles.chatMic} aria-hidden="true">
              <VoiceGlyph className={styles.micGlyph} />
              <span>listening…</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className={styles.chatCaption}>
              Said out loud — and the storefront rearranged itself to match.
            </p>
          </Reveal>
        </section>

        <section className={styles.buddies} aria-labelledby="sunroom-buddies-title">
          <Reveal>
            <h2 id="sunroom-buddies-title">What your buddy does all day</h2>
          </Reveal>
          <div className={styles.buddyGrid}>
            {buddies.map((buddy, index) => (
              <Reveal
                key={buddy.title}
                className={styles.buddyCard}
                delay={index * 90}
              >
                <span className={styles.buddyEmoji} aria-hidden="true">
                  {buddy.emoji}
                </span>
                <h3>{buddy.title}</h3>
                <p>{buddy.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className={styles.buddyFootnote}>
              Grounded on purpose: current catalog, price, inventory, variant,
              and cart context — nothing invented.
            </p>
          </Reveal>
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

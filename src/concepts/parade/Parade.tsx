import { Reveal, VoiceGlyph, WaitlistForm } from "@/components/shared";
import styles from "./parade.module.css";

const floats = [
  {
    tone: "cobalt",
    title: "Say it",
    body: "“Something cozy for movie nights — big, washable, not beige.” Real sentences welcome.",
  },
  {
    tone: "sunshine",
    title: "See it",
    body: "VoiceShop searches your published catalog and marches the matches right onto the page.",
  },
  {
    tone: "cherry",
    title: "Cart it",
    body: "One more word and it runs a validated add-to-cart. The parade ends at checkout.",
  },
];

export default function Parade() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>
          <VoiceGlyph className={styles.brandGlyph} />
          VoiceShop
        </span>
        <a className={styles.headerCta} href="#parade-waitlist">
          Join the waitlist
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="parade-title">
          <div className={styles.stickers} aria-hidden="true">
            <span className={`${styles.sticker} ${styles.stickerCobalt}`}>
              voice-first
            </span>
            <span className={`${styles.sticker} ${styles.stickerSunshine}`}>
              for Shopify
            </span>
            <span className={`${styles.sticker} ${styles.stickerCherry}`}>
              real catalog only
            </span>
          </div>

          <h1 id="parade-title">
            <span className={styles.lineOne}>Say it.</span>
            <span className={styles.lineTwo}>See it.</span>
            <span className={styles.lineThree}>Cart it.</span>
          </h1>

          <p className={styles.lede}>
            VoiceShop is the AI sales agent that turns talking into shopping —
            it hears your shoppers, shows real products from your Shopify
            catalog, and moves the cart while the excitement&apos;s still there.
          </p>

          <a className={styles.primaryCta} href="#parade-waitlist">
            Join the waitlist
          </a>
        </section>

        <section className={styles.floats} aria-labelledby="parade-floats-title">
          <Reveal>
            <h2 id="parade-floats-title">The three-step parade</h2>
          </Reveal>
          <div className={styles.floatRow}>
            {floats.map((item, index) => (
              <Reveal
                key={item.title}
                className={`${styles.floatCard} ${styles[item.tone]}`}
                delay={index * 100}
              >
                <span className={styles.floatStep}>{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.banner} aria-labelledby="parade-banner-title">
          <Reveal>
            <h2 id="parade-banner-title" className="sr-only">
              What VoiceShop always knows
            </h2>
            <ul className={styles.bannerList}>
              <li>Sees the page the shopper&apos;s on</li>
              <li>Searches the live catalog</li>
              <li>Knows prices, stock &amp; variants</li>
              <li>Works the real cart</li>
            </ul>
          </Reveal>
        </section>

        <section
          className={styles.waitlist}
          id="parade-waitlist"
          aria-labelledby="parade-waitlist-title"
        >
          <Reveal className={styles.waitlistCard}>
            <h2 id="parade-waitlist-title">Lead the parade.</h2>
            <p>
              VoiceShop is coming to Shopify storefronts — join the waitlist
              and march in first.
            </p>
            <WaitlistForm id="parade-email" />
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        VoiceShop · the storefront that talks back
      </footer>
    </div>
  );
}

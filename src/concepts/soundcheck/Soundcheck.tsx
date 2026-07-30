import { Reveal, VoiceGlyph, WaitlistForm } from "@/components/shared";
import styles from "./soundcheck.module.css";

const heights = [22, 38, 56, 30, 66, 44, 74, 52, 34, 60, 42, 26, 48, 36, 20];

const chain = [
  {
    port: "IN",
    name: "Voice",
    detail: "The shopper speaks. Intent comes through clean.",
  },
  {
    port: "CH 1",
    name: "Page",
    detail: "Current product, variant, and price feed the mix.",
  },
  {
    port: "CH 2",
    name: "Catalog",
    detail: "Published products only — searched live, never invented.",
  },
  {
    port: "OUT",
    name: "Cart",
    detail: "Validated add and remove actions close the take.",
  },
];

export default function Soundcheck() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>
          <VoiceGlyph className={styles.brandGlyph} />
          VoiceShop
        </span>
        <span className={styles.headerTag}>voice-first sales · shopify</span>
        <a className={styles.headerCta} href="#soundcheck-waitlist">
          Join the waitlist
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="soundcheck-title">
          <p className={styles.slate}>storefront — take one</p>
          <h1 id="soundcheck-title">
            Your storefront,
            <br />
            tuned to <span>selling.</span>
          </h1>
          <p className={styles.lede}>
            VoiceShop listens like a good engineer: the shopper&apos;s voice on
            one channel, your live Shopify catalog on the other — mixed into
            products on screen and items in the cart.
          </p>

          <div className={styles.board} aria-hidden="true">
            <div className={styles.meters}>
              {heights.map((height, index) => (
                <span
                  key={index}
                  style={{
                    height: `${height}%`,
                    animationDelay: `${index * 90}ms`,
                  }}
                />
              ))}
            </div>
            <div className={styles.boardLabels}>
              <span>voice</span>
              <span>page</span>
              <span>catalog</span>
              <span>cart</span>
            </div>
          </div>

          <a className={styles.primaryCta} href="#soundcheck-waitlist">
            Join the waitlist
          </a>
        </section>

        <section className={styles.take} aria-labelledby="soundcheck-take-title">
          <Reveal>
            <p className={styles.label}>Session log</p>
            <h2 id="soundcheck-take-title">A clean take</h2>
          </Reveal>
          <Reveal className={styles.console} delay={100}>
            <div className={styles.consoleBar}>
              <span>storefront.session</span>
              <span className={styles.rec}>
                <i aria-hidden="true" /> live
              </span>
            </div>
            <div className={styles.lines}>
              <p>
                <span className={styles.lineWho}>shopper</span>
                “got any desk lamps that aren&apos;t huge?”
              </p>
              <p>
                <span className={styles.lineWho}>voiceshop</span>
                two compact ones on the shelf — showing both on your screen now
              </p>
              <p>
                <span className={styles.lineWho}>shopper</span>
                “the brass one, add it”
              </p>
              <p className={styles.lineAction}>
                <span className={styles.lineWho}>cart</span>
                brass task lamp — added ✓ (validated against live cart)
              </p>
            </div>
          </Reveal>
        </section>

        <section
          className={styles.chain}
          aria-labelledby="soundcheck-chain-title"
        >
          <Reveal>
            <p className={styles.label}>Signal chain</p>
            <h2 id="soundcheck-chain-title">Voice in. Cart out.</h2>
          </Reveal>
          <div className={styles.patchbay}>
            {chain.map((node, index) => (
              <Reveal
                key={node.port}
                className={styles.node}
                delay={index * 90}
              >
                <span className={styles.nodePort}>{node.port}</span>
                <h3>{node.name}</h3>
                <p>{node.detail}</p>
                {index < chain.length - 1 && (
                  <span className={styles.cable} aria-hidden="true" />
                )}
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className={styles.waitlist}
          id="soundcheck-waitlist"
          aria-labelledby="soundcheck-waitlist-title"
        >
          <Reveal className={styles.waitlistPanel}>
            <p className={styles.label}>Now booking</p>
            <h2 id="soundcheck-waitlist-title">Get your store on the desk.</h2>
            <p className={styles.waitlistIntro}>
              VoiceShop is heading to Shopify storefronts. Join the waitlist
              for a seat at the session.
            </p>
            <WaitlistForm id="soundcheck-email" />
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>voiceshop</span>
        <span>no takes wasted · answers, shows, sells</span>
      </footer>
    </div>
  );
}

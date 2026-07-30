import Image from "next/image";
import { Reveal, WaitlistForm } from "@/components/shared";
import styles from "./loudmouth.module.css";

const saidPills = [
  ["“show me your calm stuff”", "page curated · 8 matches"],
  ["“what's this one for?”", "it knows — it sees your screen"],
  ["“under $30 only please”", "filters applied ✓"],
  ["“take me to gift sets”", "navigating… you're there"],
  ["“add two to my cart”", "carted ✓ (code PAIR10 works btw)"],
];

const polaroids = [
  {
    src: "/images/open-shop.webp",
    caption: "the voice, moving thru a real store",
    rotate: "-3deg",
  },
  {
    src: "/images/signal-garden.webp",
    caption: "it knows all of these by name",
    rotate: "2.5deg",
  },
  {
    src: "/images/high-intent.webp",
    caption: "stuff, flying into carts",
    rotate: "-2deg",
  },
];

const bossNotes = [
  ["every session recorded", "replay the ones that got away — see exactly why they left"],
  ["intent, predicted", "buying · browsing · confused · about to bail — scored live"],
  ["one dashboard", "all the metrics & conversation analysis in one place"],
  ["always fresh", "products, orders & reviews re-index themselves on change"],
];

const cooking = [
  "reviews & video demos, in the chat",
  "restock alerts when stuff sells out",
  "support mode for returning customers (it knows their orders)",
  "a model that learns from every convo",
];

export default function Loudmouth() {
  return (
    <div className={styles.page}>
      <section className={styles.navyBand}>
        <header className={styles.header}>
          <span className={styles.brand}>VoiceShop</span>
          <a className={styles.headerCta} href="#loud-waitlist">
            join the waitlist!
          </a>
        </header>

        <div className={styles.hero}>
          <div className={styles.bubble}>
            <span className={styles.bubbleWave} aria-hidden="true">
              {[10, 22, 34, 18, 28, 12, 24, 16].map((h, i) => (
                <i
                  key={i}
                  style={{ height: `${h}px`, animationDelay: `${i * 90}ms` }}
                />
              ))}
            </span>
            <span className={styles.annotBubble} aria-hidden="true">
              ← that&apos;s your store talking!
            </span>
          </div>

          <h1>
            I&apos;m tired of
            <br />
            <em>silent</em> stores.
          </h1>
          <p className={styles.heroSub}>
            Shopping is better with someone to talk to. VoiceShop puts a
            voice-first AI salesperson inside your Shopify store — it answers,
            shows, navigates, and carts. Out loud.
          </p>
          <a className={styles.bigCta} href="#loud-demo">
            make it talk ↓
          </a>
          <span className={styles.annotCta} aria-hidden="true">
            (seriously, it talks)
          </span>
        </div>

        <div className={styles.wavyEdge} aria-hidden="true" />
      </section>

      <section className={styles.cyanBand} id="loud-demo">
        <Reveal>
          <h2 className={styles.cyanTitle}>
            It talks. It walks.
            <br />
            It sells.
          </h2>
        </Reveal>

        <div className={styles.saidList} aria-label="Things shoppers say and what happens">
          {saidPills.map(([said, result], index) => (
            <Reveal
              key={said}
              className={`${styles.saidRow} ${index % 2 ? styles.saidRight : ""}`}
              delay={index * 70}
            >
              <span className={styles.saidPill}>{said}</span>
              <span className={styles.saidResult}>{result}</span>
            </Reveal>
          ))}
        </div>

        <div className={styles.polaroidRow}>
          {polaroids.map((polaroid) => (
            <Reveal key={polaroid.caption}>
              <figure
                className={styles.polaroid}
                style={{ rotate: polaroid.rotate }}
              >
                <div className={styles.polaroidImage}>
                  <Image
                    src={polaroid.src}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 90vw, 320px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <figcaption>{polaroid.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.shout}>
          <div className={styles.shoutBox}>
            <h2>TALK TO YOUR STORE</h2>
            <p>
              a voice-first shopping thing that blends into your theme &amp;
              handles catalogs of any size
            </p>
          </div>
        </Reveal>
      </section>

      <section className={styles.navyBandTwo}>
        <Reveal>
          <h2 className={styles.bossTitle}>
            and for you, boss —<em> it takes notes</em>
          </h2>
        </Reveal>
        <div className={styles.bossGrid}>
          {bossNotes.map(([title, body], index) => (
            <Reveal key={title} className={styles.bossCard} delay={index * 80}>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.cooking}>
          <h2 className={styles.cookingTitle}>
            still cooking <span aria-hidden="true">🍳</span>
          </h2>
          <ul>
            {cooking.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className={styles.waitlistZone} delay={100}>
          <span className={styles.annotForm} aria-hidden="true">
            put your email here ↓
          </span>
          <div id="loud-waitlist" className={styles.formWrap}>
            <h2>give every shopper a shopping buddy</h2>
            <WaitlistForm id="loud-email" />
          </div>
        </Reveal>
      </section>

      <footer className={styles.footer}>
        <span>© VoiceShop — the store that talks back</span>
      </footer>
    </div>
  );
}

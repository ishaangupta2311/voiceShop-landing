import Image from "next/image";
import { Reveal, WaitlistForm } from "@/components/shared";
import styles from "./subtitles.module.css";

const heroWords = [
  "Your",
  "customers",
  "are",
  "already",
  "talking.",
  "Your",
  "store",
  "just",
  "can't",
  "hear",
  "them.",
];

const transcript = [
  {
    time: "00:04",
    who: "shopper",
    line: "“show me your kratom products”",
  },
  {
    time: "00:05",
    who: "voiceshop",
    line: "Here's everything available — powders, capsules, seltzers. Showing 2 here, all 8 on the page so you can browse.",
    visual: true,
  },
  {
    time: "00:06",
    who: "caption",
    line: "PAGE CURATED — 8 VERIFIED CATALOG MATCHES",
  },
  {
    time: "00:19",
    who: "shopper",
    line: "“wait — what is this one for?”",
  },
  {
    time: "00:20",
    who: "voiceshop",
    line: "The one on your screen — Uplift Powder — is the energizing blend. White vein, 1000g. The Calm line is the mellow one.",
  },
  {
    time: "00:21",
    who: "caption",
    line: "IT SEES THE PAGE. NO WEIRD RANDOM REPLIES.",
  },
  {
    time: "00:34",
    who: "shopper",
    line: "“ok add the uplift, and only show me stuff under $30 now”",
  },
  {
    time: "00:35",
    who: "voiceshop",
    line: "Added ✓ — and the page is filtered to under $30. Heads up: code BUNDLE10 pairs with what's in your cart.",
  },
  {
    time: "00:36",
    who: "caption",
    line: "CARTED. FILTERED. DISCOUNT PAIRED.",
  },
];

const dashboard = [
  ["00:36", "intent → ready to buy (was: browsing at 00:04)"],
  ["00:41", "session #4,183 captured — full replay available"],
  ["02:10", "catalog re-indexed — 3 products changed, 12 new reviews"],
  ["02:11", "dashboard updated — every metric, one place"],
];

const nextEpisode = [
  "reviews, social proof & video demos — in the conversation",
  "restock alerts & newsletters, captured on triggers",
  "support mode for returning customers, powered by order data",
  "a model that learns from every conversation",
];

export default function Subtitles() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>VoiceShop</span>
        <span className={styles.ccChip} aria-hidden="true">
          CC
        </span>
        <span className={styles.rec} aria-hidden="true">
          <i /> REC
        </span>
        <a className={styles.headerCta} href="#sub-waitlist">
          Join the waitlist
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="sub-title">
          <p className={styles.timecode}>[ 00:00 — live from your storefront ]</p>
          <h1 id="sub-title" className={styles.karaoke}>
            {heroWords.map((word, index) => (
              <span
                key={`${word}-${index}`}
                style={{ animationDelay: `${index * 320}ms` }}
              >
                {word}
              </span>
            ))}
            <span
              className={styles.yet}
              style={{ animationDelay: `${heroWords.length * 320}ms` }}
            >
              Yet.
            </span>
          </h1>
          <p className={styles.lede}>
            VoiceShop is the voice-first AI sales agent for Shopify. Below is
            one real conversation, subtitled — watch what the store does while
            the shopper just talks.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href="#sub-transcript">
              ▶ Play the transcript
            </a>
            <a className={styles.ghostCta} href="#sub-waitlist">
              Join the waitlist
            </a>
          </div>
        </section>

        <section
          className={styles.transcript}
          id="sub-transcript"
          aria-label="Subtitled demo conversation"
        >
          {transcript.map((entry) => (
            <Reveal
              key={entry.time + entry.who}
              className={`${styles.entry} ${styles[entry.who]}`}
            >
              <span className={styles.entryTime}>[{entry.time}]</span>
              {entry.who !== "caption" && (
                <span className={styles.entryWho}>{entry.who}</span>
              )}
              <p className={styles.entryLine}>{entry.line}</p>
              {entry.visual && (
                <div className={styles.filmstrip} aria-hidden="true">
                  {[
                    ["18% 40%", "Uplift Powder — $13+", false],
                    ["50% 45%", "Calm Capsules — $12+", true],
                    ["78% 45%", "Extract Seltzer — $6", false],
                  ].map(([pos, label, sold]) => (
                    <div className={styles.frame} key={label as string}>
                      <Image
                        src="/images/signal-garden.webp"
                        alt=""
                        fill
                        sizes="200px"
                        style={{
                          objectFit: "cover",
                          objectPosition: pos as string,
                        }}
                      />
                      <span>
                        {label}
                        <em className={sold ? styles.soldTag : styles.addTag}>
                          {sold ? "sold out" : "add"}
                        </em>
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </section>

        <section className={styles.dashboard} aria-labelledby="sub-dash-title">
          <Reveal>
            <h2 id="sub-dash-title" className={styles.sectionCaption}>
              MEANWHILE, IN YOUR DASHBOARD
            </h2>
          </Reveal>
          <div className={styles.dashLog}>
            {dashboard.map(([time, line], index) => (
              <Reveal key={time} className={styles.dashRow} delay={index * 80}>
                <span>[{time}]</span>
                <p>{line}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className={styles.dashNote}>
              Every session is captured and intent-scored — buy, browse,
              confused, exit — so you know exactly what went wrong and why a
              customer left. The widget theme-matches your store; the index
              keeps itself current.
            </p>
          </Reveal>
        </section>

        <section className={styles.next} aria-labelledby="sub-next-title">
          <Reveal>
            <h2 id="sub-next-title" className={styles.sectionCaption}>
              NEXT EPISODE
            </h2>
          </Reveal>
          <ul className={styles.nextList}>
            {nextEpisode.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <li>
                  <span>soon</span>
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </section>

        <section
          className={styles.waitlist}
          id="sub-waitlist"
          aria-labelledby="sub-wait-title"
        >
          <Reveal className={styles.waitlistInner}>
            <h2 id="sub-wait-title">
              Don&apos;t leave your store
              <br />
              on <mark>mute</mark>.
            </h2>
            <p>VoiceShop is coming to Shopify storefronts.</p>
            <WaitlistForm id="sub-email" />
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>VoiceShop</span>
        <span>[ transcript ends ]</span>
      </footer>
    </div>
  );
}

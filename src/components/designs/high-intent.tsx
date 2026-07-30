import Image from "next/image";
import { motion } from "motion/react";
import { ArrowIcon, Reveal, VoiceMark, WaitlistForm } from "../shared";
import styles from "./high-intent.module.css";

const shopperPhrases = [
  "Something comfortable.",
  "Under eighty dollars.",
  "Neutral, not boring.",
  "Available in my size.",
];

export function HighIntent() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#intent-top">
          <VoiceMark className={styles.mark} />
          <span>VoiceShop</span>
        </a>
        <a href="#intent-waitlist">
          Get on the list <ArrowIcon />
        </a>
      </header>

      <main>
        <section className={styles.hero} id="intent-top">
          <motion.div
            className={styles.heroTitle}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>Speak your mind.</p>
            <h1>
              HIGH
              <br />
              <span>INTENT.</span>
            </h1>
          </motion.div>
          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, x: 80, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/high-intent.webp"
              alt="Fashion products connected by a vivid red acoustic ribbon"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 62vw"
            />
          </motion.div>
          <p className={styles.heroNote}>
            VoiceShop turns the messy way people ask into the precise products
            they want.
          </p>
          <a className={styles.heroArrow} href="#intent-language" aria-label="Explore High Intent">
            ↓
          </a>
        </section>

        <section className={styles.language} id="intent-language">
          <Reveal className={styles.languageIntro}>
            <span className={styles.label}>One request. Every constraint.</span>
            <h2>People speak in layers. VoiceShop keeps up.</h2>
          </Reveal>
          <div className={styles.phraseStack}>
            {shopperPhrases.map((phrase, index) => (
              <motion.p
                key={phrase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
              >
                <span>0{index + 1}</span>
                {phrase}
              </motion.p>
            ))}
          </div>
        </section>

        <section className={styles.transform}>
          <div className={styles.transformImage}>
            <Image
              src="/images/high-intent.webp"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <Reveal className={styles.transformCopy}>
            <span className={styles.label}>Intent becomes action</span>
            <h2>Ask. Match. Move.</h2>
            <p>
              VoiceShop combines the conversation with the page, searches real
              products, and makes the storefront react while attention is high.
            </p>
            <div className={styles.actionSequence}>
              <div>
                <span>01</span>
                <strong>Understands</strong>
              </div>
              <div>
                <span>02</span>
                <strong>Shows</strong>
              </div>
              <div>
                <span>03</span>
                <strong>Sells</strong>
              </div>
            </div>
          </Reveal>
        </section>

        <section className={styles.proof}>
          <Reveal className={styles.proofHeadline}>
            <p className={styles.label}>Built on store truth</p>
            <h2>No invented products. No dead-end answers.</h2>
          </Reveal>
          <div className={styles.proofRows}>
            {[
              ["Published catalog", "Searches the products shoppers can actually buy."],
              ["Current context", "Uses the product, variant, and cart state available now."],
              ["Visible action", "Opens the page and brings the answer into view."],
            ].map(([title, copy], index) => (
              <Reveal className={styles.proofRow} delay={index * 0.08} key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <i>↗</i>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.waitlistSection} id="intent-waitlist">
          <Reveal className={styles.waitlistContent}>
            <span className={styles.label}>VoiceShop private preview</span>
            <h2>
              Your shoppers
              <br />
              already have questions.
            </h2>
            <p>Be there with the answer.</p>
            <WaitlistForm id="intent-email" theme="red" />
          </Reveal>
        </section>
      </main>
    </div>
  );
}

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowIcon, Reveal, VoiceMark, WaitlistForm } from "../shared";
import styles from "./signal-garden.module.css";

export function SignalGarden() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#signal-top">
          <VoiceMark className={styles.mark} />
          <strong>VoiceShop</strong>
        </a>
        <a className={styles.headerCta} href="#signal-waitlist">
          Get early access <ArrowIcon />
        </a>
      </header>

      <main>
        <section className={styles.hero} id="signal-top">
          <Image
            className={styles.heroImage}
            src="/images/signal-garden.webp"
            alt="A curated collection of wellness products connected by a vivid green voice signal"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroWash} />
          <motion.div
            className={styles.heroCopy}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.kicker}>Voice-first commerce for Shopify</p>
            <h1>
              Your storefront
              <br />
              just learned to <em>listen.</em>
            </h1>
            <p className={styles.intro}>
              VoiceShop understands what shoppers mean, finds what your store
              actually sells, and brings the answer into view.
            </p>
            <a className={styles.heroCta} href="#signal-story">
              See how it sells <ArrowIcon />
            </a>
          </motion.div>
          <div className={styles.heroSignal} aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className={styles.statement} id="signal-story">
          <Reveal className={styles.statementInner}>
            <p className={styles.sectionLabel}>The shift</p>
            <h2>
              Shoppers do not think in filters.
              <br />
              They speak in <span>needs.</span>
            </h2>
          </Reveal>
          <Reveal className={styles.voiceExample} delay={0.12}>
            <div className={styles.voicePrompt}>
              <VoiceMark className={styles.promptMark} />
              <p>
                “I need something for dry skin, but nothing heavy or scented.”
              </p>
            </div>
            <div className={styles.answerLine}>
              <span>VoiceShop understands</span>
              <strong>Concern · texture · ingredient preference</strong>
            </div>
          </Reveal>
        </section>

        <section className={styles.proof}>
          <div className={styles.proofImage}>
            <Image
              src="/images/signal-garden.webp"
              alt=""
              fill
              sizes="(max-width: 800px) 100vw, 52vw"
            />
          </div>
          <Reveal className={styles.proofCopy}>
            <p className={styles.sectionLabel}>Grounded, not guessed</p>
            <h2>Every answer starts with what is real in your store.</h2>
            <p>
              VoiceShop searches the published catalog, checks current product
              and variant context, and only shows choices it can verify.
            </p>
            <div className={styles.catalogResult}>
              <span className={styles.resultThumb} />
              <span>
                <strong>Lightweight Daily Serum</strong>
                <small>Available · best match</small>
              </span>
              <span className={styles.resultArrow}>↗</span>
            </div>
          </Reveal>
        </section>

        <section className={styles.steps}>
          <Reveal>
            <p className={styles.sectionLabel}>One conversation, three moves</p>
          </Reveal>
          <div className={styles.stepGrid}>
            {[
              ["01", "Hear the context", "Understands the page and the shopper’s words together."],
              ["02", "Find the real fit", "Searches your live catalog instead of inventing an answer."],
              ["03", "Move the sale", "Shows products, opens details, and works with the cart."],
            ].map(([number, title, copy], index) => (
              <Reveal className={styles.step} delay={index * 0.08} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.waitlistSection} id="signal-waitlist">
          <Reveal>
            <p className={styles.sectionLabel}>Private preview</p>
            <h2>Let your store answer back.</h2>
            <p className={styles.waitlistIntro}>
              Join the VoiceShop waitlist and be first to try conversational
              selling built for Shopify.
            </p>
            <WaitlistForm id="signal-email" theme="green" />
          </Reveal>
        </section>
      </main>
    </div>
  );
}

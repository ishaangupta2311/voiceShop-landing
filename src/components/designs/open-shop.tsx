import Image from "next/image";
import { motion } from "motion/react";
import { ArrowIcon, Reveal, VoiceMark, WaitlistForm } from "../shared";
import styles from "./open-shop.module.css";

export function OpenShop() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="open-top">
        <Image
          className={styles.heroImage}
          src="/images/open-shop.webp"
          alt="A shopper browsing in a bright boutique as a blue voice signal highlights matching garments"
          fill
          priority
          sizes="100vw"
        />
        <header className={styles.header}>
          <a className={styles.brand} href="#open-top">
            <VoiceMark className={styles.mark} />
            <span>VoiceShop</span>
          </a>
          <nav aria-label="Open Shop navigation">
            <a href="#open-how">How it works</a>
            <a className={styles.navCta} href="#open-waitlist">
              Join waitlist
            </a>
          </nav>
        </header>
        <div className={styles.heroShade} />
        <motion.div
          className={styles.heroCopy}
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>Meet the associate who knows the whole store.</p>
          <h1>
            Shopping
            <br />
            should feel
            <br />
            this <span>easy.</span>
          </h1>
          <a href="#open-how">
            Walk through VoiceShop <ArrowIcon />
          </a>
        </motion.div>
        <div className={styles.speakTag}>
          <VoiceMark className={styles.speakMark} />
          <span>
            <small>Shopper says</small>
            “Something light for a summer wedding.”
          </span>
        </div>
      </section>

      <main>
        <section className={styles.promise}>
          <Reveal className={styles.promiseTop}>
            <p className={styles.label}>Not a search box. Not a support bot.</p>
            <h2>Your best sales associate, available on every page.</h2>
          </Reveal>
          <div className={styles.promiseRail}>
            {[
              ["01", "Sees the page", "Knows what the shopper is already looking at."],
              ["02", "Hears the need", "Understands natural, specific buying intent."],
              ["03", "Shows the answer", "Brings verified products into the storefront."],
            ].map(([number, title, copy], index) => (
              <Reveal className={styles.promiseItem} delay={index * 0.08} key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.demo} id="open-how">
          <div className={styles.demoImage}>
            <Image
              src="/images/open-shop.webp"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 54vw"
            />
          </div>
          <Reveal className={styles.demoCopy}>
            <p className={styles.label}>One guided decision</p>
            <h2>From “maybe” to the right product.</h2>
            <ol>
              <li>
                <span>Ask naturally</span>
                <p>VoiceShop hears the whole request, not isolated keywords.</p>
              </li>
              <li>
                <span>See real options</span>
                <p>Matches come from the store’s published catalog.</p>
              </li>
              <li>
                <span>Keep moving</span>
                <p>Open the product, choose a variant, or work with the cart.</p>
              </li>
            </ol>
          </Reveal>
        </section>

        <section className={styles.intent}>
          <Reveal className={styles.intentHeading}>
            <span className={styles.label}>The storefront responds</span>
            <h2>“Show me the blue one in my size.”</h2>
          </Reveal>
          <div className={styles.intentLine} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <Reveal className={styles.intentOutcome} delay={0.1}>
            <span>Understands the reference</span>
            <span>Checks the product</span>
            <span>Opens the right page</span>
          </Reveal>
        </section>

        <section className={styles.waitlistSection} id="open-waitlist">
          <Reveal className={styles.waitlistContent}>
            <VoiceMark className={styles.waitlistMark} />
            <p className={styles.label}>Early access for Shopify stores</p>
            <h2>Open your store to conversation.</h2>
            <p>
              Join the VoiceShop waitlist. We are inviting a small group of
              merchants to shape what comes next.
            </p>
            <WaitlistForm id="open-email" theme="blue" />
          </Reveal>
        </section>
      </main>
    </div>
  );
}

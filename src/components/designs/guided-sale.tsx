import Image from "next/image";
import { motion } from "motion/react";
import { ArrowIcon, Reveal, VoiceMark, WaitlistForm } from "../shared";
import styles from "./guided-sale.module.css";

const journey = [
  {
    number: "01",
    title: "The shopper speaks",
    copy: "“I want a warmer lamp that still works on a small table.”",
    detail: "VoiceShop hears the product, constraint, and intended use together.",
  },
  {
    number: "02",
    title: "The catalog answers",
    copy: "Published products are searched and ranked against the request.",
    detail: "No invented SKU, price, or availability.",
  },
  {
    number: "03",
    title: "The page responds",
    copy: "The best matches appear in the storefront, ready to explore.",
    detail: "Open the product, choose a variant, or continue the conversation.",
  },
  {
    number: "04",
    title: "The cart keeps up",
    copy: "Validated shopper actions move the right variant toward purchase.",
    detail: "The conversation stays grounded in the latest cart context.",
  },
];

export function GuidedSale() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#guided-top">
          <VoiceMark className={styles.mark} />
          <span>VoiceShop</span>
        </a>
        <div className={styles.headerNote}>Guided selling for Shopify</div>
        <a className={styles.headerCta} href="#guided-waitlist">
          Join the waitlist <ArrowIcon />
        </a>
      </header>

      <main>
        <section className={styles.hero} id="guided-top">
          <Image
            className={styles.heroImage}
            src="/images/guided-sale.webp"
            alt="A warm living space where an azure path connects a sequence of home products"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
          <motion.div
            className={styles.heroCopy}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>One request can change the whole storefront.</p>
            <h1>
              Guide every
              <br />
              shopper to
              <br />
              the <span>right buy.</span>
            </h1>
          </motion.div>
          <div className={styles.heroFooter}>
            <p>
              VoiceShop listens, understands, and moves with the shopper from
              first question to cart.
            </p>
            <a href="#guided-journey">
              Follow the journey <span>↓</span>
            </a>
          </div>
        </section>

        <section className={styles.context}>
          <Reveal className={styles.contextIntro}>
            <p className={styles.label}>Context makes the sale</p>
            <h2>
              The answer is not just in the question. It is also on the page.
            </h2>
          </Reveal>
          <Reveal className={styles.contextDetails} delay={0.12}>
            <div>
              <span>On screen</span>
              <strong>Product · collection · available options</strong>
            </div>
            <div>
              <span>In conversation</span>
              <strong>Need · preference · constraint · follow-up</strong>
            </div>
            <p>
              VoiceShop combines both, so references like “that blue one” or
              “something cheaper” still make sense.
            </p>
          </Reveal>
        </section>

        <section className={styles.journey} id="guided-journey">
          <div className={styles.journeyVisual}>
            <div className={styles.stickyImage}>
              <Image
                src="/images/guided-sale.webp"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className={styles.voiceChip}>
                <VoiceMark className={styles.chipMark} />
                <span>
                  <small>VoiceShop is listening</small>
                  “Warmer. Smaller. Under $200.”
                </span>
              </div>
            </div>
          </div>
          <div className={styles.journeySteps}>
            <p className={styles.label}>A guided sale, step by step</p>
            {journey.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0.24 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.62 }}
                transition={{ duration: 0.4 }}
              >
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <small>{step.detail}</small>
                {index < journey.length - 1 ? <i aria-hidden="true" /> : null}
              </motion.article>
            ))}
          </div>
        </section>

        <section className={styles.why}>
          <Reveal className={styles.whyHeadline}>
            <p className={styles.label}>What changes</p>
            <h2>The storefront stops waiting for perfect search terms.</h2>
          </Reveal>
          <div className={styles.whyGrid}>
            <Reveal className={styles.whyItem}>
              <span>Before</span>
              <p>Filters, dead ends, and product pages that stay silent.</p>
            </Reveal>
            <Reveal className={styles.whyArrow} delay={0.08} aria-hidden="true">
              <ArrowIcon />
            </Reveal>
            <Reveal className={styles.whyItem} delay={0.16}>
              <span>With VoiceShop</span>
              <p>A storefront that understands intent and acts while it matters.</p>
            </Reveal>
          </div>
        </section>

        <section className={styles.waitlistSection} id="guided-waitlist">
          <Reveal className={styles.waitlistContent}>
            <p className={styles.label}>Help shape VoiceShop</p>
            <h2>Bring guided selling to your storefront.</h2>
            <p>
              Join the waitlist for early access and product updates.
            </p>
            <WaitlistForm id="guided-email" theme="azure" />
          </Reveal>
        </section>
      </main>
    </div>
  );
}

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowIcon, Reveal, VoiceMark, WaitlistForm } from "../shared";
import styles from "./living-storefront.module.css";

export function LivingStorefront() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} id="living-top">
        <Image
          className={styles.heroImage}
          src="/images/living-storefront.webp"
          alt="A luminous product space connected by mint pathways"
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroGlow} />
        <header className={styles.header}>
          <a className={styles.brand} href="#living-top">
            <VoiceMark className={styles.mark} />
            <span>VoiceShop</span>
          </a>
          <span className={styles.headerDescriptor}>
            The responsive storefront
          </span>
          <a href="#living-waitlist">
            Early access <ArrowIcon />
          </a>
        </header>
        <motion.div
          className={styles.heroCopy}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>A voice-first sales layer for Shopify</p>
          <h1>
            A storefront
            <br />
            that comes <span>alive.</span>
          </h1>
          <p className={styles.heroIntro}>
            VoiceShop hears intent, understands the page, and brings the next
            best action into view.
          </p>
          <a className={styles.heroCta} href="#living-system">
            Enter the system <span>↓</span>
          </a>
        </motion.div>
        <div className={styles.orbit} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <main>
        <section className={styles.systemIntro} id="living-system">
          <Reveal className={styles.systemHeadline}>
            <p className={styles.label}>One intelligence, two surfaces</p>
            <h2>The conversation and the storefront move together.</h2>
          </Reveal>
          <Reveal className={styles.systemCopy} delay={0.12}>
            <p>
              Shoppers can talk naturally while VoiceShop updates what they see:
              broad choices in the main page, specific products when the intent
              is clear, and cart actions only when they are validated.
            </p>
          </Reveal>
        </section>

        <section className={styles.stageSection}>
          <Reveal className={styles.stage}>
            <div className={styles.storefront}>
              <div className={styles.storeHeader}>
                <strong>NORTH / GOODS</strong>
                <span>New &nbsp; Objects &nbsp; Living</span>
              </div>
              <div className={styles.storeMessage}>
                <small>VoiceShop changed the storefront</small>
                <h3>Quiet objects for a focused desk.</h3>
              </div>
              <div className={styles.storeProducts}>
                <div className={styles.storeProduct}>
                  <span className={styles.headphoneProduct} />
                  <strong>Studio Headphones</strong>
                  <small>$148 · Available</small>
                </div>
                <div className={styles.storeProduct}>
                  <span className={styles.lampProduct} />
                  <strong>Task Light</strong>
                  <small>$92 · Available</small>
                </div>
              </div>
            </div>
            <div className={styles.conversation}>
              <div className={styles.conversationTop}>
                <span>
                  <VoiceMark className={styles.conversationMark} />
                  VoiceShop
                </span>
                <small>Listening</small>
              </div>
              <p className={styles.shopper}>
                “I’m setting up a small desk. Keep it calm and under $250.”
              </p>
              <p className={styles.agent}>
                Start with these two. They fit the space, stay within budget,
                and both are available now.
              </p>
              <div className={styles.wave} aria-hidden="true">
                {Array.from({ length: 14 }).map((_, index) => (
                  <span key={index} style={{ animationDelay: `${index * 60}ms` }} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className={styles.layers}>
          <Reveal className={styles.layersIntro}>
            <p className={styles.label}>The living layer</p>
            <h2>Built to act without losing the truth.</h2>
          </Reveal>
          <div className={styles.layerList}>
            {[
              ["01", "Page context", "Understands what is on screen before answering."],
              ["02", "Catalog grounding", "Searches published products and current variants."],
              ["03", "Visible product action", "Shows broad results or opens the exact product."],
              ["04", "Cart continuity", "Keeps the latest shopper cart context in the conversation."],
            ].map(([number, title, copy], index) => (
              <Reveal className={styles.layer} delay={index * 0.06} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.flow}>
          <Reveal className={styles.flowWords}>
            <span>Speak</span>
            <i />
            <span>Understand</span>
            <i />
            <span>Show</span>
            <i />
            <span>Move</span>
          </Reveal>
        </section>

        <section className={styles.waitlistSection} id="living-waitlist">
          <Reveal className={styles.waitlistContent}>
            <VoiceMark className={styles.waitlistMark} />
            <p className={styles.label}>VoiceShop early access</p>
            <h2>Make your storefront responsive.</h2>
            <p>
              Join the waitlist to follow the build and hear when private access
              opens.
            </p>
            <WaitlistForm id="living-email" theme="mint" />
          </Reveal>
        </section>
      </main>
    </div>
  );
}

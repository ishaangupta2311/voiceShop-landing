"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal, VoiceGlyph, WaitlistForm } from "@/components/shared";
import styles from "./aisle.module.css";

const steps = [
  {
    title: "A shopper says hello",
    body: "No search bar gymnastics — they just talk. “I'm looking for something for post-run recovery.” VoiceShop hears the need, not just the keywords, and starts reading intent from the first word.",
  },
  {
    title: "The store rearranges itself",
    body: "It searches your live catalog — however big — applies the right filters, and curates the page to verified matches. It can walk the shopper to any aisle of the store as the conversation moves.",
  },
  {
    title: "Questions land, because it sees the page",
    body: "“What is this for?” isn't a confusing question when the assistant knows exactly which product is on screen. Variants, prices, stock — all in view, all current, re-indexed automatically as things change.",
  },
  {
    title: "The cart fills itself — and the owner learns",
    body: "Items go in the cart mid-sentence, matching discounts surface at the right moment, and the whole session — including the shopper's intent — is captured for your analytics dashboard.",
  },
];

const ownerNotes = [
  ["Session replay", "Every conversation captured — see exactly where a sale stalled and why the customer left."],
  ["Intent signals", "Buy, browse, explore, confused, exit — read live, reported per session."],
  ["One dashboard", "All metrics and conversation analysis in one place, built for store owners."],
  ["Always current", "Products, orders, and reviews re-index automatically on every change."],
];

const soon = [
  "Reviews, social proof & video demos in the conversation",
  "Restock alerts & newsletter capture on smart triggers",
  "Order-aware support for logged-in, returning customers",
  "A model that learns from every conversation it has",
];

export default function Aisle() {
  const [stage, setStage] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((element, index) => {
      if (!element) {
        return null;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setStage(index);
          }
        },
        { rootMargin: "-45% 0px -45% 0px" },
      );
      observer.observe(element);
      return observer;
    });
    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.brand}>
          <VoiceGlyph className={styles.brandGlyph} />
          VoiceShop
        </span>
        <a className={styles.headerCta} href="#aisle-waitlist">
          Join the waitlist
        </a>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="aisle-title">
          <p className={styles.kicker}>The voice-first AI sales agent for Shopify</p>
          <h1 id="aisle-title">
            Walk one aisle
            <br />
            with <span>VoiceShop.</span>
          </h1>
          <p className={styles.lede}>
            One scroll, one conversation, one sale — this is what your
            storefront feels like with a salesperson inside it. It blends into
            your theme and it&apos;s built for stores with a lot on the shelves.
          </p>
          <span className={styles.scrollHint} aria-hidden="true">
            scroll to walk <i>↓</i>
          </span>
        </section>

        <section className={styles.walk} aria-label="Scroll-driven product walkthrough">
          <div className={styles.walkGrid}>
            <ol className={styles.steps}>
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  ref={(element) => {
                    stepRefs.current[index] = element;
                  }}
                  className={`${styles.step} ${
                    stage === index ? styles.stepActive : ""
                  }`}
                >
                  <span className={styles.stepIndex}>0{index + 1}</span>
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>

            <div className={styles.stagePanel} aria-hidden="true">
              <div className={styles.device}>
                <div className={styles.deviceBar}>
                  <strong>FLEETFOOT RUNNING CO.</strong>
                  <span
                    className={`${styles.cart} ${
                      stage === 3 ? styles.cartBumped : ""
                    }`}
                  >
                    Cart <i>{stage === 3 ? 2 : 1}</i>
                  </span>
                </div>

                <div className={styles.scenes}>
                  <div
                    className={`${styles.scene} ${
                      stage === 0 ? styles.sceneActive : ""
                    }`}
                  >
                    <p className={styles.sceneShopper}>
                      “something for post-run recovery?”
                    </p>
                    <p className={styles.sceneAgent}>
                      On it — let me pull up what actually helps. 🏃
                    </p>
                    <span className={styles.intent}>intent: exploring</span>
                    <div className={styles.listening}>
                      <VoiceGlyph className={styles.listenGlyph} />
                      listening…
                    </div>
                  </div>

                  <div
                    className={`${styles.scene} ${
                      stage === 1 ? styles.sceneActive : ""
                    }`}
                  >
                    <p className={styles.curated}>
                      Curated live by your shopping assistant
                    </p>
                    <strong className={styles.sceneHead}>recovery</strong>
                    <p className={styles.sceneFilters}>
                      filters: <em>in stock</em> <em>under $80</em>
                    </p>
                    <div className={styles.sceneGrid}>
                      {["Foam Roller", "Recovery Sandal", "Compression Sleeve", "Magnesium Soak"].map(
                        (name, index) => (
                          <span className={styles.sceneTile} key={name}>
                            <i data-tone={index % 3} />
                            {name}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div
                    className={`${styles.scene} ${
                      stage === 2 ? styles.sceneActive : ""
                    }`}
                  >
                    <div className={styles.productCard}>
                      <span className={styles.productArt} />
                      <strong>Recovery Sandal</strong>
                      <em>$68 · in stock · 4 colors</em>
                    </div>
                    <p className={styles.sceneShopper}>“what is this for?”</p>
                    <p className={styles.sceneAgent}>
                      The pair on your screen — cushioned footbed that gives
                      your feet a break after long runs. True to size.
                    </p>
                  </div>

                  <div
                    className={`${styles.scene} ${
                      stage === 3 ? styles.sceneActive : ""
                    }`}
                  >
                    <div className={styles.cartLine}>
                      <span>Foam Roller</span>
                      <em>$34</em>
                    </div>
                    <div className={styles.cartLine}>
                      <span>Recovery Sandal</span>
                      <em>$68</em>
                    </div>
                    <p className={styles.discount}>
                      code <strong>RECOVER10</strong> pairs with your cart ✓
                    </p>
                    <p className={styles.sceneAgent}>
                      Both in. Checkout&apos;s one tap away — want me to take
                      you there?
                    </p>
                    <span className={styles.intent}>intent: ready to buy</span>
                  </div>
                </div>

                <div className={styles.stageDots}>
                  {steps.map((_, index) => (
                    <span
                      key={index}
                      className={stage === index ? styles.dotActive : ""}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.owners} aria-labelledby="aisle-owners-title">
          <Reveal>
            <h2 id="aisle-owners-title">Meanwhile, at the back of the store</h2>
            <p className={styles.ownersIntro}>
              You see everything the assistant sees — and everything your
              customers almost bought.
            </p>
          </Reveal>
          <div className={styles.ownerGrid}>
            {ownerNotes.map(([title, body], index) => (
              <Reveal key={title} className={styles.ownerCard} delay={index * 80}>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.soon} aria-labelledby="aisle-soon-title">
          <Reveal>
            <h2 id="aisle-soon-title">Further down the aisle</h2>
          </Reveal>
          <div className={styles.soonList}>
            {soon.map((item, index) => (
              <Reveal key={item} className={styles.soonRow} delay={index * 70}>
                <span>soon</span>
                <p>{item}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className={styles.waitlist}
          id="aisle-waitlist"
          aria-labelledby="aisle-waitlist-title"
        >
          <Reveal className={styles.waitlistCard}>
            <h2 id="aisle-waitlist-title">Open this aisle in your store.</h2>
            <p>VoiceShop is coming to Shopify. Join the waitlist.</p>
            <WaitlistForm id="aisle-email" />
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>VoiceShop</span>
        <span>From “hi” to checkout</span>
      </footer>
    </div>
  );
}

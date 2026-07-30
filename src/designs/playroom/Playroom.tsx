import styles from "./playroom.module.css";

const perks = [
  {
    emoji: "👀",
    title: "It sees the page",
    body: "It knows the exact product your shopper is looking at, so answers always fit the moment.",
    tone: "peach",
  },
  {
    emoji: "🔎",
    title: "It knows the shelves",
    body: "It searches your real Shopify catalog mid-chat — right price, right stock, every time.",
    tone: "sky",
  },
  {
    emoji: "🛒",
    title: "It fills the cart",
    body: "Add to cart, tweak quantities, glide to checkout — all inside one friendly conversation.",
    tone: "bubblegum",
  },
];

export default function Playroom() {
  return (
    <div className={styles.page}>
      <div className={`${styles.blob} ${styles.blobOne}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blobTwo}`} aria-hidden="true" />

      <header className={styles.header}>
        <span className={styles.brand}>
          <span className={styles.brandFace} aria-hidden="true">
            ◡̈
          </span>
          Digital Salesman
        </span>
        <a className={styles.headerCta} href="#hello">
          Say hello
        </a>
      </header>

      <main>
        <section className={styles.hero} id="hello">
          <p className={styles.badge}>Your store&apos;s new best friend 💬</p>
          <h1 className={styles.headline}>
            Shopping is better
            <br />
            with someone to <span className={styles.squiggle}>talk to</span>.
          </h1>
          <p className={styles.sub}>
            A voice-first AI shop assistant for Shopify that chats with your
            customers, shows them the good stuff, and pops it in the cart.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryCta} href="#hello">
              Add it to my store
            </a>
            <a className={styles.secondaryCta} href="#chat">
              Watch it chat ↓
            </a>
          </div>
        </section>

        <section className={styles.chat} id="chat" aria-label="Example conversation">
          <div className={styles.chatWindow}>
            <div className={`${styles.bubble} ${styles.bubbleShopper}`}>
              Hi! Do you have anything for sensitive skin? 🥺
            </div>
            <div className={`${styles.bubble} ${styles.bubbleBot}`}>
              We do! The <strong>Cloud Cream</strong> is fragrance-free and our
              gentlest one. Want me to pop it in your cart?
            </div>
            <div className={`${styles.bubble} ${styles.bubbleShopper}`}>
              Yes please!
            </div>
            <div className={`${styles.bubble} ${styles.bubbleCart}`}>
              🛒 Cloud Cream added — $24 · checkout&apos;s one tap away
            </div>
            <div className={styles.chatMic} aria-hidden="true">
              <span className={styles.micIcon}>🎙️</span>
              <span className={styles.micWave}>
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
              <span className={styles.micLabel}>listening…</span>
            </div>
          </div>
        </section>

        <section className={styles.perks} aria-label="What it does">
          {perks.map((perk) => (
            <article key={perk.title} className={`${styles.perk} ${styles[perk.tone]}`}>
              <span className={styles.perkEmoji} aria-hidden="true">
                {perk.emoji}
              </span>
              <h2>{perk.title}</h2>
              <p>{perk.body}</p>
            </article>
          ))}
        </section>

        <section className={styles.closer}>
          <h2>Give every shopper a shopping buddy</h2>
          <a className={styles.primaryCta} href="#hello">
            Install on Shopify — it&apos;s friendly
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        Digital Salesman · answers, shows &amp; sells with a smile
      </footer>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
    >
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" />
    </svg>
  );
}

function VoiceWave() {
  return (
    <span className="voice-wave" aria-hidden="true">
      {[10, 18, 26, 14, 22, 30, 17, 11, 20, 14, 25, 16].map(
        (height, index) => (
          <span
            key={`${height}-${index}`}
            style={
              {
                "--bar-height": `${height}px`,
                "--bar-delay": `${index * 55}ms`,
              } as React.CSSProperties
            }
          />
        ),
      )}
    </span>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Digital Salesman home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Digital Salesman</span>
        </a>

        <a className="header-link" href="#product">
          Meet your new hire
          <ArrowIcon />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            Commerce, in conversation
          </p>

          <h1 id="hero-heading">
            Turn storefront
            <br />
            <em>questions</em> into sales.
          </h1>

          <p className="hero-description">
            A voice-first AI salesperson that understands what shoppers are
            seeing, brings the right products into view, and helps move the
            cart forward.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#product">
              See it in action
              <ArrowIcon />
            </a>
            <span>Built for Shopify storefronts</span>
          </div>
        </div>

        <div className="product-stage" id="product">
          <div className="stage-label" aria-hidden="true">
            <span>Live storefront</span>
            <span>01</span>
          </div>

          <div
            className="storefront-preview"
            aria-label="Preview of Digital Salesman helping a shopper"
          >
            <div className="browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <div>your-store.com</div>
            </div>

            <div className="store-content" aria-hidden="true">
              <div className="store-nav">
                <span>FIELD NOTES</span>
                <span>Shop &nbsp; Journal &nbsp; About</span>
              </div>
              <p className="store-kicker">Daily essentials</p>
              <p className="store-heading">Made for better mornings.</p>
              <div className="product-row">
                <div className="mini-product product-green">
                  <span>Focus Blend</span>
                  <span>$32</span>
                </div>
                <div className="mini-product product-orange">
                  <span>Daily Ritual</span>
                  <span>$28</span>
                </div>
              </div>
            </div>

            <div className="assistant-card">
              <div className="assistant-topline">
                <span className="assistant-name">
                  <span className="status-dot" />
                  Sales assistant
                </span>
                <span className="live-label">LIVE</span>
              </div>

              <p className="shopper-message">
                “Show me something for focus that isn&apos;t too sweet.”
              </p>

              <div className="assistant-response">
                <p>
                  The Focus Blend is your best fit. It&apos;s lightly citrus,
                  has no added sugar, and it&apos;s in stock.
                </p>
                <div className="suggested-product">
                  <span className="product-swatch" />
                  <span>
                    <strong>Focus Blend</strong>
                    <small>12 servings · $32</small>
                  </span>
                  <span className="product-arrow">↗</span>
                </div>
              </div>

              <div className="listening-row">
                <span className="mic-button" aria-hidden="true">
                  <span />
                </span>
                <VoiceWave />
                <span className="listening-copy">Listening</span>
              </div>
            </div>
          </div>

          <p className="stage-note">
            <span>Answers.</span>
            <span>Shows.</span>
            <span>Sells.</span>
          </p>
        </div>
      </section>

      <footer className="proof-strip" aria-label="Product capabilities">
        <p>
          <span>01</span>
          Understands the page
        </p>
        <p>
          <span>02</span>
          Searches the real catalog
        </p>
        <p>
          <span>03</span>
          Works with the cart
        </p>
      </footer>
    </main>
  );
}

"use client";

import type { ReactNode } from "react";
import { Reveal } from "./shared";
import { AnalyticsFilm } from "./film/AnalyticsFilm";
import { CartFilm } from "./film/CartFilm";
import { CompareFilm } from "./film/CompareFilm";
import { RetrievalFilm } from "./film/RetrievalFilm";
import { StageFilm } from "./film/StageFilm";
import { VoiceFilm } from "./film/VoiceFilm";
import { useFilm } from "./film/useFilm";
import styles from "./feature-chapters.module.css";

/* ------------------------------------------------------------------------ *
 * Chapter copy. Every bullet is a capability that exists in the product —
 * shipped behaviour lives here, anything unbuilt lives in the Coming soon
 * column of the index below.
 * ------------------------------------------------------------------------ */

type Chapter = {
  n: string;
  title: ReactNode;
  lede: string;
  features: [string, string][];
  film: ReactNode;
};

const chapters: Chapter[] = [
  {
    n: "01",
    title: (
      <>
        Shoppers talk.
        <br />
        <em>Nobody types a keyword.</em>
      </>
    ),
    lede: "A voice session streams from the browser mic and answers out loud. The shopper describes what they want the way they'd say it to a person standing in the aisle.",
    features: [
      ["Live voice sessions", "Mic in, speech out, with a visible Listening / Speaking / Connecting state the shopper can trust."],
      ["Natural language, not search terms", "“Something for focus that won't keep me up” becomes a real catalog query with real constraints."],
      ["Text and voice share one brain", "Both pipelines call the same tools against the same catalog, so the answers can't diverge."],
      ["Conversation continuity", "The session stays open — the next sentence is a follow-up, not a fresh start."],
    ],
    film: <VoiceFilm />,
  },
  {
    n: "02",
    title: (
      <>
        Grounded in <em>your catalog,</em>
        <br />
        not in a guess.
      </>
    ),
    lede: "Retrieval is the product. The agent can only talk about products that exist, are published, and are in the state Shopify says they're in right now.",
    features: [
      ["Canonical catalog projection", "Published products only. Draft, archived, unpublished and deleted products can never surface."],
      ["Hybrid retrieval", "Exact and conservative fuzzy identity matching merged with over-retrieved dense candidates, then reranked."],
      ["Structured filters", "Price, product type, vendor, tag, collection and availability exclude candidates before anything renders."],
      ["Live hydration", "Finalists are re-fetched from Shopify for current variants, images, price, currency and stock."],
      ["Auto re-indexing", "Product, order and review webhooks refresh the index the moment anything changes — no manual sync."],
      ["Honest empty states", "No match degrades to clearly-labelled related options or an honest “we don't carry that”, never to unrelated products."],
    ],
    film: <RetrievalFilm />,
  },
  {
    n: "03",
    title: (
      <>
        It doesn&apos;t link to the store.
        <br />
        <em>It drives it.</em>
      </>
    ),
    lede: "Results don't stay trapped in a chat bubble. The assistant takes the main content area, applies filters, and walks the shopper to the page they actually wanted.",
    features: [
      ["App-owned storefront stage", "Broad results fill the main content area without depending on your theme's markup or its search page."],
      ["Theme adaptation", "It reads your storefront styling and repaints the panel, buttons and accents to match. Nothing to configure."],
      ["Page-behaviour tiers", "Broad intent filters the catalog; only one clearly identifiable product commits to a product page."],
      ["Soft navigation", "It moves the shopper between real pages without a reload, and the conversation survives the move."],
      ["Section opening", "“What's in it?” opens the ingredients accordion — using the theme's own toggle, never synthetic clicks."],
      ["Split-screen copilot", "A persistent sidebar that pushes page content, with an overlay fallback on mobile."],
      ["Sees the screen they see", "The visible surface — including the stage itself — is the authoritative page context, so “what is this?” answers about the right item."],
    ],
    film: <StageFilm />,
  },
  {
    n: "04",
    title: (
      <>
        Comparison,
        <br />
        <em>without the back button.</em>
      </>
    ),
    lede: "“What's the difference between these two?” is the question that stalls the most carts. It's one tool call, not three page visits and a memory test.",
    features: [
      ["Two to eight products, side by side", "One call renders the comparison — no navigating through each product page to collect facts."],
      ["Differences first", "Only the rows where products actually disagree, with All details one tap away."],
      ["Built for the first fold", "Compact product headers and sticky row labels, so the differing rows start on screen."],
      ["Every cell verified", "Prices, formats and availability are live catalog facts, not summarised prose."],
    ],
    film: <CompareFilm />,
  },
  {
    n: "05",
    title: (
      <>
        It moves the cart
        <br />
        <em>mid-sentence.</em>
      </>
    ),
    lede: "The point of a salesperson is the close. It adds, removes and re-counts through the store's own cart, so checkout, discounts and taxes are untouched.",
    features: [
      ["Add, remove, set quantity, view", "All through Shopify's real cart — nothing is mirrored, so checkout behaves exactly as it always did."],
      ["Verified variants", "Live inventory is checked against the specific variant before anything is added."],
      ["Discount pairing", "It surfaces the code that applies because of what's already in the cart."],
      ["Sold-out honesty", "It never offers to add something it can't, and never claims an action it didn't complete."],
    ],
    film: <CartFilm />,
  },
  {
    n: "06",
    title: (
      <>
        Every session,
        <br />
        <em>captured and replayable.</em>
      </>
    ),
    lede: "You finally get to watch the sales floor. Not aggregate traffic — the actual conversations, scored by what the shopper was trying to do.",
    features: [
      ["Live intent scoring", "Buying, browsing, exploring, confused, or about to leave — scored per visitor and rolled up in the dashboard."],
      ["Session replay", "Any conversation replays turn by turn, including the tool calls the agent made."],
      ["Unanswered questions", "The things it couldn't answer are collected, so gaps in the catalog and copy surface themselves."],
      ["Playground", "Run the real agent against your live catalog before a customer does."],
      ["Settings", "Model, system prompt and selling tone, with theme and re-index behaviour alongside."],
      ["Observability", "Replays record the surface the shopper actually saw, not just the underlying URL."],
    ],
    film: <AnalyticsFilm />,
  },
];

/* ------------------------------------------------------------------------ */

const TOOLS = [
  {
    name: "shop_products",
    body: "Everything about products, in one place. The action argument carries the shopper's goal.",
    status: "Shopping the catalog…",
    actions: ["discover", "compare", "inspect", "browse", "inventory"],
  },
  {
    name: "navigate_store",
    body: "Resolves and opens non-product destinations — home, contact, policies, collections, cart.",
    status: "Taking you there…",
    actions: ["path", "destination"],
  },
  {
    name: "manage_cart",
    body: "The cart contract. Backed by the store's real cart, so nothing about checkout changes.",
    status: "Updating your cart…",
    actions: ["add", "remove", "view", "set_quantity"],
  },
  {
    name: "lookup_orders",
    body: "Separate on purpose: it reads authenticated customer data, not the public storefront.",
    status: "Checking your orders…",
    actions: ["order status"],
  },
];

const TOOL_STEPS = [2200, 2200, 2200, 2200] as const;

function ToolsBand() {
  const { ref, step } = useFilm<HTMLDivElement>(TOOL_STEPS, { restStep: 0 });

  return (
    <div className={styles.tools} ref={ref}>
      <Reveal className={styles.toolsHead}>
        <h3>Four tools, one per shopper goal.</h3>
        <p>
          The agent isn&apos;t improvising with a bag of overlapping functions.
          It has four, each a strict contract — which is why it can be held to
          what your catalog actually says.
        </p>
      </Reveal>
      <div className={styles.toolsGrid}>
        {TOOLS.map((tool, index) => (
          <div key={tool.name} className={styles.tool} data-on={step === index ? "true" : undefined}>
            <span className={styles.toolName}>{tool.name}</span>
            <p className={styles.toolBody}>{tool.body}</p>
            <div className={styles.toolActions}>
              {tool.actions.map((action) => (
                <span key={action}>{action}</span>
              ))}
            </div>
            <span className={styles.toolStatusLine}>
              <i />
              {tool.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

const INDEX_GROUPS: [string, [string, string, boolean][]][] = [
  [
    "For the shopper",
    [
      ["Voice conversation", "Speak to the store; it answers out loud and in text.", true],
      ["Needs-to-product matching", "Built for large, varied catalogs where browsing fails.", true],
      ["Screen awareness", "Answers about the exact item on screen, variant and price included.", true],
      ["Side-by-side comparison", "Two to eight products, differences first.", true],
      ["Guided navigation", "Moves them across the store as the conversation goes.", true],
      ["Cart actions", "Add, remove, change quantity, review — by voice.", true],
      ["Live availability", "Stock checked against the verified variant, not a cached copy.", true],
      ["Discount surfacing", "The code that pairs with what's already in the cart.", true],
      ["Hyper-personalisation", "The thread shapes what it shows next.", true],
    ],
  ],
  [
    "For the storefront",
    [
      ["Theme adaptation", "Reads your styling and blends in — no design work.", true],
      ["App-owned result stage", "Results render without depending on theme markup or /search.", true],
      ["Split-screen copilot", "Sidebar that pushes content; overlay on mobile.", true],
      ["Soft navigation", "Page changes with no reload and no lost conversation.", true],
      ["Section opening", "Opens the accordion the question was about.", true],
      ["Storefront filters", "Price, type, vendor, tag, collection, availability.", true],
      ["Reduced-motion support", "Motion and transitions respect the visitor's setting.", true],
    ],
  ],
  [
    "For the merchant",
    [
      ["Session capture", "Every conversation stored and replayable turn by turn.", true],
      ["Intent prediction", "Buy, browse, explore, confused, exit — scored live.", true],
      ["Analytics dashboard", "Sessions, messages, carts moved, unanswered questions.", true],
      ["Monitor tab", "Watch real conversations as they land.", true],
      ["Playground", "Test the agent against the live catalog before customers do.", true],
      ["Settings", "Model, system prompt, selling tone.", true],
      ["Auto-indexing", "Products, orders and reviews re-index on change.", true],
      ["Observability", "Replays record the surface the shopper actually saw.", true],
    ],
  ],
  [
    "Coming soon",
    [
      ["Social proof in conversation", "Review insights and ratings surfaced where the decision happens.", false],
      ["Impulse-buy nudge", "Complementary products suggested the moment something hits the cart.", false],
      ["Deal closer", "Exit-intent offers built around the gap to free shipping.", false],
      ["Triggered capture", "Restock alerts and newsletter sign-ups fired on the right moment.", false],
      ["Persistent context", "Returning shoppers greeted with what they were last looking at.", false],
      ["Order-aware support", "Tracking, returns and shipping for logged-in customers.", false],
      ["Personal shopper agent", "Builds complete bundles against a goal and a budget.", false],
      ["Competitor comparison", "Index competitor listings and answer “why yours?” honestly.", false],
      ["Price history", "A transparency graph of what a product has cost over time.", false],
      ["A model that learns", "Conversations feed back into a better agent for your store.", false],
      ["Custom personality and avatar", "Your brand's voice and face, not a generic assistant.", false],
    ],
  ],
];

/* ------------------------------------------------------------------------ */

export function FeatureChapters() {
  return (
    <>
      <section className={styles.section} id="features">
        <div className={styles.inner}>
          <Reveal className={styles.intro}>
            <p className={styles.eyebrow}>Every part of it, moving</p>
            <h2 className={styles.introTitle}>
              Six things it does on a real storefront —{" "}
              <em>watch each one happen.</em>
            </h2>
            <p className={styles.introSub}>
              Nothing below is a mockup of an idea. Each sequence is the
              product&apos;s own interface, its own wording, and the same tool
              calls it makes on a live store.
            </p>
          </Reveal>

          {chapters.map((chapter, index) => (
            <article className={styles.chapter} key={chapter.n}>
              <div className={styles.chapterHead}>
                <Reveal>
                  <span className={styles.chapterNum}>{chapter.n}</span>
                </Reveal>
                <Reveal>
                  <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                </Reveal>
                <Reveal className={styles.chapterAside} delay={90}>
                  <p className={styles.chapterLede}>{chapter.lede}</p>
                  <ul className={styles.chapterList}>
                    {chapter.features.map(([name, detail]) => (
                      <li key={name}>
                        <span>
                          <strong>{name}</strong> — {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <Reveal delay={index === 0 ? 0 : 60}>{chapter.film}</Reveal>
            </article>
          ))}

          <ToolsBand />
        </div>
      </section>

      <section className={styles.index} id="everything">
        <div className={styles.inner}>
          <Reveal className={styles.indexHead}>
            <p className={styles.eyebrow}>The whole list</p>
            <h2 className={styles.indexTitle}>
              Everything it does <em>today</em> — and what&apos;s next.
            </h2>
            <p className={styles.indexSub}>
              Shipped and unshipped, marked as such. If it isn&apos;t running on
              a store yet, it says so.
            </p>
          </Reveal>

          <div className={styles.indexGroups}>
            {INDEX_GROUPS.map(([group, items], groupIndex) => (
              <Reveal
                className={styles.indexGroup}
                key={group}
                delay={groupIndex * 70}
              >
                <h4>{group}</h4>
                <ul className={styles.indexList}>
                  {items.map(([name, detail, live]) => (
                    <li key={name}>
                      <b>{name}</b>
                      <span
                        className={`${styles.soonTag} ${live ? styles.liveTag : ""}`}
                      >
                        {live ? "Live" : "Soon"}
                      </span>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

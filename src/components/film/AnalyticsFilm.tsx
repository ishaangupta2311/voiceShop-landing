"use client";

import type { CSSProperties } from "react";
import { FilmFrame } from "./FilmFrame";
import { useFilm } from "./useFilm";
import styles from "./film.module.css";

const STEPS = [1400, 1500, 2200, 2400, 2200, 2000, 2000] as const;

const CAPTIONS = [
  "Every conversation is captured — the owner dashboard, not the shopper's view.",
  "Sessions, messages, carts moved and questions that got no good answer.",
  "Each visitor is scored live: buying, browsing, exploring, confused, or about to leave.",
  "The sessions themselves are listed, newest first, with what actually happened.",
  "Any one of them replays turn by turn — so “why did they leave?” has an answer.",
  "The Playground runs the same agent against your live catalog before customers do.",
  "Settings holds the model, the system prompt, and the tone the agent sells in.",
];

const TABS = ["Monitor", "Playground", "Settings"];

const KPIS = [
  ["4,183", "sessions"],
  ["11,902", "messages"],
  ["612", "carts moved"],
  ["37", "unanswered"],
];

const INTENTS: [string, number, string][] = [
  ["Browsing", 0.42, "#6a3fd4"],
  ["Exploring", 0.24, "#1f4f9c"],
  ["Ready to buy", 0.18, "#1d7551"],
  ["Confused", 0.11, "#9a5b13"],
  ["About to leave", 0.05, "#cf2549"],
];

const SESSIONS: [string, string, string, string][] = [
  ["#4183", "Asked for “something calming”, compared two blends, dropped at shipping.", "confused", "#9a5b13"],
  ["#4182", "Voice session. Focus Blend → cart → checkout.", "bought", "#1d7551"],
  ["#4181", "Searched a product the store doesn't carry. Took a related option.", "exploring", "#1f4f9c"],
  ["#4180", "Four questions about sizing, no add to cart.", "browsing", "#6a3fd4"],
];

export function AnalyticsFilm({ accent }: { accent?: string }) {
  const { ref, step, still } = useFilm<HTMLDivElement>(STEPS, { restStep: 3 });

  const tab = step >= 6 ? 2 : step >= 5 ? 1 : 0;

  return (
    <div ref={ref}>
      <FilmFrame
        chrome="admin"
        captions={CAPTIONS}
        step={step}
        still={still}
        accent={accent}
      >
        <div className={styles.admin}>
          <div className={styles.adminNav}>
            <b>Digital Salesman</b>
            {TABS.map((label, index) => (
              <span key={label} data-on={index === tab ? "true" : undefined}>
                {label}
              </span>
            ))}
          </div>

          <div className={styles.adminBody}>
            {tab === 0 && (
              <>
                <div className={styles.kpis}>
                  {KPIS.map(([value, label], index) => (
                    <div
                      key={label}
                      className={styles.kpi}
                      data-in={step >= 1 ? "true" : undefined}
                      style={{ transitionDelay: `${index * 70}ms` } as CSSProperties}
                    >
                      <b>{step >= 1 ? value : "—"}</b>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.intentBars}>
                  {INTENTS.map(([label, fill, color], index) => (
                    <div key={label} className={styles.intentRow}>
                      <span>{label}</span>
                      <span className={styles.intentTrack}>
                        <i
                          data-in={step >= 2 ? "true" : undefined}
                          style={
                            {
                              "--fill": fill,
                              background: color,
                              transitionDelay: `${index * 90}ms`,
                            } as CSSProperties
                          }
                        />
                      </span>
                      <em>{Math.round(fill * 100)}%</em>
                    </div>
                  ))}
                </div>

                <div className={styles.sessions}>
                  {SESSIONS.map(([id, line, intent, color], index) => (
                    <div
                      key={id}
                      className={styles.session}
                      data-in={step >= 3 ? "true" : undefined}
                      data-focus={step === 4 && index === 0 ? "true" : undefined}
                      style={{ transitionDelay: `${index * 80}ms` } as CSSProperties}
                    >
                      <span className={styles.sessionId}>{id}</span>
                      <span className={styles.sessionLine}>{line}</span>
                      <span
                        className={styles.intentTag}
                        style={{
                          background: `color-mix(in srgb, ${color} 14%, #fff)`,
                          color,
                        }}
                      >
                        {intent}
                      </span>
                      <span className={styles.replay}>
                        {step === 4 && index === 0 ? "replaying…" : "replay"}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {tab === 1 && (
              <div className={styles.drawer}>
                <div className={styles.stageKicker}>Playground</div>
                <p className={styles.compareTakeaway}>
                  Type anything a customer might. It runs the real agent against
                  your live catalog, so you see the answer they would get —
                  before they get it.
                </p>
                <div className={styles.composer} style={{ border: 0, padding: 0 }}>
                  <span className={styles.composerField}>
                    “do you have anything for focus under $20?”
                  </span>
                </div>
                <span className={styles.toolStatus}>Finding the best matches…</span>
              </div>
            )}

            {tab === 2 && (
              <div className={styles.drawer}>
                <div className={styles.stageKicker}>Settings</div>
                {[
                  ["Model", "Gemini · tool-calling"],
                  ["Tone", "Direct, never pushy"],
                  ["Theme", "Inherited from storefront"],
                  ["Re-index", "On product, order and review change"],
                ].map(([label, value]) => (
                  <div key={label} className={styles.drawerLine} data-in="true">
                    <b>{label}</b>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </FilmFrame>
    </div>
  );
}

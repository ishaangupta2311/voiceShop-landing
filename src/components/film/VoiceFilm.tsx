"use client";

import type { CSSProperties } from "react";
import { FilmFrame, ToolStatus, Waveform } from "./FilmFrame";
import { Bottle, Composer, Msg, Panel } from "./parts";
import { useFilm } from "./useFilm";
import styles from "./film.module.css";

const STEPS = [1500, 1200, 2400, 800, 1600, 3800, 1900] as const;

const SPOKEN =
  "I need something for focus that won't keep me up at night";

/** The answer is products, not prose — each one a live catalog record. */
const RESULTS = [
  {
    name: "Focus Blend",
    why: "Lion's mane and L-theanine, no added caffeine.",
    price: "$16.00",
    stock: "In stock",
  },
  {
    name: "Calm Powder",
    why: "What most people pair with it for the evening.",
    price: "$13.00",
    stock: "In stock",
  },
];

const CAPTIONS = [
  "The mic is idle. Nothing is streaming, nothing is recorded.",
  "Tapping it opens a live session — the widget reports “Connecting…”.",
  "State: Listening. Speech is transcribed as the shopper talks.",
  "The full utterance lands. No keywords, no filter menu, no search box.",
  "The model picks a tool and the widget shows what it is doing.",
  "State: Speaking. The answer comes back as real product cards — live price and stock, addable on the spot.",
  "The session stays open, so the next sentence is a follow-up, not a restart.",
];

const MIC_STATE = [
  "idle",
  "connecting",
  "listening",
  "listening",
  "processing",
  "speaking",
  "listening",
];

const STATUS_LABEL = [
  "Mic off — tap to talk",
  "Connecting…",
  "Listening",
  "Listening",
  "Working on it…",
  "Speaking",
  "Listening",
];

const words = SPOKEN.split(" ");

export function VoiceFilm({ accent }: { accent?: string }) {
  const { ref, step, still } = useFilm<HTMLDivElement>(STEPS, { restStep: 5 });

  const micState = MIC_STATE[step];
  const typing = step === 2 ? "live" : step > 2 ? "done" : "off";

  return (
    <div ref={ref}>
      <FilmFrame
        chrome="browser"
        url="northwind.myshopify.com"
        captions={CAPTIONS}
        step={step}
        still={still}
        accent={accent}
      >
        <div className={styles.voiceStage}>
          <div className={styles.voiceMain}>
            <span className={styles.voiceStatus} data-state={micState}>
              <span className={styles.voiceStatusDot} />
              {STATUS_LABEL[step]}
            </span>

            <span className={styles.voiceWave}>
              <Waveform
                state={
                  micState === "listening"
                    ? "listening"
                    : micState === "speaking"
                      ? "speaking"
                      : micState === "processing"
                        ? "processing"
                        : "idle"
                }
              />
            </span>

            <p className={styles.voiceTranscript} data-typing={typing}>
              {typing === "off" ? (
                <span className={styles.voiceGhost} style={{ opacity: 1 }}>
                  Say what you actually want. It handles the rest.
                </span>
              ) : (
                words.map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    style={{ "--w": index / words.length } as CSSProperties}
                  >
                    {word}{" "}
                  </span>
                ))
              )}
              {step === 2 && <i className={styles.voiceCaret} />}
            </p>

            {step === 4 && <ToolStatus label="Finding the best matches…" />}

            <div className={styles.voiceResults}>
              {RESULTS.map((product, index) => (
                <div
                  key={product.name}
                  className={styles.voiceResult}
                  data-in={step >= 5 ? "true" : undefined}
                  style={{ transitionDelay: `${index * 110}ms` }}
                >
                  <i>
                    <Bottle />
                  </i>
                  <div>
                    <strong>{product.name}</strong>
                    <em>{product.why}</em>
                    <span className={styles.voiceResultFoot}>
                      {product.price}
                      <span className={`${styles.tag} ${styles.tagStock}`}>
                        {product.stock}
                      </span>
                      <span className={`${styles.tag} ${styles.tagAdd}`}>Add</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Panel
            status={step === 0 ? "Idle" : "Voice"}
            footer={<Composer state={micState} />}
          >
            <Msg from="agent" shown>
              Hi! How can I help you today?
            </Msg>
            <Msg from="shopper" shown={step >= 3} voice>
              {SPOKEN}
            </Msg>
            <Msg from="agent" shown={step >= 5}>
              Two that fit — neither has an evening stimulant.
            </Msg>

            <p className={styles.shownLabel} data-in={step >= 5 ? "true" : undefined}>
              2 of 6 shown here <em>for “focus”</em>
            </p>
            {RESULTS.map((product, index) => (
              <span
                key={product.name}
                className={styles.panelCard}
                data-in={step >= 5 ? "true" : undefined}
                style={{ transitionDelay: `${140 + index * 110}ms` }}
              >
                <i />
                <b>{product.name}</b>
                <em className={`${styles.tag} ${styles.tagAdd}`}>Add</em>
              </span>
            ))}

            <Msg from="agent" shown={step >= 6}>
              Want me to put one in the cart?
            </Msg>
          </Panel>
        </div>
      </FilmFrame>
    </div>
  );
}

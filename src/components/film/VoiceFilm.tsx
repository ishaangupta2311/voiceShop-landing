"use client";

import type { CSSProperties } from "react";
import { FilmFrame, ToolStatus, Waveform } from "./FilmFrame";
import { Composer, Msg, Panel } from "./parts";
import { useFilm } from "./useFilm";
import styles from "./film.module.css";

const STEPS = [1500, 1200, 2400, 800, 1600, 3000, 1000] as const;

const SPOKEN =
  "I need something for focus that won't keep me up at night";

const CAPTIONS = [
  "The mic is idle. Nothing is streaming, nothing is recorded.",
  "Tapping it opens a live session — the widget reports “Connecting…”.",
  "State: Listening. Speech is transcribed as the shopper talks.",
  "The full utterance lands. No keywords, no filter menu, no search box.",
  "The model picks a tool and the widget shows what it is doing.",
  "State: Speaking. The answer is spoken and written, grounded in the catalog.",
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

            <div className={styles.voiceMeta}>
              {[
                ["Focus Blend", "no evening stimulant"],
                ["Calm Powder", "pairs for sleep"],
              ].map(([name, why], index) => (
                <span
                  key={name}
                  className={styles.voicePill}
                  data-in={step >= 5 ? "true" : undefined}
                  style={{ transitionDelay: `${index * 110}ms` }}
                >
                  <strong>{name}</strong> — {why}
                </span>
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
              Two that fit: Focus Blend has no evening stimulant, and Calm
              Powder is what most people pair with it.
            </Msg>
          </Panel>
        </div>
      </FilmFrame>
    </div>
  );
}

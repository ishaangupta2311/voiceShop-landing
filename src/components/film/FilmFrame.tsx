"use client";

import type { CSSProperties, ReactNode } from "react";
import styles from "./film.module.css";

export type FilmChrome = "browser" | "panel" | "admin";

/**
 * The shared shell every product film plays inside: browser chrome, a live
 * caption line that tracks the current step, and a pip rail marking progress.
 *
 * The caption is the film's subtitle track — it names what the product is
 * doing while it does it, and doubles as the accessible description for
 * anyone who never sees the motion.
 */
export function FilmFrame({
  chrome = "browser",
  url,
  captions,
  step,
  still,
  accent,
  tall = false,
  children,
}: {
  chrome?: FilmChrome;
  url?: string;
  captions: readonly string[];
  step: number;
  still?: boolean;
  accent?: string;
  tall?: boolean;
  children: ReactNode;
}) {
  const caption = captions[Math.min(step, captions.length - 1)] ?? captions[0];

  return (
    <figure
      className={`${styles.frame} ${tall ? styles.frameTall : ""}`}
      style={accent ? ({ "--ui-accent": accent } as CSSProperties) : undefined}
    >
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.chromeDots}>
          <i />
          <i />
          <i />
        </span>
        {chrome === "browser" && url ? (
          <span className={styles.omnibox}>{url}</span>
        ) : (
          <span className={styles.chromeLabel}>
            {chrome === "admin" ? "VoiceShop · admin" : "VoiceShop"}
          </span>
        )}
      </div>

      <div className={styles.frameBody}>{children}</div>

      <figcaption className={styles.caption}>
        <span className={styles.captionRail} aria-hidden="true">
          {captions.map((entry, index) => (
            <i key={entry} data-on={index <= step ? "true" : undefined} />
          ))}
        </span>
        <span className={styles.captionText} aria-live="off">
          {caption}
        </span>
        {still && <span className={styles.captionStill}>motion off</span>}
      </figcaption>
    </figure>
  );
}

/**
 * The shimmering "tool is running" status line, reproduced from the widget's
 * own `.ds-stream-status` atom so the films use the merchant-visible wording.
 */
export function ToolStatus({ label }: { label: string }) {
  return (
    <span className={styles.toolStatus}>
      <span className={styles.toolSpinner} aria-hidden="true" />
      {label}
    </span>
  );
}

/** Live audio bars — amplitude is driven by --film-progress, not by JS. */
export function Waveform({
  state,
  bars = 28,
}: {
  state: "idle" | "listening" | "speaking" | "processing";
  bars?: number;
}) {
  return (
    <span className={styles.waveform} data-state={state} aria-hidden="true">
      {Array.from({ length: bars }, (_, index) => (
        <i key={index} style={{ "--bar": index } as CSSProperties} />
      ))}
    </span>
  );
}

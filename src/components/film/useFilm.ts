"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeMotion(onChange: () => void) {
  const query = matchMedia(MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const motionSnapshot = () => matchMedia(MOTION_QUERY).matches;
/** The server can't know the preference; assume motion and correct on hydrate. */
const motionServerSnapshot = () => false;

/**
 * Drives a "product film" — a scripted, looping sequence of UI states that
 * reads like a screen recording but is live DOM.
 *
 * Design notes:
 * - React state changes only when the *step* changes, so a 12-step film
 *   re-renders ~12 times per loop instead of 60 times per second. Anything
 *   that needs continuous motion reads the `--film-progress` custom property,
 *   which is written straight to the node on every frame.
 * - The clock only advances while the film is on screen, so a page full of
 *   films costs one rAF each and nothing else.
 * - Under `prefers-reduced-motion` the film never runs: it renders once at
 *   `restStep`, which should be the state that best explains the feature.
 *
 * `steps` must be a stable reference — declare it at module scope, not inline.
 */
export function useFilm<T extends HTMLElement = HTMLDivElement>(
  steps: readonly number[],
  options: { restStep?: number } = {},
) {
  const { restStep = steps.length - 1 } = options;
  const ref = useRef<T>(null);
  const [playedStep, setPlayedStep] = useState(0);
  const still = useSyncExternalStore(
    subscribeMotion,
    motionSnapshot,
    motionServerSnapshot,
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (still) {
      node.style.setProperty("--film-progress", "1");
      return;
    }

    const total = steps.reduce((sum, ms) => sum + ms, 0);
    let elapsed = 0;
    let last = 0;
    let visible = false;
    let frame = 0;

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);

      if (!visible) {
        last = now;
        return;
      }
      // Clamp so a backgrounded tab doesn't fast-forward the whole film.
      elapsed = (elapsed + Math.min(now - last, 64)) % total;
      last = now;

      let start = 0;
      for (let index = 0; index < steps.length; index += 1) {
        const span = steps[index];
        if (elapsed < start + span) {
          node.style.setProperty(
            "--film-progress",
            ((elapsed - start) / span).toFixed(3),
          );
          setPlayedStep((current) => (current === index ? current : index));
          return;
        }
        start += span;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    frame = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [steps, still]);

  return { ref, step: still ? restStep : playedStep, still };
}

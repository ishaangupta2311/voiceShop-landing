"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
} from "react";
import styles from "./shared.module.css";

export function VoiceGlyph({ className = "" }: { className?: string }) {
  return (
    <span className={`${styles.voiceGlyph} ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("reveal-in");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          element.classList.add("reveal-in");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -48px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/**
 * Pointer-tracking 3D tilt (Animmaster-style "3D / mouse effect" category,
 * hand-built). Disabled for touch devices and reduced-motion users.
 */
export function TiltCard({
  children,
  className = "",
  maxTilt = 6,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none)").matches
    ) {
      return;
    }
    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.transform = `perspective(1100px) rotateY(${(
        x *
        maxTilt *
        2
      ).toFixed(2)}deg) rotateX(${(-y * maxTilt * 2).toFixed(2)}deg)`;
    };
    const handleLeave = () => {
      element.style.transform = "perspective(1100px)";
    };
    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", handleLeave);
    return () => {
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", handleLeave);
    };
  }, [maxTilt]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transition: "transform 220ms ease", willChange: "transform" }}
    >
      {children}
    </div>
  );
}

/**
 * Cycling word for kinetic-typography heroes ("text animation" category).
 * The key remount replays the concept's own entrance keyframes; cycling
 * pauses entirely under reduced motion.
 */
export function WordCycler({
  words,
  className = "",
  intervalMs = 2100,
}: {
  words: string[];
  className?: string;
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = setInterval(
      () => setIndex((value) => (value + 1) % words.length),
      intervalMs,
    );
    return () => clearInterval(timer);
  }, [words.length, intervalMs]);

  return (
    <span className={className} key={index} aria-live="off">
      {words[index]}
    </span>
  );
}

export type DemoTheme = {
  name: string;
  accent: string;
  soft: string;
};

/**
 * Wraps a product demo and lets the visitor swap the demo's brand color,
 * proving the "VoiceShop adapts to your store's theme" story. The selected
 * theme cascades to the demo through --demo-accent / --demo-soft.
 */
export function ThemedDemo({
  themes,
  label,
  className = "",
  children,
}: {
  themes: DemoTheme[];
  label: string;
  className?: string;
  children: ReactNode;
}) {
  const [active, setActive] = useState(0);
  const theme = themes[active];

  return (
    <div
      className={className}
      style={
        {
          "--demo-accent": theme.accent,
          "--demo-soft": theme.soft,
        } as CSSProperties
      }
    >
      <div className={styles.swatchRow}>
        <span className={styles.swatchLabel}>{label}</span>
        <span
          className={styles.swatches}
          role="group"
          aria-label="Demo store theme"
        >
          {themes.map((candidate, index) => (
            <button
              key={candidate.name}
              type="button"
              className={styles.swatch}
              aria-pressed={index === active}
              aria-label={`${candidate.name} theme`}
              onClick={() => setActive(index)}
            >
              <span style={{ background: candidate.accent }} />
            </button>
          ))}
        </span>
      </div>
      {children}
    </div>
  );
}

export function WaitlistForm({ id }: { id: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      className={styles.waitlist}
      onSubmit={handleSubmit}
      aria-describedby={`${id}-note`}
    >
      <div className={styles.waitlistRow}>
        <label className="sr-only" htmlFor={id}>
          Email address
        </label>
        <input
          id={id}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@yourstore.com"
          required
        />
        <button type="submit">Join the waitlist</button>
      </div>
      <p id={`${id}-note`} className={styles.waitlistNote}>
        Design prototype — nothing is sent or stored yet.
      </p>
    </form>
  );
}

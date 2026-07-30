"use client";

import {
  useEffect,
  useRef,
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

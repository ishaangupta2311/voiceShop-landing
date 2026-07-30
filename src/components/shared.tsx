import type { FormEvent, ReactNode } from "react";
import { motion } from "motion/react";
import styles from "./shared.module.css";

export function VoiceMark({ className = "" }: { className?: string }) {
  return (
    <span className={`${styles.voiceMark} ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="none"
    >
      <path d="M3.5 10h12M11 5.5l4.5 4.5-4.5 4.5" stroke="currentColor" />
    </svg>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const waitlistThemes = {
  green: styles.green,
  blue: styles.blue,
  red: styles.red,
  azure: styles.azure,
  mint: styles.mint,
} as const;

export function WaitlistForm({
  id,
  theme,
  compact = false,
}: {
  id: string;
  theme: keyof typeof waitlistThemes;
  compact?: boolean;
}) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      className={`${styles.waitlist} ${waitlistThemes[theme]} ${
        compact ? styles.compact : ""
      }`}
      onSubmit={handleSubmit}
      aria-describedby={`${id}-note`}
    >
      <label className="sr-only" htmlFor={id}>
        Email address
      </label>
      <div className={styles.waitlistRow}>
        <input
          id={id}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="Email address"
          required
        />
        <button type="submit">
          Join the waitlist
          <ArrowIcon />
        </button>
      </div>
      <p id={`${id}-note`}>
        Prototype only — submissions are not connected yet.
      </p>
    </form>
  );
}

"use client";

import { usePathname, useRouter } from "next/navigation";
import { conceptMeta } from "@/concepts/meta";
import styles from "./concept-switcher.module.css";

export default function ConceptSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const index = conceptMeta.findIndex(
    (concept) => `/${concept.slug}` === pathname,
  );
  if (index === -1) {
    return null;
  }

  const current = conceptMeta[index];
  const next = conceptMeta[(index + 1) % conceptMeta.length];

  return (
    <div className={styles.dock}>
      <p className={styles.meta} aria-live="polite">
        <span className={styles.metaIndex}>
          {index + 1}/{conceptMeta.length}
        </span>
        <strong>{current.name}</strong>
      </p>
      <button
        type="button"
        className={styles.nextButton}
        onClick={() => router.push(`/${next.slug}`)}
        aria-label={`Concept ${index + 1} of ${conceptMeta.length}: ${current.name}. Show next concept: ${next.name}.`}
      >
        Next concept
        <span aria-hidden="true">↻</span>
      </button>
    </div>
  );
}

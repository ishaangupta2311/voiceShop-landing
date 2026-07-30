"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SignalGarden } from "./designs/signal-garden";
import { OpenShop } from "./designs/open-shop";
import { HighIntent } from "./designs/high-intent";
import { GuidedSale } from "./designs/guided-sale";
import { LivingStorefront } from "./designs/living-storefront";
import { ArrowIcon } from "./shared";
import styles from "./design-explorer.module.css";

const designs = [
  { slug: "signal-garden", label: "Signal Garden", Component: SignalGarden },
  { slug: "open-shop", label: "Open Shop", Component: OpenShop },
  { slug: "high-intent", label: "High Intent", Component: HighIntent },
  { slug: "guided-sale", label: "Guided Sale", Component: GuidedSale },
  {
    slug: "living-storefront",
    label: "Living Storefront",
    Component: LivingStorefront,
  },
] as const;

function getDesignIndex(slug: string | null) {
  const index = designs.findIndex((design) => design.slug === slug);
  return index === -1 ? 0 : index;
}

export function DesignExplorer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const reduceMotion = useReducedMotion();
  const activeIndex = getDesignIndex(searchParams.get("design"));
  const activeDesign = designs[activeIndex];
  const ActiveDesign = activeDesign.Component;

  function showNextDesign() {
    const nextIndex = (activeIndex + 1) % designs.length;
    const nextDesign = designs[nextIndex];
    router.push(`${pathname}?design=${nextDesign.slug}`, { scroll: false });
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div className={styles.explorer}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeDesign.slug}
          className={styles.designCanvas}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
          transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <ActiveDesign />
        </motion.div>
      </AnimatePresence>

      <aside className={styles.switcher} aria-label="Design explorer">
        <div className={styles.designMeta} aria-live="polite">
          <span>
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(designs.length).padStart(2, "0")}
          </span>
          <strong>{activeDesign.label}</strong>
        </div>
        <button type="button" onClick={showNextDesign}>
          <span>Next design</span>
          <ArrowIcon />
        </button>
      </aside>
    </div>
  );
}

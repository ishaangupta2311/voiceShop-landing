"use client";

import { useEffect } from "react";
import LiquidMouse from "./LiquidMouse";
import MagneticCursor from "./MagneticCursor";
import styles from "./the-wave.module.css";

export default function WaveMotion() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>("[data-wave-page]");
    if (!page) return;

    const hero = page.querySelector<HTMLElement>("[data-wave-hero]");
    const demo = page.querySelector<HTMLElement>("[data-wave-demo]");
    const navLinks = Array.from(
      page.querySelectorAll<HTMLAnchorElement>("[data-wave-nav] a[href^='#']"),
    );
    const sections = Array.from(
      page.querySelectorAll<HTMLElement>("[data-wave-section]"),
    );
    const scrollCards = Array.from(
      page.querySelectorAll<HTMLElement>("[data-scroll-card]"),
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!prefersReducedMotion) {
      page.dataset.cardMotion = "true";
    }

    const updateScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(window.scrollY / maxScroll, 1);
      page.style.setProperty("--scroll-progress", progress.toFixed(4));
      page.dataset.scrolled = window.scrollY > 48 ? "true" : "false";

      if (hero) {
        const heroProgress = Math.min(
          Math.max(window.scrollY / Math.max(hero.offsetHeight, 1), 0),
          1,
        );
        page.style.setProperty("--hero-progress", heroProgress.toFixed(4));
      }

      if (demo) {
        const bounds = demo.getBoundingClientRect();
        const centerDelta =
          (bounds.top + bounds.height / 2 - window.innerHeight / 2) /
          window.innerHeight;
        page.style.setProperty(
          "--demo-scroll",
          Math.min(Math.max(centerDelta, -1), 1).toFixed(4),
        );
      }

      if (!prefersReducedMotion) {
        const revealStart = window.innerHeight * 0.96;
        const revealEnd = window.innerHeight * 0.5;

        scrollCards.forEach((card) => {
          const bounds = card.getBoundingClientRect();
          const cardProgress = Math.min(
            Math.max(
              (revealStart - bounds.top) / (revealStart - revealEnd),
              0,
            ),
            1,
          );
          card.style.setProperty(
            "--card-progress",
            cardProgress.toFixed(4),
          );
        });
      }

      let activeId = "";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.48) {
          activeId = section.id;
        }
      });
      navLinks.forEach((link) => {
        link.dataset.active =
          link.getAttribute("href") === `#${activeId}` ? "true" : "false";
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      delete page.dataset.cardMotion;
      scrollCards.forEach((card) =>
        card.style.removeProperty("--card-progress"),
      );
    };
  }, []);

  return (
    <>
      <div className={styles.scrollRail} aria-hidden="true">
        <span />
      </div>
      <LiquidMouse />
      <MagneticCursor />
      <div className={styles.scrollCue} aria-hidden="true">
        <span>Scroll to listen</span>
        <i />
      </div>
    </>
  );
}

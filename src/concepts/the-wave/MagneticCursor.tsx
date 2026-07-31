"use client";

import { useEffect, useRef } from "react";
import styles from "./the-wave.module.css";

const MAGNETIC_SELECTOR = "a, button";

export default function MagneticCursor() {
  const ringRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (!finePointer.matches || reducedMotion.matches) return;

    let pointerX = -100;
    let pointerY = -100;
    let ringX = -100;
    let ringY = -100;
    let velocityX = 0;
    let velocityY = 0;
    let ringWidth = 9;
    let ringHeight = 9;
    let widthVelocity = 0;
    let heightVelocity = 0;
    let activeTarget: HTMLElement | null = null;
    let frame = 0;

    const move = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      ring.dataset.visible = "true";
      dot.dataset.visible = "true";

      const target = document
        .elementsFromPoint(event.clientX, event.clientY)
        .map((element) => element.closest(MAGNETIC_SELECTOR))
        .find((element): element is Element => element !== null);
      activeTarget =
        target instanceof HTMLElement && !target.hasAttribute("disabled")
          ? target
          : null;
      ring.dataset.active = activeTarget ? "true" : "false";
    };

    const leave = () => {
      activeTarget = null;
      ring.dataset.visible = "false";
      dot.dataset.visible = "false";
    };

    const tick = () => {
      let destinationX = pointerX;
      let destinationY = pointerY;
      let destinationWidth = 9;
      let destinationHeight = 9;
      let isLocked = false;

      if (activeTarget?.isConnected) {
        const bounds = activeTarget.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const compactTarget = bounds.height < 34;
        destinationX = centerX + (pointerX - centerX) * 0.12;
        destinationY = centerY + (pointerY - centerY) * 0.12;
        destinationWidth = Math.min(
          Math.max(bounds.width + (compactTarget ? 18 : 10), 28),
          260,
        );
        destinationHeight = Math.min(
          Math.max(bounds.height + (compactTarget ? 10 : 8), 24),
          76,
        );
        isLocked = true;
      }

      velocityX = (velocityX + (destinationX - ringX) * 0.16) * 0.7;
      velocityY = (velocityY + (destinationY - ringY) * 0.16) * 0.7;
      ringX += velocityX;
      ringY += velocityY;

      widthVelocity =
        (widthVelocity + (destinationWidth - ringWidth) * 0.18) * 0.68;
      heightVelocity =
        (heightVelocity + (destinationHeight - ringHeight) * 0.18) * 0.68;
      ringWidth += widthVelocity;
      ringHeight += heightVelocity;

      const speed = Math.hypot(velocityX, velocityY);
      const stretch = isLocked ? 0 : Math.min(speed / 80, 0.22);
      const angle = isLocked ? 0 : Math.atan2(velocityY, velocityX);

      ring.style.width = `${ringWidth}px`;
      ring.style.height = `${ringHeight}px`;
      ring.style.transform = `translate3d(${ringX - ringWidth / 2}px, ${
        ringY - ringHeight / 2
      }px, 0) rotate(${angle}rad) scaleX(${1 + stretch}) scaleY(${
        1 - stretch * 0.45
      })`;
      dot.style.transform = `translate3d(${pointerX - 1.5}px, ${
        pointerY - 1.5
      }px, 0)`;

      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div className={styles.magneticCursor} aria-hidden="true">
      <span ref={ringRef} className={styles.magneticRing} />
      <span ref={dotRef} className={styles.magneticDot} />
    </div>
  );
}

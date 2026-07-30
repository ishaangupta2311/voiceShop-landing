"use client";

import { useState } from "react";
import Broadsheet from "@/designs/broadsheet/Broadsheet";
import Console from "@/designs/console/Console";
import Playroom from "@/designs/playroom/Playroom";
import Poster from "@/designs/poster/Poster";
import Showroom from "@/designs/showroom/Showroom";
import styles from "./design-gallery.module.css";

const designs = [
  { name: "The Showroom", Component: Showroom },
  { name: "The Broadsheet", Component: Broadsheet },
  { name: "The Console", Component: Console },
  { name: "The Playroom", Component: Playroom },
  { name: "The Poster", Component: Poster },
];

export default function DesignGallery() {
  const [index, setIndex] = useState(0);
  const { name, Component } = designs[index];

  return (
    <>
      {/* key remounts the design so its entrance animations replay */}
      <Component key={index} />

      <button
        type="button"
        className={styles.switcher}
        onClick={() => setIndex((current) => (current + 1) % designs.length)}
        aria-label={`Showing design ${index + 1} of ${designs.length}: ${name}. Switch to next design.`}
      >
        <span className={styles.switcherIndex}>
          {index + 1}/{designs.length}
        </span>
        <span className={styles.switcherName}>{name}</span>
        <span className={styles.switcherAction} aria-hidden="true">
          Next ↻
        </span>
      </button>
    </>
  );
}

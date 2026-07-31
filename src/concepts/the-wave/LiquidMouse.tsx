"use client";

import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { useEffect, useState } from "react";
import styles from "./the-wave.module.css";

export default function LiquidMouse() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const update = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches);
    };

    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className={styles.liquidMouse} aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
      >
        <EffectComposer multisampling={0}>
          <Fluid
            fluidColor="#8f9995"
            showBackground={false}
            rainbow={false}
            blend={3.5}
            intensity={0.85}
            force={0.48}
            distortion={0.12}
            radius={0.055}
            curl={8}
            swirl={3}
            pressure={0.62}
            densityDissipation={0.88}
            velocityDissipation={0.92}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

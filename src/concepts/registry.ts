import type { ComponentType } from "react";
import { conceptMeta, type ConceptMeta } from "@/concepts/meta";
import SayTheWord from "@/concepts/say-the-word/SayTheWord";
import TheWave from "@/concepts/the-wave/TheWave";

export type ConceptEntry = ConceptMeta & {
  Component: ComponentType;
};

const components: Record<string, ComponentType> = {
  "say-the-word": SayTheWord,
  "the-wave": TheWave,
};

export const concepts: ConceptEntry[] = conceptMeta.map((meta) => ({
  ...meta,
  Component: components[meta.slug],
}));

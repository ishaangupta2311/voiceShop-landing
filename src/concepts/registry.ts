import type { ComponentType } from "react";
import { conceptMeta, type ConceptMeta } from "@/concepts/meta";
import Loudmouth from "@/concepts/loudmouth/Loudmouth";
import SayTheWord from "@/concepts/say-the-word/SayTheWord";
import Signal from "@/concepts/signal/Signal";
import Subtitles from "@/concepts/subtitles/Subtitles";
import TheWave from "@/concepts/the-wave/TheWave";

export type ConceptEntry = ConceptMeta & {
  Component: ComponentType;
};

const components: Record<string, ComponentType> = {
  "say-the-word": SayTheWord,
  "the-wave": TheWave,
  signal: Signal,
  loudmouth: Loudmouth,
  subtitles: Subtitles,
};

export const concepts: ConceptEntry[] = conceptMeta.map((meta) => ({
  ...meta,
  Component: components[meta.slug],
}));

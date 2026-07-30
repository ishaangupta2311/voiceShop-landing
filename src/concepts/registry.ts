import type { ComponentType } from "react";
import { conceptMeta, type ConceptMeta } from "@/concepts/meta";
import CornerShop from "@/concepts/corner-shop/CornerShop";
import Parade from "@/concepts/parade/Parade";
import Ripple from "@/concepts/ripple/Ripple";
import Soundcheck from "@/concepts/soundcheck/Soundcheck";
import Sunroom from "@/concepts/sunroom/Sunroom";

export type ConceptEntry = ConceptMeta & {
  Component: ComponentType;
};

const components: Record<string, ComponentType> = {
  sunroom: Sunroom,
  "corner-shop": CornerShop,
  ripple: Ripple,
  soundcheck: Soundcheck,
  parade: Parade,
};

export const concepts: ConceptEntry[] = conceptMeta.map((meta) => ({
  ...meta,
  Component: components[meta.slug],
}));

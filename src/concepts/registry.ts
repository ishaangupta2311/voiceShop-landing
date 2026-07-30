import type { ComponentType } from "react";
import { conceptMeta, type ConceptMeta } from "@/concepts/meta";
import Aisle from "@/concepts/aisle/Aisle";
import Billboard from "@/concepts/billboard/Billboard";
import Conveyor from "@/concepts/conveyor/Conveyor";
import Showfloor from "@/concepts/showfloor/Showfloor";
import Sunroom from "@/concepts/sunroom/Sunroom";

export type ConceptEntry = ConceptMeta & {
  Component: ComponentType;
};

const components: Record<string, ComponentType> = {
  sunroom: Sunroom,
  showfloor: Showfloor,
  conveyor: Conveyor,
  billboard: Billboard,
  aisle: Aisle,
};

export const concepts: ConceptEntry[] = conceptMeta.map((meta) => ({
  ...meta,
  Component: components[meta.slug],
}));

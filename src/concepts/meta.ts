export type ConceptMeta = {
  slug: string;
  name: string;
  description: string;
};

export const conceptMeta: ConceptMeta[] = [
  {
    slug: "sunroom",
    name: "Sunroom",
    description:
      "VoiceShop concept: a warm, playful home for the shopping buddy that talks shoppers from question to cart.",
  },
  {
    slug: "showfloor",
    name: "Showfloor",
    description:
      "VoiceShop concept: a 3D showfloor where the live storefront demo tilts under your cursor.",
  },
  {
    slug: "conveyor",
    name: "Conveyor",
    description:
      "VoiceShop concept: a moving belt of products, picked in real time by a shopper's voice.",
  },
  {
    slug: "billboard",
    name: "Billboard",
    description:
      "VoiceShop concept: kinetic typography selling voice-first commerce one verb at a time.",
  },
  {
    slug: "aisle",
    name: "The Aisle",
    description:
      "VoiceShop concept: a scroll-driven walk down the aisle, from first question to checkout.",
  },
];

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { concepts } from "@/concepts/registry";

type Props = {
  params: Promise<{ concept: string }>;
};

export function generateStaticParams() {
  return concepts.map((concept) => ({ concept: concept.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { concept } = await params;
  const entry = concepts.find((candidate) => candidate.slug === concept);
  if (!entry) {
    return {};
  }
  return {
    title: entry.name,
    description: entry.description,
  };
}

export default async function ConceptPage({ params }: Props) {
  const { concept } = await params;
  const entry = concepts.find((candidate) => candidate.slug === concept);
  if (!entry) {
    notFound();
  }
  const { Component } = entry;
  return <Component />;
}

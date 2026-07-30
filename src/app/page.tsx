import { Suspense } from "react";
import { DesignExplorer } from "@/components/design-explorer";

export default function Home() {
  return (
    <Suspense fallback={<div className="page-loading" aria-hidden="true" />}>
      <DesignExplorer />
    </Suspense>
  );
}

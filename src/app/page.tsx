import { redirect } from "next/navigation";
import { conceptMeta } from "@/concepts/meta";

export default function Home() {
  redirect(`/${conceptMeta[0].slug}`);
}

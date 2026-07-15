import type { Metadata } from "next";
import PhysiotherapyClient from "./PhysiotherapyClient";

export const metadata: Metadata = {
  title: "Physiotherapy Centre — Dhawan Healthcare Group",
  description: "Senior physical therapists delivering advanced joint rehabilitation, sports injury recovery, trauma rehab, geriatric mobility and neuro therapy.",
  openGraph: {
    title: "Physiotherapy Centre — Dhawan Healthcare Group",
    description: "Get moving again with structured, therapist-led post-surgical recovery, trauma rehabilitation, and pain management programmes.",
  },
};

export default function PhysiotherapyPage() {
  return <PhysiotherapyClient />;
}

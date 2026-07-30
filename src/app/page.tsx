import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Dhawan Orthopaedic Hospital — Advanced Orthopaedic & Trauma Care",
  description: "Trusted orthopaedic excellence with advanced recovery and rehabilitation. Joint replacement, trauma, spine, sports injury, physiotherapy, and nutrition.",
  openGraph: {
    title: "Dhawan Orthopaedic Hospital — Restore Mobility. Renew Life.",
    description: "World-class orthopaedic, physiotherapy, and nutrition care under one roof. Joint replacement, spine, sports rehab.",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeClient />;
}

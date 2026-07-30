import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us — Dhawan Healthcare Group",
  description: "Learn about the history of Dhawan Orthopaedic Hospital and our patient-centric values. Led by senior surgeons with over 30 years of clinical trust.",
  openGraph: {
    title: "About Us — Dhawan Healthcare Group",
    description: "Learn about our journey, senior surgical expertise, and our complete orthopaedic care ecosystem.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

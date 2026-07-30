import type { Metadata } from "next";
import DoctorsClient from "./DoctorsClient";

export const metadata: Metadata = {
  title: "Meet Our Doctors — Dhawan Healthcare Group",
  description: "Consult with senior orthopaedic surgeons, sports physical therapists, and clinical nutritionists working as an integrated medical team.",
  openGraph: {
    title: "Meet Our Doctors — Dhawan Healthcare Group",
    description: "Get treated by senior experts in orthopaedic surgery, trauma recovery, physiotherapy, and custom diet counselling.",
  },
};

export default function DoctorsPage() {
  return <DoctorsClient />;
}

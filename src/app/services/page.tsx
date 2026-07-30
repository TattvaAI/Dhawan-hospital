import { Metadata } from "next";
import { Suspense } from "react";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Specialised Orthopaedic Services | Dhawan Healthcare",
  description: "Explore our specialized services including Orthopaedics, Trauma Care, Joint Replacement, Spine Care, Sports Injury treatments, and Physiotherapy under one roof.",
  keywords: ["Orthopaedic Services", "Joint Replacement", "Trauma Care", "Spine Care", "Sports Injury Treatment", "Physiotherapy", "Dhawan Healthcare", "Ambala"],
};

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen grid place-items-center bg-background"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold" /></div>}>
      <ServicesClient />
    </Suspense>
  );
}

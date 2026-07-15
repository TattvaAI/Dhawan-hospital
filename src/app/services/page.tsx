import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Specialised Orthopaedic Services | Dhawan Healthcare",
  description: "Explore our specialized services including Orthopaedics, Trauma Care, Joint Replacement, Spine Care, Sports Injury treatments, and Physiotherapy under one roof.",
  keywords: ["Orthopaedic Services", "Joint Replacement", "Trauma Care", "Spine Care", "Sports Injury Treatment", "Physiotherapy", "Dhawan Healthcare", "Ambala"],
};

export default function ServicesPage() {
  return <ServicesClient />;
}

import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery — Dhawan Healthcare Group",
  description: "Inside Dhawan Orthopaedic Hospital, Physiotherapy Centre and our patient experience.",
  openGraph: {
    title: "Gallery — Dhawan Healthcare Group",
    description: "Inside Dhawan Orthopaedic Hospital, Physiotherapy Centre and our patient experience.",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}

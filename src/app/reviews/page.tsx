import type { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Patient Reviews — Dhawan Healthcare Group",
  description: "Real patient stories of recovery, mobility and renewed life. Discover patient reviews for Dhawan Orthopaedic Hospital.",
  openGraph: {
    title: "Patient Reviews — Dhawan Healthcare Group",
    description: "Read real stories from patients who got their mobility and life back.",
  },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}

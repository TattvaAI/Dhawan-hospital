"use client";

import { useState } from "react";
import SectionTitle from "@/components/site/SectionTitle";
import ReviewCarousel from "@/components/reviews/ReviewCarousel";
import ReviewForm from "@/components/reviews/ReviewForm";

const initialReviews = [
  {
    name: "Anita R.",
    role: "Knee Replacement",
    rating: 5,
    text: "Dr. Dhawan and the physiotherapy team gave me my life back. I was walking pain-free within weeks.",
  },
  {
    name: "Vikas K.",
    role: "Sports Injury",
    rating: 5,
    text: "Excellent rehab. Back on the field in under 3 months. The team is meticulous and kind.",
  },
  {
    name: "Sunita M.",
    role: "Right Diet",
    rating: 5,
    text: "Roveeta's plan was simple to follow and the results were real. Down 12 kg in 6 months.",
  },
  {
    name: "Rakesh S.",
    role: "Fracture Surgery",
    rating: 5,
    text: "World-class care in Ambala. From surgery to rehab — flawless.",
  },
];

export default function ReviewsClient() {
  const [list, setList] = useState(initialReviews);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((v) => (v + 1) % list.length);
  };

  const handlePrev = () => {
    setIndex((v) => (v - 1 + list.length) % list.length);
  };

  const handleSelect = (idx: number) => {
    setIndex(idx);
  };

  const handleSubmitReview = (newReview: {
    name: string;
    role: string;
    rating: number;
    text: string;
  }) => {
    setList((l) => [newReview, ...l]);
    setIndex(0); // View the newly submitted review
  };

  return (
    <>
      <section className="py-24 grad-hero">
        <div className="container mx-auto px-4">
          <SectionTitle
            eyebrow="Reviews"
            title="What patients say"
            subtitle="Real recovery stories from individuals who reclaimed their mobility, health, and vitality under our care."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <ReviewCarousel
            list={list}
            index={index}
            onNext={handleNext}
            onPrev={handlePrev}
            onSelect={handleSelect}
          />
        </div>
      </section>

      <section className="py-16 bg-card/10">
        <div className="container mx-auto px-4 max-w-2xl">
          <SectionTitle
            eyebrow="Share Your Story"
            title="Leave a review"
            subtitle="Your experience inspires others on their healing journey. Let us know how we did."
          />
          <ReviewForm onSubmit={handleSubmitReview} />
        </div>
      </section>
    </>
  );
}

"use client";

import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

interface ReviewCarouselProps {
  list: Review[];
  index: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

export default function ReviewCarousel({
  list,
  index,
  onNext,
  onPrev,
  onSelect,
}: ReviewCarouselProps) {
  if (list.length === 0) return null;

  return (
    <div className="relative glass rounded-3xl p-10 md:p-14 shadow-elegant overflow-hidden border border-border">
      <Quote className="absolute top-6 left-6 h-10 w-10 text-gold/20" />
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="flex gap-1 text-gold">
            {Array.from({ length: list[index].rating }).map((_, j) => (
              <Star key={j} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-6 font-display text-2xl md:text-3xl leading-relaxed italic text-foreground/90">
            "{list[index].text}"
          </p>
          <div className="mt-8">
            <div className="font-display text-xl text-foreground font-semibold">
              {list[index].name}
            </div>
            <div className="text-xs text-gold uppercase tracking-widest mt-1 font-medium">
              {list[index].role}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="mt-10 flex items-center justify-between border-t border-border/40 pt-6">
        <div className="flex gap-2.5">
          {list.map((_, j) => (
            <button
              key={j}
              onClick={() => onSelect(j)}
              aria-label={`Slide ${j + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                j === index ? "w-8 bg-gold" : "w-2 bg-border hover:bg-gold/40"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={onPrev}
            aria-label="Previous Review"
            className="h-10 w-10 grid place-items-center rounded-full glass hover:scale-105 active:scale-95 transition-transform"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={onNext}
            aria-label="Next Review"
            className="h-10 w-10 grid place-items-center rounded-full glass hover:scale-105 active:scale-95 transition-transform"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionTitle from "@/components/site/SectionTitle";

import hospitalExt from "@/assets/uploads/hospital-exterior.jpeg";
import reception from "@/assets/uploads/hospital-reception.jpeg";
import facility1 from "@/assets/uploads/facility-1.jpeg";
import facility2 from "@/assets/uploads/facility-2.jpeg";
import facility3 from "@/assets/uploads/facility-3.jpeg";
import facility4 from "@/assets/uploads/facility-4.jpeg";

const items = [
  { src: facility4, h: 500, alt: "Surgery Room" },
  { src: facility2, h: 500, alt: "Consultation Room" },
  { src: facility1, h: 500, alt: "X-Ray Room" },
  { src: facility3, h: 500, alt: "Physiotherapy Equipment" },
  { src: hospitalExt, h: 600, alt: "Dhawan Orthopaedic Hospital Exterior" },
  { src: reception, h: 500, alt: "Patient Reception & Lounge" },
];

export default function GalleryClient() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <section className="py-24 grad-hero">
        <div className="container mx-auto px-4">
          <SectionTitle
            eyebrow="Gallery"
            title="A look inside"
            subtitle="A curated glimpse of our state-of-the-art facilities, modern clinics, and dedicated recovery spaces."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const imgSrc = typeof it.src === "string" ? it.src : it.src.src;
            return (
              <Reveal key={i} direction="scale" delay={i * 0.05}>
                <button
                  onClick={() => setOpen(imgSrc)}
                  aria-label={`View full size image ${i + 1}`}
                  className="block w-full overflow-hidden rounded-3xl bg-card group border border-border/80 shadow-elegant hover-lift"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={it.src}
                      alt={it.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl grid place-items-center p-4"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute top-6 right-6 h-12 w-12 grid place-items-center rounded-full glass hover:scale-105 active:scale-95 transition-transform"
              aria-label="Close lightbox"
              onClick={() => setOpen(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={open}
              alt="Dhawan Healthcare Facility Detail"
              className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-elegant border border-border object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

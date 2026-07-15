"use client";

import Reveal from "@/components/site/Reveal";
import Image from "next/image";
import SectionTitle from "@/components/site/SectionTitle";
import hospitalExt from "@/assets/uploads/hospital-exterior.jpeg";

export default function AboutClient() {
  return (
    <>
      <section className="relative py-24 grad-hero">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="About Us" title="Built on trust. Driven by results." subtitle="Dhawan Healthcare Group brings together orthopaedic surgery, physiotherapy and nutrition in a single, patient-centric ecosystem." />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="rounded-3xl overflow-hidden shadow-elegant border border-border">
              <Image src={hospitalExt} alt="Hospital" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <h3 className="font-display text-3xl md:text-4xl font-semibold">Our Story</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded in 1999 by Dr. S. K. Dhawan, M.S. Ortho (A.F.M.C.), Dhawan Orthopaedic Hospital has grown from a single orthopaedic clinic into a trusted, comprehensive healthcare destination. With 27+ years of excellence, the hospital has served thousands of patients across orthopaedics, physiotherapy, and nutrition counselling. Dr. S. K. Dhawan, an Ex-Consultant at St. Stephen’s Hospital, New Delhi, brings decades of clinical expertise and a patient-first approach that continues to define our standard of care.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our promise is simple: world-class healthcare delivered with compassion, integrity, and an unwavering commitment to helping every patient regain mobility, confidence, and the quality of life they deserve.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "27+", v: "Years" },
                { k: "15k+", v: "Surgeries" },
                { k: "98%", v: "Recovery" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-2xl p-5 text-center border border-border hover:border-gold/30 transition-all">
                  <div className="font-display text-3xl text-gold font-bold">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1 font-semibold">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-card/10">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Values" title="What we stand for" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { t: "Excellence", d: "International protocols, modern equipment and senior surgeons in every theatre." },
              { t: "Empathy", d: "Patients aren't case numbers. Every recovery is personal." },
              { t: "Integrity", d: "Transparent advice, fair pricing and honest outcomes." },
            ].map((v, i) => (
              <Reveal key={v.t} direction="up" delay={i * 0.05}>
                <div className="glass rounded-2xl p-7 hover-lift border border-border">
                  <div className="text-xs uppercase tracking-widest text-gold font-semibold">Value</div>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

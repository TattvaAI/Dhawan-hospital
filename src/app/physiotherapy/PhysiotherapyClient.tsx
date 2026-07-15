"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Activity, Clock, Zap, Sparkles, MessageCircle } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionTitle from "@/components/site/SectionTitle";
import Counter from "@/components/site/Counter";
import physioRoom from "@/assets/uploads/physio-room.jpg";

const programs = [
  { t: "Post-Surgical Rehab", d: "Hip, knee and spine recovery programmes with measurable milestones." },
  { t: "Trauma Rehabilitation", d: "Structured return to function after fractures, accidents or trauma." },
  { t: "Sports Performance", d: "Return-to-play protocols for amateur and professional athletes." },
  { t: "Pain Management", d: "Manual therapy, dry needling and modalities to break the pain cycle." },
  { t: "Neuro Rehab", d: "Stroke and neurological recovery with one-to-one therapy." },
  { t: "Geriatric Therapy", d: "Mobility, balance and fall-prevention programmes for seniors." },
];

export default function PhysiotherapyClient() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={physioRoom} alt="" className="h-full w-full object-cover opacity-30 dark:opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-gold font-semibold">
              <Sparkles className="h-3 w-3" /> Care That Moves You Forward
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl text-gradient leading-tight font-bold">
              Physiotherapy that actually works.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Our physiotherapy results are <span className="text-gold font-semibold">excellent</span>. Trauma rehab, post-op recovery and pain management delivered by senior therapists with 24×7 support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919812038750?text=Hello%2C%20I%20would%20like%20to%20book%20a%20physiotherapy%20appointment"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold flex items-center gap-2 shadow-elegant hover:scale-[1.03] transition-all cursor-pointer"
              >
                <MessageCircle className="h-4 w-4" /> Book Appointment via WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.2}>
            <motion.div className="relative" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <div className="absolute -inset-6 rounded-3xl grad-gold opacity-30 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
                <Image src={physioRoom} alt="Physiotherapy room" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 w-56 border border-border">
                <div className="text-xs uppercase tracking-widest text-gold font-semibold">Excellence</div>
                <div className="mt-1 font-display text-2xl font-bold">98% Recovery Rate</div>
              </div>
              <div className="absolute -top-6 -right-6 glass rounded-2xl p-5 w-44 hidden md:block border border-border">
                <div className="text-xs uppercase tracking-widest text-gold font-semibold">Availability</div>
                <div className="mt-1 font-display text-2xl font-bold">24×7 Support</div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-card/10">
        <div className="container mx-auto px-4 grid gap-6 sm:grid-cols-3">
          {[
            { i: Activity, n: 98, s: "%", l: "Recovery Success" },
            { i: Clock, n: 24, s: "×7", l: "Therapist Support" },
            { i: Zap, n: 5000, s: "+", l: "Patients Rehabbed" },
          ].map((s, idx) => (
            <Reveal key={s.l} direction="up" delay={idx * 0.05}>
              <div className="glass rounded-2xl p-6 flex items-center gap-4 hover-lift border border-border">
                <div className="h-12 w-12 rounded-xl grad-primary text-primary-foreground grid place-items-center shadow-elegant shrink-0"><s.i className="h-5 w-5" /></div>
                <div>
                  <div className="font-display text-3xl text-gold font-bold"><Counter to={s.n} suffix={s.s} /></div>
                  <div className="text-xs text-muted-foreground mt-0.5 uppercase tracking-widest font-semibold">{s.l}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 pb-28">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Programs" title="Recovery, redesigned" subtitle="Structured, evidence-based programmes for every type of injury and condition." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.t} direction="scale" delay={i * 0.05}>
                <div className="glass rounded-2xl p-7 hover-lift border border-border">
                  <div className="text-xs uppercase tracking-widest text-gold font-semibold">Programme</div>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


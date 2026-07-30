"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Salad, TrendingDown, Dumbbell, Heart, Leaf, Sparkles, Calculator } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionTitle from "@/components/site/SectionTitle";
import logoDiet from "@/assets/uploads/logo-diet.png";
import heroDiet from "@/assets/uploads/hero-diet.jpg";
import drRoveeta from "@/assets/uploads/doctor-roveeta.jpg";

// Import modular components
import BMICalc from "@/components/diet/BMICalc";
import CalorieCalc from "@/components/diet/CalorieCalc";
import MealCalc from "@/components/diet/MealCalc";
import ConsultationForm from "@/components/diet/ConsultationForm";

const programs = [
  { i: Salad, t: "Personalised Diet Plans", d: "Tailored to your body, goals and lifestyle." },
  { i: TrendingDown, t: "Weight Loss Programmes", d: "Sustainable fat loss without crash dieting." },
  { i: Dumbbell, t: "Muscle Gain Plans", d: "Performance nutrition for strength and recovery." },
  { i: Heart, t: "Lifestyle Improvement", d: "Habits, sleep and hydration for the long term." },
  { i: Leaf, t: "Nutrition Guidance", d: "Evidence-based food choices, simply explained." },
  { i: Sparkles, t: "Healthy Eating Consultation", d: "One-to-one consultations with Roveeta." },
];

export default function RightDietClient() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroDiet} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="h-24 w-24 rounded-2xl overflow-hidden border border-border shadow-elegant shrink-0">
              <Image src={logoDiet} alt="Right Diet" className="h-full w-full object-cover" />
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl text-gradient leading-tight font-bold">
              Smart Nutrition. <br /> Graceful Living.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Personalised nutrition by <span className="text-gold font-semibold">Roveeta Dhawan</span> — for weight management, fat loss, strength and a calmer, healthier lifestyle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#consultation" className="rounded-full grad-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:scale-[1.03] transition-all shadow-elegant">Book Consultation</a>
              <a href="#calculators" className="rounded-full border border-gold/40 glass px-6 py-3 text-sm flex items-center gap-2 font-semibold hover:scale-[1.03] transition-all"><Calculator className="h-4 w-4 text-gold" /> Use Free Calculators</a>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.2}>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative">
              <div className="absolute -inset-6 rounded-full grad-gold opacity-30 blur-2xl" />
              <div className="rounded-3xl overflow-hidden shadow-elegant border border-border">
                <Image src={drRoveeta} alt="Roveeta Dhawan" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-card/10">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Programmes" title="A plan that fits your life" subtitle="Every plan is designed around you — your goals, schedule, preferences and medical history." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.t} direction="scale" delay={i * 0.05}>
                <div className="group glass rounded-2xl p-7 hover-lift border border-border">
                  <div className="h-12 w-12 rounded-xl grad-gold text-gold-foreground grid place-items-center shadow-elegant"><p.i className="h-5 w-5" /></div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="calculators" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Free Tools" title="Wellness calculators" subtitle="Quick, accurate estimates to start your journey." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <BMICalc />
            <CalorieCalc />
            <MealCalc />
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 bg-card/15 scroll-mt-20">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Consultation" title="Book a personalised consultation" subtitle="Share a few details and Roveeta will craft a plan made for you." />
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}

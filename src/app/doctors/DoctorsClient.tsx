"use client";

import Image from "next/image";
import Reveal from "@/components/site/Reveal";
import SectionTitle from "@/components/site/SectionTitle";
import drSanjeev from "@/assets/uploads/dr-sanjeev.jpeg";
import drRoveeta from "@/assets/uploads/dr-roveeta.jpeg";
import drArjun from "@/assets/uploads/dr-arjun.jpeg";
import drPradeep from "@/assets/uploads/dr-pradeep.jpeg";
import drSurinder from "@/assets/uploads/Dr. surinder singh makka.jpeg";

const team = [
  { img: drSanjeev, name: "Dr. S. K. Dhawan", role: "M.S. Ortho (A.F.M.C.) · Ex-Consultant St. Stephen's Hospital", spec: "Orthopaedic Surgeon · Joint Replacement", exp: "27+ years" },
  { img: drSurinder, name: "Dr. Surinder Singh Makka", role: "Senior Consultant", spec: "Senior Orthopaedic & Trauma Consultant", exp: "25+ years" },
  { img: drArjun, name: "Dr. Arjun", role: "MD Anaesthesia", spec: "Anaesthesiologist", exp: "12+ years" },
  { img: drRoveeta, name: "Roveeta Dhawan", role: "Clinical Nutritionist", spec: "Personalised Diet · Weight Management", exp: "15+ years" },
  { img: drPradeep, name: "Dr. Pradeep", role: "MD Anaesthesia", spec: "Anaesthesiologist", exp: "10+ years" },
];

export default function DoctorsClient() {
  return (
    <>
      <section className="py-24 grad-hero">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Our Team" title="Meet the experts behind your recovery" subtitle="A senior team of surgeons, therapists and nutritionists, working together for the best possible outcome." />
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((d, i) => (
            <Reveal key={d.name + i} direction="scale" delay={i * 0.05}>
              <div className="group rounded-3xl overflow-hidden glass hover-lift border border-border">
                <div className="relative overflow-hidden aspect-[4/5] w-full">
                  <Image src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs uppercase tracking-widest text-gold font-semibold">{d.exp} experience</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-display text-2xl font-semibold">{d.name}</div>
                  <div className="text-sm text-gold font-medium">{d.role}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{d.spec}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

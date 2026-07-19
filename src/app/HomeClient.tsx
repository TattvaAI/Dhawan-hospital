"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Activity, Bone, HeartPulse, Stethoscope, ShieldCheck, Sparkles, ArrowRight, Phone, MessageCircle } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionTitle from "@/components/site/SectionTitle";
import Counter from "@/components/site/Counter";
import facility4 from "@/assets/uploads/facility-4.jpeg";
import hospitalExt from "@/assets/uploads/hospital-exterior.jpeg";
import drSanjeev from "@/assets/uploads/dr-sanjeev.jpeg";
import drRoveeta from "@/assets/uploads/dr-roveeta.jpeg";
import drArjun from "@/assets/uploads/dr-arjun.jpeg";
import drSurinder from "@/assets/uploads/Dr. surinder singh makka.jpeg";
import logoHospital from "@/assets/uploads/logo-hospital.jpeg";
import logoPhysio from "@/assets/uploads/logo-physio.jpeg";
import logoDiet from "@/assets/uploads/logo-diet.png";

const services = [
  { icon: Bone, title: "Orthopaedics", desc: "Comprehensive bone and joint care by senior surgeons." },
  { icon: ShieldCheck, title: "Trauma Care", desc: "24×7 emergency response for accidents and fractures." },
  { icon: Activity, title: "Joint Replacement", desc: "Advanced hip and knee replacement with rapid recovery." },
  { icon: HeartPulse, title: "Sports Injury", desc: "Performance-grade rehabilitation for athletes." },
  { icon: Stethoscope, title: "Spine Care", desc: "Precision spine evaluation, pain management & surgery." },
  { icon: Sparkles, title: "Rehabilitation", desc: "Physiotherapy-led recovery for full mobility return." },
];

export default function HomeClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="absolute inset-0 grad-hero" />
        <motion.div style={{ y }} className="absolute inset-0 opacity-30 dark:opacity-40">
          <Image src={facility4} alt="" className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />

        <motion.div style={{ opacity }} className="relative container mx-auto px-4 pt-24 pb-32 lg:pt-32 lg:pb-44">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-gold font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> Restore Mobility · Renew Life
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-gradient max-w-5xl">
              Advanced Orthopaedic <br className="hidden md:block" /> & Trauma Care
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Trusted Orthopaedic Excellence with Advanced Recovery & Rehabilitation — under the care of Dr. S. K. Dhawan, M.S. Ortho (A.F.M.C.)
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/919812038750?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold shadow-elegant hover:scale-[1.03] transition-all cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 fill-current" /> Book Appointment
              </a>
              <a href="tel:01712662953" className="inline-flex items-center gap-2 rounded-full border border-gold/40 text-foreground px-6 py-3 text-sm font-semibold glass hover:border-gold hover:scale-[1.03] transition-all">
                <Phone className="h-4 w-4 text-gold animate-pulse" /> Emergency Care
              </a>
            </div>
          </Reveal>

          {/* Floating cards */}
          <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: 27, s: "+", l: "Years of Trust" },
              { n: 15000, s: "+", l: "Surgeries Performed" },
              { n: 24, s: "×7", l: "Emergency Care" },
              { n: 98, s: "%", l: "Recovery Success" },
            ].map((s, i) => (
              <Reveal key={s.l} direction="scale" delay={0.1 * i}>
                <div className="glass rounded-2xl p-6 hover-lift border border-border">
                  <div className="font-display text-4xl text-gold font-bold">
                    <Counter to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-1.5 text-xs text-muted-foreground tracking-widest uppercase font-semibold">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BRANDS */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="One Family · Three Brands" title="A complete continuum of care" subtitle="From precise diagnosis and surgery to rehabilitation and lifestyle nutrition — all under the trusted Dhawan name." />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { logo: logoHospital, href: "/", title: "Dhawan Orthopaedic Hospital", tag: "Restore Mobility. Renew Life.", grad: "from-primary/20 to-gold/10" },
              { logo: logoPhysio, href: "/physiotherapy", title: "Dhawan Physiotherapy Centre", tag: "Care That Moves You Forward.", grad: "from-accent/30 to-primary/20" },
              { logo: logoDiet, href: "/right-diet", title: "Right Diet by Roveeta Dhawan", tag: "Smart Nutrition. Graceful Living.", grad: "from-gold/20 to-accent/20" },
            ].map((b, i) => (
              <Reveal key={b.title} direction="scale" delay={i * 0.1}>
                <Link href={b.href} className="group block relative rounded-3xl overflow-hidden glass hover-lift border border-border">
                  <div className={`absolute inset-0 bg-gradient-to-br ${b.grad} opacity-60`} />
                  <div className="relative p-8 flex flex-col items-center text-center">
                    <div className="h-24 w-24 rounded-full overflow-hidden ring-2 ring-gold/40 shadow-elegant">
                      <Image src={b.logo} alt={b.title} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold">{b.title}</h3>
                    <p className="mt-2 text-xs text-gold tracking-wider uppercase font-medium">{b.tag}</p>
                    <div className="mt-6 inline-flex items-center gap-1 text-sm text-foreground/80 group-hover:text-gold transition-colors font-medium">
                      Discover <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28 bg-card/20">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Specialised Services" title="Premium care across every specialty" subtitle="Every procedure performed with international protocols, modern equipment and a human touch." />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} direction="up" delay={i * 0.05}>
                <div className="group relative rounded-2xl glass p-7 hover-lift overflow-hidden border border-border">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full grad-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                  <div className="h-12 w-12 rounded-xl grad-primary text-primary-foreground grid place-items-center shadow-glow">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link href="/services" className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gold font-semibold">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOSPITAL IMAGE STRIP */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal direction="left">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
              <Image src={hospitalExt} alt="Dhawan Orthopaedic Hospital exterior" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-3 border border-border">
                <div className="text-xs uppercase tracking-widest text-gold font-semibold">Our Hospital</div>
                <div className="font-display text-lg font-semibold">Ambala, Haryana</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <div className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">About Us</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-gradient font-bold leading-tight">27+ years of orthopaedic excellence.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded in 1999 by Dr. S. K. Dhawan, M.S. Ortho (A.F.M.C.), Ex-Consultant at St. Stephen’s Hospital, New Delhi, Dhawan Orthopaedic Hospital has set the regional benchmark for joint replacement, fracture surgery, arthroscopy and trauma care. We combine senior surgical expertise with modern operating theatres, dedicated rehabilitation and warm patient care.
            </p>
            <ul className="mt-6 space-y-3.5 text-sm">
              {["Hip & Knee Joint Replacement Surgery", "Fracture Surgery & Arthroscopy", "Plastic, Cosmetic & Microvascular Surgery", "Diabetes & Medicine Clinic"].map((t) => (
                <li key={t} className="flex items-center gap-3 font-medium"><span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" /> {t}</li>
              ))}
            </ul>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-full grad-gold text-gold-foreground px-6 py-3 text-sm font-semibold hover:scale-[1.03] transition-all">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* DOCTORS PREVIEW */}
      <section className="py-20 lg:py-28 bg-card/20">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Meet the team" title="Doctors who put patients first" subtitle="A senior team of surgeons, therapists and nutritionists working together for your complete recovery." />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { img: drSanjeev, name: "Dr. S. K. Dhawan", role: "M.S. Ortho (A.F.M.C.)", spec: "Orthopaedic Surgeon · Joint Replacement" },
              { img: drSurinder, name: "Dr. Surinder Singh Makka", role: "Senior Consultant", spec: "Senior Orthopaedic & Trauma" },
              { img: drArjun, name: "Dr. Arjun", role: "MD Anaesthesia", spec: "Senior Anaesthesiologist" },
              { img: drRoveeta, name: "Roveeta Dhawan", role: "Clinical Nutritionist", spec: "Personalised Diet · Lifestyle Coach" },
            ].map((d, i) => (
              <Reveal key={d.name} direction="scale" delay={i * 0.1}>
                <div className="group rounded-3xl overflow-hidden glass hover-lift border border-border h-full flex flex-col justify-between">
                  <div>
                    <div className="relative overflow-hidden aspect-[4/5] w-full">
                      <Image src={d.img} alt={d.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="font-display text-xl font-semibold">{d.name}</div>
                      <div className="text-sm text-gold font-medium">{d.role}</div>
                      <div className="mt-2 text-sm text-muted-foreground">{d.spec}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/doctors" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gold font-semibold hover:text-gold/80 transition-colors">See full team <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal direction="up">
            <div className="relative overflow-hidden rounded-3xl grad-primary text-primary-foreground p-10 md:p-16 shadow-elegant border border-primary/20">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/40 blur-3xl animate-float" />
              <div className="relative grid md:grid-cols-2 items-center gap-8">
                <div>
                  <h3 className="font-display text-4xl md:text-5xl font-bold">Ready to feel better?</h3>
                  <p className="mt-4 opacity-90 max-w-md text-sm leading-relaxed">Book a consultation today on WhatsApp and take the first step toward renewed mobility and a stronger life.</p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <a href="https://wa.me/919812038750?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:scale-105 transition-transform shadow-elegant flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 fill-current" /> Book Appointment via WhatsApp
                  </a>
                  <a href="tel:+919812038750" className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors">Call Now</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

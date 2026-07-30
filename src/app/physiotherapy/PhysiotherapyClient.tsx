"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Activity, Clock, Zap, Sparkles, MessageCircle, HeartPulse, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionTitle from "@/components/site/SectionTitle";
import Counter from "@/components/site/Counter";
import physioRoom from "@/assets/uploads/physio-room.jpg";
import itecarMachine from "@/assets/uploads/itecar-machine.jpeg";

const pillars = [
  {
    icon: Activity,
    t: "Physiotherapy",
    tagline: "Restoring movement, reducing pain, and enhancing function",
    d: "Physiotherapy plays a vital role in restoring movement, reducing pain, improving flexibility, and enhancing overall physical function. It supports recovery after surgery, injury, neurological disorders, and chronic musculoskeletal conditions. Our physiotherapists perform comprehensive assessments to identify movement limitations, muscle weakness, posture issues, and functional impairments before designing a customized rehabilitation program.",
    bullets: [
      "Manual therapy, dry needling, and advanced electrotherapy",
      "Assessment of movement limitations, muscle weakness, and posture",
      "Strengthening, balance training, posture correction, and gait training",
      "Post-recovery education: posture, home exercises, and ergonomics",
      "Regular progress evaluations to modify and optimize treatment plans"
    ]
  },
  {
    icon: Zap,
    t: "Comprehensive Rehabilitation",
    tagline: "Regaining strength, mobility, and confidence",
    d: "Rehabilitation is an essential component of recovery following surgery, injury, neurological illness, or prolonged hospitalization. Our comprehensive, multidisciplinary programs focus on safety and sustainable return to activity. Every rehabilitation journey begins with a detailed functional assessment conducted by our multidisciplinary team. Individualized recovery plans are then developed according to the patient's physical abilities, medical condition, and recovery goals.",
    bullets: [
      "Detailed functional assessments conducted by a multidisciplinary team",
      "Individualized recovery plans customized to patient abilities and goals",
      "Integration of physiotherapy, occupational therapy, and mobility training",
      "Structured support to safely return to work, sports, and independent living",
      "Continuous encouragement and patient education throughout the journey"
    ]
  },
  {
    icon: HeartPulse,
    t: "Sports Injury Recovery",
    tagline: "Safe healing, strength restoration, and peak performance",
    d: "Sports injuries can affect athletes as well as individuals engaged in regular physical activities. Prompt, accurate diagnosis and evidence-based treatments are crucial to prevent long-term complications and restore peak performance. We treat ligament injuries, tendon tears, muscle strains, meniscus injuries, shoulder instability, ACL injuries, cartilage damage, ankle sprains, and overuse injuries.",
    bullets: [
      "Treatment for ligament injuries, tendon tears, ACL, and overuse issues",
      "Thorough physical examinations, movement assessments, and imaging",
      "Arthroscopic (minimally invasive) surgery and joint recovery protocols",
      "Regenerative therapies, specialized exercises, and strength training",
      "Tailored return-to-play strategies to protect long-term joint health"
    ]
  }
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
                <MessageCircle className="h-4 w-4 fill-current" /> Book Appointment
              </a>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.2}>
            <motion.div className="relative" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <div className="absolute -inset-6 rounded-3xl grad-gold opacity-30 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
                <Image src={physioRoom} alt="Physiotherapy room" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-6 glass rounded-2xl p-4 flex gap-6 border border-border divide-x divide-border shadow-elegant backdrop-blur-md z-10 whitespace-nowrap">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gold font-semibold">Excellence</div>
                  <div className="mt-1 font-display text-lg font-bold">98% Recovery</div>
                </div>
                <div className="pl-6">
                  <div className="text-[10px] uppercase tracking-widest text-gold font-semibold">Availability</div>
                  <div className="mt-1 font-display text-lg font-bold">24×7 Support</div>
                </div>
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

      {/* i-TECAR Therapy Section */}
      <section className="py-20 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: i-TECAR Machine Image */}
            <div className="lg:col-span-5 flex justify-center">
              <Reveal direction="left">
                <div className="relative group max-w-sm lg:max-w-full">
                  <div className="absolute -inset-4 rounded-3xl grad-gold opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500" />
                  
                  <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-white p-2.5 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                    <Image 
                      src={itecarMachine} 
                      alt="Advanced i-TECAR Therapy Machine at Dhawan Hospital" 
                      className="w-full h-auto rounded-xl object-contain bg-white mx-auto"
                    />
                  </div>
                  
                  <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase font-bold shadow-elegant border border-gold/30">
                    Technology Leader
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Details & Benefits */}
            <div className="lg:col-span-7">
              <Reveal direction="right">
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-gold font-semibold mb-6">
                  <Sparkles className="h-3 w-3" /> Exclusive Treatment Modal
                </div>
                <h2 className="font-display text-4xl md:text-5xl leading-tight font-bold">
                  Advanced <span className="text-gradient">i-TECAR Therapy</span>
                </h2>
                <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                  Dhawan Hospital is the only hospital in the area offering advanced <strong>i-TECAR Therapy</strong>, bringing world-class physiotherapy technology closer to you. This non-invasive treatment helps relieve pain, reduce inflammation, accelerate tissue healing, improve mobility, and support faster recovery from sports injuries, joint pain, back pain, and post-surgical rehabilitation—all with safe, comfortable, and clinically effective care.
                </p>

                {/* Key Benefits Grid */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    "Rapid pain relief & recovery",
                    "Reduces deep-tissue inflammation",
                    "Accelerates cellular healing",
                    "Improves joint mobility & range",
                    "Ideal for sports injury recovery",
                    "Supports post-surgical rehabilitation",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px]">✓</span>
                      </div>
                      <span className="text-sm font-medium text-foreground/90">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border/40">
                  <a
                    href="https://wa.me/919812038750?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20i-TECAR%20Therapy%20at%20Dhawan%20Hospital"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:scale-[1.03] transition-all shadow-elegant"
                  >
                    <MessageCircle className="h-4 w-4 fill-current" />
                    <span>Inquire About i-TECAR Therapy</span>
                  </a>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 pb-28">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Core Specialties" title="Recovery, redesigned" subtitle="Structured, evidence-based care pillars for every stage of your healing process." />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {pillars.map((p, i) => {
              const PillarIcon = p.icon;
              return (
                <Reveal key={p.t} direction="scale" delay={i * 0.05}>
                  <div className="glass rounded-3xl p-7 md:p-8 hover-lift border border-border h-full flex flex-col justify-between relative overflow-hidden bg-card/10">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/5 blur-2xl pointer-events-none" />
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gold/25 to-primary/10 border border-gold/30 text-gold grid place-items-center shadow-glow mb-6">
                        <PillarIcon className="h-5.5 w-5.5" />
                      </div>
                      <h3 className="font-display text-2xl font-bold leading-tight">{p.t}</h3>
                      <p className="text-xs text-gold font-semibold tracking-wider uppercase mt-1 mb-4">{p.tagline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.d}</p>
                      
                      <div className="space-y-3.5 border-t border-border/40 pt-5">
                        {p.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                            <span className="text-xs md:text-sm text-foreground/90 leading-tight">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}


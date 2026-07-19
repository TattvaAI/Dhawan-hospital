"use client";

import { Activity, Bone, HeartPulse, Stethoscope, ShieldCheck, Sparkles, Pill, Zap, Syringe, Ambulance, MessageCircle } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionTitle from "@/components/site/SectionTitle";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Bone, t: "Orthopaedics", d: "Complete musculoskeletal evaluation and treatment.", details: "Our Orthopaedics department offers comprehensive care for all types of bone, joint, and muscle problems. From diagnosis to advanced surgical and non-surgical treatments, our expert team ensures the highest standard of care for a pain-free life." },
  { icon: Ambulance, t: "Trauma Care", d: "24×7 emergency trauma response and stabilization.", details: "In emergencies, every second counts. Our dedicated Trauma Care unit provides round-the-clock rapid response, stabilization, and life-saving treatments for accident and injury victims, supported by an advanced ICU and surgical suites." },
  { icon: Syringe, t: "Fracture Treatment", d: "Closed and open reduction with modern internal fixation.", details: "We specialize in the precise treatment of fractures using modern techniques, including closed reduction and minimally invasive internal fixation, ensuring optimal alignment, faster healing, and minimal scarring." },
  { icon: Activity, t: "Joint Replacement", d: "Hip & knee replacement with rapid mobilisation.", details: "Experience world-class joint replacement surgeries (hip, knee, and shoulder) with our rapid mobilization protocols. We use high-quality implants and advanced surgical techniques to restore your mobility and improve your quality of life." },
  { icon: Stethoscope, t: "Spine Care", d: "Conservative and surgical spine management.", details: "Our comprehensive spine care covers everything from physical therapy and pain management to advanced minimally invasive spine surgeries for conditions like herniated discs, sciatica, and spinal stenosis." },
  { icon: HeartPulse, t: "Sports Injury", d: "Arthroscopy, ligament repair, return-to-play.", details: "Dedicated to athletes and active individuals, our sports medicine team offers advanced arthroscopy, ACL/MCL ligament repairs, and personalized rehabilitation programs to get you back in the game safely and quickly." },
  { icon: Sparkles, t: "Physiotherapy", d: "Manual therapy, dry needling, electrotherapy.", details: "Our state-of-the-art physiotherapy center provides personalized rehabilitation plans, incorporating manual therapy, dry needling, and advanced electrotherapy to restore function and prevent future injuries." },
  { icon: Zap, t: "Rehabilitation", d: "Post-op and post-trauma functional recovery.", details: "Recovery doesn't end with surgery. Our tailored post-operative and post-trauma rehabilitation programs focus on regaining strength, flexibility, and independence through guided, step-by-step physical therapy." },
  { icon: Pill, t: "Pain Management", d: "Targeted injections and multimodal pain control.", details: "We offer comprehensive pain management solutions, including targeted nerve blocks, epidural injections, and multimodal medication strategies to help you manage chronic pain effectively without relying solely on surgery." },
  { icon: ShieldCheck, t: "Emergency Care", d: "Round-the-clock emergency orthopaedic support.", details: "Our emergency room is fully equipped and staffed 24/7 with specialized orthopaedic care professionals ready to handle acute injuries, severe pain, and trauma with immediate and expert attention." },
];

export default function ServicesClient() {
  return (
    <>
      <section className="py-24 grad-hero">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Specialised Services" title="Every specialty. Under one roof." subtitle="From first consultation to full recovery, our integrated services keep your care simple, fast and effective." />
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} direction="up" delay={i * 0.04}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group relative rounded-2xl glass p-7 hover-lift overflow-hidden border border-border cursor-pointer text-left w-full h-full">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full grad-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                    <div className="h-12 w-12 rounded-xl grad-primary text-primary-foreground grid place-items-center shadow-glow">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold">{s.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <div className="h-12 w-12 rounded-xl grad-primary text-primary-foreground grid place-items-center shadow-glow mb-4">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <DialogTitle className="font-display text-2xl">{s.t}</DialogTitle>
                    <DialogDescription className="text-base mt-2 leading-relaxed">
                      {s.details}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6 flex justify-end">
                    <a
                      href={`https://wa.me/919812038750?text=${encodeURIComponent(`Hello, I would like to book an appointment for ${s.t}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold hover:scale-[1.03] transition-transform shadow-elegant flex items-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4 fill-current" />
                      Book Appointment
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

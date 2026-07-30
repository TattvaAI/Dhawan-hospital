"use client";

import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionTitle from "@/components/site/SectionTitle";
import ContactCard from "@/components/contact/ContactCard";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactClient() {
  return (
    <>
      <section className="py-24 grad-hero">
        <div className="container mx-auto px-4">
          <SectionTitle
            eyebrow="Get in touch"
            title="Book an appointment"
            subtitle="Pick a department, select your preferred date/time, and our reception team will verify and confirm your slot in minutes."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <ContactCard
              icon={Phone}
              title="Dr. Sanjeev Dhawan"
              body={<a href="tel:+919812038750" className="hover:text-gold transition-colors font-medium">+91 98120 38750</a>}
              delay={0.05}
            />
            <ContactCard
              icon={Phone}
              title="Dr. Roveeta Dhawan"
              body={<a href="tel:+919728138750" className="hover:text-gold transition-colors font-medium">+91 97281 38750</a>}
              delay={0.1}
            />
            <ContactCard
              icon={Phone}
              title="Hospital Landline"
              body={<a href="tel:01712662953" className="hover:text-gold transition-colors font-medium">0171-2662953</a>}
              delay={0.15}
            />
            <ContactCard
              icon={Mail}
              title="Hospital Email"
              body={<a href="mailto:dhawanortho@yahoo.com" className="hover:text-gold transition-colors font-medium">dhawanortho@yahoo.com</a>}
              delay={0.2}
            />
            <ContactCard
              icon={Mail}
              title="Right Diet Email"
              body={<a href="mailto:roveetadhawan01@gmail.com" className="hover:text-gold transition-colors font-medium">roveetadhawan01@gmail.com</a>}
              delay={0.25}
            />
            <ContactCard
              icon={Clock}
              title="Hours of Operation"
              body="Mon–Sat: 9:00 AM – 8:00 PM · Emergencies 24×7"
              delay={0.3}
            />
            <ContactCard
              icon={MapPin}
              title="Address"
              body="Dhawan Orthopaedic Hospital, Ambala, Haryana, India"
              delay={0.35}
            />
            
            <Reveal direction="left" delay={0.4}>
              <a
                href="https://wa.me/919812038750"
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl p-5 bg-[#25D366] text-white hover-lift shadow-elegant transition-transform duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <MessageCircle className="h-6 w-6 fill-current text-white" />
                  <div>
                    <span className="font-semibold block text-base leading-tight">Chat on WhatsApp</span>
                    <span className="text-xs text-white/80 mt-0.5 block">Response time: under 5 minutes</span>
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <Reveal direction="scale">
            <div className="rounded-3xl overflow-hidden glass shadow-elegant aspect-[21/9] border border-border">
              <iframe
                title="Google Maps Location for Dhawan Orthopaedic Hospital"
                src="https://www.google.com/maps?q=Dhawan+Orthopaedic+Hospital+Ambala+Haryana&output=embed"
                className="w-full h-full grayscale dark:invert dark:opacity-85"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

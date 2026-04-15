import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export const metadata = {
  title: 'About Us | Dhawan Orthopaedic Hospital',
  description: 'Learn about the legacy, mission, and infrastructure of Dhawan Orthopaedic Hospital in Ambala, Haryana.',
};

const MILESTONES = [
  { year: '2000', title: 'Founded', desc: 'Dr. Rajiv Dhawan establishes the hospital with a vision to deliver world-class orthopaedics to the people of Haryana.' },
  { year: '2005', title: 'First Robotic Joint Replacement', desc: 'We became the first hospital in Haryana to perform a robot-assisted total knee arthroplasty.' },
  { year: '2010', title: 'NABH Accreditation', desc: 'Received National Accreditation Board for Hospitals certification, validating our quality frameworks.' },
  { year: '2015', title: '5,000 Surgeries', desc: 'A landmark milestone — 5,000 successful orthopaedic procedures performed with a 98% satisfaction rate.' },
  { year: '2020', title: 'International Patient Centre', desc: 'Launched a dedicated division for global patients, offering telemedicine and full travel coordination.' },
  { year: '2025', title: '15,000+ Lives Transformed', desc: 'We continue to grow, adding new specialties, faculty, and technology to deliver the future of orthopaedic medicine.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <div className="py-16 md:py-24 border-b border-border/40 mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Our Story</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">25 years of healing,<br /><span className="text-primary italic font-light">restoring, transforming.</span></h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From a single clinic in Ambala Cantt to a nationally accredited orthopaedic centre of excellence, our journey is defined by an unwavering commitment to our patients.
            </p>
          </div>

          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
            <div className="rounded-3xl border border-border/50 bg-card p-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To deliver surgical excellence, compassionate care, and rapid rehabilitation that allows every patient to return to the life they love — with dignity and confidence.
              </p>
            </div>
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe that healthcare is a human relationship, not a transaction. Every surgery, every protocol, and every interaction is designed with the patient&apos;s dignity and outcome at its centre.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold tracking-tight mb-16 text-foreground">Our Journey</h2>
            <div className="relative">
              {/* Vertical line - hidden on mobile */}
              <div className="hidden md:block absolute left-[103px] top-0 bottom-0 w-px bg-border/60" />
              <div className="space-y-10">
                {MILESTONES.map((m) => (
                  <div key={m.year} className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="shrink-0 flex md:flex-col items-center md:items-end gap-4 md:gap-0">
                      <span className="text-2xl font-black text-primary w-24 text-left md:text-right">{m.year}</span>
                      <div className="hidden md:block w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 md:mt-2 md:-mr-[7px] z-10 self-end" />
                    </div>
                    <div className="md:pl-10 pb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{m.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hospital images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
            <div className="rounded-3xl overflow-hidden h-72 md:col-span-2">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80" alt="Hospital exterior" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-3xl overflow-hidden h-72">
              <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80" alt="Medical team" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Experience the difference.</h2>
            <p className="text-muted-foreground text-lg mb-8">Join over 15,000 patients who trusted Dhawan Orthopaedic Hospital.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-10 h-14 text-lg font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                Book Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:01712662953" className="inline-flex items-center justify-center rounded-full border border-border px-10 h-14 text-lg font-semibold hover:bg-muted transition-all">
                <Phone className="w-5 h-5 mr-2" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

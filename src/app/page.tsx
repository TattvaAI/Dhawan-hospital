import Link from 'next/link';
import {
  ArrowRight, Activity, ActivitySquare, Bone, Syringe,
  Star, Award, Users, TrendingUp, Phone, MapPin, Mail,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Testimonials } from '@/components/Testimonials';
import { DoctorCard } from '@/components/DoctorCard';
import { FacilityGrid } from '@/components/FacilityGrid';
import { HeroSection } from '@/components/HeroSection';

// ─── DATA ────────────────────────────────────────────────────────────────────
const DOCTORS = [
  {
    name: 'Dr. Rajiv Dhawan', title: 'Chief Orthopaedic Surgeon',
    specialty: 'Knee & Hip Replacement', exp: '24 Years',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    slug: 'dr-rajiv-dhawan',
  },
  {
    name: 'Dr. Priya Mehra', title: 'Senior Spine Surgeon',
    specialty: 'Complex Spine Surgery', exp: '18 Years',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    slug: 'dr-priya-mehra',
  },
  {
    name: 'Dr. Anil Sharma', title: 'Orthoptic Specialist',
    specialty: 'Eye Orthoptics', exp: '15 Years',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
    slug: 'dr-anil-sharma',
  },
];

const SERVICES = [
  { icon: Bone, title: 'Knee & Hip Replacement', desc: 'State-of-the-art joint reconstruction using titanium bio-implants that guarantee maximum lifespan and mobility restoration.' },
  { icon: Activity, title: 'Eye Orthoptics', desc: 'Precision non-surgical interventions for ocular motility disorders, maximizing binocular vision coordination.' },
  { icon: ActivitySquare, title: 'Toe Orthosis', desc: 'Custom biomechanical appliances designed to correct deformities and optimize load distribution dynamically.' },
  { icon: Syringe, title: 'Orthopedic Surgery', desc: 'Extensive reconstructive pathways treating severe musculoskeletal trauma utilizing robotic assistance.' },
];

const STATS = [
  { icon: Users, value: '15,000+', label: 'Surgeries Performed' },
  { icon: TrendingUp, value: '98%', label: 'Patient Satisfaction' },
  { icon: Award, value: 'NABH', label: 'Accredited Hospital' },
  { icon: Star, value: '25 Yrs', label: 'Of Excellence' },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative w-full h-screen flex items-center justify-center px-6">
        <HeroSection />
        <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Accepting New Patients — Ambala, Haryana
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6 drop-shadow-sm">
            Motion,<br />
            <span className="text-primary italic font-light">Restored.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light">
            Dhawan Orthopaedic Hospital — a state-of-the-art facility in Ambala blending world-class surgical precision with an unparalleled environment of healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 h-14 text-lg font-semibold shadow-2xl shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] transition-all w-full sm:w-auto"
            >
              Book Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border/50 bg-background/50 text-foreground px-8 h-14 text-lg font-semibold backdrop-blur-sm hover:bg-background/80 transition-all w-full sm:w-auto"
            >
              Our Specialties
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
          <span className="text-xs font-semibold uppercase tracking-widest mb-2">Scroll</span>
          <div className="h-10 w-px bg-foreground/30" />
        </div>
      </section>

      {/* ── TRUST MARQUEE ────────────────────────────────────────────── */}
      <div className="border-y border-border/40 bg-primary/5 py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {Array(3).fill(['NABH Accredited', '15,000+ Surgeries', 'Level 1 Trauma Centre', '25 Years of Excellence', 'Advanced Robotic Surgery', '98% Satisfaction Rate', 'Cashless TPA Available', 'International Patients Welcome']).flat().map((item, i) => (
            <span key={i} className="text-primary font-semibold text-sm tracking-widest uppercase">
              {item} <span className="text-primary/40 mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24 px-6 border-b border-border/40">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center p-6 rounded-3xl bg-card border border-border/40 hover:border-primary/30 transition-colors">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{value}</p>
              <p className="text-sm text-muted-foreground mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section id="services" className="w-full py-24 md:py-32 px-6 bg-card relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Our Specialties</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-4">Clinical Masterpieces</h2>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Advanced biomechanical engineering with human-centric care protocols for flawless outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-3xl p-8 md:p-10 bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity transform group-hover:scale-110 duration-500">
                  <Icon className="w-48 h-48" />
                </div>
                <div className="mb-6 p-4 bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary z-10 group-hover:-translate-y-1 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 z-10 text-foreground group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground flex-1 mb-8 z-10 leading-relaxed">{desc}</p>
                <Link href="/book" className="inline-flex items-center font-semibold text-foreground hover:text-primary transition-colors z-10 group/link text-sm">
                  Book this Service <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITY GRID ─────────────────────────────────────────────── */}
      <FacilityGrid />

      {/* ── DOCTORS ──────────────────────────────────────────────────── */}
      <section className="w-full py-24 md:py-32 px-6 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">The Experts</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">Meet our Surgeons</h2>
            </div>
            <Link href="/doctors" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group/link">
              View Full Team <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS.map((doc) => (
              <DoctorCard key={doc.slug} {...doc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <Testimonials />

      {/* ── CTA BAND ─────────────────────────────────────────────────── */}
      <section className="w-full py-24 px-6 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_70%)]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Ready to reclaim your mobility?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">Book a consultation with our specialists today. Same-day appointments available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 h-14 text-lg font-bold hover:bg-white/90 transition-all hover:scale-[1.02] shadow-2xl">
              Book Appointment
            </Link>
            <a href="tel:01712662953" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 text-white px-8 h-14 text-lg font-semibold hover:bg-white/10 transition-all">
              <Phone className="w-5 h-5 mr-2" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="w-full bg-foreground text-background py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-background/10">
          <div>
            <h2 className="text-xl font-bold mb-3 text-background">Dhawan Orthopaedic Hospital</h2>
            <p className="text-background/50 leading-relaxed text-sm mb-6">Redefining mobility and premium orthopaedic care in Ambala, Haryana.</p>
            <Link href="/book" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 h-10 text-sm font-semibold hover:bg-primary/80 transition-colors">
              Book Consultation
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-5 text-background/70 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/50">
              {['Home', 'Doctors', 'About', 'Patient Care', 'Book'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-background transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-5 text-background/70 uppercase tracking-widest text-xs">Reach Us</h4>
            <ul className="space-y-4 text-sm text-background/50">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <a href="tel:01712662953" className="hover:text-background transition-colors">0171 266 2953</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>H.No :-1, Arya Nagar,<br />Ambala Cantt, Haryana</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <a href="mailto:contact@dhawanhospital.com" className="hover:text-background transition-colors">contact@dhawanhospital.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 text-xs text-background/30 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Dhawan Orthopaedic Hospital. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-background/60 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-background/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

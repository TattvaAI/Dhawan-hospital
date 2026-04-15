import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { Phone, ArrowRight, Shield, CreditCard, Globe, FileText } from 'lucide-react';

export const metadata = {
  title: 'Patient Care | Dhawan Orthopaedic Hospital',
  description: 'Insurance, TPA, admission guides, and international patient support at Dhawan Orthopaedic Hospital, Ambala.',
};

const TPA_LIST = ['Star Health', 'HDFC ERGO', 'Bajaj Allianz', 'ICICI Lombard', 'United India Insurance', 'National Insurance', 'New India Assurance', 'CGHS Empanelled', 'ECHS Empanelled'];

export default function PatientCarePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="py-16 md:py-24 border-b border-border/40 mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Patient Information</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">We&apos;re here for you</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From insurance claims to international travel arrangements, our care team handles every detail so you can focus on your recovery.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

            {/* Insurance / TPA */}
            <div className="rounded-3xl border border-border/50 bg-card p-8 md:p-10">
              <div className="p-4 bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Shield className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Insurance & TPA</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are empanelled with all major health insurance providers and TPA agencies. Our dedicated billing team will process your cashless claims seamlessly.
              </p>
              <div className="flex flex-wrap gap-2">
                {TPA_LIST.map((tpa) => (
                  <span key={tpa} className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/10">
                    {tpa}
                  </span>
                ))}
              </div>
            </div>

            {/* Admission Process */}
            <div className="rounded-3xl border border-border/50 bg-card p-8 md:p-10">
              <div className="p-4 bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6">
                <FileText className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Admission Process</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">A transparent, dignified process from first contact to discharge.</p>
              <ol className="space-y-4">
                {[
                  'Book a consultation online or by phone',
                  'Diagnostic workup arranged on the same visit',
                  'Surgeon reviews and proposes treatment plan',
                  'Insurance pre-authorization (if applicable)',
                  'Admission & surgery scheduling',
                  'Post-operative care & discharge planning',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* International Patients */}
            <div className="rounded-3xl border border-border/50 bg-card p-8 md:p-10">
              <div className="p-4 bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Globe className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">International Patients</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Dhawan Orthopaedic Hospital welcomes patients from across South Asia, the Middle East, and beyond. We offer comprehensive support for global patients.
              </p>
              <ul className="space-y-3">
                {['Medical Visa Invitation Letters', 'Airport Pickup Arrangements', 'Accommodation Assistance', 'Translation Services (10+ languages)', 'Telemedicine Pre-consult'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Payments */}
            <div className="rounded-3xl border border-border/50 bg-card p-8 md:p-10">
              <div className="p-4 bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6">
                <CreditCard className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Payment Options</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We offer flexible, transparent payment structures with no hidden charges — because your focus should be on healing.
              </p>
              <ul className="space-y-3">
                {['Cashless Insurance (TPA)', 'EMI via Bajaj Finserv & HDFC', 'UPI / Net Banking', 'International Wire Transfers', 'CGHS / ECHS Rates Available'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_70%)]" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 relative z-10">Have questions?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 relative z-10">Our patient care coordinators are available 24/7 to assist you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/book" className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 h-14 text-base font-bold hover:bg-white/90 transition-all">
                Book Appointment <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a href="tel:01712662953" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 text-white px-8 h-14 text-base font-semibold hover:bg-white/10 transition-all">
                <Phone className="w-5 h-5 mr-2" /> 0171 266 2953
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

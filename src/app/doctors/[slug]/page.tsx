import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { ArrowLeft, GraduationCap, Clock, ArrowRight, Phone } from 'lucide-react';

export const dynamic = 'force-static';

const ALL_DOCTORS: Record<string, {
  name: string; title: string; specialty: string; exp: string;
  img: string; qualifications: string; bio: string;
}> = {
  'dr-rajiv-dhawan': {
    name: 'Dr. Rajiv Dhawan', title: 'Chief Orthopaedic Surgeon',
    specialty: 'Knee & Hip Replacement', exp: '24 Years',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    qualifications: 'MS (Ortho), FRCS (UK), Fellowship in Arthroplasty — Hospital for Special Surgery, New York',
    bio: 'Dr. Rajiv Dhawan is the founder and chief surgeon of Dhawan Orthopaedic Hospital. With over two decades of experience in joint replacement surgery, he has performed over 8,000 successful procedures and pioneered minimally invasive arthroplasty techniques in the region.',
  },
  'dr-priya-mehra': {
    name: 'Dr. Priya Mehra', title: 'Senior Spine Surgeon',
    specialty: 'Complex Spine Surgery', exp: '18 Years',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    qualifications: 'MCh (Neurosurgery), Fellowship in Spinal Disorders — AIIMS, New Delhi',
    bio: 'Dr. Priya Mehra is a highly regarded spine surgeon whose expertise spans complex deformity corrections, disc replacements, and robot-assisted spine fusion. She is a visiting faculty at several prestigious medical institutions.',
  },
  'dr-anil-sharma': {
    name: 'Dr. Anil Sharma', title: 'Orthoptic Specialist',
    specialty: 'Eye Orthoptics', exp: '15 Years',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80',
    qualifications: 'DO, DipOrthoptics — Sankara Nethralaya, Chennai',
    bio: 'Dr. Anil Sharma has transformed the lives of hundreds of patients suffering from strabismus and binocular vision disorders. His non-surgical orthoptic interventions have achieved outcomes previously considered impossible without invasive procedures.',
  },
  'dr-sunita-batra': {
    name: 'Dr. Sunita Batra', title: 'Toe & Foot Specialist',
    specialty: 'Toe Orthosis & Foot Surgery', exp: '12 Years',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80',
    qualifications: 'MBBS, MS (Ortho), Fellowship in Foot & Ankle Surgery',
    bio: 'Dr. Sunita Batra specialises in corrective surgery and custom orthotics for complex foot and ankle pathologies. Her biomechanical expertise ensures that patients return to full activity with optimized gait mechanics.',
  },
  'dr-vikram-anand': {
    name: 'Dr. Vikram Anand', title: 'Sports Medicine Surgeon',
    specialty: 'Sports Injuries & Arthroscopy', exp: '10 Years',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80',
    qualifications: 'MS (Ortho), Fellowship in Sports Medicine — Apollo Hospitals',
    bio: 'Dr. Vikram Anand is the go-to specialist for athletes and active individuals requiring precise arthroscopic procedures.',
  },
  'dr-kavita-rao': {
    name: 'Dr. Kavita Rao', title: 'Paediatric Orthopaedic Surgeon',
    specialty: 'Paediatric Bone Disorders', exp: '14 Years',
    img: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&q=80',
    qualifications: 'MS (Ortho), Fellowship in Paediatric Orthopaedics — PGIMER, Chandigarh',
    bio: 'Dr. Kavita Rao dedicates her career to treating complex congenital and developmental bone conditions in children.',
  },
};

export function generateStaticParams() {
  return Object.keys(ALL_DOCTORS).map((slug) => ({ slug }));
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = ALL_DOCTORS[slug];

  if (!doctor) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Doctor not found</h1>
          <Link href="/doctors" className="text-primary hover:underline">← Back to Doctors</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Link href="/doctors" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12 mt-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Doctors
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
            {/* Photo */}
            <div className="md:col-span-2">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-muted shadow-2xl shadow-black/10">
                <img src={doctor.img} alt={doctor.name} className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-3 flex flex-col justify-center">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 bg-primary/10 px-3 py-1.5 rounded-full w-fit">
                {doctor.specialty}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-2">{doctor.name}</h1>
              <p className="text-xl text-muted-foreground mb-8">{doctor.title}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-card rounded-2xl px-4 py-3 border border-border/50">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">{doctor.exp} Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-card rounded-2xl px-4 py-3 border border-border/50">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold">Board Certified</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">Qualifications</h2>
                <p className="text-foreground font-medium leading-relaxed">{doctor.qualifications}</p>
              </div>

              <div className="mb-10">
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">About</h2>
                <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 h-13 text-base font-semibold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:scale-[1.02]"
                  style={{ height: '52px' }}
                >
                  Book with {doctor.name.split(' ')[1]} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="tel:01712662953"
                  className="inline-flex items-center justify-center rounded-full border border-border text-foreground px-8 text-base font-semibold hover:bg-muted transition-all"
                  style={{ height: '52px' }}
                >
                  <Phone className="w-4 h-4 mr-2" /> Call Clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';
import { DoctorCard } from '@/components/DoctorCard';
import { Navbar } from '@/components/Navbar';

export const metadata = {
  title: 'Our Doctors | Dhawan Orthopaedic Hospital',
  description: 'Meet our world-class team of orthopaedic surgeons and specialists at Dhawan Orthopaedic Hospital, Ambala.',
};

const ALL_DOCTORS = [
  {
    name: 'Dr. Rajiv Dhawan', title: 'Chief Orthopaedic Surgeon',
    specialty: 'Knee & Hip Replacement', exp: '24 Years',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    slug: 'dr-rajiv-dhawan',
    qualifications: 'MS (Ortho), FRCS (UK), Fellowship in Arthroplasty — Hospital for Special Surgery, New York',
    bio: 'Dr. Rajiv Dhawan is the founder and chief surgeon of Dhawan Orthopaedic Hospital. With over two decades of experience in joint replacement surgery, he has performed over 8,000 successful procedures and pioneered minimally invasive arthroplasty techniques in the region.',
  },
  {
    name: 'Dr. Priya Mehra', title: 'Senior Spine Surgeon',
    specialty: 'Complex Spine Surgery', exp: '18 Years',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    slug: 'dr-priya-mehra',
    qualifications: 'MCh (Neurosurgery), Fellowship in Spinal Disorders — AIIMS, New Delhi',
    bio: 'Dr. Priya Mehra is a highly regarded spine surgeon whose expertise spans complex deformity corrections, disc replacements, and robot-assisted spine fusion. She is a visiting faculty at several prestigious medical institutions.',
  },
  {
    name: 'Dr. Anil Sharma', title: 'Orthoptic Specialist',
    specialty: 'Eye Orthoptics', exp: '15 Years',
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
    slug: 'dr-anil-sharma',
    qualifications: 'DO, DipOrthoptics — Sankara Nethralaya, Chennai',
    bio: 'Dr. Anil Sharma has transformed the lives of hundreds of patients suffering from strabismus and binocular vision disorders. His non-surgical orthoptic interventions have achieved outcomes previously considered impossible without invasive procedures.',
  },
  {
    name: 'Dr. Sunita Batra', title: 'Toe & Foot Specialist',
    specialty: 'Toe Orthosis & Foot Surgery', exp: '12 Years',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    slug: 'dr-sunita-batra',
    qualifications: 'MBBS, MS (Ortho), Fellowship in Foot & Ankle Surgery — Chennai',
    bio: 'Dr. Sunita Batra specialises in corrective surgery and custom orthotics for complex foot and ankle pathologies. Her biomechanical expertise ensures that patients return to full activity with optimized gait mechanics.',
  },
  {
    name: 'Dr. Vikram Anand', title: 'Sports Medicine Surgeon',
    specialty: 'Sports Injuries & Arthroscopy', exp: '10 Years',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    slug: 'dr-vikram-anand',
    qualifications: 'MS (Ortho), Fellowship in Sports Medicine — Apollo Hospitals',
    bio: 'Dr. Vikram Anand is the go-to specialist for athletes and active individuals requiring precise arthroscopic procedures. Having treated national-level sportspeople, he combines sports science with surgical mastery for unparalleled recovery outcomes.',
  },
  {
    name: 'Dr. Kavita Rao', title: 'Paediatric Orthopaedic Surgeon',
    specialty: 'Paediatric Bone Disorders', exp: '14 Years',
    img: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&q=80',
    slug: 'dr-kavita-rao',
    qualifications: 'MS (Ortho), Fellowship in Paediatric Orthopaedics — PGIMER, Chandigarh',
    bio: 'Dr. Kavita Rao has dedicated her career to treating complex congenital and developmental bone conditions in children, from club foot to scoliosis, ensuring every child has the opportunity to lead a fully mobile life.',
  },
];

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="py-16 md:py-24 border-b border-border/40 mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Our Medical Team</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-6">Meet the Surgeons</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Our specialists are internationally trained, board-certified, and deeply committed to restoring your quality of life.
            </p>
          </div>

          {/* Doctor Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ALL_DOCTORS.map((doc) => (
              <DoctorCard key={doc.slug} {...doc} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  title: string;
  specialty: string;
  exp: string;
  img: string;
  slug: string;
}

export function DoctorCard({ name, title, specialty, exp, img, slug }: DoctorCardProps) {
  return (
    <div className="group rounded-3xl border border-border/50 bg-card overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col">
      {/* Photo */}
      <div className="relative h-64 bg-muted overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-flex items-center rounded-full bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 backdrop-blur-sm">
            {exp} Experience
          </span>
        </div>
      </div>
      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{specialty}</p>
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-6">{title}</p>
        <Link
          href={`/doctors/${slug}`}
          className="mt-auto inline-flex items-center text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
        >
          View Profile <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/uploads/logo-hospital.jpeg";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Dhawan" className="h-12 w-12 rounded-full ring-1 ring-gold/40 object-cover" />
            <div>
              <div className="font-display text-xl font-semibold">Dhawan</div>
              <div className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">Healthcare Group</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Restore Mobility. Renew Life. — World-class orthopaedic, physiotherapy and nutrition care under one roof.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold font-sans">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-gold transition-colors font-medium">About</Link></li>
            <li><Link href="/services" className="hover:text-gold transition-colors font-medium">Services</Link></li>
            <li><Link href="/doctors" className="hover:text-gold transition-colors font-medium">Doctors</Link></li>
            <li><Link href="/gallery" className="hover:text-gold transition-colors font-medium">Gallery</Link></li>
            <li><Link href="/reviews" className="hover:text-gold transition-colors font-medium">Reviews</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold font-sans">Brands</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gold transition-colors font-medium">Dhawan Orthopaedic Hospital</Link></li>
            <li><Link href="/physiotherapy" className="hover:text-gold transition-colors font-medium">Dhawan Physiotherapy Centre</Link></li>
            <li><Link href="/right-diet" className="hover:text-gold transition-colors font-medium">Right Diet by Roveeta Dhawan</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold font-sans">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 
              <a href="tel:+919812038750" className="hover:text-gold transition-colors font-medium">+91 98120 38750 (Dr. Sanjeev)</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 
              <a href="tel:+919728138750" className="hover:text-gold transition-colors font-medium">+91 97281 38750 (Roveeta)</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 
              <a href="tel:01712662953" className="hover:text-gold transition-colors font-medium">0171-2662953 (Landline)</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 
              <a href="mailto:dhawanortho@yahoo.com" className="hover:text-gold transition-colors font-medium">dhawanortho@yahoo.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 
              <span className="font-medium text-foreground/90">Ambala, Haryana, India</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dhawan Healthcare Group. Crafted with care.
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/about', label: 'About' },
  { href: '/patient-care', label: 'Patient Care' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-black text-xs">D</span>
          </div>
          <span className="font-bold text-sm sm:text-base text-foreground leading-tight hidden sm:block">
            Dhawan<br />
            <span className="font-light text-muted-foreground text-xs tracking-widest uppercase">Orthopaedic</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-muted/50 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href="tel:01712662953"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">0171 266 2953</span>
          </a>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 h-9 text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
          >
            Book Now
          </Link>
          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl hover:bg-muted/50 text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={cn(
        'md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl overflow-hidden transition-all duration-300',
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <nav className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50 rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:01712662953"
            className="px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted/50 rounded-xl transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> 0171 266 2953
          </a>
        </nav>
      </div>
    </header>
  );
}

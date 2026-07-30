"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X, MessageCircle } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import logo from "@/assets/uploads/logo-hospital.jpeg";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/physiotherapy", label: "Physiotherapy" },
  { href: "/right-diet", label: "Right Diet" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useUIStore();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer instantly when the route path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, setMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-2 transition-all duration-500 ${
          scrolled ? "glass shadow-elegant" : "bg-transparent"
        }`}>
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white p-1 ring-1 ring-gold/20 shadow-inner flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image src={logo} alt="Dhawan Orthopaedic Hospital" className="h-full w-full object-contain" />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-base text-foreground font-semibold tracking-wide">Dhawan</span>
              <span className="text-[9px] tracking-[0.22em] text-gold uppercase font-bold">Healthcare Group</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`relative px-3 py-2 text-sm rounded-lg transition-colors font-medium ${
                    active ? "text-gold" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {n.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-[1.5px] bg-gold"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative h-10 w-10 grid place-items-center rounded-full glass hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {mounted ? (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid place-items-center"
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4 text-foreground" /> : <Moon className="h-4 w-4 text-foreground" />}
                  </motion.span>
                </AnimatePresence>
              ) : (
                <span className="h-4 w-4" />
              )}
            </button>
            <a
              href="https://wa.me/919812038750?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold hover:scale-[1.03] hover:shadow-glow transition-all"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              <span>Book Appointment</span>
            </a>
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden h-10 w-10 grid place-items-center rounded-full glass cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1 shadow-elegant border border-border"
            >
              {NAV.map((n) => {
                const active = pathname === n.href;
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={`px-3 py-2.5 rounded-lg hover:bg-muted text-sm font-medium transition-colors ${
                      active ? "text-gold bg-muted/40" : "text-foreground/90"
                    }`}
                  >
                    {n.label}
                  </Link>
                );
              })}
              <a
                href="https://wa.me/919812038750?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noreferrer"
                className="mt-2 text-center rounded-xl bg-[#25D366] text-white py-2.5 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>Book Appointment</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

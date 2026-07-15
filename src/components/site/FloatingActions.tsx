import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        href="https://wa.me/919812038750?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="relative h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle className="h-6 w-6 relative" />
      </motion.a>
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        href="tel:+919812038750"
        aria-label="Call"
        className="h-14 w-14 grid place-items-center rounded-full grad-gold text-gold-foreground shadow-elegant hover:scale-110 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </motion.a>
    </div>
  );
}

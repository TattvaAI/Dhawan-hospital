"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { InputField } from "@/components/ui/InputField";
import Reveal from "@/components/site/Reveal";

export default function ContactForm() {
  const [department, setDepartment] = useState("Orthopaedics & Joint Surgery");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleWhatsAppBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let messageText = `Hello, I would like to book an appointment for ${department}.`;
    if (name) messageText += `\nName: ${name}`;
    if (date) messageText += `\nPreferred Date: ${date}`;
    if (notes) messageText += `\nDetails: ${notes}`;

    const url = `https://wa.me/919812038750?text=${encodeURIComponent(messageText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Reveal direction="up">
      <form
        onSubmit={handleWhatsAppBooking}
        className="glass rounded-3xl p-8 md:p-10 grid gap-5 md:grid-cols-2 border border-border shadow-elegant"
      >
        <div className="md:col-span-2 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold">
            <MessageCircle className="h-4 w-4 text-[#25D366]" /> Instant Booking via WhatsApp
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold">Book via WhatsApp</h2>
          <p className="text-sm text-muted-foreground">
            Connect directly with our hospital front desk on WhatsApp (+91 98120 38750) for immediate slot availability and confirmation.
          </p>
        </div>

        <InputField
          label="Your Name (Optional)"
          name="name"
          placeholder="e.g. Ramesh Kumar"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Department</span>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="mt-1.5 w-full rounded-xl glass border border-border bg-background px-4 py-3 text-sm focus:border-gold outline-none transition-colors"
          >
            <option className="bg-card text-foreground">Orthopaedics & Joint Surgery</option>
            <option className="bg-card text-foreground">24x7 Trauma & Fracture Care</option>
            <option className="bg-card text-foreground">Spine & Bone Care</option>
            <option className="bg-card text-foreground">Dhawan Physiotherapy Centre</option>
            <option className="bg-card text-foreground">Right Diet by Roveeta Dhawan</option>
          </select>
        </label>

        <InputField
          label="Preferred Date (Optional)"
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <InputField
          label="Symptom / Notes (Optional)"
          name="notes"
          placeholder="Describe your joint pain or injury history..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 mt-2 border-t border-border/40 pt-5">
          <p className="text-xs text-muted-foreground max-w-sm">
            Clicking below opens WhatsApp directly with your details pre-filled.
          </p>
          <button
            type="submit"
            className="rounded-full bg-[#25D366] text-white px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2 hover:scale-[1.03] transition-transform cursor-pointer shadow-elegant"
          >
            <MessageCircle className="h-5 w-5 fill-current" />
            Book Appointment
          </button>
        </div>
      </form>
    </Reveal>
  );
}


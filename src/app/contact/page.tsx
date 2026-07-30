import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Book Appointment — Dhawan Healthcare Group",
  description: "Book an appointment, request emergency care or chat on WhatsApp. We are located in Ambala, Haryana, and are open 24×7 for emergencies.",
  openGraph: {
    title: "Contact Dhawan Healthcare Group",
    description: "Book an appointment or call us for 24x7 trauma care in Ambala.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

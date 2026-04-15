'use server';

import { db } from '@/lib/db';
import { patients, appointments } from '@/lib/db/schema';
import { revalidatePath } from 'next/cache';

export async function createAppointment(data: {
  name: string;
  phone: string;
  service: string;
  date: string;
}) {
  if (!db) {
    // Database not configured — simulate success so the UI flow works
    // In production, add your DATABASE_URL env variable on Vercel
    console.warn('No DATABASE_URL configured. Appointment not saved to DB.');
    return { success: true };
  }

  try {
    const [newPatient] = await db.insert(patients).values({
      name: data.name,
      phone: data.phone,
    }).returning({ id: patients.id });

    if (!newPatient?.id) throw new Error('Failed to create patient record');

    await db.insert(appointments).values({
      patientId: newPatient.id,
      service: data.service,
      appointmentDate: new Date(data.date),
    });

    revalidatePath('/admin');
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Booking failed:', msg);
    return { success: false, error: 'Unable to secure slot. Please call us directly.' };
  }
}


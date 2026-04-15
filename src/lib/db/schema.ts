import { pgTable, uuid, text, varchar, timestamp } from 'drizzle-orm/pg-core';

export const patients = pgTable('patients', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  phone: varchar('phone', { length: 20 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export const appointments = pgTable('appointments', {
  id: uuid('id').defaultRandom().primaryKey(),
  patientId: uuid('patient_id').references(() => patients.id).notNull(),
  service: text('service').notNull(),
  appointmentDate: timestamp('appointment_date').notNull(),
  status: varchar('status', { length: 20 }).default('pending').notNull(),
});

import { db } from '@/lib/db';
import { appointments, patients } from '@/lib/db/schema';
import { desc, eq } from 'drizzle-orm';
import { CalendarDays, Phone, UserRound, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

type AppointmentRow = {
  id: string;
  service: string;
  date: Date;
  status: string;
  patientName: string;
  patientPhone: string | null;
};

export default async function AdminDashboard() {
  let appointmentsList: AppointmentRow[] = [];
  let dbMissing = false;

  if (!db) {
    dbMissing = true;
  } else {
    try {
      const records = await db
        .select({
          id: appointments.id,
          service: appointments.service,
          date: appointments.appointmentDate,
          status: appointments.status,
          patientName: patients.name,
          patientPhone: patients.phone,
        })
        .from(appointments)
        .innerJoin(patients, eq(appointments.patientId, patients.id))
        .orderBy(desc(appointments.appointmentDate))
        .limit(50);
      appointmentsList = records as AppointmentRow[];
    } catch (error) {
      console.error('Failed to load appointments.', error);
    }
  }

  return (
    <div className="min-h-screen bg-muted/20 p-6 md:p-12">
      <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Admin/Reception</h1>
            <p className="text-muted-foreground mt-1">Manage daily appointments and patient flow</p>
          </div>
          <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm flex items-center shadow-sm">
            <CalendarDays className="w-4 h-4 mr-2" />
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
        </div>

        <div className="bg-card rounded-3xl border border-border/50 shadow-xl shadow-black/5 overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-muted/30 border-b border-border/50 text-xs uppercase tracking-widest text-muted-foreground/80">
                  <th className="font-semibold p-5 pl-6">Patient Details</th>
                  <th className="font-semibold p-5">Required Service</th>
                  <th className="font-semibold p-5">Schedule</th>
                  <th className="font-semibold p-5 pr-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 align-middle">
                {appointmentsList.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-12 text-center text-muted-foreground">
                      <div className="flex flex-col items-center justify-center">
                        {dbMissing ? (
                          <>
                            <AlertCircle className="w-12 h-12 mb-4 opacity-30 text-amber-500" />
                            <p className="font-semibold text-foreground">Database not configured</p>
                            <p className="text-xs mt-1 opacity-70 max-w-xs">Add DATABASE_URL to your environment variables on Vercel to see appointments here.</p>
                            <Link href="https://vercel.com/docs/environment-variables" target="_blank" className="text-primary text-xs mt-3 hover:underline">Learn how →</Link>
                          </>
                        ) : (
                          <>
                            <CalendarDays className="w-12 h-12 mb-4 opacity-20" />
                            <p>No appointments found.</p>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  appointmentsList.map((apt) => (
                    <tr key={apt.id} className="hover:bg-muted/10 transition-colors group">
                      <td className="p-5 pl-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/5 p-3 rounded-2xl text-primary transition-transform group-hover:scale-105">
                            <UserRound className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground text-sm">{apt.patientName}</p>
                            <p className="text-xs text-muted-foreground flex items-center mt-1">
                              <Phone className="w-3 h-3 mr-1 opacity-70" /> {apt.patientPhone}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-5">
                        <span className="inline-block px-3 py-1.5 rounded-xl bg-secondary/50 text-secondary-foreground text-xs font-semibold border border-secondary/20">
                          {apt.service}
                        </span>
                      </td>
                      <td className="p-5">
                        <p className="font-semibold text-foreground text-sm">
                          {new Date(apt.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(apt.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </td>
                      <td className="p-5 pr-6 text-right">
                        <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                          apt.status === 'pending' ? 'bg-amber-500/10 text-amber-600 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${apt.status === 'pending' ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                          {apt.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

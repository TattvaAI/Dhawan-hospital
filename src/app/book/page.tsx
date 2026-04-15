'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createAppointment } from '../actions/book';
import { ArrowLeft, CheckCircle2, ChevronRight, Activity, CalendarDays, UserRound, Phone } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/Navbar';

const SERVICES = [
  "Eye Orthoptics",
  "Toe Orthosis",
  "Knee/Hip Replacement",
  "Orthopedic Surgery",
  "General Consultation"
];

// Next 7 days
const DATES = Array.from({ length: 7 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i + 1);
  return d;
});

const TIMES = ["09:00", "10:00", "11:30", "14:00", "15:30", "17:00"];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep(s => Math.min(s + 1, 3));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  const submitBooking = async () => {
    setIsLoading(true);
    const result = await createAppointment({
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      date: `${formData.date}T${formData.time}`,
    });
    setIsLoading(false);
    if (result.success) {
      setIsSuccess(true);
    } else {
      alert("Error: " + result.error);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <CheckCircle2 className="w-24 h-24 text-primary mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-center">Secured.</h1>
        <p className="text-muted-foreground text-center max-w-md mb-12 text-lg">
          Your appointment for <strong className="text-foreground">{formData.service}</strong> is confirmed. A concierge will be in touch at <strong className="text-foreground">{formData.phone}</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-12 h-14 text-lg font-semibold shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all">
            Back to Home
          </Link>
          <a href="tel:01712662953" className="inline-flex items-center justify-center rounded-full border border-border px-8 h-14 text-lg font-semibold hover:bg-muted transition-all">
            <Phone className="w-5 h-5 mr-2" /> Call Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Visual Header / Progress */}
      <div className="w-full md:w-1/3 bg-sidebar p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border/50 relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none rounded-full blur-[100px]" />
        
        <div className="z-10">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-16">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-sidebar-foreground">Book<br/>Consultation</h1>
          <p className="text-muted-foreground">Premium care begins with a seamlessly orchestrated booking process.</p>
        </div>

        <div className="mt-12 z-10 flex flex-col gap-6">
          <StepIndicator current={step} target={1} label="Specialty" icon={<Activity className="w-4 h-4" />} />
          <StepIndicator current={step} target={2} label="Schedule" icon={<CalendarDays className="w-4 h-4" />} />
          <StepIndicator current={step} target={3} label="Details" icon={<UserRound className="w-4 h-4" />} />
        </div>
      </div>

      {/* Form Content */}
      <div className="w-full md:w-2/3 p-6 md:p-16 lg:p-24 flex flex-col relative">
        <div className="max-w-2xl w-full mx-auto flex-1 flex flex-col">
          
          {/* STEP 1: SERVICE */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex-1 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">What do you require?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map((srv) => (
                  <button
                    key={srv}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: srv }));
                      handleNext();
                    }}
                    className={cn(
                      "p-6 rounded-2xl border text-left transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      formData.service === srv 
                        ? "border-primary bg-primary/5 shadow-primary/10" 
                        : "border-border/60 hover:border-sidebar-ring bg-card"
                    )}
                  >
                    <h3 className={cn("font-medium text-lg", formData.service === srv ? "text-primary" : "text-foreground")}>{srv}</h3>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex-1 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">When shall we schedule?</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Select Date</h3>
                <div className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar snap-x">
                  {DATES.map((date, i) => {
                    const dateStr = date.toISOString().split('T')[0];
                    return (
                      <button
                        key={i}
                        onClick={() => setFormData(prev => ({ ...prev, date: dateStr }))}
                        className={cn(
                          "flex-shrink-0 w-24 h-24 rounded-2xl border flex flex-col items-center justify-center transition-all snap-start",
                          formData.date === dateStr
                            ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                            : "bg-card text-foreground border-border/60 hover:border-primary/50"
                        )}
                      >
                        <span className="text-xs font-medium uppercase opacity-80">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                        <span className="text-2xl font-bold mt-1">{date.getDate()}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {formData.date && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Select Time</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {TIMES.map((time) => (
                      <button
                        key={time}
                        onClick={() => setFormData(prev => ({ ...prev, time }))}
                        className={cn(
                          "py-3 rounded-xl border text-center transition-all font-medium",
                          formData.time === time
                            ? "bg-sidebar-ring text-white border-sidebar-ring shadow-md"
                            : "bg-card text-foreground border-border/60 hover:border-sidebar-ring"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 flex justify-between">
                <Button variant="ghost" onClick={handlePrev} className="rounded-full text-muted-foreground">Previous</Button>
                <Button 
                  onClick={handleNext} 
                  disabled={!formData.date || !formData.time}
                  className="rounded-full px-8 h-12 shadow-md"
                >
                  Continue <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: DETAILS */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex-1 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">Finalize booking</h2>
              
              <div className="space-y-6 bg-card p-6 md:p-8 rounded-3xl border border-border/50 shadow-sm shadow-black/5">
                <div className="flex justify-between items-center pb-6 border-b border-border/40">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Service</p>
                    <p className="text-lg font-semibold mt-1">{formData.service}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="rounded-full text-xs h-8">Edit</Button>
                </div>
                <div className="flex justify-between items-center pb-6 border-b border-border/40">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Time</p>
                    <p className="text-lg font-semibold mt-1">{new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric'})} at {formData.time}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setStep(2)} className="rounded-full text-xs h-8">Edit</Button>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input 
                      value={formData.name}
                      onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. John Doe"
                      className="h-14 rounded-2xl bg-muted/30 border-transparent focus-visible:bg-transparent shadow-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input 
                      value={formData.phone}
                      onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="e.g. +91 98765 43210"
                      className="h-14 rounded-2xl bg-muted/30 border-transparent focus-visible:bg-transparent shadow-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-between items-center">
                <Button variant="ghost" onClick={handlePrev} className="rounded-full text-muted-foreground">Previous</Button>
                <Button 
                  onClick={submitBooking} 
                  disabled={isLoading || !formData.name || !formData.phone}
                  className="rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {isLoading ? "Securing slot..." : "Confirm Booking"}
                </Button>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}

function StepIndicator({ current, target, label, icon }: { current: number, target: number, label: string, icon: React.ReactNode }) {
  const isPast = current > target;
  const isCurrent = current === target;
  const isFuture = current < target;

  return (
    <div className={cn(
      "flex items-center gap-4 transition-opacity",
      isFuture ? "opacity-40" : "opacity-100"
    )}>
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors",
        isPast ? "bg-primary border-primary text-primary-foreground" : 
        isCurrent ? "border-primary text-primary" : "border-border text-muted-foreground"
      )}>
        {icon}
      </div>
      <div>
        <p className={cn("text-xs font-semibold tracking-widest uppercase", isCurrent ? "text-primary" : "text-muted-foreground")}>Step {target}</p>
        <p className={cn("text-lg font-medium", isCurrent ? "text-foreground" : "text-muted-foreground")}>{label}</p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { InputField } from "@/components/ui/InputField";
import Reveal from "@/components/site/Reveal";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Reveal direction="up" delay={0.1}>
      <form
        onSubmit={handleSubmit}
        className="mt-12 glass rounded-3xl p-8 md:p-10 grid gap-5 md:grid-cols-2 shadow-elegant border border-border"
      >
        <InputField label="Full Name" name="name" required placeholder="e.g. Rohan Sharma" />
        <InputField label="Age" name="age" type="number" required placeholder="e.g. 34" min="1" max="120" />
        <InputField label="Height (cm)" name="height" type="number" required placeholder="e.g. 172" />
        <InputField label="Weight (kg)" name="weight" type="number" required placeholder="e.g. 68" />
        
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Gender</span>
          <select required className="mt-1.5 w-full rounded-xl glass border border-border bg-background px-4 py-3 text-sm focus:border-gold outline-none transition-colors">
            <option className="bg-card text-foreground">Female</option>
            <option className="bg-card text-foreground">Male</option>
            <option className="bg-card text-foreground">Other</option>
          </select>
        </label>
        
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Lifestyle</span>
          <select required className="mt-1.5 w-full rounded-xl glass border border-border bg-background px-4 py-3 text-sm focus:border-gold outline-none transition-colors">
            <option className="bg-card text-foreground">Sedentary (Little or no activity)</option>
            <option className="bg-card text-foreground">Lightly Active (Light exercise/sports)</option>
            <option className="bg-card text-foreground">Moderately Active (Moderate exercise/sports)</option>
            <option className="bg-card text-foreground">Very Active (Hard exercise/sports)</option>
          </select>
        </label>
        
        <InputField
          label="Current Eating Habits"
          name="habits"
          isTextArea
          rows={3}
          containerClassName="md:col-span-2"
          placeholder="Briefly describe what you typically eat in a day..."
        />
        
        <InputField
          label="Medical Conditions (if any)"
          name="medical"
          isTextArea
          rows={2}
          containerClassName="md:col-span-2"
          placeholder="e.g. Thyroid, Diabetes, Hypertension, or none..."
        />
        
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Fitness Goals</span>
          <select className="mt-1.5 w-full rounded-xl glass border border-border bg-background px-4 py-3 text-sm focus:border-gold outline-none transition-colors">
            <option className="bg-card text-foreground">Weight Loss</option>
            <option className="bg-card text-foreground">Fat Loss</option>
            <option className="bg-card text-foreground">Muscle Gain</option>
            <option className="bg-card text-foreground">Lifestyle Improvement</option>
          </select>
        </label>
        
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Meal Preferences</span>
          <select className="mt-1.5 w-full rounded-xl glass border border-border bg-background px-4 py-3 text-sm focus:border-gold outline-none transition-colors">
            <option className="bg-card text-foreground">Vegetarian</option>
            <option className="bg-card text-foreground">Non-Vegetarian</option>
            <option className="bg-card text-foreground">Vegan</option>
            <option className="bg-card text-foreground">Eggetarian</option>
          </select>
        </label>
        
        <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 mt-4 border-t border-border/60 pt-5">
          <p className="text-xs text-muted-foreground max-w-md">
            By submitting, you authorize Right Diet by Roveeta Dhawan to contact you for scheduling a detailed diagnostic consult.
          </p>
          <button
            type="submit"
            disabled={loading}
            className="rounded-full grad-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold inline-flex items-center gap-2 hover:scale-[1.03] transition-transform cursor-pointer shadow-elegant disabled:opacity-70"
          >
            {loading ? "Registering Request..." : "Book Personalized Consultation"} 
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        {submitted && (
          <div className="md:col-span-2 glass border border-primary text-foreground rounded-2xl p-5 text-sm mt-3 animate-pulse">
            ✨ Thank you! Roveeta's wellness advisory team will review your profile and reach out within 24 hours to confirm your calendar booking.
          </div>
        )}
      </form>
    </Reveal>
  );
}

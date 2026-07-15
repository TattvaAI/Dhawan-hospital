"use client";

import { useState } from "react";
import { InputField } from "@/components/ui/InputField";
import Reveal from "@/components/site/Reveal";

function StatCard({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return (
    <div className="glass rounded-2xl p-5 hover:border-gold/30 transition-colors">
      <div className="text-xs uppercase tracking-widest text-gold font-medium">{label}</div>
      <div className="mt-1 font-display text-3xl">
        {value} {unit && <span className="text-sm text-muted-foreground font-sans font-normal">{unit}</span>}
      </div>
    </div>
  );
}

export default function CalorieCalc() {
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [activity, setActivity] = useState(1.55);

  const bmr = gender === "male"
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
  const tdee = Math.round(bmr * activity);

  const validTdee = isFinite(tdee) && tdee > 0;

  return (
    <Reveal direction="scale" delay={0.05}>
      <div className="glass rounded-3xl p-7 hover-lift h-full flex flex-col justify-between">
        <div>
          <h3 className="font-display text-2xl border-b border-border pb-3 mb-5">Daily Calories</h3>
          <div className="grid grid-cols-2 gap-3">
            <InputField label="Age" type="number" value={age || ""} onChange={(e) => setAge(+e.target.value)} />
            <InputField label="Height (cm)" type="number" value={height || ""} onChange={(e) => setHeight(+e.target.value)} />
            <InputField label="Weight (kg)" type="number" value={weight || ""} onChange={(e) => setWeight(+e.target.value)} />
            
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Gender</span>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as "male" | "female")}
                className="mt-1.5 w-full rounded-xl glass border border-border bg-background px-4 py-3 text-sm focus:border-gold outline-none transition-colors"
              >
                <option value="male" className="bg-card text-foreground">Male</option>
                <option value="female" className="bg-card text-foreground">Female</option>
              </select>
            </label>
          </div>
          
          <label className="block mt-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Activity Level</span>
            <select
              value={activity}
              onChange={(e) => setActivity(+e.target.value)}
              className="mt-1.5 w-full rounded-xl glass border border-border bg-background px-4 py-3 text-sm focus:border-gold outline-none transition-colors"
            >
              <option value={1.2} className="bg-card text-foreground">Sedentary (Little/no exercise)</option>
              <option value={1.375} className="bg-card text-foreground">Lightly Active (1-3 days/week)</option>
              <option value={1.55} className="bg-card text-foreground">Moderately Active (3-5 days/week)</option>
              <option value={1.725} className="bg-card text-foreground">Very Active (6-7 days/week)</option>
              <option value={1.9} className="bg-card text-foreground">Extra Active (Hard labor/athletic)</option>
            </select>
          </label>
        </div>
        <div className="mt-8">
          <StatCard label="Estimated TDEE" value={validTdee ? tdee.toString() : "—"} unit="kcal/day" />
        </div>
      </div>
    </Reveal>
  );
}

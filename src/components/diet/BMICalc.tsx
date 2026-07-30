"use client";

import { useState } from "react";
import { InputField } from "@/components/ui/InputField";
import Reveal from "@/components/site/Reveal";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-5 transition-colors hover:border-gold/30">
      <div className="text-xs uppercase tracking-widest text-gold font-medium">{label}</div>
      <div className="mt-1 font-display text-3xl">{value}</div>
    </div>
  );
}

export default function BMICalc() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const bmi = +(weight / Math.pow(height / 100, 2)).toFixed(1);
  const getCategory = (val: number) => {
    if (val < 18.5) return "Underweight";
    if (val < 25) return "Normal";
    if (val < 30) return "Overweight";
    return "Obese";
  };

  const validBmi = isFinite(bmi) && bmi > 0;
  const category = validBmi ? getCategory(bmi) : "—";

  return (
    <Reveal direction="scale">
      <div className="glass rounded-3xl p-7 hover-lift h-full flex flex-col justify-between">
        <div>
          <h3 className="font-display text-2xl border-b border-border pb-3 mb-5">BMI Calculator</h3>
          <div className="grid gap-4">
            <InputField
              label="Height (cm)"
              type="number"
              value={height || ""}
              onChange={(e) => setHeight(+e.target.value)}
              min="50"
              max="250"
            />
            <InputField
              label="Weight (kg)"
              type="number"
              value={weight || ""}
              onChange={(e) => setWeight(+e.target.value)}
              min="10"
              max="300"
            />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3">
          <StatCard label="BMI" value={validBmi ? String(bmi) : "—"} />
          <StatCard label="Category" value={category} />
        </div>
      </div>
    </Reveal>
  );
}

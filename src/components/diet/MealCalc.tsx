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

export default function MealCalc() {
  const [daily, setDaily] = useState(2000);
  const [meals, setMeals] = useState(4);
  
  const perMeal = Math.round(daily / Math.max(meals, 1));
  const validPerMeal = isFinite(perMeal) && perMeal > 0;

  return (
    <Reveal direction="scale" delay={0.1}>
      <div className="glass rounded-3xl p-7 hover-lift h-full flex flex-col justify-between">
        <div>
          <h3 className="font-display text-2xl border-b border-border pb-3 mb-5">Per Meal Calories</h3>
          <div className="grid gap-4">
            <InputField
              label="Daily Target (kcal)"
              type="number"
              value={daily || ""}
              onChange={(e) => setDaily(+e.target.value)}
            />
            <InputField
              label="Meals per Day"
              type="number"
              value={meals || ""}
              onChange={(e) => setMeals(+e.target.value)}
              min="1"
              max="10"
            />
          </div>
        </div>
        <div>
          <div className="mt-8">
            <StatCard label="Average per Meal" value={validPerMeal ? perMeal.toString() : "—"} unit="kcal" />
          </div>
          <p className="mt-4 text-xs text-muted-foreground italic leading-relaxed text-center">
            Pro-tip: Focus on loading each meal with protein, healthy fats, and prebiotic fiber for maximum satiety.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

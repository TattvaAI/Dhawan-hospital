"use client";

import { InputField } from "@/components/ui/InputField";
import Reveal from "@/components/site/Reveal";

interface ReviewFormProps {
  onSubmit: (review: { name: string; role: string; rating: number; text: string }) => void;
}

export default function ReviewForm({ onSubmit }: ReviewFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const r = {
      name: String(fd.get("name") || "Anonymous"),
      role: String(fd.get("role") || "Patient"),
      rating: Number(fd.get("rating") || 5),
      text: String(fd.get("text") || ""),
    };
    if (r.text.trim()) {
      onSubmit(r);
    }
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <Reveal direction="up">
      <form
        onSubmit={handleSubmit}
        className="mt-10 glass rounded-3xl p-8 grid gap-4 border border-border shadow-elegant"
      >
        <InputField
          name="name"
          label="Your Name"
          placeholder="e.g. Amit Kumar"
          required
        />
        <InputField
          name="role"
          label="Treatment / Specialty"
          placeholder="e.g. Knee Replacement or Right Diet"
          required
        />
        
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Rating</span>
          <select
            name="rating"
            defaultValue={5}
            className="mt-1.5 w-full rounded-xl glass border border-border bg-background px-4 py-3 text-sm focus:border-gold outline-none transition-colors"
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n} className="bg-card text-foreground">
                {n} Stars {n === 5 ? "— Excellent" : ""}
              </option>
            ))}
          </select>
        </label>
        
        <InputField
          name="text"
          label="Tell us about your experience"
          isTextArea
          rows={4}
          placeholder="Share your recovery story and how our team helped you..."
          required
        />
        
        <button
          type="submit"
          className="rounded-full grad-primary text-primary-foreground px-7 py-3 text-sm font-semibold justify-self-end hover:scale-[1.03] transition-transform shadow-elegant cursor-pointer mt-2"
        >
          Submit Review
        </button>
      </form>
    </Reveal>
  );
}

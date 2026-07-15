import Reveal from "./Reveal";

export default function SectionTitle({
  eyebrow, title, subtitle, align = "center",
}: { eyebrow?: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold ${align === "center" ? "" : ""}`}>
          <span className="h-px w-8 bg-gold" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-gradient">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}

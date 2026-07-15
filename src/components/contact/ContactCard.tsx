"use client";

import React from "react";
import Reveal from "@/components/site/Reveal";

interface ContactCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
  delay?: number;
}

export default function ContactCard({
  icon: Icon,
  title,
  body,
  delay = 0,
}: ContactCardProps) {
  return (
    <Reveal direction="left" delay={delay}>
      <div className="glass rounded-2xl p-5 hover-lift flex items-start gap-4 border border-border">
        <div className="h-11 w-11 rounded-xl grad-gold text-gold-foreground grid place-items-center shrink-0 shadow-elegant">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-gold font-semibold">{title}</div>
          <div className="mt-1.5 text-sm font-medium text-foreground/95 break-all">{body}</div>
        </div>
      </div>
    </Reveal>
  );
}

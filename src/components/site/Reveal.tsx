"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

type AnimationDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  direction?: AnimationDirection;
  className?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 30,
  x = 30,
  direction = "up",
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-15px" });

  // Compute initial states
  const getInitialState = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y };
      case "down":
        return { opacity: 0, y: -y };
      case "left":
        return { opacity: 0, x };
      case "right":
        return { opacity: 0, x: -x };
      case "scale":
        return { opacity: 0, scale: 0.92 };
      case "fade":
      default:
        return { opacity: 0 };
    }
  };

  // Compute animate states
  const getAnimateState = () => {
    if (!inView) return getInitialState();
    
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "scale":
        return { opacity: 1, scale: 1 };
      case "fade":
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={getAnimateState()}
      transition={{
        duration,
        delay,
        ease: [0.2, 0.8, 0.2, 1], // Premium cinematic ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

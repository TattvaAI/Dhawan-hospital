'use client';

import dynamic from 'next/dynamic';

// This is a Client Component — ssr: false is allowed here per Next.js docs
const Hero3DCanvas = dynamic(
  () => import('@/components/Hero3D').then((m) => ({ default: m.Hero3D })),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent" />
    ),
  }
);

export function HeroSection() {
  return <Hero3DCanvas />;
}

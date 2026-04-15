import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Harpreet Singh',
    location: 'Chandigarh',
    text: 'After years of struggle with knee pain, Dr. Dhawan gave me a second chance at life. I was walking normally within 6 weeks of surgery. The care I received was truly world-class.',
    rating: 5,
    procedure: 'Knee Replacement',
  },
  {
    name: 'Rekha Gupta',
    location: 'Ambala',
    text: 'The staff here is incredibly warm and professional. The facility is immaculate and the entire booking process was seamless. My hip replacement outcome exceeded all expectations.',
    rating: 5,
    procedure: 'Hip Replacement',
  },
  {
    name: 'Mohammed Ashraf',
    location: 'Patiala',
    text: 'I drove 3 hours to come here and it was absolutely worth it. The level of expertise and the technology they use is unmatched in the region. Highly recommend.',
    rating: 5,
    procedure: 'Spinal Surgery',
  },
  {
    name: 'Sunita Verma',
    location: 'Ambala Cantt',
    text: 'My daughter had an eye orthoptics issue that multiple doctors had failed to resolve. Dr. Sharma fixed it completely in just two sessions. Miraculous.',
    rating: 5,
    procedure: 'Eye Orthoptics',
  },
  {
    name: 'Ramesh Kumar',
    location: 'Karnal',
    text: 'The AI chatbot on their website helped me understand my options at midnight. By next morning, I had an appointment booked. This hospital thinks of every detail.',
    rating: 5,
    procedure: 'General Consultation',
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-24 md:py-32 px-6 bg-card border-t border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Patient Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">Lives we&apos;ve transformed</h2>
        </div>

        {/* Scrollable row - mobile touch scroll */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6 scrollbar-hide">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[85vw] sm:w-80 lg:w-96 bg-background rounded-3xl border border-border/50 p-8 flex flex-col hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(t.rating).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed flex-1 mb-6 text-sm md:text-base">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  {t.procedure}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

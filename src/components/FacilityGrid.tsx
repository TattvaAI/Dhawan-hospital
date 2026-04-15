export function FacilityGrid() {
  const facilities = [
    {
      title: 'Advanced Operating Theatre',
      desc: 'HEPA-filtered, robot-assisted precision surgery suites',
      img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80',
      span: 'md:col-span-2',
    },
    {
      title: 'ICU & Recovery',
      desc: '24/7 monitored, Level 1 critical care',
      img: 'https://images.unsplash.com/photo-1516549655669-df64b68a8f61?w=600&q=80',
      span: '',
    },
    {
      title: 'Rehabilitation Centre',
      desc: 'Physiotherapy & rapid recovery protocols',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
      span: '',
    },
    {
      title: 'Digital Diagnostic Suite',
      desc: '3-Tesla MRI, CT Scan & Digital X-Ray onsite',
      img: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80',
      span: 'md:col-span-2',
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 px-6 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Our Infrastructure</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">World-class Facilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {facilities.map((f) => (
            <div
              key={f.title}
              className={`group relative rounded-3xl overflow-hidden h-72 md:h-80 ${f.span}`}
            >
              <img
                src={f.img}
                alt={f.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">{f.title}</h3>
                <p className="text-white/70 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

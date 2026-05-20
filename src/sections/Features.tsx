import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const features = [
  {
    number: '01',
    label: 'Stock Catalog',
    text: 'A curated catalogue that brings together designs crafted with both desirability and wearability in mind.',
    image: '/features/catalogue.png'
  },
  {
    number: '02',
    label: 'Custom/Bespoke',
    text: 'A dedicated made-to-order portal to conveniently define your jewellery requirements and manage bespoke creations.',
    image: '/features/bespoke.png'
  },
  {
    number: '03',
    label: 'Brand Growth Services',
    text: 'We support your jewelry business end-to-end—from branding and packaging to CAD and everything in between.',
    image: '/features/packaging.png'
  },
];

export const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.set('.feature-label-row', { y: 30, opacity: 0 });
      gsap.set('.feature-headline', { y: 30, opacity: 0 });
      gsap.set('.feature-card', { y: 30, opacity: 0 });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();

          gsap.timeline()
            .to('.feature-label-row', { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 })
            .to('.feature-headline', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.5')
            .to('.feature-card', { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' }, '-=0.6');
        },
        { threshold: 0.1 }
      );

      observer.observe(section);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full border-t border-[#e5e7eb]"
      style={{ background: '#FFFFFF', padding: 'clamp(72px, 8vw, 112px) 0' }}
    >
      <div className="px-8 lg:px-16 xl:px-24">

        {/* Section Header — same structure as Service label block */}
        <div className="feature-label-row mb-8">
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase' as const,
              color: '#6b7280',
            }}
          >
            Product & Service offering
          </span>
          {/* Gold accent line — matches Service's slide-line: 40px × 1px */}
          <div
            className="mt-4"
            style={{ width: '40px', height: '1px', background: '#E6552E' }}
          />
        </div>

        <h2
          className="feature-headline mb-16 lg:mb-20"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 400,
            color: '#1a1a1a',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: '640px',
          }}
        >
          Built for the modern<br />
          jewelry retailer.
        </h2>

        {/* Feature grid — gap-px divider using site border colour */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ background: '#e5e7eb' }}>
          {features.map((feature, i) => (
            <div
              key={feature.number}
              className="feature-card relative flex flex-col px-10 py-12 xl:px-14 xl:py-14 overflow-hidden cursor-default group"
              style={{
                background: hoveredIndex === i ? '#e5e7eb' : '#FFFFFF',
                transition: 'background 0.5s ease',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image with minimal opacity, increasing to full on hover */}
              <div
                className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out"
                style={{
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: hoveredIndex === i ? 1.0 : 0.04,
                }}
              />

              {/* Gold left accent on hover — same treatment as Service's left gradient */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  background: '#E6552E',
                  transform: hoveredIndex === i ? 'scaleY(1)' : 'scaleY(0)',
                  transformOrigin: 'top',
                  transition: 'transform 0.5s ease',
                  zIndex: 2
                }}
              />

              {/* Content wrapper — hides on hover to reveal the image clearly */}
              <div
                className="relative z-10 flex flex-col h-full transition-opacity duration-500 ease-in-out"
                style={{
                  opacity: hoveredIndex === i ? 0 : 1,
                }}
              >
                {/* Number only — icons removed as requested */}
                <div className="flex items-start mb-12">
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(40px, 4vw, 56px)',
                      fontWeight: 300,
                      lineHeight: 1,
                      color: hoveredIndex === i ? '#E6552E' : '#e5e7eb',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    {feature.number}
                  </span>
                </div>

                {/* 40px gold line — exactly matching Service's slide-line */}
                <div
                  style={{
                    width: '40px',
                    height: '1px',
                    background: '#E6552E',
                    marginBottom: '28px',
                    opacity: hoveredIndex === i ? 1 : 0.45,
                    transition: 'opacity 0.5s ease',
                  }}
                />

                {/* Label */}
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase' as const,
                    color: hoveredIndex === i ? '#E6552E' : '#6b7280',
                    transition: 'color 0.5s ease',
                    display: 'block',
                    marginBottom: '16px',
                  }}
                >
                  {feature.label}
                </span>

                {/* Body text — left border matching Service's description style */}
                <p
                  className="pl-4 border-l border-[#e5e7eb]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: hoveredIndex === i ? '#1a1a1a' : '#6b7280',
                    lineHeight: 1.8,
                    transition: 'color 0.5s ease',
                    flex: 1,
                  }}
                >
                  {feature.text}
                </p>

                {/* CTA — underline style matching Service's button exactly */}
                <div
                  className="mt-10"
                  style={{
                    opacity: hoveredIndex === i ? 1 : 0,
                    transform: hoveredIndex === i ? 'translateX(0)' : 'translateX(-8px)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                  }}
                >
                  <div className="flex items-center gap-4 text-[#E6552E] pb-2 border-b border-[#E6552E]/40 w-fit">
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase' as const,
                      }}
                    >
                      Discover More
                    </span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


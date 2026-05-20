import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
    { label: 'Independent jewelry retailers', desc: 'Single and multi-store operations looking for a reliable manufacturing backbone' },
    { label: 'Growing DTC jewelry brands', desc: 'Direct-to-consumer brands that need design and production without building it in-house' },
    { label: 'Multi-store regional chains', desc: 'Scaling retailers who need consistency, speed, and flexibility across their product lines' },
];

export const AboutUs = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const partnersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current?.children || [], {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });

            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power2.out'
            });

            gsap.from(partnersRef.current?.children || [], {
                scrollTrigger: {
                    trigger: partnersRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 md:py-32 px-8 md:px-16 lg:px-24 xl:px-32 bg-white overflow-hidden"
            id="about-us"
        >
            <div className="max-w-7xl mx-auto">

                {/* Main two-column layout */}
                <div className="flex flex-col md:flex-row items-start gap-16 lg:gap-24 mb-24 md:mb-32">

                    {/* Content Left */}
                    <div ref={textRef} className="w-full md:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <span className="text-[#E6552E] font-semibold tracking-[0.2em] text-sm uppercase">
                                Why We Exist
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight">
                                About <br /> Univ Diam
                            </h2>
                        </div>

                        <div className="space-y-6 text-[#6b7280] text-base font-light leading-relaxed">
                            <p>
                                Independent jewelry retailers are often caught between high design expectations and unreliable manufacturing. Timelines slip. Quality varies. And most manufacturers prioritize large-volume clients, leaving smaller brands without the support they deserve.
                            </p>
                            <p>
                                Univ Diam was built to change that.
                            </p>
                            <p>
                                We act as the <span className="text-[#1a1a1a] font-medium">design and manufacturing team</span> most retailers don't have in-house — delivering consistency, flexibility, and control across every stage of production through our{' '}
                                <span className="text-[#1a1a1a] font-medium">Design–Manufacture–Deliver</span> model.
                            </p>
                            <p>
                                We work closely with each partner, integrating into their design and production process rather than operating as a transactional vendor.
                            </p>
                        </div>
                    </div>

                    {/* Picture Right */}
                    <div
                        ref={imageRef}
                        className="w-full md:w-1/2 relative group"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
                            <img
                                src="/about-us.png"
                                alt="Univ Diam Craftsmanship"
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(to right, #FFFFFF 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, #FFFFFF 100%), linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 85%, #FFFFFF 100%)'
                                }}
                            />
                            <div className="absolute inset-4 border border-white/20 pointer-events-none" />
                        </div>
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#E6552E]/10 -z-10" />
                        <div className="absolute -top-8 -right-8 w-24 h-24 border-r border-t border-[#E6552E]/30 -z-10" />
                    </div>
                </div>

                {/* Who We Work With */}
                <div className="border-t border-[#e5e7eb] pt-16 md:pt-20">
                    <div className="mb-12">
                        <span
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '11px',
                                fontWeight: 600,
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                color: '#6b7280',
                            }}
                        >
                            Who we work with
                        </span>
                        <div className="mt-4" style={{ width: '40px', height: '1px', background: '#E6552E' }} />
                    </div>

                    <div ref={partnersRef} className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: '#e5e7eb' }}>
                        {partners.map((p) => (
                            <div key={p.label} className="bg-white px-8 py-10">
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: 'clamp(15px, 1.5vw, 18px)',
                                        fontWeight: 400,
                                        color: '#1a1a1a',
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {p.label}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '13px',
                                        fontWeight: 300,
                                        color: '#6b7280',
                                        lineHeight: 1.75,
                                    }}
                                >
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p
                        className="mt-10"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '13px',
                            fontWeight: 300,
                            color: '#6b7280',
                            fontStyle: 'italic',
                        }}
                    >
                        Whether you're building your first collection or scaling production, we adapt to your requirements.
                    </p>
                </div>

            </div>
        </section>
    );
};

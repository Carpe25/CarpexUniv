import { useEffect, useRef } from 'react'
import {
  Store,
  ShoppingCart,
  Sparkles,

} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  containerClass,
  sectionClass,
  headingClass,
  subheadingClass,
  eyebrowClass,
  bodyClass,
} from '../styles'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.portal-slide-left', {
        opacity: 0,
        x: -50,
        duration: 1.2,
        scrollTrigger: {
          trigger: portalRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.portal-slide-right', {
        opacity: 0,
        x: 50,
        duration: 1.2,
        scrollTrigger: {
          trigger: portalRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.clients-header', {
        opacity: 0,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: clientsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.client-card-animated', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.client-card-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main>
      <section id="hero" className="relative h-screen min-h-[620px] w-full overflow-hidden bg-neutral-950">
        <video
          className="h-full w-full object-cover"
          src="/hero.mp4"
          loop
          muted
          autoPlay
          playsInline
        />
      </section>

      <section id="about" ref={aboutRef} className={`overflow-hidden bg-white ${sectionClass}`}>
        <div className={`${containerClass} grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <div className="about-reveal max-w-md">
            <p className={`${eyebrowClass} mb-4`}>Who we are</p>
            <h2 className={headingClass}>About Univ Diam</h2>
          </div>

          <div className={`about-reveal max-w-[760px] ${bodyClass}`}>
            <p>
              Independent jewelry retailers often face inconsistent quality,
              delayed timelines, and limited flexibility from traditional
              manufacturers.
            </p>
            <p className="mt-7">
              Univ Diam was built to change that-acting as an extended design
              and manufacturing partner for modern retailers through our
              Design-Manufacture-Deliver model.
            </p>
            <p className="mt-7">
              We bring together custom design, curated production, and reliable
              delivery with the flexibility and support growing brands need.
            </p>
          </div>
        </div>
      </section>

      <section
        id="portal-preview"
        ref={portalRef}
        className={`w-full overflow-hidden bg-sand ${sectionClass}`}
      >
        <div
          className={`${containerClass} grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20`}
        >
          <div className="portal-slide-left flex max-w-[500px] flex-col items-start gap-8">
            <p className={eyebrowClass}>Retailer Portal</p>
            <h2 className={subheadingClass}>
              We simplify the jewelry ordering journey through a streamlined
              portal built for modern retailers.
            </h2>

            <Link
              to="https://app.univdiam.com/signup"
              className="hidden rounded-full bg-neutral-950 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-neutral-800 sm:inline-flex"
            >
              Join for Free
            </Link>
          </div>

          <div className="portal-slide-right flex w-full lg:justify-end">
            <img
              src="/Landing_Page.png"
              alt="Univ Diam retailer ordering portal"
            />
          </div>
        </div>
      </section>

      <section
        id="who-we-work-with"
        ref={clientsRef}
        className={`${containerClass} ${sectionClass} flex flex-col items-center`}
      >
        <div className="clients-header mb-14 flex max-w-3xl flex-col items-center gap-5 text-center lg:mb-16">
          <p className={eyebrowClass}>Partners</p>
          <h2 className={headingClass}>Who we work with?</h2>
          <p className="max-w-[860px] text-base leading-[1.7] text-neutral-600 sm:text-lg lg:text-xl">
            Working with modern retailers, independent brands, and growing
            jewelry businesses
          </p>
        </div>

        <div className="client-card-container grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <div className="client-card-animated flex min-h-[265px] cursor-default flex-col border border-neutral-200 bg-cream p-7 transition-colors duration-300 hover:bg-white lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center bg-black text-white">
              <Store className="h-5 w-5 stroke-[1.75]" />
            </div>
            <h3 className="mt-8 font-sans text-xl font-semibold leading-snug text-neutral-950">
              Independent Jewelry Retailers
            </h3>
            <p className="mt-4 text-sm leading-[1.65] text-neutral-600 sm:text-base">
              From sourcing to display, we help independent retailers with a
              curated stock, custom orders, and manufacturing support.
            </p>
          </div>

          <div className="client-card-animated flex min-h-[265px] cursor-default flex-col border border-neutral-200 bg-cream p-7 transition-colors duration-300 hover:bg-white lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center bg-black text-white">
              <ShoppingCart className="h-5 w-5 stroke-[1.75]" />
            </div>
            <h3 className="mt-8 font-sans text-xl font-semibold leading-snug text-neutral-950">
              E-Tail Jewelry Partners
            </h3>
            <p className="mt-4 text-sm leading-[1.65] text-neutral-600 sm:text-base">
              We power e-tailers with reliable sourcing, order management,
              delivery support with the flexibility to scale.
            </p>
          </div>

          <div className="client-card-animated flex min-h-[265px] cursor-default flex-col border border-neutral-200 bg-cream p-7 transition-colors duration-300 hover:bg-white lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center bg-black text-white">
              <Sparkles className="h-5 w-5 stroke-[1.75]" />
            </div>
            <h3 className="mt-8 font-sans text-xl font-semibold leading-snug text-neutral-950">
              Private Jewelry Concierge
            </h3>
            <p className="mt-4 text-sm leading-[1.65] text-neutral-600 sm:text-base">
              Bespoke commissions and custom manufacturing for jewelry
              consultants, influencers and industry professionals.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage

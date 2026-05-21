import { useEffect, useRef, useState } from 'react'
import {
  Store,
  ShoppingCart,
  Sparkles,
  ArrowRight,
  X,
  Check,
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const containerClass = 'mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-[86px]'
const sectionClass = 'py-[72px] lg:py-[96px]'
const headingClass =
  'text-[30px] font-medium leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[38px] lg:text-[46px]'
const eyebrowClass =
  'text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500'
const bodyClass = 'text-base leading-[1.7] text-neutral-600 sm:text-lg lg:text-[20px]'

const HomePage = () => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<HTMLDivElement>(null)

  const [email, setEmail] = useState('')
  const [portalStep, setPortalStep] = useState<'login' | 'dashboard'>('login')
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false)

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

  const handlePortalSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (email.trim()) {
      setPortalStep('dashboard')
    }
  }

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
            <p className={`${eyebrowClass} mb-4`}>About</p>
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
        className={`w-full overflow-hidden bg-[#decabe] ${sectionClass}`}
      >
        <div
          className={`${containerClass} grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20`}
        >
          <div className="portal-slide-left flex max-w-[500px] flex-col items-start gap-8">
            <p className={eyebrowClass}>Retailer Portal</p>
            <h2 className="text-[26px] font-medium leading-[1.25] tracking-[-0.04em] text-neutral-950 sm:text-[32px] lg:text-[36px]">
              We simplify the jewelry ordering journey through a streamlined
              portal built for modern retailers.
            </h2>

            <button
              type="button"
              onClick={() => setIsPortalModalOpen(true)}
              className="group flex items-center gap-3 rounded-full bg-neutral-950 px-8 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-neutral-800 sm:px-10"
            >
              Join for Free
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
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
          <div className="client-card-animated flex min-h-[265px] cursor-default flex-col border border-neutral-200 bg-[#f7f7f7] p-7 transition-colors duration-300 hover:bg-white lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center bg-black text-white">
              <Store className="h-5 w-5 stroke-[1.75]" />
            </div>
            <h3 className="mt-8 text-xl font-semibold leading-snug text-neutral-950">
              Independent Jewelry Retailers
            </h3>
            <p className="mt-4 text-sm leading-[1.65] text-neutral-600 sm:text-base">
              From sourcing to display, we help independent retailers with a
              curated stock, custom orders, and manufacturing support.
            </p>
          </div>

          <div className="client-card-animated flex min-h-[265px] cursor-default flex-col border border-neutral-200 bg-[#f7f7f7] p-7 transition-colors duration-300 hover:bg-white lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center bg-black text-white">
              <ShoppingCart className="h-5 w-5 stroke-[1.75]" />
            </div>
            <h3 className="mt-8 text-xl font-semibold leading-snug text-neutral-950">
              E-Tail Jewelry Partners
            </h3>
            <p className="mt-4 text-sm leading-[1.65] text-neutral-600 sm:text-base">
              We power e-tailers with reliable sourcing, order management,
              delivery support with the flexibility to scale.
            </p>
          </div>

          <div className="client-card-animated flex min-h-[265px] cursor-default flex-col border border-neutral-200 bg-[#f7f7f7] p-7 transition-colors duration-300 hover:bg-white lg:p-8">
            <div className="flex h-12 w-12 items-center justify-center bg-black text-white">
              <Sparkles className="h-5 w-5 stroke-[1.75]" />
            </div>
            <h3 className="mt-8 text-xl font-semibold leading-snug text-neutral-950">
              Private Jewelry Concierge
            </h3>
            <p className="mt-4 text-sm leading-[1.65] text-neutral-600 sm:text-base">
              Bespoke commissions and custom manufacturing for jewelry
              consultants, influencers and industry professionals.
            </p>
          </div>
        </div>
      </section>

      {isPortalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/70 p-4 backdrop-blur-md">
          <div className="relative flex w-full max-w-lg flex-col overflow-hidden border border-neutral-100 bg-white p-8 shadow-2xl lg:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 text-neutral-100 opacity-20">
              <Sparkles className="h-40 w-40" />
            </div>

            <div className="z-10 mb-6 flex items-center justify-between border-b border-neutral-100 pb-5">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-neutral-950"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
                </svg>
                <span className="font-serif text-sm font-medium uppercase tracking-[4px] text-neutral-950">
                  Retailer Portal
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsPortalModalOpen(false)
                  setPortalStep('login')
                }}
                className="p-1 text-neutral-400 transition-colors hover:text-neutral-900"
                aria-label="Close portal modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {portalStep === 'login' ? (
              <form onSubmit={handlePortalSubmit} className="z-10 flex flex-col gap-5">
                <div>
                  <h3 className="text-xl font-semibold leading-tight text-neutral-900">
                    Partner Sign In
                  </h3>
                  <p className="mt-1 text-xs font-light text-neutral-400">
                    Access inventory, request customized builds, or track
                    orders.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-semibold uppercase tracking-widest text-neutral-400">
                    Professional Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@retailer.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-neutral-300 py-2 text-xs text-neutral-950 transition-colors placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-neutral-950 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-neutral-800"
                >
                  Request Secure Access
                </button>
              </form>
            ) : (
              <div className="z-10 flex flex-col items-center justify-center gap-6 py-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-inner">
                  <Check className="h-6 w-6 stroke-[3]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold leading-tight text-neutral-900">
                    Access Granted
                  </h3>
                  <p className="max-w-sm text-xs font-light text-neutral-400">
                    A secure authentication token has been dispatched to{' '}
                    <strong>{email}</strong>.
                  </p>
                </div>
                <div className="max-w-xs rounded-sm border border-emerald-100 bg-emerald-50/50 p-4 text-[11px] font-medium tracking-wide text-emerald-800">
                  ✓ Logging in to Platinum Tier Retail Console...
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsPortalModalOpen(false)
                    setPortalStep('login')
                  }}
                  className="border border-neutral-200 px-6 py-2.5 text-[10px] uppercase tracking-widest text-neutral-500 transition-all duration-300 hover:bg-neutral-50"
                >
                  Finish Session
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

export default HomePage

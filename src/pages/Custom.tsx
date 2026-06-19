import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { trackEvent } from '../lib/analytics'
import {
  containerClass,
  sectionClass,
  heroHeadingClass,
  subheadingClass,
  eyebrowClass,
  btnPrimary,
} from '../styles'

const processSteps = [
  {
    title: 'Design Consultation',
    description: 'Submit your custom order request with references or sketches.',
  },
  {
    title: 'CAD Development',
    description: 'Receive a personalized quote and CAD render within 24–48 hours.',
  },
  {
    title: 'Production',
    description: 'Approve the design and quotation to begin production.',
  },
  {
    title: 'Delivery',
    description: 'Your piece is manufactured, quality checked, and delivered securely.',
  },
]

const Custom = () => {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      {/* HERO */}
      <section className="relative h-[440px] min-h-[440px] overflow-hidden bg-neutral-950 sm:h-[540px] lg:h-[560px]">
        <img
          src="/sketch.jpg"
          alt="Jewelry design sketches with pencils and ring drawings"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-neutral-950/40" />

        <div className={`${containerClass} relative z-10 flex h-full items-center`}>
          <h1 className={`${heroHeadingClass} max-w-[640px] text-white`}>
            Crafted
            <br />
            Around You.
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className={`bg-white ${sectionClass}`}>
        <div className={`${containerClass} max-w-[900px]`}>
          <p className={`${eyebrowClass} mb-4`}>Custom</p>

          <p className={`${subheadingClass} max-w-[720px]`}>
            Submit bespoke jewelry requests through our dedicated portal —
            designed to simplify personalized orders from concept to delivery.
          </p>
        </div>
      </section>

      {/* CRAFTSMANSHIP IMAGE */}
      {/* <section className="bg-white pb-8 sm:pb-12 lg:pb-16">
        <div className={`${containerClass}`}>
          <div className="overflow-hidden rounded-md">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            >
              <source
                src="https://www.pexels.com/download/video/6263163/"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section> */}
      <section className="bg-white pb-8 sm:pb-12 lg:pb-16">
        <div className={`${containerClass}`}>
          <div className="overflow-hidden rounded-md">

            <img src='/Custom 3.jpeg' />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={`bg-white ${sectionClass}`}>
        <div
          className={`${containerClass} grid gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24`}
        >
          <div>
            <p className={`${eyebrowClass} mb-4`}>Process</p>

            <h2 className={`${subheadingClass} max-w-[320px]`}>
              How your custom piece comes to life.
            </h2>
          </div>

          <ol className="flex flex-col">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-6 border-t border-neutral-200 py-7 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span className="text-2xl font-medium leading-none text-neutral-400">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="flex flex-col gap-1 max-w-[540px]">
                  <h3 className="text-base font-semibold tracking-[-0.01em] text-neutral-950 sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-[1.65] text-neutral-600 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PORTAL SHOWCASE */}
      <section className={`bg-mist ${sectionClass}`}>
        <div className={`${containerClass} flex flex-col items-center`}>
          <div className="relative w-full max-w-[860px] overflow-hidden">
            <img
              src="/Packaging.jpeg"
              alt="Univ Diam jewelry portal preview"
              className="aspect-[1.42] w-full object-contain"
            />
          </div>

          <p
            className={`${subheadingClass} mt-10 max-w-[680px] text-center lg:mt-12`}
          >
            From inquiry to creation — a portal built for bespoke jewelry
            experiences.
          </p>

          <Link to="https://app.univdiam.com/login" className={`${btnPrimary} mt-8`} target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('start_custom_order', { destination: 'order_portal' })}>
            Start a Custom Order
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Custom
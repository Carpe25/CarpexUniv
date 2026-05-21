import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {
  containerClass,
  sectionClass,
  heroHeadingClass,
  headingClass,
  subheadingClass,
  eyebrowClass,
  btnPrimary,
} from '../styles'

const processSteps = [
  'Submit your custom order request with references or sketches.',
  'Receive a personalized quote and CAD render within 24-48 hours.',
  'Approve the design and quotation to begin production.',
  'Your piece is manufactured, quality checked, and delivered securely in 2-3 weeks.',
]

const Custom = () => {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      {/* HERO */}
      <section className="relative h-[440px] min-h-[440px] overflow-hidden bg-sand sm:h-[540px] lg:h-[580px]">
        <img
          src="/Custom-Hero.png"
          alt="Jewelry design sketches with pencils and ring drawings"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-neutral-950/40" />

        <div
          className={`${containerClass} relative z-10 flex h-full items-center pt-16`}
        >
          <h1 className={`${heroHeadingClass} max-w-[430px] text-white`}>
            Crafted
            <br />
            Around You.
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className={`bg-white ${sectionClass}`}>
        <div className={`${containerClass} max-w-[900px]`}>
          <p className={`${eyebrowClass} mb-4`}>Custom Orders</p>

          <p className={`${subheadingClass} max-w-[720px]`}>
            Submit bespoke jewelry requests through our dedicated portal —
            designed to simplify personalized orders from concept to delivery.
          </p>
        </div>
      </section>

      {/* CRAFTSMANSHIP IMAGE */}
      <section className="bg-white pb-8 sm:pb-12 lg:pb-16">
        <div className="">
          <div className="overflow-hidden bg-mist">
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
      </section>

      {/* PROCESS */}
      <section className={`bg-white ${sectionClass}`}>
        <div
          className={`${containerClass} grid gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24`}
        >
          <div>
            <p className={`${eyebrowClass} mb-4`}>Process</p>

            <h2 className={`${headingClass} max-w-[320px]`}>
              How your custom piece comes to life.
            </h2>
          </div>

          <ol className="flex flex-col">
            {processSteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-6 border-t border-neutral-200 py-7 first:border-t-0 first:pt-0 last:pb-0"
              >
                <span className="text-2xl font-medium leading-none text-neutral-400">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="max-w-[540px] text-base leading-[1.6] tracking-[-0.01em] text-neutral-900 sm:text-lg">
                  {step}
                </span>
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
              src="/Landing_Page.png"
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

          <Link to="/#portal-preview" className={`${btnPrimary} mt-8`}>
            Start a Custom Order

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Custom
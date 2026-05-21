import { PenTool, Box, Gem, Truck } from 'lucide-react'

const processSteps = [
  { label: 'Design Consultation', Icon: PenTool },
  { label: 'CAD Development', Icon: Box },
  { label: 'Production', Icon: Gem },
  { label: 'Delivery', Icon: Truck },
]

const containerClass = 'mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-[86px]'
const sectionClass = 'py-[72px] lg:py-[96px]'
const eyebrowClass =
  'text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500'

const Custom = () => {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="relative h-[440px] min-h-[440px] overflow-hidden bg-[#d8ccc2] sm:h-[540px] lg:h-[560px]">
        <img
          src="/Custom Hero.jpg"
          alt="Jewelry design sketches with pencils and ring drawings"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/40" />

        <div className={`${containerClass} relative z-10 flex h-full items-center pt-17`}>
          <h1 className="max-w-[430px] text-[48px] font-medium leading-[0.98] tracking-[-0.06em] text-white sm:text-[68px] lg:text-[72px]">
            Crafted
            <br />
            Around You.
          </h1>
        </div>
      </section>

      <section className={`bg-white ${sectionClass}`}>
        <div className={containerClass}>
          <p className={`${eyebrowClass} mb-5`}>Custom Orders</p>
          <p className="max-w-[720px] text-[26px] font-medium leading-[1.35] tracking-[-0.04em] text-neutral-950 sm:text-[32px] lg:text-[38px]">
            Place custom made-to-order requests through our dedicated portal, making it easy to specify your jewelry
            needs and manage bespoke orders seamlessly.
          </p>
        </div>
      </section>

      <section className="h-[280px] overflow-hidden bg-neutral-200 sm:h-[360px] lg:h-[430px]">
        <img
          src="/Custom 3.jpeg"
          alt="Jeweler polishing a custom diamond ring"
          className="h-full w-full object-cover"
        />
      </section>

      <section className={`bg-white ${sectionClass}`}>
        <div className={`${containerClass} grid gap-12 lg:grid-cols-[0.44fr_0.56fr] lg:gap-20`}>
          <div>
            <p className={`${eyebrowClass} mb-4`}>Process</p>
            <h2 className="text-[30px] font-medium leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[38px] lg:text-[46px]">
              How it works?
            </h2>
          </div>

          <ul className="space-y-4 text-base font-medium leading-[1.55] tracking-[-0.03em] text-neutral-900 sm:text-lg">
            <li className="flex gap-5">
              <span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
              <span>Submit your custom order request with references or sketches.</span>
            </li>
            <li className="flex gap-5">
              <span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
              <span>Receive a personalized quote and CAD render within 24-48 hours.</span>
            </li>
            <li className="flex gap-5">
              <span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
              <span>Approve the design and quotation to begin production.</span>
            </li>
            <li className="flex gap-5">
              <span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
              <span>Your piece is manufactured, quality checked, and delivered securely.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[#decabe] py-14 lg:py-20">
        <div className={`${containerClass} grid gap-10 sm:grid-cols-2 lg:grid-cols-4`}>
          {processSteps.map(({ label, Icon }) => (
            <div key={label} className="flex flex-col gap-4">
              <Icon className="h-6 w-6 stroke-[1.5] text-neutral-950" />
              <p className="text-[22px] font-medium leading-tight tracking-[-0.04em] text-neutral-900 sm:text-[24px] lg:text-[26px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-[72px] lg:py-[96px]">
        <div className="mx-auto max-w-[930px] px-6 sm:px-10">
          <div className="relative overflow-hidden bg-[#f2eee8]">
            <img
              src="/Custom 2.jpeg"
              alt="Univ Diam jewelry packaging with a diamond ring"
              className="aspect-[1.42] w-full object-cover"
            />
            <svg
              className="absolute bottom-8 right-7 h-8 w-8 text-white"
              viewBox="0 0 48 48"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M24 4L29.6 18.4L44 24L29.6 29.6L24 44L18.4 29.6L4 24L18.4 18.4L24 4Z" />
            </svg>
          </div>

          <p className="mx-auto mt-14 max-w-[680px] text-center text-[28px] font-medium leading-[1.2] tracking-[-0.04em] text-neutral-950 sm:text-[36px] lg:mt-16 lg:text-[40px]">
            From inquiry to creation -
            <br />
            a portal built for bespoke jewelry experiences.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Custom

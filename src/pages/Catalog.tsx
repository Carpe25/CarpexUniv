import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {
  containerClass,
  sectionClass,
  heroHeadingClass,
  subheadingClass,
  eyebrowClass,
} from '../styles'

const catalogPieces =
  [
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003141150&attachment_id=1105156000005094121',
      alt: 'Diamond bracelet',
    },
    {
      src: './product2.jpeg',
      alt: 'Diamond',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003557320&attachment_id=1105156000003557324',
      alt: 'Diamond floral necklace on warm satin',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000004248091&attachment_id=1105156000004364179',
      alt: 'Diamond jewelry close-up',
    },
    {
      src: './product1.jpeg',
      alt: 'Diamond eternity ring on satin',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003055187&attachment_id=1105156000003548586',
      alt: 'Luxury diamond jewelry',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003108149&attachment_id=1105156000003108154',
      alt: 'Diamond necklace',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003087221&attachment_id=1105156000004861287',
      alt: 'Diamond floral necklace on white satin',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003549184&attachment_id=1105156000005094059',
      alt: 'Diamond pendant',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003108005&attachment_id=1105156000003260346',
      alt: 'Diamond',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003137035&attachment_id=1105156000005094004',
      alt: 'Diamond ring detail',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003108517&attachment_id=1105156000004861217',
      alt: 'Diamond eternity ring on satin',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003141250&attachment_id=1105156000004861037',
      alt: 'Elegant diamond jewelry',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000004248534&attachment_id=1105156000004364036',
      alt: 'Diamond eternity ring on satin',
    },
    {
      src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003557284&attachment_id=1105156000004182003',
      alt: 'Diamond earrings',
    },
  ]

const CatalogMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let loopWidth = track.scrollWidth / 2
    let x = 0
    let dragging = false
    let pointerId: number | null = null
    let lastPointerX = 0
    const speed = 60

    const wrap = (value: number) => {
      if (loopWidth <= 0) return value
      return ((value % loopWidth) - loopWidth) % loopWidth
    }

    const apply = () => gsap.set(track, { x })

    const tick = (_time: number, deltaTime: number) => {
      if (!dragging) {
        x = wrap(x - (speed * deltaTime) / 1000)
        apply()
      }
    }

    const onPointerDown = (e: PointerEvent) => {
      dragging = true
      pointerId = e.pointerId
      lastPointerX = e.clientX
      track.setPointerCapture(e.pointerId)
      track.style.cursor = 'grabbing'
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging || e.pointerId !== pointerId) return
      x = wrap(x + (e.clientX - lastPointerX))
      lastPointerX = e.clientX
      apply()
    }

    const endDrag = (e: PointerEvent) => {
      if (e.pointerId !== pointerId) return
      dragging = false
      pointerId = null
      track.style.cursor = 'grab'
    }

    const onResize = () => {
      loopWidth = track.scrollWidth / 2
      x = wrap(x)
      apply()
    }

    gsap.ticker.add(tick)
    track.addEventListener('pointerdown', onPointerDown)
    track.addEventListener('pointermove', onPointerMove)
    track.addEventListener('pointerup', endDrag)
    track.addEventListener('pointercancel', endDrag)
    window.addEventListener('resize', onResize)

    return () => {
      gsap.ticker.remove(tick)
      track.removeEventListener('pointerdown', onPointerDown)
      track.removeEventListener('pointermove', onPointerMove)
      track.removeEventListener('pointerup', endDrag)
      track.removeEventListener('pointercancel', endDrag)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div
        ref={trackRef}
        className="flex min-h-[520px] cursor-grab touch-pan-y select-none gap-px lg:min-h-[640px]"
      >
        {[...catalogPieces, ...catalogPieces].map((piece, index) => (
          <article
            key={`${piece.src}-${index}`}
            className="flex h-[520px] w-[80vw] shrink-0 items-center justify-center sm:h-[640px] lg:h-[700px] sm:w-[33.333vw]"
          >
            <div className="h-full w-full p-4 sm:p-6">
              <img
                src={piece.src}
                alt={piece.alt}
                draggable={false}
                className="h-full w-full object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const Catalog = () => {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="relative h-[700px] min-h-[440px] overflow-hidden bg-neutral-950 sm:h-[540px] lg:h-[560px]">
        <img
          src="/catalog-new-2.png"
          alt="Diamond necklace on satin fabric"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/40" />

        <div className={`${containerClass} relative z-10 flex h-full items-center pt-1`}>
          <h1 className={`${heroHeadingClass} max-w-[760px] text-white`}>
            Ready  <br />
            to Retail.
          </h1>
        </div>
      </section>

      <section className={`bg-white ${sectionClass}`}>
        <div className={`${containerClass} grid gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:gap-20 items-start`}>
          <div className="max-w-[690px]">
            <p className={`${eyebrowClass} mb-4`}>Catalog</p>

            <p className={`${subheadingClass} max-w-[720px]`}>
              A curated catalog that brings
              together everyday classics with
              the latest in-demand jewelry styles.
            </p>
          </div>

          {/* <div className="max-w-[590px] pt-1">
            <ul className="space-y-7 text-base leading-[1.7] text-neutral-600 sm:text-lg lg:text-[19px]">
              <li className="flex items-start gap-4">
                <span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                <span>
                  Curated ready collections balancing everyday classics with the
                  latest in-demand jewelry styles.
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                <span>
                  Digital catalog with live pricing, seamless ordering,
                  customizable options, and no MOQ requirements.
                </span>
              </li>
            </ul>
          </div> */}
        </div>
      </section>

      <CatalogMarquee />

      {/* Showcase the Catalog */}
      <section className="border-t border-neutral-100 bg-white py-20 sm:py-24 lg:py-28">
        <div className={`${containerClass} flex flex-col items-center`}>
          <div className="mb-20 text-center">
            <p className={`${eyebrowClass} mb-4`}>Service</p>
            <h2 className="text-[28px] font-medium leading-[1.2] tracking-[-0.01em] text-neutral-950 sm:text-[34px] lg:text-[40px]">
              Showcase the Catalog
            </h2>

            {/* <p className="mt-3 text-base text-neutral-500 sm:text-lg">
              How can you use the catalog in your retail journey
            </p> */}
          </div>

          <div className="grid w-full grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-8 lg:gap-16">
            {/* Live Inventory */}
            <div className="group flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-50 transition-colors duration-300 group-hover:bg-neutral-100/80">
                <svg
                  className="h-9 w-9 text-neutral-800 transition-transform duration-300 group-hover:scale-105"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="3" width="20" height="13" rx="1.5" />
                  <path d="M9 21h6M12 16v5" />
                  <line x1="2" y1="7" x2="22" y2="7" />
                  <line x1="8" y1="7" x2="8" y2="16" />
                  <rect x="11" y="9" width="3" height="2" rx="0.5" />
                  <rect x="16" y="9" width="3" height="2" rx="0.5" />
                  <rect x="11" y="13" width="3" height="2" rx="0.5" />
                  <rect x="16" y="13" width="3" height="2" rx="0.5" />
                </svg>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] text-neutral-950 sm:text-xl">
                Live Inventory
              </h3>

              <p className="mt-3 max-w-[280px] text-sm leading-[1.65] text-neutral-500 sm:text-base">
                ⁠In-stock designs ready to showcase in your store or ship for next day delivery.
              </p>
            </div>

            {/* Digital Catalog */}
            <div className="group flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-50 transition-colors duration-300 group-hover:bg-neutral-100/80">
                <svg
                  className="h-9 w-9 text-neutral-800 transition-transform duration-300 group-hover:scale-105"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                  <line x1="15" y1="3" x2="15" y2="21" />
                </svg>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] text-neutral-950 sm:text-xl">
                Digital Catalog
              </h3>

              <p className="mt-3 max-w-[280px] text-sm leading-[1.65] text-neutral-500 sm:text-base">
                Share products with live retail pricing in configurable metal and diamond quality options.
              </p>
            </div>

            {/* Sample Product Line */}
            <div className="group flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-50 transition-colors duration-300 group-hover:bg-neutral-100/80">
                <svg
                  className="h-9 w-9 text-neutral-800 transition-transform duration-300 group-hover:scale-105"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 14c0-2.2-1.8-4-4-4s-4 1.8-4 4c0 3 2 4.5 4 4.5s4-1.5 4-4.5z" />
                  <path d="M6 20h12a2 2 0 0 0 2-2c0-3-3.5-4-8-4s-8 1-8 4a2 2 0 0 0 2 2z" />
                  <path
                    d="M9.5 12.5a3.5 3.5 0 0 0 5 0"
                    strokeWidth="1.2"
                  />
                  <circle cx="12" cy="15" r="1.2" fill="currentColor" />
                </svg>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em] text-neutral-950 sm:text-xl">
                Sample Product Line
              </h3>

              <p className="mt-3 max-w-[280px] text-sm leading-[1.65] text-neutral-500 sm:text-base">
                Display curated designs of classics and designer jewelry without high overhead costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Pricing, Customizable Section */}
      <section className="w-full">
        {/* Top Banner Image */}
        <div className="w-full overflow-hidden">
          <img
            src="/new catalog.jpeg"
            alt="Diamond floral necklace on white satin"
            className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center justify-center bg-sand px-6 py-20 text-center sm:py-24">
          <h2 className="max-w-[850px] font-sans text-[24px] font-medium leading-[1.35] tracking-[-0.015em] text-neutral-950 sm:text-[34px] lg:text-[38px]">
            Real-Time Pricing, Seamless Ordering <br className="hidden sm:inline" />
            & Fully Customizable — No MOQ
          </h2>

          <div className="mt-8 sm:mt-10">
            <a
              href="https://app.univdiam.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-8 py-3.5 text-[13px] font-medium tracking-[0.05em] text-white transition-all duration-300 hover:bg-neutral-800 hover:scale-[1.03] active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              VIEW THE CATALOG
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Catalog
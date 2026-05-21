import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {
  containerClass,
  sectionClass,
  heroHeadingClass,
  subheadingClass,
  eyebrowClass,
} from '../styles'

const catalogPieces = [
  {
    src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003557320&attachment_id=1105156000003557324',
    alt: 'Diamond floral necklace on warm satin',
  },
  {
    src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003108517&attachment_id=1105156000004861217',
    alt: 'Diamond eternity ring on satin',
  },
  {
    src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003108005&attachment_id=1105156000003260346',
    alt: 'Diamond',
  },
  {
    src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003087221&attachment_id=1105156000004861287',
    alt: 'Diamond floral necklace on white satin',
  },
  {
    src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003108517&attachment_id=1105156000004861217',
    alt: 'Diamond eternity ring on satin',
  },
  {
    src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003108005&attachment_id=1105156000003260346',
    alt: 'Diamond',
  },
  {
    src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003557320&attachment_id=1105156000003557324',
    alt: 'Diamond floral necklace on warm satin',
  },
  {
    src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003108517&attachment_id=1105156000004861217',
    alt: 'Diamond eternity ring on satin',
  },
  {
    src: 'https://catalog.carpediam.in/api/image-proxy?module=Product_Variants&id=1105156000003108005&attachment_id=1105156000003260346',
    alt: 'Diamond',
  },
];

const CatalogMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // The track renders catalogPieces twice, so one loop = half the width.
    let loopWidth = track.scrollWidth / 2
    let x = 0
    let dragging = false
    let pointerId: number | null = null
    let lastPointerX = 0
    const speed = 60 // px per second of auto-scroll

    const wrap = (value: number) => {
      if (loopWidth <= 0) return value
      // keep x within (-loopWidth, 0] for a seamless loop
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
    <section className="relative overflow-hidden bg-white">
      <div
        ref={trackRef}
        className="flex min-h-[420px] cursor-grab touch-pan-y select-none gap-px bg-neutral-200 lg:min-h-[520px]"
      >
        {[...catalogPieces, ...catalogPieces].map((piece, index) => (
          <article
            key={`${piece.src}-${index}`}
            className="flex min-h-[360px] w-[80vw] shrink-0 items-center justify-center overflow-hidden bg-mist sm:min-h-[520px] sm:w-[33.333vw]"
          >
            <img
              src={piece.src}
              alt={piece.alt}
              draggable={false}
              className="h-full w-full object-cover"
            />
          </article>
        ))}
      </div>
    </section>
  )
}

const Catalog = () => {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="relative h-[440px] min-h-[440px] overflow-hidden bg-neutral-950 sm:h-[540px] lg:h-[560px]">
        <img
          src="/Catalog Hero.jpg"
          alt="Diamond necklace on satin fabric"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/40" />

        <div className={`${containerClass} relative z-10 flex h-full items-center pt-17`}>
          <h1 className={`${heroHeadingClass} max-w-[760px] text-white`}>
            Ready to Retail.
          </h1>
        </div>
      </section>

      <section className={`bg-white ${sectionClass}`}>
        <div className={`${containerClass} grid gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:gap-20`}>
          <div className="max-w-[690px]">
            <p className={`${eyebrowClass} mb-4`}>Catalog</p>
            <p className={subheadingClass}>
              A curated catalog that brings together designs crafted with both
              desirability and wearability in mind.
            </p>
          </div>

          <div className="max-w-[590px] pt-1 text-base leading-[1.7] text-neutral-600 sm:text-lg lg:pt-0 lg:text-[20px]">
            <p>
              Curated catalog with latest designs, customizable options, and
              flexible ordering with no MOQ requirements.
            </p>
          </div>
        </div>
      </section>

      <CatalogMarquee />

    </main>
  )
}

export default Catalog

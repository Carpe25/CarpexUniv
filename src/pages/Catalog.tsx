const catalogPieces = [
  {
    src: '/Catalog Hero.jpg',
    alt: 'Diamond floral necklace on warm satin',
    bg: 'bg-white',
    imageClass: 'h-full w-full object-cover object-[23%_50%]',
  },
  {
    src: '/jewelry_piece.png',
    alt: 'Diamond eternity ring on satin',
    bg: 'bg-[#f1f1f1]',
    imageClass: 'h-full w-full object-cover',
  },
  {
    src: '/Catalog 2.jpg',
    alt: 'Diamond floral necklace on white satin',
    bg: 'bg-[#fbfaf6]',
    imageClass: 'h-full w-full object-cover object-[62%_50%]',
  },
]

const containerClass = 'mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-[86px]'
const sectionClass = 'py-[72px] lg:py-[96px]'
const eyebrowClass =
  'text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500'

const Catalog = () => {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="relative h-[440px] min-h-[440px] overflow-hidden bg-neutral-950 sm:h-[540px] lg:h-[560px]">
        <img
          src="/Catalog Hero.jpg"
          alt="Diamond necklace on satin fabric"
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-neutral-950/40" />

        <div className={`${containerClass} relative z-10 flex h-full items-center pt-17`}>
          <h1 className="max-w-[760px] text-[48px] font-medium leading-[0.98] tracking-[-0.06em] text-white sm:text-[68px] lg:text-[72px]">
            Ready to Retail.
          </h1>
        </div>
      </section>

      <section className={`bg-white ${sectionClass}`}>
        <div className={`${containerClass} grid gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:gap-20`}>
          <div className="max-w-[690px]">
            <p className={`${eyebrowClass} mb-5`}>Catalog</p>
            <p className="text-[26px] font-medium leading-[1.35] tracking-[-0.04em] text-neutral-950 sm:text-[32px] lg:text-[38px]">
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

      <section className="relative overflow-hidden bg-white">
        <div className="grid min-h-[420px] grid-cols-1 gap-px bg-white sm:grid-cols-3 lg:min-h-[520px]">
          {catalogPieces.map((piece) => (
            <article
              key={piece.src}
              className={`${piece.bg} flex min-h-[360px] items-center justify-center overflow-hidden sm:min-h-[520px]`}
            >
              <img
                src={piece.src}
                alt={piece.alt}
                className={piece.imageClass}
              />
            </article>
          ))}
        </div>


      </section>

      <section className="bg-white py-[72px] lg:py-[96px]">
        <div className={`${containerClass} grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-end lg:gap-20`}>
          <div>
            <p className={`${eyebrowClass} mb-4`}>The Collection</p>
            <h2 className="text-[30px] font-medium leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[38px] lg:text-[46px]">
              Stocked for modern retail.
            </h2>
          </div>

          <div className="overflow-hidden bg-[#f4f1ed]">
            <img
              src="/Catalog 2.jpg"
              alt="Diamond floral necklace on white satin"
              className="aspect-[1880/541] w-full object-cover grayscale"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Catalog

import {
  containerClass,
  sectionClass,
  heroHeadingClass,
  headingClass,
  eyebrowClass,
  bodyClass,
} from '../styles'

const teamMembers = [
  {
    name: 'Girish Jain',
    title: 'Director of Strategy',
    image: '/team/girish.jpg',
  },
  {
    name: 'Rushabh Mehta',
    title: 'Director of Strategy',
    image: '/team/rushabh.jpg',
  },
]

const About = () => {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="relative h-[440px] min-h-[440px] overflow-hidden bg-neutral-950 sm:h-[540px] lg:h-[560px]">
        <img
          src="/Custom 3.jpeg"
          alt="Jeweler crafting a diamond ring by hand"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/50" />

        <div className={`${containerClass} relative z-10 flex h-full items-center pt-17`}>
          <h1 className={`${heroHeadingClass} max-w-[640px] text-white`}>
            About us
          </h1>
        </div>
      </section>

      <section className={`bg-white ${sectionClass}`}>
        <div className={`${containerClass} grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <div className="max-w-md">
            <p className={`${eyebrowClass} mb-4`}>Our Story</p>
            <h2 className={headingClass}>The Story</h2>
          </div>

          <div className={`max-w-[760px] ${bodyClass}`}>
            <p>
              Independent jewelry retailers often face inconsistent quality,
              delayed timelines, and limited flexibility from traditional
              manufacturers.
            </p>
            <p className="mt-7">
              Univ Diam was built to change that — acting as an extended design
              and manufacturing partner for modern retailers through our
              Design–Manufacture–Deliver model.
            </p>
            <p className="mt-7">
              We bring together custom design, curated production, and reliable
              delivery with the flexibility and support growing brands need.
            </p>
          </div>
        </div>
      </section>

      <section className={`bg-mist ${sectionClass}`}>
        <div className={`${containerClass} flex flex-col items-center`}>
          <div className="mb-14 flex flex-col items-center gap-4 text-center lg:mb-16">
            <p className={eyebrowClass}>The Team</p>
            <h2 className={headingClass}>The people behind Univ Diam</h2>
          </div>

          <div className="grid w-full max-w-[760px] grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
            {teamMembers.map((member) => (
              <article key={member.name} className="flex flex-col">
                <div className="aspect-[4/5] w-full overflow-hidden bg-cream">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.01em] text-neutral-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-neutral-500">
                  {member.title}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
import {
  containerClass,
  sectionClass,
  heroHeadingClass,
  subheadingClass,
  eyebrowClass,
  bodyClass,
} from '../styles'

// interface TeamMember {
//   name: string
//   title: string
//   image: string
// }

// const teamMembers: TeamMember[] = [
//   {
//     name: "Girish Jain",
//     title: "Founder",
//     image: "/girish-jain.jpg"
//   },
//   {
//     name: "Rushabh Doshi",
//     title: "Founder",
//     image: "/rushabh-doshi.jpg"
//   }
// ]


const About = () => {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="relative h-[440px] min-h-[440px] overflow-hidden bg-neutral-950 sm:h-[540px] lg:h-[560px]">
        <img
          src="/office.png"
          alt="Jeweler crafting a diamond ring by hand"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/50" />

        <div className={`${containerClass} relative z-10 flex h-full items-center`}>
          <h1 className={`${heroHeadingClass} max-w-[640px] text-white`}>
            A New <br />
            Beginning.
          </h1>
        </div>
      </section>

      <section className={`bg-white ${sectionClass}`}>
        <div className={`${containerClass} grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <div className="max-w-md">
            <p className={`${eyebrowClass} mb-4`}>Our Story</p>
            <h2 className={subheadingClass}>The Foundation of Univ Diam</h2>
          </div>

          <div className={`max-w-[760px] ${bodyClass}`}>
            <p>
              Univ Diam was born from an organic connection between Rushabh and Girish, who met in 2019, and instantly aligned on passion, purpose, and a vision for the evolving jewelry industry.  At the time, Rushabh came from 10+ years of experience handling complex logistics and jewelry distribution for majors, wholesalers, and marketplaces.  Girish came from 10+ years of experience servicing independent jewelry stores across the United States, in a multi-generational family business founded in1978.
            </p>
            <p className="mt-7">
              While embracing our heritage and those that came before us, we are mindful of the rapidly changing world we live in.  Today, Rushabh manages manufacturing and operations of the India office in Mumbai.  Girish manages sales and distribution of the USA office in Pittsburgh.
            </p>
          </div>
        </div>
      </section>

      <section className={`bg-mist ${sectionClass}`}>
        <div className={`${containerClass} flex flex-col items-center`}>
          {/* <div className="mb-14 flex flex-col items-center gap-4 text-center lg:mb-16">
            <p className={eyebrowClass}>OUR VISION</p>
            <h2 className={subheadingClass}>To set the standard for operational excellence in fine jewelry production — becoming the most trusted end-to-end partner for independent jewelry retailers.</h2>
          </div> */}

          {/* <div className="grid w-full max-w-[760px] grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
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
          </div> */}
          <div className='w-full rounded-md overflow-hidden'>
            <img src="/rushabh x girish.jpeg" alt="" />
            <div className='mt-10 max-w-[1000px] text-center mx-auto lg:mt-12'>
              <h2 className={subheadingClass}>To set the standard for operational excellence in fine jewelry production — becoming the most trusted end-to-end partner for independent jewelry retailers.</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Scale, Shield, Clock, ArrowLeft, ArrowUp } from 'lucide-react'
import { ArrowUp } from 'lucide-react'
import { containerClass, sectionClass } from '../styles'

const sections = [
  { id: 'introduction', label: '1. Terms of Use' },
  { id: 'copyright', label: '2. Copyright & Intellectual Property' },
  { id: 'trademarks', label: '3. Trademarks' },
  { id: 'registration', label: '4. Accounts & Passwords' },
  { id: 'disclaimer', label: '5. Disclaimers & Warranties' },
  { id: 'product-info', label: '6. Product Information' },
  { id: 'links', label: '7. External Links' },
  { id: 'liability', label: '8. Limitation of Liability' },
  { id: 'applicable-law', label: '9. Applicable Law' },
]

const TermsofService = () => {
  const [activeSection, setActiveSection] = useState('introduction')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    const handleScroll = () => {
      // Toggle back-to-top button
      setShowScrollTop(window.scrollY > 400)

      // Identify which section is in view
      const scrollPosition = window.scrollY + 200
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 100 // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveSection(id)
    }
  }

  return (
    <main className="min-h-screen bg-cream text-neutral-900 selection:bg-neutral-950 selection:text-white">
      {/* Premium Hero / Header Section */}
      {/* <section className="relative border-b border-neutral-200/60 bg-cream py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(#decabe_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className={`${containerClass} relative z-10 flex flex-col items-center text-center`}>
          <Link
            to="/"
            className="group mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-300 hover:text-neutral-950"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950/5 mb-4 text-neutral-950">
            <Scale className="h-6 w-6" />
          </div>
          
          <h1 className="text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-neutral-950 sm:text-[48px] lg:text-[56px] max-w-2xl font-serif">
            Terms of Use
          </h1>
          
          <div className="mt-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Effective Date: May 27, 2026
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5" />
              Universal Diamonds
            </span>
          </div>
        </div>
      </section> */}

      {/* Two-Column Premium Layout */}
      <section className={`${sectionClass} bg-white`}>
        <div className={`${containerClass} grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16`}>

          {/* Sticky Navigation Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-neutral-400">
                Navigation
              </span>
              <nav className="flex flex-col border-l border-neutral-100 py-1">
                {sections.map((sec) => {
                  const isActive = activeSection === sec.id
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`text-left text-sm py-2.5 pl-4 -ml-[1px] border-l transition-all duration-300 ${isActive
                        ? 'border-neutral-950 text-neutral-950 font-medium scale-[1.02] origin-left'
                        : 'border-transparent text-neutral-500 hover:text-neutral-900'
                        }`}
                    >
                      {sec.label}
                    </button>
                  )
                })}
              </nav>

              <div className="mt-8 rounded-2xl bg-cream p-6 border border-neutral-200/50">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-950 mb-2">
                  Need Clarification?
                </h4>
                <p className="text-xs leading-[1.6] text-neutral-500 mb-4">
                  If you have questions regarding these terms, contact our support team.
                </p>
                <a
                  href="mailto:hello@univdiam.com"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-neutral-800"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </aside>

          {/* Reading Document Column */}
          <article className="max-w-[780px] prose prose-neutral lg:prose-lg text-neutral-700">

            {/* Section: Introduction */}
            <section id="introduction" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                1. Terms of Use
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p>
                  Please carefully read the following Terms of Use before using the{' '}
                  <a
                    href="https://www.universaldiamonds.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950"
                  >
                    www.universaldiamonds.net
                  </a>{' '}
                  web site (the “Site”). By accessing this Site, you agree to be bound by these Terms of Use.
                </p>
                <p>
                  These Terms of Use may be updated from time to time. Accordingly, you should check the date of the Terms of Use (which appear at the end of this document or as stated above) and review any changes since the last version. If at any time you do not agree to these Terms of Use, please do not use this Site.
                </p>
              </div>
            </section>

            {/* Section: Copyright */}
            <section id="copyright" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                2. Copyright & Intellectual Property
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p>
                  All content included in the Site, such as text, graphics, logos, button icons, images, audio clips and software, is the property of Universal Diamonds or its content suppliers and protected by U.S. and international copyright laws.
                </p>
                <p>
                  The compilation (meaning the collection, arrangement and assembly) of all content on the Site is the exclusive property of Universal Diamonds and protected by U.S. and international copyright laws. All software used on the Site is the property of Universal Diamonds or its software suppliers and protected by U.S. and international copyright laws.
                </p>
                <div className="p-5 rounded-2xl bg-cream border border-neutral-200/50 my-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                    Authorized Permitted Use
                  </span>
                  <p className="text-sm text-neutral-600 leading-[1.6]">
                    Permission is granted to electronically copy and print hard copy portions of the Site for the sole purpose of placing an order on the Site or using the Site as a shopping resource. Any other use, including the reproduction, modification, distribution, transmission, republication, display or performance, of the content of the Site is strictly prohibited.
                  </p>
                </div>
              </div>
            </section>

            {/* Section: Trademarks */}
            <section id="trademarks" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                3. Trademarks
              </h2>
              <div className="text-base leading-[1.8]">
                <p>
                  All trademarks, logos, service marks and trade names are proprietary to Universal Diamonds or other respective owners that have granted the Site the right and license to use such intellectual property. Unauthorized use of these marks is strictly prohibited.
                </p>
              </div>
            </section>

            {/* Section: Registration */}
            <section id="registration" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                4. Accounts & Passwords
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p>
                  If you register and create an account on the Site you agree to be responsible for:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-neutral-600 my-4">
                  <li>Maintaining the confidentiality of passwords or other account identifiers which you choose, and</li>
                  <li>All activities that occur under such password or account identifiers.</li>
                </ol>
                <p>
                  You agree to notify Universal Diamonds immediately of: (i) any loss of your password or other account identifiers and (ii) any unauthorized use of your password or other account identifiers.
                </p>
                <p className="text-neutral-500 italic text-sm">
                  Universal Diamonds shall not be responsible or liable, directly or indirectly, in any way for any loss or damage of any kind incurred as a result of, or in connection with, your failure to comply with this section of the Terms of Use.
                </p>
              </div>
            </section>

            {/* Section: Disclaimer */}
            <section id="disclaimer" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                5. Disclaimers & Warranties
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p>
                  The information, services, products offered for sale and materials contained in and/or advertised on the Site, including, without limitation, text, graphics and links, are provided on an “As Is” basis with no warranty.
                </p>
                <div className="p-6 rounded-2xl bg-neutral-950 text-white my-6 border border-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-3">
                    Warranty Disclaimer
                  </span>
                  <p className="text-sm font-semibold tracking-wide leading-[1.7] text-neutral-200">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, Universal Diamonds AND ITS SUPPLIERS DISCLAIM ALL REPRESENTATIONS AND WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO SUCH INFORMATION, SERVICES, PRODUCTS AND MATERIALS, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, FREEDOM FROM COMPUTER VIRUS AND IMPLIED WARRANTIES ARISING FROM COURSE OF DEALING OR COURSE OF PERFORMANCE.
                  </p>
                </div>
                <p>
                  In addition, Universal Diamonds and its suppliers do not represent or warrant that the information accessible via the Site is accurate, complete or current. We are not responsible for typographical errors. Price and availability information is subject to change without notice.
                </p>
              </div>
            </section>

            {/* Section: Product Information */}
            <section id="product-info" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                6. Product Information
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p>
                  In some cases, merchandise displayed on the Site may not be available. The prices displayed on the Site are quoted in U.S. dollars and are valid and effective only in the United States.
                </p>
                <p>
                  The particular technical specifications and settings of your computer and its display could affect the accuracy of its display of the colors of products offered on the Site.
                </p>
              </div>
            </section>

            {/* Section: Links */}
            <section id="links" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                7. External Links
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p>
                  This Site may contain links to Web sites other than our own. Universal Diamonds does not assume any responsibility for those sites and provides those links solely for the convenience of our visitors.
                </p>
                <p>
                  Universal Diamonds does not control the content of these sites and takes no responsibility for their content, nor should it be implied that Universal Diamonds endorses or otherwise recommends such sites or the products or services offered.
                </p>
              </div>
            </section>

            {/* Section: Liability */}
            <section id="liability" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                8. Limitation of Liability
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 my-6 shadow-sm">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-3">
                    Liability Limitation
                  </span>
                  <p className="text-sm font-semibold tracking-wide leading-[1.7] text-neutral-800">
                    IN NO EVENT SHALL Universal Diamonds OR ANY OF ITS AFFILIATED ENTITIES OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, EVEN IF Universal Diamonds HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, WHETHER IN AN ACTION, UNDER CONTRACT, NEGLIGENCE OR ANY OTHER THEORY, ARISING OUT OF OR IN CONNECTION WITH THE USE, INABILITY TO USE OR PERFORMANCE OF THE INFORMATION, SERVICES, PRODUCTS AND MATERIALS AVAILABLE FROM THE SITE.
                  </p>
                </div>
                <p className="text-sm text-neutral-500 leading-[1.6]">
                  These limitations shall apply notwithstanding any failure of essential purpose or the existence of any limited remedy. Because some jurisdictions do not allow limitations on how long an implied warranty lasts, or the exclusion or limitation of liability for consequential or incidental damages, the above limitations may not apply to you.
                </p>
              </div>
            </section>

            {/* Section: Applicable Law */}
            <section id="applicable-law" className="scroll-mt-28 mb-8">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                9. Applicable Law
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p>
                  The laws of the State of Pennsylvania will govern these Terms of Use without giving effect to any principles of conflict of law. Any dispute arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Pennsylvania.
                </p>
              </div>
            </section>

          </article>
        </div>
      </section>

      {/* Footer Meta / Date */}
      <section className="bg-cream border-t border-neutral-200/60 py-12 text-center text-xs text-neutral-400">
        <div className={containerClass}>
          <p className="mb-2">Universal Diamonds &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
          <p>Document last updated: May 27, 2026</p>
        </div>
      </section>

      {/* Floating Back To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white shadow-lg transition-all duration-300 hover:bg-neutral-800 hover:scale-105 active:scale-95"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </main>
  )
}

export default TermsofService

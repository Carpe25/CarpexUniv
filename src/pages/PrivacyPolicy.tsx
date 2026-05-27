import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Shield, Clock, Lock, ArrowLeft, ArrowUp, Mail, MapPin } from 'lucide-react'
import { ArrowUp } from 'lucide-react'
import { containerClass, sectionClass } from '../styles'

const sections = [
  { id: 'commitment', label: '1. Privacy Commitment' },
  { id: 'traffic-data', label: '2. Traffic Data & IP Logging' },
  { id: 'cookies', label: '3. Cookies Policy' },
  { id: 'info-requests', label: '4. Information Requests' },
  { id: 'disclosures', label: '5. Third-Party Disclosures' },
]

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('commitment')
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
            <Lock className="h-5 w-5" />
          </div>
          
          <h1 className="text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-neutral-950 sm:text-[48px] lg:text-[56px] max-w-2xl font-serif">
            Privacy Policy
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
                  Privacy Concerns?
                </h4>
                <p className="text-xs leading-[1.6] text-neutral-500 mb-4">
                  For inquiries or requests regarding your personal data, reach out to our team.
                </p>
                <a
                  href="mailto:hello@univdiam.com"
                  className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-neutral-800"
                >
                  Email Privacy Team
                </a>
              </div>
            </div>
          </aside>

          {/* Reading Document Column */}
          <article className="max-w-[780px] prose prose-neutral lg:prose-lg text-neutral-700">

            {/* Section: Commitment */}
            <section id="commitment" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                1. Privacy Commitment
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p>
                  Universal Diamonds is committed to protecting your privacy. That is why we have adopted this Privacy Policy. This Privacy Policy is intended to describe how your personal information is processed and used, and we will make every effort to ensure that our activities keep within the spirit of this Privacy Policy.
                </p>
                <p>
                  Please note that by visiting and using{' '}
                  <a
                    href="https://www.universaldiamonds.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950"
                  >
                    universaldiamonds.net
                  </a>{' '}
                  or any other of our company websites, you are accepting the practices described in this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Section: Traffic Data */}
            <section id="traffic-data" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                2. Traffic Data & IP Logging
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p className="font-semibold text-neutral-900">
                  What Information is Universal Diamonds gathering about its visitors and how is it being used?
                </p>
                <p>
                  Every computer connected to the Internet is provided with a domain name (e.g. earthlink.net) and an IP Address (e.g. 192.164.13.145). When a visitor requests a page from within the Universal Diamonds website, our Web Servers automatically identify and log the HTTP request that is made to our Web Server.
                </p>
                <p>
                  This information reveals nothing personal about you. In fact, the only information that we automatically gather and log is as follows:
                </p>

                <div className="p-6 rounded-2xl bg-cream border border-neutral-200/50 my-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-3">
                    Automatically Gathered Data Points
                  </span>
                  <ul className="space-y-3.5 text-sm text-neutral-600">
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                      <span>The IP Address of the Site that may have Referred you.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                      <span>Your IP Address</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                      <span>The Web Page that you may have linked to us from, if any.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                      <span>The Product Identifier for Version and Make of Browser (e.g. Internet Explorer 4.5)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                      <span>The Operating System platform that you may be running (e.g. Macintosh or Windows)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                      <span>Search Words or Terms that are passed from a Search Engine (e.g. Google, Yahoo, or Lycos)</span>
                    </li>
                  </ul>
                </div>

                <p>
                  There is absolutely nothing special about the information just described, and the practice of collecting this data has been generally standardized by virtually every Web Server on the Internet today.
                </p>
                <p>
                  The purpose for this information is actually two-fold. One, Universal Diamonds has found it advantageous to examine visitor traffic in its aggregate, so that we can ensure maximum compatibility for the various Browsers and Operating Systems that visit our site.
                </p>
                <p>
                  Additionally, as any business should attest, it is our desire to generate greater amounts of visitor traffic. By analyzing visitation patterns, referring URLs and Search Engine terms, we can strategically enhance our exposure on the Internet.
                </p>
              </div>
            </section>

            {/* Section: Cookies */}
            <section id="cookies" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                3. Cookies Policy
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p className="font-semibold text-neutral-900">
                  What about Cookies?
                </p>
                <p>
                  Cookies are small pieces of data that are transferred to your computer’s hard drive through your Web browser from our Web Server. A cookie cannot read data from your hard disk or read cookie files that may have been created from other sites. The Universal Diamonds website utilizes cookies as a means of providing personalization features to our visitors. For example, we utilize cookies to remember settings that you may have made at our website.
                </p>
                <p>
                  You can choose whether to accept cookies by changing the settings of your browser. Typically, by accessing the browser’s help feature you can obtain information on how to prevent your browser from accepting all cookies or to notify you when a cookie is being sent. If you choose not to accept these cookies, your experience at our website and other websites may be diminished and some features may not work as intended.
                </p>
              </div>
            </section>

            {/* Section: Info Requests */}
            <section id="info-requests" className="scroll-mt-28 mb-16 pb-12 border-b border-neutral-100">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                4. Information Requests
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p className="font-semibold text-neutral-900">
                  What other information does Universal Diamonds request?
                </p>
                <p>
                  We may also request your e-mail address or mailing address for the purposes of conducting a survey, adding you to our mailing list, or by your request to have someone contact you for additional information. Whenever we request the identity of a visitor, we will clearly indicate the purpose of the inquiry before the information is requested.
                </p>

                <div className="p-6 rounded-2xl bg-neutral-950 text-white my-6 border border-neutral-800 shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-2">
                    Strict Contact Integrity
                  </span>
                  <p className="text-sm tracking-wide leading-[1.7] text-neutral-200">
                    We maintain a strict “No Spam” policy that means we do not intend to sell, rent, or otherwise give your e-mail address to a third-party, without your consent.
                  </p>
                </div>

                <p>
                  In addition, Universal Diamonds will not send you e-mail that you have not agreed to receive. If you are a member of our Mailing List, you will be contacted with announcements, news, account additions, and new products or services. You have the option of “Unsubscribing” from our Mailing List at any time, thereby disabling any further such e-mail communication from being sent to you.
                </p>
                <p>
                  If you wish to have specific communications with a member of the Universal Diamonds staff, you will be required to provide specific information that will be routed to the appropriate contact within Universal Diamonds.
                </p>
              </div>
            </section>

            {/* Section: Disclosures */}
            <section id="disclosures" className="scroll-mt-28 mb-8">
              <h2 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 sm:text-2xl mb-6 font-serif">
                5. Third-Party Disclosures
              </h2>
              <div className="text-base leading-[1.8] space-y-4">
                <p className="font-semibold text-neutral-900">
                  Will Universal Diamonds disclose the information collected to Third Parties?
                </p>
                <p>
                  Universal Diamonds will disclose your personal information or any of its log file information when required by law or in the good-faith belief that such actions are necessary to:
                </p>

                <ol className="list-decimal pl-5 space-y-3.5 text-neutral-600 my-4">
                  <li>Conform to the edicts of the law or comply with a legal process served on Universal Diamonds.</li>
                  <li>Protect and defend the rights or property of Universal Diamonds, or visitors of Universal Diamonds.</li>
                  <li>Identify persons who may be violating the law, the legal notice, or the rights of third parties.</li>
                  <li>Cooperate with the investigations of purported unlawful activities.</li>
                </ol>

                <p>
                  Universal Diamonds uses reasonable precautions to keep the information disclosed to us secure. Universal Diamonds reserves the right to transfer information in connection with the sale of all or part of Universal Diamonds capital stock or assets to any third party. Furthermore, we are not responsible for any breach of security or for any actions of any third parties that receive the information.
                </p>
                <p>
                  Universal Diamonds also provides “links” to a wide variety of other web sites on the Internet. We are not responsible for their Privacy Policies or how those web sites manage information about their users. We strongly urge you to check with those web sites to determine their privacy policy.
                </p>
                <p className="text-neutral-500 italic text-sm pt-4 border-t border-neutral-100">
                  Any changes to this Privacy Policy will be posted on this page so that you are always aware of the information that we collect, how we use it, and under what circumstances we disclose it.
                </p>
              </div>
            </section>

          </article>
        </div>
      </section>

      {/* Corporate Locations (Global Footprint) */}
      {/* <section className="bg-cream border-t border-neutral-200/60 py-16">
        <div className={containerClass}>
          <div className="mb-10 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400">
              Corporate Contacts
            </span>
            <h3 className="text-xl font-medium tracking-[-0.01em] text-neutral-950 mt-2 font-serif">
              Our Offices
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/50 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-3">
                Pittsburgh, United States
              </span>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
                  <span>
                    717 Liberty Avenue, Suite 207<br />
                    Pittsburgh, PA 15222
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-neutral-500" />
                  <a href="mailto:hello@univdiam.com" className="transition-colors hover:text-neutral-950">
                    hello@univdiam.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/50 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 block mb-3">
                Mumbai, India
              </span>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
                  <span>
                    802, 93 East building, Mahakali Caves Rd<br />
                    Andheri East, Mumbai, MH 400093
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-neutral-500" />
                  <a href="mailto:hello@univdiam.com" className="transition-colors hover:text-neutral-950">
                    hello@univdiam.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

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

export default PrivacyPolicy

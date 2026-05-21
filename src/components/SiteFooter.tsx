import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const containerClass = 'mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-[86px]'

const SiteFooter = () => {
  return (
    <footer
      id="contact"
      className="w-full border-t border-neutral-200 bg-[#f5f5f5] py-16 text-neutral-900 lg:py-20"
    >
      <div className={`${containerClass} grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-10`}>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <svg
              className="h-5 w-5 text-neutral-950"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
            </svg>
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-950">
              Univ Diam
            </span>
          </div>
          <p className="max-w-xs text-sm leading-[1.75] text-neutral-600">
            Providing premier design craftsmanship, responsive manufacturing,
            and high-fidelity logistics for modern jewelry brands worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-neutral-950">
            Navigation
          </span>
          <ul className="flex flex-col gap-3.5 text-sm text-neutral-600">
            <li>
              <Link to="/#hero" className="transition-colors duration-300 hover:text-neutral-950">
                Home Landing
              </Link>
            </li>
            <li>
              <Link to="/#about" className="transition-colors duration-300 hover:text-neutral-950">
                Our Philosophy
              </Link>
            </li>
            <li>
              <Link to="/#portal-preview" className="transition-colors duration-300 hover:text-neutral-950">
                Ordering Portal
              </Link>
            </li>
            <li>
              <Link to="/custom" className="font-medium transition-colors duration-300 hover:text-neutral-950">
                Bespoke Custom Builder
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-neutral-950">
            Headquarters
          </span>
          <ul className="flex flex-col gap-3.5 text-sm leading-[1.6] text-neutral-600">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-neutral-500" />
              <span>Suite 500, Luxury District, New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-neutral-500" />
              <a href="mailto:partners@univdiam.com" className="transition-colors hover:text-neutral-950">
                partners@univdiam.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-neutral-500" />
              <a href="tel:+12125550199" className="transition-colors hover:text-neutral-950">
                +1 (212) 555-0199
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-neutral-950">
            Stay Informed
          </span>
          <p className="text-sm leading-[1.75] text-neutral-600">
            Subscribe to get seasonal catalog releases, industry trend analyses,
            and workshop capacity reports.
          </p>
          <div className="flex items-center overflow-hidden border border-neutral-300 bg-white">
            <input
              type="email"
              placeholder="Your professional email"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => alert('Subscribed successfully to Univ Diam updates!')}
              className="bg-neutral-950 p-2.5 text-white transition-colors hover:bg-neutral-800"
              aria-label="Subscribe to newsletter"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className={`${containerClass} mt-14 flex flex-col items-center justify-between border-t border-neutral-200 pt-8 text-xs text-neutral-500 md:flex-row lg:mt-16`}>
        <span>© {new Date().getFullYear()} Univ Diam. All rights reserved.</span>
        <div className="mt-4 flex items-center gap-6 md:mt-0">
          <span className="cursor-pointer transition-colors hover:text-neutral-900">Privacy Policy</span>
          <span className="cursor-pointer transition-colors hover:text-neutral-900">Terms of Service</span>
          <span className="cursor-pointer transition-colors hover:text-neutral-900">Sitemap</span>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter

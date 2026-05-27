import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { containerClass } from '../styles'

const columnHeadingClass =
  'text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-950'

const SiteFooter = () => {
  return (
    <footer
      id="contact"
      className="w-full border-t border-neutral-200 bg-cream py-16 text-neutral-900 lg:py-20"
    >
      <div
        className={`${containerClass} grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10`}
      >
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <img src="/UD.png" alt="Univ Diam" className='h-10 w-auto' />
          </div>

          {/* <p className="max-w-xs text-sm leading-[1.75] text-neutral-600">
            Providing premier design craftsmanship, responsive manufacturing,
            and high-fidelity logistics for modern jewelry brands worldwide.
          </p> */}
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-5">
          <span className={columnHeadingClass}>Explore</span>

          <ul className="flex flex-col gap-3.5 text-sm text-neutral-600">
            <li>
              <Link
                to="/custom"
                className="transition-colors duration-300 hover:text-neutral-950"
              >
                Custom
              </Link>
            </li>

            <li>
              <Link
                to="/catalog"
                className="transition-colors duration-300 hover:text-neutral-950"
              >
                Catalog
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="transition-colors duration-300 hover:text-neutral-950"
              >
                Our Story
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="transition-colors duration-300 hover:text-neutral-950"
              >
                Contact
              </Link>
            </li>

            <li>
              <a
                href="https://app.univdiam.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-neutral-950"
              >
                Retailer Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-5">
          <span className={columnHeadingClass}>USA</span>

          <ul className="flex flex-col gap-3.5 text-sm leading-[1.6] text-neutral-600">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />

              <span>
                717 Liberty Avenue, Suite 207
                Pittsburgh, PA 15222
              </span>
            </li>

            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-neutral-500" />

              <a
                href="mailto:hello@univdiam.com"
                className="transition-colors hover:text-neutral-950"
              >
                hello@univdiam.com
              </a>
            </li>

            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-neutral-500" />

              <a
                href="tel:+14123919650"
                className="transition-colors hover:text-neutral-950"
              >
                +1 (412) 391-9650
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <span className={columnHeadingClass}>India</span>

          <ul className="flex flex-col gap-3.5 text-sm leading-[1.6] text-neutral-600">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />

              <span>
                802, 93 East Building,<br />
                Mahakali Caves Rd Andheri East, Mumbai, MH 400093
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`${containerClass} mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-xs text-neutral-500 md:flex-row lg:mt-16`}
      >
        <span>
          © {new Date().getFullYear()} Univ Diam. All rights reserved.
        </span>

        <div className="flex items-center gap-6">
          <Link
            to="/privacy"
            className="transition-colors hover:text-neutral-900"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms"
            className="transition-colors hover:text-neutral-900"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
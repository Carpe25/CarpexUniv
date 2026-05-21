import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Custom', to: '/custom' },
  { label: 'Catalog', to: '/catalog' },
  { label: 'Who are we?', to: '/#who-we-work-with' },
  { label: 'Contact us', to: '/#contact' },
]

const SiteNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHeroOverlay = pathname === '/' || pathname === '/custom' || pathname === '/catalog'

  const linkTone = isHeroOverlay ? 'text-white' : 'text-neutral-950'
  const buttonTone = isHeroOverlay
    ? 'bg-neutral-950 text-white hover:bg-neutral-800'
    : 'bg-neutral-950 text-white hover:bg-neutral-800'

  return (
    <header
      className={`absolute left-0 right-0 top-0 z-50 ${
        isHeroOverlay ? 'text-white' : 'border-b border-neutral-200 bg-white text-neutral-950'
      }`}
    >
      <div className="mx-auto flex h-17 max-w-[1280px] items-center justify-between px-6 sm:px-10 lg:px-[86px]">
        <Link
          to="/#hero"
          aria-label="Univ Diam home"
          className={`group inline-flex items-center ${linkTone}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <svg
            className="h-9 w-9 transition-opacity group-hover:opacity-75"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M24 4L29.6 18.4L44 24L29.6 29.6L24 44L18.4 29.6L4 24L18.4 18.4L24 4Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        <nav className="hidden items-center gap-10 text-[14px] font-medium tracking-[-0.03em] md:flex lg:gap-[72px]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`transition-opacity hover:opacity-70 ${linkTone}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/#portal-preview"
            className={`hidden rounded-full px-5 py-3 text-[10px] font-semibold transition-colors sm:inline-flex sm:px-6 ${buttonTone}`}
          >
            Get Started Free
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            className={`p-2 transition-opacity hover:opacity-70 md:hidden ${linkTone}`}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mx-4 border border-neutral-200 bg-white px-5 py-5 text-neutral-950 shadow-[0_24px_60px_rgba(0,0,0,0.12)] md:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-neutral-100 py-4 text-[15px] font-medium tracking-[-0.02em] last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/#portal-preview"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-5 flex w-full justify-center rounded-full bg-neutral-950 px-5 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Get Started Free
          </Link>
        </div>
      )}
    </header>
  )
}

export default SiteNavigation

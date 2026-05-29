import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Custom', to: '/custom' },
  { label: 'Catalog', to: '/catalog' },
  { label: 'Our Story', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const SiteNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-200/50 bg-white/85 text-neutral-950 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 sm:px-10 lg:px-[86px]">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Univ Diam home"
          className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-75 text-neutral-950"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="/Favicon32.svg"
            alt=""
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 text-[16px] tracking-[-0.01em] md:flex lg:gap-[72px]">
          {navItems.map((item) => {
            const isActive = pathname === item.to
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`transition-all ${isActive ? 'font-medium opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            to="https://app.univdiam.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-neutral-950 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-neutral-800 sm:inline-flex"
          >
            Retailer Login
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            className="p-2 transition-opacity hover:opacity-70 md:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-200/50 bg-white/95 px-5 py-5 text-neutral-950 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-md md:hidden">
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
            to="https://app.univdiam.com/login"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-5 flex w-full justify-center rounded-full bg-neutral-950 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-neutral-800"
          >
            Retailer Login
          </Link>
        </div>
      )}
    </header>
  )
}

export default SiteNavigation
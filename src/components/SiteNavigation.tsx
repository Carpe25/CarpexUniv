import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Custom', to: '/custom' },
  { label: 'Catalog', to: '/catalog' },
  { label: 'Who are we?', to: '/about' },
  { label: 'Contact us', to: '/contact' },
]

const SiteNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()

  const heroOverlayRoutes = ['/', '/custom', '/catalog', '/about', '/contact']
  const isHeroOverlay = heroOverlayRoutes.includes(pathname)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isTransparent = isHeroOverlay && !isScrolled
  const linkTone = isTransparent ? 'text-white' : 'text-neutral-950'

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-350 ${isScrolled
        ? 'bg-white/85 backdrop-blur-md border-b border-neutral-200/50 text-neutral-950'
        : isHeroOverlay
          ? 'bg-transparent text-white border-b border-transparent'
          : 'bg-cream border-b border-neutral-200 text-neutral-950'
        }`}
    >
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between px-6 sm:px-10 lg:px-[86px] transition-all duration-300 ${isScrolled ? 'h-17 sm:h-17' : 'h-20'
          }`}
      >
        <Link
          to="/#hero"
          aria-label="Univ Diam home"
          className={`group inline-flex items-center gap-2.5 transition-opacity hover:opacity-75 ${linkTone}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <img src="/Favicon32.svg" alt="" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-10 text-[16px] tracking-[-0.01em] md:flex lg:gap-[72px]">
          {navItems.map((item) => {
            const isActive = pathname === item.to
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`transition-all ${isActive ? 'opacity-100 font-medium' : 'opacity-70 hover:opacity-100'
                  } ${linkTone}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="https://app.univdiam.com/signup"
            className={`hidden rounded-full px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 sm:inline-flex ${isTransparent
              ? 'bg-white/10 hover:bg-white hover:text-neutral-950 text-white border border-white/20 backdrop-blur-md'
              : 'bg-neutral-950 hover:bg-neutral-800 text-white border border-transparent'
              }`}
          >
            Retailer Login
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
            to="https://app.univdiam.com/signup"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-5 flex w-full justify-center rounded-full bg-neutral-950 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-neutral-800"
          >
            Get Started Free
          </Link>
        </div>
      )}
    </header>
  )
}

export default SiteNavigation

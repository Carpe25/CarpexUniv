import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Custom from './pages/Custom'
import Catalog from './pages/Catalog'
import HashScroll from './components/HashScroll'
import SiteFooter from './components/SiteFooter'
import SiteNavigation from './components/SiteNavigation'
import About from './pages/About'
import Contact from './pages/Contact'
import TermsofService from './pages/TermsofService'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-neutral-900 selection:bg-neutral-950 selection:text-white">
      <HashScroll />
      <SiteNavigation />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsofService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <SiteFooter />
    </div>
  )
}

export default App

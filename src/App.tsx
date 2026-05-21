import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Custom from './pages/Custom'
import Catalog from './pages/Catalog'
import HashScroll from './components/HashScroll'
import SiteFooter from './components/SiteFooter'
import SiteNavigation from './components/SiteNavigation'

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-neutral-900 selection:bg-neutral-950 selection:text-white">
      <HashScroll />
      <SiteNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/catalog" element={<Catalog />} />
        {/* Fallback route for lookbook in case it gets created */}
        <Route path="/lookbook" element={<div className="min-h-screen pt-24">Lookbook Page Placeholder</div>} />
      </Routes>
      <SiteFooter />
    </div>
  )
}

export default App

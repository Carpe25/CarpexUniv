import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation.tsx';
import { AnimatedBackground } from './components/AnimatedBackground.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { TeamPage } from './pages/TeamPage.tsx';
import { LookbookPage } from './pages/Lookbook.tsx';
import { ContactSection } from './sections/ContactSection.tsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-[#1a1a1a] selection:bg-[#E6552E]/30 flex justify-center w-full">
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <AnimatedBackground />
      </div>

      <div className="relative w-full max-w-[1600px] bg-white shadow-2xl min-h-screen z-10">
        {/* Global Navigation */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-screen z-[100] pointer-events-none overflow-hidden">
          <Navigation />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={
            <div className="relative z-10 w-full">
              <TeamPage />
              <div className="relative w-full max-w-[1600px] z-20">
                <ContactSection />
              </div>
            </div>
          } />
          <Route path="/lookbook" element={
            <div className="relative z-10 w-full">
              <LookbookPage />
              <div className="relative w-full max-w-[1600px] z-20">
                <ContactSection />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

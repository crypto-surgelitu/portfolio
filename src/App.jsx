import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ReactGA from 'react-ga4'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/cursor/CustomCursor'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import CaseStudy from './pages/Works/CaseStudy'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const AppRoutes = () => {
  const location = useLocation()

  useEffect(() => {
    if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname })
    }
    window.scrollTo(0, 0)
  }, [location])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:slug" element={<CaseStudy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col selection:bg-gold selection:text-white">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow w-full relative z-10">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

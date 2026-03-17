import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/cursor/CustomCursor'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import CaseStudy from './pages/Works/CaseStudy'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './styles/globals.css'

function TestApp() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <main className="flex-grow w-full relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:slug" element={<CaseStudy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestApp />
  </StrictMode>,
)

import PageTransition from '../components/layout/PageTransition'
import PageMeta from '../components/seo/PageMeta'
import Hero from '../components/sections/Hero'
import AboutPreview from '../components/sections/AboutPreview'
import SelectedWorks from '../components/sections/SelectedWorks'
import ServicesPreview from '../components/sections/ServicesPreview'
import ContactCTA from '../components/sections/ContactCTA'

export default function Home() {
  return (
    <PageTransition>
      <PageMeta 
        title="Anthony Muhati | Full-Stack Developer – Mombasa, Kenya" 
        description="Full-stack web developer in Mombasa, Kenya. React, Node.js, M-Pesa integration, e-commerce specialist. Available for freelance." 
      />
      <Hero />
      <AboutPreview />
      <SelectedWorks />
      <ServicesPreview />
      <ContactCTA />
    </PageTransition>
  )
}

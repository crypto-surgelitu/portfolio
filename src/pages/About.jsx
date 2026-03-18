import PageTransition from '../components/layout/PageTransition'
import PageMeta from '../components/seo/PageMeta'
import BioSection from '../components/sections/about/BioSection'
import SkillsGrid from '../components/sections/about/SkillsGrid'
import JourneyTimeline from '../components/sections/about/JourneyTimeline'
import ServicesPreview from '../components/sections/ServicesPreview'
import DailyArsenal from '../components/sections/about/DailyArsenal'

export default function About() {
  return (
    <PageTransition>
      <PageMeta 
        title="About | Anthony Muhati – Full-Stack Developer" 
        description="Learn about Anthony Muhati, a full-stack developer from Mombasa, Kenya specialising in React and Node.js." 
        path="/about"
      />
      <div className="container mx-auto px-6 pt-20 pb-8 md:pb-12">
        <h1 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.8rem] font-bold mb-4 md:mb-6 tracking-tight">
          About <span className="text-gold italic">Me.</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed">
          Building complete, production-ready web applications for businesses across Kenya and beyond.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <BioSection />
        <SkillsGrid />
        <JourneyTimeline />
      </div>
      
      <ServicesPreview />
      <DailyArsenal />
    </PageTransition>
  )
}

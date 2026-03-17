import PageTransition from '../components/layout/PageTransition'
import PageMeta from '../components/seo/PageMeta'
import BioSection from '../components/sections/about/BioSection'
import SkillsGrid from '../components/sections/about/SkillsGrid'
import JourneyTimeline from '../components/sections/about/JourneyTimeline'
import DailyArsenal from '../components/sections/about/DailyArsenal'

export default function About() {
  return (
    <PageTransition>
      <PageMeta 
        title="About | Anthony Muhati – Full-Stack Developer" 
        description="Learn about Anthony Muhati, a full-stack developer from Mombasa, Kenya specialising in React and Node.js." 
        path="/about"
      />
      <div className="container mx-auto px-6 pt-20 pb-12">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          About <span className="text-gold italic">Me.</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed">
          Crafting digital experiences at the intersection of design and technology, with a focus on editorial aesthetics and functional code.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <BioSection />
        <SkillsGrid />
        <JourneyTimeline />
      </div>
      
      <DailyArsenal />
    </PageTransition>
  )
}

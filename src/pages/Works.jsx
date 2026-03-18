import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import PageMeta from '../components/seo/PageMeta'

// Full project data from Master Prompt
const allProjects = [
  {
    id: 1,
    title: 'Duka Store',
    category: 'E-Commerce / Web App',
    tech: ['React', 'Next.js', 'Supabase', 'Daraja API', 'SendGrid'],
    description: 'Kenyan multi-vendor marketplace with M-Pesa STK Push, Africa\'s Talking SMS, and real-time inventory management.',
    image: '/images/projects/duka-store-thumb.jpg', 
    color: 'from-orange-500/20 to-red-500/20',
    slug: 'duka-store'
  },
  {
    id: 2,
    title: 'Thrift & Carry',
    category: 'E-Commerce',
    tech: ['React', 'Supabase', 'Edge Functions', 'Tailwind CSS'],
    description: 'Luxury secondhand handbag shop in Mombasa. Secure admin panel via Supabase Edge Functions, image uploads.',
    image: '/images/projects/thrift-thumb.jpg',
    color: 'from-pink-500/20 to-rose-500/20',
    slug: 'thrift-and-carry'
  },
  {
    id: 3,
    title: 'BS1 Room Booking',
    category: 'Web App / Booking',
    tech: ['React+Vite', 'Node.js', 'Express', 'MySQL'],
    description: 'NGO room booking system with availability, JWT auth, post-booking star ratings, MySQL persistence.',
    image: '/images/projects/bs1-thumb.jpg',
    color: 'from-blue-500/20 to-indigo-500/20',
    slug: 'bs1-booking'
  },
  {
    id: 4,
    title: 'Salon Booking SaaS',
    category: 'SaaS',
    tech: ['React', 'Vite', 'Node.js', 'Tailwind'],
    description: 'Coming Soon: Appointment scheduling and staff management dashboard for local barbershops and salons.',
    image: '/images/projects/salon-thumb.jpg',
    color: 'from-emerald-500/20 to-teal-500/20',
    slug: 'salon-manager'
  }
]

const categories = ['All', 'E-Commerce', 'SaaS', 'API Integration']

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory)

  return (
    <PageTransition>
      <PageMeta 
        title="Projects & Works | Anthony Muhati" 
        description="Portfolio of web applications, e-commerce platforms and API integrations built by Anthony Muhati." 
        path="/works"
      />
      
      {/* Header section */}
      <div className="container mx-auto px-6 pt-20 pb-8 md:pb-12">
        <h1 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.8rem] font-bold mb-4 md:mb-6 tracking-tight">
          Selected <span className="text-gold italic">Works.</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-16">
          A curated showcase of digital experiences and functional design solutions crafted for the modern web.
        </p>

        {/* Filter Bar */}
        <div className="flex overflow-x-auto items-center gap-2 md:gap-4 mb-16 border-b border-border pb-6 whitespace-nowrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-foreground text-background shadow-lg scale-105' 
                  : 'bg-surface border border-border text-text-secondary hover:text-foreground hover:border-text-secondary'
              }`}
              data-cursor="hover"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group w-full"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Link to={`/works/${project.slug}`} className="block w-full h-full cursor-none" data-cursor="project">
                  <div className="flex flex-col h-full rounded-xl overflow-hidden border border-border bg-surface transition-colors duration-500 hover:border-gold/50">
                    
                    {/* Image Area */}
                    <div className="relative aspect-[16/9] w-full bg-background border-b border-border overflow-hidden group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-out`} />
                      
                      {/* Browser Mockup Frame */}
                      <div className={`absolute inset-x-8 top-8 bottom-0 bg-surface rounded-t-lg border-t border-x border-border shadow-2xl overflow-hidden translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-out ${
                        project.slug === 'salon-manager' ? 'border-dashed border-gold/30' : ''
                      }`}>
                        {/* Browser Header */}
                        <div className="h-6 bg-background/50 backdrop-blur-md border-b border-border flex items-center justify-between px-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-rose-500/30" />
                            <div className="w-2 h-2 rounded-full bg-amber-500/30" />
                            <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
                          </div>
                          <div className="w-24 h-1.5 bg-border rounded-full opacity-30" />
                          <div className="w-4 h-1.5 bg-border rounded-full opacity-30" />
                        </div>

                        {/* Content Placeholders */}
                        <div className="p-6 space-y-6 h-full bg-gradient-to-br from-surface to-background/30">
                          {project.slug === 'salon-manager' ? (
                             <div className="absolute inset-0 flex items-center justify-center">
                               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold/40 rotate-12">Coming Soon</span>
                             </div>
                          ) : (
                            <>
                              <div className="space-y-2">
                                <div className="w-1/4 h-2 bg-gold/10 rounded" />
                                <div className="w-1/2 h-6 bg-foreground/5 rounded" />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-video bg-foreground/3 rounded border border-border/50" />
                                <div className="aspect-video bg-foreground/3 rounded border border-border/50" />
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Reflection overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.01] pointer-events-none" />
                    </div>

                    {/* Content Area */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{project.category}</span>
                          <h3 className="text-2xl font-bold group-hover:text-gold transition-colors">{project.title}</h3>
                        </div>
                        <ArrowUpRight 
                          size={24} 
                          className={`text-text-secondary transition-all duration-300 ${
                            hoveredProject === project.id ? 'text-gold translate-x-1 -translate-y-1' : ''
                          }`} 
                        />
                      </div>
                      
                      <p className="text-sm text-text-secondary mb-6 flex-grow leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map(t => (
                          <span key={t} className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-background border border-border rounded text-text-secondary group-hover:border-gold/30 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-text-secondary">No projects found in this category.</p>
          </div>
        )}
      </div>
    </PageTransition>
  )
}

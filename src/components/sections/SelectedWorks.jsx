import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

// Mock data (matches the Works page data, but preview shows only 2)
const featuredProjects = [
  {
    id: 1,
    title: 'Duka Store',
    category: 'E-Commerce / Web App',
    description: 'Kenyan multi-vendor marketplace with M-Pesa STK Push, Africa\'s Talking SMS, and real-time inventory management.',
    image: '/images/projects/duka-store-thumb.jpg', 
    color: 'from-amber-500/20 to-orange-600/20',
    slug: 'duka-store'
  },
  {
    id: 2,
    title: 'Thrift & Carry',
    category: 'E-Commerce / UI Design',
    description: 'A premium second-hand fashion platform with a focus on editorial aesthetics and sustainable commerce.',
    image: '/images/projects/thrift-thumb.jpg',
    color: 'from-rose-500/20 to-pink-600/20',
    slug: 'thrift-and-carry'
  },
  {
    id: 3,
    title: 'BS1 Room Booking',
    category: 'Web App / Booking',
    description: 'NGO room booking system with real-time availability, JWT auth, and post-booking star ratings.',
    image: '/images/projects/bs1-thumb.jpg',
    color: 'from-slate-500/20 to-indigo-600/20',
    slug: 'bs1-booking'
  }
]

const categories = ['All', 'Web App', 'E-Commerce', 'UI Design']

export default function SelectedWorks() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects = activeCategory === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category.includes(activeCategory))

  // 3D Tilt handling
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 25 
    const rotateY = (centerX - x) / 25
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHoveredProject(null)
  }

  return (
    <section ref={containerRef} className="py-16 md:py-32">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Works</h2>
            <p className="text-text-secondary max-w-lg">
              A curated showcase of recent digital experiences and full-stack applications built for scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                  activeCategory === cat 
                    ? 'bg-gold border-gold text-black shadow-lg shadow-gold/20' 
                    : 'bg-surface/50 border-border text-text-secondary hover:border-gold/50'
                }`}
                data-cursor="hover"
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="group relative"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={`/works/${project.slug}`} data-cursor="project">
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface border border-border rounded-xl p-6 md:p-10 transition-colors hover:border-gold/50 cursor-none"
                  animate={{ 
                    rotateX: hoveredProject === project.id ? tilt.x : 0, 
                    rotateY: hoveredProject === project.id ? tilt.y : 0 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
                >
                  
                  {/* Thumbnail */}
                  <div className="lg:col-span-7 relative aspect-[16/9] w-full bg-background rounded-lg border border-border overflow-hidden group">
                    {/* Placeholder gradient matching project color */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-out`} />
                    
                    {/* Browser Mockup Frame */}
                    <div className="absolute inset-x-12 top-12 bottom-0 bg-surface rounded-t-lg border-t border-x border-border shadow-2xl overflow-hidden translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                      {/* Browser Header */}
                      <div className="h-8 bg-background/50 backdrop-blur-md border-b border-border flex items-center justify-between px-4">
                        <div className="flex gap-1.5 leading-none">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                        </div>
                        <div className="w-32 h-2.5 bg-border rounded-full opacity-30" />
                        <div className="w-6 h-2.5 bg-border rounded-full opacity-30" />
                      </div>

                      {/* Content Placeholders */}
                      <div className="p-8 space-y-8 h-full bg-gradient-to-br from-surface to-background/50">
                        <div className="space-y-3">
                          <div className="w-1/4 h-3 bg-gold/10 rounded" />
                          <div className="w-1/2 h-8 bg-foreground/5 rounded" />
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                          <div className="aspect-[4/5] bg-foreground/3 rounded border border-border/50" />
                          <div className="aspect-[4/5] bg-foreground/3 rounded border border-border/50" />
                          <div className="aspect-[4/5] bg-foreground/3 rounded border border-border/50" />
                        </div>
                      </div>
                    </div>

                    {/* Reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.01] pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-center">
                    <div className="inline-flex mb-6">
                      <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 bg-background border border-border rounded-full text-gold">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-gold transition-colors inline-flex items-center gap-4">
                      {project.title}
                      <ArrowUpRight 
                        size={32} 
                        className={`transition-all duration-300 ${
                          hoveredProject === project.id 
                            ? 'opacity-100 translate-x-0 translate-y-0 text-gold scale-110' 
                            : 'opacity-0 -translate-x-4 translate-y-4 text-text-secondary scale-100'
                        }`} 
                      />
                    </h3>
                    
                    <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>

                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

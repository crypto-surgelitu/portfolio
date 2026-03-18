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
    color: 'from-orange-500/20 to-red-500/20',
    slug: 'duka-store'
  },
  {
    id: 2,
    title: 'BS1 Room Booking',
    category: 'Web App / Booking',
    description: 'NGO room booking system with real-time availability, JWT auth, and post-booking star ratings.',
    image: '/images/projects/bs1-thumb.jpg',
    color: 'from-blue-500/20 to-indigo-500/20',
    slug: 'bs1-booking'
  }
]

export default function SelectedWorks() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState(null)

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
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
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
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/works" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground hover:bg-gold hover:text-white hover:border-gold transition-all group"
              data-cursor="hover"
            >
              View All Projects
              <span className="w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12">
          {featuredProjects.map((project, index) => (
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
                  <div className="lg:col-span-7 relative aspect-[16/9] w-full bg-background rounded-lg border border-border overflow-hidden">
                    {/* Placeholder gradient matching project color until real image */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:scale-110 transition-transform duration-700 ease-out`} />
                    
                    {/* Inner mock UI wrapper */}
                    <div className="absolute inset-x-8 top-8 bottom-0 bg-surface rounded-t border-t border-x border-border/50 shadow-2xl overflow-hidden translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                      <div className="h-6 bg-background border-b border-border/50 flex items-center px-4 gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-border" />
                        <span className="w-2 h-2 rounded-full bg-border" />
                        <span className="w-2 h-2 rounded-full bg-border" />
                      </div>
                      <div className="p-4 flex flex-col gap-3 opacity-30">
                        <div className="w-1/3 h-4 bg-border/50 rounded" />
                        <div className="w-full h-24 bg-border/30 rounded" />
                        <div className="w-2/3 h-4 bg-border/50 rounded" />
                      </div>
                    </div>
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

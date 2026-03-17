import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Decorative background glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-gold/5 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface border border-border text-gold mb-8"
        >
          <Mail size={32} />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Let's build something <br />
          <span className="italic text-gold">extraordinary.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-text-secondary max-w-2xl mx-auto mb-12"
        >
          Available for freelance opportunities. Whether you have a fully-fledged design or just a rough idea, I'm here to bring your digital vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/contact">
            <button 
              className="group relative inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105"
              data-cursor="button"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <ArrowRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gold transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Counter from '../../ui/Counter'

export default function BioSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-24">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <h2 className="text-sm font-semibold tracking-widest uppercase text-gold mb-6">The Journey So Far</h2>
          <div className="w-full aspect-square bg-surface border border-border rounded overflow-hidden relative group">
            <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/0 transition-colors duration-500" />
            <img 
              src="/images/anthony-muhati.jpg" 
              alt="Anthony Muhati in Mombasa" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-border"><span class="text-4xl font-bold opacity-10">AM</span></div>'
              }}
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-7 space-y-8 text-lg text-text-secondary leading-relaxed pt-8"
        >
          <p className="text-2xl text-foreground font-medium mb-6">
            "I'm a full-stack web developer based in Mombasa, Kenya."
          </p>
          <p>
            I build complete, production-ready web applications — from React frontends to Node.js APIs and M-Pesa payment integration.
          </p>
          <p>
            Working independently means I handle everything from initial architecture planning to final deployment. This holistic view of the development lifecycle ensures that performance, security, and user experience are baked in from day one, not added as an afterthought.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border mt-12 w-full max-w-md">
            <div>
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gold to-gold-light">
                <Counter value="10" suffix="+" />
              </p>
              <p className="text-sm font-medium tracking-wide mt-2">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gold to-gold-light">
                <Counter value="150" suffix="+" />
              </p>
              <p className="text-sm font-medium tracking-wide mt-2">Projects Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Counter from '../../ui/Counter'

export default function BioSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <h2 className="text-sm font-semibold tracking-widest uppercase text-gold mb-6">The Journey So Far</h2>
          <div className="w-full aspect-[4/5] bg-gradient-to-br from-surface to-background border border-border rounded-xl overflow-hidden relative group">
            {/* Corner Brackets */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-gold/40 z-10" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-gold/40 z-10" />

            {/* Large Initials Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[12rem] font-bold text-foreground/[0.03] select-none tracking-tighter">AM</span>
            </div>

            <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/0 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
               <div className="space-y-1">
                 <p className="text-[10px] uppercase tracking-widest text-gold font-bold">Mombasa, KE</p>
                 <h3 className="text-xl font-bold text-foreground">Anthony Muhati</h3>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-7 space-y-8 text-lg text-text-secondary leading-relaxed pt-8"
        >
          <div className="space-y-6">
            <p className="text-2xl text-foreground font-medium mb-6">
              "I'm a full-stack web developer based in Mombasa, Kenya."
            </p>
            <p>
              I build complete, production-ready web applications — from React frontends to Node.js APIs and M-Pesa payment integration.
            </p>
            <p>
              Working independently means I handle everything from initial architecture planning to final deployment. This holistic view of the development lifecycle ensures that performance, security, and user experience are baked in from day one, not added as an afterthought.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-border mt-12">
            <div>
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gold to-gold-light">
                <Counter value="5" suffix="+" />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold mt-2">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gold to-gold-light">
                <Counter value="12" suffix="+" />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold mt-2">Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gold to-gold-light">
                <Counter value="99" suffix="%" />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold mt-2">Satisfied</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-gold to-gold-light">
                <span className="font-mono">24/7</span>
              </p>
              <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold mt-2">Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { useMouseParallax } from '../../hooks/useMouseParallax'
import { useMagneticButton } from '../../hooks/useMagneticButton'
import { Link } from 'react-router-dom'

export default function Hero() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const { x, y, xReverse, yReverse } = useMouseParallax(20)
  
  const ctaRef = useRef(null)
  const { x: mX, y: mY } = useMagneticButton(ctaRef, 15)

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <motion.div 
        style={{ x: xReverse, y: yReverse }}
        className="absolute top-1/4 right-0 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-3xl -z-10 mix-blend-screen"
      />
      <motion.div 
        style={{ x, y }}
        className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-gold/5 rounded-full blur-3xl -z-10 mix-blend-screen"
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-flow-row md:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="col-span-1 md:col-span-7 flex flex-col items-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Available for new projects</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-6"
            >
              Building digital <br />
              <span className="text-gold italic pr-4">experiences</span> <br />
              that perform.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-12 leading-relaxed"
            >
              I'm a full-stack web developer based in Mombasa, Kenya. I build complete, production-ready web applications from design to deployment.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link to="/works">
                <motion.button 
                  ref={ctaRef}
                  style={{ x: mX, y: mY }}
                  className="group relative flex items-center justify-center gap-3 bg-gold text-white px-8 py-4 rounded font-semibold text-lg overflow-hidden transition-transform"
                  data-cursor="button"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gold-dark transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </motion.button>
              </Link>
              
              <a 
                href="/about" // Later link to actual CV PDF if provided
                className="group flex items-center gap-2 font-semibold text-foreground hover:text-gold transition-colors"
                data-cursor="hover"
              >
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Image/Visual Area */}
          <div className="col-span-1 md:col-span-5 relative hidden md:block">
            <motion.div 
              style={{ x: xReverse, y: yReverse }}
              className="relative aspect-[3/4] w-full max-w-md ml-auto rounded border border-border overflow-hidden group"
              data-cursor="hover"
            >
              {/* Fallback pattern if no image */}
              <div className="absolute inset-0 bg-surface flex flex-col justify-between p-8">
                <div className="space-y-4">
                  <div className="h-1 w-12 bg-gold" />
                  <div className="h-1 w-8 bg-text-secondary" />
                </div>
                
                <div className="text-right">
                  <h3 className="text-3xl font-bold tracking-tight text-foreground/20">AM.</h3>
                  <p className="font-mono text-sm tracking-widest text-gold/50 mt-2">EST. 2014</p>
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </motion.div>

            {/* Floating badge */}
            <motion.div 
              style={{ x, y }}
              className="absolute -bottom-6 -left-6 bg-surface/80 backdrop-blur-md border border-border p-6 rounded shadow-xl"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-text-secondary mb-1">Stack</p>
              <p className="font-bold text-foreground">React & Node.js</p>
              <div className="mt-4 flex gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="w-2 h-2 rounded-full bg-gold/50" />
                <span className="w-2 h-2 rounded-full bg-gold/20" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

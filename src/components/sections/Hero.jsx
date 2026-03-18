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
              className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.8rem] font-bold leading-[1.1] tracking-tight mb-6"
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
              className="relative aspect-[4/5] w-full max-w-md ml-auto rounded-xl border border-border bg-gradient-to-br from-surface to-background overflow-hidden group shadow-2xl"
              data-cursor="hover"
            >
              {/* Corner Brackets */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-gold/40 z-10" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-gold/40 z-10" />

              {/* Large Initials */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[12rem] font-bold text-foreground/[0.03] select-none tracking-tighter">AM</span>
              </div>

              {/* Content within Placeholder */}
              <div className="absolute inset-0 flex flex-col justify-between p-10 z-10">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-1 bg-gold/60" />
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold/60 font-medium">Verified Dev</div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Identity</p>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground">Anthony<br/><span className="text-gold">Muhati.</span></h3>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border border-background bg-surface flex items-center justify-center">
                          <div className="w-full h-full rounded-full bg-gold/10" />
                        </div>
                      ))}
                    </div>
                    <div className="h-[1px] flex-grow bg-border/50" />
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-gold text-black text-[10px] font-bold uppercase tracking-wider">
                    Available for Work
                  </div>
                </div>
              </div>
              
              {/* Overlay scanning line animation effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent h-1/2 w-full animate-[pulse_4s_infinite] pointer-events-none" />
            </motion.div>

            {/* Floating Info Badge */}
            <motion.div 
              style={{ x, y }}
              className="absolute -bottom-6 -left-6 bg-surface/90 backdrop-blur-xl border border-border p-6 rounded-xl shadow-2xl z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold">Status: Online</p>
              </div>
              <p className="font-bold text-lg text-foreground">Mombasa, KE</p>
              <p className="text-xs text-text-secondary mt-1">GMT+3 (East Africa Time)</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

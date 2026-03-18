import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Counter from '../ui/Counter'

const skills = [
  "React & Next.js", "Node & Express", "Tailwind CSS", 
  "Supabase / PostgreSQL", "M-Pesa API", "Framer Motion"
]

export default function AboutPreview() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-surface/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          
          <div className="col-span-1 md:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6 }}
              className="text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] font-bold mb-6 md:mb-8"
            >
              Code meets <br />
              <span className="text-gold italic">design.</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-lg text-text-secondary leading-relaxed"
            >
              <p>
                I bridge the gap between complex backend logic and seamless frontend interfaces. Living and working in Mombasa, I've spent the last few years mastering the modern web stack.
              </p>
              <p>
                My approach focuses on creating applications that don't just look premium, but feel incredibly fast and intuitive to use. From e-commerce platforms integrated with local payment gateways to enterprise booking systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10"
            >
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 font-medium text-foreground hover:text-gold transition-colors pb-1 border-b border-border hover:border-gold group"
                data-cursor="hover"
              >
                More about me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="col-span-1 md:col-span-6 md:col-start-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background border border-border p-6 md:p-12 rounded relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl -z-10 rounded-full" />
              
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gold mb-8">Core Arsenal</h3>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    <span className="font-medium text-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gold to-gold-light mb-2">
                    <Counter value="150" suffix="+" />
                  </p>
                  <p className="text-sm text-text-secondary font-medium tracking-wide">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gold to-gold-light mb-2">
                    <Counter value="10" suffix="+" />
                  </p>
                  <p className="text-sm text-text-secondary font-medium tracking-wide">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timeline = [
  {
    year: '2014 — Present',
    role: 'Freelance Full-Stack Developer',
    company: 'Self-Employed',
    description: 'Delivering end-to-end web applications for clients globally, focusing on React and Node.js ecosystems.'
  },
  {
    year: '2022',
    role: 'Lead Developer',
    company: 'Duka Store (Project)',
    description: 'Architected and built a full-featured e-commerce platform integrating local African payment gateways like M-Pesa.'
  },
  {
    year: '2021',
    role: 'Senior Frontend Engineer',
    company: 'BS1 Systems',
    description: 'Developed internal suite of enterprise tools including a complex room booking SaaS with JWT auth and availability matrices.'
  },
  {
    year: '2019',
    role: 'Web Developer',
    company: 'Thrift & Carry',
    description: 'Created a high-convertion storefront for a fashion brand, implementing a high-contrast brutalist design language.'
  }
]

export default function JourneyTimeline() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Journey</h2>
            <p className="text-text-secondary text-lg mb-8">
              A decade of building digital products, learning new technologies, and refining the craft.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center bg-foreground text-background font-bold px-6 py-3 rounded hover:bg-gold hover:text-white transition-colors"
              data-cursor="button"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <div className="md:col-span-7 md:col-start-6 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border/50" />
          
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="relative pl-10"
              >
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-background border-2 border-gold rounded-full" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-2xl font-bold">{item.role}</h3>
                  <span className="text-sm font-mono tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full w-fit">
                    {item.year}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-text-secondary mb-4">{item.company}</h4>
                <p className="text-text-secondary leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

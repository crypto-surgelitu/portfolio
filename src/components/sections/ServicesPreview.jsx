import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code2, PenTool, Database, Layout } from 'lucide-react'

const services = [
  {
    icon: <Code2 size={24} />,
    title: 'Web Application Development',
    desc: 'Custom-built, scalable React/Node applications designed for performance and security.'
  },
  {
    icon: <PenTool size={24} />,
    title: 'UI/UX Strategy',
    desc: 'User-centric interfaces that blend aesthetic beauty with seamless functionality.'
  },
  {
    icon: <Database size={24} />,
    title: 'API & Payment Integration',
    desc: 'Specialized in M-Pesa STK Push, Supabase, and robust backend API architecture.'
  },
  {
    icon: <Layout size={24} />,
    title: 'E-Commerce Solutions',
    desc: 'High-conversion storefronts and custom inventory management dashboards.'
  }
]

function ServiceCard({ service, index }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="relative h-[320px] w-full perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 bg-background border border-border p-8 rounded-xl flex flex-col backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-secondary group-hover:text-gold group-hover:bg-gold/10 transition-colors mb-6">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
          <p className="text-text-secondary leading-relaxed text-sm">
            {service.desc}
          </p>
          <div className="mt-auto text-xs font-bold text-gold/50 uppercase tracking-widest">
            Click to expand
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 bg-surface border border-gold/50 p-8 rounded-xl flex flex-col justify-center items-center text-center backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-bold mb-4 text-gold">{service.title} Details</h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            Contact me to discuss specific requirements for {service.title.toLowerCase()}. I ensure high performance, security, and scalability for every deliverable.
          </p>
          <Link 
            to="/contact"
            className="px-6 py-2 bg-gold text-white text-xs font-bold rounded uppercase tracking-widest hover:bg-gold-dark transition-colors"
          >
            Inquire Now
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default function ServicesPreview() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-surface/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-gold font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Expertise
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Premium Digital Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-secondary"
          >
            Providing end-to-end development services tailored to modern business needs, from conceptualizing architecture to final deployment.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 font-medium text-foreground hover:text-gold transition-colors uppercase tracking-widest text-sm"
            data-cursor="hover"
          >
            View pricing & details
            <span className="w-12 h-px bg-current ml-2" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

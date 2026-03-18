import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend Architecture',
    skills: [
      { name: 'React 18', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Vite', level: 95 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Framer Motion', level: 85 },
      { name: 'TypeScript', level: 80 }
    ]
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Express', level: 90 },
      { name: 'Supabase', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 90 },
      { name: 'RESTful API Design', level: 95 }
    ]
  },
  {
    title: 'Integrations & Tools',
    skills: [
      { name: 'Daraja M-Pesa API', level: 98 },
      { name: 'Africa\'s Talking (SMS)', level: 95 },
      { name: 'SendGrid/EmailJS', level: 92 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'Vercel Deployment', level: 90 },
      { name: 'Postman', level: 95 }
    ]
  }
]

function SkillBar({ name, level, isParentHovered }) {
  return (
    <div className="flex flex-col gap-2 group">
      <div className="flex justify-between items-end">
        <span className="text-text-secondary group-hover:text-foreground transition-colors font-medium">{name}</span>
        <span className="text-xs font-mono text-gold opacity-0 group-hover:opacity-100 transition-opacity">{level}%</span>
      </div>
      <div className="h-1 w-full bg-surface border border-border rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: isParentHovered ? `${level}%` : "0%" }}
          transition={{ duration: 1, ease: "circOut" }}
          className="h-full bg-gold"
        />
      </div>
    </div>
  )
}

export default function SkillsGrid() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border border-dashed relative">
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-gold/5 blur-3xl rounded-full -translate-y-1/2 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-text-secondary text-lg">Specialized in Modern Web Solutions</p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      >
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants} 
            className="flex flex-col p-6 rounded-xl border border-transparent hover:border-border hover:bg-surface/30 transition-all duration-500"
            onMouseEnter={() => setHoveredCategory(idx)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <h3 className="text-xl font-bold mb-8 text-gold pb-4 border-b border-border">{category.title}</h3>
            <div className="space-y-6">
              {category.skills.map((skill, sIdx) => (
                <SkillBar 
                  key={sIdx} 
                  name={skill.name} 
                  level={skill.level} 
                  isParentHovered={hoveredCategory === idx} 
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}


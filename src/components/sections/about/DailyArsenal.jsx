import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Laptop, Monitor, Terminal, Coffee } from 'lucide-react'

const tools = [
  {
    category: 'Hardware',
    icon: <Laptop size={20} />,
    items: ['MacBook Pro 16" M2 Max', 'LG 27" 4K UltraFine Display', 'Keychron K2 Mechanical Keyboard', 'Logitech MX Master 3S']
  },
  {
    category: 'Software & Tools',
    icon: <Monitor size={20} />,
    items: ['VS Code', 'GitHub', 'Postman', 'Supabase Studio', 'Vercel CLI', 'Figma', 'Chrome DevTools', 'Windows Terminal']
  },
  {
    category: 'Daily Drivers',
    icon: <Coffee size={20} />,
    items: ['Notion (Project Management)', 'Spotify (Focus playlists)', 'Slack (Client comms)']
  }
]

export default function DailyArsenal() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border bg-surface/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Daily Arsenal</h2>
          <p className="text-text-secondary text-lg">
            The tools, hardware, and software I use every day to build digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-background border border-border rounded-xl p-8"
            >
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gold mb-6">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{tool.category}</h3>
              <ul className="space-y-4">
                {tool.items.map((item, iIdx) => (
                  <li key={iIdx} className="text-text-secondary text-sm leading-relaxed border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

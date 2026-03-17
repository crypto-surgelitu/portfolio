import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(hover: none)').matches)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (isMobile) return

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const mouseOver = (e) => {
      const target = e.target.closest('[data-cursor]')
      if (target) {
        setCursorVariant(target.getAttribute('data-cursor'))
      } else if (e.target.tagName.toLowerCase() === 'p' || e.target.tagName.toLowerCase() === 'h1' || e.target.tagName.toLowerCase() === 'h2' || e.target.tagName.toLowerCase() === 'h3') {
        setCursorVariant('text')
      } else {
        setCursorVariant('default')
      }
    }

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseover', mouseOver)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseover', mouseOver)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  if (isMobile) return null

  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      height: 10,
      width: 10,
      backgroundColor: '#D4A017',
      border: '0px solid transparent',
      mixBlendMode: 'normal'
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'transparent',
      border: '1.5px solid #D4A017',
      mixBlendMode: 'difference'
    },
    button: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: 'rgba(212, 160, 23, 0.9)',
      border: '0px solid transparent',
      mixBlendMode: 'normal'
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: '#D4A017',
      border: '0px solid transparent',
      mixBlendMode: 'normal'
    },
    project: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: '#D4A017',
      border: '0px solid transparent',
      mixBlendMode: 'normal'
    }
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center overflow-hidden"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      style={{
        originX: 0, // Set origins to avoid centering bugs with Framer Motion positioning
        originY: 0
      }}
    >
      {/* Label for button hover */}
      <motion.span 
        className="text-[10px] font-bold text-white uppercase tracking-wider absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVariant === 'button' ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        Click
      </motion.span>
      
      {/* Label for project card hover */}
      <motion.span 
        className="text-xs font-bold text-white uppercase tracking-wider absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVariant === 'project' ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        View
      </motion.span>

      {/* Icon for link hover */}
      <motion.div
        className="absolute text-background"
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ 
          opacity: cursorVariant === 'link' ? 1 : 0,
          scale: cursorVariant === 'link' ? 1 : 0,
          rotate: cursorVariant === 'link' ? 0 : -45
        }}
        transition={{ duration: 0.2 }}
      >
        <ArrowUpRight size={20} strokeWidth={2.5} />
      </motion.div>
    </motion.div>
  )
}

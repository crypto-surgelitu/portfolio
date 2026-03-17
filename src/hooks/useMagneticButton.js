import { useEffect, useState } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

export function useMagneticButton(ref, intensity = 14) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Don't apply effect on mobile devices
    if (window.matchMedia('(hover: none)').matches) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { height, width, left, top } = element.getBoundingClientRect()
      
      const middleX = clientX - (left + width / 2)
      const middleY = clientY - (top + height / 2)
      
      x.set(middleX * (intensity / 50))
      y.set(middleY * (intensity / 50))
    }

    const handleMouseEnter = () => setIsHovered(true)
    
    const handleMouseLeave = () => {
      setIsHovered(false)
      x.set(0)
      y.set(0)
    }

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref, isHovered, intensity, x, y])

  return { x: springX, y: springY }
}

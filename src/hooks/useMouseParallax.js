import { useState, useEffect } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

export function useMouseParallax(shiftIntensity = 20) {
  const [isMobile, setIsMobile] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Determine if we're on a touch device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(hover: none)').matches || window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Listen to mouse movement
  useEffect(() => {
    if (isMobile) return
    
    const setMousePosition = (e) => {
      // Normalize values between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', setMousePosition)
    return () => window.removeEventListener('mousemove', setMousePosition)
  }, [mouseX, mouseY, isMobile])

  // Create smooth springs from mouse values
  const springConfig = { stiffness: 80, damping: 20 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Map to translation values based on intensity
  const x = useTransform(springX, [-1, 1], [-shiftIntensity, shiftIntensity])
  const y = useTransform(springY, [-1, 1], [-shiftIntensity, shiftIntensity])
  
  // Opposite direction for foreground elements
  const xReverse = useTransform(springX, [-1, 1], [shiftIntensity, -shiftIntensity])
  const yReverse = useTransform(springY, [-1, 1], [shiftIntensity, -shiftIntensity])

  return { x, y, xReverse, yReverse }
}

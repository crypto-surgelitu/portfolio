import { useScroll, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [isComplete, setIsComplete] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.99) {
        setIsComplete(true)
      } else {
        setIsComplete(false)
      }
    })
  }, [scrollYProgress])

  return { scaleX, isComplete }
}

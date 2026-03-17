import { useEffect, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Counter({ value, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseInt(value, 10)
    const controls = animate(0, numericValue, {
      duration: duration,
      onUpdate: (latest) => {
        setCount(Math.floor(latest))
      },
    })

    return () => controls.stop()
  }, [isInView, value, duration])

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

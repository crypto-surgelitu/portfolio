import { motion } from 'framer-motion'

export default function PageTransition({ children }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="min-h-screen pt-20"
      >
        {children}
      </motion.div>
      
      {/* Curtain wipe animation for page exits/entrances */}
      <motion.div
        className="fixed inset-0 z-50 bg-background pointer-events-none"
        initial={{ y: '100%' }}
        animate={{ y: '100%' }}
        exit={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // smooth ease-out variant
      />
      <motion.div
        className="fixed inset-0 z-50 bg-gold pointer-events-none"
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        exit={{ y: '100%' }}
      />
    </>
  )
}

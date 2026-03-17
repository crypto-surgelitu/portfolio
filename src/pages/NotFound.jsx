import { Link } from 'react-router-dom'
import PageTransition from '../components/layout/PageTransition'
import PageMeta from '../components/seo/PageMeta'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <PageTransition>
      <PageMeta 
        title="404: Page Not Found | Anthony Muhati" 
        description="The page you are looking for does not exist." 
      />
      <div className="container mx-auto px-6 min-h-[70vh] flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-8xl md:text-9xl font-extrabold text-gold mb-4 opacity-50">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-lg text-text-secondary max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded hover:bg-gold-dark transition-colors"
          data-cursor="button"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </PageTransition>
  )
}

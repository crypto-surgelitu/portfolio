import { Link } from 'react-router-dom'
import { Github, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0 mb-16">
          
          <div className="max-w-md">
            <Link to="/" className="text-2xl font-bold tracking-wider inline-block mb-4" data-cursor="hover">
              <span className="text-foreground">AM</span>
              <span className="text-gold">.</span>
            </Link>
            <p className="text-text-secondary leading-relaxed">
              Full-stack web developer based in Mombasa, Kenya. Crafting complete, production-ready digital experiences tailored for performance and scale.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-foreground font-semibold uppercase tracking-widest text-sm mb-2">Connect</h4>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/crypto-surgelitu" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:border-gold hover:text-gold transition-colors group"
                data-cursor="link"
              >
                <Github size={18} />
                <span className="text-sm font-medium">GitHub</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a 
                href="https://linkedin.com/in/anthonymuhati" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:border-gold hover:text-gold transition-colors group"
                data-cursor="link"
              >
                <Linkedin size={18} />
                <span className="text-sm font-medium">LinkedIn</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a 
                href="https://wa.me/254700000000" // Replace with actual number
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:border-gold hover:text-gold transition-colors group"
                data-cursor="link"
              >
                <MessageCircle size={18} />
                <span className="text-sm font-medium">WhatsApp</span>
                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-sm tracking-wide text-text-secondary">
          <p>© {currentYear} Anthony Muhati. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for freelance
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

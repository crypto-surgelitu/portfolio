import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react'
import PageTransition from '../../components/layout/PageTransition'
import PageMeta from '../../components/seo/PageMeta'

// Full project data mappings from Master Prompt
const caseStudiesData = {
  'duka-store': {
    title: 'Duka Store',
    category: 'E-Commerce / Web App',
    timeline: '3 Months',
    role: 'Lead Full-Stack Developer',
    liveUrl: 'https://dukastore.co.ke',
    githubUrl: 'https://github.com/crypto-surgelitu/Duka-Store',
    tech: ['React', 'Next.js', 'Supabase', 'Daraja API', 'SendGrid'],
    heroImage: '/images/projects/duka-store-hero.jpg',
    overview: 'Duka Store is a multi-vendor Kenyan marketplace with M-Pesa STK Push, Africa\'s Talking SMS, and real-time inventory management. It’s built to empower local merchants with professional e-commerce tools.',
    challenge: 'Local merchants in Kenya often rely on manual payment verification and disorganized inventory via social media. Global platforms are often too expensive or lack native integration with local payment methods like M-Pesa.',
    solution: 'I architected a custom multi-vendor marketplace from the ground up, integrating Daraja API for automated M-Pesa payments and Africa\'s Talking for SMS notifications, creating a high-trust automated environment.',
    features: [
      'Complete multi-vendor architecture for Admin and Vendors.',
      'Instant checkout with M-Pesa STK Push integration.',
      'Automated SMS notifications using Africa\'s Talking.',
      'Real-time inventory sync and low-stock alerts.',
      'SEO-optimized product pages.'
    ],
    color: 'from-orange-500/10 to-red-500/5'
  },
  'thrift-and-carry': {
    title: 'Thrift & Carry',
    category: 'E-Commerce',
    timeline: '2 Months',
    role: 'Full-Stack Developer',
    liveUrl: '#',
    githubUrl: 'https://github.com/crypto-surgelitu',
    tech: ['React', 'Supabase', 'Edge Functions', 'Tailwind CSS'],
    heroImage: '/images/projects/thrift-hero.jpg',
    overview: 'Thrift & Carry is a luxury secondhand handbag shop based in Mombasa, focusing on high-end logistics and secure transactions.',
    challenge: 'High-value items require a secure and reliable platform for both admin uploads and customer confidence, especially regarding payment and logistics in a niche market.',
    solution: 'Built a secure admin panel using Supabase Edge Functions for image uploads and state management. The frontend focuses on a premium editorial aesthetic to match the product quality.',
    features: [
      'Secure Admin Panel via Supabase Auth.',
      'Optimized image uploads for high-res product photos.',
      'Responsive editorial-style product grids.',
      'Seamless lead generation and WhatsApp integration.'
    ],
    color: 'from-pink-500/10 to-rose-500/5'
  },
  'bs1-booking': {
    title: 'BS1 Room Booking',
    category: 'Web App / Booking',
    timeline: '2.5 Months',
    role: 'Full-Stack Developer',
    liveUrl: '#',
    githubUrl: 'https://github.com/crypto-surgelitu/BS1',
    tech: ['React+Vite', 'Node.js', 'Express', 'MySQL'],
    heroImage: '/images/projects/bs1-hero.jpg',
    overview: 'A robust NGO room booking system designed for internal workspace management with real-time availability and user ratings.',
    challenge: 'Managing limited NGO resources required a conflict-free booking system with simple auth and a way to gather feedback on room usage.',
    solution: 'Developed a Node.js/Express backend with MySQL to handle complex booking logic and JWT for secure access. Implemented a post-booking rating system to optimize resource usage.',
    features: [
      'JWT Authentication and Role-based Access.',
      'Real-time availability matrix for room booking.',
      'Post-booking star rating and feedback system.',
      'Admin dashboard for resource management.'
    ],
    color: 'from-blue-500/10 to-indigo-500/5'
  },
  'salon-manager': {
    title: 'Salon Booking SaaS',
    category: 'SaaS',
    timeline: 'Ongoing',
    role: 'Solo Founder & Developer',
    liveUrl: '#',
    githubUrl: '#',
    tech: ['React', 'Vite', 'Node.js', 'Tailwind'],
    heroImage: '/images/projects/salon-hero.jpg',
    overview: 'A specialized SaaS platform for local barbershops and salons to manage appointments, staff schedules, and customer loyalty.',
    challenge: 'Local salons struggle with manual appointments and customer retention. Existing tools are often bloated or too generic for the Kenyan market.',
    solution: 'Designing a lightweight, mobile-first dashboard that focuses on the core appointment flow and automated SMS reminders for bookings.',
    features: [
      'Appointment scheduling and staff management.',
      'Automated SMS reminders for clients.',
      'Customer history and loyalty tracking.',
      'Business performance analytics.'
    ],
    color: 'from-emerald-500/10 to-teal-500/5'
  }
}

export default function CaseStudy() {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  const data = caseStudiesData[slug]

  if (!data) {
    return (
      <PageTransition>
        <div className="container mx-auto px-6 py-32 text-center min-h-[70vh] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4 capitalize">{slug?.replace('-', ' ')}</h1>
          <p className="text-text-secondary mb-8">Detailed case study is currently being written or page not found.</p>
          <Link to="/works" className="text-gold hover:underline">Return to Works</Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <PageMeta 
        title={`${data.title} - Case Study | Anthony Muhati`} 
        description={data.overview.substring(0, 160)} 
        path={`/works/${slug}`}
      />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-border">
        {/* Abstract background elements */}
        <div className={`absolute inset-0 bg-gradient-to-br ${data.color} -z-10`} />
        <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] bg-gold/5 blur-3xl rounded-full -translate-y-1/2 pointer-events-none -z-10" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button 
              onClick={() => navigate('/works')}
              className="inline-flex items-center gap-2 text-text-secondary hover:text-gold transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
              data-cursor="hover"
            >
              <ArrowLeft size={16} /> Back to Works
            </button>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
                {data.title}
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed">
                {data.overview}
              </p>
            </motion.div>

            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex gap-4">
                <a 
                  href={data.liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gold text-white font-bold py-4 px-6 rounded hover:bg-gold-dark transition-colors"
                  data-cursor="button"
                >
                  Visit Live Site <ExternalLink size={18} />
                </a>
                <a 
                  href={data.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-surface border border-border text-foreground hover:border-gold hover:text-gold transition-colors py-4 px-5 rounded"
                  data-cursor="hover"
                  aria-label="View Source Code"
                >
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Meta Info */}
      <div className="border-b border-border bg-surface/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <p className="text-xs tracking-widest uppercase text-text-secondary mb-2 font-semibold">Role</p>
              <p className="font-medium">{data.role}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <p className="text-xs tracking-widest uppercase text-text-secondary mb-2 font-semibold">Timeline</p>
              <p className="font-medium">{data.timeline}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="col-span-2 md:col-span-2">
              <p className="text-xs tracking-widest uppercase text-text-secondary mb-2 font-semibold">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {data.tech.map((t, i) => (
                  <span key={i} className="text-sm border border-border px-3 py-1 rounded-full bg-background/50">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Image / Mockup presentation */}
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          className="w-full aspect-video md:aspect-[21/9] bg-surface rounded-xl border border-border overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Faux image placeholder */}
          <div className="absolute inset-0 flex flex-col pt-12">
            <div className="absolute top-0 inset-x-0 h-12 bg-background border-b border-border flex items-center px-6 gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/50" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <span className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="mx-auto w-1/3 h-6 bg-surface border border-border rounded-md" />
            </div>
            <div className={`flex-1 bg-gradient-to-b ${data.color} opacity-20`} />
          </div>
        </motion.div>
      </div>

      {/* Challenge & Solution */}
      <div className="container mx-auto px-6 py-20 pb-32">
        <div className="grid md:grid-cols-12 gap-16 md:gap-12">
          <div className="md:col-span-6 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {data.challenge}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Solution</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {data.solution}
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-surface border border-border p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-6 text-gold">Key Features Delivered</h3>
              <ul className="space-y-4">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 size={24} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-text-secondary leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Next Project CTA */}
      <div className="border-t border-border">
        <Link 
          to="/works" 
          className="block w-full py-24 md:py-32 text-center group bg-surface/10 hover:bg-gold/5 transition-colors"
          data-cursor="hover"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-text-secondary mb-4 group-hover:text-gold transition-colors">
            Next Project
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground group-hover:text-gold transition-colors flex justify-center items-center gap-4">
            Back to All Works
            <ArrowLeft size={40} className="hidden group-hover:block transition-all" />
          </h2>
        </Link>
      </div>

    </PageTransition>
  )
}

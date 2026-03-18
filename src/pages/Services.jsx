import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Code2, PenTool, Database, Layout, ChevronDown, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/layout/PageTransition'
import PageMeta from '../components/seo/PageMeta'

const serviceRows = [
  {
    title: 'Web Application Development',
    description: 'Specializing in high-performance React and Next.js applications that are scalable, secure, and optimized for speed. I build complete digital products from the ground up, ensuring seamless user experiences across all devices.',
    features: ['Custom SPA/SSR Frameworks', 'React & Next.js Expertise', 'Scalable Backend Architecture', 'Deployment & Cloud Hosting'],
    image: 'bg-gradient-to-br from-gold/20 to-amber-500/20',
    icon: <Code2 className="text-gold" size={32} />
  },
  {
    title: 'UI/UX Strategy & Development',
    description: 'Transforming ideas into visually stunning and highly functional interfaces. I focus on creating design systems that are not only beautiful but also intuitive, following modern accessibility standards and conversion-driven layouts.',
    features: ['High-Fidelity Prototyping', 'Design System Architecture', 'Responsive Layout Precision', 'Interactive Micro-animations'],
    image: 'bg-gradient-to-br from-slate-500/20 to-indigo-600/20',
    icon: <PenTool className="text-gold" size={32} />
  },
  {
    title: 'API & Payment Integration',
    description: 'Connecting your business to critical local and global services. Expert integration of M-Pesa Daraja API for automated checkouts, along with third-party SMS, mailers, and advanced database architectures.',
    features: ['Lipa na M-Pesa (Daraja API)', 'Custom API Development', 'Third-Party Webhook Sync', 'Database Optimization'],
    image: 'bg-gradient-to-br from-emerald-500/20 to-teal-600/20',
    icon: <Database className="text-gold" size={32} />
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Building end-to-end online stores that drive results. From multi-vendor marketplaces to bespoke brand shops, I implement complete checkout flows, inventory management, and admin dashboards designed for Kenyan and global markets.',
    features: ['Inventory Management Systems', 'Multi-Vendor Architecture', 'Admin Dashboard Control', 'SEO Optimized Catalog'],
    image: 'bg-gradient-to-br from-rose-500/20 to-pink-600/20',
    icon: <Layout className="text-gold" size={32} />
  }
]

const methodSteps = [
  { step: '01', title: 'Discovery & Audit', description: 'Understanding your business goals and auditing existing codebases or design requirements.' },
  { step: '02', title: 'Architecture & Planning', description: 'Defining the data structures and backend architecture required for scale and performance.' },
  { step: '03', title: 'High-Fidelity Design', description: 'Crafting the visual language and interactive prototypes for final approval before dev.' },
  { step: '04', title: 'Agile Development', description: 'Writing clean, production-ready code with continuous testing and feedback loops.' },
  { step: '05', title: 'QA & Deployment', description: 'Rigorous testing followed by seamless deployment to production-grade cloud infrastructure.' }
]

const pricingTiers = [
  {
    name: 'Starter',
    price: 'KES 25,000',
    description: 'Perfect for small businesses and personal portfolios needing a professional online presence.',
    features: ['Responsive 5-page Website', 'Basic SEO Setup', 'Contact Form Integration', 'Mobile Optimized', '1 Month Support'],
    recommended: false,
    cta: 'Start with Starter'
  },
  {
    name: 'Professional',
    price: 'KES 85,000',
    description: 'The sweet spot for growing businesses requiring custom functionalities and CMS.',
    features: ['Custom Web Application', 'Database Integration', 'Content Management System', 'Advanced SEO & Analytics', 'Payment Gateway (M-Pesa)', '3 Months Support'],
    recommended: true,
    cta: 'Start with Professional'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations requiring complex architecture and dedicated maintenance.',
    features: ['High-Performance SaaS Platforms', 'Microservices Architecture', 'Custom API Development', 'Enterprise Security & Compliance', 'Dedicated SLA Server Uptime', '24/7 Priority Support'],
    recommended: false,
    cta: 'Contact for Quote'
  }
]

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'A standard 5-page business website takes about 2-3 weeks. A complex web application or e-commerce platform with M-Pesa integration typically takes 6-12 weeks depending on the scope.'
  },
  {
    question: 'How does the M-Pesa integration work?',
    answer: 'I use the official Safaricom Daraja API. For e-commerce, I implement STK Push (Lipa na M-Pesa Online) which prompts the user on their phone to enter their PIN, providing a seamless checkout experience.'
  },
  {
    question: 'Do you provide hosting and domain registration?',
    answer: 'Yes. I can handle the full deployment lifecycle, including purchasing your custom domain and setting up hosting on platforms like Vercel, AWS, or DigitalOcean.'
  },
  {
    question: 'What happens after the website goes live?',
    answer: 'I provide post-launch support based on your package. This covers bug fixes and performance monitoring. Ongoing retainer contracts are also available for continuous feature development.'
  }
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <PageTransition>
      <PageMeta 
        title="Services & Pricing | Anthony Muhati" 
        description="Web development services in Kenya. React apps, M-Pesa integration, e-commerce from KES 25,000." 
        path="/services"
      />
      
      {/* Header section */}
      <div className="container mx-auto px-6 pt-20 pb-8 md:pb-12">
        <h1 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.8rem] font-bold mb-4 md:mb-6 tracking-tight">
          Premium Digital <span className="text-gold italic">Solutions.</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-16">
          I provide end-to-end development services tailored to modern business needs, from conceptualizing architecture to final deployment.
        </p>
      </div>
      {/* Service Rows */}
      <div className="container mx-auto px-6 py-16 md:py-32 space-y-32">
        {serviceRows.map((service, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}>
            {/* Image Placeholder Column */}
            <div className="w-full md:w-1/2 aspect-video bg-surface border border-border rounded-2xl overflow-hidden relative group">
               <div className={`absolute inset-0 ${service.image} opacity-30 group-hover:scale-110 transition-transform duration-1000 ease-out`} />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-background border border-border flex items-center justify-center shadow-2xl">
                    {service.icon}
                  </div>
               </div>
            </div>
            
            {/* Content Column */}
            <div className="w-full md:w-1/2">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4 inline-block">Service {index + 1}</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{service.title}</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* The Method Section */}
      <div className="bg-surface/10 py-16 md:py-32 border-y border-border overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
            <div>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-gold mb-4">How I Work</h2>
              <h3 className="text-3xl md:text-5xl font-bold">The Method.</h3>
            </div>
            <p className="text-lg text-text-secondary max-w-sm">
              A systematic five-step framework designed to take your project from concept to live deployment within weeks, not months.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {methodSteps.map((method, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-background border border-border p-8 rounded-xl hover:border-gold/30 transition-all group"
              >
                <span className="text-4xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors absolute top-4 right-4">{method.step}</span>
                <h4 className="text-lg font-bold mb-4 relative z-10">{method.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed relative z-10">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers Section */}
      <div className="bg-surface/30 border-y border-border py-16 md:py-24 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-gold/5 blur-3xl rounded-full -z-10" />

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-gold mb-4">Transparent Pricing</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Investment Plans</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-background border rounded-2xl p-8 flex flex-col ${
                  tier.recommended ? 'border-gold shadow-2xl scale-100 md:scale-105 z-10' : 'border-border'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 inset-x-0 w-max mx-auto px-4 py-1.5 bg-gold text-white text-xs font-bold uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h4 className="text-2xl font-bold mb-2">{tier.name}</h4>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-text-secondary pb-1">/ starting</span>}
                </div>
                <p className="text-text-secondary mb-8 min-h-[60px]">{tier.description}</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-gold shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-4 rounded font-bold text-center transition-all ${
                    tier.recommended 
                      ? 'bg-gold text-white hover:bg-gold-dark' 
                      : 'bg-surface border border-border text-foreground hover:border-gold hover:text-gold'
                  }`}
                  data-cursor="button"
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 md:py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-text-secondary">Everything you need to know about the process.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-border rounded-lg bg-surface/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  data-cursor="hover"
                >
                  <span className="font-semibold text-lg pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-gold' : 'text-text-secondary'}`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-border/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border">
        <Link 
          to="/contact" 
          className="block w-full py-16 md:py-24 text-center group bg-surface/10 hover:bg-gold/5 transition-colors"
          data-cursor="hover"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
              <MessageCircle size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground group-hover:text-gold transition-colors">
            Have a project in mind?
          </h2>
          <p className="text-lg text-text-secondary mt-4 group-hover:text-foreground transition-colors">Let's discuss how I can help your business grow.</p>
        </Link>
      </div>

    </PageTransition>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Code2, PenTool, Database, Layout, ChevronDown, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/layout/PageTransition'
import PageMeta from '../components/seo/PageMeta'

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

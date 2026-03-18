import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone, Video, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import DOMPurify from 'dompurify'
import PageTransition from '../components/layout/PageTransition'
import PageMeta from '../components/seo/PageMeta'

export default function Contact() {
  const formRef = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [cooldownTime, setCooldownTime] = useState(0)
  const { executeRecaptcha } = useGoogleReCaptcha()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    budget: "Let's discuss",
    timeline: 'Flexible',
    message: '',
    honey: '' // Honeypot field
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  useEffect(() => {
    const lastSubmitTime = localStorage.getItem('lastSubmitTime')
    if (lastSubmitTime) {
      const timePassed = (Date.now() - parseInt(lastSubmitTime)) / 1000
      if (timePassed < 60) {
        setCooldownTime(Math.ceil(60 - timePassed))
      }
    }

    let interval;
    if (cooldownTime > 0) {
      interval = setInterval(() => {
        setCooldownTime((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [cooldownTime])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Rate limit check
    if (cooldownTime > 0) {
      setErrors({ form: `Please wait ${cooldownTime} seconds before sending another message.` })
      return
    }

    // Check honeypot
    if (formData.honey) {
      console.warn("Bot detected via honeypot")
      return
    }

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // 1. Get reCAPTCHA token
      let recaptchaToken = 'dev_fallback'
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha('contact')
      }

      // 2. Sanitize inputs
      const sanitizedData = {
        name: DOMPurify.sanitize(formData.name),
        email: DOMPurify.sanitize(formData.email),
        service: DOMPurify.sanitize(formData.service),
        budget: DOMPurify.sanitize(formData.budget),
        timeline: DOMPurify.sanitize(formData.timeline),
        message: DOMPurify.sanitize(formData.message),
        'g-recaptcha-response': recaptchaToken
      }

      // 3. Send via EmailJS (requires env vars to be set)
      // Note: In development without keys this might fail, we catch it.
      if (import.meta.env.VITE_EMAILJS_SERVICE_ID) {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          sanitizedData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
      } else {
        // Mock success for development if no keys
        console.log("Mocking EmailJS send:", sanitizedData)
        await new Promise(r => setTimeout(r, 1500))
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', service: 'Web Development', budget: "Let's discuss", timeline: 'Flexible', message: '', honey: '' })
      localStorage.setItem('lastSubmitTime', Date.now().toString())
      setCooldownTime(60)
    } catch (error) {
      console.error('Failed to send message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageTransition>
      <PageMeta 
        title="Hire Me | Anthony Muhati – Mombasa Web Developer" 
        description="Start a project with Anthony Muhati. Available for freelance web development across Kenya and remotely." 
        path="/contact"
      />
      
      {/* Header section */}
      <div className="container mx-auto px-6 pt-20 pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold text-white/90">Available for New Projects</span>
        </motion.div>
        
        <h1 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.8rem] font-bold mb-4 md:mb-6 tracking-tight">
          Start a <span className="text-gold italic">Project.</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed">
          Whether you have a fully-fledged design or just a rough idea, I'm here to bring your digital vision to life.
        </p>
      </div>

      {/* Availability Strip */}
      <div className="border-y border-border bg-surface/30 mb-16 md:mb-24 overflow-hidden">
        <div className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Location</p>
            <p className="font-bold text-foreground">Mombasa, KE (GMT+3)</p>
          </div>
          <div className="h-8 w-px bg-border hidden md:block" />
          <div className="flex items-center gap-4">
            <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Weekly Capacity</p>
            <p className="font-bold text-foreground">2 Open Slots</p>
          </div>
          <div className="h-8 w-px bg-border hidden md:block" />
          <div className="flex items-center gap-4">
            <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Response Time</p>
            <p className="font-bold text-foreground">&lt; 24 Hours</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
          
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface/50 border border-border p-8 md:p-12 rounded-2xl relative overflow-hidden">
              {/* Backglow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>

              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 text-green-500 p-8 rounded-xl flex flex-col items-center justify-center text-center h-[400px]"
                >
                  <CheckCircle size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Message Sent!</h3>
                  <p className="text-green-500/80">Thank you for reaching out. I'll get back to you within 24 hours to discuss your project.</p>
                  <button 
                    onClick={() => setSubmitStatus(null)}
                    className="mt-8 px-6 py-2 border border-green-500/30 rounded hover:bg-green-500/20 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot Field (Hidden from users) */}
                  <div className="hidden">
                    <label>Don't fill this out if you're human: <input name="honey" value={formData.honey} onChange={handleChange} tabIndex="-1" autoComplete="off" /></label>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold tracking-wide uppercase text-text-secondary">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-background border ${errors.name ? 'border-red-500' : 'border-border'} rounded p-4 text-foreground focus:outline-none focus:border-gold transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold tracking-wide uppercase text-text-secondary">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-background border ${errors.email ? 'border-red-500' : 'border-border'} rounded p-4 text-foreground focus:outline-none focus:border-gold transition-colors`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-semibold tracking-wide uppercase text-text-secondary">Service Needed</label>
                      <select 
                        id="service" 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded p-4 text-foreground focus:outline-none focus:border-gold transition-colors appearance-none"
                      >
                        <option value="UI Design">UI Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="API Integration">API Integration</option>
                        <option value="E-Commerce">E-Commerce</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-semibold tracking-wide uppercase text-text-secondary">Estimated Budget</label>
                      <select 
                        id="budget" 
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded p-4 text-foreground focus:outline-none focus:border-gold transition-colors appearance-none"
                      >
                        <option value="Let's discuss">Let's discuss</option>
                        <option value="Under KES 20,000">Under KES 20,000</option>
                        <option value="KES 20,000-50,000">KES 20,000 - 50,000</option>
                        <option value="KES 50,000-150,000">KES 50,000 - 150,000</option>
                        <option value="KES 150,000+">KES 150,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-semibold tracking-wide uppercase text-text-secondary">Timeline</label>
                    <select 
                      id="timeline" 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded p-4 text-foreground focus:outline-none focus:border-gold transition-colors appearance-none"
                    >
                      <option value="Flexible">Flexible</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2-3 Months">2-3 Months</option>
                      <option value="3+ Months">3+ Months</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold tracking-wide uppercase text-text-secondary">Project Details</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-background border ${errors.message ? 'border-red-500' : 'border-border'} rounded p-4 text-foreground focus:outline-none focus:border-gold transition-colors resize-none`}
                      placeholder="Tell me about your project context, goals, and timeline..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded flex items-start gap-3 text-red-500 mb-6">
                      <AlertCircle size={20} className="shrink-0 mt-0.5" />
                      <p className="text-sm">Something went wrong while sending your message. Please try again or use an alternative contact method.</p>
                    </div>
                  )}

                  {errors.form && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded flex items-start gap-3 text-red-500 mb-6">
                      <AlertCircle size={20} className="shrink-0 mt-0.5" />
                      <p className="text-sm">{errors.form}</p>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting || cooldownTime > 0}
                    className="w-full bg-gold hover:bg-gold-dark text-white font-bold py-4 rounded transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                    data-cursor="button"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : cooldownTime > 0 ? (
                      <>Please wait ({cooldownTime}s)</>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-text-secondary mt-4">
                    This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="underline hover:text-gold">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="underline hover:text-gold">Terms of Service</a> apply.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Alternative Contact & Testimonials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mb-16">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gold mb-8">Direct Contact</h3>
              
              <div className="space-y-6">
                <a href="mailto:hello@anthonymuhati.com" className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface border border-transparent hover:border-border transition-all group">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-secondary group-hover:text-gold group-hover:bg-gold/10 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-text-secondary mb-1">Email</p>
                    <p className="font-semibold text-lg group-hover:text-gold transition-colors">hello@anthonymuhati.com</p>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface border border-transparent hover:border-border transition-all group">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-secondary group-hover:text-gold group-hover:bg-gold/10 transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-text-secondary mb-1">WhatsApp</p>
                    <p className="font-semibold text-lg group-hover:text-gold transition-colors">Available on request</p>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface border border-transparent hover:border-border transition-all group">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-text-secondary group-hover:text-gold group-hover:bg-gold/10 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-text-secondary mb-1">Call</p>
                    <p className="font-semibold text-lg group-hover:text-gold transition-colors">Available on request</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Testimonial Snippet */}
            <div className="bg-surface/50 border border-border p-8 rounded-xl relative">
              <span className="text-6xl font-serif text-gold/20 absolute top-4 left-4">"</span>
              <p className="relative z-10 text-lg leading-relaxed text-text-secondary italic mb-6">
                Anthony transformed our disorganized inventory system into a seamless e-commerce platform. His integration of M-Pesa automated our entire checkout process, saving us hours of manual work every day.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background border border-border rounded-full" />
                <div>
                  <p className="font-bold text-foreground">Sarah Kuria</p>
                  <p className="text-sm text-text-secondary">Founder, Duka Store</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  )
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Cloud, RefreshCcw, ShieldCheck, ClipboardCheck, FolderOpen, Settings, CheckCircle2, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const services = [
  {
    title: 'Khata Registration',
    description: 'Get your property officially registered under your name in the BBMP records. Required for property tax payment, loans and legal transfers.',
    icon: Building2,
    tag: 'Most Popular',
    color: 'bg-blue-500'
  },
  {
    title: 'e-Khata (Digital Khata)',
    description: 'Convert your physical Khata to the official BBMP digital format. Mandatory for all new property transactions in Bengaluru.',
    icon: Cloud,
    tag: 'Now Mandatory',
    color: 'bg-royal'
  },
  {
    title: 'Khata Transfer',
    description: 'Transferring property ownership? We handle the complete Khata transfer process from the previous owner to the new owner.',
    icon: RefreshCcw,
    color: 'bg-indigo-500'
  },
  {
    title: 'Encumbrance Certificate (EC)',
    description: 'Get a certified record of all transactions on your property. Essential for home loans, sale deeds and legal verification.',
    icon: ShieldCheck,
    color: 'bg-emerald-500'
  }
];

const steps = [
  {
    title: 'Share Your Details',
    description: 'Fill our simple enquiry form or call us. Tell us your property details and the service you need.',
    icon: ClipboardCheck
  },
  {
    title: 'Document Collection',
    description: 'Our field agent visits you or guides you on exactly which documents are needed. We collect everything required.',
    icon: FolderOpen
  },
  {
    title: 'We Process It',
    description: 'Our team handles all BBMP submissions, follow-ups and verifications on your behalf. You sit back.',
    icon: Settings
  },
  {
    title: 'Documents Delivered',
    description: 'Your processed Khata, e-Khata, Transfer or EC is delivered to you. Job done.',
    icon: CheckCircle2
  }
];

const trustPoints = [
  { title: 'BBMP Expertise', desc: 'Years of experience navigating BBMP processes and requirements in Bengaluru.' },
  { title: 'End-to-End Service', desc: 'From document collection to final delivery — we handle everything, you handle nothing.' },
  { title: 'Field Agent Support', desc: 'Our agents come to you. No need to run to government offices yourself.' },
  { title: 'Transparent Pricing', desc: 'No hidden charges. You know the cost upfront before we begin.' },
  { title: 'Fast Turnaround', desc: 'We know the fastest routes through the system to get your documents done.' },
  { title: 'Hundreds of Happy Clients', desc: 'Trusted by property owners across Jayanagar, Koramangala, Malleshwaram and all of Bengaluru.' }
];

const testimonials = [
  {
    text: "DocEstate made our Khata transfer completely stress-free. Their agent guided us at every step and the whole process was done in weeks.",
    author: "Ramesh Nair",
    area: "Jayanagar"
  },
  {
    text: "I had been struggling with my e-Khata application for months. DocEstate sorted it out in no time. Highly professional team.",
    author: "Anita Krishnamurthy",
    area: "Koramangala"
  },
  {
    text: "Got our EC for a 20-year period without a single trip to the office. DocEstate handled everything. Will definitely recommend.",
    author: "Suresh Babu",
    area: "Malleshwaram"
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy leading-[1.1] mb-6">
                Your Property Documents. <br />
                <span className="text-royal">Done Right.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate mb-10 max-w-xl leading-relaxed">
                We handle Khata, e-Khata, Khata Transfer and EC for property owners across Bengaluru — fast, reliable and fully guided.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-royal text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy transition-all shadow-lg hover:shadow-royal/20 flex items-center justify-center gap-2">
                  Enquire Now <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="bg-white text-navy border-2 border-navy/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy/5 transition-all flex items-center justify-center">
                  See Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-navy/5">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000"
                  alt="Luxury Modern Property"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-navy/5 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-royal/20 flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=200" 
                    alt="Property" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate uppercase tracking-wider">Verified Process</p>
                  <p className="text-navy font-bold">100% BBMP Compliant</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-bg-light py-12 border-y border-navy/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Properties Processed', value: '1000+' },
              { label: 'Service Types', value: '4' },
              { label: 'Years Experience', value: '5+' },
              { label: 'BBMP Compliant', value: '100%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-navy mb-1 font-heading">{stat.value}</p>
                <p className="text-sm font-medium text-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-navy mb-4">What We Do</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">End-to-end property document services in Bengaluru</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl border border-navy/5 shadow-sm card-hover flex flex-col h-full"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-royal rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {service.tag && (
                  <span className="absolute top-4 right-4 bg-royal/10 text-royal text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                    {service.tag}
                  </span>
                )}
                <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6", service.color)}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-slate text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link to="/services" className="text-royal font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Know More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl text-navy mb-4">How It Works</h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">Simple 4-step process — we do the heavy lifting</p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-royal/20 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-royal/10 flex items-center justify-center text-royal mb-6 shadow-xl relative">
                    <span className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-royal text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <step.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-navy mb-3">{step.title}</h4>
                  <p className="text-slate text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl text-navy mb-4">Featured Success Stories</h2>
              <p className="text-slate text-lg">We've helped secure documents for some of the finest properties in Bengaluru.</p>
            </div>
            <Link to="/services" className="text-royal font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View all services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Luxury Villa in Whitefield',
                service: 'e-Khata Conversion',
                image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
                desc: 'Complete digital conversion for a premium gated community.'
              },
              {
                title: 'Modern Apartment in HSR',
                service: 'Khata Transfer',
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
                desc: 'Seamless ownership transfer for a high-rise resale property.'
              },
              {
                title: 'Heritage Home in Jayanagar',
                service: 'Khata Registration',
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
                desc: 'Official registration for a multi-generational family property.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-navy text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                      {item.service}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-navy mb-2">{item.title}</h4>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Why Property Owners Trust DocEstate</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-royal/20 flex items-center justify-center text-royal mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3">{point.title}</h4>
                <p className="text-slate text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-navy mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-navy/5 shadow-sm relative"
              >
                <Quote size={40} className="text-royal/10 absolute top-6 right-6" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-royal text-royal" />)}
                </div>
                <p className="text-navy text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-navy">{t.author}</p>
                  <p className="text-slate text-sm">{t.area}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container-custom">
          <div className="bg-royal rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Get Your Property Documents Sorted?</h2>
              <p className="text-white/80 text-lg mb-10">Talk to our team today. Free consultation, no commitment.</p>
              <Link to="/contact" className="bg-white text-royal px-10 py-5 rounded-xl font-bold text-xl hover:bg-navy hover:text-white transition-all shadow-xl inline-block">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

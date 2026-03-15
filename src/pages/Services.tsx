import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Cloud, RefreshCcw, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const serviceDetails = [
  {
    id: 'khata-registration',
    title: 'Khata Registration',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800',
    description: 'Get your property officially registered under your name in the BBMP records. This is the foundational document for any property owner in Bengaluru.',
    whoNeeds: 'New property owners, those with only sale deeds, or owners of properties in newly developed layouts.',
    docs: [
      'Sale Deed (Registered)',
      'Encumbrance Certificate (Form 15)',
      'Possession Certificate',
      'Layout Plan Approval',
      'Property Tax Receipts'
    ],
    timeline: '55 to 60 days',
    color: 'text-blue-500'
  },
  {
    id: 'e-khata',
    title: 'e-Khata (Digital Khata)',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    description: 'Convert your physical Khata to the official BBMP digital format. e-Khata is now mandatory for all property transactions, including selling and getting home loans.',
    whoNeeds: 'Owners with physical Khata certificates who plan to sell, mortgage, or simply want to digitize their records.',
    docs: [
      'Existing Physical Khata',
      'Latest Property Tax Receipt',
      'Owner ID Proof (Aadhaar/PAN)',
      'Property Photos',
      'Registered Sale Deed'
    ],
    timeline: '14 to 21 days',
    color: 'text-royal'
  },
  {
    id: 'khata-transfer',
    title: 'Khata Transfer',
    icon: RefreshCcw,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    description: 'Transferring property ownership? We handle the complete Khata transfer process from the previous owner to the new owner in the BBMP system.',
    whoNeeds: 'Buyers of resale properties, legal heirs inheriting property, or those gifting property.',
    docs: [
      'Registered Sale Deed / Gift Deed',
      'Death Certificate (if inheritance)',
      'Previous Owner\'s Khata',
      'Latest Tax Paid Receipt',
      'Encumbrance Certificate'
    ],
    timeline: '40 to 50 days',
    color: 'text-indigo-500'
  },
  {
    id: 'ec',
    title: 'Encumbrance Certificate (EC)',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    description: 'Get a certified record of all transactions on your property. It proves that the property is free from any monetary or legal liabilities.',
    whoNeeds: 'Anyone applying for a home loan, buyers verifying property history, or owners checking for unauthorized transactions.',
    docs: [
      'Property Schedule Details',
      'Sale Deed Copy',
      'Owner Name and Period required',
      'Previous EC (if available)'
    ],
    timeline: '7 to 10 Days',
    color: 'text-emerald-500'
  }
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-24 text-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate text-lg max-w-3xl mx-auto"
          >
            We provide end-to-end assistance for all BBMP property document requirements. Our experts handle the bureaucracy while you stay informed.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-32">
            {serviceDetails.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col lg:items-center gap-12 lg:gap-20",
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={cn("w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-8", service.color)}>
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl text-navy mb-6">{service.title}</h2>
                  <p className="text-slate text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <div>
                      <h4 className="font-bold text-navy mb-2">Who needs it?</h4>
                      <p className="text-slate text-sm">{service.whoNeeds}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-3">Documents Required:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.docs.map((doc, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate">
                            <CheckCircle2 size={16} className="text-royal shrink-0 mt-0.5" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-light rounded-lg border border-navy/5">
                      <span className="text-xs font-bold text-slate uppercase tracking-wider">Typical Timeline:</span>
                      <span className="text-sm font-bold text-navy">{service.timeline}</span>
                    </div>
                  </div>

                  <Link to="/contact" className="inline-flex items-center gap-2 bg-royal text-white px-8 py-4 rounded-xl font-bold hover:bg-navy transition-all shadow-lg">
                    Enquire for this service <ArrowRight size={20} />
                  </Link>
                </div>

                {/* Visual Placeholder */}
                <div className="flex-1">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-navy/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-navy/10"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-bg-light py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl text-navy mb-6">Not sure which service you need?</h2>
          <p className="text-slate text-lg mb-10 max-w-2xl mx-auto">Our experts can evaluate your property documents and guide you on the next steps.</p>
          <Link to="/contact" className="bg-navy text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-royal transition-all shadow-xl inline-block">
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}

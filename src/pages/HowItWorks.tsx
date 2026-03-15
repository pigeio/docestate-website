import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, FolderOpen, Settings, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const detailedSteps = [
  {
    title: 'Share Your Details',
    icon: ClipboardCheck,
    description: 'The first step is a simple conversation. You can fill out our enquiry form, call us, or message us on WhatsApp.',
    clientDoes: 'Provide basic property details and specify the service required (Khata, e-Khata, etc.).',
    docEstateDoes: 'Our experts review your request and assign a dedicated case manager to your property.',
    timeline: 'Instant / Same Day'
  },
  {
    title: 'Document Collection',
    icon: FolderOpen,
    description: 'We don\'t expect you to know every legal requirement. We guide you through the exact list of documents needed for your specific case.',
    clientDoes: 'Gather the required documents based on our checklist. You can share digital copies or our agent can collect them.',
    docEstateDoes: 'We verify every document for accuracy and completeness to prevent BBMP rejections.',
    timeline: '1-3 Days'
  },
  {
    title: 'We Process It',
    icon: Settings,
    description: 'This is where we do the heavy lifting. We handle all the government office visits, submissions, and follow-ups.',
    clientDoes: 'Relax and wait for updates. We handle all the bureaucracy and technical queries.',
    docEstateDoes: 'We submit applications, track progress, handle officer queries, and ensure the process moves forward.',
    timeline: '2-8 Weeks (Varies by service)'
  },
  {
    title: 'Documents Delivered',
    icon: CheckCircle2,
    description: 'Once the process is complete, we verify the final document and deliver it to your doorstep.',
    clientDoes: 'Receive your official BBMP documents and verify the details.',
    docEstateDoes: 'We conduct a final quality check and securely deliver the original certificates to you.',
    timeline: '1-2 Days after approval'
  }
];

export default function HowItWorks() {
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
            How It Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate text-lg max-w-3xl mx-auto"
          >
            A transparent, step-by-step process designed to save you time and eliminate stress.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-20 relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-royal/10 hidden md:block"></div>

              {detailedSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row gap-8 md:gap-16"
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-royal/20 flex items-center justify-center text-royal shadow-lg relative z-10 shrink-0">
                    <step.icon size={28} />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-royal text-white flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-navy mb-4">{step.title}</h3>
                    <p className="text-slate text-lg mb-8 leading-relaxed">{step.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-bg-light p-6 rounded-2xl border border-navy/5">
                      <div>
                        <h4 className="text-xs font-bold text-royal uppercase tracking-widest mb-3">What You Do</h4>
                        <p className="text-sm text-navy font-medium">{step.clientDoes}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-royal uppercase tracking-widest mb-3">What We Do</h4>
                        <p className="text-sm text-navy font-medium">{step.docEstateDoes}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center gap-2 text-slate">
                      <span className="text-xs font-bold uppercase tracking-wider">Estimated Time:</span>
                      <span className="text-sm font-bold text-navy">{step.timeline}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Ready to start your application?</h2>
          <Link to="/contact" className="bg-royal text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-royal transition-all shadow-2xl inline-flex items-center gap-3">
            Start Your Application <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}

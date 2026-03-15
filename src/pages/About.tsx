import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Heart, ShieldCheck, Zap, Award } from 'lucide-react';

const team = [
  { name: 'Anand Raj', role: 'Team Member' },
  { name: 'Shyam', role: 'Team Member' },
  { name: 'Neel', role: 'Team Member' }
];

const values = [
  { title: 'Transparency', icon: Zap, desc: 'No hidden fees or surprises. You know exactly what you pay for.' },
  { title: 'Reliability', icon: ShieldCheck, desc: 'We treat your property documents with the highest level of care.' },
  { title: 'Client First', icon: Heart, desc: 'Our goal is to make your life easier, not just process papers.' }
];

export default function About() {
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
            About DocEstate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate text-lg max-w-3xl mx-auto"
          >
            Building trust through professional property document services since 2020.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl text-navy mb-8">Our Story</h2>
              <div className="space-y-6 text-slate text-lg leading-relaxed">
                <p>
                  DocEstate was founded with one goal — to make property documentation in Bengaluru simple, accessible and stress-free for every property owner.
                </p>
                <p>
                  We realized that thousands of citizens struggle with government offices, complex forms, and unclear requirements. Bengaluru's rapid growth has made property records more important than ever, yet the process remains daunting for many.
                </p>
                <p>
                  Today, we are a team of experts dedicated to bridging the gap between property owners and the BBMP. We've helped hundreds of families secure their property rights through professional, ethical, and fast document processing.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                alt="DocEstate Modern Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-bg-light">
        <div className="container-custom">
          <div className="bg-navy rounded-3xl p-12 md:p-20 text-center text-white">
            <div className="w-16 h-16 rounded-full bg-royal/20 flex items-center justify-center text-royal mx-auto mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Our Mission</h2>
            <p className="text-slate text-xl max-w-3xl mx-auto leading-relaxed">
              To become Bengaluru's most trusted partner for property document services by providing expert guidance, transparent processes, and unmatched reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-navy mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-bg-light p-10 rounded-2xl border border-navy/5 text-center">
                <div className="w-16 h-16 rounded-2xl bg-royal/10 flex items-center justify-center text-royal mx-auto mb-8">
                  <v.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{v.title}</h3>
                <p className="text-slate leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-navy mb-4">Meet the Team</h2>
            <p className="text-slate text-lg">The experts behind your document success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-lg border-2 border-royal/10">
                  <Users size={48} className="text-royal/40" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-royal font-bold text-sm uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

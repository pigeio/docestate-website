import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from '../lib/utils';

interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  services: string[];
  area: string;
  message: string;
}

import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const path = 'enquiries';
      await addDoc(collection(db, path), {
        ...data,
        status: 'new',
        createdAt: serverTimestamp(),
      });
      setIsSubmitted(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'enquiries');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate text-lg max-w-3xl mx-auto"
          >
            Have questions? Our team is here to help you with your property document needs.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">Get in Touch</h2>
                <p className="text-slate text-lg mb-10">
                  Whether you're looking for a Khata transfer or a new registration, we're ready to assist you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-royal/10 flex items-center justify-center text-royal shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Phone Number</h4>
                    <p className="text-slate">+91 91426 69772</p>
                    <p className="text-slate">+91 70679 58543</p>
                    <p className="text-slate">+91 72476 40390</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-royal/10 flex items-center justify-center text-royal shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Email Address</h4>
                    <p className="text-slate">docestatesolutions@gmail.com</p>
                    <p className="text-sm text-royal font-medium mt-2">
                      Note: If someone is not receiving your phone, you can just send us message on whatsapp. Our team will contact you within 24 hrs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-royal/10 flex items-center justify-center text-royal shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Office Location</h4>
                    <p className="text-slate">HSR Layout Sector 2, Bangalore, Karnataka</p>
                    <p className="text-slate text-sm mt-1">Serving all BBMP zones across the city.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-royal/10 flex items-center justify-center text-royal shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg mb-1">Working Hours</h4>
                    <p className="text-slate">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                    <p className="text-slate">Sunday: Closed</p>
                  </div>
                </div>

                <div className="pt-10 mt-10 border-t border-navy/5">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-3xl font-extrabold tracking-tight text-navy font-heading">
                      Doc<span className="text-royal">Estate</span>
                    </span>
                    <span className="text-xs font-bold text-slate/30 uppercase tracking-[0.2em] mt-1.5">Solutions</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg border border-navy/5">
                    <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                      alt="DocEstate Solutions Office" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-navy/5"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-light p-8 md:p-12 rounded-3xl border border-navy/5 shadow-xl"
            >
              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-navy mb-4">Thank You!</h3>
                  <p className="text-slate text-lg mb-8">
                    Your enquiry has been received. Our team will contact you within 24 hrs.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-royal font-bold hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-navy mb-8">Send an Enquiry</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-navy mb-2">Full Name *</label>
                        <input
                          {...register('fullName', { required: 'Name is required' })}
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-royal/20 transition-all",
                            errors.fullName ? "border-red-500" : "border-navy/10"
                          )}
                          placeholder="John Doe"
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy mb-2">Phone Number *</label>
                        <input
                          {...register('phone', {
                            required: 'Phone is required',
                            pattern: { value: /^[0-9]{10}$/, message: 'Invalid 10-digit number' }
                          })}
                          className={cn(
                            "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-royal/20 transition-all",
                            errors.phone ? "border-red-500" : "border-navy/10"
                          )}
                          placeholder="9876543210"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy mb-2">Email Address *</label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
                        })}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-royal/20 transition-all",
                          errors.email ? "border-red-500" : "border-navy/10"
                        )}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy mb-4">Services Needed *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { id: 'khata', label: 'Khata Registration' },
                          { id: 'e-khata', label: 'e-Khata (Digital)' },
                          { id: 'transfer', label: 'Khata Transfer' },
                          { id: 'ec', label: 'Encumbrance Certificate (EC)' },
                          { id: 'not-sure', label: 'Not Sure / Other' }
                        ].map((service) => (
                          <label key={service.id} className="flex items-center gap-3 p-3 rounded-xl border border-navy/10 bg-white cursor-pointer hover:border-royal/30 transition-all">
                            <input
                              type="checkbox"
                              value={service.id}
                              {...register('services', { required: 'Please select at least one service' })}
                              className="w-5 h-5 rounded border-navy/20 text-royal focus:ring-royal/20"
                            />
                            <span className="text-sm font-medium text-navy">{service.label}</span>
                          </label>
                        ))}
                      </div>
                      {errors.services && <p className="text-red-500 text-xs mt-2">{errors.services.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy mb-2">Society / Area *</label>
                      <input
                        {...register('area', { required: 'Area is required' })}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-royal/20 transition-all",
                          errors.area ? "border-red-500" : "border-navy/10"
                        )}
                        placeholder="e.g. Sobha City, Thanisandra"
                      />
                      {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy mb-2">Message / Details (Optional)</label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white focus:outline-none focus:ring-2 focus:ring-royal/20 transition-all"
                        placeholder="Tell us more about your property..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full bg-royal text-white py-4 rounded-xl font-bold text-lg hover:bg-navy transition-all shadow-lg flex items-center justify-center gap-2",
                        isSubmitting && "opacity-70 cursor-not-allowed"
                      )}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'} <Send size={20} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

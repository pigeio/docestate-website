import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-extrabold tracking-tight font-heading">
                Doc<span className="text-royal">Estate</span>
              </span>
              <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mt-1">Solutions</span>
            </Link>
            <p className="text-slate text-sm leading-relaxed">
              Simplifying property documentation in Bengaluru. We handle the complexity so you don't have to.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-royal transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Khata Registration</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">e-Khata (Digital)</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Khata Transfer</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Encumbrance Certificate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-royal shrink-0" />
                <span>+91 91426 69772</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-royal shrink-0" />
                <span>docestatesolutions@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-royal shrink-0" />
                <span>HSR Layout Sector 2, Bangalore, Karnataka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate text-xs">
          <div className="flex items-center gap-4">
            <p>© 2025 DocEstate. All rights reserved.</p>
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-royal">
              <Building2 size={16} />
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

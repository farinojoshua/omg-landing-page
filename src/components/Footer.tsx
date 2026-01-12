'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/menu', label: 'Menu' },
  { href: '/outlets', label: 'Outlets' },
  { href: '/contact', label: 'Reservasi' },
];

const socialLinks = [
  { 
    href: '#', 
    icon: Instagram, 
    label: 'Instagram',
    color: 'from-purple-500 to-pink-500',
  },
  { 
    href: '#', 
    icon: Facebook, 
    label: 'Facebook',
    color: 'from-blue-600 to-blue-500',
  },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[150px]" style={{ background: 'rgba(227, 24, 55, 0.08)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-[120px]" style={{ background: 'rgba(227, 24, 55, 0.05)' }} />

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto">
          <path d="M0 60L1440 60V0C1440 0 1320 30 1200 30C1080 30 960 0 720 0C480 0 360 30 240 30C120 30 0 0 0 0V60Z" fill="#0D0D0D" />
        </svg>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 pt-20 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1 text-center md:text-left">
            <Link href="/" className="inline-block mb-6 group">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Oh My Grill Logo"
                  width={70}
                  height={70}
                  className="rounded-full ring-4 ring-white/10 group-hover:ring-[#E31837]/50 transition-all duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-[#E31837] to-[#B91229] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🔥</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-[280px] mx-auto md:mx-0 leading-relaxed">
              All You Can Eat BBQ terbaik dengan pelayanan premium dan daging berkualitas tinggi sejak 2019.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                  aria-label={social.label}
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white relative z-10 transition-colors" />
                </Link>
              ))}
              <Link
                href="#"
                className="group relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                aria-label="TikTok"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400 group-hover:text-white relative z-10 transition-colors">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-6 text-lg" style={{ color: '#FFFFFF' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E31837] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-6 text-lg" style={{ color: '#FFFFFF' }}>Jam Operasional</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                <span className="text-gray-500 text-sm">Senin - Jumat</span>
                <p className="font-semibold" style={{ color: '#FFFFFF' }}>11:00 - 22:00</p>
              </div>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                <span className="text-gray-500 text-sm">Sabtu - Minggu</span>
                <p className="font-semibold" style={{ color: '#FFFFFF' }}>10:00 - 22:00</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-6 text-lg" style={{ color: '#FFFFFF' }}>Hubungi Kami</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@ohmygrill.id" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors justify-center md:justify-start group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-[#E31837] transition-colors" style={{ background: 'rgba(227, 24, 55, 0.1)' }}>
                    <Mail className="w-5 h-5 text-[#E31837] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm">info@ohmygrill.id</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(227, 24, 55, 0.1)' }}>
                    <MapPin className="w-5 h-5 text-[#E31837]" />
                  </div>
                  <span className="text-sm">7 Outlet di Jabodetabek</span>
                </div>
              </li>
            </ul>
            
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#E31837]/20"
              style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}
            >
              <Phone className="w-4 h-4" />
              Reservasi Sekarang
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2026 Oh My Grill. All Rights Reserved. Made with ❤️ in Indonesia
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)', boxShadow: '0 10px 30px rgba(227, 24, 55, 0.4)' }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

'use client';

import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Rina Sari',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Daging wagyu-nya juara banget! Lembut dan meleleh di mulut. Harga terjangkau untuk kualitas premium seperti ini. Pasti balik lagi! 🔥',
  },
  {
    name: 'Budi Santoso',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Outlet Kemang favorit saya. Pelayanannya ramah, tempatnya nyaman, dan yang paling penting makanannya enak semua. Recommended!',
  },
  {
    name: 'Lisa Wijaya',
    role: 'Family Diner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Tempat favorit keluarga untuk weekend dinner. Anak-anak suka banget, menu bervariasi dari daging sampai seafood. Worth it!',
  },
  {
    name: 'Ahmad Fadli',
    role: 'Corporate Event',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    rating: 5,
    text: 'Pernah booking untuk acara kantor di outlet Tanjung Duren. Paketnya lengkap, pelayanan profesional. Team building sukses!',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />
      
      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(227, 24, 55, 0.1)', color: '#E31837' }}
          >
            ⭐ Testimonials
          </span>
          <h2 
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Kata Mereka Tentang{' '}
            <span className="gradient-text">Oh My Grill</span>
          </h2>
          <p className="text-lg max-w-[600px] mx-auto" style={{ color: '#6B7280' }}>
            Ribuan pelanggan puas dengan pengalaman BBQ mereka
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-6 transition-all duration-500 hover-lift card-shine ${
                activeIndex === idx ? 'ring-2 ring-[#E31837] scale-105' : ''
              }`}
              style={{
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
              }}
              onClick={() => setActiveIndex(idx)}
            >
              {/* Quote icon */}
              <div 
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}
              >
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? 'w-8 bg-[#E31837]' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

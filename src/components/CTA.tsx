'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Users, PartyPopper, Flame } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('cta-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Clock, text: 'Buka Setiap Hari' },
    { icon: Users, text: 'Family Friendly' },
    { icon: PartyPopper, text: 'Tersedia untuk Event' },
  ];

  return (
    <section id="cta-section" className="py-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-[80px]" style={{ background: 'rgba(227, 24, 55, 0.1)' }} />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-[100px]" style={{ background: 'rgba(227, 24, 55, 0.08)' }} />

      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        <div 
          className={`relative rounded-[2rem] overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            background: 'linear-gradient(135deg, #E31837 0%, #8B0D1A 100%)',
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[80px]" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full blur-[60px]" style={{ background: 'rgba(0,0,0,0.2)' }} />
          
          {/* Animated fire emojis */}
          <div className="absolute top-4 left-[10%] text-4xl animate-float" style={{ animationDelay: '0s' }}>🔥</div>
          <div className="absolute top-8 right-[15%] text-3xl animate-float" style={{ animationDelay: '0.5s' }}>🥩</div>
          <div className="absolute bottom-4 left-[20%] text-3xl animate-float" style={{ animationDelay: '1s' }}>🍖</div>
          <div className="absolute bottom-8 right-[10%] text-4xl animate-float" style={{ animationDelay: '1.5s' }}>🔥</div>

          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Content */}
            <div className="text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                <Flame className="w-4 h-4" />
                Ready to Grill?
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Siap Untuk{' '}
                <span className="relative inline-block">
                  Grill?
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-white/30 rounded-full" />
                </span>
              </h2>
              
              <p className="text-white/80 mb-8 text-lg">
                Hubungi outlet terdekat untuk reservasi atau langsung datang ke lokasi favorit kamu!
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                {features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm"
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                    <span className="text-white text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#E31837] font-bold text-lg rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20"
              >
                Reservasi Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-white/60 text-sm">atau hubungi outlet terdekat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)' }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div 
          className="absolute rounded-full blur-[100px] animate-pulse"
          style={{
            top: '20%',
            left: '10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(227, 24, 55, 0.3) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute rounded-full blur-[100px] animate-pulse"
          style={{
            bottom: '10%',
            right: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(227, 24, 55, 0.2) 0%, transparent 70%)',
            animationDelay: '1s',
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-32 pb-40 lg:pt-28 lg:pb-48">
          {/* Hero Text */}
          <div className={`text-white text-center lg:text-left ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <span 
              className="inline-block px-5 py-2.5 rounded-full text-sm font-medium mb-6 glass"
              style={{ color: '#FF4D6A' }}
            >
              <span className="mr-2">🔥</span>
              All You Can Eat BBQ Premium
            </span>
            
            <h1 
              className="font-extrabold mb-6 leading-[1.1]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              <span style={{ color: '#FFFFFF' }}>Grill Your Way,</span>
              <br />
              <span 
                className="relative inline-block"
                style={{ 
                  background: 'linear-gradient(135deg, #E31837 0%, #FF4D6A 50%, #E31837 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-shift 3s ease infinite',
                }}
              >
                Unlimited Joy!
                <span 
                  className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #E31837, #FF4D6A)' }}
                />
              </span>
            </h1>
            
            <p className="text-lg mb-10 max-w-[500px] mx-auto lg:mx-0 leading-relaxed" style={{ color: '#A1A1AA' }}>
              Nikmati pengalaman makan BBQ sepuasnya dengan pilihan daging premium berkualitas. 
              <span className="font-semibold text-white"> Tersedia di 7 lokasi di Jabodetabek!</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/menu"
                className="group inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 btn-glow relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)',
                  fontSize: '1.1rem',
                }}
              >
                <span className="relative z-10">Lihat Menu</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
              <Link
                href="/outlets"
                className="group inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
                style={{ 
                  color: '#FFFFFF',
                  border: '2px solid rgba(255,255,255,0.3)',
                  fontSize: '1.1rem',
                }}
              >
                <span className="mr-2">📍</span>
                Cari Outlet
              </Link>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 md:gap-12">
              {[
                { number: '7', label: 'Outlets', icon: '📍' },
                { number: '50+', label: 'Menu Items', icon: '🍖' },
                { number: '10K+', label: 'Happy Customers', icon: '⭐' },
              ].map((stat, idx) => (
                <div 
                  key={stat.label} 
                  className={`text-center p-4 rounded-2xl glass ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${(idx + 1) * 200}ms` }}
                >
                  <span className="text-2xl mb-1 block">{stat.icon}</span>
                  <span className="block text-3xl md:text-4xl font-extrabold gradient-text">{stat.number}</span>
                  <span className="text-xs md:text-sm" style={{ color: '#71717A' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className={`hidden lg:block relative ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main image with glow */}
              <div className="relative rounded-3xl overflow-hidden animate-pulse-glow">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=600&fit=crop"
                  alt="Delicious grilled meat"
                  width={500}
                  height={500}
                  className="rounded-3xl"
                  priority
                />
                {/* Overlay gradient */}
                <div 
                  className="absolute inset-0 rounded-3xl"
                  style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5) 100%)' }}
                />
              </div>
              
              {/* Floating Badges */}
              <div 
                className="absolute flex items-center gap-3 px-5 py-4 bg-white rounded-2xl shadow-2xl animate-float"
                style={{ top: '5%', left: '-15%' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(227, 24, 55, 0.1)' }}>
                  <span className="text-2xl">🥩</span>
                </div>
                <div>
                  <span className="font-bold text-gray-800 block">Premium Meat</span>
                  <span className="text-sm text-gray-500">100% Quality</span>
                </div>
              </div>
              
              <div 
                className="absolute flex items-center gap-3 px-5 py-4 bg-white rounded-2xl shadow-2xl animate-float"
                style={{ bottom: '10%', right: '-10%', animationDelay: '1.5s' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(227, 24, 55, 0.1)' }}>
                  <span className="text-2xl">♾️</span>
                </div>
                <div>
                  <span className="font-bold text-gray-800 block">Unlimited</span>
                  <span className="text-sm text-gray-500">All You Can Eat</span>
                </div>
              </div>

              {/* Price badge */}
              <div 
                className="absolute flex flex-col items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-[#E31837] to-[#B91229] text-white shadow-2xl animate-pulse-glow"
                style={{ bottom: '-5%', left: '10%' }}
              >
                <span className="text-xs opacity-80">Mulai dari</span>
                <span className="text-2xl font-extrabold">99K</span>
                <span className="text-xs opacity-80">/orang</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave with gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#FFF5F5" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="url(#wave-gradient)"
          />
        </svg>
      </div>
    </section>
  );
}

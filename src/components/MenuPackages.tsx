'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Crown, ChevronRight, Check } from 'lucide-react';

const packages = [
  {
    name: 'Special',
    price: '99',
    icon: Sparkles,
    featured: false,
    description: 'Paket favorit untuk pengalaman BBQ yang memuaskan',
    highlights: [
      { name: 'Daging Sapi 4 Varian', image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=100&h=100&fit=crop' },
      { name: 'Daging Ayam 4 Varian', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=100&h=100&fit=crop' },
      { name: 'Side Dish Gorengan', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=100&h=100&fit=crop' },
    ],
    extras: ['Sup Shabu', 'Nasi Putih', 'Sayuran', 'Ice Cream', 'Minuman'],
  },
  {
    name: 'Platinum',
    price: '109',
    icon: Crown,
    featured: true,
    description: 'Semua menu Special + pilihan premium eksklusif',
    highlights: [
      { name: 'Wagyu Steak', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=100&h=100&fit=crop' },
      { name: 'Beef Saikoro', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=100&h=100&fit=crop' },
      { name: 'Grand Oyster', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=100&h=100&fit=crop' },
    ],
    extras: ['Slim Choice Special Sauce', 'Beef Kirimi', 'Seafood Padang'],
  },
];

export default function MenuPackages() {
  return (
    <section id="menu" className="py-24 relative overflow-hidden" style={{ background: '#FAFAFA' }}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-[100px]" style={{ background: 'rgba(227, 24, 55, 0.05)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[100px]" style={{ background: 'rgba(227, 24, 55, 0.03)' }} />
      
      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'linear-gradient(135deg, rgba(227, 24, 55, 0.1) 0%, rgba(227, 24, 55, 0.05) 100%)', color: '#E31837' }}
          >
            <span className="w-2 h-2 rounded-full bg-[#E31837] animate-pulse" />
            All You Can Eat BBQ
          </span>
          <h2 
            className="font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Pilih Paket{' '}
            <span className="gradient-text">Favoritmu</span>
          </h2>
          <p className="text-lg max-w-[600px] mx-auto" style={{ color: '#6B7280' }}>
            Dibuat dengan kombinasi 17 bumbu rahasia • No Pork • No Lard • No Alcohol
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                pkg.featured 
                  ? 'ring-2 ring-[#E31837] shadow-[0_20px_50px_rgba(227,24,55,0.15)]' 
                  : 'shadow-[0_10px_40px_rgba(0,0,0,0.06)]'
              }`}
            >
              {/* Header */}
              <div 
                className="p-6 text-center"
                style={{ 
                  background: pkg.featured 
                    ? 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' 
                    : 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)'
                }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <pkg.icon className={`w-5 h-5 ${pkg.featured ? 'text-white' : 'text-[#E31837]'}`} />
                  <h3 className={`text-xl font-bold ${pkg.featured ? 'text-white' : 'text-gray-800'}`}>
                    {pkg.name}
                  </h3>
                  {pkg.featured && (
                    <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium text-white">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-lg ${pkg.featured ? 'text-white/70' : 'text-gray-400'}`}>Rp</span>
                  <span className={`text-4xl font-extrabold ${pkg.featured ? 'text-white' : 'gradient-text'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-lg ${pkg.featured ? 'text-white/70' : 'text-gray-400'}`}>.000</span>
                </div>
                <span className={`text-sm ${pkg.featured ? 'text-white/60' : 'text-gray-400'}`}>NETT /PAX</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 text-center mb-5">{pkg.description}</p>

                {/* Highlight Images */}
                <div className="flex justify-center gap-3 mb-5">
                  {pkg.highlights.map((item, idx) => (
                    <div key={idx} className="text-center group">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden mb-2 ring-2 ring-gray-100 group-hover:ring-[#E31837] transition-all">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-500 block max-w-[70px] leading-tight">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Extras */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {pkg.extras.map((extra, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-full text-xs text-gray-600"
                    >
                      <Check className="w-3 h-3 text-green-500" />
                      {extra}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/menu"
                  className={`group flex items-center justify-center gap-2 w-full py-3 font-semibold rounded-xl transition-all ${
                    pkg.featured
                      ? 'bg-[#E31837] text-white hover:bg-[#B91229]'
                      : 'border-2 border-[#E31837] text-[#E31837] hover:bg-[#E31837] hover:text-white'
                  }`}
                >
                  <span>Lihat Menu Lengkap</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-gray-400">
          * Harga sudah termasuk pajak (NETT). Anak di bawah 5 tahun GRATIS!
        </p>
      </div>
    </section>
  );
}

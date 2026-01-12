'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Crown, Sparkles, ChevronRight, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

// Special Package Items with images
const specialItems = {
  beef: [
    { name: 'Oh My Honey Sapi Manis', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop' },
    { name: 'Oh My Gogi Sapi Bulgogi', image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=300&h=200&fit=crop' },
    { name: 'Oh My Savory Sapi Gurih', image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=300&h=200&fit=crop' },
    { name: 'Oh My Spicy Sapi Pedas', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=200&fit=crop' },
  ],
  chicken: [
    { name: 'Oh My Honey Ayam Manis', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300&h=200&fit=crop' },
    { name: 'Oh My Gogi Ayam Bulgogi', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop' },
    { name: 'Oh My Savory Ayam Gurih', image: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=300&h=200&fit=crop' },
    { name: 'Oh My Spicy Ayam Pedas', image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=200&fit=crop' },
  ],
  sides: [
    { name: 'Keju Mozzarella', image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300&h=200&fit=crop' },
    { name: 'Spicy Wing', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300&h=200&fit=crop' },
    { name: 'Ekkado', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=200&fit=crop' },
    { name: 'Fish Cake', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop' },
    { name: 'Chicken Bites', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=200&fit=crop' },
    { name: 'Fish Drumstick', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop' },
  ],
  others: [
    { name: 'Sup Shabu', image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop' },
    { name: 'Nasi Putih', image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=300&h=200&fit=crop' },
    { name: 'Sayuran Segar', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop' },
    { name: 'Ice Cream', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300&h=200&fit=crop' },
    { name: 'Lemon Tea', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop' },
  ],
};

// Platinum Premium Items
const platinumItems = [
  { name: 'Slim Choice Special Sauce', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=300&h=200&fit=crop', tag: 'Premium Beef' },
  { name: 'Wagyu Steak', image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=300&h=200&fit=crop', tag: 'Premium Beef' },
  { name: 'Beef Kirimi', image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=200&fit=crop', tag: 'Premium Beef' },
  { name: 'Beef Saikoro', image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=300&h=200&fit=crop', tag: 'Premium Beef' },
  { name: 'Seafood Padang', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&h=200&fit=crop', tag: 'Premium Seafood' },
  { name: 'Grand Oyster Cream Cheese', image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&h=200&fit=crop', tag: 'Limited Edition' },
];

const menuCategories = [
  { id: 'beef', name: 'Daging Sapi', icon: '🥩', items: specialItems.beef },
  { id: 'chicken', name: 'Daging Ayam', icon: '🍗', items: specialItems.chicken },
  { id: 'sides', name: 'Side Dish Gorengan', icon: '🍟', items: specialItems.sides },
  { id: 'others', name: 'Pelengkap', icon: '🍚', items: specialItems.others },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('beef');
  const [activePackage, setActivePackage] = useState<'special' | 'platinum'>('special');

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%)' }}
      >
        <div className="absolute inset-0">
          <div 
            className="absolute rounded-full blur-3xl"
            style={{
              top: '30%',
              right: '10%',
              width: '300px',
              height: '300px',
              background: 'rgba(227, 24, 55, 0.15)',
            }}
          />
        </div>
        
        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center text-white pb-8">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(227, 24, 55, 0.2)',
                border: '1px solid rgba(227, 24, 55, 0.3)',
                color: '#FF4D6A',
              }}
            >
              Authentic BBQ Recipe
            </span>
            <h1 
              className="font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#FFFFFF' }}
            >
              Menu & Paket Harga
            </h1>
            <p className="text-lg max-w-[600px] mx-auto mb-4" style={{ color: '#D1D5DB' }}>
              Dibuat dengan kombinasi 17 bumbu rahasia
            </p>
            <div className="flex justify-center gap-4 text-sm font-medium" style={{ color: '#FF4D6A' }}>
              <span>🚫 No Pork</span>
              <span>•</span>
              <span>🚫 No Lard</span>
              <span>•</span>
              <span>🚫 No Alcohol</span>
            </div>
          </div>
        </div>
        
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Package Toggle */}
      <section className="py-8 bg-white sticky top-[72px] z-40 border-b">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl" style={{ background: '#F3F4F6' }}>
              <button
                onClick={() => setActivePackage('special')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activePackage === 'special'
                    ? 'bg-white shadow-md text-gray-800'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Sparkles className={`w-5 h-5 ${activePackage === 'special' ? 'text-[#E31837]' : ''}`} />
                <span>Special</span>
                <span className={`text-sm ${activePackage === 'special' ? 'text-[#E31837]' : 'text-gray-400'}`}>
                  Rp 99.000
                </span>
              </button>
              <button
                onClick={() => setActivePackage('platinum')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activePackage === 'platinum'
                    ? 'bg-gradient-to-r from-[#E31837] to-[#B91229] text-white shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Crown className={`w-5 h-5 ${activePackage === 'platinum' ? 'text-white' : ''}`} />
                <span>Platinum</span>
                <span className={`text-sm ${activePackage === 'platinum' ? 'text-white/80' : 'text-gray-400'}`}>
                  Rp 109.000
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      {activePackage === 'special' ? (
        <section className="py-12 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#E31837] text-white shadow-lg shadow-[#E31837]/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuCategories
                .find((cat) => cat.id === activeCategory)
                ?.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-1 bg-white/90 rounded-full text-xs font-medium text-[#E31837]">
                          Special
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                    </div>
                  </div>
                ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-gray-500 mb-4">
                Semua menu Special sudah termasuk dalam paket <strong>Rp 99.000 NETT/PAX</strong>
              </p>
              <Link
                href="/outlets"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-full text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}
              >
                Reservasi Sekarang
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-12 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-6">
            {/* Platinum Banner */}
            <div 
              className="rounded-2xl p-8 mb-10 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(227, 24, 55, 0.05) 0%, rgba(227, 24, 55, 0.02) 100%)' }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Crown className="w-6 h-6 text-[#E31837]" />
                <h3 className="text-xl font-bold">Paket Platinum</h3>
              </div>
              <p className="text-gray-600 mb-2">
                Termasuk <strong>semua menu Special</strong> ditambah menu premium eksklusif berikut:
              </p>
              <p className="text-3xl font-extrabold text-[#E31837]">Rp 109.000 <span className="text-lg font-medium text-gray-500">NETT/PAX</span></p>
            </div>

            {/* Premium Items */}
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#E31837]" />
              Menu Premium Eksklusif
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {platinumItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ring-2 ring-[#E31837]/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                        item.tag === 'Limited Edition' 
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                          : 'bg-gradient-to-r from-[#E31837] to-[#B91229]'
                      }`}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-bold text-lg" style={{ color: '#FFFFFF' }}>{item.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/outlets"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-full text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}
              >
                Reservasi Sekarang
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

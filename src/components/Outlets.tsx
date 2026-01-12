'use client';

import { Phone, MapPin, Clock, Navigation, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const outlets = [
  {
    name: 'Kelapa Gading',
    address: 'Jl. Boulevard Raya Blok QJ 1 No.18-19, Kelapa Gading, Jakarta Utara',
    phone: '+62 813-8322-2711',
    phoneHref: 'tel:+6281383222711',
    mapsUrl: 'https://maps.google.com/?q=Jl.+Boulevard+Raya+Blok+QJ+1+No.18-19+Kelapa+Gading',
    area: 'Jakarta Utara',
    isNew: false,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop',
  },
  {
    name: 'Jatiwaringin',
    address: 'Jl Raya Jatiwaringin No 48, Pondok Gede, Bekasi',
    phone: '+62 812-8110-7970',
    phoneHref: 'tel:+628128110970',
    mapsUrl: 'https://maps.google.com/?q=Jl+Raya+Jatiwaringin+No+48+Bekasi',
    area: 'Bekasi',
    isNew: false,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop',
  },
  {
    name: 'Margonda',
    address: 'Jl. Margonda No.27, Pondok Cina, Depok',
    phone: '+62 812-1383-5228',
    phoneHref: 'tel:+6281213835228',
    mapsUrl: 'https://maps.google.com/?q=Jl.+Margonda+No.27+Depok',
    area: 'Depok',
    isNew: false,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=250&fit=crop',
  },
  {
    name: 'Kemang',
    address: 'Jl. Kemang Raya No.3, Mampang, Jakarta Selatan',
    phone: '+62 817-7501-0500',
    phoneHref: 'tel:+6281775010500',
    mapsUrl: 'https://maps.google.com/?q=Jl.+Kemang+Raya+No.3+Jakarta+Selatan',
    area: 'Jakarta Selatan',
    isNew: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=250&fit=crop',
  },
];

const otherOutlets = [
  { name: 'Kota Bogor', area: 'Bogor', phone: '+62 812-8370-0805', phoneHref: 'tel:+6281283700805' },
  { name: 'Galaxy', area: 'Bekasi', phone: '+62 812-2285-0005', phoneHref: 'tel:+6281222850005' },
  { name: 'Tanjung Duren', area: 'Jakarta Barat', phone: '+62 877-2777-0800', phoneHref: 'tel:+6287727770800' },
];

export default function Outlets() {
  const [hoveredOutlet, setHoveredOutlet] = useState<string | null>(null);

  return (
    <section id="outlets" className="py-24 relative overflow-hidden bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: 'rgba(227, 24, 55, 0.1)', color: '#E31837' }}
            >
              <MapPin className="w-4 h-4" />
              Our Locations
            </span>
            <h2 
              className="font-bold mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Temukan Outlet{' '}
              <span className="gradient-text">Terdekat</span>
            </h2>
            <p className="text-gray-500 max-w-md">
              7 outlet siap melayani kamu di area Jabodetabek dengan pelayanan terbaik
            </p>
          </div>
          
          <Link 
            href="/outlets"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg group"
            style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)', color: 'white' }}
          >
            Lihat Semua Outlet
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Outlets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {outlets.map((outlet) => (
            <div
              key={outlet.name}
              className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ${
                hoveredOutlet === outlet.name ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'
              }`}
              onMouseEnter={() => setHoveredOutlet(outlet.name)}
              onMouseLeave={() => setHoveredOutlet(null)}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={outlet.image}
                  alt={outlet.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  {outlet.isNew && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500">
                      NEW
                    </span>
                  )}
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 text-sm ml-auto">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-800">{outlet.rating}</span>
                  </div>
                </div>

                {/* Location name on image */}
                <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 70%, transparent 100%)' }}>
                  <h3 className="font-bold text-lg" style={{ color: '#FFFFFF' }}>{outlet.name}</h3>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>{outlet.area}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-3 line-clamp-1">{outlet.address}</p>
                
                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    href={outlet.mapsUrl}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-sm font-semibold rounded-xl transition-all hover:bg-gray-100"
                    style={{ border: '1.5px solid #E5E7EB' }}
                  >
                    <Navigation className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">Maps</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-sm font-semibold rounded-xl text-white transition-all hover:shadow-md"
                    style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}
                  >
                    Reservasi
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Outlets Bar */}
        <div 
          className="rounded-2xl p-6"
          style={{ background: 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)' }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(227, 24, 55, 0.1)' }}>
                <MapPin className="w-5 h-5" style={{ color: '#E31837' }} />
              </div>
              <span className="font-semibold text-gray-700">Outlet Lainnya:</span>
            </div>
            
            <div className="flex flex-wrap gap-3 flex-1">
              {otherOutlets.map((outlet) => (
                <a
                  key={outlet.name}
                  href={outlet.phoneHref}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:shadow-md hover:text-[#E31837] transition-all"
                >
                  <span>{outlet.name}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{outlet.area}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" style={{ color: '#E31837' }} />
            <span><strong>Senin - Jumat:</strong> 11:00 - 22:00</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" style={{ color: '#E31837' }} />
            <span><strong>Sabtu - Minggu:</strong> 10:00 - 22:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}

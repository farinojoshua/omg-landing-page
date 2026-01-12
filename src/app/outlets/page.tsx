import { MapPin, Clock, Navigation } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outlets = [
  {
    name: 'Kelapa Gading',
    address: 'Jl. Boulevard Raya Blok QJ 1 No.18-19, Kelapa Gading, Jakarta Utara',
    mapsUrl: 'https://maps.google.com/?q=Jl.+Boulevard+Raya+Blok+QJ+1+No.18-19+Kelapa+Gading',
    area: 'Jakarta Utara',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop',
  },
  {
    name: 'Jatiwaringin',
    address: 'Jl Raya Jatiwaringin No 48, Pondok Gede, Bekasi',
    mapsUrl: 'https://maps.google.com/?q=Jl+Raya+Jatiwaringin+No+48+Bekasi',
    area: 'Bekasi',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop',
  },
  {
    name: 'Margonda',
    address: 'Jl. Margonda No.27, Pondok Cina, Depok',
    mapsUrl: 'https://maps.google.com/?q=Jl.+Margonda+No.27+Depok',
    area: 'Depok',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=250&fit=crop',
  },
  {
    name: 'Kota Bogor',
    address: 'Jl. A. Yani No.38, Tanah Sareal, Kota Bogor',
    mapsUrl: 'https://maps.google.com/?q=Jl.+A.+Yani+No.38+Tanah+Sareal+Bogor',
    area: 'Bogor',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=250&fit=crop',
  },
  {
    name: 'Galaxy',
    address: 'Jl. Taman Galaxy Raya No.5A, Bekasi Selatan',
    mapsUrl: 'https://maps.google.com/?q=Jl.+Taman+Galaxy+Raya+No.5A+Bekasi',
    area: 'Bekasi',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=250&fit=crop',
  },
  {
    name: 'Tanjung Duren',
    address: 'Jl. Tanjung Duren Raya No.75, Jakarta Barat',
    mapsUrl: 'https://maps.google.com/?q=Jl.+Tanjung+Duren+Raya+No.75+Jakarta+Barat',
    area: 'Jakarta Barat',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=250&fit=crop',
  },
  {
    name: 'Kemang',
    address: 'Jl. Kemang Raya No.3, Mampang, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Jl.+Kemang+Raya+No.3+Jakarta+Selatan',
    area: 'Jakarta Selatan',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=400&h=250&fit=crop',
  },
];

export default function OutletsPage() {
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
              top: '40%',
              left: '20%',
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
              📍 Our Locations
            </span>
            <h1 
              className="font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#FFFFFF' }}
            >
              Outlet Kami
            </h1>
            <p className="text-lg max-w-[600px] mx-auto" style={{ color: '#D1D5DB' }}>
              7 outlet siap melayani kamu di area Jabodetabek
            </p>
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

      {/* Operating Hours */}
      <section className="py-12 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div 
            className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-center gap-8"
            style={{ background: 'rgba(227, 24, 55, 0.05)', border: '1px solid rgba(227, 24, 55, 0.1)' }}
          >
            <Clock className="w-12 h-12" style={{ color: '#E31837' }} />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Jam Operasional</h3>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <p className="text-gray-600">
                  <strong>Senin - Jumat:</strong> 11:00 - 22:00
                </p>
                <p className="text-gray-600">
                  <strong>Sabtu - Minggu:</strong> 10:00 - 22:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outlets Grid */}
      <section className="py-20" style={{ background: '#F9FAFB' }}>
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outlets.map((outlet) => (
              <div
                key={outlet.name}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={outlet.image}
                    alt={outlet.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  {/* NEW Badge */}
                  {outlet.isNew && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500">
                        NEW
                      </span>
                    </div>
                  )}

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4" style={{ color: '#FFFFFF' }} />
                      <h3 className="font-bold text-lg" style={{ color: '#FFFFFF' }}>{outlet.name}</h3>
                    </div>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{outlet.area}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {outlet.address}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link
                      href={outlet.mapsUrl}
                      target="_blank"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 font-semibold rounded-xl text-sm transition-all duration-300 hover:bg-[#E31837] hover:text-white"
                      style={{
                        border: '2px solid #E31837',
                        color: '#E31837',
                      }}
                    >
                      <Navigation className="w-4 h-4" />
                      Directions
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 font-semibold rounded-xl text-sm text-white transition-all duration-300 hover:shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}
                    >
                      Reservasi
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

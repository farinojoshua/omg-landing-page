import Image from 'next/image';
import { Award, Clock, Utensils, Sparkles, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const values = [
  {
    icon: Utensils,
    title: 'Makanan Enak',
    description: 'Penyajian bahan makanan yang enak',
  },
  {
    icon: Sparkles,
    title: 'Tren Terkini',
    description: 'Penyajian bahan makanan yang mengikuti tren terkini',
  },
  {
    icon: Award,
    title: 'Kualitas Maksimal',
    description: 'Penyajian bahan makanan dengan kualitas maksimal dari harga terbaik',
  },
  {
    icon: Clock,
    title: 'Cepat & Tanpa Jeda',
    description: 'Penyajian bahan makanan dengan cepat dan tanpa jeda',
  },
  {
    icon: Shield,
    title: 'Higienis & Bergizi',
    description: 'Penyajian bahan makanan yang higienis dan kaya gizi',
  },
];

export default function AboutPage() {
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
              left: '10%',
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
              Tentang Kami
            </span>
            <h1 
              className="font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#FFFFFF' }}
            >
              PT OMG Sukses Betul
            </h1>
            <p className="text-lg max-w-[600px] mx-auto" style={{ color: '#D1D5DB' }}>
              Perjalanan kami dalam menghadirkan pengalaman All You Can Eat BBQ terbaik
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

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop"
                  alt="Oh My Grill Restaurant"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              {/* Stats Badge */}
              <div 
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
                style={{ border: '2px solid #E31837' }}
              >
                <div className="text-center">
                  <span className="block text-4xl font-extrabold" style={{ color: '#E31837' }}>2019</span>
                  <span className="text-sm text-gray-500">Didirikan</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ background: 'rgba(227, 24, 55, 0.1)', color: '#E31837' }}
              >
                Cerita Kami
              </span>
              <h2 
                className="font-bold mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Perjalanan{' '}
                <span 
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}
                >
                  Oh My Grill
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Perjalanan kami dimulai pada tanggal <strong>5 Juli 2019</strong> ketika outlet pertama kami dibuka di Kelapa Gading. Restoran kami fokus kepada pelayanan jasa masak mandiri di tempat dalam bentuk buffet atau yang lebih umum dikenal dengan konsep <strong>All You Can Eat (AYCE)</strong>.
                </p>
                <p>
                  Menu-menu yang kami tawarkan adalah menu yang dapat dinikmati sesudah dipanggang ataupun direbus bersama-sama di dalam satu panci (shabu-shabu). Di dalam meracik menu, kami tidak hanya terpaku kepada karakteristik khas suatu negara. Menu-menu kami adalah resep original yang merupakan fusi ataupun adaptasi dari berbagai menu di seluruh dunia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Halal Certification */}
      <section className="py-16" style={{ background: '#F9FAFB' }}>
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div 
            className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
            style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}
          >
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <span className="text-4xl">🏅</span>
              </div>
            </div>
            <div className="text-center md:text-left text-white">
              <h3 className="text-2xl font-bold mb-2">Sertifikat Halal</h3>
              <p className="mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Kami memperoleh sertifikat halal dengan nomor <strong>ID31110001292550622</strong> dari Badan Penyelenggara Jaminan Produk Halal.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                Diterbitkan pada tanggal <strong>2 Januari 2023</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ background: 'rgba(227, 24, 55, 0.1)', color: '#E31837' }}
            >
              Nilai-Nilai Kami
            </span>
            <h2 
              className="font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Yang Kami{' '}
              <span 
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}
              >
                Utamakan
              </span>
            </h2>
            <p className="text-lg max-w-[600px] mx-auto" style={{ color: '#6B7280' }}>
              Sampai hari ini kami tetap fokus kepada layanan yang mengutamakan kualitas terbaik
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2"
                style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                <div 
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(227, 24, 55, 0.1)' }}
                >
                  <value.icon className="w-8 h-8" style={{ color: '#E31837' }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p style={{ color: '#6B7280' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

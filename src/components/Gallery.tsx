'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&h=600&fit=crop',
    alt: 'BBQ Grill',
    label: 'Fresh from the Grill',
    category: 'Daging Sapi',
  },
  {
    src: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&h=600&fit=crop',
    alt: 'Wagyu Steak',
    label: 'Wagyu Steak',
    category: 'Premium',
  },
  {
    src: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&h=600&fit=crop',
    alt: 'Beef Saikoro',
    label: 'Beef Saikoro',
    category: 'Premium',
  },
  {
    src: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&h=600&fit=crop',
    alt: 'Ayam Bulgogi',
    label: 'Oh My Gogi Ayam',
    category: 'Daging Ayam',
  },
  {
    src: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&h=600&fit=crop',
    alt: 'Grand Oyster',
    label: 'Grand Oyster',
    category: 'Premium',
  },
  {
    src: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=600&fit=crop',
    alt: 'Side Dish',
    label: 'Side Dish Gorengan',
    category: 'Side Dish',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightbox === null) return;
    const currentIdx = galleryImages.findIndex((_, i) => i === lightbox);
    if (direction === 'prev') {
      setLightbox(currentIdx === 0 ? galleryImages.length - 1 : currentIdx - 1);
    } else {
      setLightbox((currentIdx + 1) % galleryImages.length);
    }
  };

  return (
    <>
      <section id="gallery" className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-40 h-40 rounded-full blur-[80px]" style={{ background: 'rgba(227, 24, 55, 0.08)' }} />
        <div className="absolute top-20 right-10 w-20 h-20 rounded-full blur-[50px]" style={{ background: 'rgba(227, 24, 55, 0.06)' }} />

        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: 'rgba(227, 24, 55, 0.1)', color: '#E31837' }}
            >
              📸 Gallery
            </span>
            <h2 
              className="font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Lihat{' '}
              <span className="gradient-text">Kelezatannya</span>
            </h2>
            <p className="text-lg max-w-[600px] mx-auto mb-8" style={{ color: '#6B7280' }}>
              Intip suasana dan hidangan lezat yang menunggu kamu
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? 'bg-[#E31837] text-white shadow-lg shadow-[#E31837]/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid - Masonry Style */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredImages.map((image, idx) => (
              <div
                key={idx}
                onClick={() => setLightbox(galleryImages.indexOf(image))}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group img-zoom hover-lift ${
                  idx === 0 || idx === 5 ? 'row-span-2 h-[420px]' : 'h-[200px]'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                
                {/* Always visible overlay with label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                      style={{ background: 'rgba(227, 24, 55, 0.9)', color: '#FFFFFF' }}
                    >
                      {image.category}
                    </span>
                    <h4 className="font-bold text-lg" style={{ color: '#FFFFFF' }}>{image.label}</h4>
                  </div>
                </div>

                {/* Zoom icon on hover */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-lg">🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
          style={{ background: 'rgba(0, 0, 0, 0.95)' }}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => navigateLightbox('prev')}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => navigateLightbox('next')}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="relative max-w-5xl w-full">
            <Image
              src={galleryImages[lightbox].src.replace('w=600', 'w=1200').replace('w=800', 'w=1200')}
              alt={galleryImages[lightbox].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                style={{ background: '#E31837', color: '#FFFFFF' }}
              >
                {galleryImages[lightbox].category}
              </span>
              <h4 className="font-bold text-xl" style={{ color: '#FFFFFF' }}>{galleryImages[lightbox].label}</h4>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setLightbox(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden transition-all ${
                  lightbox === idx ? 'ring-2 ring-[#E31837] scale-110' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={64}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

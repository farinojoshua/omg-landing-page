'use client';

import { useState } from 'react';
import { MapPin, Mail, Clock, Send, Calendar, Users, Utensils, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Swal from 'sweetalert2';

const outlets = [
  { name: 'Kelapa Gading', area: 'Jakarta Utara' },
  { name: 'Jatiwaringin', area: 'Bekasi' },
  { name: 'Margonda', area: 'Depok' },
  { name: 'Kota Bogor', area: 'Bogor' },
  { name: 'Galaxy', area: 'Bekasi' },
  { name: 'Tanjung Duren', area: 'Jakarta Barat' },
  { name: 'Kemang', area: 'Jakarta Selatan' },
];

const benefits = [
  { icon: Utensils, text: 'Menu lengkap tersedia' },
  { icon: CheckCircle, text: 'Konfirmasi cepat' },
  { icon: Users, text: 'Grup besar welcome' },
  { icon: Calendar, text: 'Jadwal fleksibel' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    outlet: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    Swal.fire({
      icon: 'success',
      title: 'Reservasi Berhasil! 🎉',
      html: `
        <p style="margin-bottom: 10px;">Terima kasih <strong>${formData.name}</strong>!</p>
        <p style="color: #666;">Reservasi untuk <strong>${formData.guests} orang</strong> di outlet <strong>${formData.outlet}</strong></p>
        <p style="color: #666; margin-top: 5px;">Tanggal: <strong>${formData.date}</strong> pukul <strong>${formData.time}</strong></p>
        <p style="margin-top: 15px; font-size: 14px; color: #888;">Tim kami akan menghubungi kamu via WhatsApp untuk konfirmasi.</p>
      `,
      confirmButtonText: 'Oke, Terima Kasih!',
      confirmButtonColor: '#E31837',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      outlet: '',
      date: '',
      time: '',
      guests: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              right: '20%',
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
              📅 Reservasi
            </span>
            <h1 
              className="font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#FFFFFF' }}
            >
              Booking Meja Sekarang
            </h1>
            <p className="text-lg max-w-[600px] mx-auto" style={{ color: '#D1D5DB' }}>
              Isi form di bawah dan kami akan segera menghubungi kamu untuk konfirmasi
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

      {/* Reservation Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Side - Benefits & Info */}
            <div className="lg:col-span-2">
              {/* Benefits */}
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-6">Kenapa Reservasi?</h3>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ background: 'rgba(227, 24, 55, 0.05)' }}
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(227, 24, 55, 0.1)' }}>
                        <benefit.icon className="w-5 h-5" style={{ color: '#E31837' }} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: '#F9FAFB' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(227, 24, 55, 0.1)' }}>
                    <Mail className="w-5 h-5" style={{ color: '#E31837' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@ohmygrill.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: '#F9FAFB' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(227, 24, 55, 0.1)' }}>
                    <Clock className="w-5 h-5" style={{ color: '#E31837' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Jam Operasional</h4>
                    <p className="text-gray-600">Senin - Jumat: 11:00 - 22:00</p>
                    <p className="text-gray-600">Sabtu - Minggu: 10:00 - 22:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: '#F9FAFB' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(227, 24, 55, 0.1)' }}>
                    <MapPin className="w-5 h-5" style={{ color: '#E31837' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lokasi</h4>
                    <p className="text-gray-600">7 outlet di Jabodetabek</p>
                  </div>
                </div>
              </div>

              {/* Promo Banner */}
              <div 
                className="rounded-2xl p-6 text-center"
                style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}
              >
                <span className="text-4xl mb-3 block">🔥</span>
                <h4 className="font-bold text-lg mb-2" style={{ color: '#FFFFFF' }}>Promo Spesial</h4>
                <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Anak di bawah 5 tahun <strong>GRATIS!</strong>
                </p>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium" style={{ color: '#FFFFFF' }}>
                  Mulai dari Rp 99.000/pax
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-3">
              <div 
                className="rounded-3xl p-8 lg:p-10"
                style={{ 
                  background: 'white',
                  boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.15)',
                  border: '1px solid #E5E7EB',
                }}
              >
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}>
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Form Reservasi</h3>
                        <p className="text-gray-500 text-sm">Isi data lengkap untuk booking</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-2">Nama Lengkap *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E31837] focus:ring-2 focus:ring-[#E31837]/20 transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">No. WhatsApp *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E31837] focus:ring-2 focus:ring-[#E31837]/20 transition-all"
                            placeholder="08xxxxxxxxxx"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E31837] focus:ring-2 focus:ring-[#E31837]/20 transition-all"
                          placeholder="email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Pilih Outlet *</label>
                        <select
                          name="outlet"
                          value={formData.outlet}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E31837] focus:ring-2 focus:ring-[#E31837]/20 transition-all appearance-none bg-white"
                        >
                          <option value="">Pilih outlet...</option>
                          {outlets.map((outlet) => (
                            <option key={outlet.name} value={outlet.name}>
                              {outlet.name} - {outlet.area}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div>
                          <label className="block text-sm font-medium mb-2">Tanggal *</label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E31837] focus:ring-2 focus:ring-[#E31837]/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Waktu *</label>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E31837] focus:ring-2 focus:ring-[#E31837]/20 transition-all appearance-none bg-white"
                          >
                            <option value="">Pilih waktu...</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Jumlah Tamu *</label>
                          <input
                            type="number"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            required
                            min="1"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E31837] focus:ring-2 focus:ring-[#E31837]/20 transition-all"
                            placeholder="2"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Pesan Tambahan</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E31837] focus:ring-2 focus:ring-[#E31837]/20 transition-all resize-none"
                          placeholder="Catatan khusus, ulang tahun, dll..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 font-bold rounded-2xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl flex items-center justify-center gap-3"
                        style={{ background: 'linear-gradient(135deg, #E31837 0%, #B91229 100%)' }}
                      >
                        <Send className="w-5 h-5" />
                        Kirim Reservasi
                      </button>

                      <p className="text-center text-xs text-gray-400">
                        Dengan mengirim form, kamu menyetujui untuk dihubungi melalui WhatsApp/Email
                      </p>
                    </form>
                  </>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

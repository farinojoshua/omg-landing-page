import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuPackages from '@/components/MenuPackages';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Outlets from '@/components/Outlets';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuPackages />
        <Gallery />
        <Testimonials />
        <Outlets />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

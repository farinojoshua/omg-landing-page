'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/menu', label: 'Menu' },
    { href: '/outlets', label: 'Outlets' },
  ];

  const isHomePage = pathname === '/';
  const navBg = isScrolled || !isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        navBg
          ? 'bg-white/95 backdrop-blur-[10px] shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Oh My Grill Logo"
            width={50}
            height={50}
            className={`rounded-full transition-all ${navBg ? 'h-[45px] w-[45px]' : 'h-[50px] w-[50px]'}`}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-[1001]"
          aria-label="Toggle menu"
        >
          <span
            className={`w-[25px] h-0.5 transition-all duration-300 ${
              isMobileMenuOpen
                ? 'rotate-45 translate-y-[7px] bg-gray-800'
                : navBg
                ? 'bg-gray-800'
                : 'bg-white'
            }`}
          />
          <span
            className={`w-[25px] h-0.5 transition-all duration-300 ${
              isMobileMenuOpen
                ? 'opacity-0'
                : navBg
                ? 'bg-gray-800'
                : 'bg-white'
            }`}
          />
          <span
            className={`w-[25px] h-0.5 transition-all duration-300 ${
              isMobileMenuOpen
                ? '-rotate-45 -translate-y-[7px] bg-gray-800'
                : navBg
                ? 'bg-gray-800'
                : 'bg-white'
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-[#E31837] after:transition-all ${
                  pathname === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                } ${navBg ? 'text-gray-700' : 'text-white'}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-[#E31837] to-[#B91229] text-white font-semibold rounded-full border-2 border-[#E31837] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(227,24,55,0.3)]"
            >
              Reservasi
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 w-4/5 max-w-[300px] h-screen bg-white shadow-xl transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'right-0' : '-right-full'
          }`}
        >
          <ul className="flex flex-col items-start gap-6 pt-24 px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium text-lg ${
                    pathname === link.href ? 'text-[#E31837]' : 'text-gray-800'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-br from-[#E31837] to-[#B91229] text-white font-semibold rounded-full"
              >
                Reservasi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

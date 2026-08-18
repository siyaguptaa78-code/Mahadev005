'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../UI/Logo';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Online Slots', path: '/online-slots' },
  { name: 'Online Casino', path: '/online-casino' },
  { name: 'Cricket Betting', path: '/cricket-betting' },
  { name: 'Blogs', path: '/blog' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/919412834207";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#181818] shadow-lg py-3' 
        : 'bg-[#181818]/90 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-[#ffbc00]' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-[#ff9900] to-[#ffbc00] text-black font-bold text-sm rounded shadow-[0_0_15px_rgba(255,188,0,0.6)] hover:shadow-[0_0_20px_rgba(255,188,0,0.8)] transition-shadow"
            >
              PLAY NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#ffbc00] transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-[#181818] px-4 py-6 overflow-y-auto border-t border-gray-800">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-lg font-semibold transition-colors ${
                    isActive 
                      ? 'bg-[#ffbc00]/10 text-[#ffbc00] border border-[#ffbc00]/20' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-4 bg-gradient-to-r from-[#ff9900] to-[#ffbc00] text-black font-bold text-lg rounded shadow-[0_0_15px_rgba(255,188,0,0.4)]"
              >
                PLAY NOW
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

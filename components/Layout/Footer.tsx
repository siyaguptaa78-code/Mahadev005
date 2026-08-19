import React from 'react';
import Link from 'next/link';
import Logo from '../UI/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800 text-gray-400 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-400 leading-relaxed">
              Discover the unrivaled excellence of Mahadev Book, the pinnacle of online betting in India. Immerse yourself in a world of passion and skill as you engage with like-minded players, embark on thrilling challenges, and unveil your true gaming potential.
            </p>
          </div>

          {/* Column 2: Support Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Privacy & Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Contact Us</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Responsible Gaming</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Partner Websites */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">
              PARTNER WEBSITES
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="https://reddybookie.site/" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Reddy Bookie</Link>
              </li>
              <li>
                <Link href="https://reddybookie.live/" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Reddy Bookie Live</Link>
              </li>
              <li>
                <Link href="https://mahadevbookie.site/" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Mahadev Bookie Site</Link>
              </li>
              <li>
                <Link href="https://mahadevbookie.shop/" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Mahadev Bookie Shop</Link>
              </li>
              <li>
                <Link href="https://bet-vault.com/" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Bet Vault</Link>
              </li>
              <li>
                <Link href="https://reddybookie.site/" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Reddy Bookie Site</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Games & Social */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">
              OUR GAMES
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Online Slots</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Online Casino</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-400 transition-colors underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">Cricket Betting</Link>
              </li>
            </ul>
            <div className="flex gap-4 pt-4 text-white">
              <a href="#" className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity text-white font-bold text-xs">
                F
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity text-white font-bold text-xs">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity text-white font-bold text-xs">
                YT
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col justify-center items-center gap-6 text-xs text-center">
          <p className="text-gray-500 max-w-4xl leading-relaxed">
            Mahadev Book is an educational sports insights portal. All information on this portal is for entertainment purposes only. Play all sports at your own risk. We are not responsible for any losses incurred due to incorrect information. This site is meant for users above 18 years of age. Always use a responsible gambling approach, and never invest more money than you are willing to lose.
          </p>
          <p className="text-gray-500">
            &copy; {currentYear} Mahadev Book. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

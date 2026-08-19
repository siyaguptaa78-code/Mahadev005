import React from 'react';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/919412834207";

  return (
    <section className="relative min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-12 pt-20 pb-16 overflow-hidden">
      {/* Background Image using Next/Image for optimization */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium Sports Background" 
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-[#111111]/40"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-3/5 lg:w-[65%]">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#ffbc00] leading-[1.1] mb-8 tracking-tight">
            Mahadev Book Online Betting & Sports Platform
          </h1>
          
          <div className="space-y-6 text-base md:text-lg text-gray-200 font-medium leading-relaxed max-w-3xl mb-10">
            <p>
              Welcome to <strong className="text-white font-bold">Mahadev Book India</strong>. Access premium sports betting, live casino experiences, and competitive odds. Designed with user convenience in mind, we offer a dedicated platform for users seeking reliable sports markets.
            </p>
            <p>
              Whether you're interested in cricket markets or immersive casino games, <strong className="text-white font-bold">Mahadev Book</strong> provides an easy-to-use interface and responsive WhatsApp support to manage your ID and queries.
            </p>
          </div>
          
          <a 
            href={whatsappUrl} 
            className="inline-flex items-center gap-2 bg-[#ffbc00] hover:bg-[#e0a800] text-black font-bold px-10 py-4 rounded text-lg transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
          >
            <MessageCircle className="w-5 h-5" />
            Get Your ID Now
          </a>
        </div>
      </div>
    </section>
  );
}

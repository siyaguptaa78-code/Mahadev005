import React from 'react';
import Image from 'next/image';

export default function Introduction() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              What Is <span className="text-[#ffbc00]">Mahadev Book</span>?
            </h2>
            
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                Mahadev Book is a comprehensive online platform designed to provide users with access to a wide array of sports betting markets and interactive casino environments. We serve as a centralized hub for enthusiasts who wish to engage with live events and virtual gaming options.
              </p>
              <p>
                Our system focuses on accessibility and reliability. Instead of navigating complex automated portals, users can interact directly with our team via WhatsApp to manage their accounts, request their unique ID, and receive personalized assistance.
              </p>
              <p>
                Whether you prefer the strategy of cricket match predictions or the fast-paced environment of online slot games, Mahadev Book aggregates these experiences into one secure and manageable platform.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-[#ffbc00] pl-4">
                <h4 className="text-white font-bold text-xl">Direct Access</h4>
                <p className="text-sm text-gray-500 mt-2">No complicated signup forms. Connect via messaging.</p>
              </div>
              <div className="border-l-2 border-[#ffbc00] pl-4">
                <h4 className="text-white font-bold text-xl">Diverse Markets</h4>
                <p className="text-sm text-gray-500 mt-2">From major sporting leagues to virtual environments.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[#1a1a1a] rounded-3xl -rotate-6"></div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-[#ffbc00]/10 border border-[#ffbc00]/20 rounded-3xl rotate-3"></div>
              
              <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-2xl bg-black">
                <Image 
                  src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop" 
                  alt="Sports betting environment" 
                  fill
                  className="object-cover opacity-80 mix-blend-luminosity"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

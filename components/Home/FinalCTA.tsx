import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  const whatsappUrl = "https://wa.me/919412834207";

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#111111]">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-3xl p-10 md:p-16 text-center border border-gray-800 relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[150px] bg-[#ffbc00]/5 blur-[80px] pointer-events-none rounded-full"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore Our Markets?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Our support team is available via WhatsApp to help you register and configure your account.
          </p>
          
          <a 
            href={whatsappUrl} 
            className="inline-flex items-center gap-3 bg-[#ffbc00] text-black px-10 py-4 text-lg font-bold rounded-xl hover:bg-[#e0a800] transition-colors focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
          >
            <MessageCircle className="w-6 h-6" />
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}

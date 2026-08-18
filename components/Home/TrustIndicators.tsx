import React from 'react';
import { MessageCircle, Smartphone, LayoutGrid, ShieldCheck } from 'lucide-react';

const indicators = [
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    desc: "Connect directly with our team for account assistance and queries."
  },
  {
    icon: Smartphone,
    title: "Mobile Compatible",
    desc: "Access your account and place bets seamlessly across all devices."
  },
  {
    icon: LayoutGrid,
    title: "Multiple Categories",
    desc: "Explore cricket, sports, and online casino games in one platform."
  },
  {
    icon: ShieldCheck,
    title: "Secure Login",
    desc: "We prioritize user privacy and secure access to all accounts."
  }
];

export default function TrustIndicators() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#0a0a0a] border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-start gap-4 p-6 rounded-xl bg-[#111111] border border-gray-800 transition-colors hover:border-gray-700"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#ffbc00]">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

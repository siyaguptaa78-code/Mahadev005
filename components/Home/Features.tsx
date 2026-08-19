import React from 'react';
import { Headphones, MonitorSmartphone, LayoutDashboard, UserCheck } from 'lucide-react';

const features = [
  { 
    icon: Headphones, 
    title: "Direct Support", 
    desc: "Bypass automated bots and connect directly with our support team via WhatsApp for immediate assistance regarding your account or platform queries." 
  },
  { 
    icon: MonitorSmartphone, 
    title: "Mobile Accessibility", 
    desc: "Our platform is fully optimized for mobile browsers, ensuring you can access sports markets and casino games smoothly from any device." 
  },
  { 
    icon: LayoutDashboard, 
    title: "Diverse Catalog", 
    desc: "Access a wide variety of options including major international cricket tournaments, football leagues, and interactive virtual slot games." 
  },
  { 
    icon: UserCheck, 
    title: "Streamlined Setup", 
    desc: "We have simplified the onboarding process. Simply message our team to verify your details and receive your unique platform ID." 
  }
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Platform Advantages</h2>
          <p className="text-lg text-gray-400">
            We focus on providing a stable, accessible, and user-centric environment. Here are the core features of the Mahadev Book platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-[#111111] p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors h-full flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1a1a1a] text-[#ffbc00]">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed flex-grow">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">With One Verified Betting ID, You Can Access...</h3>
            <p className="text-gray-400">A single account provides entry to our complete premium catalog.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Cricket', 'Football', 'Tennis', 'Basketball', 'Casino', 'Live Casino', 'Slots', 'Horse Racing'].map((game, idx) => (
              <div key={idx} className="bg-[#111111] border border-gray-800 rounded-full px-6 py-3 text-white font-medium hover:border-[#ffbc00] transition-colors flex items-center shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#ffbc00] mr-3"></span>
                {game}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

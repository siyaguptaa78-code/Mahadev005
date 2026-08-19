import React from 'react';
import Image from 'next/image';

export default function InformationSections() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#111111] border-y border-gray-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section 1: About */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-gray-800">
          <div className="flex justify-start mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ffbc00]">
              About Mahadev Book
            </h2>
          </div>
          <div className="text-gray-300 space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              Mahadev Book is an online betting and gaming platform built for players who want variety, reliability, and a secure <span className="text-[#ffbc00]">live cricket betting</span> experience in India. We cover a wide range of betting markets, including cricket, football, and tennis, as well as real-money gaming options such as live dealer games and casino games. Every match and game session runs on competitive odds, secure transactions, and stable technology designed to keep gameplay smooth even under high traffic.
            </p>
            <p>
              Whether you're placing a sports betting wager on a live match or joining a live dealer table for real-time casino action, Mahadev Book brings betting markets and gaming options together under one platform built for consistency and reliability across India.
            </p>
          </div>
        </div>

        {/* Section 2: Mission */}
        <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 flex flex-col md:flex-row">
          <div className="md:w-2/5 relative h-72 md:h-auto">
            <Image 
              src="/mission_image.jpg"
              alt="Mission and Responsibility"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="md:w-3/5 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#ffbc00] mb-6">
              Who We Are: Mission & Responsibility
            </h3>
            <div className="text-gray-300 space-y-6 text-sm md:text-base leading-relaxed">
              <p>
                At Mahadev Book, our mission is to provide a secure, user-friendly, and highly rewarding online betting and <span className="text-[#ffbc00]">responsible gaming</span> environment for every player.
              </p>
              <p>
                Every part of that experience is backed by real safety protocols.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#ffbc00]">
                <li><span className="text-gray-300">Encrypted transactions protect your funds.</span></li>
                <li><span className="text-gray-300">Strict privacy policies safeguard your data.</span></li>
                <li><span className="text-gray-300">Dedicated support for a seamless experience.</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

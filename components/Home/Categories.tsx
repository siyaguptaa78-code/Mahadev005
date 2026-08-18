import React from 'react';
import Image from 'next/image';

const categories = [
  {
    title: "Cricket Betting",
    desc: "Access markets for major international tournaments, IPL matches, and domestic leagues.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Online Casino",
    desc: "Experience virtual table games, card games, and live dealer environments.",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Online Slots",
    desc: "A wide variety of interactive slot games featuring different themes and mechanics.",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Global Sports",
    desc: "Markets available for football, tennis, and other major sporting events worldwide.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Categories() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#111111] border-y border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Available Categories</h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Explore the different environments and markets supported by Mahadev Book.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-gray-800 flex flex-col h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative z-10 -mt-8 bg-gradient-to-b from-transparent to-[#1a1a1a]">
                <h3 className="text-xl font-bold text-white mb-3 pt-4">{cat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

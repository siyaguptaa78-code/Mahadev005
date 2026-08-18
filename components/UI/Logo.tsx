import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-white font-bold text-3xl tracking-tight">
        Mahadev<span className="text-[#ffbc00]">Book</span>
      </span>
    </div>
  );
}

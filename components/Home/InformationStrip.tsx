import React from 'react';
import { Info } from 'lucide-react';

export default function InformationStrip() {
  return (
    <div className="bg-[#1a1a1a] border-b border-gray-900 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center">
        <div className="flex items-center gap-2 text-[#ffbc00] font-semibold text-sm mr-4 whitespace-nowrap bg-[#1a1a1a] z-10 pr-4">
          <Info className="w-4 h-4" />
          <span>Platform Notice:</span>
        </div>
        <div className="flex-1 overflow-hidden relative">
          <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] md:animate-none md:whitespace-normal text-gray-300 text-sm">
            <span className="hidden md:inline">
              Mahadev Book currently supports sports markets, online casino environments, and virtual slots. All users must be 18+ to access the platform.
            </span>
            <span className="md:hidden">
              Mahadev Book supports sports markets, online casino environments, and virtual slots. Users must be 18+ to access.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

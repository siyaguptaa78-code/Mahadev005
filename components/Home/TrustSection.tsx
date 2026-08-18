import React from 'react';
import { Lock, Shield, CheckCircle } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#111111] border-y border-gray-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ffbc00]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Platform Security & Verification</h2>
          <p className="text-lg text-gray-400">
            We employ standard protocols to ensure user privacy and maintain a stable operating environment for all participants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#ffbc00]/10 flex items-center justify-center mb-6 text-[#ffbc00]">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Privacy Protection</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Account details and communication logs are kept strictly confidential. We do not share your contact information with external marketing agencies.
            </p>
          </div>
          
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 text-center relative transform md:-translate-y-4 shadow-2xl border-t-[#ffbc00]/30">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#ffbc00]/10 flex items-center justify-center mb-6 text-[#ffbc00]">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Verified Operations</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              All transactions and account allocations are handled through direct human support to minimize errors and prevent automated fraud.
            </p>
          </div>
          
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#ffbc00]/10 flex items-center justify-center mb-6 text-[#ffbc00]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Transparent Structure</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We maintain clear communication regarding platform rules. Any changes to operations or market availability are communicated directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

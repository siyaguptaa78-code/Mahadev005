'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { 
    q: "How do I create a new account?", 
    a: "We do not use automated web forms. To create an account, contact our support team via WhatsApp. They will provide you with the necessary verification steps and issue your login ID." 
  },
  { 
    q: "What payment methods are supported?", 
    a: "We accept standard Indian payment methods including UPI and major bank transfers. Please confirm the currently active payment details with our support team before initiating any transfer." 
  },
  { 
    q: "How are withdrawals processed?", 
    a: "Withdrawals are processed manually upon request. Send a withdrawal request through WhatsApp with your ID and registered payment details. Processing times vary based on banking hours." 
  },
  { 
    q: "Is there an official mobile application?", 
    a: "Yes, we provide access to our mobile environment. You can request the installation link directly from our support staff once your account is active." 
  },
  {
    q: "What should I do if I forget my password?",
    a: "Message our WhatsApp support from your registered mobile number requesting a password reset. For security reasons, we cannot process resets from unrecognized numbers."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden transition-colors hover:border-gray-700"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#ffbc00] focus:bg-[#1a1a1a]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className={`font-semibold text-lg pr-8 ${isOpen ? 'text-[#ffbc00]' : 'text-gray-200'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${isOpen ? 'bg-[#ffbc00]/10 text-[#ffbc00]' : 'bg-[#1a1a1a] text-gray-400'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div 
                  id={`faq-answer-${idx}`}
                  role="region"
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

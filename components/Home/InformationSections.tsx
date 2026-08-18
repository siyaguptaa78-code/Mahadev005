import React from 'react';

export default function InformationSections() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-bold text-white mb-6 sticky top-28">
            Platform Operations & Guidelines
          </h2>
        </div>
        
        <div className="lg:w-2/3 space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-[#ffbc00] mb-4">How to Obtain an Account ID</h3>
            <div className="text-gray-400 leading-relaxed space-y-4">
              <p>
                Unlike standard automated registration platforms, Mahadev Book utilizes a direct communication model to ensure user authenticity and provide immediate assistance.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-300">
                <li>Initiate a request via our official WhatsApp support number.</li>
                <li>Our team will guide you through the verification process.</li>
                <li>Once confirmed, you will receive your unique login credentials and platform ID directly in the chat.</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-12">
            <h3 className="text-2xl font-bold text-[#ffbc00] mb-4">Payment & Withdrawal Methods</h3>
            <div className="text-gray-400 leading-relaxed space-y-4">
              <p>
                We support standardized Indian payment gateways to ensure accessible transactions for our users. All deposit and withdrawal requests are processed through our support team.
              </p>
              <p>
                Supported methods include standard UPI applications and bank transfers. Withdrawal requests must be initiated via WhatsApp, and processing times depend on standard banking operational hours.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-12">
            <h3 className="text-2xl font-bold text-[#ffbc00] mb-4">Responsible Gaming Policy</h3>
            <div className="text-gray-400 leading-relaxed space-y-4">
              <p>
                Mahadev Book is committed to promoting a responsible environment. Sports betting and casino games involve financial risk and should be treated as entertainment, not a reliable source of income.
              </p>
              <p>
                Users must be 18 years or older to participate. We strongly advise setting personal limits and never risking funds required for essential daily living. If you require assistance regarding your usage, please contact our support team.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

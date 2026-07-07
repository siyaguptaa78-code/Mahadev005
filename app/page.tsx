'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Reveal from '../components/UI/Reveal';
import { 
  Shield, TrendingUp, Headphones, Zap, Check, Star, Lock, Award, ArrowRight,
  MessageSquare, HelpCircle, Plus, Minus, Trophy, Activity
} from 'lucide-react';

const stats = [
  { value: '1.2M+', label: 'Active Users', desc: 'Trusted since 2018' },
  { value: '60K+', label: 'Events / Month', desc: 'Live sports & games' },
  { value: '24/7', label: 'Support Speed', desc: 'Average response < 1m' }
];

const games = [
  { title: "Cricket Betting", desc: "Live IPL, International matches, T20 leagues with competitive odds and real-time markets.", icon: "🏏" },
  { title: "Football Leagues", desc: "Bet on Premier League, Champions League, La Liga, and Indian Super League events.", icon: "⚽" },
  { title: "Live Casino", desc: "Enjoy live dealer streams of Teen Patti, Andar Bahar, Roulette, and Poker from home.", icon: "🃏" },
  { title: "Tennis Matches", desc: "Place real-time bets on Grand Slams, ATP tour, and WTA tour tournaments.", icon: "🎾" },
  { title: "Virtual Sports", desc: "Fast-paced digital cricket, football and racing simulations available 24 hours a day.", icon: "🎮" }
];

const features = [
  { title: "Secure Payments", desc: "UPI, GPay, Paytm, PhonePe, and local bank transfers with 256-bit encryption.", icon: Shield },
  { title: "Fast Payouts", desc: "Direct bank transfer withdrawals processed in 5-10 minutes flat.", icon: Zap },
  { title: "Data Insights", desc: "Free prediction models, player stats, and historical head-to-head analysis.", icon: TrendingUp },
  { title: "24/7 WhatsApp help", desc: "Dedicated personal relationship managers to assist you instantly.", icon: Headphones }
];

const reviews = [
  { name: "Rahul S.", location: "Mumbai", comment: "Withdrawal credited within 5 minutes! Best platform I've used.", rating: 5 },
  { name: "Priya K.", location: "Delhi", comment: "Got my ID the same day. Super smooth process and amazing support team!", rating: 5 },
  { name: "Vikram M.", location: "Bangalore", comment: "IPL betting experience was incredible. Real-time updates and fast payouts.", rating: 5 },
  { name: "Ankit T.", location: "Pune", comment: "100% genuine platform. I trust Mahadev Book for all my betting.", rating: 5 },
  { name: "Suresh P.", location: "Hyderabad", comment: "Best customer service! They resolved my issue in minutes via WhatsApp.", rating: 5 },
  { name: "Riya N.", location: "Chennai", comment: "Mujhe bahut accha experience mila. Payout fast aur secure hai.", rating: 5 }
];

const trustPoints = [
  { title: "Expertise", desc: "Built by sports & gaming veterans with 15+ years of proven innovation.", icon: Award },
  { title: "Experience", desc: "Trusted by 1.2M+ users since 2018 with over 60M successful transactions.", icon: Check },
  { title: "Authority", desc: "Recognized as India's leading betting platform by top industry awards.", icon: Shield },
  { title: "Trust", desc: "SSL encrypted, PCI-DSS compliant, and fair play certified by iTech Labs.", icon: Lock }
];

const faqs = [
  {
    q: "What is Mahadev Book Online Betting ID?",
    a: "The Mahadev Book Online Betting ID is a verified account that lets you access betting services such as cricket, casino, poker, and more. With this ID, users can deposit funds, place bets, and enjoy a secure gaming experience."
  },
  {
    q: "How does Mahadev Book work?",
    a: "Mahadev Book acts as a trusted aggregator. Once you request an ID via WhatsApp, our support agents set up your credentials. You add funds via UPI or bank transfer, receive your betting chips, and log in to the official exchange site. Your winnings can be requested via WhatsApp and are transferred directly to your bank account."
  },
  {
    q: "How do I register for a new Online Betting ID?",
    a: "Simply click on any 'Get ID' button to open a chat with our verified agent on WhatsApp. Send a request, provide basic details (name, contact), choose your deposit amount, and your ID will be generated in less than 5 minutes."
  },
  {
    q: "What games can I play with my Mahadev Book ID?",
    a: "You can bet on all major sports including Cricket (IPL, World Cup, Test matches), Football (Premier League, UEFA), Tennis, and E-sports. You also get access to classic Indian card games like Teen Patti, Andar Bahar, and live casinos."
  },
  {
    q: "How do I deposit money into my Mahadev Book account?",
    a: "Depositing is quick and secure. Our agents will provide verified UPI IDs, GPay details, or bank accounts. Once you make the payment and send a screenshot, your betting chips will be instantly credited to your ID."
  },
  {
    q: "How do I withdraw my winnings?",
    a: "Withdrawals are available 24/7. Text your WhatsApp agent with your ID username and the amount you want to withdraw. Provide your UPI ID or bank account details, and the funds will be transferred to you in 5 to 10 minutes."
  },
  {
    q: "Is Mahadev Book legal in India?",
    a: "Mahadev Book operates in a legal grey area. Online betting is governed by state-specific laws in India. While there is no federal law banning online betting platforms hosted outside India, some states have their own restrictions. We advise users to check local regulations."
  },
  {
    q: "Is Mahadev Book safe and trusted?",
    a: "Yes. With over 1.2 million active users and millions of completed transactions since 2018, Mahadev Book is widely regarded as India's most stable and secure online betting bookmaker."
  }
];

const tickerItems = [
  "🏆 USER_9921 WON ₹45,000 on CSK vs MI!",
  "🔥 USER_8832 WON ₹1,20,000 on Teen Patti!",
  "⚡ USER_4411 WITHDREW ₹75,000 in 4 mins!",
  "🎯 USER_5782 WON ₹88,000 on IND vs AUS!"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/916026703858";

  return (
    <div className="min-h-screen bg-[#11051b] font-sans text-fuchsia-50 overflow-x-hidden">
      
      {/* 1. Hero Section - Massive gradient & bottom text */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-20 pt-32 px-4 sm:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/40 via-[#11051b] to-[#11051b] z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-600/30 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="md:w-2/3">
              <div className="w-64 h-24 flex items-center justify-start mb-10">
                  <img src="https://mahadevbook.game/wp-content/uploads/2025/04/mahadev-online-books-e1765948728912-1024x369.webp" alt="Mahadev Book" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
              </div>
              <h1 className="text-6xl sm:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                MAHADEV <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">OFFICIAL</span>
              </h1>
              <p className="text-xl md:text-2xl text-fuchsia-200/80 max-w-2xl font-light mb-8">
                Welcome to Mahadev Book, the online betting game-changer of all time.
              </p>
              <a href={whatsappUrl} className="inline-block bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-8 py-5 text-lg font-bold uppercase tracking-widest rounded-xl shadow-[0_10px_40px_rgba(217,70,239,0.4)] transition-all transform hover:-translate-y-1">
                Start Playing Now
              </a>
            </div>

            <div className="md:w-1/3 w-full grid grid-cols-2 md:grid-cols-1 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className={`p-6 bg-purple-900/20 border border-fuchsia-500/20 rounded-2xl ${i===1 ? 'md:translate-x-[-20px]' : ''}`}>
                  <div className="text-3xl font-black text-fuchsia-400">{stat.value}</div>
                  <div className="font-bold text-white mb-1">{stat.label}</div>
                  <div className="text-xs text-fuchsia-200/60">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="bg-fuchsia-600 text-white font-black text-xl py-4 overflow-hidden shadow-[0_0_30px_rgba(217,70,239,0.3)] relative z-20">
        <div className="flex gap-12 whitespace-nowrap animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="uppercase tracking-widest">{item}</span>
          ))}
        </div>
      </div>

      {/* What is Mahadev - Asymmetric */}
      <section className="py-32 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
              WHAT IS <br/><span className="text-fuchsia-500">MAHADEV BOOK?</span>
            </h2>
            <p className="text-lg text-fuchsia-200/70 mb-8">
              We bridge the gap between players and premier sportsbooks. With a verified Mahadev Book ID, you gain access to a unified hub for cricket predictions, live odds, and casino events.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-fuchsia-600/5 rounded-[3rem] -rotate-3 scale-105 z-0"></div>
            {features.map((f, i) => (
              <div key={i} className={`bg-[#1e0b2d] p-8 rounded-3xl border border-fuchsia-500/10 relative z-10 ${i%2===1 ? 'sm:mt-12' : ''}`}>
                <f.icon className="w-10 h-10 text-fuchsia-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-2">{f.title}</h4>
                <p className="text-sm text-fuchsia-200/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games */}
      <section className="py-24 bg-[#0a0212] px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-black text-white mb-16">AVAILABLE GAMES</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {games.map((game, i) => (
              <div key={i} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-b from-[#1e0b2d] to-[#11051b] p-8 rounded-3xl border-t border-fuchsia-500/20 group hover:border-fuchsia-500/50 transition-all">
                <div className="w-16 h-16 bg-fuchsia-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {game.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{game.title}</h3>
                <p className="text-fuchsia-200/60 mb-6">{game.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Trust */}
      <section className="py-32 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-black text-white mb-10">PLAYER REVIEWS</h2>
            <div className="space-y-6">
              {reviews.slice(0, 3).map((rev, i) => (
                <div key={i} className="bg-[#1e0b2d] p-6 rounded-2xl border-l-4 border-fuchsia-500">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-bold text-white">{rev.name}</div>
                    <div className="flex text-fuchsia-400">
                      {[...Array(rev.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-fuchsia-200/80 italic">"{rev.comment}"</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black text-white mb-10">WHY TRUST US?</h2>
            <div className="grid grid-cols-2 gap-6">
              {trustPoints.map((tp, i) => (
                <div key={i} className="bg-[#11051b] p-6 rounded-3xl border border-fuchsia-500/10 shadow-[0_0_20px_rgba(217,70,239,0.05)] text-center">
                  <tp.icon className="w-8 h-8 text-fuchsia-500 mx-auto mb-4" />
                  <div className="font-bold text-white mb-2">{tp.title}</div>
                  <div className="text-xs text-fuchsia-200/50">{tp.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#1e0b2d] px-4 sm:px-8 border-t border-fuchsia-500/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center text-white mb-16">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-fuchsia-500/20">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 text-left flex justify-between items-center text-lg font-bold text-white"
                >
                  {faq.q}
                  <span className="text-fuchsia-500 text-2xl">{openFaq === i ? '-' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="pb-6 text-fuchsia-200/70">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <a href={whatsappUrl} className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-2xl shadow-[8px_8px_0px_rgba(37,211,102,0.3)] hover:translate-y-1 hover:shadow-[4px_4px_0px_rgba(37,211,102,0.3)] transition-all z-50">
        <MessageSquare className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}

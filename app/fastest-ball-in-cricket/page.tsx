import React from "react";
import Link from "next/link";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "../../lib/siteConfig";
import Reveal from "../../components/UI/Reveal";

export const metadata: Metadata = {
  title: "Fastest Ball in Cricket: The 100mph Club",
  description: "The fastest ball in cricket history — Shoaib Akhtar's 161.3 km/h — plus the full 100mph club, the fastest bowlers in the world today, and why the record still stands.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/fastest-ball-in-cricket/`,
  },
  openGraph: {
    title: "Fastest Ball in Cricket: The 100mph Club",
    description: "The fastest ball in cricket history — Shoaib Akhtar's 161.3 km/h — plus the full 100mph club, the fastest bowlers in the world today, and why the record still stands.",
    url: `${SITE_CONFIG.url}/fastest-ball-in-cricket/`,
    type: "article",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fastest Ball in Cricket: The 100mph Club",
    description: "The fastest ball in cricket history — Shoaib Akhtar's 161.3 km/h — plus the full 100mph club, the fastest bowlers in the world today, and why the record still stands.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who has bowled the fastest ball in cricket history?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shoaib Akhtar's 161.3 km/h (100.23 mph) delivery for Pakistan against England at the 2003 World Cup in Cape Town holds the distinction of being the fastest ever delivery recorded officially – and the only one to breach the 100 mph threshold."
      }
    },
    {
      "@type": "Question",
      "name": "Who is the fastest bowler in the world?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shoaib Akhtar holds the all-time honour. Among current players, the subcontinent has some of the fastest bowlers in the world, with Umran Malik and Mayank Yadav both bowling well over 150 km/h on a consistent basis. Other noteworthy names include Lockie Ferguson and Naseem Shah."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fastest ball bowled in cricket by an Indian?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fastest ball bowled in cricket by an Indian is Umran Malik's 157 km/h."
      }
    },
    {
      "@type": "Question",
      "name": "Has anyone else bowled a ball of 100 mph in cricket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No – officially, only Shoaib Akhtar has breached the 100 mph threshold in cricket. Shaun Tait and Brett Lee both reached 161.1 km/h (99.9 mph), just short of the mark."
      }
    },
    {
      "@type": "Question",
      "name": "How fast was Jeff Thomson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jeff Thomson's fastest officially recorded delivery was 160.6 km/h – and many a good judge believes that with modern technology, his true peak would likely have measured past Shoaib Akhtar's 161.3 km/h, though it can never be proven."
      }
    }
  ]
};

const jumpLinks = [
  { name: "The Record", href: "#the-record" },
  { name: "The Fastest Deliveries List", href: "#the-fastest-deliveries-list" },
  { name: "Today's Fastest", href: "#todays-fastest" },
  { name: "Why the Record Stands", href: "#why-the-record-stands" },
  { name: "FAQs", href: "#faqs" }
];

const fastestDeliveries = [
  { speed: "161.3 km/h", bowler: "Shoaib Akhtar (PAK)", match: "vs England, World Cup", year: "2003", isRecord: true },
  { speed: "161.1 km/h", bowler: "Shaun Tait (AUS)", match: "vs England, ODI", year: "2010" },
  { speed: "161.1 km/h", bowler: "Brett Lee (AUS)", match: "vs New Zealand, ODI", year: "2005" },
  { speed: "160.6 km/h", bowler: "Jeff Thomson (AUS)", match: "vs West Indies", year: "1975" },
  { speed: "160.4 km/h", bowler: "Mitchell Starc (AUS)", match: "vs New Zealand, Test", year: "2015" }
];

const faqs = [
  {
    q: "Who has bowled the fastest ball in cricket history?",
    a: "Shoaib Akhtar's 161.3 km/h (100.23 mph) delivery for Pakistan against England at the 2003 World Cup in Cape Town holds the distinction of being the fastest ever delivery recorded officially – and the only one to breach the 100 mph threshold."
  },
  {
    q: "Who is the fastest bowler in the world?",
    a: "Shoaib Akhtar holds the all-time honour. Among current players, the subcontinent has some of the fastest bowlers in the world, with Umran Malik and Mayank Yadav both bowling well over 150 km/h on a consistent basis. Other noteworthy names include Lockie Ferguson and Naseem Shah."
  },
  {
    q: "What is the fastest ball bowled in cricket by an Indian?",
    a: "The fastest ball bowled in cricket by an Indian is Umran Malik's 157 km/h."
  },
  {
    q: "Has anyone else bowled a ball of 100 mph in cricket?",
    a: "No – officially, only Shoaib Akhtar has breached the 100 mph threshold in cricket. Shaun Tait and Brett Lee both reached 161.1 km/h (99.9 mph), just short of the mark."
  },
  {
    q: "How fast was Jeff Thomson?",
    a: "Jeff Thomson's fastest officially recorded delivery was 160.6 km/h – and many a good judge believes that with modern technology, his true peak would likely have measured past Shoaib Akhtar's 161.3 km/h, though it can never be proven."
  }
];

export default function FastestBallPage() {
  return (
    <div className="min-h-screen bg-black py-16">
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1 text-zinc-400 hover:text-amber-500 text-sm font-semibold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Insights
          </Link>
        </div>

        {/* Article header */}
        <Reveal>
          <div className="space-y-4 mb-6 pb-6 border-b border-zinc-900">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                Cricket
              </span>
              <span className="text-2xl">⚡</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
              Fastest Ball In Cricket: The 100mph Club
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-xs pt-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>July 14, 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
              <div className="text-zinc-600">By Mahadev Book Analyst</div>
            </div>
          </div>
        </Reveal>

        {/* Jump To links */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-zinc-400 py-3.5 px-4 bg-zinc-950/60 border border-zinc-900 rounded-xl my-6">
            <span className="font-semibold text-amber-500">Jump to:</span>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {jumpLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  <a href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.name}
                  </a>
                  {index < jumpLinks.length - 1 && <span className="text-zinc-700">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Article Body Content */}
        <div className="space-y-8 text-zinc-300 font-light leading-relaxed">
          <Reveal delay={0.15}>
            <p className="text-lg text-zinc-200 border-l-2 border-amber-500 pl-4 py-1 mb-6">
              One ball, twenty-three years, no one has gotten past it. Shoaib Akhtar's 100.23 mph (161.3 km/h) thunderer to Nick Knight at the 2003 World Cup stands as the fastest delivery ever bowled in an international match, the only ball to surpass 100 mph. Everything from biomechanics to strength & conditioning to speed guns has evolved since then, but not the number itself.
            </p>
          </Reveal>

          {/* Section 1: The Record */}
          <section id="the-record" className="scroll-mt-24 space-y-4">
            <Reveal delay={0.2}>
              <h2 className="text-2xl font-serif font-bold text-white mt-8 mb-4">
                The Fastest Ball Ever Bowled In Cricket
              </h2>
            </Reveal>
            <Reveal delay={0.22}>
              <p>
                It happened in Cape Town on 22 February 2003, during Pakistan's Pool A clash against England at the World Cup. Shoaib Akhtar – who'd been publicly campaigning to hit 100mph for three years – finally got his moment, and Nick Knight managed to clip the record ball to leg for no run, making for the most anti-climactic of conclusions to the story. The 'Rawalpindi Express' had already unofficially eclipsed the 100mph barrier twice in 2002, but it was in Cape Town that his 161.3 km/h (100.23 mph) delivery got officially certified as the fastest ever.
              </p>
            </Reveal>
          </section>

          {/* Section 2: Table */}
          <section id="the-fastest-deliveries-list" className="scroll-mt-24 space-y-4">
            <Reveal delay={0.25}>
              <h2 className="text-2xl font-serif font-bold text-white mt-8 mb-4">
                The Fastest Balls Ever Bowled In Cricket History
              </h2>
            </Reveal>
            
            <Reveal delay={0.27}>
              <div className="overflow-x-auto my-6 border border-zinc-900 rounded-xl bg-zinc-950/40">
                <table className="min-w-full divide-y divide-zinc-900">
                  <thead className="bg-zinc-950/80">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-amber-500 uppercase tracking-wider">Speed</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-amber-500 uppercase tracking-wider">Bowler</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-amber-500 uppercase tracking-wider">Match</th>
                      <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-amber-500 uppercase tracking-wider">Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900 bg-transparent">
                    {fastestDeliveries.map((del, index) => (
                      <tr key={index} className={`hover:bg-zinc-900/40 transition-colors ${del.isRecord ? "bg-amber-500/5 font-semibold" : ""}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {del.isRecord ? (
                            <span className="flex items-center gap-1.5 text-amber-400">
                              <span>⚡</span> {del.speed}
                            </span>
                          ) : del.speed}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-300">{del.bowler}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">{del.match}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500">{del.year}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="italic text-zinc-400 text-sm mt-4 leading-relaxed">
                Note the fourth name on the list – Jeff Thomson's 160.6 km/h (99.8 mph) in 1975 is only a fraction off the fastest, and a fair number of experts believe that Thommo likely had even more in his bag than the measurements showed – the technology used to calculate speeds back then wasn't exactly state-of-the-art. Many a good judge would consider him the fastest ever, not just based on stats but on raw power.
              </p>
            </Reveal>
          </section>

          {/* Section 3: Today's Fastest */}
          <section id="todays-fastest" className="scroll-mt-24 space-y-4">
            <Reveal delay={0.32}>
              <h2 className="text-2xl font-serif font-bold text-white mt-8 mb-4">
                The Fastest Bowlers In The World Right Now
              </h2>
            </Reveal>
            <Reveal delay={0.34}>
              <p>
                The current pace-setters in the cricketing world all operate in the high 150s – India's Umran Malik (157 km/h, the fastest ever recorded by an Indian) and Mayank Yadav (who touched 156.7 km/h in his debut IPL season in 2024) represent the sub-continent's hopes, while Lockie Ferguson, Anrich Nortje and Naseem Shah can consistently bowl over 150 km/h. Speeds can fluctuate, so check back each season for updated numbers – every T20 league and international summer provides fresh readings.
              </p>
            </Reveal>
          </section>

          {/* Section 4: Why the Record Stands */}
          <section id="why-the-record-stands" className="scroll-mt-24 space-y-4">
            <Reveal delay={0.36}>
              <h2 className="text-2xl font-serif font-bold text-white mt-8 mb-4">
                Why Hasn't Anyone Broken The Record?
              </h2>
            </Reveal>
            <Reveal delay={0.38}>
              <p>
                The honest answer – they don't want to. In a franchise-dominated era, bowlers are expected to last long careers at a sustainable pace (145-150 km/h) without damaging their bodies in the process, and Shoaib Akhtar, Shaun Tait and Brett Lee have all spoken about the injuries their extreme pace cost them. The current generation is much less inclined towards such risks. There's also the matter of speed guns being calibrated more conservatively nowadays – so the 161.3 km/h (100.23 mph) might stick around for the next two decades.
              </p>
            </Reveal>
          </section>

          {/* Section 5: FAQs */}
          <section id="faqs" className="scroll-mt-24 pt-8">
            <Reveal delay={0.4}>
              <h2 className="text-3xl font-serif font-bold text-white mb-6 border-b border-zinc-900 pb-3">
                Fastest Ball In Cricket FAQs
              </h2>
            </Reveal>

            <div className="space-y-1">
              {faqs.map((faq, idx) => (
                <Reveal key={idx} delay={0.42 + idx * 0.05}>
                  <details className="group border-b border-zinc-900 py-5 cursor-pointer">
                    <summary className="flex justify-between items-center text-base md:text-lg font-serif font-bold text-white list-none outline-none">
                      <span className="pr-4 hover:text-amber-400 transition-colors duration-200">{faq.q}</span>
                      <span className="text-amber-500 text-xl font-light group-open:hidden transition-transform">+</span>
                      <span className="text-amber-500 text-xl font-light hidden group-open:inline transition-transform">-</span>
                    </summary>
                    <div className="mt-4 text-zinc-400 font-light leading-relaxed text-sm md:text-base pl-1">
                      {faq.a}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Section 6: Footer metadata & Internal link suggestions */}
          <Reveal delay={0.65}>
            <div className="pt-8 border-t border-zinc-900 mt-8 space-y-4">
              <p className="text-xs text-zinc-500">
                Last updated: 14 July 2026. Speeds per official broadcast/ICC records; current-generation section updated each season.
              </p>
              
              {/* Internal Link Suggestions Section */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-zinc-400 bg-zinc-950/40 p-4 border border-zinc-900 rounded-xl">
                <span className="font-semibold text-amber-500">Related Reading:</span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <Link href="/highest-score-in-t20/" className="hover:text-amber-400 underline transition-colors">
                    Highest T20 score
                  </Link>
                  <span className="text-zinc-700">|</span>
                  <Link href="/icc-team-rankings/" className="hover:text-amber-400 underline transition-colors">
                    ICC rankings
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom Call to action box */}
        <Reveal delay={0.7}>
          <div className="mt-16 p-8 rounded-2xl glass-card border border-amber-500/10 text-center space-y-4">
            <h3 className="text-xl font-serif font-bold text-white">Want to put these insights into action?</h3>
            <p className="text-zinc-400 text-sm font-light max-w-md mx-auto">
              Get your verified Mahadev Book ID on WhatsApp in under 5 minutes and start placing smart bets now.
            </p>
            <div className="pt-2">
              <a 
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-extrabold px-6 py-3 rounded-xl hover:brightness-110 transition-all duration-300 shadow-md shadow-amber-500/10"
              >
                Get Your ID Now
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}

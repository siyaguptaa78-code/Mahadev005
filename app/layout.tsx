import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { defaultMetadata, SITE_CONFIG } from "../lib/siteConfig";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_CONFIG.url}/#org`,
      name: SITE_CONFIG.name,
      url: `${SITE_CONFIG.url}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/images/mahadev-book-logo.webp`,
      },
      description: SITE_CONFIG.description,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          url: `${SITE_CONFIG.url}/contact`,
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: `${SITE_CONFIG.url}/`,
      name: SITE_CONFIG.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_CONFIG.url}/#org` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_CONFIG.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I create a new account?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To create an account, contact our support team via WhatsApp. They will provide you with the necessary verification steps and issue your login ID.",
          },
        },
        {
          "@type": "Question",
          name: "What payment methods are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We accept standard Indian payment methods including UPI and major bank transfers. Please confirm the currently active payment details with our support team before initiating any transfer.",
          },
        },
        {
          "@type": "Question",
          name: "How are withdrawals processed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Withdrawals are processed manually upon request. Send a withdrawal request through WhatsApp with your ID and registered payment details.",
          },
        },
        {
          "@type": "Question",
          name: "Is there an official mobile application?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we provide access to our mobile environment. You can request the installation link directly from our support staff once your account is active.",
          },
        }
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-100 font-sans selection:bg-[#ffbc00] selection:text-black">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

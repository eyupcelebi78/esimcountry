import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best eSIM Plans 2025 - Compare 94+ Plans from Top Providers | eSIM Country",
  description: "Find the best eSIM plans 2025 ✅ Compare 94+ plans from Airalo, Holafly, Nomad, Saily ✅ Real prices from $3.95 ✅ Expert reviews ✅ Instant activation ✅ 10+ countries",
  keywords: "best esim plans, best esim plans 2025, cheapest esim plans, international esim plans, esim comparison, esim providers, travel esim, airalo vs holafly, unlimited esim plans, esim reviews",
  authors: [{ name: "eSIM Country Expert Team" }],
  creator: "eSIM Country",
  publisher: "eSIM Country",
  metadataBase: new URL('https://esimcountry.fyi'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Best eSIM Plans 2025 - Compare 94+ Plans from Top Providers",
    description: "Find the best eSIM plans 2025. Compare 94+ plans from Airalo, Holafly, Nomad, Saily. Real prices, expert reviews, instant activation.",
    type: "website",
    locale: 'en_US',
    url: 'https://esimcountry.fyi',
    siteName: 'eSIM Country',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'eSIM Country - Best eSIM Comparison 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eSIM Country - Compare Best eSIM Plans 2025',
    description: 'Compare 94+ eSIM plans from 15+ providers. Real prices from $1.99.',
    images: ['/og-image.svg'],
  },
  verification: {
    google: "google-site-verification-code-here",
  },
};

// Organization Schema for the whole site
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'eSIM Country',
  url: 'https://esimcountry.fyi',
  logo: 'https://esimcountry.fyi/logo.png',
  description: 'Compare the best eSIM plans from 15+ providers across 10+ countries with real 2025 prices.',
  sameAs: [
    'https://twitter.com/esimcountry',
    'https://facebook.com/esimcountry'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'Turkish']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Google AdSense */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8486271485798253"
          crossOrigin="anonymous"
        />
        
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

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
  title: "eSIM Country - Compare Best eSIM Plans 2025 | Real Prices from $1.99",
  description: "Compare 94+ eSIM plans from 15+ providers across 10 countries. Real 2025 prices from $1.99. Saily, Airalo, Nomad, Holafly reviews. Expert guides & instant activation.",
  keywords: "eSIM comparison 2025, best eSIM turkey, airalo vs holafly, saily esim, nomad esim, travel esim, international data plans, esim reviews",
  authors: [{ name: "eSIM Country Expert Team" }],
  creator: "eSIM Country",
  publisher: "eSIM Country",
  metadataBase: new URL('https://esimcountry.com'),
  alternates: {
    canonical: '/',
  },
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
    title: "eSIM Country - Compare Best eSIM Plans 2025",
    description: "Compare 94+ eSIM plans from 15+ providers. Real prices from $1.99. Expert reviews and instant activation.",
    type: "website",
    locale: 'en_US',
    url: 'https://esimcountry.com',
    siteName: 'eSIM Country',
    images: [
      {
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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
  url: 'https://esimcountry.com',
  logo: 'https://esimcountry.com/logo.png',
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
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
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

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best eSIM Plans 2025: Compare 94+ Plans from 15+ Providers | Updated Prices',
  description: 'Find the best eSIM plans 2025 with our comprehensive comparison. Compare 94+ plans from Airalo, Holafly, Nomad, Saily across 10+ countries. Updated daily prices, expert reviews, and instant activation.',
  keywords: [
    'best esim plans', 'best esim plans 2025', 'cheapest esim plans', 'international esim plans',
    'esim comparison', 'esim providers', 'travel esim', 'global esim plans', 'unlimited esim plans',
    'esim reviews', 'esim vs physical sim', 'digital nomad esim', 'esim for travelers'
  ],
  alternates: {
    canonical: '/best-esim-plans',
  },
  openGraph: {
    title: 'Best eSIM Plans 2025: Complete Comparison Guide | eSIM Country',
    description: 'Compare 94+ eSIM plans from 15+ providers. Find the perfect plan for your travel needs with our expert reviews and daily updated prices.',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Best eSIM Plans 2025 Comparison Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best eSIM Plans 2025: Complete Comparison Guide',
    description: 'Compare 94+ eSIM plans from 15+ providers. Expert reviews, daily updated prices.',
    images: ['/og-image.svg'],
  },
};

// Rich Snippets Schema
const bestESIMSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best eSIM Plans 2025: Complete Comparison Guide',
  description: 'Comprehensive comparison of the best eSIM plans from top providers including Airalo, Holafly, Nomad, and Saily with updated 2025 prices.',
  author: {
    '@type': 'Organization',
    name: 'eSIM Country',
    url: 'https://esimcountry.fyi'
  },
  publisher: {
    '@type': 'Organization',
    name: 'eSIM Country',
    logo: {
      '@type': 'ImageObject',
      url: 'https://esimcountry.fyi/logo.svg'
    }
  },
  datePublished: '2025-01-20',
  dateModified: '2025-01-20',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://esimcountry.fyi/best-esim-plans'
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best eSIM plans for international travel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best eSIM plans for international travel include Airalo (budget-friendly), Holafly (unlimited data), Nomad (flexible regional plans), and Saily (premium coverage). Choose based on your destination, data needs, and budget.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much do eSIM plans cost in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'eSIM plans in 2025 range from $3.95 for basic 1GB plans to $45+ for unlimited data plans. Prices vary by provider, destination, and data allowance. Regional plans typically offer better value than country-specific options.'
      }
    },
    {
      '@type': 'Question',
      name: 'Which eSIM provider offers unlimited data plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Holafly is the leading provider for unlimited eSIM plans, offering truly unlimited data in 100+ countries. Nomad and Saily also offer unlimited options for select destinations with fair usage policies.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are eSIM plans better than physical SIM cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'eSIM plans offer several advantages: instant activation, no physical card needed, ability to switch between plans digitally, and often better pricing than roaming. They are ideal for frequent travelers and digital nomads.'
      }
    }
  ]
};

export default function BestESIMPlansPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bestESIMSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600">
              🌍 eSIM Country
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                📝 Blog
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                👥 About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                📧 Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Best eSIM Plans 2025
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Compare 94+ eSIM plans from 15+ top providers. Find the perfect plan with our expert reviews, 
            daily updated prices, and comprehensive coverage analysis.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-white/20 px-4 py-2 rounded-full">✅ Updated Daily</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✅ Expert Reviews</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✅ Real 2025 Prices</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">✅ Instant Activation</span>
          </div>
        </div>
      </header>

      {/* Quick Stats & Value Props */}
      <section className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">94+</div>
              <div className="text-gray-700 font-medium">eSIM Plans Compared</div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Trusted Providers</div>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-700 font-medium">Countries Covered</div>
            </div>
            <div className="p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">$3.95</div>
              <div className="text-gray-700 font-medium">Starting From</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        
        {/* Introduction */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🏆 Best eSIM Plans for Every Travel Need
            </h2>
            <div className="prose lg:prose-xl text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                Finding the <strong>best eSIM plans</strong> can save you hundreds of dollars on international roaming while 
                ensuring reliable connectivity worldwide. Our comprehensive comparison covers <strong>94+ eSIM plans from 15+ top providers</strong> 
                including Airalo, Holafly, Nomad, Saily, and more, with daily updated prices and expert analysis.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're a <strong>digital nomad</strong>, business traveler, or vacation explorer, we'll help you find 
                the perfect eSIM plan that matches your destination, data needs, and budget in 2025.
              </p>
            </div>
          </div>
        </section>

        {/* Top eSIM Provider Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🥇 Top eSIM Providers by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Best Overall */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
              <div className="text-center mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  🏆 BEST OVERALL
                </span>
                <h3 className="text-2xl font-bold text-gray-900">Airalo</h3>
                <p className="text-gray-600 mt-2">Most Popular Choice</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  200+ countries coverage
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Starting from $4.50
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Excellent app experience
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  24/7 customer support
                </li>
              </ul>
              <Link 
                href="/blog/best-esim-turkey-2025#airalo" 
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Airalo Plans
              </Link>
            </div>

            {/* Best for Unlimited */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
              <div className="text-center mb-6">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  🚀 BEST UNLIMITED
                </span>
                <h3 className="text-2xl font-bold text-gray-900">Holafly</h3>
                <p className="text-gray-600 mt-2">Unlimited Data Plans</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Truly unlimited data
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  100+ destinations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  No speed restrictions
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Perfect for heavy users
                </li>
              </ul>
              <Link 
                href="/blog/best-esim-turkey-2025#holafly" 
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View Holafly Plans
              </Link>
            </div>

            {/* Best Value */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
              <div className="text-center mb-6">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  💰 BEST VALUE
                </span>
                <h3 className="text-2xl font-bold text-gray-900">Nomad</h3>
                <p className="text-gray-600 mt-2">Great Price-Performance</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Competitive pricing
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Flexible regional plans
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Easy plan management
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Good network coverage
                </li>
              </ul>
              <Link 
                href="/blog/best-esim-turkey-2025#nomad" 
                className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                View Nomad Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Complete Provider Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            📊 Complete eSIM Provider Comparison 2025
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Provider</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Countries</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Starting Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900">Airalo</span>
                        <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Most Popular</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">200+</td>
                    <td className="px-6 py-4 text-gray-700">$4.50</td>
                    <td className="px-6 py-4 text-gray-700">First-time users</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="ml-1 text-gray-600">4.8</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link href="/blog/best-esim-turkey-2025" className="text-blue-600 hover:text-blue-800 font-medium">
                        View Plans →
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900">Holafly</span>
                        <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Unlimited</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">100+</td>
                    <td className="px-6 py-4 text-gray-700">$19.00</td>
                    <td className="px-6 py-4 text-gray-700">Heavy data users</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="ml-1 text-gray-600">4.7</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link href="/blog/best-esim-turkey-2025" className="text-blue-600 hover:text-blue-800 font-medium">
                        View Plans →
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900">Nomad</span>
                        <span className="ml-2 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">Best Value</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">170+</td>
                    <td className="px-6 py-4 text-gray-700">$4.00</td>
                    <td className="px-6 py-4 text-gray-700">Budget travelers</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★★★★☆</span>
                        <span className="ml-1 text-gray-600">4.6</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link href="/blog/best-esim-turkey-2025" className="text-blue-600 hover:text-blue-800 font-medium">
                        View Plans →
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="font-semibold text-gray-900">Saily</span>
                        <span className="ml-2 bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">Premium</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">150+</td>
                    <td className="px-6 py-4 text-gray-700">$6.99</td>
                    <td className="px-6 py-4 text-gray-700">Business travelers</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★★★★☆</span>
                        <span className="ml-1 text-gray-600">4.5</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link href="/blog/best-esim-turkey-2025" className="text-blue-600 hover:text-blue-800 font-medium">
                        View Plans →
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Destination-Specific Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            🌍 Best eSIM Plans by Destination
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/esim/turkey" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🇹🇷</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Turkey eSIM</h3>
              </div>
              <p className="text-gray-600 mb-4">From $4.50 • 15+ providers • Unlimited options</p>
              <div className="text-blue-600 font-medium">Compare Turkey Plans →</div>
            </Link>

            <Link href="/esim/united-states" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🇺🇸</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">USA eSIM</h3>
              </div>
              <p className="text-gray-600 mb-4">From $6.99 • 5G networks • Business plans</p>
              <div className="text-blue-600 font-medium">Compare USA Plans →</div>
            </Link>

            <Link href="/esim/japan" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🇯🇵</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Japan eSIM</h3>
              </div>
              <p className="text-gray-600 mb-4">From $8.50 • High-speed data • Tourist friendly</p>
              <div className="text-blue-600 font-medium">Compare Japan Plans →</div>
            </Link>

            <Link href="/esim/germany" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🇩🇪</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Germany eSIM</h3>
              </div>
              <p className="text-gray-600 mb-4">From $5.99 • EU coverage • Business rates</p>
              <div className="text-blue-600 font-medium">Compare Germany Plans →</div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🌐</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">All Countries</h3>
              </div>
              <p className="text-gray-600 mb-4">10+ destinations • Regional plans • Expert guides</p>
              <div className="text-blue-600 font-medium">View All Guides →</div>
            </Link>
          </div>
        </section>

        {/* How to Choose Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🤔 How to Choose the Best eSIM Plan
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Determine Your Data Needs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Light user (1-3GB):</strong> Email, messaging, maps</li>
                  <li>• <strong>Medium user (5-10GB):</strong> Social media, video calls</li>
                  <li>• <strong>Heavy user (Unlimited):</strong> Streaming, work, hotspot</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Consider Your Destination</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Single country:</strong> Local eSIM plans</li>
                  <li>• <strong>Multiple countries:</strong> Regional plans</li>
                  <li>• <strong>Global travel:</strong> Worldwide coverage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Compare Key Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Network coverage and speed</li>
                  <li>• Activation process and timeline</li>
                  <li>• Customer support availability</li>
                  <li>• Hotspot and tethering support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Check Compatibility</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Device eSIM support</li>
                  <li>• Network band compatibility</li>
                  <li>• Carrier unlock status</li>
                  <li>• Operating system requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ❓ Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-white rounded-lg shadow-md">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-gray-900 hover:text-blue-600">
                What are the best eSIM plans for international travel?
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>The best eSIM plans for international travel include:</p>
                <ul className="mt-3 space-y-2">
                  <li>• <strong>Airalo:</strong> Best overall with 200+ countries, starting at $4.50</li>
                  <li>• <strong>Holafly:</strong> Best for unlimited data with no speed restrictions</li>
                  <li>• <strong>Nomad:</strong> Best value with competitive pricing and flexible plans</li>
                  <li>• <strong>Saily:</strong> Best for business travelers with premium networks</li>
                </ul>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-gray-900 hover:text-blue-600">
                How much do eSIM plans cost in 2025?
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>eSIM plan costs in 2025 vary significantly based on provider, destination, and data allowance:</p>
                <ul className="mt-3 space-y-2">
                  <li>• <strong>Budget plans:</strong> $3.95-$8 for 1-3GB, 7-15 days</li>
                  <li>• <strong>Standard plans:</strong> $15-25 for 5-10GB, 30 days</li>
                  <li>• <strong>Unlimited plans:</strong> $19-45 for unlimited data</li>
                  <li>• <strong>Regional plans:</strong> Often better value than single-country options</li>
                </ul>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-gray-900 hover:text-blue-600">
                Which eSIM provider offers unlimited data plans?
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p><strong>Holafly</strong> is the leading provider for unlimited eSIM plans, offering truly unlimited data in 100+ countries without speed restrictions. Other providers like Nomad and Saily also offer unlimited options for select destinations, but may have fair usage policies or speed throttling after certain thresholds.</p>
              </div>
            </details>

            <details className="bg-white rounded-lg shadow-md">
              <summary className="cursor-pointer p-6 text-lg font-semibold text-gray-900 hover:text-blue-600">
                Are eSIM plans better than physical SIM cards?
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p>eSIM plans offer several advantages over physical SIM cards:</p>
                <ul className="mt-3 space-y-2">
                  <li>• <strong>Convenience:</strong> Instant activation, no physical card needed</li>
                  <li>• <strong>Flexibility:</strong> Switch between plans digitally</li>
                  <li>• <strong>Cost:</strong> Often cheaper than international roaming</li>
                  <li>• <strong>Security:</strong> Can't be lost or stolen like physical cards</li>
                  <li>• <strong>Dual SIM:</strong> Keep your home number active simultaneously</li>
                </ul>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Perfect eSIM Plan?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Compare 94+ eSIM plans from 15+ providers with our interactive comparison tool. 
            Get instant quotes and expert recommendations for your specific travel needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              🔍 Compare Plans Now
            </Link>
            <Link 
              href="/blog" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
            >
              📚 Read Expert Guides
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">🌍 eSIM Country</h3>
              <p className="text-gray-300 mb-4">
                Your trusted source for unbiased eSIM comparisons and expert travel connectivity advice.
              </p>
              <p className="text-gray-400 text-sm">
                Compare 94+ plans from 15+ providers across 10+ countries.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/best-esim-plans" className="text-gray-300 hover:text-white transition-colors">📋 Best eSIM Plans</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">📝 Blog</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">👥 About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">📧 Contact</Link></li>
              </ul>
            </div>

            {/* Popular Countries */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
              <ul className="space-y-2">
                <li><Link href="/esim/turkey" className="text-gray-300 hover:text-white transition-colors">🇹🇷 Turkey eSIM</Link></li>
                <li><Link href="/esim/united-states" className="text-gray-300 hover:text-white transition-colors">🇺🇸 USA eSIM</Link></li>
                <li><Link href="/esim/japan" className="text-gray-300 hover:text-white transition-colors">🇯🇵 Japan eSIM</Link></li>
                <li><Link href="/esim/germany" className="text-gray-300 hover:text-white transition-colors">🇩🇪 Germany eSIM</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
              <div className="mt-6">
                <p className="text-gray-400 text-sm">Follow us:</p>
                <div className="flex space-x-4 mt-2">
                  <a href="https://twitter.com/esimcountry" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
                  <a href="https://facebook.com/esimcountry" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 eSIM Country. All rights reserved. | Last updated: January 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
} 
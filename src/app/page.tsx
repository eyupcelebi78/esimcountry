'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createCountrySlug, CountryData } from '@/lib/supabase';
import CountrySelector from '@/components/CountrySelector';
import PlanComparisonTable from '@/components/PlanComparisonTable';
import { LeaderboardAd, RectangleAd } from '@/components/AdSense';

export default function Home() {
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // FAQ Schema for homepage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an eSIM and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An eSIM (embedded SIM) is a digital SIM card built into your phone. Instead of inserting a physical card, you download your plan and activate it with a QR code. It works just like a regular SIM but is much more convenient for travelers.'
        }
      },
      {
        '@type': 'Question',
        name: 'Which phones support eSIM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most modern smartphones support eSIM including iPhone XS and newer, Google Pixel 3 and newer, Samsung Galaxy S20 and newer, and many other Android devices.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I activate my eSIM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After purchasing, you\'ll receive a QR code via email. Go to your phone\'s settings, find "Mobile Data" or "Cellular", select "Add eSIM" and scan the QR code.'
        }
      }
    ]
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  const fetchCountryData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/countries');
      if (response.ok) {
        const data = await response.json();
        setCountryData(data);
        if (data.length > 0) {
          setSelectedCountry(data[0].country);
        }
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (err) {
      console.error('Error fetching country data:', err);
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const selectedCountryData = countryData.find(
    (country) => country.country === selectedCountry
  );

  const totalPlans = countryData.reduce((sum, country) => sum + country.plans.length, 0);
  const totalCountries = countryData.length;
  const allProviders = [...new Set(countryData.flatMap(country => 
    country.plans.map(plan => plan.provider)
  ))];

  const popularCountries = countryData
    .sort((a, b) => b.plans.length - a.plans.length)
    .slice(0, 6);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading eSIM comparison data...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* FAQ Schema */}
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
              <Link href="/esim/turkey" className="text-gray-600 hover:text-blue-600 transition-colors">
                🇹🇷 Turkey
              </Link>
              <Link href="/esim/united-states" className="text-gray-600 hover:text-blue-600 transition-colors">
                🇺🇸 USA
              </Link>
              <Link href="/esim/japan" className="text-gray-600 hover:text-blue-600 transition-colors">
                🇯🇵 Japan
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              🌍 Best eSIM Plans Worldwide
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Compare {totalPlans}+ eSIM plans from {allProviders.length} trusted providers across {totalCountries} countries. 
              Get connected instantly with no roaming charges.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                📱 Instant Activation
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                💰 Best Prices
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                🌐 {totalCountries} Countries
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                ⚡ No Physical SIM
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalCountries}</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">{totalPlans}+</div>
              <div className="text-gray-600">eSIM Plans</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-600 mb-2">{allProviders.length}</div>
              <div className="text-gray-600">Trusted Providers</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-orange-600 mb-2">$3.95</div>
              <div className="text-gray-600">Starting From</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {error && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg mb-8">
            <p className="font-medium">⚠️ Note:</p>
            <p>{error}. Some features may be limited.</p>
          </div>
        )}

        {/* Popular Countries */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🔥 Most Popular Destinations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCountries.map((country) => {
              const countryFlag = {
                'Turkey': '🇹🇷',
                'United States': '🇺🇸', 
                'Japan': '🇯🇵',
                'Germany': '🇩🇪',
                'United Kingdom': '🇬🇧',
                'France': '🇫🇷',
                'Spain': '🇪🇸',
                'Italy': '🇮🇹',
                'Canada': '🇨🇦',
                'Australia': '🇦🇺'
              }[country.country] || '🌍';

              const minPrice = Math.min(...country.plans.map(plan => plan.price));
              
              return (
                <Link 
                  key={country.country}
                  href={`/esim/${createCountrySlug(country.country)}`}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">{countryFlag}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {country.country}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>{country.plans.length} plans available</p>
                      <p className="font-semibold text-green-600">From ${minPrice.toFixed(2)}</p>
                    </div>
                    <div className="mt-3 inline-flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                      <span className="text-sm">View Plans</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8 border border-green-200">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center text-green-700">
              <span className="mr-2">✅</span>
              <span className="font-medium">2025 Real Prices</span>
            </div>
            <div className="flex items-center text-blue-700">
              <span className="mr-2">✅</span>
              <span className="font-medium">Working URLs</span>
            </div>
            <div className="flex items-center text-purple-700">
              <span className="mr-2">✅</span>
              <span className="font-medium">94+ Plans Compared</span>
            </div>
            <div className="flex items-center text-orange-700">
              <span className="mr-2">✅</span>
              <span className="font-medium">Expert Reviews</span>
            </div>
            <div className="flex items-center text-red-700">
              <span className="mr-2">✅</span>
              <span className="font-medium">Updated Daily</span>
            </div>
          </div>
        </section>

        {/* AdSense - Above Fold Leaderboard */}
        <LeaderboardAd slot="5555286769" />

        {/* Country Selector & Plans */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🔍 Compare Plans by Country</h2>
          
          <div className="mb-8">
                         <CountrySelector
               countries={countryData.map((country) => country.country)}
               selectedCountry={selectedCountry}
               onCountryChange={setSelectedCountry}
             />
          </div>

          {selectedCountryData && selectedCountryData.plans && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedCountryData.country} eSIM Plans
                </h3>
                <Link
                  href={`/esim/${createCountrySlug(selectedCountryData.country)}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Detailed Guide
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <PlanComparisonTable 
                plans={selectedCountryData.plans || []}
                showCountryLinks={false}
              />
              
              {/* Related Blog Links */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">📚 Expert Guides for {selectedCountryData.country}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCountryData.country === 'Turkey' && (
                    <>
                      <Link 
                        href="/blog/best-esim-turkey-2025"
                        className="text-sm bg-white px-3 py-1 rounded-full text-blue-700 hover:bg-blue-100 transition-colors"
                      >
                        Best Turkey eSIM 2025 →
                      </Link>
                      <Link 
                        href="/blog/airalo-vs-holafly-turkey"
                        className="text-sm bg-white px-3 py-1 rounded-full text-blue-700 hover:bg-blue-100 transition-colors"
                      >
                        Airalo vs Holafly →
                      </Link>
                    </>
                  )}
                  {selectedCountryData.country === 'United States' && (
                    <Link 
                      href="/blog/best-esim-usa-2025"
                      className="text-sm bg-white px-3 py-1 rounded-full text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      Best USA eSIM 2025 →
                    </Link>
                  )}
                  {selectedCountryData.country === 'Japan' && (
                    <Link 
                      href="/blog/best-esim-japan-2025"
                      className="text-sm bg-white px-3 py-1 rounded-full text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      Best Japan eSIM 2025 →
                    </Link>
                  )}
                  {selectedCountryData.country === 'Germany' && (
                    <Link 
                      href="/blog/best-esim-germany-2025"
                      className="text-sm bg-white px-3 py-1 rounded-full text-blue-700 hover:bg-blue-100 transition-colors"
                    >
                      Best Germany eSIM 2025 →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* AdSense - Mid Content Rectangle */}
        <RectangleAd slot="3600041413" />

        {/* Why Choose eSIM */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">✨ Why Choose eSIM for Travel?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Activation</h3>
              <p className="text-gray-600 text-sm">
                Activate your eSIM as soon as you land. No need to find local stores or wait in queues.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Roaming Fees</h3>
              <p className="text-gray-600 text-sm">
                Avoid expensive roaming charges. Get local rates wherever you travel.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Keep Your Number</h3>
              <p className="text-gray-600 text-sm">
                Use eSIM for data and keep your original number active for calls and texts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌍</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Coverage</h3>
              <p className="text-gray-600 text-sm">
                One app, multiple destinations. Perfect for multi-country trips.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🚀 How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Your Plan</h3>
              <p className="text-gray-600">
                Browse our comparison table and select the perfect eSIM plan for your destination and usage needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Purchase & Download</h3>
              <p className="text-gray-600">
                Buy directly from the provider and receive your eSIM QR code via email instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Activate & Connect</h3>
              <p className="text-gray-600">
                Scan the QR code on your phone when you arrive and get connected in seconds.
              </p>
            </div>
          </div>
        </section>

        {/* AdSense - Pre FAQ Leaderboard */}
        <LeaderboardAd slot="5555286769" />

        {/* FAQ */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">❓ Frequently Asked Questions</h2>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">What is an eSIM and how does it work?</h4>
              <p className="text-gray-700">
                An eSIM (embedded SIM) is a digital SIM card built into your phone. Instead of inserting a physical card, 
                you download your plan and activate it with a QR code. It works just like a regular SIM but is much more convenient for travelers.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Which phones support eSIM?</h4>
              <p className="text-gray-700">
                Most modern smartphones support eSIM including iPhone XS and newer, Google Pixel 3 and newer, 
                Samsung Galaxy S20 and newer, and many other Android devices. Check your phone's settings for eSIM support.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">How do I activate my eSIM?</h4>
              <p className="text-gray-700">
                After purchasing, you'll receive a QR code via email. Go to your phone's settings, find "Mobile Data" or "Cellular", 
                select "Add eSIM" or "Add Data Plan", and scan the QR code. The eSIM will be installed automatically.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Can I use my eSIM for hotspot/tethering?</h4>
              <p className="text-gray-700">
                Most eSIM plans support hotspot/tethering, but some unlimited plans may have restrictions. 
                Check the plan details in our comparison table before purchasing.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">What happens if I run out of data?</h4>
              <p className="text-gray-700">
                Most providers offer top-up options through their mobile apps. Some plans automatically renew, 
                while others simply stop working. You can usually purchase additional data or a new plan if needed.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">📝 eSIM Travel Guides & Expert Reviews</h2>
            <p className="text-gray-600 mb-6">
              Get expert insights, detailed comparisons, and insider tips to find the perfect eSIM for your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/blog/best-esim-turkey-2025" className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-3">🇹🇷</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Best eSIM Turkey 2025</h3>
              <p className="text-gray-600 text-sm mb-3">Compare 16 Turkey eSIM plans from $1.99. Coverage maps for Istanbul, Cappadocia, Antalya.</p>
              <span className="text-blue-600 text-sm font-medium">8 min read →</span>
            </Link>
            
            <Link href="/blog/airalo-vs-holafly-turkey" className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-3">⚔️</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Airalo vs Holafly Comparison</h3>
              <p className="text-gray-600 text-sm mb-3">Head-to-head comparison of the two most popular eSIM providers for Turkey.</p>
              <span className="text-blue-600 text-sm font-medium">6 min read →</span>
            </Link>
            
            <Link href="/blog/best-esim-usa-2025" className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-3">🇺🇸</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Best USA eSIM 2025</h3>
              <p className="text-gray-600 text-sm mb-3">Complete guide to USA eSIM plans. T-Mobile, Verizon, AT&T coverage comparison.</p>
              <span className="text-blue-600 text-sm font-medium">10 min read →</span>
            </Link>
          </div>
          
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Guides →
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

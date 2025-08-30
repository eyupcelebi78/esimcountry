'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPlansByCountry, formatCountryName, ESIMPlan, getCountryInfo, CountryInfo } from '@/lib/supabase';
import PlanComparisonTable from '@/components/PlanComparisonTable';
import { LeaderboardAd, RectangleAd } from '@/components/AdSense';

interface CountryPageProps {
  params: Promise<{ country: string }>;
}

export default function CountryPage({ params }: CountryPageProps) {
  const [plans, setPlans] = useState<ESIMPlan[]>([]);
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [countryName, setCountryName] = useState<string>('');

  useEffect(() => {
    const initializePage = async () => {
      try {
        const { country } = await params;
        const name = formatCountryName(country);
        setCountryName(name);
        
        setLoading(true);
        
        // Fetch both plans and country info in parallel
        const [countryPlans, countryDetails] = await Promise.all([
          getPlansByCountry(name),
          getCountryInfo(name)
        ]);
        
        if (!countryPlans || countryPlans.length === 0) {
          notFound();
        }
        
        setPlans(countryPlans);
        setCountryInfo(countryDetails);
      } catch (err) {
        console.error(`Error loading country page:`, err);
        setError(`Failed to load plans`);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    initializePage();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading eSIM plans and travel information...</p>
        </div>
      </div>
    );
  }
  
  if (!plans.length || !countryName) {
    notFound();
  }

  const lastChecked = plans[0]?.updated_at || new Date().toISOString().split('T')[0];
  
  // Get country flag emoji
  const getCountryFlag = (countryName: string): string => {
    const flags: { [key: string]: string } = {
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
    };
    return flags[countryName] || '🌍';
  };

  // Calculate stats
  const providers = [...new Set(plans.map(plan => plan.provider))];
  const minPrice = Math.min(...plans.map(plan => plan.price));
  const maxPrice = Math.max(...plans.map(plan => plan.price));
  const avgPrice = plans.reduce((sum, plan) => sum + plan.price, 0) / plans.length;

  // Generate structured data schemas
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How do I activate an eSIM in ${countryName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Download the eSIM before traveling, then activate it when you arrive in ${countryName}. Most providers offer QR codes that can be scanned in your phone's settings.`
        }
      },
      {
        '@type': 'Question',
        name: `Which eSIM provider is best for ${countryName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on your needs. For unlimited data, consider Holafly. For budget options, Airalo and Nomad offer great value. Check our comparison table above for detailed pricing.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use hotspot/tethering with these eSIMs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most providers allow hotspot sharing, but some unlimited plans may restrict it. Check the "Hotspot" column in our comparison table for specific details.'
        }
      },
      {
        '@type': 'Question',
        name: 'What happens if I run out of data?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most providers offer top-up options through their apps. Some plans automatically renew, while others stop service. Check your provider\'s terms before purchasing.'
        }
      }
    ]
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Best eSIM Plans for ${countryName}`,
    description: `Compare ${plans.length} eSIM plans from ${providers.length} providers for ${countryName}. Real 2025 prices from $${minPrice.toFixed(2)}.`,
    numberOfItems: plans.length,
    itemListElement: plans.slice(0, 10).map((plan, index) => ({
      '@type': 'Product',
      position: index + 1,
      name: `${plan.provider} ${countryName} eSIM - ${plan.data_amount}`,
      description: `${plan.data_amount} data plan for ${plan.validity} days in ${countryName} by ${plan.provider}`,
      brand: {
        '@type': 'Brand',
        name: plan.provider
      },
      offers: {
        '@type': 'Offer',
        price: plan.price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: plan.source_url
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://esimcountry.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'eSIM Plans',
        item: 'https://esimcountry.com/#countries'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${countryName} eSIM`,
        item: `https://esimcountry.com/esim/${countryName.toLowerCase().replace(/ /g, '-')}`
      }
    ]
  };

  return (
    <>
      {/* Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="text-6xl mb-4">{getCountryFlag(countryName)}</div>
            <h1 className="text-4xl font-bold mb-4">
              Best eSIM Plans for {countryName}
            </h1>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Compare {plans.length} eSIM plans from {providers.length} trusted providers. 
              Get connected instantly upon arrival in {countryName} with no roaming charges.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                📱 Instant Activation
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                💰 From ${minPrice.toFixed(2)}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                🌐 {providers.length} Providers
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                ⚡ No Physical SIM
              </span>
            </div>
          </div>
        </div>
      </header>

        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-blue-600 hover:underline">Home</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/#countries" className="text-blue-600 hover:underline">eSIM Plans</Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-900 font-medium">{countryName} eSIM</li>
            </ol>
          </div>
        </nav>

        {/* AdSense - After Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <LeaderboardAd slot="5555286769" />
        </div>

        {/* Trust Signals */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-y">
          <div className="container mx-auto px-4 py-4">
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
                <span className="font-medium">Updated Daily</span>
              </div>
              <div className="flex items-center text-orange-700">
                <span className="mr-2">✅</span>
                <span className="font-medium">Expert Reviews</span>
              </div>
            </div>
          </div>
        </div>

      {/* Quick Stats */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{plans.length}</div>
              <div className="text-sm text-gray-600">Available Plans</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">${minPrice.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Starting Price</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{providers.length}</div>
              <div className="text-sm text-gray-600">Providers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">${avgPrice.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Average Price</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {error && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg mb-6">
            <p className="font-medium">⚠️ Note:</p>
            <p>{error}. Showing available data.</p>
          </div>
        )}

        {/* Country Information Section */}
        {countryInfo && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential {countryName} Travel Information</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🏛️ Basic Info</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><strong>Capital:</strong> {countryInfo.capital}</p>
                  <p><strong>Population:</strong> {(countryInfo.population / 1000000).toFixed(1)}M</p>
                  <p><strong>Currency:</strong> {countryInfo.currency}</p>
                  <p><strong>Language:</strong> {countryInfo.language}</p>
                  <p><strong>Timezone:</strong> {countryInfo.timezone}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">📶 Network Info</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><strong>Avg Speed:</strong> {countryInfo.internet_speed_avg_mbps} Mbps</p>
                  <p><strong>Emergency:</strong> {countryInfo.emergency_number}</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">{countryInfo.network_coverage_notes}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">🗓️ Best Time to Visit</h3>
                <p className="text-sm text-gray-600">{countryInfo.best_visit_months}</p>
              </div>
            </div>

            {/* Popular Cities */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">🏙️ Popular Destinations</h3>
              <div className="flex flex-wrap gap-2">
                {countryInfo.popular_cities.map((city, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Travel Tips */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">💡 Essential Travel Tips</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {countryInfo.travel_tips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Cost Comparison */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 eSIM vs Local SIM Cost Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">✅ eSIM Advantages</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• No registration hassle</li>
                <li>• Instant activation</li>
                <li>• Keep your home number active</li>
                <li>• Buy before travel</li>
                <li>• Multiple plans available</li>
              </ul>
              {countryInfo && (
                <p className="text-xs text-gray-600 mt-3 p-2 bg-white/50 rounded">
                  {countryInfo.data_costs_local_comparison}
                </p>
              )}
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-orange-800 mb-2">📱 Local SIM Alternative</h3>
              {countryInfo ? (
                <p className="text-sm text-gray-700">{countryInfo.local_sim_alternative}</p>
              ) : (
                <p className="text-sm text-gray-700">Local SIM cards may require registration and can be time-consuming to purchase.</p>
              )}
              <div className="mt-3 p-2 bg-white/50 rounded">
                <p className="text-xs text-gray-600">
                  <strong>Price Range:</strong> ${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)} | 
                  <strong>Average:</strong> ${avgPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">📊 Compare All {countryName} eSIM Plans</h2>
            <p className="text-gray-600 mt-2">
              Updated {new Date(lastChecked).toLocaleDateString()}. Click on any plan to visit the provider's website.
            </p>
          </div>
          
          <PlanComparisonTable plans={plans} showCountryLinks={false} />
        </div>

          {/* AdSense - Before FAQ */}
          <RectangleAd slot="3600041413" />

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h2>
          
          <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">How do I activate an eSIM in {countryName}?</h4>
                <p className="text-gray-700">
                Download the eSIM before traveling, then activate it when you arrive in {countryName}. 
                Most providers offer QR codes that can be scanned in your phone's settings.
              </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">Which eSIM provider is best for {countryName}?</h4>
                <p className="text-gray-700">
                It depends on your needs. For unlimited data, consider Holafly. For budget options, 
                Airalo and Nomad offer great value. Check our comparison table above for detailed pricing.
              </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">Can I use hotspot/tethering with these eSIMs?</h4>
                <p className="text-gray-700">
                Most providers allow hotspot sharing, but some unlimited plans may restrict it. 
                Check the "Hotspot" column in our comparison table for specific details.
              </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg text-gray-900 mb-2">What happens if I run out of data?</h4>
                <p className="text-gray-700">
                Most providers offer top-up options through their apps. Some plans automatically 
                renew, while others stop service. Check your provider's terms before purchasing.
              </p>
              </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Browse Other Countries
          </Link>
        </div>
      </main>
    </div>
    </>
  );
} 
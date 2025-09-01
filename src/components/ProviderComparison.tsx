import Link from 'next/link';

interface Provider {
  name: string;
  badge: string;
  countries: string;
  startingPrice: string;
  bestFor: string;
  rating: string;
  href: string;
}

const providers: Provider[] = [
  {
    name: 'Airalo',
    badge: 'Most Popular',
    countries: '200+',
    startingPrice: '$4.50',
    bestFor: 'First-time users',
    rating: '4.8',
    href: '/blog/best-esim-turkey-2025#airalo'
  },
  {
    name: 'Holafly',
    badge: 'Unlimited',
    countries: '100+',
    startingPrice: '$19.00',
    bestFor: 'Heavy data users',
    rating: '4.7',
    href: '/blog/best-esim-turkey-2025#holafly'
  },
  {
    name: 'Nomad',
    badge: 'Best Value',
    countries: '170+',
    startingPrice: '$4.00',
    bestFor: 'Budget travelers',
    rating: '4.6',
    href: '/blog/best-esim-turkey-2025#nomad'
  },
  {
    name: 'Saily',
    badge: 'Premium',
    countries: '150+',
    startingPrice: '$6.99',
    bestFor: 'Business travelers',
    rating: '4.5',
    href: '/blog/best-esim-turkey-2025#saily'
  }
];

export default function ProviderComparison() {
  return (
    <section className="mb-16" id="comparison">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🏆 Best eSIM Plans by Provider
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Compare the top eSIM providers with our comprehensive analysis of coverage, pricing, and user experience.
        </p>
      </div>

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
              {providers.map((provider, index) => (
                <tr key={provider.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-900">{provider.name}</span>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                        provider.badge === 'Most Popular' ? 'bg-blue-100 text-blue-800' :
                        provider.badge === 'Unlimited' ? 'bg-green-100 text-green-800' :
                        provider.badge === 'Best Value' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {provider.badge}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{provider.countries}</td>
                  <td className="px-6 py-4 text-gray-700">{provider.startingPrice}</td>
                  <td className="px-6 py-4 text-gray-700">{provider.bestFor}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">
                        {'★'.repeat(Math.floor(parseFloat(provider.rating)))}
                        {parseFloat(provider.rating) % 1 !== 0 ? '★' : ''}
                        {'☆'.repeat(5 - Math.ceil(parseFloat(provider.rating)))}
                      </span>
                      <span className="ml-1 text-gray-600">{provider.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link 
                      href={provider.href} 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Plans →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link 
          href="/best-esim-plans" 
          className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          🔍 Compare All eSIM Plans
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
} 
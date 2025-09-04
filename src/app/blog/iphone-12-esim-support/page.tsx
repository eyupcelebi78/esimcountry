import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/iphone-12-esim-support' },
  title: 'iPhone 12 eSIM Support (2025): Carriers, Regions & Setup Guide',
  description: 'Complete iPhone 12 eSIM support guide: carrier compatibility by region, setup requirements, troubleshooting, and travel eSIM options.',
  keywords: 'iphone 12 esim support, iphone 12 esim carriers, iphone 12 esim regions, esim support iphone 12',
  openGraph: {
    title: 'iPhone 12 eSIM Support (2025): Carriers, Regions & Setup Guide',
    description: 'Comprehensive iPhone 12 eSIM support guide with carrier compatibility and setup tips.',
    url: 'https://esimcountry.fyi/blog/iphone-12-esim-support',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/blog/does-iphone-12-support-esim',
    '/blog/does-iphone-12-have-esim',
    '/blog/is-iphone-12-esim-compatible',
    '/blog/can-iphone-12-use-esim',
    '/blog/can-all-of-the-iphone-12-use-esims',
  ]

  const faq = [
    { q: 'Which carriers support eSIM on iPhone 12?', a: 'Most major carriers support eSIM on iPhone 12 in 2025. Check your carrier\'s site for availability and transfer policies.' },
    { q: 'Any region limitations?', a: 'A few regions require in‑store activation or restrict eSIM features. Verify local policy before travel.' },
    { q: 'Is dual SIM available everywhere?', a: 'Dual SIM works on hardware level (eSIM + physical). Carrier policy may affect features like iMessage pairing and 5G availability.' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-b py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="mb-8">
            <Link href="/" className="text-indigo-600 hover:text-indigo-800">Home</Link>
            <span className="mx-2 text-black">›</span>
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-800">Blog</Link>
            <span className="mx-2 text-black">›</span>
            <span className="text-black font-medium">iPhone 12 eSIM Support</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            iPhone 12 eSIM Support (2025)
          </h1>
          <p className="text-xl text-black mb-4">
            Complete carrier support guide for iPhone 12 eSIM: regional compatibility, setup requirements, and troubleshooting tips.
            Find travel plans on <Link href="/best-esim-plans" className="text-indigo-600 hover:text-indigo-800 font-semibold underline">Best eSIM Plans</Link>.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-indigo-200 px-3 py-1 rounded-full text-indigo-800">Updated: January 2025</span>
            <span className="bg-blue-200 px-3 py-1 rounded-full text-blue-800">6 min read</span>
            <span className="bg-green-200 px-3 py-1 rounded-full text-green-800">Support Guide</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Answer */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-green-800 mb-3">✅ Quick Answer</h2>
          <div className="text-black">
            <p className="mb-3"><strong>Most major carriers support eSIM for iPhone 12</strong></p>
            <p className="mb-3"><strong>Requirements:</strong> iOS 16+, carrier eSIM profile, reliable Wi‑Fi</p>
            <p><strong>Dual SIM:</strong> One eSIM + one physical SIM</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-black">
            iPhone 12 supports eSIM across models, but carrier policies differ by country. Below is what to know before activating.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-black">Carrier Support by Region</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left text-black">Region</th>
                <th className="border border-gray-300 px-4 py-3 text-left text-black">Major Carriers</th>
                <th className="border border-gray-300 px-4 py-3 text-left text-black">Support Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 text-black">United States</td>
                <td className="border border-gray-300 px-4 py-3 text-black">Verizon, AT&T, T-Mobile</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Full Support</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 text-black">Europe</td>
                <td className="border border-gray-300 px-4 py-3 text-black">Vodafone, Orange, Deutsche Telekom</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Full Support</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 text-black">Asia Pacific</td>
                <td className="border border-gray-300 px-4 py-3 text-black">SoftBank, Singtel, Optus</td>
                <td className="border border-gray-300 px-4 py-3 text-green-600">✅ Full Support</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-black">FAQ</h2>
        <div className="space-y-4 mb-8">
          {faq.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-3">{item.q}</h3>
              <p className="text-black">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Compare Plans</h2>
          <p className="text-black mb-4">For travel, compare options at <Link href="/best-esim-plans" className="text-indigo-600 hover:text-indigo-800 font-semibold">Best eSIM Plans</Link>.</p>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-xl font-bold mb-4 text-black">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {related.slice(0, 4).map((u, index) => (
              <Link key={u} href={u} className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-indigo-600 hover:text-indigo-800">Related Guide {index + 1}</h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
} 
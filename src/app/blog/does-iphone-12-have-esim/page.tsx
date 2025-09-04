import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/does-iphone-12-have-esim' },
  title: 'Does iPhone 12 Have eSIM? (2025): Yes — Complete Guide & Setup',
  description: 'Yes, iPhone 12 has eSIM support. Complete guide: activation steps, dual SIM setup, carrier compatibility, troubleshooting, and travel eSIM recommendations.',
  keywords: 'does iphone 12 have esim, iphone 12 esim support, iphone 12 esim setup, iphone 12 dual sim, esim iphone 12',
  openGraph: {
    title: 'Does iPhone 12 Have eSIM? (2025): Yes — Complete Guide & Setup',
    description: 'Complete guide to iPhone 12 eSIM: setup, compatibility, dual SIM, and plan comparison.',
    url: 'https://esimcountry.fyi/blog/does-iphone-12-have-esim',
    type: 'article',
    publishedTime: '2025-01-20T00:00:00Z',
    modifiedTime: '2025-01-20T00:00:00Z',
    authors: ['eSIM Country Expert Team'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Does iPhone 12 Have eSIM? (2025): Yes — Complete Guide & Setup',
  description: 'Complete guide to iPhone 12 eSIM support with setup instructions and compatibility details.',
  author: { '@type': 'Organization', name: 'eSIM Country' },
  publisher: { '@type': 'Organization', name: 'eSIM Country' },
  datePublished: '2025-01-20T00:00:00Z',
  dateModified: '2025-01-20T00:00:00Z',
}

export default function Page() {
  const related = [
    '/blog/iphone-12-esim',
    '/blog/does-iphone-12-support-esim',
    '/blog/is-iphone-12-esim-compatible',
    '/blog/does-iphone-12-pro-have-esim',
    '/blog/can-iphone-12-use-esim',
  ]

  const faq = [
    { q: 'Does iPhone 12 have eSIM?', a: 'Yes. iPhone 12 supports eSIM across all models in 2025. Availability depends on carrier support in your country.' },
    { q: 'Is dual SIM possible?', a: 'Yes. You can use one eSIM together with a physical nano‑SIM at the same time.' },
    { q: 'How to activate eSIM on iPhone 12?', a: 'Settings → Cellular → Add eSIM. Scan a QR code, use a carrier app, or enter SM‑DP+ and activation code.' },
    { q: 'Can I move my eSIM later?', a: 'Often yes via eSIM transfer/Quick Transfer. Some carriers require issuing a new profile.' },
    { q: 'What are good travel eSIM options?', a: 'Use our Best eSIM Plans hub to compare providers and coverage by destination.' },
    { q: 'Which iPhone 12 models support eSIM?', a: 'All models: iPhone 12, 12 mini, 12 Pro, and 12 Pro Max support eSIM functionality.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://esimcountry.fyi' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://esimcountry.fyi/blog' }, { '@type': 'ListItem', position: 3, name: 'Does iPhone 12 Have eSIM?' } ] }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border-b py-16">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="mb-8">
              <Link href="/" className="text-green-600 hover:text-green-800">Home</Link>
              <span className="mx-2 text-gray-500">›</span>
              <Link href="/blog" className="text-green-600 hover:text-green-800">Blog</Link>
              <span className="mx-2 text-gray-500">›</span>
              <span className="text-gray-900">Does iPhone 12 Have eSIM?</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Does iPhone 12 Have eSIM? (2025 Guide)
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              <strong>Yes</strong> — iPhone 12 supports eSIM on all models. Complete guide to activation, dual SIM setup, and travel options.
              Compare travel plans on <Link href="/best-esim-plans" className="text-green-600 hover:text-green-800 font-semibold underline">Best eSIM Plans</Link>.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-green-200 px-3 py-1 rounded-full text-green-800">Updated: January 2025</span>
              <span className="bg-blue-200 px-3 py-1 rounded-full text-blue-800">6 min read</span>
              <span className="bg-purple-200 px-3 py-1 rounded-full text-purple-800">Expert Answer</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">Last updated: 20 Jan 2025 — Verified for all iPhone 12 variants with latest iOS.</p>
          </div>
        </div>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Table of Contents */}
          <div className="bg-gray-50 border rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">📋 Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#quick-answer" className="text-green-600 hover:underline">✅ Quick Answer: Yes, iPhone 12 Has eSIM</a></li>
              <li><a href="#model-support" className="text-green-600 hover:underline">📱 Which iPhone 12 Models Support eSIM</a></li>
              <li><a href="#activation" className="text-green-600 hover:underline">⚙️ How to Activate eSIM on iPhone 12</a></li>
              <li><a href="#dual-sim" className="text-green-600 hover:underline">📞 Dual SIM Setup Guide</a></li>
              <li><a href="#carrier-support" className="text-green-600 hover:underline">📡 Carrier Compatibility</a></li>
              <li><a href="#travel-options" className="text-green-600 hover:underline">✈️ Travel eSIM Options</a></li>
              <li><a href="#faq" className="text-green-600 hover:underline">❓ Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Quick Answer */}
          <section id="quick-answer" className="mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-green-800 mb-3">✅ Quick Answer: Yes, iPhone 12 Has eSIM</h2>
              <div className="text-green-700">
                <p className="mb-3"><strong>All iPhone 12 models support eSIM:</strong> iPhone 12, 12 mini, 12 Pro, 12 Pro Max</p>
                <p className="mb-3"><strong>Dual SIM capability:</strong> One eSIM + one physical nano-SIM simultaneously</p>
                <p className="mb-3"><strong>Activation methods:</strong> QR code scan, manual entry, or carrier app</p>
                <p><strong>Requirements:</strong> iOS 16+ recommended, carrier eSIM support</p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>Yes, the iPhone 12 does have eSIM support.</strong> All models in the iPhone 12 lineup — including the iPhone 12, 12 mini, 12 Pro, and 12 Pro Max — feature built-in eSIM technology. This allows you to use digital SIM profiles alongside or instead of traditional physical SIM cards.
            </p>
            <p className="text-gray-700">
              eSIM support makes the iPhone 12 particularly versatile for travelers, business users, and anyone who wants the convenience of dual SIM functionality without carrying multiple devices.
            </p>
          </div>

          {/* Model Support */}
          <section id="model-support" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">📱 iPhone 12 Model eSIM Support</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left">Model</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">eSIM Support</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Physical SIM</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Dual SIM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">iPhone 12</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Yes</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Nano-SIM</td>
                    <td className="border border-gray-300 px-4 py-3">✅ eSIM + Physical</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">iPhone 12 mini</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Yes</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Nano-SIM</td>
                    <td className="border border-gray-300 px-4 py-3">✅ eSIM + Physical</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">iPhone 12 Pro</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Yes</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Nano-SIM</td>
                    <td className="border border-gray-300 px-4 py-3">✅ eSIM + Physical</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">iPhone 12 Pro Max</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Yes</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Nano-SIM</td>
                    <td className="border border-gray-300 px-4 py-3">✅ eSIM + Physical</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Activation Guide */}
          <section id="activation" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">⚙️ How to Activate eSIM on iPhone 12</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">📋 What You Need</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• eSIM activation details from your carrier (QR code or activation code)</li>
                  <li>• Stable Wi-Fi connection</li>
                  <li>• iOS 16 or later (recommended)</li>
                  <li>• Carrier that supports eSIM</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Method 1: QR Code (Easiest)</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Open <strong>Settings</strong> → <strong>Cellular</strong></li>
                  <li><strong>2.</strong> Tap <strong>Add eSIM</strong></li>
                  <li><strong>3.</strong> Select <strong>Scan QR Code</strong></li>
                  <li><strong>4.</strong> Point your camera at the QR code</li>
                  <li><strong>5.</strong> Follow the on-screen prompts</li>
                  <li><strong>6.</strong> Label your eSIM and set preferences</li>
                </ol>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Method 2: Manual Entry</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Go to <strong>Settings</strong> → <strong>Cellular</strong> → <strong>Add eSIM</strong></li>
                  <li><strong>2.</strong> Choose <strong>Enter Details Manually</strong></li>
                  <li><strong>3.</strong> Enter the <strong>SM-DP+ Address</strong> and <strong>Activation Code</strong></li>
                  <li><strong>4.</strong> Tap <strong>Next</strong> and wait for activation</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Travel Options */}
          <section id="travel-options" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">✈️ Travel eSIM Options for iPhone 12</h2>
            <p className="text-gray-700 mb-6">
              iPhone 12's eSIM support makes it perfect for travel. Keep your home SIM active and add a local eSIM for your destination.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🌍 Popular Travel Destinations</h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-700">
                <div>
                  <p><strong>Europe:</strong> Multi-country plans from $4.50</p>
                  <p><strong>Asia:</strong> Regional coverage from $2.99</p>
                  <p><strong>Americas:</strong> North & South America from $3.95</p>
                </div>
                <div>
                  <p><strong>Global:</strong> 150+ countries from $7.00</p>
                  <p><strong>Unlimited:</strong> Available for major destinations</p>
                  <p><strong>Short-term:</strong> Plans from 1 day to 30 days</p>
                </div>
              </div>
            </div>

            <p className="text-center">
              <Link 
                href="/best-esim-plans" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Compare Travel eSIM Plans →
              </Link>
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12 bg-gray-50 border rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">🎯 Summary</h2>
            <p className="text-lg text-gray-700 mb-4">
              Yes, the iPhone 12 does have eSIM support across all models. This makes it an excellent choice for users who want flexible connectivity options, whether for travel, business, or personal use.
            </p>
            <p className="text-gray-700">
              With proper carrier support and activation, you can enjoy the convenience of digital SIM profiles alongside traditional physical SIM cards.
            </p>
          </section>

          {/* Related Articles */}
          <section className="border-t pt-8">
            <h3 className="text-2xl font-bold mb-6">📚 Related iPhone 12 eSIM Articles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {related.slice(0, 4).map((url, index) => {
                const titles = [
                  'iPhone 12 eSIM: Complete Setup Guide',
                  'iPhone 12 eSIM Support: Everything You Need to Know', 
                  'Is iPhone 12 eSIM Compatible? Requirements Guide',
                  'iPhone 12 Pro eSIM: Features & Setup'
                ]
                return (
                  <Link 
                    key={index}
                    href={url} 
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-semibold text-green-600 hover:text-green-800">{titles[index]}</h4>
                  </Link>
                )
              })}
            </div>
          </section>
        </article>
      </div>
    </>
  )
} 
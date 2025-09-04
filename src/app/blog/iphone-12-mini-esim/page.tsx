import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/iphone-12-mini-esim' },
  title: 'iPhone 12 mini eSIM (2025): Complete Setup Guide & Compatibility',
  description: 'iPhone 12 mini eSIM guide: setup steps, dual SIM features, carrier compatibility, troubleshooting tips, and travel eSIM recommendations for 2025.',
  keywords: 'iphone 12 mini esim, iphone 12 mini esim setup, iphone 12 mini dual sim, esim iphone 12 mini, iphone 12 mini esim compatibility',
  openGraph: {
    title: 'iPhone 12 mini eSIM (2025): Complete Setup Guide & Compatibility',
    description: 'Complete iPhone 12 mini eSIM guide: activation, dual SIM, troubleshooting, and plan comparison.',
    url: 'https://esimcountry.fyi/blog/iphone-12-mini-esim',
    type: 'article',
    publishedTime: '2025-01-20T00:00:00Z',
    modifiedTime: '2025-01-20T00:00:00Z',
    authors: ['eSIM Country Expert Team'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'iPhone 12 mini eSIM (2025): Complete Setup Guide & Compatibility',
  description: 'Complete guide to iPhone 12 mini eSIM support with setup instructions and compatibility details.',
  author: { '@type': 'Organization', name: 'eSIM Country' },
  publisher: { '@type': 'Organization', name: 'eSIM Country' },
  datePublished: '2025-01-20T00:00:00Z',
  dateModified: '2025-01-20T00:00:00Z',
}

export default function Page() {
  const related = [
    '/blog/iphone-12-esim',
    '/blog/does-iphone-12-have-esim',
    '/blog/does-iphone-12-support-esim',
    '/blog/is-iphone-12-esim-compatible',
    '/blog/does-iphone-12-pro-have-esim',
  ]

  const faq = [
    { q: 'Does iPhone 12 mini support eSIM?', a: 'Yes. iPhone 12 mini supports eSIM in 2025 with most carriers. Availability depends on your region and operator.' },
    { q: 'Can iPhone 12 mini use dual SIM?', a: 'Yes. One eSIM + one physical SIM at the same time.' },
    { q: 'How do I add an eSIM on iPhone 12 mini?', a: 'Settings → Cellular → Add eSIM, then scan QR code or use carrier app/activation code.' },
    { q: 'Is eSIM good for travel?', a: 'Yes. You can buy and activate plans digitally. Compare options on Best eSIM Plans.' },
    { q: 'Does iPhone 12 mini have the same eSIM features as regular iPhone 12?', a: 'Yes. iPhone 12 mini has identical eSIM capabilities to the standard iPhone 12.' },
    { q: 'Can I store multiple eSIM profiles on iPhone 12 mini?', a: 'Yes. You can store multiple eSIM profiles but only use one eSIM active at a time alongside the physical SIM.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://esimcountry.fyi' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://esimcountry.fyi/blog' }, { '@type': 'ListItem', position: 3, name: 'iPhone 12 mini eSIM' } ] }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-b py-16">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="mb-8">
              <Link href="/" className="text-purple-600 hover:text-purple-800">Home</Link>
              <span className="mx-2 text-gray-500">›</span>
              <Link href="/blog" className="text-purple-600 hover:text-purple-800">Blog</Link>
              <span className="mx-2 text-gray-500">›</span>
              <span className="text-gray-900">iPhone 12 mini eSIM</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              iPhone 12 mini eSIM (2025 Guide)
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Complete iPhone 12 mini eSIM guide: setup, dual SIM features, compatibility, and travel recommendations.
              Find travel eSIM plans on <Link href="/best-esim-plans" className="text-purple-600 hover:text-purple-800 font-semibold underline">Best eSIM Plans</Link>.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-purple-200 px-3 py-1 rounded-full text-purple-800">Updated: January 2025</span>
              <span className="bg-blue-200 px-3 py-1 rounded-full text-blue-800">6 min read</span>
              <span className="bg-green-200 px-3 py-1 rounded-full text-green-800">Complete Guide</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">Last updated: 20 Jan 2025 — Verified for iPhone 12 mini with latest iOS updates.</p>
          </div>
        </div>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Table of Contents */}
          <div className="bg-gray-50 border rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">📋 Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#quick-answer" className="text-purple-600 hover:underline">✅ Quick Answer: iPhone 12 mini eSIM Support</a></li>
              <li><a href="#features" className="text-purple-600 hover:underline">📱 iPhone 12 mini eSIM Features</a></li>
              <li><a href="#setup" className="text-purple-600 hover:underline">⚙️ Setup & Activation Guide</a></li>
              <li><a href="#dual-sim" className="text-purple-600 hover:underline">📞 Dual SIM Configuration</a></li>
              <li><a href="#troubleshooting" className="text-purple-600 hover:underline">🔧 Troubleshooting Tips</a></li>
              <li><a href="#travel" className="text-purple-600 hover:underline">✈️ Travel eSIM Options</a></li>
              <li><a href="#faq" className="text-purple-600 hover:underline">❓ Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Quick Answer */}
          <section id="quick-answer" className="mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-green-800 mb-3">✅ Quick Answer: iPhone 12 mini eSIM Support</h2>
              <div className="text-green-700">
                <p className="mb-3"><strong>Full eSIM support:</strong> iPhone 12 mini has identical eSIM features to iPhone 12</p>
                <p className="mb-3"><strong>Dual SIM ready:</strong> One eSIM + one physical SIM simultaneously</p>
                <p className="mb-3"><strong>Compact convenience:</strong> All eSIM benefits in the smallest iPhone 12 model</p>
                <p><strong>Perfect for travel:</strong> Keep your main SIM and add travel eSIM as needed</p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              The <strong>iPhone 12 mini</strong> packs all the eSIM capabilities of the larger iPhone 12 models into Apple's most compact form factor. 
              Despite its smaller size, you get full eSIM support, dual SIM functionality, and the same carrier compatibility as other iPhone 12 models.
            </p>
            <p className="text-gray-700">
              This makes the iPhone 12 mini an excellent choice for users who want a pocketable device without compromising on connectivity options.
            </p>
          </div>

          {/* iPhone 12 mini Features */}
          <section id="features" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">📱 iPhone 12 mini eSIM Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">✅ What's Included</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Full eSIM support (same as iPhone 12)</li>
                  <li>• Dual SIM Dual Standby (DSDS)</li>
                  <li>• Multiple eSIM profile storage</li>
                  <li>• QR code and manual activation</li>
                  <li>• eSIM transfer capabilities</li>
                  <li>• 5G support on both lines</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">📏 Compact Advantages</h3>
                <ul className="space-y-2 text-purple-700">
                  <li>• Same eSIM features in smaller device</li>
                  <li>• Perfect for travel (lightweight)</li>
                  <li>• One-handed operation with dual SIM</li>
                  <li>• All carrier compatibility maintained</li>
                  <li>• Same iOS eSIM interface</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Setup Guide */}
          <section id="setup" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">⚙️ iPhone 12 mini eSIM Setup Guide</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-yellow-800">
                <strong>Before you start:</strong> Ensure stable Wi-Fi connection and have your eSIM activation details ready from your carrier.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">📱 QR Code Method (Recommended)</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Open <strong>Settings</strong> → <strong>Cellular</strong></li>
                  <li><strong>2.</strong> Tap <strong>Add eSIM</strong></li>
                  <li><strong>3.</strong> Select <strong>Scan QR Code</strong></li>
                  <li><strong>4.</strong> Point camera at QR code (works great on mini's camera)</li>
                  <li><strong>5.</strong> Follow prompts to complete activation</li>
                  <li><strong>6.</strong> Label your eSIM (e.g., "Work", "Travel")</li>
                  <li><strong>7.</strong> Configure default lines for calls, SMS, data</li>
                </ol>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">⌨️ Manual Entry Method</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Settings → Cellular → Add eSIM → Enter Details Manually</li>
                  <li><strong>2.</strong> Enter SM-DP+ Address and Activation Code</li>
                  <li><strong>3.</strong> Tap Next and wait for profile download</li>
                  <li><strong>4.</strong> Complete setup and configure preferences</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Dual SIM */}
          <section id="dual-sim" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">📞 Dual SIM on iPhone 12 mini</h2>
            <p className="text-gray-700 mb-6">
              Despite its compact size, iPhone 12 mini supports full dual SIM functionality with one eSIM and one physical nano-SIM.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Perfect Use Cases</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Work and personal separation</li>
                  <li>• Travel without losing home number</li>
                  <li>• Local rates while abroad</li>
                  <li>• Backup connectivity</li>
                  <li>• Different carriers for coverage</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">⚙️ Configuration Tips</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Set preferred line for data</li>
                  <li>• Configure default for voice calls</li>
                  <li>• Assign contacts to specific lines</li>
                  <li>• Enable cellular switching for data</li>
                  <li>• Label lines clearly for easy management</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Travel Section */}
          <section id="travel" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">✈️ iPhone 12 mini Travel eSIM Guide</h2>
            <p className="text-gray-700 mb-6">
              The compact iPhone 12 mini is perfect for travel, and eSIM makes connectivity even more convenient.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🌍 Travel Benefits</h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-700">
                <div>
                  <p><strong>No SIM swapping:</strong> Keep home SIM + add travel eSIM</p>
                  <p><strong>Instant activation:</strong> Ready on arrival</p>
                  <p><strong>Multiple destinations:</strong> Store profiles for frequent trips</p>
                </div>
                <div>
                  <p><strong>Cost effective:</strong> Local rates vs roaming</p>
                  <p><strong>Backup connectivity:</strong> Two network options</p>
                  <p><strong>Easy management:</strong> Switch plans in Settings</p>
                </div>
              </div>
            </div>

            <p className="text-center">
              <Link 
                href="/best-esim-plans" 
                className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Find Travel eSIM Plans →
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
              The iPhone 12 mini delivers full eSIM functionality in Apple's most compact form factor. You get all the benefits of dual SIM, 
              easy activation, and excellent travel capabilities without any compromises.
            </p>
            <p className="text-gray-700">
              Whether you need dual SIM for work and personal use or want the convenience of travel eSIMs, 
              the iPhone 12 mini handles it all with the same capabilities as larger iPhone 12 models.
            </p>
          </section>

          {/* Related Articles */}
          <section className="border-t pt-8">
            <h3 className="text-2xl font-bold mb-6">📚 Related iPhone 12 eSIM Guides</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {related.slice(0, 4).map((url, index) => {
                const titles = [
                  'iPhone 12 eSIM: Complete Setup Guide',
                  'Does iPhone 12 Have eSIM? Full Answer',
                  'iPhone 12 eSIM Support: Compatibility Guide', 
                  'Is iPhone 12 eSIM Compatible? Requirements'
                ]
                return (
                  <Link 
                    key={index}
                    href={url} 
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-semibold text-purple-600 hover:text-purple-800">{titles[index]}</h4>
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
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/iphone-12-esim' },
  title: 'iPhone 12 eSIM (2025): Complete Setup Guide, Compatibility & Dual SIM',
  description: 'Complete iPhone 12 eSIM guide 2025: setup steps, carrier compatibility, dual SIM tips, troubleshooting, and travel plan comparison. Works with all iPhone 12 models.',
  keywords: 'iphone 12 esim, iphone 12 esim setup, iphone 12 dual sim, iphone 12 esim compatibility, iphone 12 esim activation, esim iphone 12 2025',
  openGraph: {
    title: 'iPhone 12 eSIM (2025): Complete Setup Guide, Compatibility & Dual SIM',
    description: 'Complete iPhone 12 eSIM guide: activation, compatibility, carriers, dual SIM, and plan comparison.',
    url: 'https://esimcountry.fyi/blog/iphone-12-esim',
    type: 'article',
    publishedTime: '2025-01-20T00:00:00Z',
    modifiedTime: '2025-01-20T00:00:00Z',
    authors: ['eSIM Country Expert Team'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'iPhone 12 eSIM (2025): Complete Setup Guide, Compatibility & Dual SIM',
  description: 'Complete guide to iPhone 12 eSIM: setup, compatibility, dual SIM usage, and travel plan comparison.',
  author: {
    '@type': 'Organization',
    name: 'eSIM Country',
  },
  publisher: {
    '@type': 'Organization',
    name: 'eSIM Country',
  },
  datePublished: '2025-01-20T00:00:00Z',
  dateModified: '2025-01-20T00:00:00Z',
}

export default function Page() {
  const related = [
    '/blog/does-iphone-12-have-esim',
    '/blog/does-iphone-12-support-esim',
    '/blog/iphone-12-mini-esim',
    '/blog/does-iphone-12-pro-have-esim',
    '/blog/can-iphone-12-use-esim',
  ]

  const faq = [
    { q: 'Does iPhone 12 support eSIM in 2025?', a: 'Yes. All iPhone 12 models (12, 12 mini, 12 Pro, 12 Pro Max) support eSIM alongside a physical nano‑SIM in most regions.' },
    { q: 'Can I use dual SIM on iPhone 12?', a: 'Yes. You can use one eSIM + one physical SIM simultaneously (Dual SIM Dual Standby). In eSIM‑only countries, two eSIM profiles may be possible depending on carrier.' },
    { q: 'How do I add an eSIM on iPhone 12?', a: 'Go to Settings → Cellular → Add eSIM. Scan a QR code, enter activation code (SM‑DP+), or use carrier app/Quick Transfer.' },
    { q: 'Will an eSIM lock my iPhone 12?', a: 'No. eSIM itself does not lock an iPhone; lock status depends on carrier policy and device purchase terms.' },
    { q: 'Can I move my eSIM to a new iPhone?', a: 'Usually yes using eSIM transfer/Quick Transfer. Some carriers require issuing a new eSIM profile.' },
    { q: 'Is eSIM available on prepaid travel plans?', a: 'Yes. Many providers offer instant‑activation eSIMs for travel. Compare options on Best eSIM Plans.' },
    { q: 'What iOS version do I need for eSIM?', a: 'iOS 16+ is recommended for the best eSIM transfer features and stability.' },
    { q: 'Can I use international eSIM for travel?', a: 'Yes. Travel eSIMs work great on iPhone 12. You can keep your main SIM and add a travel eSIM for the destination.' },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://esimcountry.fyi' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://esimcountry.fyi/blog' },
      { '@type': 'ListItem', position: 3, name: 'iPhone 12 eSIM Guide' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b py-16">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="mb-8">
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
              <span className="mx-2 text-gray-500">›</span>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                Blog
              </Link>
              <span className="mx-2 text-gray-500">›</span>
              <span className="text-gray-900">iPhone 12 eSIM Guide</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              iPhone 12 eSIM (2025): Complete Setup Guide
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Complete guide to iPhone 12 eSIM: setup, compatibility, dual SIM, troubleshooting, and travel plan comparison. Works with all iPhone 12 models.
              Need travel eSIM plans? Check our <Link href="/best-esim-plans" className="text-blue-600 hover:text-blue-800 font-semibold underline">Best eSIM Plans</Link> comparison.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-blue-200 px-3 py-1 rounded-full text-blue-800">Updated: January 2025</span>
              <span className="bg-green-200 px-3 py-1 rounded-full text-green-800">7 min read</span>
              <span className="bg-purple-200 px-3 py-1 rounded-full text-purple-800">Expert Guide</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">Last updated: 20 Jan 2025 — Verified for all iPhone 12 models with iOS 18 compatibility.</p>
          </div>
        </div>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Table of Contents */}
          <div className="bg-gray-50 border rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">📋 Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#quick-answer" className="text-blue-600 hover:underline">✅ Quick Answer: iPhone 12 eSIM Support</a></li>
              <li><a href="#what-is-esim" className="text-blue-600 hover:underline">📱 What is eSIM & How It Works</a></li>
              <li><a href="#compatibility" className="text-blue-600 hover:underline">🔧 iPhone 12 eSIM Compatibility</a></li>
              <li><a href="#setup-guide" className="text-blue-600 hover:underline">⚙️ Step-by-Step Activation Guide</a></li>
              <li><a href="#dual-sim" className="text-blue-600 hover:underline">📞 Dual SIM: eSIM + Physical SIM</a></li>
              <li><a href="#troubleshooting" className="text-blue-600 hover:underline">🔧 Common Issues & Solutions</a></li>
              <li><a href="#travel-plans" className="text-blue-600 hover:underline">✈️ Travel eSIM Recommendations</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">❓ Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Quick Answer */}
          <section id="quick-answer" className="mb-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-green-800 mb-3">✅ Quick Answer: iPhone 12 eSIM Support</h2>
              <div className="text-green-700">
                <p className="mb-3"><strong>Yes, all iPhone 12 models support eSIM:</strong> iPhone 12, 12 mini, 12 Pro, 12 Pro Max</p>
                <p className="mb-3"><strong>Dual SIM:</strong> One eSIM + one physical SIM simultaneously</p>
                <p className="mb-3"><strong>Activation:</strong> Settings → Cellular → Add eSIM (QR code, SM-DP+, or carrier app)</p>
                <p><strong>Requirements:</strong> iOS 16+ recommended, carrier eSIM support, Wi-Fi connection</p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              The <strong>iPhone 12 series</strong> was Apple's first generation to support eSIM across all models globally. 
              Whether you have an iPhone 12, 12 mini, 12 Pro, or 12 Pro Max, you can use eSIM for flexible connectivity, 
              travel plans, or dual SIM setups. This comprehensive guide covers everything you need to know about iPhone 12 eSIM 
              in 2025, including setup, compatibility, and troubleshooting.
            </p>
          </div>

          {/* What is eSIM */}
          <section id="what-is-esim" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">📱 What is eSIM & How It Works</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-blue-800">
                <strong>eSIM (embedded SIM)</strong> is a digital SIM that's built into your iPhone 12. Instead of a physical card, 
                your carrier profile is downloaded and stored electronically.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">✅ eSIM Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Instant activation (no waiting for physical SIM)</li>
                  <li>• Store multiple profiles (switch as needed)</li>
                  <li>• Perfect for travel (no SIM swapping)</li>
                  <li>• Dual SIM functionality</li>
                  <li>• More secure (can't be physically removed)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">📋 How eSIM Activation Works</h3>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Carrier provides QR code or activation details</li>
                  <li>2. Open Settings → Cellular → Add eSIM</li>
                  <li>3. Scan QR code or enter activation code</li>
                  <li>4. Profile downloads and activates automatically</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Compatibility */}
          <section id="compatibility" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">🔧 iPhone 12 eSIM Compatibility</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left">iPhone Model</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">eSIM Support</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Dual SIM</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">iOS Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">iPhone 12</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Yes</td>
                    <td className="border border-gray-300 px-4 py-3">✅ eSIM + Physical</td>
                    <td className="border border-gray-300 px-4 py-3">iOS 16+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">iPhone 12 mini</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Yes</td>
                    <td className="border border-gray-300 px-4 py-3">✅ eSIM + Physical</td>
                    <td className="border border-gray-300 px-4 py-3">iOS 16+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">iPhone 12 Pro</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Yes</td>
                    <td className="border border-gray-300 px-4 py-3">✅ eSIM + Physical</td>
                    <td className="border border-gray-300 px-4 py-3">iOS 16+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">iPhone 12 Pro Max</td>
                    <td className="border border-gray-300 px-4 py-3">✅ Yes</td>
                    <td className="border border-gray-300 px-4 py-3">✅ eSIM + Physical</td>
                    <td className="border border-gray-300 px-4 py-3">iOS 16+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Setup Guide */}
          <section id="setup-guide" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">⚙️ Step-by-Step iPhone 12 eSIM Activation</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-yellow-800">
                <strong>Before starting:</strong> Ensure you have a stable Wi-Fi connection and your eSIM activation details (QR code, SM-DP+ address, or activation code) from your carrier.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Method 1: QR Code Activation (Recommended)</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Open <strong>Settings</strong> → <strong>Cellular</strong></li>
                  <li><strong>2.</strong> Tap <strong>Add eSIM</strong></li>
                  <li><strong>3.</strong> Select <strong>Scan QR Code</strong></li>
                  <li><strong>4.</strong> Point camera at the QR code provided by your carrier</li>
                  <li><strong>5.</strong> Follow on-screen instructions to complete activation</li>
                  <li><strong>6.</strong> Label your eSIM (e.g., "Travel" or "Personal")</li>
                  <li><strong>7.</strong> Choose default line for voice, SMS, and data</li>
                </ol>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Method 2: Manual Entry</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Open <strong>Settings</strong> → <strong>Cellular</strong> → <strong>Add eSIM</strong></li>
                  <li><strong>2.</strong> Select <strong>Enter Details Manually</strong></li>
                  <li><strong>3.</strong> Enter <strong>SM-DP+ Address</strong> and <strong>Activation Code</strong></li>
                  <li><strong>4.</strong> Tap <strong>Next</strong> and wait for profile download</li>
                  <li><strong>5.</strong> Complete setup and label your eSIM</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Dual SIM */}
          <section id="dual-sim" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">📞 Dual SIM: eSIM + Physical SIM</h2>
            <p className="text-gray-700 mb-6">
              iPhone 12 supports <strong>Dual SIM Dual Standby (DSDS)</strong>, allowing you to use one eSIM and one physical nano-SIM simultaneously.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Dual SIM Benefits</h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Separate work and personal numbers</li>
                  <li>• Keep home SIM + add travel eSIM</li>
                  <li>• Use local rates while traveling</li>
                  <li>• Choose best plan for calls vs data</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">⚙️ How to Configure</h3>
                <ol className="space-y-2 text-blue-700">
                  <li>1. Add eSIM following steps above</li>
                  <li>2. Go to Settings → Cellular</li>
                  <li>3. Set default line for voice calls</li>
                  <li>4. Set default line for iMessage & FaceTime</li>
                  <li>5. Choose cellular data preference</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">🔧 Common Issues & Solutions</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-600 mb-3">❌ "Unable to Complete Cellular Plan Change"</h3>
                <div className="text-gray-700">
                  <p className="mb-2"><strong>Causes:</strong> Poor Wi-Fi, incorrect activation code, or carrier-side issues</p>
                  <p><strong>Solutions:</strong></p>
                  <ul className="mt-2 space-y-1">
                    <li>• Check Wi-Fi connection strength</li>
                    <li>• Verify activation code is correct</li>
                    <li>• Wait 15 minutes and try again</li>
                    <li>• Contact your carrier for new QR code</li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-600 mb-3">📵 No Signal on eSIM</h3>
                <div className="text-gray-700">
                  <p><strong>Solutions:</strong></p>
                  <ul className="mt-2 space-y-1">
                    <li>• Enable eSIM in Settings → Cellular</li>
                    <li>• Check if eSIM is set as default for cellular data</li>
                    <li>• Toggle Airplane Mode on/off</li>
                    <li>• Restart iPhone</li>
                    <li>• Check carrier coverage in your area</li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-600 mb-3">🔄 eSIM Transfer to New iPhone</h3>
                <div className="text-gray-700">
                  <p className="mb-2"><strong>Quick Transfer (iOS 16+):</strong></p>
                  <ul className="mt-2 space-y-1">
                    <li>• During iPhone setup, choose "Transfer from iPhone"</li>
                    <li>• Select eSIM profiles to transfer</li>
                    <li>• Complete setup on new device</li>
                  </ul>
                  <p className="mt-4 mb-2"><strong>Manual Transfer:</strong></p>
                  <ul className="mt-2 space-y-1">
                    <li>• Contact carrier for new eSIM profile</li>
                    <li>• Remove eSIM from old iPhone first</li>
                    <li>• Activate on new iPhone using new QR code</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Travel Plans */}
          <section id="travel-plans" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">✈️ Best Travel eSIM Plans for iPhone 12</h2>
            <p className="text-gray-700 mb-6">
              Your iPhone 12 is perfect for travel eSIMs. Keep your home SIM and add a local eSIM for your destination.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🌍 Popular Travel Destinations</h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-700">
                <div>
                  <p><strong>Europe:</strong> Plans from $4.50 for 1GB</p>
                  <p><strong>Asia:</strong> Plans from $2.99 for 1GB</p>
                  <p><strong>Americas:</strong> Plans from $3.95 for 1GB</p>
                </div>
                <div>
                  <p><strong>Global Plans:</strong> 150+ countries from $7.00</p>
                  <p><strong>Regional Plans:</strong> Multi-country coverage</p>
                  <p><strong>Unlimited Options:</strong> Available for most destinations</p>
                </div>
              </div>
            </div>

            <p className="text-center">
              <Link 
                href="/best-esim-plans" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Compare Travel eSIM Plans by Country →
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
            <h2 className="text-3xl font-bold mb-6">🎯 Conclusion</h2>
            <p className="text-lg text-gray-700 mb-4">
              The iPhone 12 series offers excellent eSIM support across all models, making it perfect for dual SIM setups and travel connectivity. 
              With proper setup and the right carrier support, you can enjoy the flexibility of eSIM while keeping your primary line active.
            </p>
            <p className="text-gray-700 mb-6">
              For travel, eSIM is especially convenient—no need to swap physical SIMs or worry about losing them. 
              Simply download a local plan and stay connected from the moment you land.
            </p>
            <p className="text-center">
              <Link 
                href="/best-esim-plans" 
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Find the Best eSIM Plans for Your Next Trip →
              </Link>
            </p>
          </section>

          {/* Related Articles */}
          <section className="border-t pt-8">
            <h3 className="text-2xl font-bold mb-6">📚 Related iPhone 12 eSIM Guides</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {related.slice(0, 4).map((url, index) => {
                const titles = [
                  'Does iPhone 12 Have eSIM? Complete Answer',
                  'iPhone 12 eSIM Support: Compatibility Guide', 
                  'iPhone 12 mini eSIM: Setup & Features',
                  'iPhone 12 Pro eSIM: Everything You Need to Know'
                ]
                return (
                  <Link 
                    key={index}
                    href={url} 
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-semibold text-blue-600 hover:text-blue-800">{titles[index]}</h4>
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
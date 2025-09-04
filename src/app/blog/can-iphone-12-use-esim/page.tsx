import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/can-iphone-12-use-esim' },
  title: 'Can iPhone 12 Use eSIM? (2025): Yes — Complete Setup Guide',
  description: 'Yes, iPhone 12 can use eSIM. Complete guide: activation methods, dual SIM setup, troubleshooting tips, and travel eSIM recommendations.',
  keywords: 'can iphone 12 use esim, iphone 12 esim setup, iphone 12 esim activation, esim iphone 12 guide',
  openGraph: {
    title: 'Can iPhone 12 Use eSIM? (2025): Yes — Complete Setup Guide',
    description: 'Complete guide to using eSIM on iPhone 12: activation, dual SIM, troubleshooting, and plan comparison.',
    url: 'https://esimcountry.fyi/blog/can-iphone-12-use-esim',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/blog/iphone-12-esim',
    '/blog/does-iphone-12-have-esim',
    '/blog/is-iphone-12-esim-compatible',
    '/blog/does-iphone-12-pro-have-esim',
    '/blog/can-all-of-the-iphone-12-use-esims',
  ]

  const faq = [
    { q: 'Can iPhone 12 use eSIM?', a: 'Yes. All models can use eSIM in 2025. You need carrier support and an activation profile.' },
    { q: 'Can I keep my physical SIM?', a: 'Yes. You can run one eSIM and one physical SIM simultaneously for dual SIM.' },
    { q: 'Is eSIM good for travel?', a: 'Yes. It allows instant activation and easy switching. Compare options in our hub.' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-b py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-600 hover:text-cyan-800">Home</Link>
            <span className="mx-2 text-black">›</span>
            <Link href="/blog" className="text-cyan-600 hover:text-cyan-800">Blog</Link>
            <span className="mx-2 text-black">›</span>
            <span className="text-black font-medium">Can iPhone 12 Use eSIM?</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Can iPhone 12 Use eSIM? (2025)
          </h1>
          <p className="text-xl text-black mb-4">
            <strong>Yes</strong> — iPhone 12 can use eSIM alongside a physical SIM. Complete setup guide and troubleshooting tips.
            Find travel eSIM plans on <Link href="/best-esim-plans" className="text-cyan-600 hover:text-cyan-800 font-semibold underline">Best eSIM Plans</Link>.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-cyan-200 px-3 py-1 rounded-full text-cyan-800">Updated: January 2025</span>
            <span className="bg-blue-200 px-3 py-1 rounded-full text-blue-800">5 min read</span>
            <span className="bg-green-200 px-3 py-1 rounded-full text-green-800">Setup Guide</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Answer */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-green-800 mb-3">✅ Quick Answer</h2>
          <div className="text-black">
            <p className="mb-3"><strong>eSIM works on iPhone 12 (all models)</strong></p>
            <p className="mb-3"><strong>Dual SIM:</strong> One eSIM + one physical</p>
            <p><strong>Activation:</strong> QR code, SM‑DP+ code, or carrier app</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-black">
            <strong>Yes.</strong> iPhone 12 can use eSIM alongside a physical SIM. Below is how to activate and use it confidently.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-black">Setup Steps</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-8">
          <ol className="space-y-3 text-black">
            <li><strong>1.</strong> Open <strong>Settings</strong> → <strong>Cellular</strong></li>
            <li><strong>2.</strong> Tap <strong>Add eSIM</strong></li>
            <li><strong>3.</strong> Scan QR code or enter activation details</li>
            <li><strong>4.</strong> Label your eSIM and set preferences</li>
          </ol>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-black">Dual SIM Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">✅ Use Cases</h3>
            <ul className="space-y-2 text-black">
              <li>• Work and personal lines</li>
              <li>• Travel without losing home number</li>
              <li>• Local rates while abroad</li>
              <li>• Backup connectivity</li>
            </ul>
          </div>
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-cyan-800 mb-3">⚙️ Setup Tips</h3>
            <ul className="space-y-2 text-black">
              <li>• Label lines clearly</li>
              <li>• Set data line preference</li>
              <li>• Configure default for calls</li>
              <li>• Enable automatic switching</li>
            </ul>
          </div>
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
          <p className="text-black">Use the <Link href="/best-esim-plans" className="text-cyan-600 hover:text-cyan-800 font-semibold">Best eSIM Plans</Link> hub to compare travel eSIMs.</p>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-xl font-bold mb-4 text-black">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {related.slice(0, 4).map((u, index) => (
              <Link key={u} href={u} className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-cyan-600 hover:text-cyan-800">Related Guide {index + 1}</h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
} 
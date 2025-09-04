import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/is-iphone-12-support-esim' },
  title: 'Is iPhone 12 Support eSIM? (2025): Yes — How It Works',
  description: 'Yes, iPhone 12 supports eSIM. Learn how it works, requirements, dual SIM details, and travel plan comparison.',
  openGraph: {
    title: 'Is iPhone 12 Support eSIM? (2025): Yes — How It Works',
    description: 'iPhone 12 eSIM support explained: compatibility, setup process, and travel options.',
    url: 'https://esimcountry.fyi/blog/is-iphone-12-support-esim',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/blog/does-iphone-12-support-esim',
    '/blog/does-iphone-12-have-esim',
    '/blog/can-iphone-12-use-esim',
    '/blog/iphone-12-esim-support',
    '/blog/is-iphone-12-esim-compatible',
  ]

  const faq = [
    { q: 'Does iPhone 12 support eSIM?', a: 'Yes. All iPhone 12 models support eSIM in 2025. Carrier policies vary by region.' },
    { q: 'What is dual SIM on iPhone 12?', a: 'One eSIM plus one physical SIM active at the same time (DSDS).' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-rose-50 to-rose-100 border-b py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="mb-8">
            <Link href="/" className="text-rose-600 hover:text-rose-800">Home</Link>
            <span className="mx-2 text-black">›</span>
            <Link href="/blog" className="text-rose-600 hover:text-rose-800">Blog</Link>
            <span className="mx-2 text-black">›</span>
            <span className="text-black font-medium">Is iPhone 12 Support eSIM?</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Is iPhone 12 Support eSIM? (2025)
          </h1>
          <p className="text-xl text-black mb-4">
            <strong>Yes.</strong> iPhone 12 supports eSIM on all models. Learn how it works and what you need to activate it.
            Find travel plans on <Link href="/best-esim-plans" className="text-rose-600 hover:text-rose-800 font-semibold underline">Best eSIM Plans</Link>.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-rose-200 px-3 py-1 rounded-full text-rose-800">Updated: January 2025</span>
            <span className="bg-blue-200 px-3 py-1 rounded-full text-blue-800">5 min read</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-green-800 mb-3">✅ Quick Answer</h2>
          <p className="text-black"><strong>Yes, iPhone 12 supports eSIM</strong> across all models with excellent compatibility.</p>
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-black">
            <strong>Yes.</strong> iPhone 12 supports eSIM on all models. Below is how it works and what you need to activate it.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-black">How eSIM Works on iPhone 12</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-8">
          <ul className="space-y-3 text-black">
            <li>• <strong>Digital SIM:</strong> No physical card needed</li>
            <li>• <strong>Instant activation:</strong> QR code or app setup</li>
            <li>• <strong>Dual SIM ready:</strong> eSIM + physical SIM together</li>
            <li>• <strong>Travel friendly:</strong> Switch plans easily</li>
          </ul>
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
          <p className="text-black">See <Link href="/best-esim-plans" className="text-rose-600 hover:text-rose-800 font-semibold">Best eSIM Plans</Link> to evaluate travel eSIMs.</p>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-xl font-bold mb-4 text-black">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {related.slice(0, 4).map((u, index) => (
              <Link key={u} href={u} className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-rose-600 hover:text-rose-800">Related Guide {index + 1}</h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
} 
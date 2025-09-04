import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/does-iphone-12-pro-have-esim' },
  title: 'Does iPhone 12 Pro Have eSIM? (2025): Yes — Setup & Dual SIM',
  description: 'Yes, iPhone 12 Pro has eSIM. Complete setup guide: activation steps, dual SIM usage, troubleshooting, and travel eSIM plans.',
  openGraph: {
    title: 'Does iPhone 12 Pro Have eSIM? (2025): Yes — Setup & Dual SIM',
    description: 'Complete iPhone 12 Pro eSIM guide: activation, dual SIM tips, fixes, and plan comparison.',
    url: 'https://esimcountry.fyi/blog/does-iphone-12-pro-have-esim',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/blog/iphone-12-esim',
    '/blog/does-iphone-12-have-esim',
    '/blog/does-iphone-12-support-esim',
    '/blog/is-iphone-12-esim-compatible',
    '/blog/can-iphone-12-use-esim',
  ]

  const faq = [
    { q: 'Does iPhone 12 Pro have eSIM?', a: 'Yes. iPhone 12 Pro supports eSIM in 2025 with most carriers.' },
    { q: 'Can I use dual SIM?', a: 'Yes. One eSIM with one physical SIM simultaneously.' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-b py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="mb-8">
            <Link href="/" className="text-emerald-600 hover:text-emerald-800">Home</Link>
            <span className="mx-2 text-black">›</span>
            <Link href="/blog" className="text-emerald-600 hover:text-emerald-800">Blog</Link>
            <span className="mx-2 text-black">›</span>
            <span className="text-black font-medium">iPhone 12 Pro eSIM</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Does iPhone 12 Pro Have eSIM? (2025)
          </h1>
          <p className="text-xl text-black mb-4">
            <strong>Yes.</strong> iPhone 12 Pro supports eSIM and dual SIM. Complete setup guide and travel options.
            Find travel plans on <Link href="/best-esim-plans" className="text-emerald-600 hover:text-emerald-800 font-semibold underline">Best eSIM Plans</Link>.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-emerald-200 px-3 py-1 rounded-full text-emerald-800">Updated: January 2025</span>
            <span className="bg-blue-200 px-3 py-1 rounded-full text-blue-800">5 min read</span>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-green-800 mb-3">✅ Quick Answer</h2>
          <p className="text-black"><strong>Yes, iPhone 12 Pro has eSIM</strong> with full dual SIM support.</p>
        </div>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-lg text-black">
            <strong>Yes.</strong> iPhone 12 Pro supports eSIM and dual SIM. Here's how to activate it and what to check before you buy a plan.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-black">iPhone 12 Pro eSIM Features</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-8">
          <ul className="space-y-3 text-black">
            <li>• <strong>Full eSIM support:</strong> Same as iPhone 12</li>
            <li>• <strong>Dual SIM ready:</strong> eSIM + physical SIM</li>
            <li>• <strong>5G compatible:</strong> Works on both lines</li>
            <li>• <strong>Pro features:</strong> All connectivity options available</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-black">Setup Guide</h2>
        <div className="border border-gray-200 rounded-lg p-6 mb-8">
          <ol className="space-y-3 text-black">
            <li><strong>1.</strong> Settings → Cellular → Add eSIM</li>
            <li><strong>2.</strong> Scan QR code or enter details manually</li>
            <li><strong>3.</strong> Configure line preferences</li>
            <li><strong>4.</strong> Test connectivity</li>
          </ol>
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
          <h2 className="text-2xl font-bold mb-4 text-black">Travel Plans</h2>
          <p className="text-black">See <Link href="/best-esim-plans" className="text-emerald-600 hover:text-emerald-800 font-semibold">Best eSIM Plans</Link> for travel options.</p>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-xl font-bold mb-4 text-black">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {related.slice(0, 4).map((u, index) => (
              <Link key={u} href={u} className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-emerald-600 hover:text-emerald-800">Related Guide {index + 1}</h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
} 
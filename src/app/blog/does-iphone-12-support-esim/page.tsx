import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/does-iphone-12-support-esim' },
  title: 'Does iPhone 12 Support eSIM? (2025): Compatibility & Setup',
  description: 'Yes, iPhone 12 supports eSIM. Learn requirements, activation, dual SIM use, troubleshooting, and compare travel eSIM plans.',
  openGraph: {
    title: 'Does iPhone 12 Support eSIM? (2025): Compatibility & Setup',
    description: 'Full guide to eSIM on iPhone 12: requirements, activation, dual SIM, and travel plan comparison.',
    url: 'https://esimcountry.fyi/blog/does-iphone-12-support-esim',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/blog/iphone-12-esim',
    '/blog/does-iphone-12-have-esim',
    '/blog/is-iphone-12-esim-compatible',
    '/blog/iphone-12-esim-support',
    '/blog/can-iphone-12-use-esim',
  ]

  const faq = [
    { q: 'Does iPhone 12 support eSIM?', a: 'Yes. All iPhone 12 models support eSIM in 2025. Carrier support varies by region.' },
    { q: 'Do I need iOS 16+ for eSIM?', a: 'iOS 16 or later is recommended for the latest transfer features and stability.' },
    { q: 'Can I use dual SIM?', a: 'Yes, one eSIM + one physical SIM simultaneously.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Does iPhone 12 Support eSIM? (2025): Compatibility & Setup', datePublished: '2025-01-20', author: { '@type': 'Organization', name: 'eSIM Country' }, wordCount: 1600 }

  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1>Does iPhone 12 Support eSIM? (2025)</h1>
      <p><strong>Yes.</strong> iPhone 12 supports eSIM with most carriers. Below you will find requirements, activation steps, and tips.</p>

      <blockquote>
        <p className="font-semibold">Quick Answer</p>
        <ul>
          <li>eSIM is supported on all iPhone 12 models.</li>
          <li>Dual SIM: one eSIM + one physical SIM.</li>
          <li>Activation via QR, SM‑DP+ code, or carrier app.</li>
        </ul>
      </blockquote>

      <h2>Requirements</h2>
      <ul>
        <li>Carrier eSIM support</li>
        <li>iOS 16+</li>
        <li>Valid activation (QR or SM‑DP+)</li>
      </ul>

      <h2>Activation Steps</h2>
      <ol>
        <li>Settings → Cellular → Add eSIM</li>
        <li>Follow the on‑screen instructions</li>
      </ol>

      <h2>Compare Plans</h2>
      <p>See <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link> for travel options by destination.</p>

      <h3>Internal Links</h3>
      <ul>
        <li><Link href="/best-esim-plans">/best-esim-plans</Link></li>
        {related.slice(0, 4).map((u) => (
          <li key={u}><Link href={u}>{u}</Link></li>
        ))}
      </ul>
    </main>
  )
} 
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/is-iphone-12-esim-compatible' },
  title: 'Is iPhone 12 eSIM Compatible? (2025): Yes — Requirements & Tips',
  description: 'Yes, iPhone 12 is eSIM compatible. Learn requirements, carrier support, region caveats, and how to activate eSIM safely.',
  openGraph: {
    title: 'Is iPhone 12 eSIM Compatible? (2025): Yes — Requirements & Tips',
    description: 'Compatibility guide for iPhone 12 eSIM: carriers, iOS, region notes, and activation tips.',
    url: 'https://esimcountry.fyi/is-iphone-12-esim-compatible',
    type: 'article',
  },
}

export default function Page() {
  const related = [
    '/iphone-12-esim',
    '/does-iphone-12-have-esim',
    '/does-iphone-12-support-esim',
    '/can-iphone-12-use-esim',
    '/does-iphone-12-pro-have-esim',
  ]

  const faq = [
    { q: 'Is iPhone 12 eSIM compatible?', a: 'Yes. All iPhone 12 models support eSIM. Your carrier must support eSIM in your region.' },
    { q: 'What iOS version is recommended?', a: 'iOS 16 or later for the best eSIM transfer features and reliability.' },
    { q: 'Any region caveats?', a: 'Some regions may limit eSIM features or require in‑store activation. Check your carrier’s policy.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Is iPhone 12 eSIM Compatible? (2025): Yes — Requirements & Tips', datePublished: '2025-01-20', author: { '@type': 'Organization', name: 'eSIM Country' }, wordCount: 1600 }

  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1>Is iPhone 12 eSIM Compatible? (2025)</h1>
      <p><strong>Yes.</strong> All iPhone 12 models are eSIM compatible. Ensure your carrier supports eSIM and that your device is updated.</p>

      <blockquote>
        <p className="font-semibold">Quick Answer</p>
        <ul>
          <li>Compatibility: iPhone 12 / 12 mini / 12 Pro / 12 Pro Max.</li>
          <li>Requirements: iOS 16+, carrier eSIM support, valid activation.</li>
          <li>Dual SIM: one eSIM + one physical SIM.</li>
        </ul>
      </blockquote>

      <h2>Requirements</h2>
      <ul>
        <li>Carrier eSIM availability in your country</li>
        <li>Updated iOS (16+)</li>
      </ul>

      <h2>Compare Plans</h2>
      <p>Use <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link> to compare travel options.</p>

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
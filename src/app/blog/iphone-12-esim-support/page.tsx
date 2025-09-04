import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/iphone-12-esim-support' },
  title: 'iPhone 12 eSIM Support (2025): Carriers, Regions, Requirements',
  description: 'iPhone 12 eSIM support by carriers and regions. Learn requirements, activation, dual SIM, and plan comparison for travel.',
  openGraph: {
    title: 'iPhone 12 eSIM Support (2025): Carriers, Regions, Requirements',
    description: 'Carrier and regional eSIM support for iPhone 12, with setup tips and travel plan comparison.',
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
    { q: 'Which carriers support eSIM on iPhone 12?', a: 'Most major carriers support eSIM on iPhone 12 in 2025. Check your carrier’s site for availability and transfer policies.' },
    { q: 'Any region limitations?', a: 'A few regions require in‑store activation or restrict eSIM features. Verify local policy before travel.' },
    { q: 'Is dual SIM available everywhere?', a: 'Dual SIM works on hardware level (eSIM + physical). Carrier policy may affect features like iMessage pairing and 5G availability.' },
  ]

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'iPhone 12 eSIM Support (2025): Carriers, Regions, Requirements', datePublished: '2025-01-20', author: { '@type': 'Organization', name: 'eSIM Country' }, wordCount: 1600 }

  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1>iPhone 12 eSIM Support (2025)</h1>
      <p>iPhone 12 supports eSIM across models, but carrier policies differ by country. Below is what to know before activating.</p>

      <blockquote>
        <p className="font-semibold">Quick Answer</p>
        <ul>
          <li>Most major carriers support eSIM for iPhone 12.</li>
          <li>Requirements: iOS 16+, carrier eSIM profile, reliable Wi‑Fi.</li>
          <li>Dual SIM: one eSIM + one physical SIM.</li>
        </ul>
      </blockquote>

      <h2>Compare Plans</h2>
      <p>For travel, compare options at <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link>.</p>

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
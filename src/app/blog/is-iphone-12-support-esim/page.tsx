import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://esimcountry.fyi'),
  alternates: { canonical: '/blog/is-iphone-12-support-esim' },
  title: 'Is iPhone 12 Support eSIM? (2025): Yes — How It Works',
  description: 'Yes, iPhone 12 supports eSIM. See how it works, requirements, dual SIM details, and travel plan comparison.',
  openGraph: {
    title: 'Is iPhone 12 Support eSIM? (2025): Yes — How It Works',
    description: 'Explainer: iPhone 12 eSIM support, setup, dual SIM, and travel options.',
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

  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Is iPhone 12 Support eSIM? (2025): Yes — How It Works', datePublished: '2025-01-20', author: { '@type': 'Organization', name: 'eSIM Country' }, wordCount: 1500 }

  return (
    <main className="prose prose-lg max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <h1>Is iPhone 12 Support eSIM? (2025)</h1>
      <p><strong>Yes.</strong> iPhone 12 supports eSIM on all models. Below is how it works and what you need to activate it.</p>

      <h2>Compare Plans</h2>
      <p>See <Link href="/best-esim-plans" className="text-blue-600">Best eSIM Plans</Link> to evaluate travel eSIMs.</p>

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